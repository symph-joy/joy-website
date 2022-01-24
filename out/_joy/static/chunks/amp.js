/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "../joy/dist/build/polyfills/fetch/index.js":
/*!**************************************************!*\
  !*** ../joy/dist/build/polyfills/fetch/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/* globals self */\n\nvar fetch = self.fetch.bind(self);\nmodule.exports = fetch;\nmodule.exports[\"default\"] = module.exports;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvYnVpbGQvcG9seWZpbGxzL2ZldGNoL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQVo7QUFDQSxNQUFNLENBQUMsT0FBUCxHQUFpQixLQUFqQjtBQUNBLDRCQUF5QixNQUFNLENBQUMsT0FBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvaW5kZXguanM/MGJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHNlbGYgKi9cbnZhciBmZXRjaCA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbm1vZHVsZS5leHBvcnRzID0gZmV0Y2g7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/build/polyfills/fetch/index.js\n");

/***/ }),

/***/ "../joy/dist/client/dev/amp-dev.js":
/*!*****************************************!*\
  !*** ../joy/dist/client/dev/amp-dev.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ \"../joy/node_modules/@babel/runtime/regenerator/index.js\");\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/* globals __webpack_hash__ */\n\nvar fetch_1 = __importDefault(__webpack_require__(/*! ../../build/polyfills/fetch */ \"../joy/dist/build/polyfills/fetch/index.js\"));\n\nvar event_source_polyfill_1 = __importDefault(__webpack_require__(/*! ./event-source-polyfill */ \"../joy/dist/client/dev/event-source-polyfill.js\"));\n\nvar eventsource_1 = __webpack_require__(/*! ./error-overlay/eventsource */ \"../joy/dist/client/dev/error-overlay/eventsource.js\");\n\nvar on_demand_entries_utils_1 = __webpack_require__(/*! ./on-demand-entries-utils */ \"../joy/dist/client/dev/on-demand-entries-utils.js\");\n\nvar fouc_1 = __webpack_require__(/*! ./fouc */ \"../joy/dist/client/dev/fouc.js\");\n\nif (!window.EventSource) {\n  window.EventSource = event_source_polyfill_1[\"default\"];\n}\n\nvar data = JSON.parse(document.getElementById(\"__JOY_DATA__\").textContent);\nvar assetPrefix = data.assetPrefix,\n    page = data.page;\nassetPrefix = assetPrefix || \"\";\nvar mostRecentHash = null;\n/* eslint-disable-next-line */\n\nvar curHash = __webpack_require__.h();\nvar hotUpdatePath = assetPrefix + (assetPrefix.endsWith(\"/\") ? \"\" : \"/\") + \"_joy/static/webpack/\"; // Is there a newer version of this code available?\n\nfunction isUpdateAvailable() {\n  // __webpack_hash__ is the hash of the current compilation.\n  // It's a global variable injected by Webpack.\n\n  /* eslint-disable-next-line */\n  return mostRecentHash !== __webpack_require__.h();\n} // Webpack disallows updates in other states.\n\n\nfunction canApplyUpdates() {\n  return module.hot.status() === \"idle\";\n} // This function reads code updates on the fly and hard\n// reloads the page when it has changed.\n\n\nfunction tryApplyUpdates() {\n  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {\n    var res, jsonData, curPage, pageUpdated;\n    return _regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(!isUpdateAvailable() || !canApplyUpdates())) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 2:\n            _context.prev = 2;\n            _context.next = 5;\n            return (0, fetch_1[\"default\"])(\"\" + hotUpdatePath + curHash + \".hot-update.json\");\n\n          case 5:\n            res = _context.sent;\n            _context.next = 8;\n            return res.json();\n\n          case 8:\n            jsonData = _context.sent;\n            curPage = page === \"/\" ? \"index\" : page; // webpack 5 uses an array instead\n\n            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {\n              return mod.indexOf(\"pages\" + (curPage.substr(0, 1) === \"/\" ? curPage : \"/\" + curPage)) !== -1 || mod.indexOf((\"pages\" + (curPage.substr(0, 1) === \"/\" ? curPage : \"/\" + curPage)).replace(/\\//g, \"\\\\\")) !== -1;\n            });\n\n            if (pageUpdated) {\n              document.location.reload(true);\n            } else {\n              curHash = mostRecentHash;\n            }\n\n            _context.next = 18;\n            break;\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](2);\n            console.error(\"Error occurred checking for update\", _context.t0);\n            document.location.reload(true);\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 14]]);\n  }));\n}\n\n(0, eventsource_1.getEventSourceWrapper)({\n  path: assetPrefix + \"/_joy/webpack-hmr\"\n}).addMessageListener(function (event) {\n  if (event.data === \"\\uD83D\\uDC93\") {\n    return;\n  }\n\n  try {\n    var message = JSON.parse(event.data);\n\n    if (message.action === \"sync\" || message.action === \"built\") {\n      if (!message.hash) {\n        return;\n      }\n\n      mostRecentHash = message.hash;\n      tryApplyUpdates();\n    } else if (message.action === \"reloadPage\") {\n      document.location.reload(true);\n    }\n  } catch (ex) {\n    console.warn(\"Invalid HMR message: \" + event.data + \"\\n\" + ex);\n  }\n});\n(0, on_demand_entries_utils_1.setupPing)(assetPrefix, function () {\n  return page;\n});\n(0, fouc_1.displayContent)();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosRUFBeUI7QUFDdkIsUUFBTSxDQUFDLFdBQVAsR0FBcUIsa0NBQXJCO0FBQ0Q7O0FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxXQUFuRCxDQUFiO0FBQ0EsSUFBTSxXQUFOLEdBQTRCLElBQTVCLENBQU0sV0FBTjtBQUFBLElBQW1CLElBQW5CLEdBQTRCLElBQTVCLENBQW1CLElBQW5CO0FBQ0EsV0FBVyxHQUFHLFdBQVcsSUFBSSxFQUE3QjtBQUNBLElBQUksY0FBYyxHQUFHLElBQXJCO0FBQ0E7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsdUJBQWQ7QUFDQSxJQUFNLGFBQWEsR0FDakIsV0FBVyxJQUFJLFdBQVcsQ0FBQyxRQUFaLENBQXFCLEdBQXJCLElBQTRCLEVBQTVCLEdBQWlDLEdBQXJDLENBQVgsR0FBdUQsc0JBRHpELEVBR0E7O0FBQ0EsU0FBUyxpQkFBVCxHQUEwQjtBQUN4QjtBQUNBOztBQUNBO0FBQ0EsU0FBTyxjQUFjLEtBQUssdUJBQTFCO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBUyxlQUFULEdBQXdCO0FBQ3RCLFNBQU8sV0FBVyxNQUFYLE9BQXdCLE1BQS9CO0FBQ0QsRUFFRDtBQUNBOzs7QUFDQSxTQUFlLGVBQWYsR0FBOEI7Ozs7Ozs7a0JBQ3hCLENBQUMsaUJBQWlCLEVBQWxCLElBQXdCLENBQUMsZUFBZTs7Ozs7Ozs7OztBQUk5QixtQkFBTSw2QkFBUyxhQUFULEdBQXlCLE9BQXpCLHNCQUFOOzs7QUFBTjs7QUFDVyxtQkFBTSxHQUFHLENBQUMsSUFBSixFQUFOOzs7QUFBWDtBQUNBLHNCQUFVLElBQUksS0FBSyxHQUFULEdBQWUsT0FBZixHQUF5QixNQUN6Qzs7QUFDTSwwQkFBYyxDQUFDLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBUSxDQUFDLENBQXZCLElBQ2pCLFFBQVEsQ0FBQyxDQURRLEdBRWpCLE1BQU0sQ0FBQyxJQUFQLENBQVksUUFBUSxDQUFDLENBQXJCLENBRmdCLEVBR2xCLElBSGtCLENBR2IsVUFBQyxHQUFELEVBQVE7QUFDYixxQkFDRSxHQUFHLENBQUMsT0FBSixZQUNVLE9BQU8sQ0FBQyxNQUFSLENBQWUsQ0FBZixFQUFrQixDQUFsQixNQUF5QixHQUF6QixHQUErQixPQUEvQixTQUE2QyxPQUR2RCxPQUVNLENBQUMsQ0FGUCxJQUdBLEdBQUcsQ0FBQyxPQUFKLENBQ0UsWUFDRSxPQUFPLENBQUMsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsTUFBeUIsR0FBekIsR0FBK0IsT0FBL0IsU0FBNkMsT0FEL0MsR0FFRyxPQUZILENBRVcsS0FGWCxFQUVrQixJQUZsQixDQURGLE1BSU0sQ0FBQyxDQVJUO0FBVUQsYUFkbUI7O0FBZ0JwQixnQkFBSSxXQUFKLEVBQWlCO0FBQ2Ysc0JBQVEsQ0FBQyxRQUFULENBQWtCLE1BQWxCLENBQXlCLElBQXpCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU8sR0FBRyxjQUFWO0FBQ0Q7Ozs7Ozs7O0FBRUQsbUJBQU8sQ0FBQyxLQUFSLENBQWMsb0NBQWQ7QUFDQSxvQkFBUSxDQUFDLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBeUIsSUFBekI7Ozs7Ozs7OztBQUVIOztBQUVELHlDQUFzQjtBQUNwQixNQUFJLEVBQUssV0FBTDtBQURnQixDQUF0QixFQUVHLGtCQUZILENBRXNCLFVBQUMsS0FBRCxFQUFVO0FBQzlCLE1BQUksS0FBSyxDQUFDLElBQU4sS0FBZSxjQUFuQixFQUFtQztBQUNqQztBQUNEOztBQUVELE1BQUk7QUFDRixRQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxJQUFqQixDQUFoQjs7QUFFQSxRQUFJLE9BQU8sQ0FBQyxNQUFSLEtBQW1CLE1BQW5CLElBQTZCLE9BQU8sQ0FBQyxNQUFSLEtBQW1CLE9BQXBELEVBQTZEO0FBQzNELFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBYixFQUFtQjtBQUNqQjtBQUNEOztBQUNELG9CQUFjLEdBQUcsT0FBTyxDQUFDLElBQXpCO0FBQ0EscUJBQWU7QUFDaEIsS0FORCxNQU1PLElBQUksT0FBTyxDQUFDLE1BQVIsS0FBbUIsWUFBdkIsRUFBcUM7QUFDMUMsY0FBUSxDQUFDLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBeUIsSUFBekI7QUFDRDtBQUNGLEdBWkQsQ0FZRSxPQUFPLEVBQVAsRUFBVztBQUNYLFdBQU8sQ0FBQyxJQUFSLENBQWEsMEJBQTBCLEtBQUssQ0FBQyxJQUFoQyxHQUF1QyxJQUF2QyxHQUE4QyxFQUEzRDtBQUNEO0FBQ0YsQ0F0QkQ7QUF3QkEseUNBQVUsV0FBVixFQUF1QjtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQXZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vam95L3NyYy9jbGllbnQvZGV2L2FtcC1kZXYuanM/YjAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vLi4vYnVpbGQvcG9seWZpbGxzL2ZldGNoXCI7XG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tIFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIjtcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIjtcbmltcG9ydCB7IHNldHVwUGluZyB9IGZyb20gXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudCB9IGZyb20gXCIuL2ZvdWNcIjtcblxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgd2luZG93LkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2VQb2x5ZmlsbDtcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfX0pPWV9EQVRBX19cIikudGV4dENvbnRlbnQpO1xubGV0IHsgYXNzZXRQcmVmaXgsIHBhZ2UgfSA9IGRhdGE7XG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8IFwiXCI7XG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsO1xuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX187XG5jb25zdCBob3RVcGRhdGVQYXRoID1cbiAgYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoXCIvXCIpID8gXCJcIiA6IFwiL1wiKSArIFwiX2pveS9zdGF0aWMvd2VicGFjay9cIjtcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiaWRsZVwiO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7XG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IGN1clBhZ2UgPSBwYWdlID09PSBcIi9cIiA/IFwiaW5kZXhcIiA6IHBhZ2U7XG4gICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYylcbiAgICAgID8ganNvbkRhdGEuY1xuICAgICAgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKVxuICAgICkuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSBcIi9cIiA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSBcIi9cIiA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gXG4gICAgICAgICAgfWAucmVwbGFjZSgvXFwvL2csIFwiXFxcXFwiKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2g7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZVwiLCBlcnIpO1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX2pveS93ZWJwYWNrLWhtcmAsXG59KS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcInN5bmNcIiB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gXCJidWlsdFwiKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaDtcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwicmVsb2FkUGFnZVwiKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChleCkge1xuICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gIH1cbn0pO1xuXG5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpID0+IHBhZ2UpO1xuZGlzcGxheUNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/client/dev/amp-dev.js\n");

/***/ }),

/***/ "../joy/dist/client/dev/error-overlay/eventsource.js":
/*!***********************************************************!*\
  !*** ../joy/dist/client/dev/error-overlay/eventsource.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getEventSourceWrapper = void 0;\nvar eventCallbacks = [];\n\nfunction EventSourceWrapper(options) {\n  var source;\n  var lastActivity = new Date();\n  var listeners = [];\n\n  if (!options.timeout) {\n    options.timeout = 20 * 1000;\n  }\n\n  init();\n  var timer = setInterval(function () {\n    if (new Date() - lastActivity > options.timeout) {\n      handleDisconnect();\n    }\n  }, options.timeout / 2);\n\n  function init() {\n    source = new window.EventSource(options.path);\n    source.onopen = handleOnline;\n    source.onerror = handleDisconnect;\n    source.onmessage = handleMessage;\n  }\n\n  function handleOnline() {\n    if (options.log) console.log(\"[HMR] connected\");\n    lastActivity = new Date();\n  }\n\n  function handleMessage(event) {\n    lastActivity = new Date();\n\n    for (var i = 0; i < listeners.length; i++) {\n      listeners[i](event);\n    }\n\n    eventCallbacks.forEach(function (cb) {\n      if (!cb.unfiltered && event.data.indexOf(\"action\") === -1) return;\n      cb(event);\n    });\n  }\n\n  function handleDisconnect() {\n    clearInterval(timer);\n    source.close();\n    setTimeout(init, options.timeout);\n  }\n\n  return {\n    close: function close() {\n      clearInterval(timer);\n      source.close();\n    },\n    addMessageListener: function addMessageListener(fn) {\n      listeners.push(fn);\n    }\n  };\n}\n\n_c = EventSourceWrapper;\n\nfunction getEventSourceWrapper(options) {\n  if (!options.ondemand) {\n    return {\n      addMessageListener: function addMessageListener(cb) {\n        eventCallbacks.push(cb);\n      }\n    };\n  }\n\n  return EventSourceWrapper(options);\n}\n\nexports.getEventSourceWrapper = getEventSourceWrapper;\n\nvar _c;\n\n$RefreshReg$(_c, \"EventSourceWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNLGNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQW1DO0FBQ2pDLE1BQUksTUFBSjtBQUNBLE1BQUksWUFBWSxHQUFHLElBQUksSUFBSixFQUFuQjtBQUNBLE1BQUksU0FBUyxHQUFHLEVBQWhCOztBQUVBLE1BQUksQ0FBQyxPQUFPLENBQUMsT0FBYixFQUFzQjtBQUNwQixXQUFPLENBQUMsT0FBUixHQUFrQixLQUFLLElBQXZCO0FBQ0Q7O0FBRUQsTUFBSTtBQUNKLE1BQUksS0FBSyxHQUFHLFdBQVcsQ0FBQztBQUN0QixRQUFJLElBQUksSUFBSixLQUFhLFlBQWIsR0FBNEIsT0FBTyxDQUFDLE9BQXhDLEVBQWlEO0FBQy9DLHNCQUFnQjtBQUNqQjtBQUNGLEdBSnNCLEVBSXBCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBSkUsQ0FBdkI7O0FBTUEsV0FBUyxJQUFULEdBQWE7QUFDWCxVQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBWCxDQUF1QixPQUFPLENBQUMsSUFBL0IsQ0FBVDtBQUNBLFVBQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQWhCO0FBQ0EsVUFBTSxDQUFDLE9BQVAsR0FBaUIsZ0JBQWpCO0FBQ0EsVUFBTSxDQUFDLFNBQVAsR0FBbUIsYUFBbkI7QUFDRDs7QUFFRCxXQUFTLFlBQVQsR0FBcUI7QUFDbkIsUUFBSSxPQUFPLENBQUMsR0FBWixFQUFpQixPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ2pCLGdCQUFZLEdBQUcsSUFBSSxJQUFKLEVBQWY7QUFDRDs7QUFFRCxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBNEI7QUFDMUIsZ0JBQVksR0FBRyxJQUFJLElBQUosRUFBZjs7QUFDQSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUE5QixFQUFzQyxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYSxLQUFiO0FBQ0Q7O0FBRUQsa0JBQWMsQ0FBQyxPQUFmLENBQXVCLFVBQUMsRUFBRCxFQUFPO0FBQzVCLFVBQUksQ0FBQyxFQUFFLENBQUMsVUFBSixJQUFrQixLQUFLLENBQUMsSUFBTixDQUFXLE9BQVgsQ0FBbUIsUUFBbkIsTUFBaUMsQ0FBQyxDQUF4RCxFQUEyRDtBQUMzRCxRQUFFLENBQUMsS0FBRCxDQUFGO0FBQ0QsS0FIRDtBQUlEOztBQUVELFdBQVMsZ0JBQVQsR0FBeUI7QUFDdkIsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQSxVQUFNLENBQUMsS0FBUDtBQUNBLGNBQVUsQ0FBQyxJQUFELEVBQU8sT0FBTyxDQUFDLE9BQWYsQ0FBVjtBQUNEOztBQUVELFNBQU87QUFDTCxTQUFLLEVBQUUsaUJBQUs7QUFDVixtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBLFlBQU0sQ0FBQyxLQUFQO0FBQ0QsS0FKSTtBQUtMLHNCQUFrQixFQUFFLDRCQUFVLEVBQVYsRUFBWTtBQUM5QixlQUFTLENBQUMsSUFBVixDQUFlLEVBQWY7QUFDRDtBQVBJLEdBQVA7QUFTRDs7S0F2RFE7O0FBeURULFNBQWdCLHFCQUFoQixDQUFzQyxPQUF0QyxFQUE2QztBQUMzQyxNQUFJLENBQUMsT0FBTyxDQUFDLFFBQWIsRUFBdUI7QUFDckIsV0FBTztBQUNMLHdCQUFrQixFQUFFLDRCQUFDLEVBQUQsRUFBTztBQUN6QixzQkFBYyxDQUFDLElBQWYsQ0FBb0IsRUFBcEI7QUFDRDtBQUhJLEtBQVA7QUFLRDs7QUFDRCxTQUFPLGtCQUFrQixDQUFDLE9BQUQsQ0FBekI7QUFDRDs7QUFURCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcz81NDY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW107XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHZhciBzb3VyY2U7XG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDA7XG4gIH1cblxuICBpbml0KCk7XG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aCk7XG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZTtcbiAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3Q7XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGNvbm5lY3RlZFwiKTtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoXCJhY3Rpb25cIikgPT09IC0xKSByZXR1cm47XG4gICAgICBjYihldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHNvdXJjZS5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvc2U6ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgc291cmNlLmNsb3NlKCk7XG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYik7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/client/dev/error-overlay/eventsource.js\n");

/***/ }),

/***/ "../joy/dist/client/dev/event-source-polyfill.js":
/*!*******************************************************!*\
  !*** ../joy/dist/client/dev/event-source-polyfill.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/* eslint-disable */\n// Improved version of https://github.com/Yaffle/EventSource/\n// Available under MIT License (MIT)\n// Only tries to support IE11 and nothing below\n\nvar fetch_1 = __importDefault(__webpack_require__(/*! ../..//build/polyfills/fetch */ \"../joy/dist/build/polyfills/fetch/index.js\"));\n\nvar document = window.document;\nvar Response = window.Response;\nvar TextDecoder = window.TextDecoder;\nvar TextEncoder = window.TextEncoder;\nvar AbortController = window.AbortController;\n\nif (AbortController == undefined) {\n  AbortController = function AbortController() {\n    this.signal = null;\n\n    this.abort = function () {};\n  };\n}\n\nfunction TextDecoderPolyfill() {\n  this.bitsNeeded = 0;\n  this.codePoint = 0;\n}\n\n_c = TextDecoderPolyfill;\n\nTextDecoderPolyfill.prototype.decode = function (octets) {\n  function valid(codePoint, shift, octetsCount) {\n    if (octetsCount === 1) {\n      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;\n    }\n\n    if (octetsCount === 2) {\n      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;\n    }\n\n    if (octetsCount === 3) {\n      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;\n    }\n\n    throw new Error();\n  }\n\n  function octetsCount(bitsNeeded, codePoint) {\n    if (bitsNeeded === 6 * 1) {\n      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;\n    }\n\n    if (bitsNeeded === 6 * 2) {\n      return codePoint > 15 ? 3 : 2;\n    }\n\n    if (bitsNeeded === 6 * 3) {\n      return 3;\n    }\n\n    throw new Error();\n  }\n\n  var REPLACER = 0xfffd;\n  var string = \"\";\n  var bitsNeeded = this.bitsNeeded;\n  var codePoint = this.codePoint;\n\n  for (var i = 0; i < octets.length; i += 1) {\n    var octet = octets[i];\n\n    if (bitsNeeded !== 0) {\n      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {\n        bitsNeeded = 0;\n        codePoint = REPLACER;\n        string += String.fromCharCode(codePoint);\n      }\n    }\n\n    if (bitsNeeded === 0) {\n      if (octet >= 0 && octet <= 127) {\n        bitsNeeded = 0;\n        codePoint = octet;\n      } else if (octet >= 192 && octet <= 223) {\n        bitsNeeded = 6 * 1;\n        codePoint = octet & 31;\n      } else if (octet >= 224 && octet <= 239) {\n        bitsNeeded = 6 * 2;\n        codePoint = octet & 15;\n      } else if (octet >= 240 && octet <= 247) {\n        bitsNeeded = 6 * 3;\n        codePoint = octet & 7;\n      } else {\n        bitsNeeded = 0;\n        codePoint = REPLACER;\n      }\n\n      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {\n        bitsNeeded = 0;\n        codePoint = REPLACER;\n      }\n    } else {\n      bitsNeeded -= 6;\n      codePoint = codePoint << 6 | octet & 63;\n    }\n\n    if (bitsNeeded === 0) {\n      if (codePoint <= 0xffff) {\n        string += String.fromCharCode(codePoint);\n      } else {\n        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));\n        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));\n      }\n    }\n  }\n\n  this.bitsNeeded = bitsNeeded;\n  this.codePoint = codePoint;\n  return string;\n}; // Firefox < 38 throws an error with stream option\n\n\nvar supportsStreamOption = function supportsStreamOption() {\n  try {\n    return new TextDecoder().decode(new TextEncoder().encode(\"test\"), {\n      stream: true\n    }) === \"test\";\n  } catch (error) {\n    console.log(error);\n  }\n\n  return false;\n}; // IE, Edge\n\n\nif (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {\n  TextDecoder = TextDecoderPolyfill;\n}\n\nvar k = function k() {};\n\nfunction XHRWrapper(xhr) {\n  this.withCredentials = false;\n  this.responseType = \"\";\n  this.readyState = 0;\n  this.status = 0;\n  this.statusText = \"\";\n  this.responseText = \"\";\n  this.onprogress = k;\n  this.onreadystatechange = k;\n  this._contentType = \"\";\n  this._xhr = xhr;\n  this._sendTimeout = 0;\n  this._abort = k;\n}\n\n_c2 = XHRWrapper;\n\nXHRWrapper.prototype.open = function (method, url) {\n  this._abort(true);\n\n  var that = this;\n  var xhr = this._xhr;\n  var state = 1;\n  var timeout = 0;\n\n  this._abort = function (silent) {\n    if (that._sendTimeout !== 0) {\n      clearTimeout(that._sendTimeout);\n      that._sendTimeout = 0;\n    }\n\n    if (state === 1 || state === 2 || state === 3) {\n      state = 4;\n      xhr.onload = k;\n      xhr.onerror = k;\n      xhr.onabort = k;\n      xhr.onprogress = k;\n      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event\n      // Opera < 10: XMLHttpRequest#abort() does not fire any event\n\n      xhr.abort();\n\n      if (timeout !== 0) {\n        clearTimeout(timeout);\n        timeout = 0;\n      }\n\n      if (!silent) {\n        that.readyState = 4;\n        that.onreadystatechange();\n      }\n    }\n\n    state = 0;\n  };\n\n  var onStart = function onStart() {\n    if (state === 1) {\n      // state = 2;\n      var status = 0;\n      var statusText = \"\";\n      var contentType = undefined;\n\n      if (!(\"contentType\" in xhr)) {\n        try {\n          status = xhr.status;\n          statusText = xhr.statusText;\n          contentType = xhr.getResponseHeader(\"Content-Type\");\n        } catch (error) {\n          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3\n          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2\n          // https://bugs.webkit.org/show_bug.cgi?id=29121\n          status = 0;\n          statusText = \"\";\n          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?\n          // https://bugs.webkit.org/show_bug.cgi?id=29658\n          // https://bugs.webkit.org/show_bug.cgi?id=77854\n        }\n      } else {\n        status = 200;\n        statusText = \"OK\";\n        contentType = xhr.contentType;\n      }\n\n      if (status !== 0) {\n        state = 2;\n        that.readyState = 2;\n        that.status = status;\n        that.statusText = statusText;\n        that._contentType = contentType;\n        that.onreadystatechange();\n      }\n    }\n  };\n\n  var onProgress = function onProgress() {\n    onStart();\n\n    if (state === 2 || state === 3) {\n      state = 3;\n      var responseText = \"\";\n\n      try {\n        responseText = xhr.responseText;\n      } catch (error) {// IE 8 - 9 with XMLHttpRequest\n      }\n\n      that.readyState = 3;\n      that.responseText = responseText;\n      that.onprogress();\n    }\n  };\n\n  var onFinish = function onFinish() {\n    // Firefox 52 fires \"readystatechange\" (xhr.readyState === 4) without final \"readystatechange\" (xhr.readyState === 3)\n    // IE 8 fires \"onload\" without \"onprogress\"\n    onProgress();\n\n    if (state === 1 || state === 2 || state === 3) {\n      state = 4;\n\n      if (timeout !== 0) {\n        clearTimeout(timeout);\n        timeout = 0;\n      }\n\n      that.readyState = 4;\n      that.onreadystatechange();\n    }\n  };\n\n  var onReadyStateChange = function onReadyStateChange() {\n    if (xhr != undefined) {\n      // Opera 12\n      if (xhr.readyState === 4) {\n        onFinish();\n      } else if (xhr.readyState === 3) {\n        onProgress();\n      } else if (xhr.readyState === 2) {\n        onStart();\n      }\n    }\n  };\n\n  var onTimeout = function onTimeout() {\n    timeout = setTimeout(function () {\n      onTimeout();\n    }, 500);\n\n    if (xhr.readyState === 3) {\n      onProgress();\n    }\n  }; // XDomainRequest#abort removes onprogress, onerror, onload\n\n\n  xhr.onload = onFinish;\n  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort\n  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200\n  // https://code.google.com/p/chromium/issues/detail?id=153570\n  // IE 8 fires \"onload\" without \"onprogress\n\n  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723\n\n  if (!(\"sendAsBinary\" in XMLHttpRequest.prototype) && !(\"mozAnon\" in XMLHttpRequest.prototype)) {\n    xhr.onprogress = onProgress;\n  } // IE 8 - 9 (XMLHTTPRequest)\n  // Opera < 12\n  // Firefox < 3.5\n  // Firefox 3.5 - 3.6 - ? < 9.0\n  // onprogress is not fired sometimes or delayed\n  // see also #64\n\n\n  xhr.onreadystatechange = onReadyStateChange;\n\n  if (\"contentType\" in xhr) {\n    url += (url.indexOf(\"?\") === -1 ? \"?\" : \"&\") + \"padding=true\";\n  }\n\n  xhr.open(method, url, true);\n\n  if (\"readyState\" in xhr) {\n    // workaround for Opera 12 issue with \"progress\" events\n    // #91\n    timeout = setTimeout(function () {\n      onTimeout();\n    }, 0);\n  }\n};\n\nXHRWrapper.prototype.abort = function () {\n  this._abort(false);\n};\n\nXHRWrapper.prototype.getResponseHeader = function (name) {\n  return this._contentType;\n};\n\nXHRWrapper.prototype.setRequestHeader = function (name, value) {\n  var xhr = this._xhr;\n\n  if (\"setRequestHeader\" in xhr) {\n    xhr.setRequestHeader(name, value);\n  }\n};\n\nXHRWrapper.prototype.getAllResponseHeaders = function () {\n  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : \"\";\n};\n\nXHRWrapper.prototype.send = function () {\n  // loading indicator in Safari < ? (6), Chrome < 14, Firefox\n  if (!(\"ontimeout\" in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== \"complete\") {\n    var that = this;\n    that._sendTimeout = setTimeout(function () {\n      that._sendTimeout = 0;\n      that.send();\n    }, 4);\n    return;\n  }\n\n  var xhr = this._xhr; // withCredentials should be set after \"open\" for Safari and Chrome (< 19 ?)\n\n  xhr.withCredentials = this.withCredentials;\n  xhr.responseType = this.responseType;\n\n  try {\n    // xhr.send(); throws \"Not enough arguments\" in Firefox 3.0\n    xhr.send(undefined);\n  } catch (error1) {\n    // Safari 5.1.7, Opera 12\n    throw error1;\n  }\n};\n\nfunction toLowerCase(name) {\n  return name.replace(/[A-Z]/g, function (c) {\n    return String.fromCharCode(c.charCodeAt(0) + 0x20);\n  });\n}\n\nfunction HeadersPolyfill(all) {\n  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example\n  var map = Object.create(null);\n  var array = all.split(\"\\r\\n\");\n\n  for (var i = 0; i < array.length; i += 1) {\n    var line = array[i];\n    var parts = line.split(\": \");\n    var name = parts.shift();\n    var value = parts.join(\": \");\n    map[toLowerCase(name)] = value;\n  }\n\n  this._map = map;\n}\n\n_c3 = HeadersPolyfill;\n\nHeadersPolyfill.prototype.get = function (name) {\n  return this._map[toLowerCase(name)];\n};\n\nfunction XHRTransport() {}\n\n_c4 = XHRTransport;\n\nXHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {\n  xhr.open(\"GET\", url);\n  var offset = 0;\n\n  xhr.onprogress = function () {\n    var responseText = xhr.responseText;\n    var chunk = responseText.slice(offset);\n    offset += chunk.length;\n    onProgressCallback(chunk);\n  };\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 2) {\n      var status = xhr.status;\n      var statusText = xhr.statusText;\n      var contentType = xhr.getResponseHeader(\"Content-Type\");\n      var headers = xhr.getAllResponseHeaders();\n      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {\n        xhr.abort();\n      });\n    } else if (xhr.readyState === 4) {\n      onFinishCallback();\n    }\n  };\n\n  xhr.withCredentials = withCredentials;\n  xhr.responseType = \"text\";\n\n  for (var name in headers) {\n    if (Object.prototype.hasOwnProperty.call(headers, name)) {\n      xhr.setRequestHeader(name, headers[name]);\n    }\n  }\n\n  xhr.send();\n};\n\nfunction HeadersWrapper(headers) {\n  this._headers = headers;\n}\n\n_c5 = HeadersWrapper;\n\nHeadersWrapper.prototype.get = function (name) {\n  return this._headers.get(name);\n};\n\nfunction FetchTransport() {}\n\n_c6 = FetchTransport;\n\nFetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {\n  var controller = new AbortController();\n  var signal = controller.signal; // see #120\n\n  var textDecoder = new TextDecoder();\n  (0, fetch_1[\"default\"])(url, {\n    headers: headers,\n    credentials: withCredentials ? \"include\" : \"same-origin\",\n    signal: signal,\n    cache: \"no-store\"\n  }).then(function (response) {\n    var reader = response.body.getReader();\n    onStartCallback(response.status, response.statusText, response.headers.get(\"Content-Type\"), new HeadersWrapper(response.headers), function () {\n      controller.abort();\n      reader.cancel();\n    });\n    return new Promise(function (resolve, reject) {\n      var readNextChunk = function readNextChunk() {\n        reader.read().then(function (result) {\n          if (result.done) {\n            // Note: bytes in textDecoder are ignored\n            resolve(undefined);\n          } else {\n            var chunk = textDecoder.decode(result.value, {\n              stream: true\n            });\n            onProgressCallback(chunk);\n            readNextChunk();\n          }\n        })[\"catch\"](function (error) {\n          reject(error);\n        });\n      };\n\n      readNextChunk();\n    });\n  }).then(function (result) {\n    onFinishCallback();\n    return result;\n  }, function (error) {\n    onFinishCallback();\n    return Promise.reject(error);\n  });\n};\n\nfunction EventTarget() {\n  this._listeners = Object.create(null);\n}\n\n_c7 = EventTarget;\n\nfunction throwError(e) {\n  setTimeout(function () {\n    throw e;\n  }, 0);\n}\n\nEventTarget.prototype.dispatchEvent = function (event) {\n  event.target = this;\n  var typeListeners = this._listeners[event.type];\n\n  if (typeListeners != undefined) {\n    var length = typeListeners.length;\n\n    for (var i = 0; i < length; i += 1) {\n      var listener = typeListeners[i];\n\n      try {\n        if (typeof listener.handleEvent === \"function\") {\n          listener.handleEvent(event);\n        } else {\n          listener.call(this, event);\n        }\n      } catch (e) {\n        throwError(e);\n      }\n    }\n  }\n};\n\nEventTarget.prototype.addEventListener = function (type, listener) {\n  type = String(type);\n  var listeners = this._listeners;\n  var typeListeners = listeners[type];\n\n  if (typeListeners == undefined) {\n    typeListeners = [];\n    listeners[type] = typeListeners;\n  }\n\n  var found = false;\n\n  for (var i = 0; i < typeListeners.length; i += 1) {\n    if (typeListeners[i] === listener) {\n      found = true;\n    }\n  }\n\n  if (!found) {\n    typeListeners.push(listener);\n  }\n};\n\nEventTarget.prototype.removeEventListener = function (type, listener) {\n  type = String(type);\n  var listeners = this._listeners;\n  var typeListeners = listeners[type];\n\n  if (typeListeners != undefined) {\n    var filtered = [];\n\n    for (var i = 0; i < typeListeners.length; i += 1) {\n      if (typeListeners[i] !== listener) {\n        filtered.push(typeListeners[i]);\n      }\n    }\n\n    if (filtered.length === 0) {\n      delete listeners[type];\n    } else {\n      listeners[type] = filtered;\n    }\n  }\n};\n\nfunction Event(type) {\n  this.type = type;\n  this.target = undefined;\n}\n\n_c8 = Event;\n\nfunction MessageEvent(type, options) {\n  Event.call(this, type);\n  this.data = options.data;\n  this.lastEventId = options.lastEventId;\n}\n\n_c9 = MessageEvent;\nMessageEvent.prototype = Object.create(Event.prototype);\n\nfunction ConnectionEvent(type, options) {\n  Event.call(this, type);\n  this.status = options.status;\n  this.statusText = options.statusText;\n  this.headers = options.headers;\n}\n\n_c10 = ConnectionEvent;\nConnectionEvent.prototype = Object.create(Event.prototype);\nvar WAITING = -1;\nvar CONNECTING = 0;\nvar OPEN = 1;\nvar CLOSED = 2;\nvar AFTER_CR = -1;\nvar FIELD_START = 0;\nvar FIELD = 1;\nvar VALUE_START = 2;\nvar VALUE = 3;\nvar contentTypeRegExp = /^text\\/event\\-stream;?(\\s*charset\\=utf\\-8)?$/i;\nvar MINIMUM_DURATION = 1000;\nvar MAXIMUM_DURATION = 18000000;\n\nvar parseDuration = function parseDuration(value, def) {\n  var n = parseInt(value, 10);\n\n  if (n !== n) {\n    n = def;\n  }\n\n  return clampDuration(n);\n};\n\nvar clampDuration = function clampDuration(n) {\n  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);\n};\n\nvar fire = function fire(that, f, event) {\n  try {\n    if (typeof f === \"function\") {\n      f.call(that, event);\n    }\n  } catch (e) {\n    throwError(e);\n  }\n};\n\nfunction EventSourcePolyfill(url, options) {\n  EventTarget.call(this);\n  this.onopen = undefined;\n  this.onmessage = undefined;\n  this.onerror = undefined;\n  this.url = undefined;\n  this.readyState = undefined;\n  this.withCredentials = undefined;\n  this._close = undefined;\n  start(this, url, options);\n}\n\n_c11 = EventSourcePolyfill;\nvar isFetchSupported = fetch_1[\"default\"] != undefined && Response != undefined && \"body\" in Response.prototype;\n\nfunction start(es, url, options) {\n  url = String(url);\n  var withCredentials = options != undefined && Boolean(options.withCredentials);\n  var initialRetry = clampDuration(1000);\n  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);\n  var lastEventId = \"\";\n  var retry = initialRetry;\n  var wasActivity = false;\n  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;\n  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;\n  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());\n  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();\n  var cancelFunction = undefined;\n  var timeout = 0;\n  var currentState = WAITING;\n  var dataBuffer = \"\";\n  var lastEventIdBuffer = \"\";\n  var eventTypeBuffer = \"\";\n  var textBuffer = \"\";\n  var state = FIELD_START;\n  var fieldStart = 0;\n  var valueStart = 0;\n\n  var onStart = function onStart(status, statusText, contentType, headers, cancel) {\n    if (currentState === CONNECTING) {\n      cancelFunction = cancel;\n\n      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {\n        currentState = OPEN;\n        wasActivity = true;\n        retry = initialRetry;\n        es.readyState = OPEN;\n        var event = new ConnectionEvent(\"open\", {\n          status: status,\n          statusText: statusText,\n          headers: headers\n        });\n        es.dispatchEvent(event);\n        fire(es, es.onopen, event);\n      } else {\n        var message = \"\";\n\n        if (status !== 200) {\n          if (statusText) {\n            statusText = statusText.replace(/\\s+/g, \" \");\n          }\n\n          message = \"EventSource's response has a status \" + status + \" \" + statusText + \" that is not 200. Aborting the connection.\";\n        } else {\n          message = \"EventSource's response has a Content-Type specifying an unsupported type: \" + (contentType == undefined ? \"-\" : contentType.replace(/\\s+/g, \" \")) + \". Aborting the connection.\";\n        }\n\n        throwError(new Error(message));\n        close();\n        var event = new ConnectionEvent(\"error\", {\n          status: status,\n          statusText: statusText,\n          headers: headers\n        });\n        es.dispatchEvent(event);\n        fire(es, es.onerror, event);\n      }\n    }\n  };\n\n  var onProgress = function onProgress(textChunk) {\n    if (currentState === OPEN) {\n      var n = -1;\n\n      for (var i = 0; i < textChunk.length; i += 1) {\n        var c = textChunk.charCodeAt(i);\n\n        if (c === \"\\n\".charCodeAt(0) || c === \"\\r\".charCodeAt(0)) {\n          n = i;\n        }\n      }\n\n      var chunk = (n !== -1 ? textBuffer : \"\") + textChunk.slice(0, n + 1);\n      textBuffer = (n === -1 ? textBuffer : \"\") + textChunk.slice(n + 1);\n\n      if (chunk !== \"\") {\n        wasActivity = true;\n      }\n\n      for (var position = 0; position < chunk.length; position += 1) {\n        var c = chunk.charCodeAt(position);\n\n        if (state === AFTER_CR && c === \"\\n\".charCodeAt(0)) {\n          state = FIELD_START;\n        } else {\n          if (state === AFTER_CR) {\n            state = FIELD_START;\n          }\n\n          if (c === \"\\r\".charCodeAt(0) || c === \"\\n\".charCodeAt(0)) {\n            if (state !== FIELD_START) {\n              if (state === FIELD) {\n                valueStart = position + 1;\n              }\n\n              var field = chunk.slice(fieldStart, valueStart - 1);\n              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === \" \".charCodeAt(0) ? 1 : 0), position);\n\n              if (field === \"data\") {\n                dataBuffer += \"\\n\";\n                dataBuffer += value;\n              } else if (field === \"id\") {\n                lastEventIdBuffer = value;\n              } else if (field === \"event\") {\n                eventTypeBuffer = value;\n              } else if (field === \"retry\") {\n                initialRetry = parseDuration(value, initialRetry);\n                retry = initialRetry;\n              } else if (field === \"heartbeatTimeout\") {\n                heartbeatTimeout = parseDuration(value, heartbeatTimeout);\n\n                if (timeout !== 0) {\n                  clearTimeout(timeout);\n                  timeout = setTimeout(function () {\n                    onTimeout();\n                  }, heartbeatTimeout);\n                }\n              }\n            }\n\n            if (state === FIELD_START) {\n              if (dataBuffer !== \"\") {\n                lastEventId = lastEventIdBuffer;\n\n                if (eventTypeBuffer === \"\") {\n                  eventTypeBuffer = \"message\";\n                }\n\n                var event = new MessageEvent(eventTypeBuffer, {\n                  data: dataBuffer.slice(1),\n                  lastEventId: lastEventIdBuffer\n                });\n                es.dispatchEvent(event);\n\n                if (eventTypeBuffer === \"message\") {\n                  fire(es, es.onmessage, event);\n                }\n\n                if (currentState === CLOSED) {\n                  return;\n                }\n              }\n\n              dataBuffer = \"\";\n              eventTypeBuffer = \"\";\n            }\n\n            state = c === \"\\r\".charCodeAt(0) ? AFTER_CR : FIELD_START;\n          } else {\n            if (state === FIELD_START) {\n              fieldStart = position;\n              state = FIELD;\n            }\n\n            if (state === FIELD) {\n              if (c === \":\".charCodeAt(0)) {\n                valueStart = position + 1;\n                state = VALUE_START;\n              }\n            } else if (state === VALUE_START) {\n              state = VALUE;\n            }\n          }\n        }\n      }\n    }\n  };\n\n  var onFinish = function onFinish() {\n    if (currentState === OPEN || currentState === CONNECTING) {\n      currentState = WAITING;\n\n      if (timeout !== 0) {\n        clearTimeout(timeout);\n        timeout = 0;\n      }\n\n      timeout = setTimeout(function () {\n        onTimeout();\n      }, retry);\n      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));\n      es.readyState = CONNECTING;\n      var event = new Event(\"error\");\n      es.dispatchEvent(event);\n      fire(es, es.onerror, event);\n    }\n  };\n\n  var close = function close() {\n    currentState = CLOSED;\n\n    if (cancelFunction != undefined) {\n      cancelFunction();\n      cancelFunction = undefined;\n    }\n\n    if (timeout !== 0) {\n      clearTimeout(timeout);\n      timeout = 0;\n    }\n\n    es.readyState = CLOSED;\n  };\n\n  var onTimeout = function onTimeout() {\n    timeout = 0;\n\n    if (currentState !== WAITING) {\n      if (!wasActivity && cancelFunction != undefined) {\n        throwError(new Error(\"No activity within \" + heartbeatTimeout + \" milliseconds. Reconnecting.\"));\n        cancelFunction();\n        cancelFunction = undefined;\n      } else {\n        wasActivity = false;\n        timeout = setTimeout(function () {\n          onTimeout();\n        }, heartbeatTimeout);\n      }\n\n      return;\n    }\n\n    wasActivity = false;\n    timeout = setTimeout(function () {\n      onTimeout();\n    }, heartbeatTimeout);\n    currentState = CONNECTING;\n    dataBuffer = \"\";\n    eventTypeBuffer = \"\";\n    lastEventIdBuffer = lastEventId;\n    textBuffer = \"\";\n    fieldStart = 0;\n    valueStart = 0;\n    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916\n    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.\n\n    var requestURL = url;\n\n    if (url.slice(0, 5) !== \"data:\" && url.slice(0, 5) !== \"blob:\") {\n      if (lastEventId !== \"\") {\n        requestURL += (url.indexOf(\"?\") === -1 ? \"?\" : \"&\") + \"lastEventId=\" + encodeURIComponent(lastEventId);\n      }\n    }\n\n    var requestHeaders = {};\n    requestHeaders[\"Accept\"] = \"text/event-stream\";\n\n    if (headers != undefined) {\n      for (var name in headers) {\n        if (Object.prototype.hasOwnProperty.call(headers, name)) {\n          requestHeaders[name] = headers[name];\n        }\n      }\n    }\n\n    try {\n      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);\n    } catch (error) {\n      close();\n      throw error;\n    }\n  };\n\n  es.url = url;\n  es.readyState = CONNECTING;\n  es.withCredentials = withCredentials;\n  es._close = close;\n  onTimeout();\n}\n\nEventSourcePolyfill.prototype = Object.create(EventTarget.prototype);\nEventSourcePolyfill.prototype.CONNECTING = CONNECTING;\nEventSourcePolyfill.prototype.OPEN = OPEN;\nEventSourcePolyfill.prototype.CLOSED = CLOSED;\n\nEventSourcePolyfill.prototype.close = function () {\n  this._close();\n};\n\nEventSourcePolyfill.CONNECTING = CONNECTING;\nEventSourcePolyfill.OPEN = OPEN;\nEventSourcePolyfill.CLOSED = CLOSED;\nEventSourcePolyfill.prototype.withCredentials = undefined;\nexports[\"default\"] = EventSourcePolyfill;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"TextDecoderPolyfill\");\n$RefreshReg$(_c2, \"XHRWrapper\");\n$RefreshReg$(_c3, \"HeadersPolyfill\");\n$RefreshReg$(_c4, \"XHRTransport\");\n$RefreshReg$(_c5, \"HeadersWrapper\");\n$RefreshReg$(_c6, \"FetchTransport\");\n$RefreshReg$(_c7, \"EventTarget\");\n$RefreshReg$(_c8, \"Event\");\n$RefreshReg$(_c9, \"MessageEvent\");\n$RefreshReg$(_c10, \"ConnectionEvent\");\n$RefreshReg$(_c11, \"EventSourcePolyfill\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQXRCO0FBQ0EsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQXRCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQXpCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQXpCO0FBQ0EsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQTdCOztBQUVBLElBQUksZUFBZSxJQUFJLFNBQXZCLEVBQWtDO0FBQ2hDLGlCQUFlLEdBQUc7QUFDaEIsU0FBSyxNQUFMLEdBQWMsSUFBZDs7QUFDQSxTQUFLLEtBQUwsR0FBYSxhQUFjLENBQTNCO0FBQ0QsR0FIRDtBQUlEOztBQUVELFNBQVMsbUJBQVQsR0FBNEI7QUFDMUIsT0FBSyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7O0tBSFE7O0FBS1QsbUJBQW1CLENBQUMsU0FBcEIsQ0FBOEIsTUFBOUIsR0FBdUMsVUFBVSxNQUFWLEVBQWdCO0FBQ3JELFdBQVMsS0FBVCxDQUFlLFNBQWYsRUFBMEIsS0FBMUIsRUFBaUMsV0FBakMsRUFBNEM7QUFDMUMsUUFBSSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsYUFBTyxTQUFTLElBQUksVUFBVSxLQUF2QixJQUFnQyxTQUFTLElBQUksS0FBYixJQUFzQixNQUE3RDtBQUNEOztBQUNELFFBQUksV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCLGFBQ0csU0FBUyxJQUFJLFVBQVUsS0FBdkIsSUFBZ0MsU0FBUyxJQUFJLEtBQWIsSUFBc0IsTUFBdkQsSUFDQyxTQUFTLElBQUksVUFBVSxLQUF2QixJQUFnQyxTQUFTLElBQUksS0FBYixJQUFzQixNQUZ6RDtBQUlEOztBQUNE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QyxJQUFyQztBQUNBLG1CQUFtQixDQUFDLFNBQXBCLENBQThCLE1BQTlCLEdBQXVDLE1BQXZDOztBQUNBLG1CQUFtQixDQUFDLFNBQXBCLENBQThCLEtBQTlCLEdBQXNDO0FBQ3BDLE9BQUssTUFBTDtBQUNELENBRkQ7O0FBSUEsbUJBQW1CLENBQUMsVUFBcEIsR0FBaUMsVUFBakM7QUFDQSxtQkFBbUIsQ0FBQyxJQUFwQixHQUEyQixJQUEzQjtBQUNBLG1CQUFtQixDQUFDLE1BQXBCLEdBQTZCLE1BQTdCO0FBQ0EsbUJBQW1CLENBQUMsU0FBcEIsQ0FBOEIsZUFBOUIsR0FBZ0QsU0FBaEQ7QUFFQSxxQkFBZSxtQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzPzZkMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vLi4vL2J1aWxkL3BvbHlmaWxscy9mZXRjaFwiO1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2U7XG52YXIgVGV4dERlY29kZXIgPSB3aW5kb3cuVGV4dERlY29kZXI7XG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXI7XG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlcjtcblxuaWYgKEFib3J0Q29udHJvbGxlciA9PSB1bmRlZmluZWQpIHtcbiAgQWJvcnRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2lnbmFsID0gbnVsbDtcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge307XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gIHRoaXMuYml0c05lZWRlZCA9IDA7XG4gIHRoaXMuY29kZVBvaW50ID0gMDtcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZjtcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoY29kZVBvaW50ID49IDB4MDgwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhkN2ZmKSB8fFxuICAgICAgICAoY29kZVBvaW50ID49IDB4ZTAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhmZmZmKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH1cbiAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxO1xuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyO1xuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmQ7XG4gIHZhciBzdHJpbmcgPSBcIlwiO1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZDtcbiAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXTtcbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0O1xuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMTtcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMTtcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjI0ICYmIG9jdGV0IDw9IDIzOSkge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDI7XG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTU7XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzO1xuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGJpdHNOZWVkZWQgIT09IDAgJiZcbiAgICAgICAgIXZhbGlkKGNvZGVQb2ludCwgYml0c05lZWRlZCwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSlcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNjtcbiAgICAgIGNvZGVQb2ludCA9IChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2Myk7XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMClcbiAgICAgICAgKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkO1xuICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludDtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoXCJ0ZXN0XCIpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSBcInRlc3RcIlxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGw7XG59XG5cbnZhciBrID0gZnVuY3Rpb24gKCkge307XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gIHRoaXMucmVzcG9uc2VUeXBlID0gXCJcIjtcbiAgdGhpcy5yZWFkeVN0YXRlID0gMDtcbiAgdGhpcy5zdGF0dXMgPSAwO1xuICB0aGlzLnN0YXR1c1RleHQgPSBcIlwiO1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9IFwiXCI7XG4gIHRoaXMub25wcm9ncmVzcyA9IGs7XG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gaztcbiAgdGhpcy5fY29udGVudFR5cGUgPSBcIlwiO1xuICB0aGlzLl94aHIgPSB4aHI7XG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMDtcbiAgdGhpcy5fYWJvcnQgPSBrO1xufVxuXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gIHRoaXMuX2Fib3J0KHRydWUpO1xuXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgdmFyIHN0YXRlID0gMTtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTtcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDQ7XG4gICAgICB4aHIub25sb2FkID0gaztcbiAgICAgIHhoci5vbmVycm9yID0gaztcbiAgICAgIHhoci5vbmFib3J0ID0gaztcbiAgICAgIHhoci5vbnByb2dyZXNzID0gaztcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrO1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0gMDtcbiAgfTtcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwO1xuICAgICAgdmFyIHN0YXR1c1RleHQgPSBcIlwiO1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKCEoXCJjb250ZW50VHlwZVwiIGluIHhocikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgc3RhdHVzVGV4dCA9IFwiXCI7XG4gICAgICAgICAgY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICBzdGF0dXNUZXh0ID0gXCJPS1wiO1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcbiAgICAgICAgc3RhdGUgPSAyO1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyO1xuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKTtcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gMztcbiAgICAgIHZhciByZXNwb25zZVRleHQgPSBcIlwiO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDM7XG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcbiAgICAgIHRoYXQub25wcm9ncmVzcygpO1xuICAgIH1cbiAgfTtcbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKTtcbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNDtcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0O1xuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gIH07XG4gIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE9wZXJhIDEyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgb25GaW5pc2goKTtcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpO1xuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpO1xuICAgIH0sIDUwMCk7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICBvblByb2dyZXNzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcbiAgeGhyLm9uZXJyb3IgPSBvbkZpbmlzaDtcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoO1xuXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICBpZiAoXG4gICAgIShcInNlbmRBc0JpbmFyeVwiIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKFwibW96QW5vblwiIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzO1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xuXG4gIGlmIChcImNvbnRlbnRUeXBlXCIgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPT09IC0xID8gXCI/XCIgOiBcIiZcIikgKyBcInBhZGRpbmc9dHJ1ZVwiO1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICBpZiAoXCJyZWFkeVN0YXRlXCIgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgMCk7XG4gIH1cbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgaWYgKFwic2V0UmVxdWVzdEhlYWRlclwiIGluIHhocikge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgfVxufTtcblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6IFwiXCI7XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gIGlmIChcbiAgICAhKFwib250aW1lb3V0XCIgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwO1xuICAgICAgdGhhdC5zZW5kKCk7XG4gICAgfSwgNCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xuICB0cnkge1xuICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICB4aHIuc2VuZCh1bmRlZmluZWQpO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxO1xuICB9XG59O1xuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMHgyMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoXCJcXHJcXG5cIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbGluZSA9IGFycmF5W2ldO1xuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoXCI6IFwiKTtcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbihcIjogXCIpO1xuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZTtcbiAgfVxuICB0aGlzLl9tYXAgPSBtYXA7XG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO1xufTtcblxuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge31cblxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKFxuICB4aHIsXG4gIG9uU3RhcnRDYWxsYmFjayxcbiAgb25Qcm9ncmVzc0NhbGxiYWNrLFxuICBvbkZpbmlzaENhbGxiYWNrLFxuICB1cmwsXG4gIHdpdGhDcmVkZW50aWFscyxcbiAgaGVhZGVyc1xuKSB7XG4gIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gIHZhciBvZmZzZXQgPSAwO1xuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XG4gIH07XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gIHhoci5yZXNwb25zZVR5cGUgPSBcInRleHRcIjtcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgfVxuICB9XG4gIHhoci5zZW5kKCk7XG59O1xuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xufVxuSGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTtcbn07XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDsgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/IFwiaW5jbHVkZVwiIDogXCJzYW1lLW9yaWdpblwiLFxuICAgIHNpZ25hbDogc2lnbmFsLFxuICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgIG9uU3RhcnRDYWxsYmFjayhcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgIHJlYWRlci5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG59O1xuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGU7XG4gIH0sIDApO1xufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzO1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXTtcbiAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV07XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpO1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdO1xuICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnM7XG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxufTtcbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSk7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdO1xuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZDtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSk7XG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWQ7XG59XG5cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSk7XG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXM7XG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dDtcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO1xuXG52YXIgV0FJVElORyA9IC0xO1xudmFyIENPTk5FQ1RJTkcgPSAwO1xudmFyIE9QRU4gPSAxO1xudmFyIENMT1NFRCA9IDI7XG5cbnZhciBBRlRFUl9DUiA9IC0xO1xudmFyIEZJRUxEX1NUQVJUID0gMDtcbnZhciBGSUVMRCA9IDE7XG52YXIgVkFMVUVfU1RBUlQgPSAyO1xudmFyIFZBTFVFID0gMztcblxudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaTtcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwO1xudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMDtcblxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGRlZikge1xuICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZjtcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKTtcbn07XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTik7XG59O1xuXG52YXIgZmlyZSA9IGZ1bmN0aW9uICh0aGF0LCBmLCBldmVudCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93RXJyb3IoZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcyk7XG5cbiAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG5cbiAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWQ7XG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKTtcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmIFwiYm9keVwiIGluIFJlc3BvbnNlLnByb3RvdHlwZTtcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKTtcbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7XG5cbiAgdmFyIGluaXRpYWxSZXRyeSA9IGNsYW1wRHVyYXRpb24oMTAwMCk7XG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMCk7XG5cbiAgdmFyIGxhc3RFdmVudElkID0gXCJcIjtcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZTtcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3Q7XG4gIHZhciB4aHIgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO1xuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpO1xuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XG4gIHZhciBkYXRhQnVmZmVyID0gXCJcIjtcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gXCJcIjtcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9IFwiXCI7XG5cbiAgdmFyIHRleHRCdWZmZXIgPSBcIlwiO1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgdmFyIGZpZWxkU3RhcnQgPSAwO1xuICB2YXIgdmFsdWVTdGFydCA9IDA7XG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWw7XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXR1cyA9PT0gMjAwICYmXG4gICAgICAgIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU47XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KFwib3BlblwiLCB7XG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArXG4gICAgICAgICAgICBzdGF0dXMgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICBcIiB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpKSArXG4gICAgICAgICAgICBcIi4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KFwiZXJyb3JcIiwge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTE7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA9PT0gXCJcXG5cIi5jaGFyQ29kZUF0KDApIHx8IGMgPT09IFwiXFxyXCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgY2h1bmsgPSAobiAhPT0gLTEgPyB0ZXh0QnVmZmVyIDogXCJcIikgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpO1xuICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiBcIlwiKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XG4gICAgICBpZiAoY2h1bmsgIT09IFwiXCIpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSkge1xuICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09IFwiXFxuXCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09IFwiXFxyXCIuY2hhckNvZGVBdCgwKSB8fCBjID09PSBcIlxcblwiLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09IFwiIFwiLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSBcImRhdGFcIikge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gXCJcXG5cIjtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImlkXCIpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImV2ZW50XCIpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJyZXRyeVwiKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KTtcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJoZWFydGJlYXRUaW1lb3V0XCIpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyO1xuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IFwibWVzc2FnZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSBcIm1lc3NhZ2VcIikge1xuICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gXCJcXHJcIi5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTEQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSBcIjpcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgIH0sIHJldHJ5KTtcbiAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSk7XG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KFwiZXJyb3JcIik7XG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRDtcbiAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbigpO1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gMDtcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRDtcbiAgfTtcblxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSAwO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIk5vIGFjdGl2aXR5IHdpdGhpbiBcIiArXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgK1xuICAgICAgICAgICAgICBcIiBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy5cIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24oKTtcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgaGVhcnRiZWF0VGltZW91dCk7XG5cbiAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HO1xuICAgIGRhdGFCdWZmZXIgPSBcIlwiO1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9IFwiXCI7XG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZDtcbiAgICB0ZXh0QnVmZmVyID0gXCJcIjtcbiAgICBmaWVsZFN0YXJ0ID0gMDtcbiAgICB2YWx1ZVN0YXJ0ID0gMDtcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xuICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09IFwiZGF0YTpcIiAmJiB1cmwuc2xpY2UoMCwgNSkgIT09IFwiYmxvYjpcIikge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSBcIlwiKSB7XG4gICAgICAgIHJlcXVlc3RVUkwgKz1cbiAgICAgICAgICAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICtcbiAgICAgICAgICBcImxhc3RFdmVudElkPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fTtcbiAgICByZXF1ZXN0SGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwidGV4dC9ldmVudC1zdHJlYW1cIjtcbiAgICBpZiAoaGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICBlcy51cmwgPSB1cmw7XG4gIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HO1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gIGVzLl9jbG9zZSA9IGNsb3NlO1xuXG4gIG9uVGltZW91dCgpO1xufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU47XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRUQ7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKTtcbn07XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRUQ7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/client/dev/event-source-polyfill.js\n");

/***/ }),

/***/ "../joy/dist/client/dev/fouc.js":
/*!**************************************!*\
  !*** ../joy/dist/client/dev/fouc.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.displayContent = void 0; // This function is used to remove Joy.js' no-FOUC styles workaround for using\n// `style-loader` in development. It must be called before hydration, or else\n// rendering won't have the correct computed values in effects.\n\nfunction displayContent(callback) {\n  (window.requestAnimationFrame || setTimeout)(function () {\n    for (var x = document.querySelectorAll(\"[data-joy-hide-fouc]\"), i = x.length; i--;) {\n      x[i].parentNode.removeChild(x[i]);\n    }\n\n    if (callback) {\n      callback();\n    }\n  });\n}\n\nexports.displayContent = displayContent;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztpQ0FBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBZ0IsY0FBaEIsQ0FBK0IsUUFBL0IsRUFBdUM7QUFDckMsR0FBQyxNQUFNLENBQUMscUJBQVAsSUFBZ0MsVUFBakMsRUFBNkM7QUFDM0MsU0FDRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQVIsRUFBMkQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQURuRSxFQUVFLENBQUMsRUFGSCxHQUlFO0FBQ0EsT0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsQ0FBQyxDQUFDLENBQUQsQ0FBN0I7QUFDRDs7QUFDRCxRQUFJLFFBQUosRUFBYztBQUNaLGNBQVE7QUFDVDtBQUNGLEdBWEQ7QUFZRDs7QUFiRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC9kZXYvZm91Yy5qcz9lNWI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgSm95LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtam95LWhpZGUtZm91Y11cIiksIGkgPSB4Lmxlbmd0aDtcbiAgICAgIGktLTtcblxuICAgICkge1xuICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../joy/dist/client/dev/fouc.js\n");

/***/ }),

/***/ "../joy/dist/client/dev/on-demand-entries-utils.js":
/*!*********************************************************!*\
  !*** ../joy/dist/client/dev/on-demand-entries-utils.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n/* global location */\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.setupPing = exports.closePing = exports.currentPage = void 0;\n\nvar fetch_1 = __importDefault(__webpack_require__(/*! ../../build/polyfills/fetch */ \"../joy/dist/build/polyfills/fetch/index.js\"));\n\nvar eventsource_1 = __webpack_require__(/*! ./error-overlay/eventsource */ \"../joy/dist/client/dev/error-overlay/eventsource.js\");\n\nvar evtSource;\n\nfunction closePing() {\n  if (evtSource) evtSource.close();\n  evtSource = null;\n}\n\nexports.closePing = closePing;\n\nfunction setupPing(assetPrefix, pathnameFn, retry) {\n  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed\n\n  if (pathname === exports.currentPage && !retry) return;\n  exports.currentPage = pathname; // close current EventSource connection\n\n  closePing();\n  var url = assetPrefix + \"/_joy/webpack-hmr?page=\" + exports.currentPage;\n  evtSource = (0, eventsource_1.getEventSourceWrapper)({\n    path: url,\n    timeout: 5000,\n    ondemand: 1\n  });\n  evtSource.addMessageListener(function (event) {\n    if (event.data.indexOf(\"{\") === -1) return;\n\n    try {\n      var payload = JSON.parse(event.data);\n\n      if (payload.invalid) {\n        // Payload can be invalid even if the page does not exist.\n        // So, we need to make sure it exists before reloading.\n        (0, fetch_1[\"default\"])(location.href, {\n          credentials: \"same-origin\"\n        }).then(function (pageRes) {\n          if (pageRes.status === 200) {\n            location.reload();\n          }\n        });\n      }\n    } catch (err) {\n      console.error(\"on-demand-entries failed to parse response\", err);\n    }\n  });\n}\n\nexports.setupPing = setupPing;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vam95L2Rpc3QvY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUEsSUFBSSxTQUFKOztBQUdBLFNBQWdCLFNBQWhCLEdBQXlCO0FBQ3ZCLE1BQUksU0FBSixFQUFlLFNBQVMsQ0FBQyxLQUFWO0FBQ2YsV0FBUyxHQUFHLElBQVo7QUFDRDs7QUFIRDs7QUFLQSxTQUFnQixTQUFoQixDQUEwQixXQUExQixFQUF1QyxVQUF2QyxFQUFtRCxLQUFuRCxFQUF3RDtBQUN0RCxNQUFNLFFBQVEsR0FBRyxVQUFVLEVBQTNCLENBRHNELENBR3REOztBQUNBLE1BQUksUUFBUSxLQUFLLG1CQUFiLElBQTRCLENBQUMsS0FBakMsRUFBd0M7QUFDeEMsd0JBQWMsUUFBZCxDQUxzRCxDQU10RDs7QUFDQSxXQUFTO0FBRVQsTUFBTSxHQUFHLEdBQU0sV0FBTiwrQkFBMkMsbUJBQXBEO0FBQ0EsV0FBUyxHQUFHLHlDQUFzQjtBQUFFLFFBQUksRUFBRSxHQUFSO0FBQWEsV0FBTyxFQUFFLElBQXRCO0FBQTRCLFlBQVEsRUFBRTtBQUF0QyxHQUF0QixDQUFaO0FBRUEsV0FBUyxDQUFDLGtCQUFWLENBQTZCLFVBQUMsS0FBRCxFQUFVO0FBQ3JDLFFBQUksS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYLENBQW1CLEdBQW5CLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7O0FBQ3BDLFFBQUk7QUFDRixVQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxJQUFqQixDQUFoQjs7QUFDQSxVQUFJLE9BQU8sQ0FBQyxPQUFaLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQSxnQ0FBTSxRQUFRLENBQUMsSUFBZixFQUFxQjtBQUNuQixxQkFBVyxFQUFFO0FBRE0sU0FBckIsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQVk7QUFDbEIsY0FBSSxPQUFPLENBQUMsTUFBUixLQUFtQixHQUF2QixFQUE0QjtBQUMxQixvQkFBUSxDQUFDLE1BQVQ7QUFDRDtBQUNGLFNBTkQ7QUFPRDtBQUNGLEtBYkQsQ0FhRSxPQUFPLEdBQVAsRUFBWTtBQUNaLGFBQU8sQ0FBQyxLQUFSLENBQWMsNENBQWQsRUFBNEQsR0FBNUQ7QUFDRDtBQUNGLEdBbEJEO0FBbUJEOztBQS9CRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9qb3kvc3JjL2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanM/ZjFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gXCIuLi8uLi9idWlsZC9wb2x5ZmlsbHMvZmV0Y2hcIjtcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIjtcblxubGV0IGV2dFNvdXJjZTtcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBpbmcoKSB7XG4gIGlmIChldnRTb3VyY2UpIGV2dFNvdXJjZS5jbG9zZSgpO1xuICBldnRTb3VyY2UgPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKTtcblxuICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuICBpZiAocGF0aG5hbWUgPT09IGN1cnJlbnRQYWdlICYmICFyZXRyeSkgcmV0dXJuO1xuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lO1xuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKCk7XG5cbiAgY29uc3QgdXJsID0gYCR7YXNzZXRQcmVmaXh9L19qb3kvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWA7XG4gIGV2dFNvdXJjZSA9IGdldEV2ZW50U291cmNlV3JhcHBlcih7IHBhdGg6IHVybCwgdGltZW91dDogNTAwMCwgb25kZW1hbmQ6IDEgfSk7XG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKFwie1wiKSA9PT0gLTEpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIm9uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZVwiLCBlcnIpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../joy/dist/client/dev/on-demand-entries-utils.js\n");

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

/***/ "../joy/node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************!*\
  !*** ../joy/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("../joy/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);