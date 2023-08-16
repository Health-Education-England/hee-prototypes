# Search: Listing

Layout for the search listing results.

## Quick start example

[Preview this component](https://health-education-england.github.io/hee-prototypes/blocks/furniture/search-listing.html)

### HTML markup

````html
<div class="hee-search-listing">
  <h2>3 results</h2>
  <div class="hee-search-listing__items">
    <div class="hee-search-listing-item">
      <h2><a href="#" title="Assessment of Dental Core competency #1">Assessment of Dental Core competency #1</a></h2>
      <span class="hee-search-listing-item__subtitle">Dental and Maxillofacial Radiology recruitment</span>
      <div class="hee-search-listing-item__summary"> Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1) </div>
      <div class="hee-search-listing-item__url">
        <a href="#">https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency</a>
      </div>
      <span class="hee-search-listing-item__updated">Page last updated: 17 January 2023</span>
    </div>
    <div class="hee-search-listing-item">
      <h2><a href="#" title="Assessment of Dental Core competency #9">Assessment of Dental Core competency #9</a></h2>
      <span class="hee-search-listing-item__subtitle">Dental and Maxillofacial Radiology recruitment</span>
      <div class="hee-search-listing-item__summary"> Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1) </div>
      <div class="hee-search-listing-item__url">
        <a href="#">https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency</a>
      </div>
      <span class="hee-search-listing-item__updated">Page last updated: 17 January 2023</span>
    </div>
    <div class="hee-search-listing-item">
      <h2><a href="#" title="Assessment of Dental Core competency #10">Assessment of Dental Core competency #10</a></h2>
      <span class="hee-search-listing-item__subtitle">Dental and Maxillofacial Radiology recruitment</span>
      <div class="hee-search-listing-item__summary"> Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1) </div>
      <div class="hee-search-listing-item__url">
        <a href="#">https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency</a>
      </div>
      <span class="hee-search-listing-item__updated">Page last updated: 17 January 2023</span>
    </div>
  </div>
  <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="#">
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Page X of Y</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
          </svg>
        </a>
      </li>
      <li class="nhsuk-pagination-item--next">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="#">
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Page X of Y</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>
````

### Nunjucks macro

````
{% set items = [
  {
    title: "Assessment of Dental Core competency #1",
    subtitle: "Dental and Maxillofacial Radiology recruitment",
    href: "#",
    url: "https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency",
    summary: "Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1)",
    lastUpdated: "Page last updated: 17 January 2023"
  },
  {
    title: "Assessment of Dental Core competency #2",
    subtitle: "Dental and Maxillofacial Radiology recruitment",
    href: "#",
    url: "https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency",
    summary: "Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1)",
    lastUpdated: "Page last updated: 17 January 2023"
  },
  {
    title: "Assessment of Dental Core competency #3",
    subtitle: "Dental and Maxillofacial Radiology recruitment",
    href: "#",
    url: "https://dental.hee.nhs.uk/dental-trainee-recruitment/dental-specialty-training/oral-medicine/overview-of-oral-medicine/assessment-of-dental-core-competency",
    summary: "Dental Core competency must be demonstrated at the end of UK Dental Core Training year 1 (DCT1)",
    lastUpdated: "Page last updated: 17 January 2023"
  }    
] %}

{{ searchListing({
  count: "3",
  results: items,
  emptyMessage: "No results",
  showPagination: true
}) }}
````

### Nunjucks arguments

Macro takes the following arguments:

| Name                  | Type    | Required  | Description                                          |
|-----------------------|---------|-----------|------------------------------------------------------|
| count                 | string  | Yes       | Total number of results returned.                    |
| emptyMessage          | string  | Yes       | Message displayed when no results returned.          |
| showPagination        | boolean | Yes       | Flag to display pagination or not.                   |
| results               | array   | Yes       | Array containing search results details.             |
| results[].title       | string  | Yes       | Title of the search result.                          |
| results[].subtitle    | string  | Yes       | Subtitle of the search result displayed below title. |
| results[].href        | string  | Yes       | Result link href attribute.                          |
| results[].url         | string  | Yes       | URL displayed within result details.                 |
| results[].summary     | string  | Yes       | Summary text describing the result.                  |
| results[].lastUpdated | string  | Yes       | Last date of update.                                 |