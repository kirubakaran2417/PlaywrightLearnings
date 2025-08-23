const{test,expect, chromium} = require('@playwright/test');
const data = require('../testdata/testdata.json');
test('Basic test6',async({page})=>{
  
    await page.goto('https://mycontactform.com');
    const title = await page.title();
    expect(title).toBe('Free Contact and Email Forms - myContactForm.com');
    await page.fill('#user', data.username);
    await page.fill('#pass', data.password);
    
})