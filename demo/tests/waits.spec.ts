// import {test } from '@fixtures/share-page.js'
// import { setHeapSnapshotNearHeapLimit } from 'node:v8';

// test('sample waits', async ({sharedPage}) => {
//     sharedPage.waitForLoadState('domcontentloaded');
//     sharedPage.waitForEvent("popup");
//     sharedPage.waitForURL("**/newpage.html")
//     sharedPage.waitForTimeout(2000);
//     sharedPage.waitForSelector('#idOfElement', {state:"attached", strict:true, timeout: 4000});

//     // Get all new pages (including popups) in the context
// // sharedPage.context().on('page', async sharedPage => {
// //   await sharedPage.waitForLoadState();
// //   console.log(await sharedPage.title());
// // });

// // Start waiting for new page before clicking. Note no await.
// const pagePromise = sharedPage.context().waitForEvent('page');
// await sharedPage.getByText('open new tab').click();
// const newPage = await pagePromise;
// // Interact with the new page normally.
// await newPage.getByRole('button').click();
// console.log(await newPage.title());

// });