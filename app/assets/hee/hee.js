// NHSUK-HEE Components
import Cookies from './blocks/scaffolding/nhsuk-hee-cookies/cookies';
import SubNav from './blocks/scaffolding/nhsuk-hee-header/navigation/subnav';

// HEE Components
import AnchorLinks from './blocks/content/sidebar/hee-anchorlinks/anchorlinks';
import AnchorLinksSticky from './blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky';
import TableContents from './blocks/content/sidebar/hee-anchorlinks/toc';
import Listing from './blocks/furniture/collections/hee-listing/listing';
import Media from './blocks/content/main/hee-media/media';
import MegaMenu from './blocks/scaffolding/mega-menu/mega-menu';
import NavMap from './blocks/content/main/hee-navmap/navmap';
import Newsletter from './blocks/content/main/hee-newsletter/newsletter';
import SummaryCard from "./blocks/content/main/hee-card--summary/summary";
import Tabs from './blocks/content/main/hee-tabs/tabs';
import TableCard from './blocks/content/main/hee-table-expander/table-expander';

// Unsorted components
import Filter from './blocks/furniture/collections/hee-filter/filter';
import FilterTag from './blocks/furniture/collections/hee-filtertag/filtertag';

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
  SummaryCard();
  Newsletter();
  TableContents();
  TableCard();
});
