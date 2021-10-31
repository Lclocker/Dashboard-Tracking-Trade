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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/BarChart/styles.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\BarChart\\index.tsx",
    _s = $RefreshSig$();






function BarChart() {
  _s();

  var _useData = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_3__.useData)(),
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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getEventHistory();
  }, []);
  var state = {
    labels: labelList,
    datasets: [{
      label: 'Inspeções realizadas',
      backgroundColor: '#7FC008',
      data: performedList,
      //[65, 59, 80, 81, 56, 20, 95, 42, 28, 70],
      barThickness: 15
    }, {
      label: 'planos de ação criados',
      backgroundColor: '#DB8C28',
      data: actionPlansList,
      //[30, 62, 10, 56, 28, 42, 20, 70, 95, 34],
      barThickness: 15
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__.Bar, {
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
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(BarChart, "YkuQx2b2vuA0Sgwt0YuTCjFaUEQ=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_3__.useData];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM3N2ViNWJkMTFkYzVlY2IyMGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSyxRQUFULEdBQW9CO0FBQUE7O0FBRWpDLGlCQUEwQ0QsdURBQU8sRUFBakQ7QUFBQSxNQUFRRSxZQUFSLFlBQVFBLFlBQVI7QUFBQSxNQUFzQkMsZUFBdEIsWUFBc0JBLGVBQXRCOztBQUVBLE1BQU1DLFNBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFNQyxhQUF1QixHQUFHLEVBQWhDO0FBQ0EsTUFBTUMsZUFBeUIsR0FBRyxFQUFsQzs7QUFFQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0wsWUFBWSxDQUFDTSxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE0QztBQUMxQ0gsSUFBQUEsU0FBUyxDQUFDRyxDQUFELENBQVQsR0FBZSxLQUFLTCxZQUFZLENBQUNLLENBQUQsQ0FBWixDQUFnQkUsRUFBcEM7QUFDQUgsSUFBQUEsZUFBZSxDQUFDQyxDQUFELENBQWYsR0FBcUJMLFlBQVksQ0FBQ0ssQ0FBRCxDQUFaLENBQWdCRyxtQkFBckM7QUFDQUwsSUFBQUEsYUFBYSxDQUFDRSxDQUFELENBQWIsR0FBbUJMLFlBQVksQ0FBQ0ssQ0FBRCxDQUFaLENBQWdCSSxvQkFBbkM7QUFDRDs7QUFFRGIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RLLElBQUFBLGVBQWU7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1TLEtBQUssR0FBRztBQUNaQyxJQUFBQSxNQUFNLEVBQUVULFNBREk7QUFFWlUsSUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUMsTUFBQUEsS0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUFBLGVBQWUsRUFBRSxTQUZuQjtBQUdFQyxNQUFBQSxJQUFJLEVBQUVaLGFBSFI7QUFHc0I7QUFDcEJhLE1BQUFBLFlBQVksRUFBRTtBQUpoQixLQURRLEVBT1I7QUFDRUgsTUFBQUEsS0FBSyxFQUFFLHdCQURUO0FBRUVDLE1BQUFBLGVBQWUsRUFBRSxTQUZuQjtBQUdFQyxNQUFBQSxJQUFJLEVBQUVYLGVBSFI7QUFHd0I7QUFDdEJZLE1BQUFBLFlBQVksRUFBRTtBQUpoQixLQVBRO0FBRkUsR0FBZDtBQW9CQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDJCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsVUFBSSxFQUFFTixLQURSO0FBRUUsYUFBTyxFQUFFO0FBQ1BPLFFBQUFBLG1CQUFtQixFQUFFLEtBRGQ7QUFFUEMsUUFBQUEsVUFBVSxFQUFFLElBRkw7QUFHUEMsUUFBQUEsT0FBTyxFQUFDO0FBQ05DLFVBQUFBLE1BQU0sRUFBRTtBQUNOQyxZQUFBQSxRQUFRLEVBQUUsUUFESjtBQUVOQyxZQUFBQSxLQUFLLEVBQUUsT0FGRDtBQUdOWCxZQUFBQSxNQUFNLEVBQUU7QUFDTlksY0FBQUEsVUFBVSxFQUFDLFFBREw7QUFFTkMsY0FBQUEsYUFBYSxFQUFFO0FBRlQ7QUFIRjtBQURGO0FBSEQ7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQTdEdUJ6QjtVQUVvQkQ7OztLQUZwQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyQ2hhcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIlxyXG5pbXBvcnQgdHlwZSB7IENoYXJ0UHJvcHMgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlRGF0YSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VEYXRhXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyQ2hhcnQoKSB7XHJcblxyXG4gIGNvbnN0IHsgZXZlbnRIaXN0b3J5LCBnZXRFdmVudEhpc3RvcnkgfSA9IHVzZURhdGEoKTtcclxuXHJcbiAgY29uc3QgbGFiZWxMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0IHBlcmZvcm1lZExpc3Q6IG51bWJlcltdID0gW107XHJcbiAgY29uc3QgYWN0aW9uUGxhbnNMaXN0OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRIaXN0b3J5Lmxlbmd0aDsgaSsrKXtcclxuICAgIGxhYmVsTGlzdFtpXSA9IFwiXCIgKyBldmVudEhpc3RvcnlbaV0uaWQ7XHJcbiAgICBhY3Rpb25QbGFuc0xpc3RbaV0gPSBldmVudEhpc3RvcnlbaV0uY3JlYXRlZEFjdGlvbnNQbGFucztcclxuICAgIHBlcmZvcm1lZExpc3RbaV0gPSBldmVudEhpc3RvcnlbaV0ucGVyZm9ybWVkSW5zcGVjdGlvbnM7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RXZlbnRIaXN0b3J5KCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgbGFiZWxzOiBsYWJlbExpc3QsXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdJbnNwZcOnw7VlcyByZWFsaXphZGFzJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZDMDA4JyxcclxuICAgICAgICBkYXRhOiBwZXJmb3JtZWRMaXN0LC8vWzY1LCA1OSwgODAsIDgxLCA1NiwgMjAsIDk1LCA0MiwgMjgsIDcwXSxcclxuICAgICAgICBiYXJUaGlja25lc3M6IDE1LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdwbGFub3MgZGUgYcOnw6NvIGNyaWFkb3MnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEQjhDMjgnLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvblBsYW5zTGlzdCwvL1szMCwgNjIsIDEwLCA1NiwgMjgsIDQyLCAyMCwgNzAsIDk1LCAzNF0sXHJcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAxNSxcclxuICAgICAgfVxyXG4gICAgICBcclxuICBcclxuICAgIF1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8QmFyXHJcbiAgICAgICAgZGF0YT17c3RhdGV9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgcGx1Z2luczp7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRTdHlsZTonY2lyY2xlJyxcclxuICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCYXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsInVzZURhdGEiLCJCYXJDaGFydCIsImV2ZW50SGlzdG9yeSIsImdldEV2ZW50SGlzdG9yeSIsImxhYmVsTGlzdCIsInBlcmZvcm1lZExpc3QiLCJhY3Rpb25QbGFuc0xpc3QiLCJpIiwibGVuZ3RoIiwiaWQiLCJjcmVhdGVkQWN0aW9uc1BsYW5zIiwicGVyZm9ybWVkSW5zcGVjdGlvbnMiLCJzdGF0ZSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwiYmFyVGhpY2tuZXNzIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJhbGlnbiIsInBvaW50U3R5bGUiLCJ1c2VQb2ludFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==