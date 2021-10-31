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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjlhM2ZmZmQ2YmVkZDAwNWY5NWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBLElBQU1FLGtCQUFnQyxHQUFHLENBQ3ZDO0FBQ0VDLEVBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLEVBQUFBLElBQUksRUFBRSxFQUZSO0FBR0VDLEVBQUFBLE9BQU8sRUFBRSxDQUhYO0FBSUVDLEVBQUFBLFVBQVUsRUFBRSxDQUpkO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxDQUxiO0FBTUVDLEVBQUFBLFVBQVUsRUFBRTtBQU5kLENBRHVDLENBQXpDO0FBb0JBLElBQU1DLGlCQUErQixHQUFHLENBQ3RDO0FBQ0VOLEVBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVPLEVBQUFBLEtBQUssRUFBRSxFQUZUO0FBR0VDLEVBQUFBLFdBQVcsRUFBRSxFQUhmO0FBSUVDLEVBQUFBLE1BQU0sRUFBRSxFQUpWO0FBS0VDLEVBQUFBLElBQUksRUFBRTtBQUxSLENBRHNDLENBQXhDO0FBaUJBLElBQU1DLHFCQUFxQyxHQUN6QztBQUNFUCxFQUFBQSxTQUFTLEVBQUUsQ0FEYjtBQUVFRCxFQUFBQSxVQUFVLEVBQUUsQ0FGZDtBQUdFUyxFQUFBQSxZQUFZLEVBQUU7QUFIaEIsQ0FERjtBQWVBLElBQU1DLHFCQUFzQyxHQUMxQztBQUNFQyxFQUFBQSxPQUFPLEVBQUUsQ0FEWDtBQUVFQyxFQUFBQSxTQUFTLEVBQUcsQ0FGZDtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURGO0FBZUEsSUFBTUMsbUJBQW1DLEdBQUcsQ0FDMUM7QUFDRWpCLEVBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVrQixFQUFBQSxvQkFBb0IsRUFBRSxDQUZ4QjtBQUdFQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUh2QixDQUQwQyxDQUE1QztBQVNPLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFFeEIsa0JBQXNDdkIs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LGlCQUFpQixFQUFqQkEsaUJBUks7QUFTTFosSUFBQUEsWUFBWSxFQUFaQSxZQVRLO0FBVUxhLElBQUFBLGVBQWUsRUFBZkE7QUFWSyxHQUFQO0FBWUQ7O0dBbEVldEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZURhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJbnNwZWN0aW9uIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFubmVkOiBudW1iZXI7XHJcbiAgaW5Qcm9ncmVzczogbnVtYmVyO1xyXG4gIHBlcmZvcm1lZDogbnVtYmVyO1xyXG4gIGxhc3RVcGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEluc3BlY3Rpb25zOiBJbnNwZWN0aW9uW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGxhbm5lZDogMSxcclxuICAgIGluUHJvZ3Jlc3M6IDEsXHJcbiAgICBwZXJmb3JtZWQ6IDEsXHJcbiAgICBsYXN0VXBkYXRlOiBcIlwiXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uUGxhbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHJlc3BvbnNpYmxlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0QWN0aW9uUGxhbjogQWN0aW9uUGxhbltdID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICByZXNwb25zaWJsZTogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5pbnRlcmZhY2UgSW5zcGVjdGlvbkRhdGEge1xyXG4gIHBlcmZvcm1lZDogbnVtYmVyO1xyXG4gIGluUHJvZ3Jlc3M6IG51bWJlcjtcclxuICBub3RQZXJmb3JtZWQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEluc3BlY3Rpb25EYXRhOiBJbnNwZWN0aW9uRGF0YSA9IFxyXG4gIHtcclxuICAgIHBlcmZvcm1lZDogMCxcclxuICAgIGluUHJvZ3Jlc3M6IDAsXHJcbiAgICBub3RQZXJmb3JtZWQ6IDAsXHJcbiAgfVxyXG47XHJcblxyXG5cclxuaW50ZXJmYWNlIEFjdGlvblBsYW5zRGF0YSB7XHJcbiAgY3JlYXRlZDogbnVtYmVyLFxyXG4gIGZpbmFsaXplZDogIG51bWJlcixcclxuICBvcGVuZWQ6IG51bWJlcixcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEFjdGlvblBsYW5EYXRhOiBBY3Rpb25QbGFuc0RhdGEgPSBcclxuICB7XHJcbiAgICBjcmVhdGVkOiAwLFxyXG4gICAgZmluYWxpemVkOiAgMCxcclxuICAgIG9wZW5lZDogMCxcclxuICB9XHJcbjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRXZlbnRIaXN0b3J5IHtcclxuICBpZDogbnVtYmVyLFxyXG4gIHBlcmZvcm1lZEluc3BlY3Rpb25zOiBudW1iZXIsXHJcbiAgY3JlYXRlZEFjdGlvbnNQbGFuczogbnVtYmVyLFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0RXZlbnRIaXN0b3J5OiBFdmVudEhpc3RvcnlbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHBlcmZvcm1lZEluc3BlY3Rpb25zOiAwLFxyXG4gICAgY3JlYXRlZEFjdGlvbnNQbGFuczogMCxcclxuICB9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGF0YSgpIHtcclxuXHJcbiAgY29uc3QgW2luc3BlY3Rpb25zLCBzZXRJbnNwZWN0aW9uc10gPSB1c2VTdGF0ZTxJbnNwZWN0aW9uW10+KGRlZmF1bHRJbnNwZWN0aW9ucyk7XHJcbiAgY29uc3QgW2FjdGlvblBsYW5zLCBzZXRBY3Rpb25QbGFuc10gPSB1c2VTdGF0ZTxBY3Rpb25QbGFuW10+KGRlZmF1bHRBY3Rpb25QbGFuKTtcclxuICBjb25zdCBbaW5zcGVjdGlvbkRhdGEsIHNldEluc3BlY3Rpb25EYXRhXSA9IHVzZVN0YXRlPEluc3BlY3Rpb25EYXRhPihkZWZhdWx0SW5zcGVjdGlvbkRhdGEpO1xyXG4gIGNvbnN0IFthY3Rpb25QbGFuRGF0YSwgc2V0QWN0aW9uUGxhbkRhdGFdID0gdXNlU3RhdGU8QWN0aW9uUGxhbnNEYXRhPihkZWZhdWx0QWN0aW9uUGxhbkRhdGEpO1xyXG4gIGNvbnN0IFtldmVudEhpc3RvcnksIHNldEV2ZW50SGlzdG9yeV0gPSB1c2VTdGF0ZTxFdmVudEhpc3RvcnlbXT4oZGVmYXVsdEV2ZW50SGlzdG9yeSk7XHJcblxyXG4gIGNvbnN0IGdldEluc3BlY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXQoXCIvc2NoZWR1bGVkX2luc3BlY3Rpb25zXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0SW5zcGVjdGlvbnMocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIgKyBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFjdGlvblBsYW5zID0gKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXQoXCIvYWN0aW9uc19wbGFuc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldEFjdGlvblBsYW5zKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiICsgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRJbnNwZWN0aW9uRGF0YSA9ICgpID0+IHtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0KFwiL2luc3BlY3Rpb25zRGF0YVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldEluc3BlY3Rpb25EYXRhKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiICsgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBY3Rpb25QbGFuRGF0YSA9ICgpID0+IHtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0KFwiL2FjdGlvblBsYW5zRGF0YVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldEFjdGlvblBsYW5EYXRhKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiICsgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRFdmVudEhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICBhcGlcclxuICAgICAgLmdldChcIi9ldmVudF9oaXN0b3J5XCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0RXZlbnRIaXN0b3J5KHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiICsgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgaW5zcGVjdGlvbnMsXHJcbiAgICBnZXRJbnNwZWN0aW9ucyxcclxuICAgIGFjdGlvblBsYW5zLFxyXG4gICAgZ2V0QWN0aW9uUGxhbnMsXHJcbiAgICBpbnNwZWN0aW9uRGF0YSxcclxuICAgIGdldEluc3BlY3Rpb25EYXRhLFxyXG4gICAgYWN0aW9uUGxhbkRhdGEsXHJcbiAgICBnZXRBY3Rpb25QbGFuRGF0YSxcclxuICAgIGV2ZW50SGlzdG9yeSxcclxuICAgIGdldEV2ZW50SGlzdG9yeSxcclxuICB9XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcGkiLCJkZWZhdWx0SW5zcGVjdGlvbnMiLCJpZCIsIm5hbWUiLCJwbGFubmVkIiwiaW5Qcm9ncmVzcyIsInBlcmZvcm1lZCIsImxhc3RVcGRhdGUiLCJkZWZhdWx0QWN0aW9uUGxhbiIsInRpdGxlIiwicmVzcG9uc2libGUiLCJzdGF0dXMiLCJkYXRlIiwiZGVmYXVsdEluc3BlY3Rpb25EYXRhIiwibm90UGVyZm9ybWVkIiwiZGVmYXVsdEFjdGlvblBsYW5EYXRhIiwiY3JlYXRlZCIsImZpbmFsaXplZCIsIm9wZW5lZCIsImRlZmF1bHRFdmVudEhpc3RvcnkiLCJwZXJmb3JtZWRJbnNwZWN0aW9ucyIsImNyZWF0ZWRBY3Rpb25zUGxhbnMiLCJ1c2VEYXRhIiwiaW5zcGVjdGlvbnMiLCJzZXRJbnNwZWN0aW9ucyIsImFjdGlvblBsYW5zIiwic2V0QWN0aW9uUGxhbnMiLCJpbnNwZWN0aW9uRGF0YSIsInNldEluc3BlY3Rpb25EYXRhIiwiYWN0aW9uUGxhbkRhdGEiLCJzZXRBY3Rpb25QbGFuRGF0YSIsImV2ZW50SGlzdG9yeSIsInNldEV2ZW50SGlzdG9yeSIsImdldEluc3BlY3Rpb25zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImdldEFjdGlvblBsYW5zIiwiZ2V0SW5zcGVjdGlvbkRhdGEiLCJnZXRBY3Rpb25QbGFuRGF0YSIsImdldEV2ZW50SGlzdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=