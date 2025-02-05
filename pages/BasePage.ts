import { expect, Page } from "@playwright/test";
/**
 * Represents a base page object.
 */
export class BasePage
{
    protected readonly page: Page;

    /**
   * Creates a new instance of the BasePage class.
   * @param page - The Playwright page object.
   */

    constructor(Page)
    {
        this.page=Page;
    }

    /**
   * Navigates to the specified URL.
   * @param url - The URL to navigate to.
   */

    async navigate(url)
    {
        await this.page.goto(url);
    }
    /**
   * Verifies that the current URL contains the expected URL(s).
   * @param expectedUrl - The expected URL(s) to verify.
   */
  async verifyUrlContains(expectedUrl: string | string[]): Promise<void> {
    const urls = Array.isArray(expectedUrl) ? expectedUrl : [expectedUrl];
    for (const url of urls) {
      expect(this.page.url()).toContain(url);
    }
  }
}