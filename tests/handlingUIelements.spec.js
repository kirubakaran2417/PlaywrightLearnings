const{test,expect, chromium} = require('@playwright/test');

test('Basic test',async({page})=>{
  
    await page.goto('https://mycontactform.com');
    const title = await page.title();
    expect(title).toBe('Free Contact and Email Forms - myContactForm.com');.0
    await page.locator('#user').fill('kirubakaran');
    await page.locator('#pass').fill('123456');
    await page.locator('button[name="btnSubmit"]').click();
    await page.selectOption('#q3',{label:'Third Option'});
})