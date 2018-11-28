(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/balena-temen sync recursive":
/*!****************************************!*\
  !*** ./node_modules/balena-temen sync ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/balena-temen sync recursive\";\n\n//# sourceURL=home/circleci/project/node_modules/balena-temen_sync");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/App.css":
/*!***********************************************!*\
  !*** ./node_modules/css-loader!./src/App.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".App {\\n  margin: 1rem;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=home/circleci/project/src/App.css");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./App.css */ \"./node_modules/css-loader/index.js!./src/App.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=home/circleci/project/src/App.css");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rendition */ \"./node_modules/rendition/dist/index.js\");\n/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rendition__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var balena_temen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! balena-temen */ \"./node_modules/balena-temen/balena_temen.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      json_schema: '',\n      errors: ''\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"evaluate\",\n    value: function evaluate(value) {\n      try {\n        var stringify = function stringify(value) {\n          return JSON.stringify(value, null, 2);\n        };\n\n        var parse = function parse(value) {\n          return JSON.parse(value);\n        };\n\n        var evaluated = stringify(balena_temen__WEBPACK_IMPORTED_MODULE_3__[\"evaluate\"](parse(value)));\n        this.setState({\n          json_schema: evaluated\n        });\n        this.setState({\n          errors: ''\n        });\n      } catch (e) {\n        this.setState({\n          json_schema: ''\n        });\n        this.setState({\n          errors: e\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], null, \"Play with reconfix\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Textarea\"], {\n        monospace: true,\n        placeholder: \"yaml\",\n        onInput: function onInput(event) {\n          return _this2.evaluate(event.target.value);\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Textarea\"], {\n        monospace: true,\n        placeholder: \"json schema\",\n        readOnly: true,\n        value: this.state.json_schema\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Textarea\"], {\n        monospace: true,\n        placeholder: \"ui object\"\n      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__[\"Textarea\"], {\n        monospace: true,\n        placeholder: \"errors\",\n        readOnly: true,\n        value: this.state.errors\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=home/circleci/project/src/App.js");

/***/ })

}]);