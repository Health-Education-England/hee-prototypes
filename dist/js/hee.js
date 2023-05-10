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

/***/ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js":
/*!***************************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Responsible for Anchor link sticky toolbar at bottom of viewport.
   */
  var AnchorLinksSticky = /*#__PURE__*/function () {
    function AnchorLinksSticky(container) {
      _classCallCheck(this, AnchorLinksSticky);

      this.container = container;
      this.toggleBtn = this.container.querySelector('button.hee-anchorlinks__sticky__btn');
      this.stickyAnchorLinks = this.container.querySelector('.hee-anchorlinks');
      this.sidebarAnchorLinks = document.querySelector('.page__rightbar .hee-anchorlinks');
      this.addEventListeners();
      this.toggleStickyToolbar();
    }
    /**
     * Adds event listeners for TOC button toggle, TOC link navigation and
     * the window viewport scroll toggle.
     *
     * @returns void
     */


    _createClass(AnchorLinksSticky, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        this.toggleBtn.addEventListener('mousedown', function () {
          return _this.toggleStickyAnchorLinks();
        });
        this.toggleBtn.addEventListener('keyup', function (event) {
          if (event.keyCode === 13) {
            _this.toggleStickyAnchorLinks();
          }
        });
        this.stickyAnchorLinks.addEventListener('click', function (event) {
          if (event.target.tagName === 'A') {
            _this.toggleStickyAnchorLinks();
          }
        });
        this.toggleBtn.addEventListener('keyup', function (event) {
          if (event.target.tagName === 'A' && event.keyCode === 13) {
            _this.toggleStickyAnchorLinks();
          }
        });
        window.addEventListener('scroll', function () {
          _this.toggleStickyToolbar();
        });
      }
      /**
       * Shows / hides the sticky TOC anchor links when "Table of Contents" button
       * triggered.
       *
       * @returns void
       */

    }, {
      key: "toggleStickyAnchorLinks",
      value: function toggleStickyAnchorLinks() {
        this.toggleBtn.classList.toggle('active');
        this.stickyAnchorLinks.classList.toggle('is-sticky');

        if (this.container.getAttribute('aria-expanded') === 'false') {
          this.container.setAttribute('aria-expanded', 'true');
        } else {
          this.container.setAttribute('aria-expanded', 'false');
        }

        this.stickyAnchorLinks.querySelector('a:first-of-type').focus();
      }
      /**
       * Shows / hides the TOC bottom "toolbar" when the sidebar TOC heading is
       * outside the viewport.
       *
       * @returns void
       */

    }, {
      key: "toggleStickyToolbar",
      value: function toggleStickyToolbar() {
        if (!this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'))) {
          this.container.classList.add('active');
        } else {
          this.container.classList.remove('active');
        }
      }
      /**
       * Utility function to determine whether an element is inside the viewport.
       *
       * @param {Object} element
       *
       * @returns boolean
       */

    }, {
      key: "isElementInViewport",
      value: function isElementInViewport(element) {
        var bounding = element.getBoundingClientRect();
        var elementHeight = element.offsetHeight;
        var elementWidth = element.offsetWidth;
        return bounding.top >= -elementHeight && bounding.left >= -elementWidth && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight;
      }
    }]);

    return AnchorLinksSticky;
  }();

  var element = document.getElementById('hee-anchorlinks-sticky');

  if (element !== null) {
    new AnchorLinksSticky(element);
  }
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js":
/*!*****************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/table-expander/table-expander.js ***!
  \*****************************************************************************/
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
   * Responsible for providing the "expand all" toggle functionality for table
   * cards.
   */
  var TableCard = /*#__PURE__*/function () {
    function TableCard(tableCard) {
      _classCallCheck(this, TableCard);

      this.tableCard = tableCard;
      this.toggleLink = this.tableCard.querySelector('.hee-table-expander__toggle a');
      this.expanders = this.tableCard.querySelectorAll('.nhsuk-expander');
      this.stateOpen = false;

      if (this.toggleLink !== null) {
        this.toggleLink.innerText = this.toggleLink.dataset.labelOpen;
        this.addEventListeners();
        this.initExpanderObserver();
      }
    }
    /**
     * Add event listeners to toggle link and summary elements.
     */


    _createClass(TableCard, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        // Handles toggle click event.
        this.toggleLink.addEventListener('click', function (event) {
          event.preventDefault();

          _this.toggleExpanders();
        }); // Handles toggle link enter and spacebar key press.

        this.toggleLink.addEventListener('keydown', function (event) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();

            _this.toggleExpanders();
          }
        });
      }
      /**
       * We use observers to react to click events on individual expanders, as this
       * event functionality is handled by the nhsuk-details component's javascript.
       */

    }, {
      key: "initExpanderObserver",
      value: function initExpanderObserver() {
        var _this2 = this;

        // Configure observer to react to changes in an expander's "open" attribute.
        var observer = new MutationObserver(function (mutationsList) {
          mutationsList.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
              _this2.updateToggleState();
            }
          });
        });
        this.expanders.forEach(function (expander) {
          observer.observe(expander, {
            attributes: true
          });
        });
      }
      /**
       * Toggle all expander content visibility within table card.
       */

    }, {
      key: "toggleExpanders",
      value: function toggleExpanders() {
        var _this3 = this;

        // Open / close each expander depending on current state.
        this.expanders.forEach(function (expander) {
          !_this3.stateOpen ? _this3.openExpander(expander) : _this3.closeExpander(expander);
        }); // Toggle state flag.

        this.stateOpen = !this.stateOpen; // Toggle button text.

        !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose;
      }
      /**
       *  Determines whether all expanders have been opened or closed and updates
       *  the state flag and toggle link text accordingly.
       *
       *  Function is called when MutationObserver detects a change in expander
       *  "open" attribute.
       */

    }, {
      key: "updateToggleState",
      value: function updateToggleState() {
        var allOpen = false;
        this.expanders.forEach(function (expander) {
          !expander.hasAttribute('open') ? allOpen = false : allOpen = true;
        });
        !allOpen ? this.stateOpen = false : this.stateOpen = true;
        !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose;
      }
      /**
       * Opens an expander element.
       * @param {HTMLElement} expander Expander element.
       */

    }, {
      key: "openExpander",
      value: function openExpander(expander) {
        var summary = expander.querySelector('.nhsuk-details__summary');
        var text = expander.querySelector('.nhsuk-details__text');
        summary.setAttribute('aria-expanded', 'true');
        text.setAttribute('aria-hidden', 'false');
        expander.setAttribute('open', 'open');
      }
      /**
       * Closes an expander element.
       * @param {HTMLElement} expander Expander element.
       */

    }, {
      key: "closeExpander",
      value: function closeExpander(expander) {
        var summary = expander.querySelector('.nhsuk-details__summary');
        var text = expander.querySelector('.nhsuk-details__text');
        summary.setAttribute('aria-expanded', 'false');
        text.setAttribute('aria-hidden', 'true');
        expander.removeAttribute('open');
      }
    }]);

    return TableCard;
  }();

  _toConsumableArray(document.getElementsByClassName('hee-table-expander')).forEach(function (tableCard) {
    return new TableCard(tableCard);
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
          // Avoids duplicate back to top links when sticky is present.
          if (!heading.hasAttribute('data-has-top-link')) {
            var link = _this3.createBackToTopLink();

            heading.parentNode.insertBefore(link, heading);
            heading.setAttribute('data-has-top-link', 1);
          }
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

        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].hasAttribute('checked')) {
            toggleLink.classList.add('visible');
            break;
          }
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

/***/ }),

/***/ "./app/assets/hee/blocks/scaffolding/mega-menu/mega-menu.js":
/*!******************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/mega-menu/mega-menu.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nhsuk_frontend_packages_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nhsuk-frontend/packages/common */ "./node_modules/nhsuk-frontend/packages/common.js");
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
   * Mega menu component interactions.
   */
  var MegaMenu = /*#__PURE__*/function () {
    function MegaMenu(megaMenu) {
      _classCallCheck(this, MegaMenu);

      this.megaMenu = megaMenu;
      this.toggleLinks = this.megaMenu.querySelectorAll('.hee-mega-menu__subnav .hee-mega-menu__link');
      this.addEventListeners();
    }
    /**
     * Add event listeners to toggle link and inner panel links.
     */


    _createClass(MegaMenu, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        this.toggleLinks.forEach(function (toggleLink) {
          var targetPanel = _this.getTargetPanelElement(toggleLink); // Handle click event on sub menu panel toggle link.


          toggleLink.addEventListener('click', function (event) {
            event.preventDefault();

            if (!targetPanel.classList.contains('is-active')) {
              _this.resetPanels();
            }

            _this.togglePanel(event.target);
          }); // Handles sub menu panel toggle link enter and spacebar key press.

          toggleLink.addEventListener('keydown', function (event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();

              if (!targetPanel.classList.contains('is-active')) {
                _this.resetPanels();
              }

              _this.togglePanel(event.target); // Set focus on first link in mega menu panel list.


              targetPanel.querySelector('.hee-mega-menu__panel__link:first-child').focus();
            }
          }); // Handles escape key press when a panel link is in focus.

          targetPanel.querySelectorAll('.hee-mega-menu__panel__link').forEach(function (panelLink) {
            panelLink.addEventListener('keydown', function (event) {
              if (event.keyCode === 27) {
                _this.togglePanel(toggleLink);

                toggleLink.focus();
              }
            });
          }); // Handles shift + tab behaviour from first link to toggle link.

          targetPanel.querySelector('.hee-mega-menu__panel__link:first-child').addEventListener('keydown', function (event) {
            if (event.shiftKey && event.keyCode === 9) {
              event.preventDefault();
              toggleLink.focus();
            }
          });
        });
      }
      /**
       * Toggles mega menu panel visibility.
       * @param {HTMLElement} targetLink Menu link element.
       */

    }, {
      key: "togglePanel",
      value: function togglePanel(targetLink) {
        (0,nhsuk_frontend_packages_common__WEBPACK_IMPORTED_MODULE_0__.toggleAttribute)(targetLink, 'aria-expanded');
        (0,nhsuk_frontend_packages_common__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(this.getTargetPanelElement(targetLink), 'is-active');
      }
      /**
       * Returns mega menu panel element from target menu link.
       * @param {HTMLElement} targetLink Menu link element.
       */

    }, {
      key: "getTargetPanelElement",
      value: function getTargetPanelElement(targetLink) {
        var panelId = targetLink.getAttribute('aria-controls');
        return document.getElementById(panelId);
      }
      /**
       * Resets state of active panel.
       */

    }, {
      key: "resetPanels",
      value: function resetPanels() {
        var activePanel = this.megaMenu.querySelector('.hee-mega-menu__panel.is-active');

        if (activePanel !== null) {
          var toggleLink = this.megaMenu.querySelector('.hee-mega-menu__link[aria-controls="' + activePanel.id + '"]');
          toggleLink.setAttribute('aria-expanded', 'false');
          activePanel.classList.remove('is-active');
        }
      }
    }]);

    return MegaMenu;
  }();

  _toConsumableArray(document.getElementsByClassName('hee-mega-menu')).forEach(function (megaMenu) {
    return new MegaMenu(megaMenu);
  });
});

/***/ }),

/***/ "./node_modules/nhsuk-frontend/packages/common.js":
/*!********************************************************!*\
  !*** ./node_modules/nhsuk-frontend/packages/common.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "getClasses": () => (/* binding */ getClasses),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleAttribute": () => (/* binding */ toggleAttribute),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "toggleConditionalInput": () => (/* binding */ toggleConditionalInput)
/* harmony export */ });
/**
 * Get an array of an HTML elements classes
 * @param {HTMLElement} element
 * @returns {string[]} string array of class names
*/
var getClasses = function getClasses(element) {
  // Return without error if element or class are missing
  if (!element) return [];
  return element.className.split(' ').filter(Boolean);
};
/**
 * Does a class exist on an element
 * @param {HTMLElement} element
 * @returns {Boolean} true if element has class
*/

var hasClass = function hasClass(element, className) {
  // Return without error if element or class are missing
  if (!element || !className) return false;
  return getClasses(element).includes(className);
};
/**
 * Remove a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/

var removeClass = function removeClass(element, className) {
  // Return without error if element or class are missing
  if (!element || !className) return;

  if (hasClass(element, className)) {
    // Array of all existing classes
    var existingClasses = getClasses(element, className); // String of existing classes minus the class to remove

    var newClasses = existingClasses.filter(function (existingClass) {
      return existingClass !== className;
    }).join(' '); // Set class attribute to the new classes

    element.setAttribute('class', newClasses);
  }
};
/**
 * Add a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/

var addClass = function addClass(element, className) {
  // Return without error if element or class are missing
  if (!element || !className) return;

  if (!hasClass(element, className)) {
    // Set class attribute to the new classes
    element.setAttribute('class', "".concat(element.className, " ").concat(className).trim());
  }
};
/**
 * Toggle a class on a HTML element
 * @param {HTMLElement} element
 * @param {string} className
*/

var toggleClass = function toggleClass(element, className) {
  if (!element || !className) return;

  if (hasClass(element, className)) {
    removeClass(element, className);
  } else {
    addClass(element, className);
  }
};
/**
 * Toggle a boolean attribute on a HTML element
 * @param {HTMLElement} element
 * @param {string} attr
*/

var toggleAttribute = function toggleAttribute(element, attr) {
  // Return without error if element or attr are missing
  if (!element || !attr) return; // Toggle attribute value. Treat no existing attr same as when set to false

  var value = element.getAttribute(attr) === 'true' ? 'false' : 'true';
  element.setAttribute(attr, value);
};
/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 * @param {HTMLElement} input input element
 * @param {string} className class to toggle
*/

var toggleConditionalInput = function toggleConditionalInput(input, className) {
  // Return without error if input or class are missing
  if (!input || !className) return; // If the input has conditional content it had a data-aria-controls attribute

  var conditionalId = input.getAttribute('aria-controls');

  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    var conditionalElement = document.getElementById(conditionalId);

    if (conditionalElement) {
      toggleClass(conditionalElement, className);
      toggleAttribute(input, 'aria-expanded');
    }
  }
};

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
/* harmony import */ var _blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _blocks_scaffolding_mega_menu_mega_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/scaffolding/mega-menu/mega-menu */ "./app/assets/hee/blocks/scaffolding/mega-menu/mega-menu.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components








 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';


 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_mega_menu_mega_menu__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxlQUFlLENBQUNuTyxLQUFELEVBQVEsZUFBUixDQUFmO0FBQ0Q7QUFDRjtBQUNGLENBYk07Ozs7OztVQ3RGUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBRUE7QUFFQTs7QUFDQTtDQUdBO0FBRUE7O0FBQ0F6RCxRQUFRLENBQUNSLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEaUcsRUFBQUEsMEVBQUk7QUFDSjBFLEVBQUFBLDJGQUFXO0FBQ1hqRCxFQUFBQSx3R0FBaUI7QUFDakJtSSxFQUFBQSwrRUFBTztBQUNQMUIsRUFBQUEsNEZBQU07QUFDTmMsRUFBQUEsa0dBQVM7QUFDVE0sRUFBQUEsNkZBQU87QUFDUHNGLEVBQUFBLDJFQUFLO0FBQ0x6QixFQUFBQSxtRkFBUTtBQUNSelMsRUFBQUEsNkVBQU07QUFDTmlVLEVBQUFBLHdGQUFNO0FBQ05wUixFQUFBQSxxRkFBVTtBQUNWd0ksRUFBQUEsbUZBQWE7QUFDYi9DLEVBQUFBLCtGQUFTO0FBQ1YsQ0FmRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9mb290ZXIvYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL21lZ2EtbWVudS9tZWdhLW1lbnUuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9ub2RlX21vZHVsZXMvbmhzdWstZnJvbnRlbmQvcGFja2FnZXMvY29tbW9uLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxuICAgICAqIHRoZSB3aW5kb3cgdmlld3BvcnQgc2Nyb2xsIHRvZ2dsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXG4gICAgICogdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIFRPQyBib3R0b20gXCJ0b29sYmFyXCIgd2hlbiB0aGUgc2lkZWJhciBUT0MgaGVhZGluZyBpc1xuICAgICAqIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlZS1hbmNob3JsaW5rcy1zdGlja3knKTtcbiAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBuZXcgQW5jaG9yTGlua3NTdGlja3koZWxlbWVudCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgLy8gRGlzYWJsZSBhbmNob3IgbGluayBnZW5lcmF0aW9uIGxvZ2ljIGlmIGNvbXBvbmVudCBpcyBUT0MgdmFyaWFudC5cbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncyA9IHRoaXMuZmluZEhlYWRpbmdzKGFuY2hvckxpbmtzLmRhdGFzZXQuaGVhZGluZ3MpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFkZEFuY2hvcnNUb1BhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEhlYWRpbmdzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXG4gICAgICBpZiAoaGVhZGluZ3MpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChoZWFkaW5ncykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIFJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzLlxuICAqL1xuICBjbGFzcyBUYWJsZUNvbnRlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ29udGVudHMpIHtcbiAgICAgIHRoaXMudGFibGVDb250ZW50cyA9IHRhYmxlQ29udGVudHM7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSAnLnBhZ2VfX21haW4nO1xuICAgICAgdGhpcy5oZWFkaW5nU2VsZWN0b3IgPSAnaDIudG9jX2gyJztcbiAgICAgIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yID0gJ2gzLnRvY19oMyc7XG4gICAgICB0aGlzLmhlYWRpbmdQcmVmaXggPSAnaGVlLXRvYy1oZWFkaW5nJztcblxuICAgICAgLy8gQW5jaG9yIGxpbmtzIG1hY3JvIHNldHMgdGhpcyBkYXRhIGF0dHJpYnV0ZSB3aGVuIFRPQyBpcyBmbGFnZ2VkIGFzIHRydWUuXG4gICAgICBpZiAoIXRoaXMudGFibGVDb250ZW50cy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gYnVpbGQgVE9DIGxpbmtzIGlmIEgyIGFuY2hvcnMgZm91bmQgb24gcGFnZS5cbiAgICAgIGxldCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuaGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChoZWFkaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBsaW5rIHN0cnVjdHVyZSBmcm9tIERPTSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBtYXJrdXAgdG8gVE9DXG4gICAgICAvLyBjb21wb25lbnQuXG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpO1xuICAgICAgdGhpcy5zZXRUb2NMaXN0TWFya3VwKGxpbmtzKTtcblxuICAgICAgLy8gQnVpbGQgYmFjayB0byB0b3AgbGlua3MgYW5kIGFwcGVuZCB0byBlYWNoIFRPQyBoZWFkaW5nIHdpdGhpbiBwYWdlXG4gICAgICAvLyBjb250ZW50LiBXZSBza2lwIHRoZSBmaXJzdCBoZWFkaW5nIG9uIHRoZSBwYWdlLlxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcbiAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpO1xuICAgICAgY29uc3Qgc3ViSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLnN1YkhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKHN1YkhlYWRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0lkID0gdGhpcy5oZWFkaW5nUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGhlYWRpbmdJZClcblxuICAgICAgICBsZXQgbGluayA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoaGVhZGluZyksXG4gICAgICAgICAgYW5jaG9yOiBoZWFkaW5nSWQsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXG4gICAgICAgIC8vIGNoaWxkcmVuIGxpbmtzIGFycmF5LlxuICAgICAgICB3aGlsZSAoc2libGluZyAmJiAhc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMicpKSB7XG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcblxuICAgICAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgzIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcbiAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsIHN1YkhlYWRpbmdJZClcblxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKHNpYmxpbmcpLFxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhlYWRpbmdJZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGVpdGhlciB0aGUgc2hvcnQgb3IgbG9uZyB0aXRsZSBvZiB0aGUgaGVhZGluZyBiYXNlZCBvbiBkYXRhIGF0dHIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGhlYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSB7XG4gICAgICBsZXQgdGl0bGU7XG5cbiAgICAgIGlmIChoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG9ydC10aXRsZScpKSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRUb2NMaXN0TWFya3VwKGxpbmtzKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGlsZHJlbicpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYW5jaG9ybGlua3NfX3dyYXBwZXInKVxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZXZyb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2hldnJvblNWRygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaXJjbGVTVkcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3Bhbik7XG5cbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHBhcmVudExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgbGluay5hbmNob3IpO1xuICAgICAgICBwYXJlbnRMaW5rLmlubmVyVGV4dCA9IGxpbmsudGl0bGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJlbnRMaW5rKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgbGluay5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBpdGVtLmFuY2hvcik7XG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICAgICAgY2hpbGRJdGVtLmFwcGVuZChjaGlsZExpbmspO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmFjayB0byB0b3AgbGluayBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCYWNrVG9Ub3BMaW5rKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1iYWNrLXRvLXRvcCcpO1xuXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjcHVibGljYXRpb24tdGl0bGUnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0JhY2sgdG8gdG9wJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYmFjayB0byB0b3AgbGlua3MgYWJvdmUgVE9DIGhlYWRpbmdzIHdpdGhpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBBdm9pZHMgZHVwbGljYXRlIGJhY2sgdG8gdG9wIGxpbmtzIHdoZW4gc3RpY2t5IGlzIHByZXNlbnQuXG4gICAgICAgIGlmICghaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XG4gICAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXAoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJDaGVja2JveGVzKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIC8vIENsb3NlIGdyb3Vwc1xuICAgICAgLy8gdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgIGlmICh0aGlzLnN1Ym1pdCkge1xuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhldnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcblxuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGV2dCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGVMaW5rKSB7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQge3RvZ2dsZUF0dHJpYnV0ZSwgdG9nZ2xlQ2xhc3N9IGZyb20gJ25oc3VrLWZyb250ZW5kL3BhY2thZ2VzL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAvKipcbiAgICogTWVnYSBtZW51IGNvbXBvbmVudCBpbnRlcmFjdGlvbnMuXG4gICAqL1xuICBjbGFzcyBNZWdhTWVudSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZWdhTWVudSkge1xuICAgICAgdGhpcy5tZWdhTWVudSA9IG1lZ2FNZW51O1xuICAgICAgdGhpcy50b2dnbGVMaW5rcyA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1tZWdhLW1lbnVfX3N1Ym5hdiAuaGVlLW1lZ2EtbWVudV9fbGluaycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgaW5uZXIgcGFuZWwgbGlua3MuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmtzLmZvckVhY2goKHRvZ2dsZUxpbmspID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UGFuZWwgPSB0aGlzLmdldFRhcmdldFBhbmVsRWxlbWVudCh0b2dnbGVMaW5rKTtcblxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgb24gc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsuXG4gICAgICAgIHRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKCF0YXJnZXRQYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFuZWxzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50b2dnbGVQYW5lbChldmVudC50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgICAgdG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBmb2N1cyBvbiBmaXJzdCBsaW5rIGluIG1lZ2EgbWVudSBwYW5lbCBsaXN0LlxuICAgICAgICAgICAgdGFyZ2V0UGFuZWxcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19wYW5lbF9fbGluazpmaXJzdC1jaGlsZCcpXG4gICAgICAgICAgICAgIC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIYW5kbGVzIGVzY2FwZSBrZXkgcHJlc3Mgd2hlbiBhIHBhbmVsIGxpbmsgaXMgaW4gZm9jdXMuXG4gICAgICAgIHRhcmdldFBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbWVnYS1tZW51X19wYW5lbF9fbGluaycpLmZvckVhY2goKHBhbmVsTGluaykgPT4ge1xuICAgICAgICAgIHBhbmVsTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYW5lbCh0b2dnbGVMaW5rKTtcbiAgICAgICAgICAgICAgdG9nZ2xlTGluay5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gSGFuZGxlcyBzaGlmdCArIHRhYiBiZWhhdmlvdXIgZnJvbSBmaXJzdCBsaW5rIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAgICB0YXJnZXRQYW5lbC5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fcGFuZWxfX2xpbms6Zmlyc3QtY2hpbGQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYoZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUxpbmsuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgbWVnYSBtZW51IHBhbmVsIHZpc2liaWxpdHkuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0TGluayBNZW51IGxpbmsgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0b2dnbGVQYW5lbCh0YXJnZXRMaW5rKSB7XG4gICAgICB0b2dnbGVBdHRyaWJ1dGUodGFyZ2V0TGluaywgJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuZ2V0VGFyZ2V0UGFuZWxFbGVtZW50KHRhcmdldExpbmspLCAnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtZWdhIG1lbnUgcGFuZWwgZWxlbWVudCBmcm9tIHRhcmdldCBtZW51IGxpbmsuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0TGluayBNZW51IGxpbmsgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRUYXJnZXRQYW5lbEVsZW1lbnQodGFyZ2V0TGluaykge1xuICAgICAgY29uc3QgcGFuZWxJZCA9IHRhcmdldExpbmsuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFuZWxJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHN0YXRlIG9mIGFjdGl2ZSBwYW5lbC5cbiAgICAgKi9cbiAgICByZXNldFBhbmVscygpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVBhbmVsID0gdGhpcy5tZWdhTWVudS5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fcGFuZWwuaXMtYWN0aXZlJyk7XG4gICAgICBpZiAoYWN0aXZlUGFuZWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvcignLmhlZS1tZWdhLW1lbnVfX2xpbmtbYXJpYS1jb250cm9scz1cIicgKyBhY3RpdmVQYW5lbC5pZCArICdcIl0nKTtcbiAgICAgICAgdG9nZ2xlTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgYWN0aXZlUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWdhLW1lbnUnKV0uZm9yRWFjaChtZWdhTWVudSA9PiBuZXcgTWVnYU1lbnUobWVnYU1lbnUpKTtcbn1cbiIsIi8qKlxuICogR2V0IGFuIGFycmF5IG9mIGFuIEhUTUwgZWxlbWVudHMgY2xhc3Nlc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge3N0cmluZ1tdfSBzdHJpbmcgYXJyYXkgb2YgY2xhc3MgbmFtZXNcbiovXG5leHBvcnQgY29uc3QgZ2V0Q2xhc3NlcyA9IChlbGVtZW50KSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50KSByZXR1cm4gW107XG4gIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbi8qKlxuICogRG9lcyBhIGNsYXNzIGV4aXN0IG9uIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBnZXRDbGFzc2VzKGVsZW1lbnQpLmluY2x1ZGVzKGNsYXNzTmFtZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGNsYXNzIG9uIGEgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4qL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmIChoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgLy8gQXJyYXkgb2YgYWxsIGV4aXN0aW5nIGNsYXNzZXNcbiAgICBjb25zdCBleGlzdGluZ0NsYXNzZXMgPSBnZXRDbGFzc2VzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgLy8gU3RyaW5nIG9mIGV4aXN0aW5nIGNsYXNzZXMgbWludXMgdGhlIGNsYXNzIHRvIHJlbW92ZVxuICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBleGlzdGluZ0NsYXNzZXMuZmlsdGVyKChleGlzdGluZ0NsYXNzKSA9PiBleGlzdGluZ0NsYXNzICE9PSBjbGFzc05hbWUpLmpvaW4oJyAnKTtcbiAgICAvLyBTZXQgY2xhc3MgYXR0cmlidXRlIHRvIHRoZSBuZXcgY2xhc3Nlc1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBhIGNsYXNzIG9uIGEgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4qL1xuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgIC8vIFNldCBjbGFzcyBhdHRyaWJ1dGUgdG8gdGhlIG5ldyBjbGFzc2VzXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7ZWxlbWVudC5jbGFzc05hbWV9ICR7Y2xhc3NOYW1lfWAudHJpbSgpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUb2dnbGUgYSBjbGFzcyBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgYm9vbGVhbiBhdHRyaWJ1dGUgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4qL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVybjtcbiAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgYSB0b2dnbGUgYSBjbGFzcyBvbiBjb25kaXRpb25hbCBjb250ZW50IGZvciBhbiBpbnB1dCBiYXNlZCBvbiBjaGVja2VkIHN0YXRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbnB1dCBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIHRvIHRvZ2dsZVxuKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVDb25kaXRpb25hbElucHV0ID0gKGlucHV0LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgaW5wdXQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFpbnB1dCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIC8vIElmIHRoZSBpbnB1dCBoYXMgY29uZGl0aW9uYWwgY29udGVudCBpdCBoYWQgYSBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlXG4gIGNvbnN0IGNvbmRpdGlvbmFsSWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgaWYgKGNvbmRpdGlvbmFsSWQpIHtcbiAgICAvLyBHZXQgdGhlIGNvbmRpdGlvbmFsIGVsZW1lbnQgZnJvbSB0aGUgaW5wdXQgZGF0YS1hcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZVxuICAgIGNvbnN0IGNvbmRpdGlvbmFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmRpdGlvbmFsSWQpO1xuICAgIGlmIChjb25kaXRpb25hbEVsZW1lbnQpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKGNvbmRpdGlvbmFsRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgIHRvZ2dsZUF0dHJpYnV0ZShpbnB1dCwgJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMnO1xuaW1wb3J0IFN1Yk5hdiBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgVGFibGVDb250ZW50cyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE1lZ2FNZW51IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL21lZ2EtbWVudS9tZWdhLW1lbnUnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbi8vaW1wb3J0IERldGFpbHNDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1kZXRhaWxzY2FyZC9kZXRhaWxzY2FyZCc7XG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcbi8vaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10aW1lbGluZS90aW1lbGluZSc7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy9pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE1lZ2FNZW51KCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiVHJhbnNjcmlwdCIsImNvbnRhaW5lciIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb250YWlucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiZWxlbWVudCIsIm1hcEluIiwibWFwT3V0IiwiZXZlbnQiLCJtYXBDbGljayIsIml0ZW0iLCJsaW5rRXZlbnQiLCJ0YXJnZXQiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJtb3ZlVG9Ub3AiLCJ0aGlzTGluayIsInByZXZlbnREZWZhdWx0IiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0Iiwid2luZG93IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwibGVuZ3RoIiwiZGlzcGxheSIsImlzRW1wdHkiLCJ2YWx1ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJzIiwidGFiY29tcG9uZW50IiwiaSIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsImtleUNvZGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsInBhcmVudCIsInBhcmVudE5vZGUiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJnZXRBdHRyaWJ1dGUiLCJBbmNob3JMaW5rc1N0aWNreSIsInRvZ2dsZUJ0biIsInN0aWNreUFuY2hvckxpbmtzIiwic2lkZWJhckFuY2hvckxpbmtzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsInRvZ2dsZVN0aWNreUFuY2hvckxpbmtzIiwidGFnTmFtZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiVGFibGVDYXJkIiwidGFibGVDYXJkIiwidG9nZ2xlTGluayIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiaGVhZGluZ3MiLCJhZGRBbmNob3JzVG9QYWdlIiwiaGVhZGluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdEl0ZW0iLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwiaW5zZXJ0QmVmb3JlIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwIiwiY2xlYXJDaGVja2JveGVzIiwidG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSIsImNiIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwibGlzdGluZyIsIkNvb2tpZXMiLCJ1c2VDb29raWVzIiwiYmFubmVyIiwic2hvd0Nvb2tpZXMiLCJyZW1vdmVDb29raWVzIiwiaG9zdCIsImdldEhvc3QiLCJjb29raWVTdGF0dXMiLCJzZXRDb29raWVzIiwiU3RhdHVzIiwiSW4iLCJPdXQiLCJ0b2dnbGVTdGF0dXMiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImFuYWx5dGljc0FjY2VwdCIsImJhbm5lckhpZGUiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImhhbmRsZVN0YXRlIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJNZWdhTWVudSIsIm1lZ2FNZW51IiwidG9nZ2xlTGlua3MiLCJ0YXJnZXRQYW5lbCIsImdldFRhcmdldFBhbmVsRWxlbWVudCIsInJlc2V0UGFuZWxzIiwidG9nZ2xlUGFuZWwiLCJwYW5lbExpbmsiLCJzaGlmdEtleSIsInRhcmdldExpbmsiLCJwYW5lbElkIiwiYWN0aXZlUGFuZWwiLCJnZXRDbGFzc2VzIiwiQm9vbGVhbiIsImluY2x1ZGVzIiwicmVtb3ZlQ2xhc3MiLCJleGlzdGluZ0NsYXNzZXMiLCJuZXdDbGFzc2VzIiwiZXhpc3RpbmdDbGFzcyIsImpvaW4iLCJhZGRDbGFzcyIsInRvZ2dsZUNvbmRpdGlvbmFsSW5wdXQiLCJjb25kaXRpb25hbElkIiwiY29uZGl0aW9uYWxFbGVtZW50IiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9