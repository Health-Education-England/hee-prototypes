# Newsletter Signup Form

## Guidance
The newsletter component for the NWP currently uses a third party email subscription service (Pure360).

It Allows editors to embed a third-party Pure360 newsletter signup form within content.

Custom javascript handles the form validation on the frontend, while Pure360 handles the form submission logic externally.

The Javascript initially hides these messages on page load.

The Javascript then adds onfocusout event listeners to the required fields which are currently:
- firstname
- lastname
- email
- consent

On event invocation the field values are validated and if necessary error messages are displayed above the target fields, as well as within the error summary box.

## Nunjucks macro
```
  {{ newsletterForm({
    title: "Subscribe to our newsletter",
    subtitle: "Subscribe to receive marketing and update emails.",
    accName: "Digital.Readiness",
    listName: "NHS Digital Academy bulletin",
    successUrl: "https://digital-transformation.hee.nhs.uk/newsletter-subscription-successful",
    errorUrl: "https://digital-transformation.hee.nhs.uk/newsletter-subscription-unsuccessful",
    doubleOptin: false
  }) }}
```

```html
<form id="newsletter-form" method="POST" action="https://response.pure360.com/interface/list.php">
    <div id="error-summary" class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" style="display: none;">
        <h2 class="nhsuk-error-summary__title" id="error-summary-title">
There is a problem                    </h2>
        <div class="nhsuk-error-summary__body">
            <ul class="nhsuk-list nhsuk-error-summary__list">
                <li id="error-summary-firstname" style="display: none;">
                    <a href="#errors-firstname">Enter your first name</a>
                </li>
                <li id="error-summary-lastname" style="display: none;">
                    <a href="#errors-lastname">Enter your last name</a>
                </li>
                <li id="error-summary-email" style="display: none;">
                    <a href="#errors-email">Enter a valid email address</a>
                </li>
                <li id="error-summary-consent" style="display: none;">
                    <a href="#errors-consent">Privacy policy consent is required</a>
                </li>
            </ul>
        </div>
    </div>

    <fieldset class="nhsuk-fieldset">

        <span class="nhsuk-error-message" id="errors-firstname" style="display: none;">
            <span class="nhsuk-u-visually-hidden">Error:</span> Enter your first name
        </span>
        <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="firstname">
Enter your first name                        </label>
            <input class="nhsuk-input" id="firstname" name="firstname" type="text" required="">
        <div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>

        <span class="nhsuk-error-message" id="errors-lastname" style="display: none;">
            <span class="nhsuk-u-visually-hidden">Error:</span> Enter your last name
        </span>
        <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="lastname">
Last name                        </label>
            <input class="nhsuk-input" id="lastname" name="lastname" type="text" required="">
        </div>

        <span class="nhsuk-error-message" id="errors-email" style="display: none;">
            <span class="nhsuk-u-visually-hidden">Error:</span> Enter a valid email address
        </span>
        <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="email">
Email address                        </label>
            <input class="nhsuk-input" id="email" name="email" type="email" required="">
        </div>

            <div class="nhsuk-form-group">
                <label class="nhsuk-label" for="region">
Region (optional)                            </label>
                <select class="nhsuk-select" id="region" name="region">
                    <option selected="selected" value="">Select your region</option>
                        <option value="National - England">National - England</option>
                        <option value="National - UK">National - UK</option>
                        <option value="East of England">East of England</option>
                        <option value="London">London</option>
                        <option value="Midlands">Midlands</option>
                        <option value="North East and Yorkshire">North East and Yorkshire</option>
                        <option value="North West England">North West England</option>
                        <option value="South East England">South East England</option>
                        <option value="South West England">South West England</option>
                        <option value="Northern Ireland">Northern Ireland</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Wales">Wales</option>
                        <option value="Other">Other</option>
                </select>
            </div>

            <div class="nhsuk-form-group">
                <label class="nhsuk-label" for="organisation">
Organisation type (optional)                            </label>
                <select class="nhsuk-select" id="organisation" name="organisation">
                    <option selected="selected" value="">Select your organisation type</option>
                        <option value="Arms-length body e.g HEE, PHE">Arms-length body e.g HEE, PHE</option>
                        <option value="Dental practice">Dental practice</option>
                        <option value="Further education (e.g. Sixth form college)">Further education (e.g. Sixth form college)</option>
                        <option value="GP surgery">GP surgery</option>
                        <option value="Higher Education Institute">Higher Education Institute</option>
                        <option value="NHS England">NHS England</option>
                        <option value="NHS Trust">NHS Trust</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Primary and Secondary education">Primary and Secondary education</option>
                        <option value="Private company (e.g. Pharmaceutical company)">Private company (e.g. Pharmaceutical company)</option>
                        <option value="Private health service">Private health service</option>
                        <option value="Professional body">Professional body</option>
                        <option value="Regulatory body">Regulatory body</option>
                        <option value="Research Institute">Research Institute</option>
                        <option value="Royal College/Faculty (e.g. Faculty of Public Health)">Royal College/Faculty (e.g. Faculty of Public Health)</option>
                        <option value="Local Government">Local Government</option>
                </select>
            </div>

            <div class="nhsuk-form-group">
                <label class="nhsuk-label" for="profession">
Profession or specialism (optional)                            </label>
                <select class="nhsuk-select" id="profession" name="profession">
                    <option selected="selected" value="">Select your profession or specialism</option>
                            <option value="Allied health professional">Allied health professional</option>
                            <option value="Ambulance service team">Ambulance service team</option>
                            <option value="Dental professional">Dental professional</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Digital professional - clinical">Digital professional - clinical</option>
                            <option value="Digital professional - non-clinical">Digital professional - non-clinical</option>
                            <option value="Doctor / physician">Doctor / physician</option>
                            <option value="Health informatician">Health informatician</option>
                            <option value="Healthcare scientist">Healthcare scientist</option>
                            <option value="Medical associate">Medical associate</option>
                            <option value="Manager">Manager</option>
                            <option value="Midwife">Midwife</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Nursing associate">Nursing associate</option>
                            <option value="Pharmacist">Pharmacist</option>
                            <option value="Pharmacy professional">Pharmacy professional</option>
                            <option value="Psychological professions">Psychological professions</option>
                            <option value="Public health">Public health</option>
                            <option value="Social care">Social care</option>
                            <option value="Other">Other</option>
                </select>
            </div>

        <span class="nhsuk-error-message" id="errors-consent" style="display: none;">
            <span class="nhsuk-u-visually-hidden">Error:</span> Privacy policy consent is required
        </span>
        <div class="nhsuk-form-group">
            <div class="nhsuk-checkboxes">
                <div class="nhsuk-checkboxes__item">
                    <input class="nhsuk-checkboxes__input" id="consent" name="consent" type="checkbox" required="">
                    <label class="nhsuk-label nhsuk-checkboxes__label" for="consent">
<p>By signing up here, you are agreeing to receive marketing and update emails from Health Education England (HEE) about our work, in line with our Privacy Notice.</p>

<p>You can unsubscribe at any time by clicking the link in the email you receive.</p>                                </label>
                </div>
            </div>
        </div>
            <div class="nhsuk-form-group">
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <div class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6Lda1BAUAAAAABeemGvQod8rVNQQUSM2y9pFK_gS"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lda1BAUAAAAABeemGvQod8rVNQQUSM2y9pFK_gS&amp;co=aHR0cHM6Ly9kaWdpdGFsLXRyYW5zZm9ybWF0aW9uLmhlZS5uaHMudWs6NDQz&amp;hl=en&amp;v=3kTz7WGoZLQTivI-amNftGZO&amp;size=normal&amp;cb=gz5enspw4jip" width="304" height="78" role="presentation" name="a-bj27y0c3im9c" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
Please tick the reCAPTCHA box to enable the subscribe button
            </div>

        <input type="hidden" name="accName" value="Digital.Readiness">
        <input type="hidden" name="listName" value="NHS Digital Academy bulletin">
        <input type="hidden" name="successUrl" value="https://digital-transformation.hee.nhs.uk/newsletter-subscription-successful">
        <input type="hidden" name="errorUrl" value="https://digital-transformation.hee.nhs.uk/newsletter-subscription-unsuccessful">
        <input type="hidden" name="doubleOptin" value="false">
    </fieldset>

    <button class="nhsuk-button" disabled="disabled" type="submit" data-module="nhsuk-button">
        Subscribe
    </button>
</form>
```

### Nunjucks arguments

The macro takes the following arguments:

| Name        | Type    | Required | Description                                 |
|-------------|---------|----------|---------------------------------------------|
| title       | string  | No       | Title displayed above the form              |
| description | string  | No       | Description lede text displayed below title |
| accName     | string  | Yes      | Pure360 account name param                  |
| listName    | string  | Yes      | Pure360 mailing list name param             |
| successUrl  | string  | Yes      | Pure360 success callback URL                |
| errorUrl    | string  | Yes      | Pure360 error callback URL                  |
| doubleOptin | boolean | Yes      | Pure360 double opt in flag                  |