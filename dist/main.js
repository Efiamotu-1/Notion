/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Animation  */\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0.4; }\\n  100% {\\n    opacity: 1; } }\\n\\n@keyframes dropDown {\\n  0% {\\n    transform: translateY(-50px); }\\n  75% {\\n    transform: translateY(20px); }\\n  100% {\\n    transform: translateY(0); } }\\n\\n@keyframes left {\\n  0% {\\n    transform: translateX(-100px); }\\n  100% {\\n    transform: translateY(0); } }\\n\\n@keyframes right {\\n  0% {\\n    transform: translateX(100px); }\\n  100% {\\n    transform: translateX(0); } }\\n\\n@keyframes appear {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\\n*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit; }\\n\\nbody {\\n  box-sizing: border-box;\\n  background-color: #f5f5f5; }\\n\\n.container {\\n  width: 65%;\\n  height: 100vh;\\n  margin: 3rem auto 0;\\n  animation: dropDown 2s; }\\n\\n[contenteditable]:empty::before {\\n  content: attr(placeholder);\\n  color: #37352f80; }\\n\\nbody {\\n  font-family: 'Inter', sans-serif;\\n  line-height: 1.7;\\n  padding: 3rem; }\\n\\n.h1 {\\n  font-size: 2rem;\\n  font-weight: 700; }\\n\\n.h2 {\\n  font-size: 1.5rem;\\n  font-weight: 600; }\\n\\n.h3 {\\n  font-size: 1.25rem;\\n  font-weight: 500; }\\n\\n.h4 {\\n  font-size: 1.125rem;\\n  font-weight: 500; }\\n\\n.h5 {\\n  font-size: 1rem;\\n  font-weight: 500; }\\n\\n.h6 {\\n  font-size: 0.875rem;\\n  font-weight: 500; }\\n\\n.p {\\n  font-size: 1rem;\\n  font-weight: 400; }\\n\\n.heading-primary__title {\\n  padding: 0.5rem 0;\\n  font-size: 2rem;\\n  animation: left 2s; }\\n\\n.heading-primary__content {\\n  padding: 1rem 0;\\n  color: #6e747f;\\n  line-height: 1.5;\\n  font-weight: lighter;\\n  animation: right 2s; }\\n\\nhr {\\n  border: 1px solid #e0e0e0; }\\n\\n.p-img {\\n  background-color: #bbffd2;\\n  border-radius: 2px; }\\n\\n.input {\\n  max-width: 100%;\\n  width: 100%;\\n  white-space: pre-wrap;\\n  padding: 0.5rem 0;\\n  word-break: break-word;\\n  caret-color: #37352f;\\n  color: #222;\\n  cursor: text;\\n  position: relative;\\n  animation: appear 3s; }\\n  .input:focus {\\n    outline: none;\\n    animation: fadeIn 3s; }\\n\\n.popup {\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  width: 20rem;\\n  height: 15rem;\\n  background-color: #fff;\\n  border-radius: 5px;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\\n  overflow-y: scroll; }\\n  .popup::-webkit-scrollbar {\\n    width: 0.5rem; }\\n  .popup::-webkit-scrollbar-track {\\n    background: #fff; }\\n  .popup::-webkit-scrollbar-thumb {\\n    background: #37352f80; }\\n  .popup::-webkit-scrollbar-thumb:hover {\\n    background: #37352f80; }\\n  .popup__header {\\n    padding: 1rem 0.5rem;\\n    font-size: 1rem;\\n    border-bottom: 1px solid #e0e0e0; }\\n    .popup__header h5 {\\n      font-weight: 600; }\\n    .popup__header p {\\n      font-size: 0.75rem;\\n      color: #6e747f; }\\n  .popup__list {\\n    padding: 0.5rem;\\n    list-style: none;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem; }\\n  .popup__item {\\n    background: none;\\n    border: none;\\n    outline: none;\\n    padding: 0.5rem;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem; }\\n    .popup__item div {\\n      display: flex;\\n      flex-direction: column;\\n      align-items: flex-start; }\\n    .popup__item p {\\n      color: #37352f80;\\n      font-size: 0.8rem;\\n      margin-top: 0.2rem; }\\n    .popup__item:hover, .popup__item:focus, .popup__item:active {\\n      background-color: #e0e0e0;\\n      outline: none; }\\n\\nheader nav {\\n  width: 100%;\\n  height: 50px;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 7px;\\n  display: flex;\\n  margin-bottom: 2rem; }\\n  header nav ul {\\n    width: 100%;\\n    padding: 0 1rem;\\n    list-style: none;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 1rem; }\\n    header nav ul li {\\n      display: flex;\\n      align-items: center;\\n      gap: 0.2rem;\\n      cursor: pointer; }\\n      header nav ul li :hover {\\n        animation: fadeIn 3s; }\\n      header nav ul li img {\\n        width: 25px;\\n        height: 25px; }\\n      header nav ul li svg {\\n        width: 15px;\\n        height: 15px; }\\n      header nav ul li span {\\n        margin-top: 0.13rem; }\\n      header nav ul li:nth-child(1) {\\n        border-right: 1px solid #e0e0e0;\\n        padding-right: 1rem; }\\n      header nav ul li:nth-child(2) {\\n        border-right: 1px solid #e0e0e0;\\n        padding-right: 1rem; }\\n      header nav ul li:nth-child(3) {\\n        border-right: 1px solid #e0e0e0;\\n        padding-right: 1rem; }\\n      header nav ul li:nth-child(4) {\\n        margin-right: auto; }\\n\\n@media screen and (max-width: 768px) {\\n  .container {\\n    width: 95%; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notion/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notion/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notion/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notion/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notion/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _modules_handleUserInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleUserInput.js */ \"./src/modules/handleUserInput.js\");\n\n\n\n(0,_modules_handleUserInput_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://notion/./src/index.js?");

/***/ }),

/***/ "./src/modules/createHeading.js":
/*!**************************************!*\
  !*** ./src/modules/createHeading.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n\nconst createHeading = (input, headingType) => {\n  input.className = 'input';\n  input.classList.add(headingType);\n\n  // sets the text content to be the remaining values after the first two have been sliced\n  input.textContent = input.textContent.slice(2).trim();\n\n  // displays the heading type as the placeholder\n  headingType === 'p'\n    ? input.setAttribute('placeholder', 'Paragraph')\n    : input.setAttribute('placeholder', `Heading ${headingType}`);\n  input.focus();\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.hidePopup)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeading);\n\n\n//# sourceURL=webpack://notion/./src/modules/createHeading.js?");

/***/ }),

/***/ "./src/modules/createNewInput.js":
/*!***************************************!*\
  !*** ./src/modules/createNewInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNewInput = (currentInput, currentId) => {\n  // creates a new input which can be used to create another text/sentence\n  const newInput = document.createElement('div');\n  newInput.classList.add('input');\n  newInput.setAttribute('contenteditable', true);\n  newInput.setAttribute('spellcheck', true);\n  newInput.setAttribute('placeholder', \"Type '/' for blocks\");\n  newInput.setAttribute('id', `${Number(currentId) + 1}`);\n\n  currentInput.insertAdjacentElement('afterend', newInput);\n  newInput.focus();\n  // returns the new input to be created\n  return newInput;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewInput);\n\n\n//# sourceURL=webpack://notion/./src/modules/createNewInput.js?");

/***/ }),

/***/ "./src/modules/filterInput.js":
/*!************************************!*\
  !*** ./src/modules/filterInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterInput = (searchInput) => {\n  searchInput = searchInput.slice(1);\n  const options = document.querySelectorAll('.popup__item');\n  options.forEach((option) => {\n    const title = option.querySelector('h4').textContent;\n    option.style.display = title\n      .toLowerCase()\n      .includes(searchInput.toLowerCase())\n      ? 'flex'\n      : 'none';\n  });\n  return `hello ${searchInput && searchInput.slice(0)}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterInput);\n\n\n//# sourceURL=webpack://notion/./src/modules/filterInput.js?");

/***/ }),

/***/ "./src/modules/handleUserInput.js":
/*!****************************************!*\
  !*** ./src/modules/handleUserInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _selectHeading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectHeading.js */ \"./src/modules/selectHeading.js\");\n/* harmony import */ var _createHeading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHeading.js */ \"./src/modules/createHeading.js\");\n/* harmony import */ var _createNewInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNewInput.js */ \"./src/modules/createNewInput.js\");\n/* harmony import */ var _filterInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterInput.js */ \"./src/modules/filterInput.js\");\n\n\n\n\n\n\nconst handleUserInput = (input = document.getElementById('1')) => {\n  input.addEventListener('input', () => {\n    if (input.textContent[0] === '/') {\n      // displays the popup showing the different heading types\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(input);\n      // filter the inputs for the heading option after user presses /\n      (0,_filterInput_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input.textContent);\n      // listens and send the heading the user selects\n      (0,_selectHeading_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input);\n    }\n  });\n\n  input.addEventListener('keydown', (e) => {\n    // listens for when the user clicks on the enter key\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      const inputText = input.textContent;\n\n      if (inputText[0] === '/' && inputText[1] === '1') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'h1');\n      }\n\n      if (inputText[0] === '/' && inputText[1] === '2') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'h2');\n      }\n\n      if (inputText[0] === '/' && inputText[1] === '3') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'h3');\n      }\n\n      if (inputText[0] === '/' && inputText[1] === '4') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'h4');\n      }\n\n      if (inputText[0] === '/' && inputText[1] === '5') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'h6');\n      }\n\n      if (inputText[0] === '/' && inputText[1] === 'p') {\n        (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input, 'p');\n      }\n\n      // if the user refuses to put in any text he is not allowed to save it\n      if (inputText === '') return;\n\n      const newInput = (0,_createNewInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(input, input.id);\n      handleUserInput(newInput);\n    }\n\n    /* If the user presses 'Backspace' && the input text content is empty && the\n       input is not the first one:\n        - Remove the input and focus the previous input\n        - Add the placeholder to the previous input />\n        - Put the cursor at the end of the previous input content \n    */\n    if (\n      e.key === 'Backspace' &&\n          input.textContent.length === 0 &&\n          input.id !== '1'\n    ) {\n      const previousInput = input.previousElementSibling;\n      input.remove();\n      previousInput.setAttribute('placeholder', \"Type '/' for blocks\");\n\n      // Add space to the previous input to make sure the cursor is at the end of the content\n      previousInput.textContent += ' ';\n      previousInput.focus();\n      const range = new Range();\n      const sel = window.getSelection();\n      range.setStart(\n        previousInput.childNodes[0] || previousInput,\n        previousInput.textContent.length\n      );\n      sel.removeAllRanges();\n      sel.addRange(range);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleUserInput);\n\n\n//# sourceURL=webpack://notion/./src/modules/handleUserInput.js?");

/***/ }),

/***/ "./src/modules/headingsList.js":
/*!*************************************!*\
  !*** ./src/modules/headingsList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headingList = [\n  {\n    title: 'Heading 1',\n    description: 'Largest heading type',\n    type: 'h1',\n  },\n  {\n    title: 'Heading 2',\n    description: 'second largest heading',\n    type: 'h2',\n  },\n  {\n    title: 'Heading 3',\n    description: 'Third heading',\n    type: 'h3',\n  },\n  {\n    title: 'Heading 4',\n    description: 'Fourth heading',\n    type: 'h4',\n  },\n  {\n    title: 'Heading 5',\n    description: 'second smallest heading',\n    type: 'h5',\n  },\n  {\n    title: 'Heading 6',\n    description: 'Smallest heading',\n    type: 'h6',\n  },\n  {\n    title: 'Paragraph',\n    description: 'Normal text',\n    type: 'p',\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingList);\n\n\n//# sourceURL=webpack://notion/./src/modules/headingsList.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hidePopup\": () => (/* binding */ hidePopup),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _headingsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headingsList.js */ \"./src/modules/headingsList.js\");\n/* harmony import */ var _images_text_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/text.svg */ \"./src/images/text.svg\");\n\n\n\nlet show = false;\n\nconst showPopup = (input) => {\n  if (show) return;\n  const htmlPopup = `\n  <div class=\"popup\">\n    <div class=\"popup__header\">\n      <h5>Add Blocks</h5>\n      <p>keep typing to filter or click escape to exit</p>\n    </div>\n    <div class=\"popup__list\" role=\"listitem\">\n      ${_headingsList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map((option) => `\n            <button class=\"popup__item\" data-format=\"${option.type}\">\n            <img src=\"${_images_text_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"heading icon\" width=\"30\">\n            <div>\n                <h4>${option.title}</h4>\n                <p>${option.description}</p>\n            </div>\n            </button>\n            `).join('')\n}\n    </div>\n  </div>`;\n\n  input.insertAdjacentHTML('afterend', htmlPopup);\n  show = true;\n};\n\nconst hidePopup = () => {\n  const popup = document.querySelector('.popup');\n  if (popup) {\n    popup.remove();\n    show = false;\n  }\n};\n\n// If the user presses the escape key it automatically closes the popup window\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') hidePopup();\n});\n\n// remove popup when clicking outside of the popup\ndocument.addEventListener('click', (e) => {\n  if (e.target.closest('.popup')) return;\n  hidePopup();\n});\n\n\n\n\n//# sourceURL=webpack://notion/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/selectHeading.js":
/*!**************************************!*\
  !*** ./src/modules/selectHeading.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createHeading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHeading.js */ \"./src/modules/createHeading.js\");\n\n\nconst selectHeading = (input) => {\n  const headings = document.querySelectorAll('.popup__item');\n  headings.forEach((option) => {\n    option.addEventListener('click', () => {\n      const headingType = option.getAttribute('data-format');\n      (0,_createHeading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, headingType);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectHeading);\n\n\n//# sourceURL=webpack://notion/./src/modules/selectHeading.js?");

/***/ }),

/***/ "./src/images/text.svg":
/*!*****************************!*\
  !*** ./src/images/text.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b094bdab9e888a8114ea.svg\";\n\n//# sourceURL=webpack://notion/./src/images/text.svg?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;