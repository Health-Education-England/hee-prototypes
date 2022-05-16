// HEE Components
import AnchorLinks from '../components/hee/hee-anchorlinks/anchorlinks';
import Newsletter from '../components/hee/hee-newsletter/newsletter';
import Tabs from '../components/hee/hee-tabs/tabs';

// Unsorted components

import Cookies from '../components/cookies/cookies';
import Filter from '../components/filter/filter';
import FilterTag from '../components/filter-tag/filter-tag';
import Listing from '../components/listing/listing';
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
