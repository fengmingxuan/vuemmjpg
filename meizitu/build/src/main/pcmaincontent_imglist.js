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
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(58)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcmaincontent_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1d10c722"
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(7)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0e1297d4"
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
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
	  "nav_bar": {
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 100,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#FF6B9C"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#FF6B9C"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#FF6B9C"
	  },
	  "nav_text": {
	    "fontSize": "20wx",
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 1,
	    "color": "#ffffff"
	  },
	  "nav_text_top-0": {
	    "marginTop": 1
	  },
	  "nav_text_top-1": {
	    "marginTop": 1
	  },
	  "nav_text-0": {
	    "color": "#FFFFFF"
	  },
	  "nav_text-1": {
	    "color": "#ffffff"
	  },
	  "nav_title": {
	    "flex": 1,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "nav_back": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": "45wx",
	    "height": 80
	  },
	  "nav_right_menu": {
	    "width": "45wx",
	    "height": 80,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "img": {
	    "width": 70,
	    "height": 70,
	    "marginLeft": 20,
	    "padding": 10
	  },
	  "nav_back-0": {
	    "backgroundColor:active": "#000000"
	  },
	  "nav_back-1": {
	    "backgroundColor:active": "#000000"
	  },
	  "nav_right_menu-0": {
	    "backgroundColor": "#000000"
	  },
	  "nav_right_menu-1": {
	    "backgroundColor": "#000000"
	  },
	  "img_menu": {
	    "width": 50,
	    "height": 50,
	    "marginRight": 20
	  },
	  "imglogo": {
	    "width": 240,
	    "flex": 1,
	    "height": 50
	  },
	  "nav_line": {
	    "height": 1
	  },
	  "nav_line-0": {
	    "backgroundColor": "#D8D8D8"
	  },
	  "nav_line-1": {
	    "backgroundColor": "#192c46"
	  },
	  "status_bar_ios": {
	    "height": "20wx"
	  },
	  "status_bar-0": {
	    "backgroundColor": "#000000"
	  },
	  "status_bar-1": {
	    "backgroundColor": "#000000"
	  }
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	var meizitu = __webpack_require__(6);
	var navigator = weex.requireModule('navigator');

	exports.default = {
	    data: function data() {
	        return {
	            title: '妹子图',
	            type: 0,
	            shown: true,
	            showStatusBar: 0,
	            nav_text_top: 0,
	            shownleft: true,
	            leftsrc: './images/menu.png'
	        };
	    },

	    props: ['title', 'shown', 'leftsrc', 'shownleft'],
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        if (this.platform == 'iOS') {
	            this.showStatusBar = 1;
	        }
	        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	            this.nav_text_top = 1;
	        } else {
	            this.nav_text_top = 0;
	        }
	        if (this.leftsrc == undefined) {
	            this.leftsrc = './images/menu.png';
	        }
	        if (this.title == undefined) {
	            this.title = '妹子图';
	        }
	    },
	    ready: function ready() {},

	    methods: {
	        nativeback: function nativeback(e) {
	            console.log('nativeback');
	            //                var params = {
	            //                    'animated': 'true'
	            //                };
	            //                navigator.pop(params, event => {
	            //
	            //                });
	            var params = {};
	            this.$emit('nativeback', params);
	        },
	        onright: function onright(e) {
	            console.log('navbar == onright');
	            this._parent.onright();
	        },

	        getImgUrl: function getImgUrl(url) {
	            return meizitu.getImageUrl(url);
	        },

	        setLeftImage: function setLeftImage(res) {
	            this.leftImage = res;
	            //                console.log('navbar == res'+res);
	        },

	        setRightImage: function setRightImage(res) {
	            this.rightImage = res;
	            //                    console.log('navbar == res'+res);
	        }

	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
	    HTTP: 'https://',//https:// http://

	};

	var MEIZITU = {
	    pc_meizitu:"http://www.meizitu.com",
	    pc_main_more:"http://www.meizitu.com/a/",
	    pc_tag:"http://www.meizitu.com/a/pure.html",
	    pc_image:"http://www.meizitu.com/a/3666.html",
	    m_meizitu:"http://m.meizitu.com",
	    tag_meizitu:"http://m.meizitu.com/tag/suxiong_17_1.html",

	};
	exports.gettag_meizitu = function () {
	    var url = MEIZITU.tag_meizitu;
	    console.log('tag_meizitu==' + url);
	    return url;
	};
	exports.getm_meizitu = function () {
	    var url = MEIZITU.m_meizitu;
	    console.log('m_meizitu==' + url);
	    return url;
	};
	exports.getpc_image = function () {
	    var url = MEIZITU.pc_image;
	    console.log('pc_image==' + url);
	    return url;
	};
	exports.getpc_tag = function () {
	    var url = MEIZITU.pc_tag;
	    console.log('pc_tag==' + url);
	    return url;
	};
	exports.getpc_main_more = function () {
	    var url = MEIZITU.pc_main_more;
	    console.log('pc_main_more==' + url);
	    return url;
	};
	exports.getpc_meizitu = function () {
	    var url = MEIZITU.pc_meizitu;
	    console.log('pc_meizitu==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meizitu' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meizitu' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/meizitu') || host.endsWith(':12580/meizitu')) {
	                host = host.replace('/meizitu', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meizitu/build/src/' : BASE_URL.HTTP + host + '/meizitu/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/meizitu/build/src/';
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
/* 7 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["nav_bar"]
	  }, [_c('div', {
	    staticClass: ["nav_back"],
	    on: {
	      "click": _vm.nativeback
	    }
	  }, [(_vm.shownleft) ? _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.getImgUrl(_vm.leftsrc)
	    }
	  }) : _vm._e()]), _c('div', {
	    staticClass: ["nav_title"]
	  }, [_c('text', {
	    staticClass: ["nav_text"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["nav_right_menu"]
	  }, [(_vm.shown) ? _c('div', {
	    staticClass: ["nav_right_menu"],
	    on: {
	      "click": _vm.onright
	    }
	  }, [_c('image', {
	    staticClass: ["img_menu"],
	    attrs: {
	      "src": _vm.getImgUrl('./images/search.png')
	    }
	  })]) : _vm._e()])]), _c('div', {
	    staticClass: ["nav_line"]
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pclastest_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1ae01d36"
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
/* 16 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 5,
	    "alignContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "txt": {
	    "fontSize": 30,
	    "padding": 20
	  }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meizitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(id, e, alt) {

	            //                 weexEventModule.startWebViewActivity(e);
	            var name = "img/pcimage_imglist";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meizitu.getDefaultUrl(name),
	                animated: "true",
	                options: {
	                    taghref: e,
	                    title: alt
	                }
	            };

	            weexNavigatorModule.push(params, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.id, _vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.id) + " " + _vm._s(_vm.stockitem.alt))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pclastest.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-601621dd"
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
/* 21 */
/***/ (function(module, exports) {

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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pclastest_item = __webpack_require__(15);

	var _pclastest_item2 = _interopRequireDefault(_pclastest_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pclastest_item: _pclastest_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "最新更新",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png'

	        };
	    },

	    created: function created() {
	        var self = this;
	        var ctaghref = self.$getConfig().taghref;
	        if (ctaghref != undefined) {
	            self.taghref = ctaghref;
	        }
	        //            var ctitle = self.$getConfig().title;
	        //            if(ctitle!=undefined){
	        //                self.title = ctitle;
	        //            }
	        console.log('title==' + self.title + ';taghref==' + self.taghref);

	        self.refresh();

	        var paramsEvent = {
	            event: "7001",
	            label: "最新更新"
	        };
	        weexEventModule.onEvent(paramsEvent, function (event) {});
	    },
	    methods: {
	        autoRefresh: function autoRefresh(event) {
	            var self = this;
	            storage.getItem('taghref', function (s) {
	                console.log('get taghref result:' + JSON.stringify(s));
	                var staghref = s.data;
	                if (staghref != undefined) {
	                    self.taghref = staghref;
	                }
	                console.log('taghref==' + self.taghref);
	                self.refresh();
	            });
	        },
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            //                 this.pageNo = this.pageNo+1;
	            //                this.pageNo = this.pageNo+1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
	            this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this2 = this;

	            this.refreshing = true;
	            //                this.pageNo = 0;
	            setTimeout(function () {
	                _this2.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    //index_2.shtml
	            //                    url = self.taghref+"list28"+self.pageNo+".html";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pclastest(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            tag.id = i + 1;
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    }
	  }), _c('list', {
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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pclastest_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(31)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pchotpic_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1e3e5fbc"
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
/* 25 */
/***/ (function(module, exports) {

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pchotpic_imglist_item = __webpack_require__(27);

	var _pchotpic_imglist_item2 = _interopRequireDefault(_pchotpic_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pchotpic_imglist_item: _pchotpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "热门图片",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png'
	            //                pagenumbers:''


	        };
	    },

	    created: function created() {
	        var self = this;
	        var ctaghref = self.$getConfig().taghref;
	        if (ctaghref != undefined) {
	            self.taghref = ctaghref;
	        }
	        //            var ctitle = self.$getConfig().title;
	        //            if(ctitle!=undefined){
	        //                self.title = ctitle;
	        //            }
	        console.log('title==' + self.title + ';taghref==' + self.taghref);
	        //
	        self.refresh();
	        var paramsEvent = {
	            event: "7002",
	            label: "热门图片"
	        };
	        weexEventModule.onEvent(paramsEvent, function (event) {});
	        //            storage.getItem('taghref',function(s){
	        //                console.log('get taghref result:'+JSON.stringify(s));
	        //                var staghref = s.data;
	        //                if(staghref!=undefined){
	        //                    self.taghref = staghref;
	        //                }
	        //                console.log('taghref=='+self.taghref);
	        //
	        //                self.refresh();
	        //
	        //            });
	    },
	    mounted: function mounted() {
	        var self = this;
	    },
	    methods: {
	        autoRefresh: function autoRefresh(event) {
	            var self = this;
	            storage.getItem('taghref', function (s) {
	                console.log('get taghref result:' + JSON.stringify(s));
	                var staghref = s.data;
	                if (staghref != undefined) {
	                    self.taghref = staghref;
	                }
	                console.log('taghref==' + self.taghref);
	                self.refresh();
	            });
	        },
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            this.pageNo = this.pageNo + 1;
	            //                this.pageNo = this.pageNo+1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
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
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+ "&PageNo="+self.pageNo;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pchotpic(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                src: tag.src,
	                                other: tag.other,
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src,
	                                other2: tag2.other
	                            };
	                            //                                self.pagenumbers = tag.pagenumbers;
	                            self.stockArray.push(item);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(28)
	)

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(30)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pchotpic_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9dff3380"
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
/* 28 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 5
	  },
	  "img": {
	    "width": 350,
	    "height": 400,
	    "borderRadius": 5
	  },
	  "txt": {
	    "fontSize": 30,
	    "width": 350
	  }
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meizitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "img/pcimage_imglist";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meizitu.getDefaultUrl(name),
	                animated: "true",
	                options: {
	                    taghref: e,
	                    title: alt
	                }
	            };

	            weexNavigatorModule.push(params, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flex: "1",
	      margin: "5px"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])]), _c('div', {
	    staticStyle: {
	      width: "5px"
	    }
	  }), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href2, _vm.stockitem.alt2)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src2
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt2))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    }
	  }), _c('list', {
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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pchotpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcflink_item = __webpack_require__(38);

	var _pcflink_item2 = _interopRequireDefault(_pcflink_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcflink_item: _pcflink_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref', 'pageNo'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "美女分类",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png'

	        };
	    },

	    created: function created() {
	        var self = this;
	        var ctaghref = self.$getConfig().taghref;
	        if (ctaghref != undefined) {
	            self.taghref = ctaghref;
	        }
	        var ctitle = self.$getConfig().title;
	        if (ctitle != undefined) {
	            self.title = ctitle;
	        }
	        console.log('title==' + self.title + ';taghref==' + self.taghref);

	        //            storage.getItem('pageNo',function(s){
	        //                console.log('get pageNo result:'+JSON.stringify(s));
	        //                var spageNo = s.data;
	        //                if(spageNo!=undefined){
	        //                    self.pageNo = spageNo;
	        //                }
	        //                console.log('pageNo=='+self.pageNo);
	        //                self.refresh();
	        //            });
	        self.refresh();
	    },
	    methods: {
	        autoRefresh: function autoRefresh() {
	            var self = this;
	            self.refresh();
	            //                storage.getItem('pageNo',function(s){
	            //                    console.log('get pageNo result:'+JSON.stringify(s));
	            //                    var spageNo = s.data;
	            //                    if(spageNo!=undefined){
	            //                        self.pageNo = spageNo;
	            //                    }
	            //                    console.log('pageNo=='+self.pageNo);
	            //                    self.refresh();
	            //                });
	        },
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            //                 this.pageNo = this.pageNo+1;
	            //                this.pageNo = this.pageNo+1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
	            this.refresh();
	        },
	        onpullingdown: function onpullingdown(event) {},
	        onrefresh: function onrefresh(event) {
	            var _this2 = this;

	            this.refreshing = true;
	            //                this.pageNo = 0;
	            setTimeout(function () {
	                _this2.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    //index_2.shtml
	            //                    url = self.taghref+"list28"+self.pageNo+".html";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pcflink(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            tag.id = i + 1;
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(39)
	)

	/* script */
	__vue_exports__ = __webpack_require__(40)

	/* template */
	var __vue_template__ = __webpack_require__(41)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcflink_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3e64f016"
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
/* 39 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 5,
	    "alignContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "txt": {
	    "fontSize": 30,
	    "padding": 20
	  }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meizitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(id, e, alt) {

	            weexEventModule.startWebViewActivity(e);
	            //                var name = "";
	            //                if(id==1){
	            //                    name = "main/pcmain_imglist";
	            //                }else{
	            //                    name = "nenuli/pcnenuli_tabbar";
	            //                }
	            //                var params={
	            //                    url: meituba.getDefaultUrl(name),
	            //                    animated: "true",
	            //                    options:{
	            //                        taghref: e,
	            //                        title:alt,
	            //                        pageNo:id-1
	            //                    }
	            //                };
	            //
	            //                weexNavigatorModule.push(params, event => {
	            //                    // modal.toast({ message: 'callback: ' + event })
	            //                })
	        }
	    }
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.id, _vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.id) + " " + _vm._s(_vm.stockitem.alt))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('list', {
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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcflink_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = {
	  "pointdiv": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "15wx",
	    "width": "18wx",
	    "flex": 1,
	    "marginLeft": "75wx",
	    "marginTop": "2wx",
	    "flexDirection": "column"
	  },
	  "rednum": {
	    "backgroundColor": "#ff531e",
	    "width": "15wx",
	    "height": "12wx",
	    "borderRadius": 30,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ff531e",
	    "fontSize": "8wx",
	    "paddingTop": "2wx",
	    "paddingBottom": "2wx"
	  },
	  "rednum-0": {
	    "paddingRight": "2wx",
	    "paddingLeft": "4wx"
	  },
	  "rednum-1": {
	    "paddingRight": "2wx",
	    "paddingLeft": "2wx"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "width": 750,
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "marginBottom": "5wx"
	  },
	  "content": {
	    "flexDirection": "column",
	    "width": 750
	  },
	  "tabclass": {
	    "width": 750,
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "bottom": 0,
	    "left": 0,
	    "right": 0
	  },
	  "tabclass_line": {
	    "width": 750,
	    "height": 2,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "bottom": 0,
	    "left": 0,
	    "right": 0
	  },
	  "content-0": {
	    "backgroundColor": "#F6F6F6"
	  },
	  "content-1": {
	    "backgroundColor": "#15253d"
	  },
	  "tabclass-0": {
	    "backgroundColor": "#333333"
	  },
	  "tabclass-1": {
	    "backgroundColor": "#132237"
	  },
	  "top_tab_item": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": 150,
	    "marginTop": -40
	  },
	  "img": {
	    "width": "20wx",
	    "height": "20wx"
	  },
	  "item_text": {
	    "fontSize": "15wx",
	    "flex": 1,
	    "top": "-5wx",
	    "textAlign": "center"
	  },
	  "tablineclass": {
	    "height": 2
	  },
	  "top_item_line": {
	    "height": 2,
	    "width": 150
	  },
	  "item_text-0": {
	    "color": "#555555"
	  },
	  "item_text-1": {
	    "color": "#999999"
	  },
	  "item_text-select-0": {
	    "color": "#1191f6"
	  },
	  "item_text-select-1": {
	    "color": "#005e91"
	  },
	  "lineClass": {
	    "height": 2,
	    "width": 150
	  },
	  "select_line_color-0": {
	    "backgroundColor": "#1191f6"
	  },
	  "select_line_color-1": {
	    "backgroundColor": "#005e91"
	  },
	  "unselect_line_color-0": {
	    "backgroundColor": "#DDDDDD"
	  },
	  "unselect_line_color-1": {
	    "backgroundColor": "#0e1929"
	  }
	}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcflink = __webpack_require__(45);

	var _pcflink2 = _interopRequireDefault(_pcflink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

	var dom = weex.requireModule('dom');
	var storage = weex.requireModule('storage');

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	exports.default = {
	    components: {
	        pcflink: _pcflink2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        var _ref;

	        return _ref = {
	            skinType: 0,
	            eventCnt: 0,
	            togglePlayMsg: 'pause',
	            indexMetting: 0,
	            title: '',
	            navBar_display: true,
	            shown: false,
	            screenHeight: 0,
	            platform: 'unknown',
	            //            left_line_color: 'select_line_color-0',
	            //            right_line_color: 'unselect_line_color-0',
	            buttomData: [],
	            davNum: 0, //我的观点数
	            davmargin: 0,
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: '0'
	        }, _defineProperty(_ref, 'shown', false), _defineProperty(_ref, 'leftsrc', './images/back.png'), _ref;
	    },
	    created: function created() {
	        //            this.platform = this.$getConfig().env.platform;
	        //            var cskinType = this.$getConfig().skinType;
	        //            if (this.platform == 'iOS') {
	        //                this.screenHeight = this.$getConfig().env.deviceHeight / this.$getConfig().env.scale - 64;
	        //                this.navBar_display = false;
	        //                var event_ios = __weex_require_module__('event');
	        //                event_ios.setNavbarTitle(this.title);
	        //            }
	        var self = this;
	        this.refresh();
	        //            storage.getItem('pageNo',function(s){
	        //                console.log('get pageNo result:'+JSON.stringify(s));
	        //                var json  = s.data;
	        //                console.log('json===' + json);
	        //
	        //                json = eval('(' + json + ')');
	        //
	        //                var staghref = json.taghref;
	        //                if(staghref!=undefined){
	        //                    self.taghref = staghref;
	        //                }
	        //                console.log('taghref=='+staghref);
	        //
	        //                var spageNo = json.pageNo;
	        //                if(spageNo!=undefined){
	        //                    self.pageNo = spageNo;
	        //                }
	        //                console.log('pageNo=='+spageNo);
	        //                self.refresh();
	        //            });

	        //            if (this.platform == 'iOS') {
	        //
	        //            } else if (this.platform == 'android') {
	        //
	        //            } else {
	        //                cskinType = taoguba.getUrlParam('skinType');
	        //            }
	        //            if (cskinType == undefined) {
	        //                cskinType = 0;
	        //            }
	        //            this.skinType = cskinType;
	        //
	        //            var cdavNum = this.$getConfig().davNum;
	        //            this.setdavNum(cdavNum);
	    },

	    methods: {
	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	                self.pageNo = '0';
	                console.log('not from tabbar');
	            }
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            console.log('refresh params== ' + JSON.stringify(params));
	            weexMeizituJsoupModule.pcflinkTag(params, function (e) {
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.buttomData.splice(0, self.buttomData.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            var tab = {
	                                index: i,
	                                itemName: tag.alt,
	                                itemNameColor: "item_text-select-0",
	                                itemLineColor: "select_line_color-0",
	                                item_text_select: "#555555",
	                                id: "point_sub" + i,
	                                href: tag.href,
	                                isFirst: 1,
	                                indextab: 'tab' + i,
	                                indexline: 'line' + i,
	                                pageNo: i + ''
	                                // UrlUnSelect:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png"
	                            };
	                            console.log('tab===' + JSON.stringify(tab));
	                            self.buttomData.push(tab);
	                            //                                if(i==0){
	                            //                                    var pageNo = tab.pageNo;
	                            //                                    console.log("pageNo==="+pageNo)
	                            //                                    storage.setItem('pageNo',pageNo,function(s){
	                            //                                        console.log('set [pageNo]:'+JSON.stringify(s));
	                            //                                    });
	                            //                                }
	                        }
	                    }
	                }
	            });
	        },
	        onchange: function onchange(params) {
	            var index = params.index;
	            console.log("onchange===" + index);
	            this.setIndex(index);
	            //                if ('android' == this.platform) {
	            //                    weexEventModule.setOnDrawerBackEnabled('' + index);
	            //                }
	        },
	        setIndex: function setIndex(index) {
	            console.log("setIndex==" + index);
	            this.indexMetting = index;
	            this.title = this.buttomData[index].itemName;
	            //                if (index == 0) {
	            //                    this.left_line_color = 'select_line_color-' + this.skinType;
	            //                    this.right_line_color = 'unselect_line_color-' + this.skinType;
	            //                }
	            //                else {
	            //                    this.left_line_color = 'unselect_line_color-' + this.skinType;
	            //                    this.right_line_color = 'select_line_color-' + this.skinType;
	            //                }
	            // console.log('\n======\n'+JSON.stringify(this.buttomData));
	            for (var i = 0; i < this.buttomData.length; i++) {
	                var tabItem = this.buttomData[i];
	                if (i == index) {
	                    tabItem.imgUrl = tabItem.imgUrlSelect;
	                    tabItem.itemNameColor = "item_text-select-" + this.skinType;
	                    tabItem.itemLineColor = "select_line_color-" + this.skinType;
	                    tabItem.item_text_select = "#1191f6";

	                    //                        var pageNo = tabItem.pageNo;
	                    //                        console.log("pageNo==="+pageNo)
	                    //                        storage.setItem('pageNo',pageNo,function(s){
	                    //                            console.log('set [pageNo]:'+JSON.stringify(s));
	                    //                        });
	                    //                        const el = this.$refs.item10[0];
	                    //                        if (this.$vm('point_sub' + i).isFirst == 1) {
	                    //                            this.$vm('point_sub' + i).autoRefresh();
	                    //                        }


	                    console.log("i===" + i);
	                    if (i == 0) {
	                        if (this.$refs.point_sub0[0].isFirst == 1) {
	                            this.$refs.point_sub0[0].autoRefresh();
	                            var eltab = this.$refs.tab0[0];
	                            dom.scrollToElement(eltab, { offset: 0 });

	                            var elline = this.$refs.line0[0];
	                            dom.scrollToElement(elline, { offset: 0 });
	                        }
	                    } else if (i == 1) {
	                        if (this.$refs.point_sub1[0].isFirst == 1) {
	                            this.$refs.point_sub1[0].autoRefresh();
	                            var _eltab = this.$refs.tab1[0];
	                            dom.scrollToElement(_eltab, { offset: 1 });

	                            var _elline = this.$refs.line1[0];
	                            dom.scrollToElement(_elline, { offset: 1 });
	                        }
	                    }
	                } else {
	                    tabItem.imgUrl = tabItem.imgUrlUnSelect;
	                    tabItem.itemNameColor = "item_text-" + this.skinType;
	                    tabItem.itemLineColor = "unselect_line_color-" + this.skinType;
	                    tabItem.item_text_select = "#555555";
	                }
	            }
	        }
	        //            //设置留言管理数字
	        //            setdavNum:function (num) {
	        //                var cdavNum = num;
	        //                if(cdavNum==undefined){
	        //                    cdavNum = 0;
	        //                }
	        //                if(cdavNum>99){
	        //                    cdavNum = 99;
	        //                }
	        //                if(cdavNum<10){
	        //                    this.davmargin=0;
	        //                }else{
	        //                    this.davmargin=1;
	        //                }
	        //                this.davNum = cdavNum;
	        //            }
	    },
	    ready: function ready() {

	        this.indexMetting = 0;
	        this.setIndex(this.indexMetting);
	    }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(36)
	)

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(42)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcflink.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-498e9d66"
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
/* 46 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["content"]
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    }
	  }), _c('scroller', {
	    staticClass: ["tabclass"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.buttomData), function(item) {
	    return _c('div', {
	      ref: item.indextab,
	      refInFor: true,
	      staticClass: ["top_tab_item"],
	      on: {
	        "click": function($event) {
	          _vm.setIndex(item.index)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["pointdiv"]
	    }, [(_vm.davNum != 0 && item.index == 1) ? _c('text', {
	      staticClass: ["rednum"]
	    }, [_vm._v(_vm._s(_vm.davNum))]) : _vm._e()]), _c('text', {
	      staticClass: ["item_text"],
	      style: {
	        color: item.item_text_select
	      }
	    }, [_vm._v(_vm._s(item.itemName))])])
	  })), _c('scroller', {
	    staticClass: ["tabclass_line"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.buttomData), function(item) {
	    return _c('div', {
	      ref: item.indexline,
	      refInFor: true,
	      staticClass: ["top_item_line"]
	    }, [_c('text', {
	      staticClass: ["item_text"],
	      style: {
	        backgroundColor: item.item_text_select
	      }
	    })])
	  })), _c('slider', {
	    staticClass: ["slider"],
	    staticStyle: {
	      height: "1200"
	    },
	    appendAsTree: true,
	    attrs: {
	      "append": "tree",
	      "interval": 1000,
	      "needloop": "false",
	      "autoPlay": false,
	      "index": "indexMetting",
	      "offScreenPageLimit": "3"
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, _vm._l((_vm.buttomData), function(item) {
	    return _c('div', {
	      staticStyle: {
	        width: "750",
	        height: "1334"
	      }
	    }, [_c('pcflink', {
	      ref: item.id,
	      refInFor: true,
	      attrs: {
	        "taghref": item.href,
	        "pageNo": item.pageNo
	      }
	    })], 1)
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports) {

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

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcmaincontent_imglist_item = __webpack_require__(49);

	var _pcmaincontent_imglist_item2 = _interopRequireDefault(_pcmaincontent_imglist_item);

	var _pcpicnew_slider = __webpack_require__(53);

	var _pcpicnew_slider2 = _interopRequireDefault(_pcpicnew_slider);

	var _pclastest = __webpack_require__(20);

	var _pclastest2 = _interopRequireDefault(_pclastest);

	var _pchotpic_imglist = __webpack_require__(24);

	var _pchotpic_imglist2 = _interopRequireDefault(_pchotpic_imglist);

	var _pcflink_pager = __webpack_require__(57);

	var _pcflink_pager2 = _interopRequireDefault(_pcflink_pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcmaincontent_imglist_item: _pcmaincontent_imglist_item2.default,
	        navbar_v: _navbar_v2.default,
	        pcpicnew_slider: _pcpicnew_slider2.default,
	        pclastest: _pclastest2.default,
	        pchotpic_imglist: _pchotpic_imglist2.default,
	        pcflink_pager: _pcflink_pager2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            pagenumbers: '',
	            url: meizitu.getpc_meizitu()

	        };
	    },

	    created: function created() {
	        var self = this;
	        var ctaghref = self.$getConfig().taghref;
	        if (ctaghref != undefined) {
	            self.taghref = ctaghref;
	        }
	        var ctitle = self.$getConfig().title;
	        if (ctitle != undefined) {
	            self.title = ctitle;
	        }
	        console.log('title==' + self.title + ';taghref==' + self.taghref);
	        //
	        self.refresh();
	        //            storage.getItem('taghref',function(s){
	        //                console.log('get taghref result:'+JSON.stringify(s));
	        //                var staghref = s.data;
	        //                if(staghref!=undefined){
	        //                    self.taghref = staghref;
	        //                }
	        //                console.log('taghref=='+self.taghref);
	        //
	        //                self.refresh();
	        //
	        //            });
	    },
	    mounted: function mounted() {
	        var self = this;
	    },
	    methods: {
	        autoRefresh: function autoRefresh(event) {
	            var self = this;
	            storage.getItem('taghref', function (s) {
	                console.log('get taghref result:' + JSON.stringify(s));
	                var staghref = s.data;
	                if (staghref != undefined) {
	                    self.taghref = staghref;
	                }
	                console.log('taghref==' + self.taghref);
	                self.refresh();
	            });
	        },
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            this.pageNo = this.pageNo + 1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
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
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	            }
	            var url = self.taghref;
	            if (self.pageNo == 1) {
	                url = self.taghref;
	            } else if (self.pageNo == 2) {
	                url = meizitu.getpc_meizitu() + self.pagenumbers;
	            } else {
	                url = meizitu.getpc_main_more() + self.pagenumbers;
	            }
	            self.url = url;
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pcmaincontent(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.pagenumbers = tag.pagenumbers;
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(50)
	)

	/* script */
	__vue_exports__ = __webpack_require__(51)

	/* template */
	var __vue_template__ = __webpack_require__(52)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcmaincontent_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3e2e4213"
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
/* 50 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 5,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 5
	  },
	  "img": {
	    "height": 800,
	    "borderRadius": 5
	  },
	  "title": {
	    "fontSize": 38,
	    "padding": 10
	  },
	  "alt": {
	    "fontSize": 30,
	    "padding": 10
	  }
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

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

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meizitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "img/pcimage_imglist";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meizitu.getDefaultUrl(name),
	                animated: "true",
	                options: {
	                    taghref: e,
	                    title: alt
	                }
	            };

	            weexNavigatorModule.push(params, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.stockitem.title))]), _c('text', {
	    staticClass: ["alt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))]), _c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(54)
	)

	/* script */
	__vue_exports__ = __webpack_require__(55)

	/* template */
	var __vue_template__ = __webpack_require__(56)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcpicnew_slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6aa62152"
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
/* 54 */
/***/ (function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 730,
	    "height": 500,
	    "margin": 10
	  },
	  "slider": {
	    "width": 750
	  },
	  "frame": {
	    "width": 750,
	    "flexDirection": "column",
	    "alignContent": "center",
	    "alignItems": "center",
	    "height": 600
	  },
	  "txt": {
	    "fontSize": 30,
	    "margin": 10
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {},
	    props: ['taghref'],
	    data: function data() {
	        return {
	            imageList: [],
	            taghref: meizitu.getpc_meizitu(),
	            pageNo: 1,
	            title: ""
	        };
	    },

	    created: function created() {
	        var self = this;
	        var ctaghref = self.$getConfig().taghref;
	        if (ctaghref != undefined) {
	            self.taghref = ctaghref;
	        }
	        self.refresh();
	    },
	    methods: {
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "img/pcimage_imglist";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meizitu.getDefaultUrl(name),
	                animated: "true",
	                options: {
	                    taghref: e,
	                    title: alt
	                }
	            };

	            weexNavigatorModule.push(params, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        },
	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_meizitu();
	            }
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pcpicnew(params, function (e) {
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
/* 56 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      height: "600px"
	    }
	  }, [_c('slider', {
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
	          _vm.todetail(img.href, img.alt)
	        }
	      }
	    }), _c('text', {
	      staticClass: ["txt"]
	    }, [_vm._v(_vm._s(img.alt))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(46)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/main/pcflink_pager.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1e61335e"
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
/* 58 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    }
	  }), _c('list', {
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
	  }, [_c('pcpicnew_slider', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcmaincontent_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pchotpic_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pclastest', {
	    attrs: {
	      "taghref": _vm.url
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcflink_pager', {
	    attrs: {
	      "taghref": _vm.url
	    }
	  })], 1), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator_loading"]
	  }, [_vm._v("加载更多...")])])], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);