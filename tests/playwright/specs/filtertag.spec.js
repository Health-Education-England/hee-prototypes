import { test, expect } from "@playwright/test";

test('Filter tags: tag removal', async ({ page }) => {
  await page.goto('/templates/examples/news-collection.html');

  // Check submit button is not visible as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  // Click the Graduates filter tag.
  const graduateTag = page.locator('div[data-filter="graduates"]');
  await graduateTag.click();

  // Check visibility and resulting URL.
  await expect(page).toHaveURL(new RegExp('.html\\?filter=learning_dev#results$'));

  // Check submit button is not visible as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();
});
