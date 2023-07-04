import { test, expect } from "@playwright/test";

test('Mobile menu: expand and collapse', async ({ page }) => {
  await page.goto('/blocks/scaffolding/examples/header.html');

  // Set to mobile viewport size.
  page.setViewportSize({ width: 375, height: 667 });

  const menuButton = page.locator('#toggle-menu');

  // Ensure menu toggle button is visible.
  await expect(menuButton).toBeVisible();

  // Check aria attribute default state.
  await expect(menuButton).toHaveAttribute('aria-controls', 'header-navigation');
  await expect(menuButton).toHaveAttribute('aria-label', 'Open menu');

  await menuButton.click();

  // Check menu button attributes after click.
  await expect(menuButton).toHaveClass('nhsuk-header__menu-toggle is-active');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  // Check that sub menu is visible.
  await expect(page.locator('#header-navigation')).toHaveClass('nhsuk-header__navigation js-show');

  // Define sub menu elements.
  const navList = page.locator('.nhsuk-header__navigation-list');
  const subNav = page.locator('.nhsuk-header__navigation-item.nhsuk-subnav');
  const subNavToggle = page.locator('.nhsuk-header__navigation-item.nhsuk-subnav .nhsuk-header__navigation-link');
  const subNavList = page.locator('.nhsuk-subnav__list');

  await subNavToggle.click();

  await expect(navList).toHaveClass('nhsuk-header__navigation-list subnav-open');
  await expect(subNav).toHaveClass('nhsuk-header__navigation-item nhsuk-subnav is-active');
  await expect(subNavList).toBeVisible();

});