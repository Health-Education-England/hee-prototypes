# DETAILSCARD/PERSON

## Guidance
The personCard is a details card variation for a person. 

## Quick start examples

### Person contact

Main content contact for a person. Can include an image with alt text.

```
{{ personCard({
    title: "Dr",
    name: "Bobby Smith", 
    initials: "BS",
    pronouns: "They/them",
    jobRole: "Content Editor",
    department: "National Website Platform",
    organisation: "NHS UK",
    address: {
      line1: "2 Stephenson St",
      line2: "",
      line3: "",
      city: "Birmingham",
      county: "West Midlands",
      postcode: "B1 2SE"
    },
    email: "bobby.smithandthelongestemail@hee.co.uk",
    telephone: "01162344444",
    website: "http://nhs.uk/",
    twitter: "nhsengland",
    linkedIn: "nhs",
    description: "Lorem upsum blah blah"
}) }}
```


### Nunjucks arguments

The contact Nunjucks macro takes the following arguments:

| Name                         | Type     | Required  | Description
| -----------------------------|----------|-----------|--------------------------------------------------------------
| **classes**                  | string   | No        | "nhsuk-contact__card" denotes type "card"
| **type**                     | string   | No        | "department" denotes type "department"
| **heading**                  | string   | No        | Heading of the contact
| **headingLevel**             | integer  | No        | Optional heading level for the contact heading. Default: 2
| **imgURL**                   | string   | No        | The URL of the image in the contact
| **imgALT**                   | string   | No        | The alternative text of the image in the contact
| **initials**                 | string   | No        | Initials for hero
| **title**                    | integer  | No        | Title of person. Will display before name if present
| **name**                     | integer  | No        | Department Name string
| **displayName**              | boolean  | No        | Set true to render name
| **departmentName**           | integer  | No        | Department Name string
| **displayDepartmentName**    | boolean  | No        | Set true to render department name
| **jobTitle**                 | integer  | No        | Department Name string
| **displayJobTitle**          | boolean  | No        | Set true to render jobTitle
| **phoneNumber**              | integer  | No        | Department Name string
| **displayPhoneNumber**       | boolean  | No        | Set true to render phoneNumber
| **email**                    | integer  | No        | Department Name string
| **displayEmail**             | boolean  | No        | Set true to render email
| **addressLine1**             | string   | No        | Address string (individual lines)
| **addressLine2**             | string   | No        | Address string (individual lines)
| **addressLine3**             | string   | No        | Address string (individual lines)
| **addressCity**              | string   | No        | Address string (individual lines)
| **addressCounty**            | string   | No        | Address string (individual lines)
| **addressPostcode**          | string   | No        | Address string (individual lines)
| **displayAddress**           | boolean  | No        | Set true to render address
| **details**                  | string   | No        | Secondary details for the contact
| **displayDetails**           | boolean  | No        | Set true to render details
| **viewMore**                 | string   | No        | The URL of the "view more" link


If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
