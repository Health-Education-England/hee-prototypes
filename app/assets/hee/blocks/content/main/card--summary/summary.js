export default () => {

  class SummaryCard {

    constructor(summaryCard) {
      this.summaryCard = summaryCard;
      this.toggleLink = this.summaryCard.querySelector('.hee-card--summary__toggle');

      this.addEventListeners();
    }

    /**
     * Add event listeners to toggle link.
     */
    addEventListeners() {
      // Handles toggle click event.
      this.toggleLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggleSummary();
      })

      // Handles toggle link enter and spacebar key press.
      this.toggleLink.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
          event.preventDefault();
          this.toggleSummary();
        }
      })
    }

    /**
     * Toggle all expander content visibility within table card.
     */
    toggleSummary() {
      this.summaryCard.classList.toggle('default');
    }
  }

  [...document.getElementsByClassName('hee-card--summary')].forEach(summaryCard => new SummaryCard(summaryCard));
}
