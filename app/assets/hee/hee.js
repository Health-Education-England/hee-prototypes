// NHSUK-HEE Components
import Cookies from './blocks/scaffolding/cookies/cookies';
import SubNav from './blocks/scaffolding/header/navigation/subnav';

// HEE Components
import AnchorLinks from './blocks/content/sidebar/anchorlinks/anchorlinks';
import TableContents from './blocks/content/sidebar/anchorlinks/toc';
import AnchorLinksSticky from './blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky';
import Listing from './blocks/furniture/collections/hee-listing/listing';
import Media from './blocks/content/main/hee-media/media';
import MegaMenu from './blocks/scaffolding/mega-menu/mega-menu';
import NavMap from './blocks/content/main/hee-navmap/navmap';
import Newsletter from '../components/hee/hee-newsletter/newsletter';
import SummaryCard from "./blocks/content/main/card--summary/summary";
import Tabs from './blocks/content/main/hee-tabs/tabs';
import TableCard from './blocks/content/main/table-expander/table-expander';

// Unsorted components
import Filter from './blocks/furniture/collections/hee-filter/filter';
import FilterTag from './blocks/furniture/collections/hee-filtertag/filtertag';

//import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Tabs();
  AnchorLinks();
  AnchorLinksSticky();
  Cookies();
  Filter();
  FilterTag();
  Listing();
  Media();
  MegaMenu();
  NavMap();
  SubNav();
  Newsletter();
  SummaryCard();
  TableContents();
  TableCard();
});
