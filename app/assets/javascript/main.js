window.require = (script, condition) => {
  if (!condition || document.querySelector(condition) !== null) {
    var scriptElement = document.createElement('script');
    scriptElement.src = script;
    document.body.appendChild(scriptElement);
  }
}

require('/js/components/filter.js', '.nhsuk-filter');
require('/js/components/filter-tag.js', '.nhsuk-filter-tag');
require('/js/components/listing.js', '.nhsuk-listing');