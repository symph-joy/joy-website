/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "../joy/dist/build/polyfills/object-assign.js":
/*!****************************************************!*\
  !*** ../joy/dist/build/polyfills/object-assign.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar assign = Object.assign.bind(Object);\nmodule.exports = assign;\nmodule.exports[\"default\"] = module.exports;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBQW1CLE1BQW5CLENBQWI7QUFDQSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFqQjtBQUNBLDRCQUF5QixNQUFNLENBQUMsT0FBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcz9kMDI2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTtcbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/build/polyfills/object-assign.js\n");

/***/ }),

/***/ "../joy/dist/client/normalize-trailing-slash.js":
/*!******************************************************!*\
  !*** ../joy/dist/client/normalize-trailing-slash.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.normalizePathTrailingSlash = exports.removePathTrailingSlash = void 0;\n/**\n * Removes the trailing slash of a path if there is one. Preserves the root path `/`.\n */\n\nfunction removePathTrailingSlash(path) {\n  return path.endsWith(\"/\") && path !== \"/\" ? path.slice(0, -1) : path;\n}\n\nexports.removePathTrailingSlash = removePathTrailingSlash;\n/**\n * Normalizes the trailing slash of a path according to the `trailingSlash` option\n * in `joy.config.js`.\n */\n\nexports.normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUc7O0FBQ0gsU0FBZ0IsdUJBQWhCLENBQXdDLElBQXhDLEVBQW9EO0FBQ2xELFNBQU8sSUFBSSxDQUFDLFFBQUwsQ0FBYyxHQUFkLEtBQXNCLElBQUksS0FBSyxHQUEvQixHQUFxQyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFDLENBQWYsQ0FBckMsR0FBeUQsSUFBaEU7QUFDRDs7QUFGRDtBQUlBOzs7QUFHRzs7QUFDVSxxQ0FBNkIsU0FDdEMsQ0FEc0MsR0FVdEMsdUJBVlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzPzRkZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aChcIi9cIikgJiYgcGF0aCAhPT0gXCIvXCIgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYGpveS5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX0pPWV9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArIFwiL1wiO1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/client/normalize-trailing-slash.js\n");

/***/ }),

/***/ "../joy/dist/client/router.js":
/*!************************************!*\
  !*** ../joy/dist/client/router.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ \"../joy/node_modules/@babel/runtime/helpers/construct.js\");\n\nvar _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.makePublicRouterInstance = exports.createRouter = exports.useRouter = exports.withRouter = exports.Router = void 0;\n/* global window */\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar router_1 = __importDefault(__webpack_require__(/*! ../joy-server/lib/router/router */ \"../joy/dist/joy-server/lib/router/router.js\"));\n\nvar router_context_1 = __webpack_require__(/*! ../joy-server/lib/router-context */ \"../joy/dist/joy-server/lib/router-context.js\");\n\nexports.Router = router_1[\"default\"];\nvar singletonRouter = {\n  router: null,\n  readyCallbacks: [],\n  ready: function ready(cb) {\n    if (this.router) return cb();\n\n    if (true) {\n      this.readyCallbacks.push(cb);\n    }\n  }\n}; // Create public properties and methods of the router in the singletonRouter\n\nvar urlPropertyFields = [\"pathname\", \"route\", \"query\", \"asPath\", \"components\", \"isFallback\", \"basePath\"];\nvar routerEvents = [\"routeChangeStart\", \"beforeHistoryChange\", \"routeChangeComplete\", \"routeChangeError\", \"hashChangeStart\", \"hashChangeComplete\"];\nvar coreMethodFields = [\"push\", \"replace\", \"reload\", \"back\", \"prefetch\", \"beforePopState\"]; // Events is a static property on the router, the router doesn't have to be initialized to use it\n\nObject.defineProperty(singletonRouter, \"events\", {\n  get: function get() {\n    return exports.Router.events;\n  }\n});\nurlPropertyFields.forEach(function (field) {\n  // Here we need to use Object.defineProperty because, we need to return\n  // the property assigned to the actual router\n  // The value might get changed as we change routes and this is the\n  // proper way to access it\n  Object.defineProperty(singletonRouter, field, {\n    get: function get() {\n      var router = getRouter();\n      return router[field];\n    }\n  });\n});\ncoreMethodFields.forEach(function (field) {\n  // We don't really know the types here, so we add them later instead\n  singletonRouter[field] = function () {\n    var router = getRouter();\n    return router[field].apply(router, arguments);\n  };\n});\nrouterEvents.forEach(function (event) {\n  singletonRouter.ready(function () {\n    exports.Router.events.on(event, function () {\n      var eventField = \"on\" + event.charAt(0).toUpperCase() + event.substring(1);\n      var _singletonRouter = singletonRouter;\n\n      if (_singletonRouter[eventField]) {\n        try {\n          _singletonRouter[eventField].apply(_singletonRouter, arguments);\n        } catch (err) {\n          console.error(\"Error when running the Router event: \" + eventField);\n          console.error(err.message + \"\\n\" + err.stack);\n        }\n      }\n    });\n  });\n});\n\nfunction getRouter() {\n  if (!singletonRouter.router) {\n    var message = \"No router instance found.\\n\" + 'You should only use \"@symph/joy/router\" inside the client side of your app.\\n';\n    throw new Error(message);\n  }\n\n  return singletonRouter.router;\n} // Export the singletonRouter and this is the public API.\n\n\nexports[\"default\"] = singletonRouter; // Reexport the withRoute HOC\n\nvar with_router_1 = __webpack_require__(/*! ./with-router */ \"../joy/dist/client/with-router.js\");\n\nObject.defineProperty(exports, \"withRouter\", ({\n  enumerable: true,\n  get: function get() {\n    return __importDefault(with_router_1)[\"default\"];\n  }\n}));\n\nfunction useRouter() {\n  _s();\n\n  return react_1[\"default\"].useContext(router_context_1.RouterContext);\n}\n\n_s(useRouter, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nexports.useRouter = useRouter; // INTERNAL APIS\n// -------------\n// (do not use following exports inside the app)\n// Create a router and assign it as the singleton instance.\n// This is used in client side when we are initilizing the app.\n// This should **not** use inside the server.\n\nvar createRouter = function createRouter() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  singletonRouter.router = _construct(exports.Router, args);\n  singletonRouter.readyCallbacks.forEach(function (cb) {\n    return cb();\n  });\n  singletonRouter.readyCallbacks = [];\n  return singletonRouter.router;\n};\n\nexports.createRouter = createRouter; // This function is used to create the `withRouter` router instance\n\nfunction makePublicRouterInstance(router) {\n  var _router = router;\n  var instance = {};\n\n  for (var _iterator = _createForOfIteratorHelperLoose(urlPropertyFields), _step; !(_step = _iterator()).done;) {\n    var property = _step.value;\n\n    if (typeof _router[property] === \"object\") {\n      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful\n\n      continue;\n    }\n\n    instance[property] = _router[property];\n  } // Events is a static property on the router, the router doesn't have to be initialized to use it\n\n\n  instance.events = exports.Router.events;\n  coreMethodFields.forEach(function (field) {\n    instance[field] = function () {\n      return _router[field].apply(_router, arguments);\n    };\n  });\n  return instance;\n}\n\nexports.makePublicRouterInstance = makePublicRouterInstance;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0QsR0FYcUQsQ0FhdEQ7OztBQUNBLFVBQVEsQ0FBQyxNQUFULEdBQWtCLGVBQU8sTUFBekI7QUFFQSxrQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixVQUFDLEtBQUQsRUFBVTtBQUNqQyxZQUFRLENBQUMsS0FBRCxDQUFSLEdBQWtCLFlBQW1CO0FBQ25DLGFBQU8sT0FBTyxDQUFDLEtBQUQsQ0FBUCxjQUFPLFlBQWQ7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQU1BLFNBQU8sUUFBUDtBQUNEOztBQXZCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC9yb3V0ZXIudHM/NDM3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgX1JvdXRlciwge1xuICBKb3lSb3V0ZXIgYXMgX0pveVJvdXRlcixcbn0gZnJvbSBcIi4uL2pveS1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tIFwiLi4vam95LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIjtcbmV4cG9ydCBjb25zdCBSb3V0ZXIgPSBfUm91dGVyO1xuZXhwb3J0IHR5cGUgUm91dGVyID0gX1JvdXRlcjtcbmV4cG9ydCB0eXBlIEpveVJvdXRlciA9IF9Kb3lSb3V0ZXI7XG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55O1xuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPjtcblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IF9Sb3V0ZXIgfCBudWxsO1xuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PjtcbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWQ7XG59O1xuXG4vLyBleHBvcnQgeyBSb3V0ZXIsIEpveVJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBKb3lSb3V0ZXI7XG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICB9XG4gIH0sXG59O1xuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgXCJwYXRobmFtZVwiLFxuICBcInJvdXRlXCIsXG4gIFwicXVlcnlcIixcbiAgXCJhc1BhdGhcIixcbiAgXCJjb21wb25lbnRzXCIsXG4gIFwiaXNGYWxsYmFja1wiLFxuICBcImJhc2VQYXRoXCIsXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICBcInJvdXRlQ2hhbmdlU3RhcnRcIixcbiAgXCJiZWZvcmVIaXN0b3J5Q2hhbmdlXCIsXG4gIFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLFxuICBcInJvdXRlQ2hhbmdlRXJyb3JcIixcbiAgXCJoYXNoQ2hhbmdlU3RhcnRcIixcbiAgXCJoYXNoQ2hhbmdlQ29tcGxldGVcIixcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICBcInB1c2hcIixcbiAgXCJyZXBsYWNlXCIsXG4gIFwicmVsb2FkXCIsXG4gIFwiYmFja1wiLFxuICBcInByZWZldGNoXCIsXG4gIFwiYmVmb3JlUG9wU3RhdGVcIixcbl07XG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIFwiZXZlbnRzXCIsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzO1xuICB9LFxufSk7XG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnk7XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmc7XG4gICAgfSxcbiAgfSk7XG59KTtcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICAoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55O1xuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICB9O1xufSk7XG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gO1xuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnk7XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogX1JvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgXCJObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuXCIgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJAc3ltcGgvam95L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlcjtcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gXCIuL3dpdGgtcm91dGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogSm95Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dCk7XG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IF9Sb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKTtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKTtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogX1JvdXRlcik6IEpveVJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55O1xuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueTtcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pOyAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV07XG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/client/router.js\n");

/***/ }),

/***/ "../joy/dist/client/with-router.js":
/*!*****************************************!*\
  !*** ../joy/dist/client/with-router.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar router_1 = __webpack_require__(/*! ./router */ \"../joy/dist/client/router.js\");\n\nfunction withRouter(ComposedComponent) {\n  function WithRouterWrapper(props) {\n    return react_1[\"default\"].createElement(ComposedComponent, Object.assign({\n      router: (0, router_1.useRouter)()\n    }, props));\n  }\n\n  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app\n\n  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;\n\n  if (true) {\n    var name = ComposedComponent.displayName || ComposedComponent.name || \"Unknown\";\n    WithRouterWrapper.displayName = \"withRouter(\" + name + \")\";\n  }\n\n  return WithRouterWrapper;\n}\n\nexports[\"default\"] = withRouter;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFXQSxTQUF3QixVQUF4QixDQUlFLGlCQUpGLEVBSWdEO0FBRTlDLFdBQVMsaUJBQVQsQ0FBMkIsS0FBM0IsRUFBcUM7QUFDbkMsV0FBTyxpQ0FBQyxpQkFBRCxFQUFrQjtBQUFDLFlBQU0sRUFBRTtBQUFULE9BQTBCLEtBQTFCLENBQWxCLENBQVA7QUFDRDs7QUFFRCxtQkFBaUIsQ0FBQyxlQUFsQixHQUFvQyxpQkFBaUIsQ0FBQyxlQUF0RCxDQU44QyxDQU85Qzs7QUFDQyxtQkFBeUIsQ0FBQyxtQkFBMUIsR0FBaUQsaUJBQXlCLENBQUMsbUJBQTNFOztBQUNELFlBQTJDO0FBQ3pDLFFBQU0sSUFBSSxHQUNSLGlCQUFpQixDQUFDLFdBQWxCLElBQWlDLGlCQUFpQixDQUFDLElBQW5ELElBQTJELFNBRDdEO0FBRUEscUJBQWlCLENBQUMsV0FBbEIsbUJBQThDLElBQTlDO0FBQ0Q7O0FBRUQsU0FBTyxpQkFBUDtBQUNEOztBQXBCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC93aXRoLXJvdXRlci50c3g/NjZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBKb3lDb21wb25lbnRUeXBlLCBKb3lQYWdlQ29udGV4dCB9IGZyb20gXCIuLi9qb3ktc2VydmVyL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSm95Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IEpveVJvdXRlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IEpveVBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogSm95Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+O1xuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIChXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8IFwiVW5rbm93blwiO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/client/with-router.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/mitt.js":
/*!******************************************!*\
  !*** ../joy/dist/joy-server/lib/mitt.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/*\nMIT License\n\nCopyright (c) Jason Miller (https://jasonformat.com/)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nfunction mitt() {\n  var all = Object.create(null);\n  return {\n    on: function on(type, handler) {\n      (all[type] || (all[type] = [])).push(handler);\n    },\n    off: function off(type, handler) {\n      if (all[type]) {\n        all[type].splice(all[type].indexOf(handler) >>> 0, 1);\n      }\n    },\n    emit: function emit(type) {\n      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        evts[_key - 1] = arguments[_key];\n      }\n\n      // eslint-disable-next-line array-callback-return\n      (all[type] || []).slice().map(function (handler) {\n        handler.apply(void 0, evts);\n      });\n    }\n  };\n}\n\nexports[\"default\"] = mitt;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvbWl0dC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7O0FBVUU7Ozs7OztBQWNGLFNBQXdCLElBQXhCLEdBQTRCO0FBQzFCLE1BQU0sR0FBRyxHQUErQixNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsQ0FBeEM7QUFFQSxTQUFPO0FBQ0wsTUFESyxjQUNGLElBREUsRUFDWSxPQURaLEVBQzRCO0FBQy9CLE9BQUMsR0FBRyxDQUFDLElBQUQsQ0FBSCxLQUFjLEdBQUcsQ0FBQyxJQUFELENBQUgsR0FBWSxFQUExQixDQUFELEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0QsS0FISTtBQUtMLE9BTEssZUFLRCxJQUxDLEVBS2EsT0FMYixFQUs2QjtBQUNoQyxVQUFJLEdBQUcsQ0FBQyxJQUFELENBQVAsRUFBZTtBQUNiLFdBQUcsQ0FBQyxJQUFELENBQUgsQ0FBVSxNQUFWLENBQWlCLEdBQUcsQ0FBQyxJQUFELENBQUgsQ0FBVSxPQUFWLENBQWtCLE9BQWxCLE1BQStCLENBQWhELEVBQW1ELENBQW5EO0FBQ0Q7QUFDRixLQVRJO0FBV0wsUUFYSyxnQkFXQSxJQVhBLEVBVzRCO0FBQUEsd0NBQVgsSUFBVztBQUFYLFlBQVc7QUFBQTs7QUFDL0I7QUFDQSxPQUFDLEdBQUcsQ0FBQyxJQUFELENBQUgsSUFBYSxFQUFkLEVBQWtCLEtBQWxCLEdBQTBCLEdBQTFCLENBQThCLFVBQUMsT0FBRCxFQUFxQjtBQUNqRCxlQUFPLE1BQVAsU0FBVyxJQUFYO0FBQ0QsT0FGRDtBQUdEO0FBaEJJLEdBQVA7QUFrQkQ7O0FBckJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2pveS9zcmMvam95LXNlcnZlci9saWIvbWl0dC50cz9jYzU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkO1xuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZDtcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/mitt.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router-context.js":
/*!****************************************************!*\
  !*** ../joy/dist/joy-server/lib/router-context.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.RouterContext = void 0;\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nexports.RouterContext = react_1[\"default\"].createContext(null);\n\nif (true) {\n  exports.RouterContext.displayName = \"RouterContext\";\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHYSx3QkFBZ0IsbUJBQU0sYUFBTixDQUErQixJQUEvQixDQUFoQjs7QUFFYixJQUFJLE1BQXVDO0FBQ3pDLHNDQUE0QixlQUE1QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2pveS9zcmMvam95LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQudHM/MDliYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBKb3lSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXIvcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxKb3lSb3V0ZXI+KG51bGwgYXMgYW55KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZXJDb250ZXh0XCI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router-context.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/router.js":
/*!***************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/router.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ \"../joy/node_modules/@babel/runtime/regenerator/index.js\");\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.markLoadingError = exports.resolveHref = exports.isLocalURL = exports.delBasePath = exports.addBasePath = exports.hasBasePath = void 0;\n\nvar normalize_trailing_slash_1 = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ \"../joy/dist/client/normalize-trailing-slash.js\");\n\nvar denormalize_page_path_1 = __webpack_require__(/*! ../../server/denormalize-page-path */ \"../joy/dist/joy-server/server/denormalize-page-path.js\");\n\nvar mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ \"../joy/dist/joy-server/lib/mitt.js\"));\n\nvar utils_1 = __webpack_require__(/*! ../utils */ \"../joy/dist/joy-server/lib/utils.js\");\n\nvar is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ \"../joy/dist/joy-server/lib/router/utils/is-dynamic.js\");\n\nvar parse_relative_url_1 = __webpack_require__(/*! ./utils/parse-relative-url */ \"../joy/dist/joy-server/lib/router/utils/parse-relative-url.js\");\n\nvar querystring_1 = __webpack_require__(/*! ./utils/querystring */ \"../joy/dist/joy-server/lib/router/utils/querystring.js\");\n\nvar resolve_rewrites_1 = __importDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ \"../joy/dist/joy-server/lib/router/utils/resolve-rewrites.js\"));\n\nvar route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ \"../joy/dist/joy-server/lib/router/utils/route-matcher.js\");\n\nvar route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ \"../joy/dist/joy-server/lib/router/utils/route-regex.js\");\n\nvar basePath =  false || \"\";\n\nfunction buildCancellationError() {\n  return Object.assign(new Error(\"Route Cancelled\"), {\n    cancelled: true\n  });\n}\n\nfunction hasBasePath(path) {\n  return path === basePath || path.startsWith(basePath + \"/\");\n}\n\nexports.hasBasePath = hasBasePath;\n\nfunction addBasePath(path) {\n  // we only add the basepath on relative urls\n  return basePath && path.startsWith(\"/\") ? path === \"/\" ? (0, normalize_trailing_slash_1.normalizePathTrailingSlash)(basePath) : basePath + path : path;\n}\n\nexports.addBasePath = addBasePath;\n\nfunction delBasePath(path) {\n  return path.slice(basePath.length) || \"/\";\n}\n\nexports.delBasePath = delBasePath;\n/**\n * Detects whether a given url is routable by the Joy.js router (browser only).\n */\n\nfunction isLocalURL(url) {\n  if (url.startsWith(\"/\")) return true;\n\n  try {\n    // absolute urls can be local if they are on the same origin\n    var locationOrigin = (0, utils_1.getLocationOrigin)();\n    var resolved = new URL(url, locationOrigin);\n    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);\n  } catch (_) {\n    return false;\n  }\n}\n\nexports.isLocalURL = isLocalURL;\n/**\n * Resolves a given hyperlink with a certain router state (basePath not included).\n * Preserves absolute urls.\n */\n\nfunction resolveHref(currentPath, href) {\n  // we use a dummy base url for relative urls\n  var base = new URL(currentPath, \"http://n\");\n  var urlAsString = typeof href === \"string\" ? href : (0, utils_1.formatWithValidation)(href);\n\n  try {\n    var finalUrl = new URL(urlAsString, base);\n    finalUrl.pathname = (0, normalize_trailing_slash_1.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href\n\n    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;\n  } catch (_) {\n    return urlAsString;\n  }\n}\n\nexports.resolveHref = resolveHref;\nvar PAGE_LOAD_ERROR = Symbol(\"PAGE_LOAD_ERROR\");\n\nfunction markLoadingError(err) {\n  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});\n}\n\nexports.markLoadingError = markLoadingError;\n\nfunction prepareUrlAs(router, url, as) {\n  // If url and as provided as an object representation,\n  // we'll format them into the string version here.\n  return {\n    url: addBasePath(resolveHref(router.pathname, url)),\n    as: as ? addBasePath(resolveHref(router.pathname, as)) : as\n  };\n}\n\nvar manualScrollRestoration =  false && 0;\n\nfunction fetchRetry(url, attempts) {\n  return fetch(url, {\n    // Cookies are required to be present for Joy.js' SSG \"Preview Mode\".\n    // Cookies may also be required for `getServerSideProps`.\n    //\n    // > `fetch` won’t send cookies, unless you set the credentials init\n    // > option.\n    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch\n    //\n    // > For maximum browser compatibility when it comes to sending &\n    // > receiving cookies, always supply the `credentials: 'same-origin'`\n    // > option instead of relying on the default.\n    // https://github.com/github/fetch#caveats\n    credentials: \"same-origin\"\n  }).then(function (res) {\n    if (!res.ok) {\n      if (attempts > 1 && res.status >= 500) {\n        return fetchRetry(url, attempts - 1);\n      }\n\n      throw new Error(\"Failed to load static props\");\n    }\n\n    return res.json();\n  });\n}\n\nfunction fetchJoyData(dataHref, isServerRender) {\n  return fetchRetry(dataHref, isServerRender ? 3 : 1)[\"catch\"](function (err) {\n    // We should only trigger a server-side transition if this was caused\n    // on a client-side transition. Otherwise, we'd get into an infinite\n    // loop.\n    if (!isServerRender) {\n      markLoadingError(err);\n    }\n\n    throw err;\n  });\n}\n\nvar Router = /*#__PURE__*/function () {\n  function Router(pathname, query, as, _ref) {\n    var _this = this;\n\n    var initialProps = _ref.initialProps,\n        pageLoader = _ref.pageLoader,\n        App = _ref.App,\n        wrapApp = _ref.wrapApp,\n        Component = _ref.Component,\n        initialStyleSheets = _ref.initialStyleSheets,\n        err = _ref.err,\n        subscription = _ref.subscription,\n        isFallback = _ref.isFallback;\n    // Static Data Cache\n    this.sdc = {};\n\n    this.onPopState = function (e) {\n      var state = e.state;\n\n      if (!state) {\n        // We get state as undefined for two reasons.\n        //  1. With older safari (< 8) and older chrome (< 34)\n        //  2. When the URL changed with #\n        //\n        // In the both cases, we don't need to proceed and change the route.\n        // (as it's already changed)\n        // But we can simply replace the state with the new changes.\n        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.\n        // So, doing the following for (1) does no harm.\n        var _pathname = _this.pathname,\n            _query = _this.query;\n\n        _this.changeState(\"replaceState\", (0, utils_1.formatWithValidation)({\n          pathname: addBasePath(_pathname),\n          query: _query\n        }), (0, utils_1.getURL)());\n\n        return;\n      }\n\n      if (!state.__N) {\n        return;\n      }\n\n      var url = state.url,\n          as = state.as,\n          options = state.options;\n\n      var _ref2 = (0, parse_relative_url_1.parseRelativeUrl)(url),\n          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,\n      // can be caused by navigating back from an external site\n\n\n      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {\n        return;\n      } // If the downstream application returns falsy, return.\n      // They will then be responsible for handling the event.\n\n\n      if (_this._bps && !_this._bps(state)) {\n        return;\n      }\n\n      _this.change(\"replaceState\", url, as, Object.assign({}, options, {\n        shallow: options.shallow && _this._shallow\n      }));\n    }; // represents the current component key\n\n\n    this.route = (0, normalize_trailing_slash_1.removePathTrailingSlash)(pathname); // set up the component cache (by route keys)\n\n    this.components = {}; // We should not keep the cache, if there's an error\n    // Otherwise, this cause issues when when going back and\n    // come again to the errored page.\n\n    if (pathname !== \"/_error\") {\n      this.components[this.route] = {\n        // Component,\n        styleSheets: initialStyleSheets,\n        props: initialProps,\n        err: err,\n        __N_SSG: initialProps && initialProps.__N_SSG,\n        __N_SSP: initialProps && initialProps.__N_SSP\n      };\n    }\n\n    this.components[\"/_app\"] = {\n      // Component: App as ComponentType,\n      styleSheets: [\n        /* /_app does not need its stylesheets managed */\n      ]\n    }; // Backwards compat for Router.router.events\n    // TODO: Should be remove the following major version as it was never documented\n\n    this.events = Router.events;\n    this.pageLoader = pageLoader;\n    this.pathname = pathname;\n    this.query = query; // if auto prerendered and dynamic route wait to update asPath\n    // until after mount to prevent hydration mismatch\n\n    this.asPath = // @ts-ignore this is temporarily global (attached to window)\n    (0, is_dynamic_1.isDynamicRoute)(pathname) && __JOY_DATA__.autoExport ? pathname : as;\n    this.basePath = basePath;\n    this.sub = subscription;\n    this.clc = null;\n    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating\n    // back from external site\n\n    this.isSsr = true;\n    this.isFallback = isFallback;\n\n    if (true) {\n      // make sure \"as\" doesn't start with double slashes or else it can\n      // throw an error as it's considered invalid\n      if (as.substr(0, 2) !== \"//\") {\n        // in order for `e.state` to work on the `onpopstate` event\n        // we have to register the initial route upon initialization\n        this.changeState(\"replaceState\", (0, utils_1.formatWithValidation)({\n          pathname: addBasePath(pathname),\n          query: query\n        }), (0, utils_1.getURL)());\n      }\n\n      window.addEventListener(\"popstate\", this.onPopState); // enable custom scroll restoration handling when available\n      // otherwise fallback to browser's default handling\n\n      if (false) { var debouncedScrollSave, scrollDebounceTimeout; }\n    }\n  }\n\n  var _proto = Router.prototype;\n\n  _proto.reload = function reload() {\n    window.location.reload();\n  }\n  /**\n   * Go back in history\n   */\n  ;\n\n  _proto.back = function back() {\n    window.history.back();\n  }\n  /**\n   * Performs a `pushState` with arguments\n   * @param url of the route\n   * @param as masks `url` for the browser\n   * @param options object you can define `shallow` and other options\n   */\n  ;\n\n  _proto.push = function push(url, as, options) {\n    if (as === void 0) {\n      as = url;\n    }\n\n    if (options === void 0) {\n      options = {};\n    }\n\n    var _prepareUrlAs = prepareUrlAs(this, url, as);\n\n    url = _prepareUrlAs.url;\n    as = _prepareUrlAs.as;\n    return this.change(\"pushState\", url, as, options);\n  }\n  /**\n   * Performs a `replaceState` with arguments\n   * @param url of the route\n   * @param as masks `url` for the browser\n   * @param options object you can define `shallow` and other options\n   */\n  ;\n\n  _proto.replace = function replace(url, as, options) {\n    if (as === void 0) {\n      as = url;\n    }\n\n    if (options === void 0) {\n      options = {};\n    }\n\n    var _prepareUrlAs2 = prepareUrlAs(this, url, as);\n\n    url = _prepareUrlAs2.url;\n    as = _prepareUrlAs2.as;\n    return this.change(\"replaceState\", url, as, options);\n  };\n\n  _proto.change = function change(method, url, as, options) {\n    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {\n      var _this2 = this;\n\n      var cleanedAs, pages, _yield$this$pageLoade, rewrites, parsed, _parsed, pathname, searchParams, query, route, _options$shallow, shallow, resolvedAs, _ref3, asPathname, routeRegex, routeMatch, missingParams, routeInfo, error;\n\n      return _regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (isLocalURL(url)) {\n                _context.next = 3;\n                break;\n              }\n\n              window.location.href = url;\n              return _context.abrupt(\"return\", false);\n\n            case 3:\n              if (!options._h) {\n                this.isSsr = false;\n              } // marking route changes as a navigation start entry\n\n\n              if (utils_1.ST) {\n                performance.mark(\"routeChange\");\n              }\n\n              if (this._inFlightRoute) {\n                this.abortComponentLoad(this._inFlightRoute);\n              }\n\n              cleanedAs = hasBasePath(as) ? delBasePath(as) : as;\n              this._inFlightRoute = as; // If the url change is only related to a hash change\n              // We should not proceed. We should only change the state.\n              // WARNING: `_h` is an internal option for handing Joy.js client-side\n              // hydration. Your app should _never_ use this property. It may change at\n              // any time without notice.\n\n              if (!(!options._h && this.onlyAHashChange(cleanedAs))) {\n                _context.next = 16;\n                break;\n              }\n\n              this.asPath = cleanedAs;\n              Router.events.emit(\"hashChangeStart\", as); // TODO: do we need the resolved href when only a hash change?\n\n              this.changeState(method, url, as, options);\n              this.scrollToHash(cleanedAs);\n              this.notify(this.components[this.route]);\n              Router.events.emit(\"hashChangeComplete\", as);\n              return _context.abrupt(\"return\", true);\n\n            case 16:\n              _context.next = 18;\n              return this.pageLoader.getPageList();\n\n            case 18:\n              pages = _context.sent;\n              _context.next = 21;\n              return this.pageLoader.promisedBuildManifest;\n\n            case 21:\n              _yield$this$pageLoade = _context.sent;\n              rewrites = _yield$this$pageLoade.__rewrites;\n              parsed = (0, parse_relative_url_1.parseRelativeUrl)(url);\n              _parsed = parsed, pathname = _parsed.pathname, searchParams = _parsed.searchParams;\n              parsed = this._resolveHref(parsed, pages);\n\n              if (parsed.pathname !== pathname) {\n                pathname = parsed.pathname;\n                url = (0, utils_1.formatWithValidation)(parsed);\n              }\n\n              query = (0, querystring_1.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this\n              // point by either joy/link or router.push/replace so strip the\n              // basePath from the pathname to match the pages dir 1-to-1\n\n              pathname = pathname ? (0, normalize_trailing_slash_1.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page\n              // (not location.reload() but reload getInitialProps and other Joy.js stuffs)\n              // We also need to set the method = replaceState always\n              // as this should not go into the history (That's how browsers work)\n              // We should compare the new asPath to the current asPath, not the url\n\n              if (!this.urlIsNew(cleanedAs)) {\n                method = \"replaceState\";\n              }\n\n              route = (0, normalize_trailing_slash_1.removePathTrailingSlash)(pathname);\n              _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow; // we need to resolve the as value using rewrites for dynamic SSG\n              // pages to allow building the data URL correctly\n\n              resolvedAs = as;\n\n              if (true) {\n                resolvedAs = (0, resolve_rewrites_1[\"default\"])(as, pages, basePath, rewrites, query, function (p) {\n                  return _this2._resolveHref({\n                    pathname: p\n                  }, pages).pathname;\n                });\n              }\n\n              resolvedAs = delBasePath(resolvedAs);\n\n              if (!(0, is_dynamic_1.isDynamicRoute)(route)) {\n                _context.next = 47;\n                break;\n              }\n\n              _ref3 = (0, parse_relative_url_1.parseRelativeUrl)(resolvedAs), asPathname = _ref3.pathname;\n              routeRegex = (0, route_regex_1.getRouteRegex)(route);\n              routeMatch = (0, route_matcher_1.getRouteMatcher)(routeRegex)(asPathname);\n\n              if (routeMatch) {\n                _context.next = 46;\n                break;\n              }\n\n              missingParams = Object.keys(routeRegex.groups).filter(function (param) {\n                return !query[param];\n              });\n\n              if (!(missingParams.length > 0)) {\n                _context.next = 44;\n                break;\n              }\n\n              if (true) {\n                console.warn(\"Mismatching `as` and `href` failed to manually provide \" + (\"the params: \" + missingParams.join(\", \") + \" in the `href`'s `query`\"));\n              }\n\n              throw new Error(\"The provided `as` value (\" + asPathname + \") is incompatible with the `href` value (\" + route + \"). \");\n\n            case 44:\n              _context.next = 47;\n              break;\n\n            case 46:\n              // Merge params into `query`, overwriting any specified in search\n              Object.assign(query, routeMatch);\n\n            case 47:\n              Router.events.emit(\"routeChangeStart\", as);\n              _context.prev = 48;\n              _context.next = 51;\n              return this.getRouteInfo(route, pathname, query, as, shallow);\n\n            case 51:\n              routeInfo = _context.sent;\n              error = routeInfo.error;\n              Router.events.emit(\"beforeHistoryChange\", as);\n              this.changeState(method, url, as, options);\n\n              if (true) {// const appComp: any = this.components[\"/_app\"].Component;\n                // (window as any).joy.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !(routeInfo.Component as any).getInitialProps;\n              }\n\n              _context.next = 58;\n              return this.set(route, pathname, query, cleanedAs, routeInfo)[\"catch\"](function (e) {\n                if (e.cancelled) error = error || e;else throw e;\n              });\n\n            case 58:\n              if (!error) {\n                _context.next = 61;\n                break;\n              }\n\n              Router.events.emit(\"routeChangeError\", error, cleanedAs);\n              throw error;\n\n            case 61:\n              if (false) {}\n\n              Router.events.emit(\"routeChangeComplete\", as);\n              return _context.abrupt(\"return\", true);\n\n            case 66:\n              _context.prev = 66;\n              _context.t0 = _context[\"catch\"](48);\n\n              if (!_context.t0.cancelled) {\n                _context.next = 70;\n                break;\n              }\n\n              return _context.abrupt(\"return\", false);\n\n            case 70:\n              throw _context.t0;\n\n            case 71:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this, [[48, 66]]);\n    }));\n  };\n\n  _proto.changeState = function changeState(method, url, as, options) {\n    if (options === void 0) {\n      options = {};\n    }\n\n    if (true) {\n      if (typeof window.history === \"undefined\") {\n        console.error(\"Warning: window.history is not available.\");\n        return;\n      }\n\n      if (typeof window.history[method] === \"undefined\") {\n        console.error(\"Warning: window.history.\" + method + \" is not available\");\n        return;\n      }\n    }\n\n    if (method !== \"pushState\" || (0, utils_1.getURL)() !== as) {\n      this._shallow = options.shallow;\n      window.history[method]({\n        url: url,\n        as: as,\n        options: options,\n        __N: true\n      }, // Most browsers currently ignores this parameter, although they may use it in the future.\n      // Passing the empty string here should be safe against future changes to the method.\n      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState\n      \"\", as);\n    }\n  };\n\n  _proto.handleRouteInfoError = function handleRouteInfoError(err, pathname, query, as, loadErrorFail) {\n    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {\n      var _yield$this$fetchComp, Component, styleSheets, routeInfo;\n\n      return _regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!err.cancelled) {\n                _context2.next = 2;\n                break;\n              }\n\n              throw err;\n\n            case 2:\n              if (!(PAGE_LOAD_ERROR in err || loadErrorFail)) {\n                _context2.next = 6;\n                break;\n              }\n\n              Router.events.emit(\"routeChangeError\", err, as); // If we can't load the page it could be one of following reasons\n              //  1. Page doesn't exists\n              //  2. Page does exist in a different zone\n              //  3. Internal error while loading the page\n              // So, doing a hard reload is the proper way to deal with this.\n\n              window.location.href = as; // Changing the URL doesn't block executing the current code path.\n              // So let's throw a cancellation error stop the routing logic.\n\n              throw buildCancellationError();\n\n            case 6:\n              _context2.prev = 6;\n              _context2.next = 9;\n              return this.fetchComponent(\"/_error\");\n\n            case 9:\n              _yield$this$fetchComp = _context2.sent;\n              Component = _yield$this$fetchComp.page;\n              styleSheets = _yield$this$fetchComp.styleSheets;\n              routeInfo = {\n                // Component,\n                styleSheets: styleSheets,\n                err: err,\n                error: err\n              };\n              _context2.prev = 13;\n              _context2.next = 16;\n              return this.getInitialProps(Component, {\n                err: err,\n                pathname: pathname,\n                query: query\n              });\n\n            case 16:\n              routeInfo.props = _context2.sent;\n              _context2.next = 23;\n              break;\n\n            case 19:\n              _context2.prev = 19;\n              _context2.t0 = _context2[\"catch\"](13);\n              console.error(\"Error in error page `getInitialProps`: \", _context2.t0);\n              routeInfo.props = {};\n\n            case 23:\n              return _context2.abrupt(\"return\", routeInfo);\n\n            case 26:\n              _context2.prev = 26;\n              _context2.t1 = _context2[\"catch\"](6);\n              return _context2.abrupt(\"return\", this.handleRouteInfoError(_context2.t1, pathname, query, as, true));\n\n            case 29:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this, [[6, 26], [13, 19]]);\n    }));\n  };\n\n  _proto.getRouteInfo = function getRouteInfo(route, pathname, query, as, shallow) {\n    if (shallow === void 0) {\n      shallow = false;\n    }\n\n    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {\n      return _regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n  };\n\n  _proto.set = function set(route, pathname, query, as, data) {\n    this.isFallback = false;\n    this.route = route;\n    this.pathname = pathname;\n    this.query = query;\n    this.asPath = as;\n    return this.notify(data);\n  }\n  /**\n   * Callback to execute before replacing router state\n   * @param cb callback to be executed\n   */\n  ;\n\n  _proto.beforePopState = function beforePopState(cb) {\n    this._bps = cb;\n  };\n\n  _proto.onlyAHashChange = function onlyAHashChange(as) {\n    if (!this.asPath) return false;\n\n    var _this$asPath$split = this.asPath.split(\"#\"),\n        oldUrlNoHash = _this$asPath$split[0],\n        oldHash = _this$asPath$split[1];\n\n    var _as$split = as.split(\"#\"),\n        newUrlNoHash = _as$split[0],\n        newHash = _as$split[1]; // Makes sure we scroll to the provided hash if the url/hash are the same\n\n\n    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {\n      return true;\n    } // If the urls are change, there's more than a hash change\n\n\n    if (oldUrlNoHash !== newUrlNoHash) {\n      return false;\n    } // If the hash has changed, then it's a hash only change.\n    // This check is necessary to handle both the enter and\n    // leave hash === '' cases. The identity case falls through\n    // and is treated as a next reload.\n\n\n    return oldHash !== newHash;\n  };\n\n  _proto.scrollToHash = function scrollToHash(as) {\n    var _as$split2 = as.split(\"#\"),\n        hash = _as$split2[1]; // Scroll to top if the hash is just `#` with no value\n\n\n    if (hash === \"\") {\n      window.scrollTo(0, 0);\n      return;\n    } // First we check if the element by id is found\n\n\n    var idEl = document.getElementById(hash);\n\n    if (idEl) {\n      idEl.scrollIntoView();\n      return;\n    } // If there's no element with the id, we check the `name` property\n    // To mirror browsers\n\n\n    var nameEl = document.getElementsByName(hash)[0];\n\n    if (nameEl) {\n      nameEl.scrollIntoView();\n    }\n  };\n\n  _proto.urlIsNew = function urlIsNew(asPath) {\n    return this.asPath !== asPath;\n  };\n\n  _proto._resolveHref = function _resolveHref(parsedHref, pages) {\n    var pathname = parsedHref.pathname;\n    var cleanPathname = (0, denormalize_page_path_1.denormalizePagePath)(delBasePath(pathname));\n\n    if (cleanPathname === \"/404\" || cleanPathname === \"/_error\") {\n      return parsedHref;\n    } // handle resolving href for dynamic routes\n\n\n    if (!pages.includes(cleanPathname)) {\n      // eslint-disable-next-line array-callback-return\n      pages.some(function (page) {\n        if ((0, is_dynamic_1.isDynamicRoute)(page) && (0, route_regex_1.getRouteRegex)(page).re.test(cleanPathname)) {\n          parsedHref.pathname = addBasePath(page);\n          return true;\n        }\n      });\n    }\n\n    return parsedHref;\n  }\n  /**\n   * Prefetch page code, you may wait for the data during page rendering.\n   * This feature only works in production!\n   * @param url the href of prefetched page\n   * @param asPath the as path of the prefetched page\n   */\n  ;\n\n  _proto.prefetch = function prefetch(url, asPath, options) {\n    if (asPath === void 0) {\n      asPath = url;\n    }\n\n    if (options === void 0) {\n      options = {};\n    }\n\n    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {\n      var parsed, _parsed2, pathname, pages, route;\n\n      return _regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              parsed = (0, parse_relative_url_1.parseRelativeUrl)(url);\n              _parsed2 = parsed, pathname = _parsed2.pathname;\n              _context4.next = 4;\n              return this.pageLoader.getPageList();\n\n            case 4:\n              pages = _context4.sent;\n              parsed = this._resolveHref(parsed, pages);\n\n              if (parsed.pathname !== pathname) {\n                pathname = parsed.pathname;\n                url = (0, utils_1.formatWithValidation)(parsed);\n              } // Prefetch is not supported in development mode because it would trigger on-demand-entries\n\n\n              if (false) {}\n\n              return _context4.abrupt(\"return\");\n\n            case 9:\n              route = (0, normalize_trailing_slash_1.removePathTrailingSlash)(pathname);\n              _context4.next = 12;\n              return Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? \"loadPage\" : \"prefetch\"](route)]);\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, this);\n    }));\n  };\n\n  _proto.fetchComponent = function fetchComponent(route) {\n    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {\n      var cancelled, cancel, componentResult, error;\n      return _regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              cancelled = false;\n\n              cancel = this.clc = function () {\n                cancelled = true;\n              };\n\n              _context5.next = 4;\n              return this.pageLoader.loadPage(route);\n\n            case 4:\n              componentResult = _context5.sent;\n\n              if (!cancelled) {\n                _context5.next = 9;\n                break;\n              }\n\n              error = new Error(\"Abort fetching component for route: \\\"\" + route + \"\\\"\");\n              error.cancelled = true;\n              throw error;\n\n            case 9:\n              if (cancel === this.clc) {\n                this.clc = null;\n              }\n\n              return _context5.abrupt(\"return\", componentResult);\n\n            case 11:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, this);\n    }));\n  };\n\n  _proto._getData = function _getData(fn) {\n    var _this3 = this;\n\n    var cancelled = false;\n\n    var cancel = function cancel() {\n      cancelled = true;\n    };\n\n    this.clc = cancel;\n    return fn().then(function (data) {\n      if (cancel === _this3.clc) {\n        _this3.clc = null;\n      }\n\n      if (cancelled) {\n        var err = new Error(\"DynamicLoading initial props cancelled\");\n        err.cancelled = true;\n        throw err;\n      }\n\n      return data;\n    });\n  };\n\n  _proto._getStaticData = function _getStaticData(dataHref) {\n    var _this4 = this;\n\n    var _URL = new URL(dataHref, window.location.href),\n        cacheKey = _URL.href;\n\n    if (false) {}\n\n    return fetchJoyData(dataHref, this.isSsr).then(function (data) {\n      _this4.sdc[cacheKey] = data;\n      return data;\n    });\n  };\n\n  _proto._getServerData = function _getServerData(dataHref) {\n    return fetchJoyData(dataHref, this.isSsr);\n  };\n\n  _proto.getInitialProps = function getInitialProps(Component, ctx) {// const { Component: App } = this.components[\"/_app\"];\n    // const AppTree = this._wrapApp(App as AppComponent);\n    // ctx.AppTree = AppTree;\n    // return loadGetInitialProps<AppContextType<Router>>(App, {\n    //   AppTree,\n    //   Component,\n    //   router: this,\n    //   ctx,\n    // });\n  };\n\n  _proto.abortComponentLoad = function abortComponentLoad(as) {\n    if (this.clc) {\n      Router.events.emit(\"routeChangeError\", buildCancellationError(), as);\n      this.clc();\n      this.clc = null;\n    }\n  };\n\n  _proto.notify = function notify(data) {// return this.sub(data, this.components[\"/_app\"].Component as AppComponent);\n  };\n\n  return Router;\n}();\n\nexports[\"default\"] = Router;\nRouter.events = (0, mitt_1[\"default\"])();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFjQSxJQUFNLFFBQVEsR0FBSSxVQUFnRCxFQUFsRTs7QUFFQSxTQUFTLHNCQUFULEdBQStCO0FBQzdCLFNBQU8sTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFJLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTRDO0FBQ2pELGFBQVMsRUFBRTtBQURzQyxHQUE1QyxDQUFQO0FBR0Q7O0FBRUQsU0FBZ0IsV0FBaEIsQ0FBNEIsSUFBNUIsRUFBd0M7QUFDdEMsU0FBTyxJQUFJLEtBQUssUUFBVCxJQUFxQixJQUFJLENBQUMsVUFBTCxDQUFnQixRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDRDs7QUFGRDs7QUFJQSxTQUFnQixXQUFoQixDQUE0QixJQUE1QixFQUF3QztBQUN0QztBQUNBLFNBQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFMLENBQWdCLEdBQWhCLENBQVosR0FBb0MsSUFBSSxLQUFLLEdBQVQsR0FBZSwyREFBMkIsUUFBM0IsQ0FBZixHQUFzRCxRQUFRLEdBQUcsSUFBckcsR0FBNkcsSUFBcEg7QUFDRDs7QUFIRDs7QUFLQSxTQUFnQixXQUFoQixDQUE0QixJQUE1QixFQUF3QztBQUN0QyxTQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBUSxDQUFDLE1BQXBCLEtBQStCLEdBQXRDO0FBQ0Q7O0FBRkQ7QUFJQTs7QUFFRzs7QUFDSCxTQUFnQixVQUFoQixDQUEyQixHQUEzQixFQUFzQztBQUNwQyxNQUFJLEdBQUcsQ0FBQyxVQUFKLENBQWUsR0FBZixDQUFKLEVBQXlCLE9BQU8sSUFBUDs7QUFDekIsTUFBSTtBQUNGO0FBQ0EsUUFBTSxjQUFjLEdBQUcsZ0NB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QUVELHlDQUFlLFFBQWYsRUFBK0I7QUFBQTs7QUFDN0IsZUFBMkIsSUFBSSxHQUFKLENBQVEsUUFBUixFQUFrQixNQUFNLENBQUMsUUFBUCxDQUFnQixJQUFsQyxDQUEzQjtBQUFBLFFBQWMsUUFBZCxRQUFRLElBQVI7O0FBQ0EsUUFBSSxLQUFKLEVBQWlFLEVBRWhFOztBQUNELFdBQU8sWUFBWSxDQUFDLFFBQUQsRUFBVyxLQUFLLEtBQWhCLENBQVosQ0FBbUMsSUFBbkMsQ0FBd0MsVUFBQyxJQUFELEVBQVM7QUFDdEQsWUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFULElBQXFCLElBQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FITSxDQUFQO0FBSUQ7O1NBRUQseUNBQWUsUUFBZixFQUErQjtBQUM3QixXQUFPLFlBQVksQ0FBQyxRQUFELEVBQVcsS0FBSyxLQUFoQixDQUFuQjtBQUNEOztTQUVELDJDQUFnQixTQUFoQixFQUEwQyxHQUExQyxFQUE2RCxDQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7U0FFRCxpREFBbUIsRUFBbkIsRUFBNkI7QUFDM0IsUUFBSSxLQUFLLEdBQVQsRUFBYztBQUNaLFlBQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUMsc0JBQXNCLEVBQTdELEVBQWlFLEVBQWpFO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMLEdBQVcsSUFBWDtBQUNEO0FBQ0Y7O1NBRUQseUJBQU8sSUFBUCxFQUE2QixDQUMzQjtBQUNEOzs7OztBQS9yQkg7QUF3QlMsZ0JBQXNCLHdCQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2pveS1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHM/ZTg0MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgX19KT1lfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IHsgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSBcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIjtcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gXCIuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXJcIjtcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tIFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiO1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tIFwiLi4vbWl0dFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dFR5cGUsIGZvcm1hdFdpdGhWYWxpZGF0aW9uLCBnZXRMb2NhdGlvbk9yaWdpbiwgZ2V0VVJMLCBsb2FkR2V0SW5pdGlhbFByb3BzLCBKb3lQYWdlQ29udGV4dCwgU1QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSBcIi4vdXRpbHMvaXMtZHluYW1pY1wiO1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiO1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIjtcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIjtcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tIFwiLi91dGlscy9yb3V0ZS1yZWdleFwiO1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEpveUhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nO1xuICBhczogc3RyaW5nO1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucztcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIEpveUhpc3RvcnlTdGF0ZSk7XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fSk9ZX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8IFwiXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihcIlJvdXRlIENhbmNlbGxlZFwiKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArIFwiL1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gKHBhdGggPT09IFwiL1wiID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpIDogYmFzZVBhdGggKyBwYXRoKSA6IHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8IFwiL1wiO1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgSm95LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmc7XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgXCJodHRwOi8vblwiKTtcbiAgY29uc3QgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gXCJzdHJpbmdcIiA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZztcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woXCJQQUdFX0xPQURfRVJST1JcIik7XG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IEpveVJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nO1xuICBwYXRobmFtZTogc3RyaW5nO1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnk7XG4gIGFzUGF0aDogc3RyaW5nO1xuICBiYXNlUGF0aDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgSm95Um91dGVyID0gQmFzZVJvdXRlciAmIFBpY2s8Um91dGVyLCBcInB1c2hcIiB8IFwicmVwbGFjZVwiIHwgXCJyZWxvYWRcIiB8IFwiYmFja1wiIHwgXCJwcmVmZXRjaFwiIHwgXCJiZWZvcmVQb3BTdGF0ZVwiIHwgXCJldmVudHNcIiB8IFwiaXNGYWxsYmFja1wiPjtcblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICAvLyBDb21wb25lbnQ6IENvbXBvbmVudFR5cGU7XG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXTtcbiAgX19OX1NTRz86IGJvb2xlYW47XG4gIF9fTl9TU1A/OiBib29sZWFuO1xuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIGVycj86IEVycm9yO1xuICBlcnJvcj86IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCBcImVyclwiPiAmIHtcbiAgLy8gcm91dGVyOiBSb3V0ZXI7XG59ICYgUmVjb3JkPHN0cmluZywgYW55PjtcbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+O1xuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPjtcblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBKb3lIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW47XG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGw7XG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9IFwicmVwbGFjZVN0YXRlXCIgfCBcInB1c2hTdGF0ZVwiO1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fSk9ZX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiB3aW5kb3cuaGlzdG9yeTtcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBKb3kuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hKb3lEYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycik7XG4gICAgfVxuICAgIHRocm93IGVycjtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nO1xuICBwYXRobmFtZTogc3RyaW5nO1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnk7XG4gIGFzUGF0aDogc3RyaW5nO1xuICBiYXNlUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9O1xuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fTtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbDtcbiAgcGFnZUxvYWRlcjogYW55O1xuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkO1xuICBldmVudHM6IE1pdHRFbWl0dGVyO1xuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnk7XG4gIGlzU3NyOiBib29sZWFuO1xuICBpc0ZhbGxiYWNrOiBib29sZWFuO1xuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZztcbiAgX3NoYWxsb3c/OiBib29sZWFuO1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgICAgaW5pdGlhbFByb3BzOiBhbnk7XG4gICAgICBwYWdlTG9hZGVyOiBhbnk7XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGU7XG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdO1xuICAgICAgQXBwOiBBcHBDb21wb25lbnQ7XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueTtcbiAgICAgIGVycj86IEVycm9yO1xuICAgICAgaXNGYWxsYmFjazogYm9vbGVhbjtcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSBcIi9fZXJyb3JcIikge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAvLyBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1tcIi9fYXBwXCJdID0ge1xuICAgICAgLy8gQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfTtcblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX0pPWV9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSBcIi8vXCIpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJyZXBsYWNlU3RhdGVcIiwgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSwgZ2V0VVJMKCkpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BTdGF0ZSk7XG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX0pPWV9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiO1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXQ7XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dCk7XG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlO1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgIFwicmVwbGFjZVN0YXRlXCIsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZGVib3VuY2VkU2Nyb2xsU2F2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcInJlcGxhY2VTdGF0ZVwiLCBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLCBnZXRVUkwoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlO1xuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgXCJyZXBsYWNlU3RhdGVcIixcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICAoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgIHJldHVybiB0aGlzLmNoYW5nZShcInB1c2hTdGF0ZVwiLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgICh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKFwicmVwbGFjZVN0YXRlXCIsIHVybCwgYXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlKG1ldGhvZDogSGlzdG9yeU1ldGhvZCwgdXJsOiBzdHJpbmcsIGFzOiBzdHJpbmcsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKFwicm91dGVDaGFuZ2VcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzO1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgSm95LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcImhhc2hDaGFuZ2VTdGFydFwiLCBhcyk7XG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXCJoYXNoQ2hhbmdlQ29tcGxldGVcIiwgYXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0O1xuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKTtcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZDtcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWQ7XG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpO1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBqb3kvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZSA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSkgOiBwYXRobmFtZTtcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgSm95LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9IFwicmVwbGFjZVN0YXRlXCI7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fSk9ZX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhhcywgcGFnZXMsIGJhc2VQYXRoLCByZXdyaXRlcywgcXVlcnksIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISk7XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKTtcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXSk7XG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXCIsIFwiKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGFzKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyk7XG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXCJiZWZvcmVIaXN0b3J5Q2hhbmdlXCIsIGFzKTtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvLyBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbXCIvX2FwcFwiXS5Db21wb25lbnQ7XG4gICAgICAgIC8vICh3aW5kb3cgYXMgYW55KS5qb3kuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZXJyb3IsIGNsZWFuZWRBcyk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19KT1lfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiBcIl9OX1hcIiBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBhcyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKG1ldGhvZDogSGlzdG9yeU1ldGhvZCwgdXJsOiBzdHJpbmcsIGFzOiBzdHJpbmcsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSBcInB1c2hTdGF0ZVwiIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgXCJcIixcbiAgICAgICAgYXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZXJyLCBhcyk7XG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFwiL19lcnJvclwiKTtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgLy8gQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSk7XG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6IFwiLCBnaXBFcnIpO1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlOiBzdHJpbmcsIHBhdGhuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBhbnksIGFzOiBzdHJpbmcsIHNoYWxsb3cgPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgLy9cbiAgICAvLyAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgIC8vICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAvLyAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAvLyAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgLy8gICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgIC8vICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAvLyAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAvLyAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAvLyAgICAgICB9KSk7XG4gICAgLy9cbiAgICAvLyAgIGNvbnN0IHsgIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAvL1xuICAgIC8vICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICAgLy8gICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZShcInJlYWN0LWlzXCIpO1xuICAgIC8vICAgLy8gICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgLy8gICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgIC8vICAgLy8gICB9XG4gICAgLy8gICAvLyB9XG4gICAgLy9cbiAgICAvLyAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8vXG4gICAgLy8gICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgLy8gICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBkZWxCYXNlUGF0aChhcyksIF9fTl9TU0cpO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAvLyBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAvLyAgIC8vICAgX19OX1NTR1xuICAgIC8vICAgLy8gICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgLy8gICAvLyAgICAgOiBfX05fU1NQXG4gICAgLy8gICAvLyAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAvLyAgIC8vICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgIC8vICAgLy8gICAgICAgICBDb21wb25lbnQsXG4gICAgLy8gICAvLyAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgLy8gICAvLyAgICAgICAgIHtcbiAgICAvLyAgIC8vICAgICAgICAgICBwYXRobmFtZSxcbiAgICAvLyAgIC8vICAgICAgICAgICBxdWVyeSxcbiAgICAvLyAgIC8vICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgIC8vICAgLy8gICAgICAgICB9IGFzIGFueVxuICAgIC8vICAgLy8gICAgICAgKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIC8vIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgIC8vICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAvLyAgIHJldHVybiByb3V0ZUluZm87XG4gICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHNldChyb3V0ZTogc3RyaW5nLCBwYXRobmFtZTogc3RyaW5nLCBxdWVyeTogUGFyc2VkVXJsUXVlcnksIGFzOiBzdHJpbmcsIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiO1xuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdChcIiNcIik7XG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdChcIiNcIik7XG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoXCIjXCIpO1xuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSBcIlwiKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWY7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSk7XG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gXCIvNDA0XCIgfHwgY2xlYW5QYXRobmFtZSA9PT0gXCIvX2Vycm9yXCIpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2godXJsOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nID0gdXJsLCBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybCk7XG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkO1xuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWQ7XG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLCB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/IFwibG9hZFBhZ2VcIiA6IFwicHJlZmV0Y2hcIl0ocm91dGUpXSk7XG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcihcIkR5bmFtaWNMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkXCIpO1xuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hKb3lEYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hKb3lEYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKTtcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsIGN0eDogSm95UGFnZUNvbnRleHQpOiBhbnkge1xuICAgIC8vIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1tcIi9fYXBwXCJdO1xuICAgIC8vIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpO1xuICAgIC8vIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAvLyByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAvLyAgIEFwcFRyZWUsXG4gICAgLy8gICBDb21wb25lbnQsXG4gICAgLy8gICByb3V0ZXI6IHRoaXMsXG4gICAgLy8gICBjdHgsXG4gICAgLy8gfSk7XG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFwicm91dGVDaGFuZ2VFcnJvclwiLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKTtcbiAgICAgIHRoaXMuY2xjKCk7XG4gICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBhbnkge1xuICAgIC8vIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbXCIvX2FwcFwiXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/router.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/format-url.js":
/*!*************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/format-url.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n // Format function modified from nodejs\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.formatUrl = void 0;\n\nvar querystring = __importStar(__webpack_require__(/*! ./querystring */ \"../joy/dist/joy-server/lib/router/utils/querystring.js\"));\n\nvar slashedProtocols = /https?|ftp|gopher|file/;\n\nfunction formatUrl(urlObj) {\n  var auth = urlObj.auth,\n      hostname = urlObj.hostname;\n  var protocol = urlObj.protocol || \"\";\n  var pathname = urlObj.pathname || \"\";\n  var hash = urlObj.hash || \"\";\n  var query = urlObj.query || \"\";\n  var host = false;\n  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, \":\") + \"@\" : \"\";\n\n  if (urlObj.host) {\n    host = auth + urlObj.host;\n  } else if (hostname) {\n    host = auth + (~hostname.indexOf(\":\") ? \"[\" + hostname + \"]\" : hostname);\n\n    if (urlObj.port) {\n      host += \":\" + urlObj.port;\n    }\n  }\n\n  if (query && typeof query === \"object\") {\n    query = String(querystring.urlQueryToSearchParams(query));\n  }\n\n  var search = urlObj.search || query && \"?\" + query || \"\";\n  if (protocol && protocol.substr(-1) !== \":\") protocol += \":\";\n\n  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {\n    host = \"//\" + (host || \"\");\n    if (pathname && pathname[0] !== \"/\") pathname = \"/\" + pathname;\n  } else if (!host) {\n    host = \"\";\n  }\n\n  if (hash && hash[0] !== \"#\") hash = \"#\" + hash;\n  if (search && search[0] !== \"?\") search = \"?\" + search;\n  pathname = pathname.replace(/[?#]/g, encodeURIComponent);\n  search = search.replace(\"#\", \"%23\");\n  return \"\" + protocol + host + pathname + search + hash;\n}\n\nexports.formatUrl = formatUrl;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMuanMiLCJtYXBwaW5ncyI6IjtDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQSxJQUFNLGdCQUFnQixHQUFHLHdCQUF6Qjs7QUFFQSxTQUFnQixTQUFoQixDQUEwQixNQUExQixFQUEyQztBQUN6QyxNQUFNLElBQU4sR0FBeUIsTUFBekIsQ0FBTSxJQUFOO0FBQUEsTUFBWSxRQUFaLEdBQXlCLE1BQXpCLENBQVksUUFBWjtBQUNBLE1BQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFQLElBQW1CLEVBQWxDO0FBQ0EsTUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVAsSUFBbUIsRUFBbEM7QUFDQSxNQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBUCxJQUFlLEVBQTFCO0FBQ0EsTUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQVAsSUFBZ0IsRUFBNUI7QUFDQSxNQUFJLElBQUksR0FBbUIsS0FBM0I7QUFFQSxNQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUQsQ0FBbEIsQ0FBeUIsT0FBekIsQ0FBaUMsTUFBakMsRUFBeUMsR0FBekMsSUFBZ0QsR0FBbkQsR0FBeUQsRUFBcEU7O0FBRUEsTUFBSSxNQUFNLENBQUMsSUFBWCxFQUFpQjtBQUNmLFFBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQXJCO0FBQ0QsR0FGRCxNQUVPLElBQUksUUFBSixFQUFjO0FBQ25CLFFBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBVCxDQUFpQixHQUFqQixDQUFELFNBQTZCLFFBQTdCLFNBQTJDLFFBQS9DLENBQVg7O0FBQ0EsUUFBSSxNQUFNLENBQUMsSUFBWCxFQUFpQjtBQUNmLFVBQUksSUFBSSxNQUFNLE1BQU0sQ0FBQyxJQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxLQUFLLElBQUksT0FBTyxLQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0FBQ3RDLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFaLENBQW1DLEtBQW5DLENBQUQsQ0FBZDtBQUNEOztBQUVELE1BQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFQLElBQWtCLEtBQUssVUFBUSxLQUEvQixJQUEyQyxFQUF4RDtBQUVBLE1BQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFULENBQWdCLENBQUMsQ0FBakIsTUFBd0IsR0FBeEMsRUFBNkMsUUFBUSxJQUFJLEdBQVo7O0FBRTdDLE1BQ0UsTUFBTSxDQUFDLE9BQVAsSUFDQyxDQUFDLENBQUMsUUFBRCxJQUFhLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLFFBQXRCLENBQWQsS0FBa0QsSUFBSSxLQUFLLEtBRjlELEVBR0U7QUFDQSxRQUFJLEdBQUcsUUFBUSxJQUFJLElBQUksRUFBaEIsQ0FBUDtBQUNBLFFBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFELENBQVIsS0FBZ0IsR0FBaEMsRUFBcUMsUUFBUSxHQUFHLE1BQU0sUUFBakI7QUFDdEMsR0FORCxNQU1PLElBQUksQ0FBQyxJQUFMLEVBQVc7QUFDaEIsUUFBSSxHQUFHLEVBQVA7QUFDRDs7QUFFRCxNQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksR0FBeEIsRUFBNkIsSUFBSSxHQUFHLE1BQU0sSUFBYjtBQUM3QixNQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsR0FBNUIsRUFBaUMsTUFBTSxHQUFHLE1BQU0sTUFBZjtBQUVqQyxVQUFRLEdBQUcsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEIsa0JBQTFCLENBQVg7QUFDQSxRQUFNLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEtBQXBCLENBQVQ7QUFFQSxjQUFVLFFBQVYsR0FBcUIsSUFBckIsR0FBNEIsUUFBNUIsR0FBdUMsTUFBdkMsR0FBZ0QsSUFBaEQ7QUFDRDs7QUE1Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cz84OTM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tIFwiLi9xdWVyeXN0cmluZ1wiO1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmo7XG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCBcIlwiO1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgXCJcIjtcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCBcIlwiO1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgXCJcIjtcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2U7XG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksIFwiOlwiKSArIFwiQFwiIDogXCJcIjtcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0O1xuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpO1xuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSBcIjpcIiArIHVybE9iai5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09IFwib2JqZWN0XCIpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSk7XG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8IFwiXCI7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09IFwiOlwiKSBwcm90b2NvbCArPSBcIjpcIjtcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9IFwiLy9cIiArIChob3N0IHx8IFwiXCIpO1xuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gXCIvXCIpIHBhdGhuYW1lID0gXCIvXCIgKyBwYXRobmFtZTtcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSBcIlwiO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gXCIjXCIpIGhhc2ggPSBcIiNcIiArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSBcIj9cIikgc2VhcmNoID0gXCI/XCIgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKFwiI1wiLCBcIiUyM1wiKTtcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/format-url.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/is-dynamic.js":
/*!*************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/is-dynamic.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.isDynamicRoute = void 0; // Identify /[param]/ in route string\n\nvar TEST_ROUTE = /\\/\\[[^/]+?\\](?=\\/|$)/;\nvar TEST_ROUTE_1 = /\\/:[^/]+?(?=\\/|$)/;\n\nfunction isDynamicRoute(route) {\n  return TEST_ROUTE.test(route) || TEST_ROUTE_1.test(route);\n}\n\nexports.isDynamicRoute = isDynamicRoute;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O2lDQUFBOztBQUNBLElBQU0sVUFBVSxHQUFHLHNCQUFuQjtBQUVBLElBQU0sWUFBWSxHQUFHLG1CQUFyQjs7QUFFQSxTQUFnQixjQUFoQixDQUErQixLQUEvQixFQUE0QztBQUMxQyxTQUFPLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEtBQWhCLEtBQTBCLFlBQVksQ0FBQyxJQUFiLENBQWtCLEtBQWxCLENBQWpDO0FBQ0Q7O0FBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cz9iZWUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcblxuY29uc3QgVEVTVF9ST1VURV8xID0gL1xcLzpbXi9dKz8oPz1cXC98JCkvO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKSB8fCBURVNUX1JPVVRFXzEudGVzdChyb3V0ZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/is-dynamic.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/parse-relative-url.js":
/*!*********************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/parse-relative-url.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.parseRelativeUrl = void 0;\n\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"../joy/dist/joy-server/lib/utils.js\");\n\nvar DUMMY_BASE = new URL( false ? 0 : (0, utils_1.getLocationOrigin)());\n/**\n * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative\n * (e.g. `./hello`) then at least base must be.\n * Absolute urls are rejected with one exception, in the browser, absolute urls that are on\n * the current origin will be parsed as relative\n */\n\nfunction parseRelativeUrl(url, base) {\n  var resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;\n\n  var _URL = new URL(url, resolvedBase),\n      pathname = _URL.pathname,\n      searchParams = _URL.searchParams,\n      search = _URL.search,\n      hash = _URL.hash,\n      href = _URL.href,\n      origin = _URL.origin,\n      protocol = _URL.protocol;\n\n  if (origin !== DUMMY_BASE.origin || protocol !== \"http:\" && protocol !== \"https:\") {\n    throw new Error(\"invariant: invalid relative URL\");\n  }\n\n  return {\n    pathname: pathname,\n    searchParams: searchParams,\n    search: search,\n    hash: hash,\n    href: href.slice(DUMMY_BASE.origin.length)\n  };\n}\n\nexports.parseRelativeUrl = parseRelativeUrl;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLElBQU0sVUFBVSxHQUFHLElBQUksR0FBSixDQUNqQixTQUFnQyxDQUFoQyxHQUE2QyxnQ0FENUIsQ0FBbkI7QUFJQTs7Ozs7QUFLRzs7QUFDSCxTQUFnQixnQkFBaEIsQ0FBaUMsR0FBakMsRUFBOEMsSUFBOUMsRUFBMkQ7QUFDekQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBSixDQUFRLElBQVIsRUFBYyxVQUFkLENBQUgsR0FBK0IsVUFBeEQ7O0FBQ0EsYUFRSSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsWUFBYixDQVJKO0FBQUEsTUFDRSxRQURGLFFBQ0UsUUFERjtBQUFBLE1BRUUsWUFGRixRQUVFLFlBRkY7QUFBQSxNQUdFLE1BSEYsUUFHRSxNQUhGO0FBQUEsTUFJRSxJQUpGLFFBSUUsSUFKRjtBQUFBLE1BS0UsSUFMRixRQUtFLElBTEY7QUFBQSxNQU1FLE1BTkYsUUFNRSxNQU5GO0FBQUEsTUFPRSxRQVBGLFFBT0UsUUFQRjs7QUFTQSxNQUNFLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBdEIsSUFDQyxRQUFRLEtBQUssT0FBYixJQUF3QixRQUFRLEtBQUssUUFGeEMsRUFHRTtBQUNBLFVBQU0sSUFBSSxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU87QUFDTCxZQUFRLEVBQVIsUUFESztBQUVMLGdCQUFZLEVBQVosWUFGSztBQUdMLFVBQU0sRUFBTixNQUhLO0FBSUwsUUFBSSxFQUFKLElBSks7QUFLTCxRQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFVLENBQUMsTUFBWCxDQUFrQixNQUE3QjtBQUxELEdBQVA7QUFPRDs7QUF4QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzPzI5ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcImh0dHA6Ly9uXCIgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pO1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRTtcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpO1xuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gXCJodHRwOlwiICYmIHByb3RvY29sICE9PSBcImh0dHBzOlwiKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/parse-relative-url.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/path-match.js":
/*!*************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/path-match.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.customRouteMatcherOptions = exports.matcherOptions = exports.pathToRegexp = void 0;\n\nvar pathToRegexp = __importStar(__webpack_require__(/*! path-to-regexp */ \"../../node_modules/path-to-regexp/dist.es2015/index.js\"));\n\nexports.pathToRegexp = pathToRegexp;\nexports.matcherOptions = {\n  sensitive: false,\n  delimiter: \"/\",\n  decode: decodeParam\n};\nexports.customRouteMatcherOptions = Object.assign(Object.assign({}, exports.matcherOptions), {\n  strict: true\n});\n\nexports[\"default\"] = function (customRoute) {\n  if (customRoute === void 0) {\n    customRoute = false;\n  }\n\n  return function (path) {\n    var keys = [];\n    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? exports.customRouteMatcherOptions : exports.matcherOptions);\n    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, exports.matcherOptions);\n    return function (pathname, params) {\n      var res = pathname == null ? false : matcher(pathname);\n\n      if (!res) {\n        return false;\n      }\n\n      if (customRoute) {\n        for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {\n          var key = _step.value;\n\n          // unnamed params should be removed as they\n          // are not allowed to be used in the destination\n          if (typeof key.name === \"number\") {\n            delete res.params[key.name];\n          }\n        }\n      }\n\n      return Object.assign(Object.assign({}, params), res.params);\n    };\n  };\n};\n\nfunction decodeParam(param) {\n  try {\n    return decodeURIComponent(param);\n  } catch (_) {\n    var err = new Error(\"failed to decode param\");\n    err.code = \"DECODE_FAILED\";\n    throw err;\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRVM7QUFFSSx5QkFBaUI7QUFDNUIsV0FBUyxFQUFFLEtBRGlCO0FBRTVCLFdBQVMsRUFBRSxHQUZpQjtBQUc1QixRQUFNLEVBQUU7QUFIb0IsQ0FBakI7QUFNQSxvQ0FBeUIsZ0NBQ2pDLHNCQURpQyxHQUNuQjtBQUNqQixRQUFNLEVBQUU7QUFEUyxDQURtQixDQUF6Qjs7QUFLYixxQkFBZSxVQUFDLFdBQUQsRUFBd0I7QUFBQSxNQUF2QixXQUF1QjtBQUF2QixlQUF1QixHQUFULEtBQVM7QUFBQTs7QUFDckMsU0FBTyxVQUFDLElBQUQsRUFBaUI7QUFDdEIsUUFBTSxJQUFJLEdBQXVCLEVBQWpDO0FBQ0EsUUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQWIsQ0FDbkIsSUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsV0FBVyxHQUFHLGlDQUFILEdBQStCLHNCQUh2QixDQUFyQjtBQUtBLFFBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxnQkFBYixDQUNkLFlBRGMsRUFFZCxJQUZjLEVBR2Qsc0JBSGMsQ0FBaEI7QUFNQSxXQUFPLFVBQUMsUUFBRCxFQUFzQyxNQUF0QyxFQUFzRDtBQUMzRCxVQUFNLEdBQUcsR0FBRyxRQUFRLElBQUksSUFBWixHQUFtQixLQUFuQixHQUEyQixPQUFPLENBQUMsUUFBRCxDQUE5Qzs7QUFDQSxVQUFJLENBQUMsR0FBTCxFQUFVO0FBQ1IsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxXQUFKLEVBQWlCO0FBQ2YsNkRBQWtCLElBQWxCLHdDQUF3QjtBQUFBLGNBQWIsR0FBYTs7QUFDdEI7QUFDQTtBQUNBLGNBQUksT0FBTyxHQUFHLENBQUMsSUFBWCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxtQkFBUSxHQUFHLENBQUMsTUFBSixDQUFtQixHQUFHLENBQUMsSUFBdkIsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCw2Q0FBWSxNQUFaLEdBQXVCLEdBQUcsQ0FBQyxNQUEzQjtBQUNELEtBakJEO0FBa0JELEdBL0JEO0FBZ0NELENBakNEOztBQW1DQSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBa0M7QUFDaEMsTUFBSTtBQUNGLFdBQU8sa0JBQWtCLENBQUMsS0FBRCxDQUF6QjtBQUNELEdBRkQsQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLFFBQU0sR0FBRyxHQUE4QixJQUFJLEtBQUosQ0FBVSx3QkFBVixDQUF2QztBQUNBLE9BQUcsQ0FBQyxJQUFKLEdBQVcsZUFBWDtBQUNBLFVBQU0sR0FBTjtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cz8zYTUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tIFwicGF0aC10by1yZWdleHBcIjtcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH07XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiBcIi9cIixcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn07XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXTtcbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKTtcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSk7XG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcImZhaWxlZCB0byBkZWNvZGUgcGFyYW1cIik7XG4gICAgZXJyLmNvZGUgPSBcIkRFQ09ERV9GQUlMRURcIjtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/path-match.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/prepare-destination.js":
/*!**********************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/prepare-destination.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar querystring_1 = __webpack_require__(/*! ./querystring */ \"../joy/dist/joy-server/lib/router/utils/querystring.js\");\n\nvar parse_relative_url_1 = __webpack_require__(/*! ./parse-relative-url */ \"../joy/dist/joy-server/lib/router/utils/parse-relative-url.js\");\n\nvar pathToRegexp = __importStar(__webpack_require__(/*! path-to-regexp */ \"../../node_modules/path-to-regexp/dist.es2015/index.js\"));\n\nfunction prepareDestination(destination, params, query, appendParamsToQuery, basePath) {\n  var parsedDestination = {};\n\n  if (destination.startsWith(\"/\")) {\n    parsedDestination = (0, parse_relative_url_1.parseRelativeUrl)(destination);\n  } else {\n    var _URL = new URL(destination),\n        pathname = _URL.pathname,\n        searchParams = _URL.searchParams,\n        hash = _URL.hash,\n        hostname = _URL.hostname,\n        port = _URL.port,\n        protocol = _URL.protocol,\n        search = _URL.search,\n        href = _URL.href;\n\n    parsedDestination = {\n      pathname: pathname,\n      searchParams: searchParams,\n      hash: hash,\n      protocol: protocol,\n      hostname: hostname,\n      port: port,\n      search: search,\n      href: href\n    };\n  }\n\n  parsedDestination.query = (0, querystring_1.searchParamsToUrlQuery)(parsedDestination.searchParams);\n  var destQuery = parsedDestination.query;\n  var destPath = \"\" + parsedDestination.pathname + (parsedDestination.hash || \"\");\n  var destPathParamKeys = [];\n  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);\n  var destPathParams = destPathParamKeys.map(function (key) {\n    return key.name;\n  });\n  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should\n  // have already validated before we got to this point and validating\n  // breaks compiling destinations with named pattern params from the source\n  // e.g. /something:hello(.*) -> /another/:hello is broken with validation\n  // since compile validation is meant for reversing and not for inserting\n  // params from a separate path-regex into another\n  {\n    validate: false\n  });\n  var newUrl; // update any params in query values\n\n  for (var _i = 0, _Object$entries = Object.entries(destQuery); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _Object$entries[_i],\n        key = _Object$entries$_i[0],\n        strOrArray = _Object$entries$_i[1];\n    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;\n\n    if (value) {\n      // the value needs to start with a forward-slash to be compiled\n      // correctly\n      value = \"/\" + value;\n      var queryCompiler = pathToRegexp.compile(value, {\n        validate: false\n      });\n      value = queryCompiler(params).substr(1);\n    }\n\n    destQuery[key] = value;\n  } // add path params to query if it's not a redirect and not\n  // already defined in destination query or path\n\n\n  var paramKeys = Object.keys(params);\n\n  if (appendParamsToQuery && !paramKeys.some(function (key) {\n    return destPathParams.includes(key);\n  })) {\n    for (var _iterator = _createForOfIteratorHelperLoose(paramKeys), _step; !(_step = _iterator()).done;) {\n      var _key = _step.value;\n\n      if (!(_key in destQuery)) {\n        destQuery[_key] = params[_key];\n      }\n    }\n  }\n\n  var shouldAddBasePath = destination.startsWith(\"/\") && basePath;\n\n  try {\n    newUrl = \"\" + (shouldAddBasePath ? basePath : \"\") + encodeURI(destinationCompiler(params));\n\n    var _newUrl$split = newUrl.split(\"#\"),\n        _pathname = _newUrl$split[0],\n        _hash = _newUrl$split[1];\n\n    parsedDestination.pathname = _pathname;\n    parsedDestination.hash = \"\" + (_hash ? \"#\" : \"\") + (_hash || \"\"); // delete parsedDestination.search\n    // delete parsedDestination.searchParams\n  } catch (err) {\n    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {\n      throw new Error(\"To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat.\");\n    }\n\n    throw err;\n  } // Query merge order lowest priority to highest\n  // 1. initial URL query values\n  // 2. path segment values\n  // 3. destination specified query values\n\n\n  parsedDestination.query = Object.assign(Object.assign({}, query), parsedDestination.query);\n  return {\n    newUrl: newUrl,\n    parsedDestination: parsedDestination\n  };\n}\n\nexports[\"default\"] = prepareDestination;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQSxTQUF3QixrQkFBeEIsQ0FDRSxXQURGLEVBRUUsTUFGRixFQUdFLEtBSEYsRUFJRSxtQkFKRixFQUtFLFFBTEYsRUFLa0I7QUFFaEIsTUFBSSxpQkFBaUIsR0FLcUIsRUFMMUM7O0FBT0EsTUFBSSxXQUFXLENBQUMsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQy9CLHFCQUFpQixHQUFHLDJDQUFpQixXQUFqQixDQUFwQjtBQUNELEdBRkQsTUFFTztBQUNMLGVBU0ksSUFBSSxHQUFKLENBQVEsV0FBUixDQVRKO0FBQUEsUUFDRSxRQURGLFFBQ0UsUUFERjtBQUFBLFFBRUUsWUFGRixRQUVFLFlBRkY7QUFBQSxRQUdFLElBSEYsUUFHRSxJQUhGO0FBQUEsUUFJRSxRQUpGLFFBSUUsUUFKRjtBQUFBLFFBS0UsSUFMRixRQUtFLElBTEY7QUFBQSxRQU1FLFFBTkYsUUFNRSxRQU5GO0FBQUEsUUFPRSxNQVBGLFFBT0UsTUFQRjtBQUFBLFFBUUUsSUFSRixRQVFFLElBUkY7O0FBV0EscUJBQWlCLEdBQUc7QUFDbEIsY0FBUSxFQUFSLFFBRGtCO0FBRWxCLGtCQUFZLEVBQVosWUFGa0I7QUFHbEIsVUFBSSxFQUFKLElBSGtCO0FBSWxCLGNBQVEsRUFBUixRQUprQjtBQUtsQixjQUFRLEVBQVIsUUFMa0I7QUFNbEIsVUFBSSxFQUFKLElBTmtCO0FBT2xCLFlBQU0sRUFBTixNQVBrQjtBQVFsQixVQUFJLEVBQUo7QUFSa0IsS0FBcEI7QUFVRDs7QUFFRCxtQkFBaUIsQ0FBQyxLQUFsQixHQUEwQiwwQ0FDeEIsaUJBQWlCLENBQUMsWUFETSxDQUExQjtBQUdBLE1BQU0sU0FBUyxHQUFHLGlCQUFpQixD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QU4sTUFESztBQUVMLHFCQUFpQixFQUFqQjtBQUZLLEdBQVA7QUFJRDs7QUE5SEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cz8wNDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSBcIi4vcXVlcnlzdHJpbmdcIjtcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tIFwiLi9wYXJzZS1yZWxhdGl2ZS11cmxcIjtcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tIFwicGF0aC10by1yZWdleHBcIjtcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnk7XG4gICAgcHJvdG9jb2w/OiBzdHJpbmc7XG4gICAgaG9zdG5hbWU/OiBzdHJpbmc7XG4gICAgcG9ydD86IHN0cmluZztcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55O1xuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKTtcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH07XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gICk7XG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5O1xuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgXCJcIlxuICB9YDtcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdO1xuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cyk7XG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpO1xuXG4gIGNvbnN0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKTtcbiAgbGV0IG5ld1VybDtcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWA7XG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pO1xuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoXCIvXCIpICYmIGJhc2VQYXRoO1xuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6IFwiXCJ9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWA7XG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KFwiI1wiKTtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gXCIjXCIgOiBcIlwifSR7aGFzaCB8fCBcIlwifWA7XG4gICAgLy8gZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIC8vIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/prepare-destination.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/querystring.js":
/*!**************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/querystring.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.assign = exports.urlQueryToSearchParams = exports.searchParamsToUrlQuery = void 0;\n\nfunction searchParamsToUrlQuery(searchParams) {\n  var query = {};\n  searchParams.forEach(function (value, key) {\n    if (typeof query[key] === \"undefined\") {\n      query[key] = value;\n    } else if (Array.isArray(query[key])) {\n      query[key].push(value);\n    } else {\n      query[key] = [query[key], value];\n    }\n  });\n  return query;\n}\n\nexports.searchParamsToUrlQuery = searchParamsToUrlQuery;\n\nfunction urlQueryToSearchParams(urlQuery) {\n  var result = new URLSearchParams();\n  Object.entries(urlQuery).forEach(function (_ref) {\n    var key = _ref[0],\n        value = _ref[1];\n\n    if (Array.isArray(value)) {\n      value.forEach(function (item) {\n        return result.append(key, item);\n      });\n    } else {\n      result.set(key, value);\n    }\n  });\n  return result;\n}\n\nexports.urlQueryToSearchParams = urlQueryToSearchParams;\n\nfunction assign(target) {\n  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    searchParamsList[_key - 1] = arguments[_key];\n  }\n\n  searchParamsList.forEach(function (searchParams) {\n    // @ts-ignore\n    Array.from(searchParams.keys()).forEach(function (key) {\n      return target[\"delete\"](key);\n    }); // @ts-ignore\n\n    searchParams.forEach(function (value, key) {\n      return target.append(key, value);\n    });\n  });\n  return target;\n}\n\nexports.assign = assign;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsU0FBZ0Isc0JBQWhCLENBQ0UsWUFERixFQUMrQjtBQUU3QixNQUFNLEtBQUssR0FBbUIsRUFBOUI7QUFDQSxjQUFZLENBQUMsT0FBYixDQUFxQixVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWU7QUFDbEMsUUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFELENBQVosS0FBc0IsV0FBMUIsRUFBdUM7QUFDckMsV0FBSyxDQUFDLEdBQUQsQ0FBTCxHQUFhLEtBQWI7QUFDRCxLQUZELE1BRU8sSUFBSSxLQUFLLENBQUMsT0FBTixDQUFjLEtBQUssQ0FBQyxHQUFELENBQW5CLENBQUosRUFBK0I7QUFDbkMsV0FBSyxDQUFDLEdBQUQsQ0FBTCxDQUF3QixJQUF4QixDQUE2QixLQUE3QjtBQUNGLEtBRk0sTUFFQTtBQUNMLFdBQUssQ0FBQyxHQUFELENBQUwsR0FBYSxDQUFDLEtBQUssQ0FBQyxHQUFELENBQU4sRUFBdUIsS0FBdkIsQ0FBYjtBQUNEO0FBQ0YsR0FSRDtBQVNBLFNBQU8sS0FBUDtBQUNEOztBQWREOztBQWdCQSxTQUFnQixzQkFBaEIsQ0FDRSxRQURGLEVBQzBCO0FBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBSixFQUFmO0FBQ0EsUUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLE9BQXpCLENBQWlDLGdCQUFpQjtBQUFBLFFBQWYsR0FBZTtBQUFBLFFBQVYsS0FBVTs7QUFDaEQsUUFBSSxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsQ0FBSixFQUEwQjtBQUN4QixXQUFLLENBQUMsT0FBTixDQUFjLFVBQUMsSUFBRDtBQUFBLGVBQVUsTUFBTSxDQUFDLE1BQVAsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLENBQVY7QUFBQSxPQUFkO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxDQUFDLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLEtBQWhCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBTyxNQUFQO0FBQ0Q7O0FBWkQ7O0FBY0EsU0FBZ0IsTUFBaEIsQ0FDRSxNQURGLEVBRXdDO0FBQUEsb0NBQW5DLGdCQUFtQztBQUFuQyxvQkFBbUM7QUFBQTs7QUFFdEMsa0JBQWdCLENBQUMsT0FBakIsQ0FBeUIsVUFBQyxZQUFELEVBQWlCO0FBQ3hDO0FBQ0EsU0FBSyxDQUFDLElBQU4sQ0FBVyxZQUFZLENBQUMsSUFBYixFQUFYLEVBQWdDLE9BQWhDLENBQXdDLFVBQUMsR0FBRDtBQUFBLGFBQVMsTUFBTSxVQUFOLENBQWMsR0FBZCxDQUFUO0FBQUEsS0FBeEMsRUFGd0MsQ0FHeEM7O0FBQ0EsZ0JBQVksQ0FBQyxPQUFiLENBQXFCLFVBQUMsS0FBRCxFQUFRLEdBQVI7QUFBQSxhQUFnQixNQUFNLENBQUMsTUFBUCxDQUFjLEdBQWQsRUFBbUIsS0FBbkIsQ0FBaEI7QUFBQSxLQUFyQjtBQUNELEdBTEQ7QUFNQSxTQUFPLE1BQVA7QUFDRDs7QUFYRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2pveS1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cz8zNGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fTtcbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIChxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSk7XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/querystring.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/resolve-rewrites.js":
/*!*******************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/resolve-rewrites.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar path_match_1 = __importDefault(__webpack_require__(/*! ./path-match */ \"../joy/dist/joy-server/lib/router/utils/path-match.js\"));\n\nvar prepare_destination_1 = __importDefault(__webpack_require__(/*! ./prepare-destination */ \"../joy/dist/joy-server/lib/router/utils/prepare-destination.js\"));\n\nvar customRouteMatcher = (0, path_match_1[\"default\"])(true);\n\nfunction resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {\n  if (!pages.includes(asPath)) {\n    for (var _iterator = _createForOfIteratorHelperLoose(rewrites), _step; !(_step = _iterator()).done;) {\n      var rewrite = _step.value;\n      var matcher = customRouteMatcher(rewrite.source);\n      var params = matcher(asPath);\n\n      if (params) {\n        if (!rewrite.destination) {\n          // this is a proxied rewrite which isn't handled on the client\n          break;\n        }\n\n        var destRes = (0, prepare_destination_1[\"default\"])(rewrite.destination, params, query, true, rewrite.basePath === false ? \"\" : basePath);\n        asPath = destRes.parsedDestination.pathname;\n        Object.assign(query, destRes.parsedDestination.query);\n\n        if (pages.includes(asPath)) {\n          // check if we now match a page as this means we are done\n          // resolving the rewrites\n          break;\n        } // check if we match a dynamic-route, if so we break the rewrites chain\n\n\n        var resolvedHref = resolveHref(asPath);\n\n        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {\n          break;\n        }\n      }\n    }\n  }\n\n  return asPath;\n}\n\nexports[\"default\"] = resolveRewrites;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUdBLElBQU0sa0JBQWtCLEdBQUcsNkJBQVUsSUFBVixDQUEzQjs7QUFFQSxTQUF3QixlQUF4QixDQUNFLE1BREYsRUFFRSxLQUZGLEVBR0UsUUFIRixFQUlFLFFBSkYsRUFLRSxLQUxGLEVBTUUsV0FORixFQU11QztBQUVyQyxNQUFJLENBQUMsS0FBSyxDQUFDLFFBQU4sQ0FBZSxNQUFmLENBQUwsRUFBNkI7QUFDM0IseURBQXNCLFFBQXRCLHdDQUFnQztBQUFBLFVBQXJCLE9BQXFCO0FBQzlCLFVBQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFULENBQWxDO0FBQ0EsVUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQUQsQ0FBdEI7O0FBRUEsVUFBSSxNQUFKLEVBQVk7QUFDVixZQUFJLENBQUMsT0FBTyxDQUFDLFdBQWIsRUFBMEI7QUFDeEI7QUFDQTtBQUNEOztBQUNELFlBQU0sT0FBTyxHQUFHLHNDQUNkLE9BQU8sQ0FBQyxXQURNLEVBRWQsTUFGYyxFQUdkLEtBSGMsRUFJZCxJQUpjLEVBS2QsT0FBTyxDQUFDLFFBQVIsS0FBcUIsS0FBckIsR0FBNkIsRUFBN0IsR0FBa0MsUUFMcEIsQ0FBaEI7QUFPQSxjQUFNLEdBQUcsT0FBTyxDQUFDLGlCQUFSLENBQTBCLFFBQW5DO0FBQ0EsY0FBTSxDQUFDLE1BQVAsQ0FBYyxLQUFkLEVBQXFCLE9BQU8sQ0FBQyxpQkFBUixDQUEwQixLQUEvQzs7QUFFQSxZQUFJLEtBQUssQ0FBQyxRQUFOLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQTtBQUNELFNBbkJTLENBcUJWOzs7QUFDQSxZQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsTUFBRCxDQUFoQzs7QUFFQSxZQUFJLFlBQVksS0FBSyxNQUFqQixJQUEyQixLQUFLLENBQUMsUUFBTixDQUFlLFlBQWYsQ0FBL0IsRUFBNkQ7QUFDM0Q7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPLE1BQVA7QUFDRDs7QUE1Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cz80ZGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gXCIuL3BhdGgtbWF0Y2hcIjtcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSBcIi4vcHJlcGFyZS1kZXN0aW5hdGlvblwiO1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzXCI7XG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpO1xuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpO1xuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gXCJcIiA6IGJhc2VQYXRoXG4gICAgICAgICk7XG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhO1xuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KTtcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aCk7XG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/resolve-rewrites.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/route-matcher.js":
/*!****************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/route-matcher.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getRouteMatcher = void 0;\n\nfunction getRouteMatcher(routeRegex) {\n  var re = routeRegex.re,\n      groups = routeRegex.groups;\n  return function (pathname) {\n    var routeMatch = re.exec(pathname);\n\n    if (!routeMatch) {\n      return false;\n    }\n\n    var decode = function decode(param) {\n      try {\n        return decodeURIComponent(param);\n      } catch (_) {\n        var err = new Error(\"failed to decode param\");\n        err.code = \"DECODE_FAILED\";\n        throw err;\n      }\n    };\n\n    var params = {};\n    Object.keys(groups).forEach(function (slugName) {\n      var g = groups[slugName];\n      var m = routeMatch[g.pos];\n\n      if (m !== undefined) {\n        params[slugName] = ~m.indexOf(\"/\") ? m.split(\"/\").map(function (entry) {\n          return decode(entry);\n        }) : g.repeat ? [decode(m)] : decode(m);\n      }\n    });\n    return params;\n  };\n}\n\nexports.getRouteMatcher = getRouteMatcher;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxTQUFnQixlQUFoQixDQUFnQyxVQUFoQyxFQUE0RTtBQUMxRSxNQUFRLEVBQVIsR0FBdUIsVUFBdkIsQ0FBUSxFQUFSO0FBQUEsTUFBWSxNQUFaLEdBQXVCLFVBQXZCLENBQVksTUFBWjtBQUNBLFNBQU8sVUFBQyxRQUFELEVBQXdDO0FBQzdDLFFBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFILENBQVEsUUFBUixDQUFuQjs7QUFDQSxRQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLGFBQU8sS0FBUDtBQUNEOztBQUVELFFBQU0sTUFBTSxHQUFHLFNBQVQsTUFBUyxDQUFDLEtBQUQsRUFBa0I7QUFDL0IsVUFBSTtBQUNGLGVBQU8sa0JBQWtCLENBQUMsS0FBRCxDQUF6QjtBQUNELE9BRkQsQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLFlBQU0sR0FBRyxHQUE4QixJQUFJLEtBQUosQ0FDckMsd0JBRHFDLENBQXZDO0FBR0EsV0FBRyxDQUFDLElBQUosR0FBVyxlQUFYO0FBQ0EsY0FBTSxHQUFOO0FBQ0Q7QUFDRixLQVZEOztBQVdBLFFBQU0sTUFBTSxHQUErQyxFQUEzRDtBQUVBLFVBQU0sQ0FBQyxJQUFQLENBQVksTUFBWixFQUFvQixPQUFwQixDQUE0QixVQUFDLFFBQUQsRUFBcUI7QUFDL0MsVUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQUQsQ0FBaEI7QUFDQSxVQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUgsQ0FBcEI7O0FBQ0EsVUFBSSxDQUFDLEtBQUssU0FBVixFQUFxQjtBQUNuQixjQUFNLENBQUMsUUFBRCxDQUFOLEdBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxHQUFWLENBQUQsR0FDZixDQUFDLENBQUMsS0FBRixDQUFRLEdBQVIsRUFBYSxHQUFiLENBQWlCLFVBQUMsS0FBRDtBQUFBLGlCQUFXLE1BQU0sQ0FBQyxLQUFELENBQWpCO0FBQUEsU0FBakIsQ0FEZSxHQUVmLENBQUMsQ0FBQyxNQUFGLEdBQ0EsQ0FBQyxNQUFNLENBQUMsQ0FBRCxDQUFQLENBREEsR0FFQSxNQUFNLENBQUMsQ0FBRCxDQUpWO0FBS0Q7QUFDRixLQVZEO0FBV0EsV0FBTyxNQUFQO0FBQ0QsR0EvQkQ7QUFnQ0Q7O0FBbENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2pveS9zcmMvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHM/M2NkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSBcIi4vcm91dGUtcmVnZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpO1xuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgIFwiZmFpbGVkIHRvIGRlY29kZSBwYXJhbVwiXG4gICAgICAgICk7XG4gICAgICAgIGVyci5jb2RlID0gXCJERUNPREVfRkFJTEVEXCI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZihcIi9cIilcbiAgICAgICAgICA/IG0uc3BsaXQoXCIvXCIpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/route-matcher.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/router/utils/route-regex.js":
/*!**************************************************************!*\
  !*** ../joy/dist/joy-server/lib/router/utils/route-regex.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getRouteRegex = void 0; // this isn't importing the escape-string-regex module\n// to reduce bytes\n\nfunction escapeRegex(str) {\n  return str.replace(/[|\\\\{}()[\\]^$+*?.-]/g, \"\\\\$&\");\n}\n\nfunction parseParameter(param) {\n  var optional = param.startsWith(\"[\") && param.endsWith(\"]\");\n\n  if (optional) {\n    param = param.slice(1, -1);\n  }\n\n  var repeat = param.startsWith(\"...\");\n\n  if (repeat) {\n    param = param.slice(3);\n  }\n\n  return {\n    key: param,\n    repeat: repeat,\n    optional: optional\n  };\n}\n\nfunction getRouteRegex(normalizedRoute) {\n  var segments = (normalizedRoute.replace(/\\/$/, \"\") || \"/\").slice(1).split(\"/\");\n  var groups = {};\n  var groupIndex = 1;\n  var parameterizedRoute = segments.map(function (segment) {\n    if (segment.startsWith(\"[\") && segment.endsWith(\"]\")) {\n      var _parseParameter = parseParameter(segment.slice(1, -1)),\n          key = _parseParameter.key,\n          optional = _parseParameter.optional,\n          repeat = _parseParameter.repeat;\n\n      groups[key] = {\n        pos: groupIndex++,\n        repeat: repeat,\n        optional: optional\n      };\n      return repeat ? optional ? \"(?:/(.+?))?\" : \"/(.+?)\" : \"/([^/]+?)\";\n    } else {\n      return \"/\" + escapeRegex(segment);\n    }\n  }).join(\"\"); // dead code eliminate for browser since it's only needed\n  // while generating routes-manifest\n\n  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }\n\n  return {\n    re: new RegExp(\"^\" + parameterizedRoute + \"(?:/)?$\"),\n    groups: groups\n  };\n}\n\nexports.getRouteRegex = getRouteRegex;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztnQ0FNQTtBQUNBOztBQUNBLFNBQVMsV0FBVCxDQUFxQixHQUFyQixFQUFnQztBQUM5QixTQUFPLEdBQUcsQ0FBQyxPQUFKLENBQVksc0JBQVosRUFBb0MsTUFBcEMsQ0FBUDtBQUNEOztBQUVELFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUFxQztBQUNuQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBTixDQUFpQixHQUFqQixLQUF5QixLQUFLLENBQUMsUUFBTixDQUFlLEdBQWYsQ0FBMUM7O0FBQ0EsTUFBSSxRQUFKLEVBQWM7QUFDWixTQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBQyxDQUFoQixDQUFSO0FBQ0Q7O0FBQ0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsS0FBakIsQ0FBZjs7QUFDQSxNQUFJLE1BQUosRUFBWTtBQUNWLFNBQUssR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosQ0FBUjtBQUNEOztBQUNELFNBQU87QUFBRSxPQUFHLEVBQUUsS0FBUDtBQUFjLFVBQU0sRUFBTixNQUFkO0FBQXNCLFlBQVEsRUFBUjtBQUF0QixHQUFQO0FBQ0Q7O0FBRUQsU0FBZ0IsYUFBaEIsQ0FDRSxlQURGLEVBQ3lCO0FBT3ZCLE1BQU0sUUFBUSxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQWhCLENBQXdCLEtBQXhCLEVBQStCLEVBQS9CLEtBQXNDLEdBQXZDLEVBQ2QsS0FEYyxDQUNSLENBRFEsRUFFZCxLQUZjLENBRVIsR0FGUSxDQUFqQjtBQUlBLE1BQU0sTUFBTSxHQUFtQyxFQUEvQztBQUNBLE1BQUksVUFBVSxHQUFHLENBQWpCO0FBQ0EsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQ2hDLEdBRHdCLENBQ3BCLFVBQUMsT0FBRCxFQUFZO0FBQ2YsUUFBSSxPQUFPLENBQUMsVUFBUixDQUFtQixHQUFuQixLQUEyQixPQUFPLENBQUMsUUFBUixDQUFpQixHQUFqQixDQUEvQixFQUFzRDtBQUNwRCw0QkFBa0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFSLENBQWMsQ0FBZCxFQUFpQixDQUFDLENBQWxCLENBQUQsQ0FBaEQ7QUFBQSxVQUFRLEdBQVIsbUJBQVEsR0FBUjtBQUFBLFVBQWEsUUFBYixtQkFBYSxRQUFiO0FBQUEsVUFBdUIsTUFBdkIsbUJBQXVCLE1BQXZCOztBQUNBLFlBQU0sQ0FBQyxHQUFELENBQU4sR0FBYztBQUFFLFdBQUcsRUFBRSxVQUFVLEVBQWpCO0FBQXFCLGNBQU0sRUFBTixNQUFyQjtBQUE2QixnQkFBUSxFQUFSO0FBQTdCLE9BQWQ7QUFDQSxhQUFPLE1BQU0sR0FBSSxRQUFRLEdBQUcsYUFBSCxHQUFtQixRQUEvQixHQUEyQyxXQUF4RDtBQUNELEtBSkQsTUFJTztBQUNMLG1CQUFXLFdBQVcsQ0FBQyxPQUFELENBQXRCO0FBQ0Q7QUFDRixHQVR3QixFQVV4QixJQVZ3QixDQVVuQixFQVZtQixDQUEzQixDQWJ1QixDQXlCdkI7QUFDQTs7QUFDQSxhQUFtQyxrR0FnRWxDOztBQUVELFNBQU87QUFDTCxNQUFFLEVBQUUsSUFBSSxNQUFKLE9BQWUsa0JBQWYsYUFEQztBQUVMLFVBQU0sRUFBTjtBQUZLLEdBQVA7QUFJRDs7QUFsR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHM/ZjBiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlcjtcbiAgcmVwZWF0OiBib29sZWFuO1xuICBvcHRpb25hbDogYm9vbGVhbjtcbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoXCJbXCIpICYmIHBhcmFtLmVuZHNXaXRoKFwiXVwiKTtcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aChcIi4uLlwiKTtcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMyk7XG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cDtcbiAgbmFtZWRSZWdleD86IHN0cmluZztcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9O1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfTtcbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sIFwiXCIpIHx8IFwiL1wiKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdChcIi9cIik7XG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fTtcbiAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoXCJbXCIpICYmIHNlZ21lbnQuZW5kc1dpdGgoXCJdXCIpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSk7XG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9O1xuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gXCIoPzovKC4rPykpP1wiIDogXCIvKC4rPylcIikgOiBcIi8oW14vXSs/KVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5NztcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMTtcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSBcIlwiO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7XG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrKztcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrO1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5NztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5O1xuICAgIH07XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aChcIltcIikgJiYgc2VnbWVudC5lbmRzV2l0aChcIl1cIikpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoXG4gICAgICAgICAgICBzZWdtZW50LnNsaWNlKDEsIC0xKVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCBcIlwiKTtcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXk7XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/router/utils/route-regex.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/lib/utils.js":
/*!*******************************************!*\
  !*** ../joy/dist/joy-server/lib/utils.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ \"../joy/node_modules/@babel/runtime/regenerator/index.js\");\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ST = exports.SP = exports.formatWithValidation = exports.urlObjectKeys = exports.loadGetInitialProps = exports.isResSent = exports.getDisplayName = exports.getURL = exports.getLocationOrigin = exports.execOnce = void 0;\n\nvar format_url_1 = __webpack_require__(/*! ./router/utils/format-url */ \"../joy/dist/joy-server/lib/router/utils/format-url.js\");\n/**\n * Utils\n */\n\n\nfunction execOnce(fn) {\n  var used = false;\n  var result;\n  return function () {\n    if (!used) {\n      used = true;\n      result = fn.apply(void 0, arguments);\n    }\n\n    return result;\n  };\n}\n\nexports.execOnce = execOnce;\n\nfunction getLocationOrigin() {\n  var _window$location = window.location,\n      protocol = _window$location.protocol,\n      hostname = _window$location.hostname,\n      port = _window$location.port;\n  return protocol + \"//\" + hostname + (port ? \":\" + port : \"\");\n}\n\nexports.getLocationOrigin = getLocationOrigin;\n\nfunction getURL() {\n  var href = window.location.href;\n  var origin = getLocationOrigin();\n  return href.substring(origin.length);\n}\n\nexports.getURL = getURL;\n\nfunction getDisplayName(Component) {\n  return typeof Component === \"string\" ? Component : Component.displayName || Component.name || \"Unknown\";\n}\n\nexports.getDisplayName = getDisplayName;\n\nfunction isResSent(res) {\n  return res.finished || res.headersSent;\n}\n\nexports.isResSent = isResSent;\n\nfunction loadGetInitialProps(App, ctx) {\n  var _a;\n\n  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {\n    var message, res, props, _message;\n\n    return _regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (false) {}\n\n            if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {\n              _context.next = 4;\n              break;\n            }\n\n            message = \"\\\"\" + getDisplayName(App) + \".getInitialProps()\\\" is defined as an instance method\";\n            throw new Error(message);\n\n          case 4:\n            // when called from _app `ctx` is nested in `ctx`\n            res = ctx.res || ctx.ctx && ctx.ctx.res;\n\n            if (App.getInitialProps) {\n              _context.next = 12;\n              break;\n            }\n\n            if (!(ctx.ctx && ctx.Component)) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 9;\n            return loadGetInitialProps(ctx.Component, ctx.ctx);\n\n          case 9:\n            _context.t0 = _context.sent;\n            return _context.abrupt(\"return\", {\n              pageProps: _context.t0\n            });\n\n          case 11:\n            return _context.abrupt(\"return\", {});\n\n          case 12:\n            _context.next = 14;\n            return App.getInitialProps(ctx);\n\n          case 14:\n            props = _context.sent;\n\n            if (!(res && isResSent(res))) {\n              _context.next = 17;\n              break;\n            }\n\n            return _context.abrupt(\"return\", props);\n\n          case 17:\n            if (props) {\n              _context.next = 20;\n              break;\n            }\n\n            _message = \"\\\"\" + getDisplayName(App) + \".getInitialProps()\\\" should resolve to an object. But found \\\"\" + props + \"\\\" instead.\";\n            throw new Error(_message);\n\n          case 20:\n            if (true) {\n              if (Object.keys(props).length === 0 && !ctx.ctx) {\n                console.warn(getDisplayName(App) + \" returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization.\");\n              }\n            }\n\n            return _context.abrupt(\"return\", props);\n\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n}\n\nexports.loadGetInitialProps = loadGetInitialProps;\nexports.urlObjectKeys = [\"auth\", \"hash\", \"host\", \"hostname\", \"href\", \"path\", \"pathname\", \"port\", \"protocol\", \"query\", \"search\", \"slashes\"];\n\nfunction formatWithValidation(url) {\n  if (true) {\n    if (url !== null && typeof url === \"object\") {\n      Object.keys(url).forEach(function (key) {\n        if (exports.urlObjectKeys.indexOf(key) === -1) {\n          console.warn(\"Unknown key passed via urlObject into url.format: \" + key);\n        }\n      });\n    }\n  }\n\n  return (0, format_url_1.formatUrl)(url);\n}\n\nexports.formatWithValidation = formatWithValidation;\nexports.SP = typeof performance !== \"undefined\";\nexports.ST = exports.SP && typeof performance.mark === \"function\" && typeof performance.measure === \"function\";\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9saWIvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFpT0E7O0FBRUc7OztBQUNILFNBQWdCLFFBQWhCLENBQXNFLEVBQXRFLEVBQTJFO0FBQ3pFLE1BQUksSUFBSSxHQUFHLEtBQVg7QUFDQSxNQUFJLE1BQUo7QUFFQSxTQUFRLFlBQW1CO0FBQ3pCLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxVQUFJLEdBQUcsSUFBUDtBQUNBLFlBQU0sR0FBRyxFQUFFLE1BQUYsbUJBQVQ7QUFDRDs7QUFDRCxXQUFPLE1BQVA7QUFDRCxHQU5EO0FBT0Q7O0FBWEQ7O0FBYUEsU0FBZ0IsaUJBQWhCLEdBQWlDO0FBQy9CLHlCQUFxQyxNQUFNLENBQUMsUUFBNUM7QUFBQSxNQUFRLFFBQVIsb0JBQVEsUUFBUjtBQUFBLE1BQWtCLFFBQWxCLG9CQUFrQixRQUFsQjtBQUFBLE1BQTRCLElBQTVCLG9CQUE0QixJQUE1QjtBQUNBLFNBQVUsUUFBVixVQUF1QixRQUF2QixJQUFrQyxJQUFJLEdBQUcsTUFBTSxJQUFULEdBQWdCLEVBQXREO0FBQ0Q7O0FBSEQ7O0FBS0EsU0FBZ0IsTUFBaEIsR0FBc0I7QUFDcEIsTUFBUSxJQUFSLEdBQWlCLE1BQU0sQ0FBQyxRQUF4QixDQUFRLElBQVI7QUFDQSxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsRUFBaEM7QUFDQSxTQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBTSxDQUFDLE1BQXRCLENBQVA7QUFDRDs7QUFKRDs7QUFNQSxTQUFnQixjQUFoQixDQUFrQyxTQUFsQyxFQUE2RDtBQUMzRCxTQUFPLE9BQU8sU0FBUCxLQUFxQixRQUFyQixHQUFnQyxTQUFoQyxHQUE0QyxTQUFTLENBQUMsV0FBVixJQUF5QixTQUFTLENBQUMsSUFBbkMsSUFBMkMsU0FBOUY7QUFDRDs7QUFGRDs7QUFJQSxTQUFnQixTQUFoQixDQUEwQixHQUExQixFQUE2QztBQUMzQyxTQUFPLEdBQUcsQ0FBQyxRQUFKLElBQWdCLEdBQUcsQ0FBQyxXQUEzQjtBQUNEOztBQUZEOztBQUlBLFNBQXNCLG1CQUF0QixDQUFrRixHQUFsRixFQUFtSCxHQUFuSCxFQUF5SDs7Ozs7Ozs7Ozs7O2tCQUVqSCxTQUFHLENBQUMsU0FBSixNQUFhLElBQWIsSUFBYSxhQUFiLEdBQWEsTUFBYixHQUFhLEdBQUU7Ozs7O0FBQ1gsNkJBQWMsY0FBYyxDQUFDLEdBQUQ7a0JBQzVCLElBQUksS0FBSixDQUFVLE9BQVY7OztBQUdWO0FBQ00sa0JBQU0sR0FBRyxDQUFDLEdBQUosSUFBWSxHQUFHLENBQUMsR0FBSixJQUFXLEdBQUcsQ0FBQyxHQUFKLENBQVE7O2dCQUV0QyxHQUFHLENBQUM7Ozs7O2tCQUNILEdBQUcsQ0FBQyxHQUFKLElBQVcsR0FBRyxDQUFDOzs7Ozs7QUFHSixtQkFBTSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsU0FBTCxFQUFnQixHQUFHLENBQUMsR0FBcEIsQ0FBekI7Ozs7O0FBQVg7Ozs7NkNBR0c7Ozs7QUFHSyxtQkFBTSxHQUFHLENBQUMsZUFBSixDQUFvQixHQUFwQixDQUFOOzs7QUFBUjs7a0JBRUYsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFEOzs7Ozs2Q0FDWDs7O2dCQUdKOzs7OztBQUNHLDhCQUFjLGNBQWMsQ0FBQyxHQUFELHVFQUFvRTtrQkFDaEcsSUFBSSxLQUFKLENBQVUsUUFBVjs7O0FBR1Isc0JBQTJDO0FBQ3pDLGtCQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWixFQUFtQixNQUFuQixLQUE4QixDQUE5QixJQUFtQyxDQUFDLEdBQUcsQ0FBQyxHQUE1QyxFQUFpRDtBQUMvQyx1QkFBTyxDQUFDLElBQVIsQ0FDSyxjQUFjLENBQUMsR0FBRCxDQURuQjtBQUdEO0FBQ0Y7OzZDQUVNOzs7Ozs7Ozs7QUFDUjs7QUF4Q0Q7QUEwQ2Esd0JBQWdCLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsVUFBekIsRUFBcUMsTUFBckMsRUFBNkMsTUFBN0MsRUFBcUQsVUFBckQsRUFBaUUsTUFBakUsRUFBeUUsVUFBekUsRUFBcUYsT0FBckYsRUFBOEYsUUFBOUYsRUFBd0csU0FBeEcsQ0FBaEI7O0FBRWIsU0FBZ0Isb0JBQWhCLENBQXFDLEdBQXJDLEVBQW1EO0FBQ2pELFlBQTRDO0FBQzFDLFFBQUksR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBTyxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7QUFDM0MsWUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBQWlCLE9BQWpCLENBQXlCLFVBQUMsR0FBRCxFQUFRO0FBQy9CLFlBQUksc0JBQWMsT0FBZCxDQUFzQixHQUF0QixNQUErQixDQUFDLENBQXBDLEVBQXVDO0FBQ3JDLGlCQUFPLENBQUMsSUFBUix3REFBa0UsR0FBbEU7QUFDRDtBQUNGLE9BSkQ7QUFLRDtBQUNGOztBQUVELFNBQU8sNEJBQVUsR0FBVixDQUFQO0FBQ0Q7O0FBWkQ7QUFjYSxhQUFLLE9BQU8sV0FBUCxLQUF1QixXQUE1QjtBQUNBLGFBQUssY0FBTSxPQUFPLFdBQVcsQ0FBQyxJQUFuQixLQUE0QixVQUFsQyxJQUFnRCxPQUFPLFdBQVcsQ0FBQyxPQUFuQixLQUErQixVQUFwRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2pveS1zZXJ2ZXIvbGliL3V0aWxzLnRzPzZmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCI7XG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tIFwiLi4vc2VydmVyL2xvYWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSm95Um91dGVyIH0gZnJvbSBcIi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgRW52IH0gZnJvbSBcIi4uLy4uL2xpYi9sb2FkLWVudi1jb25maWdcIjtcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tIFwiLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzXCI7XG5pbXBvcnQgeyBSb3V0ZVNTR0RhdGEgfSBmcm9tIFwiLi9Sb3V0ZVNTR0RhdGEuaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIGpveSBhbmQgam95LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIEpveUNvbXBvbmVudFR5cGU8QyBleHRlbmRzIEJhc2VDb250ZXh0ID0gSm95UGFnZUNvbnRleHQsIElQID0ge30sIFAgPSB7fT4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+O1xufTtcblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gSm95Q29tcG9uZW50VHlwZTxEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnQ6IERvY3VtZW50VHlwZSwgcHJvcHM6IERvY3VtZW50UHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gSm95Q29tcG9uZW50VHlwZTxBcHBDb250ZXh0VHlwZT47XG5cbi8vIGV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTx7IFtuYW1lOiBzdHJpbmddOiBhbnkgfT47XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKi9cbmV4cG9ydCB0eXBlIEpveVdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzdGFydFRpbWU6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQztcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8UmVhY3QuQ29tcG9uZW50VHlwZT47XG4gICAgICAvLyBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8Sm95Q29tcG9uZW50VHlwZT47XG4gICAgfVxuICB8IEVuaGFuY2VyPFJlYWN0LkNvbXBvbmVudFR5cGU+O1xuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmc7XG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+O1xufTtcblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PjtcblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlO1xuICBbazogc3RyaW5nXTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgSk9ZX0RBVEEgPSB7XG4gIGluaXRTdGF0ZTogUm91dGVTU0dEYXRhW107XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBwYWdlOiBzdHJpbmc7XG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeTtcbiAgYnVpbGRJZDogc3RyaW5nO1xuICBhc3NldFByZWZpeD86IHN0cmluZztcbiAgYXBpUHJlZml4Pzogc3RyaW5nO1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgam95RXhwb3J0PzogYm9vbGVhbjtcbiAgYXV0b0V4cG9ydD86IGJvb2xlYW47XG4gIGlzRmFsbGJhY2s/OiBib29sZWFuO1xuICBkeW5hbWljSWRzPzogc3RyaW5nW107XG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH07XG4gIC8vIGdzcD86IGJvb2xlYW47XG4gIC8vIGdzc3A/OiBib29sZWFuO1xuICBzc3I/OiBib29sZWFuO1xuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuO1xuICBnaXA/OiBib29sZWFuO1xuICBhcHBHaXA/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBgSm95YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSm95UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGw7XG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2U7XG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2U7XG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeTtcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICAvLyBBcHBUcmVlOiBBcHBUcmVlVHlwZTtcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIEpveVJvdXRlciA9IEpveVJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogSm95Q29tcG9uZW50VHlwZTxKb3lQYWdlQ29udGV4dD47XG4gIC8vIEFwcFRyZWU6IEFwcFRyZWVUeXBlO1xuICBjdHg6IEpveVBhZ2VDb250ZXh0O1xuICByb3V0ZXI6IFI7XG59O1xuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBKb3lQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX0pPWV9EQVRBX186IEpPWV9EQVRBO1xuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZztcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW47XG4gICAgTWFpbj86IGJvb2xlYW47XG4gICAgSGVhZD86IGJvb2xlYW47XG4gICAgSm95U2NyaXB0PzogYm9vbGVhbjtcbiAgfTtcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdDtcbiAgYW1wUGF0aDogc3RyaW5nO1xuICBpbkFtcE1vZGU6IGJvb2xlYW47XG4gIGh5YnJpZEFtcDogYm9vbGVhbjtcbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhbjtcbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdO1xuICBhc3NldFByZWZpeD86IHN0cmluZztcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nO1xuICBoZWFkVGFnczogYW55W107XG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlO1xuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBKb3kgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEpveUFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfTtcblxuICBib2R5OiBhbnk7XG5cbiAgZW52OiBFbnY7XG5cbiAgcHJldmlldz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnk7XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkO1xuXG4vKipcbiAqIEpveSBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBKb3lBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD47XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD47XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gSm95QXBpUmVzcG9uc2U8VD47XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogSm95QXBpUmVzcG9uc2U8VD47XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IEpveUFwaVJlc3BvbnNlPFQ+O1xuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBKb3kuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyO1xuICAgIH1cbiAgKSA9PiBKb3lBcGlSZXNwb25zZTxUPjtcbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gSm95QXBpUmVzcG9uc2U8VD47XG59O1xuXG4vKipcbiAqIEpveSBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIEpveUFwaUhhbmRsZXI8VCA9IGFueT4gPSAocmVxOiBKb3lBcGlSZXF1ZXN0LCByZXM6IEpveUFwaVJlc3BvbnNlPFQ+KSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oZm46IFQpOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPjtcblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSkgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/IFwiOlwiICsgcG9ydCA6IFwiXCJ9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiA/IENvbXBvbmVudCA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCBcIlVua25vd25cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxDIGV4dGVuZHMgQmFzZUNvbnRleHQsIElQID0ge30sIFAgPSB7fT4oQXBwOiBKb3lDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZGA7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQO1xuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcImF1dGhcIiwgXCJoYXNoXCIsIFwiaG9zdFwiLCBcImhvc3RuYW1lXCIsIFwiaHJlZlwiLCBcInBhdGhcIiwgXCJwYXRobmFtZVwiLCBcInBvcnRcIiwgXCJwcm90b2NvbFwiLCBcInF1ZXJ5XCIsIFwic2VhcmNoXCIsIFwic2xhc2hlc1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiO1xuZXhwb3J0IGNvbnN0IFNUID0gU1AgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gXCJmdW5jdGlvblwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/lib/utils.js\n");

/***/ }),

/***/ "../joy/dist/joy-server/server/denormalize-page-path.js":
/*!**************************************************************!*\
  !*** ../joy/dist/joy-server/server/denormalize-page-path.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.denormalizePagePath = exports.normalizePathSep = void 0;\n\nfunction normalizePathSep(path) {\n  return path.replace(/\\\\/g, \"/\");\n}\n\nexports.normalizePathSep = normalizePathSep;\n\nfunction denormalizePagePath(page) {\n  page = normalizePathSep(page);\n\n  if (page.startsWith(\"/index/\")) {\n    page = page.slice(6);\n  } else if (page === \"/index\") {\n    page = \"/\";\n  }\n\n  return page;\n}\n\nexports.denormalizePagePath = denormalizePagePath;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3Qvam95LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBZ0IsZ0JBQWhCLENBQWlDLElBQWpDLEVBQTZDO0FBQzNDLFNBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLEdBQXBCLENBQVA7QUFDRDs7QUFGRDs7QUFJQSxTQUFnQixtQkFBaEIsQ0FBb0MsSUFBcEMsRUFBZ0Q7QUFDOUMsTUFBSSxHQUFHLGdCQUFnQixDQUFDLElBQUQsQ0FBdkI7O0FBQ0EsTUFBSSxJQUFJLENBQUMsVUFBTCxDQUFnQixTQUFoQixDQUFKLEVBQWdDO0FBQzlCLFFBQUksR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCLFFBQUksR0FBRyxHQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7O0FBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9qb3ktc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgudHM/ZTI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZTogc3RyaW5nKSB7XG4gIHBhZ2UgPSBub3JtYWxpemVQYXRoU2VwKHBhZ2UpO1xuICBpZiAocGFnZS5zdGFydHNXaXRoKFwiL2luZGV4L1wiKSkge1xuICAgIHBhZ2UgPSBwYWdlLnNsaWNlKDYpO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09IFwiL2luZGV4XCIpIHtcbiAgICBwYWdlID0gXCIvXCI7XG4gIH1cbiAgcmV0dXJuIHBhZ2U7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/joy-server/server/denormalize-page-path.js\n");

/***/ }),

/***/ "../joy/dist/pages/_app.js":
/*!*********************************!*\
  !*** ../joy/dist/pages/_app.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _inheritsLoose = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"../joy/node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.App = void 0;\n\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar router_dom_1 = __webpack_require__(/*! @symph/react/router-dom */ \"../react/router-dom.js\");\n\nvar App = /*#__PURE__*/function (_react_1$default$Comp) {\n  _inheritsLoose(App, _react_1$default$Comp);\n\n  function App(props, context) {\n    var _this;\n\n    _this = _react_1$default$Comp.call(this, props, context) || this;\n    var appContext = props.appContext;\n    _this.reactRouter = appContext.getSync(\"reactRouterService\");\n    return _this;\n  }\n\n  var _proto = App.prototype;\n\n  _proto.getRoutes = function getRoutes() {\n    return this.reactRouter.getRoutes() || [];\n  };\n\n  _proto.render = function render() {\n    var routes = this.getRoutes();\n    return react_1[\"default\"].createElement(router_dom_1.RoutesRenderer, {\n      routes: routes\n    });\n  };\n\n  return App;\n}(react_1[\"default\"].Component);\n\nexports.App = App;\nexports[\"default\"] = App;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0lBTWE7OztBQUVYLGVBQVksS0FBWixFQUFrQyxPQUFsQyxFQUErQztBQUFBOztBQUM3Qyw2Q0FBTSxLQUFOLEVBQWEsT0FBYjtBQUNBLFFBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUF6QjtBQUNBLFVBQUssV0FBTCxHQUFtQixVQUFVLENBQUMsT0FBWCxDQUF1QyxvQkFBdkMsQ0FBbkI7QUFINkM7QUFJOUM7Ozs7U0FFTSxpQ0FBUztBQUNkLFdBQU8sS0FBSyxXQUFMLENBQWlCLFNBQWpCLE1BQWdDLEVBQXZDO0FBQ0Q7O1NBRUQsMkJBQU07QUFDSixRQUFNLE1BQU0sR0FBRyxLQUFLLFNBQUwsRUFBZjtBQUNBLFdBQU8saUNBQUMsMkJBQUQsRUFBZTtBQUFDLFlBQU0sRUFBRTtBQUFULEtBQWYsQ0FBUDtBQUNEOzs7RUFmc0IsbUJBQU07O0FBQS9CO0FBa0JBLHFCQUFlLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9wYWdlcy9fYXBwLnRzeD9hY2RiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElSZWFjdEFwcGxpY2F0aW9uLCBJUmVhY3RSb3V0ZSwgUmVhY3RSb3V0ZXJTZXJ2aWNlIH0gZnJvbSBcIkBzeW1waC9yZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVzUmVuZGVyZXIgfSBmcm9tIFwiQHN5bXBoL3JlYWN0L3JvdXRlci1kb21cIjtcblxuZXhwb3J0IHR5cGUgUmVhY3RBcHBQcm9wcyA9IHtcbiAgYXBwQ29udGV4dDogSVJlYWN0QXBwbGljYXRpb247XG59O1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJlYWN0QXBwUHJvcHMsIGFueT4ge1xuICBwcm90ZWN0ZWQgcmVhY3RSb3V0ZXI6IFJlYWN0Um91dGVyU2VydmljZTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlYWN0QXBwUHJvcHMsIGNvbnRleHQ/OiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgY29uc3QgYXBwQ29udGV4dCA9IHByb3BzLmFwcENvbnRleHQ7XG4gICAgdGhpcy5yZWFjdFJvdXRlciA9IGFwcENvbnRleHQuZ2V0U3luYzxSZWFjdFJvdXRlclNlcnZpY2U+KFwicmVhY3RSb3V0ZXJTZXJ2aWNlXCIpO1xuICB9XG5cbiAgcHVibGljIGdldFJvdXRlcygpOiBJUmVhY3RSb3V0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdFJvdXRlci5nZXRSb3V0ZXMoKSB8fCBbXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByb3V0ZXMgPSB0aGlzLmdldFJvdXRlcygpO1xuICAgIHJldHVybiA8Um91dGVzUmVuZGVyZXIgcm91dGVzPXtyb3V0ZXN9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/pages/_app.js\n");

/***/ }),

/***/ "../react/dist/router/react-router-dom.js":
/*!************************************************!*\
  !*** ../react/dist/router/react-router-dom.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.NavLink = exports.Link = exports.useSearchParams = exports.useLinkClickHandler = exports.HashRouter = exports.BrowserRouter = exports.useOutletContext = exports.useRoutes = exports.useResolvedPath = exports.useParams = exports.useOutlet = exports.useNavigationType = exports.useNavigate = exports.useMatch = exports.useLocation = exports.useInRouterContext = exports.useHref = exports.resolvePath = exports.renderMatches = exports.matchPath = exports.matchRoutes = exports.generatePath = exports.createRoutesFromChildren = exports.Routes = exports.Router = exports.Route = exports.Outlet = exports.Navigate = exports.MemoryRouter = void 0;\n\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/index.js\");\n\nObject.defineProperty(exports, \"createRoutesFromChildren\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.createRoutesFromChildren;\n  }\n}));\nObject.defineProperty(exports, \"generatePath\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.generatePath;\n  }\n}));\nObject.defineProperty(exports, \"matchPath\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.matchPath;\n  }\n}));\nObject.defineProperty(exports, \"matchRoutes\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.matchRoutes;\n  }\n}));\nObject.defineProperty(exports, \"MemoryRouter\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.MemoryRouter;\n  }\n}));\nObject.defineProperty(exports, \"Navigate\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.Navigate;\n  }\n}));\nObject.defineProperty(exports, \"Outlet\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.Outlet;\n  }\n}));\nObject.defineProperty(exports, \"renderMatches\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.renderMatches;\n  }\n}));\nObject.defineProperty(exports, \"resolvePath\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.resolvePath;\n  }\n}));\nObject.defineProperty(exports, \"Route\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.Route;\n  }\n}));\nObject.defineProperty(exports, \"Router\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.Router;\n  }\n}));\nObject.defineProperty(exports, \"Routes\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.Routes;\n  }\n}));\nObject.defineProperty(exports, \"useHref\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useHref;\n  }\n}));\nObject.defineProperty(exports, \"useInRouterContext\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useInRouterContext;\n  }\n}));\nObject.defineProperty(exports, \"useLocation\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useLocation;\n  }\n}));\nObject.defineProperty(exports, \"useMatch\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useMatch;\n  }\n}));\nObject.defineProperty(exports, \"useNavigate\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useNavigate;\n  }\n}));\nObject.defineProperty(exports, \"useNavigationType\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useNavigationType;\n  }\n}));\nObject.defineProperty(exports, \"useOutlet\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useOutlet;\n  }\n}));\nObject.defineProperty(exports, \"useOutletContext\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useOutletContext;\n  }\n}));\nObject.defineProperty(exports, \"useParams\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useParams;\n  }\n}));\nObject.defineProperty(exports, \"useResolvedPath\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useResolvedPath;\n  }\n}));\nObject.defineProperty(exports, \"useRoutes\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_1.useRoutes;\n  }\n}));\n\nvar react_router_dom_2 = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/index.js\");\n\nObject.defineProperty(exports, \"BrowserRouter\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.BrowserRouter;\n  }\n}));\nObject.defineProperty(exports, \"HashRouter\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.HashRouter;\n  }\n}));\nObject.defineProperty(exports, \"Link\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.Link;\n  }\n}));\nObject.defineProperty(exports, \"NavLink\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.NavLink;\n  }\n}));\nObject.defineProperty(exports, \"useLinkClickHandler\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.useLinkClickHandler;\n  }\n}));\nObject.defineProperty(exports, \"useSearchParams\", ({\n  enumerable: true,\n  get: function get() {\n    return react_router_dom_2.useSearchParams;\n  }\n}));\n\n__exportStar(__webpack_require__(/*! ./routes-renderer */ \"../react/dist/router/routes-renderer.js\"), exports);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVhY3QvZGlzdC9yb3V0ZXIvcmVhY3Qtcm91dGVyLWRvbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFrQ0U7QUFBQTtBQUFBO0FBQUEsV0FqQ0EsMkNBaUNBO0FBakN3QjtBQWlDeEI7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQWpDQSwrQkFpQ0E7QUFqQ1k7QUFpQ1o7QUFFQTtBQUFBO0FBQUE7QUFBQSxXQWxDQSw0QkFrQ0E7QUFsQ1M7QUFrQ1Q7QUFEQTtBQUFBO0FBQUE7QUFBQSxXQWhDQSw4QkFnQ0E7QUFoQ1c7QUFnQ1g7QUFSQTtBQUFBO0FBQUE7QUFBQSxXQXZCQSwrQkF1QkE7QUF2Qlk7QUF1Qlo7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQXZCQSwyQkF1QkE7QUF2QlE7QUF1QlI7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQXZCQSx5QkF1QkE7QUF2Qk07QUF1Qk47QUFRQTtBQUFBO0FBQUE7QUFBQSxXQTlCQSxnQ0E4QkE7QUE5QmE7QUE4QmI7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQTlCQSw4QkE4QkE7QUE5Qlc7QUE4Qlg7QUFSQTtBQUFBO0FBQUE7QUFBQSxXQXJCQSx3QkFxQkE7QUFyQks7QUFxQkw7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQXJCQSx5QkFxQkE7QUFyQk07QUFxQk47QUFDQTtBQUFBO0FBQUE7QUFBQSxXQXJCQSx5QkFxQkE7QUFyQk07QUFxQk47QUFPQTtBQUFBO0FBQUE7QUFBQSxXQTNCQSwwQkEyQkE7QUEzQk87QUEyQlA7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQTNCQSxxQ0EyQkE7QUEzQmtCO0FBMkJsQjtBQUNBO0FBQUE7QUFBQTtBQUFBLFdBM0JBLDhCQTJCQTtBQTNCVztBQTJCWDtBQUNBO0FBQUE7QUFBQTtBQUFBLFdBM0JBLDJCQTJCQTtBQTNCUTtBQTJCUjtBQUNBO0FBQUE7QUFBQTtBQUFBLFdBM0JBLDhCQTJCQTtBQTNCVztBQTJCWDtBQUNBO0FBQUE7QUFBQTtBQUFBLFdBM0JBLG9DQTJCQTtBQTNCaUI7QUEyQmpCO0FBQ0E7QUFBQTtBQUFBO0FBQUEsV0EzQkEsNEJBMkJBO0FBM0JTO0FBMkJUO0FBSUE7QUFBQTtBQUFBO0FBQUEsV0E5QkEsbUNBOEJBO0FBOUJnQjtBQThCaEI7QUFIQTtBQUFBO0FBQUE7QUFBQSxXQTFCQSw0QkEwQkE7QUExQlM7QUEwQlQ7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQTFCQSxrQ0EwQkE7QUExQmU7QUEwQmY7QUFDQTtBQUFBO0FBQUE7QUFBQSxXQTFCQSw0QkEwQkE7QUExQlM7QUEwQlQ7O0FBeEJGOztBQW1EUztBQUFBO0FBQUE7QUFBQSxXQW5EQSxnQ0FtREE7QUFuRGE7QUFtRGI7QUFBZTtBQUFBO0FBQUE7QUFBQSxXQW5EQSw2QkFtREE7QUFuRFU7QUFtRFY7QUFBa0Q7QUFBQTtBQUFBO0FBQUEsV0FuRHRDLHVCQW1Ec0M7QUFuRGxDO0FBbURrQztBQUFNO0FBQUE7QUFBQTtBQUFBLFdBbkR0QywwQkFtRHNDO0FBbkQvQjtBQW1EK0I7QUFBNUM7QUFBQTtBQUFBO0FBQUEsV0FuRGUsc0NBbURmO0FBbkRrQztBQW1EbEM7QUFBcUI7QUFBQTtBQUFBO0FBQUEsV0FuRGUsa0NBbURmO0FBbkQ4QjtBQW1EOUI7O0FBSXpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3JlYWN0L3NyYy9yb3V0ZXIvcmVhY3Qtcm91dGVyLWRvbS50cz84NDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVG8gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLFxuICBnZW5lcmF0ZVBhdGgsXG4gIG1hdGNoUGF0aCxcbiAgbWF0Y2hSb3V0ZXMsXG4gIE1lbW9yeVJvdXRlcixcbiAgTmF2aWdhdGUsXG4gIE91dGxldCxcbiAgcmVuZGVyTWF0Y2hlcyxcbiAgcmVzb2x2ZVBhdGgsXG4gIFJvdXRlLFxuICBSb3V0ZXIsXG4gIFJvdXRlcyxcbiAgdXNlSHJlZixcbiAgdXNlSW5Sb3V0ZXJDb250ZXh0LFxuICB1c2VMb2NhdGlvbixcbiAgdXNlTWF0Y2gsXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VOYXZpZ2F0aW9uVHlwZSxcbiAgdXNlT3V0bGV0LFxuICB1c2VPdXRsZXRDb250ZXh0LFxuICB1c2VQYXJhbXMsXG4gIHVzZVJlc29sdmVkUGF0aCxcbiAgdXNlUm91dGVzLFxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgdXNlTGlua0NsaWNrSGFuZGxlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IHtcbiAgTWVtb3J5Um91dGVyLFxuICBOYXZpZ2F0ZSxcbiAgT3V0bGV0LFxuICBSb3V0ZSxcbiAgUm91dGVyLFxuICBSb3V0ZXMsXG4gIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbixcbiAgZ2VuZXJhdGVQYXRoLFxuICBtYXRjaFJvdXRlcyxcbiAgbWF0Y2hQYXRoLFxuICByZW5kZXJNYXRjaGVzLFxuICByZXNvbHZlUGF0aCxcbiAgdXNlSHJlZixcbiAgdXNlSW5Sb3V0ZXJDb250ZXh0LFxuICB1c2VMb2NhdGlvbixcbiAgdXNlTWF0Y2gsXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VOYXZpZ2F0aW9uVHlwZSxcbiAgdXNlT3V0bGV0LFxuICB1c2VQYXJhbXMsXG4gIHVzZVJlc29sdmVkUGF0aCxcbiAgdXNlUm91dGVzLFxuICB1c2VPdXRsZXRDb250ZXh0LFxufTtcblxuZXhwb3J0IHR5cGUge1xuICBMb2NhdGlvbixcbiAgUGF0aCxcbiAgVG8sXG4gIE5hdmlnYXRpb25UeXBlLFxuICBNZW1vcnlSb3V0ZXJQcm9wcyxcbiAgTmF2aWdhdGVGdW5jdGlvbixcbiAgTmF2aWdhdGVPcHRpb25zLFxuICBOYXZpZ2F0ZVByb3BzLFxuICBOYXZpZ2F0b3IsXG4gIE91dGxldFByb3BzLFxuICBQYXJhbXMsXG4gIFBhdGhNYXRjaCxcbiAgUm91dGVNYXRjaCxcbiAgUm91dGVPYmplY3QsXG4gIFJvdXRlUHJvcHMsXG4gIFBhdGhSb3V0ZVByb3BzLFxuICBMYXlvdXRSb3V0ZVByb3BzLFxuICBJbmRleFJvdXRlUHJvcHMsXG4gIFJvdXRlclByb3BzLFxuICBSb3V0ZXNQcm9wcyxcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgdXNlTGlua0NsaWNrSGFuZGxlciwgdXNlU2VhcmNoUGFyYW1zLCBMaW5rLCBOYXZMaW5rIH07XG5cbmV4cG9ydCB0eXBlIHsgQnJvd3NlclJvdXRlclByb3BzLCBIYXNoUm91dGVyUHJvcHMsIEhpc3RvcnlSb3V0ZXJQcm9wcywgTGlua1Byb3BzLCBOYXZMaW5rUHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZXMtcmVuZGVyZXJcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../react/dist/router/react-router-dom.js\n");

/***/ }),

/***/ "../react/dist/router/routes-renderer.js":
/*!***********************************************!*\
  !*** ../react/dist/router/routes-renderer.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.RoutesRenderer = void 0;\n\nvar react_router_1 = __webpack_require__(/*! react-router */ \"../../node_modules/react-router/index.js\");\n\nfunction RoutesRenderer(_ref) {\n  var routes = _ref.routes,\n      location = _ref.location;\n  return (0, react_router_1.useRoutes)(routes, location);\n}\n\n_c = RoutesRenderer;\nexports.RoutesRenderer = RoutesRenderer;\n\nvar _c;\n\n$RefreshReg$(_c, \"RoutesRenderer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVhY3QvZGlzdC9yb3V0ZXIvcm91dGVzLXJlbmRlcmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBZ0IsY0FBaEIsT0FBbUk7QUFBQSxNQUFsRyxNQUFrRyxRQUFsRyxNQUFrRztBQUFBLE1BQTFGLFFBQTBGLFFBQTFGLFFBQTBGO0FBQ2pJLFNBQU8sOEJBQVUsTUFBVixFQUFrQixRQUFsQixDQUFQO0FBQ0Q7O0tBRmU7QUFBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcmVhY3Qvc3JjL3JvdXRlci9yb3V0ZXMtcmVuZGVyZXIudHM/NzYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBJUmVhY3RSb3V0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZXNSZW5kZXJlcih7IHJvdXRlcywgbG9jYXRpb24gfTogeyByb3V0ZXM6IElSZWFjdFJvdXRlW107IGxvY2F0aW9uPzogUGFydGlhbDxMb2NhdGlvbj4gJiB7IHBhdGhuYW1lOiBzdHJpbmcgfSB9KSB7XG4gIHJldHVybiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../react/dist/router/routes-renderer.js\n");

/***/ }),

/***/ "../../node_modules/history/index.js":
/*!*******************************************!*\
  !*** ../../node_modules/history/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ r; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ I; },
/* harmony export */   "parsePath": function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js");
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= true?function(b){return Object.freeze(b)}:0;function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(e){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(e){return e!==h})}},call:function(h){b.forEach(function(e){return e&&e(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;e=void 0===e?"":e;b=b.hash;b=void 0===b?"":b;e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e);b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b);return h}
function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e));e=b.indexOf("?");0<=e&&(h.search=b.substr(e),b=b.substr(0,e));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function e(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({pathname:q.pathname,hash:"",search:""},"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function f(){A(c,a)}var l=r.Push,k=x(c,
a);if(!g.length||(g.call({action:l,location:k,retry:f}),!1)){var n=[{usr:k.state,key:k.key,idx:v+1},e(k)];k=n[0];n=n[1];try{m.pushState(k,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function f(){y(c,a)}var l=r.Replace,k=x(c,a);g.length&&(g.call({action:l,location:k,retry:f}),1)||(k=[{usr:k.state,key:k.key,idx:v},e(k)],m.replaceState(k[0],"",k[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",
function(){if(u)g.call(u),u=null;else{var c=r.Pop,a=h(),f=a[0];a=a[1];if(g.length)if(null!=f){var l=v-f;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):
0;else z(c)}});var t=r.Pop;b=h();var v=b[0],q=b[1],d=F(),g=F();null==v&&(v=0,m.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:e,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=g.push(c);1===g.length&&p.addEventListener("beforeunload",E);return function(){a();g.length||p.removeEventListener("beforeunload",E)}}}};
function createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),f=a.pathname,l=a.search;a=a.hash;var k=u.state||{};return[k.idx,C({pathname:void 0===f?"/":f,search:void 0===l?"":l,hash:void 0===a?"":a,state:k.usr||null,key:k.key||"default"})]}function e(){if(t)c.call(t),t=null;else{var a=r.Pop,f=h(),l=f[0];f=f[1];if(c.length)if(null!=l){var k=q-l;k&&(t={action:a,location:f,retry:function(){p(-1*k)}},p(k))}else true?D(!1,"You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."):
0;else A(a)}}function x(a){var f=document.querySelector("base"),l="";f&&f.getAttribute("href")&&(f=m.location.href,l=f.indexOf("#"),l=-1===l?f:f.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,f){void 0===f&&(f=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({pathname:d.pathname,hash:"",search:""},"string"===typeof a?J(a):a,{state:f,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];g.call({action:v,location:d})}function y(a,f){function l(){y(a,f)}var k=r.Push,n=z(a,f); true?
D("/"===n.pathname.charAt(0),"Relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")"):0;if(!c.length||(c.call({action:k,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(k)}}function w(a,f){function l(){w(a,f)}var k=r.Replace,n=z(a,f); true?D("/"===n.pathname.charAt(0),"Relative pathnames are not supported in hash history.replace("+JSON.stringify(a)+
")"):0;c.length&&(c.call({action:k,location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(k))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",e);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&e()});var v=r.Pop;b=h();var q=b[0],d=b[1],g=F(),c=F();null==q&&(q=0,u.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},
createHref:x,push:y,replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return g.push(a)},block:function(a){var f=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){f();c.length||m.removeEventListener("beforeunload",E)}}}};
function createMemoryHistory(b){function h(d,g){void 0===g&&(g=null);return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({pathname:t.pathname,search:"",hash:""},"string"===typeof d?J(d):d,{state:g,key:H()}))}function e(d,g,c){return!q.length||(q.call({action:d,location:g,retry:c}),!1)}function x(d,g){u=d;t=g;v.call({action:u,location:t})}function z(d,g){var c=r.Push,a=h(d,g); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.push("+JSON.stringify(d)+")"):
0;e(c,a,function(){z(d,g)})&&(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,g){var c=r.Replace,a=h(d,g); true?D("/"===t.pathname.charAt(0),"Relative pathnames are not supported in memory history.replace("+JSON.stringify(d)+")"):0;e(c,a,function(){A(d,g)})&&(p[m]=a,x(c,a))}function y(d){var g=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[g];e(c,a,function(){y(d)})&&(m=g,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===
b?["/"]:b).map(function(d){var g=C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); true?D("/"===g.pathname.charAt(0),"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: "+JSON.stringify(d)+")"):0;return g}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===
typeof d?d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};


/***/ }),

/***/ "../../node_modules/path-to-regexp/dist.es2015/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "compile": function() { return /* binding */ compile; },
/* harmony export */   "tokensToFunction": function() { return /* binding */ tokensToFunction; },
/* harmony export */   "match": function() { return /* binding */ match; },
/* harmony export */   "regexpToFunction": function() { return /* binding */ regexpToFunction; },
/* harmony export */   "tokensToRegexp": function() { return /* binding */ tokensToRegexp; },
/* harmony export */   "pathToRegexp": function() { return /* binding */ pathToRegexp; }
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}


/***/ }),

/***/ "../../node_modules/react-router-dom/index.js":
/*!****************************************************!*\
  !*** ../../node_modules/react-router-dom/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate; },
/* harmony export */   "Outlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router; },
/* harmony export */   "Routes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext; },
/* harmony export */   "createRoutesFromChildren": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
/* harmony export */   "renderMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
/* harmony export */   "useHref": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref; },
/* harmony export */   "useInRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation; },
/* harmony export */   "useMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch; },
/* harmony export */   "useNavigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutletContext; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams; },
/* harmony export */   "useResolvedPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes; },
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "createSearchParams": function() { return /* binding */ createSearchParams; },
/* harmony export */   "unstable_HistoryRouter": function() { return /* binding */ HistoryRouter; },
/* harmony export */   "useLinkClickHandler": function() { return /* binding */ useLinkClickHandler; },
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "../../node_modules/history/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../../node_modules/react-router/index.js");
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (true) {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (true) {
  NavLink.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || (0,history__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,history__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   true ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}




/***/ }),

/***/ "../../node_modules/react-router/index.js":
/*!************************************************!*\
  !*** ../../node_modules/react-router/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* binding */ Navigate; },
/* harmony export */   "Outlet": function() { return /* binding */ Outlet; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* binding */ LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* binding */ NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* binding */ RouteContext; },
/* harmony export */   "createRoutesFromChildren": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "renderMatches": function() { return /* binding */ renderMatches; },
/* harmony export */   "resolvePath": function() { return /* binding */ resolvePath; },
/* harmony export */   "useHref": function() { return /* binding */ useHref; },
/* harmony export */   "useInRouterContext": function() { return /* binding */ useInRouterContext; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useMatch": function() { return /* binding */ useMatch; },
/* harmony export */   "useNavigate": function() { return /* binding */ useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* binding */ useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* binding */ useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* binding */ useOutletContext; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useResolvedPath": function() { return /* binding */ useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* binding */ useRoutes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "../../node_modules/history/index.js");
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? warning(false, message) : 0;
  }
} ///////////////////////////////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////////////////////////////////

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */


const NavigationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (true) {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (true) {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  outlet: null,
  matches: []
});

if (true) {
  RouteContext.displayName = "Route";
} ///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////////////////////


/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? warning(!(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let navigate = useNavigate();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = history__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  true ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   true ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */
function useNavigationType() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext);
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */

function useOutletContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    matches: parentMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (true) {
     true ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : 0;
  }

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, element => {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * The parameters that were parsed from the URL path.
 */

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  true ? invariant(false, "Missing \":" + key + "\" param") : 0 : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  true ? invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.") : 0 : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  true ? invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\".")) : 0 : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */


function renderMatches(matches) {
  return _renderMatches(matches);
}

function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\".")) : 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    "(?:\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     true ? warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) : 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__.parsePath)(to).pathname : to.pathname;
}

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////




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

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************!*\
  !*** ../../node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "../joy/node_modules/@babel/runtime/helpers/construct.js":
/*!***************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/helpers/construct.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../joy/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "../joy/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
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

/***/ "../joy/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!******************************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \******************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
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

/***/ "../joy/node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../react/router-dom.js":
/*!******************************!*\
  !*** ../react/router-dom.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/router/react-router-dom */ \"../react/dist/router/react-router-dom.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVhY3Qvcm91dGVyLWRvbS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxzSEFBMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcmVhY3Qvcm91dGVyLWRvbS5qcz9hMjVhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGlzdC9yb3V0ZXIvcmVhY3Qtcm91dGVyLWRvbVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../react/router-dom.js\n");

/***/ }),

/***/ "../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_app&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_app!":
/*!****************************************************************************************************************************************!*\
  !*** ../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_app&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_app! ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__JOY_P = window.__JOY_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! @symph/joy/dist/pages/_app */ "../joy/dist/pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "../../node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("../joy/dist/build/webpack/loaders/joy-client-pages-loader.js?page=%2F_app&absolutePagePath=%40symph%2Fjoy%2Fdist%2Fpages%2F_app!"), __webpack_exec__("../joy/dist/client/router.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);