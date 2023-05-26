module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Custom helper to set focus on page elements.
  await require('./focusState')(page, scenario);
};
