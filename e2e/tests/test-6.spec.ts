import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.douglas.de/de');
  await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).click();
  await page.getByTestId('uc-accept-all-button').click();
  await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).click();
  await page.getByRole('link', { name: 'Unisex Parfum' }).click();
  await page.waitForTimeout(1000);
  await page.getByTestId('classificationClassName').click();
  await page.getByRole('checkbox', { name: 'Eau de Parfum' }).getByRole('checkbox').check();
  await page.goto('https://www.douglas.de/de/c/parfum/unisex-duefte/parfum/010301?q=:relevance:classificationClassName:Eau+de+Parfum');
  await page.locator('.product-tile__image-wrapper > .link').first().click();
  await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).click();
  await page.getByRole('link', { name: 'Unisex Parfum' }).click();
  await page.getByTestId('brand').click();
  await page.getByRole('checkbox', { name: '4711', exact: true }).getByRole('checkbox').check();
  await page.goto('https://www.douglas.de/de/c/parfum/unisex-duefte/parfum/010301?q=:relevance:brand:b0947');
  await page.getByTestId('gender').click();
  await page.getByTestId('gender').click();
  await page.getByTestId('gender').click();
  await page.getByTestId('check-small').getByRole('checkbox').check();
  await page.goto('https://www.douglas.de/de/c/parfum/unisex-duefte/parfum/010301?q=:relevance:brand:b0947:gender:UNISEX');
});