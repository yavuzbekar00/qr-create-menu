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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 10,\n            columnNumber: 16\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    const groupedData = data.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            width: 1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            width: 1,\n                            height: \"100px\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            backgroundColor: \"#f0f0f0\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                width: \"75%\",\n                                overflow: \"hidden\",\n                                textAlign: \"center\",\n                                fontSize: \"35px\",\n                                fontWeight: \"600\",\n                                fontFamily: \"cursive\",\n                                color: \"#333\"\n                            },\n                            children: \"Şirket Adı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    Object.keys(groupedData).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            mt: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f9f9f9\",\n                                    border: \"1px solid #ddd\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        sx: {\n                                            borderBottom: \"1px solid #ddd\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            sx: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: groupedData[category].map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                sx: {\n                                                    margin: \"8px\",\n                                                    padding: \"8px\",\n                                                    backgroundColor: \"#fff\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    children: product.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, index, false, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, this)\n                        }, category, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"D0RBs2WaDTV+SCx3glzShDZjjig=\", false, function() {\n    return [\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tZW51L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMkU7QUFDekM7QUFDSDtBQUV6RCxTQUFTUzs7SUFDTCxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBR0osc0VBQWFBO0lBRWpELElBQUlHLFdBQVc7UUFDWCxxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLElBQUksQ0FBQ0gsTUFBTTtRQUNQLE9BQU87SUFDWDtJQUVBLE1BQU1JLGNBQWNKLEtBQUtLLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUNsQyxJQUFJLENBQUNELEdBQUcsQ0FBQ0MsUUFBUUMsUUFBUSxDQUFDLEVBQUU7WUFDeEJGLEdBQUcsQ0FBQ0MsUUFBUUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUM5QjtRQUNBRixHQUFHLENBQUNDLFFBQVFDLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUNGO1FBQzNCLE9BQU9EO0lBQ1gsR0FBRyxDQUFDO0lBRUoscUJBQ0ksOERBQUNaLDJJQUFHQTtrQkFDQSw0RUFBQ0EsMklBQUdBO1lBQUNnQixPQUFPO3NCQUNSLDRFQUFDaEIsMklBQUdBOztrQ0FDQSw4REFBQ0EsMklBQUdBO3dCQUFDaUIsSUFBSTs0QkFDTEQsT0FBTzs0QkFDUEUsUUFBUTs0QkFDUkMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsZ0JBQWdCOzRCQUNoQkMsaUJBQWlCO3dCQUNyQjtrQ0FDSSw0RUFBQ3BCLDJJQUFVQTs0QkFBQ2UsSUFBSTtnQ0FDWkQsT0FBTztnQ0FDUE8sVUFBVTtnQ0FDVkMsV0FBVztnQ0FDWEMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWkMsWUFBWTtnQ0FDWkMsT0FBTzs0QkFDWDtzQ0FBRzs7Ozs7Ozs7Ozs7b0JBR05DLE9BQU9DLElBQUksQ0FBQ3BCLGFBQWFxQixHQUFHLENBQUMsQ0FBQ2pCLHlCQUMzQiw4REFBQ2QsMklBQUdBOzRCQUFnQmdDLElBQUk7c0NBQ3BCLDRFQUFDbkMsMklBQVNBO2dDQUFDb0IsSUFBSTtvQ0FBRUssaUJBQWlCO29DQUFXVyxRQUFRO2dDQUFpQjs7a0RBQ2xFLDhEQUFDbEMsMklBQWdCQTt3Q0FDYm1DLDBCQUFZLDhEQUFDL0Isc0VBQWNBO3dDQUMzQmMsSUFBSTs0Q0FBRWtCLGNBQWM7d0NBQWlCO2tEQUVyQyw0RUFBQ2pDLDJJQUFVQTs0Q0FBQ2UsSUFBSTtnREFBRVMsWUFBWTs0Q0FBTztzREFBSVo7Ozs7Ozs7Ozs7O2tEQUU3Qyw4REFBQ2hCLDJJQUFnQkE7a0RBQ1pZLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDaUIsR0FBRyxDQUFDLENBQUNsQixTQUFTdUIsc0JBQ2pDLDhEQUFDbkMsMklBQUlBO2dEQUFhZ0IsSUFBSTtvREFBRW9CLFFBQVE7b0RBQU9DLFNBQVM7b0RBQU9oQixpQkFBaUI7Z0RBQU87MERBQzNFLDRFQUFDcEIsMklBQVVBOzhEQUFFVyxRQUFRMEIsS0FBSzs7Ozs7OytDQURuQkg7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBVmpCdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCbEM7R0FqRVNUOztRQUMrQkQsa0VBQWFBOzs7S0FENUNDO0FBbUVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tZW51L3BhZ2UuanM/MzhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25EZXRhaWxzLCBBY2NvcmRpb25TdW1tYXJ5LCBCb3gsIENhcmQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmUnO1xuaW1wb3J0IHsgdXNlR2V0UHJvZHVjdCB9IGZyb20gJ0Avc2VydmljZXMvdXNlR2V0UHJvZHVjdCc7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIG11dGF0ZSB9ID0gdXNlR2V0UHJvZHVjdCgpO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cGVkRGF0YSA9IGRhdGEucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFhY2NbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxfT5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YwZjBmMFwiLCAvLyBSZW5rIGVrbGVkaW1cbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImN1cnNpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsIC8vIFJlbmsgZMO8emVubGVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+xZ5pcmtldCBBZMSxPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZERhdGEpLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjYXRlZ29yeX0gbXQ9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNkZGRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT57Y2F0ZWdvcnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwZWREYXRhW2NhdGVnb3J5XS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gc3g9e3sgbWFyZ2luOiBcIjhweFwiLCBwYWRkaW5nOiBcIjhweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57cHJvZHVjdC50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvblN1bW1hcnkiLCJCb3giLCJDYXJkIiwiVHlwb2dyYXBoeSIsIkV4cGFuZE1vcmVJY29uIiwidXNlR2V0UHJvZHVjdCIsIlBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwibXV0YXRlIiwiZGl2IiwiZ3JvdXBlZERhdGEiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwid2lkdGgiLCJzeCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJtdCIsImJvcmRlciIsImV4cGFuZEljb24iLCJib3JkZXJCb3R0b20iLCJpbmRleCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.js\n"));

/***/ })

});