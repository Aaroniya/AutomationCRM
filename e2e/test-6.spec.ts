import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('c');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('c');
  await page.getByLabel('Gender:').check();
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('6');
  await page.getByLabel('Date of Birth:').fill('2025-01-29');
  await page.getByPlaceholder('Enter Subject').click();
  await page.getByPlaceholder('Enter Subject').fill('M');
  await page.getByLabel('Hobbies:').check();
  await page.getByRole('checkbox').nth(1).check();
  await page.locator('#state').selectOption('NCR');
  await page.locator('#city').selectOption('Lucknow');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'Practice Form' }).click();
  await page.getByRole('button', { name: 'Elements' }).click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.locator('li').filter({ hasText: 'Check Box' }).click();
  await page.locator('#c_bs_1').check();
  await page.locator('#c_bs_1').uncheck();
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.getByRole('radio').first().click();
  await page.getByRole('link', { name: 'Web Tables' }).click();
  await page.getByRole('link', { name: 'Buttons' }).click();
 await page.locator("//input[@type='text']")
});