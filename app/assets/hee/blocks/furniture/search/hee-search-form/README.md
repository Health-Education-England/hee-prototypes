# Search: Form

Component containing the search form displayed within the search page header at the top of the page.

## Quick start example

[Preview this component](https://health-education-england.github.io/hee-prototypes/blocks/furniture/search-input.html)

### HTML markup

````html
<form class="hee-search-form" method="get" action="">
  <div class="hee-search-form__wrapper nhsuk-form-group">
    <label class="nhsuk-label nhsuk-u-visually-hidden" for="search-field">Enter a search term</label>
    <input class="hee-search-form__input nhsuk-input" type="search" name="q" autocomplete="off" id="search-field" placeholder="Type search here">
    <button class="hee-search-form__submit" type="submit">
      <span class="nhsuk-u-visually-hidden">Submit</span>
      <svg class="hee-search-form__icon nhsuk-icon" width="14" height="14" viewBox="-5 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#F0F4F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M14.9531 14.95L19.0032 19.0001" stroke="#F0F4F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  </div>
</form>
````

### Nunjucks macro

````
{{ searchForm({
    label: "Enter a search term",
    placeholder: "Type search here",
    submitLabel: "Submit"
}) }}
````

### Nunjucks arguments

Macro takes the following arguments:

| Name        | Type   | Required  | Description                                                                  |
|-------------|--------|-----------|------------------------------------------------------------------------------|
| label       | string | Yes       | Visually hidden label used to describe the form for screen readers.          |
| placeholder | string | Yes       | Default placeholder attribute value for input element.                       |
| submitLabel | string | Yes       | Visually hidden label used to describe the submit button for screen readers. |