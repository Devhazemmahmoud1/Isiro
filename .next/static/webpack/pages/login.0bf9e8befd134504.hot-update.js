"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./hooks/AuthTokenHook.ts":
/*!********************************!*\
  !*** ./hooks/AuthTokenHook.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDestroyAuthToken\": function() { return /* binding */ useDestroyAuthToken; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useCreateAuthToken = (response)=>{\n    document.cookie = \"LoggedIn='true';expires=\" + 365 * 24 * 60 * 60 * 1000 + \";path=/\";\n    document.cookie = \"access=\" + response.data.token + \";expires=\" + 365 * 24 * 60 * 60 * 1000 + \";path=/\";\n    sessionStorage.setItem(\"fullName\", response.data.first_name);\n    sessionStorage.setItem(\"email\", result.data.data.email);\n    sessionStorage.setItem(\"LoggedIn\", true);\n    sessionStorage.setItem(\"id\", result.data.data.id);\n    sessionStorage.setItem(\"access\", result.data.data.token);\n};\nconst useDestroyAuthToken = ()=>{\n    sessionStorage.clear();\n    var cookies = document.cookie.split(\"; \");\n    for(var c = 0; c < cookies.length; c++){\n        var d = window.location.hostname.split(\".\");\n        while(d.length > 0){\n            var cookieBase = encodeURIComponent(cookies[c].split(\";\")[0].split(\"=\")[0]) + \"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=\" + d.join(\".\") + \" ;path=\";\n            var p = location.pathname.split(\"/\");\n            document.cookie = cookieBase + \"/\";\n            while(p.length > 0){\n                document.cookie = cookieBase + p.join(\"/\");\n                p.pop();\n            }\n            d.shift();\n        }\n    }\n    return location.href = \"/\";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCreateAuthToken);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9BdXRoVG9rZW5Ib29rLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxxQkFBcUIsQ0FBQ0MsV0FBYTtJQUNyQ0MsU0FBU0MsTUFBTSxHQUFHLDZCQUE2QixNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU87SUFDM0VELFNBQVNDLE1BQU0sR0FBRyxZQUFZRixTQUFTRyxJQUFJLENBQUNDLEtBQUssR0FBSSxjQUFjLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTztJQUMvRkMsZUFBZUMsT0FBTyxDQUFDLFlBQVlOLFNBQVNHLElBQUksQ0FBQ0ksVUFBVTtJQUMzREYsZUFBZUMsT0FBTyxDQUFDLFNBQVNFLE9BQU9MLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxLQUFLO0lBQ3RESixlQUFlQyxPQUFPLENBQUMsWUFBWSxJQUFJO0lBQ3ZDRCxlQUFlQyxPQUFPLENBQUMsTUFBTUUsT0FBT0wsSUFBSSxDQUFDQSxJQUFJLENBQUNPLEVBQUU7SUFDaERMLGVBQWVDLE9BQU8sQ0FBQyxVQUFVRSxPQUFPTCxJQUFJLENBQUNBLElBQUksQ0FBQ0MsS0FBSztBQUMzRDtBQUVPLE1BQU1PLHNCQUFzQixJQUFNO0lBQ3JDTixlQUFlTyxLQUFLO0lBQ3BCLElBQUlDLFVBQVVaLFNBQVNDLE1BQU0sQ0FBQ1ksS0FBSyxDQUFDO0lBQ3BDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixRQUFRRyxNQUFNLEVBQUVELElBQUs7UUFDckMsSUFBSUUsSUFBSUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLENBQUNOLEtBQUssQ0FBQztRQUN2QyxNQUFPRyxFQUFFRCxNQUFNLEdBQUcsRUFBRztZQUNqQixJQUFJSyxhQUNBQyxtQkFBbUJULE9BQU8sQ0FBQ0UsRUFBRSxDQUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQ3pELHNEQUNBRyxFQUFFTSxJQUFJLENBQUMsT0FDUDtZQUNKLElBQUlDLElBQUlMLFNBQVNNLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDO1lBQ2hDYixTQUFTQyxNQUFNLEdBQUdtQixhQUFhO1lBQy9CLE1BQU9HLEVBQUVSLE1BQU0sR0FBRyxFQUFHO2dCQUNqQmYsU0FBU0MsTUFBTSxHQUFHbUIsYUFBYUcsRUFBRUQsSUFBSSxDQUFDO2dCQUN0Q0MsRUFBRUUsR0FBRztZQUNUO1lBQ0FULEVBQUVVLEtBQUs7UUFDWDtJQUNKO0lBQ0EsT0FBT1IsU0FBU1MsSUFBSSxHQUFHO0FBQzNCLEVBQUM7QUFFRCwrREFBZTdCLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy9BdXRoVG9rZW5Ib29rLnRzP2RkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlQ3JlYXRlQXV0aFRva2VuID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBcIkxvZ2dlZEluPSd0cnVlJztleHBpcmVzPVwiICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCArIFwiO3BhdGg9L1wiXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBcImFjY2Vzcz1cIiArIHJlc3BvbnNlLmRhdGEudG9rZW4gICsgXCI7ZXhwaXJlcz1cIiArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDAgKyBcIjtwYXRoPS9cIlxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZnVsbE5hbWUnLCByZXNwb25zZS5kYXRhLmZpcnN0X25hbWUpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCByZXN1bHQuZGF0YS5kYXRhLmVtYWlsKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0xvZ2dlZEluJywgdHJ1ZSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlc3VsdC5kYXRhLmRhdGEuaWQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCByZXN1bHQuZGF0YS5kYXRhLnRva2VuKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGVzdHJveUF1dGhUb2tlbiA9ICgpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgZm9yICh2YXIgYyA9IDA7IGMgPCBjb29raWVzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgdmFyIGQgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHdoaWxlIChkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZUJhc2UgPVxyXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGNvb2tpZXNbY10uc3BsaXQoXCI7XCIpWzBdLnNwbGl0KFwiPVwiKVswXSkgK1xyXG4gICAgICAgICAgICAgICAgXCI9OyBleHBpcmVzPVRodSwgMDEtSmFuLTE5NzAgMDA6MDA6MDEgR01UOyBkb21haW49XCIgK1xyXG4gICAgICAgICAgICAgICAgZC5qb2luKFwiLlwiKSArXHJcbiAgICAgICAgICAgICAgICBcIiA7cGF0aD1cIjtcclxuICAgICAgICAgICAgdmFyIHAgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZUJhc2UgKyBcIi9cIjtcclxuICAgICAgICAgICAgd2hpbGUgKHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llQmFzZSArIHAuam9pbihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICBwLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGQuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaHJlZiA9ICcvJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDcmVhdGVBdXRoVG9rZW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDcmVhdGVBdXRoVG9rZW4iLCJyZXNwb25zZSIsImRvY3VtZW50IiwiY29va2llIiwiZGF0YSIsInRva2VuIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZmlyc3RfbmFtZSIsInJlc3VsdCIsImVtYWlsIiwiaWQiLCJ1c2VEZXN0cm95QXV0aFRva2VuIiwiY2xlYXIiLCJjb29raWVzIiwic3BsaXQiLCJjIiwibGVuZ3RoIiwiZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJjb29raWVCYXNlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInAiLCJwYXRobmFtZSIsInBvcCIsInNoaWZ0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/AuthTokenHook.ts\n"));

/***/ })

});