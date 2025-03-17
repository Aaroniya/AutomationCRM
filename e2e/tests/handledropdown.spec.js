const { test, expect } = require('@playwright/test');

test("handle" ,async ({ page }) => {
    await page.goto("https://google.com");
    await page.locator("textarea[name='q']").type("playwright");
    await page.waitForSelector("//Li[@role='presentation']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
});