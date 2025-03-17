import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    //await page.screenshot({path:"C:/Users/ADMIN"+Date.now()+"HomePage.png"});
    await page.screenshot({ path: 'C:/Users/ADMIN/Documents/HomePage_${Date.now()}.png' });

});    