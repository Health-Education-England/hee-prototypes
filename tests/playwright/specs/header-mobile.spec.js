import { test, expect } from "@playwright/test";

test('Mobile menu: sub nav expand and collapse', async ({ page }) => {
  await page.goto('/blocks/scaffolding/examples/header.html');

  // Set to mobile viewport size.
  page.setViewportSize({ width: 375, height: 667 });

  const menuToggle = page.locator('#toggle-menu');

  // Ensure menu toggle button is visible.
  await expect(menuToggle).toBeVisible();

  // Check aria attribute default state.
  await expect(menuToggle).toHaveAttribute('aria-controls', 'header-navigation');
  await expect(menuToggle).toHaveAttribute('aria-label', 'Open menu');

  await menuToggle.click();

  // Check menu button attributes after click.
  await expect(menuToggle).toHaveClass('nhsuk-header__menu-toggle is-active');
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

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

test('Mobile menu: search input show and hide', async ({ page }) => {
  await page.goto('/blocks/scaffolding/examples/header.html');

  // Set to mobile viewport size.
  page.setViewportSize({ width: 375, height: 667 });

  const searchToggle = page.locator('#toggle-search');

  // Ensure menu toggle button is visible.
  await expect(searchToggle).toBeVisible();

  // Check aria attribute default state.
  await expect(searchToggle).toHaveAttribute('aria-controls', 'search');
  await expect(searchToggle).toHaveAttribute('aria-label', 'Open search');

  await searchToggle.click();

  // Check search toggle attributes after click.
  await expect(searchToggle).toHaveClass('nhsuk-header__search-toggle is-active');
  await expect(searchToggle).toHaveAttribute('aria-expanded', 'true');

  const searchWrapper = page.locator('#wrap-search');

  // Check search wrapper is visible.
  await expect(searchToggle).toBeVisible();

  await searchToggle.click();

  // Check search wrapper is hidden.
  await expect(searchToggle).toBeVisible(false);

  await searchToggle.click();
  await page.locator('#close-search').click();

  // Check search button close icon hides search wrapper.
  await expect(searchToggle).toBeVisible(false);
});
