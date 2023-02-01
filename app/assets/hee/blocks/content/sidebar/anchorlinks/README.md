# Anchor Links

This component generates a list of anchor links within the page right hand sidebar, based on the structure
of main page content.

## Default behaviour

When added to a page, all applicable heading elements in the page between h2 to h6, will have an id assigned if not already present, and anchors will be created for these, where this component has been placed.

Where no id is present on the heading element, one is constructed using the first word of the heading with a counter number postfixed for uniqueness.

Currently no custom css, as default inherited styles are a close match to the visuals provided.

To ignore a heading on the page for the anchor links add ```data-anchorlinksignore="true"``` to the heading. e.g.

```html
<h2 data-anchorlinksignore="true">Don't create an anchor for me</h2>
```

#### HTML markup
```html
<div class="nhsuk-anchor-links" data-headings="h2,h3,h4,h5,h6">
    <h2 data-anchorlinksignore="true">On this page</h2>
</div>
```

#### Nunjucks macro
```
{%- from 'hee/blocks/content/sidebar/anchorlinks/macro.njk' import anchorlinks %}

{{ anchorlinks({
  title: "On this page",
  headings: "h2,h3,h4,h5,h6"
  })
}}
```

---

## Table of Contents variant

It is also possible to use this component as a customisable table of contents, configured by custom heading elements 
added to page content.

In order to build a custom table of contents, special heading tags need to be added within the `<div class="page__main">`
container:

### Top level headings:

`<h2 class="toc_h2" data-short-title="Top level">Top level heading</h2>`

### Subheadings (appearing below top level)

`<h3 class="toc_h3" data-short-title="Sub">Subheading below top level</h3>`

Javascript will build the table of contents list of links, based on the existence of these headings within the main content.

You are able to configure custom anchor link text for a particular heading, but making use of the `data-short-title` attribute.

#### HTML markup
```html
<div class="hee-anchorlinks" data-toc-js="true">
    <h2>Table of Contents</h2>
</div>
```

#### Nunjucks macro
```
{%- from 'hee/blocks/content/sidebar/anchorlinks/macro.njk' import anchorlinks %}

{{ anchorLinks({
  title: "Table of Contents",
  toc: true
  })
}}
```

## Nunjucks arguments

The anchorlinks macro takes the following arguments:

| Name         | Type   | Required | Description                                                                           |
|--------------|--------|----------|---------------------------------------------------------------------------------------|
| **title**    | string | Yes      | Text heading of the anchorlinks component.                                            |
| **toc**      | string | No       | If this argument is included, TOC variant is enabled.                                 |
| **headings** | string | Yes      | Comma delimited list of target heading element types (used only for default variant). |
