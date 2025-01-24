import {test as base,expect} from '@playwright/test'


const test=base.extend({
testdata: async({},use)=>{

const data = { email:"test@example.com",password:"pass123"}
await use(data);

},
authenticatedUser: [async({page,testdata},use)=>{
    await page.goto("https://binaryville.com/account")
    const emailInput= page.getByRole("textbox",{name: "Email"})
    await emailInput.fill(testdata.email)
    const passwordInput= page.getByRole("textbox",{name:"Password"})
    await passwordInput.fill(testdata.password)
    const singInButton= page.getByRole("button",{name:"Sign in"})
    await singInButton.click();
    await use(page)
}, {auto:true}]
})

test("Should login with test data",async({page,testdata})=>{

/*await page.goto("https://binaryville.com/account")
const emailInput= page.getByRole("textbox",{name: "Email"})
await emailInput.fill(testdata.email)
const passwordInput= page.getByRole("textbox",{name:"Password"})
await passwordInput.fill(testdata.password)
const singInButton= page.getByRole("button",{name:"Sign in"})
await singInButton.click();
*/
const url=page.url()
await expect(url).toContain(testdata.password)


}



)