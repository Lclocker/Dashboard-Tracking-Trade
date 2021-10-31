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
var PieChartContainer1 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //margin-left: 29px;\n  display: flex;\n  \n  grid-column-start: col4-start;\n  grid-column-end: end;\n  grid-row-start: row1-start;\n  grid-row-end: row1-end;\n\n  @media (max-width: 768px) {\n    grid-row: span 2 / 4;\n    grid-column: span 1 / auto;\n  }\n  \n"])));
var PieChartContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject6 || (_templateObject6 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  \n  grid-column-start: first;\n  grid-column-end: col1-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span auto / auto;\n    grid-column: span auto / auto;\n  }\n"])));
var PieChartContainer3 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject7 || (_templateObject7 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  //width: 347px;\n  //height: 269px;\n  display: flex;\n  \n  grid-column-start: col2-start;\n  grid-column-end: col2-end;\n  grid-row-start: row2-start;\n  grid-row-end: row2-end;\n  \n  @media (max-width: 768px) {\n    grid-row: span auto / auto;\n    grid-column: span auto / auto;\n  }\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IwNDQ2YWZhYjlmZGQwNTYzMWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHVhQUFmO0FBYUEsSUFBTUcsTUFBTSxHQUFHSCwwREFBSCwrWEFBWjtBQVdBLElBQU1JLE9BQU8sR0FBR0osMERBQUgseW5CQUFiO0FBYUEsSUFBTUsscUJBQXFCLEdBQUdMLDBEQUFILHdrQkFBM0I7QUFtQkEsSUFBTU0sa0JBQWtCLEdBQUdOLDBEQUFILDBlQUF4QjtBQWdCQSxJQUFNTyxrQkFBa0IsR0FBR1AsMERBQUgsZ2dCQUF4QjtBQWdCQSxJQUFNUSxrQkFBa0IsR0FBR1IsMERBQUgscWdCQUF4QjtBQWdCQSxJQUFNUyx1QkFBdUIsR0FBR1QsMERBQUgsb2xCQUE3QjtBQW1CQSxJQUFNVSxtQkFBbUIsR0FBR1YsMERBQUgsMmdCQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgLy9wYWRkaW5nOiAyMHB4IDBweDsgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbZmlyc3RdIDM0N3B4IFtjb2wxLWVuZF0gNDRweCBbY29sMi1zdGFydF0gMzQ3cHggW2NvbDItZW5kXSAyOXB4IFtjb2w0LXN0YXJ0XSAzNDdweCBbZW5kXTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IFtyb3cxLXN0YXJ0XSAyNjlweCBbcm93MS1lbmRdIDI1cHggW3JvdzItc3RhcnRdIDI2OXB4IFtyb3cyLWVuZF0gMjVweCBbcm93My1zdGFydF0gMzI4cHggW3JvdzMtZW5kXTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgpKGF1dG8tZml0LCBtaW5tYXgoMjY2cHgsIDFmcikpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIaXN0b3JpY0NhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vd2lkdGg6IDczOHB4O1xyXG4gIC8vbWF4LXdpZHRoOiA3MzhweDtcclxuICAvLy9oZWlnaHQ6IDI2OXB4O1xyXG4gLy8gbWF4LWhlaWdodDogMjY5cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGZpcnN0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMi1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzEtc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cxLWVuZDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXJvdzogc3BhbiAxIC8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDMgLyBhdXRvO1xyXG4gIH1cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWVDaGFydENvbnRhaW5lcjEgPSBzdHlsZWQuZGl2YFxyXG4gIC8vbWFyZ2luLWxlZnQ6IDI5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBcclxuICBncmlkLWNvbHVtbi1zdGFydDogY29sNC1zdGFydDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93MS1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzEtZW5kO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtcm93OiBzcGFuIDIgLyA0O1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMSAvIGF1dG87XHJcbiAgfVxyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0Q29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXHJcbiAgLy93aWR0aDogMzQ3cHg7XHJcbiAgLy9oZWlnaHQ6IDI2OXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGZpcnN0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogY29sMS1lbmQ7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzItc3RhcnQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiByb3cyLWVuZDtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtcm93OiBzcGFuIGF1dG8gLyBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gYXV0byAvIGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0Q29udGFpbmVyMyA9IHN0eWxlZC5kaXZgXHJcbiAgLy93aWR0aDogMzQ3cHg7XHJcbiAgLy9oZWlnaHQ6IDI2OXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGNvbDItc3RhcnQ7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiBjb2wyLWVuZDtcclxuICBncmlkLXJvdy1zdGFydDogcm93Mi1zdGFydDtcclxuICBncmlkLXJvdy1lbmQ6IHJvdzItZW5kO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gYXV0byAvIGF1dG87XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiBhdXRvIC8gYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5zcGVjdGlvbkNhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vaGVpZ2h0OiAzMjhweDtcclxuICAvL3dpZHRoOiA3MzhweDtcclxuICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBmaXJzdDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IGNvbDItZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3czLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93My1lbmQ7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXJvdzogc3BhbiBhdXRvIC8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIGF1dG8gLyBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBjb2w0LXN0YXJ0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogZW5kO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiByb3cyLXN0YXJ0O1xyXG4gIGdyaWQtcm93LWVuZDogcm93My1lbmQ7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXJvdzogc3BhbiBhdXRvIC8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIGF1dG8gLyBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXIiLCJDb250ZW50IiwiSGlzdG9yaWNDYXJkQ29udGFpbmVyIiwiUGllQ2hhcnRDb250YWluZXIxIiwiUGllQ2hhcnRDb250YWluZXIyIiwiUGllQ2hhcnRDb250YWluZXIzIiwiSW5zcGVjdGlvbkNhcmRDb250YWluZXIiLCJVcGRhdGVDYXJkQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==