import { uiTest, uiTestStep } from '../utils/testUtils'; // Adjust path as needed
import { test, expect } from '../page-objects/fixture';
import logger from '../utils/logger';

const testCaseId = 'NEW-001';
const testCaseName = 'Login and verify account page';

uiTest(testCaseId, testCaseName, async ({ page, loginPage }) => {
  await uiTestStep('Navigate to login page', async () => {
    await page.goto('https://binaryville.com/account');
    logger.info('Navigated to login page');
  });

  await uiTestStep('Login with valid credentials', async () => {
    await loginPage.login('test@example.com', 'pass123');
    logger.info('Logged in successfully');
  });

  await uiTestStep('Verify account page URL', async () => {
    expect(page.url()).toContain('account');
    logger.info('Account page URL verified');
  });
});
