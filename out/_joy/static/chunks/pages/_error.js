/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_error"],{

/***/ "../joy/dist/build/polyfills/object-assign.js":
/*!****************************************************!*\
  !*** ../joy/dist/build/polyfills/object-assign.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar assign = Object.assign.bind(Object);\nmodule.exports = assign;\nmodule.exports[\"default\"] = module.exports;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMuanMiLCJtYXBwaW5ncyI6IjtBQUFhOztBQUNiLElBQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLENBQWNFLElBQWQsQ0FBbUJELE1BQW5CLENBQWI7QUFDQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQjtBQUNBRyx5QkFBQSxHQUF5QkEsTUFBTSxDQUFDQyxPQUFoQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcz9mZTdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO1xubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG4iXSwibmFtZXMiOlsiYXNzaWduIiwiT2JqZWN0IiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/build/polyfills/object-assign.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/amp-context.js":
/*!*************************************************!*\
  !*** ../joy/dist/joy-server/lib/amp-context.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.AmpStateContext = void 0;\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nexports.AmpStateContext = react_1[\"default\"].createContext({});\n\nif (true) {\n  exports.AmpStateContext.displayName = \"AmpStateContext\";\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvYW1wLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSw4Q0FBNkM7QUFBRUcsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsdUJBQUEsR0FBMEIsS0FBSyxDQUEvQjs7QUFDQSxJQUFNRyxPQUFPLEdBQUdSLGVBQWUsQ0FBQ1MsbUJBQU8sQ0FBQyxnREFBRCxDQUFSLENBQS9COztBQUNBSix1QkFBQSxHQUEwQkcsT0FBTyxXQUFQLENBQWdCRSxhQUFoQixDQUE4QixFQUE5QixDQUExQjs7QUFDQSxJQUFJLE1BQXVDO0FBQ3ZDTCxFQUFBQSxtQ0FBQSxHQUFzQyxpQkFBdEM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvZGlzdC9qb3ktc2VydmVyL2xpYi9hbXAtY29udGV4dC5qcz9iYTIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5leHBvcnRzLkFtcFN0YXRlQ29udGV4dCA9IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBleHBvcnRzLkFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQW1wU3RhdGVDb250ZXh0XCI7XG59XG4iXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQW1wU3RhdGVDb250ZXh0IiwicmVhY3RfMSIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/amp-context.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/amp.js":
/*!*****************************************!*\
  !*** ../joy/dist/joy-server/lib/amp.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _s = $RefreshSig$();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.useAmp = exports.isInAmpMode = void 0;\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar amp_context_1 = __webpack_require__(/*! ./amp-context */ \"../joy/dist/joy-server/lib/amp-context.js\");\n\nfunction isInAmpMode(_temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$ampFirst = _ref.ampFirst,\n      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,\n      _ref$hybrid = _ref.hybrid,\n      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,\n      _ref$hasQuery = _ref.hasQuery,\n      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;\n\n  return ampFirst || hybrid && hasQuery;\n}\n\nexports.isInAmpMode = isInAmpMode;\n\nfunction useAmp() {\n  _s();\n\n  // Don't assign the context value to a variable to save bytes\n  return isInAmpMode(react_1[\"default\"].useContext(amp_context_1.AmpStateContext));\n}\n\n_s(useAmp, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nexports.useAmp = useAmp;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvYW1wLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBYTs7OztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSw4Q0FBNkM7QUFBRUcsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsY0FBQSxHQUFpQkEsbUJBQUEsR0FBc0IsS0FBSyxDQUE1Qzs7QUFDQSxJQUFNSSxPQUFPLEdBQUdULGVBQWUsQ0FBQ1UsbUJBQU8sQ0FBQyxnREFBRCxDQUFSLENBQS9COztBQUNBLElBQU1DLGFBQWEsR0FBR0QsbUJBQU8sQ0FBQyxnRUFBRCxDQUE3Qjs7QUFDQSxTQUFTRixXQUFULFFBQW1GO0FBQUEsZ0NBQUosRUFBSTtBQUFBLDJCQUE1REksUUFBNEQ7QUFBQSxNQUE1REEsUUFBNEQsOEJBQWpELEtBQWlEO0FBQUEseUJBQTFDQyxNQUEwQztBQUFBLE1BQTFDQSxNQUEwQyw0QkFBakMsS0FBaUM7QUFBQSwyQkFBMUJDLFFBQTBCO0FBQUEsTUFBMUJBLFFBQTBCLDhCQUFmLEtBQWU7O0FBQy9FLFNBQU9GLFFBQVEsSUFBS0MsTUFBTSxJQUFJQyxRQUE5QjtBQUNIOztBQUNEVCxtQkFBQSxHQUFzQkcsV0FBdEI7O0FBQ0EsU0FBU0QsTUFBVCxHQUFrQjtBQUFBOztBQUNkO0FBQ0EsU0FBT0MsV0FBVyxDQUFDQyxPQUFPLFdBQVAsQ0FBZ0JNLFVBQWhCLENBQTJCSixhQUFhLENBQUNLLGVBQXpDLENBQUQsQ0FBbEI7QUFDSDs7R0FIUVQ7O0FBSVRGLGNBQUEsR0FBaUJFLE1BQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2pveS9kaXN0L2pveS1zZXJ2ZXIvbGliL2FtcC5qcz83OTIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VBbXAgPSBleHBvcnRzLmlzSW5BbXBNb2RlID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgYW1wX2NvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuZnVuY3Rpb24gaXNJbkFtcE1vZGUoeyBhbXBGaXJzdCA9IGZhbHNlLCBoeWJyaWQgPSBmYWxzZSwgaGFzUXVlcnkgPSBmYWxzZSwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpO1xufVxuZXhwb3J0cy5pc0luQW1wTW9kZSA9IGlzSW5BbXBNb2RlO1xuZnVuY3Rpb24gdXNlQW1wKCkge1xuICAgIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgICByZXR1cm4gaXNJbkFtcE1vZGUocmVhY3RfMS5kZWZhdWx0LnVzZUNvbnRleHQoYW1wX2NvbnRleHRfMS5BbXBTdGF0ZUNvbnRleHQpKTtcbn1cbmV4cG9ydHMudXNlQW1wID0gdXNlQW1wO1xuIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInVzZUFtcCIsImlzSW5BbXBNb2RlIiwicmVhY3RfMSIsInJlcXVpcmUiLCJhbXBfY29udGV4dF8xIiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsInVzZUNvbnRleHQiLCJBbXBTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/amp.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/head-manager-context.js":
/*!**********************************************************!*\
  !*** ../joy/dist/joy-server/lib/head-manager-context.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HeadManagerContext = void 0;\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nexports.HeadManagerContext = react_1[\"default\"].createContext({});\n\nif (true) {\n  exports.HeadManagerContext.displayName = \"HeadManagerContext\";\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSw4Q0FBNkM7QUFBRUcsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsMEJBQUEsR0FBNkIsS0FBSyxDQUFsQzs7QUFDQSxJQUFNRyxPQUFPLEdBQUdSLGVBQWUsQ0FBQ1MsbUJBQU8sQ0FBQyxnREFBRCxDQUFSLENBQS9COztBQUNBSiwwQkFBQSxHQUE2QkcsT0FBTyxXQUFQLENBQWdCRSxhQUFoQixDQUE4QixFQUE5QixDQUE3Qjs7QUFDQSxJQUFJLE1BQXVDO0FBQ3ZDTCxFQUFBQSxzQ0FBQSxHQUF5QyxvQkFBekM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvZGlzdC9qb3ktc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcz9lZjljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5leHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dCA9IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBleHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiSGVhZE1hbmFnZXJDb250ZXh0XCI7XG59XG4iXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVhY3RfMSIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/head-manager-context.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/head.js":
/*!******************************************!*\
  !*** ../joy/dist/joy-server/lib/head.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Head = exports.defaultHead = void 0;\n\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ \"../joy/dist/joy-server/lib/side-effect.js\"));\n\nvar amp_context_1 = __webpack_require__(/*! ./amp-context */ \"../joy/dist/joy-server/lib/amp-context.js\");\n\nvar head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ \"../joy/dist/joy-server/lib/head-manager-context.js\");\n\nvar amp_1 = __webpack_require__(/*! ./amp */ \"../joy/dist/joy-server/lib/amp.js\");\n\nfunction defaultHead(inAmpMode) {\n  if (inAmpMode === void 0) {\n    inAmpMode = false;\n  }\n\n  var head = [react_1[\"default\"].createElement(\"meta\", {\n    charSet: \"utf-8\"\n  })];\n\n  if (!inAmpMode) {\n    head.push(react_1[\"default\"].createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width\"\n    }));\n  }\n\n  return head;\n}\n\nexports.defaultHead = defaultHead;\n\nfunction onlyReactElement(list, child) {\n  // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n  if (typeof child === \"string\" || typeof child === \"number\") {\n    return list;\n  } // Adds support for React.Fragment\n\n\n  if (child.type === react_1[\"default\"].Fragment) {\n    var fragmentList = [];\n    react_1[\"default\"].Children.toArray(child.props.children).forEach(function (fragmentChild) {\n      if (typeof fragmentChild === \"string\" || typeof fragmentChild === \"number\") {\n        return;\n      }\n\n      fragmentList = fragmentList.concat(fragmentChild);\n    });\n    return list.concat(fragmentList);\n  }\n\n  return list.concat(child);\n}\n\nvar METATYPES = [\"name\", \"httpEquiv\", \"charSet\", \"itemProp\"];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/\n\nfunction unique() {\n  var keys = new Set();\n  var tags = new Set();\n  var metaTypes = new Set();\n  var metaCategories = {};\n  return function (h) {\n    var isUnique = true;\n\n    if (h.key && typeof h.key !== \"number\" && h.key.indexOf(\"$\") > 0) {\n      var key = h.key.slice(h.key.indexOf(\"$\") + 1);\n\n      if (keys.has(key)) {\n        isUnique = false;\n      } else {\n        keys.add(key);\n      }\n    } // eslint-disable-next-line default-case\n\n\n    switch (h.type) {\n      case \"title\":\n      case \"base\":\n        if (tags.has(h.type)) {\n          isUnique = false;\n        } else {\n          tags.add(h.type);\n        }\n\n        break;\n\n      case \"meta\":\n        for (var i = 0, len = METATYPES.length; i < len; i++) {\n          var metatype = METATYPES[i];\n          if (!h.props.hasOwnProperty(metatype)) continue;\n\n          if (metatype === \"charSet\") {\n            if (metaTypes.has(metatype)) {\n              isUnique = false;\n            } else {\n              metaTypes.add(metatype);\n            }\n          } else {\n            var category = h.props[metatype];\n            var categories = metaCategories[metatype] || new Set();\n\n            if (categories.has(category)) {\n              isUnique = false;\n            } else {\n              categories.add(category);\n              metaCategories[metatype] = categories;\n            }\n          }\n        }\n\n        break;\n    }\n\n    return isUnique;\n  };\n}\n/**\n *\n * @param headElements List of multiple <Head> instances\n */\n\n\nfunction reduceComponents(headElements, props) {\n  return headElements.reduce(function (list, headElement) {\n    var headElementChildren = react_1[\"default\"].Children.toArray(headElement.props.children);\n    return list.concat(headElementChildren);\n  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {\n    var key = c.key || i;\n\n    if (false) { var newProps; }\n\n    return react_1[\"default\"].cloneElement(c, {\n      key: key\n    });\n  });\n}\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */\n\n\nfunction Head(_ref) {\n  var children = _ref.children;\n  var ampState = (0, react_1.useContext)(amp_context_1.AmpStateContext);\n  var headManager = (0, react_1.useContext)(head_manager_context_1.HeadManagerContext);\n  return react_1[\"default\"].createElement(side_effect_1[\"default\"], {\n    reduceComponentsToState: reduceComponents,\n    headManager: headManager,\n    inAmpMode: (0, amp_1.isInAmpMode)(ampState)\n  }, children);\n}\n\n_c = Head;\nexports.Head = Head; // TODO: Remove in the next major release\n\nHead.rewind = function () {//noop\n}; // export default Head;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFFBQVpBLFFBQVk7QUFDeEIsTUFBTTBDLFFBQVEsR0FBRyxDQUFDLEdBQUdoRSxPQUFPLENBQUNpRSxVQUFaLEVBQXdCOUQsYUFBYSxDQUFDK0QsZUFBdEMsQ0FBakI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxHQUFHbkUsT0FBTyxDQUFDaUUsVUFBWixFQUF3QjdELHNCQUFzQixDQUFDZ0Usa0JBQS9DLENBQXBCO0FBQ0EsU0FBUXBFLE9BQU8sV0FBUCxDQUFnQlEsYUFBaEIsQ0FBOEJOLGFBQWEsV0FBM0MsRUFBcUQ7QUFBRW1FLElBQUFBLHVCQUF1QixFQUFFdkIsZ0JBQTNCO0FBQTZDcUIsSUFBQUEsV0FBVyxFQUFFQSxXQUExRDtBQUF1RTdELElBQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUdELEtBQUssQ0FBQ2lFLFdBQVYsRUFBdUJOLFFBQXZCO0FBQWxGLEdBQXJELEVBQTJLMUMsUUFBM0ssQ0FBUjtBQUNIOztLQUpReEI7QUFLVEQsWUFBQSxHQUFlQyxJQUFmLEVBQ0E7O0FBQ0FBLElBQUksQ0FBQ3lFLE1BQUwsR0FBYyxZQUFNLENBQ2hCO0FBQ0gsQ0FGRCxFQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2pveS9kaXN0L2pveS1zZXJ2ZXIvbGliL2hlYWQuanM/MTdjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IZWFkID0gZXhwb3J0cy5kZWZhdWx0SGVhZCA9IHZvaWQgMDtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHNpZGVfZWZmZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO1xuY29uc3QgYW1wX2NvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuY29uc3QgaGVhZF9tYW5hZ2VyX2NvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xuY29uc3QgYW1wXzEgPSByZXF1aXJlKFwiLi9hbXBcIik7XG5mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGhlYWQgPSBbcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgY2hhclNldDogXCJ1dGYtOFwiIH0pXTtcbiAgICBpZiAoIWluQW1wTW9kZSkge1xuICAgICAgICBoZWFkLnB1c2gocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aFwiIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWQ7XG59XG5leHBvcnRzLmRlZmF1bHRIZWFkID0gZGVmYXVsdEhlYWQ7XG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KGxpc3QsIGNoaWxkKSB7XG4gICAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBjaGlsZCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICAgIGlmIChjaGlsZC50eXBlID09PSByZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgbGV0IGZyYWdtZW50TGlzdCA9IFtdO1xuICAgICAgICByZWFjdF8xLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoZnJhZ21lbnRDaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFnbWVudENoaWxkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBmcmFnbWVudENoaWxkID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhZ21lbnRMaXN0ID0gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChmcmFnbWVudExpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO1xufVxuY29uc3QgTUVUQVRZUEVTID0gW1wibmFtZVwiLCBcImh0dHBFcXVpdlwiLCBcImNoYXJTZXRcIiwgXCJpdGVtUHJvcFwiXTtcbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7fTtcbiAgICByZXR1cm4gKGgpID0+IHtcbiAgICAgICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gXCJudW1iZXJcIiAmJiBoLmtleS5pbmRleE9mKFwiJFwiKSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoXCIkXCIpICsgMSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5hZGQoaC50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWV0YVwiOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGF0eXBlID09PSBcImNoYXJTZXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNVbmlxdWU7XG4gICAgfTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLCBwcm9wcykge1xuICAgIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAgICAgLnJlZHVjZSgobGlzdCwgaGVhZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IHJlYWN0XzEuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO1xuICAgIH0sIFtdKVxuICAgICAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAgICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAubWFwKChjLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX0pPWV9PUFRJTUlaRV9GT05UUyAmJiAhcHJvcHMuaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSBcImxpbmtcIiAmJlxuICAgICAgICAgICAgICAgIGMucHJvcHNbXCJocmVmXCJdICYmXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIl0uc29tZSgodXJsKSA9PiBjLnByb3BzW1wiaHJlZlwiXS5zdGFydHNXaXRoKHVybCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCAoYy5wcm9wcyB8fCB7fSkpO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiZGF0YS1ocmVmXCJdID0gbmV3UHJvcHNbXCJocmVmXCJdO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiaHJlZlwiXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IGFtcFN0YXRlID0gKDAsIHJlYWN0XzEudXNlQ29udGV4dCkoYW1wX2NvbnRleHRfMS5BbXBTdGF0ZUNvbnRleHQpO1xuICAgIGNvbnN0IGhlYWRNYW5hZ2VyID0gKDAsIHJlYWN0XzEudXNlQ29udGV4dCkoaGVhZF9tYW5hZ2VyX2NvbnRleHRfMS5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc2lkZV9lZmZlY3RfMS5kZWZhdWx0LCB7IHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiByZWR1Y2VDb21wb25lbnRzLCBoZWFkTWFuYWdlcjogaGVhZE1hbmFnZXIsIGluQW1wTW9kZTogKDAsIGFtcF8xLmlzSW5BbXBNb2RlKShhbXBTdGF0ZSkgfSwgY2hpbGRyZW4pKTtcbn1cbmV4cG9ydHMuSGVhZCA9IEhlYWQ7XG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7XG4gICAgLy9ub29wXG59O1xuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZDtcbiJdLCJuYW1lcyI6WyJfX2NyZWF0ZUJpbmRpbmciLCJPYmplY3QiLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsInYiLCJ2YWx1ZSIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9fZXNNb2R1bGUiLCJyZXN1bHQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2ltcG9ydERlZmF1bHQiLCJleHBvcnRzIiwiSGVhZCIsImRlZmF1bHRIZWFkIiwicmVhY3RfMSIsInJlcXVpcmUiLCJzaWRlX2VmZmVjdF8xIiwiYW1wX2NvbnRleHRfMSIsImhlYWRfbWFuYWdlcl9jb250ZXh0XzEiLCJhbXBfMSIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJuYW1lIiwiY29udGVudCIsIm9ubHlSZWFjdEVsZW1lbnQiLCJsaXN0IiwiY2hpbGQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJmcmFnbWVudExpc3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJwcm9wcyIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImZyYWdtZW50Q2hpbGQiLCJjb25jYXQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwia2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiaGFzIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsInJlZHVjZSIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJmaWx0ZXIiLCJtYXAiLCJjIiwicHJvY2VzcyIsImVudiIsIl9fSk9ZX09QVElNSVpFX0ZPTlRTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImFzc2lnbiIsImNsb25lRWxlbWVudCIsImFtcFN0YXRlIiwidXNlQ29udGV4dCIsIkFtcFN0YXRlQ29udGV4dCIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJpc0luQW1wTW9kZSIsInJld2luZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/head.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/joy-ssr-react-context.js":
/*!***********************************************************!*\
  !*** ../joy/dist/joy-server/lib/joy-ssr-react-context.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.JoySSRContext = void 0;\n\nvar react_1 = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nexports.JoySSRContext = (0, react_1.createContext)(undefined);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvam95LXNzci1yZWFjdC1jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBYTs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELHFCQUFBLEdBQXdCLEtBQUssQ0FBN0I7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXZCOztBQUNBSixxQkFBQSxHQUF3QixDQUFDLEdBQUdHLE9BQU8sQ0FBQ0UsYUFBWixFQUEyQkMsU0FBM0IsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvam95LXNzci1yZWFjdC1jb250ZXh0LmpzPzU4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkpveVNTUkNvbnRleHQgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuZXhwb3J0cy5Kb3lTU1JDb250ZXh0ID0gKDAsIHJlYWN0XzEuY3JlYXRlQ29udGV4dCkodW5kZWZpbmVkKTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkpveVNTUkNvbnRleHQiLCJyZWFjdF8xIiwicmVxdWlyZSIsImNyZWF0ZUNvbnRleHQiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/joy-ssr-react-context.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/side-effect.js":
/*!*************************************************!*\
  !*** ../joy/dist/joy-server/lib/side-effect.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"../joy/node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nvar _inheritsLoose = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../joy/node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar react_1 = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nvar isServer = false;\n\nvar default_1 = /*#__PURE__*/function (_react_1$Component) {\n  _inheritsLoose(default_1, _react_1$Component);\n\n  function default_1(props) {\n    var _this;\n\n    _this = _react_1$Component.call(this, props) || this;\n\n    _this.emitChange = function () {\n      if (_this._hasHeadManager) {\n        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(Array.from(_this.props.headManager.mountedInstances), _this.props));\n      }\n    };\n\n    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;\n\n    if (isServer && _this._hasHeadManager) {\n      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));\n\n      _this.emitChange();\n    }\n\n    return _this;\n  }\n\n  var _proto = default_1.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    if (this._hasHeadManager) {\n      this.props.headManager.mountedInstances.add(this);\n    }\n\n    this.emitChange();\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate() {\n    this.emitChange();\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    if (this._hasHeadManager) {\n      this.props.headManager.mountedInstances[\"delete\"](this);\n    }\n\n    this.emitChange();\n  };\n\n  _proto.render = function render() {\n    return null;\n  };\n\n  return default_1;\n}(react_1.Component);\n\nexports[\"default\"] = default_1;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFhOzs7Ozs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBLElBQU1DLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxRQUFRLFFBQWQ7O0lBQ01DOzs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLDBDQUFNQSxLQUFOOztBQUNBLFVBQUtDLFVBQUwsR0FBa0IsWUFBTTtBQUNwQixVQUFJLE1BQUtDLGVBQVQsRUFBMEI7QUFDdEIsY0FBS0YsS0FBTCxDQUFXRyxXQUFYLENBQXVCQyxVQUF2QixDQUFrQyxNQUFLSixLQUFMLENBQVdLLHVCQUFYLENBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFLUCxLQUFMLENBQVdHLFdBQVgsQ0FBdUJLLGdCQUFsQyxDQUFuQyxFQUF3RixNQUFLUixLQUE3RixDQUFsQztBQUNIO0FBQ0osS0FKRDs7QUFLQSxVQUFLRSxlQUFMLEdBQXVCLE1BQUtGLEtBQUwsQ0FBV0csV0FBWCxJQUEwQixNQUFLSCxLQUFMLENBQVdHLFdBQVgsQ0FBdUJLLGdCQUF4RTs7QUFDQSxRQUFJVixRQUFRLElBQUksTUFBS0ksZUFBckIsRUFBc0M7QUFDbEMsWUFBS0YsS0FBTCxDQUFXRyxXQUFYLENBQXVCSyxnQkFBdkIsQ0FBd0NDLEdBQXhDOztBQUNBLFlBQUtSLFVBQUw7QUFDSDs7QUFYYztBQVlsQjs7OztTQUNEUyxvQkFBQSw2QkFBb0I7QUFDaEIsUUFBSSxLQUFLUixlQUFULEVBQTBCO0FBQ3RCLFdBQUtGLEtBQUwsQ0FBV0csV0FBWCxDQUF1QkssZ0JBQXZCLENBQXdDQyxHQUF4QyxDQUE0QyxJQUE1QztBQUNIOztBQUNELFNBQUtSLFVBQUw7QUFDSDs7U0FDRFUscUJBQUEsOEJBQXFCO0FBQ2pCLFNBQUtWLFVBQUw7QUFDSDs7U0FDRFcsdUJBQUEsZ0NBQXVCO0FBQ25CLFFBQUksS0FBS1YsZUFBVCxFQUEwQjtBQUN0QixXQUFLRixLQUFMLENBQVdHLFdBQVgsQ0FBdUJLLGdCQUF2QixXQUErQyxJQUEvQztBQUNIOztBQUNELFNBQUtQLFVBQUw7QUFDSDs7U0FDRFksU0FBQSxrQkFBUztBQUNMLFdBQU8sSUFBUDtBQUNIOzs7RUEvQm1CakIsT0FBTyxDQUFDa0I7O0FBaUNoQ3BCLGtCQUFBLEdBQWtCSyxTQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvZGlzdC9qb3ktc2VydmVyL2xpYi9zaWRlLWVmZmVjdC5qcz80YWNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZCh0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKEFycmF5LmZyb20odGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzKSwgdGhpcy5wcm9wcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9IHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzO1xuICAgICAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInJlYWN0XzEiLCJyZXF1aXJlIiwiaXNTZXJ2ZXIiLCJkZWZhdWx0XzEiLCJwcm9wcyIsImVtaXRDaGFuZ2UiLCJfaGFzSGVhZE1hbmFnZXIiLCJoZWFkTWFuYWdlciIsInVwZGF0ZUhlYWQiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIkFycmF5IiwiZnJvbSIsIm1vdW50ZWRJbnN0YW5jZXMiLCJhZGQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/side-effect.js\n");

/***/ }),

/***/ "../joy/dist/pages/_error.js":
/*!***********************************!*\
  !*** ../joy/dist/pages/_error.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _inheritsLoose = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../joy/node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar head_1 = __webpack_require__(/*! ../joy-server/lib/head */ \"../joy/dist/joy-server/lib/head.js\");\n\nvar joy_ssr_react_context_1 = __webpack_require__(/*! ../joy-server/lib/joy-ssr-react-context */ \"../joy/dist/joy-server/lib/joy-ssr-react-context.js\");\n\nvar statusCodes = {\n  400: \"Bad Request\",\n  404: \"This page could not be found\",\n  405: \"Method Not Allowed\",\n  500: \"Internal Server Error\"\n};\n/**\n * `Error` component used for handling errors.\n */\n\nvar Error = /*#__PURE__*/function (_react_1$default$Comp) {\n  _inheritsLoose(Error, _react_1$default$Comp);\n\n  function Error() {\n    return _react_1$default$Comp.apply(this, arguments) || this;\n  }\n\n  var _proto = Error.prototype;\n\n  _proto.getErrorObject = function getErrorObject() {\n    var _a, _b, _c, _d, _e, _f;\n\n    var statusCode = ((_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.res) === null || _b === void 0 ? void 0 : _b.statusCode) || ((_d = (_c = this.context) === null || _c === void 0 ? void 0 : _c.err) === null || _d === void 0 ? void 0 : _d.statusCode) || 404;\n    var title = (_f = (_e = this.context) === null || _e === void 0 ? void 0 : _e.err) === null || _f === void 0 ? void 0 : _f.message;\n    return {\n      statusCode: statusCode,\n      title: title\n    };\n  };\n\n  _proto.render = function render() {\n    var errObj = this.getErrorObject();\n    var statusCode = errObj.statusCode;\n    var title = errObj.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n    return react_1[\"default\"].createElement(\"div\", {\n      style: styles.error\n    }, react_1[\"default\"].createElement(head_1.Head, null, react_1[\"default\"].createElement(\"title\", null, statusCode, \": \", title)), react_1[\"default\"].createElement(\"div\", null, react_1[\"default\"].createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: \"body { margin: 0 }\"\n      }\n    }), statusCode ? react_1[\"default\"].createElement(\"h1\", {\n      style: styles.h1\n    }, statusCode) : null, react_1[\"default\"].createElement(\"div\", {\n      style: styles.desc\n    }, react_1[\"default\"].createElement(\"h2\", {\n      style: styles.h2\n    }, title, \".\"))));\n  };\n\n  return Error;\n}(react_1[\"default\"].Component);\n\nexports[\"default\"] = Error;\nError.displayName = \"ErrorPage\";\nError.contextType = joy_ssr_react_context_1.JoySSRContext;\nvar styles = {\n  error: {\n    color: \"#000\",\n    background: \"#fff\",\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: \"100vh\",\n    textAlign: \"center\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  desc: {\n    display: \"inline-block\",\n    textAlign: \"left\",\n    lineHeight: \"49px\",\n    height: \"49px\",\n    verticalAlign: \"middle\"\n  },\n  h1: {\n    display: \"inline-block\",\n    borderRight: \"1px solid rgba(0, 0, 0,.3)\",\n    margin: 0,\n    marginRight: \"20px\",\n    padding: \"10px 23px 10px 0\",\n    fontSize: \"24px\",\n    fontWeight: 500,\n    verticalAlign: \"top\"\n  },\n  h2: {\n    fontSize: \"14px\",\n    fontWeight: \"normal\",\n    lineHeight: \"inherit\",\n    margin: 0,\n    padding: 0\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsUUFMUjtBQU1IQyxJQUFBQSxPQUFPLEVBQUUsTUFOTjtBQU9IQyxJQUFBQSxhQUFhLEVBQUUsUUFQWjtBQVFIQyxJQUFBQSxVQUFVLEVBQUUsUUFSVDtBQVNIQyxJQUFBQSxjQUFjLEVBQUU7QUFUYixHQURJO0FBWVhkLEVBQUFBLElBQUksRUFBRTtBQUNGVyxJQUFBQSxPQUFPLEVBQUUsY0FEUDtBQUVGRCxJQUFBQSxTQUFTLEVBQUUsTUFGVDtBQUdGSyxJQUFBQSxVQUFVLEVBQUUsTUFIVjtBQUlGTixJQUFBQSxNQUFNLEVBQUUsTUFKTjtBQUtGTyxJQUFBQSxhQUFhLEVBQUU7QUFMYixHQVpLO0FBbUJYakIsRUFBQUEsRUFBRSxFQUFFO0FBQ0FZLElBQUFBLE9BQU8sRUFBRSxjQURUO0FBRUFNLElBQUFBLFdBQVcsRUFBRSw0QkFGYjtBQUdBQyxJQUFBQSxNQUFNLEVBQUUsQ0FIUjtBQUlBQyxJQUFBQSxXQUFXLEVBQUUsTUFKYjtBQUtBQyxJQUFBQSxPQUFPLEVBQUUsa0JBTFQ7QUFNQUMsSUFBQUEsUUFBUSxFQUFFLE1BTlY7QUFPQUMsSUFBQUEsVUFBVSxFQUFFLEdBUFo7QUFRQU4sSUFBQUEsYUFBYSxFQUFFO0FBUmYsR0FuQk87QUE2QlhmLEVBQUFBLEVBQUUsRUFBRTtBQUNBb0IsSUFBQUEsUUFBUSxFQUFFLE1BRFY7QUFFQUMsSUFBQUEsVUFBVSxFQUFFLFFBRlo7QUFHQVAsSUFBQUEsVUFBVSxFQUFFLFNBSFo7QUFJQUcsSUFBQUEsTUFBTSxFQUFFLENBSlI7QUFLQUUsSUFBQUEsT0FBTyxFQUFFO0FBTFQ7QUE3Qk8sQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvZGlzdC9wYWdlcy9fZXJyb3IuanM/OWUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IGhlYWRfMSA9IHJlcXVpcmUoXCIuLi9qb3ktc2VydmVyL2xpYi9oZWFkXCIpO1xuY29uc3Qgam95X3Nzcl9yZWFjdF9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi4vam95LXNlcnZlci9saWIvam95LXNzci1yZWFjdC1jb250ZXh0XCIpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiBcIkJhZCBSZXF1ZXN0XCIsXG4gICAgNDA0OiBcIlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmRcIixcbiAgICA0MDU6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsXG4gICAgNTAwOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiLFxufTtcbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5jbGFzcyBFcnJvciBleHRlbmRzIHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIGdldEVycm9yT2JqZWN0KCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9ICgoX2IgPSAoX2EgPSB0aGlzLmNvbnRleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdGF0dXNDb2RlKSB8fCAoKF9kID0gKF9jID0gdGhpcy5jb250ZXh0KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZXJyKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc3RhdHVzQ29kZSkgfHwgNDA0O1xuICAgICAgICBjb25zdCB0aXRsZSA9IChfZiA9IChfZSA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmVycikgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLm1lc3NhZ2U7XG4gICAgICAgIHJldHVybiB7IHN0YXR1c0NvZGUsIHRpdGxlIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZXJyT2JqID0gdGhpcy5nZXRFcnJvck9iamVjdCgpO1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IGVyck9iajtcbiAgICAgICAgbGV0IHRpdGxlID0gZXJyT2JqLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8IFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWRcIjtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuZXJyb3IgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGhlYWRfMS5IZWFkLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgXCI6IFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBcImJvZHkgeyBtYXJnaW46IDAgfVwiIH0gfSksXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA/IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogc3R5bGVzLmgxIH0sIHN0YXR1c0NvZGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuZGVzYyB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHN0eWxlcy5oMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi5cIikpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xuRXJyb3IuZGlzcGxheU5hbWUgPSBcIkVycm9yUGFnZVwiO1xuRXJyb3IuY29udGV4dFR5cGUgPSBqb3lfc3NyX3JlYWN0X2NvbnRleHRfMS5Kb3lTU1JDb250ZXh0O1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDlweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNDlweFwiLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMylcIixcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweCAyM3B4IDEwcHggMFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyZWFjdF8xIiwicmVxdWlyZSIsImhlYWRfMSIsImpveV9zc3JfcmVhY3RfY29udGV4dF8xIiwic3RhdHVzQ29kZXMiLCJFcnJvciIsImdldEVycm9yT2JqZWN0IiwiX2EiLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwic3RhdHVzQ29kZSIsImNvbnRleHQiLCJyZXMiLCJlcnIiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJlcnJPYmoiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsIkhlYWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiZGVzYyIsImgyIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjb250ZXh0VHlwZSIsIkpveVNTUkNvbnRleHQiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/pages/_error.js\n");

/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react/cjs/react.development.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "../joy/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/react/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../../node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../joy/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***************************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***************************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../joy/node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!*******************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../joy/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../joy/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!********************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \********************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_error&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_error!":
/*!********************************************************************************************************************************************!*\
  !*** ../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_error&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_error! ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__JOY_P = window.__JOY_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! @symph/joy/dist/pages/_error */ "../joy/dist/pages/_error.js");
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_error&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_error!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);