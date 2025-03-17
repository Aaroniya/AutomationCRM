import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');
  await page.getByLabel('Enter From station. Input is').getByRole('searchbox').click();
  await page.getByLabel('Enter From station. Input is').getByRole('searchbox').fill('dindigul');
  await page.getByText('DINDIGUL JN - DG (KODAIKANAL)').click();
  await page.getByLabel('Enter To station. Input is').getByRole('searchbox').click();
  await page.getByLabel('Enter To station. Input is').getByRole('searchbox').fill('chennai');
  await page.getByRole('option', { name: 'CHENNAI EGMORE - MS (CHENNAI' }).click();
  await page.locator('div').filter({ hasText: /^GENERAL$/ }).nth(3).click();
  await page.getByRole('option', { name: 'LADIES' }).click();
  await page.locator('div').filter({ hasText: /^All Classes$/ }).nth(1).click();
  await page.getByText('Sleeper (SL)').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
});