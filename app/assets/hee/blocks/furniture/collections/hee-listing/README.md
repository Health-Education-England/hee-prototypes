# Listing
Custom component to display a list of results, sort by and pagination (if required).

The listing component uses the listingItem() macro to display each result.

## Nunjucks macro

```
{%- from 'hee-listing/macro.njk' import listingLayout %}

  {% set selectAttributes = {
    id: "sort",
    name: "sort",
    label: {
      text: "Sort by"
    },
    items: [
      {
        value: "newest",
        text: "Newest"
      },
      {
        value: "relevance",
        text: "Relevance"
      }
    ]
  } %}

  {% set submitAttributes = {
    text: "Update",
    classes: "hee-listing__filter__submit"
  } %}

  {% set items = [
    {
      title: "News item #1",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #2",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #3",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #4",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #5",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    },
    {
      title: "News item #6",
      href: "#",
      details: [
        {
          label: "Publication type:",
          value: "Briefing"
        },
        {
          label: "Publish date:",
          value: "07 September 2022"
        }
      ],
      summary: "Porttitor nulla pellentesque sit consequat, euismod sociis tempor, malesuada. Non senectus a placerat urna, nibh sed aliquam natoque. Diam gravida sit ullamcorper cras eu et mattis donec."
    }
  ]
  %}

  {{ listingLayout({
    filter: {
      select: selectAttributes,
      submit: submitAttributes
    },
    results: items,
    emptyMessage: "No results",
    showPagination: true
  }) }}
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name               | Type    | Required | Description                                               |
|--------------------|---------|----------|-----------------------------------------------------------|
| **filter**         | array   | No       | An array of sort form attributes (select and submit)      
| **results**        | array   | Yes      | An array of results; see listingItem for more information |
| **showPagination** | boolean | No       | Display pagination for this example?                      |
| **emptyMessage**   | string  | Yes      | String which is displayed when no results found           |
