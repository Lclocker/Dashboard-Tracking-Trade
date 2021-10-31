"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Table/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Table/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\Table\\index.tsx";



function Table(_ref) {
  var _this = this;

  var data = _ref.data,
      head = _ref.head;
  var keys = Object.keys(data[0]);
  var indexId = keys.indexOf("id");
  keys.splice(indexId, 1);
  var indexPr = keys.indexOf("inProgress");
  keys.splice(indexPr, 1);

  var Row = function Row(_ref2) {
    var line = _ref2.line;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
      children: keys.map(function (key) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
          children: line[key]
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, _this);
      })
    }, line.id, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__._table, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
        children: keys.map(function (key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
            children: head[key] || key
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
      children: data.map(function (line) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Row, {
          line: line
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c = Table;

var _c;

$RefreshReg$(_c, "Table");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGUxNzA0OTM1N2Q5YzNlNzliYWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR08sU0FBU0UsS0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFFekMsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUYsSUFBSSxDQUFDLENBQUQsQ0FBaEIsQ0FBYjtBQUNBLE1BQU1JLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWEsSUFBYixDQUFoQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWUYsT0FBWixFQUFxQixDQUFyQjtBQUNBLE1BQU1HLE9BQU8sR0FBR0wsSUFBSSxDQUFDRyxPQUFMLENBQWEsWUFBYixDQUFoQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWUMsT0FBWixFQUFxQixDQUFyQjs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxRQUFtQjtBQUFBLFFBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFDN0Isd0JBQ0U7QUFBQSxnQkFFSVAsSUFBSSxDQUFDUSxHQUFMLENBQVUsVUFBQUMsR0FBRztBQUFBLDRCQUNYO0FBQUEsb0JBQ0dGLElBQUksQ0FBQ0UsR0FBRDtBQURQLFdBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQWI7QUFGSixPQUFTRixJQUFJLENBQUNHLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBV0QsR0FaRDs7QUFjQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBQSxrQkFFSVYsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLDhCQUFJO0FBQUEsc0JBQWVWLElBQUksQ0FBQ1UsR0FBRCxDQUFKLElBQWFBO0FBQTVCLGFBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQVo7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUU7QUFBQSxnQkFFSVgsSUFBSSxDQUFDVSxHQUFMLENBQVMsVUFBQ0QsSUFBRDtBQUFBLDRCQUFlLDhEQUFDLEdBQUQ7QUFBSyxjQUFJLEVBQUVBO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBLE9BQVQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7S0F0Q2VWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IF90YWJsZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJsZSh7IGRhdGEsIGhlYWQgfTogYW55KSB7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuICBjb25zdCBpbmRleElkID0ga2V5cy5pbmRleE9mKFwiaWRcIik7XHJcbiAga2V5cy5zcGxpY2UoaW5kZXhJZCwgMSk7XHJcbiAgY29uc3QgaW5kZXhQciA9IGtleXMuaW5kZXhPZihcImluUHJvZ3Jlc3NcIik7XHJcbiAga2V5cy5zcGxpY2UoaW5kZXhQciwgMSk7XHJcblxyXG4gIGNvbnN0IFJvdyA9ICh7IGxpbmUgfTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtsaW5lLmlkfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXlzLm1hcCgga2V5ID0+IFxyXG4gICAgICAgICAgICA8dGQga2V5PXtrZXl9ID5cclxuICAgICAgICAgICAgICB7bGluZVtrZXldfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8X3RhYmxlPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBrZXlzLm1hcChrZXkgPT4gPHRoIGtleT17a2V5fT57aGVhZFtrZXldIHx8IGtleX08L3RoPilcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YS5tYXAoKGxpbmU6IGFueSkgPT4gPFJvdyBsaW5lPXtsaW5lfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L190YWJsZT5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJfdGFibGUiLCJUYWJsZSIsImRhdGEiLCJoZWFkIiwia2V5cyIsIk9iamVjdCIsImluZGV4SWQiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5kZXhQciIsIlJvdyIsImxpbmUiLCJtYXAiLCJrZXkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=