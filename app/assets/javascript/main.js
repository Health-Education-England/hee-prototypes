window.require = (script, condition) => {
  if (!condition || document.querySelector(condition) !== null) {
    var scriptElement = document.createElement('script');
    scriptElement.src = script;
    document.body.appendChild(scriptElement);
  }
}

require('/js/components/filter.js');
require('/js/components/filterTag.js');
require('/js/components/listing.js');
require('/js/components/submenu.js');
require('/js/components/map.js');