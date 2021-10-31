"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DropDown/styles.tsx":
/*!********************************************!*\
  !*** ./src/components/DropDown/styles.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "DropButton": function() { return /* binding */ DropButton; },
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2, _templateObject3;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: relative;\n  display: ", ";\n"])), function (props) {
  return props.dropOn ? "block" : "none";
});
var DropButton = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 12px;\n  width: ", ";\n  height: 28px;\n  border-radius: 100px;\n  border-style: none;\n  background: #c4c4c4;\n\n  > span {\n    font-family: 'Poppins';\n    font-weight: 600;\n    font-size: 14px;\n    color: ", "\n  }\n\n  &:active {\n    background: #857b7b;\n  }\n\n  @media only screen and (max-width: 768px){\n    width: ", ";\n  }\n\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.width === "244px" ? "100px" : props.width;
});
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\n  > div {\n    display: ", ";\n    width: ", ";\n    height: 10px;\n    background: #c4c4c4;\n    margin-top: -10px;\n  }\n\n  > ul {\n    display: ", ";\n    background: #c4c4c4;\n    margin: 0;\n    width: ", ";\n    padding: 0;\n    border-top: 1px solid #857b7b;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    position: absolute;\n\n    li {\n      list-style: none;\n      margin: 0;\n      padding: 2px 8px;\n      cursor: pointer;\n\n      a {\n        font-family: 'Poppins';\n        font-size: 14px;\n        font-weight: 600;\n        color: ", ";\n      }\n\n      &:hover {\n        background: #857b7b;\n      }\n    }\n  }\n"])), function (props) {
  return props.active ? "flex" : "none";
}, function (props) {
  return props.width;
}, function (props) {
  return props.active ? "block" : "none";
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.text;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBlM2U2MTAxYTBlODhkZGQ3NTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHlRQUVULFVBQUFHLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxPQUFmLEdBQXlCLE1BQTlCO0FBQUEsQ0FGSSxDQUFmO0FBS0EsSUFBTUMsVUFBVSxHQUFHTCw2REFBSCxvcEJBS1osVUFBQUcsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksS0FBWDtBQUFBLENBTE8sRUFlVixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQXZCO0FBQUEsQ0FmSyxFQXVCVixVQUFBUCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxLQUFOLEtBQWdCLE9BQWhCLEdBQTBCLE9BQTFCLEdBQW9DSixLQUFLLENBQUNJLEtBQS9DO0FBQUEsQ0F2QkssQ0FBaEI7QUE0QkEsSUFBTUksSUFBSSxHQUFHWCwwREFBSCxzNEJBR0YsVUFBQUcsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ1MsTUFBTixHQUFlLE1BQWYsR0FBd0IsTUFBN0I7QUFBQSxDQUhILEVBSUosVUFBQVQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksS0FBWDtBQUFBLENBSkQsRUFXRixVQUFBSixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDUyxNQUFOLEdBQWUsT0FBZixHQUF5QixNQUE5QjtBQUFBLENBWEgsRUFjSixVQUFBVCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxLQUFYO0FBQUEsQ0FkRCxFQStCQSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQXZCO0FBQUEsQ0EvQkwsQ0FBViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93bi9zdHlsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRyb3BPbjogYm9vbGVhbiB9PmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuZHJvcE9uID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IHdpZHRoOiBzdHJpbmcgfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGgpfTtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XHJcblxyXG4gID4gc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1N2I3YjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSBcIjI0NHB4XCIgPyBcIjEwMHB4XCIgOiBwcm9wcy53aWR0aCl9O1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXY8eyBhY3RpdmU6IGJvb2xlYW4sIHdpZHRoOiBzdHJpbmcgfT5gXHJcblxyXG4gID4gZGl2IHtcclxuICAgIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IFwiZmxleFwiIDogXCJub25lXCIpfTtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCl9O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2M0YzRjNDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgPiB1bCB7XHJcbiAgICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG4gICAgYmFja2dyb3VuZDogI2M0YzRjNDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCl9O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODU3YjdiO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzg1N2I3YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiZHJvcE9uIiwiRHJvcEJ1dHRvbiIsImJ1dHRvbiIsIndpZHRoIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0IiwiTWVudSIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=