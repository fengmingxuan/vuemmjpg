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
	__vue_styles__.push(__webpack_require__(123)
	)

	/* script */
	__vue_exports__ = __webpack_require__(124)

	/* template */
	var __vue_template__ = __webpack_require__(127)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/menu/mslideoutmenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1146acfe"
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
	    pc_content:"http://www.msgao.com/dqfl/rb/544214.shtml",
	    pc_cat:"http://www.msgao.com/dqfl/",
	    pc_zjito:"http://www.msgao.com/",
	    m_tab_img:"http://m.msgao.com/dqfl/zgnd/",
	    m_content:"http://m.msgao.com/dqfl/rb/544214.shtml",
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pccatgrid_item_v = __webpack_require__(22);

	var _pccatgrid_item_v2 = _interopRequireDefault(_pccatgrid_item_v);

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pccatgrid_item_v: _pccatgrid_item_v2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref', 'pageNo'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: zjito.getpc_cat(),
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
	                self.taghref = zjito.getpc_cat();
	                self.pageNo = 0;
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
	            weexZjitoJsoupModule.pccatlist(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pccatlist"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pccatlist"
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
	            for (var i = 0; i < json.list.length; i += 4) {
	                var tag = json.list[i];
	                var tag2 = json.list[i + 1];
	                if (tag2 == undefined) {
	                    tag2 = {
	                        href: "",
	                        alt: ""
	                    };
	                }
	                var tag3 = json.list[i + 2];
	                if (tag3 == undefined) {
	                    tag3 = {
	                        href: "",
	                        alt: ""
	                    };
	                }
	                var tag4 = json.list[i + 3];
	                if (tag4 == undefined) {
	                    tag4 = {
	                        href: "",
	                        alt: ""
	                    };
	                }
	                self.title = tag.title;
	                var item = {
	                    href: tag.href,
	                    alt: tag.alt,
	                    href2: tag2.href,
	                    alt2: tag2.alt,
	                    href3: tag3.href,
	                    alt3: tag3.alt,
	                    href4: tag4.href,
	                    alt4: tag4.alt
	                };
	                self.stockArray.push(item);
	            }
	        }

	    }

	};

/***/ }),
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/cat/pccatgrid_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-190d8801"
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
	    "marginLeft": 10,
	    "marginRight": 10,
	    "marginBottom": 10,
	    "padding": 10,
	    "flex": 1
	  },
	  "txt": {
	    "fontSize": 30,
	    "color": "#000000"
	  }
	}

/***/ }),
/* 24 */
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

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flex: "1",
	      flexDirection: "row",
	      padding: "10"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])]), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href2)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt2))])]), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href3)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt3))])]), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href4)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt4))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports) {

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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pccatgrid_item_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pccatgrid = __webpack_require__(29);

	var _pccatgrid2 = _interopRequireDefault(_pccatgrid);

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

	exports.default = {
	    components: {
	        pccatgrid: _pccatgrid2.default,
	        navbar_v: _navbar_v2.default

	    },

	    data: function data() {
	        return {
	            taghref: zjito.getpc_cat(),
	            title: "全部导航"
	        };
	    },

	    created: function created() {},
	    methods: {}

	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(20)
	)

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(26)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/cat/pccatgrid.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2bcf5c18"
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
/* 30 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      width: "750"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
	    }
	  }), _c('list', {
	    staticClass: ["list"]
	  }, [_vm._m(0), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pccatgrid', {
	    attrs: {
	      "taghref": _vm.taghref,
	      "pageNo": 0
	    }
	  })], 1), _vm._m(1), _vm._m(2), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pccatgrid', {
	    attrs: {
	      "taghref": _vm.taghref,
	      "pageNo": 1
	    }
	  })], 1), _vm._m(3), _vm._m(4), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pccatgrid', {
	    attrs: {
	      "taghref": _vm.taghref,
	      "pageNo": 2
	    }
	  })], 1), _vm._m(5), _vm._m(6), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pccatgrid', {
	    attrs: {
	      "taghref": _vm.taghref,
	      "pageNo": 3
	    }
	  })], 1), _vm._m(7)])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "40",
	      margin: "20"
	    }
	  }, [_vm._v("地区分类")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      height: "1",
	      backgroundColor: "#282c34"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "40",
	      margin: "20"
	    }
	  }, [_vm._v("图片分类")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      height: "1",
	      backgroundColor: "#282c34"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "40",
	      margin: "20"
	    }
	  }, [_vm._v("名站写真")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      height: "1",
	      backgroundColor: "#282c34"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "40",
	      margin: "20"
	    }
	  }, [_vm._v("日本套图")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      height: "1",
	      backgroundColor: "#282c34"
	    }
	  })])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(66)
	)

	/* script */
	__vue_exports__ = __webpack_require__(67)

	/* template */
	var __vue_template__ = __webpack_require__(72)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/search/mimglist_notitlebar_autorefresh.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-103fd8d5"
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
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcimglist_notitlebar_item_v = __webpack_require__(68);

	var _pcimglist_notitlebar_item_v2 = _interopRequireDefault(_pcimglist_notitlebar_item_v);

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcimglist_notitlebar_item_v: _pcimglist_notitlebar_item_v2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: zjito.getm_content(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "搜索",
	            isFirst: 1,
	            cheight: 1834

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
	            if (this.taghref.indexOf(".shtml") != -1) {
	                this.pageNo = 1;
	            } else {
	                this.pageNo = this.pageNo + 1;
	            }
	            //                this.pageNo = this.pageNo+1;
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
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = zjito.getm_content();
	            }
	            var url = self.taghref;
	            if (self.pageNo == 1) {
	                url = self.taghref;
	            } else {
	                //index_2.shtml
	                url = self.taghref + "index_" + self.pageNo + ".shtml";
	            }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexZjitoJsoupModule.msearchimglist(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "msearchimglist" + self.pageNo
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "msearchimglist" + self.pageNo
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
	                    href2: tag2.href,
	                    alt2: tag2.alt,
	                    src2: tag2.src
	                };
	                self.stockArray.push(item);
	            }
	        }

	    }

	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(69)
	)

	/* script */
	__vue_exports__ = __webpack_require__(70)

	/* template */
	var __vue_template__ = __webpack_require__(71)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/search/pcimglist_notitlebar_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-04adc87d"
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
/* 69 */
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 10
	  },
	  "img": {
	    "width": 350,
	    "height": 450,
	    "backgroundColor": "#e06c75"
	  },
	  "txt": {
	    "fontSize": 30,
	    "width": 350
	  }
	}

/***/ }),
/* 70 */
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

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var zjito = __webpack_require__(6);
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
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "content/pccontentlist";
	            if (e.indexOf('.shtml') != -1) {
	                name = "content/pccontentlist";
	            } else {
	                name = "search/pcimglist_notitlebar_autorefresh";
	            }
	            var params = {
	                url: zjito.getDefaultUrl(name),
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
/* 71 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flex: "1",
	      margin: "10px"
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
/* 72 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('div', [_c('pcimglist_notitlebar_item_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _mimglist_notitlebar_autorefresh = __webpack_require__(65);

	var _mimglist_notitlebar_autorefresh2 = _interopRequireDefault(_mimglist_notitlebar_autorefresh);

	var _mmainslider = __webpack_require__(101);

	var _mmainslider2 = _interopRequireDefault(_mmainslider);

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

	var modal = weex.requireModule('modal');
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        mimglist_notitlebar_autorefresh: _mimglist_notitlebar_autorefresh2.default,
	        navbar_v: _navbar_v2.default,
	        mmainslider: _mmainslider2.default

	    },
	    props: ['taghref', 'pageNo', 'title'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: zjito.getm_zjito(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "搜索",
	            isFirst: 1

	        };
	    },

	    created: function created() {
	        var self = this;
	        //            var ctaghref = self.$getConfig().taghref;
	        //            if(ctaghref!=undefined){
	        //                self.taghref = ctaghref;
	        //            }
	        //            var ctitle = self.$getConfig().title;
	        //            if(ctitle!=undefined){
	        //                self.title = ctitle;
	        //            }
	        console.log('title==' + self.title + ';taghref==' + self.taghref + ';pageNo==' + self.pageNo);

	        self.refresh();
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
	            //                if(this.taghref.indexOf(".shtml") != -1){
	            //                    this.pageNo = 1;
	            //                }else{
	            //                    this.pageNo = this.pageNo+1;
	            //                }
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
	            self.isFirst = 0;
	            if (self.taghref == undefined) {
	                self.taghref = zjito.getm_zjito();
	                //                    self.pageNo=0;
	            }

	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    //index_2.shtml
	            //                    url = self.taghref+"index_"+self.pageNo+".shtml";
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            //                weexZjitoJsoupModule.parsemainimglist(params,function(e){
	            //                    var json = JSON.parse(e);
	            ////                    if(self.pageNo==1){
	            //                        self.stockArray.splice(0, self.stockArray.length);
	            ////                    }
	            //                    if (json.list) {
	            //                        if (json.list && json.list.length > 0) {
	            //                            for (var i = 0; i < json.list.length; i+=2) {
	            //                                var tag = json.list[i];
	            //                                var tag2 = json.list[i+1];
	            //                                var item={
	            //                                    href:tag.href,
	            //                                    alt:tag.alt,
	            //                                    src:tag.src,
	            //                                    href2:tag2.href,
	            //                                    alt2:tag2.alt,
	            //                                    src2:tag2.src,
	            //                                };
	            //                                self.stockArray.push(item);
	            //                            }
	            //                        }
	            //                    }
	            //
	            //
	            //                });
	        }

	    }

	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(102)
	)

	/* script */
	__vue_exports__ = __webpack_require__(103)

	/* template */
	var __vue_template__ = __webpack_require__(104)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/main/mmainslider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c240f19"
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
/* 102 */
/***/ (function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 750,
	    "height": 550
	  },
	  "slider": {
	    "width": 750,
	    "height": 550
	  },
	  "frame": {
	    "width": 750,
	    "flexDirection": "column",
	    "height": 550
	  },
	  "txt": {
	    "marginTop": 10,
	    "fontSize": 30,
	    "color": "#ffffff"
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 550,
	    "top": 250,
	    "left": 10,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "rgb(40, 96, 144)"
	  }
	}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

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
	//
	//
	//
	//
	//
	//
	//
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
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        navbar_v: _navbar_v2.default

	    },
	    data: function data() {
	        return {
	            imageList: [],
	            taghref: zjito.getm_zjito(),
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
	        todetail: function todetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        },
	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexZjitoJsoupModule.mmainslider(url, function (e) {
	                var json = JSON.parse(e);
	                self.imageList.splice(0, self.imageList.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "mmainslider"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "mmainslider"
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
	                self.imageList.push(tag);
	            }
	        }

	    }
	};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "3000",
	      "autoPlay": "true"
	    }
	  }, [_c('indicator', {
	    staticClass: ["indicator"]
	  }), _vm._l((_vm.imageList), function(img) {
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
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      width: "750",
	      height: "1330"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
	    }
	  }), _c('scroller', [_c('div', [_c('mmainslider')], 1), _c('div', {
	    staticStyle: {
	      flex: "1",
	      alignContent: "flex-start",
	      alignItems: "flex-start"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "40",
	      margin: "20"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', [_c('mimglist_notitlebar_autorefresh', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row"
	  },
	  "panel": {
	    "width": 750,
	    "height": 1330
	  },
	  "panel-0": {
	    "left": 0
	  },
	  "panel-1": {
	    "left": 500
	  },
	  "menu": {
	    "backgroundColor": "#dddddd",
	    "position": "absolute",
	    "width": 750,
	    "alignItems": "flex-start",
	    "justifyContent": "flex-start"
	  },
	  "menu-0": {
	    "right": -750
	  },
	  "menu-1": {
	    "right": 0
	  },
	  "btn-hamburger": {
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "flexDirection": "row",
	    "width": 750
	  },
	  "tooltip": {
	    "fontSize": 30,
	    "color": "#000000"
	  },
	  "menu-header": {
	    "alignItems": "flex-start",
	    "justifyContent": "flex-start",
	    "position": "absolute",
	    "width": 750,
	    "right": 0
	  },
	  "menu-header-0": {
	    "right": 0
	  }
	}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mmainimgscroller = __webpack_require__(125);

	var _mmainimgscroller2 = _interopRequireDefault(_mmainimgscroller);

	var _pccatgrid_leftmenu = __webpack_require__(126);

	var _pccatgrid_leftmenu2 = _interopRequireDefault(_pccatgrid_leftmenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
	//
	//
	//
	//
	//
	//
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
	var storage = weex.requireModule('storage');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        pccatgrid_leftmenu: _pccatgrid_leftmenu2.default,
	        mmainimgscroller: _mmainimgscroller2.default

	    },
	    data: function data() {
	        return _defineProperty({
	            srcmenu: zjito.getUrl('html/images/menu.png'),
	            showmenu: 0,
	            deviceHeight: 0,
	            platform: '',
	            menuright: -750,
	            panelleft: 0
	        }, 'deviceHeight', 1980);
	    },
	    created: function created() {
	        var self = this;
	        self.platform = self.$getConfig().env.platform;
	        self.deviceHeight = self.$getConfig().env.deviceHeight;
	    },
	    ready: function ready() {
	        var self = this;
	    },

	    methods: {
	        toggle: function toggle(e) {
	            if (this.showmenu == 0) {
	                this.showmenu = 1;
	                this.menuright = 0;
	                this.panelleft = 650;
	            } else {
	                this.showmenu = 0;
	                this.menuright = -750;
	                this.panelleft = 0;
	            }
	        },
	        close: function close(e) {
	            this.showmenu = 0;
	            this.menuright = -750;
	            this.panelleft = 0;
	        },
	        onright: function onright(e) {
	            //                var name = "search/m_search";
	            //                var url = yoka.getDefaultUrl(name);
	            //                weexNavigatorModule.push({
	            //                    url:url,
	            //                    animated: "true"
	            //                }, e => {
	            //
	            //                });
	        }

	    }
	};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(99)
	)

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(105)
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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/main/mmainimgscroller.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0a74dcf5"
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(27)
	)

	/* script */
	__vue_exports__ = __webpack_require__(28)

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
	__vue_options__.__file = "/Users/guangjing.feng/git/vuemmjpg/zjito/src/cat/pccatgrid_leftmenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-03b119dd"
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
/* 127 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["menu"],
	    style: {
	      right: _vm.menuright,
	      height: _vm.deviceHeight
	    },
	    attrs: {
	      "id": "menu"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, [_c('div', {
	    staticClass: ["menu-header"]
	  }, [_c('pccatgrid_leftmenu')], 1)]), _c('div', {
	    staticClass: ["panel"],
	    style: {
	      left: _vm.panelleft
	    },
	    attrs: {
	      "id": "main"
	    },
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('mmainimgscroller')], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);