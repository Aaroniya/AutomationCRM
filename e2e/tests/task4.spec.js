import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/?s_kwcid=AL!739!3!676201929245!b!!g!!flipkart&gclsrc=aw.ds&&semcmpid=sem_8024046704_brand_exe_buyers_goog&gad_source=1&gclid=Cj0KCQiA7se8BhCAARIsAKnF3rzHlFuAw1rjuIBYu5wPSZHUZKY9MLS8TwdhTW4PpHVZakpHVVe6XGEaAh9AEALw_wcB');
  await expect(page.getByLabel('Flipkart', { exact: true })).toBeVisible();
  await page.getByLabel('Flipkart', { exact: true }).click();
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Image Image Geared Cycles Up' }).click();
});