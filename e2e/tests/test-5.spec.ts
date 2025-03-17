import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://docs.oracle.com/javase/8/docs/api/');
  await page.getByTitle('All Packages').contentFrame().getByRole('listitem').filter({ hasText: 'java.applet' }).click();
  await page.getByTitle('All Packages').contentFrame().getByRole('link', { name: 'java.applet' }).click();
  await page.getByTitle('All classes and interfaces (').contentFrame().getByRole('listitem').filter({ hasText: 'AppletContext' }).click();
  await page.getByTitle('All classes and interfaces (').contentFrame().getByRole('link', { name: 'AppletContext' }).click();
  await page.getByTitle('All classes and interfaces (').contentFrame().getByRole('link', { name: 'Applet', exact: true }).click();
  await page.getByTitle('All classes and interfaces (').contentFrame().getByRole('link', { name: 'Applet', exact: true }).click();
});