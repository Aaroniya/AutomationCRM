import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('link', { name: 'Checkboxes' })).toBeVisible();
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').first().check();
});