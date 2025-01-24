import {expect,test,chromium} from '@playwright/test'

// custom fixtures
test('Sign In buttion is Visible',async()=>{
const browser= await chromium.launch()
const page= await browser.newPage();

await page.goto('https://binaryville.com/account')
const singInButton= page.getByRole('button',{name:'Signin'})
await expect(singInButton).toBeVisible();
await browser.close()


}
)
//built in fixture
//playwrigh automatically manages to launch and close the browser
//Automatically handles the browser life cycle

test('Sign In Button Visible check using builtIn fixture',async({page})=>{

    await page.goto('https://binaryville.com/account')
    const singInButton= page.getByRole('button',{name:'Sign in'})
    await expect(singInButton).toBeVisible();

}




)
