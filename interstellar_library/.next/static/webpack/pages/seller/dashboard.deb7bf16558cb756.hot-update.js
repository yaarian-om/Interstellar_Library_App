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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Cards/TitleCard */ \"./pages/components/Cards/TitleCard.js\");\n\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction LineChart() {\n    const options = {\n        responsive: true,\n        plugins: {\n            legend: {\n                position: \"top\"\n            }\n        }\n    };\n    const backendResponse = {\n        January: 0,\n        February: 0,\n        March: 0,\n        April: 0,\n        May: 0,\n        June: 1,\n        July: 0,\n        August: 4,\n        September: 0,\n        October: 0,\n        November: 0,\n        December: 0\n    };\n    // const [orders, setOrders] = useState({});\n    // // Function to fetch all books from the API\n    // const fetchOrderStats = async () => {\n    //   try {\n    //     const response = await axios.get(\"localhost:3000/seller/orders_stats\", {\n    //       withCredentials: true,\n    //     });\n    //     const res_orders = response.data;\n    //     setOrders(res_orders);\n    //     console.info(\"Orders = \" + orders);\n    //     console.info(\"Orders January = \" + orders.January);\n    //     if (current_Income == null || current_Income == \"\") {\n    //       setOrders(\"0\");\n    //     }\n    //   } catch (error) {\n    //     console.error(\"Error fetching Yearly order Stats:\", error);\n    //   }\n    // };\n    // useEffect(() => {\n    //   fetchOrderStats();\n    // }, []);\n    const labels = Object.keys(backendResponse);\n    const data = {\n        labels,\n        datasets: [\n            {\n                fill: true,\n                label: \"MAU\",\n                data: Object.values(orders),\n                borderColor: \"rgb(53, 162, 235)\",\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_TitleCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Monthly Active Users (in K)\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\LineChart.js\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\components\\\\LineChart.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_c = LineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart);\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9jb21wb25lbnRzL0xpbmVDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFXUjtBQUNxQjtBQUNxQjtBQUNoQjtBQUNsQjtBQUUxQkUsMkNBQU9BLENBQUNjLFFBQVEsQ0FDZGIsbURBQWFBLEVBQ2JDLGlEQUFXQSxFQUNYQyxrREFBWUEsRUFDWkMsaURBQVdBLEVBQ1hDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BLEVBQ05DLDRDQUFNQTtBQUdSLFNBQVNPO0lBQ1AsTUFBTUMsVUFBVTtRQUNkQyxZQUFZO1FBQ1pDLFNBQVM7WUFDUEMsUUFBUTtnQkFDTkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLGtCQUFrQjtRQUN0QkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUtBLDRDQUE0QztJQUU1Qyw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDViwrRUFBK0U7SUFDL0UsK0JBQStCO0lBQy9CLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQywwREFBMEQ7SUFDMUQsNERBQTREO0lBQzVELHdCQUF3QjtJQUN4QixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtFQUFrRTtJQUNsRSxNQUFNO0lBQ04sS0FBSztJQUdMLG9CQUFvQjtJQUVwQix1QkFBdUI7SUFDdkIsVUFBVTtJQVFWLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ2Y7SUFDM0IsTUFBTWdCLE9BQU87UUFDWEg7UUFDQUksVUFBVTtZQUNSO2dCQUNFQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQSCxNQUFNRixPQUFPTSxNQUFNLENBQUNDO2dCQUNwQkMsYUFBYTtnQkFDYkMsaUJBQWlCO1lBQ25CO1NBQ0Q7SUFDSDtJQU1BLHFCQUNFLDhEQUFDbEMsbUVBQVNBO1FBQUNtQyxPQUFPO2tCQUNoQiw0RUFBQ3BDLGlEQUFJQTtZQUFDNEIsTUFBTUE7WUFBTXJCLFNBQVNBOzs7Ozs7Ozs7OztBQUdqQztLQW5GU0Q7QUFxRlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9kYXNoYm9hcmQvY29tcG9uZW50cy9MaW5lQ2hhcnQuanM/OTYyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBMaW5lRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIEZpbGxlcixcbiAgTGVnZW5kLFxufSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgVGl0bGVDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRzL1RpdGxlQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgUG9pbnRFbGVtZW50LFxuICBMaW5lRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIEZpbGxlcixcbiAgTGVnZW5kXG4pO1xuXG5mdW5jdGlvbiBMaW5lQ2hhcnQoKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0ge1xuICAgIEphbnVhcnk6IDAsXG4gICAgRmVicnVhcnk6IDAsXG4gICAgTWFyY2g6IDAsXG4gICAgQXByaWw6IDAsXG4gICAgTWF5OiAwLFxuICAgIEp1bmU6IDEsXG4gICAgSnVseTogMCxcbiAgICBBdWd1c3Q6IDQsXG4gICAgU2VwdGVtYmVyOiAwLFxuICAgIE9jdG9iZXI6IDAsXG4gICAgTm92ZW1iZXI6IDAsXG4gICAgRGVjZW1iZXI6IDAsXG4gIH07XG5cblxuICBcblxuICAvLyBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoe30pO1xuXG4gIC8vIC8vIEZ1bmN0aW9uIHRvIGZldGNoIGFsbCBib29rcyBmcm9tIHRoZSBBUElcbiAgLy8gY29uc3QgZmV0Y2hPcmRlclN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImxvY2FsaG9zdDozMDAwL3NlbGxlci9vcmRlcnNfc3RhdHNcIiwge1xuICAvLyAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGNvbnN0IHJlc19vcmRlcnMgPSByZXNwb25zZS5kYXRhO1xuICAvLyAgICAgc2V0T3JkZXJzKHJlc19vcmRlcnMpO1xuICAvLyAgICAgY29uc29sZS5pbmZvKFwiT3JkZXJzID0gXCIgKyBvcmRlcnMpO1xuICAvLyAgICAgY29uc29sZS5pbmZvKFwiT3JkZXJzIEphbnVhcnkgPSBcIiArIG9yZGVycy5KYW51YXJ5KTtcbiAgLy8gICAgIGlmIChjdXJyZW50X0luY29tZSA9PSBudWxsIHx8IGN1cnJlbnRfSW5jb21lID09IFwiXCIpIHtcbiAgLy8gICAgICAgc2V0T3JkZXJzKFwiMFwiKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFllYXJseSBvcmRlciBTdGF0czpcIiwgZXJyb3IpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgLy8gICBmZXRjaE9yZGVyU3RhdHMoKTtcbiAgLy8gfSwgW10pO1xuXG5cblxuXG5cblxuXG4gIGNvbnN0IGxhYmVscyA9IE9iamVjdC5rZXlzKGJhY2tlbmRSZXNwb25zZSk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgIGxhYmVsOiBcIk1BVVwiLFxuICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKG9yZGVycyksXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig1MywgMTYyLCAyMzUpXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8VGl0bGVDYXJkIHRpdGxlPXtcIk1vbnRobHkgQWN0aXZlIFVzZXJzIChpbiBLKVwifT5cbiAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgPC9UaXRsZUNhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiRmlsbGVyIiwiTGVnZW5kIiwiTGluZSIsIlRpdGxlQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJyZWdpc3RlciIsIkxpbmVDaGFydCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYmFja2VuZFJlc3BvbnNlIiwiSmFudWFyeSIsIkZlYnJ1YXJ5IiwiTWFyY2giLCJBcHJpbCIsIk1heSIsIkp1bmUiLCJKdWx5IiwiQXVndXN0IiwiU2VwdGVtYmVyIiwiT2N0b2JlciIsIk5vdmVtYmVyIiwiRGVjZW1iZXIiLCJsYWJlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRhdGFzZXRzIiwiZmlsbCIsImxhYmVsIiwidmFsdWVzIiwib3JkZXJzIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/dashboard/components/LineChart.js\n"));

/***/ })

});