import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText('Elements').click();
    await page.getByText('Check Box').click();
    await page.locator('.rct-checkbox').check();
    await page.getByText('Radio Button').click();
    await page.locator("//label[@for='yesRadio']").click();
    
});