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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = (email, cookie)=>{\n        setUser({\n            email,\n            cookie\n        });\n        console.log(\"\");\n    };\n    const checkUser = ()=>{\n        // console.log(\"user:  \" + user.email);\n        // console.log(\"user:  \" + user.cookie);\n        if (user.email != null && user.cookie != null) {\n            return true;\n        } else {\n            return false;\n        }\n    };\n    const logout = ()=>{\n        doSignOut();\n    };\n    async function doSignOut() {\n        try {\n            // ! Please Provide the Link here\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/seller/logout\", {\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                withCredentials: true\n            });\n            console.log(response);\n            setUser(null);\n            document.cookie = null;\n            // ! Import and Declare the router first\n            router.push(\"/seller/login\");\n        } catch (error) {\n            console.error(\"error failed: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            checkUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\utils\\\\authcontext.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"LQAqkBkKEGSfvY450rVl21PSBrM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNjO0FBRXhDLE1BQU1LLDRCQUFjTCxvREFBYUE7QUFFMUIsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFdkMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNUyxRQUFRLENBQUNDLE9BQU9DO1FBQ3BCSCxRQUFRO1lBQUVFO1lBQU9DO1FBQU87UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsTUFBTUMsWUFBWTtRQUNoQix1Q0FBdUM7UUFDdkMsd0NBQXdDO1FBQ3hDLElBQUlQLEtBQUtHLEtBQUssSUFBSSxRQUFRSCxLQUFLSSxNQUFNLElBQUksTUFBTTtZQUM3QyxPQUFPO1FBQ1QsT0FBTztZQUNMLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTUksU0FBUztRQUNiQztJQUNGO0lBQ0EsZUFBZUE7UUFDYixJQUFJO1lBQ0YsaUNBQWlDO1lBQ2pDLE1BQU1DLFdBQVcsTUFBTWhCLGtEQUFVLENBQUMsdUNBQXVDO2dCQUN2RWtCLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFvQztnQkFDL0RDLGlCQUFpQjtZQUNuQjtZQUNBUixRQUFRQyxHQUFHLENBQUNJO1lBQ1pULFFBQVE7WUFDUmEsU0FBU1YsTUFBTSxHQUFHO1lBQ2xCLHdDQUF3QztZQUN4Q0wsT0FBT2dCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkWCxRQUFRVyxLQUFLLENBQUMsa0JBQWtCQTtRQUNsQztJQUNGO0lBQ0EscUJBQ0UsOERBQUNwQixZQUFZcUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVsQjtZQUFNRTtZQUFPTTtZQUFRRDtRQUFVO2tCQUMzRFQ7Ozs7OztBQUdQLEVBQUU7R0E3Q1dEOztRQUVJRixrREFBU0E7OztLQUZiRTtBQStDTixNQUFNc0IsVUFBVTs7SUFBTTNCLE9BQUFBLGlEQUFVQSxDQUFDSTtBQUFXLEVBQUU7SUFBeEN1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcz8xMjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoZW1haWwsIGNvb2tpZSkgPT4ge1xyXG4gICAgc2V0VXNlcih7IGVtYWlsLCBjb29raWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlwiKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVXNlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlcjogIFwiICsgdXNlci5lbWFpbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVzZXI6ICBcIiArIHVzZXIuY29va2llKTtcclxuICAgIGlmICh1c2VyLmVtYWlsICE9IG51bGwgJiYgdXNlci5jb29raWUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkb1NpZ25PdXQoKTtcclxuICB9O1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGRvU2lnbk91dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vICEgUGxlYXNlIFByb3ZpZGUgdGhlIExpbmsgaGVyZVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VsbGVyL2xvZ291dFwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBudWxsO1xyXG4gICAgICAvLyAhIEltcG9ydCBhbmQgRGVjbGFyZSB0aGUgcm91dGVyIGZpcnN0XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvc2VsbGVyL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgZmFpbGVkOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBsb2dvdXQsIGNoZWNrVXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImxvZ2luIiwiZW1haWwiLCJjb29raWUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tVc2VyIiwibG9nb3V0IiwiZG9TaWduT3V0IiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImRvY3VtZW50IiwicHVzaCIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/utils/authcontext.js\n"));

/***/ })

});