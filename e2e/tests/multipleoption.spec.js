const { test, expect } = require('@playwright/test');

test("select values from dropdown" ,async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#state").selectOption({ label: "Goa" });
    await page.waitForTimeout(1000);
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
    await page.waitForTimeout(1000);
    await page.locator("#state").selectOption({ index: 4 });
    const values= await page.locator("#state").textContent();
    console.log("All dropdown values"+values);
    //await expect(values.includes("Tamilnadu")).toBeTruthy();
    //await expect(values.includes("Tamilnadu")).toBeTruthy();
    let state =await page.$("#state");
    let allElement = await state.$$("option");
    for (let i=0; i<allElement.length; i++)
    {
        let element =allElement[i]
        let value=await element.textContent();
        console.log("values from dropdown" + values);
    }
    await page.locator("#hobbies").selectOption(['playing','swimming']);
    await page.waitForTimeout(3000);
});
