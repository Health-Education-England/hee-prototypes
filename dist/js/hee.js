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

/***/ "./app/assets/components/hee/hee-anchorlinks/toc.js":
/*!**********************************************************!*\
  !*** ./app/assets/components/hee/hee-anchorlinks/toc.js ***!
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

          while (sibling && sibling.tagName !== 'H2') {
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
/* harmony import */ var _components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/anchorlinks */ "./app/assets/components/hee/hee-anchorlinks/anchorlinks.js");
/* harmony import */ var _components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/toc */ "./app/assets/components/hee/hee-anchorlinks/toc.js");
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
  (0,_components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBbEIsQ0FBeUIsV0FBekI7QUFDQXpCLFFBQUFBLFFBQVEsQ0FBQzBGLGFBQVQsQ0FBdUIsZ0NBQXZCLEVBQXlEeEUsU0FBekQsQ0FBbUVPLE1BQW5FLENBQTBFLGFBQTFFO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQ0F4R0Q7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0NBR0E7QUFFQTs7QUFDQXpCLFFBQVEsQ0FBQzZFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEa0YsRUFBQUEseUVBQUk7QUFDSnpLLEVBQUFBLHVGQUFXO0FBQ1gwTixFQUFBQSwrRUFBTztBQUNQM0IsRUFBQUEsMkZBQU07QUFDTmUsRUFBQUEsa0dBQVM7QUFDVE0sRUFBQUEsNkZBQU87QUFDUDhELEVBQUFBLDJFQUFLO0FBQ0x0TCxFQUFBQSw2RUFBTTtBQUNOcUwsRUFBQUEsd0ZBQU07QUFDTi9JLEVBQUFBLHFGQUFVO0FBQ1Y1RixFQUFBQSwrRUFBYTtBQUNkLENBWkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcudGFnTmFtZSAhPT0gJ0gyJykge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3B1YmxpY2F0aW9uLXRpdGxlJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXInIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMnO1xuaW1wb3J0IFN1Yk5hdiBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgVGFibGVDb250ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbi8vaW1wb3J0IERldGFpbHNDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1kZXRhaWxzY2FyZC9kZXRhaWxzY2FyZCc7XG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGFicy90YWJzJztcbi8vaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10aW1lbGluZS90aW1lbGluZSc7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy9pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rcyIsImFuY2hvckxpbmtzIiwiaGFzQXR0cmlidXRlIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImRhdGFzZXQiLCJoZWFkaW5ncyIsImxlbmd0aCIsImFkZEFuY2hvcnNUb1BhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaGVhZGluZyIsImkiLCJpZCIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsImNvbnRhaW5zIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJjbGFzc0xpc3QiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJsaSIsImEiLCJocmVmIiwiaGlkZGVuRWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwic2V0QXR0cmlidXRlIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwiY2hpbGRyZW4iLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJ0YWdOYW1lIiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3QiLCJsaXN0SXRlbSIsImFkZCIsImNvbnRhaW5lciIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsIml0ZW0iLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIlRyYW5zY3JpcHQiLCJ0b2dnbGVzIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwiYWRkTGlua3NUb01hcCIsImNsZWFuU3R5bGUiLCJtYXBFdmVudExpc3RlbmVycyIsImxpbmtFdmVudExpc3RlbmVycyIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwidGhpc0hyZWYiLCJ0aGlzVGl0bGUiLCJ3cmFwTGluayIsImVsZW1lbnQiLCJtYXBJbiIsIm1hcE91dCIsImV2ZW50IiwibWFwQ2xpY2siLCJsaW5rRXZlbnQiLCJ0YXJnZXQiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJtb3ZlVG9Ub3AiLCJ0aGlzTGluayIsInByZXZlbnREZWZhdWx0IiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0Iiwid2luZG93IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwiZGlzcGxheSIsImlzRW1wdHkiLCJ2YWx1ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJwYXJlbnQiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJnZXRBdHRyaWJ1dGUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImdyb3VwIiwibGVnZW5kIiwidG9nZ2xlR3JvdXAiLCJjbGVhckNoZWNrYm94ZXMiLCJ0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5IiwidG9nZ2xlTGluayIsImNiIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwibGlzdGluZyIsIkNvb2tpZXMiLCJ1c2VDb29raWVzIiwiYmFubmVyIiwic2hvd0Nvb2tpZXMiLCJyZW1vdmVDb29raWVzIiwiaG9zdCIsImdldEhvc3QiLCJjb29raWVTdGF0dXMiLCJzZXRDb29raWVzIiwiU3RhdHVzIiwiSW4iLCJPdXQiLCJ0b2dnbGVTdGF0dXMiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImFuYWx5dGljc0FjY2VwdCIsImJhbm5lckhpZGUiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImhhbmRsZVN0YXRlIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=