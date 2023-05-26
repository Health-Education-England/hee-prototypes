module.exports = async (page, scenario) => {
  const focusSelector = scenario.focusSelector;

  if (focusSelector) {
    await page.waitForSelector(focusSelector);
    await page.focus(focusSelector);
  }
}
