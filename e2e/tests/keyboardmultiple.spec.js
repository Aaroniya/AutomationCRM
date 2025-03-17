const {test,expect} = require('@playwright/test')

test('keyboard event in playwright',async({page}) => {

    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@name="q"]').type("playwright documentation");
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Backspace");
});


