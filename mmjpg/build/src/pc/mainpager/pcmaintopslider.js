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
	__vue_styles__.push(__webpack_require__(254)
	)

	/* script */
	__vue_exports__ = __webpack_require__(255)

	/* template */
	var __vue_template__ = __webpack_require__(256)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/mmjpg/src/pc/mainpager/pcmaintopslider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-01fb5bdf"
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

/***/ 140:
/***/ (function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
	    HTTP: 'https://',//https:// http://

	};

	var MMJPG = {
	    m_mmjpg:"http://www.mmjpg.com/",
	};

	exports.getm_mmjpg = function () {
	    var url = MMJPG.m_mmjpg;
	    console.log('m_mmjpg==' + url);
	    return url;
	};


	exports.getDefaultUrl = function (name) {
	    var url;
	    url = getBaseUrl(name, true) + name + ".js";
	    console.log('getDefaultUrl==' + url);
	    return url;
	};

	exports.getDefaultPathUrl = function (path) {
	    var url;
	    url = getBaseUrl(path, true) + path;
	    console.log('getPathUrl==' + url);
	    return url;
	};

	exports.getPathUrl = function (path, isnative) {
	    var url;
	    url = getBaseUrl(path, isnative) + path;
	    console.log('getPathUrl==' + url);
	    return url;
	};

	//获取线上资源文件地址
	exports.getImageUrl = function (path) {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);

	    }
	    console.log('getImageUrl=='+url);
	    return url;
	};

	exports.getUrl = function (path) {
	    var url;
	    url = BASE_URL.HTTP+BASE_URL.IP+'/'+path;
	    console.log('getUrl==' + url);
	    return url;
	};

	function getBaseUrl(bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/build/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        //'localhost:8080';
	        var host = BASE_URL.IP;
	        // var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        // if (matches && matches.length >= 2) {
	        //     host = matches[1];
	        // }

	        if (typeof window === 'object') {
	            if (host.endsWith(':8080/mmjpg') || host.endsWith(':12580/mmjpg')) {
	                host = host.replace('/mmjpg', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./mmjpg/build/src/' : BASE_URL.HTTP + host + '/mmjpg/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/mmjpg/build/src/';
	            //放在官方仓库 'incubator-weex/examples/TGB_WEEX' 文件夹下编译的话，路径用这个
	            // nativeBase = 'http://' + host.replace("8080","12580") + '/examples/build/TGB_WEEX/storm/src/';
	        }
	    }

	    return nativeBase;
	};


	exports.getUrlParam = function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
	    var match = location.search.match(reg)
	    return match && match[1]
	}


/***/ }),

/***/ 247:
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
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column"
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
	    "width": 750,
	    "height": 900
	  },
	  "txt": {
	    "opacity": 0.3,
	    "fontSize": 30
	  }
	}

/***/ }),

/***/ 248:
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

	var weexEventModule = weex.requireModule('weexEventModule');
	module.exports = {
	    created: function created() {
	        console.log('news');
	    },

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        }
	    }
	};

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.other))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(247)
	)

	/* script */
	__vue_exports__ = __webpack_require__(248)

	/* template */
	var __vue_template__ = __webpack_require__(249)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/mmjpg/src/pc/main/pc_main_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-10f49458"
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

/***/ 254:
/***/ (function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 750,
	    "height": 500
	  },
	  "slider": {
	    "width": 750,
	    "height": 500
	  },
	  "frame": {
	    "width": 750,
	    "height": 500,
	    "position": "relative"
	  }
	}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pc_main_item_v = __webpack_require__(252);

	var _pc_main_item_v2 = _interopRequireDefault(_pc_main_item_v);

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

	var modal = weex.requireModule('modal');
	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var mmjpg = __webpack_require__(140);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    data: function data() {
	        return {
	            imageList: [],
	            taghref: mmjpg.getm_mmjpg()
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        todetail: function todetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        },
	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            weexJsoupModule.pcmaintoppage(url, function (e) {
	                var json = JSON.parse(e);
	                self.imageList.splice(0, self.imageList.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.imageList.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }
	};

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "3000",
	      "autoPlay": "true"
	    }
	  }, _vm._l((_vm.imageList), function(img) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "resize": "cover",
	        "src": img.src
	      },
	      on: {
	        "click": function($event) {
	          _vm.todetail(img.href)
	        }
	      }
	    })])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });