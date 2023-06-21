# Review date
Uses review dates to let users know when a page was last checked and will be checked again.

## Nunjucks macro

```
{{ reviewDate({
    lastReview: "12 February 2016",
    nextReview: "1 February 2019"
}) }}
```

## HTML

```
<div class="hee-review-date">
    <p class="nhsuk-body-s">Page last reviewed: 12 February 2016</p>
    <p class="nhsuk-body-s">Next review due: 1 February 2019 </p>
</div>
```

### Nunjucks arguments

Macro takes the following arguments:

| Name               | Type   | Required | Description |
|--------------------|--------|----------|-------------|
| **lastReview**     | string | No       | Date string |
| **nextReview**     | string | No       | Date string |