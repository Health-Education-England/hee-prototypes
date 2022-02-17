# Timeline component

## Guidance

Timeline component for events. Contains one to many events within a user defined title

## Example with events

### Nunjucks macro
```
  {{ timeline({
    title: "January 2022",
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

### HTML example

```
<div class="nhsuk-timeline-card">
    <h3 class="nhsuk-timeline-card__title">January 2022</h3>
    <div class="nhsuk-timeline-card__event">
      <h4>Lorum Ipsum Fest</h4>
      <p>A celebration of all things Lorum Ipsum</p>
      <dl class="nhsuk-summary-list">
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Date
          </dt>
          <dd class="nhsuk-summary-list__value">
              TBC
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Time
          </dt>
          <dd class="nhsuk-summary-list__value">
            9am
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Link
          </dt>
          <dd class="nhsuk-summary-list__value">
            <a href="/" target="_blank">Link (Opens in new window)</a>
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Details
          </dt>
          <dd class="nhsuk-summary-list__value">
            Lorum Ipsum Dolores Sit Amet
          </dd>
        </div>
      </dl>
    </div>
    <div class="nhsuk-timeline-card__event">
      <h4>Song 2</h4>
      <p>Whoo Hoo this is a longer description for a single event, hopefully on multiple lines</p>
      <dl class="nhsuk-summary-list">
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Date
          </dt>
          <dd class="nhsuk-summary-list__value">
            22/01/2022
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Time
          </dt>
          <dd class="nhsuk-summary-list__value">
            9am
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Location
          </dt>
          <dd class="nhsuk-summary-list__value">
            Mayfair, London
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Contact
          </dt>
          <dd class="nhsuk-summary-list__value">
            <a href="mailto:damon.albarn@parklife.co.uk">damon.albarn@parklife.co.uk</a>
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Link
          </dt>
          <dd class="nhsuk-summary-list__value">
            <a href="/" target="_blank">Link (Opens in new window)</a>
          </dd>
        </div>
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">
            Details
          </dt>
          <dd class="nhsuk-summary-list__value">
            Well I feel heavy metal
          </dd>
        </div>
      </dl>
    </div>
</div>
```

## Example with no events

### Nunjucks macro
```
  {{ timeline({
    title: "February 2022",
    description: "There are currently no events to show. Please come back later."
  }) }}
```

### HTML example
```
<div class="nhsuk-timeline-card--no-events">
  <h3 class="nhsuk-timeline-card__title">No Events to Display</h3>
    <div class="nhsuk-timeline-card__description">
      <p>There are currently no events to show. Please come back later.</p>
    </div>
</div>
```


## Macro arguments

The timeline Nunjucks macro takes the following arguments:

| Name                         | Type    | Required  | Description
| -----------------------------|---------|-----------|-----------------------------------------------------------------------
| **title**                    | string  | Yes       | Period within which the events fall. Displays "TBC" if blank
| **events**                   | array   | No        | Array of events objects. Displays "No Events to Display" if not included
| **description**              | string  | No        | Text to appear below the title, and before the events list

### Each event

| Name                         | Type    | Required  | Description
| -----------------------------|---------|-----------|-----------------------------------------------------------------------
| **title**                    | string  | No        | Title of individual event
| **description**              | string  | No        | Description of individual event
| **date**                     | string  | Yes       | Date of individual event
| **time**                     | string  | No        | Time of individual event
| **location**                 | string  | No        | Location of individual event
| **contact**                  | string  | No        | Contact email for individual event
| **link**                     | string  | No        | Link for individual event
| **details**                  | string  | No        | Free textbox for individual event