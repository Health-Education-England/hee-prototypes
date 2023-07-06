import { test, expect } from "@playwright/test";

test('Table expander: expand and collapse', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-table-expander.html');

  const toggleLink = page.locator('.hee-table-expander__toggle a');

  // Check default state of toggle link.
  await expect(toggleLink).toBeVisible();
  await expect(toggleLink).toContainText('Expand all');

  const expander = page.locator('.nhsuk-expander');
  const summary = page.locator('.nhsuk-expander .nhsuk-details__summary');
  const details = page.locator('.nhsuk-expander .nhsuk-details__text');
  const content = page.locator('.hee-table-expander__container');

  // Check default state of expander components.
  await expect(expander.first()).not.toHaveAttribute('open', '');
  await expect(summary.first()).toHaveAttribute('aria-expanded', 'false');
  await expect(details.first()).toHaveAttribute('aria-hidden', 'true');
  await expect(content.first()).not.toBeVisible();

  await expect(expander.nth(1)).not.toHaveAttribute('open', '');
  await expect(summary.nth(1)).toHaveAttribute('aria-expanded', 'false');
  await expect(details.nth(1)).toHaveAttribute('aria-hidden', 'true');
  await expect(content.nth(1)).not.toBeVisible();

  await expect(expander.last()).not.toHaveAttribute('open', '');
  await expect(summary.last()).toHaveAttribute('aria-expanded', 'false');
  await expect(details.last()).toHaveAttribute('aria-hidden', 'true');
  await expect(content.last()).not.toBeVisible();

  // Open all expander components.
  await toggleLink.click();

  // Check open state of expander components.
  await expect(expander.first()).toHaveAttribute('open', 'open');
  await expect(summary.first()).toHaveAttribute('aria-expanded', 'true');
  await expect(details.first()).toHaveAttribute('aria-hidden', 'false');
  await expect(content.first()).toBeVisible();

  await expect(expander.nth(1)).toHaveAttribute('open', 'open');
  await expect(summary.nth(1)).toHaveAttribute('aria-expanded', 'true');
  await expect(details.nth(1)).toHaveAttribute('aria-hidden', 'false');
  await expect(content.nth(1)).toBeVisible();

  await expect(expander.last()).toHaveAttribute('open', 'open');
  await expect(summary.last()).toHaveAttribute('aria-expanded', 'true');
  await expect(details.last()).toHaveAttribute('aria-hidden', 'false');
  await expect(content.last()).toBeVisible();

  // Close all expander components.
  await toggleLink.click();

  // Check default state of expander components.
  await expect(expander.first()).not.toHaveAttribute('open', '');
  await expect(summary.first()).toHaveAttribute('aria-expanded', 'false');
  await expect(details.first()).toHaveAttribute('aria-hidden', 'true');
  await expect(content.first()).not.toBeVisible();

  await expect(expander.nth(1)).not.toHaveAttribute('open', '');
  await expect(summary.nth(1)).toHaveAttribute('aria-expanded', 'false');
  await expect(details.nth(1)).toHaveAttribute('aria-hidden', 'true');
  await expect(content.nth(1)).not.toBeVisible();

  await expect(expander.last()).not.toHaveAttribute('open', '');
  await expect(summary.last()).toHaveAttribute('aria-expanded', 'false');
  await expect(details.last()).toHaveAttribute('aria-hidden', 'true');
  await expect(content.last()).not.toBeVisible();

});
