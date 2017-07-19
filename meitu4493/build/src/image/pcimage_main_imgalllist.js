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
	__vue_styles__.push(__webpack_require__(35)
	)

	/* script */
	__vue_exports__ = __webpack_require__(36)

	/* template */
	var __vue_template__ = __webpack_require__(66)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimage_main_imgalllist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-67881988"
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4e2131fe"
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
	    "backgroundColor": "#d42591"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#d42591"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#d42591"
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

	var meitu = __webpack_require__(6);
	var navigator = weex.requireModule('navigator');

	exports.default = {
	    data: function data() {
	        return {
	            title: '4493美图',
	            type: 0,
	            shown: true,
	            showStatusBar: 0,
	            nav_text_top: 0,
	            shownleft: true,
	            leftsrc: './images/menu.png'
	        };
	    },

	    props: ['title', 'shown', 'leftsrc'],
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
	            this.title = '4493美图';
	        }
	    },
	    ready: function ready() {},

	    methods: {
	        nativeback: function nativeback(e) {
	            //                var params = {
	            //                    'animated': 'true'
	            //                };
	            //                navigator.pop(params, event => {
	            //
	            //                });
	            this._parent.togglemenu();
	        },
	        nativetitle: function nativetitle(e) {
	            console.log('nativetitle');
	            var params = {};
	            this.$emit('nativetitle', params);
	        },
	        onright: function onright(e) {
	            console.log('navbar == onright');
	            this._parent.onright();
	        },

	        getImgUrl: function getImgUrl(url) {
	            return meitu.getImageUrl(url);
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

	var MEITU = {
	    pc_meitu:"https://www.4493.com/",
	    pc_xingganmote:"https://www.4493.com/xingganmote/",
	    pc_xingganmote_image:"https://www.4493.com/xingganmote/126139/1.htm",
	    pc_new4493content1:"https://gg.dsxdn.com/4493/new4493content1.js",
	    pc_new4493content:"https://gg.dsxdn.com/4493/new4493content.js",
	    pc_top:"https://www.4493.com/top.html",
	    pc_xingganmote_image_all:"https://www.4493.com/xingganmote/126139.htm",
	    pc_star:"https://www.4493.com/star/yujiekong/",
	    pc_top_paihang:"https://www.4493.com/top/xinggan.html"


	};
	exports.getpc_top_paihang = function () {
	    var url = MEITU.pc_top_paihang;
	    console.log('pc_top_paihang==' + url);
	    return url;
	};
	exports.getpc_star = function () {
	    var url = MEITU.pc_star;
	    console.log('pc_star==' + url);
	    return url;
	};
	exports.getpc_xingganmote_image_all = function () {
	    var url = MEITU.pc_xingganmote_image_all;
	    console.log('pc_xingganmote_image_all==' + url);
	    return url;
	};
	exports.getpc_top = function () {
	    var url = MEITU.pc_top;
	    console.log('pc_top==' + url);
	    return url;
	};
	exports.getpc_new4493content = function () {
	    var url = MEITU.pc_new4493content;
	    console.log('pc_new4493content==' + url);
	    return url;
	};
	exports.getpc_new4493content1 = function () {
	    var url = MEITU.pc_new4493content1;
	    console.log('pc_new4493content1==' + url);
	    return url;
	};
	exports.getpc_xingganmote_image = function () {
	    var url = MEITU.pc_xingganmote_image;
	    console.log('pc_xingganmote_image==' + url);
	    return url;
	};
	exports.getpc_xingganmote = function () {
	    var url = MEITU.pc_xingganmote;
	    console.log('pc_xingganmote==' + url);
	    return url;
	};

	exports.getpc_meitu = function () {
	    var url = MEITU.pc_meitu;
	    console.log('pc_meitu==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meitu4493' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meitu4493' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/meitu4493') || host.endsWith(':12580/meitu4493')) {
	                host = host.replace('/meitu4493', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meitu4493/build/src/' : BASE_URL.HTTP + host + '/meitu4493/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/meitu4493/build/src/';
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
	    staticClass: ["nav_text"],
	    on: {
	      "click": _vm.nativetitle
	    }
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/childnav/pcinterest_hlist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1774165e"
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
	    "flexDirection": "column",
	    "width": 130,
	    "height": 60,
	    "borderColor": "#FF6B9C",
	    "borderWidth": 1,
	    "borderRadius": 20,
	    "backgroundColor": "#FF6B9C",
	    "alignItems": "center",
	    "alignContent": "center",
	    "margin": 5,
	    "padding": 5
	  },
	  "txt": {
	    "fontSize": 18,
	    "flexDirection": "column",
	    "color": "#ffffff",
	    "alignItems": "center",
	    "alignContent": "center"
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
	//

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(id, e, alt) {
	            if (id == 5) {
	                weexEventModule.startWebViewActivity(e);
	                return;
	            }

	            var name = "star/pcstar_hot_pager";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meitu.getDefaultUrl(name),
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
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.id, _vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"]
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/childnav/pcpic_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0ceda106"
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
/* 23 */
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
	    "height": 440,
	    "borderRadius": 5
	  },
	  "txt": {
	    "fontSize": 22,
	    "padding": 5,
	    "flex": 1,
	    "fontSize:active": 22,
	    "flex:active": 1,
	    "padding:active": 5,
	    "color:active": "#d42591"
	  },
	  "txt2": {
	    "fontSize": 22,
	    "flex": 1
	  },
	  "icon": {
	    "width": 30,
	    "height": 30
	  }
	}

/***/ }),
/* 24 */
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
	var meitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        getImgUrl: function getImgUrl(url) {
	            return meitu.getImageUrl(url);
	        },
	        todetail: function todetail(e, alt) {
	            if (e.indexOf('http://www.ys8.com') != -1) {
	                weexEventModule.startWebViewActivity(e);
	            } else {
	                var name = "image/pcimage_main_imglist";
	                var params = {
	                    url: meitu.getDefaultUrl(name),
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
	    }
	};

/***/ }),
/* 25 */
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
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.title)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.title))]), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flex: "1"
	    }
	  }, [_c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.getImgUrl('./images/time.png')
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))]), _c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.getImgUrl('./images/love.png')
	    }
	  }), _c('text', {
	    staticClass: ["txt2"]
	  }, [_vm._v(_vm._s(_vm.stockitem.other))])])]), _c('div', {
	    staticStyle: {
	      width: "5px"
	    }
	  }), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href2, _vm.stockitem.title2)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src2
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.title2))]), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flex: "1"
	    }
	  }, [_c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.getImgUrl('./images/time.png')
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt2))]), _c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.getImgUrl('./images/love.png')
	    }
	  }), _c('text', {
	    staticClass: ["txt2"]
	  }, [_vm._v(_vm._s(_vm.stockitem.other2))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	exports.ubball = function ubball(strContent) {
	    if(strContent ==null){
	        return;
	    }
	    strContent = strContent.replace(/\[gguba\](.+?)\[\/gguba\]/ig,function($1){
	        $1 = $1.replace("[gguba]","");
	        $1 = $1.replace("[/gguba]","");
	        return $1;
	    });
	    strContent = strContent.replace(/\[gubar\](.+?)\[\/gubar\]/ig,function($1){
	        $1 = $1.replace("[gubar]","");
	        $1 = $1.replace("[/gubar]","");
	        return $1;});
	    strContent = strContent.replace(/\[tag\](.+?)\[\/tag\]/ig,function($1){
	        $1 = $1.replace("[tag]","");
	        $1 = $1.replace("[/tag]","");
	        return $1;});
	    return strContent;
	}

	//refContent =  utils.replaceAll(refContent,/\[gubar\](.+?)\[\/gubar\]/ig,'','[gubar]','[/gubar]');
	exports.replaceAll = function replaceAll(sourcestr,regExp,replacestr,tagstr,tagstr2) {
	    if(sourcestr ==null){
	        return;
	    }
	    sourcestr = sourcestr.replace(regExp,function($1){
	        if(replacestr==null){
	            replacestr='';
	        }
	        $1 = $1.replace(tagstr,replacestr);
	        if(tagstr2!=null){
	            $1 = $1.replace(tagstr2,replacestr);
	        }
	        return $1;
	    });

	    return sourcestr;
	}

	String.prototype.replaceAllStr = function (FindText, RepText) {
	    var regExp = new RegExp(FindText, "gm");
	    return this.replace(regExp, RepText);
	}

/***/ }),
/* 28 */,
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcinterest_hlist_item = __webpack_require__(15);

	var _pcinterest_hlist_item2 = _interopRequireDefault(_pcinterest_hlist_item);

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcinterest_hlist_item: _pcinterest_hlist_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote_image(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "Tags:",
	            shown: false,
	            leftsrc: './images/back.png',
	            other: ""
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
	        self.refresh();
	        //            storage.getItem('taghref',function(s){
	        //                console.log('get taghref result:'+JSON.stringify(s));
	        //                var staghref = s.data;
	        //                if(staghref!=undefined){
	        //                    self.taghref = staghref;
	        //                }
	        //                console.log('taghref=='+self.taghref);
	        //                self.refresh();
	        //            });
	        //            setTimeout(() => {
	        //                storage.getItem('taghref',function(s){
	        //                    console.log('get taghref result:'+JSON.stringify(s));
	        //                    var staghref = s.data;
	        //                    if(staghref!=undefined){
	        //                        self.taghref = staghref;
	        //                    }
	        //                    console.log('pre taghref=='+self.taghref);
	        //                    self.refresh();
	        //                });
	        //            }, 2000)
	    },
	    methods: {
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
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
	            //                this.pageNo = 1;
	            setTimeout(function () {
	                _this2.refreshing = false;
	            }, 2000);
	            this.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meitu.getpc_xingganmote_image();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+"?idx="+self.pageNo;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcpicbottomline(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            //                                self.other = tag.other;
	                            tag.alt = tag.title;
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      height: "280px"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28",
	      marginTop: "30",
	      marginLeft: "20"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('hlist', {
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px",
	      height: "100px",
	      flex: "1"
	    },
	    attrs: {
	      "loadmoreoffset": "10",
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcinterest_hlist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcimage_main_imgalllist_item = __webpack_require__(37);

	var _pcimage_main_imgalllist_item2 = _interopRequireDefault(_pcimage_main_imgalllist_item);

	var _pcimage_bottomtag_hlist = __webpack_require__(41);

	var _pcimage_bottomtag_hlist2 = _interopRequireDefault(_pcimage_bottomtag_hlist);

	var _pcimageleft_imglist = __webpack_require__(42);

	var _pcimageleft_imglist2 = _interopRequireDefault(_pcimageleft_imglist);

	var _pcimageright_imglist = __webpack_require__(46);

	var _pcimageright_imglist2 = _interopRequireDefault(_pcimageright_imglist);

	var _pcimage_paihang = __webpack_require__(50);

	var _pcimage_paihang2 = _interopRequireDefault(_pcimage_paihang);

	var _pcimagehot_imglist = __webpack_require__(58);

	var _pcimagehot_imglist2 = _interopRequireDefault(_pcimagehot_imglist);

	var _pcimagejingxuan_imglist = __webpack_require__(62);

	var _pcimagejingxuan_imglist2 = _interopRequireDefault(_pcimagejingxuan_imglist);

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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var utils = __webpack_require__(27);
	exports.default = {
	    components: {
	        pcimage_main_imgalllist_item: _pcimage_main_imgalllist_item2.default,
	        navbar_v: _navbar_v2.default,
	        pcimage_bottomtag_hlist: _pcimage_bottomtag_hlist2.default,
	        pcimageleft_imglist: _pcimageleft_imglist2.default,
	        pcimageright_imglist: _pcimageright_imglist2.default,
	        pcimage_paihang: _pcimage_paihang2.default,
	        pcimagehot_imglist: _pcimagehot_imglist2.default,
	        pcimagejingxuan_imglist: _pcimagejingxuan_imglist2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote_image_all(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
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
	                self.taghref = meitu.getpc_xingganmote_image_all();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref.replaceAllStr("1.htm","")+self.pageNo+".htm";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcpicsboxcenterall(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.title = tag.title;
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(38)
	)

	/* script */
	__vue_exports__ = __webpack_require__(39)

	/* template */
	var __vue_template__ = __webpack_require__(40)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimage_main_imgalllist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c6fdb934"
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
/* 38 */
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
	    "height": 1200,
	    "borderRadius": 5
	  },
	  "txt": {
	    "fontSize": 22,
	    "padding": 5,
	    "flex": 1,
	    "fontSize:active": 22,
	    "flex:active": 1,
	    "padding:active": 5,
	    "color:active": "#d42591"
	  },
	  "txt2": {
	    "fontSize": 22,
	    "flex": 1
	  },
	  "icon": {
	    "width": 30,
	    "height": 30
	  }
	}

/***/ }),
/* 39 */
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
	var meitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        getImgUrl: function getImgUrl(url) {
	            return meitu.getImageUrl(url);
	        },
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "image/pcimage_main_all_slider";
	            var params = {
	                url: meitu.getDefaultUrl(name),
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
/* 40 */
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
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.title)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.stockitem.src
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(29)
	)

	/* script */
	__vue_exports__ = __webpack_require__(30)

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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimage_bottomtag_hlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9076aea0"
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(45)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimageleft_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1c7a36c2"
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcpic_imglist_item = __webpack_require__(22);

	var _pcpic_imglist_item2 = _interopRequireDefault(_pcpic_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcpic_imglist_item: _pcpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	        //            pcinterest_hlist

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote_image(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
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
	                self.taghref = meitu.getpc_xingganmote_image();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+ "index-"+self.pageNo+".htm";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcimageleft(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = {};
	                            }
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                src: tag.src,
	                                other: tag.other,
	                                title: tag.title,
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src,
	                                other2: tag2.other,
	                                title2: tag2.title
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
/* 45 */
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
	  }, [_vm._v("下拉刷新...")])]), _vm._m(0), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      padding: "10",
	      backgroundColor: "#FF5B90"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28",
	      marginTop: "10",
	      marginLeft: "20",
	      color: "#fff",
	      padding: "10"
	    }
	  }, [_vm._v("一周热图")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimageright_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e463c516"
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

	var _pcpic_imglist_item = __webpack_require__(22);

	var _pcpic_imglist_item2 = _interopRequireDefault(_pcpic_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcpic_imglist_item: _pcpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	        //            pcinterest_hlist

	    },
	    //        props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_new4493content1(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
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
	                self.taghref = meitu.getpc_new4493content1();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+ "index-"+self.pageNo+".htm";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcimageright(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = {};
	                            }
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                src: tag.src,
	                                other: tag.other,
	                                title: tag.title,
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src,
	                                other2: tag2.other,
	                                title2: tag2.title
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
/* 49 */
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
	  }, [_vm._v("下拉刷新...")])]), _vm._m(0), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      padding: "10",
	      backgroundColor: "#FF5B90"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28",
	      marginTop: "10",
	      marginLeft: "20",
	      color: "#fff",
	      padding: "10"
	    }
	  }, [_vm._v("养生吧")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(51)
	)

	/* script */
	__vue_exports__ = __webpack_require__(52)

	/* template */
	var __vue_template__ = __webpack_require__(57)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimage_paihang.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5f100b64"
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcimage_paihang_item = __webpack_require__(53);

	var _pcimage_paihang_item2 = _interopRequireDefault(_pcimage_paihang_item);

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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcimage_paihang_item: _pcimage_paihang_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote_image(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "美图排行  更多》》》",
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

	        self.refresh();
	    },
	    methods: {
	        nativetitle: function nativetitle() {
	            weexEventModule.startWebViewActivity(meitu.getpc_top());
	        },
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
	                self.taghref = meitu.getpc_xingganmote_image();
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
	            weexMeiu4493JsoupModule.pcimagepaihang(params, function (e) {
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimage_paihang_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-32843784"
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
/* 55 */
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
	var meitu = __webpack_require__(6);
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
	            var name = "image/pcimage_main_imglist";
	            //                if(e.indexOf('m.meituba.com')!=-1){
	            //                    name = "marticle/marticlelist";
	            //                }else{
	            //                    name = "article/pcarticlelist";
	            //                }
	            var params = {
	                url: meitu.getDefaultUrl(name),
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
/* 56 */
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
	        _vm.todetail(_vm.stockitem.id, _vm.stockitem.href, _vm.stockitem.title)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.id) + " " + _vm._s(_vm.stockitem.title))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 57 */
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
	    },
	    on: {
	      "nativetitle": _vm.nativetitle
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
	    }, [_c('pcimage_paihang_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(59)
	)

	/* script */
	__vue_exports__ = __webpack_require__(60)

	/* template */
	var __vue_template__ = __webpack_require__(61)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimagehot_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-676829e6"
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
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcpic_imglist_item = __webpack_require__(22);

	var _pcpic_imglist_item2 = _interopRequireDefault(_pcpic_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcpic_imglist_item: _pcpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	        //            pcinterest_hlist

	    },
	    //        props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_new4493content(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
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
	                self.taghref = meitu.getpc_new4493content();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+ "index-"+self.pageNo+".htm";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcimagehot(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = {};
	                            }
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                src: tag.src,
	                                other: tag.other,
	                                title: tag.title,
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src,
	                                other2: tag2.other,
	                                title2: tag2.title
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
/* 61 */
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
	  }, [_vm._v("下拉刷新...")])]), _vm._m(0), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      padding: "10",
	      backgroundColor: "#FF5B90"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28",
	      marginTop: "10",
	      marginLeft: "20",
	      color: "#fff",
	      padding: "10"
	    }
	  }, [_vm._v("编辑推荐/COMPILER")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(63)
	)

	/* script */
	__vue_exports__ = __webpack_require__(64)

	/* template */
	var __vue_template__ = __webpack_require__(65)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/image/pcimagejingxuan_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-776cce46"
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcpic_imglist_item = __webpack_require__(22);

	var _pcpic_imglist_item2 = _interopRequireDefault(_pcpic_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
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
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcpic_imglist_item: _pcpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	        //            pcinterest_hlist

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote_image(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "性感美女",
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
	                self.taghref = meitu.getpc_xingganmote_image();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+ "index-"+self.pageNo+".htm";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcimagejingxuan(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = {};
	                            }
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                src: tag.src,
	                                other: tag.other,
	                                title: tag.title,
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src,
	                                other2: tag2.other,
	                                title2: tag2.title
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
/* 65 */
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
	  }, [_vm._v("下拉刷新...")])]), _vm._m(0), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      padding: "10",
	      backgroundColor: "#FF5B90"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28",
	      marginTop: "10",
	      marginLeft: "20",
	      color: "#fff",
	      padding: "10"
	    }
	  }, [_vm._v("精选美图/SELECTED")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 66 */
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
	  }, [_c('pcimage_bottomtag_hlist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcimage_main_imgalllist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcimageleft_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcimageright_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcimage_paihang', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcimagehot_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcimagejingxuan_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1)], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);