import { test, expect } from '@playwright/test';

test('radiobutton', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByText('Radio Buttons').nth(0).click();
    await page.locator('//*[@id="red"]').click();
    await page.locator('//*[@id="football"]').click();
});