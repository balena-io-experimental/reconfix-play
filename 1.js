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
      try {
        var params = new URLSearchParams(window.location.search);
        var encoded = params.get('yaml');

        if (params && encoded) {
          var yaml_from_url = decodeURIComponent(encoded);
          this.evaluate(yaml_from_url);
        }
      } catch (e) {
        console.log(e);
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
            return '?yaml=' + encodeURIComponent(this.props.text);
        }
        catch (e) {
            console.log(e);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Permalink);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9BcHAuY3NzP2FkN2IiLCIvLi9zcmMvQXBwLmpzIiwiLy4vc3JjL0xpbmtzLnRzeCIsIi8uL3NyYy9QZXJtYWxpbmsudHN4Il0sIm5hbWVzIjpbInN0cmluZ2lmeSIsInZhbHVlIiwiSlNPTiIsIkFwcCIsInN0YXRlIiwianNvbl9zY2hlbWFfdGV4dCIsImpzb25fc2NoZW1hIiwidWlfb2JqZWN0X3RleHQiLCJ1aV9vYmplY3QiLCJ5YW1sX3RleHQiLCJoYXNfZXJyb3IiLCJmb3JtRGF0YSIsImVycm9ycyIsInNldFN0YXRlIiwiZXZhbHVhdGVkIiwiY2RzbCIsImUiLCJzZXREYXRhRnJvbVVybCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZW5jb2RlZCIsImdldCIsInlhbWxfZnJvbV91cmwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJldmFsdWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImRhdGEiLCJrZXlDb2RlIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5vVGFiIiwicmVuZGVyRm9ybURhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDZGQUE0QztBQUMvRTs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsU0FBUyxpQkFBaUIsOENBQThDLEdBQUc7O0FBRWxHOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLCtGQUFpRDs7QUFFdkUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmO0FBRUE7QUFDQTtBQUNBO0FB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QUFJLENBQUM7U0FDckQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7SUFDRixDQUFDO0NBRUQ7QUFFYyx3RUFBUyxFQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BcHAge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL0FwcC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQXBwLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vQXBwLmNzc1wiO1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCb3gsIERpdmlkZXIsIEZsZXgsIEhlYWRpbmcsIFRleHRhcmVhfSBmcm9tICdyZW5kaXRpb24nO1xuaW1wb3J0IHtGb3JtfSBmcm9tICdyZW5kaXRpb24vZGlzdC91bnN0YWJsZSdcbmltcG9ydCAqIGFzIGNkc2wgZnJvbSAnYmFsZW5hLWNkc2wnO1xuaW1wb3J0IExpbmtzIGZyb20gJy4vTGlua3MudHN4J1xuaW1wb3J0IFBlcm1hbGluayBmcm9tIFwiLi9QZXJtYWxpbmsudHN4XCI7XG5cblxuY29uc3Qgc3RyaW5naWZ5ID0gKHZhbHVlKSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGpzb25fc2NoZW1hX3RleHQ6ICcnLFxuICAgICAganNvbl9zY2hlbWE6IHt9LFxuICAgICAgdWlfb2JqZWN0X3RleHQ6ICcnLFxuICAgICAgdWlfb2JqZWN0OiB7fSxcbiAgICAgIHlhbWxfdGV4dDogJycsXG4gICAgICBoYXNfZXJyb3I6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6ICcnLFxuICAgICAgZXJyb3JzOiAnJ1xuICAgIH1cblxuICB9XG5cbiAgZXZhbHVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt5YW1sX3RleHQ6IHZhbHVlfSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXZhbHVhdGVkID0gY2RzbC5nZW5lcmF0ZV91aSh2YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBqc29uX3NjaGVtYTogZXZhbHVhdGVkLmpzb25fc2NoZW1hLFxuICAgICAgICB1aV9vYmplY3Q6IGV2YWx1YXRlZC51aV9vYmplY3QsXG4gICAgICAgIGpzb25fc2NoZW1hX3RleHQ6IHN0cmluZ2lmeShldmFsdWF0ZWQuanNvbl9zY2hlbWEpLFxuICAgICAgICB1aV9vYmplY3RfdGV4dDogc3RyaW5naWZ5KGV2YWx1YXRlZC51aV9vYmplY3QpLFxuICAgICAgICBoYXNfZXJyb3I6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNfZXJyb3I6IHRydWUsXG4gICAgICAgIGVycm9yczogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldERhdGFGcm9tVXJsKClcbiAgfVxuXG4gIHNldERhdGFGcm9tVXJsKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICBjb25zdCBlbmNvZGVkID0gcGFyYW1zLmdldCgneWFtbCcpXG4gICAgICBpZiAocGFyYW1zICYmIGVuY29kZWQpIHtcbiAgICAgICAgY29uc3QgeWFtbF9mcm9tX3VybCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKVxuICAgICAgICB0aGlzLmV2YWx1YXRlKHlhbWxfZnJvbV91cmwpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlckZvcm1EYXRhKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5mb3JtRGF0YVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybURhdGE6IHN0cmluZ2lmeShkYXRhKX0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuICBub1RhYihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG4gICAgaWYgKGtleUNvZGUgPT0gOSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxMaW5rcy8+XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgPFBlcm1hbGluayB0ZXh0PXt0aGlzLnN0YXRlLnlhbWxfdGV4dH0vPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249eydjb2x1bW4nfT5cbiAgICAgICAgICAgIDxGbGV4PlxuXHRcdFx0PFRleHRhcmVhIG1vbm9zcGFjZSBtaW5Sb3dzPXsxMn0gYXV0b1Jvd3M9e3RydWV9IG1heFJvd3M9ezE2fSBwbGFjZWhvbGRlcj1cInlhbWxcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmV2YWx1YXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUueWFtbF90ZXh0fSBvbktleURvd249e2V2ZW50ID0+IHRoaXMubm9UYWIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8RGl2aWRlci8+XG4gICAgICAgIHshdGhpcy5zdGF0ZS5oYXNfZXJyb3IgP1xuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8SGVhZGluZy5oND5SZW5kZXJlZCBmb3JtPC9IZWFkaW5nLmg0PlxuICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgPEZvcm0gc2NoZW1hPXt0aGlzLnN0YXRlLmpzb25fc2NoZW1hfSB1aVNjaGVtYT17dGhpcy5zdGF0ZS51aV9vYmplY3R9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdD17ZXZlbnQgPT4gdGhpcy5yZW5kZXJGb3JtRGF0YShldmVudCl9Lz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtRGF0YSA/XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8SGVhZGluZy5oND5Gb3JtIGRhdGEgKGRyeSBqc29uKTwvSGVhZGluZy5oND5cbiAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgPFRleHRhcmVhIG1vbm9zcGFjZSBhdXRvUm93cz17dHJ1ZX0gcmVhZE9ubHk9e3RydWV9IHBsYWNlaG9sZGVyPXsnZm9ybSBkYXRhJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5oYXNfZXJyb3IgP1xuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgPFRleHRhcmVhIG1vbm9zcGFjZSBhdXRvUm93cz17dHJ1ZX0gcmVhZE9ubHk9e3RydWV9IHBsYWNlaG9sZGVyPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXJyb3JzfS8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNfZXJyb3IgP1xuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxIZWFkaW5nLmg0PkpTT04gYW5kIFVJIHNjaGVtYXM8L0hlYWRpbmcuaDQ+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxUZXh0YXJlYSBtb25vc3BhY2UgYXV0b1Jvd3M9e3RydWV9IHJlYWRPbmx5PXt0cnVlfSBtYXhSb3dzPXsxNn0gcGxhY2Vob2xkZXI9XCJqc29uIHNjaGVtYVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmpzb25fc2NoZW1hX3RleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dGFyZWEgbW9ub3NwYWNlIGF1dG9Sb3dzPXt0cnVlfSByZWFkT25seT17dHJ1ZX0gbWF4Um93cz17MTZ9IHBsYWNlaG9sZGVyPVwidWkgb2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudWlfb2JqZWN0X3RleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlcn0gZnJvbSAncmVuZGl0aW9uJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJveD5cblx0XHRcdFx0RXhhbXBsZXM6XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17Jz95YW1sPXZlcnNpb24lM0EgMSUwQXByb3BlcnRpZXMlM0ElMjAlMEEgLSBhJTNBJTBBJTIwJTIwJTIwIHR5cGUlM0Egc3RyaW5nJ30+XG5cdFx0XHRcdFx0b25lIHByb3BlcnR5XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eyc/eWFtbD10aXRsZSUzQSByZXNpbi1jbGkgZGVtbyUwQXZlcnNpb24lM0EgMSUwQWRlZmluaXRpb25zJTNBJTBBJTIwIGJvb3RQYXJ0aXRpb24lM0EgJTI2Qk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAgcGFydGl0aW9uJTNBIDElMEFtYXBwaW5nJTNBJTBBJTIwIHRhcmdldHMlM0ElMEElMjAlMjAlMjAgY29uZmlnX2pzb24lM0ElMEElMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBmaWxlJTBBJTIwJTIwJTIwJTIwJTIwIGZvcm1hdCUzQSBqc29uJTBBJTIwJTIwJTIwJTIwJTIwIGxvY2F0aW9uJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIDw8ICUzQSAqQk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSAlMkZjb25maWcuanNvbiUwQSUyMCUyMCUyMCByZXNpbl93aWZpJTNBJTBBJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgZmlsZSUwQSUyMCUyMCUyMCUyMCUyMCBmb3JtYXQlM0EgaW5pJTBBJTIwJTIwJTIwJTIwJTIwIGxvY2F0aW9uJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIDw8ICUzQSAqQk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSAlMkZzeXN0ZW0tY29ubmVjdGlvbnMlMkZyZXNpbi13aWZpJTBBcHJvcGVydGllcyUzQSUwQSUyMCAtIG5ldHdvcmslM0ElMEElMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgTmV0d29yayUwQSUyMCUyMCUyMCUyMCUyMCBwcm9wZXJ0aWVzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gc3NpZCUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBOZXR3b3JrIFNTSUQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBzdHJpbmclMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWluTGVuZ3RoJTNBIDElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWF4TGVuZ3RoJTNBIDMyJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIHJlc2luX3dpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSB3aWZpLnNzaWQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgLSBwYXNzcGhyYXNlJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIE5ldHdvcmsgS2V5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgcGFzc3dvcmQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWluTGVuZ3RoJTNBIDglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgcmVzaW5fd2lmaSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIHdpZmktc2VjdXJpdHkucHNrJTBBJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIHJlc2luX3dpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGVtcGxhdGUlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgY29ubmVjdGlvbiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHdpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgd2lmaSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBoaWRkZW4lM0EgdHJ1ZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtb2RlJTNBIGluZnJhc3RydWN0dXJlJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHdpZmktc2VjdXJpdHklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgYXV0aC1hbGclM0Egb3BlbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBrZXktbWdtdCUzQSB3cGEtcHNrJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGlwdjQlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWV0aG9kJTNBIGF1dG8lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgaXB2NiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBhZGRyLWdlbi1tb2RlJTNBIHN0YWJsZS1wcml2YWN5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1ldGhvZCUzQSBhdXRvJTBBJTIwIC0gYWR2YW5jZWQlM0ElMEElMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgQWR2YW5jZWQlMEElMjAlMjAlMjAlMjAlMjAgcHJvcGVydGllcyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCAtIGhvc3RuYW1lJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIERldmljZSBIb3N0bmFtZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHN0cmluZyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSBjb25maWdfanNvbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIGhvc3RuYW1lJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gcGVyc2lzdGVudExvZ2dpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgRG8geW91IHdhbnQgdG8gZW5hYmxlIHBlcnNpc3RlbnQgbG9nZ2luZyUzRiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIGJvb2xlYW4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgZGVmYXVsdCUzQSBmYWxzZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSBjb25maWdfanNvbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIHBlcnNpc3RlbnRMb2dnaW5nJ30+XG5cdFx0XHRcdFx0bmV0d29yayBjb25maWd1cmF0aW9uXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eyc/eWFtbD10aXRsZSUzQSByZXNpbi1jbGkgZGVtbyUwQXZlcnNpb24lM0EgMSUwQWRlZmluaXRpb25zJTNBJTBBJTIwIGJvb3RQYXJ0aXRpb24lM0EgJTI2Qk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAgcGFydGl0aW9uJTNBIDElMEFtYXBwaW5nJTNBJTBBJTIwIHRhcmdldHMlM0ElMEElMjAlMjAlMjAgY29uZmlnX2pzb24lM0ElMEElMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBmaWxlJTBBJTIwJTIwJTIwJTIwJTIwIGZvcm1hdCUzQSBqc29uJTBBJTIwJTIwJTIwJTIwJTIwIGxvY2F0aW9uJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIDw8ICUzQSAqQk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSAlMkZjb25maWcuanNvbiUwQSUyMCUyMCUyMCByZXNpbl93aWZpJTNBJTBBJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgZmlsZSUwQSUyMCUyMCUyMCUyMCUyMCBmb3JtYXQlM0EgaW5pJTBBJTIwJTIwJTIwJTIwJTIwIGxvY2F0aW9uJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIDw8ICUzQSAqQk9PVF9QQVJUSVRJT04lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSAlMkZzeXN0ZW0tY29ubmVjdGlvbnMlMkZyZXNpbi13aWZpJTBBcHJvcGVydGllcyUzQSUwQSUyMCAtIG5ldHdvcmslM0ElMEElMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgTmV0d29yayUwQSUyMCUyMCUyMCUyMCUyMCBwcm9wZXJ0aWVzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gc3NpZCUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBOZXR3b3JrIFNTSUQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBzdHJpbmclMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWluTGVuZ3RoJTNBIDElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWF4TGVuZ3RoJTNBIDMyJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIHJlc2luX3dpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgcGF0aCUzQSB3aWZpLnNzaWQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgLSBwYXNzcGhyYXNlJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIE5ldHdvcmsgS2V5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgcGFzc3dvcmQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWluTGVuZ3RoJTNBIDglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgcmVzaW5fd2lmaSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIHdpZmktc2VjdXJpdHkucHNrJTBBJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIHJlc2luX3dpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGVtcGxhdGUlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgY29ubmVjdGlvbiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHdpZmklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgd2lmaSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBoaWRkZW4lM0EgdHJ1ZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtb2RlJTNBIGluZnJhc3RydWN0dXJlJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHdpZmktc2VjdXJpdHklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgYXV0aC1hbGclM0Egb3BlbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBrZXktbWdtdCUzQSB3cGEtcHNrJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGlwdjQlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWV0aG9kJTNBIGF1dG8lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgaXB2NiUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBhZGRyLWdlbi1tb2RlJTNBIHN0YWJsZS1wcml2YWN5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1ldGhvZCUzQSBhdXRvJTBBJTIwIC0gYWR2YW5jZWQlM0ElMEElMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgQWR2YW5jZWQlMEElMjAlMjAlMjAlMjAlMjAgcHJvcGVydGllcyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCAtIGhvc3RuYW1lJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIERldmljZSBIb3N0bmFtZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHN0cmluZyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSBjb25maWdfanNvbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIGhvc3RuYW1lJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gcGVyc2lzdGVudExvZ2dpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgRG8geW91IHdhbnQgdG8gZW5hYmxlIHBlcnNpc3RlbnQgbG9nZ2luZyUzRiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIGJvb2xlYW4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgZGVmYXVsdCUzQSBmYWxzZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSBjb25maWdfanNvbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIHBlcnNpc3RlbnRMb2dnaW5nJ30+XG5cdFx0XHRcdFx0bmV0d29yayBjb25maWd1cmF0aW9uXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PERpdmlkZXIvPlxuXHRcdFx0XHREb2N1bWVudGF0aW9uOlxuXHRcdFx0XHQ8YSBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby1tb2R1bGVzL2JhbGVuYS1jZHNsL2lzc3Vlcy8xNSd9PlxuXHRcdFx0XHRcdFdoYXQgaXMgc3VwcG9ydGVkXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vYmFsZW5hLWlvL2JhbGVuYS9ibG9iLzgzMmY1NTUxMTI3ZGQ4ZTFlODJmYTA4MmJlYTk3ZmM0ZGI4MWMzY2Uvc3BlY3MvY29uZmlndXJhdGlvbi1kc2wubWQnfT5cblx0XHRcdFx0XHREU0wgc3BlY2lmaWNhdGlvblxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCZuYnNwO3wmbmJzcDtcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby9iYWxlbmEvYmxvYi82M2NhM2E0YjAyNjY5NDc1MGY4ZDZmNGUzZWVhOTc5MmNmMzQ0NDI2L3NwZWNzL2NvbmZpZ3VyYXRpb24tZHNsLW1hcHBpbmctZXh0ZW5zaW9uLm1kJ30+XG5cdFx0XHRcdFx0TWFwcGluZyBleHRlbnNpb25zXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vYmFsZW5hLWlvL2JhbGVuYS9ibG9iLzhlOWM3YzE3N2U4ZDczMDQ4NGZiZmNlNWM0MjgxZDRjN2MyMDU1NjUvc3BlY3MvanNvbi1zY2hlbWEtZXh0ZW5zaW9ucy5tZCd9PlxuXHRcdFx0XHRcdEpTT04gU2NoZW1hIGV4dGVuc2lvbnNcblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9Cb3g+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtzO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRmxleCwgTGluaywgVGV4dGFyZWF9IGZyb20gJ3JlbmRpdGlvbic7XG5cbmludGVyZmFjZSBQZXJtYWxpbmtQcm9wcyB7XG5cdHRleHQ/OiBzdHJpbmc7XG59XG5cbmNsYXNzIFBlcm1hbGluayBleHRlbmRzIENvbXBvbmVudDxQZXJtYWxpbmtQcm9wcywgYW55PiB7XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IFBlcm1hbGlua1Byb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRyZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJveD5cblx0XHRcdFx0PExpbmsgaHJlZj17dGhpcy5nZXRQZXJtYWxpbmsoKX0+XG5cdFx0XHRcdFx0cGVybWFsaW5rXG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvQm94PlxuXHRcdClcblx0fVxuXG5cdGdldFBlcm1hbGluaygpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuICc/eWFtbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvcHMudGV4dClcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlKVxuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcm1hbGluaztcbiJdLCJzb3VyY2VSb290IjoiIn0=