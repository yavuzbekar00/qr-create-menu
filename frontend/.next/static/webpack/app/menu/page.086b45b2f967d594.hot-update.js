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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n/* harmony import */ var _back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back.jpg */ \"(app-pages-browser)/./app/menu/back.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 11,\n            columnNumber: 16\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    console.log(data);\n    const groupedData = data.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            backgroundImage: \"url(./back.jpg)\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            position: \"absolute\",\n            width: \"100%\",\n            height: \"100%\",\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            width: 1,\n            height: 1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            width: 1,\n                            height: \"100px\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                width: \"75%\",\n                                overflow: \"hidden\",\n                                textAlign: \"center\",\n                                fontSize: \"35px\",\n                                fontWeight: \"600\",\n                                fontFamily: \"cursive\",\n                                color: \"#333\"\n                            },\n                            children: \"Şirket Adı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    Object.keys(groupedData).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mt: 2,\n                            sx: {\n                                paddingLeft: 2,\n                                paddingRight: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f9f9f9\",\n                                    border: \"1px solid #ddd\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        sx: {\n                                            borderBottom: \"1px solid #ddd\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            sx: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: category.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        children: groupedData[category].map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                sx: {\n                                                    margin: \"0 0 20px 0\",\n                                                    padding: \"16px\",\n                                                    backgroundColor: \"#fff\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        variant: \"h6\",\n                                                        sx: {\n                                                            fontWeight: \"bold\",\n                                                            mb: 1\n                                                        },\n                                                        children: product.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        sx: {\n                                                            mb: 1\n                                                        },\n                                                        children: product.content\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        variant: \"subtitle1\",\n                                                        children: [\n                                                            product.price,\n                                                            \" ₺\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 29\n                            }, this)\n                        }, category.toUpperCase(), false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"D0RBs2WaDTV+SCx3glzShDZjjig=\", false, function() {\n    return [\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBMkJ0RDtHQTFFU3ZDOztRQUMrQkYsa0VBQWFBOzs7S0FENUNFO0FBNEVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tZW51L3BhZ2UuanM/MzhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25EZXRhaWxzLCBBY2NvcmRpb25TdW1tYXJ5LCBCb3gsIENhcmQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgeyB1c2VHZXRQcm9kdWN0IH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VHZXRQcm9kdWN0J1xuaW1wb3J0IEJhY2tJbWFnZSBmcm9tICcuL2JhY2suanBnJ1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBtdXRhdGUgfSA9IHVzZUdldFByb2R1Y3QoKVxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCBncm91cGVkRGF0YSA9IGRhdGEucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFhY2NbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoLi9iYWNrLmpwZyknLCAvLyBLdWxsYW5tYWsgaXN0ZWRpxJ9pbml6IHJlc21pbiBVUkwnc2luaSBla2xleWluXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxfSBoZWlnaHQ9ezF9PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcImN1cnNpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT7Fnmlya2V0IEFkxLE8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhncm91cGVkRGF0YSkubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9IG10PXsyfSBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y5ZjlmOVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2RkZFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PntjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cGVkRGF0YVtjYXRlZ29yeV0ubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHN4PXt7IG1hcmdpbjogXCIwIDAgMjBweCAwXCIsIHBhZGRpbmc6IFwiMTZweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWI6IDEgfX0+e3Byb2R1Y3QudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMSB9fT57cHJvZHVjdC5jb250ZW50fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPntwcm9kdWN0LnByaWNlfSDigro8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIkFjY29yZGlvbkRldGFpbHMiLCJBY2NvcmRpb25TdW1tYXJ5IiwiQm94IiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIkV4cGFuZE1vcmVJY29uIiwidXNlR2V0UHJvZHVjdCIsIkJhY2tJbWFnZSIsIlBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwibXV0YXRlIiwiZGl2IiwiY29uc29sZSIsImxvZyIsImdyb3VwZWREYXRhIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsImNhdGVnb3J5IiwicHVzaCIsInN4IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm10IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJleHBhbmRJY29uIiwiYm9yZGVyQm90dG9tIiwidG9VcHBlckNhc2UiLCJpbmRleCIsIm1hcmdpbiIsInBhZGRpbmciLCJ2YXJpYW50IiwibWIiLCJ0aXRsZSIsImNvbnRlbnQiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.js\n"));

/***/ })

});