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
      this.levelTwoGroups = [...this.container.getElementsByClassName('nhsuk-filter__group level-two')];
      this.submit = this.container.querySelector('.nhsuk-filter__submit');
      this.clearToggle = [...this.container.getElementsByClassName('nhsuk-filter__group__clear')];
      this.clearToggleSelectboxes = [...this.container.getElementsByClassName('nhsuk-filter__group__clear for-select')];

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
          const groupElement = legend.closest('.nhsuk-filter__group');
          if (!groupElement.classList.contains('level-two')) {
            legend.addEventListener('click', evt => this.toggleGroup(evt));
          }
        }
      });

      this.clearToggle.forEach(toggle => {
        toggle.addEventListener('click', evt => this.clearCheckboxes(evt));
      });

      this.clearToggleSelectboxes.forEach(toggle => {
        toggle.addEventListener('click', evt => this.clearSelectboxes(evt));
      });
    }

    setUp() {
      this.container.classList.add('nhsuk-filter--js');

      this.initFilters();

      this.clearToggle.forEach(toggle => {
        this.toggleClearLinkVisibility(toggle);
      });

      this.clearToggleSelectboxes.forEach(toggle => {
        this.toggleClearLinkVisibilityForSelectboxes(toggle);
      });

      // Hide submit button
      if (this.submit) {
        this.submit.hidden = true;
      }
    }

    initFilters() {
      this.groups.forEach(group => {
        let collapse = true;

        // Collapse checkbox filter if no checkbox is checked.
        const checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked === true) {
            collapse = false;
            break;
          }
        }

        // Collapse select filter if default option selected
        const selectElements = group.querySelectorAll('.nhsuk-select');
        for (let i = 0; i < selectElements.length; i++) {
          if (selectElements[i].value !== '') {
            collapse = false;
          }
        }

        if (collapse) {
          group.classList.add('nhsuk-filter__group--closed');
        }
      });
    }

    toggleGroup(evt) {
      evt.preventDefault();
      const groupElement = evt.target.closest('.nhsuk-filter__group');

      if (groupElement.getElementsByClassName('nhsuk-select').length > 0) {
        groupElement.classList.toggle('nhsuk-filter__group--closed');

        const adjacentLevel2Element = groupElement.nextElementSibling;
        if (adjacentLevel2Element.classList.contains('nhsuk-filter__group')
          && adjacentLevel2Element.classList.contains('level-two')) {
          adjacentLevel2Element.classList.toggle('nhsuk-filter__group--level-two-closed');
        }
      } else {
        groupElement.classList.toggle('nhsuk-filter__group--closed');
      }
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

    clearCheckboxes(evt) {
      evt.preventDefault();

      const toggleLink = evt.target;
      const checkboxes = [...toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input')];

      checkboxes.forEach(cb => {
        cb.removeAttribute('checked');
      });

      this.updateResults(evt);
    }

    clearSelectboxes(evt) {
      evt.preventDefault();

      const toggleLink = evt.target;
      const selectbox = [...toggleLink.parentElement.querySelectorAll('.nhsuk-select')];

      selectbox.forEach(cb => {
        cb.selectedIndex = 0;
      });

      this.updateResults(evt);
    }

    toggleClearLinkVisibility(toggleLink) {
      const checkboxes = [...toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input')];
      for (let i = 0; i < checkboxes.length; i++ ) {
        if (checkboxes[i].hasAttribute('checked')) {
          toggleLink.classList.add('visible');
          break;
        }
      }
    }

    toggleClearLinkVisibilityForSelectboxes(toggleLink) {
      const selectboxes = [...toggleLink.parentElement.querySelectorAll('.nhsuk-select')];
      for (let i = 0; i < selectboxes.length; i++ ) {
        if (selectboxes[i].value !== '') {
          toggleLink.classList.add('visible');
        }
      }
    }
  }

  [...document.getElementsByClassName('nhsuk-filter')].forEach(filter => new Filter(filter));
}
