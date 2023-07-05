import { test, expect } from "@playwright/test";

test('Anchor links: TOC sticky navigation', async ({ page }) => {
  await page.goto('/blocks/content/examples/footer-sticky-toc.html');

  await expect(page.locator('.page__rightbar .hee-anchorlinks')).toBeVisible();

  await page.locator('#hee-toc-heading-2-0').click();
  //await expect(page.locator('.page__rightbar .hee-anchorlinks h2')).not.toBeVisible();

  await expect(page.locator('#hee-anchorlinks-sticky')).toBeVisible();


});
