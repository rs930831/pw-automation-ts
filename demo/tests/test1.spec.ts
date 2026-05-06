// // tests/sequential.spec.ts
// import { test, expect } from '../../fixtures/share-page.js'; // import your custom test with sharedPage

// // If there any failure in any of step below. context and page is closed and next step will get new instance of page and context
// test('Login flow sequential steps', async ({ sharedPage }) => {
//   await test.step('Navigate to login page', async () => {
//     await sharedPage.goto('https://practicetestautomation.com/practice-test-login/');
//     await expect(sharedPage).toHaveURL(/practice-test-login/);
//   });

//   await test.step('Enter username', async () => {
//     await sharedPage.getByRole('textbox', { name: 'Username' }).fill('student');
//     await expect(sharedPage.getByRole('textbox', { name: 'Username' })).toHaveValue('student');
//   });

//   await test.step('Enter password', async () => {
//     await sharedPage.getByRole('textbox', { name: 'Password' }).fill('Password123');
//     await expect(sharedPage.getByRole('textbox', { name: 'Password' })).toHaveValue('Password123');
//   });

//   await test.step('Submit login and logout', async () => {
//     await sharedPage.getByRole('button', { name: 'Submit' }).click();
//     await expect(sharedPage.getByRole('link', { name: 'Log out' })).toBeVisible();
//     await sharedPage.getByRole('link', { name: 'Log out' }).click();
//     await expect(sharedPage).toHaveURL(/practice-test-login/);
//   });
// });