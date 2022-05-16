# Newsletter sign up form validation
This component currently only contains the Javascript validation functionality.

## How it works
The newsletter component for the NWP currently uses a third party email subscription service (Pure360).

The markup produced by the back end is currently static, and is served with all validation messages present.

The Javascript initially hides these messages on page load.

The Javascript then adds onfocusout event listeners to the required fields which are currently:
- firstname
- lastname
- email
- consent

On event invocation the field values are validated and if necessary error messages are displayed above the target fields, as well as within the error summary box.

## Nunjucks macro
None / To be developed