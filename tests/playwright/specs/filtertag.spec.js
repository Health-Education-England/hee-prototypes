import { test, expect } from "@playwright/test";

test('Filter tags: tag removal', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Click the Graduates filter tag.
  const tag = page.locator('div[data-filter="cosmetic-procedures"]');
  await tag.click();

  // Check resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=medicines-optimisation&filter=healthcare-scientists&filter=management-professionals&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();
});
