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
	__vue_styles__.push(__webpack_require__(170)
	)

	/* script */
	__vue_exports__ = __webpack_require__(171)

	/* template */
	var __vue_template__ = __webpack_require__(176)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/star/pcstar_hot_pager.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-182098f9"
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

/***/ 3:
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

/***/ 4:
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

/***/ 5:
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

/***/ 6:
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
	    pc_top_paihang:"https://www.4493.com/top/xinggan.html",
	    pc_tag:"https://www.4493.com/tag/%D1%FD%D1%DE/",
	    pc_xilie:"https://www.4493.com/xilie.html",
	    pc_xilie_top:"https://gg.dsxdn.com/4493/xilie_top.js",
	    pc_mingxing:"https://www.4493.com/star/liuyan/",
	    pc_mingxing_tag:"https://www.4493.com/mingxingxiezhen/",
	    pc_mingxing_section:"https://www.4493.com/star/section",
	    pc_star_main:"https://www.4493.com/star/",
	    pc_home_jingxuan:"https://gg.dsxdn.com/4493/home_jingxuan.js"


	};
	exports.getpc_home_jingxuan = function () {
	    var url = MEITU.pc_home_jingxuan;
	    console.log('pc_home_jingxuan==' + url);
	    return url;
	};
	exports.getpc_star_main = function () {
	    var url = MEITU.pc_star_main;
	    console.log('pc_star_main==' + url);
	    return url;
	};
	exports.getpc_mingxing_section = function () {
	    var url = MEITU.pc_mingxing_section;
	    console.log('pc_mingxing_section==' + url);
	    return url;
	};
	exports.getpc_mingxing_tag = function () {
	    var url = MEITU.pc_mingxing_tag;
	    console.log('pc_mingxing_tag==' + url);
	    return url;
	};
	exports.getpc_mingxing = function () {
	    var url = MEITU.pc_mingxing;
	    console.log('pc_mingxing==' + url);
	    return url;
	};
	exports.getpc_xilie_top = function () {
	    var url = MEITU.pc_xilie_top;
	    console.log('pc_xilie_top==' + url);
	    return url;
	};
	exports.getpc_xilie = function () {
	    var url = MEITU.pc_xilie;
	    console.log('pc_xilie==' + url);
	    return url;
	};
	exports.getpc_tag = function () {
	    var url = MEITU.pc_tag;
	    console.log('pc_tag==' + url);
	    return url;
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

/***/ 7:
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

/***/ 13:
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

/***/ 14:
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
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcinterest_hlist_item: _pcinterest_hlist_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xingganmote(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "你可能感兴趣的类型：",
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
	                self.taghref = meitu.getpc_xingganmote();
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
	            weexMeiu4493JsoupModule.pcinterestline(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcinterestline"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcinterestline"
	                        };
	                        weexEventModule.queryCache(paramsCache, function (e) {
	                            console.log('queryCache==' + e);
	                            var json = JSON.parse(e);
	                            self.parseJSON(json);
	                        });
	                    }
	                }
	            });
	        },
	        parseJSON: function parseJSON(json) {
	            var self = this;
	            for (var i = 0; i < json.list.length; i++) {
	                var tag = json.list[i];
	                tag.id = i + 1;
	                self.stockArray.push(tag);
	            }
	        }

	    }

	};

/***/ }),

/***/ 15:
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

/***/ 16:
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

/***/ 17:
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
	            var name = "star/pcstar_hot_pager";
	            if (id == 5) {
	                name = "paihang/pctop_left_imglist";
	            } else {
	                name = "star/pcstar_hot_pager";
	            }
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

/***/ 18:
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

/***/ 19:
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
	  })), _c('div', {
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
	  }, [_vm._v(_vm._s(_vm.other))])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 22:
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

/***/ 23:
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

/***/ 24:
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
	            console.log('main list===' + e);
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

/***/ 25:
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

/***/ 34:
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/childnav/pcinterest_hlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1f6eaaf1"
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

/***/ 170:
/***/ (function(module, exports) {

	module.exports = {
	  "imagepager": {
	    "width": 750,
	    "margin": 1,
	    "height": 350
	  },
	  "sliderpager": {
	    "width": 750,
	    "margin": 1,
	    "height": 350
	  },
	  "framepager": {
	    "width": 750,
	    "flexDirection": "column",
	    "height": 350
	  },
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
	    "flex": 1,
	    "alignItems": "center",
	    "justifyContent": "center",
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
	    "flex": 1,
	    "height": 2
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

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcstar_imgscroller = __webpack_require__(172);

	var _pcstar_imgscroller2 = _interopRequireDefault(_pcstar_imgscroller);

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
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var storage = weex.requireModule('storage');

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meituba = __webpack_require__(6);
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcstar_imgscroller: _pcstar_imgscroller2.default,
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
	            title: '最新',
	            navBar_display: true,
	            shown: false,
	            screenHeight: 0,
	            platform: 'unknown',
	            //            left_line_color: 'select_line_color-0',
	            //            right_line_color: 'unselect_line_color-0',
	            buttomData: [],
	            davNum: 0, //我的观点数
	            davmargin: 0,
	            taghref: meituba.getpc_star(),
	            pageNo: '0'
	        }, _defineProperty(_ref, 'shown', false), _defineProperty(_ref, 'leftsrc', './images/back.png'), _defineProperty(_ref, 'stockArray', []), _ref;
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
	        this.refresh();
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
	        todetail: function todetail(e, alt) {
	            weexEventModule.startWebViewActivity(e);
	        },
	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meituba.getpc_star();
	                self.pageNo = '0';
	                console.log('not from tabbar');
	            }
	            var url = self.taghref;

	            //https://www.4493.com/star/yuhuomeinv/index-hot-1.htm
	            //https://www.4493.com/star/yuhuomeinv/
	            for (var i = 0; i < 2; i++) {
	                var tag = {
	                    alt: "最新",
	                    href: url
	                };
	                if (i == 1) {
	                    tag.alt = "热门";
	                    tag.href = url + "index-hot-1.htm";
	                }

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
	                //                    if(i==0){
	                //                        var taghref = tab.href;
	                //                        console.log("taghref==="+taghref)
	                //                        storage.setItem('taghref',taghref,function(s){
	                //                            console.log('set [taghref]:'+JSON.stringify(s));
	                //
	                //                        });
	                //                    }
	            }

	            var params = {
	                url: self.taghref,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcstarpager(params, function (e) {
	                var json = JSON.parse(e);
	                self.stockArray.splice(0, self.stockArray.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcstarpager"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcstarpager"
	                        };
	                        weexEventModule.queryCache(paramsCache, function (e) {
	                            console.log('queryCache==' + e);
	                            var json = JSON.parse(e);
	                            self.parseJSON(json);
	                        });
	                    }
	                }
	            });
	        },
	        parseJSON: function parseJSON(json) {
	            var self = this;
	            for (var i = 0; i < json.list.length; i++) {
	                var tag = json.list[i];
	                self.stockArray.push(tag);
	            }
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

	                    //                        var taghref = tabItem.href;
	                    //                        console.log("taghref==="+taghref)
	                    //                        storage.setItem('taghref',taghref,function(s){
	                    //                            console.log('set [taghref]:'+JSON.stringify(s));
	                    //
	                    //                        });
	                    //                        const el = this.$refs.item10[0];
	                    //                        if (this.$vm('point_sub' + i).isFirst == 1) {
	                    //                            this.$vm('point_sub' + i).autoRefresh();
	                    //                        }


	                    console.log("i===" + i);
	                    if (i == 0) {
	                        if (this.$refs.point_sub0[0].isFirst == 1) {
	                            console.log("autoRefresh i===" + i);
	                            this.$refs.point_sub0[0].autoRefresh();
	                        }
	                    } else if (i == 1) {
	                        if (this.$refs.point_sub1[0].isFirst == 1) {
	                            this.$refs.point_sub1[0].autoRefresh();
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
	    mounted: function mounted() {

	        this.indexMetting = 0;
	        this.setIndex(this.indexMetting);
	        console.log("setIndex==" + 0);
	    }
	};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(173)
	)

	/* script */
	__vue_exports__ = __webpack_require__(174)

	/* template */
	var __vue_template__ = __webpack_require__(175)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/star/pcstar_imgscroller.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2f38c2b6"
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

/***/ 173:
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcpic_imglist_item = __webpack_require__(22);

	var _pcpic_imglist_item2 = _interopRequireDefault(_pcpic_imglist_item);

	var _pcinterest_hlist = __webpack_require__(38);

	var _pcinterest_hlist2 = _interopRequireDefault(_pcinterest_hlist);

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

	var modal = weex.requireModule('modal');
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var utils = __webpack_require__(34);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcpic_imglist_item: _pcpic_imglist_item2.default,
	        navbar_v: _navbar_v2.default,
	        pcinterest_hlist: _pcinterest_hlist2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_star(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "御姐系列",
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
	        //            self.refresh();
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
	        autoRefresh: function autoRefresh() {
	            console.log('autoRefresh');
	            var self = this;
	            //                storage.getItem('taghref',function(s){
	            //                    console.log('get taghref result:'+JSON.stringify(s));
	            //                    var staghref = s.data;
	            //                    if(staghref!=undefined){
	            //                        self.taghref = staghref;
	            //                    }
	            //                    console.log('taghref=='+self.taghref);
	            self.refresh();
	            //                });
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
	                self.taghref = meitu.getpc_star();
	            }
	            var url = self.taghref;
	            if (self.pageNo == 1) {
	                url = self.taghref;
	            } else {
	                //https://www.4493.com/star/yujiekong/index-hot-1.htm
	                //https://www.4493.com/star/yujiekong/index-hot-2.htm
	                //https://www.4493.com/star/yujiekong/
	                //https://www.4493.com/star/yujiekong/index-1.htm
	                if (self.taghref.indexOf("index-hot-") != -1) {
	                    url = self.taghref.replaceAllStr("1.htm", "") + self.pageNo + ".htm";
	                } else {
	                    url = self.taghref + "index-" + self.pageNo + ".htm";
	                }
	            }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcpiclist(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcpiclist-scroll" + self.pageNo
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcpiclist-scroll" + self.pageNo
	                        };
	                        weexEventModule.queryCache(paramsCache, function (e) {
	                            console.log('queryCache==' + e);
	                            var json = JSON.parse(e);
	                            self.parseJSON(json);
	                        });
	                    }
	                }
	            });
	        },
	        parseJSON: function parseJSON(json) {
	            var self = this;
	            for (var i = 0; i < json.list.length; i += 2) {
	                var tag = json.list[i];
	                var tag2 = json.list[i + 1];
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

	};

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "click": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('div', [_c('pcpic_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading,
	      "click": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator_loading"]
	  }, [_vm._v("加载更多...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["content"]
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    }
	  }), _c('slider', {
	    staticClass: ["sliderpager"],
	    attrs: {
	      "interval": "3000",
	      "autoPlay": "false"
	    }
	  }, _vm._l((_vm.stockArray), function(img) {
	    return _c('div', {
	      staticClass: ["framepager"]
	    }, [_c('image', {
	      staticClass: ["imagepager"],
	      attrs: {
	        "resize": "cover",
	        "src": img.src
	      },
	      on: {
	        "click": function($event) {
	          _vm.todetail(img.href, img.alt)
	        }
	      }
	    })])
	  })), _c('scroller', {
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
	        width: "750"
	      }
	    }, [_c('pcstar_imgscroller', {
	      ref: item.id,
	      refInFor: true,
	      attrs: {
	        "taghref": item.href
	      }
	    })], 1)
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });