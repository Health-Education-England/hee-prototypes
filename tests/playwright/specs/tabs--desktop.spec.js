import { test, expect } from "@playwright/test";

test('Desktop Tabs: toggle tab selection', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-tabs.html');

  // Check default first open tab aria attributes.
  const tabOne = page.locator('#tabsone-tab-1');
  await expect(tabOne).toHaveAttribute('role', 'tab');
  await expect(tabOne).toHaveAttribute('aria-selected', 'true');
  await expect(tabOne).toHaveAttribute('aria-controls', 'tabsone-panel-1');
  await expect(page.locator('#tabsone-panel-1')).toBeVisible();

  // Check second tab aria attributes.
  const tabTwo = page.locator('#tabsone-tab-2');
  await expect(tabTwo).toHaveAttribute('role', 'tab');
  await expect(tabTwo).toHaveAttribute('aria-selected', 'false');
  await expect(tabTwo).toHaveAttribute('aria-controls', 'tabsone-panel-2');
  await expect(page.locator('#tabsone-panel-2')).not.toBeVisible();

  // Check second tab aria attributes.
  const tabThree = page.locator('#tabsone-tab-3');
  await expect(tabThree).toHaveAttribute('role', 'tab');
  await expect(tabThree).toHaveAttribute('aria-selected', 'false');
  await expect(tabThree).toHaveAttribute('aria-controls', 'tabsone-panel-3');
  await expect(page.locator('#tabsone-panel-3')).not.toBeVisible();

  // Click second tab and check aria attributes
  await tabTwo.click();

  await expect(page.locator('#tabsone-panel-1')).not.toBeVisible();
  await expect(tabOne).toHaveAttribute('aria-selected', 'false');

  await expect(page.locator('#tabsone-panel-2')).toBeVisible();
  await expect(tabTwo).toHaveAttribute('aria-selected', 'true');

  await expect(page.locator('#tabsone-panel-3')).not.toBeVisible();
  await expect(tabThree).toHaveAttribute('aria-selected', 'false');

  // Click third tab and check aria attributes
  await tabThree.click();

  await expect(page.locator('#tabsone-panel-1')).not.toBeVisible();
  await expect(tabOne).toHaveAttribute('aria-selected', 'false');

  await expect(page.locator('#tabsone-panel-2')).not.toBeVisible();
  await expect(tabTwo).toHaveAttribute('aria-selected', 'false');

  await expect(page.locator('#tabsone-panel-3')).toBeVisible();
  await expect(tabThree).toHaveAttribute('aria-selected', 'true');

});
