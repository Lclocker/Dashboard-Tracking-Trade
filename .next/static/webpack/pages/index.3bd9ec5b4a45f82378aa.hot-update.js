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
var DropButton = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject2 || (_templateObject2 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 12px;\n  width: ", ";\n  height: 28px;\n  border-radius: 100px;\n  border-style: none;\n  \n  background: #c4c4c4;\n\n  > span {\n    font-family: 'Poppins';\n    font-weight: 600;\n    font-size: 14px;\n    color: ", "\n  }\n\n  &:active {\n    background: #857b7b;\n  }\n\n  @media only screen and (max-width: 768px){\n    width: ", ";\n  }\n\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.width === "244px" ? props.width : "100px";
});
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\n  > div {\n    display: ", ";\n    width: ", ";\n    height: 10px;\n    background: #c4c4c4;\n    margin-top: -10px;\n  }\n\n  > ul {\n    display: ", ";\n    background: #c4c4c4;\n    margin: 0;\n    width: ", ";\n    padding: 0;\n    border-top: 1px solid #857b7b;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    position: absolute;\n\n    li {\n      list-style: none;\n      margin: 0;\n      padding: 2px 8px;\n      cursor: pointer;\n\n      a {\n        font-family: 'Poppins';\n        font-size: 14px;\n        font-weight: 600;\n        color: ", ";\n      }\n\n      &:hover {\n        background: #857b7b;\n      }\n    }\n    \n  }\n"])), function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2JkOWVjNWI0YTQ1ZjgyMzc4YWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDBEQUFILHlRQUVULFVBQUFHLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxPQUFmLEdBQXlCLE1BQTlCO0FBQUEsQ0FGSSxDQUFmO0FBS0EsSUFBTUMsVUFBVSxHQUFHTCw2REFBSCx3cEJBS1osVUFBQUcsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksS0FBWDtBQUFBLENBTE8sRUFnQlYsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUF2QjtBQUFBLENBaEJLLEVBd0JWLFVBQUFQLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNJLEtBQU4sS0FBZ0IsT0FBaEIsR0FBMEJKLEtBQUssQ0FBQ0ksS0FBaEMsR0FBd0MsT0FBN0M7QUFBQSxDQXhCSyxDQUFoQjtBQTZCQSxJQUFNSSxJQUFJLEdBQUdYLDBEQUFILDQ0QkFHRixVQUFBRyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDUyxNQUFOLEdBQWUsTUFBZixHQUF3QixNQUE3QjtBQUFBLENBSEgsRUFJSixVQUFBVCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxLQUFYO0FBQUEsQ0FKRCxFQVdGLFVBQUFKLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNTLE1BQU4sR0FBZSxPQUFmLEdBQXlCLE1BQTlCO0FBQUEsQ0FYSCxFQWNKLFVBQUFULEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNJLEtBQVg7QUFBQSxDQWRELEVBK0JBLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBdkI7QUFBQSxDQS9CTCxDQUFWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Ryb3BEb3duL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgZHJvcE9uOiBib29sZWFuIH0+YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5kcm9wT24gPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyb3BCdXR0b24gPSBzdHlsZWQuYnV0dG9uPHsgd2lkdGg6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCl9O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgXHJcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcclxuXHJcbiAgPiBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODU3YjdiO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09IFwiMjQ0cHhcIiA/IHByb3BzLndpZHRoIDogXCIxMDBweFwiKX07XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51ID0gc3R5bGVkLmRpdjx7IGFjdGl2ZTogYm9vbGVhbiwgd2lkdGg6IHN0cmluZyB9PmBcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoKX07XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG5cclxuICA+IHVsIHtcclxuICAgIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoKX07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4NTdiN2I7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODU3YjdiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImRyb3BPbiIsIkRyb3BCdXR0b24iLCJidXR0b24iLCJ3aWR0aCIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsIk1lbnUiLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9