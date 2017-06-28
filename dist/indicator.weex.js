// { "framework": "Vue" }

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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _indicator = __webpack_require__(1);

	var _indicator2 = _interopRequireDefault(_indicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_indicator2.default.el = '#root';
	exports.default = new Vue(_indicator2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/master/gitweexvue/taogubaweex/src/components/indicator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 700,
	    "height": 700
	  },
	  "slider": {
	    "marginTop": 25,
	    "marginLeft": 25,
	    "width": 700,
	    "height": 700,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  },
	  "title": {
	    "position": "absolute",
	    "top": 20,
	    "left": 20,
	    "paddingLeft": 20,
	    "width": 200,
	    "color": "#FFFFFF",
	    "fontSize": 36,
	    "lineHeight": 60,
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  },
	  "frame": {
	    "width": 700,
	    "height": 700,
	    "position": "relative"
	  },
	  "indicator": {
	    "width": 700,
	    "height": 700,
	    "itemColor": "green",
	    "itemSelectedColor": "red",
	    "itemSize": 50,
	    "top": 200,
	    "left": 200
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            imageList: [{ title: 'item A', src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item B', src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item C', src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
	        };
	    },

	    methods: {
	        onchange: function onchange(event) {
	            console.log('changed:', event.index);
	        }
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "4500"
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, [_vm._l((_vm.imageList), function(img) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "resize": "cover",
	        "src": img.src
	      }
	    }), _c('text', {
	      staticClass: ["title"]
	    }, [_vm._v(_vm._s(img.title))])])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);