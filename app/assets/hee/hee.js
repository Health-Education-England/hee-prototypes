// NHSUK-HEE Components
import Cookies from './blocks/scaffolding/cookies/cookies';
import SubNav from './blocks/scaffolding/header/navigation/subnav';

// HEE Components
import AnchorLinks from './blocks/content/sidebar/anchorlinks/anchorlinks';
import AnchorLinksSticky from './blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky';
import GlobalMenu from "./blocks/scaffolding/nhse-global-menu/global-menu";
import TableContents from './blocks/content/sidebar/anchorlinks/toc';
import Listing from './blocks/furniture/collections/hee-listing/listing';
import Media from './blocks/content/main/hee-media/media';
import MegaMenu from './blocks/scaffolding/mega-menu/mega-menu';
import NavMap from './blocks/content/main/hee-navmap/navmap';
import Newsletter from './blocks/content/main/hee-newsletter/newsletter';
import SummaryCard from "./blocks/content/main/card--summary/summary";
import Tabs from './blocks/content/main/hee-tabs/tabs';
import TableCard from './blocks/content/main/table-expander/table-expander';

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
  GlobalMenu();
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
