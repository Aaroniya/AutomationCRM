import { test, expect } from '@playwright/test';

test('bank', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/");
    await page.getByText('Register').click();
    await page.locator('//input[@id="customer.firstName"]').fill('Aaroniya');
    await page.locator('//input[@id="customer.lastName"]').fill('A');
    await page.locator('//input[@id="customer.address.street"]').fill('PPM NAGAR');
    await page.locator('//input[@id="customer.address.city"]').fill('Dindigul');
    await page.locator('//input[@id="customer.address.state"]').fill('Tamilnadu');
    await page.locator('//*[@id="customer.address.zipCode"]').fill('624003');
    await page.locator('//*[@id="customer.phoneNumber"]').fill('9976287490');
    await page.locator('//*[@id="customer.ssn"]').fill('098765432');
    await page.locator('//*[@id="customer.username"]').fill('derikajenet');
    await page.locator('//*[@id="customer.password"]').fill('dennis');
    await page.locator('//*[@id="repeatedPassword"]').fill('dennis');
    await page.locator('//input[@value="Register"]').click();


    //await page.getByPlaceholder('customer.firstName').click();
    //await page.getByPlaceholder('customer.firstName').fill('Aaroniya A');
});
