"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./hooks/AuthHook.ts":
/*!***************************!*\
  !*** ./hooks/AuthHook.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useAuth = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{\n        if (\"LoggedIn\" in window[\"sessionStorage\"]) {} else {\n            sessionStorage.clear();\n            var cookies = document.cookie.split(\"; \");\n            for(var c = 0; c < cookies.length; c++){\n                var d = window.location.hostname.split(\".\");\n                while(d.length > 0){\n                    var cookieBase = encodeURIComponent(cookies[c].split(\";\")[0].split(\"=\")[0]) + \"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=\" + d.join(\".\") + \" ;path=\";\n                    var p = location.pathname.split(\"/\");\n                    document.cookie = cookieBase + \"/\";\n                    while(p.length > 0){\n                        document.cookie = cookieBase + p.join(\"/\");\n                        p.pop();\n                    }\n                    d.shift();\n                }\n            }\n            if (router.route == \"/login\" || router.route == \"/register\" || router.route == \"/verify\") {\n                return;\n            }\n            router.push(\"/login\");\n        }\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9BdXRoSG9vay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVjO0FBRWpDLE1BQU1FLFVBQVUsSUFBTTtJQUN6QixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEJELHNEQUFlLENBQUMsSUFBTTtRQUVsQixJQUFJLGNBQWNLLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUU1QyxPQUFPO1lBQ0hDLGVBQWVDLEtBQUs7WUFDcEIsSUFBSUMsVUFBVUMsU0FBU0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7WUFDcEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLFFBQVFLLE1BQU0sRUFBRUQsSUFBSztnQkFDckMsSUFBSUUsSUFBSVQsT0FBT1UsUUFBUSxDQUFDQyxRQUFRLENBQUNMLEtBQUssQ0FBQztnQkFDdkMsTUFBT0csRUFBRUQsTUFBTSxHQUFHLEVBQUc7b0JBQ2pCLElBQUlJLGFBQ0FDLG1CQUFtQlYsT0FBTyxDQUFDSSxFQUFFLENBQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFDekQsc0RBQ0FHLEVBQUVLLElBQUksQ0FBQyxPQUNQO29CQUNKLElBQUlDLElBQUlMLFNBQVNNLFFBQVEsQ0FBQ1YsS0FBSyxDQUFDO29CQUNoQ0YsU0FBU0MsTUFBTSxHQUFHTyxhQUFhO29CQUMvQixNQUFPRyxFQUFFUCxNQUFNLEdBQUcsRUFBRzt3QkFDakJKLFNBQVNDLE1BQU0sR0FBR08sYUFBYUcsRUFBRUQsSUFBSSxDQUFDO3dCQUN0Q0MsRUFBRUUsR0FBRztvQkFDVDtvQkFDQVIsRUFBRVMsS0FBSztnQkFDWDtZQUNKO1lBRUEsSUFBSXBCLE9BQU9xQixLQUFLLElBQUksWUFBWXJCLE9BQU9xQixLQUFLLElBQUksZUFBZXJCLE9BQU9xQixLQUFLLElBQUksV0FBVztnQkFDdEY7WUFDSixDQUFDO1lBRURyQixPQUFPc0IsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTDtBQUVKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvQXV0aEhvb2sudHM/ZTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoXCJMb2dnZWRJblwiIGluIHdpbmRvd1snc2Vzc2lvblN0b3JhZ2UnXSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGNvb2tpZXMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29va2llQmFzZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChjb29raWVzW2NdLnNwbGl0KFwiO1wiKVswXS5zcGxpdChcIj1cIilbMF0pICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI9OyBleHBpcmVzPVRodSwgMDEtSmFuLTE5NzAgMDA6MDA6MDEgR01UOyBkb21haW49XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmpvaW4oXCIuXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgO3BhdGg9XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llQmFzZSArIFwiL1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llQmFzZSArIHAuam9pbihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlci5yb3V0ZSA9PSAnL2xvZ2luJyB8fCByb3V0ZXIucm91dGUgPT0gJy9yZWdpc3RlcicgfHwgcm91dGVyLnJvdXRlID09ICcvdmVyaWZ5Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsInJvdXRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImMiLCJsZW5ndGgiLCJkIiwibG9jYXRpb24iLCJob3N0bmFtZSIsImNvb2tpZUJhc2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicCIsInBhdGhuYW1lIiwicG9wIiwic2hpZnQiLCJyb3V0ZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/AuthHook.ts\n"));

/***/ })

});