# HEE Banner
Ported from [nhsuk/banner](https://github.com/nhsuk/banner)

## Quick start examples

### Banner with heading and content - Alert version
Main version of the banner is a yellow banner that sits underneath the breadcrumb navigation

#### HTML markup

```html
<div class="hee-banner " role="complementary">
  <div class="nhsuk-width-container">
    <div class="hee-banner__message">
      <h2>H2 - This is an alert</h2>
      <h3>H3 - This is the alert text and <a href="#">this is the link</a></h3>
      <p><strong>Body</strong> - This is banner body copy <a href="#">this is the link</a></p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'hee/scaffolding/notifications/banner/macro.njk' import banner %}

{{ banner({
    HTML: "<h2>H2 - This is an alert</h2>
     <h3>H3 - This is the alert text and <a href=\"#\">this is the link</a></h3>
     <p><strong>Body</strong> - This is banner body copy <a href=\"#\">this is the link</a></p>
    "
})}}
```

---

### Banner with heading and content - Mourning version
This version of the banner is a black banner that sits underneath the breadcrumb navigation

#### HTML markup

```html
<div class="hee-banner hee-banner--mourning" role="complementary">
  <div class="nhsuk-width-container">
    <div class="hee-banner__message">
      <h2>H2 - Her Majesty Queen Elizabeth II</h2>
      <h3>H3 - 21 April 1926 to 8 September 2022</h3>
      <p><a href="#">We join with the people across HEE and the NHS in mourning the death of Queen Elizabeth II</a></p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{{ banner({
    customClass: "hee-banner--mourning",
    HTML: "<h2>H2 - Her Majesty Queen Elizabeth II</h2>
     <h3>H3 - 21 April 1926 to 8 September 2022</h3>
     <p><a href=\"#\">We join with the people across HEE and the NHS in mourning the death of Queen Elizabeth II</a></p>
    "
})}}
```

### Banner with heading and content - Announcement version
This version of the banner is a maroon banner that sits above the header and below the cookie consent

#### HTML markup

```html
<div class="hee-banner hee-banner--announcement" role="complementary">
  <div class="nhsuk-width-container">
    <div class="hee-banner__message">
      <h2>H2 - This is an alert</h2>
      <h3>H3 - This is the alert text and <a href="#">this is the link</a></h3>
      <p><strong>Body</strong> - This is banner body copy <a href="#">this is the link</a></p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{{ banner({
    customClass: "hee-banner--announcement",
    HTML: "<h2>H2 - This is an alert</h2>
     <h3>H3 - This is the alert text and <a href=\"#\">this is the link</a></h3>
     <p><strong>Body</strong> - This is banner body copy <a href=\"#\">this is the link</a></p>
    "
})}}
```

---

### Nunjucks arguments

The emergencyAlert macro takes the following arguments:

| Name                       | Type     | Required  | Description                                                   |
| ---------------------------|----------|-----------|---------------------------------------------------------------|
| **heading**                | string   | No        | heading of the hee-banner component.                     |
| **headingClass**           | string   | No        | class of the main heading - i.e. nhsuk-heading-xl             |
| **customClass**            | string   | No        | hee-banner--black for the black version of the alert     |
| **HTML**                   | string   | Yes       | HTML content to be used within the emergency-alert component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
