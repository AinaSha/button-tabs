/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n.about-wrapper{\r\n    width: 1200px;\r\n    margin: 0 auto;\r\n    margin-top: 200px;\r\n\r\n}\r\n\r\n.about-title{\r\n   font-family: Arial, Helvetica, sans-serif;\r\n   font-size: 2rem;\r\n   text-transform: uppercase;\r\n   letter-spacing: 2px;\r\n   text-align: center;\r\n   padding-bottom: 30px;\r\n}\r\n\r\n.blc-about{\r\n   display:flex;\r\n   gap:20px\r\n}\r\n\r\n.about-left{\r\n width: 50%;\r\n\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n  object-fit: contain;    \r\n}\r\n\r\n.about-right{\r\n   width: 50%;\r\n}\r\n\r\n/* tabs */\r\n\r\n\r\n.tabs-nav{\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   background-color: #fafafa;\r\n   margin:0;\r\n  \r\n}\r\n\r\n.tabs-btn{\r\n   padding: 0.8rem 3rem;\r\n   font-size: 1rem;\r\n   font-weight: 600;\r\n   color:#5c5b5b;\r\n   text-align: center;\r\n   flex-shrink: 1;\r\n   flex-grow: 1;\r\n   border: 1px solid transparent;\r\n   cursor: pointer;\r\n}\r\n\r\n.tabs-btn.is-active{\r\n   background-color: #fff;\r\n   color: #2a2929;\r\n   cursor: default;\r\n}\r\n\r\n.tabs-btn:not(.is-active):hover,\r\n.tabs-btn:not(.is-active):focus{\r\n   background-color: rgb(202, 198, 198);\r\n}\r\n\r\n.tabs-content{\r\n   padding: 1rem;\r\n}\r\n\r\n.tabs-pane{\r\n   display: none;\r\n}\r\n\r\n.tabs-pane.is-active{\r\n   display: block;\r\n}\r\n\r\n\r\n.tabs-content-desc{\r\n   width: 550px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;;AAGA;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;;AAErB;;AAEA;GACG,yCAAyC;GACzC,eAAe;GACf,yBAAyB;GACzB,mBAAmB;GACnB,kBAAkB;GAClB,oBAAoB;AACvB;;AAEA;GACG,YAAY;GACZ;AACH;;AAEA;CACC,UAAU;;AAEX;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;GACG,UAAU;AACb;;AAEA,SAAS;;;AAGT;GACG,aAAa;GACb,eAAe;GACf,yBAAyB;GACzB,QAAQ;;AAEX;;AAEA;GACG,oBAAoB;GACpB,eAAe;GACf,gBAAgB;GAChB,aAAa;GACb,kBAAkB;GAClB,cAAc;GACd,YAAY;GACZ,6BAA6B;GAC7B,eAAe;AAClB;;AAEA;GACG,sBAAsB;GACtB,cAAc;GACd,eAAe;AAClB;;AAEA;;GAEG,oCAAoC;AACvC;;AAEA;GACG,aAAa;AAChB;;AAEA;GACG,aAAa;AAChB;;AAEA;GACG,cAAc;AACjB;;;AAGA;GACG,YAAY;AACf","sourcesContent":["\r\n\r\n\r\n.about-wrapper{\r\n    width: 1200px;\r\n    margin: 0 auto;\r\n    margin-top: 200px;\r\n\r\n}\r\n\r\n.about-title{\r\n   font-family: Arial, Helvetica, sans-serif;\r\n   font-size: 2rem;\r\n   text-transform: uppercase;\r\n   letter-spacing: 2px;\r\n   text-align: center;\r\n   padding-bottom: 30px;\r\n}\r\n\r\n.blc-about{\r\n   display:flex;\r\n   gap:20px\r\n}\r\n\r\n.about-left{\r\n width: 50%;\r\n\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n  object-fit: contain;    \r\n}\r\n\r\n.about-right{\r\n   width: 50%;\r\n}\r\n\r\n/* tabs */\r\n\r\n\r\n.tabs-nav{\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   background-color: #fafafa;\r\n   margin:0;\r\n  \r\n}\r\n\r\n.tabs-btn{\r\n   padding: 0.8rem 3rem;\r\n   font-size: 1rem;\r\n   font-weight: 600;\r\n   color:#5c5b5b;\r\n   text-align: center;\r\n   flex-shrink: 1;\r\n   flex-grow: 1;\r\n   border: 1px solid transparent;\r\n   cursor: pointer;\r\n}\r\n\r\n.tabs-btn.is-active{\r\n   background-color: #fff;\r\n   color: #2a2929;\r\n   cursor: default;\r\n}\r\n\r\n.tabs-btn:not(.is-active):hover,\r\n.tabs-btn:not(.is-active):focus{\r\n   background-color: rgb(202, 198, 198);\r\n}\r\n\r\n.tabs-content{\r\n   padding: 1rem;\r\n}\r\n\r\n.tabs-pane{\r\n   display: none;\r\n}\r\n\r\n.tabs-pane.is-active{\r\n   display: block;\r\n}\r\n\r\n\r\n.tabs-content-desc{\r\n   width: 550px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/img/jason-goodman.jpg":
/*!***********************************!*\
  !*** ./src/img/jason-goodman.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "jason-goodman.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_jason_goodman_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/jason-goodman.jpg */ "./src/img/jason-goodman.jpg");


var body = document.querySelector("body").innerHTML = "\n<section class=\"about-wrapper\">\n<h2 class=\"about-title\">About</h2> \n<div class=\"blc-about\">\n   <div class=\"about-left\">\n   </div>\n   <div class=\"about-right\">\n      <div class=\"tabs\">\n         <div class=\"tabs-nav\">\n            <button class=\"tabs-btn  is-active\" data-tab-name=\"tab-1\">About us</button>\n            <button class=\"tabs-btn\" data-tab-name=\"tab-2\">Our mission</button>\n            <button class=\"tabs-btn\" data-tab-name=\"tab-3\">Our Goals</button>\n         </div>\n         <div class=\"tabs-content\">\n            <div class=\"tabs-pane tab-1 is-active\">\n               <h3>About us</h3>\n               <p class=\"tabs-content-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus distinctio labore nulla. Dolorem voluptate aspernatur, voluptates perspiciatis eveniet doloremque assumenda ullam in, inventore, et tempore! Quos sit eius quas.</p>\n            </div>\n            <div class=\"tabs-pane tab-2\">\n               <h3>Our mission</h3>\n               <p class=\"tabs-content-desc\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt quaerat a ducimus expedita dolores ex sunt temporibus delectus natus!</p>\n            </div>\n            <div class=\"tabs-pane tab-3\">\n               <h3>Our goals</h3>\n               <p class=\"tabs-content-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptate reprehenderit veniam, magni odio animi nesciunt ipsum suscipit non id atque aut architecto placeat dolore tempora, assumenda totam? In, odit!</p>\n            </div>\n        </div>\n      </div>\n   </div>\n</div>\n</section>\n";
document.querySelector(".about-left").innerHTML = "<img src=\"".concat(_img_jason_goodman_jpg__WEBPACK_IMPORTED_MODULE_1__, "\"/>"); //tab-function

var tab = function tab() {
  var tabNav = document.querySelectorAll('.tabs-btn'),
      tabContent = document.querySelectorAll('.tabs-pane');
  var tabName = ""; //в эту переменную записываем в последствии имя активного таба . того на которую мы кликаем             

  console.log(tabNav);
  tabNav.forEach(function (item) {
    //перебираем tabNav , добавляем слушателя и регистрируем обработчик события клик
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      item.classList.remove('is-active'); //по клику у всех элементов убираем класс актив и
    });
    this.classList.add('is-active'); //а утого на которую кликнули добавляем класс актив 

    tabName = this.getAttribute('data-tab-name'); // далее в переменную tabName записываем название атрибуа, куда будут передаваться значение атрибутов который нам нужен

    console.log(tabName);
    selectTabContent(tabName); // вызываем нижнюю функцию
  }

  function selectTabContent(tabName) {
    tabContent.forEach(function (item) {
      //переходим по контенту и делаем проверку если элемент содержит данный tabName, и добавляем актив иначе убираем
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }
};

tab();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTVSxnQkFBVCxDQUEwQlYsT0FBMUIsRUFBbUM7QUFDaENELElBQUFBLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQixVQUFBNUMsSUFBSSxFQUFJO0FBQWtCO0FBQzFDQSxNQUFBQSxJQUFJLENBQUMrQyxTQUFMLENBQWVLLFFBQWYsQ0FBd0JYLE9BQXhCLElBQWtDekMsSUFBSSxDQUFDK0MsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFdBQW5CLENBQWxDLEdBQW9FakQsSUFBSSxDQUFDK0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFdBQXRCLENBQXBFO0FBQ0YsS0FGRDtBQUdGO0FBRUYsQ0EzQkQ7O0FBNkJBWCxHQUFHLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXR0b24tdGFicy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9idXR0b24tdGFicy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2J1dHRvbi10YWJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2J1dHRvbi10YWJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2J1dHRvbi10YWJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9idXR0b24tdGFicy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idXR0b24tdGFicy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9idXR0b24tdGFicy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9idXR0b24tdGFicy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1dHRvbi10YWJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYnV0dG9uLXRhYnMvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuXFxyXFxuLmFib3V0LXdyYXBwZXJ7XFxyXFxuICAgIHdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRpdGxle1xcclxcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxjLWFib3V0e1xcclxcbiAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICBnYXA6MjBweFxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbGVmdHtcXHJcXG4gd2lkdGg6IDUwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJpZ2h0e1xcclxcbiAgIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qIHRhYnMgKi9cXHJcXG5cXHJcXG5cXHJcXG4udGFicy1uYXZ7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG4gICBtYXJnaW46MDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4udGFicy1idG57XFxyXFxuICAgcGFkZGluZzogMC44cmVtIDNyZW07XFxyXFxuICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgY29sb3I6IzVjNWI1YjtcXHJcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICAgZmxleC1ncm93OiAxO1xcclxcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtYnRuLmlzLWFjdGl2ZXtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgIGNvbG9yOiAjMmEyOTI5O1xcclxcbiAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtYnRuOm5vdCguaXMtYWN0aXZlKTpob3ZlcixcXHJcXG4udGFicy1idG46bm90KC5pcy1hY3RpdmUpOmZvY3Vze1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE5OCwgMTk4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGVudHtcXHJcXG4gICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicy1wYW5le1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJzLXBhbmUuaXMtYWN0aXZle1xcclxcbiAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFicy1jb250ZW50LWRlc2N7XFxyXFxuICAgd2lkdGg6IDU1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7O0FBRXJCOztBQUVBO0dBQ0cseUNBQXlDO0dBQ3pDLGVBQWU7R0FDZix5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixvQkFBb0I7QUFDdkI7O0FBRUE7R0FDRyxZQUFZO0dBQ1o7QUFDSDs7QUFFQTtDQUNDLFVBQVU7O0FBRVg7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0dBQ0csVUFBVTtBQUNiOztBQUVBLFNBQVM7OztBQUdUO0dBQ0csYUFBYTtHQUNiLGVBQWU7R0FDZix5QkFBeUI7R0FDekIsUUFBUTs7QUFFWDs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsY0FBYztHQUNkLFlBQVk7R0FDWiw2QkFBNkI7R0FDN0IsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLHNCQUFzQjtHQUN0QixjQUFjO0dBQ2QsZUFBZTtBQUNsQjs7QUFFQTs7R0FFRyxvQ0FBb0M7QUFDdkM7O0FBRUE7R0FDRyxhQUFhO0FBQ2hCOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtHQUNHLGNBQWM7QUFDakI7OztBQUdBO0dBQ0csWUFBWTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcblxcclxcbi5hYm91dC13cmFwcGVye1xcclxcbiAgICB3aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hYm91dC10aXRsZXtcXHJcXG4gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYy1hYm91dHtcXHJcXG4gICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgZ2FwOjIwcHhcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWxlZnR7XFxyXFxuIHdpZHRoOiA1MCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmltZ3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjsgICAgXFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yaWdodHtcXHJcXG4gICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YWJzICovXFxyXFxuXFxyXFxuXFxyXFxuLnRhYnMtbmF2e1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICAgbWFyZ2luOjA7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtYnRue1xcclxcbiAgIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgIGNvbG9yOiM1YzViNWI7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIGZsZXgtc2hyaW5rOiAxO1xcclxcbiAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJzLWJ0bi5pcy1hY3RpdmV7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICBjb2xvcjogIzJhMjkyOTtcXHJcXG4gICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi50YWJzLWJ0bjpub3QoLmlzLWFjdGl2ZSk6aG92ZXIsXFxyXFxuLnRhYnMtYnRuOm5vdCguaXMtYWN0aXZlKTpmb2N1c3tcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxOTgsIDE5OCk7XFxyXFxufVxcclxcblxcclxcbi50YWJzLWNvbnRlbnR7XFxyXFxuICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtcGFuZXtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicy1wYW5lLmlzLWFjdGl2ZXtcXHJcXG4gICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYnMtY29udGVudC1kZXNje1xcclxcbiAgIHdpZHRoOiA1NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltZy9qYXNvbi1nb29kbWFuLmpwZyc7XHJcblxyXG5cclxuY29uc3QgYm9keSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gYFxyXG48c2VjdGlvbiBjbGFzcz1cImFib3V0LXdyYXBwZXJcIj5cclxuPGgyIGNsYXNzPVwiYWJvdXQtdGl0bGVcIj5BYm91dDwvaDI+IFxyXG48ZGl2IGNsYXNzPVwiYmxjLWFib3V0XCI+XHJcbiAgIDxkaXYgY2xhc3M9XCJhYm91dC1sZWZ0XCI+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwiYWJvdXQtcmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInRhYnMtbmF2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YWJzLWJ0biAgaXMtYWN0aXZlXCIgZGF0YS10YWItbmFtZT1cInRhYi0xXCI+QWJvdXQgdXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYnMtYnRuXCIgZGF0YS10YWItbmFtZT1cInRhYi0yXCI+T3VyIG1pc3Npb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhYnMtYnRuXCIgZGF0YS10YWItbmFtZT1cInRhYi0zXCI+T3VyIEdvYWxzPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzLXBhbmUgdGFiLTEgaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgIDxoMz5BYm91dCB1czwvaDM+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFicy1jb250ZW50LWRlc2NcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBZCBhY2N1c2FtdXMgZGlzdGluY3RpbyBsYWJvcmUgbnVsbGEuIERvbG9yZW0gdm9sdXB0YXRlIGFzcGVybmF0dXIsIHZvbHVwdGF0ZXMgcGVyc3BpY2lhdGlzIGV2ZW5pZXQgZG9sb3JlbXF1ZSBhc3N1bWVuZGEgdWxsYW0gaW4sIGludmVudG9yZSwgZXQgdGVtcG9yZSEgUXVvcyBzaXQgZWl1cyBxdWFzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzLXBhbmUgdGFiLTJcIj5cclxuICAgICAgICAgICAgICAgPGgzPk91ciBtaXNzaW9uPC9oMz5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJzLWNvbnRlbnQtZGVzY1wiPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlkZW0gZGVzZXJ1bnQgcXVhZXJhdCBhIGR1Y2ltdXMgZXhwZWRpdGEgZG9sb3JlcyBleCBzdW50IHRlbXBvcmlidXMgZGVsZWN0dXMgbmF0dXMhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYnMtcGFuZSB0YWItM1wiPlxyXG4gICAgICAgICAgICAgICA8aDM+T3VyIGdvYWxzPC9oMz5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJzLWNvbnRlbnQtZGVzY1wiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZWNlc3NpdGF0aWJ1cyB2b2x1cHRhdGUgcmVwcmVoZW5kZXJpdCB2ZW5pYW0sIG1hZ25pIG9kaW8gYW5pbWkgbmVzY2l1bnQgaXBzdW0gc3VzY2lwaXQgbm9uIGlkIGF0cXVlIGF1dCBhcmNoaXRlY3RvIHBsYWNlYXQgZG9sb3JlIHRlbXBvcmEsIGFzc3VtZW5kYSB0b3RhbT8gSW4sIG9kaXQhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1sZWZ0XCIpLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIvPmA7XHJcblxyXG5cclxuXHJcbi8vdGFiLWZ1bmN0aW9uXHJcblxyXG5cclxuY29uc3QgdGFiID0gZnVuY3Rpb24oKSB7XHJcbiAgIGNvbnN0IHRhYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzLWJ0bicpLFxyXG4gICAgICAgICB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMtcGFuZScpO1xyXG4gICBsZXQgdGFiTmFtZSA9XCJcIjsgICAgICAgIC8v0LIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOINC30LDQv9C40YHRi9Cy0LDQtdC8INCyINC/0L7RgdC70LXQtNGB0YLQstC40Lgg0LjQvNGPINCw0LrRgtC40LLQvdC+0LPQviDRgtCw0LHQsCAuINGC0L7Qs9C+INC90LAg0LrQvtGC0L7RgNGD0Y4g0LzRiyDQutC70LjQutCw0LXQvCAgICAgICAgICAgICBcclxuXHJcbiAgIGNvbnNvbGUubG9nKHRhYk5hdik7XHJcblxyXG4gICB0YWJOYXYuZm9yRWFjaChpdGVtID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0L/QtdGA0LXQsdC40YDQsNC10LwgdGFiTmF2ICwg0LTQvtCx0LDQstC70Y/QtdC8INGB0LvRg9GI0LDRgtC10LvRjyDQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0LrQu9C40LpcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFRhYk5hdilcclxuICAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNlbGVjdFRhYk5hdigpIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0YWJOYXYuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpOyAgICAgICAgIC8v0L/QviDQutC70LjQutGDINGDINCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7QsiDRg9Cx0LjRgNCw0LXQvCDQutC70LDRgdGBINCw0LrRgtC40LIg0LhcclxuICAgICAgfSk7XHJcbiAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpOyAgICAgICAgICAgICAvL9CwINGD0YLQvtCz0L4g0L3QsCDQutC+0YLQvtGA0YPRjiDQutC70LjQutC90YPQu9C4INC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINCw0LrRgtC40LIgXHJcbiAgICAgICB0YWJOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiLW5hbWUnKTsvLyDQtNCw0LvQtdC1INCyINC/0LXRgNC10LzQtdC90L3Rg9GOIHRhYk5hbWUg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0L3QsNC30LLQsNC90LjQtSDQsNGC0YDQuNCx0YPQsCwg0LrRg9C00LAg0LHRg9C00YPRgiDQv9C10YDQtdC00LDQstCw0YLRjNGB0Y8g0LfQvdCw0YfQtdC90LjQtSDQsNGC0YDQuNCx0YPRgtC+0LIg0LrQvtGC0L7RgNGL0Lkg0L3QsNC8INC90YPQttC10L1cclxuICAgICAgIGNvbnNvbGUubG9nKHRhYk5hbWUpO1xyXG4gICAgICAgc2VsZWN0VGFiQ29udGVudCh0YWJOYW1lKTsgICAgICAgICAgICAgICAgICAvLyDQstGL0LfRi9Cy0LDQtdC8INC90LjQttC90Y7RjiDRhNGD0L3QutGG0LjRjlxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzZWxlY3RUYWJDb250ZW50KHRhYk5hbWUpIHsgICAgICAgICAgIFxyXG4gICAgIHRhYkNvbnRlbnQuZm9yRWFjaChpdGVtID0+IHsgICAgICAgICAgICAgICAgIC8v0L/QtdGA0LXRhdC+0LTQuNC8INC/0L4g0LrQvtC90YLQtdC90YLRgyDQuCDQtNC10LvQsNC10Lwg0L/RgNC+0LLQtdGA0LrRgyDQtdGB0LvQuCDRjdC70LXQvNC10L3RgiDRgdC+0LTQtdGA0LbQuNGCINC00LDQvdC90YvQuSB0YWJOYW1lLCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQsiDQuNC90LDRh9C1INGD0LHQuNGA0LDQtdC8XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuY29udGFpbnModGFiTmFtZSk/IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJykgOiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG50YWIoKTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGUiLCJpbWFnZSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ0YWIiLCJ0YWJOYXYiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFiQ29udGVudCIsInRhYk5hbWUiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RUYWJOYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RUYWJDb250ZW50IiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9