import { test, expect } from "@playwright/test";

test('Listings: sort by selection', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Change sort by option and expect page reload.
  await page.getByLabel('Sort by').selectOption('relevance');

  // Check URL to ensure parameters are present.
  await expect(page).toHaveURL(new RegExp('sort=relevance#results$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();
});
