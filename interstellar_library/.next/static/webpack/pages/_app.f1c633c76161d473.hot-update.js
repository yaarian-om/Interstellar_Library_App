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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (true) {\n            const storedUser = localStorage.getItem(\"authUser\");\n            return storedUser ? JSON.parse(storedUser) : null;\n        }\n        return null;\n    });\n    const login = (email, cookie)=>{\n        const newUser = {\n            email,\n            cookie\n        };\n        localStorage.setItem(\"authUser\", JSON.stringify(newUser));\n        setUser(newUser);\n        console.info(\"SetUser is done = \" + newUser);\n    };\n    const checkUser = ()=>{\n        return user && user.email != null && user.cookie != null;\n    };\n    const logout = ()=>{\n        doSignOut();\n    };\n    async function doSignOut() {\n        try {\n            // ! Please Provide the Link here\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/seller/logout\", {\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                withCredentials: true\n            });\n            console.log(response);\n            localStorage.removeItem(\"authUser\");\n            setUser(null);\n            document.cookie = null;\n            // ! Import and Declare the router first\n            router.push(\"/seller/login\");\n        } catch (error) {\n            console.error(\"error failed: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            checkUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\utils\\\\authcontext.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"KK96FfwebFk6kwPyA7A0MI2bNXw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy9hdXRoY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNjO0FBRXhDLE1BQU1LLDRCQUFjTCxvREFBYUE7QUFFMUIsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFdkMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXpCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztRQUMvQixJQUFJLElBQTZCLEVBQUU7WUFDakMsTUFBTVMsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1lBQ3hDLE9BQU9GLGFBQWFHLEtBQUtDLEtBQUssQ0FBQ0osY0FBYztRQUMvQztRQUNBLE9BQU87SUFDVDtJQUVDLE1BQU1LLFFBQVEsQ0FBQ0MsT0FBT0M7UUFDcEIsTUFBTUMsVUFBVTtZQUFFRjtZQUFPQztRQUFPO1FBQ2hDTixhQUFhUSxPQUFPLENBQUMsWUFBWU4sS0FBS08sU0FBUyxDQUFDRjtRQUNoRFQsUUFBUVM7UUFDUkcsUUFBUUMsSUFBSSxDQUFDLHVCQUFxQko7SUFDcEM7SUFFQSxNQUFNSyxZQUFZO1FBQ2hCLE9BQU9mLFFBQVFBLEtBQUtRLEtBQUssSUFBSSxRQUFRUixLQUFLUyxNQUFNLElBQUk7SUFDdEQ7SUFFQSxNQUFNTyxTQUFTO1FBQ2JDO0lBQ0Y7SUFDQSxlQUFlQTtRQUNiLElBQUk7WUFDRixpQ0FBaUM7WUFDakMsTUFBTUMsV0FBVyxNQUFNeEIsa0RBQVUsQ0FBQyx1Q0FBdUM7Z0JBQ3ZFMEIsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW9DO2dCQUMvREMsaUJBQWlCO1lBQ25CO1lBQ0FSLFFBQVFTLEdBQUcsQ0FBQ0o7WUFDWmYsYUFBYW9CLFVBQVUsQ0FBQztZQUN4QnRCLFFBQVE7WUFDUnVCLFNBQVNmLE1BQU0sR0FBRztZQUNsQix3Q0FBd0M7WUFDeENWLE9BQU8wQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZGIsUUFBUWEsS0FBSyxDQUFDLGtCQUFrQkE7UUFDbEM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDOUIsWUFBWStCLFFBQVE7UUFBQ0MsT0FBTztZQUFFNUI7WUFBTU87WUFBT1M7WUFBUUQ7UUFBVTtrQkFDM0RqQjs7Ozs7O0FBR1AsRUFBRTtHQWhEV0Q7O1FBRUlGLGtEQUFTQTs7O0tBRmJFO0FBa0ROLE1BQU1nQyxVQUFVOztJQUFNckMsT0FBQUEsaURBQVVBLENBQUNJO0FBQVcsRUFBRTtJQUF4Q2lDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3V0aWxzL2F1dGhjb250ZXh0LmpzPzEyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhVc2VyXCIpO1xyXG4gICAgIHJldHVybiBzdG9yZWRVc2VyID8gSlNPTi5wYXJzZShzdG9yZWRVc2VyKSA6IG51bGw7XHJcbiAgIH1cclxuICAgcmV0dXJuIG51bGw7XHJcbiB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoZW1haWwsIGNvb2tpZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VXNlciA9IHsgZW1haWwsIGNvb2tpZSB9O1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVXNlclwiLCBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSk7XHJcbiAgICBzZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgY29uc29sZS5pbmZvKFwiU2V0VXNlciBpcyBkb25lID0gXCIrbmV3VXNlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tVc2VyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHVzZXIgJiYgdXNlci5lbWFpbCAhPSBudWxsICYmIHVzZXIuY29va2llICE9IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZG9TaWduT3V0KCk7XHJcbiAgfTtcclxuICBhc3luYyBmdW5jdGlvbiBkb1NpZ25PdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyAhIFBsZWFzZSBQcm92aWRlIHRoZSBMaW5rIGhlcmVcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlbGxlci9sb2dvdXRcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVXNlclwiKTtcclxuICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbnVsbDtcclxuICAgICAgLy8gISBJbXBvcnQgYW5kIERlY2xhcmUgdGhlIHJvdXRlciBmaXJzdFxyXG4gICAgICByb3V0ZXIucHVzaCgnL3NlbGxlci9sb2dpbicpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGZhaWxlZDogXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0LCBjaGVja1VzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJzdG9yZWRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxvZ2luIiwiZW1haWwiLCJjb29raWUiLCJuZXdVc2VyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJpbmZvIiwiY2hlY2tVc2VyIiwibG9nb3V0IiwiZG9TaWduT3V0IiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImxvZyIsInJlbW92ZUl0ZW0iLCJkb2N1bWVudCIsInB1c2giLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/utils/authcontext.js\n"));

/***/ })

});