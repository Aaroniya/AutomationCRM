const {test,expect } = require('@playwright/test');
const { chromium } = require('playwright'); 

test('window handling',async({page}) => { 

    //const browser = await chromium.launch({ headless: true });
    
    const browser = await chromium.launch(); 
    const context = await browser.newContext();
    
    
    const pageOne = await context.newPage();
    const pageTwo = await context.newPage();

    
    await pageOne.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await pageTwo.goto("https://playwright.dev");

    
    const allPages = context.pages();
    console.log(`Total Pages: ${allPages.length}`);

    await browser.close();
});