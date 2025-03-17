const { test, expect } = require('@playwright/test');

test('bankform', async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByText('Forms').click();
    await page.getByText('Practice Form').click();
    await page.getByPlaceholder('First Name').fill('nivetha');
    await page.getByPlaceholder('Last Name').fill('m');
    await page.locator('#userEmail').fill('nivi@gmail.com');
    await page.locator("//label[@for='gender-radio-2']").click();
    await page.getByPlaceholder('Mobile Number').fill('3236324689');
    await page.locator("//input[@id='dateOfBirthInput']").click();
    await page.locator('.react-datepicker__month-select').selectOption('November');
    await page.locator('.react-datepicker__year-select').selectOption('1995');
    await page.getByLabel('Choose Sunday, November 12th, 1995').click();
    await page.locator("//label[@for='hobbies-checkbox-3']").click();
    await page.locator('#state').click();
    await expect(page.getByText('Haryana')).toBeVisible();
    await page.getByText('Haryana').click();
    
    


});