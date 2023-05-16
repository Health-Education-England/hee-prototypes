# Card: Downloads
This component is a sidebar based card, displaying links and filetypes to downloads in an unordered list.

## Dependencies
The filetypes in this component are inherited from the `hee-resources` component, and supports the following extenstions:

- pdf
- doc
- docx
- xls
- xlsx
- csv
- txt
- odt
- ott
- fodt
- ods
- odt
- fodp
- oth
- odg
- fodg
- otg
- odb
- fodb
- otg

## Quick start example

[Preview this component](https://health-education-england.github.io/hee-prototypes/blocks/content/sidebar-card-downloads.html)

### HTML markup

````html
<div class="hee-card hee-card--details hee-card--downloads">
    <h3>Alternative versions</h3>
    <div class="hee-card--details__item">
      <a class="hee-resources__link" href="#" title="Publication title - PDF version">
        <span class="hee-resources__text">Publication title - PDF version</span>
        <span class="hee-resources__tag hee-resources__pdf">PDF</span>
      </a>
    </div>
    <div class="hee-card--details__item">
      <a class="hee-resources__link" href="#" title="Publication title - Open Document">
        <span class="hee-resources__text">Publication title - Open Document</span>
        <span class="hee-resources__tag hee-resources__odf">ODF</span>
      </a>
    </div>
    <div class="hee-card--details__item">
      <a class="hee-resources__link" href="#" title="Publication title - Excel">
        <span class="hee-resources__text">Publication title - Excel</span>
        <span class="hee-resources__tag hee-resources__xls">XLS</span>
      </a>
    </div>
</div>
````

---

#### Nunjucks macro

````
{%- from 'hee/blocks/content/sidebar/card--downloads/macro.njk' import downloadsCard %}

{{ downloadsCard({
  title: "Alternative versions",
  items: [
    {
      title: "Publication title - PDF version",
      text: "Publication title - PDF version",
      url: "https://www.google.com",
      docType: "PDF",
      tagColor: "pdf",
    },
    {
      title: "Publication title - Open Document",
      text: "Publication title - Open Document",
      url: "https://www.google.com",
      docType: "ODF",
      tagColor: "odf",
    },
    {
      title: "Publication title - Excel",
      text: "Publication title - Excel",
      url: "https://www.google.com",
      docType: "XLS",
      tagColor: "xls",
    }        
  ]
}) }}
````

---

### Nunjucks arguments

Macro takes the following arguments:

| Name              | Type   | Required  | Description                                              |
|-------------------|--------|-----------|----------------------------------------------------------|
| title             | string | Yes       | Text displayed as card title                             |
| items             | array  | Yes       | Array of download items                                  |
| items[].title     | string | Yes       | Link title for the download                              |
| items[].text      | string | Yes       | Link text displayed for download                         |
| items[].url       | string | Yes       | Link href property                                       |
| items[].docType   | string | Yes       | Download extension displayed in lozenge                  |
| items[].tagColor  | string | Yes       | Colour of lozenge derived from `hee-resources` component |
  