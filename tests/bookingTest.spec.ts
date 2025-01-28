import { test, Page } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Book a hotel in Columbia for the next 5 days', async ({ page }: { page: Page }) => {
  const homePage = new HomePage(page);
  
  // Navigate to the Booking.com website
  await homePage.navigate('https://www.booking.com');
  
  // Dismiss the sign-in popup if it appears
  await homePage.dismissSignInPopup();
  
  // Enter the destination as Columbia
  await homePage.enterDestination('Columbia');
  
  // Set the check-in date as tomorrow and check-out date 5 days later
  await homePage.setTravelDates(1, 5);
  
  // Submit the search form
  await homePage.search();
  
  // Verify the URL contains expected parameters
  await homePage.verifyUrlContains(['searchresults', 'Columbia']);
});
