const { test, expect } = require('@playwright/test');

test("select values from dropdown" ,async ({ page }) => {
    await page.goto("https://google.com");
    await page.locator("textarea[name='q']").type("playwright");
    await page.waitForSelector("//Li[@role='presentation']");
    const elements=await page.$$("//Li[@role='presentation']");
    for (let i=0; i < elements.length; i++)
    {
        const text = await elements[i].textContent();
        if(text.includes("youtube"))
        {
            await elements[i].click();
        }
    }
});