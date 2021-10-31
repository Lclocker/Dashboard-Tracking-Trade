"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SideDrawer/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/SideDrawer/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SideDrawer; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_sideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/sideDrawer */ "./src/context/sideDrawer/index.tsx");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/SideDrawer/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\SideDrawer\\index.tsx",
    _s = $RefreshSig$();







function SideDrawer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isSideDrawerOn = _useState[0],
      setIsSideDrawerOn = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_sideDrawer__WEBPACK_IMPORTED_MODULE_3__.default),
      setGlobalState = _useContext.setState;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_sideDrawer__WEBPACK_IMPORTED_MODULE_3__.default),
      setState = _useContext2.setState,
      state = _useContext2.state;

  function toggleSideDrawer() {
    return _toggleSideDrawer.apply(this, arguments);
  }

  function _toggleSideDrawer() {
    _toggleSideDrawer = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(isSideDrawerOn);
              _context.next = 3;
              return setIsSideDrawerOn(!isSideDrawerOn);

            case 3:
              setGlobalState({
                isSideDrawerOn: isSideDrawerOn
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _toggleSideDrawer.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    active: state.isSideDrawerOn,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BackButton, {
      onClick: toggleSideDrawer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        src: "/images/chevron_back.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiBarChartSquare, {
        size: 22,
        color: "#0794B2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Painel de Controle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(SideDrawer, "kiFbrWpvc6pgIjQLAyKnTWfcWhE=");

_c = SideDrawer;

var _c;

$RefreshReg$(_c, "SideDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTFjM2YyMjM5MDViZGVmZTc3OTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTUSxVQUFULEdBQXNCO0FBQUE7O0FBRW5DLGtCQUE0Q04sK0NBQVEsQ0FBQyxJQUFELENBQXBEO0FBQUEsTUFBT08sY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0Esb0JBQXFDVCxpREFBVSxDQUFDRSx3REFBRCxDQUEvQztBQUFBLE1BQWtCUSxjQUFsQixlQUFRQyxRQUFSOztBQUNBLHFCQUE0QlgsaURBQVUsQ0FBQ0Usd0RBQUQsQ0FBdEM7QUFBQSxNQUFRUyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLEtBQWxCLGdCQUFrQkEsS0FBbEI7O0FBSm1DLFdBTXBCQyxnQkFOb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFdBTW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLGNBQVo7QUFERjtBQUFBLHFCQUVRQyxpQkFBaUIsQ0FBQyxDQUFDRCxjQUFGLENBRnpCOztBQUFBO0FBR0VFLGNBQUFBLGNBQWMsQ0FBQztBQUFFRixnQkFBQUEsY0FBYyxFQUFkQTtBQUFGLGVBQUQsQ0FBZDs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5tQztBQUFBO0FBQUE7O0FBWW5DLHNCQUNFLDhEQUFDLDhDQUFEO0FBQVcsVUFBTSxFQUFFSSxLQUFLLENBQUNKLGNBQXpCO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBWSxhQUFPLEVBQUVLLGdCQUFyQjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLDZDQUFEO0FBQUEsOEJBQ0UsOERBQUMsNERBQUQ7QUFBa0IsWUFBSSxFQUFFLEVBQXhCO0FBQTRCLGFBQUssRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBdkJ1Qk47O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVEcmF3ZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZURyYXdlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9zaWRlRHJhd2VyJ1xyXG5pbXBvcnQgeyBCaUJhckNoYXJ0U3F1YXJlIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXHJcbmltcG9ydCB7IEJhY2tCdXR0b24sIENvbnRhaW5lciwgTWVudUl0ZW0gfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVEcmF3ZXIoKSB7XHJcblxyXG4gIGNvbnN0IFtpc1NpZGVEcmF3ZXJPbiwgc2V0SXNTaWRlRHJhd2VyT25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgeyBzZXRTdGF0ZTogc2V0R2xvYmFsU3RhdGUgfSA9IHVzZUNvbnRleHQoU2lkZURyYXdlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgc2V0U3RhdGUsIHN0YXRlIH0gPSB1c2VDb250ZXh0KFNpZGVEcmF3ZXJDb250ZXh0KTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlU2lkZURyYXdlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKGlzU2lkZURyYXdlck9uKTtcclxuICAgIGF3YWl0IHNldElzU2lkZURyYXdlck9uKCFpc1NpZGVEcmF3ZXJPbik7XHJcbiAgICBzZXRHbG9iYWxTdGF0ZSh7IGlzU2lkZURyYXdlck9uIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgYWN0aXZlPXtzdGF0ZS5pc1NpZGVEcmF3ZXJPbn0+XHJcbiAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZGVEcmF3ZXJ9PlxyXG4gICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2NoZXZyb25fYmFjay5zdmcnIC8+XHJcbiAgICAgIDwvQmFja0J1dHRvbj5cclxuICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgIDxCaUJhckNoYXJ0U3F1YXJlIHNpemU9ezIyfSBjb2xvcj0nIzA3OTRCMicvPlxyXG4gICAgICAgIDxzcGFuPlBhaW5lbCBkZSBDb250cm9sZTwvc3Bhbj5cclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNpZGVEcmF3ZXJDb250ZXh0IiwiQmlCYXJDaGFydFNxdWFyZSIsIkJhY2tCdXR0b24iLCJDb250YWluZXIiLCJNZW51SXRlbSIsIlNpZGVEcmF3ZXIiLCJpc1NpZGVEcmF3ZXJPbiIsInNldElzU2lkZURyYXdlck9uIiwic2V0R2xvYmFsU3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwidG9nZ2xlU2lkZURyYXdlciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9