const{test,expect, chromium} = require('@playwright/test');

test('Basic test',async({page})=>{
  
    await page.goto('https://mycontactform.com');
    const title = await page.title();
    expect(title).toBe('Free Contact and Email Forms - myContactForm.com');

})