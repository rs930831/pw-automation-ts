// // Declares a test.

// // test(title, body)
// // test(title, details, body)

// //npx playwright test --grep  "@regression|@smoke"
// //npx playwright test -g  "@regression|@smoke"

// //npx playwright test --grep @smoke
// //npx playwright test -g @smoke

// //npx playwright test --grep @regression
// //npx playwright test -g @regression

// import { test, expect } from '@playwright/test';

// test('basic test', {
//     tag : ['@smoke', '@regression', '@tag1', '@tag2']
// }, async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // ...
// });

// test('another test @smoke', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // ...
// });


// test('another test to check @smoke', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // ...
// });



// test('creepy one', { tag : '@regression' } ,async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // ...
// });