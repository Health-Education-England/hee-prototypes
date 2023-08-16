import { test, expect } from "@playwright/test";

test('Media transcript: expand and collapse', async ({ page }) => {
  await page.goto('/blocks/content/examples/main-media-embed.html');

  const transcriptAnchor = page.locator('.hee-media .hee-media__transcript a').first();
  const transcriptContainer = page.locator('.hee-media .hee-media__transcript').first();

  // Expand media transcript.
  await transcriptAnchor.click();
  await expect(transcriptContainer).toHaveClass('hee-media__transcript hee-media__transcript-expanded');

  // Collapse media transcript.
  await transcriptAnchor.click();
  await expect(transcriptContainer).toHaveClass('hee-media__transcript');
});
