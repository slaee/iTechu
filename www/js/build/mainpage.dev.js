(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/app/app-pages/main/com-temp.hbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"{{!-- Chat Section --}}\\r\\n<div class=\\\"chat-list\\\">\\r\\n    <div class=\\\"chat-info\\\">\\r\\n        <div class=\\\"img-circle\\\"></div>\\r\\n        <div class=\\\"details\\\">\\r\\n            <h4>{{servername}}</h4>\\r\\n            <h5>{{discription}}</h5>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"status\\\">\\r\\n            <div class=\\\"online\\\">\\r\\n                <h6>{{active}}</h6>\\r\\n            </div>\\r\\n            <div class=\\\"server-status\\\">\\r\\n                <h6>{{users}} people</h6>\\r\\n                <div class=\\\"online-circle blink\\\"></div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"cardview\\\">\\r\\n        <a class=\\\"ripple-card needsclick\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"crd-header\\\">\\r\\n                <h3>Visit Community</h3>\\r\\n            </div>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\\r\\n<br>\");\n\n//# sourceURL=webpack:///./src/app/app-pages/main/com-temp.hbs?");

/***/ }),

/***/ "./src/app/app-pages/main/main-page.hbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"{{!-- Main root page --}}\\r\\n<div id=\\\"root\\\" class=\\\"page\\\">\\r\\n    {{!-- Fixed top navbar --}}\\r\\n    <div id=\\\"navbar\\\" class=\\\"navbar\\\">\\r\\n        <a class=\\\"menu needsclick\\\">\\r\\n            <div class=\\\"menu-button\\\">\\r\\n                <i class=\\\"icon-notes\\\">\\r\\n                </i>\\r\\n            </div>\\r\\n        </a>\\r\\n        <a href=\\\"#\\\" class=\\\"needsclick\\\">\\r\\n            <h1 class=\\\"title\\\">iTechu</h1>\\r\\n        </a>\\r\\n\\r\\n        <a class=\\\"setting needsclick\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"setting-button\\\">\\r\\n                <i class=\\\"icon-cog\\\">\\r\\n                </i>\\r\\n            </div>\\r\\n        </a>\\r\\n    </div>\\r\\n\\r\\n    {{!-- Container body --}}\\r\\n    <div id=\\\"body-view\\\" class=\\\"container\\\">\\r\\n        <div class=\\\"header\\\">\\r\\n            <a class=\\\"needsclick\\\">\\r\\n                <div id=\\\"facebook-app\\\" class=\\\"facebook\\\">\\r\\n                    <div class=\\\"facebook-icon\\\">\\r\\n                        <i class=\\\"icon-facebook\\\"></i>\\r\\n                    </div>\\r\\n                    <div class=\\\"facebook-txt\\\">\\r\\n                        <h3>Open</h3>\\r\\n                        <h5>Facebook</h5>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </a>\\r\\n            <a id=\\\"support-gcash\\\" class=\\\"needsclick\\\">\\r\\n                <div class=\\\"support\\\">\\r\\n                    <div class=\\\"support-icon\\\">\\r\\n                        <i class=\\\"icon-attach_money\\\"></i>\\r\\n                    </div>\\r\\n                    <div class=\\\"support-txt\\\">\\r\\n                        <h3>Support</h3>\\r\\n                        <h5>developer</h5>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </a>\\r\\n        </div>\\r\\n        <br>\\r\\n    </div>\\r\\n\\r\\n    {{!-- Fixed bottom bar --}}\\r\\n    <div id=\\\"bottombar\\\" class=\\\"bottom-bar\\\">\\r\\n        <a class=\\\"needsclick\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"ripple btn active\\\">\\r\\n                <i class=\\\"icon-users\\\"></i>\\r\\n                <p>Community</p>\\r\\n            </div>\\r\\n        </a>\\r\\n        <a class=\\\"needsclick\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"ripple btn\\\">\\r\\n                <i class=\\\"icon-bubble\\\"></i>\\r\\n                <p>Chats</p>\\r\\n            </div>\\r\\n        </a>\\r\\n        <a class=\\\"needsclick\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"ripple btn\\\">\\r\\n                <i class=\\\"icon-make-group\\\"></i>\\r\\n                <p>Ai bots</p>\\r\\n            </div>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\");\n\n//# sourceURL=webpack:///./src/app/app-pages/main/main-page.hbs?");

/***/ }),

/***/ "./src/app/app-pages/main/main-page.include.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainPage\", function() { return mainPage; });\n/* harmony import */ var _res_icons_fonts_icomoon_eot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/app/app-pages/res/icons/fonts/icomoon.eot\");\n/* harmony import */ var _res_icons_fonts_icomoon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/app/app-pages/res/icons/fonts/icomoon.svg\");\n/* harmony import */ var _res_icons_fonts_icomoon_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./src/app/app-pages/res/icons/fonts/icomoon.ttf\");\n/* harmony import */ var _res_icons_fonts_icomoon_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./src/app/app-pages/res/icons/fonts/icomoon.woff\");\n/* harmony import */ var _res_icons_fonts_LobsterTwo_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./src/app/app-pages/res/icons/fonts/LobsterTwo-Regular.ttf\");\n/* harmony import */ var _res_icons_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./src/app/app-pages/res/icons/style.css\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./src/app/app-pages/main/main.scss\");\n/* harmony import */ var _main_page_hbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./src/app/app-pages/main/main-page.hbs\");\n/* harmony import */ var _com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(\"./src/app/app-pages/main/com-temp.hbs\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(\"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(\"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _controllers_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(\"./src/app/controllers/list.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar mainPage = {\n  initialize: function initialize() {\n    this.Page();\n  },\n  Page: function Page() {\n    var main_page = html_tag_js__WEBPACK_IMPORTED_MODULE_10___default.a.parse(mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_main_page_hbs__WEBPACK_IMPORTED_MODULE_7__[\"default\"]));\n    document.body.append(main_page); /// on fully loaded document then render the component\n\n    if (document.readyState === \"complete\") {\n      this.startComponent();\n      var facebook = document.getElementById(\"facebook-app\");\n      var support = document.getElementById(\"support-gcash\"); /// Launch Facebook App\n\n      facebook.addEventListener(\"click\", function () {\n        window.plugins.launcher.canLaunch({\n          packageName: \"com.facebook.katana\"\n        }, function () {\n          window.plugins.launcher.launch({\n            packageName: \"com.facebook.katana\"\n          }, function () {\n            console.log(\"---- Success ----\");\n          }, function (error) {\n            console.log(\"Error\" + error);\n          });\n        }, function (error) {\n          console.log(\"Error \" + error);\n        });\n      }); /// Launch Gcash App\n\n      support.addEventListener(\"click\", function () {\n        window.plugins.launcher.canLaunch({\n          packageName: \"com.globe.gcash.android\"\n        }, function () {\n          window.plugins.launcher.launch({\n            packageName: \"com.globe.gcash.android\"\n          }, function () {\n            console.log(\"---- Success ---- \");\n          }, function (err) {\n            console.log(\"---- Error ---- \" + err);\n          });\n        }, function (error) {\n          console.log(\"Error \" + error);\n        });\n      });\n    }\n  },\n  startComponent: function startComponent() {\n    var body_view = document.getElementById(\"body-view\");\n    var btnContainer = document.getElementById(\"bottombar\");\n    var btns = btnContainer.getElementsByClassName(\"btn\");\n    var prevScrollpos = window.pageYOffset; /// Navbar transition\n\n    window.onscroll = function () {\n      var currentScrollPos = window.pageYOffset;\n\n      if (prevScrollpos > 30 || currentScrollPos < 30) {\n        document.getElementById(\"navbar\").style.boxShadow = \"0 2px 1px -1px rgba(0 ,0,0,0.1)\";\n      }\n\n      if (currentScrollPos < 30) {\n        document.getElementById(\"navbar\").style.boxShadow = \"0 0 0 0\";\n      }\n\n      prevScrollpos = currentScrollPos;\n    }; /// Bottombar transition\n\n\n    for (var i = 0; i < btns.length; i++) {\n      btns[i].addEventListener(\"click\", function () {\n        var current = document.getElementsByClassName(\"active\");\n        current[0].className = current[0].className.replace(\" active\", \"\");\n        this.className += \" active\";\n      });\n    }\n\n    var com_list = {\n      \"public\": mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: _controllers_list__WEBPACK_IMPORTED_MODULE_11__[\"default\"].server,\n        discription: \"Open for any places 🤝\",\n        active: \"active\",\n        users: \"118,493\"\n      }),\n      compscie: mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: \"Computer Science\",\n        discription: \"department 👽\",\n        active: \"active\",\n        users: \"20,242\"\n      }),\n      IT: mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: \"IT\",\n        discription: \"department 👾\",\n        active: \"active\",\n        users: \"25,013\"\n      }),\n      compE: mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: \"Computer Engineering\",\n        discription: \"department 🤖\",\n        active: \"active\",\n        users: \"31,109\"\n      }),\n      Mathematics: mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: \"Mathematics\",\n        discription: \"!0 = 1 📏\",\n        active: \"active\",\n        users: \"7,281\"\n      }),\n      Lovetime: mustache__WEBPACK_IMPORTED_MODULE_9___default.a.render(_com_temp_hbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        servername: \"Love life\",\n        discription: \"sana all ❤\",\n        active: \"active\",\n        users: \"0\"\n      })\n    };\n\n    for (var communities in com_list) {\n      body_view.innerHTML += com_list[communities];\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/app/app-pages/main/main-page.include.js?");

/***/ }),

/***/ "./src/app/app-pages/main/main.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/app/app-pages/main/main.scss?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/fonts/LobsterTwo-Regular.ttf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/LobsterTwo-Regular.ttf\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/fonts/LobsterTwo-Regular.ttf?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/fonts/icomoon.eot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/icomoon.eot\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/fonts/icomoon.eot?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/fonts/icomoon.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/icomoon.svg\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/fonts/icomoon.svg?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/fonts/icomoon.ttf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/icomoon.ttf\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/fonts/icomoon.ttf?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/fonts/icomoon.woff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/icomoon.woff\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/fonts/icomoon.woff?");

/***/ }),

/***/ "./src/app/app-pages/res/icons/style.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/app/app-pages/res/icons/style.css?");

/***/ }),

/***/ "./src/app/controllers/list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: \"About\",\n  server: \"Public\"\n});\n\n//# sourceURL=webpack:///./src/app/controllers/list.js?");

/***/ })

}]);