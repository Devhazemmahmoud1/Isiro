"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/controllers/users.ts":
/*!**********************************!*\
  !*** ./src/controllers/users.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidVCode\": function() { return /* binding */ isValidVCode; },\n/* harmony export */   \"useLogin\": function() { return /* binding */ useLogin; },\n/* harmony export */   \"useRegister\": function() { return /* binding */ useRegister; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst useRegister = async (data)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8888/register\", data);\n    if (response.status >= 200 && response.status < 300) {\n        return response.data;\n    } else {\n        return response.data;\n    }\n};\nconst useLogin = async (data)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8888/login\", data);\n    if (response.status >= 200 && response.status < 300) {\n        return response.data;\n    } else {\n        return response.data;\n    }\n};\nconst isValidVCode = async (data)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8888/verify\", data);\n    if (response.status >= 200 && response.status < 300) {\n        return response.data;\n    } else {\n        return response.data;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUVsQixNQUFNQyxjQUFjLE9BQU9DLE9BQWE7SUFDM0MsTUFBTUMsV0FBVyxNQUFNSCxrREFBVSxDQUFDLGtDQUFrQ0U7SUFFcEUsSUFBSUMsU0FBU0UsTUFBTSxJQUFJLE9BQU9GLFNBQVNFLE1BQU0sR0FBRyxLQUFLO1FBQ2pELE9BQU9GLFNBQVNELElBQUk7SUFDeEIsT0FBTztRQUNILE9BQU9DLFNBQVNELElBQUk7SUFDeEIsQ0FBQztBQUNMLEVBQUM7QUFFTSxNQUFNSSxXQUFXLE9BQU9KLE9BQWE7SUFDeEMsTUFBTUMsV0FBVyxNQUFNSCxrREFBVSxDQUFDLCtCQUErQkU7SUFFakUsSUFBSUMsU0FBU0UsTUFBTSxJQUFJLE9BQU9GLFNBQVNFLE1BQU0sR0FBRyxLQUFLO1FBQ2pELE9BQU9GLFNBQVNELElBQUk7SUFDeEIsT0FBTztRQUNILE9BQU9DLFNBQVNELElBQUk7SUFDeEIsQ0FBQztBQUNMLEVBQUM7QUFFTSxNQUFNSyxlQUFlLE9BQU9MLE9BQWE7SUFDNUMsTUFBTUMsV0FBVyxNQUFNSCxrREFBVSxDQUFDLGdDQUFnQ0U7SUFFbEUsSUFBSUMsU0FBU0UsTUFBTSxJQUFJLE9BQU9GLFNBQVNFLE1BQU0sR0FBRyxLQUFLO1FBQ2pELE9BQU9GLFNBQVNELElBQUk7SUFDeEIsT0FBTztRQUNILE9BQU9DLFNBQVNELElBQUk7SUFDeEIsQ0FBQztBQUNMLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLnRzPzY0OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVJlZ2lzdGVyID0gYXN5bmMgKGRhdGE6IHt9KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9yZWdpc3RlcicsIGRhdGEpXHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxvZ2luID0gYXN5bmMgKGRhdGE6IHt9KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9sb2dpbicsIGRhdGEpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkVkNvZGUgPSBhc3luYyAoZGF0YToge30pID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4ODg4L3ZlcmlmeScsIGRhdGEpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9IFxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJlZ2lzdGVyIiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsInVzZUxvZ2luIiwiaXNWYWxpZFZDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/users.ts\n"));

/***/ })

});