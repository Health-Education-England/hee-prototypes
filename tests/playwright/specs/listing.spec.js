import { test, expect } from "@playwright/test";

test('Listings: sort by selection', async ({ page }) => {
  await page.goto('/blocks/furniture/examples/results-listings.html');

  // Check submit button is not visible as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit').first()).not.toBeVisible();

  // Change sort by option and expect page reload.
  await page.getByLabel('Sort by').first().selectOption('relevance');
  await expect(page.locator('.hee-listing__filter__submit').first()).not.toBeVisible();
});
