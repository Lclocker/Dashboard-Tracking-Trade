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


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  height: 100%;\n  max-width: 100%;\n\n  @media (min-width: 1024px) {\n    flex-wrap: nowrap;\n  }\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: flex-start;\n  > span {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 25px;\n    color: #333333;\n  }\n"])));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //padding: 20px 0px; \n  display: grid;\n\n  grid-template-columns: [first] 347px [col1-end] 44px [col2-start] 347px [col2-end] 29px [col4-start] 347px [end];\n  grid-template-rows: [row1-start] 269px [row1-end] 25px [row2-start] 269px [row2-end] 25px [row3-start] 328px [row3-end];\n\n  @media (max-width: 768px) {\n    gap: 1rem;\n    grid-template-columns: repeat()(auto-fit, minmax(266px, 1fr));\n  }\n"])));
var HistoricCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4 || (_templateObject4 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 738px;\n  //max-width: 738px;\n  ///height: 269px;\n // max-height: 269px;\n  justify-content: flex-start;\n  display: flex;\n  grid-column-start: first;\n  grid-column-end: col2-end;\n  grid-row-start: row1-start;\n  grid-row-end: row1-end;\n\n  @media (max-width: 768px) {\n    grid-row: span 1 / auto;\n    grid-column: span 3 / auto;\n  }\n  \n"])));
var PieChartContainer1 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //margin-left: 29px;\n  display: flex;\n  \n  grid-column-start: col4-start;\n  grid-column-end: end;\n  grid-row-start: row1-start;\n  grid-row-end: row1-end;\n\n  @media (max-width: 768px) {\n    grid-row: span 2 / 4;\n    grid-column: span 1 / 2;\n  }\n  \n"])));
var PieChartContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject6 || (_templateObject6 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  \n  grid-column-start: first;\n  grid-column-end: col1-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span 2 / 4;\n    grid-column: span 2 / 4;\n  }\n"])));
var PieChartContainer3 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject7 || (_templateObject7 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  \n  grid-column-start: col2-start;\n  grid-column-end: col2-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span 3 / 4;\n    grid-column: span auto / auto;\n  }\n"])));
var InspectionCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject8 || (_templateObject8 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //height: 328px;\n  //width: 738px;\n  //justify-content: flex-start;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  \n  grid-column-start: first;\n  grid-column-end: col2-end;\n  grid-row-start: row3-start;\n  grid-row-end: row3-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span auto / auto;\n    grid-column: span auto / auto;\n  }\n"])));
var UpdateCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject9 || (_templateObject9 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  \n  grid-column-start: col4-start;\n  grid-column-end: end;\n  grid-row-start: row2-start;\n  grid-row-end: row3-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span auto / auto;\n    grid-column: span auto / auto;\n  }\n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmVmMTZlNmIwMjIwNDUwOGRmZWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHVhQUFmO0FBYUEsSUFBTUcsTUFBTSxHQUFHSCwwREFBSCwrWEFBWjtBQVdBLElBQU1JLE9BQU8sR0FBR0osMERBQUgseW5CQUFiO0FBYUEsSUFBTUsscUJBQXFCLEdBQUdMLDBEQUFILHdrQkFBM0I7QUFtQkEsSUFBTU0sa0JBQWtCLEdBQUdOLDBEQUFILHVlQUF4QjtBQWdCQSxJQUFNTyxrQkFBa0IsR0FBR1AsMERBQUgsb2ZBQXhCO0FBZ0JBLElBQU1RLGtCQUFrQixHQUFHUiwwREFBSCwrZkFBeEI7QUFnQkEsSUFBTVMsdUJBQXVCLEdBQUdULDBEQUFILG9sQkFBN0I7QUFtQkEsSUFBTVUsbUJBQW1CLEdBQUdWLDBEQUFILDJnQkFBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gID4gc3BhbiB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIC8vcGFkZGluZzogMjBweCAwcHg7IFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ZpcnN0XSAzNDdweCBbY29sMS1lbmRdIDQ0cHggW2NvbDItc3RhcnRdIDM0N3B4IFtjb2wyLWVuZF0gMjlweCBbY29sNC1zdGFydF0gMzQ3cHggW2VuZF07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbcm93MS1zdGFydF0gMjY5cHggW3JvdzEtZW5kXSAyNXB4IFtyb3cyLXN0YXJ0XSAyNjlweCBbcm93Mi1lbmRdIDI1cHggW3JvdzMtc3RhcnRdIDMyOHB4IFtyb3czLWVuZF07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoKShhdXRvLWZpdCwgbWlubWF4KDI2NnB4LCAxZnIpKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGlzdG9yaWNDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvL3dpZHRoOiA3MzhweDtcclxuICAvL21heC13aWR0aDogNzM4cHg7XHJcbiAgLy8vaGVpZ2h0OiAyNjlweDtcclxuIC8vIG1heC1oZWlnaHQ6IDI2OXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDItZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cxLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93MS1lbmQ7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMSAvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzIC8gYXV0bztcclxuICB9XHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGllQ2hhcnRDb250YWluZXIxID0gc3R5bGVkLmRpdmBcclxuICAvL21hcmdpbi1sZWZ0OiAyOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGNvbDQtc3RhcnQ7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBlbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzEtc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cxLWVuZDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXJvdzogc3BhbiAyIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEgLyAyO1xyXG4gIH1cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDM0N3B4O1xyXG4gIC8vaGVpZ2h0OiAyNjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDEtZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cyLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93Mi1lbmQ7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXJvdzogc3BhbiAyIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDIgLyA0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjMgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDM0N3B4O1xyXG4gIC8vaGVpZ2h0OiAyNjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBjb2wyLXN0YXJ0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMi1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzItc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cyLWVuZDtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtcm93OiBzcGFuIDMgLyA0O1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gYXV0byAvIGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3BlY3Rpb25DYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvL2hlaWdodDogMzI4cHg7XHJcbiAgLy93aWR0aDogNzM4cHg7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICBncmlkLWNvbHVtbi1zdGFydDogZmlyc3Q7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wyLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93My1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzMtZW5kO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gYXV0byAvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiBhdXRvIC8gYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICBncmlkLWNvbHVtbi1zdGFydDogY29sNC1zdGFydDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93Mi1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzMtZW5kO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gYXV0byAvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiBhdXRvIC8gYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyIiwiQ29udGVudCIsIkhpc3RvcmljQ2FyZENvbnRhaW5lciIsIlBpZUNoYXJ0Q29udGFpbmVyMSIsIlBpZUNoYXJ0Q29udGFpbmVyMiIsIlBpZUNoYXJ0Q29udGFpbmVyMyIsIkluc3BlY3Rpb25DYXJkQ29udGFpbmVyIiwiVXBkYXRlQ2FyZENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=