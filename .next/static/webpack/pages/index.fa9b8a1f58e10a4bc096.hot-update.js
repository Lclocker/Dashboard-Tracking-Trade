"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PieChartCardGeneral/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/PieChartCardGeneral/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartCardGeneral": function() { return /* binding */ PieChartCardGeneral; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardHeader */ "./src/components/CardHeader/index.tsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PieChart */ "./src/components/PieChart/index.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/PieChartCardGeneral/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["title", "subtitle"];

var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\PieChartCardGeneral\\index.tsx",
    _s = $RefreshSig$();







function PieChartCardGeneral(_ref) {
  _s();

  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? "" : _ref$subtitle,
      props = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  var _useData = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(),
      actionPlanData = _useData.actionPlanData,
      getActionPlanData = _useData.getActionPlanData;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getActionPlanData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CardHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      isDropDownOn: false,
      title: title,
      subtitle: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PieChart__WEBPACK_IMPORTED_MODULE_3__.PieChart, {
      GraphData: [actionPlanData.created, actionPlanData.finalized, actionPlanData.opened]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(PieChartCardGeneral, "Y5pGuJuy+86itWeoyCbvFmQJNCw=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_4__.useData];
});

_c = PieChartCardGeneral;

var _c;

$RefreshReg$(_c, "PieChartCardGeneral");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE5YjhhMWY1OGUxMGE0YmMwOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT08sU0FBU00sbUJBQVQsT0FBc0Y7QUFBQTs7QUFBQSx3QkFBdkRDLEtBQXVEO0FBQUEsTUFBdkRBLEtBQXVELDJCQUEvQyxFQUErQztBQUFBLDJCQUEzQ0MsUUFBMkM7QUFBQSxNQUEzQ0EsUUFBMkMsOEJBQWhDLEVBQWdDO0FBQUEsTUFBekJDLEtBQXlCOztBQUUzRixpQkFBOENMLHVEQUFPLEVBQXJEO0FBQUEsTUFBUU0sY0FBUixZQUFRQSxjQUFSO0FBQUEsTUFBd0JDLGlCQUF4QixZQUF3QkEsaUJBQXhCOztBQUVBVixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFUsSUFBQUEsaUJBQWlCO0FBQ2xCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQVksa0JBQVksRUFBRSxLQUExQjtBQUFpQyxXQUFLLEVBQUVKLEtBQXhDO0FBQStDLGNBQVEsRUFBRUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBVSxlQUFTLEVBQUUsQ0FBQ0UsY0FBYyxDQUFDRSxPQUFoQixFQUF5QkYsY0FBYyxDQUFDRyxTQUF4QyxFQUFtREgsY0FBYyxDQUFDSSxNQUFsRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0FkZVI7VUFFZ0NGOzs7S0FGaENFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BpZUNoYXJ0Q2FyZEdlbmVyYWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIi4uL0NhcmRIZWFkZXJcIjtcclxuaW1wb3J0IHsgUGllQ2hhcnQgfSBmcm9tIFwiLi4vUGllQ2hhcnRcIjtcclxuaW1wb3J0IHsgdXNlRGF0YSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VEYXRhXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxudHlwZSBDYXJkSGVhZGVyUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBpZUNoYXJ0Q2FyZEdlbmVyYWwoeyB0aXRsZSA9IFwiXCIsIHN1YnRpdGxlID0gXCJcIiwgLi4ucHJvcHN9OiBDYXJkSGVhZGVyUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBhY3Rpb25QbGFuRGF0YSwgZ2V0QWN0aW9uUGxhbkRhdGEgfSA9IHVzZURhdGEoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFjdGlvblBsYW5EYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZEhlYWRlciBpc0Ryb3BEb3duT249e2ZhbHNlfSB0aXRsZT17dGl0bGV9IHN1YnRpdGxlPXtzdWJ0aXRsZX0+PC9DYXJkSGVhZGVyPlxyXG4gICAgICA8UGllQ2hhcnQgR3JhcGhEYXRhPXtbYWN0aW9uUGxhbkRhdGEuY3JlYXRlZCwgYWN0aW9uUGxhbkRhdGEuZmluYWxpemVkLCBhY3Rpb25QbGFuRGF0YS5vcGVuZWRdfSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ2FyZEhlYWRlciIsIlBpZUNoYXJ0IiwidXNlRGF0YSIsIkNvbnRhaW5lciIsIlBpZUNoYXJ0Q2FyZEdlbmVyYWwiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHJvcHMiLCJhY3Rpb25QbGFuRGF0YSIsImdldEFjdGlvblBsYW5EYXRhIiwiY3JlYXRlZCIsImZpbmFsaXplZCIsIm9wZW5lZCJdLCJzb3VyY2VSb290IjoiIn0=