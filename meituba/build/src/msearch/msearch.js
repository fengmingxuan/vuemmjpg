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
	__vue_styles__.push(__webpack_require__(218)
	)

	/* script */
	__vue_exports__ = __webpack_require__(219)

	/* template */
	var __vue_template__ = __webpack_require__(220)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/msearch/msearch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e1130776"
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
	    m_meituba:"http://m.meituba.com",
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

/***/ 218:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row",
	    "height": 100
	  },
	  "input": {
	    "fontSize": 40,
	    "flex": 1,
	    "marginTop": 10,
	    "marginLeft": 10,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "color": "#030303",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#ca5e54"
	  },
	  "search": {
	    "width": 120,
	    "padding": 18,
	    "fontSize": 40,
	    "marginTop": 10,
	    "marginRight": 10,
	    "backgroundColor": "#ca5e54",
	    "color": "#ffffff"
	  },
	  "row": {
	    "height": 100,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "paddingLeft": 20,
	    "marginTop": 10
	  },
	  "text": {
	    "fontSize": 45,
	    "color": "#666666",
	    "flex": 1
	  }
	}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
	var weexEventModule = weex.requireModule('weexEventModule');
	var meituba = __webpack_require__(6);
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        navbar_v: _navbar_v2.default
	    },
	    data: function data() {
	        return {
	            key: "",
	            taghref: meituba.getpc_search(),
	            pageNo: 1,
	            hotkeys: [],
	            title: "搜索"
	        };
	    },

	    created: function created() {
	        var self = this;
	        self.refresh();
	    },
	    methods: {
	        oninput: function oninput(event) {
	            console.log('oninput:', event.value);
	            this.key = event.value;
	        },
	        onchange: function onchange(event) {
	            console.log('onchange:', event.value);
	            this.key = event.value;
	        },
	        onfocus: function onfocus(event) {
	            console.log('onfocus:', event.value);
	        },
	        onblur: function onblur(event) {
	            console.log('onblur:', event.value);
	        },
	        tosearch: function tosearch(event) {
	            console.log('tosearch:', this.key);
	            var name = "msearch/msearch_imglist";
	            var params = {
	                url: meituba.getDefaultUrl(name),
	                animated: "true",
	                options: {
	                    taghref: meituba.getm_search_url() + encodeURIComponent(this.key),
	                    title: this.key
	                }
	            };

	            weexNavigatorModule.push(params, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        },
	        refresh: function refresh(event) {
	            var self = this;
	            var url = self.taghref;
	        }
	    }
	};

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', [_c('navbar_v', {
	    attrs: {
	      "title": _vm.title
	    }
	  })], 1), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('input', {
	    ref: "input",
	    staticClass: ["input"],
	    attrs: {
	      "type": "text"
	    },
	    on: {
	      "input": _vm.oninput,
	      "change": _vm.onchange,
	      "focus": _vm.onfocus,
	      "blur": _vm.onblur
	    }
	  }), _c('text', {
	    staticClass: ["search"],
	    on: {
	      "click": _vm.tosearch
	    }
	  }, [_vm._v("搜索")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });