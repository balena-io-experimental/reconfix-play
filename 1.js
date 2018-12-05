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
    key: "getPermalink",
    value: function getPermalink() {
      try {
        return '?yaml=' + encodeURIComponent(this.state.yaml_text);
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Links_tsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: this.getPermalink()
      }, "permalink"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rendition__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: '?yaml=title%3A resin-cli demo%0Aversion%3A 1%0Adefinitions%3A%0A%20 bootPartition%3A %26BOOT_PARTITION%0A%20%20%20 partition%3A 1%0Amapping%3A%0A%20 targets%3A%0A%20%20%20 config_json%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A json%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fconfig.json%0A%20%20%20 resin_wifi%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A ini%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fsystem-connections%2Fresin-wifi%0Aproperties%3A%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 maxLength%3A 32%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi.ssid%0A%20%20%20%20%20%20%20 - passphrase%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network Key%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 8%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi-security.psk%0A%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20 template%3A%0A%20%20%20%20%20%20%20%20%20 connection%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A wifi%0A%20%20%20%20%20%20%20%20%20 wifi%3A%0A%20%20%20%20%20%20%20%20%20%20%20 hidden%3A true%0A%20%20%20%20%20%20%20%20%20%20%20 mode%3A infrastructure%0A%20%20%20%20%20%20%20%20%20 wifi-security%3A%0A%20%20%20%20%20%20%20%20%20%20%20 auth-alg%3A open%0A%20%20%20%20%20%20%20%20%20%20%20 key-mgmt%3A wpa-psk%0A%20%20%20%20%20%20%20%20%20 ipv4%3A%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20%20%20%20%20%20%20%20%20 ipv6%3A%0A%20%20%20%20%20%20%20%20%20%20%20 addr-gen-mode%3A stable-privacy%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - hostname%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Device Hostname%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A hostname%0A%20%20%20%20%20%20%20 - persistentLogging%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Do you want to enable persistent logging%3F%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A boolean%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A false%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A persistentLogging' }, "balena cli"),
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9BcHAuY3NzP2FkN2IiLCIvLi9zcmMvQXBwLmpzIiwiLy4vc3JjL0xpbmtzLnRzeCJdLCJuYW1lcyI6WyJzdHJpbmdpZnkiLCJ2YWx1ZSIsIkpTT04iLCJBcHAiLCJzdGF0ZSIsImpzb25fc2NoZW1hX3RleHQiLCJqc29uX3NjaGVtYSIsInVpX29iamVjdF90ZXh0IiwidWlfb2JqZWN0IiwieWFtbF90ZXh0IiwiaGFzX2Vycm9yIiwiZm9ybURhdGEiLCJlcnJvcnMiLCJzZXRTdGF0ZSIsImV2YWx1YXRlZCIsImNkc2wiLCJlIiwic2V0RGF0YUZyb21VcmwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImVuY29kZWQiLCJnZXQiLCJ5YW1sX2Zyb21fdXJsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXZhbHVhdGUiLCJjb25zb2xlIiwibG9nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXZlbnQiLCJkYXRhIiwia2V5Q29kZSIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJnZXRQZXJtYWxpbmsiLCJ0YXJnZXQiLCJub1RhYiIsInJlbmRlckZvcm1EYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsaUJBQWlCLDhDQUE4QyxHQUFHOztBQUVsRzs7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywrRkFBaUQ7O0FBRXZFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmO0FBRUE7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LGlCQUFTLE1BQW5CO0FBQW9CLGdCQUFRLEVBQUUsSUFBOUI7QUFBb0MsZ0JBQVEsRUFBRSxJQUE5QztBQUFvRCxlQUFPLEVBQUUsRUFBN0Q7QUFBaUUsbUJBQVcsRUFBQyxXQUE3RTtBQUNVLGdCQUFRLEVBQUUsa0JBQUEwQixLQUFLLEVBQUksQ0FDbEIsQ0FGWDtBQUdVLGFBQUssRUFBRSxLQUFLM0IsS0FBTCxDQUFXRztBQUg1QixRQU5GLENBRkEsQ0FERCxHQWdCRyxJQTNCTixDQXhDRixFQXFFRSwyREFBQyxpREFBRCxPQXJFRixDQURGO0FBeUVEOzs7O0VBekplaUMsK0M7O0FBNEpIckMsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDTztBQUNSO0FBRS9CLE1BQU0sS0FBTSxTQUFRLCtDQUFTO0lBQzVCLE1BQU07UUFDTCxPQUFPLENBQ04sb0RBQUMsNkNBQUc7O1lBRUgsMkRBQ0MsSUFBSSxFQUFFLDRFQUE0RSxtQkFFL0U7O1lBRUosMkRBQ0MsSUFBSSxFQUFFLCtnR0FBK2dHLGlCQUVsaEc7WUFDSixvREFBQyxpREFBTyxPQUFFOztZQUVWLDJEQUFHLElBQUksRUFBRSw0REFBNEQsd0JBRWpFOztZQUVKLDJEQUNDLElBQUksRUFBRSw4R0FBOEcsd0JBRWpIOztZQUVKLDJEQUNDLElBQUksRUFBRSxnSUFBZ0kseUJBRW5JOztZQUVKLDJEQUNDLElBQUksRUFBRSxtSEFBbUgsNkJBRXRILENBQ0MsQ0FDTjtJQUNGLENBQUM7Q0FDRDtBQUVjLG9FQUFLLEVBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQXBwLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9BcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9BcHAuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgRmxleCwgTGluaywgVGV4dGFyZWEsIEhlYWRpbmd9IGZyb20gJ3JlbmRpdGlvbic7XG5pbXBvcnQge0Zvcm19IGZyb20gJ3JlbmRpdGlvbi9kaXN0L3Vuc3RhYmxlJ1xuaW1wb3J0ICogYXMgY2RzbCBmcm9tICdiYWxlbmEtY2RzbCc7XG5pbXBvcnQgTGlua3MgZnJvbSAnLi9MaW5rcy50c3gnXG5cblxuY29uc3Qgc3RyaW5naWZ5ID0gKHZhbHVlKSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGpzb25fc2NoZW1hX3RleHQ6ICcnLFxuICAgICAganNvbl9zY2hlbWE6IHt9LFxuICAgICAgdWlfb2JqZWN0X3RleHQ6ICcnLFxuICAgICAgdWlfb2JqZWN0OiB7fSxcbiAgICAgIHlhbWxfdGV4dDogJycsXG4gICAgICBoYXNfZXJyb3I6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6ICcnLFxuICAgICAgZXJyb3JzOiAnJ1xuICAgIH1cblxuICB9XG5cbiAgZXZhbHVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt5YW1sX3RleHQ6IHZhbHVlfSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXZhbHVhdGVkID0gY2RzbC5nZW5lcmF0ZV91aSh2YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBqc29uX3NjaGVtYTogZXZhbHVhdGVkLmpzb25fc2NoZW1hLFxuICAgICAgICB1aV9vYmplY3Q6IGV2YWx1YXRlZC51aV9vYmplY3QsXG4gICAgICAgIGpzb25fc2NoZW1hX3RleHQ6IHN0cmluZ2lmeShldmFsdWF0ZWQuanNvbl9zY2hlbWEpLFxuICAgICAgICB1aV9vYmplY3RfdGV4dDogc3RyaW5naWZ5KGV2YWx1YXRlZC51aV9vYmplY3QpLFxuICAgICAgICBoYXNfZXJyb3I6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNfZXJyb3I6IHRydWUsXG4gICAgICAgIGVycm9yczogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldERhdGFGcm9tVXJsKClcbiAgfVxuXG4gIHNldERhdGFGcm9tVXJsKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICBjb25zdCBlbmNvZGVkID0gcGFyYW1zLmdldCgneWFtbCcpXG4gICAgICBpZiAocGFyYW1zICYmIGVuY29kZWQpIHtcbiAgICAgICAgY29uc3QgeWFtbF9mcm9tX3VybCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKVxuICAgICAgICB0aGlzLmV2YWx1YXRlKHlhbWxfZnJvbV91cmwpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuICBnZXRQZXJtYWxpbmsoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAnP3lhbWw9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLnlhbWxfdGV4dClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1EYXRhKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5mb3JtRGF0YVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybURhdGE6IHN0cmluZ2lmeShkYXRhKX0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuICBub1RhYihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG4gICAgaWYgKGtleUNvZGUgPT0gOSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxMaW5rcy8+XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgPExpbmsgaHJlZj17dGhpcy5nZXRQZXJtYWxpbmsoKX0+XG4gICAgICAgICAgcGVybWFsaW5rXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXsnY29sdW1uJ30+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxUZXh0YXJlYSBtb25vc3BhY2UgbWluUm93cz17MTJ9IGF1dG9Sb3dzPXt0cnVlfSBtYXhSb3dzPXsxNn0gcGxhY2Vob2xkZXI9XCJ5YW1sXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5ldmFsdWF0ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnlhbWxfdGV4dH0gb25LZXlEb3duPXsgZXZlbnQgPT4gdGhpcy5ub1RhYihldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgeyF0aGlzLnN0YXRlLmhhc19lcnJvciA/XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxIZWFkaW5nLmg0PlJlbmRlcmVkIGZvcm08L0hlYWRpbmcuaDQ+XG4gICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICA8Rm9ybSBzY2hlbWE9e3RoaXMuc3RhdGUuanNvbl9zY2hlbWF9IHVpU2NoZW1hPXt0aGlzLnN0YXRlLnVpX29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb3JtU3VibWl0PXtldmVudCA9PiB0aGlzLnJlbmRlckZvcm1EYXRhKGV2ZW50KX0vPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvcm1EYXRhID9cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxIZWFkaW5nLmg0PkZvcm0gZGF0YSAoZHJ5IGpzb24pPC9IZWFkaW5nLmg0PlxuICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICA8VGV4dGFyZWEgbW9ub3NwYWNlIGF1dG9Sb3dzPXt0cnVlfSByZWFkT25seT17dHJ1ZX0gcGxhY2Vob2xkZXI9eydmb3JtIGRhdGEnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPERpdmlkZXIvPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmhhc19lcnJvciA/XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICA8VGV4dGFyZWEgbW9ub3NwYWNlIGF1dG9Sb3dzPXt0cnVlfSByZWFkT25seT17dHJ1ZX0gcGxhY2Vob2xkZXI9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lcnJvcnN9Lz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc19lcnJvciA/XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEhlYWRpbmcuaDQ+SlNPTiBhbmQgVUkgc2NoZW1hczwvSGVhZGluZy5oND5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPFRleHRhcmVhIG1vbm9zcGFjZSBhdXRvUm93cz17dHJ1ZX0gcmVhZE9ubHk9e3RydWV9IG1heFJvd3M9ezE2fSBwbGFjZWhvbGRlcj1cImpzb24gc2NoZW1hXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuanNvbl9zY2hlbWFfdGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0YXJlYSBtb25vc3BhY2UgYXV0b1Jvd3M9e3RydWV9IHJlYWRPbmx5PXt0cnVlfSBtYXhSb3dzPXsxNn0gcGxhY2Vob2xkZXI9XCJ1aSBvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51aV9vYmplY3RfdGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIvPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlcn0gZnJvbSAncmVuZGl0aW9uJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBMaW5rcyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHRFeGFtcGxlczpcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnP3lhbWw9dmVyc2lvbiUzQSAxJTBBcHJvcGVydGllcyUzQSUyMCUwQSAtIGElM0ElMEElMjAlMjAlMjAgdHlwZSUzQSBzdHJpbmcnfT5cblx0XHRcdFx0XHRvbmUgcHJvcGVydHlcblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQmbmJzcDt8Jm5ic3A7XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17Jz95YW1sPXRpdGxlJTNBIHJlc2luLWNsaSBkZW1vJTBBdmVyc2lvbiUzQSAxJTBBZGVmaW5pdGlvbnMlM0ElMEElMjAgYm9vdFBhcnRpdGlvbiUzQSAlMjZCT09UX1BBUlRJVElPTiUwQSUyMCUyMCUyMCBwYXJ0aXRpb24lM0EgMSUwQW1hcHBpbmclM0ElMEElMjAgdGFyZ2V0cyUzQSUwQSUyMCUyMCUyMCBjb25maWdfanNvbiUzQSUwQSUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIGZpbGUlMEElMjAlMjAlMjAlMjAlMjAgZm9ybWF0JTNBIGpzb24lMEElMjAlMjAlMjAlMjAlMjAgbG9jYXRpb24lM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgPDwgJTNBICpCT09UX1BBUlRJVElPTiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBICUyRmNvbmZpZy5qc29uJTBBJTIwJTIwJTIwIHJlc2luX3dpZmklM0ElMEElMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBmaWxlJTBBJTIwJTIwJTIwJTIwJTIwIGZvcm1hdCUzQSBpbmklMEElMjAlMjAlMjAlMjAlMjAgbG9jYXRpb24lM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgPDwgJTNBICpCT09UX1BBUlRJVElPTiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBICUyRnN5c3RlbS1jb25uZWN0aW9ucyUyRnJlc2luLXdpZmklMEFwcm9wZXJ0aWVzJTNBJTBBJTIwIC0gbmV0d29yayUzQSUwQSUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBOZXR3b3JrJTBBJTIwJTIwJTIwJTIwJTIwIHByb3BlcnRpZXMlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgLSBzc2lkJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRpdGxlJTNBIE5ldHdvcmsgU1NJRCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0eXBlJTNBIHN0cmluZyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtaW5MZW5ndGglM0EgMSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXhMZW5ndGglM0EgMzIlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgcmVzaW5fd2lmaSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBwYXRoJTNBIHdpZmkuc3NpZCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCAtIHBhc3NwaHJhc2UlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgTmV0d29yayBLZXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdHlwZSUzQSBwYXNzd29yZCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtaW5MZW5ndGglM0EgOCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtYXBwaW5nJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHRhcmdldCUzQSByZXNpbl93aWZpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0Egd2lmaS1zZWN1cml0eS5wc2slMEElMjAlMjAlMjAlMjAlMjAgbWFwcGluZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0YXJnZXQlM0EgcmVzaW5fd2lmaSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0ZW1wbGF0ZSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBjb25uZWN0aW9uJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0Egd2lmaSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB3aWZpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGhpZGRlbiUzQSB0cnVlJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1vZGUlM0EgaW5mcmFzdHJ1Y3R1cmUlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgd2lmaS1zZWN1cml0eSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBhdXRoLWFsZyUzQSBvcGVuJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGtleS1tZ210JTNBIHdwYS1wc2slMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgaXB2NCUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBtZXRob2QlM0EgYXV0byUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBpcHY2JTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIGFkZHItZ2VuLW1vZGUlM0Egc3RhYmxlLXByaXZhY3klMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgbWV0aG9kJTNBIGF1dG8lMEElMjAgLSBhZHZhbmNlZCUzQSUwQSUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBBZHZhbmNlZCUwQSUyMCUyMCUyMCUyMCUyMCBwcm9wZXJ0aWVzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwIC0gaG9zdG5hbWUlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGl0bGUlM0EgRGV2aWNlIEhvc3RuYW1lJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0Egc3RyaW5nJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIGNvbmZpZ19qc29uJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0EgaG9zdG5hbWUlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAgLSBwZXJzaXN0ZW50TG9nZ2luZyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCB0aXRsZSUzQSBEbyB5b3Ugd2FudCB0byBlbmFibGUgcGVyc2lzdGVudCBsb2dnaW5nJTNGJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHR5cGUlM0EgYm9vbGVhbiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCBkZWZhdWx0JTNBIGZhbHNlJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIG1hcHBpbmclM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAgdGFyZ2V0JTNBIGNvbmZpZ19qc29uJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwIHBhdGglM0EgcGVyc2lzdGVudExvZ2dpbmcnfT5cblx0XHRcdFx0XHRiYWxlbmEgY2xpXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PERpdmlkZXIvPlxuXHRcdFx0XHREb2N1bWVudGF0aW9uOlxuXHRcdFx0XHQ8YSBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby1tb2R1bGVzL2JhbGVuYS1jZHNsL2lzc3Vlcy8xNSd9PlxuXHRcdFx0XHRcdFdoYXQgaXMgc3VwcG9ydGVkXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vYmFsZW5hLWlvL2JhbGVuYS9ibG9iLzgzMmY1NTUxMTI3ZGQ4ZTFlODJmYTA4MmJlYTk3ZmM0ZGI4MWMzY2Uvc3BlY3MvY29uZmlndXJhdGlvbi1kc2wubWQnfT5cblx0XHRcdFx0XHREU0wgc3BlY2lmaWNhdGlvblxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCZuYnNwO3wmbmJzcDtcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2JhbGVuYS1pby9iYWxlbmEvYmxvYi82M2NhM2E0YjAyNjY5NDc1MGY4ZDZmNGUzZWVhOTc5MmNmMzQ0NDI2L3NwZWNzL2NvbmZpZ3VyYXRpb24tZHNsLW1hcHBpbmctZXh0ZW5zaW9uLm1kJ30+XG5cdFx0XHRcdFx0TWFwcGluZyBleHRlbnNpb25zXG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0Jm5ic3A7fCZuYnNwO1xuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vYmFsZW5hLWlvL2JhbGVuYS9ibG9iLzhlOWM3YzE3N2U4ZDczMDQ4NGZiZmNlNWM0MjgxZDRjN2MyMDU1NjUvc3BlY3MvanNvbi1zY2hlbWEtZXh0ZW5zaW9ucy5tZCd9PlxuXHRcdFx0XHRcdEpTT04gU2NoZW1hIGV4dGVuc2lvbnNcblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9Cb3g+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==