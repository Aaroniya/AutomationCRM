const { test, expect } = require('@playwright/test');

test("verify file upload" ,async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles('C:/Users/ADMIN/Documents/QA sheets.pdf');
    await page.locator("#file-submit").click();
    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
    await page.waitForTimeout(1000);

});    
