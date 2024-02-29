export default () => {
  /**
   * Responsible for Anchor link sticky toolbar at bottom of viewport.
   */
  class AnchorLinksSticky {

    constructor(container) {

      this.container = container;
      this.toggleBtn = this.container.querySelector('button.hee-anchorlinks__sticky__btn');
      this.stickyAnchorLinks = this.container.querySelector('.hee-anchorlinks');
      this.sidebarAnchorLinks = document.querySelector('.page__rightbar .hee-anchorlinks');
      this.footer = document.querySelector('.nhsuk-footer');

      this.addEventListeners();
      this.toggleStickyToolbar();
    }

    /**
     * Adds event listeners for TOC button toggle, TOC link navigation and
     * the window viewport scroll toggle.
     *
     * @returns void
     */
    addEventListeners() {
      this.toggleBtn.addEventListener('mousedown', () => this.toggleStickyAnchorLinks())
      this.toggleBtn.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          this.toggleStickyAnchorLinks()
        }
      })

      this.stickyAnchorLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
          this.toggleStickyAnchorLinks();
        }
      })
      this.toggleBtn.addEventListener('keyup', event => {
        if (event.target.tagName === 'A' && event.keyCode === 13) {
          this.toggleStickyAnchorLinks()
        }
      })

      window.addEventListener('scroll', () => {
        this.toggleStickyToolbar();
      })
    }

    /**
     * Shows / hides the sticky TOC anchor links when "Table of Contents" button
     * triggered.
     *
     * @returns void
     */
    toggleStickyAnchorLinks() {
      this.toggleBtn.classList.toggle('active');
      this.stickyAnchorLinks.classList.toggle('is-sticky');

      if (this.container.getAttribute('aria-expanded') === 'false') {
        this.container.setAttribute('aria-expanded', 'true')
      } else {
        this.container.setAttribute('aria-expanded', 'false')
      }

      this.stickyAnchorLinks.querySelector('a:first-of-type').focus();
    }

    /**
     * Shows / hides the TOC bottom "toolbar" when the sidebar TOC heading is
     * outside the viewport.
     *
     * @returns void
     */
    toggleStickyToolbar() {
      const tocBlockVisible = this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'));
      const footerVisible =   this.footer? this.isElementInViewport(this.footer): false;

      if (!tocBlockVisible && !footerVisible) {
        this.container.classList.add('active');
      } else {
        this.container.classList.remove('active');
      }
    }

    /**
     * Utility function to determine whether an element is inside the viewport.
     *
     * @param {Object} element
     *
     * @returns boolean
     */
    isElementInViewport(element) {
      const bounding = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const elementWidth = element.offsetWidth;

      return bounding.top >= -elementHeight
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight;
    }
  }

  [...document.getElementsByClassName('hee-anchorlinks__sticky')].forEach(anchorLinks => new AnchorLinksSticky(anchorLinks));
}