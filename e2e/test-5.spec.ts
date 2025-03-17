import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByLabel('Mobiles').click();
  await page.getByRole('link', { name: 'Realme', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'POCO X7 5G (Yellow, 128 GB)' }).click();
  const page1 = await page1Promise;
  await page1.getByText('More', { exact: true }).click();
  await page1.getByRole('link', { name: 'Login' }).click();
  await page.getByTitle('Apple').locator('div').nth(1).click();
  await page.locator('div').filter({ hasText: /^₹10000₹15000₹20000₹30000₹30000\+$/ }).getByRole('combobox').selectOption('15000');
  await page.goto('https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&otracker=nmenu_sub_Electronics_0_Realme&p%5B%5D=facets.brand%255B%255D%3DApple&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D15000');
  await page.getByText('4 GB', { exact: true }).click();
});