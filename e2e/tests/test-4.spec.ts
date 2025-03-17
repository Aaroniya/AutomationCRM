import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Check Boxes' }).click();
  await page.getByRole('checkbox', { name: 'Checkbox 1' }).check();
  await page.getByRole('checkbox', { name: 'Checkbox 2' }).uncheck();
});