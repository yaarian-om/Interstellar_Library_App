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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Toast_Success; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Toast_Success() {\n    _s();\n    const [isToastVisible, setIsToastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toastMessage, setToastMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const showToast = (message)=>{\n        setToastMessage(message);\n        setIsToastVisible(true);\n        // Automatically hide the toast after a certain time\n        setTimeout(()=>{\n            setIsToastVisible(false);\n            setToastMessage(\"\");\n        }, 3000); // Hide after 3 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"toast \".concat(isToastVisible ? \"toast-end\" : \"\"),\n        children: isToastVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-success\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: toastMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\toast\\\\toast_success.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Toast_Success, \"KIwFGrwFTfBwqKv/euqK4JO5xaQ=\");\n_c = Toast_Success;\nvar _c;\n$RefreshReg$(_c, \"Toast_Success\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RvYXN0L3RvYXN0X3N1Y2Nlc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQzs7SUFFdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTSxZQUFZLENBQUNDO1FBQ2pCRixnQkFBZ0JFO1FBQ2hCSixrQkFBa0I7UUFFbEIsb0RBQW9EO1FBQ3BESyxXQUFXO1lBQ1RMLGtCQUFrQjtZQUNsQkUsZ0JBQWdCO1FBQ2xCLEdBQUcsT0FBTyx1QkFBdUI7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVyxTQUEyQyxPQUFsQ1IsaUJBQWlCLGNBQWM7a0JBQ3JEQSxnQ0FDQyw4REFBQ087WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7MEJBQU1QOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBMUJ3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy90b2FzdC90b2FzdF9zdWNjZXNzLmpzPzIzZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2FzdF9TdWNjZXNzKCkge1xyXG4gIFxyXG4gIGNvbnN0IFtpc1RvYXN0VmlzaWJsZSwgc2V0SXNUb2FzdFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2FzdE1lc3NhZ2UsIHNldFRvYXN0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHNob3dUb2FzdCA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBzZXRUb2FzdE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBzZXRJc1RvYXN0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGhpZGUgdGhlIHRvYXN0IGFmdGVyIGEgY2VydGFpbiB0aW1lXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SXNUb2FzdFZpc2libGUoZmFsc2UpO1xyXG4gICAgICBzZXRUb2FzdE1lc3NhZ2UoJycpO1xyXG4gICAgfSwgMzAwMCk7IC8vIEhpZGUgYWZ0ZXIgMyBzZWNvbmRzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHtpc1RvYXN0VmlzaWJsZSA/IFwidG9hc3QtZW5kXCIgOiBcIlwifWB9PlxyXG4gICAgICB7aXNUb2FzdFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPHNwYW4+e3RvYXN0TWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiAuLi4gb3RoZXIgdG9hc3QgbWVzc2FnZXMgLi4uICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVG9hc3RfU3VjY2VzcyIsImlzVG9hc3RWaXNpYmxlIiwic2V0SXNUb2FzdFZpc2libGUiLCJ0b2FzdE1lc3NhZ2UiLCJzZXRUb2FzdE1lc3NhZ2UiLCJzaG93VG9hc3QiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/toast/toast_success.js\n"));

/***/ })

});