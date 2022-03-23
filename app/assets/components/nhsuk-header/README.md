# LKS-Header

Includes all functionality of the NHS header, refer to that documentation for more detail on setting up the header with logo, search options etc.

https://service-manual.nhs.uk/design-system/components/header

To add a submenu, simply add a "children" object to the normal header template, like so:

Macro Example:

{{ lksHeader({
    showNav: true,
    showSearch: true,
    organisation: {
      name: "Health Education England",
      descriptor: "Library and Knowledge Services"
    },
    logos: {
      en: true,
      ni: true,
      scot: true,
      wales: true,
      fpo: false
    },
    primaryLinks: [
      {
        url: "/landing",
        label: "COVID&#8209;19",
        children: [
          {
            url: "/",
            label: "Lorem"
          },
          {
            url: "/",
            label: "Ipsum"
          },
          {
            url: "/",
            label: "Dolor Set"
          },
          {
            url: "/",
            label: "Amet"
          }
        ]
      },
      {
        url: "/landing",
        label: "Learning and development"
      },
      {
        url: "/landing",
        label: "Mobilising knowledge"
      },
      {
        url: "/landing",
        label: "Patient information",
         children: [
          {
            url: "/",
            label: "Lorem"
          },
          {
            url: "/",
            label: "Ipsum"
          },
          {
            url: "/",
            label: "Dolor Set"
          },
          {
            url: "/",
            label: "Amet"
          }
        ]
      },
      {
        url: "/landing",
        label: "Resource discovery",
         children: [
          {
            url: "/",
            label: "Lorem"
          },
          {
            url: "/",
            label: "Ipsum"
          },
          {
            url: "/",
            label: "Dolor Set"
          },
          {
            url: "/",
            label: "Amet"
          }
        ]
     },
      {
        url: "/landing",
        label: "About",
        children: [
          {
            url: "/",
            label: "Lorem"
          },
          {
            url: "/",
            label: "Ipsum"
          },
          {
            url: "/",
            label: "Dolor Set"
          },
          {
            url: "/",
            label: "Amet"
          }
        ]
      }
    ]
  })
}}

The macro will shuffle the URL down into the submenu automatically.

NB: For hyphenated words, please use the character "&#8209;" to prevent line-breaking, for example "COVID&#8209;19"

---

### Nunjucks arguments

The emergencyAlert macro takes the following arguments:

| Name                                    | Type     | Required  | Description  |
| ----------------------------------------|----------|-----------|--------------|
| **showNav**                             | boolean  | No        | Set to "true" to show the navigation links in the header. |
| **showSearch**                          | boolean  | No        | Set to "true" to show the site search input form. |
| **organisation**                        | object   | Yes       | Settings for header with organisational logo. |
| **organisation.name**                   | string   | Yes       | Organisation name value. |
| **organisation.descriptor**             | string   | No        | Organisation descriptor. |
| **organisation.logoURL**                | string   | No        | Organisation logo if using a static asset, such as PNG, is preferred. |
| **organisation.split**                  | string   | No        | Use for long names that should be split over multiple lines |
| **logos**                               | object   | No        | Logo object for multi logo banner |
| **logos.en**                            | boolean  | No        | Logo for England |
| **logos.ni**                            | boolean  | No        | Logo for Northern Ireland |
| **logos.scot**                          | boolean  | No        | Logo for Scotland |
| **logos.wales**                         | boolean  | No        | Logo for Wales |
| **logos.fpo**                           | boolean  | No        | Logo for FPO, disables other logos |
| **primaryLinks**                        | array    | No        | Array of navigation links for use in the header. |
| **primaryLinks.object**                 | object   | No        | Onject containing navigation tree |
| **primaryLinks.object.url**             | string   | No        | The href of a navigation item in the header. |
| **primaryLinks.object.label**           | string   | No        | The label of a navigation item in the header. |
| **primaryLinks.object.children**        | object   | No        | Second level navigation objects |
| **primaryLinks.object.children.url**    | string   | No        | The href of a navigation item in the header. |
| **primaryLinks.object.children.label**  | string   | No        | The label of a navigation item in the header. |
| **attributes**                          | object   | No        | HTML attributes (for example data attributes) to add to the header container. |
| **classes**                             | string   | No        | Classes to add to the header container. |
| **homeHref**                            | string   | No        | The "href" of the link for the logo and mobile home link in the navigation links. Defaults to "/" |
| **homeText**                            | string   | No        | Text for "Home" link in mobile navigation menu |
| **ariaLabel**                           | string   | No        | 	Aria label for the logo href. Defaults to "NHS homepage". |
| **service**                             | object   | No        | NHS property, removed |
| **service.name**                        | string   | No        | NHS property, removed |
| **searchAction**                        | string   | No        | Custom search action endpoint. |
| **searchInputName**                     | string   | No        | The name for the search field. Defaults to "q" |
| **transactionalService**                | removed  | No        | NHS property, removed |
| **transactionalService.longName**       | removed  | No        | NHS property, removed |
| **transactionalService.href**           | removed  | No        | NHS property, removed |






If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
