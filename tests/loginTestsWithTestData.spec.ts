import {test,expect } from '../page-objects/fixture'
import loginData from '../data/loginData.json'


loginData.forEach(({email,password})=>{
test(`should login using ${email}`, async ({ page, loginPage }) => {
  await page.goto('https://binaryville.com/account');
  await loginPage.login("test@example.com","pass123")
  expect(page.url()).toContain('account'); // Adjust the condition to match the correct URL fragment.
})
})
