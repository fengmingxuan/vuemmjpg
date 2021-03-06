/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(235)
	var __weex_style__ = __webpack_require__(236)
	var __weex_script__ = __webpack_require__(237)

	__weex_define__('@weex-component/60c7c1eeba92888c5e9f90208b3faa38', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/60c7c1eeba92888c5e9f90208b3faa38',undefined,undefined)

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "scroller",
	      "classList": [
	        "scroller"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "ref": "mainlist_text_day_night_ref",
	                "value": function () {return this.row}
	              },
	              "classList": function () {return [this.textClass]},
	              "events": {
	                "click": "openitem"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

	module.exports = {
	  "scroller": {
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "marginLeft": 1,
	    "marginRight": 1
	  },
	  "row": {
	    "height": 150,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 30,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "dayclass": {
	    "color": "#666666",
	    "fontSize": 40,
	    "fontWeight": "bold"
	  },
	  "nightclass": {
	    "color": "#ff0000",
	    "fontSize": 40,
	    "fontWeight": "bold"
	  }
	}

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var navigator = __weex_require__('@weex-module/navigator');
	exports.default = {
	    data: {
	        rows: [],
	        TAG: 'mainlist.we'
	    },
	    created: function created() {
	        this.themetype = this.$getConfig().themetype;
	        this.rows.push('list-demo');
	    },
	    ready: function ready() {
	        var self = this;
	    },

	    methods: {
	        openitem: function openitem(event) {
	            var name = event.target.attr.value;

	            navigator.push({
	                url: taoguba.getDefaultUrl(name),
	                animated: "true"
	            }, function (event) {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });