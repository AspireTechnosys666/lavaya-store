"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/component/login/Login.js":
/*!**************************************!*\
  !*** ./src/component/login/Login.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/form/Error */ \"./src/component/form/Error.js\");\n/* harmony import */ var _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useLoginSubmit */ \"./src/hooks/useLoginSubmit.js\");\n/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/form/InputArea */ \"./src/component/form/InputArea.js\");\n\nvar _s = $RefreshSig$();\n\n//internal  import\n\n\n\nconst Login = (param)=>{\n    let { setShowResetPassword, setModalOpen } = param;\n    _s();\n    const { handleSubmit, submitHandler, register, errors, loading } = (0,_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(setModalOpen);\n    const otplessInit = Reflect.get(window, \"otplessInit\");\n    const loadScript = ()=>{\n        const isScriptLoaded = document.getElementById(\"otplessIdScript\");\n        if (isScriptLoaded) return;\n        const script = document.createElement(\"script\");\n        script.src = \"https://otpless.com/auth.js\";\n        script.id = \"otplessIdScript\";\n        script.setAttribute(\"cid\", \"FSREKE6NJ8LLPFPAEF6HKEIFSQ5NRTX8\");\n        document.body.appendChild(script);\n    };\n    otplessInit ? otplessInit() : loadScript();\n    Reflect.set(window, \"otpless\", callback);\n    useEffect(()=>initOTPless(callback), []);\n    const callback = (otplessUser)=>{\n        alert({\n            otplessUser\n        });\n    // your code here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"otpless-login-page\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\aspire\\\\aspire-demo-store\\\\src\\\\component\\\\login\\\\Login.js\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Login, \"/Iaj403ZoF9Ow7TLD6C5LtYX/EM=\", false, function() {\n    return [\n        _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBRWhELGtCQUFrQjtBQUN3QjtBQUNTO0FBQ0Q7QUFFbEQsTUFBTUssUUFBUTtRQUFDLEVBQUVDLG9CQUFvQixFQUFFQyxZQUFZLEVBQUU7O0lBRW5ELE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FDOURULGlFQUFjQSxDQUFDSTtJQUVqQixNQUFNTSxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7SUFFeEMsTUFBTUMsYUFBYTtRQUNqQixNQUFNQyxpQkFBaUJDLFNBQVNDLGNBQWMsQ0FBQztRQUMvQyxJQUFHRixnQkFBZ0I7UUFFbkIsTUFBTUcsU0FBU0YsU0FBU0csYUFBYSxDQUFDO1FBQ3RDRCxPQUFPRSxHQUFHLEdBQUc7UUFDYkYsT0FBT0csRUFBRSxHQUFHO1FBQ1pILE9BQU9JLFlBQVksQ0FBQyxPQUFNO1FBQzFCTixTQUFTTyxJQUFJLENBQUNDLFdBQVcsQ0FBQ047SUFDNUI7SUFFQVIsY0FBY0EsZ0JBQWdCSTtJQUU5QkgsUUFBUWMsR0FBRyxDQUFDWixRQUFRLFdBQVdhO0lBRS9CQyxVQUFVLElBQUlDLFlBQVlGLFdBQVUsRUFBRTtJQUV0QyxNQUFNQSxXQUFXLENBQUNHO1FBQ2hCQyxNQUFNO1lBQUNEO1FBQVc7SUFDbEIsaUJBQWlCO0lBQ25CO0lBR0EscUJBQ0U7a0JBMEVFLDRFQUFDRTtZQUFJVixJQUFHOzs7Ozs7O0FBR2Q7R0E1R01uQjs7UUFHRkYsNkRBQWNBOzs7S0FIWkU7QUE4R04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9sb2dpbi9Mb2dpbi5qcz81MjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpTG9jaywgRmlNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG4vL2ludGVybmFsICBpbXBvcnRcclxuaW1wb3J0IEVycm9yIGZyb20gXCJAY29tcG9uZW50L2Zvcm0vRXJyb3JcIjtcclxuaW1wb3J0IHVzZUxvZ2luU3VibWl0IGZyb20gXCJAaG9va3MvdXNlTG9naW5TdWJtaXRcIjtcclxuaW1wb3J0IElucHV0QXJlYSBmcm9tIFwiQGNvbXBvbmVudC9mb3JtL0lucHV0QXJlYVwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoeyBzZXRTaG93UmVzZXRQYXNzd29yZCwgc2V0TW9kYWxPcGVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHN1Ym1pdEhhbmRsZXIsIHJlZ2lzdGVyLCBlcnJvcnMsIGxvYWRpbmcgfSA9XHJcbiAgICB1c2VMb2dpblN1Ym1pdChzZXRNb2RhbE9wZW4pO1xyXG5cclxuICBjb25zdCBvdHBsZXNzSW5pdCA9IFJlZmxlY3QuZ2V0KHdpbmRvdywgXCJvdHBsZXNzSW5pdFwiKTtcclxuXHJcbiAgY29uc3QgbG9hZFNjcmlwdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzU2NyaXB0TG9hZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdHBsZXNzSWRTY3JpcHRcIik7XHJcbiAgICBpZihpc1NjcmlwdExvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL290cGxlc3MuY29tL2F1dGguanNcIjtcclxuICAgIHNjcmlwdC5pZCA9IFwib3RwbGVzc0lkU2NyaXB0XCI7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiY2lkXCIsXCJGU1JFS0U2Tko4TExQRlBBRUY2SEtFSUZTUTVOUlRYOFwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICB9O1xyXG5cclxuICBvdHBsZXNzSW5pdCA/IG90cGxlc3NJbml0KCkgOiBsb2FkU2NyaXB0KCk7XHJcblxyXG4gIFJlZmxlY3Quc2V0KHdpbmRvdywgXCJvdHBsZXNzXCIsIGNhbGxiYWNrKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT5pbml0T1RQbGVzcyhjYWxsYmFjayksW10pO1xyXG5cclxuICBjb25zdCBjYWxsYmFjayA9IChvdHBsZXNzVXNlcikgPT4ge1xyXG4gICAgYWxlcnQoe290cGxlc3NVc2VyfSk7XHJcbiAgICAvLyB5b3VyIGNvZGUgaGVyZVxyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgZm9udC1zZXJpZlwiPkxvZ2luPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIG10LTIgbWItOCBzbTptYi0xMFwiPlxyXG4gICAgICAgICAgTG9naW4gd2l0aCB5b3VyIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRIYW5kbGVyKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwianVzdGluQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlZ2lzdGVyRW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgSWNvbj17RmlNYWlsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXJyb3IgZXJyb3JOYW1lPXtlcnJvcnMucmVnaXN0ZXJFbWFpbH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMTIzNDU2NzhcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBJY29uPXtGaUxvY2t9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RXJyb3IgZXJyb3JOYW1lPXtlcnJvcnMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXMtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jlc2V0UGFzc3dvcmQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWVuZCB0ZXh0LXNtIHRleHQtaGVhZGluZyBwcy0zIHVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnRleHQtc20gbGVhZGluZy01IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItMCBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBwbGFjZWhvbGRlci13aGl0ZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYmctWyNlMDAxNWVdIHRleHQtd2hpdGUgcHgtNSBtZDpweC02IGxnOnB4LTggcHktMiBtZDpweS0zIGxnOnB5LTMgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTYwMCBoLTEyIG10LTEgdGV4dC1zbSBsZzp0ZXh0LXNtIHctZnVsbCBzbTp3LWF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2xvYWRlci9zcGlubmVyLmdpZlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJMb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlcmlmIG1sLTIgZm9udC1saWdodFwiPlByb2Nlc3Npbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBweS0zIHJvdW5kZWQgYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1lbWVyYWxkLTYwMCB0cmFuc2l0aW9uLWFsbCBmb2N1czpvdXRsaW5lLW5vbmUgbXktMVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT4gKi99XHJcbiAgICAgIDxkaXYgaWQ9XCJvdHBsZXNzLWxvZ2luLXBhZ2VcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sIm5hbWVzIjpbIkZpTG9jayIsIkZpTWFpbCIsIkVycm9yIiwidXNlTG9naW5TdWJtaXQiLCJJbnB1dEFyZWEiLCJMb2dpbiIsInNldFNob3dSZXNldFBhc3N3b3JkIiwic2V0TW9kYWxPcGVuIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0SGFuZGxlciIsInJlZ2lzdGVyIiwiZXJyb3JzIiwibG9hZGluZyIsIm90cGxlc3NJbml0IiwiUmVmbGVjdCIsImdldCIsIndpbmRvdyIsImxvYWRTY3JpcHQiLCJpc1NjcmlwdExvYWRlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXQiLCJjYWxsYmFjayIsInVzZUVmZmVjdCIsImluaXRPVFBsZXNzIiwib3RwbGVzc1VzZXIiLCJhbGVydCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/login/Login.js\n"));

/***/ })

});