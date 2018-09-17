/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/dynamicNumbers.js":
/*!**********************************!*\
  !*** ./www/js/dynamicNumbers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// scrolling odometer\r\nfunction dynamicNumbers() {\r\n\r\n    // checking, if user scrolled to certain element\r\n    function isScrolledIntoView(elem) {\r\n\r\n        let docViewTop = $(window).scrollTop();\r\n        let docViewBottom = docViewTop + $(window).height();\r\n        let elemTop = $(elem).offset().top;\r\n        let elemBottom = elemTop + $(elem).height();\r\n\r\n        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));\r\n    }\r\n\r\n    function testScroll() {\r\n\r\n        if (isScrolledIntoView(odometer1)) {\r\n            odometer1.innerHTML = 42;\r\n        }\r\n        if (isScrolledIntoView(odometer2)) {\r\n            odometer2.innerHTML = 123;\r\n        }\r\n        if (isScrolledIntoView(odometer3)) {\r\n            odometer3.innerHTML = 15;\r\n        }\r\n        if (isScrolledIntoView(odometer4)) {\r\n            odometer4.innerHTML = 99;\r\n        }\r\n        if (isScrolledIntoView(odometer5)) {\r\n            odometer5.innerHTML = 24;\r\n        }\r\n    }\r\n\r\n    if (isScrolledIntoView(odometer1)) {\r\n        setTimeout(function () {\r\n            testScroll();\r\n        }, 10);\r\n    }\r\n\r\n    window.onscroll = testScroll;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dynamicNumbers);\r\n\n\n//# sourceURL=webpack:///./www/js/dynamicNumbers.js?");

/***/ }),

/***/ "./www/js/main.js":
/*!************************!*\
  !*** ./www/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./www/js/menu.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./www/js/services.js\");\n/* harmony import */ var _quotesSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotesSlider */ \"./www/js/quotesSlider.js\");\n/* harmony import */ var _dynamicNumbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicNumbers */ \"./www/js/dynamicNumbers.js\");\n\n\n\n\n\n\n\nlet mainMenu = Object(_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nmainMenu.init();\n\nObject(_services__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nObject(_quotesSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nObject(_dynamicNumbers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack:///./www/js/main.js?");

/***/ }),

/***/ "./www/js/menu.js":
/*!************************!*\
  !*** ./www/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// menu module:\r\nfunction menu() {\r\n\r\n    // opening menu:\r\n    function open() {\r\n        document.querySelector('.page-nav').classList.add('page-nav-opened');\r\n        document.querySelector('.menu-hamburger').classList.add('.menu-hamburger-hidden');\r\n    }\r\n\r\n    // closing menu:\r\n    function close() {\r\n        document.querySelector('.page-nav').classList.remove('page-nav-opened');\r\n        document.querySelector('.menu-hamburger').classList.remove('.menu-hamburger-hidden');\r\n    }\r\n\r\n    function init() {\r\n        let hamburger = document.querySelector('.menu-hamburger');\r\n        hamburger.addEventListener('click', open);\r\n\r\n        let cross = document.querySelector('.menu-close');\r\n        cross.addEventListener('click', close);\r\n    }\r\n\r\n    return {\r\n        init: init\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./www/js/menu.js?");

/***/ }),

/***/ "./www/js/quotesSlider.js":
/*!********************************!*\
  !*** ./www/js/quotesSlider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// quotes module\r\nfunction quotesSlider() {\r\n\r\n    let slideIndex = 1;\r\n    changeQuote(slideIndex);\r\n\r\n    function plusDivs(n) {\r\n        changeQuote(slideIndex += n);\r\n    }\r\n\r\n    function changeQuote(n) {\r\n        let singleSlide = document.getElementsByClassName('quote-slider-item');\r\n\r\n        //set all <li> on display: none;\r\n        for (let i = 0; i < singleSlide.length; i++) {\r\n            singleSlide[i].style.display = 'none';\r\n        }\r\n\r\n        if (n > singleSlide.length) {\r\n            slideIndex = 1;\r\n        }\r\n        if (n < 1) {\r\n            slideIndex = singleSlide.length;\r\n        }\r\n\r\n        singleSlide[slideIndex - 1].style.display = 'block';\r\n    }\r\n\r\n    let arrowsLeft = document.getElementsByClassName('quote-arrow-left');\r\n    let arrowsRight = document.getElementsByClassName('quote-arrow-right');\r\n\r\n    for (let i = 0; i < arrowsLeft.length; i++) { // we can use one loop since there is same amount of arrows\r\n        arrowsRight[i].addEventListener('click',() => {\r\n            plusDivs(1);\r\n        });\r\n        arrowsLeft[i].addEventListener('click',() => {\r\n            plusDivs(-1);\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (quotesSlider);\r\n\n\n//# sourceURL=webpack:///./www/js/quotesSlider.js?");

/***/ }),

/***/ "./www/js/services.js":
/*!****************************!*\
  !*** ./www/js/services.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// services module:\r\nfunction services() {\r\n\r\n    $('#photography-btn').click(function () {\r\n        $('#photography-description').slideToggle('slow');\r\n    });\r\n\r\n    $('#creativity-btn').click(function () {\r\n        $('#creativity-description').slideToggle('slow');\r\n    });\r\n\r\n    $('#web_design-btn').click(function () {\r\n        $('#web_design-description').slideToggle('slow');\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (services);\r\n\n\n//# sourceURL=webpack:///./www/js/services.js?");

/***/ })

/******/ });