const {test,expect}=require('@playwright/test')

test('keyboard event in playwright',async({page}) => {

    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@name="q"]').type("playwright documentation");
    await page.keyboard.press("Control+a");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+c");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+v");
    await page.waitForTimeout(1000);
});
