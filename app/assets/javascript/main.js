// NHSUK-HEE Components
import Cookies from '../components/nhsuk-hee/nhsuk-hee-cookies/cookies';

// HEE Components
import AnchorLinks from '../components/hee/hee-anchorlinks/anchorlinks';
import Listing from '../components/hee/hee-listing/listing';
import Newsletter from '../components/hee/hee-newsletter/newsletter';
import Tabs from '../components/hee/hee-tabs/tabs';

// Unsorted components


import Filter from '../components/filter/filter';
import FilterTag from '../components/filter-tag/filter-tag';
import Media from '../components/media/media';
import NavMap from '../components/nav-map/nav-map';
import SubMenu from '../components/submenu/submenu';
import Timeline from '../components/timeline/timeline';

import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Tabs();
  AnchorLinks();
  Cookies();
  Filter();
  FilterTag();
  Listing();
  Media();
  NavMap();
  SubMenu();
  Newsletter();
});
