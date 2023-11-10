# Listing
Custom component to display a list of results, sort by and pagination (if required).

The listing component uses the listingItem() macro to display each result.

## Nunjucks macro

```
{%- from 'hee-listing/macro.njk' import listingLayout %}

  {% set selectAttributes = {
    id: "sort",
    name: "sort",
    label: {
      text: "Sort by"
    },
    items: [
      {
        value: "newest",
        text: "Newest"
      },
      {
        value: "relevance",
        text: "Relevance"
      }
    ]
  } %}

  {% set submitAttributes = {
    text: "Update",
    classes: "hee-listing__filter__submit"
  } %}

  {% set items = [
    {
      title: "News item #1",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #2",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #3",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #4",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #5",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #6",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    }
  ]
  %}

  {{ listingLayout({
    filter: {
      select: selectAttributes,
      submit: submitAttributes
    },
    tags: [
      {
        label: "Publication type",
        items: [
          {
            text: "Briefing",
            value: "briefing"
          },
          {
            text: "Consultation",
            value: "consultation"
          }
        ]
      },    
      {
        label: "Profession",
        items: [
          {
            text: "Dental professions",
            value: "dental-professions"
          },
          {
            text: "Dental nurse",
            value: "dental-nurse"
          }
        ]
      }      
    ],
    results: items,
    emptyMessage: "No results",
    showPagination: true
  }) }}
```

## HTML output
```html
<div class="hee-listing" id="results">
  <div class="hee-listing__summary">
    <div class="hee-listing__count">
      <h2 class="hee-listing__title nhsuk-heading-l">10 results</h2>
    </div>
    <div class="hee-listing__filter">
      <form method="get" class="hee-listing__filter__sort">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="sort"> Sort by </label>
          <select class="nhsuk-select" id="sort" name="sort">
            <option value="newest">Newest</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
        <button class="nhsuk-button hee-listing__filter__submit" data-module="nhsuk-button" type="submit" hidden=""> Update </button>
        <input data-update-flag="listing" name="results_updated" type="hidden" value="false">
      </form>
    </div>
    <div class="hee-listing__tags">
      <div class="hee-listing__tags__group">
        <label>Profession: </label>
        <div class="nhsuk-filter-tag nhsuk-tag nhsuk-filter-tag--js" data-filter="dental_professionals">
          <span>Dental professionals</span>
          <a class="nhsuk-filter-tag__icon">Remove</a>
        </div>
        <div class="nhsuk-filter-tag nhsuk-tag nhsuk-filter-tag--js" data-filter="dental_nurse">
          <span>Dental nurse</span>
          <a class="nhsuk-filter-tag__icon">Remove</a>
        </div>
      </div>
      <div class="hee-listing__tags__group">
        <label>Publication: </label>
        <div class="nhsuk-filter-tag nhsuk-tag nhsuk-filter-tag--js" data-filter="consultation">
          <span>Consultation</span>
          <a class="nhsuk-filter-tag__icon">Remove</a>
        </div>
        <div class="nhsuk-filter-tag nhsuk-tag nhsuk-filter-tag--js" data-filter="guidance">
          <span>Guidance</span>
          <a class="nhsuk-filter-tag__icon">Remove</a>
        </div>
      </div>
    </div>
  </div>
  <div class="hee-listing__results">
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #1</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #2</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #3</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #4</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #5</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #6</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #7</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #8</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #9</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #10</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publications type:</span>
          <span>Briefing</span>
        </div>
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publish date:</span>
          <span>07 September 2022</span>
        </div>
      </div>
      <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
    </div>
  </div>
  <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="#">
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Page X of Y</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
            <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
          </svg>
        </a>
      </li>
      <li class="nhsuk-pagination-item--next">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="#">
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Page X of Y</span>
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name                     | Type    | Required | Description                                               |
|--------------------------|---------|----------|-----------------------------------------------------------|
| **filter**               | array   | No       | An array of sort form attributes (select and submit)      |
| **results**              | array   | Yes      | An array of results; see listingItem for more information |
| **showPagination**       | boolean | No       | Display pagination for this example?                      |
| **emptyMessage**         | string  | Yes      | String which is displayed when no results found           |
| **tags[]**               | array   | No       | Group of filter tags to display above listings            |
| **tags[].label**         | string  | Yes      | Filter label to grouping filter tags                      |
| **tags[].items[]**       | array   | Yes      | Array of filter tags to display within group              |
| **tags[].items[].text**  | string  | Yes      | Filter tag label to display                               |
| **tags[].items[].value** | string  | Yes      | Filter tag value matching a filter option                 |
