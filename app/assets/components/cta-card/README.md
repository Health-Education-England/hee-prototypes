# CTA Card
Based on the NHS prototype for the Card component. 

Currently in draft as requesting feedback as to whether there are better ways to extend components in nunjucks, rather than copying and tweaking (as has been done here). 

Also, would be worth discussing whether for something like this we need to create a new component, or whether just tweaking the Card components HTML to include a button would be better.

## Quick start examples

### Card with an title/link

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--clickable">
    <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading">
            <a class="nhsuk-card__link" href="http://hee.nhs.uk">CTA Card</a>
        </h2>
        <a class="nhsuk-button" href="http://hee.nhs.uk" draggable="false">
            Save and continue
        </a>
    </div>
</div>
```


#### Nunjucks macro

```
{{ ctaCard({
    "heading": "CTA Card",
    "clickable": "true",
    "linkText": "Save and continue",
    "href": "http://hee.nhs.uk"
  })
}}
```
### Card with an title/link/description

#### HTML markup

```
<div class="nhsuk-cta-card nhsuk-cta-card--clickable">
  <div class="nhsuk-cta-card__content">
    <h2 class="nhsuk-cta-card__heading">
      CTA Card
    </h2>
    <p class="nhsuk-cta-card__description">A call to action.</p>
    <a class="nhsuk-button" href="https://www.nhs.uk" draggable="false">
        Action
    </a>
  </div>
</div>
```

#### Nunjucks macro

```
{{ ctaCard({
    "heading": "CTA Card",
    "clickable": "true",
    "description": "A call to action.",
    "linkText": "Save and continue",
    "href": "http://hee.nhs.uk"
  })
}}
```

### Card with an image

### Card with an title/link/image

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--clickable">
    <img class="nhsuk-card__img" src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="">
    <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading">
            <a class="nhsuk-card__link" href="http://hee.nhs.uk">CTA Card</a>
        </h2>
        <p class="nhsuk-card__description">A call to action.</p>
        <a class="nhsuk-button" href="http://hee.nhs.uk" draggable="false">
            Save and continue
        </a>
    </div>
</div>
```

#### Nunjucks macro

```
{{ ctaCard({
    "heading": "CTA Card",
    "clickable": "true",
    "description": "A call to action.",
    "imgURL": "https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",
    "linkText": "Save and continue",
    "href": "http://hee.nhs.uk"
  })
}}
```

### Nunjucks arguments

The card Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **heading**         | string   | Yes       | Text heading of the card. If headingHtml is provided, the heading argument will be ignored. |
| **headingHtml**         | string   | Yes       | HTML heading of the card. If headingHtml is provided, the heading argument will be ignored. |
| **headingClasses**         | string   | No        | Optional additional classes to add to heading. Separate each class with a space. |
| **headingLevel**    | integer  | No        | Optional heading level for the card heading. Default: 2 |
| **href**            | string   | No       | The value of the card button href attribute |
| **linkText**            | string   | No       | The value of the card button label |
| **clickable**            | boolean | No       | If set to true, then the class `nhsuk-cta-card--clickable` will be applied. |
| **feature**            | boolean | No       | If set to true, then the class `nhsuk-cta-card__heading--feature` and `nhsuk-cta-card__content--feature` will be applied. |
| **imgURL**          | string   | No        | The URL of the image in the card |
| **imgALT**          | string   | No        | The alternative text of the image in the card |
| **description**     | string   | No        | Text description within the card content. If descriptionHtml is provided, the description argument will be ignored. |
| **descriptionHtml**     | string   | No        | HTML to use within the card content. If descriptionHtml is provided, the description argument will be ignored. |
| **classes**         | string   | No        | Optional additional classes to add to the card. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the card. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
