import { test, expect } from '@playwright/test';

test('hover', async  ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//*[text()="Hovers"]').click();
    await page.getByAltText('User Avatar').nth(1).hover();

});