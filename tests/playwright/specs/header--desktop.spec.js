import { test, expect } from "@playwright/test";

test('Desktop menu: sub nav expand and collapse', async ({ page }) => {
  await page.goto('/blocks/scaffolding/examples/header.html');

  const navigation = page.locator('#header-navigation');

  // Ensure menu toggle button is visible.
  await expect(navigation).toBeVisible();

  // Check aria attribute default state.
  await expect(navigation).toHaveAttribute('role', 'navigation');
  await expect(navigation).toHaveAttribute('aria-label', 'Primary navigation');

  const navList = page.locator('.nhsuk-header__navigation-list');
  const subNav = page.locator('.nhsuk-header__navigation-item.nhsuk-subnav');
  const subNavToggle = page.locator('.nhsuk-header__navigation-item.nhsuk-subnav .nhsuk-header__navigation-link');
  const subNavList = page.locator('.nhsuk-subnav__list');

  await subNavToggle.click();

  await expect(navList).toHaveClass('nhsuk-header__navigation-list subnav-open');
  await expect(subNav).toHaveClass('nhsuk-header__navigation-item nhsuk-subnav is-active');
  await expect(subNavList).toBeVisible();

  await subNavToggle.click();

  await expect(navList).toHaveClass('nhsuk-header__navigation-list');
  await expect(subNav).toHaveClass('nhsuk-header__navigation-item nhsuk-subnav');

});
