import { test, expect } from "@playwright/test";

test('Anchor links: TOC link generation', async ({ page }) => {
  await page.goto('/blocks/content/examples/sidebar-anchor-links-toc.html');

  const anchorList = page.locator('.hee-anchorlinks ul');
  await expect(anchorList).toBeVisible();

  // H2: Overview.
  await expect(page.locator('h2[data-short-title="Overview"]')).toContainText('Overview');
  await expect(page.locator('h2[data-short-title="Overview"]')).toHaveAttribute('id', 'hee-toc-heading-0');

  // H2: Pathways.
  await expect(page.locator('h2[data-short-title="Path"]')).toContainText('Pathways');
  await expect(page.locator('h2[data-short-title="Path"]')).toHaveAttribute('id', 'hee-toc-heading-1');

  // H3: Run-through and uncoupled.
  await expect(page.locator('h3[data-short-title="Run-through"]')).toContainText('Run-through and uncoupled');
  await expect(page.locator('h3[data-short-title="Run-through"]')).toHaveAttribute('id', 'hee-toc-heading-1-0');

  // H3: Run-through posts (ST1-ST7)
  await expect(page.locator('h3[data-short-title="ST1-ST7"]')).toContainText('Run-through posts (ST1-ST7)');
  await expect(page.locator('h3[data-short-title="ST1-ST7"]')).toHaveAttribute('id', 'hee-toc-heading-1-1');

  // H3: Uncoupled posts (CT1, CT2, ST3-ST7).
  await expect(page.locator('h3[data-short-title="Uncoupled posts"]')).toContainText('Uncoupled posts (CT1, CT2, ST3-ST7)');
  await expect(page.locator('h3[data-short-title="Uncoupled posts"]')).toHaveAttribute('id', 'hee-toc-heading-1-2');

  // H3: Training routes.
  await expect(page.locator('h2[data-short-title="Training routes"]')).toContainText('Training routes');
  await expect(page.locator('h2[data-short-title="Training routes"]')).toHaveAttribute('id', 'hee-toc-heading-2');

  // H3: Core specialty Training (CT1, CT2 (CT3).
  await expect(page.locator('h3[id="hee-toc-heading-2-0"]')).toContainText('Core specialty Training (CT1, CT2 (CT3))');

  // H3: Higher specialty Training (ST3-ST7 (ST8).
  await expect(page.locator('h3[id="hee-toc-heading-2-1"]')).toContainText('Higher specialty Training (ST3-ST7 (ST8))');
});
