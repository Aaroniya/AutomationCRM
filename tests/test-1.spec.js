const { test, expect } = require('@playwright/test');

test('Gmail login test', async ({ page }) => {
  // Navigate to Gmail login page
  await page.goto('https://mail.google.com/');

  // Enter email
  await page.fill('input[type="email"]', 'aaroniya01@gmail.com');
  await page.click('#identifierNext');

  // Wait for the password input to appear
  await page.waitForSelector('input[type="password"]');

  // Enter password
  await page.fill('input[type="password"]', 'derikajenet');
  await page.click('#passwordNext');

  // Wait for Gmail to load
  await page.waitForNavigation();

  // Verify successful login by checking if the inbox is displayed
  const inboxLoaded = await page.isVisible('div[role="main"]');
  expect(inboxLoaded).toBeTruthy();
});