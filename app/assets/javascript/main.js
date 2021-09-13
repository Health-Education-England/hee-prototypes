window.require = (script, condition) => {
  if (!condition || document.querySelector(condition) !== null) {
    var scriptElement = document.createElement('script');
    scriptElement.src = script;
    document.body.appendChild(scriptElement);
  }
}

require('/js/components/map.js');
require('/js/components/submenu.js');

/**
 * main.js
 * All the custom JavaScript for the HEE NHS website are included in this file
 */

/**
 * Filter
 * Elements with the selector '.nhsuk-filter' are passed into this class
 */
class Filter {
  constructor(container) {
    this.container = container;

    this.checkboxes = [...this.container.getElementsByClassName('nhsuk-checkboxes__input')];
    this.groups = [...this.container.getElementsByClassName('nhsuk-filter__group')];
    this.submit = this.container.querySelector('.nhsuk-filter__submit');

    this.setUp();
    this.addEventListeners();
  }

  addEventListeners() {
    this.checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', evt => this.updateResults(evt));
    });

    this.groups.forEach(group => {
      const legend = group.querySelector('.nhsuk-fieldset__legend');
      if (legend) {
        legend.addEventListener('click', evt => this.toggleGroup(evt));
      }
    });
  }

  setUp() {
    this.container.classList.add('nhsuk-filter--js');

    // Close groups
    this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

    // Hide submit button
    if (this.submit) {
      this.submit.hidden = true;
    }
  }

  toggleGroup(evt) {
    evt.preventDefault();
    evt.target.closest('.nhsuk-filter__group').classList.toggle('nhsuk-filter__group--closed');
  }

  updateResults(evt) {
    this.container.submit();
  }
}
[...document.getElementsByClassName('nhsuk-filter')].forEach(filter => new Filter(filter));

/**
 * FilterTag
 * Elements with the selector '.nhsuk-filter-tag' are passed into this class
 */
 class FilterTag {
  constructor(tag) {
    this.tag = tag;
    this.icon = tag.querySelector('.nhsuk-filter-tag__icon');

    this.setUp();
    this.addEventListeners();
  }

  addEventListeners() {
    this.tag.addEventListener('click', (evt) => this.removeFilter(evt));
  }

  removeFilter(evt) {
    evt.preventDefault();

    document.querySelectorAll(`input[value='${this.tag.dataset.filter}']`).forEach(checkbox => {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
    });

    evt.target.remove();
  }
  
  setUp() {
    this.tag.classList.add('nhsuk-filter-tag--js');

    if (this.icon) {
      this.icon.hidden = false;
    }
  }
}
[...document.getElementsByClassName('nhsuk-filter-tag')].forEach(tag => new FilterTag(tag));

/**
 * Listing
 * Elements with the selector '.nhsuk-listing' are passed into this class
 */
 class Listing {
  constructor(container) {
    this.container = container;
    this.sort = this.container.querySelector('.nhsuk-listing__sort');

    this.addEventListeners();
    this.toggleJavascriptElements();
  }

  addEventListeners() {
    if (this.sort) {
      [...this.sort.getElementsByTagName('select')].forEach(select => select.addEventListener('change', evt => this.updateResults(evt)));
    }
  }

  toggleJavascriptElements() {
    if (this.sort) {
      const submit = this.sort.querySelector('.nhsuk-listing__sort__submit');
      if (submit) {
        submit.hidden = true;
      }
    }
  }

  updateResults() {
    this.sort.submit();
  }
}

[...document.getElementsByClassName('nhsuk-listing')].forEach(listing => new Listing(listing));

/**
* Media transcript
* Elements with the selector '.nhsuk-transcript' are passed into this class
*/
class Transcript {
  constructor(container) {
    this.container = container
    this.toggles = container.querySelectorAll("a")

    console.log(this.container)
    console.log(this.toggles)
    this.addEventListeners()
  }

  addEventListeners() {
    if (this.toggles) {
      this.toggles.forEach(toggle => toggle.addEventListener('click', evt => this.toggletranscript(evt)))
    }
  }

  toggletranscript() {
    if (this.isCollapsed()) {
      this.container.classList.remove("nhsuk-media__transcript-expanded")
    } else {
      this.container.classList.add("nhsuk-media__transcript-expanded")
    }
  }

  isCollapsed() {
    if(this.container.classList.contains("nhsuk-media__transcript-expanded")){
      return true
    } else {
      return false
    }
  }

}

[...document.getElementsByClassName('nhsuk-media__transcript')].forEach(transcript => new Transcript(transcript))

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
      this.addAnchorsToPage();
    }
  }

  findHeadings(headings) {
    let foundHeadings = []
    document.querySelectorAll(headings).forEach((heading, i) => {
      if (!heading.id) {
        heading.id = heading.innerText.replace(/ .*/,'').replace(/[\n\r]/g,'').replace(/\s/g,'').toLowerCase()+i;
      }
      foundHeadings.push(heading);
    })
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