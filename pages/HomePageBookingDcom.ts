import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import dayjs from "dayjs";
import { TIMEOUT } from "dns";
import exp from "constants";

/**
 * Represents the home page of the application.
 */
export class HomePageBookingDcom extends BasePage {
  // Constructor to ensure the page object is passed correctly.
  constructor(page: Page) {
    super(page);
  }
  // Encapsulating locators with getters for better readability and initialization.
  private get crossPopUpToSignIn(): Locator {
    return this.page.getByLabel("Dismiss sign-in info.");
    
  }
  private get destinationInput(): Locator {
    return this.page.locator('[aria-label="Where are you going?"]');
  }
  private get dateField(): Locator {
    return this.page.locator('[data-testid="searchbox-dates-container"]');
  }
  private get calendar(): Locator {
    return this.page.getByTestId("searchbox-datepicker-calendar");
  }
  private get submitButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  /**
   * Dismisses the sign-in popup.
   */
  async dismissSignInPopup(): Promise<void> {
    try {
      await expect(this.crossPopUpToSignIn).toBeVisible({ timeout: 30000 });
      await this.crossPopUpToSignIn.click();
      await expect(this.crossPopUpToSignIn).not.toBeVisible({ timeout: 5000 });
    } catch (error) {
      throw new Error(`Failed to dismiss the sign-in popup: {error.message}`);
    }
  }

  /**
   * Enters the destination in the input field.
   * @param destination - The destination to enter.
   */
  async enterDestination(destination: string): Promise<void> {
    await this.destinationInput.fill(destination);
  }

  /**
   * Sets the check-in and check-out dates.
   * @param checkInOffset - Days to add to the current date for check-in.
   * @param checkOutOffset - Days to add to the current date for check-out.
   */
  async setTravelDates(
    checkInOffset: number,
    checkOutOffset: number
  ): Promise<void> {
    await this.dateField.click();
    await expect(this.calendar).toBeVisible({ timeout: 30000 });

    const [checkInSelector, checkOutSelector] = this.formatDateSelectors(
      checkInOffset,
      checkOutOffset
    );
    await this.page.locator(checkInSelector).click();
    await this.page.locator(checkOutSelector).click();
  }

  /**
   * Submits the search form.
   */
  async search(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Generates the date selectors for check-in and check-out dates.
   * @param checkInOffset - Days to add for the check-in date.
   * @param checkOutOffset - Days to add for the check-out date.
   * @param format - Date format (default: 'YYYY-MM-DD').
   * @returns An array containing the check-in and check-out date selectors.
   */
  private formatDateSelectors(
    checkInOffset: number,
    checkOutOffset: number,
    format: string = "YYYY-MM-DD"
  ): [string, string] {
    const checkInDate = dayjs().add(checkInOffset, "day").format(format);
    const checkOutDate = dayjs().add(checkOutOffset, "day").format(format);
    return [`[data-date="${checkInDate}"]`, `[data-date="${checkOutDate}"]`];
  }
}
