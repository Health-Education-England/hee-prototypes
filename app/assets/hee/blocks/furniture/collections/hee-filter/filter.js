export default () => {
  /**
   * Filter
   * Elements with the selector '.nhsuk-filter' are passed into this class
   */
  class Filter {
    constructor(container) {
      this.container = container;

      this.checkboxes = [...this.container.getElementsByClassName('nhsuk-checkboxes__input')];
      this.groups = [...this.container.getElementsByClassName('nhsuk-filter__group')];
      this.submit = this.container.querySelector('.nhsuk-filter__submit');
      this.clearToggle = [...this.container.getElementsByClassName('nhsuk-filter__group__clear')];

      this.setUp();
      this.addEventListeners();
    }

    addEventListeners() {
      this.checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', evt => this.updateResults(evt));
      });

      this.groups.forEach(group => {
        const legend = group.querySelector('.nhsuk-fieldset__legend');
        if (legend) {
          legend.addEventListener('click', evt => this.toggleGroup(evt));
        }
      });

      this.clearToggle.forEach(toggle => {
        toggle.addEventListener('click', evt => this.clearCheckboxes(evt));
      });
    }

    setUp() {
      this.container.classList.add('nhsuk-filter--js');

      // Close groups
      // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

      // Hide submit button
      if (this.submit) {
        this.submit.hidden = true;
      }
    }

    toggleGroup(evt) {
      evt.preventDefault();
      evt.target.closest('.nhsuk-filter__group').classList.toggle('nhsuk-filter__group--closed');
    }

    updateResults(evt) {
      this.container.submit();
    }

    clearCheckboxes(evt) {
      evt.preventDefault();

      const toggleLink = evt.target;
      const checkboxes = [...toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input')];

      checkboxes.forEach(cb => {
        cb.removeAttribute('checked');
      });

      this.updateResults(evt);
    }
  }

  [...document.getElementsByClassName('nhsuk-filter')].forEach(filter => new Filter(filter));
}
