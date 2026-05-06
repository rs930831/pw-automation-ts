import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export type SharedPageFixture = { 
  sharedPage: Page,
  pageMap : Map<string, Page>
};

// Page gets closed if there are any of the test fails. It's kind of good too. Rethink on it
export const test = base.extend<{}, SharedPageFixture>({
  sharedPage: [
    async ({ browser }, use) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      // Inside a test
      await use(page);
      if (!page.isClosed()) {
        await page.close();
      }
      await context.close();
    },
    { scope: 'worker' }
  ],
  pageMap : [async({sharedPage}, use) => {
    const map = new Map<string, Page>;
    map.set('main', sharedPage);
    await use(map)
    map.clear()
  } , {scope : 'worker'}]
});

export { expect };

