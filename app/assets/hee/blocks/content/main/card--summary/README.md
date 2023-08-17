# Card--Summary

Component which summarises content for website visitors, by displaying a list of vertically aligned labels and corresponding values, in the right hand sidebar.

## HTML markup
```html
<div class="hee-card hee-card--summary">
  <h3 class="hee-card--summary__heading">Programme summary</h3>
  <ul class="hee-card--summary__list">
    <li class="hee-card--summary__item">
      <span class="hee-card--summary__item__label">Training programme</span>
      <span class="hee-card--summary__item__value"> Core Training Surgery </span>
    </li>
    <li class="hee-card--summary__item">
      <span class="hee-card--summary__item__label">Training type</span>
      <span class="hee-card--summary__item__value">
          <a class="hee-card--summary__item__link" href="http://www.randomurlhere.com">Core Training</a>
        </span>
    </li>
    <li class="hee-card--summary__item">
      <span class="hee-card--summary__item__label">Professions</span>
      <span class="hee-card--summary__item__value"> Medical </span>
    </li>
    <li class="hee-card--summary__item">
      <span class="hee-card--summary__item__label">Fill rate</span>
      <span class="hee-card--summary__item__value"> 100% </span>
    </li>
  </ul>
</div>
```

## Nunjucks macro
```
{{ summaryCard({
  title: "Programme summary",
  items: [
    {
      label: "Training programme",
      value: "Core Training Surgery"
    },
    {
      label: "Training type",
      url: "http://www.randomurlhere.com",
      value: "Core Training"
    },
    {
      label: "Professions",
      value: "Medical"
    },
    {
      label: "Fill rate",
      value: "100%"
    }
  ]
}) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name              | Type     | Required | Description                                    |
|-------------------|----------|----------|------------------------------------------------|
| **title**         | string   | No       | Text heading.                                  |
| **items**         | array    | Yes      | Array of items in the component list.          |
| **items[].url**   | string   | No       | Turns the item value into a link when present. |
| **items[].label** | string   | No       | Optional label displayed above item value.     |
| **items[].value** | string   | Yes      | Value of the summary item to be displayed.     |
