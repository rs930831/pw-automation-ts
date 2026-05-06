import type { Page, Locator } from '@playwright/test'
import { BasePage } from './base.js'

const years = [
  2021,2022,2023,2024,2025,
  2026,2027,2028,2029,2030,2031
] as const;

type Year = typeof years[number];

const times = [
  '00:00','00:15','00:30','00:45',
  '01:00','01:15','01:30','01:45',
  '02:00','02:15','02:30','02:45',
  '03:00','03:15','03:30','03:45',
  '04:00','04:15','04:30','04:45',
  '05:00','05:15','05:30','05:45',
  '06:00','06:15','06:30','06:45',
  '07:00','07:15','07:30','07:45',
  '08:00','08:15','08:30','08:45',
  '09:00','09:15','09:30','09:45',
  '10:00','10:15','10:30','10:45',
  '11:00','11:15','11:30','11:45',
  '12:00','12:15','12:30','12:45',
  '13:00','13:15','13:30','13:45',
  '14:00','14:15','14:30','14:45',
  '15:00','15:15','15:30','15:45',
  '16:00','16:15','16:30','16:45',
  '17:00','17:15','17:30','17:45',
  '18:00','18:15','18:30','18:45',
  '19:00','19:15','19:30','19:45',
  '20:00','20:15','20:30','20:45',
  '21:00','21:15','21:30','21:45',
  '22:00','22:15','22:30','22:45',
  '23:00','23:15','23:30','23:45'
] as const;

type TimeSlot = typeof times[number];

const months = [
  'January','February','March','April',
  'May','June','July','August',
  'September','October','November','December'
] as const;

type Month = typeof months[number];

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
] as const;

type Date = typeof dates[number]

type DateNumber = typeof dates[number];


export class WidgetsPage extends BasePage {
    
    
    async navigateToWidgets() {
        this.#page.getByRole('link', { name: 'Widgets' }).click()
    }

    async clickOnAutoComplete() {
        await this.#page.getByRole('link', { name: 'Auto Complete' }).click()
    }

    #page : Page
    constructor(page : Page){
        super(page)
        this.#page = page;
    }

    // AUTO Complete
    get #multiColorInput() : Locator {
        return this.#page.locator('#autoCompleteMultipleInput').describe('Type multiple color names')
    }

    get #singleColotInput() : Locator {
        return this.#page.locator('#autoCompleteSingleInput').describe('Type single color name')
    }


    #getColorOption(nameStr : string) : Locator {
        return this.#page.getByRole('option', {name : nameStr}).describe(`Color option ${nameStr}`)
    }

    #getColorRemoveLocator(color : string) {
        return this.#page.getByRole('button', { name: `Remove ${color}` })
    }

    get #simpleDatePicker() {
        return this.#page.locator('#datePickerMonthYearInput');
    }

    get #complexDatePickerYear() : Locator {
        return this.#page.getByRole('dialog', { name: 'Choose Date and Time' }).locator('button[class*="year"]')
    }

    get #complexDatePickerMonth() : Locator {
        return this.#page.getByRole('dialog', { name: 'Choose Date and Time' }).locator('button[class*="month"]')
    }



    async inputMultiColor(...inputs : string[]) {
        for(let input of inputs) {
            await this.#multiColorInput.fill(input);
            await this.#getColorOption(input).click();
        }
    }

    async removeMultiColor(...colors : string[]) {
         for await (const color of colors) {
            await this.#getColorRemoveLocator(color).click()
         }
    }

    async inputSingleColr(color : string) {
        await this.#singleColotInput.fill(color);
         await this.#getColorOption(color).click();
    }

    async clickOnDatePickr() {
        await this.#page.getByRole('link', { name: 'Date Picker' }).click()
    }

    async openComplexDatePicker() {
        await this.#page.locator('#dateAndTimePickerInput').click();
    }

    async setDatePicker(year : Year, month : Month, date : Date, time : TimeSlot) {
        await this.#complexDatePickerYear.click();
        await this.#page.getByRole('button', {name : `${year}`, exact : true}).click();
        await this.#complexDatePickerMonth.click()
        await this.#page.getByRole('button', { name: `${month}` }).click();
        await this.#page.getByRole('gridcell', { name: `${month}` }).filter({ hasText : `${date}`}).first().click()
        await this.#page.getByRole('option', { name: `${time}` }).click();
    }

    async setSimpleDatePicker(year : Year, month : Month, date : Date) {
        await this.#simpleDatePicker.click()
        await this.#page.getByRole('combobox').and(this.#page.locator('select[class*="month"]')).click();
        await this.#page.getByRole('button', { name: `${month}` }).click();
        await this.#page.getByRole('combobox').and(this.#page.locator('select[class*="year"]')).click();
        await this.#page.getByRole('button', {name : `${year}`, exact : true}).click();
        await this.#page.getByRole('gridcell', { name: `${month}` }).filter({ hasText : `${date}`}).first().click();
    }


    private async test() {
        this.#page.getByRole('dialog', { name: 'Choose Date and Time' }).locator('button[class*="month"]')
        this.#page.getByRole('gridcell', { name: 'May' }).filter({ hasText : '1'})
        this.#page.getByRole('combobox').and(this.#page.locator('select[class*="month"]'))
        this.#page.getByRole('button')
    }



}