export default () => {
  /**
   * Filter
   * Elements with the selector '.nhsuk-filter' are passed into this class
   */
  class Filter {
    constructor(container) {
      this.container = container;

      this.checkboxes = [...this.container.getElementsByClassName('nhsuk-checkboxes__input')];
      this.dropdowns = [...this.container.getElementsByClassName('nhsuk-select')];
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

      this.dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', evt => this.updateResults(evt));
      });

      this.groups.forEach(group => {
        const legend = group.querySelector('.nhsuk-fieldset__legend');
        if (legend) {
          legend.addEventListener('click', evt => this.toggleGroupFieldset(evt));
        }
      });

      this.clearToggle.forEach(toggle => {
        toggle.addEventListener('click', evt => this.clearFilter(evt));
      });
    }

    setUp() {
      this.container.classList.add('nhsuk-filter--js');

      this.initFilters();

      this.clearToggle.forEach(toggle => {
        this.initClearToggle(toggle);
      });

      // Hide submit button
      if (this.submit) {
        this.submit.hidden = true;
      }
    }

    initFilters() {
      this.groups.forEach(group => {
        // Collapse group filters if not active.
        if (!this.isGroupFilterActive(group)) {
          group.classList.add('nhsuk-filter__group--closed');
        }

        // Disable sub-group select if no option in parent selected.
        if (group.classList.contains('has-subgroup')) {
          const parentSelect = group.querySelector('.nhsuk-form-group.parent-group select');
          const subSelect = group.querySelector('.nhsuk-form-group.sub-group select');
          if (subSelect !== null && parentSelect.value === '') {
            subSelect.setAttribute('disabled', 'disabled');
          }
        }
      });
    }

    isGroupFilterActive(group) {
      // Collapse checkbox filter if no checkbox is checked.
      const checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
          return true;
        }
      }

      // Collapse select filter if default option selected
      const selectElements = group.querySelectorAll('.nhsuk-select');
      for (let i = 0; i < selectElements.length; i++) {
        if (selectElements[i].value !== '') {
          return true;
        }
      }
    }

    initClearToggle(toggleLink) {
      const checkboxes = toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input');
      console.log(checkboxes);
      for (let i = 0; i < checkboxes.length; i++ ) {
        if (checkboxes[i].hasAttribute('checked')) {
          toggleLink.classList.add('visible');
          return;
        }
      }

      const selectElements = toggleLink.parentElement.querySelectorAll('.nhsuk-select');
      for (let i = 0; i < selectElements.length; i++) {
        if (selectElements[i].value !== '') {
          toggleLink.classList.add('visible');
          return;
        }
      }
    }

    toggleGroupFieldset(evt) {
      evt.preventDefault();
      evt.target.closest('.nhsuk-filter__group').classList.toggle('nhsuk-filter__group--closed');
    }

    setUpdatedFlag(isUpdated) {
      // Set sort container hidden scroll flag value. to ensure viewport resets
      // after form submit.
      let flagElement = this.container.querySelector('input[data-update-flag="filter"]');
      if (flagElement !== null) {
        flagElement.value = isUpdated;
      }
    }

    updateResults(evt) {
      // Set sort container hidden scroll flag value,to ensure viewport scrolls
      // down to results listings after form submit.
      this.setUpdatedFlag(true);

      this.container.submit();
    }

    clearFilter(evt) {
      this.clearCheckboxes(evt);
      this.clearSelectElements(evt);

      this.updateResults(evt);
    }

    clearCheckboxes(evt) {
      evt.preventDefault();

      const toggleLink = evt.target;
      const checkboxes = toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input');

      checkboxes.forEach(cb => {
        cb.removeAttribute('checked');
      });
    }

    clearSelectElements(evt) {
      evt.preventDefault();

      const toggleLink = evt.target;
      const selectElements = toggleLink.parentElement.querySelectorAll('.nhsuk-select');

      selectElements.forEach(select => {
        select.selectedIndex = 0;
      });
    }
  }

  [...document.getElementsByClassName('nhsuk-filter')].forEach(filter => new Filter(filter));
}
