import { Locator,Page } from "@playwright/test";

export class LoginPage {
/*
    public readonly emailLocator: Locator
    public readonly passwordLocator: Locator
    public readonly signInButtonLocator: Locator
constructor(page:Page)
{
    this.emailLocator=page.getByRole("textbox",{name:'Email'})
    this.passwordLocator=page.getByRole('textbox',{name:'Password'})
    this.signInButtonLocator= page.getByRole('button',{name:'Sign in'})
}

async login(email:string, password:string)
{
    await this.emailLocator.fill(email);
    await this.passwordLocator.fill(password);
    await this.signInButtonLocator.click()
}
    */

private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterEmail(email: string): Promise<void> {
        await this.page.getByRole("textbox", { name: 'Email' }).fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.page.getByRole("textbox", { name: 'Password' }).fill(password);
    }

    async clickOnSignInButton(): Promise<void> {
        await this.page.getByRole("button", { name: 'Sign in' }).click();
    }

    async login(email: string, password: string): Promise<void> {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickOnSignInButton();
    }

}