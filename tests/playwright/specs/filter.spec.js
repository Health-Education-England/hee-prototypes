import { test, expect } from "@playwright/test";

test('Filters: selection and clear', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Uncheck checkbox and expect page reload with results anchor in URL.
  await page.getByLabel('Graduates').setChecked(false);

  // Check URL to ensure parameters and results has are present.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=learning_dev#results$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Click the clear all link.
  await page.getByRole('link', {name: 'Clear'}).click();

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?#results$'));
});
