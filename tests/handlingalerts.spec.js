const{test,expect, chromium} = require('@playwright/test');

test('Basic test3',async({page})=>{
  
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.locator('.btn.btn-danger').click();
    page.once('dialog', dialog => {//page.once listens to the dialog event only once //page.on listens to the dialog event multiple times
        console.log(dialog.message());
        dialog.accept();
        //dialog.dismiss(); // dismiss the dialog instead of accepting
        //dialog.accept('Custom message'); // accept with a custom message
    });
})