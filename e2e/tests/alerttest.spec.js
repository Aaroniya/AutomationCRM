import { test , expect} from '@playwright/test';

test ('alert', async ({  page }) => {
    await page.goto("http://www.uitestingplayground.com/alerts");
    page.on('dialog',async(d) => {
        expect(d.type()).toContain('alert');
        expect(d.message()).toContain("Today is working day.Or less likely a holiday");
        await d.accept();
    }); 
    await page.locator('//*[@id="alertButton"]').click();       

});