import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.js";

export class HomePage extends BasePage {

    #page : Page

    constructor(page : Page) {
        super(page);
        this.#page = page; 
    }

    get elemets() : Locator { return this.#page.getByRole('link', { name: 'Elements' })}
    get forms() : Locator { return this.#page.getByRole('link', { name: 'Forms' })}
    get alertsFramesWindows() : Locator { return this.#page.getByRole('link', { name: 'Alerts, Frame & Windows' })}
    get widgets() : Locator { return this.#page.getByRole('link', { name: 'Widgets' })}
    get interactions() : Locator { return this.#page.getByRole('link', { name: 'Interactions' })}
    

    async navigateToHome() {await this.#page.goto("https://demoqa.com/")}
    async clickOnElements() { await this.elemets.click();}
    async clickOnForms() { await this.forms.click();}
    async clickOnAlertsFramesWindows() {await  this.alertsFramesWindows.click();}
    async clickOnWidgets() {await  this.widgets.click();}
    async clickOnInteractions() { await this.interactions.click();}
}