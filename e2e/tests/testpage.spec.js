import { test, expect } from '@playwright/test';
import { LoginLead } from 'D:/Playwright/e2e/Pages/LoginLead.js';
import { CreateLead } from 'D:/Playwright/e2e/Pages/CreateLead.js';

test('login', async ({ page }) => {

//Login
const login=new LoginLead(page);
await login.navigateToLoginPage();
await login.login('DemoSalesManager','crmsfa');
        
        
//create
const create=new CreateLead(page);
await create.CreateLead();
await page.waitForTimeout(3000);


const account = new accountPage(page);
await account.navigateToaccountPage();
await account.enterCompanyname("cts");
await account.enterfirstname("Aaroniya");
await account.enterlastname("A");
await account.clicksubmit();
 

});
