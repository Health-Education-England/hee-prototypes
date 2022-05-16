# Anchor Links

When added to a page, all applicable heading elements in the page between h2 to h6, will have an id assigned if not already present, and anchors will be created for these, where this component has been placed.

Where no id is present on the heading element, one is constructed using the first word of the heading with a counter number postfixed for uniqueness.

Currently no custom css, as default inherited styles are a close match to the visuals provided.

To ignore a heading on the page for the anchor links add ```data-anchorlinksignore="true"``` to the heading. e.g.

```
<h2 data-anchorlinksignore="true">Don't create an anchor for me</h2>
```

## Quick start examples

#### HTML markup
```
<div class="nhsuk-anchor-links" data-headings="h2,h3,h4,h5,h6">
    <h2 data-anchorlinksignore="true">On this page</h2>
</div>
```

#### Nunjucks macro
```
{%- from 'anchorlinks/macro.njk' import anchorlinks %}

{{ anchorlinks({
  "title": "On this page",
  "headings": "h2,h3,h4,h5,h6"  
  })
}}
```

---

### Nunjucks arguments

The anchorlinks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **title**           | string   | Yes       | Text heading of the anchorlinks component. |
| **headings**        | string   | Yes       | Comma delimited list of target heading element types. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
