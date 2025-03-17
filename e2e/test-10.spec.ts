import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Internet#Terminolog');
  await page.getByRole('link', { name: 'Terminology' }).click();
  await page.getByRole('link', { name: 'Infrastructure', exact: true }).click();
});