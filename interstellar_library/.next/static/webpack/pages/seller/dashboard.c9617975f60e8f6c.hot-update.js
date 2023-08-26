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

/***/ "./pages/components/dashboard/components/LineChart.js":
/*!************************************************************!*\
  !*** ./pages/components/dashboard/components/LineChart.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Cards/TitleCard */ \"./pages/components/Cards/TitleCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction LineChart() {\n    _s();\n    const [backendResponse, setBackendResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch data using Axios\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/seller/orders_stats\", {\n            withCredentials: true\n        }).then((response)=>{\n            setBackendResponse(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    const options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            }\n        }\n    };\n    console.info(\"Total Cost on June = \" + backendResponse.June);\n    const labels = Object.keys(backendResponse);\n    const data = {\n        labels,\n        datasets: [\n            {\n                fill: true,\n                label: \"MO\",\n                data: Object.values(backendResponse),\n                borderColor: \"rgb(53, 162, 235)\",\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Monthly Order Stats\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Line, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\LineChart.js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\LineChart.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(LineChart, \"3vvbx5IcxUI8gZiDylb7/Z5sS4w=\");\n_c = LineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart);\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0xpbmVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQVdSO0FBQ3FCO0FBQ3FCO0FBQ2hCO0FBQ2xCO0FBRTFCRSwyQ0FBT0EsQ0FBQ2MsUUFBUSxDQUNkYixtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsMkNBQUtBLEVBQ0xDLDZDQUFPQSxFQUNQQyw0Q0FBTUEsRUFDTkMsNENBQU1BO0FBR1IsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhERCxnREFBU0EsQ0FBQztRQUNSLHlCQUF5QjtRQUN6QkUsaURBQ00sQ0FBQyw2Q0FBNkM7WUFDaERNLGlCQUFpQjtRQUNuQixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEosbUJBQW1CSSxTQUFTQyxJQUFJO1FBQ2xDLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1FLFVBQVU7UUFDZEMsWUFBWTtRQUNaQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFDQUwsUUFBUU0sSUFBSSxDQUFDLDBCQUEwQmYsZ0JBQWdCZ0IsSUFBSTtJQUUzRCxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUNuQjtJQUMzQixNQUFNTSxPQUFPO1FBQ1hXO1FBQ0FHLFVBQVU7WUFDUjtnQkFDRUMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUGhCLE1BQU1ZLE9BQU9LLE1BQU0sQ0FBQ3ZCO2dCQUNwQndCLGFBQWE7Z0JBQ2JDLGlCQUFpQjtZQUNuQjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQy9CLG1FQUFTQTtRQUFDZ0MsT0FBTztrQkFDaEIsNEVBQUNqQyxpREFBSUE7WUFBQ2EsTUFBTUE7WUFBTUksU0FBU0E7Ozs7Ozs7Ozs7O0FBR2pDO0dBOUNTWDtLQUFBQTtBQWdEVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0xpbmVDaGFydC5qcz85NjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgRmlsbGVyLFxuICBMZWdlbmQsXG59IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBUaXRsZUNhcmQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZHMvVGl0bGVDYXJkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgRmlsbGVyLFxuICBMZWdlbmRcbik7XG5cbmZ1bmN0aW9uIExpbmVDaGFydCgpIHtcbiAgY29uc3QgW2JhY2tlbmRSZXNwb25zZSwgc2V0QmFja2VuZFJlc3BvbnNlXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGRhdGEgdXNpbmcgQXhpb3NcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZWxsZXIvb3JkZXJzX3N0YXRzXCIsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRCYWNrZW5kUmVzcG9uc2UocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICBjb25zb2xlLmluZm8oXCJUb3RhbCBDb3N0IG9uIEp1bmUgPSBcIiArIGJhY2tlbmRSZXNwb25zZS5KdW5lKTtcblxuICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhiYWNrZW5kUmVzcG9uc2UpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICBsYWJlbDogXCJNT1wiLFxuICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKGJhY2tlbmRSZXNwb25zZSksXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig1MywgMTYyLCAyMzUpXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRpdGxlQ2FyZCB0aXRsZT17XCJNb250aGx5IE9yZGVyIFN0YXRzXCJ9PlxuICAgICAgPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICA8L1RpdGxlQ2FyZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJGaWxsZXIiLCJMZWdlbmQiLCJMaW5lIiwiVGl0bGVDYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInJlZ2lzdGVyIiwiTGluZUNoYXJ0IiwiYmFja2VuZFJlc3BvbnNlIiwic2V0QmFja2VuZFJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJpbmZvIiwiSnVuZSIsImxhYmVscyIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0cyIsImZpbGwiLCJsYWJlbCIsInZhbHVlcyIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/dashboard/components/LineChart.js\n"));

/***/ })

});