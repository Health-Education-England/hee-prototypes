/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js":
/*!*******************************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js ***!
  \*******************************************************************************************/
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
      this.footer = document.querySelector('.nhsuk-footer');
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
        var tocBlockVisible = this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'));
        var footerVisible = this.footer && this.isElementInViewport(this.footer);
        if (!tocBlockVisible && !footerVisible) {
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

/***/ "./app/assets/hee/blocks/content/main/hee-card--summary/summary.js":
/*!*************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-card--summary/summary.js ***!
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

/***/ "./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js":
/*!*********************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js ***!
  \*********************************************************************************/
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
        var _this4 = this;
        var allOpen = false;
        this.expanders.forEach(function (expander) {
          if (!expander.hasAttribute('open')) {
            _this4.closeExpander(expander);
            allOpen = false;
          } else {
            _this4.setOpenAttributes(expander);
            allOpen = true;
          }
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
    }, {
      key: "setOpenAttributes",
      value: function setOpenAttributes(expander) {
        var summary = expander.querySelector('.nhsuk-details__summary');
        var text = expander.querySelector('.nhsuk-details__text');
        summary.setAttribute('aria-expanded', 'true');
        text.setAttribute('aria-hidden', 'false');
      }
    }]);
    return TableCard;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-table-expander')).forEach(function (tableCard) {
    return new TableCard(tableCard);
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

/***/ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js":
/*!******************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js ***!
  \******************************************************************************/
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
        this.anchorLinks.hidden = false;
      }
    }
    _createClass(AnchorLinks, [{
      key: "findHeadings",
      value: function findHeadings(headings) {
        var foundHeadings = [];
        if (headings) {
          // Generate CSS selectors for only first level headings inside rich-text
          // areas and outside of components.
          var headingTypes = headings.split(',');
          var selectors = headingTypes.map(function (type) {
            return '.page__content > ' + type;
          });
          selectors = selectors.join(', ');
          var contentContainer = document.querySelector('.page__content');
          contentContainer.querySelectorAll(selectors).forEach(function (heading, i) {
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
      }
    }]);
    return AnchorLinks;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-anchor-links')).forEach(function (anchorLinks) {
    return new AnchorLinks(anchorLinks);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js":
/*!**********************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js ***!
  \**********************************************************************/
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
        this.tableContents.hidden = true;
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
      this.dropdowns = _toConsumableArray(this.container.getElementsByClassName('nhsuk-select'));
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
        this.dropdowns.forEach(function (dropdown) {
          dropdown.addEventListener('change', function (evt) {
            return _this.updateResults(evt);
          });
        });
        this.groups.forEach(function (group) {
          var legend = group.querySelector('.nhsuk-fieldset__legend');
          if (legend) {
            legend.addEventListener('click', function (evt) {
              return _this.toggleGroupFieldset(evt);
            });
          }
        });
        this.clearToggle.forEach(function (toggle) {
          toggle.addEventListener('click', function (evt) {
            return _this.clearFilter(evt);
          });
        });
      }
    }, {
      key: "setUp",
      value: function setUp() {
        this.container.classList.add('nhsuk-filter--js');
        this.initFilters();
        this.initClearToggles();
        this.initCounters();

        // Hide submit button
        if (this.submit) {
          this.submit.hidden = true;
        }
      }
    }, {
      key: "initFilters",
      value: function initFilters() {
        var _this2 = this;
        this.groups.forEach(function (group) {
          if (!_this2.isGroupFilterActive(group)) {
            // Collapse group if filters not active.
            group.classList.add('nhsuk-filter__group--closed');
          }

          // Disable sub-group select if no option in parent selected.
          if (group.classList.contains('has-subgroup')) {
            var parentSelect = group.querySelector('.nhsuk-form-group.parent-group select');
            var subSelect = group.querySelector('.nhsuk-form-group.sub-group select');
            if (subSelect !== null && parentSelect !== null && parentSelect.value === '') {
              subSelect.setAttribute('disabled', 'disabled');
            }
          }

          // Enable scrollable checkbox groups if more than four options.
          var checkboxes = group.querySelectorAll('.nhsuk-checkboxes');
          checkboxes.forEach(function (cb) {
            if (cb.childElementCount > 4) {
              cb.classList.add('scrollable');
            }
          });
        });
      }
    }, {
      key: "initClearToggles",
      value: function initClearToggles() {
        var _this3 = this;
        this.groups.forEach(function (group) {
          var toggleLink = group.querySelector('.nhsuk-filter__group__clear');
          if (_this3.isGroupFilterActive(group)) {
            toggleLink.classList.add('visible');
          }
        });
      }
    }, {
      key: "initCounters",
      value: function initCounters() {
        var _this4 = this;
        this.groups.forEach(function (group) {
          _this4.updateActiveCount(group);
        });
      }
    }, {
      key: "updateActiveCount",
      value: function updateActiveCount(group) {
        var countElem = group.querySelector('.nhsuk-hint');
        if (countElem === null) {
          return;
        }
        var count = 0;
        var checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked === true) {
            count++;
          }
        }
        if (count === 0) {
          countElem.classList.remove('visible');
          return;
        }
        countElem.innerText = "".concat(count, " selected");
        countElem.classList.add('visible');
      }
    }, {
      key: "isGroupFilterActive",
      value: function isGroupFilterActive(group) {
        // Check if checkboxes are active.
        var checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked === true) {
            return true;
          }
        }

        // Check if selects are active.
        var selectElements = group.querySelectorAll('.nhsuk-select');
        for (var _i = 0; _i < selectElements.length; _i++) {
          if (selectElements[_i].value !== '') {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "toggleGroupFieldset",
      value: function toggleGroupFieldset(evt) {
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
        var parentGroup = evt.target.closest('.nhsuk-filter__group');
        this.updateActiveCount(parentGroup);

        // Check whether select dropdown has child filter and reset that too.
        if (parentGroup.classList.contains('has-subgroup') && evt.target.nodeName === 'SELECT') {
          var wrapper = evt.target.closest('.parent-group');
          if (wrapper) {
            var childSelect = wrapper.nextElementSibling.querySelector('.sub-group select');
            childSelect.selectedIndex = 0;
          }
        }
        this.container.submit();
      }
    }, {
      key: "clearFilter",
      value: function clearFilter(evt) {
        this.clearCheckboxes(evt);
        this.clearSelectElements(evt);
        this.updateResults(evt);
      }
    }, {
      key: "clearCheckboxes",
      value: function clearCheckboxes(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;
        var checkboxes = toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input');
        checkboxes.forEach(function (cb) {
          cb.removeAttribute('checked');
        });
      }
    }, {
      key: "clearSelectElements",
      value: function clearSelectElements(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;
        var selectElements = toggleLink.parentElement.querySelectorAll('.nhsuk-select');
        selectElements.forEach(function (select) {
          select.selectedIndex = 0;
        });
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
        var groupTags = this.tag.parentElement.querySelectorAll('.nhsuk-filter-tag');

        // Remove entire filter tag group if no other tags present.
        if (groupTags.length === 1) {
          this.tag.parentElement.remove();
        } else {
          this.tag.remove();
        }
        document.querySelectorAll("form.nhsuk-filter input[value='".concat(this.tag.dataset.filter, "']")).forEach(function (checkbox) {
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change'));
        });
        document.querySelectorAll("form.nhsuk-filter select option[value='".concat(this.tag.dataset.filter, "']")).forEach(function (option) {
          var parentGroupSelect = option.parentElement;
          parentGroupSelect.selectedIndex = 0;

          // Reset sub-group select if we are setting the parent,
          var formGroupElem = option.parentElement.parentElement.parentElement.parentElement;
          if (formGroupElem.classList.contains('parent-group')) {
            var subGroupSelect = formGroupElem.nextElementSibling.querySelector('.nhsuk-select');
            subGroupSelect.selectedIndex = 0;
          }
          parentGroupSelect.dispatchEvent(new Event('change'));
        });
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

/***/ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js":
/*!************************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js ***!
  \************************************************************************/
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

/***/ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js":
/*!*********************************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _blocks_scaffolding_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/scaffolding/nhsuk-hee-cookies/cookies */ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js");
/* harmony import */ var _blocks_scaffolding_nhsuk_hee_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/scaffolding/nhsuk-hee-header/navigation/subnav */ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js");
/* harmony import */ var _blocks_content_sidebar_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content/sidebar/hee-anchorlinks/anchorlinks */ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js");
/* harmony import */ var _blocks_content_footer_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_content_sidebar_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/sidebar/hee-anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/content/main/hee-media/media */ "./app/assets/hee/blocks/content/main/hee-media/media.js");
/* harmony import */ var _blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/content/main/hee-navmap/navmap */ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js");
/* harmony import */ var _blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/content/main/hee-newsletter/newsletter */ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_hee_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/hee-card--summary/summary */ "./app/assets/hee/blocks/content/main/hee-card--summary/summary.js");
/* harmony import */ var _blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/hee-tabs/tabs */ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_hee_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/hee-table-expander/table-expander */ "./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components



// HEE Components











// Unsorted components



// Initialize components
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_nhsuk_hee_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_content_main_hee_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_hee_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRztBQUNZO0FBQ0M7QUFDbkI7QUFDeUI7O0FBRWhGO0FBQ3NFO0FBQ1M7O0FBRS9FO0FBQ0F4QixRQUFRLENBQUNRLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbERpSywrRUFBSSxDQUFDLENBQUM7RUFDTnFCLCtGQUFXLENBQUMsQ0FBQztFQUNick0sNEdBQWlCLENBQUMsQ0FBQztFQUNuQitULHlGQUFPLENBQUMsQ0FBQztFQUNUOUQsNEZBQU0sQ0FBQyxDQUFDO0VBQ1JvQyxrR0FBUyxDQUFDLENBQUM7RUFDWFcsNkZBQU8sQ0FBQyxDQUFDO0VBQ1RxRSxnRkFBSyxDQUFDLENBQUM7RUFDUGxULGtGQUFNLENBQUMsQ0FBQztFQUNSaVQsa0dBQU0sQ0FBQyxDQUFDO0VBQ1JoVSx5RkFBVyxDQUFDLENBQUM7RUFDYjBELDBGQUFVLENBQUMsQ0FBQztFQUNaZ0gsdUZBQWEsQ0FBQyxDQUFDO0VBQ2Z6RSxtR0FBUyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtY2FyZC0tc3VtbWFyeS9zdW1tYXJ5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBBbmNob3IgbGluayBzdGlja3kgdG9vbGJhciBhdCBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAqL1xuICBjbGFzcyBBbmNob3JMaW5rc1N0aWNreSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5zaWRlYmFyQW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcmlnaHRiYXIgLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9vdGVyJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgY29uc3QgdG9jQmxvY2tWaXNpYmxlID0gdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2lkZWJhckFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2gyJykpO1xuICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZSA9IHRoaXMuZm9vdGVyICYmIHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLmZvb3Rlcik7XG5cbiAgICAgIGlmICghdG9jQmxvY2tWaXNpYmxlICYmICFmb290ZXJWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlbGVtZW50IGlzIGluc2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmcgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxuICAgICAgICAmJiBib3VuZGluZy5sZWZ0ID49IC1lbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyBlbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3NfX3N0aWNreScpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rc1N0aWNreShhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBjbGFzcyBTdW1tYXJ5Q2FyZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdW1tYXJ5Q2FyZCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZCA9IHN1bW1hcnlDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5zdW1tYXJ5Q2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLWNhcmQtLXN1bW1hcnlfX3RvZ2dsZScpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluay5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkZWZhdWx0Jyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1jYXJkLS1zdW1tYXJ5JyldLmZvckVhY2goc3VtbWFyeUNhcmQgPT4gbmV3IFN1bW1hcnlDYXJkKHN1bW1hcnlDYXJkKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLmhlZS1tZWRpYS10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNYXBcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXJlZ2lvbicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmF2TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIHN2Zykge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMucmVnaW9ucyA9IFsuLi5zdmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstcmVnaW9uJyldO1xuICAgICAgdGhpcy5saXN0ID0gWy4uLm1hcC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVnaW9uTGlzdCBsaSBhJyldO1xuXG4gICAgICB0aGlzLmFkZExpbmtzVG9NYXAoKTtcbiAgICAgIHRoaXMuY2xlYW5TdHlsZSgpO1xuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5saW5rRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbGVhblN0eWxlKCl7XG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAuc3Qwe2ZpbGw6IzAwNUVCODtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLnN0MXtmaWxsOiNBRUI3QkQ7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgICAuZm9jdXMgLnN0MCB7ZmlsbDojZmZlYjNiO3N0cm9rZTojMjEyYjMyO31cbiAgICAgICAgLmZvY3VzICoge3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICBgKSlcbiAgICB9XG5cbiAgICBhZGRMaW5rc1RvTWFwKCl7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHJlZ2lvbi5pZClcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXG4gICAgICAgIGNvbnN0IHRoaXNUaXRsZSA9ICh0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MKT8gdGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCA6IFwiXCJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZWdpb24uaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAke2NoaWxkcmVufVxuICAgICAgICA8L2E+YFxuICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gd3JhcExpbmtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5tYXBPdXQoZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubWFwQ2xpY2soZXZlbnQpKSlcbiAgICB9XG5cbiAgICBsaW5rRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImZvY3VzXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcbiAgICB9XG5cbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XG4gICAgICBvYmoucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvYmopO1xuICAgIH1cblxuICAgIG1hcEluKHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGhpcy5tb3ZlVG9Ub3AodGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcE91dCh0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgdGhpc01hcENvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChldmVudC50YXJnZXQuY2xvc2VzdChcImdcIikuaWQpXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXG4gICAgfVxuXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cblxuICAgIGxpbmtFdmVudCh0YXJnZXQsIGRpcmVjdGlvbiwgdHlwZSkge1xuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpbmtDb3VudGVycGFydCh0aGlzSWQpXG4gICAgICBpZihkaXJlY3Rpb24gPT09IFwiaW5cIikge1xuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwT3V0KHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLnJlZ2lvbnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcbiAgICAvLyBuZWVkIHRvIHdhaXQgZm9yIFNWRyB0byBsb2FkXG4gICAgY29uc3Qgb2JqID0gbWFwLnF1ZXJ5U2VsZWN0b3IoJ29iamVjdCcpXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qgc3ZnID0gb2JqLmdldFNWR0RvY3VtZW50KCkucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgIGlmKHN2Zyl7XG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE5ld3NsZXR0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnbmhzdWstbmV3c2xldHRlci1mb3JtJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOZXdzbGV0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuZXdzbGV0dGVyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXdzbGV0dGVyO1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB3aW5kb3cucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpICAgICAgO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYyA9PiB0aGlzLnZhbGlkYXRlKGMudGFyZ2V0KSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhbGlkYXRlKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgdmFyIHRhcmdldFN1bW1hcnlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeS1cIit0YXJnZXQubmFtZSk7XG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJmaXJzdG5hbWVcIiB8fCB0YXJnZXQubmFtZSA9PSBcImxhc3RuYW1lXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtbWFyeSgpIHtcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XG4gICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMClcbiAgICAgIHsgICAgICAgIFxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHN0cikge1xuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIGVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvckNsYXNzZXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcbiAgICAgICAgZXJyb3JjbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xuICAgICAgZXJyb3JTdW1tYXJ5LmZvckVhY2goZXJyb3JzdW1tYXJ5ID0+IHtcbiAgICAgICAgZXJyb3JzdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5SXRlbXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLXN1bW1hcnktaXRlbScpO1xuICAgICAgZXJyb3JTdW1tYXJ5SXRlbXMuZm9yRWFjaChzdW1tYXJ5aXRlbSA9PiB7XG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNhcHRjaGFDYWxsYmFjaygpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jbmV3c2xldHRlci1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbmV3c2xldHRlci1mb3JtJyldLmZvckVhY2goKG5ld3NsZXR0ZXIpID0+IG5ldyBOZXdzbGV0dGVyKG5ld3NsZXR0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgaWYgKCFleHBhbmRlci5oYXNBdHRyaWJ1dGUoJ29wZW4nKSl7XG4gICAgICAgICAgdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgICAgICBhbGxPcGVuID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuc2V0T3BlbkF0dHJpYnV0ZXMoZXhwYW5kZXIpO1xuICAgICAgICAgIGFsbE9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgZXhwYW5kZXIuc2V0QXR0cmlidXRlKCdvcGVuJywgJ29wZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIGNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgZXhwYW5kZXIucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgc2V0T3BlbkF0dHJpYnV0ZXMoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NTIHNlbGVjdG9ycyBmb3Igb25seSBmaXJzdCBsZXZlbCBoZWFkaW5ncyBpbnNpZGUgcmljaC10ZXh0XG4gICAgICAgIC8vIGFyZWFzIGFuZCBvdXRzaWRlIG9mIGNvbXBvbmVudHMuXG4gICAgICAgIGNvbnN0IGhlYWRpbmdUeXBlcyA9IGhlYWRpbmdzLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBoZWFkaW5nVHlwZXMubWFwKHR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiAnLnBhZ2VfX2NvbnRlbnQgPiAnICsgdHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsICcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudCcpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGFibGVDb250ZW50cy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5kcm9wZG93bnMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc2VsZWN0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kcm9wZG93bnMuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cEZpZWxkc2V0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyRmlsdGVyKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgICAgIHRoaXMuaW5pdENsZWFyVG9nZ2xlcygpO1xuICAgICAgdGhpcy5pbml0Q291bnRlcnMoKTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmlsdGVycygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIC8vIENvbGxhcHNlIGdyb3VwIGlmIGZpbHRlcnMgbm90IGFjdGl2ZS5cbiAgICAgICAgICBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc2FibGUgc3ViLWdyb3VwIHNlbGVjdCBpZiBubyBvcHRpb24gaW4gcGFyZW50IHNlbGVjdGVkLlxuICAgICAgICBpZiAoZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnBhcmVudC1ncm91cCBzZWxlY3QnKTtcbiAgICAgICAgICBjb25zdCBzdWJTZWxlY3QgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9ybS1ncm91cC5zdWItZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgICBpZiAoc3ViU2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBzdWJTZWxlY3Quc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuYWJsZSBzY3JvbGxhYmxlIGNoZWNrYm94IGdyb3VwcyBpZiBtb3JlIHRoYW4gZm91ciBvcHRpb25zLlxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXMnKTtcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICBpZiAoY2IuY2hpbGRFbGVtZW50Q291bnQgPiA0KSB7XG4gICAgICAgICAgICBjYi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDbGVhclRvZ2dsZXMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpO1xuICAgICAgICBpZiAodGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q291bnRlcnMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb3VudChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVDb3VudChncm91cCkge1xuICAgICAgY29uc3QgY291bnRFbGVtID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWhpbnQnKTtcblxuICAgICAgaWYgKGNvdW50RWxlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb3VudEVsZW0uaW5uZXJUZXh0ID0gYCR7Y291bnR9IHNlbGVjdGVkYFxuICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBpc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSB7XG4gICAgICAvLyBDaGVjayBpZiBjaGVja2JveGVzIGFyZSBhY3RpdmUuXG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHNlbGVjdHMgYXJlIGFjdGl2ZS5cbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXNlbGVjdCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZWN0RWxlbWVudHNbaV0udmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcbiAgICAgIC8vIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImZpbHRlclwiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBjb25zdCBwYXJlbnRHcm91cCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQocGFyZW50R3JvdXApO1xuXG4gICAgICAvLyBDaGVjayB3aGV0aGVyIHNlbGVjdCBkcm9wZG93biBoYXMgY2hpbGQgZmlsdGVyIGFuZCByZXNldCB0aGF0IHRvby5cbiAgICAgIGlmIChwYXJlbnRHcm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWJncm91cCcpICYmIGV2dC50YXJnZXQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wYXJlbnQtZ3JvdXAnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZFNlbGVjdCA9IHdyYXBwZXIubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zdWItZ3JvdXAgc2VsZWN0Jyk7XG4gICAgICAgICAgY2hpbGRTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoZXZ0KSB7XG4gICAgICB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpO1xuICAgICAgdGhpcy5jbGVhclNlbGVjdEVsZW1lbnRzKGV2dCk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcblxuICAgICAgc2VsZWN0RWxlbWVudHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGdyb3VwVGFncyA9IHRoaXMudGFnLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZpbHRlci10YWcnKTtcblxuICAgICAgLy8gUmVtb3ZlIGVudGlyZSBmaWx0ZXIgdGFnIGdyb3VwIGlmIG5vIG90aGVyIHRhZ3MgcHJlc2VudC5cbiAgICAgIGlmIChncm91cFRhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMudGFnLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtLm5oc3VrLWZpbHRlciBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgc2VsZWN0IG9wdGlvblt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50R3JvdXBTZWxlY3QgPSBvcHRpb24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50R3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICAgICAgLy8gUmVzZXQgc3ViLWdyb3VwIHNlbGVjdCBpZiB3ZSBhcmUgc2V0dGluZyB0aGUgcGFyZW50LFxuICAgICAgICBjb25zdCBmb3JtR3JvdXBFbGVtID0gb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChmb3JtR3JvdXBFbGVtLmNsYXNzTGlzdC5jb250YWlucygncGFyZW50LWdyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBzdWJHcm91cFNlbGVjdCA9IGZvcm1Hcm91cEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1zZWxlY3QnKTtcbiAgICAgICAgICBzdWJHcm91cFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEaXNhYmxlcyBicm93c2VyIHJlc3RvcmluZyB2aWV3cG9ydCB0byBwb3NpdGlvbiBiZWZvcmUgcGFnZSByZWxvYWQuXG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9SZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImxpc3RpbmdcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1Jlc3VsdHMoKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG5cbiAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVzdWx0c191cGRhdGVkJykpIHtcbiAgICAgICAgY29uc3QgbGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGxpc3RpbmdDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBsaXN0aW5nQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgQW5jaG9yTGlua3NTdGlja3kgZnJvbSAnLi9ibG9ja3MvY29udGVudC9mb290ZXIvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeVwiO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMnO1xuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rc1N0aWNreSIsImNvbnRhaW5lciIsIl9jbGFzc0NhbGxDaGVjayIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsImRvY3VtZW50IiwiZm9vdGVyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVTdGlja3lUb29sYmFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsInRvY0Jsb2NrVmlzaWJsZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJmb290ZXJWaXNpYmxlIiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzIiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsIl90aGlzNCIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzZXRPcGVuQXR0cmlidXRlcyIsInN1bW1hcnkiLCJ0ZXh0IiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiQW5jaG9yTGlua3MiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiaGVhZGluZ3MiLCJhZGRBbmNob3JzVG9QYWdlIiwiaGVhZGluZ1R5cGVzIiwic3BsaXQiLCJzZWxlY3RvcnMiLCJqb2luIiwiY29udGVudENvbnRhaW5lciIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJkcm9wZG93bnMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZHJvcGRvd24iLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwRmllbGRzZXQiLCJjbGVhckZpbHRlciIsImluaXRGaWx0ZXJzIiwiaW5pdENsZWFyVG9nZ2xlcyIsImluaXRDb3VudGVycyIsImlzR3JvdXBGaWx0ZXJBY3RpdmUiLCJwYXJlbnRTZWxlY3QiLCJzdWJTZWxlY3QiLCJjYiIsImNoaWxkRWxlbWVudENvdW50IiwidXBkYXRlQWN0aXZlQ291bnQiLCJjb3VudEVsZW0iLCJzZWxlY3RFbGVtZW50cyIsInNldFVwZGF0ZWRGbGFnIiwiaXNVcGRhdGVkIiwiZmxhZ0VsZW1lbnQiLCJwYXJlbnRHcm91cCIsIm5vZGVOYW1lIiwid3JhcHBlciIsImNoaWxkU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImNsZWFyQ2hlY2tib3hlcyIsImNsZWFyU2VsZWN0RWxlbWVudHMiLCJzZWxlY3QiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZ3JvdXBUYWdzIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwib3B0aW9uIiwicGFyZW50R3JvdXBTZWxlY3QiLCJmb3JtR3JvdXBFbGVtIiwic3ViR3JvdXBTZWxlY3QiLCJMaXN0aW5nIiwiZm9ybUVsZW1lbnQiLCJ0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMiLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJzY3JvbGxUb1Jlc3VsdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVybCIsIlVSTCIsImxvY2F0aW9uIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwibGlzdGluZ0NvbnRhaW5lciIsInNjcm9sbEludG9WaWV3IiwibGlzdGluZyIsIkNvb2tpZXMiLCJ1c2VDb29raWVzIiwiYmFubmVyIiwic2hvd0Nvb2tpZXMiLCJyZW1vdmVDb29raWVzIiwiaG9zdCIsImdldEhvc3QiLCJjb29raWVTdGF0dXMiLCJzZXRDb29raWVzIiwiU3RhdHVzIiwiSW4iLCJPdXQiLCJ0b2dnbGVTdGF0dXMiLCJjb29raWVzIiwiY29va2llIiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYmFubmVySGlkZSIsImFuYWx5dGljc0FjY2VwdCIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImhhbmRsZVN0YXRlIiwiYWN0aXZlRWxlbXMiLCJlbGVtIiwidG9nZ2xlQXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==