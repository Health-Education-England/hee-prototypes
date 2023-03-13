/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/components/hee/hee-media/media.js":
/*!******************************************************!*\
  !*** ./app/assets/components/hee/hee-media/media.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Media transcript
  * Elements with the selector '.nhsuk-transcript' are passed into this class
  */
  var Transcript = /*#__PURE__*/function () {
    function Transcript(container) {
      _classCallCheck(this, Transcript);

      this.container = container;
      this.toggles = container.querySelectorAll("a");
      console.log(this.container);
      console.log(this.toggles);
      this.addEventListeners();
    }

    _createClass(Transcript, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        if (this.toggles) {
          this.toggles.forEach(function (toggle) {
            return toggle.addEventListener('click', function (evt) {
              return _this.toggletranscript(evt);
            });
          });
        }
      }
    }, {
      key: "toggletranscript",
      value: function toggletranscript() {
        if (this.isCollapsed()) {
          this.container.classList.remove("nhsuk-media__transcript-expanded");
        } else {
          this.container.classList.add("nhsuk-media__transcript-expanded");
        }
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        if (this.container.classList.contains("nhsuk-media__transcript-expanded")) {
          return true;
        } else {
          return false;
        }
      }
    }]);

    return Transcript;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-media__transcript')).forEach(function (transcript) {
    return new Transcript(transcript);
  });
});

/***/ }),

/***/ "./app/assets/components/hee/hee-navmap/navmap.js":
/*!********************************************************!*\
  !*** ./app/assets/components/hee/hee-navmap/navmap.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Map
  * Elements with the selector '.nhsuk-region' are passed into this class
  */
  var NavMap = /*#__PURE__*/function () {
    function NavMap(map, svg) {
      _classCallCheck(this, NavMap);

      this.map = map;
      this.svg = svg;
      this.regions = _toConsumableArray(svg.getElementsByClassName('nhsuk-region'));
      this.list = _toConsumableArray(map.querySelectorAll('#regionList li a'));
      this.addLinksToMap();
      this.cleanStyle();
      this.mapEventListeners();
      this.linkEventListeners();
    }

    _createClass(NavMap, [{
      key: "cleanStyle",
      value: function cleanStyle() {
        this.svg.querySelector('style').innerHTML = "";
        this.svg.querySelector('style').appendChild(document.createTextNode("\n        .st0{fill:#005EB8;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .st1{fill:#AEB7BD;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .hover * {stroke:#ffeb3b;stroke-width: 6;stroke-miterlimit: 1;}\n        .focus .st0 {fill:#ffeb3b;stroke:#212b32;}\n        .focus * {stroke-width: 6;stroke-miterlimit: 1;}\n      "));
      }
    }, {
      key: "addLinksToMap",
      value: function addLinksToMap() {
        var _this = this;

        this.regions.forEach(function (region) {
          var thisCounterpart = _this.mapCounterpart(region.id);

          var thisHref = thisCounterpart.href ? thisCounterpart.href : "/";
          var thisTitle = thisCounterpart.innerHTML ? thisCounterpart.innerHTML : "";
          var children = region.innerHTML;
          var wrapLink = "<a xlink:href=\"".concat(thisHref, "\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <title>").concat(thisTitle, "</title>\n          ").concat(children, "\n        </a>");
          region.innerHTML = wrapLink;
        });
      }
    }, {
      key: "mapEventListeners",
      value: function mapEventListeners() {
        var _this2 = this;

        this.regions.forEach(function (element) {
          return element.addEventListener("mouseenter", function () {
            return _this2.mapIn(element, "hover", true);
          });
        });
        this.regions.forEach(function (element) {
          return element.addEventListener("mouseout", function () {
            return _this2.mapOut(element, "hover", true);
          });
        });
        this.regions.forEach(function (element) {
          return element.addEventListener("click", function (event) {
            return _this2.mapClick(event);
          });
        });
      }
    }, {
      key: "linkEventListeners",
      value: function linkEventListeners() {
        var _this3 = this;

        this.list.forEach(function (item) {
          return item.addEventListener("mouseenter", function (event) {
            return _this3.linkEvent(event.target, "in", "hover");
          });
        });
        this.list.forEach(function (element) {
          return element.addEventListener("mouseout", function (event) {
            return _this3.linkEvent(event.target, "out", "hover");
          });
        });
        this.list.forEach(function (item) {
          return item.addEventListener("focusin", function (event) {
            return _this3.linkEvent(event.target, "in", "focus");
          });
        });
        this.list.forEach(function (item) {
          return item.addEventListener("focusout", function (event) {
            return _this3.linkEvent(event.target, "out", "focus");
          });
        });
      }
    }, {
      key: "moveToTop",
      value: function moveToTop(obj) {
        obj.parentElement.appendChild(obj);
      }
    }, {
      key: "mapIn",
      value: function mapIn(target, style, map) {
        this.moveToTop(target);
        target.classList.add(style);

        if (map) {
          var thisLink = this.mapCounterpart(target.id);
          if (thisLink) thisLink.classList.add("hover");
        }
      }
    }, {
      key: "mapOut",
      value: function mapOut(target, style, map) {
        target.classList.remove(style);

        if (map) {
          var thisLink = this.mapCounterpart(target.id);
          if (thisLink) thisLink.classList.remove("hover");
        }
      }
    }, {
      key: "mapClick",
      value: function mapClick(event) {
        event.preventDefault();
        var thisMapCounterpart = this.mapCounterpart(event.target.closest("g").id);
        if (thisMapCounterpart) thisMapCounterpart.click();
      }
    }, {
      key: "mapCounterpart",
      value: function mapCounterpart(thisId) {
        var thisCounterpart = this.list.find(function (item) {
          return item.id === thisId;
        });
        return thisCounterpart;
      }
    }, {
      key: "linkEvent",
      value: function linkEvent(target, direction, type) {
        var thisId = target.id;
        var thisCounterpart = this.linkCounterpart(thisId);

        if (direction === "in") {
          this.mapIn(thisCounterpart, type);
        } else {
          this.mapOut(thisCounterpart, type);
        }
      }
    }, {
      key: "linkCounterpart",
      value: function linkCounterpart(thisId) {
        var thisCounterpart = this.regions.find(function (item) {
          return item.id === thisId;
        });
        return thisCounterpart;
      }
    }]);

    return NavMap;
  }();

  _toConsumableArray(document.querySelectorAll('.nhsuk-map')).forEach(function (map) {
    // need to wait for SVG to load
    var obj = map.querySelector('object');
    obj.addEventListener('load', function () {
      var svg = obj.getSVGDocument().querySelector('svg');

      if (svg) {
        new NavMap(map, svg);
      }
    });
  });
});

/***/ }),

/***/ "./app/assets/components/hee/hee-newsletter/newsletter.js":
/*!****************************************************************!*\
  !*** ./app/assets/components/hee/hee-newsletter/newsletter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Newsletter
  * Elements with the selector 'nhsuk-newsletter-form' are passed into this class
  */
  var Newsletter = /*#__PURE__*/function () {
    function Newsletter(newsletter) {
      _classCallCheck(this, Newsletter);

      this.newsletter = newsletter;
      this.requiredInputs = newsletter.querySelectorAll("[required]");
      this.errors = [];
      this.init();
      window.recaptchaCallback = this.recaptchaCallback;
    }

    _createClass(Newsletter, [{
      key: "init",
      value: function init() {
        this.resetForm();
        this.addEvents();
      }
    }, {
      key: "addEvents",
      value: function addEvents() {
        var _this = this;

        this.requiredInputs.forEach(function (input) {
          input.addEventListener("focusout", function (c) {
            return _this.validate(c.target);
          });
        });
      }
    }, {
      key: "validate",
      value: function validate(target) {
        var targetError = document.getElementById("errors-" + target.name);
        var targetSummaryError = document.getElementById("error-summary-" + target.name);

        if (target.name == "firstname" || target.name == "lastname") {
          this.errorEmpty(target, targetError, targetSummaryError);
        } else if (target.name == "email") {
          this.errorEmail(target, targetError, targetSummaryError);
        } else if (target.name == "consent") {
          this.errorConsent(target, targetError, targetSummaryError);
        }

        this.updateSummary();
      }
    }, {
      key: "updateSummary",
      value: function updateSummary() {
        var errorSummary = document.getElementById("error-summary");

        if (this.errors.length > 0) {
          errorSummary.style.display = 'block';
        } else {
          errorSummary.style.display = 'none';
        }
      }
    }, {
      key: "errorEmpty",
      value: function errorEmpty(target, targetError, targetSummaryError) {
        if (this.isEmpty(target.value)) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "errorEmail",
      value: function errorEmail(target, targetError, targetSummaryError) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(target.value)) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "errorConsent",
      value: function errorConsent(target, targetError, targetSummaryError) {
        if (!target.checked) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "hideError",
      value: function hideError(target, targetError, targetSummaryError) {
        target.parentElement.classList.remove('nhsuk-form-group--error');
        targetError.style.display = 'none';
        targetSummaryError.style.display = 'none';
        this.errors = this.errors.filter(function (item) {
          return item !== target.name;
        });
      }
    }, {
      key: "showError",
      value: function showError(target, targetError, targetSummaryError) {
        target.parentElement.classList.add('nhsuk-form-group--error');
        targetError.style.display = 'block';
        targetSummaryError.style.display = 'block';
        this.errors = this.errors.filter(function (item) {
          return item !== target.name;
        });
        this.errors.push(target.name);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(str) {
        return !str.trim().length;
      }
    }, {
      key: "resetForm",
      value: function resetForm() {
        var errors = this.newsletter.querySelectorAll('.nhsuk-error-message');
        errors.forEach(function (error) {
          error.style.display = 'none';
        });
        var errorClasses = this.newsletter.querySelectorAll('.nhsuk-form-group--error');
        errorClasses.forEach(function (errorclass) {
          errorclass.classList.remove('nhsuk-form-group--error');
        });
        var errorSummary = this.newsletter.querySelectorAll('.nhsuk-error-summary');
        errorSummary.forEach(function (errorsummary) {
          errorsummary.style.display = 'none';
        });
        var errorSummaryItems = this.newsletter.querySelectorAll('.error-summary-item');
        errorSummaryItems.forEach(function (summaryitem) {
          summaryitem.style.display = 'none';
        });
      }
    }, {
      key: "recaptchaCallback",
      value: function recaptchaCallback() {
        document.querySelector('form#newsletter-form button[type="submit"]').removeAttribute('disabled');
      }
    }]);

    return Newsletter;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-newsletter-form')).forEach(function (newsletter) {
    return new Newsletter(newsletter);
  });
});

/***/ }),

/***/ "./app/assets/components/hee/hee-tabs/tabs.js":
/*!****************************************************!*\
  !*** ./app/assets/components/hee/hee-tabs/tabs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Tabs
  * Elements with the selector '.nhsuk-tabs' are passed into this class
  */
  var Tabs = /*#__PURE__*/function () {
    function Tabs(tabcomponent, i) {
      _classCallCheck(this, Tabs);

      this.tabcomponent = tabcomponent;
      this.init();
    }

    _createClass(Tabs, [{
      key: "init",
      value: function init() {
        var _this = this;

        var tabs = this.tabcomponent.querySelectorAll('[role="tab"]');
        var tabList = this.tabcomponent.querySelector('[role="tablist"]');
        tabs.forEach(function (tab) {
          tab.addEventListener("click", function (c) {
            return _this.changeTabs(c);
          });
        });
        var tabFocus = 0;
        tabList.addEventListener("keydown", function (e) {
          // Move right
          if (e.keyCode === 39 || e.keyCode === 37) {
            tabs[tabFocus].setAttribute("tabindex", -1);

            if (e.keyCode === 39) {
              tabFocus++; // If we're at the end, go to the start

              if (tabFocus >= tabs.length) {
                tabFocus = 0;
              } // Move left

            } else if (e.keyCode === 37) {
              tabFocus--; // If we're at the start, move to the end

              if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
              }
            }

            tabs[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus();
          }
        });
      }
    }, {
      key: "changeTabs",
      value: function changeTabs(e) {
        // console.log(e);
        var target = e.target; // console.log(target);

        var parent = target.parentNode; // console.log(parent);

        var grandparent = parent.parentNode; // console.log(grandparent);

        var selected = parent.getElementsByClassName('nhsuk-tabs__list-item--selected')[0]; // console.log(selected)

        var is_mobile = grandparent.classList.contains('nhsuk-tabs__mobile'); //console.log(is_mobile)
        // Compare selected and target, and if on mobile
        // Close the tab if already open

        if (target == selected && is_mobile) {
          // Unselect all tabs
          this.removeSelected(parent); // Hide all tabs

          this.hideTabs(grandparent);
        } else {
          // Remove all current selected tabs
          this.removeSelected(parent); // Set this tab as selected

          this.setSelected(target); // Hide all tab panels

          this.hideTabs(grandparent); // Show the selected panel

          this.showSelected(grandparent.parentNode, target);
        }
      }
    }, {
      key: "removeSelected",
      value: function removeSelected(ele) {
        ele.querySelectorAll('[aria-selected="true"]').forEach(function (t) {
          return t.setAttribute("aria-selected", false);
        });
        ele.querySelectorAll('.nhsuk-tabs__list-item--selected').forEach(function (c) {
          return c.classList.remove("nhsuk-tabs__list-item--selected");
        });
      }
    }, {
      key: "setSelected",
      value: function setSelected(ele) {
        ele.setAttribute("aria-selected", true);
        ele.classList.add("nhsuk-tabs__list-item--selected");
      }
    }, {
      key: "hideTabs",
      value: function hideTabs(ele) {
        ele.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
          return p.setAttribute("hidden", true);
        });
      }
    }, {
      key: "showSelected",
      value: function showSelected(ele, target) {
        // console.log(ele.querySelector(`#${target.getAttribute("aria-controls")}`))
        ele.querySelector("#".concat(target.getAttribute("aria-controls"))).removeAttribute("hidden");
      }
    }]);

    return Tabs;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-tabs')).forEach(function (tabs, i) {
    return new Tabs(tabs, i);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js":
/*!**************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * AnchorLinks
  * Elements with the selector '.nhsuk-anchor-links' are passed into this class
  */
  var AnchorLinks = /*#__PURE__*/function () {
    function AnchorLinks(anchorLinks) {
      _classCallCheck(this, AnchorLinks);

      this.anchorLinks = anchorLinks; // Disable anchor link generation logic if component is TOC variant.

      if (this.anchorLinks.hasAttribute('data-toc-js')) {
        return;
      }

      this.anchorLinks.hidden = true;
      this.foundHeadings = this.findHeadings(anchorLinks.dataset.headings);

      if (this.foundHeadings.length) {
        this.addAnchorsToPage();
      } else {
        this.anchorLinks.hidden = false;
      }
    }

    _createClass(AnchorLinks, [{
      key: "findHeadings",
      value: function findHeadings(headings) {
        var foundHeadings = [];

        if (headings) {
          document.querySelectorAll(headings).forEach(function (heading, i) {
            if (!heading.id) {
              heading.id = heading.innerText.replace(/ .*/, '').replace(/[\n\r]/g, '').replace(/\s/g, '').toLowerCase() + i;
            }

            foundHeadings.push(heading);
          });
        }

        return foundHeadings;
      }
    }, {
      key: "appearsOnRightPageColumn",
      value: function appearsOnRightPageColumn(heading, selector) {
        return _toConsumableArray(document.querySelectorAll(selector)).some(function (el) {
          return el !== heading && el.contains(heading);
        });
      }
    }, {
      key: "addAnchorsToPage",
      value: function addAnchorsToPage() {
        var _this = this;

        var ul = document.createElement('ul');
        this.foundHeadings.forEach(function (foundHeading) {
          if (!foundHeading.dataset.anchorlinksignore && !foundHeading.classList.contains('nhsuk-u-visually-hidden') && !foundHeading.classList.contains('nhsuk-card__heading') && !_this.appearsOnRightPageColumn(foundHeading, '.nhsuk-grid-column-one-third')) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + foundHeading.id;
            var hiddenElements = foundHeading.getElementsByClassName("nhsuk-u-visually-hidden");

            while (hiddenElements.length > 0) {
              hiddenElements[0].remove();
            }

            a.innerText = foundHeading.innerText; // strip tags

            a.innerHTML = a.innerHTML.replace(/<br\s*[\/]?>/gi, " "); // strip <br>

            li.appendChild(a);
            ul.appendChild(li);
          }
        });
        this.anchorLinks.appendChild(ul);
        this.anchorLinks.hidden = false;
      }
    }]);

    return AnchorLinks;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-anchor-links')).forEach(function (anchorLinks) {
    return new AnchorLinks(anchorLinks);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js":
/*!******************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Responsible for generating table of contents links.
  */
  var TableContents = /*#__PURE__*/function () {
    function TableContents(tableContents) {
      _classCallCheck(this, TableContents);

      this.tableContents = tableContents;
      this.containerSelector = '.page__main';
      this.headingSelector = 'h2.toc_h2';
      this.subHeadingSelector = 'h3.toc_h3';
      this.headingPrefix = 'hee-toc-heading'; // Anchor links macro sets this data attribute when TOC is flagged as true.

      if (!this.tableContents.hasAttribute('data-toc-js')) {
        return;
      } // Only attempt to build TOC links if H2 anchors found on page.


      var headings = document.querySelectorAll(this.containerSelector + ' ' + this.headingSelector);

      if (headings.length === 0) {
        return;
      } // Build link structure from DOM and append generated markup to TOC
      // component.


      var links = this.createTocLinks(headings);
      this.setTocListMarkup(links); // Build back to top links and append to each TOC heading within page
      // content. We skip the first heading on the page.

      headings = [].slice.call(headings, 1);
      this.setBackToTopLinks(headings);
      var subHeadings = document.querySelectorAll(this.containerSelector + ' ' + this.subHeadingSelector);

      if (subHeadings.length > 0) {
        this.setBackToTopLinks(subHeadings);
      }
    }
    /**
     * Builds array of heading link attributes and their children.
     *
     * @param {NodeList}      headings
     *
     * @returns {Object[]}
     */


    _createClass(TableContents, [{
      key: "createTocLinks",
      value: function createTocLinks(headings) {
        var _this = this;

        var links = [];
        headings.forEach(function (heading, index) {
          var headingId = _this.headingPrefix + '-' + index; // Set unique id for current heading H2 element.

          heading.setAttribute('id', headingId);
          var link = {
            title: _this.getHeadingTitle(heading),
            anchor: headingId,
            children: []
          };
          var sibling = heading.nextElementSibling;
          var count = 0; // Traverse DOM for H3 elements after current H2 heading and append to
          // children links array.

          while (sibling && !sibling.classList.contains('toc_h2')) {
            if (sibling.tagName === 'H3' && sibling.classList.contains('toc_h3')) {
              // Set unique id for current heading H3 element.
              var subHeadingId = headingId + '-' + count;
              sibling.setAttribute('id', subHeadingId);
              link.children.push({
                title: _this.getHeadingTitle(sibling),
                anchor: subHeadingId
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
       * Gets either the short or long title of the heading based on data attr.
       *
       * @param {Object}  heading
       *
       * @returns Object
       */

    }, {
      key: "getHeadingTitle",
      value: function getHeadingTitle(heading) {
        var title;

        if (heading.hasAttribute('data-short-title')) {
          title = heading.dataset.shortTitle;
        } else {
          title = heading.innerText;
        }

        return title;
      }
      /**
       * Creates TOC markup and appends to component.
       *
       * @returns void
       */

    }, {
      key: "setTocListMarkup",
      value: function setTocListMarkup(links) {
        var _this2 = this;

        var list = document.createElement('ul');
        links.forEach(function (link) {
          var listItem = document.createElement('li');

          if (link.children.length > 0) {
            listItem.classList.add('has-children');
          }

          var container = document.createElement('div');
          container.classList.add('hee-anchorlinks__wrapper');

          if (link.children.length > 0) {
            container.classList.add('chevron');
          } else {
            container.classList.add('circle');
          }

          var span = document.createElement('span');

          if (link.children.length > 0) {
            span.innerHTML = _this2.getChevronSVG();
          } else {
            span.innerHTML = _this2.getCircleSVG();
          }

          container.append(span);
          var parentLink = document.createElement('a');
          parentLink.setAttribute('href', '#' + link.anchor);
          parentLink.innerText = link.title;
          container.append(parentLink);
          listItem.append(container);

          if (link.children.length > 0) {
            var childList = document.createElement('ul');
            link.children.forEach(function (item) {
              var childItem = document.createElement('li');
              var childLink = document.createElement('a');
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
       * Builds back to top link component.
       *
       * @returns Object
       */

    }, {
      key: "createBackToTopLink",
      value: function createBackToTopLink() {
        var container = document.createElement('div');
        container.classList.add('hee-back-to-top');
        var anchor = document.createElement('a');
        anchor.setAttribute('href', '#publication-title');
        anchor.setAttribute('title', 'Back to top');
        anchor.innerText = 'Back to top';
        container.append(anchor);
        return container;
      }
      /**
       * Injects back to top links above TOC headings within content.
       *
       * @param {NodeList}      headings
       *
       * @returns void
       */

    }, {
      key: "setBackToTopLinks",
      value: function setBackToTopLinks(headings) {
        var _this3 = this;

        headings.forEach(function (heading, index) {
          var link = _this3.createBackToTopLink();

          heading.parentNode.insertBefore(link, heading);
        });
      }
      /**
       * Returns markup for list item chevron SVG.
       *
       * @returns string
       */

    }, {
      key: "getChevronSVG",
      value: function getChevronSVG() {
        return '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M8.00019 6.99994C8.00095 7.13155 7.97572 7.26201 7.92596 7.38385C7.87619 7.50569 7.80287 7.6165 7.71019 7.70994L2.71019 12.7099C2.61695 12.8032 2.50626 12.8771 2.38443 12.9276C2.26261 12.9781 2.13204 13.004 2.00019 13.004C1.86833 13.004 1.73776 12.9781 1.61594 12.9276C1.49411 12.8771 1.38342 12.8032 1.29018 12.7099C1.19695 12.6167 1.12299 12.506 1.07253 12.3842C1.02206 12.2624 0.996094 12.1318 0.996094 11.9999C0.996094 11.8681 1.02206 11.7375 1.07253 11.6157C1.12299 11.4939 1.19695 11.3832 1.29018 11.2899L5.59019 6.99994L1.29018 2.70994C1.10188 2.52164 0.996094 2.26624 0.996094 1.99994C0.996094 1.73364 1.10188 1.47825 1.29018 1.28994C1.47849 1.10164 1.73388 0.99585 2.00019 0.99585C2.26649 0.99585 2.52188 1.10164 2.71019 1.28994L7.71019 6.28994C7.80287 6.38338 7.87619 6.4942 7.92596 6.61603C7.97572 6.73787 8.00095 6.86833 8.00019 6.99994Z" fill="black"/>' + '</svg>';
      }
      /**
       * Returns markup for list item circle SVG.
       *
       * @returns string
       */

    }, {
      key: "getCircleSVG",
      value: function getCircleSVG() {
        return '<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="1.5" cy="1.5" r="1.5" fill="black"/>' + '</svg>';
      }
    }]);

    return TableContents;
  }();

  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks')).forEach(function (tableContents) {
    return new TableContents(tableContents);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js":
/*!**************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Filter
  * Elements with the selector '.nhsuk-filter' are passed into this class
  */
  var Filter = /*#__PURE__*/function () {
    function Filter(container) {
      _classCallCheck(this, Filter);

      this.container = container;
      this.checkboxes = _toConsumableArray(this.container.getElementsByClassName('nhsuk-checkboxes__input'));
      this.groups = _toConsumableArray(this.container.getElementsByClassName('nhsuk-filter__group'));
      this.submit = this.container.querySelector('.nhsuk-filter__submit');
      this.clearToggle = _toConsumableArray(this.container.getElementsByClassName('nhsuk-filter__group__clear'));
      this.setUp();
      this.addEventListeners();
    }

    _createClass(Filter, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        this.checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('change', function (evt) {
            return _this.updateResults(evt);
          });
        });
        this.groups.forEach(function (group) {
          var legend = group.querySelector('.nhsuk-fieldset__legend');

          if (legend) {
            legend.addEventListener('click', function (evt) {
              return _this.toggleGroup(evt);
            });
          }
        });
        this.clearToggle.forEach(function (toggle) {
          toggle.addEventListener('click', function (evt) {
            return _this.clearCheckboxes(evt);
          });
        });
      }
    }, {
      key: "setUp",
      value: function setUp() {
        var _this2 = this;

        this.container.classList.add('nhsuk-filter--js'); // Close groups
        // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

        this.clearToggle.forEach(function (toggle) {
          _this2.toggleClearLinkVisibility(toggle);
        }); // Hide submit button

        if (this.submit) {
          this.submit.hidden = true;
        }
      }
    }, {
      key: "toggleGroup",
      value: function toggleGroup(evt) {
        evt.preventDefault();
        evt.target.closest('.nhsuk-filter__group').classList.toggle('nhsuk-filter__group--closed');
      }
    }, {
      key: "updateResults",
      value: function updateResults(evt) {
        this.container.submit();
      }
    }, {
      key: "clearCheckboxes",
      value: function clearCheckboxes(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;

        var checkboxes = _toConsumableArray(toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input'));

        checkboxes.forEach(function (cb) {
          cb.removeAttribute('checked');
        });
        this.updateResults(evt);
      }
    }, {
      key: "toggleClearLinkVisibility",
      value: function toggleClearLinkVisibility(toggleLink) {
        var checkboxes = _toConsumableArray(toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input'));

        for (var i = 0; i <= checkboxes.length; i++) {
          if (checkboxes[i].hasAttribute('checked')) {
            toggleLink.classList.add('visible');
          }

          break;
        }
      }
    }]);

    return Filter;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-filter')).forEach(function (filter) {
    return new Filter(filter);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js":
/*!********************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * FilterTag
  * Elements with the selector '.nhsuk-filter-tag' are passed into this class
  */
  var FilterTag = /*#__PURE__*/function () {
    function FilterTag(tag) {
      _classCallCheck(this, FilterTag);

      this.tag = tag;
      this.icon = tag.querySelector('.nhsuk-filter-tag__icon');
      this.setUp();
      this.addEventListeners();
    }

    _createClass(FilterTag, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        this.tag.addEventListener('click', function (evt) {
          return _this.removeFilter(evt);
        });
      }
    }, {
      key: "removeFilter",
      value: function removeFilter(evt) {
        evt.preventDefault();
        document.querySelectorAll("input[value='".concat(this.tag.dataset.filter, "']")).forEach(function (checkbox) {
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change'));
        });
        evt.target.remove();
      }
    }, {
      key: "setUp",
      value: function setUp() {
        this.tag.classList.add('nhsuk-filter-tag--js');

        if (this.icon) {
          this.icon.hidden = false;
        }
      }
    }]);

    return FilterTag;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-filter-tag')).forEach(function (tag) {
    return new FilterTag(tag);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js":
/*!****************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Listing
   * Elements with the selector '.nhsuk-listing' and '.hee-listings' are passed
   * into this class.
   *
   * @todo Remove legacy references to .nhsuk-listing and loops once all new
   * collection templates have been implemented.
   */
  var Listing = /*#__PURE__*/function () {
    function Listing(container) {
      var _this = this;

      _classCallCheck(this, Listing);

      _toConsumableArray(container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')).forEach(function (formElement) {
        _this.addEventListeners(formElement);

        _this.toggleJavascriptElements(formElement);
      });
    }

    _createClass(Listing, [{
      key: "addEventListeners",
      value: function addEventListeners(formElement) {
        var _this2 = this;

        if (formElement) {
          _toConsumableArray(formElement.getElementsByTagName('select')).forEach(function (select) {
            select.addEventListener('change', function (evt) {
              return _this2.updateResults(formElement);
            });
          });
        }
      }
    }, {
      key: "toggleJavascriptElements",
      value: function toggleJavascriptElements(formElement) {
        if (formElement) {
          _toConsumableArray(formElement.querySelectorAll('.hee-listing__filter__submit, .nhsuk-listing__sort__submit')).forEach(function (submit) {
            if (submit) {
              submit.hidden = true;
            }
          });
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults(formElement) {
        formElement.submit();
      }
    }]);

    return Listing;
  }();

  _toConsumableArray(document.querySelectorAll('.hee-listing, .nhsuk-listing')).forEach(function (listing) {
    return new Listing(listing);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/scaffolding/cookies/cookies.js":
/*!**************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/cookies/cookies.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var Cookies = /*#__PURE__*/function () {
    function Cookies() {
      _classCallCheck(this, Cookies);

      // banner
      this.useCookies = '';
      this.banner = document.querySelector('.nhsuk-cookie-banner');
      this.showCookies = document.getElementById('showCookies');
      this.removeCookies = document.getElementById('removeCookies');
      this.host = this.getHost();
      this.cookieStatus();
      this.setCookies();
      this.addEventListeners(); // policy page

      this.Status = document.querySelector('.nhsuk__cookieStatus');
      this.In = document.querySelectorAll('.nhsuk__cookiesIn');
      this.Out = document.querySelectorAll('.nhsuk__cookiesOut');
      this.toggleStatus();
    }

    _createClass(Cookies, [{
      key: "cookieStatus",
      value: function cookieStatus() {
        var _this = this;

        var cookies = document.cookie.split(";");
        cookies.forEach(function (c) {
          var match = c.match(new RegExp('(^| )cookie_consent([^;]+)'));

          if (match) {
            var status = c.split("=")[1];
            _this.useCookies = status;
          }
        });
      }
    }, {
      key: "getHost",
      value: function getHost() {
        var host = window.location.host.toString().split(":")[0];
        return host;
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        if (this.showCookies) {
          this.showCookies.addEventListener('mousedown', this.showCookie);
        }

        if (this.removeCookies) {
          this.removeCookies.addEventListener('mousedown', this.removeCookie);
        }
      }
    }, {
      key: "bannerShow",
      value: function bannerShow() {
        if (this.banner) {
          this.banner.style.display = "block";
        }
      }
    }, {
      key: "bannerHide",
      value: function bannerHide() {
        if (this.banner) {
          this.banner.style.display = "none";
        }
      }
    }, {
      key: "setCookies",
      value: function setCookies() {
        var _this2 = this;

        if (this.useCookies === '') {
          this.bannerShow();
          var analyticsAccept = document.querySelector('#nhsuk-cookie-banner__link_accept_analytics');

          if (analyticsAccept) {
            analyticsAccept.addEventListener('click', function (evt) {
              evt.preventDefault();

              _this2.bannerHide();

              _this2.useCookie();
            });
          }

          var analyticsDecline = document.querySelector('#nhsuk-cookie-banner__link_decline_analytics');

          if (analyticsDecline) {
            analyticsDecline.addEventListener('click', function (evt) {
              evt.preventDefault();

              _this2.bannerHide();

              _this2.noCookie();
            });
          }
        }
      }
    }, {
      key: "useCookie",
      value: function useCookie() {
        document.cookie = "cookie_consent=true; domain=".concat(this.host, "; max-age=7776000");
        location.reload();
      }
    }, {
      key: "noCookie",
      value: function noCookie() {
        document.cookie = "cookie_consent=false; domain=".concat(this.host, "; max-age=7776000");
        location.reload();
      }
    }, {
      key: "toggleStatus",
      value: function toggleStatus() {
        var _this3 = this;

        if (this.Status) {
          document.querySelector('button.nhsuk__cookiesOut').addEventListener('click', function (evt) {
            evt.preventDefault();

            _this3.bannerHide();

            _this3.useCookie();

            location.reload();
          });
          document.querySelector('button.nhsuk__cookiesIn').addEventListener('click', function (evt) {
            evt.preventDefault();

            _this3.bannerHide();

            _this3.noCookie();

            location.reload();
          });

          if (this.useCookies === "false" || this.useCookies === '') {
            this.displayBlock(this.Out);
            this.displayNone(this.In);
          } else {
            this.displayNone(this.Out);
            this.displayBlock(this.In);
          }
        }
      }
    }, {
      key: "displayBlock",
      value: function displayBlock(item) {
        item.forEach(function (e) {
          return e.style.display = "inline-block";
        });
      }
    }, {
      key: "displayNone",
      value: function displayNone(item) {
        item.forEach(function (e) {
          return e.style.display = "none";
        });
      } // redundant but useful

    }, {
      key: "showCookie",
      value: function showCookie() {
        var output = document.getElementById('cookies');
        output.textContent = '> ' + document.cookie;
      }
    }, {
      key: "removeCookie",
      value: function removeCookie() {
        document.cookie = "cookie_consent=false; max-age=0";
        location.reload();
      }
    }]);

    return Cookies;
  }();

  new Cookies(document);
});

/***/ }),

/***/ "./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js":
/*!***********************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SubNav
* Elements with the selector '.nhsuk-subnav' are passed into this class
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var subNav = /*#__PURE__*/function () {
    function subNav(container) {
      _classCallCheck(this, subNav);

      this.container = container;
      this.toggleLink = this.container.querySelector('a');
      this.parentList = this.container.parentNode;
      this.addEventListeners();
    }

    _createClass(subNav, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        if (this.toggleLink) {
          this.toggleLink.addEventListener('click', function (event) {
            return event.preventDefault();
          });
          this.toggleLink.addEventListener('mousedown', function (event) {
            return _this.toggleMenu(event);
          });
          this.toggleLink.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
              _this.toggleMenu(event);
            }
          });
        }
      }
    }, {
      key: "handleState",
      value: function handleState() {
        var _this2 = this;

        var activeElems = document.querySelectorAll(".nhsuk-subnav.is-active");
        activeElems.forEach(function (elem) {
          if (elem != _this2.container) {
            elem.classList.remove("is-active");
            elem.toggleAttribute("aria-expanded");
          } else {
            _this2.toggleClass(_this2.parentList, 'subnav-open');
          }
        });

        if (activeElems.length === 0) {
          this.toggleClass(this.parentList, 'subnav-open');
        }
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        this.handleState();
        this.toggleClass(this.container, "is-active");
        this.toggleAttribute(this.container, "aria-expanded");
      }
    }, {
      key: "toggleClass",
      value: function toggleClass(element, className) {
        if (!element || !className) return;
        var hasClass = element.classList.contains(className);

        if (hasClass) {
          element.classList.remove(className);
        } else {
          element.classList.add(className);
        }
      }
    }, {
      key: "toggleAttribute",
      value: function toggleAttribute(element, attr) {
        // Return without error if element or attr are missing
        if (!element || !attr) return; // Toggle attribute value. Treat no existing attr same as when set to false

        var value = element.getAttribute(attr) === 'true' ? 'false' : 'true';
        element.setAttribute(attr, value);
      }
    }]);

    return subNav;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-subnav')).forEach(function (subnav) {
    return new subNav(subnav);
  });
  /* document.getElementById("close-menu").addEventListener('mousedown', function(){
    document.getElementById("toggle-menu").focus()
  }) */


  var closeMenu = document.querySelector("#close-menu");
  closeMenu && closeMenu.addEventListener('mousedown', function () {
    document.querySelector("#toggle-menu").focus();
  });
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      userInput(event);
    }
  });
  document.addEventListener('mousedown', userInput);

  function userInput(event) {
    // close menu if clicking outside
    var openMenu = document.querySelector(".nhsuk-header__navigation.js-show");

    if (openMenu) {
      var isNotMenu = event.target !== openMenu;
      var isNotMenuButton = event.target !== document.querySelector("#toggle-menu");
      var isMenuChild = event.target.closest(".nhsuk-header__navigation.js-show");

      if (isNotMenu && isNotMenuButton && !isMenuChild) {
        openMenu.classList.remove("js-show");
      }
    } // close sub nav if clicking anywhere on the document except the open or a new subnav


    var openSub = document.querySelector(".nhsuk-subnav.is-active");

    if (openSub) {
      var isNotSub = event.target !== openSub;
      var isSubChild = event.target.closest(".nhsuk-subnav.is-active");

      if (isNotSub && !isSubChild) {
        openSub.classList.remove("is-active");
        document.querySelector(".nhsuk-header__navigation-list").classList.remove("subnav-open");
      }
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./app/assets/hee/hee.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/scaffolding/cookies/cookies */ "./app/assets/hee/blocks/scaffolding/cookies/cookies.js");
/* harmony import */ var _blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/scaffolding/header/navigation/subnav */ "./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/anchorlinks */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components






 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';

 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDalEsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsV0FBekI7QUFDQUcsUUFBQUEsUUFBUSxDQUFDWSxhQUFULENBQXVCLGdDQUF2QixFQUF5RGhCLFNBQXpELENBQW1FQyxNQUFuRSxDQUEwRSxhQUExRTtBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBeEdEOzs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7QUFFQTs7QUFDQTtDQUdBO0FBRUE7O0FBQ0FHLFFBQVEsQ0FBQ1IsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERpRyxFQUFBQSx5RUFBSTtBQUNKeUIsRUFBQUEsMkZBQVc7QUFDWHVGLEVBQUFBLCtFQUFPO0FBQ1AzQixFQUFBQSwyRkFBTTtBQUNOZSxFQUFBQSxrR0FBUztBQUNUTSxFQUFBQSw2RkFBTztBQUNQOEQsRUFBQUEsMkVBQUs7QUFDTDlQLEVBQUFBLDZFQUFNO0FBQ042UCxFQUFBQSx3RkFBTTtBQUNOaE4sRUFBQUEscUZBQVU7QUFDVjBGLEVBQUFBLG1GQUFhO0FBQ2QsQ0FaRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuXG4gICAgICAvLyBEaXNhYmxlIGFuY2hvciBsaW5rIGdlbmVyYXRpb24gbG9naWMgaWYgY29tcG9uZW50IGlzIFRPQyB2YXJpYW50LlxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNwdWJsaWNhdGlvbi10aXRsZScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICB0aGlzLmdyb3VwcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwJyldO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19zdWJtaXQnKTtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpZWxkc2V0X19sZWdlbmQnKTtcbiAgICAgICAgaWYgKGxlZ2VuZCkge1xuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xuXG4gICAgICAvLyBDbG9zZSBncm91cHNcbiAgICAgIC8vIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4gZ3JvdXAuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJykpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVHcm91cChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpLmNsYXNzTGlzdC50b2dnbGUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlTGluaykge1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjaGVja2JveGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBldnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuLy9pbXBvcnQgRGV0YWlsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWRldGFpbHNjYXJkL2RldGFpbHNjYXJkJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMnO1xuLy9pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRpbWVsaW5lL3RpbWVsaW5lJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vL2ltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRyYW5zY3JpcHQiLCJjb250YWluZXIiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImVsZW1lbnQiLCJtYXBJbiIsIm1hcE91dCIsImV2ZW50IiwibWFwQ2xpY2siLCJpdGVtIiwibGlua0V2ZW50IiwidGFyZ2V0Iiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwibW92ZVRvVG9wIiwidGhpc0xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsIndpbmRvdyIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5IiwidmFsdWUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwiQW5jaG9yTGlua3MiLCJhbmNob3JMaW5rcyIsImhhc0F0dHJpYnV0ZSIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJkYXRhc2V0IiwiaGVhZGluZ3MiLCJhZGRBbmNob3JzVG9QYWdlIiwiaGVhZGluZyIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJ0YWdOYW1lIiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJ0b2dnbGVMaW5rIiwiY2IiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYW5hbHl0aWNzQWNjZXB0IiwiYmFubmVySGlkZSIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiaGFuZGxlU3RhdGUiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==