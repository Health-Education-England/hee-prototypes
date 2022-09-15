/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/components/hee/hee-anchorlinks/anchorlinks.js":
/*!******************************************************************!*\
  !*** ./app/assets/components/hee/hee-anchorlinks/anchorlinks.js ***!
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
  * AnchorLinks
  * Elements with the selector '.nhsuk-anchor-links' are passed into this class
  */
  var AnchorLinks = /*#__PURE__*/function () {
    function AnchorLinks(anchorLinks) {
      var _this$foundHeadings;

      _classCallCheck(this, AnchorLinks);

      this.anchorLinks = anchorLinks;
      this.anchorLinks.hidden = true;
      this.foundHeadings = this.findHeadings(anchorLinks.dataset.headings);

      if ((_this$foundHeadings = this.foundHeadings) !== null && _this$foundHeadings !== void 0 && _this$foundHeadings.length) {
        this.addAnchorsToPage();
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

/***/ "./app/assets/components/hee/hee-filter/filter.js":
/*!********************************************************!*\
  !*** ./app/assets/components/hee/hee-filter/filter.js ***!
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
      }
    }, {
      key: "setUp",
      value: function setUp() {
        this.container.classList.add('nhsuk-filter--js'); // Close groups
        // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));
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
    }]);

    return Filter;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-filter')).forEach(function (filter) {
    return new Filter(filter);
  });
});

/***/ }),

/***/ "./app/assets/components/hee/hee-filtertag/filtertag.js":
/*!**************************************************************!*\
  !*** ./app/assets/components/hee/hee-filtertag/filtertag.js ***!
  \**************************************************************/
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

/***/ "./app/assets/components/hee/hee-listing/listing.js":
/*!**********************************************************!*\
  !*** ./app/assets/components/hee/hee-listing/listing.js ***!
  \**********************************************************/
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
  * Elements with the selector '.nhsuk-listing' are passed into this class
  */
  var Listing = /*#__PURE__*/function () {
    function Listing(container) {
      _classCallCheck(this, Listing);

      this.container = container;
      this.sort = this.container.querySelector('.nhsuk-listing__sort');
      this.addEventListeners();
      this.toggleJavascriptElements();
    }

    _createClass(Listing, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        if (this.sort) {
          _toConsumableArray(this.sort.getElementsByTagName('select')).forEach(function (select) {
            return select.addEventListener('change', function (evt) {
              return _this.updateResults(evt);
            });
          });
        }
      }
    }, {
      key: "toggleJavascriptElements",
      value: function toggleJavascriptElements() {
        if (this.sort) {
          var submit = this.sort.querySelector('.nhsuk-listing__sort__submit');

          if (submit) {
            submit.hidden = true;
          }
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults() {
        this.sort.submit();
      }
    }]);

    return Listing;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-listing')).forEach(function (listing) {
    return new Listing(listing);
  });
});

/***/ }),

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

/***/ "./app/assets/components/nhsuk-hee/nhsuk-hee-cookies/cookies.js":
/*!**********************************************************************!*\
  !*** ./app/assets/components/nhsuk-hee/nhsuk-hee-cookies/cookies.js ***!
  \**********************************************************************/
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
          var match = c.match(new RegExp('(^| )analyticsCookie([^;]+)'));

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
          document.querySelector('#nhsuk-cookie-banner__link_accept_analytics').addEventListener('click', function (evt) {
            evt.preventDefault();

            _this2.bannerHide();

            _this2.useCookie();
          });
          document.querySelector('#nhsuk-cookie-banner__link_decline_analytics').addEventListener('click', function (evt) {
            evt.preventDefault();

            _this2.bannerHide();

            _this2.noCookie();
          });
        }
      }
    }, {
      key: "useCookie",
      value: function useCookie() {
        document.cookie = "analyticsCookie=true; domain=".concat(this.host, "; max-age=7776000");
        location.reload();
      }
    }, {
      key: "noCookie",
      value: function noCookie() {
        document.cookie = "analyticsCookie=false; domain=".concat(this.host, "; max-age=7776000");
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
        document.cookie = "analyticsCookie=false; max-age=0";
        location.reload();
      }
    }]);

    return Cookies;
  }();

  new Cookies(document);
});

/***/ }),

/***/ "./app/assets/components/nhsuk-hee/nhsuk-hee-header/submenu.js":
/*!*********************************************************************!*\
  !*** ./app/assets/components/nhsuk-hee/nhsuk-hee-header/submenu.js ***!
  \*********************************************************************/
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
* Submenu's
* Elements with the selector '.nhsuk-subheader' are passed into this class
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var Submenu = /*#__PURE__*/function () {
    function Submenu(container) {
      _classCallCheck(this, Submenu);

      this.container = container;
      this.toggleLink = this.container.querySelector('a');
      this.parentList = this.container.parentNode;
      this.addEventListeners();
    }

    _createClass(Submenu, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;

        if (this.toggleLink) {
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

        var activeElems = document.querySelectorAll(".nhsuk-subheader.is-active");
        activeElems.forEach(function (elem) {
          if (elem != _this2.container) {
            elem.classList.remove("is-active");
            elem.toggleAttribute("aria-expanded");
          } else {
            _this2.toggleClass(_this2.parentList, 'submenu-open');
          }
        });

        if (activeElems.length === 0) {
          this.toggleClass(this.parentList, 'submenu-open');
        }
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        event.preventDefault();
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

    return Submenu;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-subheader')).forEach(function (submenu) {
    return new Submenu(submenu);
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


    var openSub = document.querySelector(".nhsuk-subheader.is-active");

    if (openSub) {
      var isNotSub = event.target !== openSub;
      var isSubChild = event.target.closest(".nhsuk-subheader.is-active");

      if (isNotSub && !isSubChild) {
        openSub.classList.remove("is-active");
        document.querySelector(".nhsuk-header__navigation-list").classList.remove("submenu-open");
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
/*!**************************************!*\
  !*** ./app/assets/javascript/hee.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_nhsuk_hee_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nhsuk-hee/nhsuk-hee-cookies/cookies */ "./app/assets/components/nhsuk-hee/nhsuk-hee-cookies/cookies.js");
/* harmony import */ var _components_nhsuk_hee_nhsuk_hee_header_submenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nhsuk-hee/nhsuk-hee-header/submenu */ "./app/assets/components/nhsuk-hee/nhsuk-hee-header/submenu.js");
/* harmony import */ var _components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/anchorlinks */ "./app/assets/components/hee/hee-anchorlinks/anchorlinks.js");
/* harmony import */ var _components_hee_hee_listing_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hee/hee-listing/listing */ "./app/assets/components/hee/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _components_hee_hee_filter_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-filter/filter */ "./app/assets/components/hee/hee-filter/filter.js");
/* harmony import */ var _components_hee_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hee/hee-filtertag/filtertag */ "./app/assets/components/hee/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components





 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';

 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_nhsuk_hee_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_hee_hee_filter_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_hee_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_components_hee_hee_listing_listing__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_nhsuk_hee_nhsuk_hee_header_submenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQbEgsRUFBQUEscUZBQVU7QUFDWCxDQVhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvbmhzdWstaGVlL25oc3VrLWhlZS1jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvbmhzdWstaGVlL25oc3VrLWhlZS1oZWFkZXIvc3VibWVudS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZGRBbmNob3JzVG9QYWdlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEhlYWRpbmdzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXG4gICAgICBpZiAoaGVhZGluZ3MpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChoZWFkaW5ncykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIC8vIENsb3NlIGdyb3Vwc1xuICAgICAgLy8gdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyVGFnXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXItdGFnJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXJUYWcge1xuICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICB0aGlzLmljb24gPSB0YWcucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlci10YWdfX2ljb24nKTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0aGlzLnJlbW92ZUZpbHRlcihldnQpKTtcbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGV2dC50YXJnZXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTGlzdGluZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMuc29ydCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1saXN0aW5nX19zb3J0Jyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy5zb3J0KSB7XG4gICAgICAgIFsuLi50aGlzLnNvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKCkge1xuICAgICAgaWYgKHRoaXMuc29ydCkge1xuICAgICAgICBjb25zdCBzdWJtaXQgPSB0aGlzLnNvcnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpO1xuICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKCkge1xuICAgICAgdGhpcy5zb3J0LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNYXBcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXJlZ2lvbicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmF2TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIHN2Zykge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMucmVnaW9ucyA9IFsuLi5zdmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstcmVnaW9uJyldO1xuICAgICAgdGhpcy5saXN0ID0gWy4uLm1hcC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVnaW9uTGlzdCBsaSBhJyldO1xuXG4gICAgICB0aGlzLmFkZExpbmtzVG9NYXAoKTtcbiAgICAgIHRoaXMuY2xlYW5TdHlsZSgpO1xuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5saW5rRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbGVhblN0eWxlKCl7XG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAuc3Qwe2ZpbGw6IzAwNUVCODtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLnN0MXtmaWxsOiNBRUI3QkQ7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgICAuZm9jdXMgLnN0MCB7ZmlsbDojZmZlYjNiO3N0cm9rZTojMjEyYjMyO31cbiAgICAgICAgLmZvY3VzICoge3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICBgKSlcbiAgICB9XG5cbiAgICBhZGRMaW5rc1RvTWFwKCl7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHJlZ2lvbi5pZClcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXG4gICAgICAgIGNvbnN0IHRoaXNUaXRsZSA9ICh0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MKT8gdGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCA6IFwiXCJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZWdpb24uaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAke2NoaWxkcmVufVxuICAgICAgICA8L2E+YFxuICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gd3JhcExpbmtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5tYXBPdXQoZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubWFwQ2xpY2soZXZlbnQpKSlcbiAgICB9XG5cbiAgICBsaW5rRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImZvY3VzXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcbiAgICB9XG5cbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XG4gICAgICBvYmoucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvYmopO1xuICAgIH1cblxuICAgIG1hcEluKHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGhpcy5tb3ZlVG9Ub3AodGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcE91dCh0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgdGhpc01hcENvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChldmVudC50YXJnZXQuY2xvc2VzdChcImdcIikuaWQpXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXG4gICAgfVxuXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cblxuICAgIGxpbmtFdmVudCh0YXJnZXQsIGRpcmVjdGlvbiwgdHlwZSkge1xuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpbmtDb3VudGVycGFydCh0aGlzSWQpXG4gICAgICBpZihkaXJlY3Rpb24gPT09IFwiaW5cIikge1xuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwT3V0KHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLnJlZ2lvbnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcbiAgICAvLyBuZWVkIHRvIHdhaXQgZm9yIFNWRyB0byBsb2FkXG4gICAgY29uc3Qgb2JqID0gbWFwLnF1ZXJ5U2VsZWN0b3IoJ29iamVjdCcpXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qgc3ZnID0gb2JqLmdldFNWR0RvY3VtZW50KCkucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgIGlmKHN2Zyl7XG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE5ld3NsZXR0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnbmhzdWstbmV3c2xldHRlci1mb3JtJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOZXdzbGV0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuZXdzbGV0dGVyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXdzbGV0dGVyO1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpICAgICAgO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYyA9PiB0aGlzLnZhbGlkYXRlKGMudGFyZ2V0KSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhbGlkYXRlKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgdmFyIHRhcmdldFN1bW1hcnlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeS1cIit0YXJnZXQubmFtZSk7XG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJmaXJzdG5hbWVcIiB8fCB0YXJnZXQubmFtZSA9PSBcImxhc3RuYW1lXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtbWFyeSgpIHtcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XG4gICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMClcbiAgICAgIHsgICAgICAgIFxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHN0cikge1xuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIGVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvckNsYXNzZXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcbiAgICAgICAgZXJyb3JjbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xuICAgICAgZXJyb3JTdW1tYXJ5LmZvckVhY2goZXJyb3JzdW1tYXJ5ID0+IHtcbiAgICAgICAgZXJyb3JzdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5SXRlbXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLXN1bW1hcnktaXRlbScpO1xuICAgICAgZXJyb3JTdW1tYXJ5SXRlbXMuZm9yRWFjaChzdW1tYXJ5aXRlbSA9PiB7XG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58IClhbmFseXRpY3NDb29raWUoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGFuYWx5dGljc0Nvb2tpZT10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGFuYWx5dGljc0Nvb2tpZT1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImFuYWx5dGljc0Nvb2tpZT1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3VibWVudSdzXG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3ViaGVhZGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBTdWJtZW51IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1YmhlYWRlci5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibWVudS1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibWVudS1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1YmhlYWRlcicpXS5mb3JFYWNoKHN1Ym1lbnUgPT4gbmV3IFN1Ym1lbnUoc3VibWVudSkpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3ViaGVhZGVyLmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJoZWFkZXIuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJtZW51LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuLi9jb21wb25lbnRzL25oc3VrLWhlZS9uaHN1ay1oZWUtY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbmhzdWstaGVlL25oc3VrLWhlZS1oZWFkZXIvc3VibWVudSc7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuLy9pbXBvcnQgRGV0YWlsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWRldGFpbHNjYXJkL2RldGFpbHNjYXJkJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMnO1xuLy9pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRpbWVsaW5lL3RpbWVsaW5lJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgRmlsdGVyVGFnIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy9pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJNZW51KCk7XG4gIE5ld3NsZXR0ZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiZGF0YXNldCIsImhlYWRpbmdzIiwibGVuZ3RoIiwiYWRkQW5jaG9yc1RvUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJoZWFkaW5nIiwiaSIsImlkIiwiaW5uZXJUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicHVzaCIsInNlbGVjdG9yIiwic29tZSIsImVsIiwiY29udGFpbnMiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImNsYXNzTGlzdCIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsImxpIiwiYSIsImhyZWYiLCJoaWRkZW5FbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIkZpbHRlciIsImNvbnRhaW5lciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VXAiLCJhZGRFdmVudExpc3RlbmVycyIsImNoZWNrYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInVwZGF0ZVJlc3VsdHMiLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwIiwiYWRkIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidG9nZ2xlIiwiZmlsdGVyIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImNoZWNrZWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJMaXN0aW5nIiwic29ydCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwibGlzdGluZyIsIlRyYW5zY3JpcHQiLCJ0b2dnbGVzIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwidGhpc0hyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiZWxlbWVudCIsIm1hcEluIiwibWFwT3V0IiwiZXZlbnQiLCJtYXBDbGljayIsIml0ZW0iLCJsaW5rRXZlbnQiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJtb3ZlVG9Ub3AiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0IiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImRpc3BsYXkiLCJpc0VtcHR5IiwidmFsdWUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYmFubmVySGlkZSIsInVzZUNvb2tpZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsIlN1Ym1lbnUiLCJ0b2dnbGVMaW5rIiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImhhbmRsZVN0YXRlIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibWVudSIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTWVudSIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==