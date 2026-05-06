import type { Frame, FrameLocator, Locator, Page  } from "@playwright/test";
import { expect } from '@playwright/test'
import path from 'path';
import fs from 'fs/promises';
import { BasePage } from "./base.js";

export class AlertFramesWindowPage extends BasePage {

    #page : Page

    constructor(page : Page) {
        super(page)
        this.#page = page;
    }

    get #browserWindows() { return this.#page.getByRole('link', {name : 'Browser Windows'}).describe('Browser Window') };
    get #alerts() { return this.#page.getByRole('link', {name : 'Alerts'}).describe('Alerts') };
    get #frames() { return this.#page.getByRole('link', {name : 'Frames', exact : true}).describe('Frames') };
    get #nestedFrames() {return this.#page.getByRole('link', {name : 'Nested Frames'}).describe('Nested Frames')};
    get #modalDialogs() {return this.#page.getByRole('link', {name : 'Modal Dialogs'}).describe('Modal Dialogs')};
    get #thisIsSamplePage() {return this.#page.getByRole('heading', { name: 'This is a sample page' }).describe('Sample Page Heading')}


    async clickOnBrowserWindows() {await this.#browserWindows.click()}
    async clickOnAlerts() {await this.#alerts.click()}
    async clickOnFrames() {await this.#frames.click()}
    async clickOnNestedFrames() {await this.#nestedFrames.click()}
    async clickOnModalDialogs() {await this.#modalDialogs.click()}

    // Browser Windows
    get #newTab() {return this.#page.getByRole('button', {name : 'New Tab'}).describe('NewTab Button')};
    get #newWindow() { return this.#page.getByRole('button', { name : 'New Window', exact : true }).describe('NewWindow Button')}
    get #newWindowMessage() {return this.#page.getByRole('button', { name : 'New Window Message'}).describe('NewWindowMessage Button')}
    get #newWindowMessage2() { return this.#page.getByText('Knowledge increases by').describe('NewWindow Message Text')}

    async clickOnNewTabButton(){ await this.#newTab.click() }
    async verifyNewTab() { await expect(this.#thisIsSamplePage).toBeVisible()}
    async clickOnNewWindowButton(){ await this.#newWindow.click() }
    async clickOnNewWindowMessageButton(){ await this.#newWindowMessage.click() }
    async verifyNewWindowMessage2() { await expect(this.#newWindowMessage2).toBeVisible()}

    // Alerts
    get #alertButton() { return this.#page.locator('#alertButton')}
    get #timerAlertButton() { return this.#page.locator('#timerAlertButton')}
    get #confirmButton() { return this.#page.locator('#confirmButton')}
    get #promptButton() { return this.#page.locator('#promtButton')}

    async clickOnAlertButton(){ await this.#alertButton.click() }
    async clickOnTimerAlertButton() { await this.#timerAlertButton.click() }
    async clickOnConfirmButton(){ await this.#confirmButton.click() }
    async clickOnPromptButton(){ await this.#promptButton.click() }

    // Frames

    #frame1Xpath = "//*[@id='frame1Wrapper']/iframe"
    #frame2Xpath = "//*[@id='frame2Wrapper']/iframe"

    #frame1Locator(page : FrameLocator | Page) : FrameLocator {
        const frameLocator = page.frameLocator(this.#frame1Xpath)
        return frameLocator;
    }

    #frame2Locator(page : FrameLocator | Page) {
        return page.frameLocator(this.#frame2Xpath)
    }

    
    get #thisIsAPageFrame1() : Locator {
        return this.#page.frameLocator(this.#frame1Xpath).getByRole('heading', { name : 'This is a sample page'})
    }


    get #thisIsAPageFrame2() {
        return this.#frame2Locator(this.#page).getByRole('heading', { name : 'This is a sample page'})
    }

    async verifyFirstFrameText() {
        await expect(this.#thisIsAPageFrame1).toBeVisible();
    }

    async verifySecondFrameText() {
        await expect(this.#thisIsAPageFrame1).toBeVisible();
    }

    // Nested Frames
    #frame1Child1 = this.#frame1Xpath + "//iframe"

    #parentIframeText(page : Page | Locator) {
         return page.getByText(/^Parent frame$/).describe('Parent Frame Text Element');
    }

    #childIframeText(page : Page | Locator) {
        return page.getByText(/^Child Iframe$/).describe('Child Frame Text Element');
    }

    async verifyParentIframeText() {
       const locator : Locator = this.#page.locator('#frame1').contentFrame().getByText('Parent frame')
       await expect(locator).toBeVisible({timeout : 20000});
    }

    async verifyChildIframeText() {
        const locator : Locator = this.#page.locator('#frame1').contentFrame().locator('iframe').contentFrame().getByText('Child Iframe')
        await expect(locator).toBeVisible({timeout : 20000});
    }

    // Modal : Yet to Build

    
    
    private async test() {
        this.#page.getByRole('table').filter({has : this.#page.getByRole('columnheader', {name : 'Action'})})
    }

    
}