// Components
import AnchorLinks from '../components/anchorlinks/anchor-links';
import Filter from '../components/filter/filter';
import FilterTag from '../components/filter-tag/filter-tag';
import Listing from '../components/listing/listing';
import Media from '../components/media/media';
import NavMap from '../components/nav-map/nav-map';
import SubMenu from '../components/submenu/submenu';

import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  AnchorLinks();
  Filter();
  FilterTag();
  Listing();
  Media();
  NavMap();
  SubMenu();
});
