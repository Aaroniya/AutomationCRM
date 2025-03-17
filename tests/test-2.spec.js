const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Flipkart
  await page.goto('https://www.flipkart.com');

  // Close the login popup if it appears
  try {
    await page.click('button:has-text("✕")', { timeout: 5000 });
  } catch (e) {
    console.log('Login popup did not appear.');
  }

  // Perform a search
  const searchQuery = 'laptop';
  await page.fill('input[name="q"]', searchQuery);
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('._1AtVbE', { timeout: 10000 });

  // Extract product details
  const products = await page.$$('._1AtVbE');
  for (const product of products) {
    try {
      const title = await product.$eval('._4rR01T', el => el.textContent);
      const price = await product.$eval('._30jeq3', el => el.textContent);
      console.log(`Title: ${title} | Price: ${price}`);
    } catch (e) {
      // Skip if title or price is not available
      continue;
    }
  }

  // Close browser
  await browser.close();
})();
