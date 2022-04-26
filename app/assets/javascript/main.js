// Components
import AnchorLinks from '../components/anchorlinks/anchor-links';
import Cookies from '../components/cookies/cookies';
import Filter from '../components/filter/filter';
import FilterTag from '../components/filter-tag/filter-tag';
import Listing from '../components/listing/listing';
import Media from '../components/media/media';
import NavMap from '../components/nav-map/nav-map';
import SubMenu from '../components/submenu/submenu';
import Tabs from '../components/tabs/tabs';
import Timeline from '../components/timeline/timeline';
import Newsletter from '../components/newsletter/newsletter';

import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  AnchorLinks();
  Cookies();
  Filter();
  FilterTag();
  Listing();
  Media();
  NavMap();
  SubMenu();
  Tabs();
  Newsletter();
});
