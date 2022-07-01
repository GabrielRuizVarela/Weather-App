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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive; }\n\n:root {\n  --size-bezel: 0.3rem;\n  --size-radius: 5px; }\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(103, 101, 101, 0.6);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center; }\n  .main .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center; }\n    .main .basic #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end; }\n    .main .basic #city,\n    .main .basic #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color); }\n    .main .basic #date {\n      font-size: 0.8rem;\n      align-self: end; }\n    .main .basic #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color); }\n    .main .basic button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer; }\n    .main .basic .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center; }\n      .main .basic .search-box input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px; }\n      .main .basic .search-box input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none; }\n      .main .basic .search-box .iconify {\n        font-size: 1.5rem;\n        cursor: pointer; }\n  .main .advance,\n  .main .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem; }\n  .main .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem; }\n    .main .advance > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto); }\n      .main .advance > div .text {\n        align-self: end; }\n      .main .advance > div .number {\n        grid-column: 2/3; }\n      .main .advance > div .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3; }\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw; }\n\n.extended {\n  padding: clamp(2rem, 4rem, 6rem);\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto; }\n  .extended .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem; }\n    .extended .card .day {\n      color: var(--invt-color); }\n\n.card:hover {\n  outline: var(--sec-color) solid 2px;\n  box-shadow: 0px 0px 8px var(--bck-color); }\n\nfooter {\n  align-self: end;\n  justify-self: center; }\n  footer a {\n    text-decoration: none;\n    color: var(--invt-color); }\n\nimg.bg {\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n.input {\n  position: relative; }\n  .input__label {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);\n    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);\n    background: pink;\n    white-space: nowrap;\n    transform: translate(0, 0);\n    transform-origin: 0 0;\n    background: var(--sec-color);\n    transition: transform 120ms ease-in;\n    font-size: 0.8rem;\n    color: var(--invt-color);\n    border-radius: var(--size-radius); }\n  .input__field {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);\n    color: var(--sec-color);\n    background: transparent; }\n    .input__field:focus + .input__label, .input__field:not(:placeholder-shown) + .input__label {\n      transform: translate(0.25rem, -65%) scale(0.8);\n      color: var(--sec-color);\n      background: var(--invt-color); }\n\n.error {\n  display: flex;\n  opacity: 0;\n  bottom: -0.5em;\n  background: var(--invt-color);\n  width: calc(100% - 24px);\n  color: var(--sec-color);\n  position: absolute;\n  font-size: 0.8rem;\n  padding: 0.1rem;\n  justify-content: center; }\n\n.error_active {\n  opacity: 1;\n  bottom: calc(-1em - 0.2rem - 1px);\n  transition: bottom 250ms ease-in-out, opacity 200ms ease-in-out; }\n\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px; }\n  body {\n    padding: 1rem; } }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,8BAA8B,EAAA;;AAEhC;EACE,oBAAa;EACb,kBAAc,EAAA;;AAGhB;EACE,kBAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,kDAAU,EAAA;;AAGZ;EACE,6BAAa;EACb,gCAAa;EACb,8BAAY;EACZ,qCAAY;EACZ,0BAAQ;EACR,kDAAU,EAAA;;AAGZ;EACE,aAAa;EACb,4EAA4E;EAC5E,qBAAqB,EAAA;EAHvB;IAMI,aAAa;IACb,uCAAuC;IACvC,mBAAmB,EAAA;IARvB;MAUM,wBAAwB;MACxB,eAAe;MACf,eAAe,EAAA;IAZrB;;MAgBM,+BAA+B;MAC/B,gBAAgB;MAChB,kBAAkB;MAClB,wBAAwB,EAAA;IAnB9B;MAsBM,iBAAiB;MACjB,eAAe,EAAA;IAvBrB;MA0BM,iBAAiB;MACjB,uBAAuB,EAAA;IA3B7B;MA8BM,iBAAiB;MACjB,uBAAuB;MACvB,YAAY;MACZ,wBAAwB;MACxB,gBAAgB;MAChB,eAAe,EAAA;IAnCrB;MAsCM,aAAa;MACb,+BAA+B;MAC/B,mBAAmB,EAAA;MAxCzB;QA0CQ,uBAAuB;QACvB,YAAY;QACZ,yCAAyC,EAAA;MA5CjD;QA+CQ,oCAAoC;QACpC,aAAa,EAAA;MAhDrB;QAmDQ,iBAAiB;QACjB,eAAe,EAAA;EApDvB;;IA2DI,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa,EAAA;EA7DjB;IAgEI,aAAa;IACb,mBAAmB;IACnB,WAAW,EAAA;IAlEf;MAoEM,aAAa;MACb,+BAA+B;MAC/B,mCAAmC,EAAA;MAtEzC;QAwEQ,eAAe,EAAA;MAxEvB;QA2EQ,gBAAgB,EAAA;MA3ExB;QA8EQ,wBAAwB;QACxB,oBAAoB;QACpB,eAAe;QACf,kBAAkB;QAClB,aAAa,EAAA;;AAMrB;EACE,aAAa;EACb,gCAAgC;EAEhC,yBAAyB;EACzB,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,2DAA2D;EAC3D,qBAAqB;EACrB,gBAAgB,EAAA;EAPlB;IASI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,aAAa,EAAA;IAdjB;MAgBM,wBAAwB,EAAA;;AAI9B;EACE,mCAAmC;EACnC,wCAAwC,EAAA;;AAG1C;EACE,eAAe;EACf,oBAAoB,EAAA;EAFtB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;;AAI5B;EACE,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EAEjB,WAAW;EACX,YAAY;EAEZ,eAAe;EACf,MAAM;EACN,OAAO,EAAA;;AAGT;EACE,kBAAkB,EAAA;EAElB;IACE,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,qEAAqE;IACrE,0EAA0E;IAC1E,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,mCAAmC;IACnC,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC,EAAA;EAEnC;IACE,sBAAsB;IACtB,cAAc;IACd,WAAW;IACX,wDAAwD;IACxD,uBAAuB;IACvB,uBAAuB,EAAA;IANxB;MAWK,8CAA8C;MAC9C,uBAAuB;MACvB,6BAA6B,EAAA;;AAMrC;EACE,aAAa;EACb,UAAU;EACV,cAAc;EACd,6BAA6B;EAC7B,wBAAwB;EACxB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,uBAAuB,EAAA;;AAEzB;EACE,UAAU;EACV,iCAAiC;EACjC,+DAA+D,EAAA;;AAEjE;EACE;IACE,SAAS;IACT,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA,EACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\");\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Koulen\", cursive;\n}\n:root {\n  --size-bezel: 0.3rem;\n  --size-radius: 5px;\n}\n\n.light {\n  --main-color: #fff;\n  --invt-color: rgb(227, 195, 168);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(103, 101, 101, 0.6);\n  --content: url(./clear-sky.jpg);\n}\n\n.dark {\n  --main-color: rgb(35, 34, 34);\n  --invt-color: rgb(223, 215, 255);\n  --sec-color: rgb(236, 109, 83);\n  --bck-color: rgba(255, 255, 255, 0.4);\n  --color: var(--main-color);\n  --content: url(./night-sky.jpg);\n}\n\n.main {\n  display: grid;\n  grid-template-columns: minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 1fr);\n  justify-items: center;\n\n  .basic {\n    display: grid;\n    grid-template-rows: repeat(6, auto) 1fr;\n    align-items: center;\n    #weather-description {\n      color: var(--invt-color);\n      font-size: 2rem;\n      align-self: end;\n    }\n    #city,\n    #date {\n      font-family: \"Lato\", sans-serif;\n      font-weight: 500;\n      font-style: italic;\n      color: var(--main-color);\n    }\n    #date {\n      font-size: 0.8rem;\n      align-self: end;\n    }\n    #temp {\n      font-size: 2.5rem;\n      color: var(--sec-color);\n    }\n    button {\n      font-size: 1.1rem;\n      background: transparent;\n      border: none;\n      color: var(--main-color);\n      text-align: left;\n      cursor: pointer;\n    }\n    .search-box {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: center;\n      input {\n        background: transparent;\n        border: none;\n        border-bottom: var(--sec-color) solid 1px;\n      }\n      input:focus {\n        background: rgba(255, 255, 255, 0.4);\n        outline: none;\n      }\n      .iconify {\n        font-size: 1.5rem;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .advance,\n  .basic {\n    color: var(--main-color);\n    background: var(--bck-color);\n    padding: 2rem;\n  }\n  .advance {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.8rem;\n    > div {\n      display: grid;\n      grid-template-columns: auto 1fr;\n      grid-template-rows: repeat(2, auto);\n      .text {\n        align-self: end;\n      }\n      .number {\n        grid-column: 2/3;\n      }\n      .iconify {\n        color: var(--invt-color);\n        margin-right: 0.5rem;\n        font-size: 2rem;\n        align-self: center;\n        grid-row: 1/3;\n      }\n    }\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr auto 1fr;\n\n  padding: 4rem 2rem 0 2rem;\n  height: 100vh;\n  width: 100vw;\n}\n\n.extended {\n  padding: clamp(2rem, 4rem, 6rem);\n  font-size: 1.4rem;\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  justify-items: center;\n  overflow-y: auto;\n  .card {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n    width: 120px;\n    background-color: var(--bck-color);\n    padding: 1rem;\n    .day {\n      color: var(--invt-color);\n    }\n  }\n}\n.card:hover {\n  outline: var(--sec-color) solid 2px;\n  box-shadow: 0px 0px 8px var(--bck-color);\n}\n\nfooter {\n  align-self: end;\n  justify-self: center;\n  a {\n    text-decoration: none;\n    color: var(--invt-color);\n  }\n}\n\nimg.bg {\n  content: var(--content);\n  z-index: -1;\n  min-height: 100%;\n  min-width: 1024px;\n\n  width: 100%;\n  height: auto;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.input {\n  position: relative;\n\n  &__label {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);\n    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);\n    background: pink;\n    white-space: nowrap;\n    transform: translate(0, 0);\n    transform-origin: 0 0;\n    background: var(--sec-color);\n    transition: transform 120ms ease-in;\n    font-size: 0.8rem;\n    color: var(--invt-color);\n    border-radius: var(--size-radius);\n  }\n  &__field {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);\n    color: var(--sec-color);\n    background: transparent;\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      & + .input__label {\n        transform: translate(0.25rem, -65%) scale(0.8);\n        color: var(--sec-color);\n        background: var(--invt-color);\n      }\n    }\n  }\n}\n\n.error {\n  display: flex;\n  opacity: 0;\n  bottom: -0.5em;\n  background: var(--invt-color);\n  width: calc(100% - 24px);\n  color: var(--sec-color);\n  position: absolute;\n  font-size: 0.8rem;\n  padding: 0.1rem;\n  justify-content: center;\n}\n.error_active {\n  opacity: 1;\n  bottom: calc(-1em - 0.2rem - 1px);\n  transition: bottom 250ms ease-in-out, opacity 200ms ease-in-out;\n}\n@media screen and (max-width: 1024px) {\n  img.bg {\n    left: 50%;\n    margin-left: -512px;\n  }\n  body {\n    padding: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
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

function render([data, unit]) {
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

function renderError(er) {
  const errorField = document.querySelector('.search-box>.error');
  if (er.name === 'TypeError') {
    errorField.classList.add('error_active');
    errorField.textContent = 'Please enter a valid location';
  }
}

_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('data arrived', render);
_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('error', renderError);


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

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubsub = {
  events: {},
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  unsubscribe(eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((f) => f !== fn);
    }
  },
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => f(data));
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);


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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


function getStringDay(UTCDate) {
  const date = new Date(UTCDate * 1000);
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

function handleError(fn) {
  // eslint-disable-next-line no-console
  return (...params) => fn(...params).catch((er) => {
    // console.error('Opps...', er);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('error', er);
  });
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* eslint-disable no-unused-vars */






let unit = 'C';
const unitChanger = document.querySelector('#unit-changer');
unitChanger.textContent = `Display in °${unit === 'C' ? 'F' : 'C'}`;
document.documentElement.classList.add('light');

async function getWeather(city) {
  const formatedCity = _utils__WEBPACK_IMPORTED_MODULE_2__.formatCityName(city);
  if (formatedCity) {
    const weather = await _utils__WEBPACK_IMPORTED_MODULE_2__.handleError(_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(formatedCity);
    _pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].publish('data arrived', [weather, unit]);
  }
}

const searchButton = document.querySelector('#search-input');
searchButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeather(e.target.value);
    e.target.value = '';
    document.querySelector('.search-box>.error').classList.remove('error_active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NsZWFyLXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL25pZ2h0LXNreS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvdWxlbiZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS291bGVuXFxcIiwgY3Vyc2l2ZTsgfVxcblxcbjpyb290IHtcXG4gIC0tc2l6ZS1iZXplbDogMC4zcmVtO1xcbiAgLS1zaXplLXJhZGl1czogNXB4OyB9XFxuXFxuLmxpZ2h0IHtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcXG4gIC0taW52dC1jb2xvcjogcmdiKDIyNywgMTk1LCAxNjgpO1xcbiAgLS1zZWMtY29sb3I6IHJnYigyMzYsIDEwOSwgODMpO1xcbiAgLS1iY2stY29sb3I6IHJnYmEoMTAzLCAxMDEsIDEwMSwgMC42KTtcXG4gIC0tY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcblxcbi5kYXJrIHtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDM1LCAzNCwgMzQpO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjIzLCAyMTUsIDI1NSk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgLS1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAtLWNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IH1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMWZyKSBtaW5tYXgoYXV0bywgMmZyKSBtaW5tYXgoYXV0bywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgfVxcbiAgLm1haW4gLmJhc2ljIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgYXV0bykgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7IH1cXG4gICAgLm1haW4gLmJhc2ljICNjaXR5LFxcbiAgICAubWFpbiAuYmFzaWMgI2RhdGUge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjZGF0ZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kOyB9XFxuICAgIC5tYWluIC5iYXNpYyAjdGVtcCB7XFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7IH1cXG4gICAgLm1haW4gLmJhc2ljIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubWFpbiAuYmFzaWMgLnNlYXJjaC1ib3gge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgLm1haW4gLmJhc2ljIC5zZWFyY2gtYm94IGlucHV0IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2VjLWNvbG9yKSBzb2xpZCAxcHg7IH1cXG4gICAgICAubWFpbiAuYmFzaWMgLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIC5tYWluIC5iYXNpYyAuc2VhcmNoLWJveCAuaWNvbmlmeSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1haW4gLmFkdmFuY2UsXFxuICAubWFpbiAuYmFzaWMge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDJyZW07IH1cXG4gIC5tYWluIC5hZHZhbmNlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ2FwOiAwLjhyZW07IH1cXG4gICAgLm1haW4gLmFkdmFuY2UgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTsgfVxcbiAgICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IC50ZXh0IHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDsgfVxcbiAgICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IC5udW1iZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMzsgfVxcbiAgICAgIC5tYWluIC5hZHZhbmNlID4gZGl2IC5pY29uaWZ5IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEvMzsgfVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gMWZyO1xcbiAgcGFkZGluZzogNHJlbSAycmVtIDAgMnJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG4uZXh0ZW5kZWQge1xcbiAgcGFkZGluZzogY2xhbXAoMnJlbSwgNHJlbSwgNnJlbSk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgLmV4dGVuZGVkIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07IH1cXG4gICAgLmV4dGVuZGVkIC5jYXJkIC5kYXkge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTsgfVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIG91dGxpbmU6IHZhcigtLXNlYy1jb2xvcikgc29saWQgMnB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tYmNrLWNvbG9yKTsgfVxcblxcbmZvb3RlciB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgfVxcbiAgZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTsgfVxcblxcbmltZy5iZyB7XFxuICBjb250ZW50OiB2YXIoLS1jb250ZW50KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLmlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmlucHV0X19sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpemUtYmV6ZWwpICogMC43NSkgY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDAuNSk7XFxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDAuNzUgKyAzcHgpIGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWMtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZS1pbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS1yYWRpdXMpOyB9XFxuICAuaW5wdXRfX2ZpZWxkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpemUtYmV6ZWwpICogMS41KSB2YXIoLS1zaXplLWJlemVsKTtcXG4gICAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5pbnB1dF9fZmllbGQ6Zm9jdXMgKyAuaW5wdXRfX2xhYmVsLCAuaW5wdXRfX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmlucHV0X19sYWJlbCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4yNXJlbSwgLTY1JSkgc2NhbGUoMC44KTtcXG4gICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnZ0LWNvbG9yKTsgfVxcblxcbi5lcnJvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvdHRvbTogLTAuNWVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW52dC1jb2xvcik7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCk7XFxuICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZXJyb3JfYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3R0b206IGNhbGMoLTFlbSAtIDAuMnJlbSAtIDFweCk7XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMjUwbXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGltZy5iZyB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MTJweDsgfVxcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxvQkFBYTtFQUNiLGtCQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWE7RUFDYixnQ0FBYTtFQUNiLDhCQUFZO0VBQ1oscUNBQVk7RUFDWixrREFBVSxFQUFBOztBQUdaO0VBQ0UsNkJBQWE7RUFDYixnQ0FBYTtFQUNiLDhCQUFZO0VBQ1oscUNBQVk7RUFDWiwwQkFBUTtFQUNSLGtEQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsNEVBQTRFO0VBQzVFLHFCQUFxQixFQUFBO0VBSHZCO0lBTUksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUIsRUFBQTtJQVJ2QjtNQVVNLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsZUFBZSxFQUFBO0lBWnJCOztNQWdCTSwrQkFBK0I7TUFDL0IsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQix3QkFBd0IsRUFBQTtJQW5COUI7TUFzQk0saUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtJQXZCckI7TUEwQk0saUJBQWlCO01BQ2pCLHVCQUF1QixFQUFBO0lBM0I3QjtNQThCTSxpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtJQW5DckI7TUFzQ00sYUFBYTtNQUNiLCtCQUErQjtNQUMvQixtQkFBbUIsRUFBQTtNQXhDekI7UUEwQ1EsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWix5Q0FBeUMsRUFBQTtNQTVDakQ7UUErQ1Esb0NBQW9DO1FBQ3BDLGFBQWEsRUFBQTtNQWhEckI7UUFtRFEsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQXBEdkI7O0lBMkRJLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsYUFBYSxFQUFBO0VBN0RqQjtJQWdFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtJQWxFZjtNQW9FTSxhQUFhO01BQ2IsK0JBQStCO01BQy9CLG1DQUFtQyxFQUFBO01BdEV6QztRQXdFUSxlQUFlLEVBQUE7TUF4RXZCO1FBMkVRLGdCQUFnQixFQUFBO01BM0V4QjtRQThFUSx3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYSxFQUFBOztBQU1yQjtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFFaEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkRBQTJEO0VBQzNELHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtFQVBsQjtJQVNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsYUFBYSxFQUFBO0lBZGpCO01BZ0JNLHdCQUF3QixFQUFBOztBQUk5QjtFQUNFLG1DQUFtQztFQUNuQyx3Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7RUFGdEI7SUFJSSxxQkFBcUI7SUFDckIsd0JBQXdCLEVBQUE7O0FBSTVCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBRWpCLFdBQVc7RUFDWCxZQUFZO0VBRVosZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1Q7RUFDRSxrQkFBa0IsRUFBQTtFQUVsQjtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLHFFQUFxRTtJQUNyRSwwRUFBMEU7SUFDMUUsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQ0FBaUMsRUFBQTtFQUVuQztJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLHdEQUF3RDtJQUN4RCx1QkFBdUI7SUFDdkIsdUJBQXVCLEVBQUE7SUFOeEI7TUFXSyw4Q0FBOEM7TUFDOUMsdUJBQXVCO01BQ3ZCLDZCQUE2QixFQUFBOztBQU1yQztFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsK0RBQStELEVBQUE7O0FBRWpFO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb3VsZW5cXFwiLCBjdXJzaXZlO1xcbn1cXG46cm9vdCB7XFxuICAtLXNpemUtYmV6ZWw6IDAuM3JlbTtcXG4gIC0tc2l6ZS1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxpZ2h0IHtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZjtcXG4gIC0taW52dC1jb2xvcjogcmdiKDIyNywgMTk1LCAxNjgpO1xcbiAgLS1zZWMtY29sb3I6IHJnYigyMzYsIDEwOSwgODMpO1xcbiAgLS1iY2stY29sb3I6IHJnYmEoMTAzLCAxMDEsIDEwMSwgMC42KTtcXG4gIC0tY29udGVudDogdXJsKC4vY2xlYXItc2t5LmpwZyk7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDM1LCAzNCwgMzQpO1xcbiAgLS1pbnZ0LWNvbG9yOiByZ2IoMjIzLCAyMTUsIDI1NSk7XFxuICAtLXNlYy1jb2xvcjogcmdiKDIzNiwgMTA5LCA4Myk7XFxuICAtLWJjay1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgLS1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAtLWNvbnRlbnQ6IHVybCguL25pZ2h0LXNreS5qcGcpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMWZyKSBtaW5tYXgoYXV0bywgMmZyKSBtaW5tYXgoYXV0bywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIC5iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIGF1dG8pIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICB9XFxuICAgICNjaXR5LFxcbiAgICAjZGF0ZSB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIH1cXG4gICAgI2RhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICAjdGVtcCB7XFxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtYm94IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlYy1jb2xvcikgc29saWQgMXB4O1xcbiAgICAgIH1cXG4gICAgICBpbnB1dDpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAuaWNvbmlmeSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5hZHZhbmNlLFxcbiAgLmJhc2ljIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2stY29sb3IpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcbiAgLmFkdmFuY2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgICAudGV4dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgfVxcbiAgICAgIC5udW1iZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICB9XFxuICAgICAgLmljb25pZnkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXJvdzogMS8zO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIDFmcjtcXG5cXG4gIHBhZGRpbmc6IDRyZW0gMnJlbSAwIDJyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uZXh0ZW5kZWQge1xcbiAgcGFkZGluZzogY2xhbXAoMnJlbSwgNHJlbSwgNnJlbSk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuOHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJjay1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIC5kYXkge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgfVxcbiAgfVxcbn1cXG4uY2FyZDpob3ZlciB7XFxuICBvdXRsaW5lOiB2YXIoLS1zZWMtY29sb3IpIHNvbGlkIDJweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWJjay1jb2xvcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuaW1nLmJnIHtcXG4gIGNvbnRlbnQ6IHZhcigtLWNvbnRlbnQpO1xcbiAgei1pbmRleDogLTE7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDI0cHg7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAmX19sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpemUtYmV6ZWwpICogMC43NSkgY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDAuNSk7XFxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDAuNzUgKyAzcHgpIGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWMtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZS1pbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1pbnZ0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS1yYWRpdXMpO1xcbiAgfVxcbiAgJl9fZmllbGQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAxLjUpIHZhcigtLXNpemUtYmV6ZWwpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICY6Zm9jdXMsXFxuICAgICY6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgICAgICYgKyAuaW5wdXRfX2xhYmVsIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMjVyZW0sIC02NSUpIHNjYWxlKDAuOCk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWludnQtY29sb3IpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3R0b206IC0wLjVlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWludnQtY29sb3IpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xcbiAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZXJyb3JfYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3R0b206IGNhbGMoLTFlbSAtIDAuMnJlbSAtIDFweCk7XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMjUwbXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgaW1nLmJnIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTUxMnB4O1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWInO1xuXG5jb25zdCBnZW5lcmF0ZUNhcmRzID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHRlbmRlZD4uY2FyZCcpO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NMaXN0LmFkZCgnbWF4LXRlbXAnLCAnVCcpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJywgJ1QnKTtcbiAgICBjb25zdCBpY29uID0gY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uaWZ5Jyk7XG4gIH0pO1xufTtcbmdlbmVyYXRlQ2FyZHMoKTtcblxuZnVuY3Rpb24gbWFuYWdlVGhlbWUoeyBkdCwgc3VucmlzZSwgc3Vuc2V0IH0pIHtcbiAgaWYgKGR0IDw9IHN1bnJpc2UgfHwgZHQgPj0gc3Vuc2V0KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihbZGF0YSwgdW5pdF0pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5TmFtZX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudGV4dENvbnRlbnQgPSAobmV3IERhdGUoZGF0YS5jdXJyZW50LmR0ICogMTAwMCkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKS50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGRhdGEuY3VycmVudC50ZW1wLCB1bml0KX3CsCR7dW5pdH1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1rZWx2aW4nLCBkYXRhLmN1cnJlbnQudGVtcCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlIC5udW1iZXInKS50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGRhdGEuY3VycmVudC5mZWVsc19saWtlLCB1bml0KX3CsCR7dW5pdH1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZSAubnVtYmVyJykuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuY3VycmVudC5mZWVsc19saWtlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5IC5udW1iZXInKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0gJWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbiAubnVtYmVyJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuZGFpbHlbMF0ucG9wKX0gJWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkIC5udW1iZXInKS50ZXh0Q29udGVudCA9IGAke3V0aWxzLm1ldGVyUGVyU2VjVG8oZGF0YS5jdXJyZW50LndpbmRfc3BlZWQsIHVuaXQpfSR7dW5pdCA9PT0gJ0MnID8gJyBrbS9oJyA6ICcgTVBIJ30gYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLm51bWJlcicpLnNldEF0dHJpYnV0ZSgnZGF0YS1tcycsIGRhdGEuY3VycmVudC53aW5kX3NwZWVkKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZD4uZGF5JykuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XG4gICAgZGF5LnRleHRDb250ZW50ID0gKG5ldyBEYXRlKGRhdGEuZGFpbHlbaV0uZHQgKiAxMDAwKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZD4ubWF4LXRlbXAnKS5mb3JFYWNoKChtYXhUZW1wLCBpKSA9PiB7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGRhdGEuZGFpbHlbaV0udGVtcC5tYXgsIHVuaXQpfcKwJHt1bml0fSBgO1xuICAgIG1heFRlbXAuc2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicsIGRhdGEuZGFpbHlbaV0udGVtcC5tYXgpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQ+Lm1pbi10ZW1wJykuZm9yRWFjaCgobWluVGVtcCwgaSkgPT4ge1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgJHt1dGlscy5rZWx2aW5UbyhkYXRhLmRhaWx5W2ldLnRlbXAubWluLCB1bml0KX3CsCR7dW5pdH0gYDtcbiAgICBtaW5UZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS1rZWx2aW4nLCBkYXRhLmRhaWx5W2ldLnRlbXAubWluKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQgLmljb25pZnknKS5mb3JFYWNoKChpbWcsIGkpID0+IHtcbiAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2FwaS5nZXRJY29uVVJMKGRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5pY29uKX0pYDtcbiAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIGltZy5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICB9KTtcbiAgbWFuYWdlVGhlbWUoZGF0YS5jdXJyZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRXJyb3IoZXIpIHtcbiAgY29uc3QgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94Pi5lcnJvcicpO1xuICBpZiAoZXIubmFtZSA9PT0gJ1R5cGVFcnJvcicpIHtcbiAgICBlcnJvckZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Vycm9yX2FjdGl2ZScpO1xuICAgIGVycm9yRmllbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24nO1xuICB9XG59XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ2RhdGEgYXJyaXZlZCcsIHJlbmRlcik7XG5wdWJzdWIuc3Vic2NyaWJlKCdlcnJvcicsIHJlbmRlckVycm9yKTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBXRUFUSEVSX1VSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD8nO1xuY29uc3QgR0VPQ09ESU5HX1VSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0nO1xuY29uc3QgSUNPTl9VUkwgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJztcbmNvbnN0IEFQSV9LRVkgPSAnMmRlOTA5NjEwN2JjYWQzYWE0ZmIzYTA5MTVlNDNkMDEnOyAvLyBcIkxhdGVyIGR1cmluZyB0aGUgYmFja2VuZCBjb3Vyc2VzIHlvdSB3aWxsIGxlYXJuIHdheXMgdG8gc2VjdXJlbHkgZGVhbCB3aXRoIHRoZXNlIHRvcGljcy5cIiBUaGUgT2RpbiBQcm9qZWN0XG5cbmFzeW5jIGZ1bmN0aW9uIEFQSUNhbGwodXJsKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNpdHlUb0Nvb3JkKGNpdHkpIHtcbiAgY29uc3QgdXJsID0gYCR7R0VPQ09ESU5HX1VSTCArIGNpdHl9JmxpbWl0PTEmYXBwaWQ9JHtBUElfS0VZfWA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuICBjb25zdCBjb29yZCA9IHtcbiAgICBuYW1lOiBkYXRhWzBdLm5hbWUsXG4gICAgY291bnRyeTogZGF0YVswXS5jb3VudHJ5LFxuICAgIGxhdDogZGF0YVswXS5sYXQsXG4gICAgbG9uOiBkYXRhWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIGNvb3JkO1xufVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KSB7XG4vLyAgIGNvbnN0IGNvb3JkID0gYXdhaXQgY2l0eVRvQ29vcmQoY2l0eSk7XG4vLyAgIGNvbnN0IHVybCA9IGAke0ZPUkVDQVNUX1VSTH1sYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mY250PTUmYXBwaWQ9JHtBUElfS0VZfWA7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihBUElDYWxsKSh1cmwpO1xuLy8gICByZXR1cm4gZGF0YTtcbi8vIH1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IGNvb3JkID0gYXdhaXQgY2l0eVRvQ29vcmQoY2l0eSk7XG4gIGNvbnN0IHVybCA9IGAke1dFQVRIRVJfVVJMfWxhdD0ke2Nvb3JkLmxhdH0mbG9uPSR7Y29vcmQubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHV0aWxzLmhhbmRsZUVycm9yKEFQSUNhbGwpKHVybCk7XG4gIGRhdGEuY2l0eU5hbWUgPSBjb29yZC5uYW1lO1xuICBkYXRhLmNvdW50cnkgPSBjb29yZC5jb3VudHJ5O1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvblVSTChpY29uQ29kZSwgc2l6ZSA9ICcyeCcpIHtcbiAgY29uc3QgdXJsID0gYCR7SUNPTl9VUkx9JHtpY29uQ29kZX1AJHtzaXplfS5wbmdgO1xuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uQ29kZVdpdGhJZChpZCkge1xuICBsZXQgaWNvbkNvZGU7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgKChpZCA+PSAyMDApICYmIChpZCA8PSAyMzIpKTpcbiAgICAgIGljb25Db2RlID0gJzExZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gMzAwKSAmJiAoaWQgPD0gMzIxKSk6XG4gICAgICBpY29uQ29kZSA9ICcwOWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDUwMCkgJiYgKGlkIDw9IDUwMykpOlxuICAgICAgaWNvbkNvZGUgPSAnMTBkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKGlkID09PSA1MDQpOlxuICAgICAgaWNvbkNvZGUgPSAnMTNkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA1MTEpICYmIChpZCA8PSA1MzEpKTpcbiAgICAgIGljb25Db2RlID0gJzA5ZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgoaWQgPj0gNjAwKSAmJiAoaWQgPD0gNjIyKSk6XG4gICAgICBpY29uQ29kZSA9ICcxMWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoKGlkID49IDcwMSkgJiYgKGlkIDw9IDc4MSkpOlxuICAgICAgaWNvbkNvZGUgPSAnNTBkJztcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoZSB2YWx1ZXMgZG93biBoZXJlIGNhbiB0YWtlIHRoZSBuaWdodCB2YXJpYW50IHRvb1xuICAgIGNhc2UgKGlkID09PSA4MDApOlxuICAgICAgaWNvbkNvZGUgPSAnMDFkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKChpZCA+PSA4MDEpICYmIChpZCA8PSA4MDQpKTpcbiAgICAgIGljb25Db2RlID0gJzExZCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbkNvZGUgPSAnMDFuJztcbiAgfVxuICByZXR1cm4gaWNvbkNvZGU7XG59XG5cbmV4cG9ydCB7XG4gIGdldFdlYXRoZXIsIGNpdHlUb0Nvb3JkLCBnZXRJY29uQ29kZVdpdGhJZCwgZ2V0SWNvblVSTCxcbn07XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZikgPT4gZihkYXRhKSk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0RheShVVENEYXRlKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShVVENEYXRlICogMTAwMCk7XG4gIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGZuKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiAoLi4ucGFyYW1zKSA9PiBmbiguLi5wYXJhbXMpLmNhdGNoKChlcikgPT4ge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoJ09wcHMuLi4nLCBlcik7XG4gICAgcHVic3ViLnB1Ymxpc2goJ2Vycm9yJywgZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2l0eU5hbWUoY2l0eSkge1xuICAvLyBDcmVkaXRzIHRvOiBodHRwczovL2dpdGh1Yi5jb20vYnNjb3R0bnovd2VhdGhlci1hcHAvYmxvYi9tYWluL3NyYy9qcy9hcGlGdW5jdGlvbnMuanNcbiAgaWYgKGNpdHkpIHtcbiAgICAvLyByZW1vdmUgd2hpdGVzcGFjZSBmb3IgdGhlIGFwaSBjYWxsXG4gICAgcmV0dXJuIGNpdHlcbiAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKSAvLyByZW1vdmUgd2hpdGVzcGFjZSBmcm9tIGJlZ2luaW5nIGFuZCBlbmQgb2Ygc3RyaW5nXG4gICAgICAucmVwbGFjZSgvKCxcXHMrKS9nLCAnLCcpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBmb2xsb3dzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC8oXFxzKywpL2csICcsJykgLy8gcmVtb3ZlIGFueSB3aGl0ZSBzcGFjZSB0aGF0IHByZWNlZWRzIGEgY29tbWFcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcrJyk7IC8vIHJlcGxhY2UgYW55IHJlbWFpbmluZyB3aGl0ZSBzcGFjZSB3aXRoICssIHNvIGl0IHdvcmtzIGluIGFwaSBjYWxsXG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBrZWx2aW5Ubyh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnQycpIHsgcmV0dXJuIE1hdGguZmxvb3IodGVtcCAtIDI3My4xNSk7IH1cbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcih0ZW1wICogKDkgLyA1KSAtIDQ1OS42Nyk7IH1cbiAgcmV0dXJuIHRlbXA7XG59XG5cbmZ1bmN0aW9uIG1ldGVyUGVyU2VjVG8od2luZCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ0MnKSB7IHJldHVybiBNYXRoLmZsb29yKDEwICogd2luZCAqIDMuNikgLyAxMDsgfSAvLyBLTUhcbiAgaWYgKHVuaXQgPT09ICdGJykgeyByZXR1cm4gTWF0aC5mbG9vcigxMCAqIHdpbmQgKiAyLjIzNjkpIC8gMTA7IH0gLy8gTVBIXG4gIHJldHVybiB3aW5kO1xufVxuZXhwb3J0IHtcbiAgZ2V0U3RyaW5nRGF5LCBoYW5kbGVFcnJvciwgZm9ybWF0Q2l0eU5hbWUsIGtlbHZpblRvLCBtZXRlclBlclNlY1RvLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTSc7XG5pbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViJztcblxubGV0IHVuaXQgPSAnQyc7XG5jb25zdCB1bml0Q2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LWNoYW5nZXInKTtcbnVuaXRDaGFuZ2VyLnRleHRDb250ZW50ID0gYERpc3BsYXkgaW4gwrAke3VuaXQgPT09ICdDJyA/ICdGJyA6ICdDJ31gO1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICBjb25zdCBmb3JtYXRlZENpdHkgPSB1dGlscy5mb3JtYXRDaXR5TmFtZShjaXR5KTtcbiAgaWYgKGZvcm1hdGVkQ2l0eSkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB1dGlscy5oYW5kbGVFcnJvcihhcGkuZ2V0V2VhdGhlcikoZm9ybWF0ZWRDaXR5KTtcbiAgICBwdWJzdWIucHVibGlzaCgnZGF0YSBhcnJpdmVkJywgW3dlYXRoZXIsIHVuaXRdKTtcbiAgfVxufVxuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0Jyk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGdldFdlYXRoZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3g+LmVycm9yJykuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3JfYWN0aXZlJyk7XG4gIH1cbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3gnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlcihzZWFyY2hCdXR0b24udmFsdWUpO1xuICBzZWFyY2hCdXR0b24udmFsdWUgPSAnJztcbn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlQnKTtcbiAgdW5pdENoYW5nZXIudGV4dENvbnRlbnQgPSBgRGlzcGxheSBpbiDCsCR7dW5pdH1gO1xuICB1bml0ID0gdW5pdCA9PT0gJ0MnID8gJ0YnIDogJ0MnO1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBrZWx2aW4gPSBOdW1iZXIoZmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWtlbHZpbicpKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBmaWVsZC50ZXh0Q29udGVudCA9IGAke3V0aWxzLmtlbHZpblRvKGtlbHZpbiwgdW5pdCl9wrAke3VuaXR9YDtcbiAgfSk7XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkIC5udW1iZXInKTtcbiAgd2luZC50ZXh0Q29udGVudCA9IGAke3V0aWxzLm1ldGVyUGVyU2VjVG8od2luZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXMnKSwgdW5pdCl9JHt1bml0ID09PSAnQycgPyAnIGttL2gnIDogJyBNUEgnfWA7XG59XG5jb25zdCB1bml0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0LWNoYW5nZXInKTtcbnVuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdHMpO1xuXG5nZXRXZWF0aGVyKCdUdWN1bWFuJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=