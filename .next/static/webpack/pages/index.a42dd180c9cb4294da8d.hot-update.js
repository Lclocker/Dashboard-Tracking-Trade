"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useData.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useData.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useData": function() { return /* binding */ useData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



//Apenas para não ser iniciado vazio
var defaultInspections = [{
  id: 0,
  name: "",
  planned: 1,
  inProgress: 1,
  performed: 1,
  lastUpdate: ""
}];
var defaultActionPlan = [{
  id: 0,
  title: "",
  responsible: "",
  status: "",
  date: ""
}];
var defaultInspectionData = {
  performed: 0,
  inProgress: 0,
  notPerformed: 0
};
var defaultActionPlanData = {
  created: 0,
  finalized: 0,
  opened: 0
};
var defaultEventHistory = [{
  id: 0,
  performedInspections: 0,
  createdActionsPlans: 0
}];
function useData() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultInspections),
      inspections = _useState[0],
      setInspections = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultActionPlan),
      actionPlans = _useState2[0],
      setActionPlans = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultInspectionData),
      inspectionData = _useState3[0],
      setInspectionData = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultActionPlanData),
      actionPlanData = _useState4[0],
      setActionPlanData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultEventHistory),
      eventHistory = _useState5[0],
      setEventHistory = _useState5[1];

  var getInspections = function getInspections() {
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/scheduled_inspections").then(function (response) {
      return setInspections(response.data);
    })["catch"](function (err) {
      console.error("An unexpected error has occurred" + err);
    });
  };

  var getActionPlans = function getActionPlans() {
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/actions_plans").then(function (response) {
      return setActionPlans(response.data);
    })["catch"](function (err) {
      console.error("An unexpected error has occurred" + err);
    });
  };

  var getInspectionData = function getInspectionData() {
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/inspectionsData").then(function (response) {
      return setInspectionData(response.data);
    })["catch"](function (err) {
      console.error("An unexpected error has occurred" + err);
    });
  };

  var getActionPlanData = function getActionPlanData() {
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/actionPlansData").then(function (response) {
      return setActionPlanData(response.data);
    })["catch"](function (err) {
      console.error("An unexpected error has occurred" + err);
    });
  };

  var getEventHistory = function getEventHistory() {
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/event_history").then(function (response) {
      return setEventHistory(response.data);
    })["catch"](function (err) {
      console.error("An unexpected error has occurred" + err);
    });
  };

  return {
    inspections: inspections,
    getInspections: getInspections,
    actionPlans: actionPlans,
    getActionPlans: getActionPlans,
    inspectionData: inspectionData,
    getInspectionData: getInspectionData,
    actionPlanData: actionPlanData,
    getActionPlanData: getActionPlanData,
    eventHistory: eventHistory,
    getEventHistory: getEventHistory
  };
}

_s(useData, "2nlBzZGbDzfvgHM4G2tKKev+ZNo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQyZGQxODBjOWNiNDI5NGRhOGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBQ0EsSUFBTUUsa0JBQWdDLEdBQUcsQ0FDdkM7QUFDRUMsRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsRUFBQUEsSUFBSSxFQUFFLEVBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLENBSFg7QUFJRUMsRUFBQUEsVUFBVSxFQUFFLENBSmQ7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLENBTGI7QUFNRUMsRUFBQUEsVUFBVSxFQUFFO0FBTmQsQ0FEdUMsQ0FBekM7QUFvQkEsSUFBTUMsaUJBQStCLEdBQUcsQ0FDdEM7QUFDRU4sRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRU8sRUFBQUEsS0FBSyxFQUFFLEVBRlQ7QUFHRUMsRUFBQUEsV0FBVyxFQUFFLEVBSGY7QUFJRUMsRUFBQUEsTUFBTSxFQUFFLEVBSlY7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBTFIsQ0FEc0MsQ0FBeEM7QUFnQkEsSUFBTUMscUJBQXFDLEdBQ3pDO0FBQ0VQLEVBQUFBLFNBQVMsRUFBRSxDQURiO0FBRUVELEVBQUFBLFVBQVUsRUFBRSxDQUZkO0FBR0VTLEVBQUFBLFlBQVksRUFBRTtBQUhoQixDQURGO0FBY0EsSUFBTUMscUJBQXNDLEdBQzFDO0FBQ0VDLEVBQUFBLE9BQU8sRUFBRSxDQURYO0FBRUVDLEVBQUFBLFNBQVMsRUFBRyxDQUZkO0FBR0VDLEVBQUFBLE1BQU0sRUFBRTtBQUhWLENBREY7QUFjQSxJQUFNQyxtQkFBbUMsR0FBRyxDQUMxQztBQUNFakIsRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRWtCLEVBQUFBLG9CQUFvQixFQUFFLENBRnhCO0FBR0VDLEVBQUFBLG1CQUFtQixFQUFFO0FBSHZCLENBRDBDLENBQTVDO0FBUU8sU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUV4QixrQkFB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SUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFSSztBQVNMWixJQUFBQSxZQUFZLEVBQVpBLFlBVEs7QUFVTGEsSUFBQUEsZUFBZSxFQUFmQTtBQVZLLEdBQVA7QUFZRDs7R0FwRWV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlRGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgSW5zcGVjdGlvbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhbm5lZDogbnVtYmVyO1xyXG4gIGluUHJvZ3Jlc3M6IG51bWJlcjtcclxuICBwZXJmb3JtZWQ6IG51bWJlcjtcclxuICBsYXN0VXBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vQXBlbmFzIHBhcmEgbsOjbyBzZXIgaW5pY2lhZG8gdmF6aW9cclxuY29uc3QgZGVmYXVsdEluc3BlY3Rpb25zOiBJbnNwZWN0aW9uW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGxhbm5lZDogMSxcclxuICAgIGluUHJvZ3Jlc3M6IDEsXHJcbiAgICBwZXJmb3JtZWQ6IDEsXHJcbiAgICBsYXN0VXBkYXRlOiBcIlwiXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uUGxhbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHJlc3BvbnNpYmxlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0QWN0aW9uUGxhbjogQWN0aW9uUGxhbltdID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICByZXNwb25zaWJsZTogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmludGVyZmFjZSBJbnNwZWN0aW9uRGF0YSB7XHJcbiAgcGVyZm9ybWVkOiBudW1iZXI7XHJcbiAgaW5Qcm9ncmVzczogbnVtYmVyO1xyXG4gIG5vdFBlcmZvcm1lZDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0SW5zcGVjdGlvbkRhdGE6IEluc3BlY3Rpb25EYXRhID0gXHJcbiAge1xyXG4gICAgcGVyZm9ybWVkOiAwLFxyXG4gICAgaW5Qcm9ncmVzczogMCxcclxuICAgIG5vdFBlcmZvcm1lZDogMCxcclxuICB9XHJcbjtcclxuXHJcbmludGVyZmFjZSBBY3Rpb25QbGFuc0RhdGEge1xyXG4gIGNyZWF0ZWQ6IG51bWJlcixcclxuICBmaW5hbGl6ZWQ6ICBudW1iZXIsXHJcbiAgb3BlbmVkOiBudW1iZXIsXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25QbGFuRGF0YTogQWN0aW9uUGxhbnNEYXRhID0gXHJcbiAge1xyXG4gICAgY3JlYXRlZDogMCxcclxuICAgIGZpbmFsaXplZDogIDAsXHJcbiAgICBvcGVuZWQ6IDAsXHJcbiAgfVxyXG47XHJcblxyXG5pbnRlcmZhY2UgRXZlbnRIaXN0b3J5IHtcclxuICBpZDogbnVtYmVyLFxyXG4gIHBlcmZvcm1lZEluc3BlY3Rpb25zOiBudW1iZXIsXHJcbiAgY3JlYXRlZEFjdGlvbnNQbGFuczogbnVtYmVyLFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0RXZlbnRIaXN0b3J5OiBFdmVudEhpc3RvcnlbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHBlcmZvcm1lZEluc3BlY3Rpb25zOiAwLFxyXG4gICAgY3JlYXRlZEFjdGlvbnNQbGFuczogMCxcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEYXRhKCkge1xyXG5cclxuICBjb25zdCBbaW5zcGVjdGlvbnMsIHNldEluc3BlY3Rpb25zXSA9IHVzZVN0YXRlPEluc3BlY3Rpb25bXT4oZGVmYXVsdEluc3BlY3Rpb25zKTtcclxuICBjb25zdCBbYWN0aW9uUGxhbnMsIHNldEFjdGlvblBsYW5zXSA9IHVzZVN0YXRlPEFjdGlvblBsYW5bXT4oZGVmYXVsdEFjdGlvblBsYW4pO1xyXG4gIGNvbnN0IFtpbnNwZWN0aW9uRGF0YSwgc2V0SW5zcGVjdGlvbkRhdGFdID0gdXNlU3RhdGU8SW5zcGVjdGlvbkRhdGE+KGRlZmF1bHRJbnNwZWN0aW9uRGF0YSk7XHJcbiAgY29uc3QgW2FjdGlvblBsYW5EYXRhLCBzZXRBY3Rpb25QbGFuRGF0YV0gPSB1c2VTdGF0ZTxBY3Rpb25QbGFuc0RhdGE+KGRlZmF1bHRBY3Rpb25QbGFuRGF0YSk7XHJcbiAgY29uc3QgW2V2ZW50SGlzdG9yeSwgc2V0RXZlbnRIaXN0b3J5XSA9IHVzZVN0YXRlPEV2ZW50SGlzdG9yeVtdPihkZWZhdWx0RXZlbnRIaXN0b3J5KTtcclxuXHJcbiAgY29uc3QgZ2V0SW5zcGVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBhcGlcclxuICAgICAgLmdldChcIi9zY2hlZHVsZWRfaW5zcGVjdGlvbnNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRJbnNwZWN0aW9ucyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWRcIiArIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWN0aW9uUGxhbnMgPSAoKSA9PiB7XHJcbiAgICBhcGlcclxuICAgICAgLmdldChcIi9hY3Rpb25zX3BsYW5zXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0QWN0aW9uUGxhbnMocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEluc3BlY3Rpb25EYXRhID0gKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXQoXCIvaW5zcGVjdGlvbnNEYXRhXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0SW5zcGVjdGlvbkRhdGEocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFjdGlvblBsYW5EYXRhID0gKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXQoXCIvYWN0aW9uUGxhbnNEYXRhXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0QWN0aW9uUGxhbkRhdGEocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV2ZW50SGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0KFwiL2V2ZW50X2hpc3RvcnlcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRFdmVudEhpc3RvcnkocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluc3BlY3Rpb25zLFxyXG4gICAgZ2V0SW5zcGVjdGlvbnMsXHJcbiAgICBhY3Rpb25QbGFucyxcclxuICAgIGdldEFjdGlvblBsYW5zLFxyXG4gICAgaW5zcGVjdGlvbkRhdGEsXHJcbiAgICBnZXRJbnNwZWN0aW9uRGF0YSxcclxuICAgIGFjdGlvblBsYW5EYXRhLFxyXG4gICAgZ2V0QWN0aW9uUGxhbkRhdGEsXHJcbiAgICBldmVudEhpc3RvcnksXHJcbiAgICBnZXRFdmVudEhpc3RvcnksXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXBpIiwiZGVmYXVsdEluc3BlY3Rpb25zIiwiaWQiLCJuYW1lIiwicGxhbm5lZCIsImluUHJvZ3Jlc3MiLCJwZXJmb3JtZWQiLCJsYXN0VXBkYXRlIiwiZGVmYXVsdEFjdGlvblBsYW4iLCJ0aXRsZSIsInJlc3BvbnNpYmxlIiwic3RhdHVzIiwiZGF0ZSIsImRlZmF1bHRJbnNwZWN0aW9uRGF0YSIsIm5vdFBlcmZvcm1lZCIsImRlZmF1bHRBY3Rpb25QbGFuRGF0YSIsImNyZWF0ZWQiLCJmaW5hbGl6ZWQiLCJvcGVuZWQiLCJkZWZhdWx0RXZlbnRIaXN0b3J5IiwicGVyZm9ybWVkSW5zcGVjdGlvbnMiLCJjcmVhdGVkQWN0aW9uc1BsYW5zIiwidXNlRGF0YSIsImluc3BlY3Rpb25zIiwic2V0SW5zcGVjdGlvbnMiLCJhY3Rpb25QbGFucyIsInNldEFjdGlvblBsYW5zIiwiaW5zcGVjdGlvbkRhdGEiLCJzZXRJbnNwZWN0aW9uRGF0YSIsImFjdGlvblBsYW5EYXRhIiwic2V0QWN0aW9uUGxhbkRhdGEiLCJldmVudEhpc3RvcnkiLCJzZXRFdmVudEhpc3RvcnkiLCJnZXRJbnNwZWN0aW9ucyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRBY3Rpb25QbGFucyIsImdldEluc3BlY3Rpb25EYXRhIiwiZ2V0QWN0aW9uUGxhbkRhdGEiLCJnZXRFdmVudEhpc3RvcnkiXSwic291cmNlUm9vdCI6IiJ9