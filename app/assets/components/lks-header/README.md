# LKS-Header

Includes all functionality of the NHS header, refer to that documentation for more detail on setting up the header with logo, search options etc.

https://service-manual.nhs.uk/design-system/components/header

To add a submenu, simply add a "children" object to the normal header template, like so:

Macro Example:

The macro will shuffle the URL down into the submenu automatically.

NB: For hyphenated words, please use the character "&#8209;" to prevent line-breaking, for example "COVID&#8209;19"

HTML example:





---

### Nunjucks arguments

The emergencyAlert macro takes the following arguments:

| Name                                    | Type     | Required  | Description  |
| ----------------------------------------|----------|-----------|--------------|
| **showNav**                             | boolean  | No        |  |
| **showSearch**                          | boolean  | No        |  |
| **organisation**                        | object   | No        |  |
| **organisation.name**                   | string   | No        |  |
| **organisation.split**                  | string   | No        |  |
| **organisation.descriptor**             | string   | No        |  |
| **organisation.logoURL**                | string   | No        |  |
| **logos**                               | object   | No        |  |
| **logos.en**                            | boolean  | No        |  |
| **logos.scot**                          | boolean  | No        |  |
| **logos.wales**                         | boolean  | No        |  |
| **logos.ni**                            | boolean  | No        |  |
| **logos.fpo**                           | boolean  | No        |  |
| **primaryLinks**                        | array    | No        |  |
| **primaryLinks.object**                 | object   | No        |  |
| **primaryLinks.object.url**             | string   | No        |  |
| **primaryLinks.object.label**           | string   | No        |  |
| **primaryLinks.object.children**        | object   | No        |  |
| **primaryLinks.object.children.url**    | string   | No        |  |
| **primaryLinks.object.children.label**  | string   | No        |  |
| **classes**                             | string   | No        | ? |
| **homeHref**                            | string   | No        |  |
| **homeText**                            | string   | No        |  |
| **ariaLabel**                           | string   | No        |  |
| **service**                             | object   | No        | ? |
| **service.name**                        | string   | No        | ? |
| **searchAction**                        | string   | No        | ? |
| **searchInputName**                     | string   | No        | ? |
| **transactionalService**                | object   | No        | ? |
| **transactionalService.longName**       | string   | No        | ? |
| **transactionalService.href**           | string   | No        | ? |






If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
