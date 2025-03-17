import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await page.getByRole('link', { name: 'Desktops', exact: true }).click();
  await page.getByRole('link', { name: 'PC (0)' }).click();
  await page.getByRole('link', { name: '-PC (0)' }).click();
  await page.getByRole('link', { name: '-Mac (1)' }).click();
  await page.getByRole('link', { name: 'iMac' }).first().click();
});