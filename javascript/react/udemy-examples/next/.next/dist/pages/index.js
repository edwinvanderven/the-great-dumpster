"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/edwinvanderven/git/the-great-dumpster/javascript/react/udemy-examples/next/pages/index.js?entry";


var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "The Main Page of ", this.props.appName), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Go to", " ", _react2.default.createElement(_link2.default, { href: "/auth", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Auth"))), _react2.default.createElement("button", { onClick: function onClick() {
          return _index2.default.push("/auth");
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Go to Auth"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(context) {
      var promise = new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve({ appName: "Super App" });
        }, 1000);
      });
      return promise;
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIkluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsInB1c2giLCJjb250ZXh0IiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7OzZCQVVLLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBc0IsMEJBQUEsQUFBSyxNQUQ3QixBQUNFLEFBQWlDLEFBQ2pDLDBCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNRLFNBRFIsQUFFRSxxQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTE4sQUFFRSxBQUVFLEFBQ0UsQUFHSiwyQkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBTSxnQkFBQSxBQUFPLEtBQWIsQUFBTSxBQUFZO0FBQW5DO29CQUFBO3NCQUFBO0FBQUE7U0FUSixBQUNFLEFBUUUsQUFHTDs7OztvQyxBQXRCc0IsU0FBUyxBQUM5QjtVQUFNLGdDQUFzQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDL0M7bUJBQVcsWUFBTSxBQUNmO2tCQUFRLEVBQUUsU0FBVixBQUFRLEFBQVcsQUFDcEI7QUFGRCxXQUFBLEFBRUcsQUFDSjtBQUpELEFBQWdCLEFBS2hCLE9BTGdCO2FBS2hCLEFBQU8sQUFDUjs7Ozs7QSxBQVJxQixBQTBCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Vkd2ludmFuZGVydmVuL2dpdC90aGUtZ3JlYXQtZHVtcHN0ZXIvamF2YXNjcmlwdC9yZWFjdC91ZGVteS1leGFtcGxlcy9uZXh0In0=