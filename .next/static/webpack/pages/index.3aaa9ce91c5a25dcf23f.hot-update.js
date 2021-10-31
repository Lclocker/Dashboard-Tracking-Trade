"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/InspectionCard/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/InspectionCard/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionCard": function() { return /* binding */ InspectionCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardHeader */ "./src/components/CardHeader/index.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table */ "./src/components/Table/index.tsx");
/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useData */ "./src/hooks/useData.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/InspectionCard/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\components\\InspectionCard\\index.tsx",
    _s = $RefreshSig$();







var head = {
  id: 'ID',
  name: 'NOME',
  planned: 'PLANEJADO',
  inProgress: 'EM PROGRESSO',
  performed: 'REALIZADO',
  lastUpdate: 'ÚLTIMA ATUALIZAÇÃO'
};
function InspectionCard() {
  _s();

  var _useData = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_3__.useData)(),
      inspections = _useData.inspections,
      getInspections = _useData.getInspections;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      search = _useState[0],
      setSearch = _useState[1];

  var lowerSearch = search.toLowerCase();
  var inspecFilter = inspections.filter(function (user) {
    return user.name.toLowerCase().includes(lowerSearch);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getInspections();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CardHeader__WEBPACK_IMPORTED_MODULE_1__.default, {
      isDropDownOn: true,
      title: "Inspe\xE7\xF5es agendadas",
      subtitle: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.SearchBarContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {
        type: "text",
        value: search,
        onChange: function onChange(event) {
          return setSearch(event.target.value);
        },
        placeholder: "Pesquise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.SearchResult, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_2__.Table, {
        data: inspecFilter,
        head: head
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(InspectionCard, "MWRZ7xpHmd+80d83HmZGN+IMOBA=", false, function () {
  return [_hooks_useData__WEBPACK_IMPORTED_MODULE_3__.useData];
});

_c = InspectionCard;

var _c;

$RefreshReg$(_c, "InspectionCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FhYTljZTkxYzVhMjVkY2YyM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNVSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsRUFBRSxFQUFFLElBRE87QUFFWEMsRUFBQUEsSUFBSSxFQUFFLE1BRks7QUFHWEMsRUFBQUEsT0FBTyxFQUFFLFdBSEU7QUFJWEMsRUFBQUEsVUFBVSxFQUFFLGNBSkQ7QUFLWEMsRUFBQUEsU0FBUyxFQUFFLFdBTEE7QUFNWEMsRUFBQUEsVUFBVSxFQUFFO0FBTkQsQ0FBYjtBQVNPLFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFFL0IsaUJBQXdDWix1REFBTyxFQUEvQztBQUFBLE1BQVFhLFdBQVIsWUFBUUEsV0FBUjtBQUFBLE1BQXFCQyxjQUFyQixZQUFxQkEsY0FBckI7O0FBRUEsa0JBQTJCbEIsK0NBQVEsQ0FBQyxFQUFELENBQW5DO0FBQUEsTUFBTW1CLE1BQU47QUFBQSxNQUFjQyxTQUFkOztBQUNBLE1BQU1DLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEVBQXBCO0FBRUEsTUFBTUMsWUFBWSxHQUFHTixXQUFXLENBQUNPLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ2QsSUFBTCxDQUFVVyxXQUFWLEdBQXdCSSxRQUF4QixDQUFpQ0wsV0FBakMsQ0FBVjtBQUFBLEdBQW5CLENBQXJCO0FBRUFwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGlCLElBQUFBLGNBQWM7QUFDZixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFZLGtCQUFZLEVBQUUsSUFBMUI7QUFBZ0MsV0FBSyxFQUFDLDJCQUF0QztBQUE0RCxjQUFRLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsdURBQUQ7QUFBQSw2QkFDRSw4REFBQyw4Q0FBRDtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFFQyxNQUZUO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ1EsS0FBRDtBQUFBLGlCQUFXUCxTQUFTLENBQUNPLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQXBCO0FBQUEsU0FIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBVUUsOERBQUMsaURBQUQ7QUFBQSw2QkFDRSw4REFBQyx5Q0FBRDtBQUFPLFlBQUksRUFBRU4sWUFBYjtBQUEyQixZQUFJLEVBQUVkO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBN0JlTztVQUUwQlo7OztLQUYxQlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5zcGVjdGlvbkNhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCIuLi9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlRGF0YVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFNlYXJjaEJhciwgU2VhcmNoQmFyQ29udGFpbmVyLCBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcblxyXG5jb25zdCBoZWFkID0ge1xyXG4gIGlkOiAnSUQnLFxyXG4gIG5hbWU6ICdOT01FJyxcclxuICBwbGFubmVkOiAnUExBTkVKQURPJyxcclxuICBpblByb2dyZXNzOiAnRU0gUFJPR1JFU1NPJyxcclxuICBwZXJmb3JtZWQ6ICdSRUFMSVpBRE8nLFxyXG4gIGxhc3RVcGRhdGU6ICfDmkxUSU1BIEFUVUFMSVpBw4fDg08nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnNwZWN0aW9uQ2FyZCgpIHtcclxuICBcclxuICBjb25zdCB7IGluc3BlY3Rpb25zLCBnZXRJbnNwZWN0aW9ucyB9ID0gdXNlRGF0YSgpO1xyXG5cclxuICBjb25zdFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgY29uc3QgaW5zcGVjRmlsdGVyID0gaW5zcGVjdGlvbnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRJbnNwZWN0aW9ucygpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhcmRIZWFkZXIgaXNEcm9wRG93bk9uPXt0cnVlfSB0aXRsZT1cIkluc3Blw6fDtWVzIGFnZW5kYWRhc1wiIHN1YnRpdGxlPVwiXCI+PC9DYXJkSGVhZGVyPlxyXG4gICAgICA8U2VhcmNoQmFyQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TZWFyY2hCYXJDb250YWluZXI+XHJcbiAgICAgIDxTZWFyY2hSZXN1bHQ+XHJcbiAgICAgICAgPFRhYmxlIGRhdGE9e2luc3BlY0ZpbHRlcn0gaGVhZD17aGVhZH0+PC9UYWJsZT5cclxuICAgICAgPC9TZWFyY2hSZXN1bHQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmRIZWFkZXIiLCJUYWJsZSIsInVzZURhdGEiLCJDb250YWluZXIiLCJTZWFyY2hCYXIiLCJTZWFyY2hCYXJDb250YWluZXIiLCJTZWFyY2hSZXN1bHQiLCJoZWFkIiwiaWQiLCJuYW1lIiwicGxhbm5lZCIsImluUHJvZ3Jlc3MiLCJwZXJmb3JtZWQiLCJsYXN0VXBkYXRlIiwiSW5zcGVjdGlvbkNhcmQiLCJpbnNwZWN0aW9ucyIsImdldEluc3BlY3Rpb25zIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibG93ZXJTZWFyY2giLCJ0b0xvd2VyQ2FzZSIsImluc3BlY0ZpbHRlciIsImZpbHRlciIsInVzZXIiLCJpbmNsdWRlcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9