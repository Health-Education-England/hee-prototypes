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
          var contentContainer = document.querySelector('.page__content');
          contentContainer.querySelectorAll(headings).forEach(function (heading, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7RUFGRSxJQUdNQSxpQkFBaUI7SUFFckIsU0FBQUEsa0JBQVlDLFNBQVMsRUFBRTtNQUFBQyxlQUFBLE9BQUFGLGlCQUFBO01BRXJCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO01BQzFCLElBQUksQ0FBQ0UsU0FBUyxHQUFHLElBQUksQ0FBQ0YsU0FBUyxDQUFDRyxhQUFhLENBQUMscUNBQXFDLENBQUM7TUFDcEYsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO01BQ3pFLElBQUksQ0FBQ0Usa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGtDQUFrQyxDQUFDO01BRXBGLElBQUksQ0FBQ0ksaUJBQWlCLENBQUMsQ0FBQztNQUN4QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFDNUI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTElDLFlBQUEsQ0FBQVYsaUJBQUE7TUFBQVcsR0FBQTtNQUFBQyxLQUFBLEVBTUEsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCLElBQUksQ0FBQ1YsU0FBUyxDQUFDVyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7VUFBQSxPQUFNRCxLQUFJLENBQUNFLHVCQUF1QixDQUFDLENBQUM7UUFBQSxFQUFDO1FBQ2xGLElBQUksQ0FBQ1osU0FBUyxDQUFDVyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUUsS0FBSyxFQUFJO1VBQ2hELElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4QkosS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDVixpQkFBaUIsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNFLEtBQUssRUFBSztVQUMxRCxJQUFJQSxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUNoQ04sS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDWixTQUFTLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLLEVBQUk7VUFDaEQsSUFBSUEsS0FBSyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sS0FBSyxHQUFHLElBQUlILEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4REosS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBRUZLLE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07VUFDdENELEtBQUksQ0FBQ0osbUJBQW1CLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMSTtNQUFBRSxHQUFBO01BQUFDLEtBQUEsRUFNQSxTQUFBRyx3QkFBQSxFQUEwQjtRQUN4QixJQUFJLENBQUNaLFNBQVMsQ0FBQ2tCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUNqQixpQkFBaUIsQ0FBQ2dCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ3NCLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxPQUFPLEVBQUU7VUFDNUQsSUFBSSxDQUFDdEIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDdEQsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDdkIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7UUFDdkQ7UUFFQSxJQUFJLENBQUNuQixpQkFBaUIsQ0FBQ0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNxQixLQUFLLENBQUMsQ0FBQztNQUNqRTs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMSTtNQUFBZCxHQUFBO01BQUFDLEtBQUEsRUFNQSxTQUFBSCxvQkFBQSxFQUFzQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDaUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDcEIsa0JBQWtCLENBQUNGLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1VBQzFFLElBQUksQ0FBQ0gsU0FBUyxDQUFDb0IsU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzQztNQUNGOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTkk7TUFBQWpCLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUFjLG9CQUFvQkcsT0FBTyxFQUFFO1FBQzNCLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQU1DLGFBQWEsR0FBR0gsT0FBTyxDQUFDSSxZQUFZO1FBQzFDLElBQU1DLFlBQVksR0FBR0wsT0FBTyxDQUFDTSxXQUFXO1FBRXhDLE9BQU9MLFFBQVEsQ0FBQ00sR0FBRyxJQUFJLENBQUNKLGFBQWEsSUFDaENGLFFBQVEsQ0FBQ08sSUFBSSxJQUFJLENBQUNILFlBQVksSUFDOUJKLFFBQVEsQ0FBQ1EsS0FBSyxJQUFJLENBQUNsQixNQUFNLENBQUNtQixVQUFVLElBQUloQyxRQUFRLENBQUNpQyxlQUFlLENBQUNDLFdBQVcsSUFBSVAsWUFBWSxJQUM1RkosUUFBUSxDQUFDWSxNQUFNLElBQUksQ0FBQ3RCLE1BQU0sQ0FBQ3VCLFdBQVcsSUFBSXBDLFFBQVEsQ0FBQ2lDLGVBQWUsQ0FBQ0ksWUFBWSxJQUFJWixhQUFhO01BQ3ZHO0lBQUM7SUFBQSxPQUFBaEMsaUJBQUE7RUFBQTtFQUdINkMsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBQyxpQkFBaUI7SUFBQSxPQUFJLElBQUloRCxpQkFBaUIsQ0FBQ2dELGlCQUFpQixDQUFDO0VBQUEsRUFBQztBQUN4SSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHRCxpRUFBZSxZQUFNO0VBQUEsSUFFYkMsV0FBVztJQUVmLFNBQUFBLFlBQVlDLFdBQVcsRUFBRTtNQUFBaEQsZUFBQSxPQUFBK0MsV0FBQTtNQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztNQUM5QixJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNELFdBQVcsQ0FBQzlDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztNQUU5RSxJQUFJLENBQUNJLGlCQUFpQixDQUFDLENBQUM7SUFDMUI7O0lBRUE7QUFDSjtBQUNBO0lBRklFLFlBQUEsQ0FBQXVDLFdBQUE7TUFBQXRDLEdBQUE7TUFBQUMsS0FBQSxFQUdBLFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQjtRQUNBLElBQUksQ0FBQ3NDLFVBQVUsQ0FBQ3JDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDRSxLQUFLLEVBQUs7VUFDbkRBLEtBQUssQ0FBQ29DLGNBQWMsQ0FBQyxDQUFDO1VBQ3RCdkMsS0FBSSxDQUFDd0MsYUFBYSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDOztRQUVGO1FBQ0EsSUFBSSxDQUFDRixVQUFVLENBQUNyQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ0UsS0FBSyxFQUFLO1VBQ3JELElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsSUFBSUQsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hERCxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztZQUN0QnZDLEtBQUksQ0FBQ3dDLGFBQWEsQ0FBQyxDQUFDO1VBQ3RCO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7O01BRUE7QUFDSjtBQUNBO0lBRkk7TUFBQTFDLEdBQUE7TUFBQUMsS0FBQSxFQUdBLFNBQUF5QyxjQUFBLEVBQWdCO1FBQ2QsSUFBSSxDQUFDSCxXQUFXLENBQUM3QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUM7SUFBQztJQUFBLE9BQUEyQixXQUFBO0VBQUE7RUFHSEosa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBRyxXQUFXO0lBQUEsT0FBSSxJQUFJRCxXQUFXLENBQUNDLFdBQVcsQ0FBQztFQUFBLEVBQUM7QUFDaEgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1JLFVBQVU7SUFDZCxTQUFBQSxXQUFZckQsU0FBUyxFQUFFO01BQUFDLGVBQUEsT0FBQW9ELFVBQUE7TUFDckIsSUFBSSxDQUFDckQsU0FBUyxHQUFHQSxTQUFTO01BQzFCLElBQUksQ0FBQ3NELE9BQU8sR0FBR3RELFNBQVMsQ0FBQ3VELGdCQUFnQixDQUFDLEdBQUcsQ0FBQztNQUU5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDekQsU0FBUyxDQUFDO01BQzNCd0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7TUFDekIsSUFBSSxDQUFDL0MsaUJBQWlCLENBQUMsQ0FBQztJQUMxQjtJQUFDRSxZQUFBLENBQUE0QyxVQUFBO01BQUEzQyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBSixrQkFBQSxFQUFvQjtRQUFBLElBQUFLLEtBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMwQyxPQUFPLEVBQUU7VUFDaEIsSUFBSSxDQUFDQSxPQUFPLENBQUNSLE9BQU8sQ0FBQyxVQUFBekIsTUFBTTtZQUFBLE9BQUlBLE1BQU0sQ0FBQ1IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUE2QyxHQUFHO2NBQUEsT0FBSTlDLEtBQUksQ0FBQytDLGdCQUFnQixDQUFDRCxHQUFHLENBQUM7WUFBQSxFQUFDO1VBQUEsRUFBQztRQUNyRztNQUNGO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFnRCxpQkFBQSxFQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFBRTtVQUN0QixJQUFJLENBQUM1RCxTQUFTLENBQUNvQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNuRSxDQUFDLE1BQU07VUFDTCxJQUFJLENBQUMzQixTQUFTLENBQUNvQixTQUFTLENBQUNNLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNoRTtNQUNGO0lBQUM7TUFBQWhCLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFpRCxZQUFBLEVBQWM7UUFDWixJQUFHLElBQUksQ0FBQzVELFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ3lDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFDO1VBQ3JFLE9BQU8sSUFBSTtRQUNiLENBQUMsTUFBTTtVQUNMLE9BQU8sS0FBSztRQUNkO01BQ0Y7SUFBQztJQUFBLE9BQUFSLFVBQUE7RUFBQTtFQUlIVCxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFnQixVQUFVO0lBQUEsT0FBSSxJQUFJVCxVQUFVLENBQUNTLFVBQVUsQ0FBQztFQUFBLEVBQUM7QUFDakgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1DLE1BQU07SUFDVixTQUFBQSxPQUFZQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtNQUFBaEUsZUFBQSxPQUFBOEQsTUFBQTtNQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztNQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO01BQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUF0QixrQkFBQSxDQUFPcUIsR0FBRyxDQUFDcEIsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7TUFDOUQsSUFBSSxDQUFDc0IsSUFBSSxHQUFBdkIsa0JBQUEsQ0FBT29CLEdBQUcsQ0FBQ1QsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztNQUV6RCxJQUFJLENBQUNhLGFBQWEsQ0FBQyxDQUFDO01BQ3BCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7TUFDakIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO01BQ3hCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztJQUMzQjtJQUFDOUQsWUFBQSxDQUFBc0QsTUFBQTtNQUFBckQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTBELFdBQUEsRUFBWTtRQUNWLElBQUksQ0FBQ0osR0FBRyxDQUFDOUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDcUUsU0FBUyxHQUFHLEVBQUU7UUFDOUMsSUFBSSxDQUFDUCxHQUFHLENBQUM5RCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNzRSxXQUFXLENBQUNuRSxRQUFRLENBQUNvRSxjQUFjLHNXQU1sRSxDQUFDLENBQUM7TUFDTDtJQUFDO01BQUFoRSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBeUQsY0FBQSxFQUFlO1FBQUEsSUFBQXhELEtBQUE7UUFDYixJQUFJLENBQUNzRCxPQUFPLENBQUNwQixPQUFPLENBQUMsVUFBQTZCLE1BQU0sRUFBSTtVQUM3QixJQUFNQyxlQUFlLEdBQUdoRSxLQUFJLENBQUNpRSxjQUFjLENBQUNGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDO1VBQ3RELElBQU1DLFFBQVEsR0FBSUgsZUFBZSxDQUFDSSxJQUFJLEdBQUdKLGVBQWUsQ0FBQ0ksSUFBSSxHQUFHLEdBQUc7VUFDbkUsSUFBTUMsU0FBUyxHQUFJTCxlQUFlLENBQUNKLFNBQVMsR0FBR0ksZUFBZSxDQUFDSixTQUFTLEdBQUcsRUFBRTtVQUM3RSxJQUFNVSxRQUFRLEdBQUdQLE1BQU0sQ0FBQ0gsU0FBUztVQUNqQyxJQUFNVyxRQUFRLHNCQUFBQyxNQUFBLENBQXFCTCxRQUFRLHlFQUFBSyxNQUFBLENBQ2hDSCxTQUFTLDBCQUFBRyxNQUFBLENBQ2hCRixRQUFRLG1CQUNQO1VBQ0xQLE1BQU0sQ0FBQ0gsU0FBUyxHQUFHVyxRQUFRO1FBQzdCLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQXpFLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEyRCxrQkFBQSxFQUFvQjtRQUFBLElBQUFlLE1BQUE7UUFDbEIsSUFBSSxDQUFDbkIsT0FBTyxDQUFDcEIsT0FBTyxDQUFDLFVBQUFsQixPQUFPO1VBQUEsT0FBSUEsT0FBTyxDQUFDZixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFBQSxPQUFNd0UsTUFBSSxDQUFDQyxLQUFLLENBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO1FBQ2pILElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ3BCLE9BQU8sQ0FBQyxVQUFBbEIsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQ2YsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1lBQUEsT0FBTXdFLE1BQUksQ0FBQ0UsTUFBTSxDQUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7VUFBQSxFQUFDO1FBQUEsRUFBQztRQUNoSCxJQUFJLENBQUNzQyxPQUFPLENBQUNwQixPQUFPLENBQUMsVUFBQWxCLE9BQU87VUFBQSxPQUFJQSxPQUFPLENBQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSXNFLE1BQUksQ0FBQ0csUUFBUSxDQUFDekUsS0FBSyxDQUFDO1VBQUEsRUFBQztRQUFBLEVBQUM7TUFDbkc7SUFBQztNQUFBTCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBNEQsbUJBQUEsRUFBcUI7UUFBQSxJQUFBa0IsTUFBQTtRQUNuQixJQUFJLENBQUN0QixJQUFJLENBQUNyQixPQUFPLENBQUMsVUFBQTRDLElBQUk7VUFBQSxPQUFJQSxJQUFJLENBQUM3RSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQUUsS0FBSztZQUFBLE9BQUkwRSxNQUFJLENBQUNFLFNBQVMsQ0FBQzVFLEtBQUssQ0FBQ0UsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7VUFBQSxFQUFDO1FBQUEsRUFBQztRQUNwSCxJQUFJLENBQUNrRCxJQUFJLENBQUNyQixPQUFPLENBQUMsVUFBQWxCLE9BQU87VUFBQSxPQUFJQSxPQUFPLENBQUNmLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSTBFLE1BQUksQ0FBQ0UsU0FBUyxDQUFDNUUsS0FBSyxDQUFDRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO1FBQ3pILElBQUksQ0FBQ2tELElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFBNEMsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQzdFLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSTBFLE1BQUksQ0FBQ0UsU0FBUyxDQUFDNUUsS0FBSyxDQUFDRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO1FBQ2pILElBQUksQ0FBQ2tELElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFBNEMsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQzdFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSTBFLE1BQUksQ0FBQ0UsU0FBUyxDQUFDNUUsS0FBSyxDQUFDRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO01BQ3JIO0lBQUM7TUFBQVAsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlGLFVBQVVDLEdBQUcsRUFBRTtRQUNiQSxHQUFHLENBQUNDLGFBQWEsQ0FBQ3JCLFdBQVcsQ0FBQ29CLEdBQUcsQ0FBQztNQUNwQztJQUFDO01BQUFuRixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMkUsTUFBTXJFLE1BQU0sRUFBRThFLEtBQUssRUFBRS9CLEdBQUcsRUFBRTtRQUN4QixJQUFJLENBQUM0QixTQUFTLENBQUMzRSxNQUFNLENBQUM7UUFDdEJBLE1BQU0sQ0FBQ0csU0FBUyxDQUFDTSxHQUFHLENBQUNxRSxLQUFLLENBQUM7UUFDM0IsSUFBRy9CLEdBQUcsRUFBRTtVQUNOLElBQU1nQyxRQUFRLEdBQUcsSUFBSSxDQUFDbkIsY0FBYyxDQUFDNUQsTUFBTSxDQUFDNkQsRUFBRSxDQUFDO1VBQy9DLElBQUdrQixRQUFRLEVBQUVBLFFBQVEsQ0FBQzVFLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM5QztNQUNGO0lBQUM7TUFBQWhCLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE0RSxPQUFPdEUsTUFBTSxFQUFFOEUsS0FBSyxFQUFFL0IsR0FBRyxFQUFFO1FBQ3pCL0MsTUFBTSxDQUFDRyxTQUFTLENBQUNPLE1BQU0sQ0FBQ29FLEtBQUssQ0FBQztRQUM5QixJQUFHL0IsR0FBRyxFQUFFO1VBQ04sSUFBTWdDLFFBQVEsR0FBRyxJQUFJLENBQUNuQixjQUFjLENBQUM1RCxNQUFNLENBQUM2RCxFQUFFLENBQUM7VUFDL0MsSUFBR2tCLFFBQVEsRUFBRUEsUUFBUSxDQUFDNUUsU0FBUyxDQUFDTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pEO01BQ0Y7SUFBQztNQUFBakIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTZFLFNBQVN6RSxLQUFLLEVBQUU7UUFDZEEsS0FBSyxDQUFDb0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBTThDLGtCQUFrQixHQUFHLElBQUksQ0FBQ3BCLGNBQWMsQ0FBQzlELEtBQUssQ0FBQ0UsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDcEIsRUFBRSxDQUFDO1FBQzVFLElBQUdtQixrQkFBa0IsRUFBRUEsa0JBQWtCLENBQUNFLEtBQUssQ0FBQyxDQUFDO01BQ25EO0lBQUM7TUFBQXpGLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFrRSxlQUFldUIsTUFBTSxFQUFFO1FBQ3JCLElBQU14QixlQUFlLEdBQUcsSUFBSSxDQUFDVCxJQUFJLENBQUNrQyxJQUFJLENBQUMsVUFBQVgsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQ1osRUFBRSxLQUFLc0IsTUFBTTtRQUFBLEVBQUM7UUFDbEUsT0FBUXhCLGVBQWU7TUFDekI7SUFBQztNQUFBbEUsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWdGLFVBQVUxRSxNQUFNLEVBQUVxRixTQUFTLEVBQUVDLElBQUksRUFBRTtRQUNqQyxJQUFNSCxNQUFNLEdBQUduRixNQUFNLENBQUM2RCxFQUFFO1FBQ3hCLElBQU1GLGVBQWUsR0FBRyxJQUFJLENBQUM0QixlQUFlLENBQUNKLE1BQU0sQ0FBQztRQUNwRCxJQUFHRSxTQUFTLEtBQUssSUFBSSxFQUFFO1VBQ3JCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ1YsZUFBZSxFQUFFMkIsSUFBSSxDQUFDO1FBQ25DLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ1gsZUFBZSxFQUFFMkIsSUFBSSxDQUFDO1FBQ3BDO01BQ0Y7SUFBQztNQUFBN0YsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTZGLGdCQUFnQkosTUFBTSxFQUFFO1FBQ3RCLElBQU14QixlQUFlLEdBQUcsSUFBSSxDQUFDVixPQUFPLENBQUNtQyxJQUFJLENBQUMsVUFBQVgsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQ1osRUFBRSxLQUFLc0IsTUFBTTtRQUFBLEVBQUM7UUFDckUsT0FBUXhCLGVBQWU7TUFDekI7SUFBQztJQUFBLE9BQUFiLE1BQUE7RUFBQTtFQUdIbkIsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFVCxPQUFPLENBQUMsVUFBQWtCLEdBQUcsRUFBSTtJQUMxRDtJQUNBLElBQU02QixHQUFHLEdBQUc3QixHQUFHLENBQUM3RCxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3ZDMEYsR0FBRyxDQUFDaEYsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVU7TUFDckMsSUFBTW9ELEdBQUcsR0FBRzRCLEdBQUcsQ0FBQ1ksY0FBYyxDQUFDLENBQUMsQ0FBQ3RHLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDckQsSUFBRzhELEdBQUcsRUFBQztRQUNMLElBQUlGLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUM7TUFDdEI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIRCxpRUFBZSxZQUFNO0VBQ25CO0FBQ0Y7QUFDQTtBQUNBO0VBSEUsSUFJTXlDLFVBQVU7SUFDZCxTQUFBQSxXQUFZQyxVQUFVLEVBQUU7TUFBQTFHLGVBQUEsT0FBQXlHLFVBQUE7TUFDdEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7TUFDNUIsSUFBSSxDQUFDQyxjQUFjLEdBQUdELFVBQVUsQ0FBQ3BELGdCQUFnQixDQUFDLFlBQVksQ0FBQztNQUMvRCxJQUFJLENBQUNzRCxNQUFNLEdBQUcsRUFBRTtNQUNoQixJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQ1gzRixNQUFNLENBQUM0RixpQkFBaUIsR0FBRyxJQUFJLENBQUNBLGlCQUFpQjtJQUNuRDtJQUFDdEcsWUFBQSxDQUFBaUcsVUFBQTtNQUFBaEcsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQW1HLEtBQUEsRUFBTztRQUNMLElBQUksQ0FBQ0UsU0FBUyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUNsQjtJQUFDO01BQUF2RyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBc0csVUFBQSxFQUFZO1FBQUEsSUFBQXJHLEtBQUE7UUFDVixJQUFJLENBQUNnRyxjQUFjLENBQUM5RCxPQUFPLENBQUMsVUFBQW9FLEtBQUssRUFBSTtVQUNuQ0EsS0FBSyxDQUFDckcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUFzRyxDQUFDO1lBQUEsT0FBSXZHLEtBQUksQ0FBQ3dHLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDbEcsTUFBTSxDQUFDO1VBQUEsRUFBQztRQUNsRSxDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF5RyxTQUFTbkcsTUFBTSxFQUFFO1FBQ2YsSUFBSW9HLFdBQVcsR0FBRy9HLFFBQVEsQ0FBQ2dILGNBQWMsQ0FBQyxTQUFTLEdBQUNyRyxNQUFNLENBQUNzRyxJQUFJLENBQUM7UUFDaEUsSUFBSUMsa0JBQWtCLEdBQUdsSCxRQUFRLENBQUNnSCxjQUFjLENBQUMsZ0JBQWdCLEdBQUNyRyxNQUFNLENBQUNzRyxJQUFJLENBQUM7UUFDOUUsSUFBSXRHLE1BQU0sQ0FBQ3NHLElBQUksSUFBSSxXQUFXLElBQUl0RyxNQUFNLENBQUNzRyxJQUFJLElBQUksVUFBVSxFQUFFO1VBQzNELElBQUksQ0FBQ0UsVUFBVSxDQUFDeEcsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUMxRCxDQUFDLE1BQ0ksSUFBSXZHLE1BQU0sQ0FBQ3NHLElBQUksSUFBSSxPQUFPLEVBQUU7VUFDL0IsSUFBSSxDQUFDRyxVQUFVLENBQUN6RyxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixDQUFDO1FBQzFELENBQUMsTUFDSSxJQUFJdkcsTUFBTSxDQUFDc0csSUFBSSxJQUFJLFNBQVMsRUFBRTtVQUNqQyxJQUFJLENBQUNJLFlBQVksQ0FBQzFHLE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDNUQ7UUFDQSxJQUFJLENBQUNJLGFBQWEsQ0FBQyxDQUFDO01BQ3RCO0lBQUM7TUFBQWxILEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFpSCxjQUFBLEVBQWdCO1FBQ2QsSUFBSUMsWUFBWSxHQUFHdkgsUUFBUSxDQUFDZ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQ1QsTUFBTSxDQUFDaUIsTUFBTSxHQUFHLENBQUMsRUFDMUI7VUFDRUQsWUFBWSxDQUFDOUIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE9BQU87UUFDdEMsQ0FBQyxNQUNJO1VBQ0hGLFlBQVksQ0FBQzlCLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQ3JDO01BQ0Y7SUFBQztNQUFBckgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQThHLFdBQVd4RyxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixFQUFFO1FBQ2xELElBQUksSUFBSSxDQUFDUSxPQUFPLENBQUMvRyxNQUFNLENBQUNOLEtBQUssQ0FBQyxFQUFFO1VBQzlCLElBQUksQ0FBQ3NILFNBQVMsQ0FBQ2hILE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDekQsQ0FBQyxNQUNJO1VBQ0gsSUFBSSxDQUFDVSxTQUFTLENBQUNqSCxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixDQUFDO1FBQ3pEO01BQ0Y7SUFBQztNQUFBOUcsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQStHLFdBQVd6RyxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixFQUFFO1FBQ2xELElBQUlXLEVBQUUsR0FBRywySkFBMko7UUFDcEssSUFBSSxDQUFDQSxFQUFFLENBQUNDLElBQUksQ0FBQ25ILE1BQU0sQ0FBQ04sS0FBSyxDQUFDLEVBQUU7VUFDMUIsSUFBSSxDQUFDc0gsU0FBUyxDQUFDaEgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUN6RCxDQUFDLE1BQ0k7VUFDSCxJQUFJLENBQUNVLFNBQVMsQ0FBQ2pILE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDekQ7TUFDRjtJQUFDO01BQUE5RyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBZ0gsYUFBYTFHLE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLEVBQUU7UUFDcEQsSUFBSSxDQUFDdkcsTUFBTSxDQUFDb0gsT0FBTyxFQUFFO1VBQ25CLElBQUksQ0FBQ0osU0FBUyxDQUFDaEgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUN6RCxDQUFDLE1BQ0k7VUFDSCxJQUFJLENBQUNVLFNBQVMsQ0FBQ2pILE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDekQ7TUFDRjtJQUFDO01BQUE5RyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBdUgsVUFBVWpILE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLEVBQUU7UUFDakR2RyxNQUFNLENBQUM2RSxhQUFhLENBQUMxRSxTQUFTLENBQUNPLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUNoRTBGLFdBQVcsQ0FBQ3RCLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQ2xDUCxrQkFBa0IsQ0FBQ3pCLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQ3pDLElBQUksQ0FBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lCLE1BQU0sQ0FBQyxVQUFBNUMsSUFBSTtVQUFBLE9BQUlBLElBQUksS0FBS3pFLE1BQU0sQ0FBQ3NHLElBQUk7UUFBQSxFQUFDO01BQ2hFO0lBQUM7TUFBQTdHLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFzSCxVQUFVaEgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsRUFBRTtRQUNqRHZHLE1BQU0sQ0FBQzZFLGFBQWEsQ0FBQzFFLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLHlCQUF5QixDQUFDO1FBQzdEMkYsV0FBVyxDQUFDdEIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE9BQU87UUFDbkNQLGtCQUFrQixDQUFDekIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE9BQU87UUFDMUMsSUFBSSxDQUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDeUIsTUFBTSxDQUFDLFVBQUE1QyxJQUFJO1VBQUEsT0FBSUEsSUFBSSxLQUFLekUsTUFBTSxDQUFDc0csSUFBSTtRQUFBLEVBQUM7UUFDOUQsSUFBSSxDQUFDVixNQUFNLENBQUMwQixJQUFJLENBQUN0SCxNQUFNLENBQUNzRyxJQUFJLENBQUM7TUFDL0I7SUFBQztNQUFBN0csR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXFILFFBQVFRLEdBQUcsRUFBRTtRQUNYLE9BQU8sQ0FBQ0EsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDWCxNQUFNO01BQzNCO0lBQUM7TUFBQXBILEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFxRyxVQUFBLEVBQVk7UUFDVixJQUFNSCxNQUFNLEdBQUcsSUFBSSxDQUFDRixVQUFVLENBQUNwRCxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztRQUN2RXNELE1BQU0sQ0FBQy9ELE9BQU8sQ0FBQyxVQUFBNEYsS0FBSyxFQUFJO1VBQ3RCQSxLQUFLLENBQUMzQyxLQUFLLENBQUNnQyxPQUFPLEdBQUcsTUFBTTtRQUM5QixDQUFDLENBQUM7UUFDRixJQUFNWSxZQUFZLEdBQUcsSUFBSSxDQUFDaEMsVUFBVSxDQUFDcEQsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7UUFDakZvRixZQUFZLENBQUM3RixPQUFPLENBQUMsVUFBQThGLFVBQVUsRUFBSTtVQUNqQ0EsVUFBVSxDQUFDeEgsU0FBUyxDQUFDTyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDeEQsQ0FBQyxDQUFDO1FBQ0YsSUFBTWtHLFlBQVksR0FBRyxJQUFJLENBQUNsQixVQUFVLENBQUNwRCxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RXNFLFlBQVksQ0FBQy9FLE9BQU8sQ0FBQyxVQUFBK0YsWUFBWSxFQUFJO1VBQ25DQSxZQUFZLENBQUM5QyxLQUFLLENBQUNnQyxPQUFPLEdBQUcsTUFBTTtRQUNyQyxDQUFDLENBQUM7UUFDRixJQUFNZSxpQkFBaUIsR0FBRyxJQUFJLENBQUNuQyxVQUFVLENBQUNwRCxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRnVGLGlCQUFpQixDQUFDaEcsT0FBTyxDQUFDLFVBQUFpRyxXQUFXLEVBQUk7VUFDdkNBLFdBQVcsQ0FBQ2hELEtBQUssQ0FBQ2dDLE9BQU8sR0FBSSxNQUFNO1FBQ3JDLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQXJILEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFvRyxrQkFBQSxFQUFvQjtRQUNsQnpHLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLDRDQUE0QyxDQUFDLENBQUM2SSxlQUFlLENBQUMsVUFBVSxDQUFDO01BQ2xHO0lBQUM7SUFBQSxPQUFBdEMsVUFBQTtFQUFBO0VBRUg5RCxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUM2RCxVQUFVO0lBQUEsT0FBSyxJQUFJRCxVQUFVLENBQUNDLFVBQVUsQ0FBQztFQUFBLEVBQUM7QUFDbkgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEQsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1zQyxJQUFJO0lBQ1IsU0FBQUEsS0FBWUMsWUFBWSxFQUFFQyxDQUFDLEVBQUU7TUFBQWxKLGVBQUEsT0FBQWdKLElBQUE7TUFDM0IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7TUFDaEMsSUFBSSxDQUFDcEMsSUFBSSxDQUFDLENBQUM7SUFDYjtJQUFDckcsWUFBQSxDQUFBd0ksSUFBQTtNQUFBdkksR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQW1HLEtBQUEsRUFBTztRQUFBLElBQUFsRyxLQUFBO1FBQ0wsSUFBTXdJLElBQUksR0FBRyxJQUFJLENBQUNGLFlBQVksQ0FBQzNGLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUMvRCxJQUFNOEYsT0FBTyxHQUFHLElBQUksQ0FBQ0gsWUFBWSxDQUFDL0ksYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQ25FaUosSUFBSSxDQUFDdEcsT0FBTyxDQUFDLFVBQUF3RyxHQUFHLEVBQUk7VUFDbEJBLEdBQUcsQ0FBQ3pJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBc0csQ0FBQztZQUFBLE9BQUl2RyxLQUFJLENBQUMySSxVQUFVLENBQUNwQyxDQUFDLENBQUM7VUFBQSxFQUFDO1FBQ3hELENBQUMsQ0FBQztRQUNGLElBQUlxQyxRQUFRLEdBQUcsQ0FBQztRQUNoQkgsT0FBTyxDQUFDeEksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUE0SSxDQUFDLEVBQUk7VUFDdkM7VUFDQSxJQUFJQSxDQUFDLENBQUN6SSxPQUFPLEtBQUssRUFBRSxJQUFJeUksQ0FBQyxDQUFDekksT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4Q29JLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUNqSSxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUlrSSxDQUFDLENBQUN6SSxPQUFPLEtBQUssRUFBRSxFQUFFO2NBQ3BCd0ksUUFBUSxFQUFFO2NBQ1Y7Y0FDQSxJQUFJQSxRQUFRLElBQUlKLElBQUksQ0FBQ3RCLE1BQU0sRUFBRTtnQkFDM0IwQixRQUFRLEdBQUcsQ0FBQztjQUNkO2NBQ0E7WUFDRixDQUFDLE1BQU0sSUFBSUMsQ0FBQyxDQUFDekksT0FBTyxLQUFLLEVBQUUsRUFBRTtjQUMzQndJLFFBQVEsRUFBRTtjQUNWO2NBQ0EsSUFBSUEsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDaEJBLFFBQVEsR0FBR0osSUFBSSxDQUFDdEIsTUFBTSxHQUFHLENBQUM7Y0FDNUI7WUFDRjtZQUNBc0IsSUFBSSxDQUFDSSxRQUFRLENBQUMsQ0FBQ2pJLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzFDNkgsSUFBSSxDQUFDSSxRQUFRLENBQUMsQ0FBQ2hJLEtBQUssQ0FBQyxDQUFDO1VBQ3hCO1FBQ0YsQ0FBQyxDQUFDO01BRUo7SUFBQztNQUFBZCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBNEksV0FBV0UsQ0FBQyxFQUFFO1FBQ1o7UUFDQSxJQUFNeEksTUFBTSxHQUFHd0ksQ0FBQyxDQUFDeEksTUFBTTtRQUN2QjtRQUNBLElBQU15SSxNQUFNLEdBQUd6SSxNQUFNLENBQUMwSSxVQUFVO1FBQ2hDO1FBQ0EsSUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNDLFVBQVU7UUFDckM7UUFDQSxJQUFNRSxRQUFRLEdBQUdILE1BQU0sQ0FBQzdHLHNCQUFzQixDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGO1FBQ0EsSUFBTWlILFNBQVMsR0FBR0YsV0FBVyxDQUFDeEksU0FBUyxDQUFDeUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1FBQ3RFOztRQUVBO1FBQ0E7UUFDQSxJQUFHNUMsTUFBTSxJQUFJNEksUUFBUSxJQUFJQyxTQUFTLEVBQUU7VUFDbEM7VUFDQSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0wsTUFBTSxDQUFDO1VBQzNCO1VBQ0EsSUFBSSxDQUFDTSxRQUFRLENBQUNKLFdBQVcsQ0FBQztRQUM1QixDQUFDLE1BQU07VUFDTDtVQUNBLElBQUksQ0FBQ0csY0FBYyxDQUFDTCxNQUFNLENBQUM7O1VBRTNCO1VBQ0EsSUFBSSxDQUFDTyxXQUFXLENBQUNoSixNQUFNLENBQUM7O1VBRXhCO1VBQ0EsSUFBSSxDQUFDK0ksUUFBUSxDQUFDSixXQUFXLENBQUM7O1VBRTFCO1VBQ0EsSUFBSSxDQUFDTSxZQUFZLENBQUNOLFdBQVcsQ0FBQ0QsVUFBVSxFQUFFMUksTUFBTSxDQUFDO1FBQ25EO01BR0Y7SUFBQztNQUFBUCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBb0osZUFBZUksR0FBRyxFQUFFO1FBQ2xCQSxHQUFHLENBQ0E1RyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUMxQ1QsT0FBTyxDQUFDLFVBQUFzSCxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDN0ksWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFBQSxFQUFDO1FBQ3ZENEksR0FBRyxDQUNBNUcsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUMsQ0FDcERULE9BQU8sQ0FBQyxVQUFBcUUsQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQy9GLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLGlDQUFpQyxDQUFDO1FBQUEsRUFBQztNQUN4RTtJQUFDO01BQUFqQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBc0osWUFBWUUsR0FBRyxFQUFFO1FBQ2ZBLEdBQUcsQ0FBQzVJLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO1FBQ3ZDNEksR0FBRyxDQUFDL0ksU0FBUyxDQUFDTSxHQUFHLENBQUMsaUNBQWlDLENBQUM7TUFDdEQ7SUFBQztNQUFBaEIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXFKLFNBQVNHLEdBQUcsRUFBRTtRQUNaQSxHQUFHLENBQ0E1RyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNyQ1QsT0FBTyxDQUFDLFVBQUF1SCxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDOUksWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFBQSxFQUFDO01BQ2pEO0lBQUM7TUFBQWIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXVKLGFBQWFDLEdBQUcsRUFBRWxKLE1BQU0sRUFBRTtRQUN4QjtRQUNBa0osR0FBRyxDQUNBaEssYUFBYSxLQUFBaUYsTUFBQSxDQUFLbkUsTUFBTSxDQUFDSyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUUsQ0FBQyxDQUN6RDBILGVBQWUsQ0FBQyxRQUFRLENBQUM7TUFDOUI7SUFBQztJQUFBLE9BQUFDLElBQUE7RUFBQTtFQUlIckcsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQ3NHLElBQUksRUFBRUQsQ0FBQztJQUFBLE9BQUssSUFBSUYsSUFBSSxDQUFDRyxJQUFJLEVBQUVELENBQUMsQ0FBQztFQUFBLEVBQUM7QUFDNUYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1tQixTQUFTO0lBRWIsU0FBQUEsVUFBWUMsU0FBUyxFQUFFO01BQUF0SyxlQUFBLE9BQUFxSyxTQUFBO01BQ3JCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO01BQzFCLElBQUksQ0FBQ3JILFVBQVUsR0FBRyxJQUFJLENBQUNxSCxTQUFTLENBQUNwSyxhQUFhLENBQUMsK0JBQStCLENBQUM7TUFDL0UsSUFBSSxDQUFDcUssU0FBUyxHQUFHLElBQUksQ0FBQ0QsU0FBUyxDQUFDaEgsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7TUFDbkUsSUFBSSxDQUFDa0gsU0FBUyxHQUFHLEtBQUs7TUFFdEIsSUFBSSxJQUFJLENBQUN2SCxVQUFVLEtBQUssSUFBSSxFQUFFO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxDQUFDd0gsU0FBUyxHQUFHLElBQUksQ0FBQ3hILFVBQVUsQ0FBQ3lILE9BQU8sQ0FBQ0MsU0FBUztRQUM3RCxJQUFJLENBQUNySyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQ3NLLG9CQUFvQixDQUFDLENBQUM7TUFDN0I7SUFDRjs7SUFFQTtBQUNKO0FBQ0E7SUFGSXBLLFlBQUEsQ0FBQTZKLFNBQUE7TUFBQTVKLEdBQUE7TUFBQUMsS0FBQSxFQUdBLFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQjtRQUNBLElBQUksQ0FBQ3NDLFVBQVUsQ0FBQ3JDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDRSxLQUFLLEVBQUs7VUFDbkRBLEtBQUssQ0FBQ29DLGNBQWMsQ0FBQyxDQUFDO1VBQ3RCdkMsS0FBSSxDQUFDa0ssZUFBZSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDOztRQUVGO1FBQ0EsSUFBSSxDQUFDNUgsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNFLEtBQUssRUFBSztVQUNyRCxJQUFJQSxLQUFLLENBQUNDLE9BQU8sS0FBSyxFQUFFLElBQUlELEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNoREQsS0FBSyxDQUFDb0MsY0FBYyxDQUFDLENBQUM7WUFDdEJ2QyxLQUFJLENBQUNrSyxlQUFlLENBQUMsQ0FBQztVQUN4QjtRQUNGLENBQUMsQ0FBQztNQUNKOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0lBSEk7TUFBQXBLLEdBQUE7TUFBQUMsS0FBQSxFQUlBLFNBQUFrSyxxQkFBQSxFQUF1QjtRQUFBLElBQUF4RixNQUFBO1FBQ3JCO1FBQ0EsSUFBTTBGLFFBQVEsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxVQUFDQyxhQUFhLEVBQUs7VUFDdkRBLGFBQWEsQ0FBQ25JLE9BQU8sQ0FBQyxVQUFDb0ksUUFBUSxFQUFLO1lBQ2xDLElBQUlBLFFBQVEsQ0FBQzNFLElBQUksS0FBSyxZQUFZLElBQUkyRSxRQUFRLENBQUNDLGFBQWEsS0FBSyxNQUFNLEVBQUU7Y0FDdkU5RixNQUFJLENBQUMrRixpQkFBaUIsQ0FBQyxDQUFDO1lBQzFCO1VBQ0YsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDWixTQUFTLENBQUMxSCxPQUFPLENBQUUsVUFBQ3VJLFFBQVEsRUFBSztVQUNwQ04sUUFBUSxDQUFDTyxPQUFPLENBQUNELFFBQVEsRUFBRTtZQUFDRSxVQUFVLEVBQUU7VUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO01BQ0o7O01BRUE7QUFDSjtBQUNBO0lBRkk7TUFBQTdLLEdBQUE7TUFBQUMsS0FBQSxFQUdBLFNBQUFtSyxnQkFBQSxFQUFrQjtRQUFBLElBQUFyRixNQUFBO1FBQ2hCO1FBQ0EsSUFBSSxDQUFDK0UsU0FBUyxDQUFDMUgsT0FBTyxDQUFFLFVBQUN1SSxRQUFRLEVBQUs7VUFDcEMsQ0FBQzVGLE1BQUksQ0FBQ2dGLFNBQVMsR0FBR2hGLE1BQUksQ0FBQytGLFlBQVksQ0FBQ0gsUUFBUSxDQUFDLEdBQUc1RixNQUFJLENBQUNnRyxhQUFhLENBQUNKLFFBQVEsQ0FBQztRQUM5RSxDQUFDLENBQUM7O1FBRUY7UUFDQSxJQUFJLENBQUNaLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ0EsU0FBUzs7UUFFaEM7UUFDQSxDQUFDLElBQUksQ0FBQ0EsU0FBUyxHQUFHLElBQUksQ0FBQ3ZILFVBQVUsQ0FBQ3dILFNBQVMsR0FBRyxJQUFJLENBQUN4SCxVQUFVLENBQUN5SCxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMxSCxVQUFVLENBQUN3SCxTQUFTLEdBQUcsSUFBSSxDQUFDeEgsVUFBVSxDQUFDeUgsT0FBTyxDQUFDZSxVQUFVO01BQ2xKOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTkk7TUFBQWhMLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUF5SyxrQkFBQSxFQUFvQjtRQUNsQixJQUFJTyxPQUFPLEdBQUcsS0FBSztRQUVuQixJQUFJLENBQUNuQixTQUFTLENBQUMxSCxPQUFPLENBQUUsVUFBQ3VJLFFBQVEsRUFBSztVQUNwQyxDQUFDQSxRQUFRLENBQUNPLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBR0QsT0FBTyxHQUFHLEtBQUssR0FBR0EsT0FBTyxHQUFHLElBQUk7UUFDbkUsQ0FBQyxDQUFDO1FBRUYsQ0FBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQ2xCLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSTtRQUN6RCxDQUFDLElBQUksQ0FBQ0EsU0FBUyxHQUFHLElBQUksQ0FBQ3ZILFVBQVUsQ0FBQ3dILFNBQVMsR0FBRyxJQUFJLENBQUN4SCxVQUFVLENBQUN5SCxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMxSCxVQUFVLENBQUN3SCxTQUFTLEdBQUcsSUFBSSxDQUFDeEgsVUFBVSxDQUFDeUgsT0FBTyxDQUFDZSxVQUFVO01BQ2xKOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0lBSEk7TUFBQWhMLEdBQUE7TUFBQUMsS0FBQSxFQUlBLFNBQUE2SyxhQUFhSCxRQUFRLEVBQUU7UUFDckIsSUFBTVEsT0FBTyxHQUFHUixRQUFRLENBQUNsTCxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDakUsSUFBTTJMLElBQUksR0FBR1QsUUFBUSxDQUFDbEwsYUFBYSxDQUFDLHNCQUFzQixDQUFDO1FBRTNEMEwsT0FBTyxDQUFDdEssWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDN0N1SyxJQUFJLENBQUN2SyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QzhKLFFBQVEsQ0FBQzlKLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO01BQ3ZDOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0lBSEk7TUFBQWIsR0FBQTtNQUFBQyxLQUFBLEVBSUEsU0FBQThLLGNBQWNKLFFBQVEsRUFBRTtRQUN0QixJQUFNUSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ2xMLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNqRSxJQUFNMkwsSUFBSSxHQUFHVCxRQUFRLENBQUNsTCxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFFM0QwTCxPQUFPLENBQUN0SyxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztRQUM5Q3VLLElBQUksQ0FBQ3ZLLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO1FBQ3hDOEosUUFBUSxDQUFDckMsZUFBZSxDQUFDLE1BQU0sQ0FBQztNQUNsQztJQUFDO0lBQUEsT0FBQXNCLFNBQUE7RUFBQTtFQUdIMUgsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBeUgsU0FBUztJQUFBLE9BQUksSUFBSUQsU0FBUyxDQUFDQyxTQUFTLENBQUM7RUFBQSxFQUFDO0FBQzNHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0FBQ0E7RUFIRSxJQUlNd0IsV0FBVztJQUNmLFNBQUFBLFlBQVlDLFdBQVcsRUFBRTtNQUFBL0wsZUFBQSxPQUFBOEwsV0FBQTtNQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztNQUU5QixJQUFJLElBQUksQ0FBQ0EsV0FBVyxDQUFDSixZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDaEQ7TUFDRjtNQUVBLElBQUksQ0FBQ0ksV0FBVyxDQUFDQyxNQUFNLEdBQUcsSUFBSTtNQUM5QixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQ0gsV0FBVyxDQUFDckIsT0FBTyxDQUFDeUIsUUFBUSxDQUFDO01BRXBFLElBQUksSUFBSSxDQUFDRixhQUFhLENBQUNwRSxNQUFNLEVBQUU7UUFDN0IsSUFBSSxDQUFDdUUsZ0JBQWdCLENBQUMsQ0FBQztNQUN6QixDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNMLFdBQVcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7TUFDakM7SUFDRjtJQUFDeEwsWUFBQSxDQUFBc0wsV0FBQTtNQUFBckwsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXdMLGFBQWFDLFFBQVEsRUFBRTtRQUNyQixJQUFJRixhQUFhLEdBQUcsRUFBRTtRQUN0QixJQUFJRSxRQUFRLEVBQUU7VUFDWixJQUFNRSxnQkFBZ0IsR0FBR2hNLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1VBQ2pFbU0sZ0JBQWdCLENBQUMvSSxnQkFBZ0IsQ0FBQzZJLFFBQVEsQ0FBQyxDQUFDdEosT0FBTyxDQUFDLFVBQUN5SixPQUFPLEVBQUVwRCxDQUFDLEVBQUs7WUFDbEUsSUFBSSxDQUFDb0QsT0FBTyxDQUFDekgsRUFBRSxFQUFFO2NBQ2Z5SCxPQUFPLENBQUN6SCxFQUFFLEdBQUd5SCxPQUFPLENBQUM3QixTQUFTLENBQUM4QixPQUFPLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxHQUFDdEQsQ0FBQztZQUMxRztZQUNBK0MsYUFBYSxDQUFDM0QsSUFBSSxDQUFDZ0UsT0FBTyxDQUFDO1VBQzdCLENBQUMsQ0FBQztRQUNKO1FBQ0EsT0FBT0wsYUFBYTtNQUN0QjtJQUFDO01BQUF4TCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBK0wseUJBQXlCSCxPQUFPLEVBQUVJLFFBQVEsRUFBRTtRQUMxQyxPQUFPL0osa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDb0osUUFBUSxDQUFDLEVBQUVDLElBQUksQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FDckRBLEVBQUUsS0FBS04sT0FBTyxJQUFJTSxFQUFFLENBQUNoSixRQUFRLENBQUMwSSxPQUFPLENBQUM7UUFBQSxDQUN4QyxDQUFDO01BQ0g7SUFBQztNQUFBN0wsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTBMLGlCQUFBLEVBQW1CO1FBQUEsSUFBQXpMLEtBQUE7UUFDakIsSUFBSWtNLEVBQUUsR0FBR3hNLFFBQVEsQ0FBQ3lNLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDYixhQUFhLENBQUNwSixPQUFPLENBQUMsVUFBQWtLLFlBQVksRUFBSTtVQUN6QyxJQUFJLENBQUNBLFlBQVksQ0FBQ3JDLE9BQU8sQ0FBQ3NDLGlCQUFpQixJQUN0QyxDQUFDRCxZQUFZLENBQUM1TCxTQUFTLENBQUN5QyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFDM0QsQ0FBQ21KLFlBQVksQ0FBQzVMLFNBQVMsQ0FBQ3lDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUN2RCxDQUFDakQsS0FBSSxDQUFDOEwsd0JBQXdCLENBQUNNLFlBQVksRUFBRSw4QkFBOEIsQ0FBQyxFQUNqRjtZQUNFLElBQUlFLEVBQUUsR0FBRzVNLFFBQVEsQ0FBQ3lNLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSUksQ0FBQyxHQUFHN00sUUFBUSxDQUFDeU0sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUNuQ0ksQ0FBQyxDQUFDbkksSUFBSSxHQUFHLEdBQUcsR0FBQ2dJLFlBQVksQ0FBQ2xJLEVBQUU7WUFDNUIsSUFBTXNJLGNBQWMsR0FBR0osWUFBWSxDQUFDbkssc0JBQXNCLENBQUMseUJBQXlCLENBQUM7WUFDckYsT0FBT3VLLGNBQWMsQ0FBQ3RGLE1BQU0sR0FBRyxDQUFDLEVBQUVzRixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUN6TCxNQUFNLENBQUMsQ0FBQztZQUM1RHdMLENBQUMsQ0FBQ3pDLFNBQVMsR0FBR3NDLFlBQVksQ0FBQ3RDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDeUMsQ0FBQyxDQUFDM0ksU0FBUyxHQUFHMkksQ0FBQyxDQUFDM0ksU0FBUyxDQUFDZ0ksT0FBTyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMURVLEVBQUUsQ0FBQ3pJLFdBQVcsQ0FBQzBJLENBQUMsQ0FBQztZQUNqQkwsRUFBRSxDQUFDckksV0FBVyxDQUFDeUksRUFBRSxDQUFDO1VBQ3BCO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDbEIsV0FBVyxDQUFDdkgsV0FBVyxDQUFDcUksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQ2QsV0FBVyxDQUFDQyxNQUFNLEdBQUcsS0FBSztNQUNqQztJQUFDO0lBQUEsT0FBQUYsV0FBQTtFQUFBO0VBR0huSixrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFrSixXQUFXO0lBQUEsT0FBSSxJQUFJRCxXQUFXLENBQUNDLFdBQVcsQ0FBQztFQUFBLEVBQUM7QUFDakgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUQsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7RUFGRSxJQUdNcUIsYUFBYTtJQUVqQixTQUFBQSxjQUFZQyxhQUFhLEVBQUU7TUFBQXJOLGVBQUEsT0FBQW9OLGFBQUE7TUFDekIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7TUFFbEMsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxhQUFhO01BQ3RDLElBQUksQ0FBQ0MsZUFBZSxHQUFHLFdBQVc7TUFDbEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxXQUFXO01BQ3JDLElBQUksQ0FBQ0MsYUFBYSxHQUFHLGlCQUFpQjs7TUFFdEM7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDSixhQUFhLENBQUMxQixZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbkQ7TUFDRjs7TUFFQTtNQUNBLElBQUlRLFFBQVEsR0FBRzlMLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLElBQUksQ0FBQ2dLLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNDLGVBQWUsQ0FBQztNQUM3RixJQUFJcEIsUUFBUSxDQUFDdEUsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QjtNQUNGOztNQUVBO01BQ0E7TUFDQSxJQUFNNkYsS0FBSyxHQUFHLElBQUksQ0FBQ0MsY0FBYyxDQUFDeEIsUUFBUSxDQUFDO01BQzNDLElBQUksQ0FBQ3lCLGdCQUFnQixDQUFDRixLQUFLLENBQUM7O01BRTVCO01BQ0E7TUFDQXZCLFFBQVEsR0FBRyxFQUFFLENBQUMwQixLQUFLLENBQUNDLElBQUksQ0FBQzNCLFFBQVEsRUFBRSxDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDNEIsaUJBQWlCLENBQUM1QixRQUFRLENBQUM7TUFDaEMsSUFBTTZCLFdBQVcsR0FBRzNOLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLElBQUksQ0FBQ2dLLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNFLGtCQUFrQixDQUFDO01BQ3JHLElBQUlRLFdBQVcsQ0FBQ25HLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUIsSUFBSSxDQUFDa0csaUJBQWlCLENBQUNDLFdBQVcsQ0FBQztNQUNyQztJQUNGOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTkl4TixZQUFBLENBQUE0TSxhQUFBO01BQUEzTSxHQUFBO01BQUFDLEtBQUEsRUFPQSxTQUFBaU4sZUFBZXhCLFFBQVEsRUFBRTtRQUFBLElBQUF4TCxLQUFBO1FBQ3ZCLElBQUkrTSxLQUFLLEdBQUcsRUFBRTtRQUVkdkIsUUFBUSxDQUFDdEosT0FBTyxDQUFDLFVBQUN5SixPQUFPLEVBQUUyQixLQUFLLEVBQUs7VUFDbkMsSUFBTUMsU0FBUyxHQUFHdk4sS0FBSSxDQUFDOE0sYUFBYSxHQUFHLEdBQUcsR0FBR1EsS0FBSzs7VUFFbEQ7VUFDQTNCLE9BQU8sQ0FBQ2hMLFlBQVksQ0FBQyxJQUFJLEVBQUU0TSxTQUFTLENBQUM7VUFFckMsSUFBSUMsSUFBSSxHQUFHO1lBQ1RDLEtBQUssRUFBRXpOLEtBQUksQ0FBQzBOLGVBQWUsQ0FBQy9CLE9BQU8sQ0FBQztZQUNwQ2dDLE1BQU0sRUFBRUosU0FBUztZQUNqQmpKLFFBQVEsRUFBRTtVQUNaLENBQUM7VUFFRCxJQUFJc0osT0FBTyxHQUFHakMsT0FBTyxDQUFDa0Msa0JBQWtCO1VBQ3hDLElBQUlDLEtBQUssR0FBRyxDQUFDOztVQUViO1VBQ0E7VUFDQSxPQUFPRixPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDcE4sU0FBUyxDQUFDeUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZELElBQUkySyxPQUFPLENBQUN0TixPQUFPLEtBQUssSUFBSSxJQUFJc04sT0FBTyxDQUFDcE4sU0FBUyxDQUFDeUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2NBRXBFO2NBQ0EsSUFBTThLLFlBQVksR0FBR1IsU0FBUyxHQUFHLEdBQUcsR0FBR08sS0FBSztjQUM1Q0YsT0FBTyxDQUFDak4sWUFBWSxDQUFDLElBQUksRUFBRW9OLFlBQVksQ0FBQztjQUV4Q1AsSUFBSSxDQUFDbEosUUFBUSxDQUFDcUQsSUFBSSxDQUFDO2dCQUNqQjhGLEtBQUssRUFBRXpOLEtBQUksQ0FBQzBOLGVBQWUsQ0FBQ0UsT0FBTyxDQUFDO2dCQUNwQ0QsTUFBTSxFQUFFSTtjQUNWLENBQUMsQ0FBQztjQUVGRCxLQUFLLEVBQUU7WUFDVDtZQUNBRixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0Msa0JBQWtCO1VBQ3RDO1VBRUFkLEtBQUssQ0FBQ3BGLElBQUksQ0FBQzZGLElBQUksQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixPQUFPVCxLQUFLO01BQ2Q7O01BRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFOSTtNQUFBak4sR0FBQTtNQUFBQyxLQUFBLEVBT0EsU0FBQTJOLGdCQUFnQi9CLE9BQU8sRUFBRTtRQUN2QixJQUFJOEIsS0FBSztRQUVULElBQUk5QixPQUFPLENBQUNYLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1VBQzVDeUMsS0FBSyxHQUFHOUIsT0FBTyxDQUFDNUIsT0FBTyxDQUFDaUUsVUFBVTtRQUNwQyxDQUFDLE1BQU07VUFDTFAsS0FBSyxHQUFHOUIsT0FBTyxDQUFDN0IsU0FBUztRQUMzQjtRQUVBLE9BQU8yRCxLQUFLO01BQ2Q7O01BRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUpJO01BQUEzTixHQUFBO01BQUFDLEtBQUEsRUFLQSxTQUFBa04saUJBQWlCRixLQUFLLEVBQUU7UUFBQSxJQUFBdEksTUFBQTtRQUN0QixJQUFJbEIsSUFBSSxHQUFHN0QsUUFBUSxDQUFDeU0sYUFBYSxDQUFDLElBQUksQ0FBQztRQUV2Q1ksS0FBSyxDQUFDN0ssT0FBTyxDQUFDLFVBQUNzTCxJQUFJLEVBQUs7VUFDdEIsSUFBSVMsUUFBUSxHQUFHdk8sUUFBUSxDQUFDeU0sYUFBYSxDQUFDLElBQUksQ0FBQztVQUMzQyxJQUFJcUIsSUFBSSxDQUFDbEosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QitHLFFBQVEsQ0FBQ3pOLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGNBQWMsQ0FBQztVQUN4QztVQUVBLElBQUkxQixTQUFTLEdBQUdNLFFBQVEsQ0FBQ3lNLGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDN0MvTSxTQUFTLENBQUNvQixTQUFTLENBQUNNLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztVQUNuRCxJQUFJME0sSUFBSSxDQUFDbEosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QjlILFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUNwQyxDQUFDLE1BQU07WUFDTDFCLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUNuQztVQUVBLElBQUlvTixJQUFJLEdBQUd4TyxRQUFRLENBQUN5TSxhQUFhLENBQUMsTUFBTSxDQUFDO1VBQ3pDLElBQUlxQixJQUFJLENBQUNsSixRQUFRLENBQUM0QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCZ0gsSUFBSSxDQUFDdEssU0FBUyxHQUFHYSxNQUFJLENBQUMwSixhQUFhLENBQUMsQ0FBQztVQUN2QyxDQUFDLE1BQU07WUFDTEQsSUFBSSxDQUFDdEssU0FBUyxHQUFHYSxNQUFJLENBQUMySixZQUFZLENBQUMsQ0FBQztVQUN0QztVQUVBaFAsU0FBUyxDQUFDaVAsTUFBTSxDQUFDSCxJQUFJLENBQUM7VUFFdEIsSUFBSUksVUFBVSxHQUFHNU8sUUFBUSxDQUFDeU0sYUFBYSxDQUFDLEdBQUcsQ0FBQztVQUM1Q21DLFVBQVUsQ0FBQzNOLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHNk0sSUFBSSxDQUFDRyxNQUFNLENBQUM7VUFDbERXLFVBQVUsQ0FBQ3hFLFNBQVMsR0FBRzBELElBQUksQ0FBQ0MsS0FBSztVQUVqQ3JPLFNBQVMsQ0FBQ2lQLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDO1VBRTVCTCxRQUFRLENBQUNJLE1BQU0sQ0FBQ2pQLFNBQVMsQ0FBQztVQUUxQixJQUFJb08sSUFBSSxDQUFDbEosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJcUgsU0FBUyxHQUFHN08sUUFBUSxDQUFDeU0sYUFBYSxDQUFDLElBQUksQ0FBQztZQUM1Q3FCLElBQUksQ0FBQ2xKLFFBQVEsQ0FBQ3BDLE9BQU8sQ0FBQyxVQUFDNEMsSUFBSSxFQUFLO2NBQzlCLElBQUkwSixTQUFTLEdBQUc5TyxRQUFRLENBQUN5TSxhQUFhLENBQUMsSUFBSSxDQUFDO2NBRTVDLElBQUlzQyxTQUFTLEdBQUcvTyxRQUFRLENBQUN5TSxhQUFhLENBQUMsR0FBRyxDQUFDO2NBQzNDc0MsU0FBUyxDQUFDOU4sWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUdtRSxJQUFJLENBQUM2SSxNQUFNLENBQUM7Y0FDakRjLFNBQVMsQ0FBQzNFLFNBQVMsR0FBR2hGLElBQUksQ0FBQzJJLEtBQUs7Y0FFaENlLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDSSxTQUFTLENBQUM7Y0FDM0JGLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDRyxTQUFTLENBQUM7WUFDN0IsQ0FBQyxDQUFDO1lBRUZQLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDRSxTQUFTLENBQUM7VUFDNUI7VUFFQWhMLElBQUksQ0FBQzhLLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ3ZCLGFBQWEsQ0FBQzJCLE1BQU0sQ0FBQzlLLElBQUksQ0FBQztNQUNqQzs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkk7TUFBQXpELEdBQUE7TUFBQUMsS0FBQSxFQUtBLFNBQUEyTyxvQkFBQSxFQUFzQjtRQUNwQixJQUFJdFAsU0FBUyxHQUFHTSxRQUFRLENBQUN5TSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzdDL00sU0FBUyxDQUFDb0IsU0FBUyxDQUFDTSxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFFMUMsSUFBSTZNLE1BQU0sR0FBR2pPLFFBQVEsQ0FBQ3lNLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDeEN3QixNQUFNLENBQUNoTixZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztRQUMzQ2dOLE1BQU0sQ0FBQ2hOLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO1FBQzNDZ04sTUFBTSxDQUFDN0QsU0FBUyxHQUFHLGFBQWE7UUFFaEMxSyxTQUFTLENBQUNpUCxNQUFNLENBQUNWLE1BQU0sQ0FBQztRQUV4QixPQUFPdk8sU0FBUztNQUNsQjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU5JO01BQUFVLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUFxTixrQkFBa0I1QixRQUFRLEVBQUU7UUFBQSxJQUFBM0csTUFBQTtRQUMxQjJHLFFBQVEsQ0FBQ3RKLE9BQU8sQ0FBQyxVQUFDeUosT0FBTyxFQUFFMkIsS0FBSyxFQUFLO1VBQ25DO1VBQ0EsSUFBSSxDQUFDM0IsT0FBTyxDQUFDWCxZQUFZLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM5QyxJQUFNd0MsSUFBSSxHQUFHM0ksTUFBSSxDQUFDNkosbUJBQW1CLENBQUMsQ0FBQztZQUN2Qy9DLE9BQU8sQ0FBQzVDLFVBQVUsQ0FBQzRGLFlBQVksQ0FBQ25CLElBQUksRUFBRTdCLE9BQU8sQ0FBQztZQUM5Q0EsT0FBTyxDQUFDaEwsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztVQUM5QztRQUNGLENBQUMsQ0FBQztNQUNKOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFKSTtNQUFBYixHQUFBO01BQUFDLEtBQUEsRUFLQSxTQUFBb08sY0FBQSxFQUFnQjtRQUNkLE9BQU8sK0ZBQStGLEdBQzdGLDQyQkFBNDJCLEdBQzkyQixRQUFRO01BQ2pCOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFKSTtNQUFBck8sR0FBQTtNQUFBQyxLQUFBLEVBS0EsU0FBQXFPLGFBQUEsRUFBZTtRQUNiLE9BQU8sNkZBQTZGLEdBQzNGLGtEQUFrRCxHQUNwRCxRQUFRO01BQ2pCO0lBQUM7SUFBQSxPQUFBM0IsYUFBQTtFQUFBO0VBR0h6SyxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUF3SyxhQUFhO0lBQUEsT0FBSSxJQUFJRCxhQUFhLENBQUNDLGFBQWEsQ0FBQztFQUFBLEVBQUM7QUFDcEgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2T0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1rQyxNQUFNO0lBQ1YsU0FBQUEsT0FBWXhQLFNBQVMsRUFBRTtNQUFBQyxlQUFBLE9BQUF1UCxNQUFBO01BQ3JCLElBQUksQ0FBQ3hQLFNBQVMsR0FBR0EsU0FBUztNQUUxQixJQUFJLENBQUN5UCxVQUFVLEdBQUE3TSxrQkFBQSxDQUFPLElBQUksQ0FBQzVDLFNBQVMsQ0FBQzZDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLENBQUM7TUFDdkYsSUFBSSxDQUFDNk0sTUFBTSxHQUFBOU0sa0JBQUEsQ0FBTyxJQUFJLENBQUM1QyxTQUFTLENBQUM2QyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO01BQy9FLElBQUksQ0FBQzhNLE1BQU0sR0FBRyxJQUFJLENBQUMzUCxTQUFTLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztNQUNuRSxJQUFJLENBQUN5UCxXQUFXLEdBQUFoTixrQkFBQSxDQUFPLElBQUksQ0FBQzVDLFNBQVMsQ0FBQzZDLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDLENBQUM7TUFFM0YsSUFBSSxDQUFDZ04sS0FBSyxDQUFDLENBQUM7TUFDWixJQUFJLENBQUN0UCxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCO0lBQUNFLFlBQUEsQ0FBQStPLE1BQUE7TUFBQTlPLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQixJQUFJLENBQUM2TyxVQUFVLENBQUMzTSxPQUFPLENBQUMsVUFBQWdOLFFBQVEsRUFBSTtVQUNsQ0EsUUFBUSxDQUFDalAsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxHQUFHO1lBQUEsT0FBSTlDLEtBQUksQ0FBQ21QLGFBQWEsQ0FBQ3JNLEdBQUcsQ0FBQztVQUFBLEVBQUM7UUFDckUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDZ00sTUFBTSxDQUFDNU0sT0FBTyxDQUFDLFVBQUFrTixLQUFLLEVBQUk7VUFDM0IsSUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUM3UCxhQUFhLENBQUMseUJBQXlCLENBQUM7VUFDN0QsSUFBSThQLE1BQU0sRUFBRTtZQUNWQSxNQUFNLENBQUNwUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQTZDLEdBQUc7Y0FBQSxPQUFJOUMsS0FBSSxDQUFDc1AsV0FBVyxDQUFDeE0sR0FBRyxDQUFDO1lBQUEsRUFBQztVQUNoRTtRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ2tNLFdBQVcsQ0FBQzlNLE9BQU8sQ0FBQyxVQUFBekIsTUFBTSxFQUFJO1VBQ2pDQSxNQUFNLENBQUNSLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBNkMsR0FBRztZQUFBLE9BQUk5QyxLQUFJLENBQUN1UCxlQUFlLENBQUN6TSxHQUFHLENBQUM7VUFBQSxFQUFDO1FBQ3BFLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFrUCxNQUFBLEVBQVE7UUFBQSxJQUFBeEssTUFBQTtRQUNOLElBQUksQ0FBQ3JGLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGtCQUFrQixDQUFDOztRQUVoRDtRQUNBOztRQUVBLElBQUksQ0FBQ2tPLFdBQVcsQ0FBQzlNLE9BQU8sQ0FBQyxVQUFBekIsTUFBTSxFQUFJO1VBQ2pDZ0UsTUFBSSxDQUFDK0sseUJBQXlCLENBQUMvTyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDOztRQUVGO1FBQ0EsSUFBSSxJQUFJLENBQUNzTyxNQUFNLEVBQUU7VUFDZixJQUFJLENBQUNBLE1BQU0sQ0FBQzFELE1BQU0sR0FBRyxJQUFJO1FBQzNCO01BQ0Y7SUFBQztNQUFBdkwsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXVQLFlBQVl4TSxHQUFHLEVBQUU7UUFDZkEsR0FBRyxDQUFDUCxjQUFjLENBQUMsQ0FBQztRQUNwQk8sR0FBRyxDQUFDekMsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM5RSxTQUFTLENBQUNDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztNQUM1RjtJQUFDO01BQUFYLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEwUCxlQUFlQyxTQUFTLEVBQUU7UUFDeEI7UUFDQTtRQUNBLElBQUlDLFdBQVcsR0FBRyxJQUFJLENBQUN2USxTQUFTLENBQUNHLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQztRQUNsRixJQUFJb1EsV0FBVyxLQUFLLElBQUksRUFBRTtVQUN4QkEsV0FBVyxDQUFDNVAsS0FBSyxHQUFHMlAsU0FBUztRQUMvQjtNQUNGO0lBQUM7TUFBQTVQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFvUCxjQUFjck0sR0FBRyxFQUFFO1FBQ2pCO1FBQ0E7UUFDQSxJQUFJLENBQUMyTSxjQUFjLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQ3JRLFNBQVMsQ0FBQzJQLE1BQU0sQ0FBQyxDQUFDO01BQ3pCO0lBQUM7TUFBQWpQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF3UCxnQkFBZ0J6TSxHQUFHLEVBQUU7UUFDbkJBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7UUFFcEIsSUFBTUQsVUFBVSxHQUFHUSxHQUFHLENBQUN6QyxNQUFNO1FBQzdCLElBQU13TyxVQUFVLEdBQUE3TSxrQkFBQSxDQUFPTSxVQUFVLENBQUM0QyxhQUFhLENBQUN2QyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTdGa00sVUFBVSxDQUFDM00sT0FBTyxDQUFDLFVBQUEwTixFQUFFLEVBQUk7VUFDdkJBLEVBQUUsQ0FBQ3hILGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDK0csYUFBYSxDQUFDck0sR0FBRyxDQUFDO01BQ3pCO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF5UCwwQkFBMEJsTixVQUFVLEVBQUU7UUFDcEMsSUFBTXVNLFVBQVUsR0FBQTdNLGtCQUFBLENBQU9NLFVBQVUsQ0FBQzRDLGFBQWEsQ0FBQ3ZDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDN0YsS0FBSyxJQUFJNEYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHc0csVUFBVSxDQUFDM0gsTUFBTSxFQUFFcUIsQ0FBQyxFQUFFLEVBQUc7VUFDM0MsSUFBSXNHLFVBQVUsQ0FBQ3RHLENBQUMsQ0FBQyxDQUFDeUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pDMUksVUFBVSxDQUFDOUIsU0FBUyxDQUFDTSxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ25DO1VBQ0Y7UUFDRjtNQUNGO0lBQUM7SUFBQSxPQUFBOE4sTUFBQTtFQUFBO0VBR0g1TSxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBd0YsTUFBTTtJQUFBLE9BQUksSUFBSWtILE1BQU0sQ0FBQ2xILE1BQU0sQ0FBQztFQUFBLEVBQUM7QUFDNUYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1tSSxTQUFTO0lBQ2IsU0FBQUEsVUFBWUMsR0FBRyxFQUFFO01BQUF6USxlQUFBLE9BQUF3USxTQUFBO01BQ2YsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7TUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0QsR0FBRyxDQUFDdlEsYUFBYSxDQUFDLHlCQUF5QixDQUFDO01BRXhELElBQUksQ0FBQzBQLEtBQUssQ0FBQyxDQUFDO01BQ1osSUFBSSxDQUFDdFAsaUJBQWlCLENBQUMsQ0FBQztJQUMxQjtJQUFDRSxZQUFBLENBQUFnUSxTQUFBO01BQUEvUCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBSixrQkFBQSxFQUFvQjtRQUFBLElBQUFLLEtBQUE7UUFDbEIsSUFBSSxDQUFDOFAsR0FBRyxDQUFDN1AsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUM2QyxHQUFHO1VBQUEsT0FBSzlDLEtBQUksQ0FBQ2dRLFlBQVksQ0FBQ2xOLEdBQUcsQ0FBQztRQUFBLEVBQUM7TUFDckU7SUFBQztNQUFBaEQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlRLGFBQWFsTixHQUFHLEVBQUU7UUFDaEJBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7UUFFcEI3QyxRQUFRLENBQUNpRCxnQkFBZ0IsaUJBQUE2QixNQUFBLENBQWlCLElBQUksQ0FBQ3NMLEdBQUcsQ0FBQy9GLE9BQU8sQ0FBQ3JDLE1BQU0sT0FBSSxDQUFDLENBQUN4RixPQUFPLENBQUMsVUFBQWdOLFFBQVEsRUFBSTtVQUN6RkEsUUFBUSxDQUFDekgsT0FBTyxHQUFHLEtBQUs7VUFDeEJ5SCxRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDSixHQUFHLENBQUMvTyxNQUFNLENBQUMsQ0FBQztNQUNuQjtJQUFDO01BQUFqQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBa1AsTUFBQSxFQUFRO1FBQ04sSUFBSSxDQUFDYSxHQUFHLENBQUN0UCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQ2lQLElBQUksRUFBRTtVQUNiLElBQUksQ0FBQ0EsSUFBSSxDQUFDMUUsTUFBTSxHQUFHLEtBQUs7UUFDMUI7TUFDRjtJQUFDO0lBQUEsT0FBQXdFLFNBQUE7RUFBQTtFQUdIN04sa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBNE4sR0FBRztJQUFBLE9BQUksSUFBSUQsU0FBUyxDQUFDQyxHQUFHLENBQUM7RUFBQSxFQUFDO0FBQzdGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVBFLElBUU1LLE9BQU87SUFDWCxTQUFBQSxRQUFZL1EsU0FBUyxFQUFFO01BQUEsSUFBQVksS0FBQTtNQUFBWCxlQUFBLE9BQUE4USxPQUFBO01BRXJCLElBQUksQ0FBQy9RLFNBQVMsR0FBR0EsU0FBUztNQUUxQjRDLGtCQUFBLENBQUk1QyxTQUFTLENBQUN1RCxnQkFBZ0IsQ0FBQyxrREFBa0QsQ0FBQyxFQUFFVCxPQUFPLENBQUMsVUFBQWtPLFdBQVcsRUFBSTtRQUN6R3BRLEtBQUksQ0FBQ0wsaUJBQWlCLENBQUN5USxXQUFXLENBQUM7UUFDbkNwUSxLQUFJLENBQUNxUSx3QkFBd0IsQ0FBQ0QsV0FBVyxDQUFDO01BQzVDLENBQUMsQ0FBQzs7TUFFRjtNQUNBRSxPQUFPLENBQUNDLGlCQUFpQixHQUFHLFFBQVE7TUFFcEMsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN4QjtJQUFDM1EsWUFBQSxDQUFBc1EsT0FBQTtNQUFBclEsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQUosa0JBQWtCeVEsV0FBVyxFQUFFO1FBQUEsSUFBQTNMLE1BQUE7UUFDN0IsSUFBSTJMLFdBQVcsRUFBRTtVQUNmcE8sa0JBQUEsQ0FBSW9PLFdBQVcsQ0FBQ0ssb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUV2TyxPQUFPLENBQUMsVUFBQXdPLE1BQU0sRUFBSTtZQUNoRUEsTUFBTSxDQUFDelEsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxHQUFHO2NBQUEsT0FBSTJCLE1BQUksQ0FBQzBLLGFBQWEsQ0FBQ2lCLFdBQVcsQ0FBQztZQUFBLEVBQUM7VUFDM0UsQ0FBQyxDQUFDO1FBQ0o7TUFDRjtJQUFDO01BQUF0USxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBc1EseUJBQXlCRCxXQUFXLEVBQUU7UUFDcEMsSUFBSUEsV0FBVyxFQUFFO1VBQ2ZwTyxrQkFBQSxDQUFJb08sV0FBVyxDQUFDek4sZ0JBQWdCLENBQUMsNERBQTRELENBQUMsRUFBRVQsT0FBTyxDQUFDLFVBQUE2TSxNQUFNLEVBQUk7WUFDaEgsSUFBSUEsTUFBTSxFQUFFO2NBQ1ZBLE1BQU0sQ0FBQzFELE1BQU0sR0FBRyxJQUFJO1lBQ3RCO1VBQ0YsQ0FBQyxDQUFDO1FBQ0o7TUFDRjtJQUFDO01BQUF2TCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMFAsZUFBZUMsU0FBUyxFQUFFO1FBQ3hCLElBQUlDLFdBQVcsR0FBRyxJQUFJLENBQUN2USxTQUFTLENBQUNHLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQztRQUNuRixJQUFJb1EsV0FBVyxLQUFLLElBQUksRUFBRTtVQUN4QkEsV0FBVyxDQUFDNVAsS0FBSyxHQUFHMlAsU0FBUztRQUMvQjtNQUNGO0lBQUM7TUFBQTVQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFvUCxjQUFjaUIsV0FBVyxFQUFFO1FBQ3pCO1FBQ0E7UUFDQSxJQUFJLENBQUNYLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFekJXLFdBQVcsQ0FBQ3JCLE1BQU0sQ0FBQyxDQUFDO01BQ3RCO0lBQUM7TUFBQWpQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF5USxnQkFBQSxFQUFrQjtRQUNoQixJQUFNRyxHQUFHLEdBQUcsSUFBSUMsR0FBRyxDQUFDclEsTUFBTSxDQUFDc1EsUUFBUSxDQUFDO1FBRXBDLElBQUlGLEdBQUcsQ0FBQ0csWUFBWSxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtVQUMzQyxJQUFNQyxnQkFBZ0IsR0FBR3RSLFFBQVEsQ0FBQ2dILGNBQWMsQ0FBQyxTQUFTLENBQUM7VUFFM0QsSUFBSXNLLGdCQUFnQixLQUFLLElBQUksRUFBRTtZQUM3QkEsZ0JBQWdCLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ25DO1FBQ0Y7TUFDRjtJQUFDO0lBQUEsT0FBQWQsT0FBQTtFQUFBO0VBR0huTyxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsOEJBQThCLENBQUMsRUFBRVQsT0FBTyxDQUFDLFVBQUFnUCxPQUFPO0lBQUEsT0FBSSxJQUFJZixPQUFPLENBQUNlLE9BQU8sQ0FBQztFQUFBLEVBQUM7QUFDekcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQsaUVBQWUsWUFBTTtFQUFBLElBQ2JDLE9BQU87SUFDWCxTQUFBQSxRQUFBLEVBQWM7TUFBQTlSLGVBQUEsT0FBQThSLE9BQUE7TUFDWjtNQUNBLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7TUFDcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUczUixRQUFRLENBQUNILGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztNQUM1RCxJQUFJLENBQUMrUixXQUFXLEdBQUc1UixRQUFRLENBQUNnSCxjQUFjLENBQUMsYUFBYSxDQUFDO01BQ3pELElBQUksQ0FBQzZLLGFBQWEsR0FBRzdSLFFBQVEsQ0FBQ2dILGNBQWMsQ0FBQyxlQUFlLENBQUM7TUFDN0QsSUFBSSxDQUFDOEssSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7TUFFMUIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztNQUNuQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO01BQ2pCLElBQUksQ0FBQ2hTLGlCQUFpQixDQUFDLENBQUM7O01BRXhCO01BQ0EsSUFBSSxDQUFDaVMsTUFBTSxHQUFHbFMsUUFBUSxDQUFDSCxhQUFhLENBQUMsc0JBQXNCLENBQUM7TUFDNUQsSUFBSSxDQUFDc1MsRUFBRSxHQUFHblMsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7TUFDeEQsSUFBSSxDQUFDbVAsR0FBRyxHQUFHcFMsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7TUFFMUQsSUFBSSxDQUFDb1AsWUFBWSxDQUFDLENBQUM7SUFDckI7SUFBQ2xTLFlBQUEsQ0FBQXNSLE9BQUE7TUFBQXJSLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEyUixhQUFBLEVBQWM7UUFBQSxJQUFBMVIsS0FBQTtRQUNaLElBQU1nUyxPQUFPLEdBQUd0UyxRQUFRLENBQUN1UyxNQUFNLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUNGLE9BQU8sQ0FBQzlQLE9BQU8sQ0FBQyxVQUFBcUUsQ0FBQyxFQUFJO1VBQ25CLElBQU00TCxLQUFLLEdBQUc1TCxDQUFDLENBQUM0TCxLQUFLLENBQUMsSUFBSUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7VUFDL0QsSUFBR0QsS0FBSyxFQUFFO1lBQ1IsSUFBTUUsTUFBTSxHQUFHOUwsQ0FBQyxDQUFDMkwsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QmxTLEtBQUksQ0FBQ29SLFVBQVUsR0FBR2lCLE1BQU07VUFDMUI7UUFDRixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUF2UyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMFIsUUFBQSxFQUFTO1FBQ1AsSUFBTUQsSUFBSSxHQUFHalIsTUFBTSxDQUFDc1EsUUFBUSxDQUFDVyxJQUFJLENBQUNjLFFBQVEsQ0FBQyxDQUFDLENBQUNKLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBT1YsSUFBSTtNQUNiO0lBQUM7TUFBQTFSLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFKLGtCQUFBLEVBQW9CO1FBQ2xCLElBQUcsSUFBSSxDQUFDMlIsV0FBVyxFQUFFO1VBQ25CLElBQUksQ0FBQ0EsV0FBVyxDQUFDclIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ3NTLFVBQVUsQ0FBQztRQUNqRTtRQUNBLElBQUcsSUFBSSxDQUFDaEIsYUFBYSxFQUFFO1VBQ3JCLElBQUksQ0FBQ0EsYUFBYSxDQUFDdFIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ3VTLFlBQVksQ0FBQztRQUNyRTtNQUNGO0lBQUM7TUFBQTFTLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEwUyxXQUFBLEVBQWE7UUFDWCxJQUFHLElBQUksQ0FBQ3BCLE1BQU0sRUFBRTtVQUNkLElBQUksQ0FBQ0EsTUFBTSxDQUFDbE0sS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE9BQU87UUFDckM7TUFDRjtJQUFDO01BQUFySCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMlMsV0FBQSxFQUFhO1FBQ1gsSUFBRyxJQUFJLENBQUNyQixNQUFNLEVBQUU7VUFDZCxJQUFJLENBQUNBLE1BQU0sQ0FBQ2xNLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQ3BDO01BQ0Y7SUFBQztNQUFBckgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTRSLFdBQUEsRUFBYTtRQUFBLElBQUFsTixNQUFBO1FBQ1QsSUFBSSxJQUFJLENBQUMyTSxVQUFVLEtBQUssRUFBRSxFQUFFO1VBQzFCLElBQUksQ0FBQ3FCLFVBQVUsQ0FBQyxDQUFDO1VBQ2pCLElBQU1FLGVBQWUsR0FBR2pULFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLDZDQUE2QyxDQUFDO1VBQzdGLElBQUlvVCxlQUFlLEVBQUU7WUFDbkJBLGVBQWUsQ0FBQzFTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBNkMsR0FBRyxFQUFJO2NBQy9DQSxHQUFHLENBQUNQLGNBQWMsQ0FBQyxDQUFDO2NBQ3BCa0MsTUFBSSxDQUFDaU8sVUFBVSxDQUFDLENBQUM7Y0FDakJqTyxNQUFJLENBQUNtTyxTQUFTLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7VUFDSjtVQUNBLElBQU1DLGdCQUFnQixHQUFHblQsUUFBUSxDQUFDSCxhQUFhLENBQUMsOENBQThDLENBQUM7VUFDL0YsSUFBSXNULGdCQUFnQixFQUFFO1lBQ3BCQSxnQkFBZ0IsQ0FBQzVTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBNkMsR0FBRyxFQUFJO2NBQ2hEQSxHQUFHLENBQUNQLGNBQWMsQ0FBQyxDQUFDO2NBQ3BCa0MsTUFBSSxDQUFDaU8sVUFBVSxDQUFDLENBQUM7Y0FDakJqTyxNQUFJLENBQUNxTyxRQUFRLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUM7VUFDSjtRQUNGO01BQ0o7SUFBQztNQUFBaFQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTZTLFVBQUEsRUFBWTtRQUNWbFQsUUFBUSxDQUFDdVMsTUFBTSxrQ0FBQXpOLE1BQUEsQ0FBa0MsSUFBSSxDQUFDZ04sSUFBSSxzQkFBbUI7UUFDN0VYLFFBQVEsQ0FBQ2tDLE1BQU0sQ0FBQyxDQUFDO01BQ25CO0lBQUM7TUFBQWpULEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUErUyxTQUFBLEVBQVc7UUFDVHBULFFBQVEsQ0FBQ3VTLE1BQU0sbUNBQUF6TixNQUFBLENBQW1DLElBQUksQ0FBQ2dOLElBQUksc0JBQW1CO1FBQzlFWCxRQUFRLENBQUNrQyxNQUFNLENBQUMsQ0FBQztNQUNuQjtJQUFDO01BQUFqVCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBZ1MsYUFBQSxFQUFlO1FBQUEsSUFBQWxOLE1BQUE7UUFDYixJQUFHLElBQUksQ0FBQytNLE1BQU0sRUFBQztVQUNibFMsUUFBUSxDQUFDSCxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUE2QyxHQUFHLEVBQUk7WUFDbEZBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7WUFDcEJzQyxNQUFJLENBQUM2TixVQUFVLENBQUMsQ0FBQztZQUNqQjdOLE1BQUksQ0FBQytOLFNBQVMsQ0FBQyxDQUFDO1lBQ2hCL0IsUUFBUSxDQUFDa0MsTUFBTSxDQUFDLENBQUM7VUFDbkIsQ0FBQyxDQUFDO1VBRUZyVCxRQUFRLENBQUNILGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQTZDLEdBQUcsRUFBSTtZQUNqRkEsR0FBRyxDQUFDUCxjQUFjLENBQUMsQ0FBQztZQUNwQnNDLE1BQUksQ0FBQzZOLFVBQVUsQ0FBQyxDQUFDO1lBQ2pCN04sTUFBSSxDQUFDaU8sUUFBUSxDQUFDLENBQUM7WUFDZmpDLFFBQVEsQ0FBQ2tDLE1BQU0sQ0FBQyxDQUFDO1VBQ25CLENBQUMsQ0FBQztVQUVGLElBQUksSUFBSSxDQUFDM0IsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUNBLFVBQVUsS0FBSyxFQUFFLEVBQUc7WUFDMUQsSUFBSSxDQUFDNEIsWUFBWSxDQUFDLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQztZQUMzQixJQUFJLENBQUNtQixXQUFXLENBQUMsSUFBSSxDQUFDcEIsRUFBRSxDQUFDO1VBQzNCLENBQUMsTUFBTTtZQUNMLElBQUksQ0FBQ29CLFdBQVcsQ0FBQyxJQUFJLENBQUNuQixHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDa0IsWUFBWSxDQUFDLElBQUksQ0FBQ25CLEVBQUUsQ0FBQztVQUM1QjtRQUNGO01BQ0Y7SUFBQztNQUFBL1IsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlULGFBQWFsTyxJQUFJLEVBQUU7UUFDakJBLElBQUksQ0FBQzVDLE9BQU8sQ0FBQyxVQUFBMkcsQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQzFELEtBQUssQ0FBQ2dDLE9BQU8sR0FBQyxjQUFjO1FBQUEsRUFBQztNQUNuRDtJQUFDO01BQUFySCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBa1QsWUFBWW5PLElBQUksRUFBRTtRQUNoQkEsSUFBSSxDQUFDNUMsT0FBTyxDQUFDLFVBQUEyRyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDMUQsS0FBSyxDQUFDZ0MsT0FBTyxHQUFDLE1BQU07UUFBQSxFQUFDO01BQzNDOztNQUVBO0lBQUE7TUFBQXJILEdBQUE7TUFBQUMsS0FBQSxFQUNBLFNBQUF3UyxXQUFBLEVBQWE7UUFDWCxJQUFNVyxNQUFNLEdBQUd4VCxRQUFRLENBQUNnSCxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ2pEd00sTUFBTSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxHQUFHelQsUUFBUSxDQUFDdVMsTUFBTTtNQUM3QztJQUFDO01BQUFuUyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBeVMsYUFBQSxFQUFlO1FBQ2I5UyxRQUFRLENBQUN1UyxNQUFNLEdBQUcsaUNBQWlDO1FBQ25EcEIsUUFBUSxDQUFDa0MsTUFBTSxDQUFDLENBQUM7TUFDbkI7SUFBQztJQUFBLE9BQUE1QixPQUFBO0VBQUE7RUFJSCxJQUFJQSxPQUFPLENBQUN6UixRQUFRLENBQUM7QUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBTTtFQUFBLElBQ2IwVCxNQUFNO0lBQ1YsU0FBQUEsT0FBWWhVLFNBQVMsRUFBRTtNQUFBQyxlQUFBLE9BQUErVCxNQUFBO01BQ3JCLElBQUksQ0FBQ2hVLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNrRCxVQUFVLEdBQUcsSUFBSSxDQUFDbEQsU0FBUyxDQUFDRyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQ25ELElBQUksQ0FBQzhULFVBQVUsR0FBRyxJQUFJLENBQUNqVSxTQUFTLENBQUMySixVQUFVO01BQzNDLElBQUksQ0FBQ3BKLGlCQUFpQixDQUFDLENBQUM7SUFDMUI7SUFBQ0UsWUFBQSxDQUFBdVQsTUFBQTtNQUFBdFQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDc0MsVUFBVSxFQUFFO1VBQ25CLElBQUksQ0FBQ0EsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztVQUFBLEVBQUM7VUFDMUUsSUFBSSxDQUFDRCxVQUFVLENBQUNyQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQUUsS0FBSztZQUFBLE9BQUlILEtBQUksQ0FBQ3NULFVBQVUsQ0FBQ25ULEtBQUssQ0FBQztVQUFBLEVBQUM7VUFDOUUsSUFBSSxDQUFDbUMsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFFLEtBQUssRUFBSTtZQUNqRCxJQUFJQSxLQUFLLENBQUNDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Y0FDeEJKLEtBQUksQ0FBQ3NULFVBQVUsQ0FBQ25ULEtBQUssQ0FBQztZQUN4QjtVQUNGLENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFBQztNQUFBTCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBd1QsWUFBQSxFQUFhO1FBQUEsSUFBQTlPLE1BQUE7UUFDWCxJQUFNK08sV0FBVyxHQUFHOVQsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7UUFDeEU2USxXQUFXLENBQUN0UixPQUFPLENBQUMsVUFBQXVSLElBQUksRUFBSTtVQUMxQixJQUFHQSxJQUFJLElBQUloUCxNQUFJLENBQUNyRixTQUFTLEVBQUM7WUFDeEJxVSxJQUFJLENBQUNqVCxTQUFTLENBQUNPLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbEMwUyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxlQUFlLENBQUM7VUFDdkMsQ0FBQyxNQUFNO1lBQ0xqUCxNQUFJLENBQUNrUCxXQUFXLENBQUNsUCxNQUFJLENBQUM0TyxVQUFVLEVBQUUsYUFBYSxDQUFDO1VBQ2xEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBR0csV0FBVyxDQUFDdE0sTUFBTSxLQUFLLENBQUMsRUFBQztVQUMxQixJQUFJLENBQUN5TSxXQUFXLENBQUMsSUFBSSxDQUFDTixVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ2xEO01BQ0Y7SUFBQztNQUFBdlQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXVULFdBQVduVCxLQUFLLEVBQUU7UUFDaEIsSUFBSSxDQUFDb1QsV0FBVyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDdlUsU0FBUyxFQUFFLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUNzVSxlQUFlLENBQUMsSUFBSSxDQUFDdFUsU0FBUyxFQUFFLGVBQWUsQ0FBQztNQUN2RDtJQUFDO01BQUFVLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE0VCxZQUFZM1MsT0FBTyxFQUFFNFMsU0FBUyxFQUFFO1FBQzlCLElBQUksQ0FBQzVTLE9BQU8sSUFBSSxDQUFDNFMsU0FBUyxFQUFFO1FBQzVCLElBQU1DLFFBQVEsR0FBRzdTLE9BQU8sQ0FBQ1IsU0FBUyxDQUFDeUMsUUFBUSxDQUFDMlEsU0FBUyxDQUFDO1FBQ3RELElBQUlDLFFBQVEsRUFBRTtVQUNaN1MsT0FBTyxDQUFDUixTQUFTLENBQUNPLE1BQU0sQ0FBQzZTLFNBQVMsQ0FBQztRQUNyQyxDQUFDLE1BQU07VUFDTDVTLE9BQU8sQ0FBQ1IsU0FBUyxDQUFDTSxHQUFHLENBQUM4UyxTQUFTLENBQUM7UUFDbEM7TUFDRjtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMlQsZ0JBQWdCMVMsT0FBTyxFQUFFOFMsSUFBSSxFQUFFO1FBQzdCO1FBQ0EsSUFBSSxDQUFDOVMsT0FBTyxJQUFJLENBQUM4UyxJQUFJLEVBQUU7UUFDdkI7UUFDQSxJQUFNL1QsS0FBSyxHQUFJaUIsT0FBTyxDQUFDTixZQUFZLENBQUNvVCxJQUFJLENBQUMsS0FBSyxNQUFNLEdBQUksT0FBTyxHQUFHLE1BQU07UUFDeEU5UyxPQUFPLENBQUNMLFlBQVksQ0FBQ21ULElBQUksRUFBRS9ULEtBQUssQ0FBQztNQUNuQztJQUFDO0lBQUEsT0FBQXFULE1BQUE7RUFBQTtFQUlIcFIsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQTZSLE1BQU07SUFBQSxPQUFJLElBQUlYLE1BQU0sQ0FBQ1csTUFBTSxDQUFDO0VBQUEsRUFBQzs7RUFFMUY7QUFDRjtBQUNBOztFQUVFLElBQU1DLFNBQVMsR0FBR3RVLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUV2RHlVLFNBQVMsSUFBSUEsU0FBUyxDQUFDL1QsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQVU7SUFDN0RQLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDLENBQUM7RUFDaEQsQ0FBQyxDQUFDO0VBRUZsQixRQUFRLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLLEVBQUk7SUFDMUMsSUFBSUEsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO01BQ3hCNlQsU0FBUyxDQUFDOVQsS0FBSyxDQUFDO0lBQ2xCO0VBQ0YsQ0FBQyxDQUFDO0VBRUZULFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsV0FBVyxFQUFFZ1UsU0FBUyxDQUFDO0VBRWpELFNBQVNBLFNBQVNBLENBQUM5VCxLQUFLLEVBQUU7SUFDeEI7SUFDQSxJQUFNK1QsUUFBUSxHQUFHeFUsUUFBUSxDQUFDSCxhQUFhLENBQUMsbUNBQW1DLENBQUM7SUFDNUUsSUFBRzJVLFFBQVEsRUFBQztNQUNWLElBQU1DLFNBQVMsR0FBR2hVLEtBQUssQ0FBQ0UsTUFBTSxLQUFLNlQsUUFBUTtNQUMzQyxJQUFNRSxlQUFlLEdBQUdqVSxLQUFLLENBQUNFLE1BQU0sS0FBS1gsUUFBUSxDQUFDSCxhQUFhLENBQUMsY0FBYyxDQUFDO01BQy9FLElBQU04VSxXQUFXLEdBQUdsVSxLQUFLLENBQUNFLE1BQU0sQ0FBQ2lGLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQztNQUM3RSxJQUFHNk8sU0FBUyxJQUFJQyxlQUFlLElBQUksQ0FBQ0MsV0FBVyxFQUFDO1FBQzlDSCxRQUFRLENBQUMxVCxTQUFTLENBQUNPLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDdEM7SUFDRjtJQUNBO0lBQ0EsSUFBTXVULE9BQU8sR0FBRzVVLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ2pFLElBQUcrVSxPQUFPLEVBQUM7TUFDVCxJQUFNQyxRQUFRLEdBQUdwVSxLQUFLLENBQUNFLE1BQU0sS0FBS2lVLE9BQU87TUFDekMsSUFBTUUsVUFBVSxHQUFHclUsS0FBSyxDQUFDRSxNQUFNLENBQUNpRixPQUFPLENBQUMseUJBQXlCLENBQUM7TUFDbEUsSUFBR2lQLFFBQVEsSUFBSSxDQUFDQyxVQUFVLEVBQUM7UUFDekJGLE9BQU8sQ0FBQzlULFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQ3JCLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLENBQUNpQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDMUY7SUFDRjtFQUNGO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHOEQ7QUFDWDtBQUVwRCxpRUFBZSxZQUFNO0VBRW5CO0FBQ0Y7QUFDQTtFQUZFLElBR00wVCxRQUFRO0lBRVosU0FBQUEsU0FBWUMsUUFBUSxFQUFFO01BQUFyVixlQUFBLE9BQUFvVixRQUFBO01BQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO01BQ3hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0QsUUFBUSxDQUFDL1IsZ0JBQWdCLENBQUMsNkNBQTZDLENBQUM7TUFFaEcsSUFBSSxDQUFDaEQsaUJBQWlCLENBQUMsQ0FBQztJQUMxQjs7SUFFQTtBQUNKO0FBQ0E7SUFGSUUsWUFBQSxDQUFBNFUsUUFBQTtNQUFBM1UsR0FBQTtNQUFBQyxLQUFBLEVBR0EsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCLElBQUksQ0FBQzJVLFdBQVcsQ0FBQ3pTLE9BQU8sQ0FBQyxVQUFDSSxVQUFVLEVBQUs7VUFDdkMsSUFBTXNTLFdBQVcsR0FBRzVVLEtBQUksQ0FBQzZVLHFCQUFxQixDQUFDdlMsVUFBVSxDQUFDOztVQUUxRDtVQUNBQSxVQUFVLENBQUNyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0UsS0FBSyxFQUFLO1lBQzlDQSxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUNxUyxXQUFXLENBQUNwVSxTQUFTLENBQUN5QyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Y0FDaERqRCxLQUFJLENBQUM4VSxXQUFXLENBQUMsQ0FBQztZQUNwQjtZQUVBOVUsS0FBSSxDQUFDK1UsV0FBVyxDQUFDNVUsS0FBSyxDQUFDRSxNQUFNLENBQUM7VUFDaEMsQ0FBQyxDQUFDOztVQUVGO1VBQ0FpQyxVQUFVLENBQUNyQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ0UsS0FBSyxFQUFLO1lBQ2hELElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsSUFBSUQsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO2NBQ2hERCxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztjQUV0QixJQUFJLENBQUNxUyxXQUFXLENBQUNwVSxTQUFTLENBQUN5QyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hEakQsS0FBSSxDQUFDOFUsV0FBVyxDQUFDLENBQUM7Y0FDcEI7Y0FFQTlVLEtBQUksQ0FBQytVLFdBQVcsQ0FBQzVVLEtBQUssQ0FBQ0UsTUFBTSxDQUFDO1lBQ2hDO1VBQ0YsQ0FBQyxDQUFDOztVQUVGO1VBQ0F1VSxXQUFXLENBQUNqUyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDVCxPQUFPLENBQUMsVUFBQzhTLFNBQVMsRUFBSztZQUNqRkEsU0FBUyxDQUFDL1UsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNFLEtBQUssRUFBSztjQUMvQyxJQUFJQSxLQUFLLENBQUNDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCSixLQUFJLENBQUMrVSxXQUFXLENBQUN6UyxVQUFVLENBQUM7Z0JBQzVCQSxVQUFVLENBQUMxQixLQUFLLENBQUMsQ0FBQztjQUNwQjtZQUNGLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQzs7VUFFRjtVQUNBZ1UsV0FBVyxDQUFDclYsYUFBYSxDQUFDLHlDQUF5QyxDQUFDLENBQUNVLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDRSxLQUFLLEVBQUs7WUFDMUcsSUFBR0EsS0FBSyxDQUFDOFUsUUFBUSxJQUFJOVUsS0FBSyxDQUFDQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2NBQ3hDRCxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztjQUN0QkQsVUFBVSxDQUFDMUIsS0FBSyxDQUFDLENBQUM7WUFDcEI7VUFDRixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtJQUhJO01BQUFkLEdBQUE7TUFBQUMsS0FBQSxFQUlBLFNBQUFnVixZQUFZRyxVQUFVLEVBQUU7UUFDdEJ4QiwrRUFBZSxDQUFDd0IsVUFBVSxFQUFFLGVBQWUsQ0FBQztRQUM1Q3ZCLDREQUFXLENBQUMsSUFBSSxDQUFDa0IscUJBQXFCLENBQUNLLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQztNQUNsRTs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtJQUhJO01BQUFwVixHQUFBO01BQUFDLEtBQUEsRUFJQSxTQUFBOFUsc0JBQXNCSyxVQUFVLEVBQUU7UUFDaEMsSUFBTUMsT0FBTyxHQUFHRCxVQUFVLENBQUN4VSxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3hELE9BQU9oQixRQUFRLENBQUNnSCxjQUFjLENBQUN5TyxPQUFPLENBQUM7TUFDekM7O01BRUE7QUFDSjtBQUNBO0lBRkk7TUFBQXJWLEdBQUE7TUFBQUMsS0FBQSxFQUdBLFNBQUErVSxZQUFBLEVBQWM7UUFDWixJQUFNTSxXQUFXLEdBQUcsSUFBSSxDQUFDVixRQUFRLENBQUNuVixhQUFhLENBQUMsaUNBQWlDLENBQUM7UUFDbEYsSUFBSTZWLFdBQVcsS0FBSyxJQUFJLEVBQUU7VUFDeEIsSUFBTTlTLFVBQVUsR0FBRyxJQUFJLENBQUNvUyxRQUFRLENBQUNuVixhQUFhLENBQUMsc0NBQXNDLEdBQUc2VixXQUFXLENBQUNsUixFQUFFLEdBQUcsSUFBSSxDQUFDO1VBQzlHNUIsVUFBVSxDQUFDM0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7VUFDakR5VSxXQUFXLENBQUM1VSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDM0M7TUFDRjtJQUFDO0lBQUEsT0FBQTBULFFBQUE7RUFBQTtFQUdIelMsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQXdTLFFBQVE7SUFBQSxPQUFJLElBQUlELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO0VBQUEsRUFBQztBQUNuRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJclUsT0FBTyxFQUFLO0VBQ3JDO0VBQ0EsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFO0VBQ3ZCLE9BQU9BLE9BQU8sQ0FBQzRTLFNBQVMsQ0FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3hLLE1BQU0sQ0FBQzROLE9BQU8sQ0FBQztBQUNyRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNekIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUk3UyxPQUFPLEVBQUU0UyxTQUFTLEVBQUs7RUFDOUM7RUFDQSxJQUFJLENBQUM1UyxPQUFPLElBQUksQ0FBQzRTLFNBQVMsRUFBRSxPQUFPLEtBQUs7RUFDeEMsT0FBT3lCLFVBQVUsQ0FBQ3JVLE9BQU8sQ0FBQyxDQUFDdVUsUUFBUSxDQUFDM0IsU0FBUyxDQUFDO0FBQ2hELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU00QixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSXhVLE9BQU8sRUFBRTRTLFNBQVMsRUFBSztFQUNqRDtFQUNBLElBQUksQ0FBQzVTLE9BQU8sSUFBSSxDQUFDNFMsU0FBUyxFQUFFO0VBQzVCLElBQUlDLFFBQVEsQ0FBQzdTLE9BQU8sRUFBRTRTLFNBQVMsQ0FBQyxFQUFFO0lBQ2hDO0lBQ0EsSUFBTTZCLGVBQWUsR0FBR0osVUFBVSxDQUFDclUsT0FBTyxFQUFFNFMsU0FBUyxDQUFDO0lBQ3REO0lBQ0EsSUFBTThCLFVBQVUsR0FBR0QsZUFBZSxDQUFDL04sTUFBTSxDQUFDLFVBQUNpTyxhQUFhO01BQUEsT0FBS0EsYUFBYSxLQUFLL0IsU0FBUztJQUFBLEVBQUMsQ0FBQ2dDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbkc7SUFDQTVVLE9BQU8sQ0FBQ0wsWUFBWSxDQUFDLE9BQU8sRUFBRStVLFVBQVUsQ0FBQztFQUMzQztBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJN1UsT0FBTyxFQUFFNFMsU0FBUyxFQUFLO0VBQzlDO0VBQ0EsSUFBSSxDQUFDNVMsT0FBTyxJQUFJLENBQUM0UyxTQUFTLEVBQUU7RUFDNUIsSUFBSSxDQUFDQyxRQUFRLENBQUM3UyxPQUFPLEVBQUU0UyxTQUFTLENBQUMsRUFBRTtJQUNqQztJQUNBNVMsT0FBTyxDQUFDTCxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUE2RCxNQUFBLENBQUd4RCxPQUFPLENBQUM0UyxTQUFTLE9BQUFwUCxNQUFBLENBQUlvUCxTQUFTLEVBQUcvTCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzNFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTThMLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJM1MsT0FBTyxFQUFFNFMsU0FBUyxFQUFLO0VBQ2pELElBQUksQ0FBQzVTLE9BQU8sSUFBSSxDQUFDNFMsU0FBUyxFQUFFO0VBQzVCLElBQUlDLFFBQVEsQ0FBQzdTLE9BQU8sRUFBRTRTLFNBQVMsQ0FBQyxFQUFFO0lBQ2hDNEIsV0FBVyxDQUFDeFUsT0FBTyxFQUFFNFMsU0FBUyxDQUFDO0VBQ2pDLENBQUMsTUFBTTtJQUNMaUMsUUFBUSxDQUFDN1UsT0FBTyxFQUFFNFMsU0FBUyxDQUFDO0VBQzlCO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNRixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUkxUyxPQUFPLEVBQUU4UyxJQUFJLEVBQUs7RUFDaEQ7RUFDQSxJQUFJLENBQUM5UyxPQUFPLElBQUksQ0FBQzhTLElBQUksRUFBRTtFQUN2QjtFQUNBLElBQU0vVCxLQUFLLEdBQUdpQixPQUFPLENBQUNOLFlBQVksQ0FBQ29ULElBQUksQ0FBQyxLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUN0RTlTLE9BQU8sQ0FBQ0wsWUFBWSxDQUFDbVQsSUFBSSxFQUFFL1QsS0FBSyxDQUFDO0FBQ25DLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU0rVixzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFJeFAsS0FBSyxFQUFFc04sU0FBUyxFQUFLO0VBQzFEO0VBQ0EsSUFBSSxDQUFDdE4sS0FBSyxJQUFJLENBQUNzTixTQUFTLEVBQUU7RUFDMUI7RUFDQSxJQUFNbUMsYUFBYSxHQUFHelAsS0FBSyxDQUFDNUYsWUFBWSxDQUFDLGVBQWUsQ0FBQztFQUN6RCxJQUFJcVYsYUFBYSxFQUFFO0lBQ2pCO0lBQ0EsSUFBTUMsa0JBQWtCLEdBQUd0VyxRQUFRLENBQUNnSCxjQUFjLENBQUNxUCxhQUFhLENBQUM7SUFDakUsSUFBSUMsa0JBQWtCLEVBQUU7TUFDdEIsSUFBSTFQLEtBQUssQ0FBQ21CLE9BQU8sRUFBRTtRQUNqQnVPLGtCQUFrQixDQUFDeFYsU0FBUyxDQUFDTyxNQUFNLENBQUM2UyxTQUFTLENBQUM7UUFDOUN0TixLQUFLLENBQUMzRixZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztNQUMzQyxDQUFDLE1BQU07UUFDTHFWLGtCQUFrQixDQUFDeFYsU0FBUyxDQUFDTSxHQUFHLENBQUM4UyxTQUFTLENBQUM7UUFDM0N0TixLQUFLLENBQUMzRixZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztNQUM1QztJQUNGO0VBQ0Y7QUFDRixDQUFDOzs7Ozs7VUNwQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDMkQ7QUFDUTs7QUFFbkU7QUFDMkU7QUFDbUI7QUFDekI7QUFDSTtBQUNmO0FBQ007QUFDSDtBQUNZO0FBQ0g7QUFDZjtBQUNxQjs7QUFFNUU7QUFDc0U7QUFDUzs7QUFFL0U7QUFDQWpCLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRG9JLCtFQUFJLENBQUMsQ0FBQztFQUNOOEMsMkZBQVcsQ0FBQyxDQUFDO0VBQ2JoTSx3R0FBaUIsQ0FBQyxDQUFDO0VBQ25CZ1MsK0VBQU8sQ0FBQyxDQUFDO0VBQ1R2Qyw0RkFBTSxDQUFDLENBQUM7RUFDUmlCLGtHQUFTLENBQUMsQ0FBQztFQUNYTSw2RkFBTyxDQUFDLENBQUM7RUFDVCtGLGdGQUFLLENBQUMsQ0FBQztFQUNQekIsbUZBQVEsQ0FBQyxDQUFDO0VBQ1Z0UixrRkFBTSxDQUFDLENBQUM7RUFDUjhTLHdGQUFNLENBQUMsQ0FBQztFQUNSN1Qsc0ZBQVcsQ0FBQyxDQUFDO0VBQ2IwRCwwRkFBVSxDQUFDLENBQUM7RUFDWjJHLG1GQUFhLENBQUMsQ0FBQztFQUNmL0MsK0ZBQVMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9jYXJkLS1zdW1tYXJ5L3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9tZWdhLW1lbnUvbWVnYS1tZW51LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9ub2RlX21vZHVsZXMvbmhzdWstZnJvbnRlbmQvcGFja2FnZXMvY29tbW9uLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIEFuY2hvciBsaW5rIHN0aWNreSB0b29sYmFyIGF0IGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICovXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmhlZS1hbmNob3JsaW5rc19fc3RpY2t5X19idG4nKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLnNpZGViYXJBbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19yaWdodGJhciAuaGVlLWFuY2hvcmxpbmtzJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3NTdGlja3kgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzU3RpY2t5KSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHN1bW1hcnlDYXJkKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnN1bW1hcnlDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtY2FyZC0tc3VtbWFyeV9fdG9nZ2xlJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZVN1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2RlZmF1bHQnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcuaGVlLW1lZGlhLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcbiAgICAgIC8vIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImZpbHRlclwiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlTGluaykge1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIExpc3RpbmdcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhbmQgJy5oZWUtbGlzdGluZ3MnIGFyZSBwYXNzZWRcbiAgICogaW50byB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAdG9kbyBSZW1vdmUgbGVnYWN5IHJlZmVyZW5jZXMgdG8gLm5oc3VrLWxpc3RpbmcgYW5kIGxvb3BzIG9uY2UgYWxsIG5ld1xuICAgKiBjb2xsZWN0aW9uIHRlbXBsYXRlcyBoYXZlIGJlZW4gaW1wbGVtZW50ZWQuXG4gICAqL1xuICBjbGFzcyBMaXN0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc2FibGVzIGJyb3dzZXIgcmVzdG9yaW5nIHZpZXdwb3J0IHRvIHBvc2l0aW9uIGJlZm9yZSBwYWdlIHJlbG9hZC5cbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblxuICAgICAgdGhpcy5zY3JvbGxUb1Jlc3VsdHMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc3VibWl0LCAubmhzdWstbGlzdGluZ19fc29ydF9fc3VibWl0JyldLmZvckVhY2goc3VibWl0ID0+IHtcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwibGlzdGluZ1wiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvUmVzdWx0cygpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcblxuICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZXN1bHRzX3VwZGF0ZWQnKSkge1xuICAgICAgICBjb25zdCBsaXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcblxuICAgICAgICBpZiAobGlzdGluZ0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGxpc3RpbmdDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7dG9nZ2xlQXR0cmlidXRlfSBmcm9tICduaHN1ay1mcm9udGVuZC9wYWNrYWdlcy9jb21tb24nO1xuaW1wb3J0IHt0b2dnbGVDbGFzc30gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1lZ2EgbWVudSBjb21wb25lbnQgaW50ZXJhY3Rpb25zLlxuICAgKi9cbiAgY2xhc3MgTWVnYU1lbnUge1xuXG4gICAgY29uc3RydWN0b3IobWVnYU1lbnUpIHtcbiAgICAgIHRoaXMubWVnYU1lbnUgPSBtZWdhTWVudTtcbiAgICAgIHRoaXMudG9nZ2xlTGlua3MgPSB0aGlzLm1lZ2FNZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbWVnYS1tZW51X19zdWJuYXYgLmhlZS1tZWdhLW1lbnVfX2xpbmsnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIGlubmVyIHBhbmVsIGxpbmtzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVMaW5rcy5mb3JFYWNoKCh0b2dnbGVMaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFBhbmVsID0gdGhpcy5nZXRUYXJnZXRQYW5lbEVsZW1lbnQodG9nZ2xlTGluayk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IG9uIHN1YiBtZW51IHBhbmVsIHRvZ2dsZSBsaW5rLlxuICAgICAgICB0b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmICghdGFyZ2V0UGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVscygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIYW5kbGVzIHN1YiBtZW51IHBhbmVsIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICAgIHRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCF0YXJnZXRQYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVzZXRQYW5lbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b2dnbGVQYW5lbChldmVudC50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBIYW5kbGVzIGVzY2FwZSBrZXkgcHJlc3Mgd2hlbiBhIHBhbmVsIGxpbmsgaXMgaW4gZm9jdXMuXG4gICAgICAgIHRhcmdldFBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbWVnYS1tZW51X19wYW5lbF9fbGluaycpLmZvckVhY2goKHBhbmVsTGluaykgPT4ge1xuICAgICAgICAgIHBhbmVsTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYW5lbCh0b2dnbGVMaW5rKTtcbiAgICAgICAgICAgICAgdG9nZ2xlTGluay5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gSGFuZGxlcyBzaGlmdCArIHRhYiBiZWhhdmlvdXIgZnJvbSBmaXJzdCBsaW5rIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAgICB0YXJnZXRQYW5lbC5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fcGFuZWxfX2xpbms6Zmlyc3QtY2hpbGQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYoZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUxpbmsuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgbWVnYSBtZW51IHBhbmVsIHZpc2liaWxpdHkuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0TGluayBNZW51IGxpbmsgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0b2dnbGVQYW5lbCh0YXJnZXRMaW5rKSB7XG4gICAgICB0b2dnbGVBdHRyaWJ1dGUodGFyZ2V0TGluaywgJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuZ2V0VGFyZ2V0UGFuZWxFbGVtZW50KHRhcmdldExpbmspLCAnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtZWdhIG1lbnUgcGFuZWwgZWxlbWVudCBmcm9tIHRhcmdldCBtZW51IGxpbmsuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0TGluayBNZW51IGxpbmsgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRUYXJnZXRQYW5lbEVsZW1lbnQodGFyZ2V0TGluaykge1xuICAgICAgY29uc3QgcGFuZWxJZCA9IHRhcmdldExpbmsuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFuZWxJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHN0YXRlIG9mIGFjdGl2ZSBwYW5lbC5cbiAgICAgKi9cbiAgICByZXNldFBhbmVscygpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVBhbmVsID0gdGhpcy5tZWdhTWVudS5xdWVyeVNlbGVjdG9yKCcuaGVlLW1lZ2EtbWVudV9fcGFuZWwuaXMtYWN0aXZlJyk7XG4gICAgICBpZiAoYWN0aXZlUGFuZWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9IHRoaXMubWVnYU1lbnUucXVlcnlTZWxlY3RvcignLmhlZS1tZWdhLW1lbnVfX2xpbmtbYXJpYS1jb250cm9scz1cIicgKyBhY3RpdmVQYW5lbC5pZCArICdcIl0nKTtcbiAgICAgICAgdG9nZ2xlTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgYWN0aXZlUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWdhLW1lbnUnKV0uZm9yRWFjaChtZWdhTWVudSA9PiBuZXcgTWVnYU1lbnUobWVnYU1lbnUpKTtcbn1cbiIsIi8qKlxuICogR2V0IGFuIGFycmF5IG9mIGFuIEhUTUwgZWxlbWVudHMgY2xhc3Nlc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge3N0cmluZ1tdfSBzdHJpbmcgYXJyYXkgb2YgY2xhc3MgbmFtZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENsYXNzZXMgPSAoZWxlbWVudCkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCkgcmV0dXJuIFtdO1xuICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbik7XG59O1xuXG4vKipcbiAqIERvZXMgYSBjbGFzcyBleGlzdCBvbiBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBlbGVtZW50IGhhcyBjbGFzc1xuICovXG5leHBvcnQgY29uc3QgaGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgY2xhc3MgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGdldENsYXNzZXMoZWxlbWVudCkuaW5jbHVkZXMoY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGNsYXNzIGFyZSBtaXNzaW5nXG4gIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm47XG4gIGlmIChoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpKSB7XG4gICAgLy8gQXJyYXkgb2YgYWxsIGV4aXN0aW5nIGNsYXNzZXNcbiAgICBjb25zdCBleGlzdGluZ0NsYXNzZXMgPSBnZXRDbGFzc2VzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgLy8gU3RyaW5nIG9mIGV4aXN0aW5nIGNsYXNzZXMgbWludXMgdGhlIGNsYXNzIHRvIHJlbW92ZVxuICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBleGlzdGluZ0NsYXNzZXMuZmlsdGVyKChleGlzdGluZ0NsYXNzKSA9PiBleGlzdGluZ0NsYXNzICE9PSBjbGFzc05hbWUpLmpvaW4oJyAnKTtcbiAgICAvLyBTZXQgY2xhc3MgYXR0cmlidXRlIHRvIHRoZSBuZXcgY2xhc3Nlc1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBhIGNsYXNzIG9uIGEgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAvLyBTZXQgY2xhc3MgYXR0cmlidXRlIHRvIHRoZSBuZXcgY2xhc3Nlc1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2VsZW1lbnQuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gLnRyaW0oKSk7XG4gIH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgY2xhc3Mgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuO1xuICBpZiAoaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufTtcbiIsIi8qKlxuICogVG9nZ2xlIGEgYm9vbGVhbiBhdHRyaWJ1dGUgb24gYSBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cikgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG59XG5cbi8qKlxuICogVG9nZ2xlIGEgdG9nZ2xlIGEgY2xhc3Mgb24gY29uZGl0aW9uYWwgY29udGVudCBmb3IgYW4gaW5wdXQgYmFzZWQgb24gY2hlY2tlZCBzdGF0ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXQgaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyB0byB0b2dnbGVcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUNvbmRpdGlvbmFsSW5wdXQgPSAoaW5wdXQsIGNsYXNzTmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBpbnB1dCBvciBjbGFzcyBhcmUgbWlzc2luZ1xuICBpZiAoIWlucHV0IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAvLyBJZiB0aGUgaW5wdXQgaGFzIGNvbmRpdGlvbmFsIGNvbnRlbnQgaXQgaGFkIGEgZGF0YS1hcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZVxuICBjb25zdCBjb25kaXRpb25hbElkID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgaWYgKGNvbmRpdGlvbmFsSWQpIHtcbiAgICAvLyBHZXQgdGhlIGNvbmRpdGlvbmFsIGVsZW1lbnQgZnJvbSB0aGUgaW5wdXQgZGF0YS1hcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZVxuICAgIGNvbnN0IGNvbmRpdGlvbmFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmRpdGlvbmFsSWQpXG4gICAgaWYgKGNvbmRpdGlvbmFsRWxlbWVudCkge1xuICAgICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgY29uZGl0aW9uYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZGl0aW9uYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE1lZ2FNZW51IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL21lZ2EtbWVudS9tZWdhLW1lbnUnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vY2FyZC0tc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgVGFicyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicyc7XG5pbXBvcnQgVGFibGVDYXJkIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi90YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE1lZ2FNZW51KCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgU3VtbWFyeUNhcmQoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzU3RpY2t5IiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiaGVhZGluZ3MiLCJhZGRBbmNob3JzVG9QYWdlIiwiY29udGVudENvbnRhaW5lciIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwiY2IiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwic2Nyb2xsVG9SZXN1bHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsImhhcyIsImxpc3RpbmdDb250YWluZXIiLCJzY3JvbGxJbnRvVmlldyIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYmFubmVySGlkZSIsImFuYWx5dGljc0FjY2VwdCIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImhhbmRsZVN0YXRlIiwiYWN0aXZlRWxlbXMiLCJlbGVtIiwidG9nZ2xlQXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIk1lZ2FNZW51IiwibWVnYU1lbnUiLCJ0b2dnbGVMaW5rcyIsInRhcmdldFBhbmVsIiwiZ2V0VGFyZ2V0UGFuZWxFbGVtZW50IiwicmVzZXRQYW5lbHMiLCJ0b2dnbGVQYW5lbCIsInBhbmVsTGluayIsInNoaWZ0S2V5IiwidGFyZ2V0TGluayIsInBhbmVsSWQiLCJhY3RpdmVQYW5lbCIsImdldENsYXNzZXMiLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJyZW1vdmVDbGFzcyIsImV4aXN0aW5nQ2xhc3NlcyIsIm5ld0NsYXNzZXMiLCJleGlzdGluZ0NsYXNzIiwiam9pbiIsImFkZENsYXNzIiwidG9nZ2xlQ29uZGl0aW9uYWxJbnB1dCIsImNvbmRpdGlvbmFsSWQiLCJjb25kaXRpb25hbEVsZW1lbnQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=