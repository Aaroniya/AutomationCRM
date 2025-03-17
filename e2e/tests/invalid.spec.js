const { test, expect } = require('@playwright/test');

test('formfill', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Test Login Page' }).click();
    await page.locator('#login div').nth(1).click();
    await page.locator('//*[@id="username"]').click();
    await page.locator('//*[@id="username"]').fill('practice');
    await page.locator('//*[@id="password"]').click();
    await page.locator('//*[@id="password"]').fill('SuperSecret');
    await page.locator('//*[@id="login"]/button').click();
});    