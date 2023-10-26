import { test, expect } from "@playwright/test";

test('Filter tags: tag removal', async ({ page }) => {
  await page.goto('/templates/examples/publications-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Click the Dental Professionals filter tag.
  let tag = page.locator('div[data-filter="dental_professionals"]');
  await tag.click();

  // Check resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=&sub_profession=dental_nurse&filter=consultation&filter=guidance&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();

  // Click the Graduates filter tag.
  tag = page.locator('div[data-filter="consultation"]');
  await tag.click();

  // Check resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=dental_professionals&sub_profession=dental_nurse&filter=guidance&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();
});
