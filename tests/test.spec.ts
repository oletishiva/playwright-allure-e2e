import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Login success',async({page})=>{

const loginPage= new LoginPage(page);

await page.goto('https://binaryville.com/account')
await loginPage.login('test@example.com','pass123')
expect(page.url()).toContain('pass123')

})