const { test, expect } = require('@playwright/test');

test("select values from dropdown", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    // Select by label
    await page.locator("#state").selectOption({ label: "Goa" });
    await page.waitForTimeout(1000);

    // Select by value
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
    await page.waitForTimeout(1000);

    // Select by index
    await page.locator("#state").selectOption({ index: 4 });
    await page.waitForTimeout(1000);

    // Retrieve all dropdown options
    const options = await page.$$eval("#state option", elements => elements.map(e => e.textContent.trim()));

    console.log("All dropdown values:", options);

    // Validate "Tamilnadu" is present in the dropdown
    //await expect(options).toContain("Tamilnadu");
});




