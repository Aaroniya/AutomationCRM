import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/test_cases');
  await page.getByRole('link', { name: 'Test Case 4: Logout User' }).click();
  await page.getByRole('link', { name: '\'http://automationexercise.' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('aaroniya01@gmail.com');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('derikajenet');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('aaroniya01@gmail.com');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Aaroniya A');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('derikajenet');
  await page.locator('#days').selectOption('15');
  await page.locator('#months').selectOption('2');
  await page.locator('#years').selectOption('1991');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Aaroniya A');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('a');
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Aaroniya ');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('A');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Automind ');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Automind I');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Automind Info ');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Automind Info T');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Automind Info Tech');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('RM colony');
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('Dindigul');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Tamilnadu');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Dindigul');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('624003');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9976287490');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});