import { AsyncLocalStorage } from "async_hooks";
import type { Page } from "playwright";
import { test } from '@fixtures/share-page.js';

class ThreadLocalPage {
  private storage = new AsyncLocalStorage<Page>();

  runWithPage<T>(page: Page, fn: () => Promise<T>): Promise<T> {
    return this.storage.run(page, fn);
  }

  get(): Page {
    const page = this.storage.getStore();
    if (!page) {
      throw new Error("No Page bound to current async context");
    }
    return page;
  }
}

export const threadLocalPage = new ThreadLocalPage();