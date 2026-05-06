import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  
});




// test('Text Box', async({page}) => {
// 	await page.goto('https://demoqa.com/');
// 	await page.locator("//div[@class='category-cards']//div[@class='card-body'][.//h5[text()='Elements']]").click();
// 	await page.locator("//ul[@class='menu-list']//li[.//span[text()='Text Box']]").click();
// 	await expect(page.locator("//input[@id='userName']")).toBeVisible();
// });