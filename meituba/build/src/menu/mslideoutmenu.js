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
	__vue_styles__.push(__webpack_require__(193)
	)

	/* script */
	__vue_exports__ = __webpack_require__(194)

	/* template */
	var __vue_template__ = __webpack_require__(212)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/menu/mslideoutmenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1c61ed42"
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
	    pc_new:"http://www.meituba.com/new/",
	    m_channel:"http://m.meituba.com/xinggan/",
	    m_article:"http://m.meituba.com/xinggan/60954.html",
	    m_meinv:"http://m.meituba.com/meinv/",
	    m_meituba:"http://m.meituba.com/",
	    m_search:"http://m.meituba.com/plus/search.php?q=%E7%BE%8E%E5%A5%B3",
	    m_search_url:"http://m.meituba.com/plus/search.php?q=",
	    m_tags:"http://m.meituba.com/tag/"

	};
	exports.getm_tags= function () {
	    var url = MEITUBA.m_tags;
	    console.log('m_tags==' + url);
	    return url;
	};
	exports.getm_search_url= function () {
	    var url = MEITUBA.m_search_url;
	    console.log('m_search_url==' + url);
	    return url;
	};
	exports.getm_search= function () {
	    var url = MEITUBA.m_search;
	    console.log('m_search==' + url);
	    return url;
	};
	exports.getm_meituba= function () {
	    var url = MEITUBA.m_meituba;
	    console.log('m_meituba==' + url);
	    return url;
	};
	exports.getm_meinv= function () {
	    var url = MEITUBA.m_meinv;
	    console.log('m_meinv==' + url);
	    return url;
	};
	exports.getm_article= function () {
	    var url = MEITUBA.m_article;
	    console.log('m_article==' + url);
	    return url;
	};
	exports.getm_channel = function () {
	    var url = MEITUBA.m_channel;
	    console.log('m_channel==' + url);
	    return url;
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
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "zhuanti/pctag_imglist";
	            if (e.indexOf('m.meituba.com') != -1) {
	                name = "mchannel/mchannel_imglist";
	            } else {
	                name = "zhuanti/pctag_imglist";
	            }
	            var params = {
	                url: meituba.getDefaultUrl(name),
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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(79)
	)

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(81)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/channelimg/pcchannel_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5d20b219"
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

/***/ 79:
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

/***/ 80:
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
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "article/pcarticlelist";
	            if (e.indexOf('m.meituba.com') != -1) {
	                name = "marticle/marticlelist";
	            } else {
	                name = "article/pcarticlelist";
	            }
	            var params = {
	                url: meituba.getDefaultUrl(name),
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

/***/ 81:
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
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.other))])]), _c('div', {
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
	  }, [_vm._v(_vm._s(_vm.stockitem.alt2))]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.other2))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(127)
	)

	/* script */
	__vue_exports__ = __webpack_require__(128)

	/* template */
	var __vue_template__ = __webpack_require__(129)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mainnenu/pcmainnenu_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-acbc93d8"
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

/***/ 127:
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "row",
	    "padding": 5,
	    "backgroundColor": "#ffffff"
	  },
	  "txt": {
	    "fontSize": 30,
	    "color": "#1592E5",
	    "flex": 1
	  }
	}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _pcchannel_imglist_item = __webpack_require__(78);

	var _pcchannel_imglist_item2 = _interopRequireDefault(_pcchannel_imglist_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var weexEventModule = weex.requireModule('weexEventModule'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meituba = __webpack_require__(6);
	module.exports = {
	    created: function created() {},
	    components: {
	        pcchannel_imglist_item: _pcchannel_imglist_item2.default

	    },
	    props: {
	        tpicNitem: {
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

/***/ 129:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px",
	      flexDirection: "column"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.tpicNitem.href, _vm.tpicNitem.title)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.tpicNitem.title))]), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.tpicNitem.more))])]), _c('div', {
	    staticStyle: {
	      backgroundColor: "#1592E5",
	      height: "50px"
	    }
	  }), _vm._l((_vm.tpicNitem.list), function(stockitem) {
	    return _c('div', [_c('pcchannel_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 186:
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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcmainnenu_imglist_item = __webpack_require__(126);

	var _pcmainnenu_imglist_item2 = _interopRequireDefault(_pcmainnenu_imglist_item);

	var _mmain_slider = __webpack_require__(188);

	var _mmain_slider2 = _interopRequireDefault(_mmain_slider);

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

	var modal = weex.requireModule('modal');
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        pcmainnenu_imglist_item: _pcmainnenu_imglist_item2.default,
	        navbar_v: _navbar_v2.default,
	        mmain_slider: _mmain_slider2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            tpicNArray: [],
	            taghref: meituba.getm_meituba(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "唯美意境",
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
	        //            console.log('title=='+self.title+';taghref=='+self.taghref)
	        //
	        self.refresh();
	        //            setTimeout(() => {
	        //                storage.getItem('taghref',function(s){
	        //                    console.log('get taghref result:'+JSON.stringify(s));
	        //                    var staghref = s.data;
	        //                    if(staghref!=undefined){
	        //                        self.taghref = staghref;
	        //                    }
	        //                    console.log('taghref=='+self.taghref);
	        //                    self.refresh();
	        //                });
	        //            }, 2000)
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
	                self.taghref = meituba.getm_meituba();
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
	            weexMeitubaJsoupModule.mmeinv(url, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.tpicNArray.splice(0, self.tpicNArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.tpicNArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(189)
	)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(191)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mchannel/mmain_slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1231d33d"
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

/***/ 189:
/***/ (function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 730,
	    "height": 400,
	    "margin": 10
	  },
	  "slider": {
	    "width": 750
	  },
	  "frame": {
	    "width": 750,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": 500
	  },
	  "txt": {
	    "fontSize": 30,
	    "margin": 10
	  }
	}

/***/ }),

/***/ 190:
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
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {},
	    props: ['taghref'],
	    data: function data() {
	        return {
	            imageList: [],
	            taghref: meituba.getm_meituba(),
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
	            if (self.taghref == undefined) {
	                self.taghref = meituba.getm_meituba();
	            }
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeitubaJsoupModule.mmainpager(url, function (e) {
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

/***/ 191:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      height: "500px"
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
	          _vm.todetail(img.href)
	        }
	      }
	    }), _c('text', {
	      staticClass: ["txt"]
	    }, [_vm._v(_vm._s(img.alt))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
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
	  }, [_c('mmain_slider', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _vm._l((_vm.tpicNArray), function(tpicNitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcmainnenu_imglist_item', {
	      attrs: {
	        "tpicNitem": tpicNitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 193:
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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mmenubox = __webpack_require__(195);

	var _mmenubox2 = _interopRequireDefault(_mmenubox);

	var _mmain_meituba_imglist = __webpack_require__(211);

	var _mmain_meituba_imglist2 = _interopRequireDefault(_mmain_meituba_imglist);

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
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        mmenubox: _mmenubox2.default,
	        mmain_meituba_imglist: _mmain_meituba_imglist2.default

	    },
	    data: function data() {
	        return _defineProperty({
	            srcmenu: meituba.getUrl('html/images/menu.png'),
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(196)
	)

	/* script */
	__vue_exports__ = __webpack_require__(197)

	/* template */
	var __vue_template__ = __webpack_require__(210)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mmenubox/mmenubox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8889858e"
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

/***/ 196:
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _mmenubox_item = __webpack_require__(198);

	var _mmenubox_item2 = _interopRequireDefault(_mmenubox_item);

	var _mmaintaglist = __webpack_require__(206);

	var _mmaintaglist2 = _interopRequireDefault(_mmaintaglist);

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
	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var meituba = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	exports.default = {
	    components: {
	        mmenubox_item: _mmenubox_item2.default,
	        navbar_v: _navbar_v2.default,
	        mmaintaglist: _mmaintaglist2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            tpicNArray: [],
	            taghref: meituba.getm_meituba(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "唯美意境",
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
	        //            console.log('title=='+self.title+';taghref=='+self.taghref)
	        //
	        self.refresh();
	        //            setTimeout(() => {
	        //                storage.getItem('taghref',function(s){
	        //                    console.log('get taghref result:'+JSON.stringify(s));
	        //                    var staghref = s.data;
	        //                    if(staghref!=undefined){
	        //                        self.taghref = staghref;
	        //                    }
	        //                    console.log('taghref=='+self.taghref);
	        //                    self.refresh();
	        //                });
	        //            }, 2000)
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
	                self.taghref = meituba.getm_meituba();
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
	            weexMeitubaJsoupModule.mmenubox(url, function (e) {
	                var json = JSON.parse(e);
	                //                    if(self.pageNo==1){
	                self.tpicNArray.splice(0, self.tpicNArray.length);
	                //                    }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.tpicNArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(199)
	)

	/* script */
	__vue_exports__ = __webpack_require__(200)

	/* template */
	var __vue_template__ = __webpack_require__(205)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mmenubox/mmenubox_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-743ce0ee"
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

/***/ 199:
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "row",
	    "padding": 5,
	    "backgroundColor": "#ffffff"
	  },
	  "txt": {
	    "fontSize": 35,
	    "color": "#1592E5",
	    "padding": 20,
	    "flex": 1
	  },
	  "img": {
	    "width": 450,
	    "height": 500,
	    "borderRadius": 5
	  }
	}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _mmenubox_nav_item = __webpack_require__(201);

	var _mmenubox_nav_item2 = _interopRequireDefault(_mmenubox_nav_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var weexEventModule = weex.requireModule('weexEventModule'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meituba = __webpack_require__(6);
	module.exports = {
	    created: function created() {},
	    components: {
	        mmenubox_nav_item: _mmenubox_nav_item2.default

	    },
	    props: {
	        tpicNitem: {
	            type: Object
	        }
	    },

	    methods: {
	        todetail: function todetail(e, alt) {
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "mchannel/mmain_channel_imglist";
	            //                if(e.indexOf('.shtml')!=-1){
	            //                    name = "content/pccontentlist";
	            //                }else{
	            //                    name = "search/pcimglist_notitlebar_autorefresh";
	            //                }
	            var params = {
	                url: meituba.getDefaultUrl(name),
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
	        toweb: function toweb(e, alt) {
	            weexEventModule.startWebViewActivity(e);
	        }
	    }
	};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(202)
	)

	/* script */
	__vue_exports__ = __webpack_require__(203)

	/* template */
	var __vue_template__ = __webpack_require__(204)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mmenubox/mmenubox_nav_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7700d025"
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

/***/ 202:
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
	  "txt": {
	    "fontSize": 30,
	    "padding": 5
	  }
	}

/***/ }),

/***/ 203:
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
	            //                weexEventModule.startWebViewActivity(e);
	            var name = "mchannel/mchannel_imglist";
	            //                if(e.indexOf('.shtml')!=-1){
	            //                    name = "content/pccontentlist";
	            //                }else{
	            //                    name = "search/pcimglist_notitlebar_autorefresh";
	            //                }
	            var params = {
	                url: meituba.getDefaultUrl(name),
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

/***/ 204:
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
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.alt))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px",
	      flexDirection: "column"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"]
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.tpicNitem.more
	    },
	    on: {
	      "click": function($event) {
	        _vm.toweb(_vm.tpicNitem.href, _vm.tpicNitem.title)
	      }
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "column"
	    }
	  }, [_c('text', {
	    staticClass: ["txt"],
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.tpicNitem.href, _vm.tpicNitem.title)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.tpicNitem.title))]), _vm._l((_vm.tpicNitem.list), function(stockitem) {
	    return _c('div', [_c('mmenubox_nav_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(207)
	)

	/* script */
	__vue_exports__ = __webpack_require__(208)

	/* template */
	var __vue_template__ = __webpack_require__(209)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mmenubox/mmaintaglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-18f36c8c"
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

/***/ 207:
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

/***/ 208:
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
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meituba.getpc_yijing(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "唯美意境",
	            isFirst: 1

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
	        //                console.log('get taghref result:'+JSON.stringify(s));
	        //                var staghref = s.data;
	        //                if(staghref!=undefined){
	        //                    self.taghref = staghref;
	        //                }
	        //                console.log('pre taghref=='+self.taghref);
	        //                self.refresh();
	        //            });
	        //        }, 2000)
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
	                self.taghref = meituba.getpc_yijing();
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
	            weexMeitubaJsoupModule.pctaglists(url, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
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

/***/ 209:
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

/***/ 210:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.tpicNArray), function(tpicNitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('mmenubox_item', {
	      attrs: {
	        "tpicNitem": tpicNitem
	      }
	    })], 1)
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('mmaintaglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1)], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(186)
	)

	/* script */
	__vue_exports__ = __webpack_require__(187)

	/* template */
	var __vue_template__ = __webpack_require__(192)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mchannel/mmain_meituba_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6c0c15c7"
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

/***/ 212:
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
	  }, [_c('mmenubox')], 1)]), _c('div', {
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
	  }, [_c('mmain_meituba_imglist')], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });