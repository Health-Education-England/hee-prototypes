class Listing {
  constructor(list) {
    this.list = list;
    this.sort = this.list.querySelector('.nhsuk-listing__sort');

    this.addEventListeners();
    this.toggleJavascriptElements();
  }

  addEventListeners() {
    if (this.sort) {
      [...this.sort.getElementsByTagName('select')].forEach(select => select.addEventListener('change', (evt) => this.updateResults(evt)));
    }
  }

  toggleJavascriptElements() {
    if (this.sort) {
      const submit = this.sort.querySelector('.nhsuk-listing__sort__submit');
      if (submit) {
        submit.hidden = true;
      }
    }
  }

  updateResults() {
    this.sort.submit();
  }
}

[...document.getElementsByClassName('nhsuk-listing')].forEach(listing => {
  new Listing(listing);
});