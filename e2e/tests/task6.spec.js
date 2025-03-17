import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/test_cases');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('a');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('d');
  await page.getByRole('button', { name: 'Login' }).click();
});