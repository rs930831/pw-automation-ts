import { AlertFramesWindowPage } from '@demo/pages/afw.js';
import { test } from '@fixtures/demoqa/common.js'
import { sleep } from '@fixtures/demoqa/common.js';
import { assert } from 'node:console';

test.beforeAll(async({homePage})=> {
    await homePage.clickOnAlertsFramesWindows();
})


test("New Tab", { tag : ['@newTab', '@npage'] } ,async ({afwPage, pageMap}) =>  {
    await afwPage.clickOnBrowserWindows()
    const popupPromise = pageMap.get('main')?.waitForEvent('popup');
    await afwPage.clickOnNewTabButton()
    const newPage = await popupPromise;
    assert(newPage)
    if(newPage) {
        pageMap.set('newTab', newPage)
        const afwPage2 = new AlertFramesWindowPage(newPage)
        await afwPage2.verifyNewTab();
    }
    await sleep(2000)
});


test('New Window', { tag : ['@newWindow', '@npage']},  async({ afwPage, pageMap })=> {
    await pageMap.get('main')?.bringToFront()
    await afwPage.clickOnBrowserWindows()
    const popupPromise = pageMap.get('main')?.waitForEvent('popup');
    await afwPage.clickOnNewWindowButton()
    const newPage = await popupPromise;
    assert(newPage)
    if(newPage) {
        pageMap.set('newWindow', newPage)
        const afwPage2 = new AlertFramesWindowPage(newPage)
        await afwPage2.verifyNewTab();
    }
    await sleep(2000);
})

test('New Window Message', { tag : ['@newWindowMessage', '@npage']},  async({ afwPage, pageMap })=> {
    await pageMap.get('main')?.bringToFront()
    await afwPage.clickOnBrowserWindows()
    const popupPromise = pageMap.get('main')?.waitForEvent('popup');
    await afwPage.clickOnNewWindowButton()
    const newPage = await popupPromise;
    assert(newPage)
    if(newPage) {
        pageMap.set('newWindowMessage', newPage)
        const afwPage2 = new AlertFramesWindowPage(newPage)
        await afwPage2.verifyNewTab();
    }
    await pageMap.get('main')?.bringToFront()
    await sleep(2000);
})