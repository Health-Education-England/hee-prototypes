import { test, expect } from "@playwright/test";

test('Filter tags: tag removal', async ({ page }) => {
  await page.goto('/templates/examples/publications-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Click the Dental Professionals filter tag.
  let tag = page.locator('div[data-filter="dental-professionals"]');
  await tag.click();

  // Check resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?publication_type=consultation&publication_type=guidance&profession=&sub_profession=&topic=cosmetic-procedures&sub_topic=funding&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();

  // Click the Graduates filter tag.
  tag = page.locator('div[data-filter="consultation"]');
  await tag.click();

  // Check resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?publication_type=guidance&profession=dental-professionals&sub_profession=dental-nurse&topic=cosmetic-procedures&sub_topic=funding&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();
});
