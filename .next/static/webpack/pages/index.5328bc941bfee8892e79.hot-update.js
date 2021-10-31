"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CardHeader/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/CardHeader/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardHeader; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DropDown */ "./src/components/DropDown/index.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/CardHeader/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["isDropDownOn", "title", "subtitle"];
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\CardHeader\\index.tsx";





var dropValue = [{
  val: "diário"
}, {
  val: "mensal"
}, {
  val: "anual"
}];
function CardHeader(_ref) {
  var _ref$isDropDownOn = _ref.isDropDownOn,
      isDropDownOn = _ref$isDropDownOn === void 0 ? false : _ref$isDropDownOn,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? "" : _ref$subtitle,
      props = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.OptionsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_2__.default, {
          isDropDownOn: isDropDownOn,
          dropValues: dropValue,
          dropWidth: "244px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.OptionsButton, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSettings, {
            size: 24
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c = CardHeader;

var _c;

$RefreshReg$(_c, "CardHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTMyOGJjOTQxYmZlZTg4OTJlNzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTVEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLEVBQUFBLEdBQUcsRUFBRTtBQURQLENBRGdCLEVBSWhCO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRTtBQURQLENBSmdCLEVBT2hCO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRTtBQURQLENBUGdCLENBQWxCO0FBWWUsU0FBU0MsVUFBVCxPQUFrRztBQUFBLCtCQUE1RUMsWUFBNEU7QUFBQSxNQUE1RUEsWUFBNEUsa0NBQTdELEtBQTZEO0FBQUEsd0JBQXREQyxLQUFzRDtBQUFBLE1BQXREQSxLQUFzRCwyQkFBOUMsRUFBOEM7QUFBQSwyQkFBMUNDLFFBQTBDO0FBQUEsTUFBMUNBLFFBQTBDLDhCQUEvQixFQUErQjtBQUFBLE1BQXhCQyxLQUF3Qjs7QUFFL0csc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSwyQkFDRSw4REFBQyw0Q0FBRDtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UsOERBQUMscURBQUQ7QUFBQSxnQ0FDRSw4REFBQyw4Q0FBRDtBQUFVLHNCQUFZLEVBQUVGLFlBQXhCO0FBQXNDLG9CQUFVLEVBQUVILFNBQWxEO0FBQTZELG1CQUFTLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFBWSxnQkFBSSxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDtLQWxCdUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRIZWFkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3BEb3duIGZyb20gXCIuLi9Ecm9wRG93blwiO1xyXG5pbXBvcnQgeyBGaVNldHRpbmdzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQsIE9wdGlvbnNCdXR0b24sIE9wdGlvbnNDb250YWluZXIsIFRpdGxlQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxudHlwZSBDYXJkSGVhZGVyUHJvcHMgPSB7XHJcbiAgaXNEcm9wRG93bk9uOiBib29sZWFuO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc3VidGl0bGU6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGRyb3BWYWx1ZSA9IFtcclxuICB7XHJcbiAgICB2YWw6IFwiZGnDoXJpb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWw6IFwibWVuc2FsXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbDogXCJhbnVhbFwiXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEhlYWRlcih7IGlzRHJvcERvd25PbiA9IGZhbHNlLCB0aXRsZSA9IFwiXCIsIHN1YnRpdGxlID0gXCJcIiwgLi4ucHJvcHN9OiBDYXJkSGVhZGVyUHJvcHMpe1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgPGg0PntzdWJ0aXRsZX08L2g0PlxyXG4gICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgPE9wdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgICA8RHJvcERvd24gaXNEcm9wRG93bk9uPXtpc0Ryb3BEb3duT259IGRyb3BWYWx1ZXM9e2Ryb3BWYWx1ZX0gZHJvcFdpZHRoPVwiMjQ0cHhcIj48L0Ryb3BEb3duPlxyXG4gICAgICAgICAgPE9wdGlvbnNCdXR0b24+XHJcbiAgICAgICAgICAgIDxGaVNldHRpbmdzIHNpemU9ezI0fS8+XHJcbiAgICAgICAgICA8L09wdGlvbnNCdXR0b24+XHJcbiAgICAgICAgPC9PcHRpb25zQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJEcm9wRG93biIsIkZpU2V0dGluZ3MiLCJDb250YWluZXIiLCJDb250ZW50IiwiT3B0aW9uc0J1dHRvbiIsIk9wdGlvbnNDb250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsImRyb3BWYWx1ZSIsInZhbCIsIkNhcmRIZWFkZXIiLCJpc0Ryb3BEb3duT24iLCJ0aXRsZSIsInN1YnRpdGxlIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9