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
	__vue_styles__.push(__webpack_require__(53)
	)

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(63)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/zjito/src/pager/pccat_pager.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-28af6df0"
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/zjito/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4dab9549"
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

/***/ 6:
/***/ (function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
	    HTTP: 'https://',//https:// http://

	};

	var ZJITO = {
	    pc_search:"http://www.zjito.com/search/result?Query=",
	    pc_search_meinv:"http://www.zjito.com/search/result?Query=%E7%BE%8E%E5%A5%B3",
	    pc_content:"http://www.zjito.com/dqfl/rb/544214.shtml",
	    pc_cat:"http://www.zjito.com/dqfl/"

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

/***/ 7:
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

/***/ 53:
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
	    "color": "#666666",
	    "flex": 1,
	    "top": "-5wx",
	    "textAlign": "center"
	  },
	  "tablineclass": {
	    "width": 750,
	    "height": "2wx",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "top_item_line": {
	    "flex": 1,
	    "height": "2wx"
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
	    "flex": 1,
	    "height": "2wx"
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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcimglist_notitlebar = __webpack_require__(55);

	var _pcimglist_notitlebar2 = _interopRequireDefault(_pcimglist_notitlebar);

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

	var dom = weex.requireModule('dom');

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
	var zjito = __webpack_require__(6);
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	exports.default = {
	    components: {
	        pcimglist_notitlebar: _pcimglist_notitlebar2.default,
	        navbar_v: _navbar_v2.default

	    },

	    data: function data() {
	        return {
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
	            taghref: zjito.getpc_cat()
	        };
	    },
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        var cskinType = this.$getConfig().skinType;
	        if (this.platform == 'iOS') {
	            this.screenHeight = this.$getConfig().env.deviceHeight / this.$getConfig().env.scale - 64;
	            this.navBar_display = false;
	            var event_ios = __weex_require_module__('event');
	            event_ios.setNavbarTitle(this.title);
	        }
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
	        refresh: function refresh() {
	            var self = this;
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: 0
	            };
	            weexZjitoJsoupModule.pccatlist(params, function (e) {
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
	                                id: "point_sub" + i,
	                                href: tag.href,
	                                isFirst: 1
	                                // UrlUnSelect:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png"
	                            };
	                            console.log('tab===' + JSON.stringify(tab));
	                            self.buttomData.push(tab);
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
	                    //                        const el = this.$refs.item10[0];
	                    //                        if (this.$vm('point_sub' + i).isFirst == 1) {
	                    //                            this.$vm('point_sub' + i).autoRefresh();
	                    //                        }
	                    console.log("i===" + i);
	                    if (i == 0) {
	                        if (this.$refs.point_sub0[0].isFirst == 1) {
	                            this.$refs.point_sub0[0].autoRefresh();
	                        }
	                    } else if (i == 1) {
	                        if (this.$refs.point_sub1[0].isFirst == 1) {
	                            this.$refs.point_sub1[0].autoRefresh();
	                        }
	                    } else if (i == 2) {
	                        if (this.$refs.point_sub2[0].isFirst == 1) {
	                            this.$refs.point_sub2[0].autoRefresh();
	                        }
	                    } else if (i == 3) {
	                        if (this.$refs.point_sub3[0].isFirst == 1) {
	                            this.$refs.point_sub3[0].autoRefresh();
	                        }
	                    } else if (i == 4) {
	                        if (this.$refs.point_sub4[0].isFirst == 1) {
	                            this.$refs.point_sub4[0].autoRefresh();
	                        }
	                    } else if (i == 5) {
	                        if (this.$refs.point_sub5[0].isFirst == 1) {
	                            this.$refs.point_sub5[0].autoRefresh();
	                        }
	                    } else if (i == 6) {
	                        if (this.$refs.point_sub6[0].isFirst == 1) {
	                            this.$refs.point_sub6[0].autoRefresh();
	                        }
	                    } else if (i == 7) {
	                        if (this.$refs.point_sub7[0].isFirst == 1) {
	                            this.$refs.point_sub7[0].autoRefresh();
	                        }
	                    } else if (i == 8) {
	                        if (this.$refs.point_sub8[0].isFirst == 1) {
	                            this.$refs.point_sub8[0].autoRefresh();
	                        }
	                    }
	                } else {
	                    tabItem.imgUrl = tabItem.imgUrlUnSelect;
	                    tabItem.itemNameColor = "item_text-" + this.skinType;
	                    tabItem.itemLineColor = "unselect_line_color-" + this.skinType;
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(56)
	)

	/* script */
	__vue_exports__ = __webpack_require__(57)

	/* template */
	var __vue_template__ = __webpack_require__(62)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/zjito/src/search/pcimglist_notitlebar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3758443e"
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

/***/ 56:
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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcimglist_notitlebar_item_v = __webpack_require__(58);

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

	exports.default = {
	    components: {
	        pcimglist_notitlebar_item_v: _pcimglist_notitlebar_item_v2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['ref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: zjito.getpc_content(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "搜索",
	            isFirst: 1,
	            ref: ''
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
	    },
	    methods: {
	        autoRefresh: function autoRefresh(event) {
	            this.refresh();
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
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    url = self.taghref;
	            //                }else{
	            //                    url = self.taghref+"&PageIndex="+self.pageNo;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexZjitoJsoupModule.pcsearchimglist(params, function (e) {
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
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                src2: tag2.src
	                            };
	                            self.stockArray.push(item);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),

/***/ 58:
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/zjito/src/search/pcimglist_notitlebar_item_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e91bbbd0"
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

/***/ 59:
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1
	  },
	  "img": {
	    "width": 350,
	    "height": 450
	  },
	  "txt": {
	    "opacity": 0.3,
	    "fontSize": 30
	  }
	}

/***/ }),

/***/ 60:
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

/***/ 61:
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
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])]), _c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href2)
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

/***/ 62:
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
	    }, [_c('pcimglist_notitlebar_item_v', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["content"]
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
	    }
	  }), _c('scroller', {
	    staticClass: ["tabclass"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.buttomData), function(item) {
	    return _c('div', {
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
	      staticClass: ["item_text"]
	    }, [_vm._v(_vm._s(item.itemName))])])
	  })), _vm._m(0), _c('slider', {
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
	    return _c('div', [_c('pcimglist_notitlebar', {
	      ref: item.id,
	      refInFor: true
	    })], 1)
	  }))], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["tablineclass"]
	  }, [_c('div', {
	    staticClass: ["top_item_line"],
	    attrs: {
	      "repeat": "item in buttomData"
	    }
	  }, [_c('div', {
	    staticClass: ["lineClass"]
	  })])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });