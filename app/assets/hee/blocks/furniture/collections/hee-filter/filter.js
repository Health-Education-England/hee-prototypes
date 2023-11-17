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
      this.initClearToggles();
      this.initCounters();

      // Hide submit button
      if (this.submit) {
        this.submit.hidden = true;
      }
    }

    initFilters() {
      this.groups.forEach(group => {

        if (!this.isGroupFilterActive(group)) {
          // Collapse group if filters not active.
          group.classList.add('nhsuk-filter__group--closed');
        }

        // Disable sub-group select if no option in parent selected.
        if (group.classList.contains('has-subgroup')) {
          const parentSelect = group.querySelector('.nhsuk-form-group.parent-group select');
          const subSelect = group.querySelector('.nhsuk-form-group.sub-group select');

          if (subSelect !== null && parentSelect !== null && parentSelect.value === '') {
            subSelect.setAttribute('disabled', 'disabled');
          }
        }

        // Enable scrollable checkbox groups if more than four options.
        const checkboxes = group.querySelectorAll('.nhsuk-checkboxes');
        checkboxes.forEach(cb => {
          if (cb.childElementCount > 4) {
            cb.classList.add('scrollable');
          }
        });
      });
    }

    initClearToggles() {
      this.groups.forEach(group => {
        const toggleLink = group.querySelector('.nhsuk-filter__group__clear');
        if (this.isGroupFilterActive(group)) {
          toggleLink.classList.add('visible');
        }
      });
    }

    initCounters() {
      this.groups.forEach(group => {
        this.updateActiveCount(group);
      });
    }

    updateActiveCount(group) {
      const countElem = group.querySelector('.nhsuk-hint');

      if (countElem === null) {
        return;
      }

      let count = 0;
      const checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
          count++;
        }
      }

      if (count === 0) {
        countElem.classList.remove('visible');
        return;
      }

      countElem.innerText = `${count} selected`
      countElem.classList.add('visible');
    }

    isGroupFilterActive(group) {
      // Check if checkboxes are active.
      const checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
          return true;
        }
      }

      // Check if selects are active.
      const selectElements = group.querySelectorAll('.nhsuk-select');
      for (let i = 0; i < selectElements.length; i++) {
        if (selectElements[i].value !== '') {
          return true;
        }
      }

      return false;
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

      const parentGroup = evt.target.closest('.nhsuk-filter__group');
      this.updateActiveCount(parentGroup);

      // Check whether select dropdown has child filter and reset that too.
      if (parentGroup.classList.contains('has-subgroup') && evt.target.nodeName === 'SELECT') {
        const wrapper = evt.target.closest('.parent-group');
        if (wrapper) {
          const childSelect = wrapper.nextElementSibling.querySelector('.sub-group select');
          childSelect.selectedIndex = 0;
        }
      }

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
