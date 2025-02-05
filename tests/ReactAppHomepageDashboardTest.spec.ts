import { test, Page, expect } from '@playwright/test';
import { ReactAppHomePageDashboardPage } from '../pages/ReactAppHomePageDashboardPage';

test.beforeEach(async({page})=>{

    await page.goto("http://localhost:4200/pages") // beforeall we can't use the page.goto , we can use browser or context 
    
})

test.afterEach(async({page})=>{
   await page.close();

})

test('Verify visibility of homepage items',async({page})=>{

    const homepage= new ReactAppHomePageDashboardPage(page);
    await homepage.iotDashboard.isVisible();
    await homepage.forms.isVisible();
    await homepage.modalOverlays.isVisible();
    await homepage.extraComponents.isVisible();
    await homepage.charts.isVisible();
    await homepage.tablesData.isVisible();
    await homepage.auth.isVisible();
     
    
    const title = await page.title();

    // ✅ Print it to console
    console.log(`Page Title: ${title}`);
   
})

test('verify the page using screenshot',async({page})=>{
    // ✅ Takes a screenshot and compares it with the stored baseline
    await expect(page).toHaveScreenshot("homepage.png");
})

test('Verify page title',async({page})=>{
    const homepage= new ReactAppHomePageDashboardPage(page);
    await expect(page).toHaveTitle('playwright-test-admin Demo Application');

})