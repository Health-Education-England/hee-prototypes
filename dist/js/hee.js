/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/components/hee/hee-anchorlinks-sticky/anchorlinks-sticky.js":
/*!********************************************************************************!*\
  !*** ./app/assets/components/hee/hee-anchorlinks-sticky/anchorlinks-sticky.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
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
        window.addEventListener('scroll', function () {
          _this.toggleStickyToolbar();
        });
      }
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
      }
    }, {
      key: "toggleStickyToolbar",
      value: function toggleStickyToolbar() {
        if (!this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'))) {
          this.container.classList.add('active');
        } else {
          this.container.classList.remove('active');
        }
      }
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

  new AnchorLinksSticky(document.getElementById('hee-anchorlinks-sticky'));
});

/***/ }),

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
  * Elements with the selector '.nhsuk-listing' are passed into this class
  */
  var Listing = /*#__PURE__*/function () {
    function Listing(container) {
      _classCallCheck(this, Listing);

      this.container = container;
      this.sort = this.container.querySelector('.hee-listing__filter__sort');
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
          var submit = this.sort.querySelector('.hee-listing__filter__submit');

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

  _toConsumableArray(document.getElementsByClassName('hee-listing')).forEach(function (listing) {
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
/* harmony import */ var _components_hee_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/components/hee/hee-anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/toc */ "./app/assets/components/hee/hee-anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components







 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';

 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_hee_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7QUFFQTs7QUFDQTtDQUdBO0FBRUE7O0FBQ0FoQixRQUFRLENBQUNHLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEd0wsRUFBQUEseUVBQUk7QUFDSnpKLEVBQUFBLHVGQUFXO0FBQ1h4QyxFQUFBQSxxR0FBaUI7QUFDakIrTyxFQUFBQSwrRUFBTztBQUNQMUIsRUFBQUEsNEZBQU07QUFDTmMsRUFBQUEsa0dBQVM7QUFDVE0sRUFBQUEsNkZBQU87QUFDUDhELEVBQUFBLDJFQUFLO0FBQ0w3SyxFQUFBQSw2RUFBTTtBQUNONEssRUFBQUEsd0ZBQU07QUFDTjFJLEVBQUFBLHFGQUFVO0FBQ1ZqRixFQUFBQSwrRUFBYTtBQUNkLENBYkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbWVkaWEvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtdGFicy90YWJzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpO1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBuZXcgQW5jaG9yTGlua3NTdGlja3koZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlZS1hbmNob3JsaW5rcy1zdGlja3knKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcudGFnTmFtZSAhPT0gJ0gyJykge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3B1YmxpY2F0aW9uLXRpdGxlJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQXZvaWRzIGR1cGxpY2F0ZSBiYWNrIHRvIHRvcCBsaW5rcyB3aGVuIHN0aWNreSBpcyBwcmVzZW50LlxuICAgICAgICBpZiAoIWhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycpKSB7XG4gICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICAgIGhlYWRpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgaGVhZGluZyk7XG4gICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJywgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXAoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJDaGVja2JveGVzKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIC8vIENsb3NlIGdyb3Vwc1xuICAgICAgLy8gdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBMaXN0aW5nXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBMaXN0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy5zb3J0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnNvcnQpIHtcbiAgICAgICAgWy4uLnRoaXMuc29ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoKSB7XG4gICAgICBpZiAodGhpcy5zb3J0KSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IHRoaXMuc29ydC5xdWVyeVNlbGVjdG9yKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICBzdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoKSB7XG4gICAgICB0aGlzLnNvcnQuc3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMnO1xuaW1wb3J0IFN1Yk5hdiBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgQW5jaG9yTGlua3NTdGlja3kgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG4vL2ltcG9ydCBEZXRhaWxzQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtZGV0YWlsc2NhcmQvZGV0YWlsc2NhcmQnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicyc7XG4vL2ltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGltZWxpbmUvdGltZWxpbmUnO1xuXG4vLyBVbnNvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgRmlsdGVyVGFnIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZyc7XG5cbi8vaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cbi8vIEluaXRpYWxpemUgY29tcG9uZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgVGFicygpO1xuICBBbmNob3JMaW5rcygpO1xuICBBbmNob3JMaW5rc1N0aWNreSgpO1xuICBDb29raWVzKCk7XG4gIEZpbHRlcigpO1xuICBGaWx0ZXJUYWcoKTtcbiAgTGlzdGluZygpO1xuICBNZWRpYSgpO1xuICBOYXZNYXAoKTtcbiAgU3ViTmF2KCk7XG4gIE5ld3NsZXR0ZXIoKTtcbiAgVGFibGVDb250ZW50cygpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJnZXRFbGVtZW50QnlJZCIsIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoYXNBdHRyaWJ1dGUiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiZGF0YXNldCIsImhlYWRpbmdzIiwibGVuZ3RoIiwiYWRkQW5jaG9yc1RvUGFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaGVhZGluZyIsImkiLCJpZCIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsImNvbnRhaW5zIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4iLCJsaSIsImEiLCJocmVmIiwiaGlkZGVuRWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwiY2hpbGRyZW4iLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdCIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiaXRlbSIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsInRoaXNIcmVmIiwidGhpc1RpdGxlIiwid3JhcExpbmsiLCJtYXBJbiIsIm1hcE91dCIsIm1hcENsaWNrIiwibGlua0V2ZW50Iiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwibW92ZVRvVG9wIiwidGhpc0xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInZhbHVlIiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsImZvY3VzIiwicGFyZW50IiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwIiwiY2xlYXJDaGVja2JveGVzIiwidG9nZ2xlTGluayIsImNiIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkxpc3RpbmciLCJzb3J0IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYW5hbHl0aWNzQWNjZXB0IiwiYmFubmVySGlkZSIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiaGFuZGxlU3RhdGUiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==