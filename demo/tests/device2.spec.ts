// import { test, expect, devices } from '@playwright/test';

// test.use({
//   ...devices['Galaxy S24'],
// });

// test.only('test', async ({ page }) => {
//   await page.goto('https://www.amazon.in/');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Shoes Nike');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
//   await page.getByRole('button', { name: 'Go', exact: true }).click();
//   await page.getByRole('link', { name: 'colours available' }).first().click();
//   await page.getByRole('radio', { name: 'Colour is White Current Price' }).click();
//   await page.getByRole('radio', { name: '9 UK' }).click();
// });