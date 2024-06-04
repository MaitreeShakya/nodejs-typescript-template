/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/AppRouter.ts":
/*!**********************************!*\
  !*** ./src/backend/AppRouter.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.AppRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar AppRouter = /*#__PURE__*/function () {\n  function AppRouter() {\n    _classCallCheck(this, AppRouter);\n  }\n  return _createClass(AppRouter, null, [{\n    key: \"getInstance\",\n    value: function getInstance() {\n      if (!AppRouter.instance) {\n        AppRouter.instance = express_1[\"default\"].Router();\n      }\n      return AppRouter.instance;\n    }\n  }]);\n}();\nexports.AppRouter = AppRouter;\n\n//# sourceURL=webpack://myexpense/./src/backend/AppRouter.ts?");

/***/ }),

/***/ "./src/backend/controller/ExpenseController.ts":
/*!*****************************************************!*\
  !*** ./src/backend/controller/ExpenseController.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar __decorate = this && this.__decorate || function (decorators, target, key, desc) {\n  var c = arguments.length,\n    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n    d;\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n  return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = this && this.__metadata || function (k, v) {\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/backend/controller/decorators/index.ts\");\nvar ExpenseController = /*#__PURE__*/function () {\n  function ExpenseController() {\n    _classCallCheck(this, ExpenseController);\n  }\n  return _createClass(ExpenseController, [{\n    key: \"getExpenses\",\n    value: function getExpenses(req, res) {\n      res.send(\"\\n\\t\\t<form method = \\\"POST\\\">\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<label>Description</label>\\n\\t\\t\\t\\t<input name=\\\"description\\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<label>Amount</label>\\n\\t\\t\\t\\t<input name=\\\"amount\\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<button>Submit</button>\\n\\t\\t</form>\\n\\t\\t\");\n    }\n  }, {\n    key: \"postExpenses\",\n    value: function postExpenses(req, res) {\n      res.send(\"Data saved\");\n    }\n  }]);\n}();\n__decorate([(0, decorators_1.get)(\"expense\"), __metadata(\"design:type\", Function), __metadata(\"design:paramtypes\", [Object, Object]), __metadata(\"design:returntype\", void 0)], ExpenseController.prototype, \"getExpenses\", null);\n__decorate([(0, decorators_1.post)(\"expense\"), (0, decorators_1.bodyValidator)(\"amount\", \"description\"), __metadata(\"design:type\", Function), __metadata(\"design:paramtypes\", [Object, Object]), __metadata(\"design:returntype\", void 0)], ExpenseController.prototype, \"postExpenses\", null);\nExpenseController = __decorate([(0, decorators_1.controller)(\"/\")], ExpenseController);\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/ExpenseController.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/MetadataKeys.ts":
/*!***********************************************************!*\
  !*** ./src/backend/controller/decorators/MetadataKeys.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MetadataKeys = void 0;\nvar MetadataKeys;\n(function (MetadataKeys) {\n  MetadataKeys[\"method\"] = \"method\";\n  MetadataKeys[\"path\"] = \"path\";\n  MetadataKeys[\"middleware\"] = \"middleware\";\n  MetadataKeys[\"validator\"] = \"validator\";\n})(MetadataKeys || (exports.MetadataKeys = MetadataKeys = {}));\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/MetadataKeys.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/Methods.ts":
/*!******************************************************!*\
  !*** ./src/backend/controller/decorators/Methods.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Methods = void 0;\nvar Methods;\n(function (Methods) {\n  Methods[\"get\"] = \"get\";\n  Methods[\"post\"] = \"post\";\n  Methods[\"put\"] = \"put\";\n  Methods[\"del\"] = \"delete\";\n  Methods[\"patch\"] = \"patch\";\n})(Methods || (exports.Methods = Methods = {}));\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/Methods.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/bodyValidator.ts":
/*!************************************************************!*\
  !*** ./src/backend/controller/decorators/bodyValidator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.bodyValidator = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/backend/controller/decorators/MetadataKeys.ts\");\nfunction bodyValidator() {\n  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {\n    keys[_key] = arguments[_key];\n  }\n  return function (target, key, desc) {\n    Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);\n  };\n}\nexports.bodyValidator = bodyValidator;\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/bodyValidator.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/controller.ts":
/*!*********************************************************!*\
  !*** ./src/backend/controller/decorators/controller.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.controller = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar AppRouter_1 = __webpack_require__(/*! ../../AppRouter */ \"./src/backend/AppRouter.ts\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/backend/controller/decorators/MetadataKeys.ts\");\nfunction bodyValidator(keys) {\n  return function (req, res, next) {\n    if (!req.body) {\n      res.status(422).send(\"Invalid request\");\n      return;\n    }\n    var _iterator = _createForOfIteratorHelper(keys),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var key = _step.value;\n        if (!req.body[key]) {\n          res.status(422).send(\"Missing property \".concat(key));\n          return;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    next();\n  };\n}\nfunction controller(routePrefix) {\n  return function (target) {\n    var router = AppRouter_1.AppRouter.getInstance();\n    Object.getOwnPropertyNames(target.prototype).forEach(function (key) {\n      var routeHandler = target.prototype[key];\n      var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);\n      var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);\n      var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];\n      var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];\n      var validator = bodyValidator(requiredBodyProps);\n      if (path) {\n        router[method].apply(router, [\"\".concat(routePrefix).concat(path)].concat(_toConsumableArray(middlewares), [validator, routeHandler]));\n      }\n    });\n  };\n}\nexports.controller = controller;\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/controller.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/index.ts":
/*!****************************************************!*\
  !*** ./src/backend/controller/decorators/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function get() {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n__exportStar(__webpack_require__(/*! ./controller */ \"./src/backend/controller/decorators/controller.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./routes */ \"./src/backend/controller/decorators/routes.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./use */ \"./src/backend/controller/decorators/use.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./bodyValidator */ \"./src/backend/controller/decorators/bodyValidator.ts\"), exports);\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/index.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/routes.ts":
/*!*****************************************************!*\
  !*** ./src/backend/controller/decorators/routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.patch = exports.del = exports.put = exports.post = exports.get = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar Methods_1 = __webpack_require__(/*! ./Methods */ \"./src/backend/controller/decorators/Methods.ts\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/backend/controller/decorators/MetadataKeys.ts\");\nfunction routeBinder(method) {\n  return function (path) {\n    return function (target, key, descriptor) {\n      Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);\n      Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);\n    };\n  };\n}\nexports.get = routeBinder(Methods_1.Methods.get);\nexports.post = routeBinder(Methods_1.Methods.post);\nexports.put = routeBinder(Methods_1.Methods.put);\nexports.del = routeBinder(Methods_1.Methods.del);\nexports.patch = routeBinder(Methods_1.Methods.patch);\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/routes.ts?");

/***/ }),

/***/ "./src/backend/controller/decorators/use.ts":
/*!**************************************************!*\
  !*** ./src/backend/controller/decorators/use.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.use = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ./MetadataKeys */ \"./src/backend/controller/decorators/MetadataKeys.ts\");\nfunction use(middleware) {\n  return function (target, key, desc) {\n    var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];\n    Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, [].concat(_toConsumableArray(middlewares), [middleware]), target, key);\n  };\n}\nexports.use = use;\n\n//# sourceURL=webpack://myexpense/./src/backend/controller/decorators/use.ts?");

/***/ }),

/***/ "./src/backend/index.ts":
/*!******************************!*\
  !*** ./src/backend/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\n__webpack_require__(/*! ./controller/ExpenseController */ \"./src/backend/controller/ExpenseController.ts\");\nvar AppRouter_1 = __webpack_require__(/*! ./AppRouter */ \"./src/backend/AppRouter.ts\");\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar ejs_1 = __importDefault(__webpack_require__(/*! ejs */ \"ejs\"));\nvar PORT = process.env.PORT ? process.env.PORT : 5000;\nvar mode = \"development\";\nvar root = mode === \"production\" ? \"/\" : \"/\";\nvar app = (0, express_1[\"default\"])();\n/**\n * Connect to MongoDB\n */\nvar mongoConnectionString =  true ? \"mongodb+srv://maitreeshakya:e4c2hs64HDuZJTc4@cluster0.qqtgqxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\" : 0;\nmongoose_1[\"default\"].connect(mongoConnectionString).then(function () {\n  console.log(\"Connected to MongoDB\");\n})[\"catch\"](function (err) {\n  console.warn(\"Error connecting to MongoDB\", err);\n});\n/**\n * Middlewares\n */\napp.use(body_parser_1[\"default\"].urlencoded({\n  extended: true\n}));\napp.use((0, morgan_1[\"default\"])(\"dev\"));\n/**\n *\n */\napp.use(AppRouter_1.AppRouter.getInstance());\n/**\n * Ejs Template Engine\n */\napp.set(\"views\", path_1[\"default\"].join(__dirname, \"views\"));\napp.set(\"view engine\", \"ejs\");\napp.engine(\"html\", ejs_1[\"default\"].renderFile);\napp.use(express_1[\"default\"][\"static\"](path_1[\"default\"].join(__dirname)));\napp.use(express_1[\"default\"][\"static\"](path_1[\"default\"].join(__dirname, \"./build\")));\n/**\n *\n */\napp.get(\"\".concat(root), function (req, res) {\n  res.render(\"index\", {\n    root: root\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"App Listenting on PORT\", PORT);\n});\n\n//# sourceURL=webpack://myexpense/./src/backend/index.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/backend/index.ts");
/******/ 	
/******/ })()
;