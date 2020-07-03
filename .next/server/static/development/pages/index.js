module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/FilterBox/FilterBox.js":
/*!*****************************************************!*\
  !*** ./components/molecules/FilterBox/FilterBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\FilterBox\\FilterBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FilterBox({
  filterHeading,
  filterobj,
  handleFilterClick,
  filters
}) {
  const category = filterHeading.toLowerCase();
  const obj = filters[category].split("|");
  return __jsx("div", {
    className: "filter-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, filterHeading), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, filterobj.map(({
    label,
    id,
    grpclass
  }, index) => __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    className: grpclass,
    onChange: event => handleFilterClick(event, id, filterHeading, grpclass),
    id: id,
    checked: obj && obj.indexOf(id) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }), __jsx("label", {
    htmlFor: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, label)))));
}

/* harmony default export */ __webpack_exports__["default"] = (FilterBox);

/***/ }),

/***/ "./components/molecules/FilterBox/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/FilterBox/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterBox */ "./components/molecules/FilterBox/FilterBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FilterBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/Heading/Heading.js":
/*!*************************************************!*\
  !*** ./components/molecules/Heading/Heading.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\Heading\\Heading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Heading({
  name
}) {
  return __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  }, name);
}

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/molecules/Heading/index.js":
/*!***********************************************!*\
  !*** ./components/molecules/Heading/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ "./components/molecules/Heading/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Heading__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/ResultSet/ResultSet.js":
/*!*****************************************************!*\
  !*** ./components/molecules/ResultSet/ResultSet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\ResultSet\\ResultSet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



let ResultSet = ({
  list,
  sortValue
}) => {
  let listArr = [];
  const sortVal = sortValue;

  if (list && list.results) {
    listArr = [...list.results];

    if (sortVal === "Descending") {
      // console.log("Name deces", list.results);  
      listArr = listArr.sort(function (ele1, ele2) {
        return ele2.id - ele1.id;
      });
    } // console.log("Name", list.results);

  } //console.log("sort", sortValue);


  return listArr.length ? listArr.map(({
    id,
    image,
    name,
    status,
    species,
    gender,
    origin,
    location
  }) => __jsx("div", {
    className: "col-md-4 col-3 tile",
    key: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "tile-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "top-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "id: ", id, " - created 2 years ago"))), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "left-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "STATUS"), __jsx("span", {
    className: "right-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, status)), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "left-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Species"), __jsx("span", {
    className: "right-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, species)), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "left-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Gender"), __jsx("span", {
    className: "right-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, gender)), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "left-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Origin"), __jsx("span", {
    className: "right-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, origin.name)), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "left-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Last loaction"), __jsx("span", {
    className: "right-ele",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, location.name)))))) : __jsx("div", {
    className: "no-results",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, "No results Found...");
};

/* harmony default export */ __webpack_exports__["default"] = (ResultSet);

/***/ }),

/***/ "./components/molecules/ResultSet/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/ResultSet/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultSet */ "./components/molecules/ResultSet/ResultSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ResultSet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/SearchBox/SearchBox.js":
/*!*****************************************************!*\
  !*** ./components/molecules/SearchBox/SearchBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\SearchBox\\SearchBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class SearchBox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.state = {
      inputValue: ""
    };
  }

  handleInputClick(e) {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    });
  }

  render() {
    const {
      inputValue
    } = this.state;
    const {
      handleSearchSubmit
    } = this.props;
    return __jsx("div", {
      className: "search-box col-6 float-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, "Search By Name"), __jsx("input", {
      type: "text",
      onChange: this.handleInputClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("input", {
      type: "button",
      value: "Search",
      onClick: () => handleSearchSubmit(inputValue),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./components/molecules/SearchBox/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/SearchBox/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox */ "./components/molecules/SearchBox/SearchBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SearchBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/SelectedFilter/SelectedFilter.js":
/*!***************************************************************!*\
  !*** ./components/molecules/SelectedFilter/SelectedFilter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\SelectedFilter\\SelectedFilter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SelectedFilter({
  filters,
  removeFilter
}) {
  return Object.keys(filters).map(category => {
    const filterList = filters[category].split("|");
    return !!filterList[0] && filterList.map(id => __jsx("div", {
      className: "selected-filter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    }, id), __jsx("a", {
      href: "javascript:void(0)",
      onClick: () => removeFilter(id, category),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, "X")));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SelectedFilter);

/***/ }),

/***/ "./components/molecules/SelectedFilter/index.js":
/*!******************************************************!*\
  !*** ./components/molecules/SelectedFilter/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectedFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectedFilter */ "./components/molecules/SelectedFilter/SelectedFilter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SelectedFilter__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/SortBox/SortBox.js":
/*!*************************************************!*\
  !*** ./components/molecules/SortBox/SortBox.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\molecules\\SortBox\\SortBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SortBox({
  handleSort
}) {
  return __jsx("div", {
    className: "sort-dropdown col-4 float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("select", {
    name: "sort-order",
    className: "float-right",
    onChange: handleSort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Sort By ID"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Ascending"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Descending")));
}

/* harmony default export */ __webpack_exports__["default"] = (SortBox);

/***/ }),

/***/ "./components/molecules/SortBox/index.js":
/*!***********************************************!*\
  !*** ./components/molecules/SortBox/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortBox */ "./components/molecules/SortBox/SortBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SortBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/Game/Game.js":
/*!*******************************************!*\
  !*** ./components/organisms/Game/Game.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_ResultSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/ResultSet */ "./components/molecules/ResultSet/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Heading */ "./components/molecules/Heading/index.js");
/* harmony import */ var _molecules_FilterBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/FilterBox */ "./components/molecules/FilterBox/index.js");
/* harmony import */ var _molecules_SelectedFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/SelectedFilter */ "./components/molecules/SelectedFilter/index.js");
/* harmony import */ var _molecules_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/SearchBox */ "./components/molecules/SearchBox/index.js");
/* harmony import */ var _molecules_SortBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/SortBox */ "./components/molecules/SortBox/index.js");
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\organisms\\Game\\Game.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import './Grid.css';
// import './Game.module.scss'







class Game extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
    const filterobj = [{
      heading: "Species",
      filterobj: [{
        label: "Human",
        id: "human",
        grpclass: "species"
      }, {
        label: "Mytholog",
        id: "mytholog",
        grpclass: "species"
      }, {
        label: "Humanoid",
        id: "humanoid",
        grpclass: "species"
      }]
    }, {
      heading: "Gender",
      filterobj: [{
        label: "Male",
        id: "male",
        grpclass: "gender"
      }, {
        label: "Female",
        id: "female",
        grpclass: "gender"
      }]
    }, {
      heading: "Status",
      filterobj: [{
        label: "Alive",
        id: "alive",
        grpclass: "status"
      }, {
        label: "Dead",
        id: "dead",
        grpclass: "status"
      }, {
        label: "Unknown",
        id: "unknown",
        grpclass: "status"
      }]
    }]; // Don't call this.setState() here!

    this.state = {
      filterobj: filterobj,
      filters: {
        gender: "",
        status: "",
        species: ""
      },
      sortValue: "Ascending"
    };
  }

  componentWillMount() {
    const {
      getList
    } = this.props;
    getList();
  }

  handleFilterClick(event, id, filterHeading, grpclass) {
    const isChecked = event ? event.target.checked : false;
    const {
      getList
    } = this.props;
    const {
      filters
    } = this.state;
    const category = filterHeading.toLowerCase();
    let newValue = "";

    if (isChecked) {
      newValue = !!filters[category] ? filters[category] + '|' + id : id;
    } else {
      let arr = filters[category].split("|");
      arr = arr.filter(item => item !== id);
      newValue = arr.join("|");
    }

    this.setState({
      filters: _objectSpread(_objectSpread({}, filters), {}, {
        [category]: newValue
      })
    }, () => {
      getList(this.state.filters);
    });
  }

  handleSort(event) {
    const sortValue = event.target.value;
    this.setState({
      sortValue: sortValue
    });
  }

  removeFilter(id, category) {
    this.handleFilterClick(false, id, category);
  }

  handleSearchSubmit(inputValue) {
    const {
      getList
    } = this.props;
    getList({
      name: inputValue
    });
  }

  render() {
    const {
      list,
      getList
    } = this.props;
    const {
      filterobj,
      filters,
      sortValue
    } = this.state;
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-md-3 col-12-sm left-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(_molecules_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Filters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }), filterobj.map(({
      heading,
      filterobj
    }) => __jsx(_molecules_FilterBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      filterHeading: heading,
      filterobj: filterobj,
      handleFilterClick: this.handleFilterClick,
      filters: filters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "col-md-9 col-12-sm right-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, __jsx(_molecules_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Selected Filters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }), __jsx(_molecules_SelectedFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
      filters: filters,
      removeFilter: this.removeFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row middle-row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }, __jsx(_molecules_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleSearchSubmit: this.handleSearchSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 29
      }
    }), __jsx(_molecules_SortBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleSort: this.handleSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "row box-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, __jsx(_molecules_ResultSet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      list: list,
      sortValue: sortValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    })))));
  }

}

const mapStateToProps = state => {
  return {
    list: state.listingData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: payload => dispatch({
      type: "GET_LIST",
      payload
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Game));

/***/ }),

/***/ "./components/organisms/Game/Game.reducer.js":
/*!***************************************************!*\
  !*** ./components/organisms/Game/Game.reducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LIST_RECEIVED':
      return _objectSpread(_objectSpread({}, state), {}, {
        listingData: action.jsonObj
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./components/organisms/Game/Game.saga.js":
/*!************************************************!*\
  !*** ./components/organisms/Game/Game.saga.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);


function* fetchList(action) {
  let payload = {};

  if (action && action.payload) {
    payload = action.payload;
  }

  var params = Object.keys(payload).filter(function (key) {
    return payload[key] ? true : false;
  }).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
  }).join('&');
  const data = yield fetch('https://rickandmortyapi.com/api/character/?' + params, {
    method: 'GET'
  }).then(response => response.json());
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
    type: "LIST_RECEIVED",
    jsonObj: data || [{
      error: json.message
    }]
  });
}

function* actionWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('GET_LIST', fetchList);
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([actionWatcher()]);
}

/***/ }),

/***/ "./components/organisms/Game/index.js":
/*!********************************************!*\
  !*** ./components/organisms/Game/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./components/organisms/Game/Game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Game__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/templates/GameTemplate.js":
/*!**********************************************!*\
  !*** ./components/templates/GameTemplate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/templates/Layout.js");
/* harmony import */ var _organisms_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/Game */ "./components/organisms/Game/index.js");
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\templates\\GameTemplate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class GameTemplate extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx(_organisms_Game__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameTemplate);

/***/ }),

/***/ "./components/templates/Layout.js":
/*!****************************************!*\
  !*** ./components/templates/Layout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _organisms_Game_Game_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/Game/Game.reducer */ "./components/organisms/Game/Game.reducer.js");
/* harmony import */ var _organisms_Game_Game_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/Game/Game.saga */ "./components/organisms/Game/Game.saga.js");
var _jsxFileName = "C:\\Users\\guglani lalit\\Documents\\react-assignment\\components\\templates\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Layout = ({
  children
}) => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_organisms_Game_Game_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(sagaMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_4__["logger"]));
  sagaMiddleware.run(_organisms_Game_Game_saga__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Header"), children, __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "footer"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_templates_GameTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/templates/GameTemplate */ "./components/templates/GameTemplate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_templates_GameTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\guglani lalit\Documents\react-assignment\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvRmlsdGVyQm94L0ZpbHRlckJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9GaWx0ZXJCb3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVhZGluZy9IZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmVzdWx0U2V0L1Jlc3VsdFNldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9SZXN1bHRTZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvU2VhcmNoQm94L1NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2hCb3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvU2VsZWN0ZWRGaWx0ZXIvU2VsZWN0ZWRGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvU2VsZWN0ZWRGaWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvU29ydEJveC9Tb3J0Qm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NvcnRCb3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvR2FtZS9HYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0dhbWUvR2FtZS5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0dhbWUvR2FtZS5zYWdhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0dhbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvR2FtZVRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiRmlsdGVyQm94IiwiZmlsdGVySGVhZGluZyIsImZpbHRlcm9iaiIsImhhbmRsZUZpbHRlckNsaWNrIiwiZmlsdGVycyIsImNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJvYmoiLCJzcGxpdCIsIm1hcCIsImxhYmVsIiwiaWQiLCJncnBjbGFzcyIsImluZGV4IiwiZXZlbnQiLCJpbmRleE9mIiwiSGVhZGluZyIsIm5hbWUiLCJSZXN1bHRTZXQiLCJsaXN0Iiwic29ydFZhbHVlIiwibGlzdEFyciIsInNvcnRWYWwiLCJyZXN1bHRzIiwic29ydCIsImVsZTEiLCJlbGUyIiwibGVuZ3RoIiwiaW1hZ2UiLCJzdGF0dXMiLCJzcGVjaWVzIiwiZ2VuZGVyIiwib3JpZ2luIiwibG9jYXRpb24iLCJTZWFyY2hCb3giLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVJbnB1dENsaWNrIiwiYmluZCIsInN0YXRlIiwiaW5wdXRWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiaGFuZGxlU2VhcmNoU3VibWl0IiwiU2VsZWN0ZWRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyTGlzdCIsIlNvcnRCb3giLCJoYW5kbGVTb3J0IiwiR2FtZSIsImhlYWRpbmciLCJjb21wb25lbnRXaWxsTW91bnQiLCJnZXRMaXN0IiwiaXNDaGVja2VkIiwiY2hlY2tlZCIsIm5ld1ZhbHVlIiwiYXJyIiwiZmlsdGVyIiwiaXRlbSIsImpvaW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJsaXN0aW5nRGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicGF5bG9hZCIsInR5cGUiLCJjb25uZWN0IiwicmVkdWNlciIsImFjdGlvbiIsImpzb25PYmoiLCJmZXRjaExpc3QiLCJwYXJhbXMiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicHV0IiwiZXJyb3IiLCJtZXNzYWdlIiwiYWN0aW9uV2F0Y2hlciIsInRha2VMYXRlc3QiLCJyb290U2FnYSIsImFsbCIsIkdhbWVUZW1wbGF0ZSIsIkxheW91dCIsImNoaWxkcmVuIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJsb2dnZXIiLCJydW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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LGNBREosRUFFS0gsUUFGTCxFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQURKO0FBT0gsQ0FmRDs7QUFpQmVELHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gRmlsdGVyQm94KHsgZmlsdGVySGVhZGluZywgZmlsdGVyb2JqLCBoYW5kbGVGaWx0ZXJDbGljaywgZmlsdGVycyB9KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBmaWx0ZXJIZWFkaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgb2JqID0gZmlsdGVyc1tjYXRlZ29yeV0uc3BsaXQoXCJ8XCIpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJveFwiPlxuICAgICAgICAgICAgPGgzPntmaWx0ZXJIZWFkaW5nfTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2ZpbHRlcm9iai5tYXAoKHsgbGFiZWwsIGlkLCBncnBjbGFzcyB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXtncnBjbGFzc30gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soZXZlbnQsIGlkLCBmaWx0ZXJIZWFkaW5nLCBncnBjbGFzcyl9IGlkPXtpZH0gY2hlY2tlZD17b2JqICYmIG9iai5pbmRleE9mKGlkKSAhPT0gLTF9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCb3g7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GaWx0ZXJCb3gnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEhlYWRpbmcoe25hbWV9KSB7XG4gICAgcmV0dXJuIDxoMj57bmFtZX08L2gyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlYWRpbmcnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmxldCBSZXN1bHRTZXQgPSAoeyBsaXN0LCBzb3J0VmFsdWUgfSkgPT4ge1xuICBsZXQgbGlzdEFyciA9IFtdO1xuICBjb25zdCBzb3J0VmFsID0gc29ydFZhbHVlO1xuICBpZiAobGlzdCAmJiBsaXN0LnJlc3VsdHMpIHtcbiAgICBsaXN0QXJyID0gWy4uLmxpc3QucmVzdWx0c107XG4gICAgaWYgKHNvcnRWYWwgPT09IFwiRGVzY2VuZGluZ1wiKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk5hbWUgZGVjZXNcIiwgbGlzdC5yZXN1bHRzKTsgIFxuICAgICAgbGlzdEFyciA9IGxpc3RBcnIuc29ydChmdW5jdGlvbiAoZWxlMSwgZWxlMikgeyByZXR1cm4gZWxlMi5pZCAtIGVsZTEuaWQ7IH0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIk5hbWVcIiwgbGlzdC5yZXN1bHRzKTtcbiAgfVxuICAvL2NvbnNvbGUubG9nKFwic29ydFwiLCBzb3J0VmFsdWUpO1xuXG4gIHJldHVybiBsaXN0QXJyLmxlbmd0aCA/IChcbiAgICBsaXN0QXJyLm1hcCgoeyBpZCwgaW1hZ2UsIG5hbWUsIHN0YXR1cywgc3BlY2llcywgZ2VuZGVyLCBvcmlnaW4sIGxvY2F0aW9uIH0pID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLTMgdGlsZVwiIGtleT17aWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUtaW5uZXJcIj5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtdGV4dFwiPlxuICAgICAgICAgICAgICA8aDQ+e25hbWV9PC9oND5cbiAgICAgICAgICAgICAgPHA+aWQ6IHtpZH0gLSBjcmVhdGVkIDIgeWVhcnMgYWdvPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZnQtZWxlXCI+U1RBVFVTPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC1lbGVcIj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZnQtZWxlXCI+U3BlY2llczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtZWxlXCI+e3NwZWNpZXN9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVmdC1lbGVcIj5HZW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LWVsZVwiPntnZW5kZXJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVmdC1lbGVcIj5PcmlnaW48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LWVsZVwiPntvcmlnaW4ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWZ0LWVsZVwiPkxhc3QgbG9hY3Rpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LWVsZVwiPntsb2NhdGlvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKVxuXG4gICkgOiAoPGRpdiBjbGFzc05hbWU9XCJuby1yZXN1bHRzXCI+XG4gICAgTm8gcmVzdWx0cyBGb3VuZC4uLlxuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRTZXQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9SZXN1bHRTZXQnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNlYXJjaEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2xpY2sgPSB0aGlzLmhhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUlucHV0Q2xpY2soZSkge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBoYW5kbGVTZWFyY2hTdWJtaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3ggY29sLTYgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxwPlNlYXJjaCBCeSBOYW1lPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlNlYXJjaFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlYXJjaFN1Ym1pdChpbnB1dFZhbHVlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWFyY2hCb3gnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNlbGVjdGVkRmlsdGVyKHsgZmlsdGVycywgcmVtb3ZlRmlsdGVyIH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJMaXN0ID0gZmlsdGVyc1tjYXRlZ29yeV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAhIWZpbHRlckxpc3RbMF0gJiYgZmlsdGVyTGlzdC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0ZWQtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbHRlcihpZCwgY2F0ZWdvcnkpfT5YPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkRmlsdGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VsZWN0ZWRGaWx0ZXInOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNvcnRCb3goeyBoYW5kbGVTb3J0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtZHJvcGRvd24gY29sLTQgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnQtb3JkZXJcIiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIG9uQ2hhbmdlPXtoYW5kbGVTb3J0fT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNvcnQgQnkgSUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkFzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+RGVzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRCb3g7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Tb3J0Qm94JzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVzdWx0U2V0IGZyb20gJy4uLy4uL21vbGVjdWxlcy9SZXN1bHRTZXQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgJy4vR3JpZC5jc3MnO1xyXG4vLyBpbXBvcnQgJy4vR2FtZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL0hlYWRpbmcnO1xyXG5pbXBvcnQgRmlsdGVyQm94IGZyb20gJy4uLy4uL21vbGVjdWxlcy9GaWx0ZXJCb3gnO1xyXG5pbXBvcnQgU2VsZWN0ZWRGaWx0ZXIgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1NlbGVjdGVkRmlsdGVyJztcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi8uLi9tb2xlY3VsZXMvU2VhcmNoQm94JztcclxuaW1wb3J0IFNvcnRCb3ggZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1NvcnRCb3gnO1xyXG5cclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDbGljayA9IHRoaXMuaGFuZGxlRmlsdGVyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUZpbHRlciA9IHRoaXMucmVtb3ZlRmlsdGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hTdWJtaXQgPSB0aGlzLmhhbmRsZVNlYXJjaFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU29ydCA9IHRoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcm9iaiA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogXCJTcGVjaWVzXCIsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJvYmo6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSHVtYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJodW1hblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdycGNsYXNzOiBcInNwZWNpZXNcIixcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNeXRob2xvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm15dGhvbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JwY2xhc3M6IFwic3BlY2llc1wiLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkh1bWFub2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaHVtYW5vaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBncnBjbGFzczogXCJzcGVjaWVzXCIsXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiBcIkdlbmRlclwiLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyb2JqOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1hbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JwY2xhc3M6IFwiZ2VuZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRmVtYWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JwY2xhc3M6IFwiZ2VuZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiBcIlN0YXR1c1wiLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyb2JqOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFsaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWxpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBncnBjbGFzczogXCJzdGF0dXNcIixcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZWFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVhZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdycGNsYXNzOiBcInN0YXR1c1wiLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ1bmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JwY2xhc3M6IFwic3RhdHVzXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBjYWxsIHRoaXMuc2V0U3RhdGUoKSBoZXJlIVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcm9iajogZmlsdGVyb2JqLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBnZW5kZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzcGVjaWVzOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNvcnRWYWx1ZTogXCJBc2NlbmRpbmdcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0TGlzdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBnZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmlsdGVyQ2xpY2soZXZlbnQsIGlkLCBmaWx0ZXJIZWFkaW5nLCBncnBjbGFzcykge1xyXG4gICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGV2ZW50ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCB7IGdldExpc3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZmlsdGVySGVhZGluZy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICEhZmlsdGVyc1tjYXRlZ29yeV0gPyBmaWx0ZXJzW2NhdGVnb3J5XSArICd8JyArIGlkIDogaWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IGZpbHRlcnNbY2F0ZWdvcnldLnNwbGl0KFwifFwiKTtcclxuICAgICAgICAgICAgYXJyID0gYXJyLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGlkKVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGFyci5qb2luKFwifFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgW2NhdGVnb3J5XTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgZ2V0TGlzdCh0aGlzLnN0YXRlLmZpbHRlcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU29ydChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHNvcnRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29ydFZhbHVlOiBzb3J0VmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlRmlsdGVyKGlkLCBjYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2xpY2soZmFsc2UsIGlkLCBjYXRlZ29yeSlcclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWFyY2hTdWJtaXQoaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0TGlzdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBnZXRMaXN0KHsgbmFtZTogaW5wdXRWYWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsaXN0LCBnZXRMaXN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgZmlsdGVyb2JqLCBmaWx0ZXJzLCBzb3J0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtMTItc20gbGVmdC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgbmFtZT1cIkZpbHRlcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyb2JqLm1hcCgoeyBoZWFkaW5nLCBmaWx0ZXJvYmogfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckJveCBmaWx0ZXJIZWFkaW5nPXtoZWFkaW5nfSBmaWx0ZXJvYmo9e2ZpbHRlcm9ian0gaGFuZGxlRmlsdGVyQ2xpY2s9e3RoaXMuaGFuZGxlRmlsdGVyQ2xpY2t9IGZpbHRlcnM9e2ZpbHRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTkgY29sLTEyLXNtIHJpZ2h0LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBuYW1lPVwiU2VsZWN0ZWQgRmlsdGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZEZpbHRlciBmaWx0ZXJzPXtmaWx0ZXJzfSByZW1vdmVGaWx0ZXI9e3RoaXMucmVtb3ZlRmlsdGVyfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWlkZGxlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBoYW5kbGVTZWFyY2hTdWJtaXQ9e3RoaXMuaGFuZGxlU2VhcmNoU3VibWl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvcnRCb3ggaGFuZGxlU29ydD17dGhpcy5oYW5kbGVTb3J0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm94LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3VsdFNldCBsaXN0PXtsaXN0fSBzb3J0VmFsdWU9e3NvcnRWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogc3RhdGUubGlzdGluZ0RhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMaXN0OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkdFVF9MSVNUXCIsIHBheWxvYWQgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR2FtZSk7XHJcbiIsImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTElTVF9SRUNFSVZFRCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXN0aW5nRGF0YTogYWN0aW9uLmpzb25PYmogfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmZ1bmN0aW9uKiBmZXRjaExpc3QoYWN0aW9uKSB7XHJcbiAgICBsZXQgcGF5bG9hZCA9IHt9O1xyXG4gICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmtleXMocGF5bG9hZClcclxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWRba2V5XSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXlsb2FkW2tleV0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbignJicpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkYXRhID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLz8nICsgcGFyYW1zLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFwiTElTVF9SRUNFSVZFRFwiLCBqc29uT2JqOiBkYXRhIHx8IFt7IGVycm9yOiBqc29uLm1lc3NhZ2UgfV0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhY3Rpb25XYXRjaGVyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCgnR0VUX0xJU1QnLCBmZXRjaExpc3QpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGFjdGlvbldhdGNoZXIoKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dhbWUnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9vcmdhbmlzbXMvR2FtZSc7XHJcblxyXG5jbGFzcyBHYW1lVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R2FtZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lVGVtcGxhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL29yZ2FuaXNtcy9HYW1lL0dhbWUucmVkdWNlcic7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9vcmdhbmlzbXMvR2FtZS9HYW1lLnNhZ2EnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSwgbG9nZ2VyKSxcclxuICAgICk7XHJcbiAgICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+SGVhZGVyPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPGZvb3Rlcj5mb290ZXI8L2Zvb3Rlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0dhbWVUZW1wbGF0ZSc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=