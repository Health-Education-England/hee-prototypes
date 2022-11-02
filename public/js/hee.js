(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){var e,r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.toggleLink=this.container.querySelector("a"),this.parentList=this.container.parentNode,this.addEventListeners()}var t,r;return t=e,(r=[{key:"addEventListeners",value:function(){var e=this;this.toggleLink&&(this.toggleLink.addEventListener("mousedown",(function(t){return e.toggleMenu(t)})),this.toggleLink.addEventListener("keyup",(function(t){13===t.keyCode&&e.toggleMenu(t)})))}},{key:"handleState",value:function(){var e=this,t=document.querySelectorAll(".nhsuk-subheader.is-active");t.forEach((function(t){t!=e.container?(t.classList.remove("is-active"),t.toggleAttribute("aria-expanded")):e.toggleClass(e.parentList,"submenu-open")})),0===t.length&&this.toggleClass(this.parentList,"submenu-open")}},{key:"toggleMenu",value:function(e){e.preventDefault(),this.handleState(),this.toggleClass(this.container,"is-active"),this.toggleAttribute(this.container,"aria-expanded")}},{key:"toggleClass",value:function(e,t){e&&t&&(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))}},{key:"toggleAttribute",value:function(e,t){if(e&&t){var n="true"===e.getAttribute(t)?"false":"true";e.setAttribute(t,n)}}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();(e=document.getElementsByClassName("nhsuk-subheader"),function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return new r(e)}));var o=document.querySelector("#close-menu");function i(e){var t=document.querySelector(".nhsuk-header__navigation.js-show");if(t){var n=e.target!==t,r=e.target!==document.querySelector("#toggle-menu"),o=e.target.closest(".nhsuk-header__navigation.js-show");n&&r&&!o&&t.classList.remove("js-show")}var i=document.querySelector(".nhsuk-subheader.is-active");if(i){var a=e.target!==i,s=e.target.closest(".nhsuk-subheader.is-active");a&&!s&&(i.classList.remove("is-active"),document.querySelector(".nhsuk-header__navigation-list").classList.remove("submenu-open"))}}o&&o.addEventListener("mousedown",(function(){document.querySelector("#toggle-menu").focus()})),document.addEventListener("keyup",(function(e){13===e.keyCode&&i(e)})),document.addEventListener("mousedown",i)};function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const h=function(){var e,t=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.toggles=t.querySelectorAll("a"),console.log(this.container),console.log(this.toggles),this.addEventListeners()}var t,n;return t=e,(n=[{key:"addEventListeners",value:function(){var e=this;this.toggles&&this.toggles.forEach((function(t){return t.addEventListener("click",(function(t){return e.toggletranscript(t)}))}))}},{key:"toggletranscript",value:function(){this.isCollapsed()?this.container.classList.remove("hee-media__transcript-expanded"):this.container.classList.add("hee-media__transcript-expanded")}},{key:"isCollapsed",value:function(){return!!this.container.classList.contains("hee-media__transcript-expanded")}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(e=document.getElementsByClassName("hee-media__transcript"),function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return new t(e)}))};function d(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const g=function(){var e,t=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.newsletter=t,this.requiredInputs=t.querySelectorAll("[required]"),this.errors=[],this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.resetForm(),this.addEvents()}},{key:"addEvents",value:function(){var e=this;this.requiredInputs.forEach((function(t){t.addEventListener("focusout",(function(t){return e.validate(t.target)}))}))}},{key:"validate",value:function(e){var t=document.getElementById("errors-"+e.name),n=document.getElementById("error-summary-"+e.name);"firstname"==e.name||"lastname"==e.name?this.errorEmpty(e,t,n):"email"==e.name?this.errorEmail(e,t,n):"consent"==e.name&&this.errorConsent(e,t,n),this.updateSummary()}},{key:"updateSummary",value:function(){var e=document.getElementById("error-summary");this.errors.length>0?e.style.display="block":e.style.display="none"}},{key:"errorEmpty",value:function(e,t,n){this.isEmpty(e.value)?this.showError(e,t,n):this.hideError(e,t,n)}},{key:"errorEmail",value:function(e,t,n){/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value)?this.hideError(e,t,n):this.showError(e,t,n)}},{key:"errorConsent",value:function(e,t,n){e.checked?this.hideError(e,t,n):this.showError(e,t,n)}},{key:"hideError",value:function(e,t,n){e.parentElement.classList.remove("nhsuk-form-group--error"),t.style.display="none",n.style.display="none",this.errors=this.errors.filter((function(t){return t!==e.name}))}},{key:"showError",value:function(e,t,n){e.parentElement.classList.add("nhsuk-form-group--error"),t.style.display="block",n.style.display="block",this.errors=this.errors.filter((function(t){return t!==e.name})),this.errors.push(e.name)}},{key:"isEmpty",value:function(e){return!e.trim().length}},{key:"resetForm",value:function(){this.newsletter.querySelectorAll(".nhsuk-error-message").forEach((function(e){e.style.display="none"})),this.newsletter.querySelectorAll(".nhsuk-form-group--error").forEach((function(e){e.classList.remove("nhsuk-form-group--error")})),this.newsletter.querySelectorAll(".nhsuk-error-summary").forEach((function(e){e.style.display="none"})),this.newsletter.querySelectorAll(".error-summary-item").forEach((function(e){e.style.display="none"}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(e=document.getElementsByClassName("nhsuk-newsletter-form"),function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return new t(e)}))};function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const E=function(){var e,t=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tabcomponent=t,this.init()}var t,n;return t=e,n=[{key:"init",value:function(){var e=this,t=this.tabcomponent.querySelectorAll('[role="tab"]'),n=this.tabcomponent.querySelector('[role="tablist"]');t.forEach((function(t){t.addEventListener("click",(function(t){return e.changeTabs(t)}))}));var r=0;n.addEventListener("keydown",(function(e){39!==e.keyCode&&37!==e.keyCode||(t[r].setAttribute("tabindex",-1),39===e.keyCode?++r>=t.length&&(r=0):37===e.keyCode&&--r<0&&(r=t.length-1),t[r].setAttribute("tabindex",0),t[r].focus())}))}},{key:"changeTabs",value:function(e){var t=e.target,n=t.parentNode,r=n.parentNode,o=n.getElementsByClassName("nhsuk-tabs__list-item--selected")[0],i=r.classList.contains("nhsuk-tabs__mobile");t==o&&i?(this.removeSelected(n),this.hideTabs(r)):(this.removeSelected(n),this.setSelected(t),this.hideTabs(r),this.showSelected(r.parentNode,t))}},{key:"removeSelected",value:function(e){e.querySelectorAll('[aria-selected="true"]').forEach((function(e){return e.setAttribute("aria-selected",!1)})),e.querySelectorAll(".nhsuk-tabs__list-item--selected").forEach((function(e){return e.classList.remove("nhsuk-tabs__list-item--selected")}))}},{key:"setSelected",value:function(e){e.setAttribute("aria-selected",!0),e.classList.add("nhsuk-tabs__list-item--selected")}},{key:"hideTabs",value:function(e){e.querySelectorAll('[role="tabpanel"]').forEach((function(e){return e.setAttribute("hidden",!0)}))}},{key:"showSelected",value:function(e,t){e.querySelector("#".concat(t.getAttribute("aria-controls"))).removeAttribute("hidden")}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(e=document.getElementsByClassName("nhsuk-tabs"),function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,n){return new t(e,n)}))};function w(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const _=function(){var e,t=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tag=t,this.icon=t.querySelector(".nhsuk-filter-tag__icon"),this.setUp(),this.addEventListeners()}var t,n;return t=e,(n=[{key:"addEventListeners",value:function(){var e=this;this.tag.addEventListener("click",(function(t){return e.removeFilter(t)}))}},{key:"removeFilter",value:function(e){e.preventDefault(),document.querySelectorAll("input[value='".concat(this.tag.dataset.filter,"']")).forEach((function(e){e.checked=!1,e.dispatchEvent(new Event("change"))})),e.target.remove()}},{key:"setUp",value:function(){this.tag.classList.add("nhsuk-filter-tag--js"),this.icon&&(this.icon.hidden=!1)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(e=document.getElementsByClassName("nhsuk-filter-tag"),function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return new t(e)}))};document.addEventListener("DOMContentLoaded",(function(){var t,n,i,u;E(),u=function(){function e(t){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.anchorLinks=t,this.anchorLinks.hidden=!0,this.foundHeadings=this.findHeadings(t.dataset.headings),null!==(n=this.foundHeadings)&&void 0!==n&&n.length&&this.addAnchorsToPage()}var t,n;return t=e,(n=[{key:"findHeadings",value:function(e){var t=[];return e&&document.querySelectorAll(e).forEach((function(e,n){e.id||(e.id=e.innerText.replace(/ .*/,"").replace(/[\n\r]/g,"").replace(/\s/g,"").toLowerCase()+n),t.push(e)})),t}},{key:"appearsOnRightPageColumn",value:function(e,t){return o(document.querySelectorAll(t)).some((function(t){return t!==e&&t.contains(e)}))}},{key:"addAnchorsToPage",value:function(){var e=this,t=document.createElement("ul");this.foundHeadings.forEach((function(n){if(!(n.dataset.anchorlinksignore||n.classList.contains("nhsuk-u-visually-hidden")||n.classList.contains("nhsuk-card__heading")||e.appearsOnRightPageColumn(n,".nhsuk-grid-column-one-third"))){var r=document.createElement("li"),o=document.createElement("a");o.href="#"+n.id;for(var i=n.getElementsByClassName("nhsuk-u-visually-hidden");i.length>0;)i[0].remove();o.innerText=n.innerText,o.innerHTML=o.innerHTML.replace(/<br\s*[\/]?>/gi," "),r.appendChild(o),t.appendChild(r)}})),this.anchorLinks.appendChild(t),this.anchorLinks.hidden=!1}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o(document.getElementsByClassName("nhsuk-anchor-links")).forEach((function(e){return new u(e)})),new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.useCookies="",this.banner=document.querySelector(".nhsuk-cookie-banner"),this.showCookies=document.getElementById("showCookies"),this.removeCookies=document.getElementById("removeCookies"),this.host=this.getHost(),this.cookieStatus(),this.setCookies(),this.addEventListeners(),this.Status=document.querySelector(".nhsuk__cookieStatus"),this.In=document.querySelectorAll(".nhsuk__cookiesIn"),this.Out=document.querySelectorAll(".nhsuk__cookiesOut"),this.toggleStatus()}var n,r;return n=t,(r=[{key:"cookieStatus",value:function(){var e=this;document.cookie.split(";").forEach((function(t){if(t.match(new RegExp("(^| )analyticsCookie([^;]+)"))){var n=t.split("=")[1];e.useCookies=n}}))}},{key:"getHost",value:function(){return window.location.host.toString().split(":")[0]}},{key:"addEventListeners",value:function(){this.showCookies&&this.showCookies.addEventListener("mousedown",this.showCookie),this.removeCookies&&this.removeCookies.addEventListener("mousedown",this.removeCookie)}},{key:"bannerShow",value:function(){this.banner&&(this.banner.style.display="block")}},{key:"bannerHide",value:function(){this.banner&&(this.banner.style.display="none")}},{key:"setCookies",value:function(){var e=this;""===this.useCookies&&(this.bannerShow(),document.querySelector("#nhsuk-cookie-banner__link_accept_analytics").addEventListener("click",(function(t){t.preventDefault(),e.bannerHide(),e.useCookie()})),document.querySelector("#nhsuk-cookie-banner__link_decline_analytics").addEventListener("click",(function(t){t.preventDefault(),e.bannerHide(),e.noCookie()})))}},{key:"useCookie",value:function(){document.cookie="analyticsCookie=true; domain=".concat(this.host,"; max-age=7776000"),location.reload()}},{key:"noCookie",value:function(){document.cookie="analyticsCookie=false; domain=".concat(this.host,"; max-age=7776000"),location.reload()}},{key:"toggleStatus",value:function(){var e=this;this.Status&&(document.querySelector("button.nhsuk__cookiesOut").addEventListener("click",(function(t){t.preventDefault(),e.bannerHide(),e.useCookie(),location.reload()})),document.querySelector("button.nhsuk__cookiesIn").addEventListener("click",(function(t){t.preventDefault(),e.bannerHide(),e.noCookie(),location.reload()})),"false"===this.useCookies||""===this.useCookies?(this.displayBlock(this.Out),this.displayNone(this.In)):(this.displayNone(this.Out),this.displayBlock(this.In)))}},{key:"displayBlock",value:function(e){e.forEach((function(e){return e.style.display="inline-block"}))}},{key:"displayNone",value:function(e){e.forEach((function(e){return e.style.display="none"}))}},{key:"showCookie",value:function(){document.getElementById("cookies").textContent="> "+document.cookie}},{key:"removeCookie",value:function(){document.cookie="analyticsCookie=false; max-age=0",location.reload()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())(document),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.checkboxes=w(this.container.getElementsByClassName("nhsuk-checkboxes__input")),this.groups=w(this.container.getElementsByClassName("nhsuk-filter__group")),this.submit=this.container.querySelector(".nhsuk-filter__submit"),this.setUp(),this.addEventListeners()}var t,n;return t=e,(n=[{key:"addEventListeners",value:function(){var e=this;this.checkboxes.forEach((function(t){t.addEventListener("change",(function(t){return e.updateResults(t)}))})),this.groups.forEach((function(t){var n=t.querySelector(".nhsuk-fieldset__legend");n&&n.addEventListener("click",(function(t){return e.toggleGroup(t)}))}))}},{key:"setUp",value:function(){this.container.classList.add("nhsuk-filter--js"),this.submit&&(this.submit.hidden=!0)}},{key:"toggleGroup",value:function(e){e.preventDefault(),e.target.closest(".nhsuk-filter__group").classList.toggle("nhsuk-filter__group--closed")}},{key:"updateResults",value:function(e){this.container.submit()}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),w(document.getElementsByClassName("nhsuk-filter")).forEach((function(e){return new i(e)})),_(),n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.sort=this.container.querySelector(".nhsuk-listing__sort"),this.addEventListeners(),this.toggleJavascriptElements()}var t,n;return t=e,(n=[{key:"addEventListeners",value:function(){var e=this;this.sort&&s(this.sort.getElementsByTagName("select")).forEach((function(t){return t.addEventListener("change",(function(t){return e.updateResults(t)}))}))}},{key:"toggleJavascriptElements",value:function(){if(this.sort){var e=this.sort.querySelector(".nhsuk-listing__sort__submit");e&&(e.hidden=!0)}}},{key:"updateResults",value:function(){this.sort.submit()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s(document.getElementsByClassName("nhsuk-listing")).forEach((function(e){return new n(e)})),h(),t=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=t,this.svg=n,this.regions=d(n.getElementsByClassName("nhsuk-region")),this.list=d(t.querySelectorAll("#regionList li a")),this.addLinksToMap(),this.cleanStyle(),this.mapEventListeners(),this.linkEventListeners()}var t,n;return t=e,(n=[{key:"cleanStyle",value:function(){this.svg.querySelector("style").innerHTML="",this.svg.querySelector("style").appendChild(document.createTextNode("\n        .st0{fill:#005EB8;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .st1{fill:#AEB7BD;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .hover * {stroke:#ffeb3b;stroke-width: 6;stroke-miterlimit: 1;}\n        .focus .st0 {fill:#ffeb3b;stroke:#212b32;}\n        .focus * {stroke-width: 6;stroke-miterlimit: 1;}\n      "))}},{key:"addLinksToMap",value:function(){var e=this;this.regions.forEach((function(t){var n=e.mapCounterpart(t.id),r=n.href?n.href:"/",o=n.innerHTML?n.innerHTML:"",i=t.innerHTML,a='<a xlink:href="'.concat(r,'" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <title>').concat(o,"</title>\n          ").concat(i,"\n        </a>");t.innerHTML=a}))}},{key:"mapEventListeners",value:function(){var e=this;this.regions.forEach((function(t){return t.addEventListener("mouseenter",(function(){return e.mapIn(t,"hover",!0)}))})),this.regions.forEach((function(t){return t.addEventListener("mouseout",(function(){return e.mapOut(t,"hover",!0)}))})),this.regions.forEach((function(t){return t.addEventListener("click",(function(t){return e.mapClick(t)}))}))}},{key:"linkEventListeners",value:function(){var e=this;this.list.forEach((function(t){return t.addEventListener("mouseenter",(function(t){return e.linkEvent(t.target,"in","hover")}))})),this.list.forEach((function(t){return t.addEventListener("mouseout",(function(t){return e.linkEvent(t.target,"out","hover")}))})),this.list.forEach((function(t){return t.addEventListener("focusin",(function(t){return e.linkEvent(t.target,"in","focus")}))})),this.list.forEach((function(t){return t.addEventListener("focusout",(function(t){return e.linkEvent(t.target,"out","focus")}))}))}},{key:"moveToTop",value:function(e){e.parentElement.appendChild(e)}},{key:"mapIn",value:function(e,t,n){if(this.moveToTop(e),e.classList.add(t),n){var r=this.mapCounterpart(e.id);r&&r.classList.add("hover")}}},{key:"mapOut",value:function(e,t,n){if(e.classList.remove(t),n){var r=this.mapCounterpart(e.id);r&&r.classList.remove("hover")}}},{key:"mapClick",value:function(e){e.preventDefault();var t=this.mapCounterpart(e.target.closest("g").id);t&&t.click()}},{key:"mapCounterpart",value:function(e){return this.list.find((function(t){return t.id===e}))}},{key:"linkEvent",value:function(e,t,n){var r=e.id,o=this.linkCounterpart(r);"in"===t?this.mapIn(o,n):this.mapOut(o,n)}},{key:"linkCounterpart",value:function(e){return this.regions.find((function(t){return t.id===e}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d(document.querySelectorAll(".nhsuk-map")).forEach((function(e){var n=e.querySelector("object");n.addEventListener("load",(function(){var r=n.getSVGDocument().querySelector("svg");r&&new t(e,r)}))})),r(),g()}))})();
//# sourceMappingURL=data:appl
