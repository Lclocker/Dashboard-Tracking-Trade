"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PieChartCardDayStatus/styles.tsx":
/*!*********************************************************!*\
  !*** ./src/components/PieChartCardDayStatus/styles.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Legends": function() { return /* binding */ Legends; },
/* harmony export */   "GraphLegend": function() { return /* binding */ GraphLegend; },
/* harmony export */   "FirstLegendLine": function() { return /* binding */ FirstLegendLine; },
/* harmony export */   "SecondLegendLine": function() { return /* binding */ SecondLegendLine; },
/* harmony export */   "ThirdLegendLine": function() { return /* binding */ ThirdLegendLine; },
/* harmony export */   "TimeAverage": function() { return /* binding */ TimeAverage; },
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 100%;\n  background: #FFFFFF;\n  border: 0.5px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n"])), function (props) {
  return props.theme.colors.border;
});
var Legends = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n  padding: 0 20px;\n"])));
var GraphLegend = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex-direction: column;\n"])));
var FirstLegendLine = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4 || (_templateObject4 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  gap: 5px;\n  margin-bottom: 2px;\n  \n  > div {\n    width: 5px;\n    height: 5px;\n    border-radius: 200px;\n    border: 3px solid #7FC008;\n  }\n\n  > span {\n    font-weight: 300;\n    font-size: 9px;\n    color: #161616;\n  }\n"])));
var SecondLegendLine = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  gap: 5px;\n  margin-bottom: 2px;\n\n  > div {\n    width: 5px;\n    height: 5px;\n    border-radius: 200px;\n    border: 3px solid #DB8C28;\n  }\n\n  > span {\n    font-weight: 300;\n    font-size: 9px;\n    color: #161616;\n  }\n"])));
var ThirdLegendLine = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject6 || (_templateObject6 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  gap: 5px;\n  margin-bottom: 2px;\n\n  > div {\n    width: 5px;\n    height: 5px;\n    border-radius: 200px;\n    border: 3px solid #EB5757;\n  }\n\n  > span {\n    font-weight: 300;\n    font-size: 9px;\n    color: #161616;\n  }\n"])));
var TimeAverage = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject7 || (_templateObject7 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  width: auto ;\n  flex-direction: column;\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n    gap: 25px;\n\n    > span {\n      font-weight: 300;\n      font-size: 9px;\n      color: #161616;\n    }\n  }\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject8 || (_templateObject8 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  font-size: 10px;\n  color: #B0B0B0;\n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWMwNzk2ZmU3YTg2OTAzMjRkYWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFNBQVMsR0FBR0QsMERBQUgsd1lBR0UsVUFBQUcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUF2QjtBQUFBLENBSFAsQ0FBZjtBQVNBLElBQU1DLE9BQU8sR0FBR1AsMERBQUgsb1hBQWI7QUFTQSxJQUFNUSxXQUFXLEdBQUdSLDBEQUFILDhRQUFqQjtBQUtBLElBQU1TLGVBQWUsR0FBR1QsMERBQUgsNmRBQXJCO0FBbUJBLElBQU1VLGdCQUFnQixHQUFHViwwREFBSCwyZEFBdEI7QUFtQkEsSUFBTVcsZUFBZSxHQUFHWCwwREFBSCwyZEFBckI7QUFtQkEsSUFBTVksV0FBVyxHQUFHWiwwREFBSCx3ZEFBakI7QUFrQkEsSUFBTWEsS0FBSyxHQUFHYiwyREFBSCwwUkFBWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QaWVDaGFydENhcmREYXlTdGF0dXMvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJvcmRlcn07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGVnZW5kcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhcGhMZWdlbmQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaXJzdExlZ2VuZExpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIFxyXG4gID4gZGl2IHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzdGQzAwODtcclxuICB9XHJcblxyXG4gID4gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2Vjb25kTGVnZW5kTGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0RCOEMyODtcclxuICB9XHJcblxyXG4gID4gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGhpcmRMZWdlbmRMaW5lID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRUI1NzU3O1xyXG4gIH1cclxuXHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lQXZlcmFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0byA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMjVweDtcclxuXHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgY29sb3I6ICMxNjE2MTY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICNCMEIwQjA7XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJib3JkZXIiLCJMZWdlbmRzIiwiR3JhcGhMZWdlbmQiLCJGaXJzdExlZ2VuZExpbmUiLCJTZWNvbmRMZWdlbmRMaW5lIiwiVGhpcmRMZWdlbmRMaW5lIiwiVGltZUF2ZXJhZ2UiLCJUaXRsZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9