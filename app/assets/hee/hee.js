// NHSUK-HEE Components
import Cookies from './blocks/scaffolding/cookies/cookies';
import SubNav from './blocks/scaffolding/header/navigation/subnav';

// HEE Components
import AnchorLinks from '../components/hee/hee-anchorlinks/anchorlinks';
import TableContents from '../components/hee/hee-anchorlinks/toc';
import Listing from './blocks/furniture/collections/hee-listing/listing';
import Media from '../components/hee/hee-media/media';
import NavMap from '../components/hee/hee-navmap/navmap';
import Newsletter from '../components/hee/hee-newsletter/newsletter';
//import DetailsCard from '../components/hee/hee-detailscard/detailscard';
import Tabs from '../components/hee/hee-tabs/tabs';
//import Timeline from '../components/hee/hee-timeline/timeline';

// Unsorted components
import Filter from './blocks/furniture/collections/hee-filter/filter';
import FilterTag from './blocks/furniture/collections/hee-filtertag/filtertag';

//import './polyfills';

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
  SubNav();
  Newsletter();
  TableContents();
});
