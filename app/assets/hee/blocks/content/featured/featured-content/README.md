# Featured Content

## Guidance

This block component is used to list relevant / related content at the bottom of a page, usually in the "Featured"
region at the botton of templates.

## Quick start example

#### HTML markup

```html
<div class="hee-featured-content">
  <div class="hee-featured-content__item">
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #1</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publication type:</span>
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
  <div class="hee-featured-content__item">
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #2</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publication type:</span>
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
  <div class="hee-featured-content__item">
    <div class="hee-listing-item">
      <h3><a href="#">Publication item #3</a></h3>
      <div class="hee-listing-item__details">
        <div class="hee-listing-item__details__row">
          <span class="hee-listing-item__details__label">Publication type:</span>
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
</div>
```

#### Nunjucks macro

```
{{ featuredContent([
  {
    title: "Publication item #1",
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
    title: "Publication item #2",
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
    title: "Publication item #3",
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
]) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name                    | Type   | Required | Description                               |
|-------------------------|--------|----------|-------------------------------------------|
| items                   | array  | Yes      | Array of listing items.                   |
| items[].title           | string | Yes      | Title of the featured content.            |
| items[].href            | string | Yes      | URL of the featured content.              |
| items[].details         | array  | No       | Array of listing details (label + value). |
| items[].details[].label | string | No       | Bold label.                               |
| items[].details[].value | string | Yes      | Value next to bolded label.               |
| items[].summary         | string | Yes      | Summary text to display below details.    |
