const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../pages/loginpage');

test('Login test', async ({ page }) => {
    const loginPage = new Loginpage(page);
    await loginPage.goto();
    await loginPage.login('bharath', 'admin@123');
    await expect(page).toHaveURL(/.*mycontactform.com.*/);
});