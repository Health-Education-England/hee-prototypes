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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

/***/ "./app/assets/hee/blocks/content/main/card--summary/summary.js":
/*!*********************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/card--summary/summary.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
/* harmony import */ var _blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/content/main/hee-media/media */ "./app/assets/hee/blocks/content/main/hee-media/media.js");
/* harmony import */ var _blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/content/main/hee-navmap/navmap */ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js");
/* harmony import */ var _blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/content/main/hee-newsletter/newsletter */ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/card--summary/summary */ "./app/assets/hee/blocks/content/main/card--summary/summary.js");
/* harmony import */ var _blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/hee-tabs/tabs */ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components



// HEE Components











// Unsorted components



// Initialize components
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztFQUNiaE0sd0dBQWlCLENBQUMsQ0FBQztFQUNuQjhSLCtFQUFPLENBQUMsQ0FBQztFQUNUdkMsNEZBQU0sQ0FBQyxDQUFDO0VBQ1JpQixrR0FBUyxDQUFDLENBQUM7RUFDWE0sNkZBQU8sQ0FBQyxDQUFDO0VBQ1R1RSxnRkFBSyxDQUFDLENBQUM7RUFDUHJSLGtGQUFNLENBQUMsQ0FBQztFQUNSb1Isd0ZBQU0sQ0FBQyxDQUFDO0VBQ1JuUyxxRkFBVyxDQUFDLENBQUM7RUFDYjBELDBGQUFVLENBQUMsQ0FBQztFQUNaeUcsbUZBQWEsQ0FBQyxDQUFDO0VBQ2Y3QywrRkFBUyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3kuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2NhcmQtLXN1bW1hcnkvc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIEFuY2hvciBsaW5rIHN0aWNreSB0b29sYmFyIGF0IGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICovXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmhlZS1hbmNob3JsaW5rc19fc3RpY2t5X19idG4nKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLnNpZGViYXJBbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19yaWdodGJhciAuaGVlLWFuY2hvcmxpbmtzJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHN1bW1hcnlDYXJkKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnN1bW1hcnlDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtY2FyZC0tc3VtbWFyeV9fdG9nZ2xlJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZVN1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2RlZmF1bHQnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcuaGVlLW1lZGlhLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcbiAgICAgIC8vIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImZpbHRlclwiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlTGluaykge1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIExpc3RpbmdcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhbmQgJy5oZWUtbGlzdGluZ3MnIGFyZSBwYXNzZWRcbiAgICogaW50byB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAdG9kbyBSZW1vdmUgbGVnYWN5IHJlZmVyZW5jZXMgdG8gLm5oc3VrLWxpc3RpbmcgYW5kIGxvb3BzIG9uY2UgYWxsIG5ld1xuICAgKiBjb2xsZWN0aW9uIHRlbXBsYXRlcyBoYXZlIGJlZW4gaW1wbGVtZW50ZWQuXG4gICAqL1xuICBjbGFzcyBMaXN0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc2FibGVzIGJyb3dzZXIgcmVzdG9yaW5nIHZpZXdwb3J0IHRvIHBvc2l0aW9uIGJlZm9yZSBwYWdlIHJlbG9hZC5cbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblxuICAgICAgdGhpcy5zY3JvbGxUb1Jlc3VsdHMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc3VibWl0LCAubmhzdWstbGlzdGluZ19fc29ydF9fc3VibWl0JyldLmZvckVhY2goc3VibWl0ID0+IHtcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwibGlzdGluZ1wiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvUmVzdWx0cygpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcblxuICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZXN1bHRzX3VwZGF0ZWQnKSkge1xuICAgICAgICBjb25zdCBsaXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcblxuICAgICAgICBpZiAobGlzdGluZ0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGxpc3RpbmdDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vY2FyZC0tc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgVGFicyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicyc7XG5pbXBvcnQgVGFibGVDYXJkIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi90YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgU3VtbWFyeUNhcmQoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzIiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwiY2IiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwic2Nyb2xsVG9SZXN1bHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsImhhcyIsImxpc3RpbmdDb250YWluZXIiLCJzY3JvbGxJbnRvVmlldyIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYmFubmVySGlkZSIsImFuYWx5dGljc0FjY2VwdCIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImhhbmRsZVN0YXRlIiwiYWN0aXZlRWxlbXMiLCJlbGVtIiwidG9nZ2xlQXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==