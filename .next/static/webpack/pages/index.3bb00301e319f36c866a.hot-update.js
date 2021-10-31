"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BarChart/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/BarChart/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BarChart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/BarChart/styles.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\BarChart\\index.tsx",
    _s = $RefreshSig$();






function BarChart() {
  _s();

  var _useData = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_2__.useData)(),
      eventHistory = _useData.eventHistory,
      getEventHistory = _useData.getEventHistory;

  var labelList = [];
  var performedList = [];
  var actionPlansList = [];

  for (var i = 0; i < eventHistory.length; i++) {
    labelList[i] = "" + eventHistory[i].id;
    actionPlansList[i] = eventHistory[i].createdActionsPlans;
    performedList[i] = eventHistory[i].performedInspections;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getEventHistory();
  }, []);
  var state = {
    labels: labelList,
    datasets: [{
      label: 'Inspeções realizadas',
      backgroundColor: '#7FC008',
      data: performedList,
      barThickness: 15
    }, {
      label: 'planos de ação criados',
      backgroundColor: '#DB8C28',
      data: actionPlansList,
      barThickness: 15
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {
      data: state,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            align: 'start',
            labels: {
              pointStyle: 'circle',
              usePointStyle: true
            }
          }
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(BarChart, "YkuQx2b2vuA0Sgwt0YuTCjFaUEQ=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_2__.useData];
});

_c = BarChart;

var _c;

$RefreshReg$(_c, "BarChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2JiMDAzMDFlMzE5ZjM2Yzg2NmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxRQUFULEdBQW9CO0FBQUE7O0FBRWpDLGlCQUEwQ0YsdURBQU8sRUFBakQ7QUFBQSxNQUFRRyxZQUFSLFlBQVFBLFlBQVI7QUFBQSxNQUFzQkMsZUFBdEIsWUFBc0JBLGVBQXRCOztBQUVBLE1BQU1DLFNBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFNQyxhQUF1QixHQUFHLEVBQWhDO0FBQ0EsTUFBTUMsZUFBeUIsR0FBRyxFQUFsQzs7QUFFQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0wsWUFBWSxDQUFDTSxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE0QztBQUMxQ0gsSUFBQUEsU0FBUyxDQUFDRyxDQUFELENBQVQsR0FBZSxLQUFLTCxZQUFZLENBQUNLLENBQUQsQ0FBWixDQUFnQkUsRUFBcEM7QUFDQUgsSUFBQUEsZUFBZSxDQUFDQyxDQUFELENBQWYsR0FBcUJMLFlBQVksQ0FBQ0ssQ0FBRCxDQUFaLENBQWdCRyxtQkFBckM7QUFDQUwsSUFBQUEsYUFBYSxDQUFDRSxDQUFELENBQWIsR0FBbUJMLFlBQVksQ0FBQ0ssQ0FBRCxDQUFaLENBQWdCSSxvQkFBbkM7QUFDRDs7QUFFRGQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RNLElBQUFBLGVBQWU7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1TLEtBQUssR0FBRztBQUNaQyxJQUFBQSxNQUFNLEVBQUVULFNBREk7QUFFWlUsSUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUMsTUFBQUEsS0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUFBLGVBQWUsRUFBRSxTQUZuQjtBQUdFQyxNQUFBQSxJQUFJLEVBQUVaLGFBSFI7QUFJRWEsTUFBQUEsWUFBWSxFQUFFO0FBSmhCLEtBRFEsRUFPUjtBQUNFSCxNQUFBQSxLQUFLLEVBQUUsd0JBRFQ7QUFFRUMsTUFBQUEsZUFBZSxFQUFFLFNBRm5CO0FBR0VDLE1BQUFBLElBQUksRUFBRVgsZUFIUjtBQUlFWSxNQUFBQSxZQUFZLEVBQUU7QUFKaEIsS0FQUTtBQUZFLEdBQWQ7QUFrQkEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSwyQkFDRSw4REFBQyxnREFBRDtBQUNFLFVBQUksRUFBRU4sS0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQTyxRQUFBQSxtQkFBbUIsRUFBRSxLQURkO0FBRVBDLFFBQUFBLFVBQVUsRUFBRSxJQUZMO0FBR1BDLFFBQUFBLE9BQU8sRUFBQztBQUNOQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsUUFBUSxFQUFFLFFBREo7QUFFTkMsWUFBQUEsS0FBSyxFQUFFLE9BRkQ7QUFHTlgsWUFBQUEsTUFBTSxFQUFFO0FBQ05ZLGNBQUFBLFVBQVUsRUFBQyxRQURMO0FBRU5DLGNBQUFBLGFBQWEsRUFBRTtBQUZUO0FBSEY7QUFERjtBQUhEO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0F6RHVCekI7VUFFb0JGOzs7S0FGcEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhckNoYXJ0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZURhdGFcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJDaGFydCgpIHtcclxuXHJcbiAgY29uc3QgeyBldmVudEhpc3RvcnksIGdldEV2ZW50SGlzdG9yeSB9ID0gdXNlRGF0YSgpO1xyXG5cclxuICBjb25zdCBsYWJlbExpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3QgcGVyZm9ybWVkTGlzdDogbnVtYmVyW10gPSBbXTtcclxuICBjb25zdCBhY3Rpb25QbGFuc0xpc3Q6IG51bWJlcltdID0gW107XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBldmVudEhpc3RvcnkubGVuZ3RoOyBpKyspe1xyXG4gICAgbGFiZWxMaXN0W2ldID0gXCJcIiArIGV2ZW50SGlzdG9yeVtpXS5pZDtcclxuICAgIGFjdGlvblBsYW5zTGlzdFtpXSA9IGV2ZW50SGlzdG9yeVtpXS5jcmVhdGVkQWN0aW9uc1BsYW5zO1xyXG4gICAgcGVyZm9ybWVkTGlzdFtpXSA9IGV2ZW50SGlzdG9yeVtpXS5wZXJmb3JtZWRJbnNwZWN0aW9ucztcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRFdmVudEhpc3RvcnkoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICBsYWJlbHM6IGxhYmVsTGlzdCxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0luc3Blw6fDtWVzIHJlYWxpemFkYXMnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3RkMwMDgnLFxyXG4gICAgICAgIGRhdGE6IHBlcmZvcm1lZExpc3QsXHJcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAxNSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAncGxhbm9zIGRlIGHDp8OjbyBjcmlhZG9zJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREI4QzI4JyxcclxuICAgICAgICBkYXRhOiBhY3Rpb25QbGFuc0xpc3QsXHJcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAxNSxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCYXJcclxuICAgICAgICBkYXRhPXtzdGF0ZX1cclxuICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICBwbHVnaW5zOntcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ246ICdzdGFydCcsXHJcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBwb2ludFN0eWxlOidjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJ1c2VEYXRhIiwiQmFyIiwiQmFyQ2hhcnQiLCJldmVudEhpc3RvcnkiLCJnZXRFdmVudEhpc3RvcnkiLCJsYWJlbExpc3QiLCJwZXJmb3JtZWRMaXN0IiwiYWN0aW9uUGxhbnNMaXN0IiwiaSIsImxlbmd0aCIsImlkIiwiY3JlYXRlZEFjdGlvbnNQbGFucyIsInBlcmZvcm1lZEluc3BlY3Rpb25zIiwic3RhdGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImJhclRoaWNrbmVzcyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYWxpZ24iLCJwb2ludFN0eWxlIiwidXNlUG9pbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=