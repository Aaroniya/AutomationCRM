import { test, expect } from '@playwright/test';

test('radiobutton', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//*[text()="Dropdown List"]').click();
    await page.locator('//*[@id="dropdown"]').click(); 
    await page.locator('//*[@id="dropdown"]').selectOption('2');
    await page.locator('//*[@id="elementsPerPageSelect"]').selectOption("50");
    await page.locator('//*[@id="country"]').selectOption("India");

});