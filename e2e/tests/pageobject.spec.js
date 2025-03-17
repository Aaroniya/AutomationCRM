import { test, expect } from '@playwright/test';

import { LoginPage1 } from 'D:/Playwright/e2e/Pages/LoginPage1.js';
import { HomePage } from 'D:/Playwright/e2e/Pages/HomePage.js';
import { CartPage } from 'D:/Playwright/e2e/Pages/CartPage.js';



test('login', async ({ page }) => {

//Login
     const login=new LoginPage1(page);
     await login.navigateToLoginPage();
     await login.login('nivi@123', 'krishvik');
     await page.waitForTimeout(3000);

//home

     const home=new HomePage(page);
     await home.addProductToCart("Nexus 6")
     await page.waitForTimeout(3000);
     await home.gotoCart();

//cart

     const cart=new CartPage(page);
     await page.waitForTimeout(3000);
     const status = await cart.checkProductInCart('Nexus 6')
//expect(await status).toBe(true);

});
