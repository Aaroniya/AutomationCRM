const { test, expect } = require('@playwright/test');

test("verify file upload" ,async ({ page }) => {
    await page.goto('https://filebin.net/');
    await page.locator("//input[@class='upload']").click();
    const filePath1 = 'C:/Users/ADMIN/Documents/ChatGPT.pdf';
    const filePath2 = 'C:/Users/ADMIN/Documents/QA sheets.pdf';
    await page.setInputFiles('input[type="file"]', [filePath1, filePath2]);
    await page.waitForTimeout(5000);
  
});    


    