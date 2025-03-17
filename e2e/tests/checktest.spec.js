import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByText('Check Boxes').click();
    await page.locator('//*[@id="checkboxes"]/label').check();
    await page.locator('//*[@id="checkbox2"]').uncheck();


});