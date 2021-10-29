export default () => {
    /**
     * Tabs
     * Elements with the selector '.nhsuk-tabs' are passed into this class
     */
    class Tabs {
        constructor(tabcomponent, i) {
            this.tabcomponent = tabcomponent;
            this.init();
        }
        init() {
            const tabs = this.tabcomponent.querySelectorAll('[role="tab"]');
            const tabList = this.tabcomponent.querySelector('[role="tablist"]');
            tabs.forEach(tab => {
                tab.addEventListener("click", this.changeTabs);
            });
            let tabFocus = 0;
            tabList.addEventListener("keydown", e => {
                // Move right
                if (e.keyCode === 39 || e.keyCode === 37) {
                    tabs[tabFocus].setAttribute("tabindex", -1);
                    if (e.keyCode === 39) {
                        tabFocus++;
                        // If we're at the end, go to the start
                        if (tabFocus >= tabs.length) {
                            tabFocus = 0;
                        }
                        // Move left
                    } else if (e.keyCode === 37) {
                        tabFocus--;
                        // If we're at the start, move to the end
                        if (tabFocus < 0) {
                            tabFocus = tabs.length - 1;
                        }
                    }
                    tabs[tabFocus].setAttribute("tabindex", 0);
                    tabs[tabFocus].focus();
                }
            });
        }
        changeTabs(e) {
            const target = e.target;
            const parent = target.parentNode;
            const grandparent = parent.parentNode;

            console.log(e);
            // Remove all current selected tabs
            parent
                .querySelectorAll('[aria-selected="true"]')
                .forEach(t => t.setAttribute("aria-selected", false));
            parent
                .querySelectorAll('.nhsuk-tabs__list-item--selected')
                .forEach(c => c.classList.remove("nhsuk-tabs__list-item--selected"));

            // Set this tab as selected
            target.setAttribute("aria-selected", true);
            target.classList.add("nhsuk-tabs__list-item--selected");

            // Hide all tab panels
            grandparent
                .querySelectorAll('[role="tabpanel"]')
                .forEach(p => p.setAttribute("hidden", true));

            // Show the selected panel
            grandparent.parentNode
                .querySelector(`#${target.getAttribute("aria-controls")}`)
                .removeAttribute("hidden");
        }
    }
    [...document.getElementsByClassName('nhsuk-tabs')].forEach((tabs, i) => new Tabs(tabs, i));
}