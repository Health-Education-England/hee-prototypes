export default () => {
  class AnchorLinksSticky {

    constructor(container) {

      this.container = container;
      this.toggleBtn = this.container.querySelector('button.hee-anchorlinks__sticky__btn');
      this.stickyAnchorLinks = this.container.querySelector('.hee-anchorlinks');
      this.sidebarAnchorLinks = document.querySelector('.page__rightbar .hee-anchorlinks');

      this.addEventListeners();
      this.toggleStickyToolbar();
    }

    addEventListeners() {
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('mousedown', event => this.toggleStickyAnchorLinks())
        this.toggleBtn.addEventListener('keyup', event => {
          if (event.keyCode === 13) {
            this.toggleStickyAnchorLinks()
          }
        })
      }

      window.addEventListener('scroll', event => {
        this.toggleStickyToolbar();
      })
    }

    toggleStickyAnchorLinks() {
      this.toggleBtn.classList.toggle('active');
      this.stickyAnchorLinks.classList.toggle('is-sticky');

      if (this.container.getAttribute('aria-expanded') === 'false') {
        this.container.setAttribute('aria-expanded', 'true')
      } else {
        this.container.setAttribute('aria-expanded', 'false')
      }
    }

    toggleStickyToolbar() {
      if (!this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'))) {
        this.container.classList.add('active');
      } else {
        this.container.classList.remove('active');
      }
    }

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

  new AnchorLinksSticky(document.getElementById('hee-anchorlinks-sticky'));
}