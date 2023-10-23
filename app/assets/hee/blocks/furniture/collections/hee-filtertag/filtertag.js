export default () => {
  /**
  * FilterTag
  * Elements with the selector '.nhsuk-filter-tag' are passed into this class
  */
  class FilterTag {
    constructor(tag) {
      this.tag = tag;
      this.icon = tag.querySelector('.nhsuk-filter-tag__icon');

      this.setUp();
      this.addEventListeners();
    }

    addEventListeners() {
      this.tag.addEventListener('click', (evt) => this.removeFilter(evt));
    }

    removeFilter(evt) {
      evt.preventDefault();

      document.querySelectorAll(`form.nhsuk-filter input[value='${this.tag.dataset.filter}']`).forEach(checkbox => {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
      });

      document.querySelectorAll(`form.nhsuk-filter select option[value='${this.tag.dataset.filter}']`).forEach(option => {
        option.parentElement.selectedIndex = 0;
        option.parentElement.dispatchEvent(new Event('change'));
      });

      this.tag.remove();
    }

    setUp() {
      this.tag.classList.add('nhsuk-filter-tag--js');

      if (this.icon) {
        this.icon.hidden = false;
      }
    }
  }

  [...document.getElementsByClassName('nhsuk-filter-tag')].forEach(tag => new FilterTag(tag));
}
