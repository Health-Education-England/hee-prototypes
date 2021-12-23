export default () => {
  /**
  * Tabs
  * Elements with the selector '.nhsuk-tabs' are passed into this class
  */
  class Tabs {
    constructor(tabcomponent, i) {
      this.tabcomponent = tabcomponent
      this.init()
    }

    init() {
      const tabs = this.tabcomponent.querySelectorAll('[role="tab"]')
      const tabList = this.tabcomponent.querySelector('[role="tablist"]')
      tabs.forEach(tab => {
        tab.addEventListener("click", c => this.changeTabs(c))
      })
      let tabFocus = 0
      tabList.addEventListener("keydown", e => {
        // Move right
        if (e.keyCode === 39 || e.keyCode === 37) {
          tabs[tabFocus].setAttribute("tabindex", -1)
          if (e.keyCode === 39) {
            tabFocus++
            // If we're at the end, go to the start
            if (tabFocus >= tabs.length) {
              tabFocus = 0
            }
            // Move left
          } else if (e.keyCode === 37) {
            tabFocus--
            // If we're at the start, move to the end
            if (tabFocus < 0) {
              tabFocus = tabs.length - 1
            }
          }
          tabs[tabFocus].setAttribute("tabindex", 0)
          tabs[tabFocus].focus()
        }
      })

      // hide default open tab if on mobile
      const width = window.innerWidth
      // console.log(width)
      if(width < 769 ){
        // console.log(tabs)
        tabs.forEach(
          tab => {
            const parent = tab.parentNode
            this.removeSelected(parent)
            const grandparent = parent.parentNode
            this.hideTabs(grandparent)
          }
        )
      }
    }

    changeTabs(e) {
      // console.log(e);
      const target = e.target
      const parent = target.parentNode
      const grandparent = parent.parentNode

      // Remove all current selected tabs
      this.removeSelected(parent)

      // Set this tab as selected
      this.setSelected(target)

      // Hide all tab panels
      this.hideTabs(grandparent)

      // Show the selected panel
      this.showSelected(grandparent.parentNode, target)
    }

    removeSelected(ele) {
      ele
        .querySelectorAll('[aria-selected="true"]')
        .forEach(t => t.setAttribute("aria-selected", false));
      ele
        .querySelectorAll('.nhsuk-tabs__list-item--selected')
        .forEach(c => c.classList.remove("nhsuk-tabs__list-item--selected"));
    }

    setSelected(ele) {
      ele.setAttribute("aria-selected", true)
      ele.classList.add("nhsuk-tabs__list-item--selected")
    }

    hideTabs(ele) {
      ele
        .querySelectorAll('[role="tabpanel"]')
        .forEach(p => p.setAttribute("hidden", true))
    }

    showSelected(ele, target) {
      ele
        .querySelector(`#${target.getAttribute("aria-controls")}`)
        .removeAttribute("hidden")
    }

  }

  [...document.getElementsByClassName('nhsuk-tabs')].forEach((tabs, i) => new Tabs(tabs, i));
}