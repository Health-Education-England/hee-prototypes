import { test, expect } from "@playwright/test";

test('Desktop Summary card: collapse and expand', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-card-summary.html');

  const toggleLink = page.locator('.hee-card--summary__toggle');
  // Desktop is expanded by default so need to check.
  await toggleLink.click();
  await expect(page.getByText('Competition ratio')).toBeVisible();


  // Collapse card.
  await toggleLink.click();
  await expect(page.getByText('Competition ratio')).not.toBeVisible();

  // Expand card.
  await toggleLink.click();
  await expect(page.getByText('Competition ratio')).toBeVisible();
});
