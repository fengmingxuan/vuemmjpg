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
	__vue_styles__.push(__webpack_require__(141)
	)

	/* script */
	__vue_exports__ = __webpack_require__(142)

	/* template */
	var __vue_template__ = __webpack_require__(144)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/main/pcmain_tags_pager.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-588df800"
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ba190a6"
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
	    "backgroundColor": "#1592e5"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#1592e5"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#1592e5"
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

	var meituba = __webpack_require__(6);
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
	            return meituba.getImageUrl(url);
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

	var MEITUBA = {
	    pc_meituba:"http://www.meituba.com/",
	    pc_yijing:"http://www.meituba.com/yijing/",
	    pc_meinv:"http://www.meituba.com/meinv/",
	    pc_other:"http://www.meituba.com/tstx/ylbg/",
	    pc_other_main:"http://www.meituba.com/tstx/",
	    pc_article:"http://www.meituba.com/yijing/35141.html",
	    pc_other_article:"http://www.meituba.com/tstx/ylbg/62425.html",
	    pc_tag:"http://www.meituba.com/tag/",
	    pc_tag_img:"http://www.meituba.com/tag/DGC.html",
	    pc_search:"http://www.meituba.com/plus/search.php?q=%E5%A6%B9%E5%A6%B9",
	    pc_search_url:"http://www.meituba.com/plus/search.php?q=",
	    pc_new:"http://www.meituba.com/new/"

	};
	exports.getpc_new = function () {
	    var url = MEITUBA.pc_new;
	    console.log('pc_new==' + url);
	    return url;
	};
	exports.getpc_search_url = function () {
	    var url = MEITUBA.pc_search_url;
	    console.log('pc_search_url==' + url);
	    return url;
	};
	exports.getpc_search = function () {
	    var url = MEITUBA.pc_search;
	    console.log('pc_search==' + url);
	    return url;
	};
	exports.getpc_tag_img = function () {
	    var url = MEITUBA.pc_tag_img;
	    console.log('pc_tag_img==' + url);
	    return url;
	};
	exports.getpc_tag = function () {
	    var url = MEITUBA.pc_tag;
	    console.log('pc_tag==' + url);
	    return url;
	};
	exports.getpc_other_article = function () {
	    var url = MEITUBA.pc_other_article;
	    console.log('pc_other_article==' + url);
	    return url;
	};
	exports.getpc_article = function () {
	    var url = MEITUBA.pc_article;
	    console.log('pc_article==' + url);
	    return url;
	};
	exports.getpc_other_main = function () {
	    var url = MEITUBA.pc_other_main;
	    console.log('pc_other_main==' + url);
	    return url;
	};
	exports.getpc_other = function () {
	    var url = MEITUBA.pc_other;
	    console.log('pc_other==' + url);
	    return url;
	};
	exports.getpc_meinv = function () {
	    var url = MEITUBA.pc_meinv;
	    console.log('pc_meinv==' + url);
	    return url;
	};
	exports.getpc_yijing = function () {
	    var url = MEITUBA.pc_yijing;
	    console.log('pc_yijing==' + url);
	    return url;
	};
	exports.getpc_meituba = function () {
	    var url = MEITUBA.pc_meituba;
	    console.log('pc_meituba==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meituba' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meituba' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/meituba') || host.endsWith(':12580/meituba')) {
	                host = host.replace('/meituba', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meituba/build/src/' : BASE_URL.HTTP + host + '/meituba/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/meituba/build/src/';
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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(41)
	)

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(43)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/channelimg/pctaglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-97a63034"
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

/***/ 41:
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "margin": 10,
	    "flexDirection": "column",
	    "borderRadius": 10,
	    "height": 50,
	    "alignContent": "center",
	    "alignItems": "center",
	    "padding": 10
	  },
	  "txt": {
	    "fontSize": 25,
	    "color": "#ffffff",
	    "alignContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ }),

/***/ 42:
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

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meituba = __webpack_require__(6);
	module.exports = {
	    created: function created() {},

	    props: {
	        stockitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(e, alt) {
	            weexEventModule.startWebViewActivity(e);
	            //                var name = "content/pccontentlist";
	            //                if(e.indexOf('.shtml')!=-1){
	            //                    name = "content/pccontentlist";
	            //                }else{
	            //                    name = "search/pcimglist_notitlebar_autorefresh";
	            //                }
	            //                var params={
	            //                    url: meituba.getDefaultUrl(name),
	            //                    animated: "true",
	            //                    options:{
	            //                        taghref: e,
	            //                        title:alt
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

/***/ 43:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flex: "1",
	      margin: "5px",
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    style: {
	      backgroundColor: _vm.stockitem.backgroundColor
	    },
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.alt)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("  " + _vm._s(_vm.stockitem.alt))])]), _c('div', {
	    staticStyle: {
	      width: "20"
	    }
	  }), _c('div', {
	    staticClass: ["news-content"],
	    style: {
	      backgroundColor: _vm.stockitem.backgroundColor2
	    },
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href2, _vm.stockitem.al2t)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("  " + _vm._s(_vm.stockitem.alt2))])]), _c('div', {
	    staticStyle: {
	      width: "20"
	    }
	  }), _c('div', {
	    staticClass: ["news-content"],
	    style: {
	      backgroundColor: _vm.stockitem.backgroundColor3
	    },
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href3, _vm.stockitem.alt3)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(" " + _vm._s(_vm.stockitem.alt3))])]), _c('div', {
	    staticStyle: {
	      width: "20"
	    }
	  }), _c('div', {
	    staticClass: ["news-content"],
	    style: {
	      backgroundColor: _vm.stockitem.backgroundColor4
	    },
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.stockitem.href4, _vm.stockitem.alt4)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("  " + _vm._s(_vm.stockitem.alt4))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 121:
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pctaglist_item = __webpack_require__(40);

	var _pctaglist_item2 = _interopRequireDefault(_pctaglist_item);

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
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pctaglist_item: _pctaglist_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    //        props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meituba.getpc_meituba(),
	            pageNo: 0,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "唯美意境",
	            isFirst: 1

	        };
	    },

	    created: function created() {
	        //            var self = this;
	        //            var ctaghref = self.$getConfig().taghref;
	        //            if(ctaghref!=undefined){
	        //                self.taghref = ctaghref;
	        //            }
	        //            var ctitle = self.$getConfig().title;
	        //            if(ctitle!=undefined){
	        //                self.title = ctitle;
	        //            }
	        //            console.log('title=='+self.title+';taghref=='+self.taghref)
	        //            setTimeout(() => {
	        //                self.refresh();
	        //            }, 100)


	    },
	    methods: {
	        autoRefresh: function autoRefresh(event) {
	            var self = this;
	            storage.getItem('pageNo', function (s) {
	                console.log('get pageNo result:' + JSON.stringify(s));
	                var spageNo = s.data;
	                if (spageNo != undefined) {
	                    self.pageNo = spageNo;
	                }
	                console.log('pageNo==' + self.pageNo);
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
	                self.taghref = meituba.getpc_meituba();
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
	            weexMeitubaJsoupModule.pcmainbox(params, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.stockArray.splice(0, self.stockArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 4) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = {};
	                            }
	                            var tag3 = json.list[i + 2];
	                            if (tag3 == undefined) {
	                                tag3 = {};
	                            }
	                            var tag4 = json.list[i + 3];
	                            if (tag4 == undefined) {
	                                tag4 = {};
	                            }
	                            var item = {
	                                href: tag.href,
	                                alt: tag.alt,
	                                id: i,
	                                backgroundColor: '#f60',
	                                href2: tag2.href,
	                                alt2: tag2.alt,
	                                id2: i + 1,
	                                backgroundColor2: '#09f',
	                                href3: tag3.href,
	                                alt3: tag3.alt,
	                                id3: i + 2,
	                                backgroundColor3: '#7a7a7a',
	                                href4: tag4.href,
	                                alt4: tag4.alt,
	                                id4: i + 3,
	                                backgroundColor4: '#393'
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

/***/ 123:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('list', {
	    staticClass: ["list"],
	    staticStyle: {
	      backgroundColor: "#f5f5f5"
	    },
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
	    }, [_c('pctaglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 141:
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcmain_box = __webpack_require__(143);

	var _pcmain_box2 = _interopRequireDefault(_pcmain_box);

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
	var storage = weex.requireModule('storage');

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	exports.default = {
	    components: {
	        pcmain_box: _pcmain_box2.default,
	        navbar_v: _navbar_v2.default

	    },
	    props: ['taghref'],
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
	            taghref: meituba.getpc_meituba(),
	            pageNo: '0'

	        };
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
	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meituba.getpc_meituba();
	                self.pageNo = '0';
	                console.log('not from tabbar');
	            }
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            console.log('refresh params== ' + JSON.stringify(params));
	            weexMeitubaJsoupModule.pcmaintagtype(url, function (e) {
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

	                    var pageNo = tabItem.pageNo;
	                    console.log("pageNo===" + pageNo);
	                    storage.setItem('pageNo', pageNo, function (s) {
	                        console.log('set [pageNo]:' + JSON.stringify(s));
	                    });
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
	                    } else if (i == 2) {
	                        if (this.$refs.point_sub2[0].isFirst == 1) {
	                            this.$refs.point_sub2[0].autoRefresh();
	                            var _eltab2 = this.$refs.tab2[0];
	                            dom.scrollToElement(_eltab2, { offset: 2 });

	                            var _elline2 = this.$refs.line2[0];
	                            dom.scrollToElement(_elline2, { offset: 2 });
	                        }
	                    } else if (i == 3) {
	                        if (this.$refs.point_sub3[0].isFirst == 1) {
	                            this.$refs.point_sub3[0].autoRefresh();
	                            var _eltab3 = this.$refs.tab3[0];
	                            dom.scrollToElement(_eltab3, { offset: 3 });

	                            var _elline3 = this.$refs.line3[0];
	                            dom.scrollToElement(_elline3, { offset: 3 });
	                        }
	                    } else if (i == 4) {
	                        if (this.$refs.point_sub4[0].isFirst == 1) {
	                            this.$refs.point_sub4[0].autoRefresh();
	                            var _eltab4 = this.$refs.tab4[0];
	                            dom.scrollToElement(_eltab4, { offset: 4 });

	                            var _elline4 = this.$refs.line4[0];
	                            dom.scrollToElement(_elline4, { offset: 4 });
	                        }
	                    } else if (i == 5) {
	                        if (this.$refs.point_sub5[0].isFirst == 1) {
	                            this.$refs.point_sub5[0].autoRefresh();
	                            var _eltab5 = this.$refs.tab5[0];
	                            dom.scrollToElement(_eltab5, { offset: 5 });

	                            var _elline5 = this.$refs.line5[0];
	                            dom.scrollToElement(_elline5, { offset: 5 });
	                        }
	                    } else if (i == 6) {
	                        if (this.$refs.point_sub6[0].isFirst == 1) {
	                            this.$refs.point_sub6[0].autoRefresh();
	                            var _eltab6 = this.$refs.tab6[0];
	                            dom.scrollToElement(_eltab6, { offset: 6 });

	                            var _elline6 = this.$refs.line6[0];
	                            dom.scrollToElement(_elline6, { offset: 6 });
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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(121)
	)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(123)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/main/pcmain_box.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-44985978"
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

/***/ 144:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["content"]
	  }, [_c('scroller', {
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
	    }, [_c('pcmain_box', {
	      ref: item.id,
	      refInFor: true
	    })], 1)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });