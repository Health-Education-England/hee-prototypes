import {toggleAttribute} from 'nhsuk-frontend/packages/common';
import {toggleClass} from '../../../utils/utils.js';

export default () => {

  /**
   * Mega menu component interactions.
   */
  class MegaMenu {

    constructor(megaMenu) {
      this.megaMenu = megaMenu;
      this.toggleLinks = this.megaMenu.querySelectorAll('.hee-mega-menu__subnav .hee-mega-menu__link');

      this.addEventListeners();
    }

    /**
     * Add event listeners to toggle link and inner panel links.
     */
    addEventListeners() {
      this.toggleLinks.forEach((toggleLink) => {
        const targetPanel = this.getTargetPanelElement(toggleLink);

        // Handle click event on sub menu panel toggle link.
        toggleLink.addEventListener('click', (event) => {
          event.preventDefault();

          if (!targetPanel.classList.contains('is-active')) {
            this.resetPanels();
          }

          this.togglePanel(event.target);
        })

        // Handles sub menu panel toggle link enter and spacebar key press.
        toggleLink.addEventListener('keydown', (event) => {
          if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();

            if (!targetPanel.classList.contains('is-active')) {
              this.resetPanels();
            }

            this.togglePanel(event.target);
          }
        })

        // Handles escape key press when a panel link is in focus.
        targetPanel.querySelectorAll('.hee-mega-menu__panel__link').forEach((panelLink) => {
          panelLink.addEventListener('keydown', (event) => {
            if (event.keyCode === 27) {
              this.togglePanel(toggleLink);
              toggleLink.focus();
            }
          })
        })

        // Handles shift + tab behaviour from first link to toggle link.
        targetPanel.querySelector('.hee-mega-menu__panel__link:first-child').addEventListener('keydown', (event) => {
          if(event.shiftKey && event.keyCode === 9) {
            event.preventDefault();
            toggleLink.focus();
          }
        })
      })
    }

    /**
     * Toggles mega menu panel visibility.
     * @param {HTMLElement} targetLink Menu link element.
     */
    togglePanel(targetLink) {
      toggleAttribute(targetLink, 'aria-expanded');
      toggleClass(this.getTargetPanelElement(targetLink), 'is-active');
    }

    /**
     * Returns mega menu panel element from target menu link.
     * @param {HTMLElement} targetLink Menu link element.
     */
    getTargetPanelElement(targetLink) {
      const panelId = targetLink.getAttribute('aria-controls');
      return document.getElementById(panelId);
    }

    /**
     * Resets state of active panel.
     */
    resetPanels() {
      const activePanel = this.megaMenu.querySelector('.hee-mega-menu__panel.is-active');
      if (activePanel !== null) {
        const toggleLink = this.megaMenu.querySelector('.hee-mega-menu__link[aria-controls="' + activePanel.id + '"]');
        toggleLink.setAttribute('aria-expanded', 'false');
        activePanel.classList.remove('is-active');
      }
    }
  }

  [...document.getElementsByClassName('hee-mega-menu')].forEach(megaMenu => new MegaMenu(megaMenu));
}
