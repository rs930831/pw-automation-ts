// import { test, expect } from '../../fixtures/share-page.js';

// //let failFastTriggered = false;
// // test.beforeEach(async ({}, testInfo) => {
// //   if (failFastTriggered) {
// //     // Instead of skipping, force fail
// //     throw new Error(`Fail-fast: Previous test failed, so "${testInfo.title}" is marked failed.`);
// //   }
// // });


// test.describe.serial('critical flow', () => {
//   test('step 1', async ({ sharedPage }) => {
//     await sharedPage.goto('https://example.com');
//     await expect(sharedPage.locator('h1')).toHaveText('Expected'); // if this fails, all others fail
//   });

//   test('step 2', async ({ sharedPage }) => {
//     await sharedPage.click('#next'); // will be forced to fail if step 1 failed
//   });

//   test('step 3', async ({ sharedPage }) => {
//     await sharedPage.click('#finish'); // also fails if any earlier test failed
//   });
// });