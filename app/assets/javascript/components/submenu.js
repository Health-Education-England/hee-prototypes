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
        this.toggleLink.addEventListener('click', event => this.toggleMenu(event))
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
  
  const closeButton = document.getElementById("close-menu")
  if(closeButton){
    closeButton.addEventListener('click', function(){
      document.getElementById("toggle-menu").focus()
    })
  }
  
  document.addEventListener('click', event => {
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