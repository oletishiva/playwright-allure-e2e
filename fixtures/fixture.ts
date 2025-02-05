import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


export const test = base.extend<{ loginPage: LoginPage; url: string }>({
  // Define the URL as a constant or environment variable
  url: async ({}, use) => {
      await use('https://binaryville.com/account'); // Replace with your app's base URL
  },

  // Create the LoginPage instance
  loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
  },
});
/*
export const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
  });
*/
  export {expect}