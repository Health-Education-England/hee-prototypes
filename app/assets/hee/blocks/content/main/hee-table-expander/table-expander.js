export default () => {
  /**
   * Responsible for providing the "expand all" toggle functionality for table
   * cards.
   */
  class TableCard {

    constructor(tableCard) {
      this.tableCard = tableCard;
      this.toggleLink = this.tableCard.querySelector('.hee-table-expander__toggle a');
      this.expanders = this.tableCard.querySelectorAll('.nhsuk-expander');
      this.stateOpen = false;

      if (this.toggleLink !== null) {
        this.toggleLink.innerText = this.toggleLink.dataset.labelOpen;
        this.addEventListeners();
        this.initExpanderObserver();
      }
    }

    /**
     * Add event listeners to toggle link and summary elements.
     */
    addEventListeners() {
      // Handles toggle click event.
      this.toggleLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggleExpanders();
      })

      // Handles toggle link enter and spacebar key press.
      this.toggleLink.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
          event.preventDefault();
          this.toggleExpanders();
        }
      })
    }

    /**
     * We use observers to react to click events on individual expanders, as this
     * event functionality is handled by the nhsuk-details component's javascript.
     */
    initExpanderObserver() {
      // Configure observer to react to changes in an expander's "open" attribute.
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
            this.updateToggleState();
          }
        })
      });

      this.expanders.forEach( (expander) => {
        observer.observe(expander, {attributes: true});
      });
    }

    /**
     * Toggle all expander content visibility within table card.
     */
    toggleExpanders() {
      // Open / close each expander depending on current state.
      this.expanders.forEach( (expander) => {
        !this.stateOpen ? this.openExpander(expander) : this.closeExpander(expander);
      });

      // Toggle state flag.
      this.stateOpen = !this.stateOpen;

      // Toggle button text.
      !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose
    }

    /**
     *  Determines whether all expanders have been opened or closed and updates
     *  the state flag and toggle link text accordingly.
     *
     *  Function is called when MutationObserver detects a change in expander
     *  "open" attribute.
     */
    updateToggleState() {
      let allOpen = 0;
      
      this.expanders.forEach( (expander) => {
        if (!expander.hasAttribute('open')){
          this.closeExpander(expander);
        }else{
          this.setOpenAttributes(expander);
          allOpen++;
        }
      });

      !(allOpen === this.expanders.length) ? this.stateOpen = false : this.stateOpen = true;
      !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose
    }

    /**
     * Opens an expander element.
     * @param {HTMLElement} expander Expander element.
     */
    openExpander(expander) {
      expander.setAttribute('open', 'open');
    }

    /**
     * Closes an expander element.
     * @param {HTMLElement} expander Expander element.
     */
    closeExpander(expander) {
      const summary = expander.querySelector('.nhsuk-details__summary');
      const text = expander.querySelector('.nhsuk-details__text');

      summary.setAttribute('aria-expanded', 'false');
      text.setAttribute('aria-hidden', 'true');
      expander.removeAttribute('open');
    }

    setOpenAttributes(expander) {
      const summary = expander.querySelector('.nhsuk-details__summary');
      const text = expander.querySelector('.nhsuk-details__text');

      summary.setAttribute('aria-expanded', 'true');
      text.setAttribute('aria-hidden', 'false');
    }
  }

  [...document.getElementsByClassName('hee-table-expander')].forEach(tableCard => new TableCard(tableCard));
}