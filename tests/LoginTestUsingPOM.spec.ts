import {test,expect } from '../page-objects/fixture'



test('should login using POM', async ({ page, loginPage }) => {
  await page.goto('https://binaryville.com/account');
  await loginPage.login("test@example.com","pass123")
  expect(page.url()).toContain('account'); // Adjust the condition to match the correct URL fragment.
});
