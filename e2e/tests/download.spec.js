const { test, expect } = require('@playwright/test');

test('file download', async ({ page }) => {

 await page.goto("https://the-internet.herokuapp.com/download");
 const downloadPromise = page.waitForEvent("download");
 await page.getByText("output.txt").click();
 const download = await downloadPromise;
 await download.saveAs("output.txt");


});