"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ControlPanel/styles.tsx":
/*!************************************************!*\
  !*** ./src/components/ControlPanel/styles.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "Content": function() { return /* binding */ Content; },
/* harmony export */   "HistoricCardContainer": function() { return /* binding */ HistoricCardContainer; },
/* harmony export */   "PieChartContainer1": function() { return /* binding */ PieChartContainer1; },
/* harmony export */   "PieChartContainer2": function() { return /* binding */ PieChartContainer2; },
/* harmony export */   "PieChartContainer3": function() { return /* binding */ PieChartContainer3; },
/* harmony export */   "InspectionCardContainer": function() { return /* binding */ InspectionCardContainer; },
/* harmony export */   "UpdateCardContainer": function() { return /* binding */ UpdateCardContainer; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  height: 100%;\n  width: 100vw;\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: flex-start;\n  > span {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 25px;\n    color: #333333;\n  }\n"])));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 100%auto;\n  width: 100vw;\n  display: grid;\n  flex-wrap: wrap;\n\n  //grid-template-columns: [first] 347px [col1-end] 44px [col2-start] 347px [col2-end] 29px [col4-start] 347px [end];\n  //grid-template-rows: [row1-start] 269px [row1-end] 25px [row2-start] 269px [row2-end] 25px [row3-start] 328px [row3-end];\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1.25fr;\n  grid-template-areas: \n    \"hist hist graph1\"\n    \"graph2 graph3 plans\"\n    \"inspec inspec plans\"\n  ;\n\n"])));
var HistoricCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4 || (_templateObject4 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 738px;\n  //max-width: 738px;\n  ///height: 269px;\n // max-height: 269px;\n  justify-content: flex-start;\n  display: flex;\n  grid-area: hist;\n  /*\n  grid-column-start: first;\n  grid-column-end: col2-end;\n  grid-row-start: row1-start;\n  grid-row-end: row1-end;\n  */\n  \n"])));
var PieChartContainer1 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //margin-left: 29px;\n  display: flex;\n  grid-area: graph1;\n\n  /*\n  grid-column-start: col4-start;\n  grid-column-end: end;\n  grid-row-start: row1-start;\n  grid-row-end: row1-end;\n  */\n\n  \n"])));
var PieChartContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject6 || (_templateObject6 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  grid-area: graph2;\n  /*\n  grid-column-start: first;\n  grid-column-end: col1-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  */\n  \n"])));
var PieChartContainer3 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject7 || (_templateObject7 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  grid-area: graph3;\n\n  /*\n  grid-column-start: col2-start;\n  grid-column-end: col2-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  */\n \n"])));
var InspectionCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject8 || (_templateObject8 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //height: 328px;\n  //width: 738px;\n  //justify-content: flex-start;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  grid-area: inspec;\n  /*\n  grid-column-start: first;\n  grid-column-end: col2-end;\n  grid-row-start: row3-start;\n  grid-row-end: row3-end;\n  */\n  \n"])));
var UpdateCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject9 || (_templateObject9 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  grid-area: plans;\n\n  /*\n  grid-column-start: col4-start;\n  grid-column-end: end;\n  grid-row-start: row2-start;\n  grid-row-end: row3-end;\n  */\n  \n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA4ZTZiY2ZhNzllNDNjMjA3YTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHFXQUFmO0FBU0EsSUFBTUcsTUFBTSxHQUFHSCwwREFBSCwrWEFBWjtBQVdBLElBQU1JLE9BQU8sR0FBR0osMERBQUgsc3VCQUFiO0FBa0JBLElBQU1LLHFCQUFxQixHQUFHTCwwREFBSCxtZ0JBQTNCO0FBaUJBLElBQU1NLGtCQUFrQixHQUFHTiwwREFBSCwwYUFBeEI7QUFlQSxJQUFNTyxrQkFBa0IsR0FBR1AsMERBQUgscWJBQXhCO0FBY0EsSUFBTVEsa0JBQWtCLEdBQUdSLDBEQUFILDJiQUF4QjtBQWVBLElBQU1TLHVCQUF1QixHQUFHVCwwREFBSCx5Z0JBQTdCO0FBaUJBLElBQU1VLG1CQUFtQixHQUFHViwwREFBSCxpY0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwdnc7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICA+IHNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCVhdXRvO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtmaXJzdF0gMzQ3cHggW2NvbDEtZW5kXSA0NHB4IFtjb2wyLXN0YXJ0XSAzNDdweCBbY29sMi1lbmRdIDI5cHggW2NvbDQtc3RhcnRdIDM0N3B4IFtlbmRdO1xyXG4gIC8vZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbcm93MS1zdGFydF0gMjY5cHggW3JvdzEtZW5kXSAyNXB4IFtyb3cyLXN0YXJ0XSAyNjlweCBbcm93Mi1lbmRdIDI1cHggW3JvdzMtc3RhcnRdIDMyOHB4IFtyb3czLWVuZF07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMS4yNWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCJoaXN0IGhpc3QgZ3JhcGgxXCJcclxuICAgIFwiZ3JhcGgyIGdyYXBoMyBwbGFuc1wiXHJcbiAgICBcImluc3BlYyBpbnNwZWMgcGxhbnNcIlxyXG4gIDtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGlzdG9yaWNDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvL3dpZHRoOiA3MzhweDtcclxuICAvL21heC13aWR0aDogNzM4cHg7XHJcbiAgLy8vaGVpZ2h0OiAyNjlweDtcclxuIC8vIG1heC1oZWlnaHQ6IDI2OXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtYXJlYTogaGlzdDtcclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDItZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cxLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93MS1lbmQ7XHJcbiAgKi9cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjEgPSBzdHlsZWQuZGl2YFxyXG4gIC8vbWFyZ2luLWxlZnQ6IDI5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBncmlkLWFyZWE6IGdyYXBoMTtcclxuXHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogY29sNC1zdGFydDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93MS1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzEtZW5kO1xyXG4gICovXHJcblxyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0Q29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXHJcbiAgLy93aWR0aDogMzQ3cHg7XHJcbiAgLy9oZWlnaHQ6IDI2OXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1hcmVhOiBncmFwaDI7XHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogZmlyc3Q7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wxLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93Mi1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzItZW5kO1xyXG4gICovXHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGllQ2hhcnRDb250YWluZXIzID0gc3R5bGVkLmRpdmBcclxuICAvL3dpZHRoOiAzNDdweDtcclxuICAvL2hlaWdodDogMjY5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBncmlkLWFyZWE6IGdyYXBoMztcclxuXHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogY29sMi1zdGFydDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDItZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cyLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93Mi1lbmQ7XHJcbiAgKi9cclxuIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3BlY3Rpb25DYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvL2hlaWdodDogMzI4cHg7XHJcbiAgLy93aWR0aDogNzM4cHg7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWFyZWE6IGluc3BlYztcclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDItZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3czLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93My1lbmQ7XHJcbiAgKi9cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogcGxhbnM7XHJcblxyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGNvbDQtc3RhcnQ7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBlbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzItc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3czLWVuZDtcclxuICAqL1xyXG4gIFxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlciIsIkNvbnRlbnQiLCJIaXN0b3JpY0NhcmRDb250YWluZXIiLCJQaWVDaGFydENvbnRhaW5lcjEiLCJQaWVDaGFydENvbnRhaW5lcjIiLCJQaWVDaGFydENvbnRhaW5lcjMiLCJJbnNwZWN0aW9uQ2FyZENvbnRhaW5lciIsIlVwZGF0ZUNhcmRDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9