export default () => {
  /**
  * Map
  * Elements with the selector '.nhsuk-region' are passed into this class
  */
  class NavMap {
    constructor(map, svg) {
      this.map = map;
      this.svg = svg;
      this.regions = [...svg.getElementsByClassName('nhsuk-region')];
      this.list = [...map.querySelectorAll('#regionList li a')];

      this.addLinksToMap();
      this.cleanStyle();
      this.mapEventListeners();
      this.linkEventListeners();
    }

    cleanStyle(){
      this.svg.querySelector('style').innerHTML = ""
      this.svg.querySelector('style').appendChild(document.createTextNode(`
        .st0{fill:#005EB8;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}
        .st1{fill:#768692;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}
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
        const thisTitle = (thisCounterpart.innerHTML)? thisCounterpart.innerHTML : ""
        const children = region.innerHTML;
        const wrapLink = `<a xlink:href="${thisHref}" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>${thisTitle}</title>
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
      const svg = obj.getSVGDocument().querySelector('svg')
      if(svg){
        new NavMap(map, svg)
      }
    })
  })
}