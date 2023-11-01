import { test, expect } from "@playwright/test";

test('Filters: selection and clear', async ({ page }) => {
  await page.goto('/templates/examples/publications-collection.html');

  const pageHeader = page.locator('.page__header');

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).toBeInViewport();

  // Uncheck checkbox and expect page reload with results anchor in URL.
  await page.getByLabel('Consultation').click();

  // Check URL to ensure parameters and results has are present.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=dental_professionals&sub_profession=dental_nurse&publication_type=guidance&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();

  // Click the "Publication type" clear all link.
  await page.getByRole('link', {name: 'Clear'}).nth(1).click();

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=dental_professionals&sub_profession=dental_nurse&results_updated=true$'));

  // Ensure submit button is not visible on page load as per javascript logic.
  await expect(page.locator('.hee-listing__filter__submit')).not.toBeVisible();

  await expect(pageHeader).not.toBeInViewport();

  // Change selected "Profession" filter.
  await page.locator('select[name="profession"]').selectOption({ label: 'Medical doctors' });

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=medical_doctors&sub_profession=dental_nurse&publication_type=consultation&publication_type=guidance&results_updated=true$'));

  // Change selected "Sub profession" filter.
  await page.locator('select[name="sub_profession"]').selectOption({ label: 'Dentist' });

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=dental_professionals&sub_profession=dentist&publication_type=consultation&publication_type=guidance&results_updated=true$'));

  // Click the "Profession" clear all link.
  await page.getByRole('link', {name: 'Clear'}).first().click();

  // Ensure all parameters have been removed and the results hash is present.
  await expect(page).toHaveURL(new RegExp('.html\\?profession=&sub_profession=&publication_type=consultation&publication_type=guidance&results_updated=true$'));
});
