"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/seller/dashboard",{

/***/ "./pages/components/dashboard/components/BarChart.js":
/*!***********************************************************!*\
  !*** ./pages/components/dashboard/components/BarChart.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Cards/TitleCard */ \"./pages/components/Cards/TitleCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction BarChart() {\n    _s();\n    const [backendData, setBackendData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/seller/income_stats\", {\n            withCredentials: true\n        }).then((response)=>{\n            setBackendData(response.data);\n            setIsLoading(false);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n            setIsLoading(false);\n        });\n    }, []);\n    const options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            }\n        }\n    };\n    const labels = [\n        \"January\",\n        \"February\",\n        \"March\",\n        \"April\",\n        \"May\",\n        \"June\",\n        \"July\",\n        \"August\"\n    ];\n    const data = {\n        labels,\n        datasets: [\n            {\n                label: \"Store 1\",\n                data: labels.map((month)=>backendData[month]),\n                backgroundColor: \"rgba(50, 168, 82, 1)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Revenue\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\BarChart.js\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\BarChart.js\",\n        lineNumber: 67,\n        columnNumber: 7\n    }, this);\n}\n_s(BarChart, \"ur918KOFV1SnUcl5iqvwWIyMKRQ=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0JhckNoYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUWtCO0FBQ29CO0FBQ3NCO0FBQ2xDO0FBQ3lCO0FBRW5EQywyQ0FBT0EsQ0FBQ2EsUUFBUSxDQUFDWixtREFBYUEsRUFBRUMsaURBQVdBLEVBQUVDLGdEQUFVQSxFQUFFQywyQ0FBS0EsRUFBRUMsNkNBQU9BLEVBQUVDLDRDQUFNQTtBQUUvRSxTQUFTUTs7SUFFUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1JGLGlEQUNNLENBQUMsNkNBQTZDO1lBQ2hEVyxpQkFBaUI7UUFDbkIsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ0xOLGVBQWVNLFNBQVNDLElBQUk7WUFDNUJMLGFBQWE7UUFDZixHQUNDTSxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdENQLGFBQWE7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVILE1BQU1TLFVBQVU7UUFDWkMsWUFBWTtRQUNaQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTO1FBQUM7UUFBVztRQUFZO1FBQVM7UUFBUztRQUFPO1FBQVE7UUFBTztLQUFTO0lBRXhGLE1BQU1ULE9BQU87UUFDWFM7UUFDQUMsVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQWCxNQUFNUyxPQUFPRyxHQUFHLENBQUMsQ0FBQ0MsUUFBVXJCLFdBQVcsQ0FBQ3FCLE1BQU07Z0JBQzlDQyxpQkFBaUI7WUFDbkI7U0FRRDtJQUNIO0lBRUYscUJBQ0UsOERBQUM3QixtRUFBU0E7UUFBQzhCLE9BQU87a0JBQ1osNEVBQUMvQixnREFBR0E7WUFBQ29CLFNBQVNBO1lBQVNKLE1BQU1BOzs7Ozs7Ozs7OztBQUl6QztHQXZEU1Q7S0FBQUE7QUEwRFQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9kYXNoYm9hcmQvY29tcG9uZW50cy9CYXJDaGFydC5qcz80Y2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IFRpdGxlQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRzL1RpdGxlQ2FyZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kKTtcblxuZnVuY3Rpb24gQmFyQ2hhcnQoKXtcblxuICBjb25zdCBbYmFja2VuZERhdGEsIHNldEJhY2tlbmREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VsbGVyL2luY29tZV9zdGF0c1wiLCB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0QmFja2VuZERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsJ0F1Z3VzdCddO1xuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiU3RvcmUgMVwiLFxuICAgICAgICAgICAgZGF0YTogbGFiZWxzLm1hcCgobW9udGgpID0+IGJhY2tlbmREYXRhW21vbnRoXSksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MCwgMTY4LCA4MiwgMSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGxhYmVsOiBcIlN0b3JlIDJcIixcbiAgICAgICAgICAvLyAgIGRhdGE6IGxhYmVscy5tYXAoKCkgPT4ge1xuICAgICAgICAgIC8vICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDEwMDAgKyA1MDA7XG4gICAgICAgICAgLy8gICB9KSxcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICAvLyB9LFxuICAgICAgICBdLFxuICAgICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxUaXRsZUNhcmQgdGl0bGU9e1wiUmV2ZW51ZVwifT5cbiAgICAgICAgICAgIDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvVGl0bGVDYXJkPlxuXG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0Il0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJUaXRsZUNhcmQiLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZWdpc3RlciIsIkJhckNoYXJ0IiwiYmFja2VuZERhdGEiLCJzZXRCYWNrZW5kRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsIm1hcCIsIm1vbnRoIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/dashboard/components/BarChart.js\n"));

/***/ })

});