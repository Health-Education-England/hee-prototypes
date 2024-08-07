import { test, expect } from "@playwright/test";

test('Anchor links: TOC sticky navigation', async ({ page }) => {
  await page.goto('/templates/examples/publications-item.html');

  const tocSideBarHeading = page.locator('.page__rightbar .hee-anchorlinks h2');

  const stickyToc = page.locator('#hee-anchorlinks-sticky');
  const stickyTocBtn = page.getByRole('button', { name: 'Table of Contents' });
  const stickyTocWrapper = page.locator('.hee-anchorlinks__sticky__container .hee-anchorlinks');
  const stickyTocList = stickyTocWrapper.locator('ul');

  const footerText = page.locator('.nhsuk-footer__copyright');

  // Scroll down to middle of page.
  await page.locator('#hee-toc-heading-1-0').click();

  // Ensure sidebar links not in viewport and sticky nav is visible.
  await expect(tocSideBarHeading).not.toBeInViewport();
  await expect(stickyToc).toBeVisible();

  // Click on sticky TOC button and verify the TOC list
  await stickyTocBtn.click();
  await expect(stickyTocList).toHaveText([
    'OverviewPathRun-throughST1-ST7Uncoupled postsTraining routesCore specialty Training (CT1, CT2 (CT3))Higher specialty Training (ST3-ST7 (ST8))SupportIn-training supportProfessional Support and Wellbeing (PSW)Regions',
    'Run-throughST1-ST7Uncoupled posts',
    'Core specialty Training (CT1, CT2 (CT3))Higher specialty Training (ST3-ST7 (ST8))',
    'In-training supportProfessional Support and Wellbeing (PSW)'
  ]);

  // Click on sticky TOC button again to close the TOC list and verify that it isn't visible
  await stickyTocBtn.click();
  await expect(stickyTocWrapper).not.toBeInViewport();

  // Scroll back to top of page.
  await page.locator('#publication-title').click();

  // Ensure sidebar links in viewport and sticky nav isn't visible.
  await expect(tocSideBarHeading).toBeInViewport();
  await expect(stickyToc).not.toBeVisible();

  // Scroll down to footer.
  await footerText.click();

  // Ensure sticky TOC not visible and footer is visible.
  await expect(footerText).toBeInViewport();
  await expect(stickyToc).not.toBeVisible();
});
