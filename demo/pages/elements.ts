import { expect, type Page } from "@playwright/test";
import { BasePage } from "./base.js";
import { threadLocalPage } from "@test-helper/ThreadLocalPage.js";
import { type Locator } from "@playwright/test";
import fsPromise from 'fs/promises'
import fs from 'fs'
export class ElementsPage extends BasePage {

   #page : Page

    constructor(page : Page) {
        super(page);
        this.#page = page; 
    }
    get textBox() { return this.#page.getByRole('link', { name: 'Text Box' })};
	get fullName() {return this.#page.getByRole('textbox', { name: 'Full Name' })};
	get email() {return this.#page.getByRole('textbox', { name: 'name@example.com' })}
	get currentAddress() {return this.#page.getByRole('textbox', { name: 'Current Address' })}
	get permanentAddress() { return this.#page.locator('#permanentAddress')};
	get submitButton() {return this.#page.getByRole('button', { name: 'Submit' })}

  private get homeLink(): Locator {
    return this.#page.getByText('Home', { exact: true });
  }

  private get treeSwitcher(): Locator {
    return this.#page.locator('.rc-tree-switcher');
  }

  private get documentsCheckbox(): Locator {
    return this.#page.getByRole('checkbox', { name: 'Select Documents' });
  }


  private get desktopCheckbox(): Locator {
    return this.#page.getByRole('checkbox', { name: 'Select Desktop' });
  }

  private get downloadsCheckbox(): Locator {
    return this.#page.getByRole('checkbox', { name: 'Select Downloads' });
  }

  // 📌 Navigation list items
  private get radioButtonListItem(): Locator {
    return this.#page.getByRole('listitem').filter({ hasText: 'Radio Button' });
  }

  private get webTablesListItem(): Locator {
    return this.#page.getByRole('listitem').filter({ hasText: 'Web Tables' });
  }

  private get buttonsListItem(): Locator {
    return this.#page.getByRole('listitem').filter({ hasText: 'Buttons' });
  }

  private get linksListItem(): Locator {
    return this.#page.getByRole('listitem').filter({ hasText: /^Links$/ });
  }

// 📌 Radio buttons
  private get yesRadio(): Locator {
    return this.#page.getByRole('radio', { name: 'Yes' });
  }

  private get impressiveRadio(): Locator {
    return this.#page.getByRole('radio', { name: 'Impressive' });
  }

  // 📌 Buttons
  private get clickMeButton(): Locator {
    return this.#page.getByRole('button', { name: 'Click Me', exact: true });
  }

  private get rightClickButton(): Locator {
    return this.#page.getByRole('button', { name: 'Right Click Me' });
  }

  private get doubleClickButton(): Locator {
    return this.#page.getByRole('button', { name: 'Double Click Me' });
  }

  // 📌 Links
  private get elementsLink(): Locator {
    return this.#page.getByRole('link', { name: 'Elements' });
  }

  // 📌 File download/upload
  private get downloadButton(): Locator {
    return this.#page.getByRole('button', { name: 'Download' });
  }

private get chooseFileButton(): Locator {
    return this.#page.getByRole('button', { name: 'Choose File' });
  }

  private get doubleClickMessage() : Locator {
    return this.#page.getByText('You have done a double click')
  }

  private get rightClickMessage() : Locator {
    return this.#page.getByText('You have done a right click')
  }

  private get dynamicClickMessage() : Locator {
    return this.#page.getByText('You have done a dynamic click')
  }

  get #homeffaLink() : Locator {
    return this.#page.locator("//*[@id='dynamicLink']")
  }

  #createdLink(): Locator {
    return this.#page.getByRole('link', { name: 'Created' });
  }
  #createdResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('Created');
  }

  #noContentLink(): Locator {
    return this.#page.getByRole('link', { name: 'No Content' });
  }
  #noContentResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('No Content');
  }

  #movedLink(): Locator {
    return this.#page.getByRole('link', { name: 'Moved' });
  }
  #movedResponse(): Locator {
    return this.#page.getByText('Moved Permanently');
  }

  #badRequestLink(): Locator {
    return this.#page.getByRole('link', { name: 'Bad Request' });
  }
  #badRequestResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('Bad Request');
  }

  #unauthorizedLink(): Locator {
    return this.#page.getByRole('link', { name: 'Unauthorized' });
  }
  #unauthorizedResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('Unauthorized');
  }

  #forbiddenLink(): Locator {
    return this.#page.getByRole('link', { name: 'Forbidden' });
  }
  #forbiddenResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('Forbidden');
  }

  #notFoundLink(): Locator {
    return this.#page.getByRole('link', { name: 'Not Found' });
  }
  #notFoundResponse(): Locator {
    return this.#page.locator('#linkResponse').getByText('Not Found');
  }

  get #download() : Locator {
	  return this.#page.getByRole('button', { name: 'Download' });
  }
  
  get #uploadFile() : Locator {
	  return this.#page.getByRole('button', { name: 'Choose File' })
  }
  
  get #uploadAndDownload() : Locator {
	  return this.#page.getByRole('listitem').getByRole('link', {name : 'Upload and Download'})
  }



    

    public async verifyPresenceOfTextBox() {
        await expect(this.#page.locator('//input[@placeholder="Full Name"]')).toBeVisible();
    }


    public async openTextBox(): Promise<void> {
        await this.textBox.click();
    }
	
	public async fillFullName(fullName : string) : Promise<void> {
		await this.fullName.fill(fullName);
	}
	
	public async fillEmail(email: string) : Promise<void> {
		await this.email.fill(email);
	}
	
	public async fillCurrentAddress(address: string) : Promise<void> {
		await this.currentAddress.fill(address);
	}
	
	public async fillPermanentAddress(address: string) : Promise<void> {
		await this.permanentAddress.fill(address);
	}
	
	public async submit() : Promise<void> {
		await this.submitButton.click();
	} 

	async checkDocuments(): Promise<void> {
    await this.documentsCheckbox.check();
  }

  async uncheckDocuments(): Promise<void> {
    await this.documentsCheckbox.uncheck();
  }

  async checkDesktop(): Promise<void> {
    await this.desktopCheckbox.check();
  }

  async uncheckDesktop(): Promise<void> {
    await this.desktopCheckbox.uncheck();
  }

  async checkDownloads(): Promise<void> {
    await this.downloadsCheckbox.check();
  }

  async uncheckDownloads(): Promise<void> {
    await this.downloadsCheckbox.uncheck();
  }

  async openCheckBox() {
	await this.#page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  }

  async openTreeSwitcher() {
	await this.treeSwitcher.click(); 	
  }
	
  async openRadioButton() {
    await this.radioButtonListItem.click();
  }

  async clickOnYesRadioButton() {
    await this.yesRadio.click();
  }

  async clickOnImpressiveRadioButton() {
    await this.impressiveRadio.click();
  }

  async openButtons() {
    await this.buttonsListItem.click();
  }

  async clickOnDoubleClickButton() {
    await this.doubleClickButton.dblclick();
  }

  async clickOnClickMeButton() {
    await this.clickMeButton.click();
  }

  async clickOnRightClickButton() {
    await this.rightClickButton.click({button : 'right'})
  }

  async verifyDoubleClickMessage() {
    await expect(this.doubleClickMessage).toBeVisible();
  }

  async verifyRightClickMessage() {
    await expect(this.rightClickMessage).toBeVisible();
  }

  async verifyDynamicClickMessage() {
    await expect(this.dynamicClickMessage).toBeVisible();
  }

  async openLinks() {
    await this.linksListItem.click();
  }

  async clickOnHomeLink() {
    await this.homeLink.click();
  }

  async clickCreated() {
    await this.#createdLink().click();
    await expect(this.#page.getByText('201', { exact: true })).toBeVisible();
    await expect(this.#createdResponse()).toBeVisible();
  }

  async clickNoContent() {
    await this.#noContentLink().click();
    await expect(this.#page.getByText('204')).toBeVisible();
    await expect(this.#noContentResponse()).toBeVisible();
  }

  async clickMoved() {
    await this.#movedLink().click();
    await expect(this.#page.getByText('301')).toBeVisible();
    await expect(this.#movedResponse()).toBeVisible();
  }

  async clickBadRequest() {
    await this.#badRequestLink().click();
    await expect(this.#page.getByText('400')).toBeVisible();
    await expect(this.#badRequestResponse()).toBeVisible();
  }

  async clickUnauthorized() {
    await this.#unauthorizedLink().click();
    await expect(this.#page.getByText('401')).toBeVisible();
    await expect(this.#unauthorizedResponse()).toBeVisible();
  }

  async clickForbidden() {
    await this.#forbiddenLink().click();
    await expect(this.#page.getByText('403')).toBeVisible();
    await expect(this.#forbiddenResponse()).toBeVisible();
  }

  async clickNotFound() {
    await this.#notFoundLink().click();
    await expect(this.#page.getByText('404')).toBeVisible();
    await expect(this.#notFoundResponse()).toBeVisible();
  }

  async clickOnHomeFFALink() {
    await this.#homeffaLink.click()
  }

  

  async clickOnUploadAndDownloads() {
	  await this.#uploadAndDownload.click()
  }

  async clickOnDownloadButton() {
    await this.downloadButton.click();
  }

  async uploadFile(path : string) {
    if (!(fs.existsSync(path) && fs.statSync(path).isFile())) {
      throw Error("File Does not exist "+ path)
    } 
    await this.#uploadFile.setInputFiles(path)
  }


  private setInput() {
    this.#page.waitForEvent("dialog")
  }

}