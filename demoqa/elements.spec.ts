import { ElementsPage } from '@demo/pages/elements.js';
import { HomePage } from '@demo/pages/home.js';
import { test } from '@fixtures/demoqa/common.js'
import { sleep } from '@fixtures/demoqa/common.js';
import type { Page } from '@playwright/test';

//test.describe.configure({mode : 'parallel'})

test.beforeAll(async({homePage})=> {
    await homePage.clickOnElements();
})

test("text Box", { tag :['@elements'] }, async ({elementsPage}) =>  {
    await elementsPage.openTextBox();
    await elementsPage.fillFullName("Raj S");
    await elementsPage.fillEmail("name@example.com")
    await elementsPage.fillCurrentAddress("Current Address")
    await elementsPage.fillPermanentAddress("Permanent Address")
    await elementsPage.submit();
});


test("Check Box", { tag :['@elements'] }, async ({elementsPage}) =>  {
    await elementsPage.openCheckBox();
    await elementsPage.openTreeSwitcher();
    await elementsPage.checkDocuments();
    await elementsPage.checkDesktop();
    await elementsPage.checkDownloads();
    await elementsPage.uncheckDesktop();
    await elementsPage.uncheckDocuments();
    await elementsPage.uncheckDownloads();
});

test("Radio Button", { tag :['@elements'] }, async({elementsPage})=> {
    await elementsPage.openRadioButton();
    await elementsPage.clickOnYesRadioButton();
    await elementsPage.clickOnImpressiveRadioButton();
})

test('Buttons', { tag :['@elements'] }, async ({elementsPage})=> {
    await elementsPage.openButtons();
    await elementsPage.clickOnDoubleClickButton();
    await elementsPage.verifyDoubleClickMessage()
    await elementsPage.clickOnRightClickButton()
    await elementsPage.verifyRightClickMessage()
})

test('Links 1' , { tag :['@elements'] }, async ({ elementsPage, pageMap}) => {
    await elementsPage.openLinks()
    const newPage: Page = await elementsPage.handlePopup(() => elementsPage.clickOnHomeLink());
    //await sleep(2000)
    pageMap.set("home", newPage);
    const homePage = new HomePage(newPage);
    await homePage.clickOnElements();
    //await sleep(2000)
    await newPage.close({reason : "Played Enough"});

    const newPage2 = await elementsPage.handlePopup(() => elementsPage.clickOnHomeFFALink());
    pageMap.set("home2", newPage2)
    const homepage2 = new HomePage(newPage2);
    await homepage2.clickOnInteractions()
    await newPage2.close({reason : "Played Enough"});  
})

test('Links 2', { tag :['@elements'] }, async({elementsPage}) => {
    await elementsPage.openLinks()
    await elementsPage.clickCreated();
    await elementsPage.clickNoContent();
    await elementsPage.clickMoved()
    await elementsPage.clickBadRequest()
    await elementsPage.clickUnauthorized();
    await elementsPage.clickForbidden()
    await elementsPage.clickNotFound()
})


test('Upload and Download', { tag : ['@elements']} , async ({elementsPage})=> {
    await elementsPage.clickOnUploadAndDownloads();
    const downloadPromise = elementsPage.waitForDownloadPromise();
    await elementsPage.clickOnDownloadButton();
    const download = await downloadPromise;
    console.log("Temp Path : " + await download.path())
    console.log("Suggested File name : " + download.suggestedFilename())  
    download.saveAs('./downloads/'+download.suggestedFilename())  
})



test('Upload test', { tag :['@elements'] }, async ({elementsPage}) => {
    await elementsPage.clickOnUploadAndDownloads();
    await elementsPage.uploadFile('.\downloads\sampleFile.jpeg');
    await sleep(3000)
})





// import { ElementsPage } from '@demo/pages/elements.js';
// import { HomePage } from '@demo/pages/home.js';
// import { sleep } from '@fixtures/demoqa/elements/elements.js';
// import { test } from '@fixtures/share-page.js'

// let elementsPage : ElementsPage;
// let homePage : HomePage;

// test.beforeEach(async({sharedPage})=> {
//    elementsPage  = (new ElementsPage(sharedPage));
//    homePage = new HomePage(sharedPage)
//    await homePage.navigateToHome();
//    await homePage.clickOnElements();
// })


// test("text Box", async ({sharedPage}) =>  {
//     await elementsPage.fillFullName("Raj S");
//     await elementsPage.fillEmail("name@example.com")
//     await elementsPage.fillCurrentAddress("Current Address")
//     await elementsPage.fillPermanentAddress("Permanent Address")
//     await elementsPage.submit();
//     await sleep(2000)
// });

// test("Check box", async ({sharedPage}) =>  {
//     await elementsPage.openCheckBox();
//     await elementsPage.openTreeSwitcher();
//     await elementsPage.checkDocuments();
//     await elementsPage.checkDesktop();
//     await elementsPage.checkDownloads();
//     await elementsPage.uncheckDesktop();
//     await elementsPage.uncheckDocuments();
//     await elementsPage.uncheckDownloads();
// });









test.only('title', {tag : '@elements'}, async({page}) => {
    await page.goto('')
    await page.getByRole('link', {name : 'Elements'}).click()
    await sleep(2000)
})