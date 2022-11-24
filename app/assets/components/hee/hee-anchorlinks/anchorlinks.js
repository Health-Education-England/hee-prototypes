export default () => {
  /**
  * AnchorLinks
  * Elements with the selector '.nhsuk-anchor-links' are passed into this class
  */
  class AnchorLinks {
    constructor(anchorLinks) {
      this.anchorLinks = anchorLinks;
      this.anchorLinks.hidden = true;
      this.foundHeadings = this.findHeadings(anchorLinks.dataset.headings);

      if (this.foundHeadings?.length) {
        if (!this.anchorLinks.hasAttribute('data-disable-js')) {
          this.addAnchorsToPage();
        } else {
          this.anchorLinks.hidden = false;
        }
      }
    }

    findHeadings(headings) {
      let foundHeadings = []
      if (headings) {
        document.querySelectorAll(headings).forEach((heading, i) => {
          if (!heading.id) {
            heading.id = heading.innerText.replace(/ .*/,'').replace(/[\n\r]/g,'').replace(/\s/g,'').toLowerCase()+i;
          }
          foundHeadings.push(heading);
        })
      }      
      return foundHeadings;
    }

    appearsOnRightPageColumn(heading, selector) {
      return [...document.querySelectorAll(selector)].some(el =>
        el !== heading && el.contains(heading)
      )
    }

    addAnchorsToPage() {
      let ul = document.createElement('ul');
      this.foundHeadings.forEach(foundHeading => {
        if (!foundHeading.dataset.anchorlinksignore
          && !foundHeading.classList.contains('nhsuk-u-visually-hidden')
          && !foundHeading.classList.contains('nhsuk-card__heading')
          && !this.appearsOnRightPageColumn(foundHeading, '.nhsuk-grid-column-one-third'))
        {
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.href = '#'+foundHeading.id;
          const hiddenElements = foundHeading.getElementsByClassName("nhsuk-u-visually-hidden");
          while (hiddenElements.length > 0) hiddenElements[0].remove();
          a.innerText = foundHeading.innerText; // strip tags
          a.innerHTML = a.innerHTML.replace(/<br\s*[\/]?>/gi, " "); // strip <br>
          li.appendChild(a);
          ul.appendChild(li);
        }
      });
      this.anchorLinks.appendChild(ul);
      this.anchorLinks.hidden = false;
    }
  }

  [...document.getElementsByClassName('nhsuk-anchor-links')].forEach(anchorLinks => new AnchorLinks(anchorLinks));
}