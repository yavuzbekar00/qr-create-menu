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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 10,\n            columnNumber: 16\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    console.log(data);\n    const groupedData = data.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            width: 1,\n            height: 1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            width: 1,\n                            height: \"100px\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            backgroundColor: \"#f0f0f0\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                width: \"75%\",\n                                overflow: \"hidden\",\n                                textAlign: \"center\",\n                                fontSize: \"35px\",\n                                fontWeight: \"600\",\n                                fontFamily: \"cursive\",\n                                color: \"#333\"\n                            },\n                            children: \"Şirket Adı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    Object.keys(groupedData).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            mt: 2,\n                            sx: {\n                                paddingLeft: 2,\n                                paddingRight: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f9f9f9\",\n                                    border: \"1px solid #ddd\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        sx: {\n                                            borderBottom: \"1px solid #ddd\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            sx: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: groupedData[category].map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                sx: {\n                                                    margin: \"8px\",\n                                                    padding: \"16px\",\n                                                    backgroundColor: \"#fff\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        variant: \"h6\",\n                                                        sx: {\n                                                            fontWeight: \"bold\",\n                                                            mb: 1\n                                                        },\n                                                        children: product.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        sx: {\n                                                            mb: 1\n                                                        },\n                                                        children: product.content\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        variant: \"subtitle1\",\n                                                        children: product.price\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, this)\n                        }, category, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"D0RBs2WaDTV+SCx3glzShDZjjig=\", false, function() {\n    return [\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvbkRldGFpbHMsIEFjY29yZGlvblN1bW1hcnksIEJveCwgQ2FyZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcbmltcG9ydCB7IHVzZUdldFByb2R1Y3QgfSBmcm9tICdAL3NlcnZpY2VzL3VzZUdldFByb2R1Y3QnXG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIG11dGF0ZSB9ID0gdXNlR2V0UHJvZHVjdCgpXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgfVxuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IGdyb3VwZWREYXRhID0gZGF0YS5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4ge1xuICAgICAgICBpZiAoIWFjY1twcm9kdWN0LmNhdGVnb3J5XSkge1xuICAgICAgICAgICAgYWNjW3Byb2R1Y3QuY2F0ZWdvcnldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW3Byb2R1Y3QuY2F0ZWdvcnldLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxfSBoZWlnaHQ9ezF9PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjBmMGYwXCIsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJjdXJzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+xZ5pcmtldCBBZMSxPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZERhdGEpLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjYXRlZ29yeX0gbXQ9ezJ9IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN4PXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjlmOWY5XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZGRkXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+e2NhdGVnb3J5fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cGVkRGF0YVtjYXRlZ29yeV0ubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHN4PXt7IG1hcmdpbjogXCI4cHhcIiwgcGFkZGluZzogXCIxNnB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYjogMSB9fT57cHJvZHVjdC50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxIH19Pntwcm9kdWN0LmNvbnRlbnR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+e3Byb2R1Y3QucHJpY2V9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkJveCIsIkNhcmQiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJFeHBhbmRNb3JlSWNvbiIsInVzZUdldFByb2R1Y3QiLCJQYWdlIiwiZGF0YSIsImlzTG9hZGluZyIsIm11dGF0ZSIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJncm91cGVkRGF0YSIsInJlZHVjZSIsImFjYyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsInB1c2giLCJ3aWR0aCIsImhlaWdodCIsInN4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm10IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXIiLCJleHBhbmRJY29uIiwiYm9yZGVyQm90dG9tIiwiaW5kZXgiLCJtYXJnaW4iLCJwYWRkaW5nIiwidmFyaWFudCIsIm1iIiwidGl0bGUiLCJjb250ZW50IiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.js\n"));

/***/ })

});