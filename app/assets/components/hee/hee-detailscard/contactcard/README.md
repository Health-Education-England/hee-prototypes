# contact

## Guidance

Contact component for either a person or department. Can be either main content or a card.

Note - "title" is the title of the person eg. Mr, Mrs, Dr. "heading" is the headline of the component.

## Quick start examples

### Person contact

Main content contact for a person. Can include an image with alt text.

```
{{ contact({
  "heading": "Main Content Solo Contact",
  "imgURL": "/images/headshot.jpg",
  "imgALT": "This Person",
  "title": "Doctor",
  "name": "Jo Blogs",
  "displayName": true,
  "departmentName": "HEE",
  "displayDepartmentName": true,
  "jobTitle": "Department Head",
  "displayJobTitle": true,
  "phoneNumber": "01234 567890",
  "displayPhoneNumber": true,
  "email": "jo.bloggs@hee.co.uk",
  "displayEmail": true,
  "address": "123 Fake Street, Fake Town, Fake City, UK, AB1 2CD",
  "displayAddress": true,
  "details": "Lorem ipsum dolor sit amet",
  "displayDetails": true
}) }}
```

### Department contact

Note the addition of "type": "department". Will not render an image.

```
{{ contact({
  "type": "department",
  "heading": "Main Content Department Solo Contact",
  "departmentName": "HEE",
  "displayDepartmentName": true,
  "phoneNumber": "01234 567890",
  "displayPhoneNumber": true,
  "email": "jo.bloggs@hee.co.uk",
  "displayEmail": true,
  "address": "123 Fake Street, Fake Town, Fake City, UK, AB1 2CD",
  "displayAddress": true,
  "details": "Lorem ipsum dolor sit amet",
  "displayDetails": true
}) }}
```

#### Card

Add "classes": "nhsuk-contact__card". Heading will default to "Contact" if empty. Will not render an image.

```
{{ contact({
  "classes": "nhsuk-contact__card",
  "heading": "Contact Card",
  "title": "Doctor",
  "name": "Jo Blogs",
  "displayName": true,
  "departmentName": "HEE",
  "displayDepartmentName": true,
  "jobTitle": "Department Head",
  "displayJobTitle": true,
  "email": "jo.bloggs@hee.co.uk",
  "displayEmail": true
}) }}
```

### contact group HTML example

```
<h2>Halves</h2>

<ul class="nhsuk-grid-row nhsuk-contact-group">
  <li class="nhsuk-grid-column-one-half nhsuk-contact-group__item">
    <div class="nhsuk-contact nhsuk-contact__card">
      <div class="nhsuk-contact__content">
        <h2>Contact</h2>
        <h2 class="nhsuk-contact__name" aria-label="Name" >Doctor Jo Blogs</h2>
        <h4 aria-label="Department" >HEE</h4>
        <p aria-label="Job Title" >Department Head</p>
        <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">
        <div class="nhsuk-contact__secondary-info">
            <p aria-label="Phone Number" ><a href="tel:01234 567890" title="Opens call">01234 567890</a></p>
            <p aria-label="Email" ><a href="mailto:jo.bloggs@hee.co.uk" title="Opens email">jo.bloggs@hee.co.uk</a></p>
            <p aria-label="Address" >123 Fake Street, Fake Town, Fake City, UK, AB1 2CD</p>
            <p class="nhsuk-u-secondary-text-color" aria-label="Details" >Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-contact-group__item">
    <div class="nhsuk-contact nhsuk-contact__card">
      <div class="nhsuk-contact__content">
        <h2>Contact</h2>
        <h2 class="nhsuk-contact__name" aria-label="Name" >Doctor Jo Blogs</h2>
        <h4 aria-label="Department" >HEE</h4>
        <p aria-label="Job Title" >Department Head</p>
        <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">
        <div class="nhsuk-contact__secondary-info">
            <p aria-label="Phone Number" ><a href="tel:01234 567890" title="Opens call">01234 567890</a></p>
            <p aria-label="Email" ><a href="mailto:jo.bloggs@hee.co.uk" title="Opens email">jo.bloggs@hee.co.uk</a></p>
            <p aria-label="Address" >123 Fake Street, Fake Town, Fake City, UK, AB1 2CD</p>
            <p class="nhsuk-u-secondary-text-color" aria-label="Details" >Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </li>
</ul>
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
