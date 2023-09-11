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

      this.container = container;

      [...container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')].forEach(formElement => {
        this.addEventListeners(formElement);
        this.toggleJavascriptElements(formElement);
      });

      // Disables browser restoring viewport to position before page reload.
      history.scrollRestoration = 'manual';

      this.scrollToResults();
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

    setUpdatedFlag(isUpdated) {
      let flagElement = this.container.querySelector('input[data-update-flag="listing"]');
      if (flagElement !== null) {
        flagElement.value = isUpdated;
      }
    }

    updateResults(formElement) {
      // Set sort container hidden scroll flag value,to ensure viewport scrolls
      // down to results listings after form submit.
      this.setUpdatedFlag(true);

      formElement.submit();
    }

    scrollToResults() {
      const url = new URL(window.location);

      if (url.searchParams.has('results_updated')) {
        const listingContainer = document.getElementById('results');

        if (listingContainer !== null) {
          listingContainer.scrollIntoView();
        }
      }
    }
  }

  [...document.querySelectorAll('.hee-listing, .nhsuk-listing')].forEach(listing => new Listing(listing));
}
