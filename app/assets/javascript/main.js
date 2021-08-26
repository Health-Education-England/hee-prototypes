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
* Submenu's
* Elements with the selector '.nhsuk-subheader' are passed into this class
*/

class Submenu {
  constructor(container) {
    this.container = container
    this.toggleLink = this.container.querySelector('a')
    this.parentList = this.container.parentNode
    this.addEventListeners()
  }

  addEventListeners() {
    if (this.toggleLink) {
      this.toggleLink.addEventListener('mousedown', event => this.toggleMenu(event))
    }
  }

  handleState(){
    const activeElems = document.querySelectorAll(".nhsuk-subheader.is-active")
    activeElems.forEach(elem => {
      if(elem != this.container){
        elem.classList.remove("is-active")
        elem.toggleAttribute("aria-expanded")
      } else {
        this.toggleClass(this.parentList, 'submenu-open')
      }
    })
    if(activeElems.length === 0){
      this.toggleClass(this.parentList, 'submenu-open')
    }
  }

  toggleMenu(event) {
    event.preventDefault()
    this.handleState()
    this.toggleClass(this.container, "is-active")
    this.toggleAttribute(this.container, "aria-expanded")
  }

  toggleClass(element, className) {
    if (!element || !className) return
    const hasClass = element.classList.contains(className)
    if (hasClass) {
      element.classList.remove(className)
    } else {
      element.classList.add(className)
    }
  }

  toggleAttribute(element, attr) {
    // Return without error if element or attr are missing
    if (!element || !attr) return
    // Toggle attribute value. Treat no existing attr same as when set to false
    const value = (element.getAttribute(attr) === 'true') ? 'false' : 'true'
    element.setAttribute(attr, value)
  }

}

[...document.getElementsByClassName('nhsuk-subheader')].forEach(submenu => new Submenu(submenu))

document.getElementById("close-menu").addEventListener('mousedown', function(){
  document.getElementById("toggle-menu").focus()
})

document.addEventListener('mousedown', event => {
  // close menu if clicking outside
  const openMenu = document.querySelector(".nhsuk-header__navigation.js-show")
  if(openMenu){
    const isNotMenu = event.target !== openMenu
    const isNotMenuButton = event.target !== document.querySelector("#toggle-menu")
    const isMenuChild = event.target.closest(".nhsuk-header__navigation.js-show")
    if(isNotMenu && isNotMenuButton && !isMenuChild){
      openMenu.classList.remove("js-show")
    }
  }
  // close sub nav if clicking anywhere on the document except the open or a new subnav
  const openSub = document.querySelector(".nhsuk-subheader.is-active")
  if(openSub){
    const isNotSub = event.target !== openSub
    const isSubChild = event.target.closest(".nhsuk-subheader.is-active")
    if(isNotSub && !isSubChild){
      openSub.classList.remove("is-active")
      document.querySelector(".nhsuk-header__navigation-list").classList.remove("submenu-open")
    }
  }
})

/**
* Media transcript
* Elements with the selector '.nhsuk-transcript' are passed into this class
*/
class Transcript {
  constructor(container) {
    this.container = container
    this.toggles = container.querySelectorAll(".nhsuk-transcript-expand, .nhsuk-transcript-contract")
    this.addEventListeners()
  }

  addEventListeners() {
    if (this.toggles) {
      this.toggles.forEach(toggle => toggle.addEventListener('click', evt => this.toggletranscript(evt)))
    }
  }

  toggletranscript() {
    if (this.isCollapsed()) {
      this.container.classList.remove("transcript-collapsed")
    } else {
      this.container.classList.add("transcript-collapsed")
    }
  }

  isCollapsed() {
    if(this.container.classList.contains("transcript-collapsed")){
      return true
    } else {
      return false
    }
  }

}

[...document.getElementsByClassName('nhsuk-transcript')].forEach(transcript => new Transcript(transcript))

/**
* Regions
* Elements with the selector '.nhsuk-region' are passed into this class
*/

class Map {
  constructor(map, svg) {
    this.map = map;
    this.svg = svg;
    this.regions = [...svg.getElementsByClassName('nhsuk-region')];
    this.list = [...map.querySelectorAll('#regionList li a')];
  
    this.addLinksToMap();
    this.addClasses();
    this.mapEventListeners();
    this.linkEventListeners();
  }

  addClasses(){
    this.svg.querySelector('style').appendChild(document.createTextNode(`
      .hover {transform: scale(1.05);transform-origin: 75% 75%;transition-duration:2s;}
      .hover * {stroke-width: 6;stroke-miterlimit: 1;}
      .focus .st0 {fill:#ffeb3b;stroke:#212b32;}
      .focus * {stroke-width: 6;stroke-miterlimit: 1;}
    `))
  }

  addLinksToMap(){
    this.regions.forEach(region => {
      const thisCounterpart = this.mapCounterpart(region.id)
      const thisHref = (thisCounterpart.href)? thisCounterpart.href : "/"
      const thisAlt = (thisCounterpart.alt)? thisCounterpart.alt : "/"
      const children = region.innerHTML;
      const wrapLink = `<a xlink:href="/" >
        <title>${thisAlt}</title>
        ${children}
      </a>`
      region.innerHTML = wrapLink
    })
  }

  mapEventListeners() {
    this.regions.forEach(element => element.addEventListener("mouseenter", () => this.mapIn(element, "hover", true)))
    this.regions.forEach(element => element.addEventListener("mouseout", () => this.mapOut(element, "hover", true)))
    this.regions.forEach(element => element.addEventListener("click", event => this.mapClick(event)))
  }

  linkEventListeners() {
    this.list.forEach(item => item.addEventListener("mouseenter", event => this.linkEvent(event.target, "in", "hover")))
    this.list.forEach(element => element.addEventListener("mouseout", event => this.linkEvent(event.target, "out", "hover")))
    this.list.forEach(item => item.addEventListener("focusin", event => this.linkEvent(event.target, "in", "focus")))
    this.list.forEach(item => item.addEventListener("focusout", event => this.linkEvent(event.target, "out", "focus")))
  }

  moveToTop(obj) {
    obj.parentElement.appendChild(obj);
  }

  mapIn(target, style, map) {
    this.moveToTop(target)
    target.classList.add(style)
    if(map) {
      const thisLink = this.mapCounterpart(target.id)
      if(thisLink) thisLink.classList.add("hover")
    }
  }

  mapOut(target, style, map) {
    target.classList.remove(style)
    if(map) {
      const thisLink = this.mapCounterpart(target.id)
      if(thisLink) thisLink.classList.remove("hover")
    }
  }

  mapClick(event) {
    event.preventDefault()
    const thisMapCounterpart = this.mapCounterpart(event.target.closest("g").id)
    if(thisMapCounterpart) thisMapCounterpart.click()
  }

  mapCounterpart(thisId) {
    const thisCounterpart = this.list.find(item => item.id === thisId)
    return (thisCounterpart)
  }

  linkEvent(target, direction, type) {
    const thisId = target.id
    const thisCounterpart = this.linkCounterpart(thisId)
    if(direction === "in") {
      this.mapIn(thisCounterpart, type)
    } else {
      this.mapOut(thisCounterpart, type)
    }
  }

  linkCounterpart(thisId) {
    const thisCounterpart = this.regions.find(item => item.id === thisId)
    return (thisCounterpart)
  }

}

[...document.querySelectorAll('.nhsuk-map')].forEach(map => {
  // need to wait for SVG to load
  const obj = map.querySelector('object')
  obj.addEventListener('load', function(){
    const svg = obj.getSVGDocument().querySelector('svg');
    new Map(map, svg);
  });
})
