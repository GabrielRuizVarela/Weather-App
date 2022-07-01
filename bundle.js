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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive; }\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(160, 159, 159, 0.4);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center; }\n  .main .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center; }\n    .main .basic #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end; }\n    .main .basic #city,\n    .main .basic #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color); }\n    .main .basic #date {\n      font-size: 0.8rem;\n      align-self: end; }\n    .main .basic #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color); }\n    .main .basic button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer; }\n    .main .basic .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center; }\n      .main .basic .search-box input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px; }\n      .main .basic .search-box input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none; }\n      .main .basic .search-box .iconify {\n        font-size: 1.5rem;\n        cursor: pointer; }\n  .main .advance,\n  .main .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem; }\n  .main .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem; }\n    .main .advance > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto); }\n      .main .advance > div .text {\n        align-self: end; }\n      .main .advance > div .number {\n        grid-column: 2/3; }\n      .main .advance > div .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3; }\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr repeat(1, minmax(2rem, 0.8fr)) auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw; }\n\n.extended {\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto; }\n  .extended .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    border: rgba(0, 0, 0, 0) solid 1px; }\n    .extended .card .day {\n      color: var(--invt-color); }\n\n.card:hover {\n  border: var(--sec-color) solid 1px;\n  box-shadow: 0px 0px 8px var(--bck-color); }\n\nfooter {\n  align-self: end;\n  justify-self: center; }\n  footer a {\n    text-decoration: none;\n    color: var(--invt-color); }\n\nimg.bg {\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px; }\n  body {\n    padding: 1rem; } }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,8BAA8B,EAAA;;AAGhC;EACE,kBAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,kDAAU,EAAA;;AAQZ;EACE,6BAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,0BAAQ;EACR,kDAAU,EAAA;;AAQZ;EACE,aAAa;EACb,4EAA4E;EAC5E,qBAAqB,EAAA;EAHvB;IAMI,aAAa;IACb,uCAAuC;IACvC,mBAAmB,EAAA;IARvB;MAUM,wBAAwB;MACxB,eAAe;MACf,eAAe,EAAA;IAZrB;;MAgBM,+BAA+B;MAC/B,gBAAgB;MAChB,kBAAkB;MAClB,wBAAwB,EAAA;IAnB9B;MAsBM,iBAAiB;MACjB,eAAe,EAAA;IAvBrB;MA0BM,iBAAiB;MACjB,uBAAuB,EAAA;IA3B7B;MA8BM,iBAAiB;MACjB,uBAAuB;MACvB,YAAY;MACZ,wBAAwB;MACxB,gBAAgB;MAChB,eAAe,EAAA;IAnCrB;MAsCM,aAAa;MACb,+BAA+B;MAC/B,mBAAmB,EAAA;MAxCzB;QA0CQ,uBAAuB;QACvB,YAAY;QACZ,yCAAyC,EAAA;MA5CjD;QA+CQ,oCAAoC;QACpC,aAAa,EAAA;MAhDrB;QAmDQ,iBAAiB;QACjB,eAAe,EAAA;EApDvB;;IA2DI,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa,EAAA;EA7DjB;IAgEI,aAAa;IACb,mBAAmB;IACnB,WAAW,EAAA;IAlEf;MAoEM,aAAa;MACb,+BAA+B;MAC/B,mCAAmC,EAAA;MAtEzC;QAwEQ,eAAe,EAAA;MAxEvB;QA2EQ,gBAAgB,EAAA;MA3ExB;QA+EQ,wBAAwB;QACxB,oBAAoB;QACpB,eAAe;QACf,kBAAkB;QAClB,aAAa,EAAA;;AAMrB;EACE,aAAa;EACb,+DAA+D;EAC/D,yBAAyB;EACzB,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,2DAA2D;EAC3D,qBAAqB;EACrB,gBAAgB,EAAA;EANlB;IAQI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,aAAa;IACb,kCAAkC,EAAA;IAdtC;MAgBM,wBAAwB,EAAA;;AAI9B;EACE,kCAAkC;EAClC,wCAAwC,EAAA;;AAG1C;EACE,eAAe;EACf,oBAAoB,EAAA;EAFtB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;;AAI5B;EACE,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EAEjB,WAAW;EACX,YAAY;EAEZ,eAAe;EACf,MAAM;EACN,OAAO,EAAA;;AAET;EACE;IACE,SAAS;IACT,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA,EACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive;\n}\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(160, 159, 159, 0.4);\n  --content: url(./clear-sky.jpg);\n  // color: var(--main-color);\n  // background-image: url(\"./clear-sky.jpg\");\n  // background-position: center; \n  // background-repeat: no-repeat;\n  // background-size: cover;\n}\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(./night-sky.jpg);\n  // background-image: url(\"./night-sky.jpg\");\n  // background-position: center; \n  // background-repeat: no-repeat; \n  // background-size: cover;\n}\n\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center;\n\n  .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center;\n    #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end;\n    }\n    #city,\n    #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color);\n    }\n    #date {\n      font-size: 0.8rem;\n      align-self: end;\n    }\n    #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color);\n    }\n    button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer;\n    }\n    .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center;\n      input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px;\n      }\n      input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none;\n      }\n      .iconify {\n        font-size: 1.5rem;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .advance,\n  .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem;\n  }\n  .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem;\n    > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto);\n      .text {\n        align-self: end;\n      }\n      .number {\n        grid-column: 2/3;\n\n      }\n      .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3;\n      }\n    }\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr repeat(1, minmax(2rem, 0.8fr)) auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw;\n}\n\n.extended {\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto;\n  .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    border: rgba(0, 0, 0, 0) solid 1px;\n    .day{\n      color: var(--invt-color);\n    }\n  }\n}\n.card:hover {\n  border: var(--sec-color) solid 1px;\n  box-shadow: 0px 0px 8px var(--bck-color);\n}\n\nfooter {\n  align-self: end;\n  justify-self: center;\n  a {\n    text-decoration: none;\n    color: var(--invt-color);\n  }\n}\n\nimg.bg{\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n\n  width: 100%;\n  height: auto;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width:1024px) {\n  img.bg{\n    left: 50%;\n    margin-left: -512px;\n  }\n  body{\n    padding: 1rem;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ087QUFDSTtBQUNOOztBQUUzQjtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5Qjs7QUFFbEU7QUFDQSx1QkFBdUIsa0RBQW9CO0FBQzNDO0FBQ0EsMEJBQTBCLCtDQUFpQixDQUFDLDRDQUFjO0FBQzFELElBQUksZ0RBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBYyxlQUFlLEdBQUcsS0FBSztBQUNoRSxHQUFHOztBQUVIO0FBQ0Esd0JBQXdCLGlEQUFtQixxQ0FBcUMsRUFBRSxnQ0FBZ0M7QUFDbEg7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NsZWFyLXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL25pZ2h0LXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvdWxlbiZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS291bGVuXFxcIiwgY3Vyc2l2ZTsgfVxcblxcbi5saWdodCB7XFxuICAtLW1haW4tY29sb3I6ICNmZmY7XFxuICAtLWludnQtY29sb3I6IHJnYigyMjcsIDE5NSwgMTY4KTtcXG4gIC0tc2VjLWNvbG9yOiByZ2IoMjM2LCAxMDksIDgzKTtcXG4gIC0tYmNrLWNvbG9yOiByZ2JhKDE2MCwgMTU5LCAxNTksIDAuNCk7XFxuICAtLWNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG5cXG4uZGFyayB7XFxuICAtLW1haW4tY29sb3I6IHJnYigzNSwgMzQsIDM0KTtcXG4gIC0taW52dC1jb2xvcjogcmdiKDIyMywgMjE1LCAyNTUpO1xcbiAgLS1zZWMtY29sb3I6IHJnYigyMzYsIDEwOSwgODMpO1xcbiAgLS1iY2stY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIC0tY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgLS1jb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyB9XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgbWlubWF4KGF1dG8sIDJmcikgbWlubWF4KGF1dG8sIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5tYWluIC5iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjY2l0eSxcXG4gICAgLm1haW4gLmJhc2ljICNkYXRlIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgfVxcbiAgICAubWFpbiAuYmFzaWMgI2RhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDsgfVxcbiAgICAubWFpbiAuYmFzaWMgI3RlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpOyB9XFxuICAgIC5tYWluIC5iYXNpYyBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5tYWluIC5iYXNpYyAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlYy1jb2xvcikgc29saWQgMXB4OyB9XFxuICAgICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAubWFpbiAuYmFzaWMgLnNlYXJjaC1ib3ggLmljb25pZnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tYWluIC5hZHZhbmNlLFxcbiAgLm1haW4gLmJhc2ljIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAycmVtOyB9XFxuICAubWFpbiAuYWR2YW5jZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdhcDogMC44cmVtOyB9XFxuICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAudGV4dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAubnVtYmVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7IH1cXG4gICAgICAubWFpbiAuYWR2YW5jZSA+IGRpdiAuaWNvbmlmeSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciByZXBlYXQoMSwgbWlubWF4KDJyZW0sIDAuOGZyKSkgYXV0byAxZnI7XFxuICBwYWRkaW5nOiA0cmVtIDJyZW0gMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5leHRlbmRlZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgLmV4dGVuZGVkIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwKSBzb2xpZCAxcHg7IH1cXG4gICAgLmV4dGVuZGVkIC5jYXJkIC5kYXkge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTsgfVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIGJvcmRlcjogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1iY2stY29sb3IpOyB9XFxuXFxuZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuICBmb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpOyB9XFxuXFxuaW1nLmJnIHtcXG4gIGNvbnRlbnQ6IHZhcigtLWNvbnRlbnQpO1xcbiAgei1pbmRleDogLTE7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGltZy5iZyB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MTJweDsgfVxcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxrQkFBYTtFQUNiLGdDQUFhO0VBQ2IsOEJBQVk7RUFDWixxQ0FBWTtFQUNaLGtEQUFVLEVBQUE7O0FBUVo7RUFDRSw2QkFBYTtFQUNiLGdDQUFhO0VBQ2IsOEJBQVk7RUFDWixxQ0FBWTtFQUNaLDBCQUFRO0VBQ1Isa0RBQVUsRUFBQTs7QUFRWjtFQUNFLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUscUJBQXFCLEVBQUE7RUFIdkI7SUFNSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1CQUFtQixFQUFBO0lBUnZCO01BVU0sd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixlQUFlLEVBQUE7SUFackI7O01BZ0JNLCtCQUErQjtNQUMvQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHdCQUF3QixFQUFBO0lBbkI5QjtNQXNCTSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0lBdkJyQjtNQTBCTSxpQkFBaUI7TUFDakIsdUJBQXVCLEVBQUE7SUEzQjdCO01BOEJNLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0lBbkNyQjtNQXNDTSxhQUFhO01BQ2IsK0JBQStCO01BQy9CLG1CQUFtQixFQUFBO01BeEN6QjtRQTBDUSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLHlDQUF5QyxFQUFBO01BNUNqRDtRQStDUSxvQ0FBb0M7UUFDcEMsYUFBYSxFQUFBO01BaERyQjtRQW1EUSxpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0VBcER2Qjs7SUEyREksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhLEVBQUE7RUE3RGpCO0lBZ0VJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0lBbEVmO01Bb0VNLGFBQWE7TUFDYiwrQkFBK0I7TUFDL0IsbUNBQW1DLEVBQUE7TUF0RXpDO1FBd0VRLGVBQWUsRUFBQTtNQXhFdkI7UUEyRVEsZ0JBQWdCLEVBQUE7TUEzRXhCO1FBK0VRLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhLEVBQUE7O0FBTXJCO0VBQ0UsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJEQUEyRDtFQUMzRCxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixrQ0FBa0MsRUFBQTtJQWR0QztNQWdCTSx3QkFBd0IsRUFBQTs7QUFJOUI7RUFDRSxrQ0FBa0M7RUFDbEMsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0VBRnRCO0lBSUkscUJBQXFCO0lBQ3JCLHdCQUF3QixFQUFBOztBQUk1QjtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQixXQUFXO0VBQ1gsWUFBWTtFQUVaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUVUO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3VsZW5cXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjI3LCAxOTUsIDE2OCk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgxNjAsIDE1OSwgMTU5LCAwLjQpO1xcbiAgLS1jb250ZW50OiB1cmwoLi9jbGVhci1za3kuanBnKTtcXG4gIC8vIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jbGVhci1za3kuanBnXFxcIik7XFxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDM1LCAzNCwgMzQpO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjIzLCAyMTUsIDI1NSk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgLS1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAtLWNvbnRlbnQ6IHVybCguL25pZ2h0LXNreS5qcGcpO1xcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL25pZ2h0LXNreS5qcGdcXFwiKTtcXG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxZnIpIG1pbm1heChhdXRvLCAyZnIpIG1pbm1heChhdXRvLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgLmJhc2ljIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0bykgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIH1cXG4gICAgI2NpdHksXFxuICAgICNkYXRlIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgfVxcbiAgICAjZGF0ZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICB9XFxuICAgICN0ZW1wIHtcXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1ib3gge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7XFxuICAgICAgfVxcbiAgICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC5pY29uaWZ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmFkdmFuY2UsXFxuICAuYmFzaWMge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuICAuYWR2YW5jZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICAgIC50ZXh0IHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICB9XFxuICAgICAgLm51bWJlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcblxcbiAgICAgIH1cXG4gICAgICAuaWNvbmlmeSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0taW52dC1jb2xvcik7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIHJlcGVhdCgxLCBtaW5tYXgoMnJlbSwgMC44ZnIpKSBhdXRvIDFmcjtcXG4gIHBhZGRpbmc6IDRyZW0gMnJlbSAwIDJyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uZXh0ZW5kZWQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICAuY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgMCkgc29saWQgMXB4O1xcbiAgICAuZGF5e1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgfVxcbiAgfVxcbn1cXG4uY2FyZDpob3ZlciB7XFxuICBib3JkZXI6IHZhcigtLXNlYy1jb2xvcikgc29saWQgMXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tYmNrLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgfVxcbn1cXG5cXG5pbWcuYmd7XFxuICBjb250ZW50OiB2YXIoLS1jb250ZW50KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAyNHB4O1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xcbiAgaW1nLmJne1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNTEycHg7XFxuICB9XFxuICBib2R5e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4dGVuZGVkPi5jYXJkJyk7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5jbGFzc0xpc3QuYWRkKCdtYXgtdGVtcCcsICdUJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NMaXN0LmFkZCgnbWluLXRlbXAnLCAnVCcpO1xuICAgIGNvbnN0IGljb24gPSBjYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25pZnknKTtcbiAgfSk7XG59O1xuZ2VuZXJhdGVDYXJkcygpO1xuXG5mdW5jdGlvbiBtYW5hZ2VUaGVtZSh7IGR0LCBzdW5yaXNlLCBzdW5zZXQgfSkge1xuICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgaWYgKGR0IDw9IHN1bnJpc2UgfHwgZHQgPj0gc3Vuc2V0KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihkYXRhLCB1bml0KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eU5hbWV9LCAke2RhdGEuY291bnRyeX1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGRhdGEuY3VycmVudC5kdCAqIDEwMDApKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJykudGV4dENvbnRlbnQgPSBgJHt1dGlscy5rZWx2aW5UbyhkYXRhLmN1cnJlbnQudGVtcCwgdW5pdCl9wrAke3VuaXR9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5jdXJyZW50LnRlbXApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZSAubnVtYmVyJykudGV4dENvbnRlbnQgPSBgJHt1dGlscy5rZWx2aW5UbyhkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSwgdW5pdCl9wrAke3VuaXR9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UgLm51bWJlcicpLnNldEF0dHJpYnV0ZSgnZGF0YS1rZWx2aW4nLCBkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eSAubnVtYmVyJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9ICVgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4gLm51bWJlcicpLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLmRhaWx5WzBdLnBvcCl9ICVgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCAubnVtYmVyJykudGV4dENvbnRlbnQgPSBgJHt1dGlscy5tZXRlclBlclNlY1RvKGRhdGEuY3VycmVudC53aW5kX3NwZWVkLCB1bml0KX0ke3VuaXQgPT09ICdDJyA/ICcga20vaCcgOiAnIE1QSCd9IGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkIC5udW1iZXInKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXMnLCBkYXRhLmN1cnJlbnQud2luZF9zcGVlZCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQ+LmRheScpLmZvckVhY2goKGRheSwgaSkgPT4ge1xuICAgIGRheS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZShkYXRhLmRhaWx5W2ldLmR0ICogMTAwMCkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQ+Lm1heC10ZW1wJykuZm9yRWFjaCgobWF4VGVtcCwgaSkgPT4ge1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgJHt1dGlscy5rZWx2aW5UbyhkYXRhLmRhaWx5W2ldLnRlbXAubWF4LCB1bml0KX3CsCR7dW5pdH0gYDtcbiAgICBtYXhUZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS1rZWx2aW4nLCBkYXRhLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPi5taW4tdGVtcCcpLmZvckVhY2goKG1pblRlbXAsIGkpID0+IHtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7dXRpbHMua2VsdmluVG8oZGF0YS5kYWlseVtpXS50ZW1wLm1pbiwgdW5pdCl9wrAke3VuaXR9IGA7XG4gICAgbWluVGVtcC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2VsdmluJywgZGF0YS5kYWlseVtpXS50ZW1wLm1pbik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkIC5pY29uaWZ5JykuZm9yRWFjaCgoaW1nLCBpKSA9PiB7XG4gICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHthcGkuZ2V0SWNvblVSTChkYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbil9KWA7XG4gICAgaW1nLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgfSk7XG4gIG1hbmFnZVRoZW1lKGRhdGEuY3VycmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBXRUFUSEVSX1VSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD8nO1xuY29uc3QgR0VPQ09ESU5HX1VSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0nO1xuY29uc3QgSUNPTl9VUkwgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJztcbmNvbnN0IEFQSV9LRVkgPSAnMmRlOTA5NjEwN2JjYWQzYWE0ZmIzYTA5MTVlNDNkMDEnOyAvLyBcIkxhdGVyIGR1cmluZyB0aGUgYmFja2VuZCBjb3Vyc2VzIHlvdSB3aWxsIGxlYXJuIHdheXMgdG8gc2VjdXJlbHkgZGVhbCB3aXRoIHRoZXNlIHRvcGljcy5cIiBUaGUgT2RpbiBQcm9qZWN0XG5cbmFzeW5jIGZ1bmN0aW9uIEFQSUNhbGwodXJsKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNpdHlUb0Nvb3JkKGNpdHkpIHtcbiAgY29uc3QgdXJsID0gYCR7R0VPQ09ESU5HX1VSTCArIGNpdHl9JmxpbWl0PTEmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuICBjb25zdCBjb29yZCA9IHtcbiAgICBuYW1lOiBkYXRhWzBdLm5hbWUsXG4gICAgY291bnRyeTogZGF0YVswXS5jb3VudHJ5LFxuICAgIGxhdDogZGF0YVswXS5sYXQsXG4gICAgbG9uOiBkYXRhWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIGNvb3JkO1xufVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KSB7XG4vLyAgIGNvbnN0IGNvb3JkID0gYXdhaXQgY2l0eVRvQ29vcmQoY2l0eSk7XG4vLyAgIGNvbnN0IHVybCA9IGAke0ZPUkVDQVNUX1VSTH1sYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mY250PTUmYXBwaWQ9JHtBUElfS0VZfWA7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuLy8gICByZXR1cm4gZGF0YTtcbi8vIH1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IGNvb3JkID0gYXdhaXQgY2l0eVRvQ29vcmQoY2l0eSk7XG4gIGNvbnN0IHVybCA9IGAke1dFQVRIRVJfVVJMfWxhdD0ke2Nvb3JkLmxhdH0mbG9uPSR7Y29vcmQubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHV0aWxzLmhhbmRsZUVycm9yKEFQSUNhbGwpKHVybCk7XG4gIGRhdGEuY2l0eU5hbWUgPSBjb29yZC5uYW1lO1xuICBkYXRhLmNvdW50cnkgPSBjb29yZC5jb3VudHJ5O1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvblVSTChpY29uQ29kZSwgc2l6ZSA9ICcyeCcpIHtcbiAgY29uc3QgdXJsID0gYCR7SUNPTl9VUkx9JHtpY29uQ29kZX1AJHtzaXplfS5wbmdgO1xuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQ29kZVdpdGhJZChpZCkge1xuICBsZXQgaWNvbkNvZGU7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgKChpZCA+PSAyMDApICYmIChpZCA8PSAyMzIpKTpcbiAgICAgIGljb25Db2RlID0gJzExZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gMzAwKSAmJiAoaWQgPD0gMzIxKSk6XG4gICAgICBpY29uQ29kZSA9ICcwOWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDUwMCkgJiYgKGlkIDw9IDUwMykpOlxuICAgICAgaWNvbkNvZGUgPSAnMTBkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKGlkID09PSA1MDQpOlxuICAgICAgaWNvbkNvZGUgPSAnMTNkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA1MTEpICYmIChpZCA8PSA1MzEpKTpcbiAgICAgIGljb25Db2RlID0gJzA5ZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gNjAwKSAmJiAoaWQgPD0gNjIyKSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDcwMSkgJiYgKGlkIDw9IDc4MSkpOlxuICAgICAgaWNvbkNvZGUgPSAnNTBkJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoZSB2YWx1ZXMgZG93biBoZXJlIGNhbiB0YWtlIHRoZSBuaWdodCB2YXJpYW50IHRvb1xuICAgIGNhc2UgKGlkID09PSA4MDApOlxuICAgICAgaWNvbkNvZGUgPSAnMDFkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA4MDEpICYmIChpZCA8PSA4MDQpKTpcbiAgICAgIGljb25Db2RlID0gJzExZCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbkNvZGUgPSAnMDFuJztcbiAgfVxuICByZXR1cm4gaWNvbkNvZGU7XG59XG5cbmV4cG9ydCB7XG4gIGdldFdlYXRoZXIsIGNpdHlUb0Nvb3JkLCBnZXRJY29uQ29kZVdpdGhJZCwgZ2V0SWNvblVSTCxcbn07XG4iLCJmdW5jdGlvbiBnZXRTdHJpbmdEYXkoVVRDRGF0ZSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoVVRDRGF0ZSAqIDEwMDApO1xuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSkuZm9ybWF0KGRhdGUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmbikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICByZXR1cm4gKC4uLnBhcmFtcykgPT4gZm4oLi4ucGFyYW1zKS5jYXRjaCgoZXIpID0+IGNvbnNvbGUuZXJyb3IoJ09wcHMuLi4nLCBlcikpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRDaXR5TmFtZShjaXR5KSB7XG4gIC8vIENyZWRpdHMgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS9ic2NvdHRuei93ZWF0aGVyLWFwcC9ibG9iL21haW4vc3JjL2pzL2FwaUZ1bmN0aW9ucy5qc1xuICBpZiAoY2l0eSkge1xuICAgIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGZvciB0aGUgYXBpIGNhbGxcbiAgICByZXR1cm4gY2l0eVxuICAgICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgJycpIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20gYmVnaW5pbmcgYW5kIGVuZCBvZiBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKC8oLFxccyspL2csICcsJykgLy8gcmVtb3ZlIGFueSB3aGl0ZSBzcGFjZSB0aGF0IGZvbGxvd3MgYSBjb21tYVxuICAgICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgJywnKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgcHJlY2VlZHMgYSBjb21tYVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJysnKTsgLy8gcmVwbGFjZSBhbnkgcmVtYWluaW5nIHdoaXRlIHNwYWNlIHdpdGggKywgc28gaXQgd29ya3MgaW4gYXBpIGNhbGxcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGtlbHZpblRvKHRlbXAsIHVuaXQpIHtcbiAgaWYgKHVuaXQgPT09ICdDJykgeyByZXR1cm4gTWF0aC5mbG9vcih0ZW1wIC0gMjczLjE1KTsgfVxuICBpZiAodW5pdCA9PT0gJ0YnKSB7IHJldHVybiBNYXRoLmZsb29yKHRlbXAgKiAoOSAvIDUpIC0gNDU5LjY3KTsgfVxuICByZXR1cm4gdGVtcDtcbn1cblxuZnVuY3Rpb24gbWV0ZXJQZXJTZWNUbyh3aW5kLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnQycpIHsgcmV0dXJuIE1hdGguZmxvb3IoMTAgKiB3aW5kICogMy42KSAvIDEwOyB9IC8vIEtNSFxuICBpZiAodW5pdCA9PT0gJ0YnKSB7IHJldHVybiBNYXRoLmZsb29yKDEwICogd2luZCAqIDIuMjM2OSkgLyAxMDsgfSAvLyBNUEhcbiAgcmV0dXJuIHdpbmQ7XG59XG5leHBvcnQge1xuICBnZXRTdHJpbmdEYXksIGhhbmRsZUVycm9yLCBmb3JtYXRDaXR5TmFtZSwga2VsdmluVG8sIG1ldGVyUGVyU2VjVG8sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9ET00nO1xuXG5sZXQgdW5pdCA9ICdDJztcbmNvbnN0IHVuaXRDaGFuZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQtY2hhbmdlcicpO1xudW5pdENoYW5nZXIudGV4dENvbnRlbnQgPSBgRGlzcGxheSBpbiDCsCR7dW5pdCA9PT0gJ0MnID8gJ0YnIDogJ0MnfWA7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCBmb3JtYXRlZENpdHkgPSB1dGlscy5mb3JtYXRDaXR5TmFtZShjaXR5KTtcbiAgaWYgKGZvcm1hdGVkQ2l0eSkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihhcGkuZ2V0V2VhdGhlcikoZm9ybWF0ZWRDaXR5KTtcbiAgICByZW5kZXIod2VhdGhlciwgdW5pdCk7XG4gIH1cbn1cblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBnZXRXZWF0aGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICB9XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldFdlYXRoZXIoc2VhcmNoQnV0dG9uLnZhbHVlKTtcbiAgc2VhcmNoQnV0dG9uLnZhbHVlID0gJyc7XG59KTtcblxuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5UJyk7XG4gIHVuaXRDaGFuZ2VyLnRleHRDb250ZW50ID0gYERpc3BsYXkgaW4gwrAke3VuaXR9YDtcbiAgdW5pdCA9IHVuaXQgPT09ICdDJyA/ICdGJyA6ICdDJztcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgY29uc3Qga2VsdmluID0gTnVtYmVyKGZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1rZWx2aW4nKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZmllbGQudGV4dENvbnRlbnQgPSBgJHt1dGlscy5rZWx2aW5UbyhrZWx2aW4sIHVuaXQpfcKwJHt1bml0fWA7XG4gIH0pO1xuXG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCAubnVtYmVyJyk7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgJHt1dGlscy5tZXRlclBlclNlY1RvKHdpbmQuZ2V0QXR0cmlidXRlKCdkYXRhLW1zJyksIHVuaXQpfSR7dW5pdCA9PT0gJ0MnID8gJyBrbS9oJyA6ICcgTVBIJ31gO1xufVxuY29uc3QgdW5pdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdC1jaGFuZ2VyJyk7XG51bml0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXRzKTtcblxuZ2V0V2VhdGhlcignVHVjdW1hbicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9