import { test, expect } from '@playwright/test';

test('search and select Oppo mobile on Flipkart', async ({ page }) => {
    // Navigate to Flipkart
    await page.goto('https://www.flipkart.com/');
  
    // Search for mobile
    await page.getByRole('textbox', { name: 'Search for products, brands and more' }).fill('mobile');
    await page.getByRole('button', { name: 'Search' }).click();
  
    // Click on Oppo mobile brand
    await page.getByRole('link', { name: 'Oppo' }).click();
  
    // Expect the Oppo mobile page to be visible
    await expect(page).toHaveURL(/oppo/);
  });
  