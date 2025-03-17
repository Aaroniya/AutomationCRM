const { test, expect } = require('@playwright/test');

test("handle frame", async ({ page }) => {
   await page.goto("https://docs.oracle.com/javase/8/docs/api/");
   const frame = page.frame({ name: 'packageListFrame' }); 
   await frame.click("//a[text()='java.applet']");
   //await page.getByTitle('All classes and interfaces (').contentFrame().getByRole('listitem').filter({ hasText: 'AppletContext' }).click();
   //const iframe= await page.frameLocator("//frame[@name='All classes and interfaces']")
   //await iframe.locator("//a[text()='AppletContext']").click();
   await page.pause();

});
