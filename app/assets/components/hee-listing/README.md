# Listing
Custom component to display a list of results, containing filters (if provided), results, sort by and pagination (if required)

## Nunjucks macro

```
{%- from 'listing/macro.njk' import listing %}

{{ listing({
  showPagination: true,
  pageType: "bulletin",
  items: [
    {
      title: "Item one",
      summaryList: {
        rows: [
          {
            key: {
              text: "Category"
            },
            value: {
              text: "Lorem ipsum dolor sit amet"
            }
          },
          {
            key: {
              text: "Organisation"
            },
            value: {
              text: "Organisation one"
            }
          },
          {
            key: {
              text: "Overview"
            },
            value: {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt felis in felis pharetra, at fringilla neque auctor"
            }
          },
          {
            key: {
              text: "Website"
            },
            value: {
              html: "<a href=\"#\">Website title</a>"
            }
          }
        ]
      }
    },
    {
    title: "Item two",
    summaryList: {
      rows: [
        {
          key: {
            text: "Category"
          },
          value: {
            text: "Category one, category two"
          }
        },
        {
          key: {
            text: "Organisation"
          },
          value: {
            text: "Organisation three"
          }
        },
        {
          key: {
            text: "Overview"
          },
          value: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt felis in felis pharetra, at fringilla neque auctor"
          }
        },
        {
          key: {
            text: "Website"
          },
          value: {
            html: "<a href=\"#\">Website title</a>"
          }
        }
      ]
    }
  ],
  filter: {
    groups: [
      {
        title: "Category",
        items: [
          {
            text: "Category one"
          },
          {
            text: "Category two"
          }
        ]
      },
      {
        title: "Organisation",
        items: [
          {
            text: "Organisation one"
          },
          {
            text: "Organisation two"
          },
          {
            text: "Organisation three"
          }
        ]
      }
    ]
  }
}) }}
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **filter**                 | array    | No        | An array of filter types; see filter component for more information
| **items**                  | array    | Yes       | An array of results; see summaryList for more information |
| **showPagination**         | boolean  | No        | Display pagination for this example? |
| **pageType**               | string   | No        | The list item display will be varied based on the page type. It can be "search", "bulletin" |
