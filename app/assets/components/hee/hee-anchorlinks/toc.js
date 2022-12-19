export default () => {
  /**
  * Responsible for generating table of contents links.
  */
  class TableContents {

    constructor(tableContents) {
      this.tableContents = tableContents;

      this.containerSelector = '.page__main';
      this.headingSelector = 'h2.hee-toc-anchor';
      this.headingPrefix = 'hee-toc-heading';

      // Anchor links macro sets this data attribute when TOC is flagged as true.
      if (!this.tableContents.hasAttribute('data-toc-js')) {
        return;
      }

      // Only attempt to build TOC links if H2 anchors found on page.
      const headings = document.querySelectorAll(this.containerSelector + ' ' + this.headingSelector);
      if (headings.length === 0) {
        return;
      }

      console.log(headings);

      const links = this.buildLinks(headings);
      this.generateMarkup(links);
    }

    /**
     * Builds array of heading links and their children.
     *
     * @param {NodeList}      headings
     *
     * @returns {Object[]}
     */
    buildLinks(headings) {
      let links = [];

      headings.forEach((heading, index) => {
        const headingId = this.headingPrefix + '-' + index;

        // Set unique id for current heading H2 element.
        heading.setAttribute('id', headingId)

        let link = {
          title: heading.innerText,
          anchor: headingId,
          children: []
        };

        let sibling = heading.nextElementSibling;
        let count = 0;

        // Traverse DOM for H3 elements after current H2 heading and append to
        // children links array.
        while (sibling && sibling.tagName !== 'H2') {
          if (sibling.tagName === 'H3') {

            // Set unique id for current heading H3 element.
            const subHeadingId = headingId + '-' + count;
            sibling.setAttribute('id', subHeadingId)

            link.children.push({
              title: sibling.innerText,
              anchor: subHeadingId,
            });

            count++;
          }
          sibling = sibling.nextElementSibling;
        }

        links.push(link);
      });

      return links;
    }

    /**
     * Creates TOC markup and appends to component.
     *
     * @returns void
     */
    generateMarkup(links) {
      let list = document.createElement('ul');

      links.forEach((link) => {
        let listItem = document.createElement('li');
        if (link.children.length > 0) {
          listItem.classList.add('has-children')
        }

        let container = document.createElement('div');
        container.classList.add('hee-anchorlinks__wrapper')
        if (link.children.length > 0) {
          container.classList.add('chevron')
        } else {
          container.classList.add('circle')
        }

        let span = document.createElement('span');
        if (link.children.length > 0) {
          span.innerHTML = this.getChevronSVG();
        } else {
          span.innerHTML = this.getCircleSVG();
        }

        container.append(span);

        let parentLink = document.createElement('a');
        parentLink.setAttribute('href', '#' + link.anchor);
        parentLink.innerText = link.title;

        container.append(parentLink);

        listItem.append(container);

        if (link.children.length > 0) {
          let childList = document.createElement('ul');
          link.children.forEach((item) => {
            let childItem = document.createElement('li');

            let childLink = document.createElement('a');
            childLink.setAttribute('href', '#' + item.anchor);
            childLink.innerText = item.title;

            childItem.append(childLink);
            childList.append(childItem);
          });

          listItem.append(childList);
        }

        list.append(listItem);
      });

      this.tableContents.append(list);
    }

    /**
     * Returns markup for list item chevron SVG.
     *
     * @returns string
     */
    getChevronSVG() {
      return '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
               '<path d="M8.00019 6.99994C8.00095 7.13155 7.97572 7.26201 7.92596 7.38385C7.87619 7.50569 7.80287 7.6165 7.71019 7.70994L2.71019 12.7099C2.61695 12.8032 2.50626 12.8771 2.38443 12.9276C2.26261 12.9781 2.13204 13.004 2.00019 13.004C1.86833 13.004 1.73776 12.9781 1.61594 12.9276C1.49411 12.8771 1.38342 12.8032 1.29018 12.7099C1.19695 12.6167 1.12299 12.506 1.07253 12.3842C1.02206 12.2624 0.996094 12.1318 0.996094 11.9999C0.996094 11.8681 1.02206 11.7375 1.07253 11.6157C1.12299 11.4939 1.19695 11.3832 1.29018 11.2899L5.59019 6.99994L1.29018 2.70994C1.10188 2.52164 0.996094 2.26624 0.996094 1.99994C0.996094 1.73364 1.10188 1.47825 1.29018 1.28994C1.47849 1.10164 1.73388 0.99585 2.00019 0.99585C2.26649 0.99585 2.52188 1.10164 2.71019 1.28994L7.71019 6.28994C7.80287 6.38338 7.87619 6.4942 7.92596 6.61603C7.97572 6.73787 8.00095 6.86833 8.00019 6.99994Z" fill="black"/>' +
             '</svg>';
    }

    /**
     * Returns markup for list item circle SVG.
     *
     * @returns string
     */
    getCircleSVG() {
      return '<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">' +
               '<circle cx="1.5" cy="1.5" r="1.5" fill="black"/>' +
             '</svg>';
    }
  }

  [...document.getElementsByClassName('hee-anchorlinks')].forEach(tableContents => new TableContents(tableContents));
}