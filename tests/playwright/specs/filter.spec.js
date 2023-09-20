import { test, expect } from "@playwright/test";

test('Filters: selection and clear', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Uncheck checkbox and expect page reload with results anchor in URL.
  await page.getByLabel('Careers').click();

  // Check URL to ensure parameters and results has are present.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=careers&filter=cosmetic-procedures&filter=medicines-optimisation&filter=healthcare-scientists&filter=management-professionals&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();

  // Click the clear all link.
  await page.getByRole('link', {name: 'Clear'}).first().click();

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=healthcare-scientists&filter=management-professionals&results_updated=true$'));
});
