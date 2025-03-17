/*await page.goto("https://filebin.net/");
 await page.locator("#fileField").setInputFiles(["C:/Users/USER/Desktop/Selenium - automation testing/Nivetha M.pdf"],["C:/Users/USER/Desktop/Selenium - automation testing/screenshots 27.4.23.jpg"]);
 setInputFiles([
    path.join(C:/Users/USER/Desktop/Selenium - automation testing/, 'Nivetha M.pdf'),
    path.join(C:/Users/USER/Desktop/Selenium - automation testing/, 'file2.txt'),
  ]);
  
  import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
      await page.goto("https://filebin.net/");
      await page.getByRole('button',{name:'file'}).setInputFiles["/Users/sasi/Downloads/Testing.jpg"],["/Users/sasi/Downloads/RESUME.pdf"];
      await page.waitForTimeout(5000);
      await page.goto("https://filebin.net/8kt58bnqwikycg42");
      expect (await page.locator('//h1[@class="display-1"]'));
      await page.waitForTimeout(5000);
  });
  
  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://filebin.net/");
    await page.getByRole('button',{name:'file'}).setInputFiles["/Users/sasi/Desktop/test.jpg"],["/Users/sasi/Desktop/test1.jpg"];
    await page.waitForTimeout(5000);
    await page.goto("https://filebin.net/yyxbl5aip9ti1ttd");
    expect (await page.locator('//h1[@class="display-1"]'));
    await page.waitForTimeout(5000);
});
*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => { 
    //await page.goto('https://www.linkedin.com/login',{timeout:6000});
    await page.goto('https://www.linkedin.com/login');
    await page.locator('//input[@id="username"]').fill('1999rosejohn@gmail.com');
    await page.locator('//input[@id="password"]').fill('John@4818'); 
    await page.locator('//label[@for="rememberMeOptIn-checkbox"]').uncheck();
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(1000); 
    await page.goto('https://www.linkedin.com/feed/');
    await page.waitForTimeout(1000);
    //await page.goto('https://www.linkedin.com/feed/',{timeout:6000});
    await page.locator('//span[text()="Media"]').click();
    await page.locator('//span[text()="Media"]').setInputFiles["/Users/sasi/Desktop/test.jpg"],["/Users/sasi/Desktop/test1.jpg"];
    await page.locator('//span[text()="Next"]');
    await page.locator('//span[text()="Post"]');
    await page.locator('//a[text()="Verify now"]');
    await page.waitForTimeout(2000);
});
