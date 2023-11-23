import { test, expect } from "@playwright/test";

test('Listings: sort by selection', async ({ page }) => {
  await page.goto('/templates/examples/publications-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Change sort by option and expect page reload.
  await page.getByLabel('Sort by').selectOption('relevance');

  // Check URL to ensure parameters are present.
  await expect(page).toHaveURL(new RegExp('sort=relevance&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();
});
