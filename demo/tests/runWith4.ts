// import { HomePage } from '../pages/home.js';
// import { TextBoxPage } from '../pages/textbox.js';
// import {  chromium,test, type Browser } from '@playwright/test'


// // Here i am initiating POM class by Manually Creating Browser and Page. However page and context closes when any test fails
// let homePage : HomePage;
// let textBoxPage : TextBoxPage;
// let browser:Browser
// test.beforeAll(async({ }) => {
//    browser = await chromium.launch({timeout:500, headless:true});
//    const context = await browser.newContext();
//    const page = await (context).newPage();
//    homePage = new HomePage(page);
//    textBoxPage = new TextBoxPage(page);
// });



// test('Navigate to Home Page 2', async ({}, testInfo) => {
//   console.log(`Running in worker ${testInfo.workerIndex}`);
//   await homePage.navigateToHome();
// });

// test('Navigate to Text Box 2', async ({}, testInfo) => {
//   console.log(`Running in worker ${testInfo.workerIndex}`);
//   await homePage.clickCardByName("Elements");
//   await homePage.verifyLeftStartMessage('Please select an item from');
// });

// test('Open and assert 2', async ({}, testInfo) => {
//   console.log(`Running in worker ${testInfo.workerIndex}`);
//   await textBoxPage.open();
//   await textBoxPage.verifyPresenceOfTextBox();
//   await textBoxPage.waitForSeconds(5);
// });



// test.afterAll(async({ }) => {
//   browser.close();
// });