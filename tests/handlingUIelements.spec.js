const{test,expect, chromium} = require('@playwright/test');

test('Basic test2',async({page})=>{
  
    await page.goto('https://mycontactform.com');
    const title = await page.title();
    expect(title).toBe('Free Contact and Email Forms - myContactForm.com');
    await page.locator('#user').fill('kirubakaran');
    await page.locator('#pass').fill('123456');
    await page.locator('input[name="btnSubmit"]').click();
    await page.getByText('Sample Forms').click();
    await page.selectOption('#q3',{label:'Third Option'});
})