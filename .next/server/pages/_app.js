"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/index.tsx":
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sideDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideDrawer */ "./src/context/sideDrawer/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\context\\index.tsx";




const GlobalContext = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_sideDrawer__WEBPACK_IMPORTED_MODULE_1__.SideDrawerContextProvider, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalContext);

/***/ }),

/***/ "./src/context/sideDrawer/index.tsx":
/*!******************************************!*\
  !*** ./src/context/sideDrawer/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideDrawerContextProvider": () => (/* binding */ SideDrawerContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\context\\sideDrawer\\index.tsx";
 //Tipando os dados que quero para o sideDrawer


//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    isSideDrawerOn: false
  },
  setState: () => {} //função de inicialização

}; //Criando nosso contexto SideDrawerContext

const SideDrawerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_VALUE); // Função que ira conter o estado e função que irá alterar o estado 'setState'
// que irá prover o contexto para os componentes filhos da árvore

const SideDrawerContextProvider = ({
  children
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_VALUE.state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SideDrawerContext.Provider, {
    value: {
      state,
      setState
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDrawerContext);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ "./src/styles/global.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./src/context/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Me\\projetos\\REACTJS NLW\\Control Panel\\trackingtrader\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Regular.ttf') format('truetype');
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Poppins;
  }
`);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = {
  colors: {
    background: '#FAFAFA',
    text: '#333333',
    primary: '#0794B3',
    border: '#EBEBEB'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBLE1BQU1FLGFBQXVCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDaEQsc0JBQU8sOERBQUMsa0VBQUQ7QUFBQSxjQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQSxpRUFBZUQsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NOQTs7O0FBV0E7QUFDQSxNQUFNSSxhQUFhLEdBQUc7QUFDcEJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxjQUFjLEVBQUU7QUFEWCxHQURhO0FBSXBCQyxFQUFBQSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBSkUsQ0FJQTs7QUFKQSxDQUF0QixFQU9BOztBQUNBLE1BQU1DLGlCQUFpQixnQkFBR04sb0RBQWEsQ0FBeUJFLGFBQXpCLENBQXZDLEVBRUE7QUFDQTs7QUFFQSxNQUFNTCx5QkFBbUMsR0FBRyxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUM1RCxRQUFNO0FBQUEsT0FBQ0ksS0FBRDtBQUFBLE9BQVFFO0FBQVIsTUFBb0JKLCtDQUFRLENBQUNDLGFBQWEsQ0FBQ0MsS0FBZixDQUFsQztBQUNBLHNCQUNFLDhEQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0xBLE1BQUFBLEtBREs7QUFFTEUsTUFBQUE7QUFGSyxLQURUO0FBQUEsY0FNSU47QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQVpEOztBQWNBO0FBQ0EsaUVBQWVPLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1JLEtBQXlCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBRCxLQUE4QjtBQUM5RCxzQkFDRSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFSCxrREFBdEI7QUFBQSw4QkFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV0EsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFHQSxpRUFBZUcsZ0VBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNMLEtBQU4sQ0FBWU0sTUFBWixDQUFtQkMsVUFBVztBQUN6RCxhQUFhRixLQUFLLElBQUlBLEtBQUssQ0FBQ0wsS0FBTixDQUFZTSxNQUFaLENBQW1CRSxJQUFLO0FBQzlDO0FBQ0E7QUFDQSxDQWpCQTs7Ozs7Ozs7Ozs7Ozs7QUNIQSxNQUFNUixLQUFLLEdBQUc7QUFDWk0sRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLFVBQVUsRUFBRSxTQUROO0FBRU5DLElBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLElBQUFBLE9BQU8sRUFBRSxTQUhIO0FBSU5DLElBQUFBLE1BQU0sRUFBRTtBQUpGO0FBREksQ0FBZDtBQVNBLGlFQUFlVixLQUFmOzs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tpbmd0cmFkZXIvLi9zcmMvY29udGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdHJhY2tpbmd0cmFkZXIvLi9zcmMvY29udGV4dC9zaWRlRHJhd2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90cmFja2luZ3RyYWRlci8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly90cmFja2luZ3RyYWRlci8uL3NyYy9zdHlsZXMvZ2xvYmFsLnRzIiwid2VicGFjazovL3RyYWNraW5ndHJhZGVyLy4vc3JjL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly90cmFja2luZ3RyYWRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdHJhY2tpbmd0cmFkZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90cmFja2luZ3RyYWRlci9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2lkZURyYXdlckNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuL3NpZGVEcmF3ZXJcIjtcclxuXHJcbmNvbnN0IEdsb2JhbENvbnRleHQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U2lkZURyYXdlckNvbnRleHRQcm92aWRlcj57Y2hpbGRyZW59PC9TaWRlRHJhd2VyQ29udGV4dFByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vL1RpcGFuZG8gb3MgZGFkb3MgcXVlIHF1ZXJvIHBhcmEgbyBzaWRlRHJhd2VyXHJcbnR5cGUgU2lkZURyYXdlclR5cGUgPSB7XHJcbiAgaXNTaWRlRHJhd2VyT246IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vdGlwYW5kbyBhcyBQcm9wcyBkbyBjb250ZXh0b1xyXG50eXBlIFByb3BzU2lkZURyYXdlckNvbnRleHQgPSB7XHJcbiAgc3RhdGU6IFNpZGVEcmF3ZXJUeXBlO1xyXG4gIHNldFN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTaWRlRHJhd2VyVHlwZT4+O1xyXG59XHJcblxyXG4vL1ZhbG9yIGRlZmF1bHQgZG8gY29udGV4dG9cclxuY29uc3QgREVGQVVMVF9WQUxVRSA9IHtcclxuICBzdGF0ZToge1xyXG4gICAgaXNTaWRlRHJhd2VyT246IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2V0U3RhdGU6ICgpID0+IHt9LCAvL2Z1bsOnw6NvIGRlIGluaWNpYWxpemHDp8Ojb1xyXG59O1xyXG5cclxuLy9DcmlhbmRvIG5vc3NvIGNvbnRleHRvIFNpZGVEcmF3ZXJDb250ZXh0XHJcbmNvbnN0IFNpZGVEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQcm9wc1NpZGVEcmF3ZXJDb250ZXh0PihERUZBVUxUX1ZBTFVFKTtcclxuXHJcbi8vIEZ1bsOnw6NvIHF1ZSBpcmEgY29udGVyIG8gZXN0YWRvIGUgZnVuw6fDo28gcXVlIGlyw6EgYWx0ZXJhciBvIGVzdGFkbyAnc2V0U3RhdGUnXHJcbi8vIHF1ZSBpcsOhIHByb3ZlciBvIGNvbnRleHRvIHBhcmEgb3MgY29tcG9uZW50ZXMgZmlsaG9zIGRhIMOhcnZvcmVcclxuXHJcbmNvbnN0IFNpZGVEcmF3ZXJDb250ZXh0UHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoREVGQVVMVF9WQUxVRS5zdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlRHJhd2VyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHN0YXRlLCBcclxuICAgICAgICBzZXRTdGF0ZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L1NpZGVEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBTaWRlRHJhd2VyQ29udGV4dFByb3ZpZGVyIH07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVEcmF3ZXJDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xyXG5cclxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0dsb2JhbENvbnRleHQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgc3JjOiB1cmwoJy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIH1cclxuYCIsImNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYmFja2dyb3VuZDogJyNGQUZBRkEnLFxyXG4gICAgdGV4dDogJyMzMzMzMzMnLFxyXG4gICAgcHJpbWFyeTogJyMwNzk0QjMnLFxyXG4gICAgYm9yZGVyOiAnI0VCRUJFQidcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGVEcmF3ZXJDb250ZXh0UHJvdmlkZXIiLCJHbG9iYWxDb250ZXh0IiwiY2hpbGRyZW4iLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJERUZBVUxUX1ZBTFVFIiwic3RhdGUiLCJpc1NpZGVEcmF3ZXJPbiIsInNldFN0YXRlIiwiU2lkZURyYXdlckNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGUiLCJ0aGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJwcm9wcyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJ0ZXh0IiwicHJpbWFyeSIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=