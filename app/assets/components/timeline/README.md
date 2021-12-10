# Timeline

## Guidance

Timeline component for events. Contains one to many events within a user defined time period

## Quick start examples

### Nujucks template

```
  {{ timeline({
    period: "January 2022",
    events: [
      {
        title: "Lorum Ipsum Fest",
        description: "A celebration of all things Lorum Ipsum",
        time: "9am",
        link: "/",
        text: "Lorum Ipsum Dolores Sit Amet"
      },
      {
        title: "Song 2",
        description: "Whoo Hoo",
        date: "22/01/2022",
        time: "9am",
        location: "Mayfair, London",
        contact: "damon.albarn@parklife.co.uk",
        link: "/",
        text: "Well I feel heavy metal"
      }
    ]
  }) }}
```


### Timeline HTML example

```
<div class="nhs-uk__timeline-card">
  <h3>January 2022</h3>
  <div>
      <h4>Lorum Ipsum Fest</h4>
      <p>A celebration of all things Lorum Ipsum</p>
    <div class="nhsuk-grid-row">
      <div>
        <span class="nhsuk-grid-column-one-third"><b>Date</b></span>
        <span class="nhsuk-grid-column-two-thirds">
            TBC
        </span>
      </div>
    </div>
    <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Time</b></span>
          <span class="nhsuk-grid-column-two-thirds">
              9am
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Link</b></span>
          <span class="nhsuk-grid-column-two-thirds">
            <a href="/" target="_blank">Link (Opens in new window)</a>
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Description</b></span>
          <span class="nhsuk-grid-column-two-thirds">
            Lorum Ipsum Dolores Sit Amet
          </span>
        </div>
      </div>
      <hr>
  </div>
  <div>
      <h4>Song 2</h4>
      <p>Whoo Hoo</p>
    <div class="nhsuk-grid-row">
      <div>
        <span class="nhsuk-grid-column-one-third"><b>Date</b></span>
        <span class="nhsuk-grid-column-two-thirds">
            22/01/2022
        </span>
      </div>
    </div>
    <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Time</b></span>
          <span class="nhsuk-grid-column-two-thirds">
              9am
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Location</b></span>
          <span class="nhsuk-grid-column-two-thirds">
              Mayfair, London
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Contact</b></span>
          <span class="nhsuk-grid-column-two-thirds">
              <a href="mailto:damon.albarn@parklife.co.uk">damon.albarn@parklife.co.uk</a>
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Link</b></span>
          <span class="nhsuk-grid-column-two-thirds">
            <a href="/" target="_blank">Link (Opens in new window)</a>
          </span>
        </div>
      </div>
      <hr>
      <div class="nhsuk-grid-row">
        <div>
          <span class="nhsuk-grid-column-one-third"><b>Description</b></span>
          <span class="nhsuk-grid-column-two-thirds">
            Well I feel heavy metal
          </span>
        </div>
      </div>
      <hr>
  </div>
</div>
```

### Nunjucks arguments

The contact Nunjucks macro takes the following arguments:

| Name                         | Type    | Required  | Description
| -----------------------------|---------|-----------|-----------------------------------------------------------------------
| **period**                   | string  | Yes       | Period within which the events fall. Displays "TBC" if blank
| **events**                   | array   | No        | Array of events objects. Displays "No Events to Display" if blank
| **title**                    | string  | No        | Title of individual event
| **description**              | string  | No        | Description of individual event
| **time**                     | string  | No        | Time of individual event
| **date**                     | string  | Yes       | Date of individual event
| **location**                 | string  | No        | Location of individual event
| **contact**                  | string  | No        | Contact email for individual event
| **link**                     | string  | No        | Link for individual event
| **text**                     | string  | No        | Free textbox for individual event

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
