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
        anchor.setAttribute('href', '#maincontent');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTtBQUVBOztBQUNBO0NBR0E7QUFFQTs7QUFDQXpELFFBQVEsQ0FBQ1IsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERpRyxFQUFBQSwwRUFBSTtBQUNKMEUsRUFBQUEsMkZBQVc7QUFDWGpELEVBQUFBLHdHQUFpQjtBQUNqQm1JLEVBQUFBLCtFQUFPO0FBQ1AxQixFQUFBQSw0RkFBTTtBQUNOYyxFQUFBQSxrR0FBUztBQUNUTSxFQUFBQSw2RkFBTztBQUNQc0YsRUFBQUEsMkVBQUs7QUFDTHpCLEVBQUFBLG1GQUFRO0FBQ1J6UyxFQUFBQSw2RUFBTTtBQUNOaVUsRUFBQUEsd0ZBQU07QUFDTnBSLEVBQUFBLHFGQUFVO0FBQ1Z3SSxFQUFBQSxtRkFBYTtBQUNiL0MsRUFBQUEsK0ZBQVM7QUFDVixDQWZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi90YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbWVnYS1tZW51L21lZ2EtbWVudS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL25vZGVfbW9kdWxlcy9uaHN1ay1mcm9udGVuZC9wYWNrYWdlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBBbmNob3IgbGluayBzdGlja3kgdG9vbGJhciBhdCBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAqL1xuICBjbGFzcyBBbmNob3JMaW5rc1N0aWNreSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5zaWRlYmFyQW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcmlnaHRiYXIgLmhlZS1hbmNob3JsaW5rcycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgVE9DIGJ1dHRvbiB0b2dnbGUsIFRPQyBsaW5rIG5hdmlnYXRpb24gYW5kXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpKVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBzdGlja3kgVE9DIGFuY2hvciBsaW5rcyB3aGVuIFwiVGFibGUgb2YgQ29udGVudHNcIiBidXR0b25cbiAgICAgKiB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3Qtb2YtdHlwZScpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXG4gICAgICogb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5VG9vbGJhcigpIHtcbiAgICAgIGlmICghdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2lkZWJhckFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2gyJykpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlbGVtZW50IGlzIGluc2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmcgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxuICAgICAgICAmJiBib3VuZGluZy5sZWZ0ID49IC1lbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyBlbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVlLWFuY2hvcmxpbmtzLXN0aWNreScpO1xuICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgIG5ldyBBbmNob3JMaW5rc1N0aWNreShlbGVtZW50KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgdGhlIFwiZXhwYW5kIGFsbFwiIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZVxuICAgKiBjYXJkcy5cbiAgICovXG4gIGNsYXNzIFRhYmxlQ2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcbiAgICAgIHRoaXMudGFibGVDYXJkID0gdGFibGVDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS10YWJsZS1leHBhbmRlcl9fdG9nZ2xlIGEnKTtcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XG4gICAgICB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW47XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIHN1bW1hcnkgZWxlbWVudHMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXG4gICAgICogZXZlbnQgZnVuY3Rpb25hbGl0eSBpcyBoYW5kbGVkIGJ5IHRoZSBuaHN1ay1kZXRhaWxzIGNvbXBvbmVudCdzIGphdmFzY3JpcHQuXG4gICAgICovXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XG4gICAgICAvLyBDb25maWd1cmUgb2JzZXJ2ZXIgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiBhbiBleHBhbmRlcidzIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGV4cGFuZGVyLCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xuICAgICAgLy8gT3BlbiAvIGNsb3NlIGVhY2ggZXhwYW5kZXIgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gIXRoaXMuc3RhdGVPcGVuO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBleHBhbmRlcnMgaGF2ZSBiZWVuIG9wZW5lZCBvciBjbG9zZWQgYW5kIHVwZGF0ZXNcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiAgRnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gTXV0YXRpb25PYnNlcnZlciBkZXRlY3RzIGEgY2hhbmdlIGluIGV4cGFuZGVyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2dnbGVTdGF0ZSgpIHtcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgb3BlbkV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuXG4gICAgICAvLyBEaXNhYmxlIGFuY2hvciBsaW5rIGdlbmVyYXRpb24gbG9naWMgaWYgY29tcG9uZW50IGlzIFRPQyB2YXJpYW50LlxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXInIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBldnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7dG9nZ2xlQXR0cmlidXRlLCB0b2dnbGVDbGFzc30gZnJvbSAnbmhzdWstZnJvbnRlbmQvcGFja2FnZXMvY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIC8qKlxuICAgKiBNZWdhIG1lbnUgY29tcG9uZW50IGludGVyYWN0aW9ucy5cbiAgICovXG4gIGNsYXNzIE1lZ2FNZW51IHtcblxuICAgIGNvbnN0cnVjdG9yKG1lZ2FNZW51KSB7XG4gICAgICB0aGlzLm1lZ2FNZW51ID0gbWVnYU1lbnU7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmtzID0gdGhpcy5tZWdhTWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLW1lZ2EtbWVudV9fc3VibmF2IC5oZWUtbWVnYS1tZW51X19saW5rJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBpbm5lciBwYW5lbCBsaW5rcy5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlTGlua3MuZm9yRWFjaCgodG9nZ2xlTGluaykgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRQYW5lbCA9IHRoaXMuZ2V0VGFyZ2V0UGFuZWxFbGVtZW50KHRvZ2dsZUxpbmspO1xuXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBvbiBzdWIgbWVudSBwYW5lbCB0b2dnbGUgbGluay5cbiAgICAgICAgdG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoIXRhcmdldFBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYW5lbHMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gSGFuZGxlcyBzdWIgbWVudSBwYW5lbCB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgICB0b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFuZWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gSGFuZGxlcyBlc2NhcGUga2V5IHByZXNzIHdoZW4gYSBwYW5lbCBsaW5rIGlzIGluIGZvY3VzLlxuICAgICAgICB0YXJnZXRQYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLW1lZ2EtbWVudV9fcGFuZWxfX2xpbmsnKS5mb3JFYWNoKChwYW5lbExpbmspID0+IHtcbiAgICAgICAgICBwYW5lbExpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFuZWwodG9nZ2xlTGluayk7XG4gICAgICAgICAgICAgIHRvZ2dsZUxpbmsuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgc2hpZnQgKyB0YWIgYmVoYXZpb3VyIGZyb20gZmlyc3QgbGluayB0byB0b2dnbGUgbGluay5cbiAgICAgICAgdGFyZ2V0UGFuZWwucXVlcnlTZWxlY3RvcignLmhlZS1tZWdhLW1lbnVfX3BhbmVsX19saW5rOmZpcnN0LWNoaWxkJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVMaW5rLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIG1lZ2EgbWVudSBwYW5lbCB2aXNpYmlsaXR5LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldExpbmsgTWVudSBsaW5rIGVsZW1lbnQuXG4gICAgICovXG4gICAgdG9nZ2xlUGFuZWwodGFyZ2V0TGluaykge1xuICAgICAgdG9nZ2xlQXR0cmlidXRlKHRhcmdldExpbmssICdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzLmdldFRhcmdldFBhbmVsRWxlbWVudCh0YXJnZXRMaW5rKSwgJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWVnYSBtZW51IHBhbmVsIGVsZW1lbnQgZnJvbSB0YXJnZXQgbWVudSBsaW5rLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldExpbmsgTWVudSBsaW5rIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0VGFyZ2V0UGFuZWxFbGVtZW50KHRhcmdldExpbmspIHtcbiAgICAgIGNvbnN0IHBhbmVsSWQgPSB0YXJnZXRMaW5rLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhbmVsSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBzdGF0ZSBvZiBhY3RpdmUgcGFuZWwuXG4gICAgICovXG4gICAgcmVzZXRQYW5lbHMoKSB7XG4gICAgICBjb25zdCBhY3RpdmVQYW5lbCA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvcignLmhlZS1tZWdhLW1lbnVfX3BhbmVsLmlzLWFjdGl2ZScpO1xuICAgICAgaWYgKGFjdGl2ZVBhbmVsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSB0aGlzLm1lZ2FNZW51LnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19saW5rW2FyaWEtY29udHJvbHM9XCInICsgYWN0aXZlUGFuZWwuaWQgKyAnXCJdJyk7XG4gICAgICAgIHRvZ2dsZUxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIGFjdGl2ZVBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtbWVnYS1tZW51JyldLmZvckVhY2gobWVnYU1lbnUgPT4gbmV3IE1lZ2FNZW51KG1lZ2FNZW51KSk7XG59XG4iLCIvKipcbiAqIEdldCBhbiBhcnJheSBvZiBhbiBIVE1MIGVsZW1lbnRzIGNsYXNzZXNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gc3RyaW5nIGFycmF5IG9mIGNsYXNzIG5hbWVzXG4qL1xuZXhwb3J0IGNvbnN0IGdldENsYXNzZXMgPSAoZWxlbWVudCkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCkgcmV0dXJuIFtdO1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbik7XG59O1xuXG4vKipcbiAqIERvZXMgYSBjbGFzcyBleGlzdCBvbiBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBlbGVtZW50IGhhcyBjbGFzc1xuKi9cbmV4cG9ydCBjb25zdCBoYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZ2V0Q2xhc3NlcyhlbGVtZW50KS5pbmNsdWRlcyhjbGFzc05hbWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBjbGFzcyBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuKi9cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICBpZiAoaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgIC8vIEFycmF5IG9mIGFsbCBleGlzdGluZyBjbGFzc2VzXG4gICAgY29uc3QgZXhpc3RpbmdDbGFzc2VzID0gZ2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIC8vIFN0cmluZyBvZiBleGlzdGluZyBjbGFzc2VzIG1pbnVzIHRoZSBjbGFzcyB0byByZW1vdmVcbiAgICBjb25zdCBuZXdDbGFzc2VzID0gZXhpc3RpbmdDbGFzc2VzLmZpbHRlcigoZXhpc3RpbmdDbGFzcykgPT4gZXhpc3RpbmdDbGFzcyAhPT0gY2xhc3NOYW1lKS5qb2luKCcgJyk7XG4gICAgLy8gU2V0IGNsYXNzIGF0dHJpYnV0ZSB0byB0aGUgbmV3IGNsYXNzZXNcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXdDbGFzc2VzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuKi9cbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAvLyBTZXQgY2xhc3MgYXR0cmlidXRlIHRvIHRoZSBuZXcgY2xhc3Nlc1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2VsZW1lbnQuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gLnRyaW0oKSk7XG4gIH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiovXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmIChoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBhIGJvb2xlYW4gYXR0cmlidXRlIG9uIGEgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cikgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm47XG4gIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgdG9nZ2xlIGEgY2xhc3Mgb24gY29uZGl0aW9uYWwgY29udGVudCBmb3IgYW4gaW5wdXQgYmFzZWQgb24gY2hlY2tlZCBzdGF0ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXQgaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyB0byB0b2dnbGVcbiovXG5leHBvcnQgY29uc3QgdG9nZ2xlQ29uZGl0aW9uYWxJbnB1dCA9IChpbnB1dCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGlucHV0IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghaW5wdXQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICAvLyBJZiB0aGUgaW5wdXQgaGFzIGNvbmRpdGlvbmFsIGNvbnRlbnQgaXQgaGFkIGEgZGF0YS1hcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZVxuICBjb25zdCBjb25kaXRpb25hbElkID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gIGlmIChjb25kaXRpb25hbElkKSB7XG4gICAgLy8gR2V0IHRoZSBjb25kaXRpb25hbCBlbGVtZW50IGZyb20gdGhlIGlucHV0IGRhdGEtYXJpYS1jb250cm9scyBhdHRyaWJ1dGVcbiAgICBjb25zdCBjb25kaXRpb25hbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25kaXRpb25hbElkKTtcbiAgICBpZiAoY29uZGl0aW9uYWxFbGVtZW50KSB7XG4gICAgICB0b2dnbGVDbGFzcyhjb25kaXRpb25hbEVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICB0b2dnbGVBdHRyaWJ1dGUoaW5wdXQsICdhcmlhLWV4cGFuZGVkJyk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2JztcblxuLy8gSEVFIENvbXBvbmVudHNcbmltcG9ydCBBbmNob3JMaW5rcyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgQW5jaG9yTGlua3NTdGlja3kgZnJvbSAnLi9ibG9ja3MvY29udGVudC9mb290ZXIvYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreSc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBNZWdhTWVudSBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9tZWdhLW1lbnUvbWVnYS1tZW51JztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG4vL2ltcG9ydCBEZXRhaWxzQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtZGV0YWlsc2NhcmQvZGV0YWlsc2NhcmQnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicyc7XG5pbXBvcnQgVGFibGVDYXJkIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi90YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG4vL2ltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGltZWxpbmUvdGltZWxpbmUnO1xuXG4vLyBVbnNvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgRmlsdGVyVGFnIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZyc7XG5cbi8vaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cbi8vIEluaXRpYWxpemUgY29tcG9uZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgVGFicygpO1xuICBBbmNob3JMaW5rcygpO1xuICBBbmNob3JMaW5rc1N0aWNreSgpO1xuICBDb29raWVzKCk7XG4gIEZpbHRlcigpO1xuICBGaWx0ZXJUYWcoKTtcbiAgTGlzdGluZygpO1xuICBNZWRpYSgpO1xuICBNZWdhTWVudSgpO1xuICBOYXZNYXAoKTtcbiAgU3ViTmF2KCk7XG4gIE5ld3NsZXR0ZXIoKTtcbiAgVGFibGVDb250ZW50cygpO1xuICBUYWJsZUNhcmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRyYW5zY3JpcHQiLCJjb250YWluZXIiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImVsZW1lbnQiLCJtYXBJbiIsIm1hcE91dCIsImV2ZW50IiwibWFwQ2xpY2siLCJpdGVtIiwibGlua0V2ZW50IiwidGFyZ2V0Iiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwibW92ZVRvVG9wIiwidGhpc0xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsIndpbmRvdyIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5IiwidmFsdWUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwiQW5jaG9yTGlua3NTdGlja3kiLCJ0b2dnbGVCdG4iLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsInRvZ2dsZVN0aWNreVRvb2xiYXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsInRhZ05hbWUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsInRvZ2dsZUxpbmsiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic3VtbWFyeSIsInRleHQiLCJBbmNob3JMaW5rcyIsImFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJjYiIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJMaXN0aW5nIiwiZm9ybUVsZW1lbnQiLCJ0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJhbmFseXRpY3NBY2NlcHQiLCJiYW5uZXJIaWRlIiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiYWN0aXZlRWxlbXMiLCJlbGVtIiwidG9nZ2xlQXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJoYW5kbGVTdGF0ZSIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiTWVnYU1lbnUiLCJtZWdhTWVudSIsInRvZ2dsZUxpbmtzIiwidGFyZ2V0UGFuZWwiLCJnZXRUYXJnZXRQYW5lbEVsZW1lbnQiLCJyZXNldFBhbmVscyIsInRvZ2dsZVBhbmVsIiwicGFuZWxMaW5rIiwic2hpZnRLZXkiLCJ0YXJnZXRMaW5rIiwicGFuZWxJZCIsImFjdGl2ZVBhbmVsIiwiZ2V0Q2xhc3NlcyIsIkJvb2xlYW4iLCJpbmNsdWRlcyIsInJlbW92ZUNsYXNzIiwiZXhpc3RpbmdDbGFzc2VzIiwibmV3Q2xhc3NlcyIsImV4aXN0aW5nQ2xhc3MiLCJqb2luIiwiYWRkQ2xhc3MiLCJ0b2dnbGVDb25kaXRpb25hbElucHV0IiwiY29uZGl0aW9uYWxJZCIsImNvbmRpdGlvbmFsRWxlbWVudCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==