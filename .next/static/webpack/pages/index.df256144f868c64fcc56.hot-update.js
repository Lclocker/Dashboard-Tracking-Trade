"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DropDown/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/DropDown/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DropDown; }
/* harmony export */ });
/* harmony import */ var D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DropDown/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _excluded = ["isDropDownOn", "dropWidth", "dropValues"];

var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\DropDown\\index.tsx",
    _s = $RefreshSig$();





function DropDown(_ref) {
  _s();

  var _this = this;

  var _ref$isDropDownOn = _ref.isDropDownOn,
      isDropDownOn = _ref$isDropDownOn === void 0 ? false : _ref$isDropDownOn,
      _ref$dropWidth = _ref.dropWidth,
      dropWidth = _ref$dropWidth === void 0 ? "" : _ref$dropWidth,
      _ref$dropValues = _ref.dropValues,
      dropValues = _ref$dropValues === void 0 ? [{
    val: ""
  }] : _ref$dropValues,
      props = (0,D_Me_projetos_REACTJS_NLW_Control_Panel_trackingtrader_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  var click = function click() {
    return setIsActive(!isActive);
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dropValues[0].val),
      dropName = _useState2[0],
      setDropName = _useState2[1];

  function changeDropName(name) {
    setDropName(name);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    dropOn: isDropDownOn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      active: isActive,
      width: dropWidth,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DropButton, {
        onClick: click,
        width: dropWidth,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: dropName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronDown, {
          size: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        children: dropValues.map(function (value) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            onClick: function onClick() {
              return changeDropName(value.val);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              children: value.val
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, value.val, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(DropDown, "tS3Ggra3TXqjqPNP20fFGAxmANk=");

_c = DropDown;

var _c;

$RefreshReg$(_c, "DropDown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYyNTYxNDRmODY4YzY0ZmNjNTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV2UsU0FBU00sUUFBVCxPQUErRztBQUFBOztBQUFBOztBQUFBLCtCQUEzRkMsWUFBMkY7QUFBQSxNQUEzRkEsWUFBMkYsa0NBQTVFLEtBQTRFO0FBQUEsNEJBQXJFQyxTQUFxRTtBQUFBLE1BQXJFQSxTQUFxRSwrQkFBekQsRUFBeUQ7QUFBQSw2QkFBckRDLFVBQXFEO0FBQUEsTUFBckRBLFVBQXFELGdDQUF4QyxDQUFDO0FBQUNDLElBQUFBLEdBQUcsRUFBRTtBQUFOLEdBQUQsQ0FBd0M7QUFBQSxNQUF2QkMsS0FBdUI7O0FBRTVILGtCQUFnQ1YsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQUEsTUFBT1csUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFdBQU1ELFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsR0FBZDs7QUFFQSxtQkFBZ0NYLCtDQUFRLENBQUNRLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0MsR0FBZixDQUF4QztBQUFBLE1BQU9LLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsV0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBc0M7QUFDcENGLElBQUFBLFdBQVcsQ0FBQ0UsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsOENBQUQ7QUFBVyxVQUFNLEVBQUVYLFlBQW5CO0FBQUEsMkJBQ0UsOERBQUMseUNBQUQ7QUFBTSxZQUFNLEVBQUVLLFFBQWQ7QUFBd0IsV0FBSyxFQUFFSixTQUEvQjtBQUFBLDhCQUNFLDhEQUFDLCtDQUFEO0FBQVksZUFBTyxFQUFFTSxLQUFyQjtBQUE0QixhQUFLLEVBQUVOLFNBQW5DO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBT087QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBZSxjQUFJLEVBQUU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUEsa0JBQ0dOLFVBQVUsQ0FBQ1UsR0FBWCxDQUFlLFVBQUNDLEtBQUQ7QUFBQSw4QkFDZDtBQUFvQixtQkFBTyxFQUFFO0FBQUEscUJBQU1ILGNBQWMsQ0FBQ0csS0FBSyxDQUFDVixHQUFQLENBQXBCO0FBQUEsYUFBN0I7QUFBQSxtQ0FDRTtBQUFBLHdCQUFJVSxLQUFLLENBQUNWO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVNVLEtBQUssQ0FBQ1YsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBNUJ1Qko7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Ryb3BEb3duL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlDaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERyb3BCdXR0b24sIE1lbnUgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcblxyXG50eXBlIERyb3BEb3duUHJvcHMgPSB7XHJcbiAgaXNEcm9wRG93bk9uOiBib29sZWFuO1xyXG4gIGRyb3BXaWR0aDogc3RyaW5nO1xyXG4gIGRyb3BWYWx1ZXM6IHtcclxuICAgIHZhbDogc3RyaW5nLFxyXG4gIH1bXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3BEb3duKHsgaXNEcm9wRG93bk9uID0gZmFsc2UsIGRyb3BXaWR0aCA9IFwiXCIsIGRyb3BWYWx1ZXMgPSBbe3ZhbDogXCJcIn1dLCAgLi4ucHJvcHN9OiBEcm9wRG93blByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsaWNrID0gKCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKTtcclxuXHJcbiAgY29uc3QgW2Ryb3BOYW1lLCBzZXREcm9wTmFtZV0gPSB1c2VTdGF0ZShkcm9wVmFsdWVzWzBdLnZhbCk7XHJcbiAgZnVuY3Rpb24gY2hhbmdlRHJvcE5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzZXREcm9wTmFtZShuYW1lKTtcclxuICB9IFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGRyb3BPbj17aXNEcm9wRG93bk9ufT5cclxuICAgICAgPE1lbnUgYWN0aXZlPXtpc0FjdGl2ZX0gd2lkdGg9e2Ryb3BXaWR0aH0+XHJcbiAgICAgICAgPERyb3BCdXR0b24gb25DbGljaz17Y2xpY2t9IHdpZHRoPXtkcm9wV2lkdGh9PlxyXG4gICAgICAgICAgPHNwYW4+e2Ryb3BOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxGaUNoZXZyb25Eb3duIHNpemU9ezIwfS8+XHJcbiAgICAgICAgPC9Ecm9wQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7ZHJvcFZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3ZhbHVlLnZhbH0gb25DbGljaz17KCkgPT4gY2hhbmdlRHJvcE5hbWUodmFsdWUudmFsKX0+XHJcbiAgICAgICAgICAgICAgPGE+e3ZhbHVlLnZhbH08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmlDaGV2cm9uRG93biIsIkNvbnRhaW5lciIsIkRyb3BCdXR0b24iLCJNZW51IiwiRHJvcERvd24iLCJpc0Ryb3BEb3duT24iLCJkcm9wV2lkdGgiLCJkcm9wVmFsdWVzIiwidmFsIiwicHJvcHMiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiY2xpY2siLCJkcm9wTmFtZSIsInNldERyb3BOYW1lIiwiY2hhbmdlRHJvcE5hbWUiLCJuYW1lIiwibWFwIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9