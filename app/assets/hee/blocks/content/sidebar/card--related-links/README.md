# Related links card
A sidebar block used to display links related to the content being viewed.

There are two style variants for this component:

- Without borders below each link item
- With borders below each item

## Quick start examples

### Related links card - WITHOUT item borders

#### HTML markup

```html
<div class="hee-card hee-related-links">
  <div class="hee-related-links__content">
    <h3 class="hee-related-links__heading">Pages related to this programme</h3>
    <ul class="hee-related-links__list">
      <li>
        <a class="hee-related-links__link" href="#">Overview</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Recruitment timelines</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Eligibility</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Applying</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Current posts</a>
      </li>
    </ul>
  </div>
</div>
```

#### Nunjucks macro

```
  {{ relatedLinksCard({
    heading: "Pages related to this programme",
    links: [
      {
        label: "Overview",
        url: "#"
      },
      {
        label: "Recruitment timelines",
        url: "#"
      },
      {
        label: "Eligibility",
        url: "#"
      },
      {
        label: "Applying",
        url: "#"
      },
      {
        label: "Current posts",
        url: "#"
      }
    ]
  })}}
```

---

### Related links card - WITH item borders

#### HTML markup

```html
<div class="hee-card hee-related-links theme__item-border">
  <div class="hee-related-links__content">
    <h3 class="hee-related-links__heading">Pages related to this programme</h3>
    <ul class="hee-related-links__list">
      <li>
        <a class="hee-related-links__link" href="#">Overview</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Recruitment timelines</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Eligibility</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Applying</a>
      </li>
      <li>
        <a class="hee-related-links__link" href="#">Current posts</a>
      </li>
    </ul>
  </div>
</div>
```

#### Nunjucks macro

```
  {{ relatedLinksCard({
    heading: "Pages related to this programme",
    itemBorder: true,
    links: [
      {
        label: "Overview",
        url: "#"
      },
      {
        label: "Recruitment timelines",
        url: "#"
      },
      {
        label: "Eligibility",
        url: "#"
      },
      {
        label: "Applying",
        url: "#"
      },
      {
        label: "Current posts",
        url: "#"
      }
    ]
  })}}
```

---

### Nunjucks arguments

The relatedNav macro takes the following arguments:

| Name                | Type    | Required  | Description                                                            |
| --------------------|---------|-----------|------------------------------------------------------------------------|
| **heading**         | string  | No        | Text heading of the related-links-card component.                      |
| **itemBorder**      | boolean | No        | Flag to style the item borders                                         |
| **links**           | array   | Yes       | Array of navigation links for use in the related-links-card component. |
| **links[].url**     | string  | Yes       | The href of a navigation item in the related-links-card component.     |
| **links[].label**   | string  | Yes       | The label of a navigation item in the related-links-card component.    |
