import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Test Login Page' }).click();
  await page.getByRole('link', { name: 'Test Login Page' }).click();
});