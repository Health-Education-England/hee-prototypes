export default () => {

  /**
   * Provides menu toggle logic for Global Menu component.
   */
  class GlobalMenu {

    constructor(globalMenu) {
      this.toggleBtn = globalMenu.querySelector('.nhse-global-menu__btn');
      this.navigation = globalMenu.querySelector('.nhse-global-menu__dropdown');
      this.stateOpen = false;

      this.addEventListeners();
    }

    /**
     * Add click and enter / spacebar key press event listeners.
     */
    addEventListeners() {
      this.toggleBtn.addEventListener('click', () => {
        this.toggleMenu();
      });

      this.toggleBtn.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
          event.preventDefault();
          this.toggleMenu();
        }
      })
    }

    toggleMenu() {
      if (!this.stateOpen) {
        this.menuOpen();
      } else {
        this.menuClose();
      }
    }

    menuOpen() {
      this.toggleBtn.setAttribute('aria-expanded', 'true');
      this.toggleBtn.classList.add('active');
      this.navigation.classList.add('expanded');
      this.stateOpen = true;
    }

    menuClose() {
      this.toggleBtn.setAttribute('aria-expanded', 'false');
      this.toggleBtn.classList.remove('active');
      this.navigation.classList.remove('expanded');
      this.stateOpen = false;
    }
  }

  return new GlobalMenu(document.getElementById('nhse-global-menu'));
}