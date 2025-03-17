import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/");
await page.getByText('Dropdown').click();
await page.locator('#dropdown').selectOption('Option 2');
});