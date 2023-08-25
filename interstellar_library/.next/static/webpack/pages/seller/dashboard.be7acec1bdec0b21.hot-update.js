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

/***/ "./pages/components/dashboard/index.js":
/*!*********************************************!*\
  !*** ./pages/components/dashboard/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DashboardStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DashboardStats */ \"./pages/components/dashboard/components/DashboardStats.js\");\n/* harmony import */ var _components_AmountStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AmountStats */ \"./pages/components/dashboard/components/AmountStats.js\");\n/* harmony import */ var _components_PageStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PageStats */ \"./pages/components/dashboard/components/PageStats.js\");\n/* harmony import */ var _heroicons_react_24_outline_CircleStackIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline/CircleStackIcon */ \"./node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_CreditCardIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline/CreditCardIcon */ \"./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js\");\n/* harmony import */ var _components_UserChannels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserChannels */ \"./pages/components/dashboard/components/UserChannels.js\");\n/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LineChart */ \"./pages/components/dashboard/components/LineChart.js\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BarChart */ \"./pages/components/dashboard/components/BarChart.js\");\n/* harmony import */ var _components_DashboardTopBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/DashboardTopBar */ \"./pages/components/dashboard/components/DashboardTopBar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_headerSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/headerSlice */ \"./pages/components/common/headerSlice.js\");\n/* harmony import */ var _components_DoughnutChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/DoughnutChart */ \"./pages/components/dashboard/components/DoughnutChart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [current_Income, setCurrent_Income] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(\"\");\n    const [pending_delivery, setPending_delivery] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(\"\");\n    // Function to fetch all books from the API\n    const fetchCurrentIncome = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"http://localhost:3000/seller/monthly_income\", {\n                withCredentials: true\n            });\n            const income = response.data;\n            console.warn();\n            setCurrent_Income(income);\n            console.info(\"Current Income = \" + current_Income);\n            if (current_Income == null || current_Income == \"\") {\n                setCurrent_Income(\"0\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching Current Income:\", error);\n        }\n    };\n    // Function to fetch all books from the API\n    const fetchPendingDelivery = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"http://localhost:3000/seller/monthly_pending_orders\", {\n                withCredentials: true\n            });\n            const delivery = response.data;\n            console.warn(\"Response.data = \" + delivery);\n            setPending_delivery(delivery);\n            console.info(\"Current Pending Delivery = \" + pending_delivery);\n            if (pending_delivery == null || pending_delivery == \"\") {\n                setPending_delivery(\"0\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching Pending Delivery:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        fetchCurrentIncome();\n        fetchPendingDelivery();\n    }, []);\n    const statsData = [\n        {\n            title: \"Profit Current Month\",\n            value: \"$\" + current_Income,\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_CreditCardIcon__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                className: \"w-8 h-8\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 15\n            }, this),\n            description: \"Current month\"\n        },\n        {\n            title: \"Pending Delivery\",\n            value: pending_delivery,\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_CircleStackIcon__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                className: \"w-8 h-8\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 15\n            }, this),\n            description: \"50 in hot leads\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6\",\n                children: statsData.map((d, k)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardStats__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...d,\n                        colorIndex: k\n                    }, k, false, {\n                        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LineChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BarChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Advanced_WebTech_Codes\\\\NEST_JS_PROJECT\\\\Interstellar_Library_App\\\\interstellar_library\\\\pages\\\\components\\\\dashboard\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Dashboard, \"AS/ePOqd4T+y1EA+B2i1EGsWiF0=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNOO0FBQ0o7QUFFd0I7QUFDUjtBQUNZO0FBQ0Y7QUFDcEI7QUFDTjtBQUNGO0FBQ2M7QUFDakI7QUFDYTtBQUNBO0FBQ1Y7QUFDbEI7QUFJeEIsU0FBU2lCOztJQUNQLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osZ0RBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxrQkFBa0JDLG9CQUFvQixHQUFHTixnREFBUUEsQ0FBQztJQUV6RCwyQ0FBMkM7SUFDM0MsTUFBTU8scUJBQXFCO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1QLGtEQUFTLENBQzlCLCtDQUNBO2dCQUNFUyxpQkFBaUI7WUFDbkI7WUFFRixNQUFNQyxTQUFTSCxTQUFTSSxJQUFJO1lBQzVCQyxRQUFRQyxJQUFJO1lBQ1pWLGtCQUFrQk87WUFDbEJFLFFBQVFFLElBQUksQ0FBQyxzQkFBc0JaO1lBQ25DLElBQUlBLGtCQUFrQixRQUFRQSxrQkFBa0IsSUFBSTtnQkFDbERDLGtCQUFrQjtZQUNwQjtRQUNGLEVBQUUsT0FBT1ksT0FBTztZQUNkSCxRQUFRRyxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtJQUNGO0lBRUEsMkNBQTJDO0lBQzNDLE1BQU1DLHVCQUF1QjtRQUMzQixJQUFJO1lBQ0YsTUFBTVQsV0FBVyxNQUFNUCxrREFBUyxDQUM5Qix1REFDQTtnQkFDRVMsaUJBQWlCO1lBQ25CO1lBRUYsTUFBTVEsV0FBV1YsU0FBU0ksSUFBSTtZQUM5QkMsUUFBUUMsSUFBSSxDQUFDLHFCQUFtQkk7WUFDaENaLG9CQUFvQlk7WUFDcEJMLFFBQVFFLElBQUksQ0FBQyxnQ0FBZ0NWO1lBQzdDLElBQUlBLG9CQUFvQixRQUFRQSxvQkFBb0IsSUFBSTtnQkFDdERDLG9CQUFvQjtZQUN0QjtRQUNGLEVBQUUsT0FBT1UsT0FBTztZQUNkSCxRQUFRRyxLQUFLLENBQUMsb0NBQW9DQTtRQUNwRDtJQUNGO0lBRUFqQixpREFBU0EsQ0FBQztRQUNSUTtRQUNBVTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLFlBQVk7UUFDaEI7WUFDRUMsT0FBTztZQUNQQyxPQUFPLE1BQU1sQjtZQUNibUIsb0JBQU0sOERBQUMvQixtRkFBY0E7Z0JBQUNnQyxXQUFVOzs7Ozs7WUFDaENDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLE9BQU87WUFDUEMsT0FBT2hCO1lBQ1BpQixvQkFBTSw4REFBQ2hDLG9GQUFlQTtnQkFBQ2lDLFdBQVU7Ozs7OztZQUNqQ0MsYUFBYTtRQUNmO0tBQ0Q7SUFFRCxxQkFDRTs7MEJBRUUsOERBQUNDO2dCQUFJRixXQUFVOzBCQUNaSixVQUFVTyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7b0JBQ2pCLHFCQUFPLDhEQUFDM0Msa0VBQWNBO3dCQUFVLEdBQUcwQyxDQUFDO3dCQUFFRSxZQUFZRDt1QkFBdEJBOzs7OztnQkFDOUI7Ozs7OzswQkFJRiw4REFBQ0g7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDOUIsNkRBQVNBOzs7OztrQ0FDViw4REFBQ0MsNERBQVFBOzs7Ozs7Ozs7Ozs7O0FBSWpCO0dBbEZTUTtLQUFBQTtBQW9GWCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC9pbmRleC5qcz8zMDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXNoYm9hcmRTdGF0cyBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkU3RhdHMnXG5pbXBvcnQgQW1vdW50U3RhdHMgZnJvbSAnLi9jb21wb25lbnRzL0Ftb3VudFN0YXRzJ1xuaW1wb3J0IFBhZ2VTdGF0cyBmcm9tICcuL2NvbXBvbmVudHMvUGFnZVN0YXRzJ1xuXG5pbXBvcnQgVXNlckdyb3VwSWNvbiAgZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lL1VzZXJHcm91cEljb24nXG5pbXBvcnQgVXNlcnNJY29uICBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUvVXNlcnNJY29uJ1xuaW1wb3J0IENpcmNsZVN0YWNrSWNvbiAgZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lL0NpcmNsZVN0YWNrSWNvbidcbmltcG9ydCBDcmVkaXRDYXJkSWNvbiAgZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lL0NyZWRpdENhcmRJY29uJ1xuaW1wb3J0IFVzZXJDaGFubmVscyBmcm9tICcuL2NvbXBvbmVudHMvVXNlckNoYW5uZWxzJ1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NvbXBvbmVudHMvTGluZUNoYXJ0J1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9CYXJDaGFydCdcbmltcG9ydCBEYXNoYm9hcmRUb3BCYXIgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZFRvcEJhcidcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3Nob3dOb3RpZmljYXRpb259IGZyb20gJy4uL2NvbW1vbi9oZWFkZXJTbGljZSdcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9Eb3VnaG51dENoYXJ0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5cblxuICBmdW5jdGlvbiBEYXNoYm9hcmQoKXtcbiAgICBjb25zdCBbY3VycmVudF9JbmNvbWUsIHNldEN1cnJlbnRfSW5jb21lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwZW5kaW5nX2RlbGl2ZXJ5LCBzZXRQZW5kaW5nX2RlbGl2ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gZmV0Y2ggYWxsIGJvb2tzIGZyb20gdGhlIEFQSVxuICAgIGNvbnN0IGZldGNoQ3VycmVudEluY29tZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlbGxlci9tb250aGx5X2luY29tZVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGluY29tZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUud2FybigpXG4gICAgICAgIHNldEN1cnJlbnRfSW5jb21lKGluY29tZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIkN1cnJlbnQgSW5jb21lID0gXCIgKyBjdXJyZW50X0luY29tZSk7XG4gICAgICAgIGlmIChjdXJyZW50X0luY29tZSA9PSBudWxsIHx8IGN1cnJlbnRfSW5jb21lID09IFwiXCIpIHtcbiAgICAgICAgICBzZXRDdXJyZW50X0luY29tZShcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBDdXJyZW50IEluY29tZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBmZXRjaCBhbGwgYm9va3MgZnJvbSB0aGUgQVBJXG4gICAgY29uc3QgZmV0Y2hQZW5kaW5nRGVsaXZlcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZWxsZXIvbW9udGhseV9wZW5kaW5nX29yZGVyc1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVzcG9uc2UuZGF0YSA9IFwiK2RlbGl2ZXJ5KVxuICAgICAgICBzZXRQZW5kaW5nX2RlbGl2ZXJ5KGRlbGl2ZXJ5KTtcbiAgICAgICAgY29uc29sZS5pbmZvKFwiQ3VycmVudCBQZW5kaW5nIERlbGl2ZXJ5ID0gXCIgKyBwZW5kaW5nX2RlbGl2ZXJ5KTtcbiAgICAgICAgaWYgKHBlbmRpbmdfZGVsaXZlcnkgPT0gbnVsbCB8fCBwZW5kaW5nX2RlbGl2ZXJ5ID09IFwiXCIpIHtcbiAgICAgICAgICBzZXRQZW5kaW5nX2RlbGl2ZXJ5KFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBlbmRpbmcgRGVsaXZlcnk6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoQ3VycmVudEluY29tZSgpO1xuICAgICAgZmV0Y2hQZW5kaW5nRGVsaXZlcnkoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzdGF0c0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlByb2ZpdCBDdXJyZW50IE1vbnRoXCIsXG4gICAgICAgIHZhbHVlOiBcIiRcIiArIGN1cnJlbnRfSW5jb21lLFxuICAgICAgICBpY29uOiA8Q3JlZGl0Q2FyZEljb24gY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IG1vbnRoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJQZW5kaW5nIERlbGl2ZXJ5XCIsXG4gICAgICAgIHZhbHVlOiBwZW5kaW5nX2RlbGl2ZXJ5LFxuICAgICAgICBpY29uOiA8Q2lyY2xlU3RhY2tJY29uIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiNTAgaW4gaG90IGxlYWRzXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgey8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERpZmZlcmVudCBzdGF0cyBjb250ZW50IDEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy00IG10LTIgbWQ6Z3JpZC1jb2xzLTIgZ3JpZC1jb2xzLTEgZ2FwLTZcIj5cbiAgICAgICAgICB7c3RhdHNEYXRhLm1hcCgoZCwgaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxEYXNoYm9hcmRTdGF0cyBrZXk9e2t9IHsuLi5kfSBjb2xvckluZGV4PXtrfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERpZmZlcmVudCBjaGFydHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIG10LTQgZ3JpZC1jb2xzLTEgZ2FwLTZcIj5cbiAgICAgICAgICA8TGluZUNoYXJ0IC8+XG4gICAgICAgICAgPEJhckNoYXJ0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiXSwibmFtZXMiOlsiRGFzaGJvYXJkU3RhdHMiLCJBbW91bnRTdGF0cyIsIlBhZ2VTdGF0cyIsIlVzZXJHcm91cEljb24iLCJVc2Vyc0ljb24iLCJDaXJjbGVTdGFja0ljb24iLCJDcmVkaXRDYXJkSWNvbiIsIlVzZXJDaGFubmVscyIsIkxpbmVDaGFydCIsIkJhckNoYXJ0IiwiRGFzaGJvYXJkVG9wQmFyIiwidXNlRGlzcGF0Y2giLCJzaG93Tm90aWZpY2F0aW9uIiwiRG91Z2hudXRDaGFydCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJEYXNoYm9hcmQiLCJjdXJyZW50X0luY29tZSIsInNldEN1cnJlbnRfSW5jb21lIiwicGVuZGluZ19kZWxpdmVyeSIsInNldFBlbmRpbmdfZGVsaXZlcnkiLCJmZXRjaEN1cnJlbnRJbmNvbWUiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImluY29tZSIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsImluZm8iLCJlcnJvciIsImZldGNoUGVuZGluZ0RlbGl2ZXJ5IiwiZGVsaXZlcnkiLCJzdGF0c0RhdGEiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwibWFwIiwiZCIsImsiLCJjb2xvckluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/dashboard/index.js\n"));

/***/ })

});