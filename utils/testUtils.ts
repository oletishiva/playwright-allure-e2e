import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import logger from './logger';

export const uiTest = (
  testId: string,
  testName: string,
  testFunc: (fixtures: { page: any; loginPage: any }) => Promise<void>,
  skipTest = false
) => {
  if (!skipTest) {
    test.describe(testName, () => {
      test.beforeEach(() => {
        logger.addAttribute('Test ID', testId);
        allure.label('Test ID', testId);
      });

      test(testName, async (fixtures) => {
        logger.info(`Start Test - ID: ${testId}, Name: ${testName}`);
        await testFunc(fixtures);
        logger.info(`End Test - ID: ${testId}, Name: ${testName}`);
      });
    });
  }
};

export const uiTestStep = async <T>(
  stepName: string,
  stepFunc: () => Promise<T>
): Promise<T> => {
  logger.info(`Start Step - ${stepName}`);
  try {
    let result: T;
    await allure.step(stepName, async () => {
      result = await stepFunc();
    });
    logger.info(`Step Completed - ${stepName}`);
    return result!;
  } catch (error) {
    logger.error(`Step Failed - ${stepName}: ${error}`);
    allure.attachment('Error Details', error.message || 'Unknown error', 'text/plain');
    throw error;
  }
};
