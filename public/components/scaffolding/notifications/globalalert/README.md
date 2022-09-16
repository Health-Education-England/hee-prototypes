# globalAlert
Ported from [nhsuk/banner](https://github.com/nhsuk/banner)

## Quick start examples

### Global alert with heading and content - yellow version
The main version of the globalAlert is a yellow banner that sits underneath the navigation element

#### HTML markup

```html
<div class="hee-globalalert" role="complementary">
  <div class="nhsuk-width-container">
    <div class="hee-globalalert__message">
      <h2>Coronavirus (COVID-19)</h2>
      <p><a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">Get the latest advice about coronavirus</a></p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'hee/hee-globalalert/macro.njk' import globalAlert %}

{{ globalAlert({
  "heading": "Coronavirus (COVID-19)",
  "HTML": "<p><a href=\"https://www.nhs.uk/conditions/coronavirus-covid-19/\">Get the latest advice about coronavirus</a></p>"
})}}
```

---

### Global alert with heading and content - black version

#### HTML markup

```html
<div class="hee-globalalert hee-globalalert--black" role="complementary">
  <div class="nhsuk-width-container">
    <div class="hee-globalalert__message">
      <h2 class="nhsuk-heading-xl">Her Majesty Queen Elizabeth II</h2>
      <p>21 April 1926 to 8 September 2022</p><p><a href="https://www.hee.nhs.uk/news-blogs-events/news/her-majesty-queen-elizabeth-ii">We join with the people across HEE and the NHS in mourning the death of Queen Elizabeth II</a></p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'hee/hee-globalalert/macro.njk' import globalAlert %}

{{ globalAlert({
  "customClass": "hee-globalalert--black",
  "heading": "Her Majesty Queen Elizabeth II",
  "headingClass": "nhsuk-heading-xl",
  "HTML": "<p>21 April 1926 to 8 September 2022</p><p><a href="https://www.hee.nhs.uk/news-blogs-events/news/her-majesty-queen-elizabeth-ii">We join with the people across HEE and the NHS in mourning the death of Queen Elizabeth II</a></p>"
})}}
```

---

### Nunjucks arguments

The emergencyAlert macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **heading**                | string   | No        | heading of the hee-globalalert component. |
| **headingClass**                | string   | No        | class of the main heading - i.e. nhsuk-heading-xl |
| **customClass**                | string   | No        | hee-globalalert--black for the black version of the alert |
| **HTML**                   | string   | Yes       | HTML content to be used within the emergency-alert component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
