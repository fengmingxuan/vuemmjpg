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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(438)
	)

	/* script */
	__vue_exports__ = __webpack_require__(439)

	/* template */
	var __vue_template__ = __webpack_require__(441)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/mmjpg/src/stocknews/stocknews.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-431f8b1d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 435:
/***/ (function(module, exports) {

	module.exports = {
	  "news-bottom": {
	    "marginTop": 15,
	    "marginBottom": 15,
	    "flexDirection": "row",
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "news-content": {
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "news-reply": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "news-txt": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "news-share": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "img": {
	    "width": 40,
	    "height": 40
	  },
	  "txt": {
	    "opacity": 0.3,
	    "fontSize": 30
	  }
	}

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

	'use strict';

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

	module.exports = {
	    created: function created() {
	        console.log('news');
	    },

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {}
	};

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["news-content"]
	  }, [_c('span', {
	    staticStyle: {
	      color: "#ff0000",
	      fontSize: "18"
	    }
	  }, [_vm._v(" 12:09 ")]), _c('span', {
	    staticStyle: {
	      fontWeight: "bold",
	      color: "#000000",
	      fontSize: "22"
	    }
	  }, [_vm._v(" " + _vm._s(_vm.stockitem.subject) + " ")]), _c('span', {
	    staticStyle: {
	      color: "#000000",
	      fontSize: "20"
	    }
	  }, [_vm._v(" " + _vm._s(_vm.stockitem.subject) + " ")])], 1), _c('div', {
	    staticClass: ["news-bottom"]
	  }, [_c('div', {
	    staticClass: ["news-txt"]
	  }), _c('div', {
	    staticClass: ["news-txt"]
	  }), _c('div', {
	    staticClass: ["news-txt"]
	  }), _c('div', {
	    staticClass: ["news-share"]
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": "http://ww1.sinaimg.cn/large/0060lm7Tgw1fbbe3xef2oj303h02owec.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.usefulNum))])]), _c('div', {
	    staticClass: ["news-reply"]
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": "http://i1.piimg.com/567571/c046122d57e5da9e.png"
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.totalReplyNum))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "width": 60,
	    "height": 60,
	    "color": "#889967"
	  }
	}

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stock_news_item = __webpack_require__(440);

	var _stock_news_item2 = _interopRequireDefault(_stock_news_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stream = weex.requireModule('stream'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');

	exports.default = {
	    components: {
	        stock_news_item: _stock_news_item2.default
	    },

	    data: function data() {
	        return {
	            stockArray: []
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        refresh: function refresh() {
	            var self = this;
	            stream.fetch({
	                method: 'GET',
	                url: "http://api.taoguba.sp/free/topic/apiGetForums?blockID=1&pageNo=1&flag=0",
	                headers: {
	                    'Content-Type': 'application/x-www-form-urlencoded'
	                }
	            }, function (ret) {
	                if (!ret.ok) {
	                    //modal.toast({"message":"Network Error!",'duration':2});

	                } else {
	                    var json = JSON.parse(ret.data);
	                    for (var i = 0; i < json.dto.length; i++) {
	                        self.stockArray.push(json.dto[i]);
	                    }
	                }
	            }, function (res) {});
	        }

	    }

	};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(435)
	)

	/* script */
	__vue_exports__ = __webpack_require__(436)

	/* template */
	var __vue_template__ = __webpack_require__(437)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/mmjpg/src/stocknews/stock_news_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-da52b86c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),

/***/ 441:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('stock_news_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });