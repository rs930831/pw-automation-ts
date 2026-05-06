// import { HomePage } from '../pages/home.js';
// import { TextBoxPage } from '../pages/textbox.js';
// import { test } from '../../fixtures/share-page.js';


// // Here i am initiating POM class using sharedPage fixtures. However page and context closes when any test fails
// let homePage : HomePage;
// let textBoxPage : TextBoxPage;
// test.beforeAll(async({sharedPage: page}) => {
//    homePage = new HomePage(page);
//    textBoxPage = new TextBoxPage(page);
// });


// test('Navigate to Home Page', async() => {
//     await homePage.navigateToHome();
// });


// test('Navigate to Text Box', async() => {
//     await homePage.clickCardByName("Elements");
//     await homePage.verifyLeftStartMessage('Please select an item from1');
// });



// test('Open and assert', async() => {
//     await textBoxPage.open();
//     await textBoxPage.verifyPresenceOfTextBox();
//     await textBoxPage.waitForSeconds(5);
// });



