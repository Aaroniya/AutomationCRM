import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('dolls');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByRole('link', { name: 'dolls for kids' }).click();
  await page.getByTitle('BARBIE', { exact: true }).locator('div').nth(1).click();
  await page.getByTitle('DISNEY PRINCESS').locator('div').nth(1).click();
  //await expect(page.getByText('✕BARBIE✕DISNEY PRINCESSShow')).toBeVisible();
  await expect(page.getByText('Clear all').first()).toBeVisible();
  await page.getByText('Clear all').first().click();
});