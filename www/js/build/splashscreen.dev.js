(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/app/app-pages/res/logo.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"res/logo.svg\");\n\n//# sourceURL=webpack:///./src/app/app-pages/res/logo.svg?");

/***/ }),

/***/ "./src/app/app-pages/splashscreen/splashcreen.include.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"splashError\", function() { return splashError; });\n/* harmony import */ var _res_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/app/app-pages/res/logo.svg\");\n/* harmony import */ var _splashscreen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/app/app-pages/splashscreen/splashscreen.scss\");\n\n\nvar splashError = {\n  initialize: function initialize() {\n    this.SplashError();\n  },\n  SplashError: function SplashError() {\n    this.showToastShortBottom(\"This is taking unexepected long time\");\n\n    if (window.cordova && window.cordova.plugins.settings) {\n      this.showToastLongBottom(\"Please clear app data to run properly.\");\n      setTimeout(function () {\n        window.cordova.plugins.settings.open(\"application_details\", function () {\n          console.log(\"opened settings\");\n        }, function () {\n          console.log(\"failed to open settings\");\n        });\n      }, 5000);\n    } else {\n      console.log(\"openNativeSettingsTest is not active!\");\n    }\n  },\n  showToastShortBottom: function showToastShortBottom(msg) {\n    window.plugins.toast.showWithOptions({\n      message: msg,\n      duration: 3500,\n      position: \"bottom\",\n      styling: {\n        opacity: 0.75,\n        backgroundColor: \"#000000\",\n        textColor: \"#FFFFFF\",\n        textSize: 13,\n        cornerRadius: 16,\n        horizontalPadding: 50,\n        verticalPadding: 30\n      }\n    });\n  },\n  showToastLongBottom: function showToastLongBottom(msg) {\n    window.plugins.toast.showWithOptions({\n      message: msg,\n      duration: 5000,\n      position: \"bottom\",\n      styling: {\n        opacity: 0.75,\n        backgroundColor: \"#000000\",\n        textColor: \"#FFFFFF\",\n        textSize: 13,\n        cornerRadius: 16,\n        horizontalPadding: 50,\n        verticalPadding: 30\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/app/app-pages/splashscreen/splashcreen.include.js?");

/***/ })

}]);