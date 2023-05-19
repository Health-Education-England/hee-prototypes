# Author card

## Guidance

This component provides a group of expander components, provided a simple single column table layout within each expander.

It makes use of the existing nhsuk-details component to provide the expanders, leveraging existing styles and javascript
functionality.

## Quick start example

### HTML markup

```html
<div class="hee-table-expander">
  <div class="hee-table-expander__toggle">
    <a data-label-open="Expand all" data-label-close="Collapse all" href="#">Expand all</a>
  </div>
  <details class="nhsuk-details nhsuk-expander" nhsuk-polyfilled="true" id="nhsuk-details0">
    <summary class="nhsuk-details__summary" role="button" aria-controls="nhsuk-details__text0" tabindex="0" aria-expanded="false">
      <span class="nhsuk-details__summary-text"> First item </span>
    </summary>
    <div class="nhsuk-details__text" id="nhsuk-details__text0" aria-hidden="true">
      <div aria-rowcount="3" class="hee-table-expander__container" role="table">
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Defence Medical Services (DMS)</span>
          <span class="hee-table-expander__row__content" role="cell"> 1 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">No of Posts 2013 - indicitive</span>
          <span class="hee-table-expander__row__content" role="cell"> 7 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Competition ratios 2022 data - Ratio</span>
          <span class="hee-table-expander__row__content" role="cell"> 6 (6:37) </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Job/Programme Descriptions</span>
          <span class="hee-table-expander__row__content" role="cell">
              <a href="http://www.yahoo.com"> Kent, Surrey and Sussex </a>
            </span>
        </div>
      </div>
    </div>
  </details>
  <details class="nhsuk-details nhsuk-expander" nhsuk-polyfilled="true" id="nhsuk-details1">
    <summary class="nhsuk-details__summary" role="button" aria-controls="nhsuk-details__text1" tabindex="0" aria-expanded="false">
      <span class="nhsuk-details__summary-text"> Second item </span>
    </summary>
    <div class="nhsuk-details__text" id="nhsuk-details__text1" aria-hidden="true">
      <div aria-rowcount="3" class="hee-table-expander__container" role="table">
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Defence Medical Services (DMS)</span>
          <span class="hee-table-expander__row__content" role="cell"> 1 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">No of Posts 2013 - indicitive</span>
          <span class="hee-table-expander__row__content" role="cell"> 7 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Competition ratios 2022 data - Ratio</span>
          <span class="hee-table-expander__row__content" role="cell"> 6 (6:37) </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Job/Programme Descriptions</span>
          <span class="hee-table-expander__row__content" role="cell">
              <a href="http://www.yahoo.com"> Kent, Surrey and Sussex </a>
            </span>
        </div>
      </div>
    </div>
  </details>
  <details class="nhsuk-details nhsuk-expander" nhsuk-polyfilled="true" id="nhsuk-details2">
    <summary class="nhsuk-details__summary" role="button" aria-controls="nhsuk-details__text2" tabindex="0" aria-expanded="false">
      <span class="nhsuk-details__summary-text"> Third item </span>
    </summary>
    <div class="nhsuk-details__text" id="nhsuk-details__text2" aria-hidden="true">
      <div aria-rowcount="3" class="hee-table-expander__container" role="table">
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Defence Medical Services (DMS)</span>
          <span class="hee-table-expander__row__content" role="cell"> 1 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">No of Posts 2013 - indicitive</span>
          <span class="hee-table-expander__row__content" role="cell"> 7 </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Competition ratios 2022 data - Ratio</span>
          <span class="hee-table-expander__row__content" role="cell"> 6 (6:37) </span>
        </div>
        <div class="hee-table-expander__row" role="row">
          <span class="hee-table-expander__row__heading" role="cell">Job/Programme Descriptions</span>
          <span class="hee-table-expander__row__content" role="cell">
              <a href="http://www.yahoo.com"> Kent, Surrey and Sussex </a>
            </span>
        </div>
      </div>
    </div>
  </details>
</div>
```

### Nunjucks macro

```
{{ tableCard({
  showToggleLink: true,
  toggleLabelOpen: "Expand all",
  toggleLabelClose: "Collapse all",
  items: [
    {
      title: "First item",
      rows: [
        {
          heading: "Defence Medical Services (DMS)",
          content: "1"
        },
        {
          heading: "No of Posts 2013 - indicitive",
          content: "7"
        },
        {
          heading: "Competition ratios 2022 data - Ratio",
          content: "6 (6:37)"
        },
        {
          heading: "Job/Programme Descriptions",
          content: "Kent, Surrey and Sussex",
          href: "http://www.yahoo.com"
        }
      ]
    },
    {
      title: "Second item",
      rows: [
        {
          heading: "Defence Medical Services (DMS)",
          content: "1"
        },
        {
          heading: "No of Posts 2013 - indicitive",
          content: "7"
        },
        {
          heading: "Competition ratios 2022 data - Ratio",
          content: "6 (6:37)"
        },
        {
          heading: "Job/Programme Descriptions",
          content: "Kent, Surrey and Sussex",
          href: "http://www.yahoo.com"
        }
      ]
    },
    {
      title: "Third item",
      rows: [
        {
          heading: "Defence Medical Services (DMS)",
          content: "1"
        },
        {
          heading: "No of Posts 2013 - indicitive",
          content: "7"
        },
        {
          heading: "Competition ratios 2022 data - Ratio",
          content: "6 (6:37)"
        },
        {
          heading: "Job/Programme Descriptions",
          content: "Kent, Surrey and Sussex",
          href: "http://www.yahoo.com"
        }
      ]
    }
  ]
}) }}
```
---

### Nunjucks arguments

The table card Nunjucks macro takes the following arguments:

| Name                   | Type    | Required | Description                         |
|------------------------|---------|----------|-------------------------------------|
| showToggleLink         | boolean | No       | Flag to display expand link or not. |
| toggleLabelOpen        | string  | No       | Open all text label.                |
| toggleLabelClose       | string  | No       | Collapse all text label.               |
| items                  | array   | Yes      | Array of table expander items.      |
| items[].title          | string  | Yes      | Expander title.                     |
| items[].rows           | array   | Yes      | Array of table rows.                |
| items[].rows[].heading | string  | No       | Table row heading text.             |
| items[].rows[].content | string  | Yes      | Table row content.                  |