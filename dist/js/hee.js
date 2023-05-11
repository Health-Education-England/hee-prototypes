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

              _this.togglePanel(event.target);
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
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
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
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_mega_menu_mega_menu__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQM0IsRUFBQUEsNEZBQU07QUFDTmUsRUFBQUEsa0dBQVM7QUFDVE0sRUFBQUEsNkZBQU87QUFDUHNGLEVBQUFBLDJFQUFLO0FBQ0x6QixFQUFBQSxtRkFBUTtBQUNSblIsRUFBQUEsNkVBQU07QUFDTjJTLEVBQUFBLHdGQUFNO0FBQ045UCxFQUFBQSxxRkFBVTtBQUNWaUgsRUFBQUEsbUZBQWE7QUFDZCxDQWRELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9tZWdhLW1lbnUvbWVnYS1tZW51LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vbm9kZV9tb2R1bGVzL25oc3VrLWZyb250ZW5kL3BhY2thZ2VzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdHJhbnNjcmlwdCcgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgVHJhbnNjcmlwdCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgY29uc29sZS5sb2codGhpcy50b2dnbGVzKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGV0cmFuc2NyaXB0KGV2dCkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZXRyYW5zY3JpcHQoKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCgpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNYXBcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXJlZ2lvbicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmF2TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIHN2Zykge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMucmVnaW9ucyA9IFsuLi5zdmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstcmVnaW9uJyldO1xuICAgICAgdGhpcy5saXN0ID0gWy4uLm1hcC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVnaW9uTGlzdCBsaSBhJyldO1xuXG4gICAgICB0aGlzLmFkZExpbmtzVG9NYXAoKTtcbiAgICAgIHRoaXMuY2xlYW5TdHlsZSgpO1xuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5saW5rRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbGVhblN0eWxlKCl7XG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAuc3Qwe2ZpbGw6IzAwNUVCODtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLnN0MXtmaWxsOiNBRUI3QkQ7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgICAuZm9jdXMgLnN0MCB7ZmlsbDojZmZlYjNiO3N0cm9rZTojMjEyYjMyO31cbiAgICAgICAgLmZvY3VzICoge3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICBgKSlcbiAgICB9XG5cbiAgICBhZGRMaW5rc1RvTWFwKCl7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHJlZ2lvbi5pZClcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXG4gICAgICAgIGNvbnN0IHRoaXNUaXRsZSA9ICh0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MKT8gdGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCA6IFwiXCJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZWdpb24uaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAke2NoaWxkcmVufVxuICAgICAgICA8L2E+YFxuICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gd3JhcExpbmtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5tYXBPdXQoZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubWFwQ2xpY2soZXZlbnQpKSlcbiAgICB9XG5cbiAgICBsaW5rRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImZvY3VzXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcbiAgICB9XG5cbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XG4gICAgICBvYmoucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvYmopO1xuICAgIH1cblxuICAgIG1hcEluKHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGhpcy5tb3ZlVG9Ub3AodGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcE91dCh0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgdGhpc01hcENvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChldmVudC50YXJnZXQuY2xvc2VzdChcImdcIikuaWQpXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXG4gICAgfVxuXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cblxuICAgIGxpbmtFdmVudCh0YXJnZXQsIGRpcmVjdGlvbiwgdHlwZSkge1xuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpbmtDb3VudGVycGFydCh0aGlzSWQpXG4gICAgICBpZihkaXJlY3Rpb24gPT09IFwiaW5cIikge1xuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwT3V0KHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLnJlZ2lvbnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcbiAgICAvLyBuZWVkIHRvIHdhaXQgZm9yIFNWRyB0byBsb2FkXG4gICAgY29uc3Qgb2JqID0gbWFwLnF1ZXJ5U2VsZWN0b3IoJ29iamVjdCcpXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qgc3ZnID0gb2JqLmdldFNWR0RvY3VtZW50KCkucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgIGlmKHN2Zyl7XG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE5ld3NsZXR0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnbmhzdWstbmV3c2xldHRlci1mb3JtJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOZXdzbGV0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuZXdzbGV0dGVyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXdzbGV0dGVyO1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB3aW5kb3cucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpICAgICAgO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYyA9PiB0aGlzLnZhbGlkYXRlKGMudGFyZ2V0KSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhbGlkYXRlKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgdmFyIHRhcmdldFN1bW1hcnlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeS1cIit0YXJnZXQubmFtZSk7XG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJmaXJzdG5hbWVcIiB8fCB0YXJnZXQubmFtZSA9PSBcImxhc3RuYW1lXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtbWFyeSgpIHtcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XG4gICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMClcbiAgICAgIHsgICAgICAgIFxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHN0cikge1xuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIGVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvckNsYXNzZXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcbiAgICAgICAgZXJyb3JjbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xuICAgICAgZXJyb3JTdW1tYXJ5LmZvckVhY2goZXJyb3JzdW1tYXJ5ID0+IHtcbiAgICAgICAgZXJyb3JzdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5SXRlbXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLXN1bW1hcnktaXRlbScpO1xuICAgICAgZXJyb3JTdW1tYXJ5SXRlbXMuZm9yRWFjaChzdW1tYXJ5aXRlbSA9PiB7XG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNhcHRjaGFDYWxsYmFjaygpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jbmV3c2xldHRlci1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbmV3c2xldHRlci1mb3JtJyldLmZvckVhY2goKG5ld3NsZXR0ZXIpID0+IG5ldyBOZXdzbGV0dGVyKG5ld3NsZXR0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIEFuY2hvciBsaW5rIHN0aWNreSB0b29sYmFyIGF0IGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICovXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmhlZS1hbmNob3JsaW5rc19fc3RpY2t5X19idG4nKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLnNpZGViYXJBbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19yaWdodGJhciAuaGVlLWFuY2hvcmxpbmtzJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWUtYW5jaG9ybGlua3Mtc3RpY2t5Jyk7XG4gIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgbmV3IEFuY2hvckxpbmtzU3RpY2t5KGVsZW1lbnQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgLy8gRGlzYWJsZSBhbmNob3IgbGluayBnZW5lcmF0aW9uIGxvZ2ljIGlmIGNvbXBvbmVudCBpcyBUT0MgdmFyaWFudC5cbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncyA9IHRoaXMuZmluZEhlYWRpbmdzKGFuY2hvckxpbmtzLmRhdGFzZXQuaGVhZGluZ3MpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFkZEFuY2hvcnNUb1BhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEhlYWRpbmdzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXG4gICAgICBpZiAoaGVhZGluZ3MpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChoZWFkaW5ncykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIFJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzLlxuICAqL1xuICBjbGFzcyBUYWJsZUNvbnRlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ29udGVudHMpIHtcbiAgICAgIHRoaXMudGFibGVDb250ZW50cyA9IHRhYmxlQ29udGVudHM7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSAnLnBhZ2VfX21haW4nO1xuICAgICAgdGhpcy5oZWFkaW5nU2VsZWN0b3IgPSAnaDIudG9jX2gyJztcbiAgICAgIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yID0gJ2gzLnRvY19oMyc7XG4gICAgICB0aGlzLmhlYWRpbmdQcmVmaXggPSAnaGVlLXRvYy1oZWFkaW5nJztcblxuICAgICAgLy8gQW5jaG9yIGxpbmtzIG1hY3JvIHNldHMgdGhpcyBkYXRhIGF0dHJpYnV0ZSB3aGVuIFRPQyBpcyBmbGFnZ2VkIGFzIHRydWUuXG4gICAgICBpZiAoIXRoaXMudGFibGVDb250ZW50cy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gYnVpbGQgVE9DIGxpbmtzIGlmIEgyIGFuY2hvcnMgZm91bmQgb24gcGFnZS5cbiAgICAgIGxldCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuaGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChoZWFkaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBsaW5rIHN0cnVjdHVyZSBmcm9tIERPTSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBtYXJrdXAgdG8gVE9DXG4gICAgICAvLyBjb21wb25lbnQuXG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpO1xuICAgICAgdGhpcy5zZXRUb2NMaXN0TWFya3VwKGxpbmtzKTtcblxuICAgICAgLy8gQnVpbGQgYmFjayB0byB0b3AgbGlua3MgYW5kIGFwcGVuZCB0byBlYWNoIFRPQyBoZWFkaW5nIHdpdGhpbiBwYWdlXG4gICAgICAvLyBjb250ZW50LiBXZSBza2lwIHRoZSBmaXJzdCBoZWFkaW5nIG9uIHRoZSBwYWdlLlxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcbiAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpO1xuICAgICAgY29uc3Qgc3ViSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLnN1YkhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKHN1YkhlYWRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0lkID0gdGhpcy5oZWFkaW5nUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGhlYWRpbmdJZClcblxuICAgICAgICBsZXQgbGluayA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoaGVhZGluZyksXG4gICAgICAgICAgYW5jaG9yOiBoZWFkaW5nSWQsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXG4gICAgICAgIC8vIGNoaWxkcmVuIGxpbmtzIGFycmF5LlxuICAgICAgICB3aGlsZSAoc2libGluZyAmJiAhc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMicpKSB7XG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcblxuICAgICAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgzIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcbiAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsIHN1YkhlYWRpbmdJZClcblxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKHNpYmxpbmcpLFxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhlYWRpbmdJZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGVpdGhlciB0aGUgc2hvcnQgb3IgbG9uZyB0aXRsZSBvZiB0aGUgaGVhZGluZyBiYXNlZCBvbiBkYXRhIGF0dHIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGhlYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSB7XG4gICAgICBsZXQgdGl0bGU7XG5cbiAgICAgIGlmIChoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG9ydC10aXRsZScpKSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRUb2NMaXN0TWFya3VwKGxpbmtzKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGlsZHJlbicpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYW5jaG9ybGlua3NfX3dyYXBwZXInKVxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZXZyb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2hldnJvblNWRygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaXJjbGVTVkcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3Bhbik7XG5cbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHBhcmVudExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgbGluay5hbmNob3IpO1xuICAgICAgICBwYXJlbnRMaW5rLmlubmVyVGV4dCA9IGxpbmsudGl0bGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJlbnRMaW5rKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgbGluay5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBpdGVtLmFuY2hvcik7XG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICAgICAgY2hpbGRJdGVtLmFwcGVuZChjaGlsZExpbmspO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmFjayB0byB0b3AgbGluayBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCYWNrVG9Ub3BMaW5rKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1iYWNrLXRvLXRvcCcpO1xuXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjcHVibGljYXRpb24tdGl0bGUnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0JhY2sgdG8gdG9wJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYmFjayB0byB0b3AgbGlua3MgYWJvdmUgVE9DIGhlYWRpbmdzIHdpdGhpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBBdm9pZHMgZHVwbGljYXRlIGJhY2sgdG8gdG9wIGxpbmtzIHdoZW4gc3RpY2t5IGlzIHByZXNlbnQuXG4gICAgICAgIGlmICghaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XG4gICAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXAoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJDaGVja2JveGVzKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIC8vIENsb3NlIGdyb3Vwc1xuICAgICAgLy8gdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgIGlmICh0aGlzLnN1Ym1pdCkge1xuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhldnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcblxuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGV2dCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGVMaW5rKSB7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQge3RvZ2dsZUF0dHJpYnV0ZSwgdG9nZ2xlQ2xhc3N9IGZyb20gJ25oc3VrLWZyb250ZW5kL3BhY2thZ2VzL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAvKipcbiAgICogTWVnYSBtZW51IGNvbXBvbmVudCBpbnRlcmFjdGlvbnMuXG4gICAqL1xuICBjbGFzcyBNZWdhTWVudSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZWdhTWVudSkge1xuICAgICAgdGhpcy5tZWdhTWVudSA9IG1lZ2FNZW51O1xuICAgICAgdGhpcy50b2dnbGVMaW5rcyA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1tZWdhLW1lbnVfX3N1Ym5hdiAuaGVlLW1lZ2EtbWVudV9fbGluaycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgaW5uZXIgcGFuZWwgbGlua3MuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmtzLmZvckVhY2goKHRvZ2dsZUxpbmspID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UGFuZWwgPSB0aGlzLmdldFRhcmdldFBhbmVsRWxlbWVudCh0b2dnbGVMaW5rKTtcblxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgb24gc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsuXG4gICAgICAgIHRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKCF0YXJnZXRQYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFuZWxzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50b2dnbGVQYW5lbChldmVudC50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgICAgdG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgZXNjYXBlIGtleSBwcmVzcyB3aGVuIGEgcGFuZWwgbGluayBpcyBpbiBmb2N1cy5cbiAgICAgICAgdGFyZ2V0UGFuZWwucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1tZWdhLW1lbnVfX3BhbmVsX19saW5rJykuZm9yRWFjaCgocGFuZWxMaW5rKSA9PiB7XG4gICAgICAgICAgcGFuZWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKHRvZ2dsZUxpbmspO1xuICAgICAgICAgICAgICB0b2dnbGVMaW5rLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIYW5kbGVzIHNoaWZ0ICsgdGFiIGJlaGF2aW91ciBmcm9tIGZpcnN0IGxpbmsgdG8gdG9nZ2xlIGxpbmsuXG4gICAgICAgIHRhcmdldFBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19wYW5lbF9fbGluazpmaXJzdC1jaGlsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZihldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlTGluay5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBtZWdhIG1lbnUgcGFuZWwgdmlzaWJpbGl0eS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRMaW5rIE1lbnUgbGluayBlbGVtZW50LlxuICAgICAqL1xuICAgIHRvZ2dsZVBhbmVsKHRhcmdldExpbmspIHtcbiAgICAgIHRvZ2dsZUF0dHJpYnV0ZSh0YXJnZXRMaW5rLCAnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcy5nZXRUYXJnZXRQYW5lbEVsZW1lbnQodGFyZ2V0TGluayksICdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1lZ2EgbWVudSBwYW5lbCBlbGVtZW50IGZyb20gdGFyZ2V0IG1lbnUgbGluay5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRMaW5rIE1lbnUgbGluayBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldFRhcmdldFBhbmVsRWxlbWVudCh0YXJnZXRMaW5rKSB7XG4gICAgICBjb25zdCBwYW5lbElkID0gdGFyZ2V0TGluay5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYW5lbElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgc3RhdGUgb2YgYWN0aXZlIHBhbmVsLlxuICAgICAqL1xuICAgIHJlc2V0UGFuZWxzKCkge1xuICAgICAgY29uc3QgYWN0aXZlUGFuZWwgPSB0aGlzLm1lZ2FNZW51LnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19wYW5lbC5pcy1hY3RpdmUnKTtcbiAgICAgIGlmIChhY3RpdmVQYW5lbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0b2dnbGVMaW5rID0gdGhpcy5tZWdhTWVudS5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fbGlua1thcmlhLWNvbnRyb2xzPVwiJyArIGFjdGl2ZVBhbmVsLmlkICsgJ1wiXScpO1xuICAgICAgICB0b2dnbGVMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBhY3RpdmVQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZ2EtbWVudScpXS5mb3JFYWNoKG1lZ2FNZW51ID0+IG5ldyBNZWdhTWVudShtZWdhTWVudSkpO1xufVxuIiwiLyoqXG4gKiBHZXQgYW4gYXJyYXkgb2YgYW4gSFRNTCBlbGVtZW50cyBjbGFzc2VzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHN0cmluZyBhcnJheSBvZiBjbGFzcyBuYW1lc1xuKi9cbmV4cG9ydCBjb25zdCBnZXRDbGFzc2VzID0gKGVsZW1lbnQpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQpIHJldHVybiBbXTtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pO1xufTtcblxuLyoqXG4gKiBEb2VzIGEgY2xhc3MgZXhpc3Qgb24gYW4gZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiovXG5leHBvcnQgY29uc3QgaGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGdldENsYXNzZXMoZWxlbWVudCkuaW5jbHVkZXMoY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiovXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAvLyBBcnJheSBvZiBhbGwgZXhpc3RpbmcgY2xhc3Nlc1xuICAgIGNvbnN0IGV4aXN0aW5nQ2xhc3NlcyA9IGdldENsYXNzZXMoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAvLyBTdHJpbmcgb2YgZXhpc3RpbmcgY2xhc3NlcyBtaW51cyB0aGUgY2xhc3MgdG8gcmVtb3ZlXG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IGV4aXN0aW5nQ2xhc3Nlcy5maWx0ZXIoKGV4aXN0aW5nQ2xhc3MpID0+IGV4aXN0aW5nQ2xhc3MgIT09IGNsYXNzTmFtZSkuam9pbignICcpO1xuICAgIC8vIFNldCBjbGFzcyBhdHRyaWJ1dGUgdG8gdGhlIG5ldyBjbGFzc2VzXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcyk7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiovXG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgLy8gU2V0IGNsYXNzIGF0dHJpYnV0ZSB0byB0aGUgbmV3IGNsYXNzZXNcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtlbGVtZW50LmNsYXNzTmFtZX0gJHtjbGFzc05hbWV9YC50cmltKCkpO1xuICB9XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBhIGNsYXNzIG9uIGEgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4qL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICBpZiAoaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUb2dnbGUgYSBib29sZWFuIGF0dHJpYnV0ZSBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiovXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHIpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuO1xuICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBhIHRvZ2dsZSBhIGNsYXNzIG9uIGNvbmRpdGlvbmFsIGNvbnRlbnQgZm9yIGFuIGlucHV0IGJhc2VkIG9uIGNoZWNrZWQgc3RhdGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlucHV0IGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgdG8gdG9nZ2xlXG4qL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUNvbmRpdGlvbmFsSW5wdXQgPSAoaW5wdXQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBpbnB1dCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWlucHV0IHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgLy8gSWYgdGhlIGlucHV0IGhhcyBjb25kaXRpb25hbCBjb250ZW50IGl0IGhhZCBhIGRhdGEtYXJpYS1jb250cm9scyBhdHRyaWJ1dGVcbiAgY29uc3QgY29uZGl0aW9uYWxJZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICBpZiAoY29uZGl0aW9uYWxJZCkge1xuICAgIC8vIEdldCB0aGUgY29uZGl0aW9uYWwgZWxlbWVudCBmcm9tIHRoZSBpbnB1dCBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlXG4gICAgY29uc3QgY29uZGl0aW9uYWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZGl0aW9uYWxJZCk7XG4gICAgaWYgKGNvbmRpdGlvbmFsRWxlbWVudCkge1xuICAgICAgdG9nZ2xlQ2xhc3MoY29uZGl0aW9uYWxFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgdG9nZ2xlQXR0cmlidXRlKGlucHV0LCAnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTWVnYU1lbnUgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbWVnYS1tZW51L21lZ2EtbWVudSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuLy9pbXBvcnQgRGV0YWlsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWRldGFpbHNjYXJkL2RldGFpbHNjYXJkJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMnO1xuLy9pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRpbWVsaW5lL3RpbWVsaW5lJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vL2ltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTWVnYU1lbnUoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRyYW5zY3JpcHQiLCJjb250YWluZXIiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImVsZW1lbnQiLCJtYXBJbiIsIm1hcE91dCIsImV2ZW50IiwibWFwQ2xpY2siLCJpdGVtIiwibGlua0V2ZW50IiwidGFyZ2V0Iiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwibW92ZVRvVG9wIiwidGhpc0xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsIndpbmRvdyIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5IiwidmFsdWUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwiQW5jaG9yTGlua3NTdGlja3kiLCJ0b2dnbGVCdG4iLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsInRvZ2dsZVN0aWNreVRvb2xiYXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsInRhZ05hbWUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoYXNBdHRyaWJ1dGUiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiZGF0YXNldCIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmciLCJpbm5lclRleHQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJ0b2dnbGVMaW5rIiwiY2IiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYW5hbHl0aWNzQWNjZXB0IiwiYmFubmVySGlkZSIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiaGFuZGxlU3RhdGUiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIk1lZ2FNZW51IiwibWVnYU1lbnUiLCJ0b2dnbGVMaW5rcyIsInRhcmdldFBhbmVsIiwiZ2V0VGFyZ2V0UGFuZWxFbGVtZW50IiwicmVzZXRQYW5lbHMiLCJ0b2dnbGVQYW5lbCIsInBhbmVsTGluayIsInNoaWZ0S2V5IiwidGFyZ2V0TGluayIsInBhbmVsSWQiLCJhY3RpdmVQYW5lbCIsImdldENsYXNzZXMiLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJyZW1vdmVDbGFzcyIsImV4aXN0aW5nQ2xhc3NlcyIsIm5ld0NsYXNzZXMiLCJleGlzdGluZ0NsYXNzIiwiam9pbiIsImFkZENsYXNzIiwidG9nZ2xlQ29uZGl0aW9uYWxJbnB1dCIsImNvbmRpdGlvbmFsSWQiLCJjb25kaXRpb25hbEVsZW1lbnQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=