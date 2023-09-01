import { test, expect } from "@playwright/test";

test('Mobile Summary card: collapse and expand', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-card-summary.html');

  // Set to mobile viewport size.
  page.setViewportSize({ width: 375, height: 667 });

  // Mobile is collapsed by default so need to check.
  await expect(page.getByText('Competition ratio')).not.toBeVisible();

  const toggleLink = page.locator('.hee-card--summary__toggle');

  // Collapse card.
  await toggleLink.click();
  await expect(page.getByText('Competition ratio')).toBeVisible();

  // Expand card.
  await toggleLink.click();
  await expect(page.getByText('Competition ratio')).not.toBeVisible();
});
