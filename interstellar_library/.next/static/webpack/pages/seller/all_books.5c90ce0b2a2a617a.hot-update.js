"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/seller/all_books",{

/***/ "./pages/seller/all_books.js":
/*!***********************************!*\
  !*** ./pages/seller/all_books.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ All_Books; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Dynamic Imports\nconst _Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_layout_seller-layout_seller_layout_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/layout/seller-layout/seller_layout */ \"./pages/components/layout/seller-layout/seller_layout.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"seller\\\\all_books.js -> \" + \"../components/layout/seller-layout/seller_layout\"\n        ]\n    }\n});\n_c = _Layout;\nconst _Title = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_layout__title_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/layout/_title */ \"./pages/components/layout/_title.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"seller\\\\all_books.js -> \" + \"../components/layout/_title\"\n        ]\n    }\n});\n_c1 = _Title;\nvar __N_SSP = true;\n// export async \nfunction All_Books() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   const [userImage, setUserImage] = useState(null);\n    async function getServerSideProps() {\n        return await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3000/seller/books\").data;\n    }\n    // When the page loads\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // handleSubmit();\n        const data = getServerSideProps();\n    }, []);\n    const handleSubmit = async (e)=>{\n        // e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3000/seller/logout\");\n            if (response.data.Logout == \"Success\") {\n                router.push({\n                    pathname: \"/seller/login\"\n                });\n            } else {\n                router.push({\n                    pathname: \"error\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error adding books:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title, {\n                title: \"All Books\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\seller\\\\all_books.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout, {}, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\seller\\\\all_books.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(All_Books, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = All_Books;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"_Layout\");\n$RefreshReg$(_c1, \"_Title\");\n$RefreshReg$(_c2, \"All_Books\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWxsZXIvYWxsX2Jvb2tzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNLO0FBQ0s7QUFDbkI7QUFDSztBQUkvQixrQkFBa0I7QUFDbEIsTUFBTU0sVUFBVU4sbURBQU9BLENBQUMsSUFBTSx1UUFBTzs7Ozs7OztLQUEvQk07QUFDTixNQUFNQyxTQUFTUCxtREFBT0EsQ0FBQyxJQUFNLHdNQUFPOzs7Ozs7O01BQTlCTzs7QUFHTixnQkFBZ0I7QUFJRCxTQUFTQzs7SUFFcEIsTUFBTUMsU0FBVVIsc0RBQVNBO0lBQzdCLHNEQUFzRDtJQUdsRCxlQUFlUztRQUNYLE9BQU8sTUFBTU4saURBQVMsQ0FBQyxzQ0FBc0NRLElBQUk7SUFDckU7SUFFRixzQkFBc0I7SUFDdEJWLGdEQUFTQSxDQUFDO1FBRVosa0JBQWtCO1FBQ2xCLE1BQU1VLE9BQU9GO0lBRVgsR0FBRyxFQUFFO0lBRUwsTUFBTUcsZUFBZSxPQUFPQztRQUMxQixzQkFBc0I7UUFDdEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVgsa0RBQVUsQ0FBQztZQUNsQyxJQUFJVyxTQUFTSCxJQUFJLENBQUNLLE1BQU0sSUFBSSxXQUFXO2dCQUNuQ1IsT0FBT1MsSUFBSSxDQUFDO29CQUNSQyxVQUFVO2dCQUNkO1lBQ0osT0FBTztnQkFDSFYsT0FBT1MsSUFBSSxDQUFDO29CQUNSQyxVQUFVO2dCQUNkO1lBQ0o7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDekM7SUFDSjtJQUtJLHFCQUNJOzswQkFDSSw4REFBQ2I7Z0JBQU9lLE9BQU07Ozs7OzswQkFDZCw4REFBQ2hCOzs7Ozs7O0FBS2I7R0EvQ3dCRTs7UUFFSlAsa0RBQVNBOzs7TUFGTE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VsbGVyL2FsbF9ib29rcy5qcz83Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcblxyXG5cclxuLy8gRHluYW1pYyBJbXBvcnRzXHJcbmNvbnN0IF9MYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9sYXlvdXQvc2VsbGVyLWxheW91dC9zZWxsZXJfbGF5b3V0JykpXHJcbmNvbnN0IF9UaXRsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2xheW91dC9fdGl0bGUnKSlcclxuXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbF9Cb29rcygpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgID0gdXNlUm91dGVyKCk7XHJcbi8vICAgY29uc3QgW3VzZXJJbWFnZSwgc2V0VXNlckltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlbGxlci9ib29rcycpLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gIC8vIFdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuLy8gaGFuZGxlU3VibWl0KCk7XHJcbmNvbnN0IGRhdGEgPSBnZXRTZXJ2ZXJTaWRlUHJvcHMoKTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VsbGVyL2xvZ291dFwiKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLkxvZ291dCA9PSBcIlN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zZWxsZXIvbG9naW4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgYm9va3M6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8X1RpdGxlIHRpdGxlPVwiQWxsIEJvb2tzXCIgLz5cclxuICAgICAgICAgICAgPF9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9fTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW1hZ2UiLCJfTGF5b3V0IiwiX1RpdGxlIiwiQWxsX0Jvb2tzIiwicm91dGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZ2V0IiwiZGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXNwb25zZSIsInBvc3QiLCJMb2dvdXQiLCJwdXNoIiwicGF0aG5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/seller/all_books.js\n"));

/***/ })

});