import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await page.locator('//a[text()="Admin Page"]').click();
  await page.locator('//input[@id="accessMode1"]').click();
  await page.locator('//input[@name="username"]').click();
  await page.locator('//input[@name="username"]').fill('aravinth');
  await page.locator('//input[@type="password"]').click();
  await page.locator('//input[@type="password"]').fill('John@48');
  await page.locator('//input[@id="initialBalance"]').fill('300');
 await page.locator('//input[@name="loanProcessorThreshold"]').fill('90');
 await page.locator('//select[@name="loanProvider"]').click();
 await page.locator('//select[@name="loanProvider"]').selectOption('JMS');
  await page.locator('//input[@value="Submit"]').click();
});