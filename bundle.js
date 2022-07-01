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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive; }\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(103, 101, 101, 0.6);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center; }\n  .main .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center; }\n    .main .basic #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end; }\n    .main .basic #city,\n    .main .basic #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color); }\n    .main .basic #date {\n      font-size: 0.8rem;\n      align-self: end; }\n    .main .basic #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color); }\n    .main .basic button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer; }\n    .main .basic .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center; }\n      .main .basic .search-box input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px; }\n      .main .basic .search-box input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none; }\n      .main .basic .search-box .iconify {\n        font-size: 1.5rem;\n        cursor: pointer; }\n  .main .advance,\n  .main .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem; }\n  .main .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem; }\n    .main .advance > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto); }\n      .main .advance > div .text {\n        align-self: end; }\n      .main .advance > div .number {\n        grid-column: 2/3; }\n      .main .advance > div .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3; }\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw; }\n\n.extended {\n  padding: clamp(2rem, 4rem, 6rem);\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto; }\n  .extended .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem; }\n    .extended .card .day {\n      color: var(--invt-color); }\n\n.card:hover {\n  outline: var(--sec-color) solid 2px;\n  box-shadow: 0px 0px 8px var(--bck-color); }\n\nfooter {\n  align-self: end;\n  justify-self: center; }\n  footer a {\n    text-decoration: none;\n    color: var(--invt-color); }\n\nimg.bg {\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px; }\n  body {\n    padding: 1rem; } }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,8BAA8B,EAAA;;AAGhC;EACE,kBAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,kDAAU,EAAA;;AAGZ;EACE,6BAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,0BAAQ;EACR,kDAAU,EAAA;;AAIZ;EACE,aAAa;EACb,4EAA4E;EAC5E,qBAAqB,EAAA;EAHvB;IAMI,aAAa;IACb,uCAAuC;IACvC,mBAAmB,EAAA;IARvB;MAUM,wBAAwB;MACxB,eAAe;MACf,eAAe,EAAA;IAZrB;;MAgBM,+BAA+B;MAC/B,gBAAgB;MAChB,kBAAkB;MAClB,wBAAwB,EAAA;IAnB9B;MAsBM,iBAAiB;MACjB,eAAe,EAAA;IAvBrB;MA0BM,iBAAiB;MACjB,uBAAuB,EAAA;IA3B7B;MA8BM,iBAAiB;MACjB,uBAAuB;MACvB,YAAY;MACZ,wBAAwB;MACxB,gBAAgB;MAChB,eAAe,EAAA;IAnCrB;MAsCM,aAAa;MACb,+BAA+B;MAC/B,mBAAmB,EAAA;MAxCzB;QA0CQ,uBAAuB;QACvB,YAAY;QACZ,yCAAyC,EAAA;MA5CjD;QA+CQ,oCAAoC;QACpC,aAAa,EAAA;MAhDrB;QAmDQ,iBAAiB;QACjB,eAAe,EAAA;EApDvB;;IA2DI,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa,EAAA;EA7DjB;IAgEI,aAAa;IACb,mBAAmB;IACnB,WAAW,EAAA;IAlEf;MAoEM,aAAa;MACb,+BAA+B;MAC/B,mCAAmC,EAAA;MAtEzC;QAwEQ,eAAe,EAAA;MAxEvB;QA2EQ,gBAAgB,EAAA;MA3ExB;QA8EQ,wBAAwB;QACxB,oBAAoB;QACpB,eAAe;QACf,kBAAkB;QAClB,aAAa,EAAA;;AAMrB;EACE,aAAa;EACb,gCAAgC;EAEhC,yBAAyB;EACzB,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,2DAA2D;EAC3D,qBAAqB;EACrB,gBAAgB,EAAA;EAPlB;IASI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,aAAa,EAAA;IAdjB;MAgBM,wBAAwB,EAAA;;AAI9B;EACE,mCAAmC;EACnC,wCAAwC,EAAA;;AAG1C;EACE,eAAe;EACf,oBAAoB,EAAA;EAFtB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;;AAI5B;EACE,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EAEjB,WAAW;EACX,YAAY;EAEZ,eAAe;EACf,MAAM;EACN,OAAO,EAAA;;AAET;EACE;IACE,SAAS;IACT,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA,EACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive;\n}\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(103, 101, 101, 0.6);\n  --content: url(./clear-sky.jpg);\n}\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(./night-sky.jpg);\n}\n\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center;\n\n  .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center;\n    #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end;\n    }\n    #city,\n    #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color);\n    }\n    #date {\n      font-size: 0.8rem;\n      align-self: end;\n    }\n    #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color);\n    }\n    button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer;\n    }\n    .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center;\n      input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px;\n      }\n      input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none;\n      }\n      .iconify {\n        font-size: 1.5rem;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .advance,\n  .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem;\n  }\n  .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem;\n    > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto);\n      .text {\n        align-self: end;\n      }\n      .number {\n        grid-column: 2/3;\n      }\n      .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3;\n      }\n    }\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw;\n}\n\n.extended {\n  padding: clamp(2rem, 4rem, 6rem);\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto;\n  .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    .day {\n      color: var(--invt-color);\n    }\n  }\n}\n.card:hover {\n  outline: var(--sec-color) solid 2px;\n  box-shadow: 0px 0px 8px var(--bck-color);\n}\n\nfooter {\n  align-self: end;\n  justify-self: center;\n  a {\n    text-decoration: none;\n    color: var(--invt-color);\n  }\n}\n\nimg.bg {\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n\n  width: 100%;\n  height: auto;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n  }\n  body {\n    padding: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  // const img = document.querySelector('img');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ087QUFDSTtBQUNOOztBQUUzQjtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5Qjs7QUFFbEU7QUFDQSx1QkFBdUIsa0RBQW9CO0FBQzNDO0FBQ0EsMEJBQTBCLCtDQUFpQixDQUFDLDRDQUFjO0FBQzFELElBQUksZ0RBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBYyxlQUFlLEdBQUcsS0FBSztBQUNoRSxHQUFHOztBQUVIO0FBQ0Esd0JBQXdCLGlEQUFtQixxQ0FBcUMsRUFBRSxnQ0FBZ0M7QUFDbEg7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NsZWFyLXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL25pZ2h0LXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvdWxlbiZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS291bGVuXFxcIiwgY3Vyc2l2ZTsgfVxcblxcbi5saWdodCB7XFxuICAtLW1haW4tY29sb3I6ICNmZmY7XFxuICAtLWludnQtY29sb3I6IHJnYigyMjcsIDE5NSwgMTY4KTtcXG4gIC0tc2VjLWNvbG9yOiByZ2IoMjM2LCAxMDksIDgzKTtcXG4gIC0tYmNrLWNvbG9yOiByZ2JhKDEwMywgMTAxLCAxMDEsIDAuNik7XFxuICAtLWNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG5cXG4uZGFyayB7XFxuICAtLW1haW4tY29sb3I6IHJnYigzNSwgMzQsIDM0KTtcXG4gIC0taW52dC1jb2xvcjogcmdiKDIyMywgMjE1LCAyNTUpO1xcbiAgLS1zZWMtY29sb3I6IHJnYigyMzYsIDEwOSwgODMpO1xcbiAgLS1iY2stY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIC0tY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgLS1jb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyB9XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgbWlubWF4KGF1dG8sIDJmcikgbWlubWF4KGF1dG8sIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYWluIC5iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjY2l0eSxcXG4gICAgLm1haW4gLmJhc2ljICNkYXRlIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgfVxcbiAgICAubWFpbiAuYmFzaWMgI2RhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3RlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpOyB9XFxuICAgIC5tYWluIC5iYXNpYyBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5tYWluIC5iYXNpYyAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlYy1jb2xvcikgc29saWQgMXB4OyB9XFxuICAgICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAubWFpbiAuYmFzaWMgLnNlYXJjaC1ib3ggLmljb25pZnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tYWluIC5hZHZhbmNlLFxcbiAgLm1haW4gLmJhc2ljIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAycmVtOyB9XFxuICAubWFpbiAuYWR2YW5jZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdhcDogMC44cmVtOyB9XFxuICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAudGV4dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAubnVtYmVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAuaWNvbmlmeSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIDFmcjtcXG4gIHBhZGRpbmc6IDRyZW0gMnJlbSAwIDJyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuLmV4dGVuZGVkIHtcXG4gIHBhZGRpbmc6IGNsYW1wKDJyZW0sIDRyZW0sIDZyZW0pO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87IH1cXG4gIC5leHRlbmRlZCAuY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtOyB9XFxuICAgIC5leHRlbmRlZCAuY2FyZCAuZGF5IHtcXG4gICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7IH1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBvdXRsaW5lOiB2YXIoLS1zZWMtY29sb3IpIHNvbGlkIDJweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWJjay1jb2xvcik7IH1cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXG4gIGZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7IH1cXG5cXG5pbWcuYmcge1xcbiAgY29udGVudDogdmFyKC0tY29udGVudCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgaW1nLmJnIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTUxMnB4OyB9XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFhO0VBQ2IsZ0NBQWE7RUFDYiw4QkFBWTtFQUNaLHFDQUFZO0VBQ1osa0RBQVUsRUFBQTs7QUFHWjtFQUNFLDZCQUFhO0VBQ2IsZ0NBQWE7RUFDYiw4QkFBWTtFQUNaLHFDQUFZO0VBQ1osMEJBQVE7RUFDUixrREFBVSxFQUFBOztBQUlaO0VBQ0UsYUFBYTtFQUNiLDRFQUE0RTtFQUM1RSxxQkFBcUIsRUFBQTtFQUh2QjtJQU1JLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsbUJBQW1CLEVBQUE7SUFSdkI7TUFVTSx3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLGVBQWUsRUFBQTtJQVpyQjs7TUFnQk0sK0JBQStCO01BQy9CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsd0JBQXdCLEVBQUE7SUFuQjlCO01Bc0JNLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7SUF2QnJCO01BMEJNLGlCQUFpQjtNQUNqQix1QkFBdUIsRUFBQTtJQTNCN0I7TUE4Qk0saUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7SUFuQ3JCO01Bc0NNLGFBQWE7TUFDYiwrQkFBK0I7TUFDL0IsbUJBQW1CLEVBQUE7TUF4Q3pCO1FBMENRLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1oseUNBQXlDLEVBQUE7TUE1Q2pEO1FBK0NRLG9DQUFvQztRQUNwQyxhQUFhLEVBQUE7TUFoRHJCO1FBbURRLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7RUFwRHZCOztJQTJESSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGFBQWEsRUFBQTtFQTdEakI7SUFnRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7SUFsRWY7TUFvRU0sYUFBYTtNQUNiLCtCQUErQjtNQUMvQixtQ0FBbUMsRUFBQTtNQXRFekM7UUF3RVEsZUFBZSxFQUFBO01BeEV2QjtRQTJFUSxnQkFBZ0IsRUFBQTtNQTNFeEI7UUE4RVEsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWEsRUFBQTs7QUFNckI7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBRWhDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJEQUEyRDtFQUMzRCxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFQbEI7SUFTSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWEsRUFBQTtJQWRqQjtNQWdCTSx3QkFBd0IsRUFBQTs7QUFJOUI7RUFDRSxtQ0FBbUM7RUFDbkMsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0VBRnRCO0lBSUkscUJBQXFCO0lBQ3JCLHdCQUF3QixFQUFBOztBQUk1QjtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsWUFBWTtFQUVaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUVUO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3VsZW5cXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjI3LCAxOTUsIDE2OCk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgxMDMsIDEwMSwgMTAxLCAwLjYpO1xcbiAgLS1jb250ZW50OiB1cmwoLi9jbGVhci1za3kuanBnKTtcXG59XFxuXFxuLmRhcmsge1xcbiAgLS1tYWluLWNvbG9yOiByZ2IoMzUsIDM0LCAzNCk7XFxuICAtLWludnQtY29sb3I6IHJnYigyMjMsIDIxNSwgMjU1KTtcXG4gIC0tc2VjLWNvbG9yOiByZ2IoMjM2LCAxMDksIDgzKTtcXG4gIC0tYmNrLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAtLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIC0tY29udGVudDogdXJsKC4vbmlnaHQtc2t5LmpwZyk7XFxufVxcblxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxZnIpIG1pbm1heChhdXRvLCAyZnIpIG1pbm1heChhdXRvLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgLmJhc2ljIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0bykgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIH1cXG4gICAgI2NpdHksXFxuICAgICNkYXRlIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgfVxcbiAgICAjZGF0ZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICB9XFxuICAgICN0ZW1wIHtcXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1ib3gge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7XFxuICAgICAgfVxcbiAgICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC5pY29uaWZ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmFkdmFuY2UsXFxuICAuYmFzaWMge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuICAuYWR2YW5jZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICAgIC50ZXh0IHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICB9XFxuICAgICAgLm51bWJlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgIH1cXG4gICAgICAuaWNvbmlmeSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gMWZyO1xcblxcbiAgcGFkZGluZzogNHJlbSAycmVtIDAgMnJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5leHRlbmRlZCB7XFxuICBwYWRkaW5nOiBjbGFtcCgycmVtLCA0cmVtLCA2cmVtKTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC44cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgLmNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmNrLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLmRheSB7XFxuICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIG91dGxpbmU6IHZhcigtLXNlYy1jb2xvcikgc29saWQgMnB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tYmNrLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmcge1xcbiAgY29udGVudDogdmFyKC0tY29udGVudCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMjRweDtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICBpbWcuYmcge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNTEycHg7XFxuICB9XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZW5lcmF0ZUNhcmRzID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHRlbmRlZD4uY2FyZCcpO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NMaXN0LmFkZCgnbWF4LXRlbXAnLCAnVCcpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJywgJ1QnKTtcbiAgICBjb25zdCBpY29uID0gY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uaWZ5Jyk7XG4gIH0pO1xufTtcbmdlbmVyYXRlQ2FyZHMoKTtcblxuZnVuY3Rpb24gbWFuYWdlVGhlbWUoeyBkdCwgc3VucmlzZSwgc3Vuc2V0IH0pIHtcbiAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIGlmIChkdCA8PSBzdW5yaXNlIHx8IGR0ID49IHN1bnNldCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIoZGF0YSwgdW5pdCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHlOYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShkYXRhLmN1cnJlbnQuZHQgKiAxMDAwKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5jdXJyZW50LnRlbXAsIHVuaXQpfcKwJHt1bml0fWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJykuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuY3VycmVudC50ZW1wKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UsIHVuaXQpfcKwJHt1bml0fWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlIC5udW1iZXInKS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHkgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluIC5udW1iZXInKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5kYWlseVswXS5wb3ApfSAlYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7dXRpbHMubWV0ZXJQZXJTZWNUbyhkYXRhLmN1cnJlbnQud2luZF9zcGVlZCwgdW5pdCl9JHt1bml0ID09PSAnQycgPyAnIGttL2gnIDogJyBNUEgnfSBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCAubnVtYmVyJykuc2V0QXR0cmlidXRlKCdkYXRhLW1zJywgZGF0YS5jdXJyZW50LndpbmRfc3BlZWQpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPi5kYXknKS5mb3JFYWNoKChkYXksIGkpID0+IHtcbiAgICBkYXkudGV4dENvbnRlbnQgPSAobmV3IERhdGUoZGF0YS5kYWlseVtpXS5kdCAqIDEwMDApKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPi5tYXgtdGVtcCcpLmZvckVhY2goKG1heFRlbXAsIGkpID0+IHtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5kYWlseVtpXS50ZW1wLm1heCwgdW5pdCl9wrAke3VuaXR9IGA7XG4gICAgbWF4VGVtcC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5kYWlseVtpXS50ZW1wLm1heCk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZD4ubWluLXRlbXAnKS5mb3JFYWNoKChtaW5UZW1wLCBpKSA9PiB7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGRhdGEuZGFpbHlbaV0udGVtcC5taW4sIHVuaXQpfcKwJHt1bml0fSBgO1xuICAgIG1pblRlbXAuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuZGFpbHlbaV0udGVtcC5taW4pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCAuaWNvbmlmeScpLmZvckVhY2goKGltZywgaSkgPT4ge1xuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YXBpLmdldEljb25VUkwoZGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmljb24pfSlgO1xuICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gIH0pO1xuICBtYW5hZ2VUaGVtZShkYXRhLmN1cnJlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgV0VBVEhFUl9VUkwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/JztcbmNvbnN0IEdFT0NPRElOR19VUkwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JztcbmNvbnN0IElDT05fVVJMID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyc7XG5jb25zdCBBUElfS0VZID0gJzJkZTkwOTYxMDdiY2FkM2FhNGZiM2EwOTE1ZTQzZDAxJzsgLy8gXCJMYXRlciBkdXJpbmcgdGhlIGJhY2tlbmQgY291cnNlcyB5b3Ugd2lsbCBsZWFybiB3YXlzIHRvIHNlY3VyZWx5IGRlYWwgd2l0aCB0aGVzZSB0b3BpY3MuXCIgVGhlIE9kaW4gUHJvamVjdFxuXG5hc3luYyBmdW5jdGlvbiBBUElDYWxsKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaXR5VG9Db29yZChjaXR5KSB7XG4gIGNvbnN0IHVybCA9IGAke0dFT0NPRElOR19VUkwgKyBjaXR5fSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gO1xuICBjb25zdCBkYXRhID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoQVBJQ2FsbCkodXJsKTtcbiAgY29uc3QgY29vcmQgPSB7XG4gICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgIGNvdW50cnk6IGRhdGFbMF0uY291bnRyeSxcbiAgICBsYXQ6IGRhdGFbMF0ubGF0LFxuICAgIGxvbjogZGF0YVswXS5sb24sXG4gIH07XG4gIHJldHVybiBjb29yZDtcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSkge1xuLy8gICBjb25zdCBjb29yZCA9IGF3YWl0IGNpdHlUb0Nvb3JkKGNpdHkpO1xuLy8gICBjb25zdCB1cmwgPSBgJHtGT1JFQ0FTVF9VUkx9bGF0PSR7Y29vcmQubGF0fSZsb249JHtjb29yZC5sb259JmNudD01JmFwcGlkPSR7QVBJX0tFWX1gO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoQVBJQ2FsbCkodXJsKTtcbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCBjb29yZCA9IGF3YWl0IGNpdHlUb0Nvb3JkKGNpdHkpO1xuICBjb25zdCB1cmwgPSBgJHtXRUFUSEVSX1VSTH1sYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuICBkYXRhLmNpdHlOYW1lID0gY29vcmQubmFtZTtcbiAgZGF0YS5jb3VudHJ5ID0gY29vcmQuY291bnRyeTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldEljb25VUkwoaWNvbkNvZGUsIHNpemUgPSAnMngnKSB7XG4gIGNvbnN0IHVybCA9IGAke0lDT05fVVJMfSR7aWNvbkNvZGV9QCR7c2l6ZX0ucG5nYDtcbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbkNvZGVXaXRoSWQoaWQpIHtcbiAgbGV0IGljb25Db2RlO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlICgoaWQgPj0gMjAwKSAmJiAoaWQgPD0gMjMyKSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDMwMCkgJiYgKGlkIDw9IDMyMSkpOlxuICAgICAgaWNvbkNvZGUgPSAnMDlkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA1MDApICYmIChpZCA8PSA1MDMpKTpcbiAgICAgIGljb25Db2RlID0gJzEwZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIChpZCA9PT0gNTA0KTpcbiAgICAgIGljb25Db2RlID0gJzEzZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gNTExKSAmJiAoaWQgPD0gNTMxKSk6XG4gICAgICBpY29uQ29kZSA9ICcwOWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDYwMCkgJiYgKGlkIDw9IDYyMikpOlxuICAgICAgaWNvbkNvZGUgPSAnMTFkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA3MDEpICYmIChpZCA8PSA3ODEpKTpcbiAgICAgIGljb25Db2RlID0gJzUwZCc7XG4gICAgICBicmVhaztcbiAgICAvLyBUaGUgdmFsdWVzIGRvd24gaGVyZSBjYW4gdGFrZSB0aGUgbmlnaHQgdmFyaWFudCB0b29cbiAgICBjYXNlIChpZCA9PT0gODAwKTpcbiAgICAgIGljb25Db2RlID0gJzAxZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gODAxKSAmJiAoaWQgPD0gODA0KSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGljb25Db2RlID0gJzAxbic7XG4gIH1cbiAgcmV0dXJuIGljb25Db2RlO1xufVxuXG5leHBvcnQge1xuICBnZXRXZWF0aGVyLCBjaXR5VG9Db29yZCwgZ2V0SWNvbkNvZGVXaXRoSWQsIGdldEljb25VUkwsXG59O1xuIiwiZnVuY3Rpb24gZ2V0U3RyaW5nRGF5KFVUQ0RhdGUpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFVUQ0RhdGUgKiAxMDAwKTtcbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkYXRlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZm4pIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuICguLi5wYXJhbXMpID0+IGZuKC4uLnBhcmFtcykuY2F0Y2goKGVyKSA9PiBjb25zb2xlLmVycm9yKCdPcHBzLi4uJywgZXIpKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2l0eU5hbWUoY2l0eSkge1xuICAvLyBDcmVkaXRzIHRvOiBodHRwczovL2dpdGh1Yi5jb20vYnNjb3R0bnovd2VhdGhlci1hcHAvYmxvYi9tYWluL3NyYy9qcy9hcGlGdW5jdGlvbnMuanNcbiAgaWYgKGNpdHkpIHtcbiAgICAvLyByZW1vdmUgd2hpdGVzcGFjZSBmb3IgdGhlIGFwaSBjYWxsXG4gICAgcmV0dXJuIGNpdHlcbiAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKSAvLyByZW1vdmUgd2hpdGVzcGFjZSBmcm9tIGJlZ2luaW5nIGFuZCBlbmQgb2Ygc3RyaW5nXG4gICAgICAucmVwbGFjZSgvKCxcXHMrKS9nLCAnLCcpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBmb2xsb3dzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC8oXFxzKywpL2csICcsJykgLy8gcmVtb3ZlIGFueSB3aGl0ZSBzcGFjZSB0aGF0IHByZWNlZWRzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcrJyk7IC8vIHJlcGxhY2UgYW55IHJlbWFpbmluZyB3aGl0ZSBzcGFjZSB3aXRoICssIHNvIGl0IHdvcmtzIGluIGFwaSBjYWxsXG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBrZWx2aW5Ubyh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnQycpIHsgcmV0dXJuIE1hdGguZmxvb3IodGVtcCAtIDI3My4xNSk7IH1cbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcih0ZW1wICogKDkgLyA1KSAtIDQ1OS42Nyk7IH1cbiAgcmV0dXJuIHRlbXA7XG59XG5cbmZ1bmN0aW9uIG1ldGVyUGVyU2VjVG8od2luZCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ0MnKSB7IHJldHVybiBNYXRoLmZsb29yKDEwICogd2luZCAqIDMuNikgLyAxMDsgfSAvLyBLTUhcbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcigxMCAqIHdpbmQgKiAyLjIzNjkpIC8gMTA7IH0gLy8gTVBIXG4gIHJldHVybiB3aW5kO1xufVxuZXhwb3J0IHtcbiAgZ2V0U3RyaW5nRGF5LCBoYW5kbGVFcnJvciwgZm9ybWF0Q2l0eU5hbWUsIGtlbHZpblRvLCBtZXRlclBlclNlY1RvLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vRE9NJztcblxubGV0IHVuaXQgPSAnQyc7XG5jb25zdCB1bml0Q2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LWNoYW5nZXInKTtcbnVuaXRDaGFuZ2VyLnRleHRDb250ZW50ID0gYERpc3BsYXkgaW4gwrAke3VuaXQgPT09ICdDJyA/ICdGJyA6ICdDJ31gO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgZm9ybWF0ZWRDaXR5ID0gdXRpbHMuZm9ybWF0Q2l0eU5hbWUoY2l0eSk7XG4gIGlmIChmb3JtYXRlZENpdHkpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgdXRpbHMuaGFuZGxlRXJyb3IoYXBpLmdldFdlYXRoZXIpKGZvcm1hdGVkQ2l0eSk7XG4gICAgcmVuZGVyKHdlYXRoZXIsIHVuaXQpO1xuICB9XG59XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZ2V0V2VhdGhlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRXZWF0aGVyKHNlYXJjaEJ1dHRvbi52YWx1ZSk7XG4gIHNlYXJjaEJ1dHRvbi52YWx1ZSA9ICcnO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVCcpO1xuICB1bml0Q2hhbmdlci50ZXh0Q29udGVudCA9IGBEaXNwbGF5IGluIMKwJHt1bml0fWA7XG4gIHVuaXQgPSB1bml0ID09PSAnQycgPyAnRicgOiAnQyc7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGtlbHZpbiA9IE51bWJlcihmaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJykpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGZpZWxkLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oa2VsdmluLCB1bml0KX3CsCR7dW5pdH1gO1xuICB9KTtcblxuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLm51bWJlcicpO1xuICB3aW5kLnRleHRDb250ZW50ID0gYCR7dXRpbHMubWV0ZXJQZXJTZWNUbyh3aW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1tcycpLCB1bml0KX0ke3VuaXQgPT09ICdDJyA/ICcga20vaCcgOiAnIE1QSCd9YDtcbn1cbmNvbnN0IHVuaXRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtY2hhbmdlcicpO1xudW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0cyk7XG5cbmdldFdlYXRoZXIoJ1R1Y3VtYW4nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==