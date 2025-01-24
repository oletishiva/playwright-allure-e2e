import {test,expect} from '@playwright/test'
import { LoginPage } from '../page-objects/login-page.pom'
import { log } from 'console';

test('Login success',async({page})=>{

const loginPage= new LoginPage(page);

await page.goto('https://binaryville.com/account')
await loginPage.emailLocator.fill('test@example.com')
await loginPage.passwordLocator.fill('pass123')
await loginPage.signInButtonLocator.click();
expect(page.url()).toContain('pass123')

})