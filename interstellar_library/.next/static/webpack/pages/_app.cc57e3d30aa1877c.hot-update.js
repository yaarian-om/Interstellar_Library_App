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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedUser = localStorage.getItem(\"authUser\");\n        return storedUser ? JSON.parse(storedUser) : null;\n    });\n    const login = (email, cookie)=>{\n        const newUser = {\n            email,\n            cookie\n        };\n        localStorage.setItem(\"authUser\", JSON.stringify(newUser));\n        setUser(newUser);\n        console.info(\"SetUser is done = \" + newUser);\n    };\n    const checkUser = ()=>{\n        return user && user.email != null && user.cookie != null;\n    };\n    const logout = ()=>{\n        doSignOut();\n    };\n    async function doSignOut() {\n        try {\n            // ! Please Provide the Link here\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/seller/logout\", {\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                withCredentials: true\n            });\n            console.log(response);\n            setUser(null);\n            document.cookie = null;\n            // ! Import and Declare the router first\n            router.push(\"/seller/login\");\n        } catch (error) {\n            console.error(\"error failed: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            checkUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\utils\\\\authcontext.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"obJZwblN0oYlkSxtMOlFBVh3e0I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNjO0FBRXhDLE1BQU1LLDRCQUFjTCxvREFBYUE7QUFFMUIsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFdkMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztRQUMvQixNQUFNUyxhQUFhQyxhQUFhQyxPQUFPLENBQUM7UUFDeEMsT0FBT0YsYUFBYUcsS0FBS0MsS0FBSyxDQUFDSixjQUFjO0lBQy9DO0lBRUEsTUFBTUssUUFBUSxDQUFDQyxPQUFPQztRQUNwQixNQUFNQyxVQUFVO1lBQUVGO1lBQU9DO1FBQU87UUFDaENOLGFBQWFRLE9BQU8sQ0FBQyxZQUFZTixLQUFLTyxTQUFTLENBQUNGO1FBQ2hEVCxRQUFRUztRQUNSRyxRQUFRQyxJQUFJLENBQUMsdUJBQXFCSjtJQUNwQztJQUVBLE1BQU1LLFlBQVk7UUFDaEIsT0FBT2YsUUFBUUEsS0FBS1EsS0FBSyxJQUFJLFFBQVFSLEtBQUtTLE1BQU0sSUFBSTtJQUN0RDtJQUVBLE1BQU1PLFNBQVM7UUFDYkM7SUFDRjtJQUNBLGVBQWVBO1FBQ2IsSUFBSTtZQUNGLGlDQUFpQztZQUNqQyxNQUFNQyxXQUFXLE1BQU14QixrREFBVSxDQUFDLHVDQUF1QztnQkFDdkUwQixTQUFTO29CQUFFLGdCQUFnQjtnQkFBb0M7Z0JBQy9EQyxpQkFBaUI7WUFDbkI7WUFDQVIsUUFBUVMsR0FBRyxDQUFDSjtZQUNaakIsUUFBUTtZQUNSc0IsU0FBU2QsTUFBTSxHQUFHO1lBQ2xCLHdDQUF3QztZQUN4Q1YsT0FBT3lCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkWixRQUFRWSxLQUFLLENBQUMsa0JBQWtCQTtRQUNsQztJQUNGO0lBQ0EscUJBQ0UsOERBQUM3QixZQUFZOEIsUUFBUTtRQUFDQyxPQUFPO1lBQUUzQjtZQUFNTztZQUFPUztZQUFRRDtRQUFVO2tCQUMzRGpCOzs7Ozs7QUFHUCxFQUFFO0dBNUNXRDs7UUFFSUYsa0RBQVNBOzs7S0FGYkU7QUE4Q04sTUFBTStCLFVBQVU7O0lBQU1wQyxPQUFBQSxpREFBVUEsQ0FBQ0k7QUFBVyxFQUFFO0lBQXhDZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXRpbHMvYXV0aGNvbnRleHQuanM/MTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFVzZXJcIik7XHJcbiAgICByZXR1cm4gc3RvcmVkVXNlciA/IEpTT04ucGFyc2Uoc3RvcmVkVXNlcikgOiBudWxsO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IChlbWFpbCwgY29va2llKSA9PiB7XHJcbiAgICBjb25zdCBuZXdVc2VyID0geyBlbWFpbCwgY29va2llIH07XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhVc2VyXCIsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpKTtcclxuICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICBjb25zb2xlLmluZm8oXCJTZXRVc2VyIGlzIGRvbmUgPSBcIituZXdVc2VyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1VzZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlciAmJiB1c2VyLmVtYWlsICE9IG51bGwgJiYgdXNlci5jb29raWUgIT0gbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkb1NpZ25PdXQoKTtcclxuICB9O1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGRvU2lnbk91dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vICEgUGxlYXNlIFByb3ZpZGUgdGhlIExpbmsgaGVyZVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VsbGVyL2xvZ291dFwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBudWxsO1xyXG4gICAgICAvLyAhIEltcG9ydCBhbmQgRGVjbGFyZSB0aGUgcm91dGVyIGZpcnN0XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvc2VsbGVyL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgZmFpbGVkOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBsb2dvdXQsIGNoZWNrVXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJlbWFpbCIsImNvb2tpZSIsIm5ld1VzZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImluZm8iLCJjaGVja1VzZXIiLCJsb2dvdXQiLCJkb1NpZ25PdXQiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwibG9nIiwiZG9jdW1lbnQiLCJwdXNoIiwiZXJyb3IiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/utils/authcontext.js\n"));

/***/ })

});