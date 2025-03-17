const { test, expect } = require('@playwright/test');

let page;
test.beforeEach(async({browser}) => {
    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill('Aaroniya');
    await page.locator("#loginpassword").fill('derikajenet');
    //await page.locator("#button[text='Log in']").click();
    await page.locator('button:has-text("Log in")').click(); 

});

test.afterEach(async () => {
    await page.locator("#logout2").click();
});


test('landingpage' ,async () => {
    const productList=await page.$$('hrefch');
    //expect(productList.length).toBe(9);
    expect(productList).toHaveLength(9);
    await page.waitForTimeout(1000);
});

test('productAdd',async() => {
    await page.locator('//a[text()="Samsung galaxy s6"]').click();
    await page.locator('//a[text()="Add to cart"]').click();
});