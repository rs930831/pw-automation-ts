import { expect } from '@playwright/test';
import { test} from '@fixtures/share-page.js'

test('test', async ({ sharedPage }) => {
  await sharedPage.goto('https://example.com/');
  await sharedPage.getByRole('link', { name: 'Learn more' }).click();
  await expect(sharedPage.getByRole('link', { name: 'Domains', exact: true })).toBeVisible();
});

test('test 2', async ({ sharedPage }) => {
  await expect(sharedPage.locator('#header').getByRole('link', { name: 'Protocols' })).toBeVisible();
  await expect(sharedPage.getByRole('link', { name: 'Numbers' })).toBeVisible();
  await expect(sharedPage.getByRole('link', { name: 'About', exact: true })).toBeVisible();
  await expect(sharedPage.getByRole('link', { name: 'RFC 6761' })).toBeVisible();
  await expect(sharedPage.getByRole('link', { name: 'IANA-managed Reserved Domains' })).toBeVisible();
  await sharedPage.getByRole('link', { name: 'RFC 2606' }).click();
  await sharedPage.goto('https://www.iana.org/help/example-domains');
  await sharedPage.getByRole('link', { name: 'Homepage' }).click();
  await sharedPage.getByRole('link', { name: 'Root Zone Management' }).click();
  await sharedPage.getByRole('link', { name: 'Root Zone Database' }).click();
  await sharedPage.getByRole('link', { name: '.aaa' }).click();
});