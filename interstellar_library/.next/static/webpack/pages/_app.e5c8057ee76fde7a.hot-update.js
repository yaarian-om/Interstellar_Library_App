"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/utils/authcontext.js":
/*!************************************!*\
  !*** ./pages/utils/authcontext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = (email, cookie)=>{\n        setUser({\n            email,\n            cookie\n        });\n    };\n    const checkUser = ()=>{\n        // console.log(\"user:  \" + user.email);\n        // console.log(\"user:  \" + user.cookie);\n        if (user.email != null && user.cookie != null) {\n            return true;\n        } else {\n            return false;\n        }\n    };\n    const logout = ()=>{\n        doSignOut();\n    };\n    async function doSignOut() {\n        try {\n            // ! Please Provide the Link here\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"LINK HERE\", {\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                withCredentials: true\n            });\n            console.log(response);\n            setUser(null);\n            document.cookie = null;\n        // ! Import and Declare the router first\n        // router.push('/loginform');\n        } catch (error) {\n            console.error(\"error failed: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            checkUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\utils\\\\authcontext.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDbEM7QUFFMUIsTUFBTUksNEJBQWNKLG9EQUFhQTtBQUUxQixNQUFNSyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakMsTUFBTU8sUUFBUSxDQUFDQyxPQUFPQztRQUNwQkgsUUFBUTtZQUFFRTtZQUFPQztRQUFPO0lBQzFCO0lBRUEsTUFBTUMsWUFBWTtRQUNoQix1Q0FBdUM7UUFDdkMsd0NBQXdDO1FBQ3hDLElBQUlMLEtBQUtHLEtBQUssSUFBSSxRQUFRSCxLQUFLSSxNQUFNLElBQUksTUFBTTtZQUM3QyxPQUFPO1FBQ1QsT0FBTztZQUNMLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTUUsU0FBUztRQUNiQztJQUNGO0lBQ0EsZUFBZUE7UUFDYixJQUFJO1lBQ0YsaUNBQWlDO1lBQ2pDLE1BQU1DLFdBQVcsTUFBTVosa0RBQVUsQ0FBQyxhQUFhO2dCQUM3Q2MsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW9DO2dCQUMvREMsaUJBQWlCO1lBQ25CO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDWlAsUUFBUTtZQUNSYSxTQUFTVixNQUFNLEdBQUc7UUFDbEIsd0NBQXdDO1FBQ3hDLDZCQUE2QjtRQUMvQixFQUFFLE9BQU9XLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLGtCQUFrQkE7UUFDbEM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDbEIsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFakI7WUFBTUU7WUFBT0k7WUFBUUQ7UUFBVTtrQkFDM0ROOzs7Ozs7QUFHUCxFQUFFO0dBekNXRDtLQUFBQTtBQTJDTixNQUFNb0IsVUFBVTs7SUFBTXhCLE9BQUFBLGlEQUFVQSxDQUFDRztBQUFXLEVBQUU7SUFBeENxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoZW1haWwsIGNvb2tpZSkgPT4ge1xyXG4gICAgc2V0VXNlcih7IGVtYWlsLCBjb29raWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tVc2VyID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1c2VyOiAgXCIgKyB1c2VyLmVtYWlsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlcjogIFwiICsgdXNlci5jb29raWUpO1xyXG4gICAgaWYgKHVzZXIuZW1haWwgIT0gbnVsbCAmJiB1c2VyLmNvb2tpZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGRvU2lnbk91dCgpO1xyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gZG9TaWduT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gISBQbGVhc2UgUHJvdmlkZSB0aGUgTGluayBoZXJlXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIkxJTksgSEVSRVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBudWxsO1xyXG4gICAgICAvLyAhIEltcG9ydCBhbmQgRGVjbGFyZSB0aGUgcm91dGVyIGZpcnN0XHJcbiAgICAgIC8vIHJvdXRlci5wdXNoKCcvbG9naW5mb3JtJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgZmFpbGVkOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBsb2dvdXQsIGNoZWNrVXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvZ2luIiwiZW1haWwiLCJjb29raWUiLCJjaGVja1VzZXIiLCJsb2dvdXQiLCJkb1NpZ25PdXQiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZXJyb3IiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/utils/authcontext.js\n"));

/***/ })

});