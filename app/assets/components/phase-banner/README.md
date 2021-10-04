Simplified version of the govuk frontend component

Options: 

version: What version the service is currently in, eg. Alpha, Beta, Production

url: The URL to the feedback survey

title: Title for the link if required (eg. Opens in New Window)

target: Set target of URL

html example

<div class="nhsuk-phase-banner">
  <div class="nhsuk-width-container">
    <p class="nhsuk-phase-banner__content">
      <strong class="nhsuk-tag nhsuk-phase-banner__content__tag">
        alpha
      </strong>
      <span class="nhsuk-phase-banner__text">
        This is a new service – your <a class="nhsuk-link" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K5Gn_5ewMUGcD9DoB1Wyq62_imvDlFpPhawBoObID1NUQTNENlpXMlNZVjJBS0JCUVVLUlQxSkJVUyQlQCN0PWcu" target="_blank" title="Opens in New Window">feedback</a> will help us to improve it.
      </span>
    </p>
  </div>
</div>