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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.img-style{\n    height: 350px; \n    width: 350px;\n}\n\n.menu-item{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 16px;\n    height: 350px;\n    width: 500px;\n    background-color: aliceblue;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg"
/*!******************************************************************************************!*\
  !*** ./src/assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg ***!
  \******************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bfa7cd6887304686d0ab.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/brooke-lark-oaz0raysASk-unsplash.jpg"
/*!*********************************************************!*\
  !*** ./src/assets/brooke-lark-oaz0raysASk-unsplash.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6fef6ab35c4d63d55408.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/brooke-lark-oaz0raysASk-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
/*!**********************************************************!*\
  !*** ./src/assets/chad-montano-MqT0asuoIcU-unsplash.jpg ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e27b5f5c65846156c03b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/chad-montano-MqT0asuoIcU-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg"
/*!************************************************************!*\
  !*** ./src/assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e5a5de2471e88e1a5cf7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"
/*!*************************************************************!*\
  !*** ./src/assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7d1407e4437e4a65ee57.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg"
/*!***********************************************************!*\
  !*** ./src/assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"25c9cfd93759907021d2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg"
/*!**********************************************************!*\
  !*** ./src/assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8b89673f324e33f86c47.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg"
/*!***********************************************************!*\
  !*** ./src/assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"398d80059577734ef4e7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/mae-mu-I7A_pHLcQK8-unsplash.jpg"
/*!****************************************************!*\
  !*** ./src/assets/mae-mu-I7A_pHLcQK8-unsplash.jpg ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"33136c77e1da8272f2c1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/mae-mu-I7A_pHLcQK8-unsplash.jpg?\n}");

/***/ },

/***/ "./src/assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg"
/*!***************************************************************!*\
  !*** ./src/assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5689c349dba16ae8182f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg?\n}");

/***/ },

/***/ "./src/about-module.js"
/*!*****************************!*\
  !*** ./src/about-module.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initAbout: () => (/* binding */ initAbout)\n/* harmony export */ });\nfunction initAbout(){\n    let content = document.getElementById(\"content\");\n    content.textContent = \"\";\n    let h1 = document.createElement(\"h1\");\n\n    h1.textContent = \"About\";\n\n    content.appendChild(h1);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-module.js?\n}");

/***/ },

/***/ "./src/homepage-module.js"
/*!********************************!*\
  !*** ./src/homepage-module.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initHomepage: () => (/* binding */ initHomepage)\n/* harmony export */ });\n/* harmony import */ var _assets_mae_mu_I7A_pHLcQK8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mae-mu-I7A_pHLcQK8-unsplash.jpg */ \"./src/assets/mae-mu-I7A_pHLcQK8-unsplash.jpg\");\n\n\nfunction initHomepage() {\n    let content = document.getElementById(\"content\");\n    content.textContent = \"\";\n    let h1 = document.createElement(\"h1\");\n    let img = document.createElement(\"img\");\n\n    h1.textContent = \"Welcome to Burger Haven, A safe place for Hungry stomachs\";\n    img.src = _assets_mae_mu_I7A_pHLcQK8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.style = \"height: 500px; width: 400px;\"\n\n    content.appendChild(h1);\n    content.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage-module.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage-module.js */ \"./src/homepage-module.js\");\n/* harmony import */ var _menu_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-module.js */ \"./src/menu-module.js\");\n/* harmony import */ var _about_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-module.js */ \"./src/about-module.js\");\n\n\n\n\n\nconsole.log(\"Hello Webpack Bundler\");\n\n(0,_homepage_module_js__WEBPACK_IMPORTED_MODULE_1__.initHomepage)();\n\nfunction initNavButtons() {\n    const homeBtn = document.getElementById(\"home-btn\");\n    homeBtn.addEventListener(\"click\", (e) => {\n        (0,_homepage_module_js__WEBPACK_IMPORTED_MODULE_1__.initHomepage)();\n    });\n\n    const menuBtn = document.getElementById(\"menu-btn\");\n    menuBtn.addEventListener(\"click\", (e) => {\n        (0,_menu_module_js__WEBPACK_IMPORTED_MODULE_2__.initMenu)();\n    });\n\n    const aboutBtn = document.getElementById(\"about-btn\");\n    aboutBtn.addEventListener(\"click\", (e) => {\n        (0,_about_module_js__WEBPACK_IMPORTED_MODULE_3__.initAbout)();\n    });\n}\n\ninitNavButtons();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu-module.js"
/*!****************************!*\
  !*** ./src/menu-module.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_chad_montano_MqT0asuoIcU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chad-montano-MqT0asuoIcU-unsplash.jpg */ \"./src/assets/chad-montano-MqT0asuoIcU-unsplash.jpg\");\n/* harmony import */ var _assets_anna_tukhfatullina_food_photographer_stylist_Mzy_OjtCI70_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg */ \"./src/assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg\");\n/* harmony import */ var _assets_brooke_lark_oaz0raysASk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/brooke-lark-oaz0raysASk-unsplash.jpg */ \"./src/assets/brooke-lark-oaz0raysASk-unsplash.jpg\");\n/* harmony import */ var _assets_emile_mbunzama_cLpdEA23Z44_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg */ \"./src/assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg\");\n/* harmony import */ var _assets_joseph_gonzalez_zcUgjyqEwe8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg */ \"./src/assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg\");\n/* harmony import */ var _assets_khloe_arledge_ND3edEmzcdQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg */ \"./src/assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg\");\n/* harmony import */ var _assets_kobby_mendez_q54Oxq44MZs_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg */ \"./src/assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg\");\n/* harmony import */ var _assets_luisana_zerpa_MJPr6nOdppw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg */ \"./src/assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg\");\n/* harmony import */ var _assets_michele_blackwell_rAyCBQTH7ws_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg */ \"./src/assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst data = [\n    {\n        \"id\": 1,\n        \"title\": \"BBQ Chicken and Pineapple Pizza\",\n        \"src\": _assets_chad_montano_MqT0asuoIcU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        \"description\": \"A top-down shot of a sliced artisanal pizza on a dark wooden cutting board. It is loaded with shredded chicken, melted mozzarella, red onion, juicy pineapple chunks, a drizzle of BBQ sauce, and fresh cilantro sprigs.\"\n    },\n    {\n        \"id\": 2,\n        \"title\": \"Gourmet Raspberry Pistachio Layer Cake\",\n        \"src\": _assets_anna_tukhfatullina_food_photographer_stylist_Mzy_OjtCI70_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        \"description\": \"A decadent slice of layered cream cake, beautifully topped with a mountain of fresh, vibrant raspberries and a hint of pistachio.\"\n    },\n    {\n        \"id\": 3,\n        \"title\": \"Vibrant Herb-Infused Hummus Platter\",\n        \"src\": _assets_brooke_lark_oaz0raysASk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        \"description\": \"A creamy hummus bowl layered with a green herb swirl and garnished with cherry tomatoes, nuts, pomegranate seeds, and edible rose petals.\"\n    },\n    {\n        \"id\": 4,\n        \"title\": \"Decadent Cookies & Cream Sundae\",\n        \"src\": _assets_emile_mbunzama_cLpdEA23Z44_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__,\n        \"description\": \"A luxurious cookies-and-cream dessert layered in a glass goblet with rich chocolate mousse, whipped cream, crushed chocolate sandwich cookies, and a glossy chocolate drizzle cascading down the sides.\"\n    },\n    {\n        \"id\": 5,\n        \"title\": \"Banana Blueberry French Toast Stack\",\n        \"src\": _assets_joseph_gonzalez_zcUgjyqEwe8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__,\n        \"description\": \"A golden stack of thick-cut French toast layered with fresh banana slices and juicy blueberries, finished with a drizzle of maple syrup and a dusting of powdered sugar.\"\n    },\n    {\n        \"id\": 6,\n        \"title\": \"Creamy Pan-Seared Salmon\",\n        \"src\": _assets_khloe_arledge_ND3edEmzcdQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__,\n        \"description\": \"Tender salmon fillets simmered in a rich, savory cream sauce, garnished with fresh herbs and bright lemon slices.\"\n    },\n    {\n        \"id\": 7,\n        \"title\": \"Sprinkled Chocolate Glazed Donuts\",\n        \"src\": _assets_kobby_mendez_q54Oxq44MZs_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__,\n        \"description\": \"A decadent stack of fluffy donuts topped with a rich chocolate glaze, vanilla drizzle, and a vibrant shower of rainbow sprinkles.\"\n    },\n    {\n        \"id\": 8,\n        \"title\": \"Classic Red Velvet Cupcake\",\n        \"src\": _assets_luisana_zerpa_MJPr6nOdppw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__,\n        \"description\": \"A moist, velvety red cake base crowned with a smooth swirl of cream cheese frosting and a dusting of cake crumbs.\"\n    },\n    {\n        \"id\": 9,\n        \"title\": \"Savory Shrimp Ramen Bowl\",\n        \"src\": _assets_michele_blackwell_rAyCBQTH7ws_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__,\n        \"description\": \"A comforting bowl of ramen noodles in a flavorful broth, loaded with succulent shrimp, soft-boiled eggs, crisp snap peas, and a sprinkle of black sesame seeds.\"\n    }\n];\n\nfunction initMenu() {\n    const content = document.getElementById(\"content\");\n    content.textContent = \"\";\n    const h1 = document.createElement(\"h1\");\n    const menu = document.createElement(\"div\");\n    menu.style = \"display: grid; gap: 16px; justify-content: center\";\n\n\n    for (let image of data) {\n        let menuItem = document.createElement(\"div\");\n        let imgElement = document.createElement(\"img\");\n        let title = document.createElement(\"h1\");\n        title.textContent = image.title;\n\n        imgElement.src = image.src;\n        imgElement.style = \"height: 250px; width: 350px;\";\n\n        menuItem.classList.add(\"menu-item\");\n\n        menuItem.appendChild(imgElement);\n        menuItem.appendChild(title);\n        menu.appendChild(menuItem);\n    }\n\n\n    h1.textContent = \"Menu\";\n\n    content.appendChild(h1);\n    content.appendChild(menu);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-module.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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