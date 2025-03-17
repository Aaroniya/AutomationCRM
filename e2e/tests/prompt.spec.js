const { test, expect } = require('@playwright/test');

test('confirm', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
page.on('dialog',async(d) => {
expect(d.type()).toContain('prompt');
expect(d.message()).toContain("I am a JS prompt");
await d.accept("nice to meet you");

});
await page.locator("//button[text()='Click for JS Prompt']").click();

});