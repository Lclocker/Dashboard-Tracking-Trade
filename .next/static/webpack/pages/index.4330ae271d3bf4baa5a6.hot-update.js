"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PieChartCardDayStatus/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/PieChartCardDayStatus/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartCardDayStatus": function() { return /* binding */ PieChartCardDayStatus; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardHeader */ "./src/components/CardHeader/index.tsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PieChart */ "./src/components/PieChart/index.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/PieChartCardDayStatus/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["title", "subtitle"];

var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\PieChartCardDayStatus\\index.tsx",
    _s = $RefreshSig$();







function PieChartCardDayStatus(_ref) {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Legends, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.GraphLegend, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.FirstLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["Criados - ", actionPlanData.created, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.SecondLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["Finalizados - ", actionPlanData.finalized, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ThirdLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["Em aberto - ", actionPlanData.opened, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.TimeAverage, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Title, {
          children: "M\xE9dia de tempo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "Hoje"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "\xDAltimos 7 dias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "\xDAltimos 30 dias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(PieChartCardDayStatus, "Y5pGuJuy+86itWeoyCbvFmQJNCw=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_4__.useData];
});

_c = PieChartCardDayStatus;

var _c;

$RefreshReg$(_c, "PieChartCardDayStatus");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDMzMGFlMjcxZDNiZjRiYWE1YTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT08sU0FBU2EscUJBQVQsT0FBd0Y7QUFBQTs7QUFBQSx3QkFBdkRDLEtBQXVEO0FBQUEsTUFBdkRBLEtBQXVELDJCQUEvQyxFQUErQztBQUFBLDJCQUEzQ0MsUUFBMkM7QUFBQSxNQUEzQ0EsUUFBMkMsOEJBQWhDLEVBQWdDO0FBQUEsTUFBekJDLEtBQXlCOztBQUU3RixpQkFBOENaLHVEQUFPLEVBQXJEO0FBQUEsTUFBUWEsY0FBUixZQUFRQSxjQUFSO0FBQUEsTUFBd0JDLGlCQUF4QixZQUF3QkEsaUJBQXhCOztBQUVBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RpQixJQUFBQSxpQkFBaUI7QUFDbEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxrQkFBWSxFQUFFLEtBQTFCO0FBQWlDLFdBQUssRUFBRUosS0FBeEM7QUFBK0MsY0FBUSxFQUFFQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFVLGVBQVMsRUFBRSxDQUFDRSxjQUFjLENBQUNFLE9BQWhCLEVBQXlCRixjQUFjLENBQUNHLFNBQXhDLEVBQW1ESCxjQUFjLENBQUNJLE1BQWxFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDRDQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHFDQUFpQkosY0FBYyxDQUFDRSxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UsOERBQUMscURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSx5Q0FBcUJGLGNBQWMsQ0FBQ0csU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLG9EQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsdUNBQW1CSCxjQUFjLENBQUNJLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFlRSw4REFBQyxnREFBRDtBQUFBLGdDQUNFLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQVFFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFZRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQS9DZVI7VUFFZ0NUOzs7S0FGaENTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BpZUNoYXJ0Q2FyZERheVN0YXR1cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiLi4vQ2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgeyBQaWVDaGFydCB9IGZyb20gXCIuLi9QaWVDaGFydFwiO1xyXG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURhdGFcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGaXJzdExlZ2VuZExpbmUsIEdyYXBoTGVnZW5kLCBMZWdlbmRzLCBTZWNvbmRMZWdlbmRMaW5lLCBUaGlyZExlZ2VuZExpbmUsIFRpbWVBdmVyYWdlLCBUaXRsZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxudHlwZSBDYXJkSGVhZGVyUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBpZUNoYXJ0Q2FyZERheVN0YXR1cyh7IHRpdGxlID0gXCJcIiwgc3VidGl0bGUgPSBcIlwiLCAuLi5wcm9wc306IENhcmRIZWFkZXJQcm9wcykge1xyXG5cclxuICBjb25zdCB7IGFjdGlvblBsYW5EYXRhLCBnZXRBY3Rpb25QbGFuRGF0YSB9ID0gdXNlRGF0YSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QWN0aW9uUGxhbkRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZEhlYWRlciBpc0Ryb3BEb3duT249e2ZhbHNlfSB0aXRsZT17dGl0bGV9IHN1YnRpdGxlPXtzdWJ0aXRsZX0+PC9DYXJkSGVhZGVyPlxyXG4gICAgICA8UGllQ2hhcnQgR3JhcGhEYXRhPXtbYWN0aW9uUGxhbkRhdGEuY3JlYXRlZCwgYWN0aW9uUGxhbkRhdGEuZmluYWxpemVkLCBhY3Rpb25QbGFuRGF0YS5vcGVuZWRdfSAvPlxyXG4gICAgICA8TGVnZW5kcz5cclxuICAgICAgICA8R3JhcGhMZWdlbmQ+XHJcbiAgICAgICAgICA8Rmlyc3RMZWdlbmRMaW5lPlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5DcmlhZG9zIC0ge2FjdGlvblBsYW5EYXRhLmNyZWF0ZWR9JTwvc3Bhbj5cclxuICAgICAgICAgIDwvRmlyc3RMZWdlbmRMaW5lPlxyXG4gICAgICAgICAgPFNlY29uZExlZ2VuZExpbmU+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPkZpbmFsaXphZG9zIC0ge2FjdGlvblBsYW5EYXRhLmZpbmFsaXplZH0lPC9zcGFuPlxyXG4gICAgICAgICAgPC9TZWNvbmRMZWdlbmRMaW5lPlxyXG4gICAgICAgICAgPFRoaXJkTGVnZW5kTGluZT5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+RW0gYWJlcnRvIC0ge2FjdGlvblBsYW5EYXRhLm9wZW5lZH0lPC9zcGFuPlxyXG4gICAgICAgICAgPC9UaGlyZExlZ2VuZExpbmU+XHJcbiAgICAgICAgPC9HcmFwaExlZ2VuZD5cclxuICAgICAgICA8VGltZUF2ZXJhZ2U+XHJcbiAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgIE3DqWRpYSBkZSB0ZW1wb1xyXG4gICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPkhvamU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjEwIG1pbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+w5psdGltb3MgNyBkaWFzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4xMCBtaW48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPsOabHRpbW9zIDMwIGRpYXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjEwIG1pbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGltZUF2ZXJhZ2U+XHJcbiAgICAgIDwvTGVnZW5kcz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkNhcmRIZWFkZXIiLCJQaWVDaGFydCIsInVzZURhdGEiLCJDb250YWluZXIiLCJGaXJzdExlZ2VuZExpbmUiLCJHcmFwaExlZ2VuZCIsIkxlZ2VuZHMiLCJTZWNvbmRMZWdlbmRMaW5lIiwiVGhpcmRMZWdlbmRMaW5lIiwiVGltZUF2ZXJhZ2UiLCJUaXRsZSIsIlBpZUNoYXJ0Q2FyZERheVN0YXR1cyIsInRpdGxlIiwic3VidGl0bGUiLCJwcm9wcyIsImFjdGlvblBsYW5EYXRhIiwiZ2V0QWN0aW9uUGxhbkRhdGEiLCJjcmVhdGVkIiwiZmluYWxpemVkIiwib3BlbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==