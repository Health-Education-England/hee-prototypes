import { test, expect } from "@playwright/test";

test('transcript expand and collapse', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-media-embed.html');

  const transcriptAnchor = page.locator('.nhsuk-media .nhsuk-media__transcript a').first();
  const transcriptContainer = page.locator('.nhsuk-media .nhsuk-media__transcript').first();

  // Expand media transcript.
  await transcriptAnchor.click();
  await expect(transcriptContainer).toHaveClass('nhsuk-media__transcript nhsuk-media__transcript-expanded');

  // Collapse media transcript.
  await transcriptAnchor.click();
  await expect(transcriptContainer).toHaveClass('nhsuk-media__transcript');
});
