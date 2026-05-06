// import { test, expect } from '../../fixtures/share-page.js';
// // This should be the approach for using shared page skip if any fails
// // Retry will run all from the beginning
// test.describe.configure({mode : "serial", retries: 2, timeout : 30000})

// test.beforeAll(async ({}, testInfo) => {
//   console.log('Before tests');
//   console.log(`Retry Count : ${testInfo.retry}`)
// });

// test.afterAll(async () => {
//   console.log('After tests');
// });


// test('first test', async () => {
//   console.log("First Tst");
// });

// test('second test', async () => {
//   console.log("Second Tst");
//   throw new Error("Failing to Test");
// });

// test('second third', {tag: ["@tag1", "@tag2"],annotation : [{type: "annotation1", description : "ann1 desc"}]}, async () => {
//   console.log("Second Tst");
//   throw new Error("Failing to Test");
// });

// test('basic test', async () => {
//   console.log("Third Tst");
// });





