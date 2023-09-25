# Training Journey

A visual representation of a training programme's journey, providing site visitors with a clear understanding of the programme pathway to completion.

## HTML markup
```html
<div class="hee-training-journey">
  <h3>Your training journey</h3>
  <div class="hee-training-journey__group">
    <h4>Prerequisites</h4>
    <div class="hee-training-journey__group__container">
      <div class="hee-training-journey__item first  ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Foundation Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">F2 Standalone Surgery</a>
      </div>
      <div class="hee-training-journey__item  last ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Core surgery</a>
      </div>
    </div>
  </div>
  <div class="hee-training-journey__group">
    <h4>Optional routes</h4>
    <div class="hee-training-journey__group__container">
      <div class="hee-training-journey__item first  ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Cardiothoracic Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">General Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Neurosurgery</a>
      </div>
      <div class="hee-training-journey__item   active">
        <span>You are here</span>
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Oral &amp; Maxillofacial Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Otolaryngology Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Paediatric Surgery </a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Plastic Surgery</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Trauma &amp; Orthopaedics</a>
      </div>
      <div class="hee-training-journey__item   ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Urology</a>
      </div>
      <div class="hee-training-journey__item  last ">
        <a class="hee-training-journey__item__link" href="https://www.abc123.com">Vascular Surgery</a>
      </div>
    </div>
  </div>
</div>
```

## Nunjucks macro
```
  {% set params = {
    title: "Your training journey",
    groups: [
      {
        name: "Prerequisites",
        items: [
          {
            label: "Foundation Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "F2 Standalone Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "Core surgery",
            url: "https://www.abc123.com"
          }
        ]
      },
      {
        name: "Optional routes",
        items: [
          {
            label: "Cardiothoracic Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "General Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "Neurosurgery",
            url: "https://www.abc123.com"
          },
          {
            active: true,
            label: "Oral & Maxillofacial Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "Otolaryngology Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "Paediatric Surgery ",
            url: "https://www.abc123.com"
          },
          {
            label: "Plastic Surgery",
            url: "https://www.abc123.com"
          },
          {
            label: "Trauma & Orthopaedics",
            url: "https://www.abc123.com"
          },
          {
            label: "Urology",
            url: "https://www.abc123.com"
          },
          {
            label: "Vascular Surgery",
            url: "https://www.abc123.com"
          }
        ]
      }
    ]
  } %}

  {{ trainingJourney(params) }}
```

### Nunjucks arguments

The macro takes the following arguments:

| Name                        | Type    | Required | Description                              |
|-----------------------------|---------|----------|------------------------------------------|
| **title**                   | string  | Yes      | Text title heading.                      |
| **groups**                  | array   | Yes      | Array of journey groups.                 |
| **groups[].name**           | string  | Yes      | Group name to display above items.       |
| **groups[].items**          | array   | Yes      | Array of items to diplay within a group. |
| **groups[].items[].active** | boolean | No       | Flag to set an item to active state.     |
| **groups[].items[].label**  | string  | Yes      | Label to display for a group item.       |
| **groups[].items[].url**    | string  | Yes      | Label to display for a group item.       |
