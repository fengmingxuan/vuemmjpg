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
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/cat/mtabtags.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9437cfbc"
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _mtabtags_item_v = __webpack_require__(8);

	var _mtabtags_item_v2 = _interopRequireDefault(_mtabtags_item_v);

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        mtabtags_item_v: _mtabtags_item_v2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: zjito.getm_tab_img(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "看图"
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
	        onloading: function onloading(event) {
	            var _this = this;

	            this.showLoading = 'show';
	            //                this.pageNo = this.pageNo+1;
	            setTimeout(function () {
	                _this.showLoading = 'hide';
	            }, 2000);
	            this.refresh();
	        },
	        fetch: function fetch(event) {
	            //                this.pageNo = this.pageNo+1;
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
	                self.taghref = zjito.getm_tab_img();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+"?idx="+self.pageNo;
	            //                }
	            console.log('url===' + url);
	            //                var params = {
	            //                    url:url,
	            //                    pageNo: self.pageNo
	            //                };
	            weexZjitoJsoupModule.mimgtags(url, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "mimgtags"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "mimgtags"
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
	                self.title = tag.title;
	                self.stockArray.push(tag);
	            }
	        }

	    }

	};

/***/ }),
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-10a33778"
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
	    "backgroundColor": "#ca5e54"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#ca5e54"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#ca5e54"
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

	var zjito = __webpack_require__(6);
	var navigator = weex.requireModule('navigator');

	exports.default = {
	    data: function data() {
	        return {
	            title: 'ZJITO',
	            type: 0,
	            shown: true,
	            showStatusBar: 0,
	            nav_text_top: 0,
	            shownleft: true,
	            leftsrc: './images/menu.png'
	        };
	    },

	    props: ['title'],
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
	        onright: function onright(e) {
	            console.log('navbar == onright');
	            this._parent.onright();
	        },

	        getImgUrl: function getImgUrl(url) {
	            return zjito.getImageUrl(url);
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

	var ZJITO = {
	    pc_search:"http://www.msgao.com/meinv/",
	    pc_search_meinv:"http://www.msgao.com/e/search/result/?searchid=349",
	    pc_content:"http://www.msgao.com/mxmn/15219.html",
	    pc_cat:"http://www.msgao.com/dqfl/",
	    pc_zjito:"http://www.msgao.com/",
	    m_tab_img:"http://m.msgao.com/dqfl/zgnd/",
	    m_content:"http://m.msgao.com/mxmn/15219.html",
	    m_zjito:"http://m.msgao.com/",
	    pc_tupian:"http://www.msgao.com/tpfl/",
	    pc_mingzhan:"http://www.msgao.com/mzxz/",
	    pc_taotu:"http://www.msgao.com/rbtt/",
	    m_hot:"http://m.msgao.com/meinv/",
	    pc_hot:"http://www.msgao.com/meinv/",
	    pc_search_index:"http://www.msgao.com/e/search/index.php"



	};
	exports.getpc_search_index = function () {
	    var url = ZJITO.pc_search_index;
	    console.log('pc_search_index==' + url);
	    return url;
	};
	exports.getpc_hot = function () {
	    var url = ZJITO.pc_hot;
	    console.log('pc_hot==' + url);
	    return url;
	};
	exports.getm_hot = function () {
	    var url = ZJITO.m_hot;
	    console.log('m_hot==' + url);
	    return url;
	};
	exports.getpc_taotu = function () {
	    var url = ZJITO.pc_taotu;
	    console.log('pc_taotu==' + url);
	    return url;
	};
	exports.getpc_mingzhan = function () {
	    var url = ZJITO.pc_mingzhan;
	    console.log('pc_mingzhan==' + url);
	    return url;
	};
	exports.getpc_tupian = function () {
	    var url = ZJITO.pc_tupian;
	    console.log('pc_tupian==' + url);
	    return url;
	};
	exports.getm_zjito = function () {
	    var url = ZJITO.m_zjito;
	    console.log('m_zjito==' + url);
	    return url;
	};
	exports.getm_content = function () {
	    var url = ZJITO.m_content;
	    console.log('m_content==' + url);
	    return url;
	};
	exports.getm_tab_img = function () {
	    var url = ZJITO.m_tab_img;
	    console.log('m_tab_img==' + url);
	    return url;
	};
	exports.getpc_zjito = function () {
	    var url = ZJITO.pc_zjito;
	    console.log('pc_zjito==' + url);
	    return url;
	};
	exports.getpc_cat = function () {
	    var url = ZJITO.pc_cat;
	    console.log('pc_cat==' + url);
	    return url;
	};
	exports.getpc_content = function () {
	    var url = ZJITO.pc_content;
	    console.log('pc_content==' + url);
	    return url;
	};
	exports.getpc_search_meinv = function () {
	    var url = ZJITO.pc_search_meinv;
	    console.log('pc_search_meinv==' + url);
	    return url;
	};
	exports.getpc_search = function () {
	    var url = ZJITO.pc_search;
	    console.log('pc_search==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/zjito' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/zjito' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/zjito') || host.endsWith(':12580/zjito')) {
	                host = host.replace('/zjito', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./zjito/build/src/' : BASE_URL.HTTP + host + '/zjito/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/zjito/build/src/';
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
	      "onclick": _vm.nativeback
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
	      "onclick": _vm.onright
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/cat/mtabtags_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c390cb7"
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
/* 9 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "flexDirection": "column",
	    "width": 100,
	    "height": 80,
	    "borderColor": "#ca5e54",
	    "borderWidth": 1,
	    "borderRadius": 20,
	    "backgroundColor": "#ca5e54",
	    "alignItems": "center",
	    "alignContent": "center",
	    "margin": 10,
	    "padding": 10
	  },
	  "txt": {
	    "fontSize": 23,
	    "flexDirection": "column",
	    "color": "#ffffff",
	    "alignItems": "center",
	    "alignContent": "center"
	  }
	}

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href)
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
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      height: "180px"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "30",
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
	    }, [_c('mtabtags_item_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);