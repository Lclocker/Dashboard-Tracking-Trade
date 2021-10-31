"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sidebar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Sidebar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_sideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/sideDrawer */ "./src/context/sideDrawer/index.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Sidebar/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\Sidebar\\index.tsx",
    _s = $RefreshSig$();







function Sidebar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isSideDrawerOn = _useState[0],
      setIsSideDrawerOn = _useState[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_sideDrawer__WEBPACK_IMPORTED_MODULE_3__.default),
      setGlobalState = _useContext.setState;

  function toggleSideDrawer() {
    return _toggleSideDrawer.apply(this, arguments);
  }

  function _toggleSideDrawer() {
    _toggleSideDrawer = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setIsSideDrawerOn(!isSideDrawerOn);

            case 2:
              setGlobalState({
                isSideDrawerOn: isSideDrawerOn
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _toggleSideDrawer.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.SideBarButton, {
      onClick: toggleSideDrawer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBars, {
        size: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "/cH2LO+oZRg7IpeuL+OafF+n6bw=");

_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM1ZTU1NmZjNWQ1NzM5ZDM3NjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTTyxPQUFULEdBQW1CO0FBQUE7O0FBRWhDLGtCQUE0Q0wsK0NBQVEsQ0FBQyxJQUFELENBQXBEO0FBQUEsTUFBT00sY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0Esb0JBQXFDUixpREFBVSxDQUFDRSx3REFBRCxDQUEvQztBQUFBLE1BQWtCTyxjQUFsQixlQUFRQyxRQUFSOztBQUhnQyxXQUtqQkMsZ0JBTGlCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRXQUtoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUgsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBRixDQUR6Qjs7QUFBQTtBQUVFRSxjQUFBQSxjQUFjLENBQUM7QUFBRUYsZ0JBQUFBLGNBQWMsRUFBZEE7QUFBRixlQUFELENBQWQ7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMZ0M7QUFBQTtBQUFBOztBQVVoQyxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQWUsYUFBTyxFQUFFSSxnQkFBeEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFRLFlBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBakJ1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVEcmF3ZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvc2lkZURyYXdlcic7XHJcbmltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBTaWRlQmFyQnV0dG9uIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcblxyXG4gIGNvbnN0IFtpc1NpZGVEcmF3ZXJPbiwgc2V0SXNTaWRlRHJhd2VyT25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgeyBzZXRTdGF0ZTogc2V0R2xvYmFsU3RhdGUgfSA9IHVzZUNvbnRleHQoU2lkZURyYXdlckNvbnRleHQpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB0b2dnbGVTaWRlRHJhd2VyKCkge1xyXG4gICAgYXdhaXQgc2V0SXNTaWRlRHJhd2VyT24oIWlzU2lkZURyYXdlck9uKTtcclxuICAgIHNldEdsb2JhbFN0YXRlKHsgaXNTaWRlRHJhd2VyT24gfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8U2lkZUJhckJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWRlRHJhd2VyfT5cclxuICAgICAgICA8RmFCYXJzIHNpemU9ezIwfS8+XHJcbiAgICAgIDwvU2lkZUJhckJ1dHRvbj4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJTaWRlRHJhd2VyQ29udGV4dCIsIkZhQmFycyIsIkNvbnRhaW5lciIsIlNpZGVCYXJCdXR0b24iLCJTaWRlYmFyIiwiaXNTaWRlRHJhd2VyT24iLCJzZXRJc1NpZGVEcmF3ZXJPbiIsInNldEdsb2JhbFN0YXRlIiwic2V0U3RhdGUiLCJ0b2dnbGVTaWRlRHJhd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==