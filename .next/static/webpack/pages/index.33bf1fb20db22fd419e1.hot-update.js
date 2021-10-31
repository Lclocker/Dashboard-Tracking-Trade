"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PieChartCardInspections/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/PieChartCardInspections/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartCardInspections": function() { return /* binding */ PieChartCardInspections; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardHeader */ "./src/components/CardHeader/index.tsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PieChart */ "./src/components/PieChart/index.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/PieChartCardInspections/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["title", "subtitle"];

var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\PieChartCardInspections\\index.tsx",
    _s = $RefreshSig$();







function PieChartCardInspections(_ref) {
  _s();

  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? "" : _ref$subtitle,
      props = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  var _useData = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_4__.useData)(),
      inspectionData = _useData.inspectionData,
      getInspectionData = _useData.getInspectionData;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getInspectionData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CardHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      isDropDownOn: false,
      title: title,
      subtitle: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PieChart__WEBPACK_IMPORTED_MODULE_3__.PieChart, {
      GraphData: [inspectionData.performed, inspectionData.inProgress, inspectionData.notPerformed]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Legends, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.GraphLegend, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.FirstLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["Realizadas - ", inspectionData.performed, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.SecondLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["Em Aberto - ", inspectionData.inProgress, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ThirdLegendLine, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: ["N\xE3o Realizadas - ", inspectionData.notPerformed, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.TimeAverage, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Title, {
          children: "M\xE9dia de tempo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "Hoje"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "\xDAltimos 7 dias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "\xDAltimos 30 dias"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: "10 min"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(PieChartCardInspections, "v7AIXKPWyUlrayMb6fn9REfeOBk=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_4__.useData];
});

_c = PieChartCardInspections;

var _c;

$RefreshReg$(_c, "PieChartCardInspections");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzNiZjFmYjIwZGIyMmZkNDE5ZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUU8sU0FBU2EsdUJBQVQsT0FBMEY7QUFBQTs7QUFBQSx3QkFBdkRDLEtBQXVEO0FBQUEsTUFBdkRBLEtBQXVELDJCQUEvQyxFQUErQztBQUFBLDJCQUEzQ0MsUUFBMkM7QUFBQSxNQUEzQ0EsUUFBMkMsOEJBQWhDLEVBQWdDO0FBQUEsTUFBekJDLEtBQXlCOztBQUUvRixpQkFBOENaLHVEQUFPLEVBQXJEO0FBQUEsTUFBUWEsY0FBUixZQUFRQSxjQUFSO0FBQUEsTUFBd0JDLGlCQUF4QixZQUF3QkEsaUJBQXhCOztBQUVBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RpQixJQUFBQSxpQkFBaUI7QUFDbEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxrQkFBWSxFQUFFLEtBQTFCO0FBQWlDLFdBQUssRUFBRUosS0FBeEM7QUFBK0MsY0FBUSxFQUFFQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFVLGVBQVMsRUFBRSxDQUFDRSxjQUFjLENBQUNFLFNBQWhCLEVBQTJCRixjQUFjLENBQUNHLFVBQTFDLEVBQXNESCxjQUFjLENBQUNJLFlBQXJFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDRDQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHdDQUFvQkosY0FBYyxDQUFDRSxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UsOERBQUMscURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSx1Q0FBbUJGLGNBQWMsQ0FBQ0csVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLG9EQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0NBQXdCSCxjQUFjLENBQUNJLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFlRSw4REFBQyxnREFBRDtBQUFBLGdDQUNFLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQVFFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFZRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQS9DZVI7VUFFZ0NUOzs7S0FGaENTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BpZUNoYXJ0Q2FyZEluc3BlY3Rpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCIuLi9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCB7IFBpZUNoYXJ0IH0gZnJvbSBcIi4uL1BpZUNoYXJ0XCI7XHJcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGF0YVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZpcnN0TGVnZW5kTGluZSwgR3JhcGhMZWdlbmQsIExlZ2VuZHMsIFNlY29uZExlZ2VuZExpbmUsIFRoaXJkTGVnZW5kTGluZSwgVGltZUF2ZXJhZ2UsIFRpdGxlIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxudHlwZSBDYXJkSGVhZGVyUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBpZUNoYXJ0Q2FyZEluc3BlY3Rpb25zKHsgdGl0bGUgPSBcIlwiLCBzdWJ0aXRsZSA9IFwiXCIsIC4uLnByb3BzfTogQ2FyZEhlYWRlclByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHsgaW5zcGVjdGlvbkRhdGEsIGdldEluc3BlY3Rpb25EYXRhIH0gPSB1c2VEYXRhKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRJbnNwZWN0aW9uRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhcmRIZWFkZXIgaXNEcm9wRG93bk9uPXtmYWxzZX0gdGl0bGU9e3RpdGxlfSBzdWJ0aXRsZT17c3VidGl0bGV9PjwvQ2FyZEhlYWRlcj5cclxuICAgICAgPFBpZUNoYXJ0IEdyYXBoRGF0YT17W2luc3BlY3Rpb25EYXRhLnBlcmZvcm1lZCwgaW5zcGVjdGlvbkRhdGEuaW5Qcm9ncmVzcywgaW5zcGVjdGlvbkRhdGEubm90UGVyZm9ybWVkXX0vPlxyXG4gICAgICA8TGVnZW5kcz5cclxuICAgICAgICA8R3JhcGhMZWdlbmQ+XHJcbiAgICAgICAgICA8Rmlyc3RMZWdlbmRMaW5lPlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5SZWFsaXphZGFzIC0ge2luc3BlY3Rpb25EYXRhLnBlcmZvcm1lZH0lPC9zcGFuPlxyXG4gICAgICAgICAgPC9GaXJzdExlZ2VuZExpbmU+XHJcbiAgICAgICAgICA8U2Vjb25kTGVnZW5kTGluZT5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+RW0gQWJlcnRvIC0ge2luc3BlY3Rpb25EYXRhLmluUHJvZ3Jlc3N9JTwvc3Bhbj5cclxuICAgICAgICAgIDwvU2Vjb25kTGVnZW5kTGluZT5cclxuICAgICAgICAgIDxUaGlyZExlZ2VuZExpbmU+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPk7Do28gUmVhbGl6YWRhcyAtIHtpbnNwZWN0aW9uRGF0YS5ub3RQZXJmb3JtZWR9JTwvc3Bhbj5cclxuICAgICAgICAgIDwvVGhpcmRMZWdlbmRMaW5lPlxyXG4gICAgICAgIDwvR3JhcGhMZWdlbmQ+XHJcbiAgICAgICAgPFRpbWVBdmVyYWdlPlxyXG4gICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICBNw6lkaWEgZGUgdGVtcG9cclxuICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5Ib2plPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4xMCBtaW48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPsOabHRpbW9zIDcgZGlhczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+MTAgbWluPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj7Dmmx0aW1vcyAzMCBkaWFzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4xMCBtaW48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RpbWVBdmVyYWdlPlxyXG4gICAgICA8L0xlZ2VuZHM+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDYXJkSGVhZGVyIiwiUGllQ2hhcnQiLCJ1c2VEYXRhIiwiQ29udGFpbmVyIiwiRmlyc3RMZWdlbmRMaW5lIiwiR3JhcGhMZWdlbmQiLCJMZWdlbmRzIiwiU2Vjb25kTGVnZW5kTGluZSIsIlRoaXJkTGVnZW5kTGluZSIsIlRpbWVBdmVyYWdlIiwiVGl0bGUiLCJQaWVDaGFydENhcmRJbnNwZWN0aW9ucyIsInRpdGxlIiwic3VidGl0bGUiLCJwcm9wcyIsImluc3BlY3Rpb25EYXRhIiwiZ2V0SW5zcGVjdGlvbkRhdGEiLCJwZXJmb3JtZWQiLCJpblByb2dyZXNzIiwibm90UGVyZm9ybWVkIl0sInNvdXJjZVJvb3QiOiIifQ==