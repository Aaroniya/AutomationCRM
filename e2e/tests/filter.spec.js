import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.douglas.de/de');
    await page.getByRole('button',{name:'NUR UNBEDINGT ERFORDERLICH'}).click();
    await page.locator("//a[text()='PARFUM']").click();
    await page.locator("//div[text()='Valentino']").nth(1).click();
    await page.locator("//span[@class='radio-item__circle']").nth(0).uncheck();
    await page.locator("//span[@class='radio-item__circle']").nth(1).check();
    await page.waitForTimeout(5000);
});