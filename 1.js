(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./src/App.css":
/*!***********************************************!*\
  !*** ./node_modules/css-loader!./src/App.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  margin: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./App.css */ "./node_modules/css-loader/index.js!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rendition */ "./node_modules/rendition/dist/index.js");
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rendition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rendition_dist_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rendition/dist/unstable */ "./node_modules/rendition/dist/unstable/index.js");
/* harmony import */ var rendition_dist_unstable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rendition_dist_unstable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var balena_cdsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! balena-cdsl */ "./node_modules/balena-cdsl/balena_cdsl.js");
/* harmony import */ var _Links_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Links.tsx */ "./src/Links.tsx");
/* harmony import */ var _Permalink_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Permalink.tsx */ "./src/Permalink.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var stringify = function stringify(value) {
  return JSON.stringify(value, null, 2);
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      json_schema_text: '',
      json_schema: {},
      ui_object_text: '',
      ui_object: {},
      yaml_text: '',
      has_error: false,
      formData: '',
      errors: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "evaluate",
    value: function evaluate(value) {
      this.setState({
        yaml_text: value
      });

      try {
        var evaluated = balena_cdsl__WEBPACK_IMPORTED_MODULE_4__["generate_ui"](value);
        this.setState({
          json_schema: evaluated.json_schema,
          ui_object: evaluated.ui_object,
          json_schema_text: stringify(evaluated.json_schema),
          ui_object_text: stringify(evaluated.ui_object),
          has_error: false
        });
      } catch (e) {
        this.setState({
          has_error: true,
          errors: e
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDataFromUrl();
    }
  }, {
    key: "setDataFromUrl",
    value: function setDataFromUrl() {
      var text = _Permalink_tsx__WEBPACK_IMPORTED_MODULE_6__["default"].decode();

      if (text) {
        this.evaluate(text);
      }
    }
  }, {
    key: "renderFormData",
    value: function renderFormData(event) {
      try {
        var data = event.formData;
        this.setState({
          formData: stringify(data)
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "noTab",
    value: function noTab(event) {
      var keyCode = event.keyCode || event.which;

      if (keyCode == 9) {
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Links_tsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Permalink_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: this.state.yaml_text
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        flexDirection: 'column'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
        monospace: true,
        minRows: 12,
        autoRows: true,
        maxRows: 16,
        placeholder: "yaml",
        onChange: function onChange(event) {
          return _this2.evaluate(event.target.value);
        },
        value: this.state.yaml_text,
        onKeyDown: function onKeyDown(event) {
          return _this2.noTab(event);
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), !this.state.has_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Heading"].h4, null, "Rendered form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition_dist_unstable__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        schema: this.state.json_schema,
        uiSchema: this.state.ui_object,
        onFormSubmit: function onFormSubmit(event) {
          return _this2.renderFormData(event);
        }
      }))), this.state.formData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Heading"].h4, null, "Form data (dry json)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
        monospace: true,
        autoRows: true,
        readOnly: true,
        placeholder: 'form data',
        value: this.state.formData,
        onChange: function onChange(event) {}
      }))) : null) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, this.state.has_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
        monospace: true,
        autoRows: true,
        readOnly: true,
        placeholder: "errors",
        onChange: function onChange(event) {},
        value: this.state.errors
      }))) : null, !this.state.has_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Heading"].h4, null, "JSON and UI schemas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
        monospace: true,
        autoRows: true,
        readOnly: true,
        maxRows: 16,
        placeholder: "json schema",
        onChange: function onChange(event) {},
        value: this.state.json_schema_text
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
        monospace: true,
        autoRows: true,
        readOnly: true,
        maxRows: 16,
        placeholder: "ui object",
        onChange: function onChange(event) {},
        value: this.state.ui_object_text
      }))) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Divider"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Links.tsx":
/*!***********************!*\
  !*** ./src/Links.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rendition */ "./node_modules/rendition/dist/index.js");
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rendition__WEBPACK_IMPORTED_MODULE_1__);



class Links extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rendition__WEBPACK_IMPORTED_MODULE_1__["Box"], null,
            "Examples:",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: '?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string' }, "one property"),
            "\u00A0|\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: '?yaml=title%3A resin-cli demo%0Aversion%3A 1%0Adefinitions%3A%0A%20 bootPartition%3A %26BOOT_PARTITION%0A%20%20%20 partition%3A 1%0Amapping%3A%0A%20 targets%3A%0A%20%20%20 config_json%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A json%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fconfig.json%0A%20%20%20 resin_wifi%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A ini%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fsystem-connections%2Fresin-wifi%0Aproperties%3A%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 maxLength%3A 32%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi.ssid%0A%20%20%20%20%20%20%20 - passphrase%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network Key%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 8%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi-security.psk%0A%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20 template%3A%0A%20%20%20%20%20%20%20%20%20 connection%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A wifi%0A%20%20%20%20%20%20%20%20%20 wifi%3A%0A%20%20%20%20%20%20%20%20%20%20%20 hidden%3A true%0A%20%20%20%20%20%20%20%20%20%20%20 mode%3A infrastructure%0A%20%20%20%20%20%20%20%20%20 wifi-security%3A%0A%20%20%20%20%20%20%20%20%20%20%20 auth-alg%3A open%0A%20%20%20%20%20%20%20%20%20%20%20 key-mgmt%3A wpa-psk%0A%20%20%20%20%20%20%20%20%20 ipv4%3A%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20%20%20%20%20%20%20%20%20 ipv6%3A%0A%20%20%20%20%20%20%20%20%20%20%20 addr-gen-mode%3A stable-privacy%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - hostname%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Device Hostname%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A hostname%0A%20%20%20%20%20%20%20 - persistentLogging%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Do you want to enable persistent logging%3F%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A boolean%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A false%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A persistentLogging' }, "network configuration"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rendition__WEBPACK_IMPORTED_MODULE_1__["Divider"], null),
            "Documentation:",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: 'https://github.com/balena-io-modules/balena-cdsl/issues/15' }, "What is supported"),
            "\u00A0|\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: 'https://github.com/balena-io/balena/blob/832f5551127dd8e1e82fa082bea97fc4db81c3ce/specs/configuration-dsl.md' }, "DSL specification"),
            "\u00A0|\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: 'https://github.com/balena-io/balena/blob/63ca3a4b026694750f8d6f4e3eea9792cf344426/specs/configuration-dsl-mapping-extension.md' }, "Mapping extensions"),
            "\u00A0|\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: 'https://github.com/balena-io/balena/blob/8e9c7c177e8d730484fbfce5c4281d4c7c205565/specs/json-schema-extensions.md' }, "JSON Schema extensions")));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Links);


/***/ }),

/***/ "./src/Permalink.tsx":
/*!***************************!*\
  !*** ./src/Permalink.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rendition */ "./node_modules/rendition/dist/index.js");
/* harmony import */ var rendition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rendition__WEBPACK_IMPORTED_MODULE_1__);



const propertyName = 'yaml';
class Permalink extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rendition__WEBPACK_IMPORTED_MODULE_1__["Box"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rendition__WEBPACK_IMPORTED_MODULE_1__["Link"], { href: this.getPermalink() }, "permalink")));
    }
    getPermalink() {
        try {
            return '?' + propertyName + '=' + encodeURIComponent(this.props.text);
        }
        catch (e) {
            console.log(e);
        }
    }
    static decode() {
        try {
            const params = new URLSearchParams(window.location.search);
            const encoded = params.get(propertyName);
            if (params && encoded) {
                const yaml_from_url = decodeURIComponent(encoded);
                return yaml_from_url;
            }
            return null;
        }
        catch (e) {
            console.log(e);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Permalink);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9BcHAuY3NzP2FkN2IiLCIvLi9zcmMvQXBwLmpzIiwiLy4vc3JjL0xpbmtzLnRzeCIsIi8uL3NyYy9QZXJtYWxpbmsudHN4Il0sIm5hbWVzIjpbInN0cmluZ2lmeSIsInZhbHVlIiwiSlNPTiIsIkFwcCIsInN0YXRlIiwianNvbl9zY2hlbWFfdGV4dCIsImpzb25fc2NoZW1hIiwidWlfb2JqZWN0X3RleHQiLCJ1aV9vYmplY3QiLCJ5YW1sX3RleHQiLCJoYXNfZXJyb3IiLCJmb3JtRGF0YSIsImVycm9ycyIsInNldFN0YXRlIiwiZXZhbHVhdGVkIiwiY2RzbCIsImUiLCJzZXREYXRhRnJvbVVybCIsInRleHQiLCJQZXJtYWxpbmsiLCJkZWNvZGUiLCJldmFsdWF0ZSIsImV2ZW50IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJrZXlDb2RlIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5vVGFiIiwicmVuZGVyRm9ybURhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDZGQUE0QztBQUMvRTs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsU0FBUyxpQkFBaUIsOENBQThDLEdBQUc7O0FBRWxHOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLCtGQUFpRDs7QUFFdkUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFXQyxJQUFJLENBQUNGLFNB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QUFDO2dCQUNqRCxPQUFPLGFBQWE7YUFDcEI7WUFDRCxPQUFPLElBQUk7U0FDWDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7Q0FDRDtBQUVjLHdFQUFTLEVBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQXBwLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9BcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9BcHAuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgRmxleCwgSGVhZGluZywgVGV4dGFyZWF9IGZyb20gJ3JlbmRpdGlvbic7XG5pbXBvcnQge0Zvcm19IGZyb20gJ3JlbmRpdGlvbi9kaXN0L3Vuc3RhYmxlJ1xuaW1wb3J0ICogYXMgY2RzbCBmcm9tICdiYWxlbmEtY2RzbCc7XG5pbXBvcnQgTGlua3MgZnJvbSAnLi9MaW5rcy50c3gnXG5pbXBvcnQgUGVybWFsaW5rIGZyb20gXCIuL1Blcm1hbGluay50c3hcIjtcblxuXG5jb25zdCBzdHJpbmdpZnkgPSAodmFsdWUpID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAganNvbl9zY2hlbWFfdGV4dDogJycsXG4gICAgICBqc29uX3NjaGVtYToge30sXG4gICAgICB1aV9vYmplY3RfdGV4dDogJycsXG4gICAgICB1aV9vYmplY3Q6IHt9LFxuICAgICAgeWFtbF90ZXh0OiAnJyxcbiAgICAgIGhhc19lcnJvcjogZmFsc2UsXG4gICAgICBmb3JtRGF0YTogJycsXG4gICAgICBlcnJvcnM6ICcnXG4gICAgfVxuXG4gIH1cblxuICBldmFsdWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3lhbWxfdGV4dDogdmFsdWV9KVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBldmFsdWF0ZWQgPSBjZHNsLmdlbmVyYXRlX3VpKHZhbHVlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGpzb25fc2NoZW1hOiBldmFsdWF0ZWQuanNvbl9zY2hlbWEsXG4gICAgICAgIHVpX29iamVjdDogZXZhbHVhdGVkLnVpX29iamVjdCxcbiAgICAgICAganNvbl9zY2hlbWFfdGV4dDogc3RyaW5naWZ5KGV2YWx1YXRlZC5qc29uX3NjaGVtYSksXG4gICAgICAgIHVpX29iamVjdF90ZXh0OiBzdHJpbmdpZnkoZXZhbHVhdGVkLnVpX29iamVjdCksXG4gICAgICAgIGhhc19lcnJvcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgZXJyb3JzOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0RGF0YUZyb21VcmwoKVxuICB9XG5cbiAgc2V0RGF0YUZyb21VcmwoKSB7XG4gICAgY29uc3QgdGV4dCA9IFBlcm1hbGluay5kZWNvZGUoKVxuICAgIGlmKHRleHQpIHtcbiAgICAgIHRoaXMuZXZhbHVhdGUodGV4dCk7XG4gICAgfVxuICB9XG5cblxuICByZW5kZXJGb3JtRGF0YShldmVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gZXZlbnQuZm9ybURhdGFcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1EYXRhOiBzdHJpbmdpZnkoZGF0YSl9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9XG5cbiAgbm9UYWIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuICAgIGlmIChrZXlDb2RlID09IDkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8TGlua3MvPlxuICAgICAgICA8RGl2aWRlci8+XG4gICAgICAgIDxQZXJtYWxpbmsgdGV4dD17dGhpcy5zdGF0ZS55YW1sX3RleHR9Lz5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXsnY29sdW1uJ30+XG4gICAgICAgICAgICA8RmxleD5cblx0XHRcdDxUZXh0YXJlYSBtb25vc3BhY2UgbWluUm93cz17MTJ9IGF1dG9Sb3dzPXt0cnVlfSBtYXhSb3dzPXsxNn0gcGxhY2Vob2xkZXI9XCJ5YW1sXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5ldmFsdWF0ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnlhbWxfdGV4dH0gb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm5vVGFiKGV2ZW50KX1cbiAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIvPlxuICAgICAgICB7IXRoaXMuc3RhdGUuaGFzX2Vycm9yID9cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcuaDQ+UmVuZGVyZWQgZm9ybTwvSGVhZGluZy5oND5cbiAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgIDxGb3JtIHNjaGVtYT17dGhpcy5zdGF0ZS5qc29uX3NjaGVtYX0gdWlTY2hlbWE9e3RoaXMuc3RhdGUudWlfb2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICBvbkZvcm1TdWJtaXQ9e2V2ZW50ID0+IHRoaXMucmVuZGVyRm9ybURhdGEoZXZlbnQpfS8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9ybURhdGEgP1xuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcuaDQ+Rm9ybSBkYXRhIChkcnkganNvbik8L0hlYWRpbmcuaDQ+XG4gICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBtb25vc3BhY2UgYXV0b1Jvd3M9e3RydWV9IHJlYWRPbmx5PXt0cnVlfSBwbGFjZWhvbGRlcj17J2Zvcm0gZGF0YSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8RGl2aWRlci8+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaGFzX2Vycm9yID9cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBtb25vc3BhY2UgYXV0b1Jvd3M9e3RydWV9IHJlYWRPbmx5PXt0cnVlfSBwbGFjZWhvbGRlcj1cImVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVycm9yc30vPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzX2Vycm9yID9cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8SGVhZGluZy5oND5KU09OIGFuZCBVSSBzY2hlbWFzPC9IZWFkaW5nLmg0PlxuICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8VGV4dGFyZWEgbW9ub3NwYWNlIGF1dG9Sb3dzPXt0cnVlfSByZWFkT25seT17dHJ1ZX0gbWF4Um93cz17MTZ9IHBsYWNlaG9sZGVyPVwianNvbiBzY2hlbWFcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5qc29uX3NjaGVtYV90ZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRhcmVhIG1vbm9zcGFjZSBhdXRvUm93cz17dHJ1ZX0gcmVhZE9ubHk9e3RydWV9IG1heFJvd3M9ezE2fSBwbGFjZWhvbGRlcj1cInVpIG9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVpX29iamVjdF90ZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8RGl2aWRlci8+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCb3gsIERpdmlkZXJ9IGZyb20gJ3JlbmRpdGlvbic7XG5cbmNsYXNzIExpbmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCb3g+XG5cdFx0XHRcdEV4YW1wbGVzOlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eyc/eWFtbD12ZXJzaW9uJTNBIDElMEFwcm9wZXJ0aWVzJTNBJTIwJTBBIC0gYSUzQSUwQSUyMCUyMCUyMCB0eXBlJTNBIHN0cmluZyd9PlxuXHRcdFx0XHRcdG9uZSBwcm9wZXJ0eVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCZuYnNwO3wmbmJzcDtcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnP3lhbWw9dGl0bGUlM0EgcmVzaW4tY2xpIGRlbW8lMEF2ZXJzaW9uJTNBIDElMEFkZWZpbml0aW9ucyUzQSUwQSUyMCBib290UGFydGl0aW9uJTNBICUyNkJPT1RfUEFSVElUSU9OJTBBJTIwJTIwJTIwIHBhcnRpdGlvbiUzQSAxJTBBbWFwcGluZyUzQSUwQSUyMCB0YXJnZXRzJTNBJTBBJTIwJTIwJTIwIGNvbmZpZ19qc29uJTNBJTBBJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgZmlsZSUwQSUyMCUyMCUyMCUyMCUyMCBmb3JtYXQlM0EganNvbiUwQSUyMCUyMCUyMCUyMCUyMCBsb2NhdGlvbiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCA8PCAlM0EgKkJPT1RfUEFSVElUSU9OJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0EgJTJGY29uZmlnLmpzb24lMEElMjAlMjAlMjAgcmVzaW5fd2lmaSUzQSUwQSUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIGZpbGUlMEElMjAlMjAlMjAlMjAlMjAgZm9ybWF0JTNBIGluaSUwQSUyMCUyMCUyMCUyMCUyMCBsb2NhdGlvbiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCA8PCAlM0EgKkJPT1RfUEFSVElUSU9OJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0EgJTJGc3lzdGVtLWNvbm5lY3Rpb25zJTJGcmVzaW4td2lmaSUwQXByb3BlcnRpZXMlM0ElMEElMjAgLSBuZXR3b3JrJTNBJTBBJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIE5ldHdvcmslMEElMjAlMjAlMjAlMjAlMjAgcHJvcGVydGllcyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCAtIHNzaWQlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgTmV0d29yayBTU0lEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0Egc3RyaW5nJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1pbkxlbmd0aCUzQSAxJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1heExlbmd0aCUzQSAzMiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSByZXNpbl93aWZpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0Egd2lmaS5zc2lkJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gcGFzc3BocmFzZSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBOZXR3b3JrIEtleSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHBhc3N3b3JkJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1pbkxlbmd0aCUzQSA4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIHJlc2luX3dpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSB3aWZpLXNlY3VyaXR5LnBzayUwQSUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSByZXNpbl93aWZpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRlbXBsYXRlJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGNvbm5lY3Rpb24lM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSB3aWZpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHdpZmklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgaGlkZGVuJTNBIHRydWUlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbW9kZSUzQSBpbmZyYXN0cnVjdHVyZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB3aWZpLXNlY3VyaXR5JTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGF1dGgtYWxnJTNBIG9wZW4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAga2V5LW1nbXQlM0Egd3BhLXBzayUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBpcHY0JTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1ldGhvZCUzQSBhdXRvJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGlwdjYlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgYWRkci1nZW4tbW9kZSUzQSBzdGFibGUtcHJpdmFjeSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtZXRob2QlM0EgYXV0byUwQSUyMCAtIGFkdmFuY2VkJTNBJTBBJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIEFkdmFuY2VkJTBBJTIwJTIwJTIwJTIwJTIwIHByb3BlcnRpZXMlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgLSBob3N0bmFtZSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBEZXZpY2UgSG9zdG5hbWUlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBzdHJpbmclMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgY29uZmlnX2pzb24lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSBob3N0bmFtZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCAtIHBlcnNpc3RlbnRMb2dnaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIERvIHlvdSB3YW50IHRvIGVuYWJsZSBwZXJzaXN0ZW50IGxvZ2dpbmclM0YlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBib29sZWFuJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGRlZmF1bHQlM0EgZmFsc2UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgY29uZmlnX2pzb24lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSBwZXJzaXN0ZW50TG9nZ2luZyd9PlxuXHRcdFx0XHRcdG5ldHdvcmsgY29uZmlndXJhdGlvblxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxEaXZpZGVyLz5cblx0XHRcdFx0RG9jdW1lbnRhdGlvbjpcblx0XHRcdFx0PGEgaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9iYWxlbmEtaW8tbW9kdWxlcy9iYWxlbmEtY2RzbC9pc3N1ZXMvMTUnfT5cblx0XHRcdFx0XHRXaGF0IGlzIHN1cHBvcnRlZFxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCZuYnNwO3wmbmJzcDtcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby9iYWxlbmEvYmxvYi84MzJmNTU1MTEyN2RkOGUxZTgyZmEwODJiZWE5N2ZjNGRiODFjM2NlL3NwZWNzL2NvbmZpZ3VyYXRpb24tZHNsLm1kJ30+XG5cdFx0XHRcdFx0RFNMIHNwZWNpZmljYXRpb25cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQmbmJzcDt8Jm5ic3A7XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9iYWxlbmEtaW8vYmFsZW5hL2Jsb2IvNjNjYTNhNGIwMjY2OTQ3NTBmOGQ2ZjRlM2VlYTk3OTJjZjM0NDQyNi9zcGVjcy9jb25maWd1cmF0aW9uLWRzbC1tYXBwaW5nLWV4dGVuc2lvbi5tZCd9PlxuXHRcdFx0XHRcdE1hcHBpbmcgZXh0ZW5zaW9uc1xuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCZuYnNwO3wmbmJzcDtcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby9iYWxlbmEvYmxvYi84ZTljN2MxNzdlOGQ3MzA0ODRmYmZjZTVjNDI4MWQ0YzdjMjA1NTY1L3NwZWNzL2pzb24tc2NoZW1hLWV4dGVuc2lvbnMubWQnfT5cblx0XHRcdFx0XHRKU09OIFNjaGVtYSBleHRlbnNpb25zXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvQm94PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rcztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCb3gsIEZsZXgsIExpbmssIFRleHRhcmVhfSBmcm9tICdyZW5kaXRpb24nO1xuXG5jb25zdCBwcm9wZXJ0eU5hbWUgPSAneWFtbCdcblxuaW50ZXJmYWNlIFBlcm1hbGlua1Byb3BzIHtcblx0dGV4dD86IHN0cmluZztcbn1cblxuY2xhc3MgUGVybWFsaW5rIGV4dGVuZHMgQ29tcG9uZW50PFBlcm1hbGlua1Byb3BzLCBhbnk+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogUGVybWFsaW5rUHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHQ8TGluayBocmVmPXt0aGlzLmdldFBlcm1hbGluaygpfT5cblx0XHRcdFx0XHRwZXJtYWxpbmtcblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9Cb3g+XG5cdFx0KVxuXHR9XG5cblx0Z2V0UGVybWFsaW5rKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gJz8nK3Byb3BlcnR5TmFtZSsnPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9wcy50ZXh0KVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUpXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGRlY29kZSgpOiBzdHJpbmcge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0XHRjb25zdCBlbmNvZGVkID0gcGFyYW1zLmdldChwcm9wZXJ0eU5hbWUpXG5cdFx0XHRpZiAocGFyYW1zICYmIGVuY29kZWQpIHtcblx0XHRcdFx0Y29uc3QgeWFtbF9mcm9tX3VybCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKVxuXHRcdFx0XHRyZXR1cm4geWFtbF9mcm9tX3VybFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlKVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJtYWxpbms7XG4iXSwic291cmNlUm9vdCI6IiJ9