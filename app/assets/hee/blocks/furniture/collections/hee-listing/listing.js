export default () => {
  /**
   * Listing
   * Elements with the selector '.nhsuk-listing' are passed into this class
   */
  class Listing {
    constructor(container) {
      this.container = container;
      this.sort = this.container.querySelector('.hee-listing__filter__sort');

      this.addEventListeners();
      this.toggleJavascriptElements();
    }

    addEventListeners() {
      if (this.sort) {
        [...this.sort.getElementsByTagName('select')].forEach(select => select.addEventListener('change', evt => this.updateResults(evt)));
      }
    }

    toggleJavascriptElements() {
      if (this.sort) {
        const submit = this.sort.querySelector('.hee-listing__filter__submit');
        if (submit) {
          submit.hidden = true;
        }
      }
    }

    updateResults() {
      this.sort.submit();
    }
  }

  [...document.getElementsByClassName('hee-listing')].forEach(listing => new Listing(listing));
}
