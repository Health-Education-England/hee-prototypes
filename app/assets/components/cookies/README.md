# NHSUK/cookie-consent

Simply include for cookie consent. There are no njk variables. The minified cookie-consent script is included in the /docs/includes/scripts.html location.

https://github.com/nhsuk/cookie-consent

## Script include and set policy page

To use the NHSCookieConsent file, include the following js.

The cookie policy url needs setting too.

```
<script src="/js/nhsuk-cookie-consent.js" data-policy-url="/lks/cookie-policy" type="text/javascript"></script>
```

## Methods

The data is exposed on a NHSUKCookieConsent variable.

# console.log(NHSUKCookieConsent);

Check whether the user has accepted the cookies:

- NHSCookieConsent.getConsented()
- NHSCookieConsent.getPreferences()
- NHSCookieConsent.getStatistics()
- NHSCookieConsent.getMarketing()

## Cookie policy page HTML

Include this HTML on the cookie policy page to give the accept/ reject buttons and show the current status of if they are opted in or out.

```
    <div class="nhsuk-cookie-status">
        <h2>
            You are currently opted
            <span id="acceptedCookies">in to</span>
            <span id="rejectedCookies">out of</span>
            using additional cookies.
        </h2>
        <button id="acceptCookies" class="nhsuk-button">Accept additional cookies</button>
        <button id="rejectCookies" class="nhsuk-button">Reject additional cookies</button>
    </div>
```