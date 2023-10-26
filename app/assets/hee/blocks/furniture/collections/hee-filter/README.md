# Filter
Custom component which provides groups of facets in the left hand sidebar on collection pages, allowing
site visitors to filter search results in a user-friendly manner.

## Nunjucks macro

```
  {{ filter({
    groups: [
      {
        type: "select",
        name: "profession",
        title: "Profession",
        showClearToggle: true,
        items: [
          {
            text: "All professions",
            value: ""
          },
          {
            text: "Allied health professionals",
            value: "allied_health_professionals"
          },
          {
            text: "Dental professionals",
            value: "dental_professionals",
            selected: true
          },
          {
            text: "Medical doctors",
            value: "medical_doctors"
          },
          {
            text: "Public health professionals",
            value: "public_health_professionals"
          }
        ],
        subGroup: {
          type: "selectbox",
          name: "sub_profession",
          title: "Sub profession",
          items: [
            {
              text: "All sub professions",
              value: ""
            },
            {
              text: "Dental nurse",
              value: "dental_nurse",
              selected: true
            },
            {
              text: "Dental therapist",
              value: "dental_therapist"
            },
            {
              text: "Dentist",
              value: "dentist"
            }
          ]
        }
      },
      {
        type: "checkbox",
        title: "Publication type",
        showClearToggle: true,
        items: [
          {
            text: "Briefing",
            value: "briefing"
          },
          {
            text: "Consultation",
            value: "consultation",
            checked: true
          },
          {
            text: "Data and statistics",
            value: "data_statistics"
          },
          {
            text: "FOI release",
            value: "foi_release"
          },
          {
            text: "Guidance",
            value: "guidance",
            checked: true
          },
          {
            text: "Independent report",
            value: "independent_report"
          },
          {
            text: "Letter",
            value: "letter"
          },
          {
            text: "Policy or strategy",
            value: "policy_strategy"
          }
        ]
      }
    ]
  }) }}
```

## HTML output
```html
<form class="nhsuk-filter" method="get">
  <p class="nhsuk-filter__title nhsuk-heading-l">Filters</p>
  <div class="nhsuk-filter__groups">
    <div class="nhsuk-filter__group has-subgroup">
      <a class="nhsuk-filter__group__clear" href="#">Clear</a>
      <div class="nhsuk-form-group parent-group">
        <fieldset class="nhsuk-fieldset">
          <legend class="nhsuk-fieldset__legend">Profession</legend>
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="profession"> Profession </label>
            <select class="nhsuk-select" id="profession" name="profession">
              <option value="">All professions</option>
              <option value="allied_health_professionals">Allied health professionals</option>
              <option value="dental_professionals" selected>Dental professionals</option>
              <option value="medical_doctors">Medical doctors</option>
              <option value="public_health_professionals">Public health professionals</option>
            </select>
          </div>
        </fieldset>
      </div>
      <div class="nhsuk-form-group sub-group">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="sub_profession"> Sub profession </label>
          <select class="nhsuk-select" id="sub_profession" name="sub_profession">
            <option value="">All sub professions</option>
            <option value="dental_nurse" selected>Dental nurse</option>
            <option value="dental_therapist">Dental therapist</option>
            <option value="dentist">Dentist</option>
          </select>
        </div>
      </div>
    </div>
    <div class="nhsuk-filter__group">
      <a class="nhsuk-filter__group__clear" href="#">Clear</a>
      <div class="nhsuk-form-group">
        <fieldset class="nhsuk-fieldset" aria-describedby="filter_Publication type-hint">
          <legend class="nhsuk-fieldset__legend"> Publication type </legend>
          <div class="nhsuk-hint" id="filter_Publication type-hint"> 0 selected </div>
          <div class="nhsuk-checkboxes">
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-1" name="filter" type="checkbox" value="briefing">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-1"> Briefing </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-2" name="filter" type="checkbox" value="consultation" checked>
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-2"> Consultation </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-3" name="filter" type="checkbox" value="data_statistics">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-3"> Data and statistics </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-4" name="filter" type="checkbox" value="foi_release">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-4"> FOI release </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-5" name="filter" type="checkbox" value="guidance" checked>
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-5"> Guidance </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-6" name="filter" type="checkbox" value="independent_report">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-6"> Independent report </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-7" name="filter" type="checkbox" value="letter">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-7"> Letter </label>
            </div>
            <div class="nhsuk-checkboxes__item">
              <input class="nhsuk-checkboxes__input" id="filter_Publication type-8" name="filter" type="checkbox" value="policy_strategy">
              <label class="nhsuk-label nhsuk-checkboxes__label" for="filter_Publication type-8"> Policy or strategy </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
  <button class="nhsuk-button nhsuk-filter__submit" data-module="nhsuk-button" type="submit"> Update results </button>
  <input data-update-flag="filter" name="results_updated" type="hidden" value="false">
</form>
```

---

### Nunjucks arguments

The filter macro takes the following arguments:

| Name                         | Type    | Required | Description                                  |
|------------------------------|---------|----------|----------------------------------------------|
| **groups[]**                 | array   | Yes      | An array of filter types                     |
| **groups[].type**            | string  | Yes      | Type of filter: "select" or "checkbox"       |
| **groups[].name**            | string  | Yes      | Element name attribute                       |
| **groups[].title**           | string  | Yes      | Title used in the filter fieldset legend     |
| **groups[].showClearToggle** | boolean | Yes      | Flag to display clear link                   |
| **groups[].items[]**         | array   | Yes      | Array of filter option items                 |
| **groups[].items[].text**    | string  | Yes      | Text label for filter option                 |
| **groups[].items[].value**   | string  | Yes      | Filter option value to use in form params    |
| **groups[].subGroup[]**      | array   | No       | Sub-category group containing select element |