const { test, expect } = require('@playwright/test');

test('testcase1 login', async ({ page }) => {
     await page.goto("https://automationexercise.com/");
     await page.getByText(' Signup / Login').click();
     await expect(page.getByText('New User Signup!')).toBeVisible();
     await page.getByPlaceholder('Name').fill('nivetha');
     await page.locator("//input[@type='email' and @data-qa='signup-email']").fill('nivi@gmail.com');
     await page.locator("//button[@data-qa='signup-button']").click();
     await expect(page.getByText('Enter Account Information')).toBeVisible();
     await page.locator('#id_gender2').click();
     await page.locator('#password').fill('12345678');
     await page.locator('#newsletter').check();
     await page.locator('#optin').check();
     await page.locator('#first_name').fill('nivetha');
     await page.locator('#last_name').fill('m');
     await page.locator('#company').fill('cygnus');
     await page.locator('#address1').fill('chellandi amman');
     await page.locator('#address2').fill('3rd street');
     await page.locator('#state').fill('tamilnadu');
     await page.locator('#city').fill('dindigul');
     await page.locator('#zipcode').fill('624001');
     await page.locator('#mobile_number').fill('376689818');
     await page.getByText('Create Account').click();
     await expect(page.getByText('Account Created!')).toBeVisible();
});