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

      const groupTags = this.tag.parentElement.querySelectorAll('.nhsuk-filter-tag');

      // Remove entire filter tag group if no other tags present.
      if (groupTags.length === 1) {
        this.tag.parentElement.remove();
      }else {
        this.tag.remove();
      }

      document.querySelectorAll(`form.nhsuk-filter input[value='${this.tag.dataset.filter}']`).forEach(checkbox => {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
      });

      document.querySelectorAll(`form.nhsuk-filter select option[value='${this.tag.dataset.filter}']`).forEach(option => {
        const parentGroupSelect = option.parentElement;
        parentGroupSelect.selectedIndex = 0;

        // Reset sub-group select if we are setting the parent,
        const formGroupElem = option.parentElement.parentElement.parentElement.parentElement;
        if (formGroupElem.classList.contains('parent-group')) {
          const subGroupSelect = formGroupElem.nextElementSibling.querySelector('.nhsuk-select');
          subGroupSelect.selectedIndex = 0;
        }

        parentGroupSelect.dispatchEvent(new Event('change'));
      });
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
