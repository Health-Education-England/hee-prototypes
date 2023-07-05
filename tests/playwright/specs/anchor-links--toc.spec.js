import { test, expect } from "@playwright/test";

test('Anchor links: TOC link navigation', async ({ page }) => {
  await page.goto('/blocks/content/examples/sidebar-anchor-links-toc.html');

  await expect(page.locator('.hee-anchorlinks')).toBeVisible();

  // H2: Overview.
  let heading = page.locator('h2[data-short-title="Overview"]');
  await expect(heading).toContainText('Overview');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-0');
  await page.getByRole('link', { name: 'Overview' }).click();
  await expect(heading).toBeInViewport();

  // H2: Pathways.
  heading = page.locator('h2[data-short-title="Path"]');
  await expect(heading).toContainText('Pathways');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-1');
  await page.getByRole('link', { name: 'Path' }).click();
  await expect(heading).toBeInViewport();

  // H3: Run-through and uncoupled.
  heading = page.locator('h3[data-short-title="Run-through"]');
  await expect(heading).toContainText('Run-through and uncoupled');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-1-0');
  await page.getByRole('link', { name: 'Run-through' }).click();
  await expect(heading).toBeInViewport();

  // H3: Run-through posts (ST1-ST7)
  heading = page.locator('h3[data-short-title="ST1-ST7"]');
  await expect(heading).toContainText('Run-through posts (ST1-ST7)');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-1-1');
  await page.getByRole('link', { name: 'ST1-ST7' }).click();
  await expect(heading).toBeInViewport();

  // H3: Uncoupled posts (CT1, CT2, ST3-ST7).
  heading = page.locator('h3[data-short-title="Uncoupled posts"]');
  await expect(heading).toContainText('Uncoupled posts (CT1, CT2, ST3-ST7)');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-1-2');
  await page.getByRole('link', { name: 'Uncoupled posts' }).click();
  await expect(heading).toBeInViewport();

  // H3: Training routes.
  heading = page.locator('h2[data-short-title="Training routes"]');
  await expect(heading).toContainText('Training routes');
  await expect(heading).toHaveAttribute('id', 'hee-toc-heading-2');
  await page.getByRole('link', { name: 'Training routes' }).click();
  await expect(heading).toBeInViewport();

  // H3: Core specialty Training (CT1, CT2 (CT3).
  heading = page.locator('h3[id="hee-toc-heading-2-0"]');
  await expect(heading).toContainText('Core specialty Training (CT1, CT2 (CT3))');
  await page.getByRole('link', { name: 'Core specialty Training (CT1, CT2 (CT3))' }).click();
  await expect(heading).toBeInViewport();

  // H3: Higher specialty Training (ST3-ST7 (ST8).
  heading = page.locator('h3[id="hee-toc-heading-2-1"]');
  await expect(heading).toContainText('Higher specialty Training (ST3-ST7 (ST8))');
  await page.getByRole('link', { name: 'Higher specialty Training (ST3-ST7 (ST8))' }).click();
  await expect(heading).toBeInViewport();
});
