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
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(328)
	)

	/* script */
	__vue_exports__ = __webpack_require__(329)

	/* template */
	var __vue_template__ = __webpack_require__(351)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\main\\pc_main_load_refresh_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-42da5e90"
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


/***/ },

/***/ 142:
/***/ function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    IP: '192.168.1.6:8080',
	    HTTP: 'http://',//https:// http://

	};

	var MMJPG = {
	    m_mmjpg:"http://www.mmjpg.com/",
	    m_mmjpg_article:"http://www.mmjpg.com/mm/1030/",
	    m_mmjpg_hot:"http://www.mmjpg.com/hot/",
	    m_mmjpg_top:"http://www.mmjpg.com/top/",
	    m_mmjpg_top_page:"http://www.mmjpg.com/getmore.php?page=",
	    m_mmjpg_more:"http://www.mmjpg.com/more/",
	    m_mmjpg_search:"http://www.mmjpg.com/search.php",
	    m_mmjpg_m:"http://m.mmjpg.com/",
	    m_mmjpg_m_more:"http://m.mmjpg.com/more/",
	    m_mmjpg_m_hot:"http://m.mmjpg.com/hot/",
	    m_mmjpg_article_m:"http://m.mmjpg.com/mm/1033/",
	};
	exports.getm_mmjpg_article_m = function () {
	    var url = MMJPG.m_mmjpg_article_m;
	    console.log('m_mmjpg_article_m==' + url);
	    return url;
	};
	exports.getm_mmjpg_m_hot = function () {
	    var url = MMJPG.m_mmjpg_m_hot;
	    console.log('m_mmjpg_m_hot==' + url);
	    return url;
	};
	exports.getm_mmjpg_m_more = function () {
	    var url = MMJPG.m_mmjpg_m_more;
	    console.log('m_mmjpg_m_more==' + url);
	    return url;
	};
	exports.getm_mmjpg_m = function () {
	    var url = MMJPG.m_mmjpg_m;
	    console.log('m_mmjpg_m==' + url);
	    return url;
	};
	exports.getm_mmjpg_search = function () {
	    var url = MMJPG.m_mmjpg_search;
	    console.log('m_mmjpg_search==' + url);
	    return url;
	};
	exports.getm_mmjpg_more = function () {
	    var url = MMJPG.m_mmjpg_more;
	    console.log('m_mmjpg_more==' + url);
	    return url;
	};
	exports.getm_mmjpg_top_page = function () {
	    var url = MMJPG.m_mmjpg_top_page;
	    console.log('m_mmjpg_top_page==' + url);
	    return url;
	};
	exports.getm_mmjpg_top = function () {
	    var url = MMJPG.m_mmjpg_top;
	    console.log('m_mmjpg_top==' + url);
	    return url;
	};
	exports.getm_mmjpg_hot = function () {
	    var url = MMJPG.m_mmjpg_hot;
	    console.log('m_mmjpg_hot==' + url);
	    return url;
	};
	exports.getm_mmjpg_article = function () {
	    var url = MMJPG.m_mmjpg_article;
	    console.log('m_mmjpg_article==' + url);
	    return url;
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


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(297)
	)

	/* script */
	__vue_exports__ = __webpack_require__(298)

	/* template */
	var __vue_template__ = __webpack_require__(299)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainhot\\pcmainhotlistitem_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-edc25b0a"
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


/***/ },

/***/ 297:
/***/ function(module, exports) {

	module.exports = {
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "margin": 5
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx",
	    "flex": 1,
	    "alignItems": "flex-start",
	    "padding": 10,
	    "margin": 10
	  },
	  "lineClass": {
	    "height": 2,
	    "backgroundColor": "#eeeeee"
	  }
	}

/***/ },

/***/ 298:
/***/ function(module, exports) {

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

	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var weexEventModule = weex.requireModule('weexEventModule');
	module.exports = {
	    created: function created() {},

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

/***/ },

/***/ 299:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["news-bottom"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["tucao_numClass"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])]), _c('div', {
	    staticClass: ["lineClass"]
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 325:
/***/ function(module, exports) {

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

/***/ },

/***/ 326:
/***/ function(module, exports) {

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

/***/ },

/***/ 327:
/***/ function(module, exports) {

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

/***/ },

/***/ 328:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "textAlign": "center"
	  },
	  "loading": {
	    "justifyContent": "center"
	  },
	  "indicator_loading": {
	    "color": "#888888",
	    "fontSize": 42,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pc_main_item_v = __webpack_require__(330);

	var _pc_main_item_v2 = _interopRequireDefault(_pc_main_item_v);

	var _pcmaintopslider = __webpack_require__(331);

	var _pcmaintopslider2 = _interopRequireDefault(_pcmaintopslider);

	var _pcmainhotlist_v = __webpack_require__(335);

	var _pcmainhotlist_v2 = _interopRequireDefault(_pcmainhotlist_v);

	var _pcmainlikelist_v = __webpack_require__(339);

	var _pcmainlikelist_v2 = _interopRequireDefault(_pcmainlikelist_v);

	var _pcmainmmlist_v = __webpack_require__(347);

	var _pcmainmmlist_v2 = _interopRequireDefault(_pcmainmmlist_v);

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
	//
	//

	var modal = weex.requireModule('modal');
	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var mmjpg = __webpack_require__(142);

	exports.default = {
	    components: {
	        pc_main_item_v: _pc_main_item_v2.default,
	        pcmaintopslider: _pcmaintopslider2.default,
	        pcmainhotlist_v: _pcmainhotlist_v2.default,
	        pcmainlikelist_v: _pcmainlikelist_v2.default,
	        pcmainmmlist_v: _pcmainmmlist_v2.default
	    },

	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: mmjpg.getm_mmjpg(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide'
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            this.pageNo = this.pageNo + 1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
	            this.refresh();
	        },
	        fetch: function fetch(event) {
	            this.pageNo = this.pageNo + 1;
	            this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this2 = this;

	            this.refreshing = true;
	            this.pageNo = 1;
	            setTimeout(function () {
	                _this2.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            if (self.pageNo == 1) {
	                url = self.taghref;
	            } else {
	                url = self.taghref + "home/" + self.pageNo;
	            }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexJsoupModule.pcmainlist(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(325)
	)

	/* script */
	__vue_exports__ = __webpack_require__(326)

	/* template */
	var __vue_template__ = __webpack_require__(327)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\main\\pc_main_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3abd1f61"
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


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(332)
	)

	/* script */
	__vue_exports__ = __webpack_require__(333)

	/* template */
	var __vue_template__ = __webpack_require__(334)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainpager\\pcmaintopslider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-67f8659c"
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


/***/ },

/***/ 332:
/***/ function(module, exports) {

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

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pc_main_item_v = __webpack_require__(330);

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
	var mmjpg = __webpack_require__(142);
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

/***/ },

/***/ 334:
/***/ function(module, exports) {

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

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(336)
	)

	/* script */
	__vue_exports__ = __webpack_require__(337)

	/* template */
	var __vue_template__ = __webpack_require__(338)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainhot\\pcmainhotlist_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-df1733b0"
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


/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pcmainhotlistitem_v = __webpack_require__(296);

	var _pcmainhotlistitem_v2 = _interopRequireDefault(_pcmainhotlistitem_v);

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

	var modal = weex.requireModule('modal');
	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var mmjpg = __webpack_require__(142);

	exports.default = {
	    components: {
	        pcmainhotlistitem_v: _pcmainhotlistitem_v2.default
	    },

	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: mmjpg.getm_mmjpg(),
	            pageNo: 1,
	            refreshing: false
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        fetch: function fetch(event) {
	            //                this.pageNo = this.pageNo+1;
	            //                this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this = this;

	            this.refreshing = true;
	            this.pageNo = 1;
	            setTimeout(function () {
	                _this.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            weexJsoupModule.pcmainheadlist(url, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ },

/***/ 338:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    },
	    on: {
	      "loadmore": _vm.fetch
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcmainhotlistitem_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(340)
	)

	/* script */
	__vue_exports__ = __webpack_require__(341)

	/* template */
	var __vue_template__ = __webpack_require__(346)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainlike\\pcmainlikelist_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-69e6cfbe"
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


/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pcmainlikelistitem_v = __webpack_require__(342);

	var _pcmainlikelistitem_v2 = _interopRequireDefault(_pcmainlikelistitem_v);

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

	var modal = weex.requireModule('modal');
	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var mmjpg = __webpack_require__(142);

	exports.default = {
	    components: {
	        pcmainlikelistitem_v: _pcmainlikelistitem_v2.default
	    },

	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: mmjpg.getm_mmjpg(),
	            pageNo: 1,
	            refreshing: false
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        fetch: function fetch(event) {
	            //                this.pageNo = this.pageNo+1;
	            //                this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this = this;

	            this.refreshing = true;
	            this.pageNo = 1;
	            setTimeout(function () {
	                _this.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            weexJsoupModule.pcmainlikelist(url, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(343)
	)

	/* script */
	__vue_exports__ = __webpack_require__(344)

	/* template */
	var __vue_template__ = __webpack_require__(345)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainlike\\pcmainlikelistitem_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-29768111"
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


/***/ },

/***/ 343:
/***/ function(module, exports) {

	module.exports = {
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "margin": 5
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx",
	    "flex": 1,
	    "alignItems": "flex-start",
	    "padding": 10
	  },
	  "img": {
	    "width": 200,
	    "height": 200
	  }
	}

/***/ },

/***/ 344:
/***/ function(module, exports) {

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

	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var weexEventModule = weex.requireModule('weexEventModule');
	module.exports = {
	    created: function created() {},

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

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["news-bottom"],
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
	    staticClass: ["tucao_numClass"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 346:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    },
	    on: {
	      "loadmore": _vm.fetch
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcmainlikelistitem_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(348)
	)

	/* script */
	__vue_exports__ = __webpack_require__(349)

	/* template */
	var __vue_template__ = __webpack_require__(350)
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
	__vue_options__.__file = "D:\\github\\vuemmjpg\\mmjpg\\src\\pc\\mainmm\\pcmainmmlist_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a8a742c4"
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


/***/ },

/***/ 348:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pcmainlikelistitem_v = __webpack_require__(342);

	var _pcmainlikelistitem_v2 = _interopRequireDefault(_pcmainlikelistitem_v);

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

	var modal = weex.requireModule('modal');
	var weexJsoupModule = weex.requireModule('weexJsoupModule');
	var mmjpg = __webpack_require__(142);

	exports.default = {
	    components: {
	        pcmainlikelistitem_v: _pcmainlikelistitem_v2.default
	    },

	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: mmjpg.getm_mmjpg(),
	            pageNo: 1,
	            refreshing: false
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        fetch: function fetch(event) {
	            //                this.pageNo = this.pageNo+1;
	            //                this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this = this;

	            this.refreshing = true;
	            this.pageNo = 1;
	            setTimeout(function () {
	                _this.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            weexJsoupModule.pcmainmmlist(url, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ },

/***/ 350:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    },
	    on: {
	      "loadmore": _vm.fetch
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcmainlikelistitem_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 351:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("下拉刷新...")])]), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmaintopslider')], 1), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pc_main_item_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmainhotlist_v')], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmainlikelist_v')], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmainmmlist_v')], 1), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator_loading"]
	  }, [_vm._v("加载更多...")])])], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });