/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./clear-sky.jpg */ "./src/clear-sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./night-sky.jpg */ "./src/night-sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive; }\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(160, 159, 159, 0.4);\n  color: var(--main-color);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  color: var(--main-color);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center; }\n  .main .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center; }\n    .main .basic #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end; }\n    .main .basic #city,\n    .main .basic #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color); }\n    .main .basic #date {\n      font-size: 0.8rem;\n      align-self: end; }\n    .main .basic #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color); }\n    .main .basic button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer; }\n    .main .basic .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center; }\n      .main .basic .search-box input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px; }\n      .main .basic .search-box input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none; }\n      .main .basic .search-box .iconify {\n        font-size: 1.5rem;\n        cursor: pointer; }\n  .main .advance,\n  .main .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem; }\n  .main .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem; }\n    .main .advance > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto); }\n      .main .advance > div .text {\n        align-self: end; }\n      .main .advance > div .number {\n        grid-column: 2/3; }\n      .main .advance > div .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3; }\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr repeat(1, minmax(2rem, 0.5fr)) auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw; }\n\n.extended {\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto; }\n  .extended .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    border: rgba(0, 0, 0, 0) solid 1px; }\n    .extended .card .day {\n      color: var(--invt-color); }\n\n.card:hover {\n  border: var(--sec-color) solid 1px;\n  box-shadow: 0px 0px 8px var(--bck-color); }\n\nfooter {\n  align-self: end;\n  justify-self: center; }\n  footer a {\n    text-decoration: none;\n    color: var(--invt-color); }\n\nimg.bg {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px; }\n  body {\n    padding: 1rem; } }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,8BAA8B,EAAA;;AAGhC;EACE,kBAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,wBAAwB;EACxB,yDAAwC;EACxC,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB,EAAA;;AAGxB;EACE,6BAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,wBAAwB;EACxB,yDAAwC;EACxC,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB,EAAA;;AAIxB;EACE,aAAa;EACb,4EAA4E;EAC5E,qBAAqB,EAAA;EAHvB;IAMI,aAAa;IACb,uCAAuC;IACvC,mBAAmB,EAAA;IARvB;MAUM,wBAAwB;MACxB,eAAe;MACf,eAAe,EAAA;IAZrB;;MAgBM,+BAA+B;MAC/B,gBAAgB;MAChB,kBAAkB;MAClB,wBAAwB,EAAA;IAnB9B;MAsBM,iBAAiB;MACjB,eAAe,EAAA;IAvBrB;MA0BM,iBAAiB;MACjB,uBAAuB,EAAA;IA3B7B;MA8BM,iBAAiB;MACjB,uBAAuB;MACvB,YAAY;MACZ,wBAAwB;MACxB,gBAAgB;MAChB,eAAe,EAAA;IAnCrB;MAsCM,aAAa;MACb,+BAA+B;MAC/B,mBAAmB,EAAA;MAxCzB;QA0CQ,uBAAuB;QACvB,YAAY;QACZ,yCAAyC,EAAA;MA5CjD;QA+CQ,oCAAoC;QACpC,aAAa,EAAA;MAhDrB;QAmDQ,iBAAiB;QACjB,eAAe,EAAA;EApDvB;;IA2DI,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa,EAAA;EA7DjB;IAgEI,aAAa;IACb,mBAAmB;IACnB,WAAW,EAAA;IAlEf;MAoEM,aAAa;MACb,+BAA+B;MAC/B,mCAAmC,EAAA;MAtEzC;QAwEQ,eAAe,EAAA;MAxEvB;QA2EQ,gBAAgB,EAAA;MA3ExB;QA+EQ,wBAAwB;QACxB,oBAAoB;QACpB,eAAe;QACf,kBAAkB;QAClB,aAAa,EAAA;;AAMrB;EACE,aAAa;EACb,+DAA+D;EAC/D,yBAAyB;EACzB,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,2DAA2D;EAC3D,qBAAqB;EACrB,gBAAgB,EAAA;EANlB;IAQI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,aAAa;IACb,kCAAkC,EAAA;IAdtC;MAgBM,wBAAwB,EAAA;;AAI9B;EACE,kCAAkC;EAClC,wCAAwC,EAAA;;AAG1C;EACE,eAAe;EACf,oBAAoB,EAAA;EAFtB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;;AAI5B;EACE,gDAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EAEjB,WAAW;EACX,YAAY;EAEZ,eAAe;EACf,MAAM;EACN,OAAO,EAAA;;AAET;EACE;IACE,SAAS;IACT,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA,EACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive;\n}\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(160, 159, 159, 0.4);\n  color: var(--main-color);\n  background-image: url(\"./clear-sky.jpg\");\n  background-position: center; \n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  color: var(--main-color);\n  background-image: url(\"./night-sky.jpg\");\n  background-position: center; \n  background-repeat: no-repeat; \n  background-size: cover;\n}\n\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center;\n\n  .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center;\n    #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end;\n    }\n    #city,\n    #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color);\n    }\n    #date {\n      font-size: 0.8rem;\n      align-self: end;\n    }\n    #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color);\n    }\n    button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer;\n    }\n    .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center;\n      input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px;\n      }\n      input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none;\n      }\n      .iconify {\n        font-size: 1.5rem;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .advance,\n  .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem;\n  }\n  .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem;\n    > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto);\n      .text {\n        align-self: end;\n      }\n      .number {\n        grid-column: 2/3;\n\n      }\n      .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3;\n      }\n    }\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr repeat(1, minmax(2rem, 0.5fr)) auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw;\n}\n\n.extended {\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto;\n  .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    border: rgba(0, 0, 0, 0) solid 1px;\n    .day{\n      color: var(--invt-color);\n    }\n  }\n}\n.card:hover {\n  border: var(--sec-color) solid 1px;\n  box-shadow: 0px 0px 8px var(--bck-color);\n}\n\nfooter {\n  align-self: end;\n  justify-self: center;\n  a {\n    text-decoration: none;\n    color: var(--invt-color);\n  }\n}\n\nimg.bg{\n  content: url(./clear-sky.jpg);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n\n  width: 100%;\n  height: auto;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width:1024px) {\n  img.bg{\n    left: 50%;\n    margin-left: -512px;\n  }\n  body{\n    padding: 1rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* eslint-disable no-param-reassign */



const generateCards = () => {
  const cards = document.querySelectorAll('.extended>.card');
  cards.forEach((card) => {
    card.appendChild(document.createElement('div')).classList.add('day');
    card.appendChild(document.createElement('div')).classList.add('max-temp', 'T');
    card.appendChild(document.createElement('div')).classList.add('min-temp', 'T');
    const icon = card.appendChild(document.createElement('div'));
    icon.classList.add('iconify');
  });
};
generateCards();

function manageTheme({ dt, sunrise, sunset }) {
  if (dt <= sunrise || dt >= sunset) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
}

function render(data, unit) {
  document.querySelector('#weather-description').textContent = data.current.weather[0].description;
  document.querySelector('#city').textContent = `${data.cityName}, ${data.country}`;
  document.querySelector('#date').textContent = (new Date(data.current.dt * 1000)).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  document.querySelector('#temp').textContent = `${_utils__WEBPACK_IMPORTED_MODULE_0__.kelvinTo(data.current.temp, unit)}°${unit}`;
  document.querySelector('#temp').setAttribute('data-kelvin', data.current.temp);
  document.querySelector('#feels-like .number').textContent = `${_utils__WEBPACK_IMPORTED_MODULE_0__.kelvinTo(data.current.feels_like, unit)}°${unit}`;
  document.querySelector('#feels-like .number').setAttribute('data-kelvin', data.current.feels_like);
  document.querySelector('#humidity .number').textContent = `${data.current.humidity} %`;
  document.querySelector('#chance-of-rain .number').textContent = `${Math.floor(data.daily[0].pop)} %`;
  document.querySelector('#wind-speed .number').textContent = `${_utils__WEBPACK_IMPORTED_MODULE_0__.meterPerSecTo(data.current.wind_speed, unit)}${unit === 'C' ? ' km/h' : ' MPH'} `;
  document.querySelector('#wind-speed .number').setAttribute('data-ms', data.current.wind_speed);

  document.querySelectorAll('.card>.day').forEach((day, i) => {
    day.textContent = (new Date(data.daily[i].dt * 1000)).toLocaleDateString(undefined, { weekday: 'long' });
  });
  document.querySelectorAll('.card>.max-temp').forEach((maxTemp, i) => {
    maxTemp.textContent = `${_utils__WEBPACK_IMPORTED_MODULE_0__.kelvinTo(data.daily[i].temp.max, unit)}°${unit} `;
    maxTemp.setAttribute('data-kelvin', data.daily[i].temp.max);
  });
  document.querySelectorAll('.card>.min-temp').forEach((minTemp, i) => {
    minTemp.textContent = `${_utils__WEBPACK_IMPORTED_MODULE_0__.kelvinTo(data.daily[i].temp.min, unit)}°${unit} `;
    minTemp.setAttribute('data-kelvin', data.daily[i].temp.min);
  });

  document.querySelectorAll('.card .iconify').forEach((img, i) => {
    img.style.backgroundImage = `url(${_api__WEBPACK_IMPORTED_MODULE_1__.getIconURL(data.daily[i].weather[0].icon)})`;
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.backgroundSize = 'cover';
  });
  manageTheme(data.current);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cityToCoord": () => (/* binding */ cityToCoord),
/* harmony export */   "getIconCodeWithId": () => (/* binding */ getIconCodeWithId),
/* harmony export */   "getIconURL": () => (/* binding */ getIconURL),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
const GEOCODING_URL = 'https://api.openweathermap.org/geo/1.0/direct?q=';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = '2de9096107bcad3aa4fb3a0915e43d01'; // "Later during the backend courses you will learn ways to securely deal with these topics." The Odin Project

async function APICall(url) {
  const response = await fetch(url, { mode: 'cors' });
  const data = response.json();
  return data;
}

async function cityToCoord(city) {
  const url = `${GEOCODING_URL + city}&limit=1&appid=${API_KEY}`;
  const data = await _utils__WEBPACK_IMPORTED_MODULE_0__.handleError(APICall)(url);
  const coord = {
    name: data[0].name,
    country: data[0].country,
    lat: data[0].lat,
    lon: data[0].lon,
  };
  return coord;
}

// async function getForecast(city) {
//   const coord = await cityToCoord(city);
//   const url = `${FORECAST_URL}lat=${coord.lat}&lon=${coord.lon}&cnt=5&appid=${API_KEY}`;
//   const data = await utils.handleError(APICall)(url);
//   return data;
// }

async function getWeather(city) {
  const coord = await cityToCoord(city);
  const url = `${WEATHER_URL}lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,alerts&appid=${API_KEY}`;
  const data = await _utils__WEBPACK_IMPORTED_MODULE_0__.handleError(APICall)(url);
  data.cityName = coord.name;
  data.country = coord.country;
  return data;
}

function getIconURL(iconCode, size = '2x') {
  const url = `${ICON_URL}${iconCode}@${size}.png`;
  return url;
}

function getIconCodeWithId(id) {
  let iconCode;
  switch (true) {
    case ((id >= 200) && (id <= 232)):
      iconCode = '11d';
      break;
    case ((id >= 300) && (id <= 321)):
      iconCode = '09d';
      break;
    case ((id >= 500) && (id <= 503)):
      iconCode = '10d';
      break;
    case (id === 504):
      iconCode = '13d';
      break;
    case ((id >= 511) && (id <= 531)):
      iconCode = '09d';
      break;
    case ((id >= 600) && (id <= 622)):
      iconCode = '11d';
      break;
    case ((id >= 701) && (id <= 781)):
      iconCode = '50d';
      break;
    // The values down here can take the night variant too
    case (id === 800):
      iconCode = '01d';
      break;
    case ((id >= 801) && (id <= 804)):
      iconCode = '11d';
      break;
    default:
      iconCode = '01n';
  }
  return iconCode;
}




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCityName": () => (/* binding */ formatCityName),
/* harmony export */   "getStringDay": () => (/* binding */ getStringDay),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "kelvinTo": () => (/* binding */ kelvinTo),
/* harmony export */   "meterPerSecTo": () => (/* binding */ meterPerSecTo)
/* harmony export */ });
function getStringDay(UTCDate) {
  const date = new Date(UTCDate * 1000);
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

function handleError(fn) {
  // eslint-disable-next-line no-console
  return (...params) => fn(...params).catch((er) => console.error('Opps...', er));
}

function formatCityName(city) {
  // Credits to: https://github.com/bscottnz/weather-app/blob/main/src/js/apiFunctions.js
  if (city) {
    // remove whitespace for the api call
    return city
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
  }
  return '';
}

function kelvinTo(temp, unit) {
  if (unit === 'C') { return Math.floor(temp - 273.15); }
  if (unit === 'F') { return Math.floor(temp * (9 / 5) - 459.67); }
  return temp;
}

function meterPerSecTo(wind, unit) {
  if (unit === 'C') { return Math.floor(10 * wind * 3.6) / 10; } // KMH
  if (unit === 'F') { return Math.floor(10 * wind * 2.2369) / 10; } // MPH
  return wind;
}



/***/ }),

/***/ "./src/clear-sky.jpg":
/*!***************************!*\
  !*** ./src/clear-sky.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87ae61e872bae04f0a48.jpg";

/***/ }),

/***/ "./src/night-sky.jpg":
/*!***************************!*\
  !*** ./src/night-sky.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a00851ec633bbd1c220.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





let unit = 'C';
const unitChanger = document.querySelector('#unit-changer');
unitChanger.textContent = `Display in °${unit === 'C' ? 'F' : 'C'}`;

async function getWeather(city) {
  const formatedCity = _utils__WEBPACK_IMPORTED_MODULE_2__.formatCityName(city);
  if (formatedCity) {
    const weather = await _utils__WEBPACK_IMPORTED_MODULE_2__.handleError(_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(formatedCity);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__["default"])(weather, unit);
  }
}

const searchButton = document.querySelector('#search-input');
searchButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeather(e.target.value);
    e.target.value = '';
  }
});
document.querySelector('.search-box').addEventListener('click', () => {
  getWeather(searchButton.value);
  searchButton.value = '';
});

function toggleUnits() {
  const fields = document.querySelectorAll('.T');
  unitChanger.textContent = `Display in °${unit}`;
  unit = unit === 'C' ? 'F' : 'C';
  fields.forEach((field) => {
    const kelvin = Number(field.getAttribute('data-kelvin'));
    // eslint-disable-next-line no-param-reassign
    field.textContent = `${_utils__WEBPACK_IMPORTED_MODULE_2__.kelvinTo(kelvin, unit)}°${unit}`;
  });

  const wind = document.querySelector('#wind-speed .number');
  wind.textContent = `${_utils__WEBPACK_IMPORTED_MODULE_2__.meterPerSecTo(wind.getAttribute('data-ms'), unit)}${unit === 'C' ? ' km/h' : ' MPH'}`;
}
const unitsButton = document.querySelector('#unit-changer');
unitsButton.addEventListener('click', toggleUnits);

getWeather('Tucuman');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDTztBQUNJO0FBQ047O0FBRTNCO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCOztBQUVsRTtBQUNBLHVCQUF1QixrREFBb0I7QUFDM0M7QUFDQSwwQkFBMEIsK0NBQWlCLENBQUMsNENBQWM7QUFDMUQsSUFBSSxnREFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFjLGVBQWUsR0FBRyxLQUFLO0FBQ2hFLEdBQUc7O0FBRUg7QUFDQSx3QkFBd0IsaURBQW1CLHFDQUFxQyxFQUFFLGdDQUFnQztBQUNsSDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY2xlYXItc2t5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbmlnaHQtc2t5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S291bGVuJmZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3VsZW5cXFwiLCBjdXJzaXZlOyB9XFxuXFxuLmxpZ2h0IHtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcXG4gIC0taW52dC1jb2xvcjogcmdiKDIyNywgMTk1LCAxNjgpO1xcbiAgLS1zZWMtY29sb3I6IHJnYigyMzYsIDEwOSwgODMpO1xcbiAgLS1iY2stY29sb3I6IHJnYmEoMTYwLCAxNTksIDE1OSwgMC40KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbi5kYXJrIHtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDM1LCAzNCwgMzQpO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjIzLCAyMTUsIDI1NSk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgbWlubWF4KGF1dG8sIDJmcikgbWlubWF4KGF1dG8sIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYWluIC5iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjY2l0eSxcXG4gICAgLm1haW4gLmJhc2ljICNkYXRlIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgfVxcbiAgICAubWFpbiAuYmFzaWMgI2RhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3RlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpOyB9XFxuICAgIC5tYWluIC5iYXNpYyBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5tYWluIC5iYXNpYyAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlYy1jb2xvcikgc29saWQgMXB4OyB9XFxuICAgICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAubWFpbiAuYmFzaWMgLnNlYXJjaC1ib3ggLmljb25pZnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tYWluIC5hZHZhbmNlLFxcbiAgLm1haW4gLmJhc2ljIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAycmVtOyB9XFxuICAubWFpbiAuYWR2YW5jZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdhcDogMC44cmVtOyB9XFxuICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAudGV4dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAubnVtYmVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAuaWNvbmlmeSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciByZXBlYXQoMSwgbWlubWF4KDJyZW0sIDAuNWZyKSkgYXV0byAxZnI7XFxuICBwYWRkaW5nOiA0cmVtIDJyZW0gMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5leHRlbmRlZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgLmV4dGVuZGVkIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwKSBzb2xpZCAxcHg7IH1cXG4gICAgLmV4dGVuZGVkIC5jYXJkIC5kYXkge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTsgfVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIGJvcmRlcjogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1iY2stY29sb3IpOyB9XFxuXFxuZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuICBmb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpOyB9XFxuXFxuaW1nLmJnIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgaW1nLmJnIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTUxMnB4OyB9XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFhO0VBQ2IsZ0NBQWE7RUFDYiw4QkFBWTtFQUNaLHFDQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHlEQUF3QztFQUN4QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLDZCQUFhO0VBQ2IsZ0NBQWE7RUFDYiw4QkFBWTtFQUNaLHFDQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHlEQUF3QztFQUN4QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUl4QjtFQUNFLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUscUJBQXFCLEVBQUE7RUFIdkI7SUFNSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1CQUFtQixFQUFBO0lBUnZCO01BVU0sd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixlQUFlLEVBQUE7SUFackI7O01BZ0JNLCtCQUErQjtNQUMvQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHdCQUF3QixFQUFBO0lBbkI5QjtNQXNCTSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0lBdkJyQjtNQTBCTSxpQkFBaUI7TUFDakIsdUJBQXVCLEVBQUE7SUEzQjdCO01BOEJNLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0lBbkNyQjtNQXNDTSxhQUFhO01BQ2IsK0JBQStCO01BQy9CLG1CQUFtQixFQUFBO01BeEN6QjtRQTBDUSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLHlDQUF5QyxFQUFBO01BNUNqRDtRQStDUSxvQ0FBb0M7UUFDcEMsYUFBYSxFQUFBO01BaERyQjtRQW1EUSxpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0VBcER2Qjs7SUEyREksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhLEVBQUE7RUE3RGpCO0lBZ0VJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0lBbEVmO01Bb0VNLGFBQWE7TUFDYiwrQkFBK0I7TUFDL0IsbUNBQW1DLEVBQUE7TUF0RXpDO1FBd0VRLGVBQWUsRUFBQTtNQXhFdkI7UUEyRVEsZ0JBQWdCLEVBQUE7TUEzRXhCO1FBK0VRLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhLEVBQUE7O0FBTXJCO0VBQ0UsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJEQUEyRDtFQUMzRCxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixrQ0FBa0MsRUFBQTtJQWR0QztNQWdCTSx3QkFBd0IsRUFBQTs7QUFJOUI7RUFDRSxrQ0FBa0M7RUFDbEMsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0VBRnRCO0lBSUkscUJBQXFCO0lBQ3JCLHdCQUF3QixFQUFBOztBQUk1QjtFQUNFLGdEQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsWUFBWTtFQUVaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUVUO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3VsZW5cXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjI3LCAxOTUsIDE2OCk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgxNjAsIDE1OSwgMTU5LCAwLjQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NsZWFyLXNreS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmRhcmsge1xcbiAgLS1tYWluLWNvbG9yOiByZ2IoMzUsIDM0LCAzNCk7XFxuICAtLWludnQtY29sb3I6IHJnYigyMjMsIDIxNSwgMjU1KTtcXG4gIC0tc2VjLWNvbG9yOiByZ2IoMjM2LCAxMDksIDgzKTtcXG4gIC0tYmNrLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbmlnaHQtc2t5LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgbWlubWF4KGF1dG8sIDJmcikgbWlubWF4KGF1dG8sIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAuYmFzaWMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCBhdXRvKSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICN3ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICAjY2l0eSxcXG4gICAgI2RhdGUge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICB9XFxuICAgICNkYXRlIHtcXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIH1cXG4gICAgI3RlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWJveCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zZWMtY29sb3IpIHNvbGlkIDFweDtcXG4gICAgICB9XFxuICAgICAgaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgLmljb25pZnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuYWR2YW5jZSxcXG4gIC5iYXNpYyB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmNrLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG4gIC5hZHZhbmNlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ2FwOiAwLjhyZW07XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICAgICAgLnRleHQge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgIH1cXG4gICAgICAubnVtYmVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuXFxuICAgICAgfVxcbiAgICAgIC5pY29uaWZ5IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgcmVwZWF0KDEsIG1pbm1heCgycmVtLCAwLjVmcikpIGF1dG8gMWZyO1xcbiAgcGFkZGluZzogNHJlbSAycmVtIDAgMnJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5leHRlbmRlZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwKSBzb2xpZCAxcHg7XFxuICAgIC5kYXl7XFxuICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIGJvcmRlcjogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1iY2stY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICB9XFxufVxcblxcbmltZy5iZ3tcXG4gIGNvbnRlbnQ6IHVybCguL2NsZWFyLXNreS5qcGcpO1xcbiAgei1pbmRleDogLTE7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDI0cHg7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XFxuICBpbWcuYmd7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MTJweDtcXG4gIH1cXG4gIGJvZHl7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2VuZXJhdGVDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXh0ZW5kZWQ+LmNhcmQnKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ21heC10ZW1wJywgJ1QnKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5jbGFzc0xpc3QuYWRkKCdtaW4tdGVtcCcsICdUJyk7XG4gICAgY29uc3QgaWNvbiA9IGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbmlmeScpO1xuICB9KTtcbn07XG5nZW5lcmF0ZUNhcmRzKCk7XG5cbmZ1bmN0aW9uIG1hbmFnZVRoZW1lKHsgZHQsIHN1bnJpc2UsIHN1bnNldCB9KSB7XG4gIGlmIChkdCA8PSBzdW5yaXNlIHx8IGR0ID49IHN1bnNldCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIoZGF0YSwgdW5pdCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHlOYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShkYXRhLmN1cnJlbnQuZHQgKiAxMDAwKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5jdXJyZW50LnRlbXAsIHVuaXQpfcKwJHt1bml0fWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJykuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuY3VycmVudC50ZW1wKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UsIHVuaXQpfcKwJHt1bml0fWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlIC5udW1iZXInKS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHkgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluIC5udW1iZXInKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5kYWlseVswXS5wb3ApfSAlYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7dXRpbHMubWV0ZXJQZXJTZWNUbyhkYXRhLmN1cnJlbnQud2luZF9zcGVlZCwgdW5pdCl9JHt1bml0ID09PSAnQycgPyAnIGttL2gnIDogJyBNUEgnfSBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCAubnVtYmVyJykuc2V0QXR0cmlidXRlKCdkYXRhLW1zJywgZGF0YS5jdXJyZW50LndpbmRfc3BlZWQpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPi5kYXknKS5mb3JFYWNoKChkYXksIGkpID0+IHtcbiAgICBkYXkudGV4dENvbnRlbnQgPSAobmV3IERhdGUoZGF0YS5kYWlseVtpXS5kdCAqIDEwMDApKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPi5tYXgtdGVtcCcpLmZvckVhY2goKG1heFRlbXAsIGkpID0+IHtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5kYWlseVtpXS50ZW1wLm1heCwgdW5pdCl9wrAke3VuaXR9IGA7XG4gICAgbWF4VGVtcC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5kYWlseVtpXS50ZW1wLm1heCk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZD4ubWluLXRlbXAnKS5mb3JFYWNoKChtaW5UZW1wLCBpKSA9PiB7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGRhdGEuZGFpbHlbaV0udGVtcC5taW4sIHVuaXQpfcKwJHt1bml0fSBgO1xuICAgIG1pblRlbXAuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuZGFpbHlbaV0udGVtcC5taW4pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCAuaWNvbmlmeScpLmZvckVhY2goKGltZywgaSkgPT4ge1xuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YXBpLmdldEljb25VUkwoZGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmljb24pfSlgO1xuICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gIH0pO1xuICBtYW5hZ2VUaGVtZShkYXRhLmN1cnJlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgV0VBVEhFUl9VUkwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/JztcbmNvbnN0IEdFT0NPRElOR19VUkwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JztcbmNvbnN0IElDT05fVVJMID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyc7XG5jb25zdCBBUElfS0VZID0gJzJkZTkwOTYxMDdiY2FkM2FhNGZiM2EwOTE1ZTQzZDAxJzsgLy8gXCJMYXRlciBkdXJpbmcgdGhlIGJhY2tlbmQgY291cnNlcyB5b3Ugd2lsbCBsZWFybiB3YXlzIHRvIHNlY3VyZWx5IGRlYWwgd2l0aCB0aGVzZSB0b3BpY3MuXCIgVGhlIE9kaW4gUHJvamVjdFxuXG5hc3luYyBmdW5jdGlvbiBBUElDYWxsKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaXR5VG9Db29yZChjaXR5KSB7XG4gIGNvbnN0IHVybCA9IGAke0dFT0NPRElOR19VUkwgKyBjaXR5fSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gO1xuICBjb25zdCBkYXRhID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoQVBJQ2FsbCkodXJsKTtcbiAgY29uc3QgY29vcmQgPSB7XG4gICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgIGNvdW50cnk6IGRhdGFbMF0uY291bnRyeSxcbiAgICBsYXQ6IGRhdGFbMF0ubGF0LFxuICAgIGxvbjogZGF0YVswXS5sb24sXG4gIH07XG4gIHJldHVybiBjb29yZDtcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSkge1xuLy8gICBjb25zdCBjb29yZCA9IGF3YWl0IGNpdHlUb0Nvb3JkKGNpdHkpO1xuLy8gICBjb25zdCB1cmwgPSBgJHtGT1JFQ0FTVF9VUkx9bGF0PSR7Y29vcmQubGF0fSZsb249JHtjb29yZC5sb259JmNudD01JmFwcGlkPSR7QVBJX0tFWX1gO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoQVBJQ2FsbCkodXJsKTtcbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCBjb29yZCA9IGF3YWl0IGNpdHlUb0Nvb3JkKGNpdHkpO1xuICBjb25zdCB1cmwgPSBgJHtXRUFUSEVSX1VSTH1sYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuICBkYXRhLmNpdHlOYW1lID0gY29vcmQubmFtZTtcbiAgZGF0YS5jb3VudHJ5ID0gY29vcmQuY291bnRyeTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldEljb25VUkwoaWNvbkNvZGUsIHNpemUgPSAnMngnKSB7XG4gIGNvbnN0IHVybCA9IGAke0lDT05fVVJMfSR7aWNvbkNvZGV9QCR7c2l6ZX0ucG5nYDtcbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbkNvZGVXaXRoSWQoaWQpIHtcbiAgbGV0IGljb25Db2RlO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlICgoaWQgPj0gMjAwKSAmJiAoaWQgPD0gMjMyKSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDMwMCkgJiYgKGlkIDw9IDMyMSkpOlxuICAgICAgaWNvbkNvZGUgPSAnMDlkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA1MDApICYmIChpZCA8PSA1MDMpKTpcbiAgICAgIGljb25Db2RlID0gJzEwZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIChpZCA9PT0gNTA0KTpcbiAgICAgIGljb25Db2RlID0gJzEzZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gNTExKSAmJiAoaWQgPD0gNTMxKSk6XG4gICAgICBpY29uQ29kZSA9ICcwOWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDYwMCkgJiYgKGlkIDw9IDYyMikpOlxuICAgICAgaWNvbkNvZGUgPSAnMTFkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA3MDEpICYmIChpZCA8PSA3ODEpKTpcbiAgICAgIGljb25Db2RlID0gJzUwZCc7XG4gICAgICBicmVhaztcbiAgICAvLyBUaGUgdmFsdWVzIGRvd24gaGVyZSBjYW4gdGFrZSB0aGUgbmlnaHQgdmFyaWFudCB0b29cbiAgICBjYXNlIChpZCA9PT0gODAwKTpcbiAgICAgIGljb25Db2RlID0gJzAxZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gODAxKSAmJiAoaWQgPD0gODA0KSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGljb25Db2RlID0gJzAxbic7XG4gIH1cbiAgcmV0dXJuIGljb25Db2RlO1xufVxuXG5leHBvcnQge1xuICBnZXRXZWF0aGVyLCBjaXR5VG9Db29yZCwgZ2V0SWNvbkNvZGVXaXRoSWQsIGdldEljb25VUkwsXG59O1xuIiwiZnVuY3Rpb24gZ2V0U3RyaW5nRGF5KFVUQ0RhdGUpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFVUQ0RhdGUgKiAxMDAwKTtcbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkYXRlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZm4pIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuICguLi5wYXJhbXMpID0+IGZuKC4uLnBhcmFtcykuY2F0Y2goKGVyKSA9PiBjb25zb2xlLmVycm9yKCdPcHBzLi4uJywgZXIpKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2l0eU5hbWUoY2l0eSkge1xuICAvLyBDcmVkaXRzIHRvOiBodHRwczovL2dpdGh1Yi5jb20vYnNjb3R0bnovd2VhdGhlci1hcHAvYmxvYi9tYWluL3NyYy9qcy9hcGlGdW5jdGlvbnMuanNcbiAgaWYgKGNpdHkpIHtcbiAgICAvLyByZW1vdmUgd2hpdGVzcGFjZSBmb3IgdGhlIGFwaSBjYWxsXG4gICAgcmV0dXJuIGNpdHlcbiAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKSAvLyByZW1vdmUgd2hpdGVzcGFjZSBmcm9tIGJlZ2luaW5nIGFuZCBlbmQgb2Ygc3RyaW5nXG4gICAgICAucmVwbGFjZSgvKCxcXHMrKS9nLCAnLCcpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBmb2xsb3dzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC8oXFxzKywpL2csICcsJykgLy8gcmVtb3ZlIGFueSB3aGl0ZSBzcGFjZSB0aGF0IHByZWNlZWRzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcrJyk7IC8vIHJlcGxhY2UgYW55IHJlbWFpbmluZyB3aGl0ZSBzcGFjZSB3aXRoICssIHNvIGl0IHdvcmtzIGluIGFwaSBjYWxsXG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBrZWx2aW5Ubyh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnQycpIHsgcmV0dXJuIE1hdGguZmxvb3IodGVtcCAtIDI3My4xNSk7IH1cbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcih0ZW1wICogKDkgLyA1KSAtIDQ1OS42Nyk7IH1cbiAgcmV0dXJuIHRlbXA7XG59XG5cbmZ1bmN0aW9uIG1ldGVyUGVyU2VjVG8od2luZCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ0MnKSB7IHJldHVybiBNYXRoLmZsb29yKDEwICogd2luZCAqIDMuNikgLyAxMDsgfSAvLyBLTUhcbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcigxMCAqIHdpbmQgKiAyLjIzNjkpIC8gMTA7IH0gLy8gTVBIXG4gIHJldHVybiB3aW5kO1xufVxuZXhwb3J0IHtcbiAgZ2V0U3RyaW5nRGF5LCBoYW5kbGVFcnJvciwgZm9ybWF0Q2l0eU5hbWUsIGtlbHZpblRvLCBtZXRlclBlclNlY1RvLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vRE9NJztcblxubGV0IHVuaXQgPSAnQyc7XG5jb25zdCB1bml0Q2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LWNoYW5nZXInKTtcbnVuaXRDaGFuZ2VyLnRleHRDb250ZW50ID0gYERpc3BsYXkgaW4gwrAke3VuaXQgPT09ICdDJyA/ICdGJyA6ICdDJ31gO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgZm9ybWF0ZWRDaXR5ID0gdXRpbHMuZm9ybWF0Q2l0eU5hbWUoY2l0eSk7XG4gIGlmIChmb3JtYXRlZENpdHkpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoYXBpLmdldFdlYXRoZXIpKGZvcm1hdGVkQ2l0eSk7XG4gICAgcmVuZGVyKHdlYXRoZXIsIHVuaXQpO1xuICB9XG59XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZ2V0V2VhdGhlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRXZWF0aGVyKHNlYXJjaEJ1dHRvbi52YWx1ZSk7XG4gIHNlYXJjaEJ1dHRvbi52YWx1ZSA9ICcnO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVCcpO1xuICB1bml0Q2hhbmdlci50ZXh0Q29udGVudCA9IGBEaXNwbGF5IGluIMKwJHt1bml0fWA7XG4gIHVuaXQgPSB1bml0ID09PSAnQycgPyAnRicgOiAnQyc7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGtlbHZpbiA9IE51bWJlcihmaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJykpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGZpZWxkLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oa2VsdmluLCB1bml0KX3CsCR7dW5pdH1gO1xuICB9KTtcblxuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLm51bWJlcicpO1xuICB3aW5kLnRleHRDb250ZW50ID0gYCR7dXRpbHMubWV0ZXJQZXJTZWNUbyh3aW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1tcycpLCB1bml0KX0ke3VuaXQgPT09ICdDJyA/ICcga20vaCcgOiAnIE1QSCd9YDtcbn1cbmNvbnN0IHVuaXRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtY2hhbmdlcicpO1xudW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0cyk7XG5cbmdldFdlYXRoZXIoJ1R1Y3VtYW4nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==