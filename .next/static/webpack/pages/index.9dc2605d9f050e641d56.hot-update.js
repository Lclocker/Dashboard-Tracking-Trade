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
/* harmony export */   "Content": function() { return /* binding */ Content; },
/* harmony export */   "Header": function() { return /* binding */ Header; },
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
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: grid;\n  //flex-wrap: wrap;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 1fr 1fr 1.25fr;\n  grid-template-areas: \n    \"head head head\"\n    \"hist hist graph1\"\n    \"graph2 graph3 plans\"\n    \"inspec inspec plans\"\n  ;\n  grid-gap: 1rem;\n\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  grid-area: head;\n  > span {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 25px;\n    color: #333333;\n  }\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWRjMjYwNWQ5ZjA1MGU2NDFkNTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHNXQUFmO0FBU0EsSUFBTUcsT0FBTyxHQUFHSCwwREFBSCw0ZkFBYjtBQWVBLElBQU1JLE1BQU0sR0FBR0osMERBQUgsMmFBQVo7QUFhQSxJQUFNSyxxQkFBcUIsR0FBR0wsMERBQUgsbWdCQUEzQjtBQWlCQSxJQUFNTSxrQkFBa0IsR0FBR04sMERBQUgsMGFBQXhCO0FBZUEsSUFBTU8sa0JBQWtCLEdBQUdQLDBEQUFILHFiQUF4QjtBQWNBLElBQU1RLGtCQUFrQixHQUFHUiwwREFBSCwyYkFBeEI7QUFlQSxJQUFNUyx1QkFBdUIsR0FBR1QsMERBQUgseWdCQUE3QjtBQWlCQSxJQUFNVSxtQkFBbUIsR0FBR1YsMERBQUgsaWNBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9zdHlsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vZmxleC13cmFwOiB3cmFwO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAxZnIgMWZyIDEuMjVmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiaGVhZCBoZWFkIGhlYWRcIlxyXG4gICAgXCJoaXN0IGhpc3QgZ3JhcGgxXCJcclxuICAgIFwiZ3JhcGgyIGdyYXBoMyBwbGFuc1wiXHJcbiAgICBcImluc3BlYyBpbnNwZWMgcGxhbnNcIlxyXG4gIDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogaGVhZDtcclxuICA+IHNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIaXN0b3JpY0NhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDczOHB4O1xyXG4gIC8vbWF4LXdpZHRoOiA3MzhweDtcclxuICAvLy9oZWlnaHQ6IDI2OXB4O1xyXG4gLy8gbWF4LWhlaWdodDogMjY5cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1hcmVhOiBoaXN0O1xyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGZpcnN0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMi1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzEtc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cxLWVuZDtcclxuICAqL1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0Q29udGFpbmVyMSA9IHN0eWxlZC5kaXZgXHJcbiAgLy9tYXJnaW4tbGVmdDogMjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtYXJlYTogZ3JhcGgxO1xyXG5cclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBjb2w0LXN0YXJ0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cxLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93MS1lbmQ7XHJcbiAgKi9cclxuXHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGllQ2hhcnRDb250YWluZXIyID0gc3R5bGVkLmRpdmBcclxuICAvL3dpZHRoOiAzNDdweDtcclxuICAvL2hlaWdodDogMjY5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBncmlkLWFyZWE6IGdyYXBoMjtcclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDEtZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cyLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93Mi1lbmQ7XHJcbiAgKi9cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjMgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDM0N3B4O1xyXG4gIC8vaGVpZ2h0OiAyNjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtYXJlYTogZ3JhcGgzO1xyXG5cclxuICAvKlxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBjb2wyLXN0YXJ0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMi1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzItc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cyLWVuZDtcclxuICAqL1xyXG4gXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5zcGVjdGlvbkNhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vaGVpZ2h0OiAzMjhweDtcclxuICAvL3dpZHRoOiA3MzhweDtcclxuICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogaW5zcGVjO1xyXG4gIC8qXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGZpcnN0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMi1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzMtc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3czLWVuZDtcclxuICAqL1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUNhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1hcmVhOiBwbGFucztcclxuXHJcbiAgLypcclxuICBncmlkLWNvbHVtbi1zdGFydDogY29sNC1zdGFydDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93Mi1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzMtZW5kO1xyXG4gICovXHJcbiAgXHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGVudCIsIkhlYWRlciIsIkhpc3RvcmljQ2FyZENvbnRhaW5lciIsIlBpZUNoYXJ0Q29udGFpbmVyMSIsIlBpZUNoYXJ0Q29udGFpbmVyMiIsIlBpZUNoYXJ0Q29udGFpbmVyMyIsIkluc3BlY3Rpb25DYXJkQ29udGFpbmVyIiwiVXBkYXRlQ2FyZENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=