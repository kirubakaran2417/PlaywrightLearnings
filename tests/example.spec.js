const{test,expect, chromium} = require('@playwright/test');

test('Basic test1',async({page})=>{
  
    await page.goto('https://mycontactform.com');
    const title = await page.title();
    expect(title).toBe('Free Contact and Email Forms - myContactForm.com');
    const username = page.locator('#user');
    await expect(username).toBeVisible();
    //await expect(username).toHaveAttribute('type', 'text');
    //await expect(username).toHaveValue('');
    //await expect(username).toContainText('');
    await expect(username).toBeEnabled();
})