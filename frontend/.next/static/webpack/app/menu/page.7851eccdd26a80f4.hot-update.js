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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Box,Card,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n/* harmony import */ var _back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back.jpg */ \"(app-pages-browser)/./app/menu/back.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct)();\n    const [inputData, setInputData] = useState(()=>{\n        const storedData = localStorage ? JSON.parse(localStorage.getItem(\"inputData\")) : null;\n        return storedData || {\n            firstName: \"\",\n            lastName: \"\",\n            phoneNumber: \"\",\n            email: \"\",\n            companyName: \"\",\n            companyAddress: \"\",\n            companyWebsite: \"\"\n        };\n    });\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 25,\n            columnNumber: 16\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    console.log(data);\n    const groupedData = data.reduce((acc, product)=>{\n        if (!acc[product.category]) {\n            acc[product.category] = [];\n        }\n        acc[product.category].push(product);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            position: \"absolute\",\n            width: \"100%\",\n            height: \"100%\",\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            width: 1,\n            height: 1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            width: 1,\n                            height: \"100px\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                width: \"75%\",\n                                overflow: \"hidden\",\n                                textAlign: \"center\",\n                                fontSize: \"35px\",\n                                fontWeight: \"600\",\n                                fontFamily: \"cursive\",\n                                color: \"#333\"\n                            },\n                            children: \"Şirket Adı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    Object.keys(groupedData).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            mt: 2,\n                            sx: {\n                                paddingLeft: 2,\n                                paddingRight: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    backgroundColor: \"#f9f9f9\",\n                                    border: \"1px solid #ddd\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                                        sx: {\n                                            borderBottom: \"1px solid #ddd\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            sx: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: category.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        children: groupedData[category].map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                sx: {\n                                                    margin: \"0 0 20px 0\",\n                                                    padding: \"16px\",\n                                                    backgroundColor: \"#fff\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        variant: \"h6\",\n                                                        sx: {\n                                                            fontWeight: \"bold\",\n                                                            mb: 1\n                                                        },\n                                                        children: product.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        sx: {\n                                                            mb: 1\n                                                        },\n                                                        children: product.content\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        variant: \"subtitle1\",\n                                                        children: [\n                                                            product.price,\n                                                            \" ₺\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 29\n                            }, this)\n                        }, category.toUpperCase(), false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 25\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/menu/page.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"VYbDFcbgTptvaoAFKbUCyqG3kgc=\", false, function() {\n    return [\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_2__.useGetProduct\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDMUUsOERBQUNoRSwySUFBVUE7d0RBQUNpQyxJQUFJOzREQUFFOEIsSUFBSTt3REFBRTtrRUFBSWpDLFFBQVFtQyxPQUFPOzs7Ozs7a0VBQzNDLDhEQUFDakUsMklBQVVBO3dEQUFDOEQsU0FBUTs7NERBQWFoQyxRQUFRb0MsS0FBSzs0REFBQzs7Ozs7Ozs7K0NBSHhDUDs7Ozs7Ozs7Ozs7Ozs7OzsyQkFiakI1QixTQUFTMkIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJ0RDtHQXZGU3JEOztRQUMrQkYsa0VBQWFBOzs7S0FENUNFO0FBeUZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tZW51L3BhZ2UuanM/MzhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25EZXRhaWxzLCBBY2NvcmRpb25TdW1tYXJ5LCBCb3gsIENhcmQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgeyB1c2VHZXRQcm9kdWN0IH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VHZXRQcm9kdWN0J1xuaW1wb3J0IEJhY2tJbWFnZSBmcm9tICcuL2JhY2suanBnJ1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBtdXRhdGUgfSA9IHVzZUdldFByb2R1Y3QoKVxuICAgIGNvbnN0IFtpbnB1dERhdGEsIHNldElucHV0RGF0YV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnB1dERhdGEnKSkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiBzdG9yZWREYXRhIHx8IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICAgICAgICBjb21wYW55QWRkcmVzczogJycsXG4gICAgICAgICAgICBjb21wYW55V2Vic2l0ZTogJycsXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICB9XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgZ3JvdXBlZERhdGEgPSBkYXRhLnJlZHVjZSgoYWNjLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmICghYWNjW3Byb2R1Y3QuY2F0ZWdvcnldKSB7XG4gICAgICAgICAgICBhY2NbcHJvZHVjdC5jYXRlZ29yeV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2NbcHJvZHVjdC5jYXRlZ29yeV0ucHVzaChwcm9kdWN0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEJveCB3aWR0aD17MX0gaGVpZ2h0PXsxfT5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJjdXJzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+xZ5pcmtldCBBZMSxPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZERhdGEpLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBtdD17Mn0gc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZjlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNkZGRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT57Y2F0ZWdvcnkudG9VcHBlckNhc2UoKX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXBlZERhdGFbY2F0ZWdvcnldLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSBzeD17eyBtYXJnaW46IFwiMCAwIDIwcHggMFwiLCBwYWRkaW5nOiBcIjE2cHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1iOiAxIH19Pntwcm9kdWN0LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEgfX0+e3Byb2R1Y3QuY29udGVudH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj57cHJvZHVjdC5wcmljZX0g4oK6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkJveCIsIkNhcmQiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJFeHBhbmRNb3JlSWNvbiIsInVzZUdldFByb2R1Y3QiLCJCYWNrSW1hZ2UiLCJQYWdlIiwiZGF0YSIsImlzTG9hZGluZyIsIm11dGF0ZSIsImlucHV0RGF0YSIsInNldElucHV0RGF0YSIsInVzZVN0YXRlIiwic3RvcmVkRGF0YSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lTnVtYmVyIiwiZW1haWwiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwiY29tcGFueVdlYnNpdGUiLCJkaXYiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBlZERhdGEiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwic3giLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiY29sb3IiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibXQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImV4cGFuZEljb24iLCJib3JkZXJCb3R0b20iLCJ0b1VwcGVyQ2FzZSIsImluZGV4IiwibWFyZ2luIiwicGFkZGluZyIsInZhcmlhbnQiLCJtYiIsInRpdGxlIiwiY29udGVudCIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/menu/page.js\n"));

/***/ })

});