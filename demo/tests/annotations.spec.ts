// import { test, expect } from '@playwright/test';

// test.describe('report tests', {
//   annotation: { type: 'category', description: 'report' },
// }, () => {
//   test('test report header', async ({ page }) => {
//     // ...
//   });

//   test('test full report', {
//     annotation: [
//       { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
//       { type: 'ticket', description: 'https://github.com/microsoft/playwright/issues/23182' },
//     ],
//   }, async ({ page }) => {
//     // ...
//   });
// });



// test('basic test', {
//   annotation: {
//     type: 'basics test',
//     description: 'desc',
//   },
// }, async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   // ...
// });