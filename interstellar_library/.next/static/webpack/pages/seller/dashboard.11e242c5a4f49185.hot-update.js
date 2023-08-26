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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Cards/TitleCard */ \"./pages/components/Cards/TitleCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction BarChart() {\n    _s();\n    const [backendData, setBackendData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/seller/income_stats\", {\n            withCredentials: true\n        }).then((response)=>{\n            setBackendData(response.data);\n            setIsLoading(false);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n            setIsLoading(false);\n        });\n    }, []);\n    const options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            }\n        }\n    };\n    const labels = [\n        \"January\",\n        \"February\",\n        \"March\",\n        \"April\",\n        \"May\",\n        \"June\",\n        \"July\"\n    ];\n    const data = {\n        labels,\n        datasets: [\n            {\n                label: \"Store 1\",\n                data: labels.map((month)=>backendData[month]),\n                backgroundColor: \"rgba(255, 99, 132, 1)\"\n            },\n            {\n                label: \"Store 2\",\n                data: labels.map(()=>{\n                    return Math.random() * 1000 + 500;\n                }),\n                backgroundColor: \"rgba(53, 162, 235, 1)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Revenue\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\BarChart.js\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\BarChart.js\",\n        lineNumber: 67,\n        columnNumber: 7\n    }, this);\n}\n_s(BarChart, \"ur918KOFV1SnUcl5iqvwWIyMKRQ=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0JhckNoYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUWtCO0FBQ29CO0FBQ3NCO0FBQ2xDO0FBQ3lCO0FBRW5EQywyQ0FBT0EsQ0FBQ2EsUUFBUSxDQUFDWixtREFBYUEsRUFBRUMsaURBQVdBLEVBQUVDLGdEQUFVQSxFQUFFQywyQ0FBS0EsRUFBRUMsNkNBQU9BLEVBQUVDLDRDQUFNQTtBQUUvRSxTQUFTUTs7SUFFUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1JGLGlEQUNNLENBQUMsNkNBQTZDO1lBQ2hEVyxpQkFBaUI7UUFDbkIsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ0xOLGVBQWVNLFNBQVNDLElBQUk7WUFDNUJMLGFBQWE7UUFDZixHQUNDTSxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdENQLGFBQWE7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVILE1BQU1TLFVBQVU7UUFDWkMsWUFBWTtRQUNaQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTO1FBQUM7UUFBVztRQUFZO1FBQVM7UUFBUztRQUFPO1FBQVE7S0FBTztJQUUvRSxNQUFNVCxPQUFPO1FBQ1hTO1FBQ0FDLFVBQVU7WUFDUjtnQkFDRUMsT0FBTztnQkFDUFgsTUFBTVMsT0FBT0csR0FBRyxDQUFDLENBQUNDLFFBQVVyQixXQUFXLENBQUNxQixNQUFNO2dCQUM5Q0MsaUJBQWlCO1lBQ25CO1lBQ0E7Z0JBQ0VILE9BQU87Z0JBQ1BYLE1BQU1TLE9BQU9HLEdBQUcsQ0FBQztvQkFDZixPQUFPRyxLQUFLQyxNQUFNLEtBQUssT0FBTztnQkFDaEM7Z0JBQ0FGLGlCQUFpQjtZQUNuQjtTQUNEO0lBQ0g7SUFFRixxQkFDRSw4REFBQzdCLG1FQUFTQTtRQUFDZ0MsT0FBTztrQkFDWiw0RUFBQ2pDLGdEQUFHQTtZQUFDb0IsU0FBU0E7WUFBU0osTUFBTUE7Ozs7Ozs7Ozs7O0FBSXpDO0dBdkRTVDtLQUFBQTtBQTBEVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0JhckNoYXJ0LmpzPzRjZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIEJhckVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgVGl0bGVDYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZHMvVGl0bGVDYXJkJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQpO1xuXG5mdW5jdGlvbiBCYXJDaGFydCgpe1xuXG4gIGNvbnN0IFtiYWNrZW5kRGF0YSwgc2V0QmFja2VuZERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZWxsZXIvaW5jb21lX3N0YXRzXCIsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRCYWNrZW5kRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J107XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJTdG9yZSAxXCIsXG4gICAgICAgICAgICBkYXRhOiBsYWJlbHMubWFwKChtb250aCkgPT4gYmFja2VuZERhdGFbbW9udGhdKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0b3JlIDJcIixcbiAgICAgICAgICAgIGRhdGE6IGxhYmVscy5tYXAoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDEwMDAgKyA1MDA7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxUaXRsZUNhcmQgdGl0bGU9e1wiUmV2ZW51ZVwifT5cbiAgICAgICAgICAgIDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvVGl0bGVDYXJkPlxuXG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0Il0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJUaXRsZUNhcmQiLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZWdpc3RlciIsIkJhckNoYXJ0IiwiYmFja2VuZERhdGEiLCJzZXRCYWNrZW5kRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsIm1hcCIsIm1vbnRoIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/dashboard/components/BarChart.js\n"));

/***/ })

});