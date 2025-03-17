const { test, expect } = require('@playwright/test');

test('alertbox', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
page.on('dialog',async(d) => {
expect(d.type()).toContain('alert');
await page.waitForTimeout(1000);
expect(d.message()).toContain("I am a JS Alert");
await d.accept();

});
await page.locator("//button[text()='Click for JS Alert']").click();

});