import { test, expect } from "@playwright/test";

test('Filters: selection and clear', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  // Check submit button is not visible as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Check checkbox and expect page reload with results anchor in URL.
  await page.getByLabel('Graduates').setChecked(false);

  // Check URL to ensure parameters are present.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=learning_dev#results$'));

  // Check submit button is not visible as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Click the clear all link.
  await page.getByRole('link', {name: 'Clear'}).click();

  await expect(page).toHaveURL(new RegExp('.html\\?#results$'));
});
