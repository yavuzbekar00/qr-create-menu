"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.js":
/*!*******************************!*\
  !*** ./app/dashboard/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Sidebar */ \"(app-pages-browser)/./Components/Sidebar.js\");\n/* harmony import */ var _barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Breadcrumbs,Button,Card,IconButton,Link,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Breadcrumbs,Button,Card,IconButton,Link,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Breadcrumbs,Button,Card,IconButton,Link,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Navbar */ \"(app-pages-browser)/./Components/Navbar.js\");\n/* harmony import */ var _mui_icons_material_QrCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/QrCode */ \"(app-pages-browser)/./node_modules/@mui/icons-material/QrCode.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_useGetProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/useGetProduct */ \"(app-pages-browser)/./services/useGetProduct.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const inputData = JSON.parse(localStorage.getItem(\"inputData\"));\n    const { data, isLoading, mutate } = (0,_services_useGetProduct__WEBPACK_IMPORTED_MODULE_5__.useGetProduct)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"row\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        zIndex: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        zIndex: 1,\n                        ml: 35,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            p: 10,\n                            mt: 6,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    fontSize: 40,\n                                    fontWeight: 600,\n                                    children: [\n                                        \"Hoşgeldiniz, \",\n                                        inputData.firstName,\n                                        \" \",\n                                        inputData.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    flexDirection: \"row\",\n                                    alignItems: \"center\",\n                                    mt: 3,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_QrCode__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            sx: {\n                                                width: \"150px\",\n                                                height: \"150px\",\n                                                ml: \"-20px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    fontSize: 30,\n                                                    fontWeight: 600,\n                                                    children: \"Kendi Qr Men\\xfcn\\xfcz\\xfc\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    fontSize: 30,\n                                                    fontWeight: 600,\n                                                    children: \"Hızlı Ve Kolay \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    fontSize: 30,\n                                                    fontWeight: 600,\n                                                    children: \"Bir Şekilde Oluşturun\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    mt: 3,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            onClick: ()=>router.push(\"/product\"),\n                                            variant: \"text\",\n                                            sx: {\n                                                color: \"black\",\n                                                marginLeft: \"-15px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                fontSize: 25,\n                                                fontWeight: 600,\n                                                children: \"\\xdcr\\xfcn Y\\xf6netimi\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            children: \"Herhangi bir \\xfcr\\xfcn bulunmamaktadır.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    mt: 3,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            onClick: ()=>router.push(\"/qrcode\"),\n                                            variant: \"text\",\n                                            sx: {\n                                                color: \"black\",\n                                                marginLeft: \"-15px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                fontSize: 25,\n                                                fontWeight: 600,\n                                                children: \"Qr Kodum\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            children: \"Herhangi bir qr code bulunmamaktadır.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    mt: 3,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            onClick: ()=>router.push(\"/account\"),\n                                            variant: \"text\",\n                                            sx: {\n                                                color: \"black\",\n                                                marginLeft: \"-15px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                fontSize: 25,\n                                                fontWeight: 600,\n                                                children: \"Hesap\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumbs_Button_Card_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            children: \"Herhangi bir hesap bilgisi bulunmamaktadır.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yavuzbekar/Desktop/qrpanel/frontend/app/dashboard/page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"uPSEGh3DQMdc62u/y//DkZfak38=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _services_useGetProduct__WEBPACK_IMPORTED_MODULE_5__.useGetProduct\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ1g7QUFDc0I7QUFDZ0Q7QUFDdEQ7QUFDVztBQUNSO0FBQzBCO0FBQ2I7QUFFMUMsU0FBU2U7O0lBQ3RCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxZQUFZQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQztJQUNsRCxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBR1Ysc0VBQWFBO0lBRWpELElBQUlTLFdBQVc7UUFDYixxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNkO0lBQ0EsSUFBSSxDQUFDSCxNQUFNO1FBQ1QsT0FBTztJQUNUO0lBQ0EscUJBQ0UsOERBQUN0Qix5REFBR0E7OzBCQUNGLDhEQUFDQSx5REFBR0E7MEJBQ0YsNEVBQUNVLDBEQUFNQTs7Ozs7Ozs7OzswQkFFVCw4REFBQ1YseURBQUdBO2dCQUNGMEIsSUFBSTtvQkFDRkMsU0FBUztvQkFDVEMsZUFBZTtnQkFDakI7O2tDQUNBLDhEQUFDNUIseURBQUdBO3dCQUFDNkIsUUFBUTtrQ0FDWCw0RUFBQzNCLDJEQUFPQTs7Ozs7Ozs7OztrQ0FFViw4REFBQ0YseURBQUdBO3dCQUFDNkIsUUFBUTt3QkFBR0MsSUFBSTtrQ0FDbEIsNEVBQUM5Qix5REFBR0E7NEJBQUMrQixHQUFHOzRCQUFJQyxJQUFJOzs4Q0FFZCw4REFBQ3ZCLG9JQUFVQTtvQ0FBQ3dCLFVBQVU7b0NBQUlDLFlBQVk7O3dDQUFLO3dDQUFjakIsVUFBVWtCLFNBQVM7d0NBQUM7d0NBQUVsQixVQUFVbUIsUUFBUTs7Ozs7Ozs4Q0FDakcsOERBQUM1QixvSUFBS0E7b0NBQUNvQixlQUFjO29DQUFNUyxZQUFXO29DQUFTTCxJQUFJOztzREFDakQsOERBQUNyQixrRUFBVUE7NENBQUNlLElBQUk7Z0RBQ2RZLE9BQU87Z0RBQ1BDLFFBQVE7Z0RBQ1JULElBQUk7NENBQ047Ozs7OztzREFDQSw4REFBQ3RCLG9JQUFLQTs7OERBQ0osOERBQUNDLG9JQUFVQTtvREFBQ3dCLFVBQVU7b0RBQUlDLFlBQVk7OERBQUs7Ozs7Ozs4REFDM0MsOERBQUN6QixvSUFBVUE7b0RBQUN3QixVQUFVO29EQUFJQyxZQUFZOzhEQUFLOzs7Ozs7OERBQzNDLDhEQUFDekIsb0lBQVVBO29EQUFDd0IsVUFBVTtvREFBSUMsWUFBWTs4REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUcvQyw4REFBQ2xDLHlEQUFHQTtvQ0FBQ2dDLElBQUk7O3NEQUNQLDhEQUFDNUIscUlBQU1BOzRDQUFDb0MsU0FBUyxJQUFNeEIsT0FBT3lCLElBQUksQ0FBQzs0Q0FBYUMsU0FBUTs0Q0FBT2hCLElBQUk7Z0RBQUVpQixPQUFPO2dEQUFTQyxZQUFZOzRDQUFRO3NEQUN2Ryw0RUFBQ25DLG9JQUFVQTtnREFBQ3dCLFVBQVU7Z0RBQUlDLFlBQVk7MERBQUs7Ozs7Ozs7Ozs7O3NEQUU3Qyw4REFBQ3pCLG9JQUFVQTtzREFBQzs7Ozs7Ozs7Ozs7OzhDQUVkLDhEQUFDVCx5REFBR0E7b0NBQUNnQyxJQUFJOztzREFDUCw4REFBQzVCLHFJQUFNQTs0Q0FBQ29DLFNBQVMsSUFBTXhCLE9BQU95QixJQUFJLENBQUM7NENBQVlDLFNBQVE7NENBQU9oQixJQUFJO2dEQUFFaUIsT0FBTztnREFBU0MsWUFBWTs0Q0FBUTtzREFDdEcsNEVBQUNuQyxvSUFBVUE7Z0RBQUN3QixVQUFVO2dEQUFJQyxZQUFZOzBEQUFLOzs7Ozs7Ozs7OztzREFFN0MsOERBQUN6QixvSUFBVUE7c0RBQUM7Ozs7Ozs7Ozs7Ozs4Q0FFZCw4REFBQ1QseURBQUdBO29DQUFDZ0MsSUFBSTs7c0RBQ1AsOERBQUM1QixxSUFBTUE7NENBQUNvQyxTQUFTLElBQU14QixPQUFPeUIsSUFBSSxDQUFDOzRDQUFhQyxTQUFROzRDQUFPaEIsSUFBSTtnREFBRWlCLE9BQU87Z0RBQVNDLFlBQVk7NENBQVE7c0RBQ3ZHLDRFQUFDbkMsb0lBQVVBO2dEQUFDd0IsVUFBVTtnREFBSUMsWUFBWTswREFBSzs7Ozs7Ozs7Ozs7c0RBRTdDLDhEQUFDekIsb0lBQVVBO3NEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQS9Ed0JNOztRQUNQSCxzREFBU0E7UUFFWUUsa0VBQWFBOzs7S0FIM0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcz9iZjY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgeyBCcmVhZGNydW1icywgQnV0dG9uLCBDYXJkLCBJY29uQnV0dG9uLCBMaW5rLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBRckNvZGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUXJDb2RlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgRGV0YWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkRG91YmxlQXJyb3dSaWdodCc7XG5pbXBvcnQgeyB1c2VHZXRQcm9kdWN0IH0gZnJvbSAnQC9zZXJ2aWNlcy91c2VHZXRQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBpbnB1dERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnB1dERhdGEnKSk7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBtdXRhdGUgfSA9IHVzZUdldFByb2R1Y3QoKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gIH1cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiXG4gICAgICAgIH19PlxuICAgICAgICA8Qm94IHpJbmRleD17Mn0+XG4gICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggekluZGV4PXsxfSBtbD17MzV9ID5cbiAgICAgICAgICA8Qm94IHA9ezEwfSBtdD17Nn0+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGZvbnRTaXplPXs0MH0gZm9udFdlaWdodD17NjAwfT5Ib8WfZ2VsZGluaXosIHtpbnB1dERhdGEuZmlyc3ROYW1lfSB7aW5wdXREYXRhLmxhc3ROYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG10PXszfT5cbiAgICAgICAgICAgICAgPFFyQ29kZUljb24gc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNTBweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBweFwiLFxuICAgICAgICAgICAgICAgIG1sOiBcIi0yMHB4XCJcbiAgICAgICAgICAgICAgfX0+PC9RckNvZGVJY29uPlxuICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZm9udFNpemU9ezMwfSBmb250V2VpZ2h0PXs2MDB9PktlbmRpIFFyIE1lbsO8bsO8esO8PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGZvbnRTaXplPXszMH0gZm9udFdlaWdodD17NjAwfT5IxLF6bMSxIFZlIEtvbGF5IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBmb250U2l6ZT17MzB9IGZvbnRXZWlnaHQ9ezYwMH0+QmlyIMWeZWtpbGRlIE9sdcWfdHVydW48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPEJveCBtdD17M30+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcHJvZHVjdFwiKX0gdmFyaWFudD0ndGV4dCcgc3g9e3sgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luTGVmdDogXCItMTVweFwiIH19PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGZvbnRTaXplPXsyNX0gZm9udFdlaWdodD17NjAwfT7DnHLDvG4gWcO2bmV0aW1pPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SGVyaGFuZ2kgYmlyIMO8csO8biBidWx1bm1hbWFrdGFkxLFyLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBtdD17M30+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcXJjb2RlXCIpfSB2YXJpYW50PSd0ZXh0JyBzeD17eyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5MZWZ0OiBcIi0xNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZm9udFNpemU9ezI1fSBmb250V2VpZ2h0PXs2MDB9PlFyIEtvZHVtPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SGVyaGFuZ2kgYmlyIHFyIGNvZGUgYnVsdW5tYW1ha3RhZMSxci48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2FjY291bnRcIil9IHZhcmlhbnQ9J3RleHQnIHN4PXt7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkxlZnQ6IFwiLTE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBmb250U2l6ZT17MjV9IGZvbnRXZWlnaHQ9ezYwMH0+SGVzYXA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5IZXJoYW5naSBiaXIgaGVzYXAgYmlsZ2lzaSBidWx1bm1hbWFrdGFkxLFyLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94ID5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJveCIsIlJlYWN0IiwiU2lkZWJhciIsIkJyZWFkY3J1bWJzIiwiQnV0dG9uIiwiQ2FyZCIsIkljb25CdXR0b24iLCJMaW5rIiwiU3RhY2siLCJUeXBvZ3JhcGh5IiwiTmF2YmFyIiwiUXJDb2RlSWNvbiIsInVzZVJvdXRlciIsIkRldGFpbEljb24iLCJ1c2VHZXRQcm9kdWN0IiwiRGFzaGJvYXJkIiwicm91dGVyIiwiaW5wdXREYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJpc0xvYWRpbmciLCJtdXRhdGUiLCJkaXYiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiekluZGV4IiwibWwiLCJwIiwibXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJwdXNoIiwidmFyaWFudCIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});