const { test, expect } = require('@playwright/test');

test('confirm', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
page.on('dialog',async(d) => {
expect(d.type()).toContain('confirm');
expect(d.message()).toContain("I am a JS Confirm");
await d.accept();

});
await page.locator("//button[text()='Click for JS Confirm']").click();

});