"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/menu/page",{

/***/ "(app-pages-browser)/./app/menu/page.js":
/*!**************************!*\
  !*** ./app/menu/page.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 10,\n            columnNumber: 16\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    console.log(data);\n    const groupedData = data.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            width: 1,\n            height: 1,\n            sx: {\n                backgroundColor: \"#f0f0f0\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            width: 1,\n                            height: \"100px\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            backgroundColor: \"#f0f0f0\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                width: \"75%\",\n                                overflow: \"hidden\",\n                                textAlign: \"center\",\n                                fontSize: \"35px\",\n                                fontWeight: \"600\",\n                                fontFamily: \"cursive\",\n                                color: \"#333\"\n                            },\n                            children: \"Şirket Adı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    Object.keys(groupedData).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            mt: 2,\n                            p: 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f9f9f9\",\n                                    border: \"1px solid #ddd\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        sx: {\n                                            borderBottom: \"1px solid #ddd\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            sx: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: groupedData[category].map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                sx: {\n                                                    margin: \"8px\",\n                                                    padding: \"16px\",\n                                                    backgroundColor: \"#fff\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        variant: \"h6\",\n                                                        sx: {\n                                                            fontWeight: \"bold\",\n                                                            mb: 1\n                                                        },\n                                                        children: product.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        sx: {\n                                                            mb: 1\n                                                        },\n                                                        children: product.content\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        variant: \"subtitle1\",\n                                                        children: product.price\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, this)\n                        }, category, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"D0RBs2WaDTV+SCx3glzShDZjjig=\", false, function() {\n    return [\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25EZXRhaWxzLCBBY2NvcmRpb25TdW1tYXJ5LCBCb3gsIENhcmQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgeyB1c2VHZXRQcm9kdWN0IH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VHZXRQcm9kdWN0J1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBtdXRhdGUgfSA9IHVzZUdldFByb2R1Y3QoKVxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCBncm91cGVkRGF0YSA9IGRhdGEucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFhY2NbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJveCB3aWR0aD17MX0gaGVpZ2h0PXsxfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YwZjBmMFwiIH19PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjBmMGYwXCIsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJjdXJzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+xZ5pcmtldCBBZMSxPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZERhdGEpLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjYXRlZ29yeX0gbXQ9ezJ9IHA9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNkZGRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT57Y2F0ZWdvcnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwZWREYXRhW2NhdGVnb3J5XS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gc3g9e3sgbWFyZ2luOiBcIjhweFwiLCBwYWRkaW5nOiBcIjE2cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1iOiAxIH19Pntwcm9kdWN0LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEgfX0+e3Byb2R1Y3QuY29udGVudH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj57cHJvZHVjdC5wcmljZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIkFjY29yZGlvbkRldGFpbHMiLCJBY2NvcmRpb25TdW1tYXJ5IiwiQm94IiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIkV4cGFuZE1vcmVJY29uIiwidXNlR2V0UHJvZHVjdCIsIlBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwibXV0YXRlIiwiZGl2IiwiY29uc29sZSIsImxvZyIsImdyb3VwZWREYXRhIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsImNhdGVnb3J5IiwicHVzaCIsIndpZHRoIiwiaGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3ZlcmZsb3ciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiY29sb3IiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibXQiLCJwIiwiYm9yZGVyIiwiZXhwYW5kSWNvbiIsImJvcmRlckJvdHRvbSIsImluZGV4IiwibWFyZ2luIiwicGFkZGluZyIsInZhcmlhbnQiLCJtYiIsInRpdGxlIiwiY29udGVudCIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.js\n"));

/***/ })

});