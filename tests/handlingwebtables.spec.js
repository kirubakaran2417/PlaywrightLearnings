const{test,expect, chromium} = require('@playwright/test');

test('Basic test4',async({page})=>{
  
    await page.goto('https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population_(United_Nations)');
    const rows = await page.locator('table.wikitable tbody tr');
    const count = await rows.count();
    for(let i=0;i<count;i++){
        const country=await rows.nth(i).locator('td:nth-child(1)').innerText();
        const population = await rows.nth(i).locator('td:nth-child(3)').innerText();
        console.log(`Country: ${country}, Population: ${population}`);
    }
    
})