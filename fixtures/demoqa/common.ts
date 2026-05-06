import { test as base } from '@fixtures/share-page.js'
import { WidgetsPage } from '@demo/pages/widgets.js'
import { AlertFramesWindowPage } from '@demo/pages/afw.js'
import { ElementsPage } from '@demo/pages/elements.js'
import type { Page } from '@playwright/test'
import { HomePage } from '@demo/pages/home.js'

type Fixture = {
    //pageObj : Page,
    widgetPage : WidgetsPage,
    afwPage : AlertFramesWindowPage,
    elementsPage : ElementsPage,
    homePage : HomePage,
}

export const test = base.extend<{}, Fixture>({
    sharedPage : [async({ sharedPage}, use)=> {await sharedPage.goto('/');await use(sharedPage)}, { scope : 'worker'}],
    widgetPage : [async({sharedPage}, use)=> {await use(new WidgetsPage(sharedPage))}, { scope : 'worker'}],
    elementsPage : [async({sharedPage}, use)=> {await use(new ElementsPage(sharedPage))}, { scope : 'worker'}],
    afwPage : [async({sharedPage}, use)=> {await use(new AlertFramesWindowPage(sharedPage))}, { scope : 'worker'}],
    homePage : [async({sharedPage}, use)=> {await use(new HomePage(sharedPage))}, { scope : 'worker'}],
})


export const sleep = (ms: number): Promise<void> =>
new Promise(resolve => setTimeout(resolve, ms));