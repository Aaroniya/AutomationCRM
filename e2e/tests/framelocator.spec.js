const { test, expect } = require('@playwright/test');

test("inner frame" ,async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    //frame3.locator('//input[@name="mytext3"]').fill("Hello Everyone");
    const childFrames=await frame3.childFrames();
    await childFrames[0].locator('//*[@id="i6"]').check();
    await childFrames[0].locator('//*[@id="i24"]').check();
    //await childFrames[0].locator('//*[@id="mG61Hd"]').click();
    await page.waitForTimeout(5000);

});
