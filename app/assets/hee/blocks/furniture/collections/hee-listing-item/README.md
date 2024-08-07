# Listing item

## Guidance

Listings items are used in collection pages / featured content blocks to represent a single result.

There are two variants, one *with* an image in the header, and one *without* an image in the header.

It's worth noting that the image variant has a restriced with of 304px as per design spec.

## Quick start example

#### HTML markup (without image)

```html
<div class="hee-listing-item">
  <h3><a href="http://www.google.com">Result item</a></h3>
  <div class="hee-listing-item__details">
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Profession:</span>
      <span><a href="#">Medical</a></span>
    </div>
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Discipline:</span>
      <span><a href="#">Anaesthesia</a></span>
    </div>
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Duration:</span>
      <span><a href="#">24 months</a></span>
    </div>
  </div>
  <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
</div>
```

#### Nunjucks macro (without image)

```
  {{ listingItem({
    title: "Result item",
    href: "#",
    details: [
      {
        label: "Publications type:",
        value: "Briefing"
      },
      {
        label: "Publish date:",
        value: "07 September 2022"
      }
    ],
    summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
  }) }}
```

#### HTML markup (with image)

```html
<div class="hee-listing-item has-image">
  <div class="hee-listing-item__image" style="background-image:url(/images/training-programme-card.png);"></div>
  <h3><a href="http://www.google.com">Result item</a></h3>
  <div class="hee-listing-item__details">
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Profession:</span>
      <span><a href="#">Medical</a></span>
    </div>
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Discipline:</span>
      <span><a href="#">Anaesthesia</a></span>
    </div>
    <div class="hee-listing-item__details__row">
      <span class="hee-listing-item__details__label">Duration:</span>
      <span><a href="#">24 months</a></span>
    </div>
  </div>
  <div class="hee-listing-item__summary"> Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec. </div>
</div>
```

#### Nunjucks macro (with image)

```
  {{ listingItem({
    image: basePath + "/images/training-programme-card.png",
    title: "Result item",
    href: "http://www.google.com",
    details: [
      {
        label: "Profession:",
        value: "<a href=\"#\">Medical</a>"
      },
      {
        label: "Discipline:",
        value: "<a href=\"#\">Anaesthesia</a>"
      },
      {
        label: "Duration:",
        value: "<a href=\"#\">24 months</a>"
      }
    ],
    summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
  }) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name              | Type    | Required | Description                                                      |
|-------------------|---------|----------|------------------------------------------------------------------|
| image             | string  | No       | Path or URL for the header image                                 |
| title             | string  | Yes      | Result title                                                     |
| href              | string  | Yes      | Link for the result title to point to                            |
| details           | array[] | No       | An array of label and value attributes to include in result body |
| details[].label   | string  | No       | Listing attribute item label                                     |
| details[].value   | string  | No       | Listing attribute item value                                     |
| details[].summary | string  | No       | Result item summary text                                         |
