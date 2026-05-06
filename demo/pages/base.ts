import type { Page, Download, FileChooser  } from "@playwright/test";
import path from 'path';
import fs from 'fs/promises';

type AutomationEvent = 'popup' | 'request' | 'response' | 'requestfinished' | 'requestfailed' | 'console' | 'download' | 'filechooser' | 'frameattached' | 'frameretached' | 'framenavigated' | 'load' | 'domcontentloaded' | 'websocket' | 'worker';

type eventType = keyof AutomationEvent;

interface DownloadOptions {
  savePath?: string;
  fileName?: string;
  timeout?: number;
}

interface UploadOptions {
  files: Parameters<FileChooser['setFiles']>[0];
  timeout?: number;
}


export class BasePage {

    readonly #page: Page;

    constructor(page : Page) {
        this.#page = page
    }

    sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

    public waitForSeconds(seconds: number):void {
        this.#page.waitForTimeout(seconds*1000);
    }

    /**
   * Handles a popup triggered by the given action.
   * @param trigger - A function that triggers the popup (e.g., click)
   * @returns The popup Page object
   */
  async handlePopup(trigger: () => Promise<void>): Promise<Page> {
    const [popup] = await Promise.all([
      this.#page.waitForEvent('popup'),
      trigger(),
    ]);
    await popup.waitForLoadState();
    return popup;
  }

  async waitForDownload(
  triggerFn: () => Promise<void>,
  options: DownloadOptions = {}
): Promise<string> {
  const {
    savePath = './downloads',
    fileName,
    timeout = 30_000,
  } = options;

  const [download] = await Promise.all([
  this.#page.waitForEvent('download', { timeout }),
  triggerFn(),
]) as [Download, void];

  const failure = await download.failure();
  if (failure) {
    throw new Error(`Download failed: ${failure}`);
  }

  const resolvedName = fileName ?? download.suggestedFilename();
  const fullPath = path.resolve(savePath, resolvedName);

  await fs.mkdir(savePath, { recursive: true });
  await download.saveAs(fullPath);

  return fullPath;
}

public async waitForUpload(
  triggerFn: () => Promise<void>,
  options: UploadOptions
): Promise<void> {
  const { files, timeout = 30_000 } = options;

  const [fileChooser] = await Promise.all([
    this.#page.waitForEvent('filechooser', { timeout }),
    triggerFn(),
  ]) as [FileChooser, void];

  await fileChooser.setFiles(files as Parameters<FileChooser['setFiles']>[0]);
}


async waitForDownloadPromise() {
  return this.#page.waitForEvent('download');
}

}
