import { test, expect } from "@playwright/test";

test('Anchor links: dynamic link generation', async ({ page }) => {
  await page.goto('/blocks/content/examples/sidebar-anchor-links.html');

  // Ensure headings and id attributes are present.
  await expect(page.locator('#first0')).toBeVisible();
  await expect(page.locator('#first0')).toContainText('First heading');
  await expect(page.locator('#second1')).toBeVisible();
  await expect(page.locator('#second1')).toContainText('Second heading');
  await expect(page.locator('#sub-heading2')).toBeVisible();
  await expect(page.locator('#sub-heading2')).toContainText('Sub-heading');

  // Match content headings to dyanmic sidebar links.
  await expect(page.locator('.hee-anchorlinks a[href="#first0"]')).toBeVisible();
  await expect(page.locator('.hee-anchorlinks a[href="#first0"]')).toContainText('First heading');
  await expect(page.locator('.hee-anchorlinks a[href="#second1"]')).toBeVisible();
  await expect(page.locator('.hee-anchorlinks a[href="#second1"]')).toContainText('Second heading');
  await expect(page.locator('.hee-anchorlinks a[href="#sub-heading2"]')).toBeVisible();
  await expect(page.locator('.hee-anchorlinks a[href="#sub-heading2"]')).toContainText('Sub-heading');
});
