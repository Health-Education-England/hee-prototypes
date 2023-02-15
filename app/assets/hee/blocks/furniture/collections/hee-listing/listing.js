export default () => {
  /**
   * Listing
   * Elements with the selector '.nhsuk-listing' and '.hee-listings' are passed
   * into this class.
   *
   * @todo Remove legacy references to .nhsuk-listing and loops once all new
   * collection templates have been implemented.
   */
  class Listing {
    constructor(container) {

      [...container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')].forEach(formElement => {
        this.addEventListeners(formElement);
        this.toggleJavascriptElements(formElement);
      });
    }

    addEventListeners(formElement) {
      if (formElement) {
        [...formElement.getElementsByTagName('select')].forEach(select => {
          select.addEventListener('change', evt => this.updateResults(formElement))
        });
      }
    }

    toggleJavascriptElements(formElement) {
      if (formElement) {
        [...formElement.querySelectorAll('.hee-listing__filter__submit, .nhsuk-listing__sort__submit')].forEach(submit => {
          if (submit) {
            submit.hidden = true;
          }
        })
      }
    }

    updateResults(formElement) {
      formElement.submit();
    }
  }

  [...document.querySelectorAll('.hee-listing, .nhsuk-listing')].forEach(listing => new Listing(listing));
}
