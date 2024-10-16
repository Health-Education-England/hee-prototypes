import { test, expect } from "@playwright/test";

test('Newsletter form: validation tests', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-newsletter-form.html');

  // Check default state of error summary is hidden.
  const errorSummary = page.locator('#error-summary');
  await expect(errorSummary).not.toBeVisible();

  // Check default disabled submit button state.
  const submitButton = page.getByRole('button', {name: 'Subscribe'});
  await expect(submitButton).toHaveAttribute('disabled', 'disabled');

  // Test name validation.
  const nameInput = page.getByLabel('Enter your name');
  await nameInput.focus();
  await nameInput.blur();
  await expect(errorSummary).toBeVisible();
  await expect(page.locator('#error-summary-name')).toBeVisible();
  await expect(page.locator('#errors-name')).toBeVisible();
  await nameInput.fill('Joe');
  await nameInput.blur();
  await expect(errorSummary).not.toBeVisible();
  await expect(page.locator('#error-summary-name')).not.toBeVisible();
  await expect(page.locator('#errors-name')).not.toBeVisible();

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
