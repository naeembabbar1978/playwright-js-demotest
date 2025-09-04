import { test, expect } from '@playwright/test';

test('Google page has title @smoke', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
});
