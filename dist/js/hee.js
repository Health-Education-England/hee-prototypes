/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks__sticky')).forEach(function (anchorLinksSticky) {
    return new AnchorLinksSticky(anchorLinksSticky);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/card--summary/summary.js":
/*!*********************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/card--summary/summary.js ***!
  \*********************************************************************/
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
  var SummaryCard = /*#__PURE__*/function () {
    function SummaryCard(summaryCard) {
      _classCallCheck(this, SummaryCard);
      this.summaryCard = summaryCard;
      this.toggleLink = this.summaryCard.querySelector('.hee-card--summary__toggle');
      this.addEventListeners();
    }

    /**
     * Add event listeners to toggle link.
     */
    _createClass(SummaryCard, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        // Handles toggle click event.
        this.toggleLink.addEventListener('click', function (event) {
          event.preventDefault();
          _this.toggleSummary();
        });

        // Handles toggle link enter and spacebar key press.
        this.toggleLink.addEventListener('keydown', function (event) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            _this.toggleSummary();
          }
        });
      }

      /**
       * Toggle all expander content visibility within table card.
       */
    }, {
      key: "toggleSummary",
      value: function toggleSummary() {
        this.summaryCard.classList.toggle('default');
      }
    }]);
    return SummaryCard;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-card--summary')).forEach(function (summaryCard) {
    return new SummaryCard(summaryCard);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-media/media.js":
/*!***************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-media/media.js ***!
  \***************************************************************/
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
  * Elements with the selector '.hee-media-transcript' are passed into this class
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
          this.container.classList.remove("hee-media__transcript-expanded");
        } else {
          this.container.classList.add("hee-media__transcript-expanded");
        }
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        if (this.container.classList.contains("hee-media__transcript-expanded")) {
          return true;
        } else {
          return false;
        }
      }
    }]);
    return Transcript;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-media__transcript')).forEach(function (transcript) {
    return new Transcript(transcript);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js":
/*!*****************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-navmap/navmap.js ***!
  \*****************************************************************/
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

/***/ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js":
/*!*************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js ***!
  \*************************************************************************/
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

/***/ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js":
/*!*************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-tabs/tabs.js ***!
  \*************************************************************/
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
      key: "setUpdatedFlag",
      value: function setUpdatedFlag(isUpdated) {
        // Set sort container hidden scroll flag value. to ensure viewport resets
        // after form submit.
        var flagElement = this.container.querySelector('input[data-update-flag="filter"]');
        if (flagElement !== null) {
          flagElement.value = isUpdated;
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults(evt) {
        // Set sort container hidden scroll flag value,to ensure viewport scrolls
        // down to results listings after form submit.
        this.setUpdatedFlag(true);
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
      this.container = container;
      _toConsumableArray(container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')).forEach(function (formElement) {
        _this.addEventListeners(formElement);
        _this.toggleJavascriptElements(formElement);
      });

      // Disables browser restoring viewport to position before page reload.
      history.scrollRestoration = 'manual';
      this.scrollToResults();
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
      key: "setUpdatedFlag",
      value: function setUpdatedFlag(isUpdated) {
        var flagElement = this.container.querySelector('input[data-update-flag="listing"]');
        if (flagElement !== null) {
          flagElement.value = isUpdated;
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults(formElement) {
        // Set sort container hidden scroll flag value,to ensure viewport scrolls
        // down to results listings after form submit.
        this.setUpdatedFlag(true);
        formElement.submit();
      }
    }, {
      key: "scrollToResults",
      value: function scrollToResults() {
        var url = new URL(window.location);
        if (url.searchParams.has('results_updated')) {
          var listingContainer = document.getElementById('results');
          if (listingContainer !== null) {
            listingContainer.scrollIntoView();
          }
        }
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
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils.js */ "./app/assets/hee/utils/utils.js");
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
          var targetPanel = _this.getTargetPanelElement(toggleLink);

          // Handle click event on sub menu panel toggle link.
          toggleLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (!targetPanel.classList.contains('is-active')) {
              _this.resetPanels();
            }
            _this.togglePanel(event.target);
          });

          // Handles sub menu panel toggle link enter and spacebar key press.
          toggleLink.addEventListener('keydown', function (event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              if (!targetPanel.classList.contains('is-active')) {
                _this.resetPanels();
              }
              _this.togglePanel(event.target);
            }
          });

          // Handles escape key press when a panel link is in focus.
          targetPanel.querySelectorAll('.hee-mega-menu__panel__link').forEach(function (panelLink) {
            panelLink.addEventListener('keydown', function (event) {
              if (event.keyCode === 27) {
                _this.togglePanel(toggleLink);
                toggleLink.focus();
              }
            });
          });

          // Handles shift + tab behaviour from first link to toggle link.
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
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.toggleClass)(this.getTargetPanelElement(targetLink), 'is-active');
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

/***/ "./app/assets/hee/utils/utils.js":
/*!***************************************!*\
  !*** ./app/assets/hee/utils/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   getClasses: () => (/* binding */ getClasses),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
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
    var existingClasses = getClasses(element, className);
    // String of existing classes minus the class to remove
    var newClasses = existingClasses.filter(function (existingClass) {
      return existingClass !== className;
    }).join(' ');
    // Set class attribute to the new classes
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

/***/ }),

/***/ "./node_modules/nhsuk-frontend/packages/common.js":
/*!********************************************************!*\
  !*** ./node_modules/nhsuk-frontend/packages/common.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleAttribute: () => (/* binding */ toggleAttribute),
/* harmony export */   toggleConditionalInput: () => (/* binding */ toggleConditionalInput)
/* harmony export */ });
/**
 * Toggle a boolean attribute on a HTML element
 * @param {HTMLElement} element
 * @param {string} attr
 */
var toggleAttribute = function toggleAttribute(element, attr) {
  // Return without error if element or attr are missing
  if (!element || !attr) return;
  // Toggle attribute value. Treat no existing attr same as when set to false
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
  if (!input || !className) return;
  // If the input has conditional content it had a data-aria-controls attribute
  var conditionalId = input.getAttribute('aria-controls');
  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    var conditionalElement = document.getElementById(conditionalId);
    if (conditionalElement) {
      if (input.checked) {
        conditionalElement.classList.remove(className);
        input.setAttribute('aria-expanded', true);
      } else {
        conditionalElement.classList.add(className);
        input.setAttribute('aria-expanded', false);
      }
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
/* harmony import */ var _blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/content/main/hee-media/media */ "./app/assets/hee/blocks/content/main/hee-media/media.js");
/* harmony import */ var _blocks_scaffolding_mega_menu_mega_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/scaffolding/mega-menu/mega-menu */ "./app/assets/hee/blocks/scaffolding/mega-menu/mega-menu.js");
/* harmony import */ var _blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/content/main/hee-navmap/navmap */ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js");
/* harmony import */ var _blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/hee-newsletter/newsletter */ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/card--summary/summary */ "./app/assets/hee/blocks/content/main/card--summary/summary.js");
/* harmony import */ var _blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/hee-tabs/tabs */ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components



// HEE Components












// Unsorted components



// Initialize components
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_mega_menu_mega_menu__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3kuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2NhcmQtLXN1bW1hcnkvc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL21lZ2EtbWVudS9tZWdhLW1lbnUuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL25vZGVfbW9kdWxlcy9uaHN1ay1mcm9udGVuZC9wYWNrYWdlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxuICAgICAqIHRoZSB3aW5kb3cgdmlld3BvcnQgc2Nyb2xsIHRvZ2dsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXG4gICAgICogdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIFRPQyBib3R0b20gXCJ0b29sYmFyXCIgd2hlbiB0aGUgc2lkZWJhciBUT0MgaGVhZGluZyBpc1xuICAgICAqIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzX19zdGlja3knKV0uZm9yRWFjaChhbmNob3JMaW5rc1N0aWNreSA9PiBuZXcgQW5jaG9yTGlua3NTdGlja3koYW5jaG9yTGlua3NTdGlja3kpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgY2xhc3MgU3VtbWFyeUNhcmQge1xuXG4gICAgY29uc3RydWN0b3Ioc3VtbWFyeUNhcmQpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQgPSBzdW1tYXJ5Q2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuc3VtbWFyeUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS1jYXJkLS1zdW1tYXJ5X190b2dnbGUnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlU3VtbWFyeSgpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZGVmYXVsdCcpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtY2FyZC0tc3VtbWFyeScpXS5mb3JFYWNoKHN1bW1hcnlDYXJkID0+IG5ldyBTdW1tYXJ5Q2FyZChzdW1tYXJ5Q2FyZCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5oZWUtbWVkaWEtdHJhbnNjcmlwdCcgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgVHJhbnNjcmlwdCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgY29uc29sZS5sb2codGhpcy50b2dnbGVzKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGV0cmFuc2NyaXB0KGV2dCkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZXRyYW5zY3JpcHQoKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCgpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgdGhlIFwiZXhwYW5kIGFsbFwiIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZVxuICAgKiBjYXJkcy5cbiAgICovXG4gIGNsYXNzIFRhYmxlQ2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcbiAgICAgIHRoaXMudGFibGVDYXJkID0gdGFibGVDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS10YWJsZS1leHBhbmRlcl9fdG9nZ2xlIGEnKTtcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XG4gICAgICB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW47XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIHN1bW1hcnkgZWxlbWVudHMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXG4gICAgICogZXZlbnQgZnVuY3Rpb25hbGl0eSBpcyBoYW5kbGVkIGJ5IHRoZSBuaHN1ay1kZXRhaWxzIGNvbXBvbmVudCdzIGphdmFzY3JpcHQuXG4gICAgICovXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XG4gICAgICAvLyBDb25maWd1cmUgb2JzZXJ2ZXIgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiBhbiBleHBhbmRlcidzIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGV4cGFuZGVyLCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xuICAgICAgLy8gT3BlbiAvIGNsb3NlIGVhY2ggZXhwYW5kZXIgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gIXRoaXMuc3RhdGVPcGVuO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBleHBhbmRlcnMgaGF2ZSBiZWVuIG9wZW5lZCBvciBjbG9zZWQgYW5kIHVwZGF0ZXNcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiAgRnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gTXV0YXRpb25PYnNlcnZlciBkZXRlY3RzIGEgY2hhbmdlIGluIGV4cGFuZGVyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2dnbGVTdGF0ZSgpIHtcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgb3BlbkV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuXG4gICAgICBpZiAodGhpcy5hbmNob3JMaW5rcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MgPSB0aGlzLmZpbmRIZWFkaW5ncyhhbmNob3JMaW5rcy5kYXRhc2V0LmhlYWRpbmdzKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRIZWFkaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZGRBbmNob3JzVG9QYWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaGVhZGluZ3MpLmZvckVhY2goKGhlYWRpbmcsIGkpID0+IHtcbiAgICAgICAgICBpZiAoIWhlYWRpbmcuaWQpIHtcbiAgICAgICAgICAgIGhlYWRpbmcuaWQgPSBoZWFkaW5nLmlubmVyVGV4dC5yZXBsYWNlKC8gLiovLCcnKS5yZXBsYWNlKC9bXFxuXFxyXS9nLCcnKS5yZXBsYWNlKC9cXHMvZywnJykudG9Mb3dlckNhc2UoKStpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3VuZEhlYWRpbmdzLnB1c2goaGVhZGluZyk7XG4gICAgICAgIH0pXG4gICAgICB9ICAgICAgXG4gICAgICByZXR1cm4gZm91bmRIZWFkaW5ncztcbiAgICB9XG5cbiAgICBhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oaGVhZGluZywgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLnNvbWUoZWwgPT5cbiAgICAgICAgZWwgIT09IGhlYWRpbmcgJiYgZWwuY29udGFpbnMoaGVhZGluZylcbiAgICAgIClcbiAgICB9XG5cbiAgICBhZGRBbmNob3JzVG9QYWdlKCkge1xuICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncy5mb3JFYWNoKGZvdW5kSGVhZGluZyA9PiB7XG4gICAgICAgIGlmICghZm91bmRIZWFkaW5nLmRhdGFzZXQuYW5jaG9ybGlua3NpZ25vcmVcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdS12aXN1YWxseS1oaWRkZW4nKVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay1jYXJkX19oZWFkaW5nJylcbiAgICAgICAgICAmJiAhdGhpcy5hcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oZm91bmRIZWFkaW5nLCAnLm5oc3VrLWdyaWQtY29sdW1uLW9uZS10aGlyZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmhyZWYgPSAnIycrZm91bmRIZWFkaW5nLmlkO1xuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZm91bmRIZWFkaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaHN1ay11LXZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICAgICAgICB3aGlsZSAoaGlkZGVuRWxlbWVudHMubGVuZ3RoID4gMCkgaGlkZGVuRWxlbWVudHNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgYS5pbm5lclRleHQgPSBmb3VuZEhlYWRpbmcuaW5uZXJUZXh0OyAvLyBzdHJpcCB0YWdzXG4gICAgICAgICAgYS5pbm5lckhUTUwgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88YnJcXHMqW1xcL10/Pi9naSwgXCIgXCIpOyAvLyBzdHJpcCA8YnI+XG4gICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgbGluayBzdHJ1Y3R1cmUgZnJvbSBET00gYW5kIGFwcGVuZCBnZW5lcmF0ZWQgbWFya3VwIHRvIFRPQ1xuICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKTtcbiAgICAgIHRoaXMuc2V0VG9jTGlzdE1hcmt1cChsaW5rcyk7XG5cbiAgICAgIC8vIEJ1aWxkIGJhY2sgdG8gdG9wIGxpbmtzIGFuZCBhcHBlbmQgdG8gZWFjaCBUT0MgaGVhZGluZyB3aXRoaW4gcGFnZVxuICAgICAgLy8gY29udGVudC4gV2Ugc2tpcCB0aGUgZmlyc3QgaGVhZGluZyBvbiB0aGUgcGFnZS5cbiAgICAgIGhlYWRpbmdzID0gW10uc2xpY2UuY2FsbChoZWFkaW5ncywgMSk7XG4gICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKTtcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKHN1YkhlYWRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhzdWJIZWFkaW5ncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFycmF5IG9mIGhlYWRpbmcgbGluayBhdHRyaWJ1dGVzIGFuZCB0aGVpciBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBjcmVhdGVUb2NMaW5rcyhoZWFkaW5ncykge1xuICAgICAgbGV0IGxpbmtzID0gW107XG5cbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdJZCA9IHRoaXMuaGVhZGluZ1ByZWZpeCArICctJyArIGluZGV4O1xuXG4gICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMiBlbGVtZW50LlxuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBoZWFkaW5nSWQpXG5cbiAgICAgICAgbGV0IGxpbmsgPSB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpLFxuICAgICAgICAgIGFuY2hvcjogaGVhZGluZ0lkLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzaWJsaW5nID0gaGVhZGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVHJhdmVyc2UgRE9NIGZvciBIMyBlbGVtZW50cyBhZnRlciBjdXJyZW50IEgyIGhlYWRpbmcgYW5kIGFwcGVuZCB0b1xuICAgICAgICAvLyBjaGlsZHJlbiBsaW5rcyBhcnJheS5cbiAgICAgICAgd2hpbGUgKHNpYmxpbmcgJiYgIXNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDInKSkge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI21haW5jb250ZW50Jyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQXZvaWRzIGR1cGxpY2F0ZSBiYWNrIHRvIHRvcCBsaW5rcyB3aGVuIHN0aWNreSBpcyBwcmVzZW50LlxuICAgICAgICBpZiAoIWhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycpKSB7XG4gICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICAgIGhlYWRpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgaGVhZGluZyk7XG4gICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJywgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogRmlsdGVyXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAgKi9cbiAgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICB0aGlzLmdyb3VwcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwJyldO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19zdWJtaXQnKTtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpZWxkc2V0X19sZWdlbmQnKTtcbiAgICAgICAgaWYgKGxlZ2VuZCkge1xuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xuXG4gICAgICAvLyBDbG9zZSBncm91cHNcbiAgICAgIC8vIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4gZ3JvdXAuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJykpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVHcm91cChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpLmNsYXNzTGlzdC50b2dnbGUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZS4gdG8gZW5zdXJlIHZpZXdwb3J0IHJlc2V0c1xuICAgICAgLy8gYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwiZmlsdGVyXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhldnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcblxuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGV2dCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGVMaW5rKSB7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhZy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc29ydCwgLm5oc3VrLWxpc3RpbmdfX3NvcnQnKV0uZm9yRWFjaChmb3JtRWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRGlzYWJsZXMgYnJvd3NlciByZXN0b3Jpbmcgdmlld3BvcnQgdG8gcG9zaXRpb24gYmVmb3JlIHBhZ2UgcmVsb2FkLlxuICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJsaXN0aW5nXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGluZ0NvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHt0b2dnbGVBdHRyaWJ1dGV9IGZyb20gJ25oc3VrLWZyb250ZW5kL3BhY2thZ2VzL2NvbW1vbic7XG5pbXBvcnQge3RvZ2dsZUNsYXNzfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAvKipcbiAgICogTWVnYSBtZW51IGNvbXBvbmVudCBpbnRlcmFjdGlvbnMuXG4gICAqL1xuICBjbGFzcyBNZWdhTWVudSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZWdhTWVudSkge1xuICAgICAgdGhpcy5tZWdhTWVudSA9IG1lZ2FNZW51O1xuICAgICAgdGhpcy50b2dnbGVMaW5rcyA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1tZWdhLW1lbnVfX3N1Ym5hdiAuaGVlLW1lZ2EtbWVudV9fbGluaycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgaW5uZXIgcGFuZWwgbGlua3MuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmtzLmZvckVhY2goKHRvZ2dsZUxpbmspID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UGFuZWwgPSB0aGlzLmdldFRhcmdldFBhbmVsRWxlbWVudCh0b2dnbGVMaW5rKTtcblxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgb24gc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsuXG4gICAgICAgIHRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKCF0YXJnZXRQYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFuZWxzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50b2dnbGVQYW5lbChldmVudC50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgc3ViIG1lbnUgcGFuZWwgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgICAgdG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhhbmRsZXMgZXNjYXBlIGtleSBwcmVzcyB3aGVuIGEgcGFuZWwgbGluayBpcyBpbiBmb2N1cy5cbiAgICAgICAgdGFyZ2V0UGFuZWwucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1tZWdhLW1lbnVfX3BhbmVsX19saW5rJykuZm9yRWFjaCgocGFuZWxMaW5rKSA9PiB7XG4gICAgICAgICAgcGFuZWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKHRvZ2dsZUxpbmspO1xuICAgICAgICAgICAgICB0b2dnbGVMaW5rLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIYW5kbGVzIHNoaWZ0ICsgdGFiIGJlaGF2aW91ciBmcm9tIGZpcnN0IGxpbmsgdG8gdG9nZ2xlIGxpbmsuXG4gICAgICAgIHRhcmdldFBhbmVsLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19wYW5lbF9fbGluazpmaXJzdC1jaGlsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZihldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlTGluay5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBtZWdhIG1lbnUgcGFuZWwgdmlzaWJpbGl0eS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRMaW5rIE1lbnUgbGluayBlbGVtZW50LlxuICAgICAqL1xuICAgIHRvZ2dsZVBhbmVsKHRhcmdldExpbmspIHtcbiAgICAgIHRvZ2dsZUF0dHJpYnV0ZSh0YXJnZXRMaW5rLCAnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcy5nZXRUYXJnZXRQYW5lbEVsZW1lbnQodGFyZ2V0TGluayksICdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1lZ2EgbWVudSBwYW5lbCBlbGVtZW50IGZyb20gdGFyZ2V0IG1lbnUgbGluay5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRMaW5rIE1lbnUgbGluayBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldFRhcmdldFBhbmVsRWxlbWVudCh0YXJnZXRMaW5rKSB7XG4gICAgICBjb25zdCBwYW5lbElkID0gdGFyZ2V0TGluay5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYW5lbElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgc3RhdGUgb2YgYWN0aXZlIHBhbmVsLlxuICAgICAqL1xuICAgIHJlc2V0UGFuZWxzKCkge1xuICAgICAgY29uc3QgYWN0aXZlUGFuZWwgPSB0aGlzLm1lZ2FNZW51LnF1ZXJ5U2VsZWN0b3IoJy5oZWUtbWVnYS1tZW51X19wYW5lbC5pcy1hY3RpdmUnKTtcbiAgICAgIGlmIChhY3RpdmVQYW5lbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0b2dnbGVMaW5rID0gdGhpcy5tZWdhTWVudS5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fbGlua1thcmlhLWNvbnRyb2xzPVwiJyArIGFjdGl2ZVBhbmVsLmlkICsgJ1wiXScpO1xuICAgICAgICB0b2dnbGVMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBhY3RpdmVQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZ2EtbWVudScpXS5mb3JFYWNoKG1lZ2FNZW51ID0+IG5ldyBNZWdhTWVudShtZWdhTWVudSkpO1xufVxuIiwiLyoqXG4gKiBHZXQgYW4gYXJyYXkgb2YgYW4gSFRNTCBlbGVtZW50cyBjbGFzc2VzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7c3RyaW5nW119IHN0cmluZyBhcnJheSBvZiBjbGFzcyBuYW1lc1xuICovXG5leHBvcnQgY29uc3QgZ2V0Q2xhc3NlcyA9IChlbGVtZW50KSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50KSByZXR1cm4gW107XG4gIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbi8qKlxuICogRG9lcyBhIGNsYXNzIGV4aXN0IG9uIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gKi9cbmV4cG9ydCBjb25zdCBoYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZ2V0Q2xhc3NlcyhlbGVtZW50KS5pbmNsdWRlcyhjbGFzc05hbWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBjbGFzcyBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAvLyBBcnJheSBvZiBhbGwgZXhpc3RpbmcgY2xhc3Nlc1xuICAgIGNvbnN0IGV4aXN0aW5nQ2xhc3NlcyA9IGdldENsYXNzZXMoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAvLyBTdHJpbmcgb2YgZXhpc3RpbmcgY2xhc3NlcyBtaW51cyB0aGUgY2xhc3MgdG8gcmVtb3ZlXG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IGV4aXN0aW5nQ2xhc3Nlcy5maWx0ZXIoKGV4aXN0aW5nQ2xhc3MpID0+IGV4aXN0aW5nQ2xhc3MgIT09IGNsYXNzTmFtZSkuam9pbignICcpO1xuICAgIC8vIFNldCBjbGFzcyBhdHRyaWJ1dGUgdG8gdGhlIG5ldyBjbGFzc2VzXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcyk7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgIC8vIFNldCBjbGFzcyBhdHRyaWJ1dGUgdG8gdGhlIG5ldyBjbGFzc2VzXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7ZWxlbWVudC5jbGFzc05hbWV9ICR7Y2xhc3NOYW1lfWAudHJpbSgpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUb2dnbGUgYSBjbGFzcyBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmIChoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBUb2dnbGUgYSBib29sZWFuIGF0dHJpYnV0ZSBvbiBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBUb2dnbGUgYSB0b2dnbGUgYSBjbGFzcyBvbiBjb25kaXRpb25hbCBjb250ZW50IGZvciBhbiBpbnB1dCBiYXNlZCBvbiBjaGVja2VkIHN0YXRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbnB1dCBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIHRvIHRvZ2dsZVxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlQ29uZGl0aW9uYWxJbnB1dCA9IChpbnB1dCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGlucHV0IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghaW5wdXQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gIC8vIElmIHRoZSBpbnB1dCBoYXMgY29uZGl0aW9uYWwgY29udGVudCBpdCBoYWQgYSBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlXG4gIGNvbnN0IGNvbmRpdGlvbmFsSWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICBpZiAoY29uZGl0aW9uYWxJZCkge1xuICAgIC8vIEdldCB0aGUgY29uZGl0aW9uYWwgZWxlbWVudCBmcm9tIHRoZSBpbnB1dCBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlXG4gICAgY29uc3QgY29uZGl0aW9uYWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZGl0aW9uYWxJZClcbiAgICBpZiAoY29uZGl0aW9uYWxFbGVtZW50KSB7XG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBjb25kaXRpb25hbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25kaXRpb25hbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2JztcblxuLy8gSEVFIENvbXBvbmVudHNcbmltcG9ydCBBbmNob3JMaW5rcyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTWVnYU1lbnUgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbWVnYS1tZW51L21lZ2EtbWVudSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSBcIi4vYmxvY2tzL2NvbnRlbnQvbWFpbi9jYXJkLS1zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTWVnYU1lbnUoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rc1N0aWNreSIsImNvbnRhaW5lciIsIl9jbGFzc0NhbGxDaGVjayIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVTdGlja3lUb29sYmFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImlzRWxlbWVudEluVmlld3BvcnQiLCJhZGQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiYW5jaG9yTGlua3NTdGlja3kiLCJTdW1tYXJ5Q2FyZCIsInN1bW1hcnlDYXJkIiwidG9nZ2xlTGluayIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU3VtbWFyeSIsIlRyYW5zY3JpcHQiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJjb250YWlucyIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicmVnaW9uIiwidGhpc0NvdW50ZXJwYXJ0IiwibWFwQ291bnRlcnBhcnQiLCJpZCIsInRoaXNIcmVmIiwiaHJlZiIsInRoaXNUaXRsZSIsImNoaWxkcmVuIiwid3JhcExpbmsiLCJjb25jYXQiLCJfdGhpczIiLCJtYXBJbiIsIm1hcE91dCIsIm1hcENsaWNrIiwiX3RoaXMzIiwiaXRlbSIsImxpbmtFdmVudCIsIm1vdmVUb1RvcCIsIm9iaiIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsInRoaXNMaW5rIiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwibGVuZ3RoIiwiZGlzcGxheSIsImlzRW1wdHkiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiVGFibGVDYXJkIiwidGFibGVDYXJkIiwiZXhwYW5kZXJzIiwic3RhdGVPcGVuIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsImxhYmVsT3BlbiIsImluaXRFeHBhbmRlck9ic2VydmVyIiwidG9nZ2xlRXhwYW5kZXJzIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zTGlzdCIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsInVwZGF0ZVRvZ2dsZVN0YXRlIiwiZXhwYW5kZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsIm9wZW5FeHBhbmRlciIsImNsb3NlRXhwYW5kZXIiLCJsYWJlbENsb3NlIiwiYWxsT3BlbiIsImhhc0F0dHJpYnV0ZSIsInN1bW1hcnkiLCJ0ZXh0IiwiQW5jaG9yTGlua3MiLCJhbmNob3JMaW5rcyIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJoZWFkaW5ncyIsImFkZEFuY2hvcnNUb1BhZ2UiLCJoZWFkaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImxpIiwiYSIsImhpZGRlbkVsZW1lbnRzIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0SXRlbSIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJpbnNlcnRCZWZvcmUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImdyb3VwIiwibGVnZW5kIiwidG9nZ2xlR3JvdXAiLCJjbGVhckNoZWNrYm94ZXMiLCJ0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5Iiwic2V0VXBkYXRlZEZsYWciLCJpc1VwZGF0ZWQiLCJmbGFnRWxlbWVudCIsImNiIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInNjcm9sbFRvUmVzdWx0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsaXN0aW5nQ29udGFpbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImJhbm5lckhpZGUiLCJhbmFseXRpY3NBY2NlcHQiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJoYW5kbGVTdGF0ZSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJNZWdhTWVudSIsIm1lZ2FNZW51IiwidG9nZ2xlTGlua3MiLCJ0YXJnZXRQYW5lbCIsImdldFRhcmdldFBhbmVsRWxlbWVudCIsInJlc2V0UGFuZWxzIiwidG9nZ2xlUGFuZWwiLCJwYW5lbExpbmsiLCJzaGlmdEtleSIsInRhcmdldExpbmsiLCJwYW5lbElkIiwiYWN0aXZlUGFuZWwiLCJnZXRDbGFzc2VzIiwiQm9vbGVhbiIsImluY2x1ZGVzIiwicmVtb3ZlQ2xhc3MiLCJleGlzdGluZ0NsYXNzZXMiLCJuZXdDbGFzc2VzIiwiZXhpc3RpbmdDbGFzcyIsImpvaW4iLCJhZGRDbGFzcyIsInRvZ2dsZUNvbmRpdGlvbmFsSW5wdXQiLCJjb25kaXRpb25hbElkIiwiY29uZGl0aW9uYWxFbGVtZW50IiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9