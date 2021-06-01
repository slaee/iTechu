(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/app-pages/about/about.hbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div id=\\\"about-page\\\" class=\\\"about page\\\">\\r\\n    <h1>{{title}}</h1>\\r\\n</div>\");\n\n//# sourceURL=webpack:///./src/app/app-pages/about/about.hbs?");

/***/ }),

/***/ "./src/app/app-pages/about/about.include.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AboutInclude\", function() { return AboutInclude; });\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/app/app-pages/about/about.scss\");\n/* harmony import */ var _about_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/app/app-pages/about/about.hbs\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controllers_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./src/app/controllers/list.js\");\n\n\n\n\n\nvar AboutInclude = {\n  initialize: function initialize() {\n    this.Page();\n  },\n  Page: function Page() {\n    var about_page = html_tag_js__WEBPACK_IMPORTED_MODULE_3___default.a.parse(mustache__WEBPACK_IMPORTED_MODULE_2___default.a.render(_about_hbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: _controllers_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].title\n    }));\n    document.body.append(about_page);\n  },\n  show: function show() {}\n};\n\n//# sourceURL=webpack:///./src/app/app-pages/about/about.include.js?");

/***/ }),

/***/ "./src/app/app-pages/about/about.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/app/app-pages/about/about.scss?");

/***/ }),

/***/ "./src/app/controllers/list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: \"About\",\n  server: \"Public\"\n});\n\n//# sourceURL=webpack:///./src/app/controllers/list.js?");

/***/ })

}]);