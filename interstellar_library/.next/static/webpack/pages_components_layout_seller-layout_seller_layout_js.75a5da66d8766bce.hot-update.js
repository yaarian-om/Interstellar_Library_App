"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_layout_seller-layout_seller_layout_js",{

/***/ "./pages/components/toast/toast_success.js":
/*!*************************************************!*\
  !*** ./pages/components/toast/toast_success.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Toast_Success() {\n    _s();\n    const [isToastVisible, setIsToastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toastMessage, setToastMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const showToast = (message)=>{\n        setToastMessage(message);\n        setIsToastVisible(true);\n        // Automatically hide the toast after a certain time\n        setTimeout(()=>{\n            setIsToastVisible(false);\n            setToastMessage(\"\");\n        }, 3000); // Hide after 3 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"toast \".concat(isToastVisible ? \"toast-end\" : \"\"),\n        children: isToastVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-success\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: toastMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Toast_Success, \"KIwFGrwFTfBwqKv/euqK4JO5xaQ=\");\n_c = Toast_Success;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toast_Success);\nvar _c;\n$RefreshReg$(_c, \"Toast_Success\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RvYXN0L3RvYXN0X3N1Y2Nlc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUVqQyxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1NLFlBQVksQ0FBQ0M7UUFDakJGLGdCQUFnQkU7UUFDaEJKLGtCQUFrQjtRQUVsQixvREFBb0Q7UUFDcERLLFdBQVc7WUFDVEwsa0JBQWtCO1lBQ2xCRSxnQkFBZ0I7UUFDbEIsR0FBRyxPQUFPLHVCQUF1QjtJQUNuQztJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXLFNBQTJDLE9BQWxDUixpQkFBaUIsY0FBYztrQkFDckRBLGdDQUNDLDhEQUFDTztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQzswQkFBTVA7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0F6QlNIO0tBQUFBO0FBMkJULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvdG9hc3QvdG9hc3Rfc3VjY2Vzcy5qcz8yM2YzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gVG9hc3RfU3VjY2VzcygpIHtcclxuICBjb25zdCBbaXNUb2FzdFZpc2libGUsIHNldElzVG9hc3RWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG9hc3RNZXNzYWdlLCBzZXRUb2FzdE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBzaG93VG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgc2V0VG9hc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgc2V0SXNUb2FzdFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgLy8gQXV0b21hdGljYWxseSBoaWRlIHRoZSB0b2FzdCBhZnRlciBhIGNlcnRhaW4gdGltZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElzVG9hc3RWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgc2V0VG9hc3RNZXNzYWdlKCcnKTtcclxuICAgIH0sIDMwMDApOyAvLyBIaWRlIGFmdGVyIDMgc2Vjb25kc1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ICR7aXNUb2FzdFZpc2libGUgPyBcInRvYXN0LWVuZFwiIDogXCJcIn1gfT5cclxuICAgICAge2lzVG9hc3RWaXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIDxzcGFuPnt0b2FzdE1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7LyogLi4uIG90aGVyIHRvYXN0IG1lc3NhZ2VzIC4uLiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0X1N1Y2Nlc3M7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRvYXN0X1N1Y2Nlc3MiLCJpc1RvYXN0VmlzaWJsZSIsInNldElzVG9hc3RWaXNpYmxlIiwidG9hc3RNZXNzYWdlIiwic2V0VG9hc3RNZXNzYWdlIiwic2hvd1RvYXN0IiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/toast/toast_success.js\n"));

/***/ })

});