import { test, expect } from "@playwright/test";

test('Newsletter form: validation tests', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-newsletter-form.html');

  // Check default state of error summary is hidden.
  const errorSummary = page.locator('#error-summary');
  await expect(errorSummary).not.toBeVisible();

  // Check default disabled submit button state.
  const submitButton = page.getByRole('button', {name: 'Subscribe'});
  await expect(submitButton).toHaveAttribute('disabled', 'disabled');

  // Test first name validation.
  const firstNameInput = page.getByLabel('Enter your first name');
  await firstNameInput.focus();
  await firstNameInput.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-firstname')).toBeVisible();
  await expect(page.locator('#errors-firstname')).toBeVisible();
  await firstNameInput.fill('Joe');
  await firstNameInput.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-firstname')).not.toBeVisible();
  await expect(page.locator('#errors-firstname')).not.toBeVisible();

  // Test last name validation.
  const lastNameInput = page.getByLabel('Last name');
  await lastNameInput.focus();
  await lastNameInput.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-lastname')).toBeVisible();
  await expect(page.locator('#errors-lastname')).toBeVisible();
  await lastNameInput.fill('Soap');
  await lastNameInput.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-lastname')).not.toBeVisible();
  await expect(page.locator('#errors-lastname')).not.toBeVisible();

  // Test email validation.
  const emailInput = page.getByLabel('Email address');
  // Focus / blur with empty input.
  await emailInput.focus();
  await emailInput.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-email')).toBeVisible();
  await expect(page.locator('#errors-email')).toBeVisible();
  // Fill input with valid email address.
  await emailInput.fill('joe@soap.com');
  await emailInput.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-email')).not.toBeVisible();
  await expect(page.locator('#errors-email')).not.toBeVisible();
  // Fill input with invalid email address.
  await emailInput.fill('joe');
  await emailInput.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-email')).toBeVisible();
  await expect(page.locator('#errors-email')).toBeVisible();
  // Fill input with valid email address.
  await emailInput.fill('joe@soap.com');
  await emailInput.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-email')).not.toBeVisible();
  await expect(page.locator('#errors-email')).not.toBeVisible();

  // Test consent validation.
  const consentCheckbox = page.locator('#consent');
  await consentCheckbox.focus();
  await consentCheckbox.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-consent')).toBeVisible();
  await expect(page.locator('#errors-consent')).toBeVisible();
  await consentCheckbox.check();
  await consentCheckbox.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-consent')).not.toBeVisible();
  await expect(page.locator('#errors-consent')).not.toBeVisible();

  // Test captcha callback validation.
  const captchaFrame = page.frameLocator('.g-recaptcha iframe').first();
  await captchaFrame.locator('.recaptcha-checkbox').click();
  await expect(submitButton).toBeEnabled();
});
