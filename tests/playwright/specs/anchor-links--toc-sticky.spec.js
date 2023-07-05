import { test, expect } from "@playwright/test";

test('Anchor links: TOC sticky navigation', async ({ page }) => {
  await page.goto('/blocks/content/examples/footer-sticky-toc.html');

  const tocSideBarHeading = page.locator('.page__rightbar .hee-anchorlinks h2');

  const stickyToc = page.locator('#hee-anchorlinks-sticky');
  const stickyTocBtn = page.getByRole('button', { name: 'Table of Contents' });
  const stickyTocList = page.locator('.hee-anchorlinks__sticky__container .hee-anchorlinks ul');

  // Scroll down to bottom of page.
  await page.locator('#hee-toc-heading-2-0').click();

  // Ensure sidebar links not in viewport and sticky nav is visible.
  await expect(tocSideBarHeading).not.toBeInViewport();
  await expect(stickyToc).toBeVisible();

  await stickyTocBtn.click();
  await expect(stickyTocList).toHaveText([
    'OverviewPathRun-throughST1-ST7Uncoupled postsTraining routesCore specialty Training (CT1, CT2 (CT3))Higher specialty Training (ST3-ST7 (ST8))',
    'Run-throughST1-ST7Uncoupled posts',
    'Core specialty Training (CT1, CT2 (CT3))Higher specialty Training (ST3-ST7 (ST8))'
  ]);

  // Scroll back to top of page.
  await page.getByText('Sticky Table of Contents').click();

  // Ensure sidebar links in viewport and sticky nav isn't visible.
  await expect(tocSideBarHeading).toBeInViewport();
  await expect(stickyToc).not.toBeVisible();
});
