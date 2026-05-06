import { test } from '@fixtures/demoqa/common.js'
import Stream from 'node:stream';

test.beforeAll(async({homePage})=> {
    await homePage.clickOnAlertsFramesWindows();
})


test('Simple Alert', { tag : ['@alert']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts()
    pageMap.get('main')?.once('dialog', dialog => {console.log(`Dialog message: ${dialog.message()}`);dialog.accept();});
    await afwPage.clickOnAlertButton()
    await afwPage.sleep(2000);
})

test('Alert with Delay', { tag : ['@alert', '@alertWithDelay']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts()
    pageMap.get('main')?.once('dialog', dialog => {console.log(`Dialog message: ${dialog.message()}`);dialog.accept();});
    await afwPage.clickOnTimerAlertButton()
    await afwPage.sleep(2000);
})

test('Confirm Alert', { tag : ['@alert', '@confirm']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts()
    await afwPage.clickOnConfirmButton();
    (await pageMap.get('main')?.waitForEvent('dialog'))?.accept()
    await afwPage.sleep(2000);
})

test('Cancel Alert', { tag : ['@alert', '@confirm']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts()
    await afwPage.clickOnConfirmButton();
    (await pageMap.get('main')?.waitForEvent('dialog'))?.dismiss()
    await afwPage.sleep(2000);
})

test('Prompt Alert', { tag : ['@alert', '@prompt']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts();
    await afwPage.clickOnPromptButton();
    (await pageMap.get('main')?.waitForEvent('dialog'))?.accept("Test String");
    await afwPage.sleep(2000);
    await afwPage.sleep(2000);
})

test('Prompt Alert Dismiss', { tag : ['@alert','@prompt']}, async({afwPage, pageMap})=> {
    await afwPage.clickOnAlerts()
    pageMap.get('main')?.once('dialog', dialog => {console.log(`Dialog message: ${dialog.message()}`); dialog.dismiss();});
    await afwPage.clickOnPromptButton()
    await afwPage.sleep(2000);
})


// test.only('Random test', { tag : ['@alert']}, async({sharedPage})=> {
//     await sharedPage.goto('https://playwright.dev/docs/actionability');
//     const table1 = sharedPage.getByRole('table');
//     await expect(sharedPage.getByRole('table').filter({has : sharedPage.getByRole('columnheader', { name : 'Action'})})).toBeVisible();
//     const rows = table1.getByRole('row')
//     const map : Map<string, number> = new Map();
//     const coulmnHeader = table1.getByRole('columnheader')
//     const coulmnCount = await coulmnHeader.count()
    
//     for(let i=0; i<coulmnCount; i++) {
//         map.set((await coulmnHeader.nth(i).textContent()) ?? "NOTVALID",  i);
//     }
//     map.forEach((v, k)=> console.log(`Key : ${k}, Value : ${v}`))

//     console.log(await rows.count())
//     for(let i=0; i < (await rows.count()); i++) {
//         let index = map.get('Action')
//         if(index!==undefined || index!==null) {
//             console.log(await rows.nth(i).innerHTML())
//             console.log()
//         }
//     }
    


//     // const firstRow = rows.first();
//     // console.log(await firstRow.textContent())
//     //console.log(await firstRow.getByRole('cell').first().getByRole('rowheader').textContent())
//     // console.log(await rows.count())
//     table1
// })

