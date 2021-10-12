# Phase Banner

Simplified version of the govuk frontend component

#### HTML markup

```html
<div class="nhsuk-phase-banner">
  <div class="nhsuk-width-container">
    <p class="nhsuk-phase-banner__content">
      <strong class="nhsuk-tag nhsuk-phase-banner__content__tag">
        NEW SERVICE
      </strong>
      <span class="nhsuk-phase-banner__text">
        This is a new service – your <a class="nhsuk-link" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K5Gn_5ewMUGcD9DoB1Wyq62_imvDlFpPhawBoObID1NUQTNENlpXMlNZVjJBS0JCUVVLUlQxSkJVUyQlQCN0PWcu" target="_blank" title="Opens in New Window">feedback</a> will help us to improve it.
      </span>
    </p>
  </div>
</div>
```

#### Nunjucks macro

```
{{ phaseBanner({
  version: "NEW SERVICE",
  title: "Opens in New Window",
  target: "_blank",
  url: "https://forms.office.com/Pages/ResponsePage.aspx?id=K5Gn_5ewMUGcD9DoB1Wyq62_imvDlFpPhawBoObID1NUQTNENlpXMlNZVjJBS0JCUVVLUlQxSkJVUyQlQCN0PWcu"
}) }}
```

### Nunjucks arguments

The phaseBanner macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **version**                | string   | Yes       | What version the service is currently in, eg. Alpha, Beta, Production
| **url**                    | string   | Yes       | The URL to the feedback survey
| **title**                  | string   | Yes       | Title for the link if required (eg. Opens in New Window)
| **target**                 | string   | Yes       | Set target of URL


If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
