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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    }, {
      key: "changeTabs",
      value: function changeTabs(e) {
        // console.log(e);
        var target = e.target;
        // console.log(target);
        var parent = target.parentNode;
        // console.log(parent);
        var grandparent = parent.parentNode;
        // console.log(grandparent);
        var selected = parent.getElementsByClassName('nhsuk-tabs__list-item--selected')[0];
        // console.log(selected)
        var is_mobile = grandparent.classList.contains('nhsuk-tabs__mobile');
        //console.log(is_mobile)

        // Compare selected and target, and if on mobile
        // Close the tab if already open
        if (target == selected && is_mobile) {
          // Unselect all tabs
          this.removeSelected(parent);
          // Hide all tabs
          this.hideTabs(grandparent);
        } else {
          // Remove all current selected tabs
          this.removeSelected(parent);

          // Set this tab as selected
          this.setSelected(target);

          // Hide all tab panels
          this.hideTabs(grandparent);

          // Show the selected panel
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks__sticky')).forEach(function (anchorLinks) {
    return new AnchorLinksSticky(anchorLinks);
  });
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        });

        // Handles toggle link enter and spacebar key press.
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
        });

        // Toggle state flag.
        this.stateOpen = !this.stateOpen;

        // Toggle button text.
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * AnchorLinks
  * Elements with the selector '.nhsuk-anchor-links' are passed into this class
  */
  var AnchorLinks = /*#__PURE__*/function () {
    function AnchorLinks(anchorLinks) {
      _classCallCheck(this, AnchorLinks);
      this.anchorLinks = anchorLinks;
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
            while (hiddenElements.length > 0) hiddenElements[0].remove();
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      this.headingPrefix = 'hee-toc-heading';

      // Anchor links macro sets this data attribute when TOC is flagged as true.
      if (!this.tableContents.hasAttribute('data-toc-js')) {
        return;
      }

      // Only attempt to build TOC links if H2 anchors found on page.
      var headings = document.querySelectorAll(this.containerSelector + ' ' + this.headingSelector);
      if (headings.length === 0) {
        return;
      }

      // Build link structure from DOM and append generated markup to TOC
      // component.
      var links = this.createTocLinks(headings);
      this.setTocListMarkup(links);

      // Build back to top links and append to each TOC heading within page
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
          var headingId = _this.headingPrefix + '-' + index;

          // Set unique id for current heading H2 element.
          heading.setAttribute('id', headingId);
          var link = {
            title: _this.getHeadingTitle(heading),
            anchor: headingId,
            children: []
          };
          var sibling = heading.nextElementSibling;
          var count = 0;

          // Traverse DOM for H3 elements after current H2 heading and append to
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        this.container.classList.add('nhsuk-filter--js');

        // Close groups
        // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

        this.clearToggle.forEach(function (toggle) {
          _this2.toggleClearLinkVisibility(toggle);
        });

        // Hide submit button
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        this.tag.remove();
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      this.addEventListeners();

      // policy page
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
      }

      // redundant but useful
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        if (!element || !attr) return;
        // Toggle attribute value. Treat no existing attr same as when set to false
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
    }
    // close sub nav if clicking anywhere on the document except the open or a new subnav
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
/* harmony import */ var _blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
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
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9mb290ZXIvYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxuICAgICAqIHRoZSB3aW5kb3cgdmlld3BvcnQgc2Nyb2xsIHRvZ2dsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXG4gICAgICogdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIFRPQyBib3R0b20gXCJ0b29sYmFyXCIgd2hlbiB0aGUgc2lkZWJhciBUT0MgaGVhZGluZyBpc1xuICAgICAqIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzX19zdGlja3knKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3NTdGlja3koYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyVGFnXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXItdGFnJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXJUYWcge1xuICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICB0aGlzLmljb24gPSB0YWcucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlci10YWdfX2ljb24nKTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0aGlzLnJlbW92ZUZpbHRlcihldnQpKTtcbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuLy9pbXBvcnQgRGV0YWlsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWRldGFpbHNjYXJkL2RldGFpbHNjYXJkJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMnO1xuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXInO1xuLy9pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRpbWVsaW5lL3RpbWVsaW5lJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vL2ltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJUcmFuc2NyaXB0IiwiY29udGFpbmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb250YWlucyIsIl90b0NvbnN1bWFibGVBcnJheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwiZWxlbWVudCIsIm1hcEluIiwibWFwT3V0IiwiZXZlbnQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJ0YXJnZXQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInByZXZlbnREZWZhdWx0IiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0Iiwid2luZG93IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwibGVuZ3RoIiwiZGlzcGxheSIsImlzRW1wdHkiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwiQW5jaG9yTGlua3NTdGlja3kiLCJ0b2dnbGVCdG4iLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsInRvZ2dsZVN0aWNreVRvb2xiYXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsInRhZ05hbWUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImFuY2hvckxpbmtzIiwiVGFibGVDYXJkIiwidGFibGVDYXJkIiwidG9nZ2xlTGluayIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJjYiIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJMaXN0aW5nIiwiZm9ybUVsZW1lbnQiLCJ0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9