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

	var _mainlist = __webpack_require__(1);

	var _mainlist2 = _interopRequireDefault(_mainlist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mainlist2.default.el = '#root';
	exports.default = new Vue(_mainlist2.default);

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
	__vue_options__.__file = "/Users/master/gitweexvue/weexdemogit/taogubaweek/src/mainlist.vue"
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
	  "text": {
	    "fontSize": 45,
	    "color": "#666666"
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

	var navigator = weex.requireModule('navigator');
	var weexModule = weex.requireModule('weexModule');
	var dom = weex.requireModule('dom');
	var modal = weex.requireModule('modal');
	exports.default = {
	    data: function data() {
	        return {
	            rows: []
	        };
	    },
	    created: function created() {

	        this.rows.push('a');
	        this.rows.push('slider');
	        this.rows.push('indicator');
	        this.rows.push('switch');
	        this.rows.push('text');
	        this.rows.push('textarea');
	        this.rows.push('vedio');
	        this.rows.push('web');
	        this.rows.push('div');
	        this.rows.push('image');
	        this.rows.push('list');
	        this.rows.push('input');
	        this.rows.push('cell');
	        this.rows.push('loading');
	        this.rows.push('refresh');
	        this.rows.push('scroller');
	    },

	    methods: {
	        openitem: function openitem(event) {

	            //callJS tasks:[{"data":"14","type":2},{"data":"[{\"args\":[\"150\",\"click\",{\"position\":{\"height\":52.77778,\"width\":713.19446,\"x\":33.333332,\"y\":191.66667}},null],\"method\":\"fireEvent\"}]","type":3}]
	            // tasks:[{"module":"modal","method":"toast","args":[{"message":{"position":{"height":52.77778,"width":713.19446,"x":33.333332,"y":191.66667},"type":"click",
	            // "target":{"ref":"186","type":"text","attr":{"value":"a"},"style":{"fontSize":45,"color":"#666666"},"event":["click"]},"timestamp":1488878471697}}]}]
	            var name = event.target.attr.value;
	            modal.toast({ message: name.toString() });

	            weexModule.openUrl('http://192.168.1.15:8080/dist/' + name + '.weex.js', function (err) {
	                console.log(err);
	            });
	            //                navigator.push({
	            //                    url: 'http://192.168.1.15:8080/dist/'+name+'.weex.js',
	            //                    animated: "true"
	            //                }, event => {
	            //                   // modal.toast({ message: 'callback: ' + event })
	            //                })
	        }
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, _vm._l((_vm.rows), function(name, index) {
	    return _c('div', {
	      ref: 'item' + index,
	      refInFor: true,
	      staticClass: ["row"]
	    }, [_c('text', {
	      ref: 'text' + index,
	      refInFor: true,
	      staticClass: ["text"],
	      on: {
	        "click": _vm.openitem
	      }
	    }, [_vm._v(_vm._s(name))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);