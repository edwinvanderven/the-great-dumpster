"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _User = require("../../components/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/edwinvanderven/git/the-great-dumpster/javascript/react/udemy-examples/next/pages/auth/index.js?entry";


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The Auth Index Page - ", props.appName), _react2.default.createElement(_User2.default, { name: "Max", age: 28, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyIiwiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsT0FBRDt5QkFDcEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBMkIsZ0NBRDdCLEFBQ0UsQUFBaUMsQUFDakMsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsT0FBTSxLQUFqQixBQUFzQjtnQkFBdEI7a0JBSGtCLEFBQ3BCLEFBRUU7QUFBQTs7QUFISjs7QUFPQSxjQUFBLEFBQWMsa0JBQWtCLG1CQUFXLEFBQ3pDO01BQU0sZ0NBQXNCLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUMvQztlQUFXLFlBQU0sQUFDZjtjQUFRLEVBQUUsU0FBVixBQUFRLEFBQVcsQUFDcEI7QUFGRCxPQUFBLEFBRUcsQUFDSjtBQUpELEFBQWdCLEFBS2hCLEdBTGdCO1NBS2hCLEFBQU8sQUFDUjtBQVBELEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Vkd2ludmFuZGVydmVuL2dpdC90aGUtZ3JlYXQtZHVtcHN0ZXIvamF2YXNjcmlwdC9yZWFjdC91ZGVteS1leGFtcGxlcy9uZXh0In0=