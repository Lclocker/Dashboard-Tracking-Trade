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


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: flex-start;\n  > span {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 25px;\n    color: #333333;\n  }\n"])));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  flex-wrap: wrap;\n\n  //grid-template-columns: [first] 347px [col1-end] 44px [col2-start] 347px [col2-end] 29px [col4-start] 347px [end];\n  //grid-template-rows: [row1-start] 269px [row1-end] 25px [row2-start] 269px [row2-end] 25px [row3-start] 328px [row3-end];\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1.25fr;\n  grid-template-areas: \n    \"hist hist graph1\"\n    \"graph2 graph3 plans\"\n    \"inspec inspec plans\"\n  ;\n\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzcwY2U0M2RiMzc5ZGY2Y2UzYmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHNXQUFmO0FBU0EsSUFBTUcsTUFBTSxHQUFHSCwwREFBSCwrWEFBWjtBQVdBLElBQU1JLE9BQU8sR0FBR0osMERBQUgsbXVCQUFiO0FBa0JBLElBQU1LLHFCQUFxQixHQUFHTCwwREFBSCxtZ0JBQTNCO0FBaUJBLElBQU1NLGtCQUFrQixHQUFHTiwwREFBSCwwYUFBeEI7QUFlQSxJQUFNTyxrQkFBa0IsR0FBR1AsMERBQUgscWJBQXhCO0FBY0EsSUFBTVEsa0JBQWtCLEdBQUdSLDBEQUFILDJiQUF4QjtBQWVBLElBQU1TLHVCQUF1QixHQUFHVCwwREFBSCx5Z0JBQTdCO0FBaUJBLElBQU1VLG1CQUFtQixHQUFHViwwREFBSCxpY0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC8vZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbZmlyc3RdIDM0N3B4IFtjb2wxLWVuZF0gNDRweCBbY29sMi1zdGFydF0gMzQ3cHggW2NvbDItZW5kXSAyOXB4IFtjb2w0LXN0YXJ0XSAzNDdweCBbZW5kXTtcclxuICAvL2dyaWQtdGVtcGxhdGUtcm93czogW3JvdzEtc3RhcnRdIDI2OXB4IFtyb3cxLWVuZF0gMjVweCBbcm93Mi1zdGFydF0gMjY5cHggW3JvdzItZW5kXSAyNXB4IFtyb3czLXN0YXJ0XSAzMjhweCBbcm93My1lbmRdO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDEuMjVmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiaGlzdCBoaXN0IGdyYXBoMVwiXHJcbiAgICBcImdyYXBoMiBncmFwaDMgcGxhbnNcIlxyXG4gICAgXCJpbnNwZWMgaW5zcGVjIHBsYW5zXCJcclxuICA7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhpc3RvcmljQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy93aWR0aDogNzM4cHg7XHJcbiAgLy9tYXgtd2lkdGg6IDczOHB4O1xyXG4gIC8vL2hlaWdodDogMjY5cHg7XHJcbiAvLyBtYXgtaGVpZ2h0OiAyNjlweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBncmlkLWFyZWE6IGhpc3Q7XHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogZmlyc3Q7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wyLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93MS1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzEtZW5kO1xyXG4gICovXHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGllQ2hhcnRDb250YWluZXIxID0gc3R5bGVkLmRpdmBcclxuICAvL21hcmdpbi1sZWZ0OiAyOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1hcmVhOiBncmFwaDE7XHJcblxyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGNvbDQtc3RhcnQ7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBlbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzEtc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cxLWVuZDtcclxuICAqL1xyXG5cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDM0N3B4O1xyXG4gIC8vaGVpZ2h0OiAyNjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtYXJlYTogZ3JhcGgyO1xyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGZpcnN0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMS1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzItc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cyLWVuZDtcclxuICAqL1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0Q29udGFpbmVyMyA9IHN0eWxlZC5kaXZgXHJcbiAgLy93aWR0aDogMzQ3cHg7XHJcbiAgLy9oZWlnaHQ6IDI2OXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1hcmVhOiBncmFwaDM7XHJcblxyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGNvbDItc3RhcnQ7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wyLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93Mi1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzItZW5kO1xyXG4gICovXHJcbiBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnNwZWN0aW9uQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy9oZWlnaHQ6IDMyOHB4O1xyXG4gIC8vd2lkdGg6IDczOHB4O1xyXG4gIC8vanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1hcmVhOiBpbnNwZWM7XHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogZmlyc3Q7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wyLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93My1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzMtZW5kO1xyXG4gICovXHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWFyZWE6IHBsYW5zO1xyXG5cclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBjb2w0LXN0YXJ0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cyLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93My1lbmQ7XHJcbiAgKi9cclxuICBcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXIiLCJDb250ZW50IiwiSGlzdG9yaWNDYXJkQ29udGFpbmVyIiwiUGllQ2hhcnRDb250YWluZXIxIiwiUGllQ2hhcnRDb250YWluZXIyIiwiUGllQ2hhcnRDb250YWluZXIzIiwiSW5zcGVjdGlvbkNhcmRDb250YWluZXIiLCJVcGRhdGVDYXJkQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==