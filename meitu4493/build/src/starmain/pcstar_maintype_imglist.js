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
	__vue_styles__.push(__webpack_require__(189)
	)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(198)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/starmain/pcstar_maintype_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4afb7f56"
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(95)
	)

	/* script */
	__vue_exports__ = __webpack_require__(96)

	/* template */
	var __vue_template__ = __webpack_require__(97)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/starsection/pcstar_section_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1909a50e"
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

/***/ 95:
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

/***/ 96:
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
	            var name = "mingxing/pcmingxing_imglist";
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

/***/ 97:
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(103)
	)

	/* script */
	__vue_exports__ = __webpack_require__(104)

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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/xilie/pcxilie_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-355e83e2"
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

/***/ 103:
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

/***/ 104:
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
	            var name = "star/pcstar_hot_pager";
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

/***/ 105:
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(107)
	)

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/xilie/pcxilie_big_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-78213d98"
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

/***/ 107:
/***/ (function(module, exports) {

	module.exports = {
	  "img": {
	    "width": 750,
	    "height": 440,
	    "borderRadius": 5
	  },
	  "txt": {
	    "fontSize": 22,
	    "padding": 5,
	    "flex": 1
	  },
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcxilie_imglist_item = __webpack_require__(102);

	var _pcxilie_imglist_item2 = _interopRequireDefault(_pcxilie_imglist_item);

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

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var utils = __webpack_require__(34);
	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        pcxilie_imglist_item: _pcxilie_imglist_item2.default,
	        navbar_v: _navbar_v2.default

	    },
	    //        props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_xilie_top(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "系列",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            bigsrc: "",
	            bigtitle: "",
	            bighref: ""
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
	        todetail: function todetail(e, alt) {
	            console.log('main list===' + e);
	            var name = "star/pcstar_hot_pager";
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
	        },
	        autoRefresh: function autoRefresh() {
	            console.log('autoRefresh');
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
	                self.taghref = meitu.getpc_xilie_top();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    //https://www.4493.com/tag/%C4%DA%D2%C2/
	            //                    url = self.taghref;
	            //                }else{
	            //                    //https://www.4493.com/tag/%C4%DA%D2%C2/
	            //                    //https://www.4493.com/tag/2/%C4%DA%D2%C2
	            //
	            //                    var newurl = meitu.getpc_meitu()+"tag/";
	            //                    var key = self.taghref.replaceAllStr(newurl,"").replaceAllStr("/","");
	            //                    url = newurl+self.pageNo+"/"+key;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcxlimg(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcxlimg"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcxlimg"
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
	            var bigtag = json.list[0];
	            self.bigsrc = bigtag.src;
	            self.bigtitle = bigtag.title;
	            self.bighref = bigtag.href;

	            for (var i = 1; i < json.list.length; i += 2) {
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
	                self.stockArray.push(item);
	            }
	        }

	    }

	};

/***/ }),

/***/ 109:
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
	  }, [_vm._v("下拉刷新...")])]), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.todetail(_vm.bighref, _vm.bigtitle)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["img"],
	    attrs: {
	      "src": _vm.bigsrc
	    }
	  }), _c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.bigtitle))])])]), _vm._l((_vm.stockArray), function(stockitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcxilie_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	module.exports = {
	  "imagepager": {
	    "width": 750,
	    "margin": 1,
	    "height": 350
	  },
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcmingxing_section_news_imglist_item = __webpack_require__(145);

	var _pcmingxing_section_news_imglist_item2 = _interopRequireDefault(_pcmingxing_section_news_imglist_item);

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
	var utils = __webpack_require__(34);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcmingxing_section_news_imglist_item: _pcmingxing_section_news_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_mingxing_section(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "明星热点榜",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            pagersrc: "",
	            pageralt: ""

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
	        todetail: function todetail(e) {
	            weexEventModule.startWebViewActivity(e);
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
	                self.taghref = meitu.getpc_mingxing_section();
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
	            weexMeiu4493JsoupModule.pcmingxingsectionnews(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingsectionnews"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingsectionnews"
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
	        }

	    }

	};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(146)
	)

	/* script */
	__vue_exports__ = __webpack_require__(147)

	/* template */
	var __vue_template__ = __webpack_require__(148)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/mingxing/pcmingxing_section_news_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0dae144b"
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

/***/ 146:
/***/ (function(module, exports) {

	module.exports = {
	  "news-content": {
	    "marginLeft": 1,
	    "marginRight": 1,
	    "flexDirection": "column",
	    "flex": 1,
	    "padding": 5,
	    "borderRadius": 5
	  },
	  "img": {
	    "height": 200,
	    "width": 300,
	    "borderRadius": 10
	  },
	  "txt": {
	    "fontSize": 28,
	    "padding": 5,
	    "flex": 1,
	    "fontSize:active": 28,
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

/***/ 147:
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

	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meitu = __webpack_require__(6);
	var utils = __webpack_require__(34);
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
	            //https://www.4493.com/xingganmote/126139/1.htm
	            //https://www.4493.com/xingganmote/126139/1.htm
	            //https://www.4493.com/xingganmote/126139.htm
	            //                weexEventModule.startWebViewActivity(e);
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
	};

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flex: "1",
	      margin: "5px",
	      padding: "10",
	      backgroundColor: "#fff"
	    },
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
	  }), _c('div', {
	    staticClass: ["news-content"]
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.stockitem.title))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 149:
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
	    }, [_c('pcmingxing_section_news_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 153:
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcxilie_imglist_item = __webpack_require__(102);

	var _pcxilie_imglist_item2 = _interopRequireDefault(_pcxilie_imglist_item);

	var _pcxilie_big_imglist = __webpack_require__(106);

	var _pcxilie_big_imglist2 = _interopRequireDefault(_pcxilie_big_imglist);

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
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        pcxilie_imglist_item: _pcxilie_imglist_item2.default,
	        navbar_v: _navbar_v2.default,
	        pcxilie_big_imglist: _pcxilie_big_imglist2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_mingxing_section(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "系列",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            moretitle: "",
	            morehref: ""
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
	        nativetitle: function nativetitle(e, alt) {
	            var name = "xilie/pcxilie_imglist";
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
	        },
	        autoRefresh: function autoRefresh() {
	            console.log('autoRefresh');
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
	                self.taghref = meitu.getpc_mingxing_section();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    //https://www.4493.com/tag/%C4%DA%D2%C2/
	            //                    url = self.taghref;
	            //                }else{
	            //                    //https://www.4493.com/tag/%C4%DA%D2%C2/
	            //                    //https://www.4493.com/tag/2/%C4%DA%D2%C2
	            //
	            //                    var newurl = meitu.getpc_meitu()+"tag/";
	            //                    var key = self.taghref.replaceAllStr(newurl,"").replaceAllStr("/","");
	            //                    url = newurl+self.pageNo+"/"+key;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcmingxingsectionxilie(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingsectionxilie"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingsectionxilie"
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
	                self.stockArray.push(item);
	                if (i == 0) {
	                    self.moretitle = tag.alt2;
	                    self.morehref = tag.href2;
	                }
	            }
	        }

	    }

	};

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "rgba(0, 0, 0, .25)"
	    }
	  }, [_c('navbar_v', {
	    attrs: {
	      "title": _vm.moretitle,
	      "shown": _vm.shown,
	      "leftsrc": _vm.leftsrc
	    },
	    on: {
	      "nativetitle": function($event) {
	        _vm.nativetitle(_vm.morehref, _vm.moretitle)
	      }
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
	    }, [_c('pcxilie_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

	module.exports = {
	  "imagepager": {
	    "width": 750,
	    "margin": 1,
	    "height": 350
	  },
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

	var _pcmingxing_section_news_imglist_item = __webpack_require__(145);

	var _pcmingxing_section_news_imglist_item2 = _interopRequireDefault(_pcmingxing_section_news_imglist_item);

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
	var utils = __webpack_require__(34);
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        pcmingxing_section_news_imglist_item: _pcmingxing_section_news_imglist_item2.default,
	        navbar_v: _navbar_v2.default
	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            stockArray: [],
	            taghref: meitu.getpc_star_main(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "明星热点榜",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            pagersrc: "",
	            pageralt: ""

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
	        todetail: function todetail(e) {
	            weexEventModule.startWebViewActivity(e);
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
	                self.taghref = meitu.getpc_star_main();
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
	            weexMeiu4493JsoupModule.pcmingxingmainspecial(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingmainspecial"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingmainspecial"
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
	        }

	    }

	};

/***/ }),

/***/ 188:
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
	    }, [_c('pcmingxing_section_news_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 189:
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

	var _pcstar_maintype_imglist_item = __webpack_require__(191);

	var _pcstar_maintype_imglist_item2 = _interopRequireDefault(_pcstar_maintype_imglist_item);

	var _pcmingxing_section_xilie_imglist = __webpack_require__(195);

	var _pcmingxing_section_xilie_imglist2 = _interopRequireDefault(_pcmingxing_section_xilie_imglist);

	var _pcmingxing_section_news_imglist = __webpack_require__(196);

	var _pcmingxing_section_news_imglist2 = _interopRequireDefault(_pcmingxing_section_news_imglist);

	var _pcstar_main_spnews_imglist = __webpack_require__(197);

	var _pcstar_main_spnews_imglist2 = _interopRequireDefault(_pcstar_main_spnews_imglist);

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

	var modal = weex.requireModule('modal');
	var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
	var meitu = __webpack_require__(6);
	var storage = weex.requireModule('storage');
	var utils = __webpack_require__(34);
	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	exports.default = {
	    components: {
	        pcstar_maintype_imglist_item: _pcstar_maintype_imglist_item2.default,
	        navbar_v: _navbar_v2.default,
	        pcmingxing_section_xilie_imglist: _pcmingxing_section_xilie_imglist2.default,
	        pcmingxing_section_news_imglist: _pcmingxing_section_news_imglist2.default,
	        pcstar_main_spnews_imglist: _pcstar_main_spnews_imglist2.default

	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            tpicNArray: [],
	            taghref: meitu.getpc_star_main(),
	            pageNo: 1,
	            refreshing: false,
	            showLoading: 'hide',
	            title: "明星",
	            isFirst: 1,
	            shown: false,
	            leftsrc: './images/back.png',
	            moretitle: "",
	            morehref: ""
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
	        nativetitle: function nativetitle(e, alt) {
	            var name = "xilie/pcxilie_imglist";
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
	        },
	        autoRefresh: function autoRefresh() {
	            console.log('autoRefresh');
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
	                self.taghref = meitu.getpc_star_main();
	            }
	            var url = self.taghref;
	            //                if(self.pageNo==1){
	            //                    //https://www.4493.com/tag/%C4%DA%D2%C2/
	            //                    url = self.taghref;
	            //                }else{
	            //                    //?p=2
	            //                    url = self.taghref+"?p="+self.pageNo;
	            //                }
	            console.log('url===' + url);
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeiu4493JsoupModule.pcmingxingmainstarimg(params, function (e) {
	                var json = JSON.parse(e);
	                if (self.pageNo == 1) {
	                    self.tpicNArray.splice(0, self.tpicNArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingmainstarimg"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常==获取缓存==');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcmingxingmainstarimg"
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
	                self.tpicNArray.push(tag);
	            }
	        }

	    }

	};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(192)
	)

	/* script */
	__vue_exports__ = __webpack_require__(193)

	/* template */
	var __vue_template__ = __webpack_require__(194)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/starmain/pcstar_maintype_imglist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e011d0e8"
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

/***/ 192:
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
	    "height": 440,
	    "borderRadius": 5
	  },
	  "txt": {
	    "fontSize": 35,
	    "padding": 5,
	    "flex": 1,
	    "color": "#cc3399",
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _pcstar_section_imglist_item = __webpack_require__(94);

	var _pcstar_section_imglist_item2 = _interopRequireDefault(_pcstar_section_imglist_item);

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

	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var meitu = __webpack_require__(6);
	module.exports = {
	    created: function created() {},
	    components: {
	        pcstar_section_imglist_item: _pcstar_section_imglist_item2.default
	    },
	    props: {
	        tpicNitem: {
	            type: Object
	        }
	    },

	    methods: {
	        toitem: function toitem(json) {
	            var stockArray = [];
	            if (json.list) {
	                if (json.list && json.list.length > 0) {
	                    for (var i = 0; i < json.list.length; i += 2) {
	                        var tag = json.list[i];
	                        var tag2 = json.list[i + 1];
	                        if (tag2 == undefined) {
	                            tag2 = {
	                                href: "",
	                                alt: "",
	                                src: "",
	                                other: "",
	                                title: ""
	                            };
	                        }
	                        var item = {
	                            href: tag.href,
	                            alt: tag.title,
	                            src: tag.src,
	                            other: tag.other,
	                            title: tag.title,
	                            href2: tag2.href,
	                            alt2: tag2.title,
	                            src2: tag2.src,
	                            other2: tag2.other,
	                            title2: tag2.title
	                        };
	                        stockArray.push(item);
	                    }
	                }
	            }
	            return stockArray;
	        },

	        getImgUrl: function getImgUrl(url) {
	            return meitu.getImageUrl(url);
	        },
	        todetail: function todetail(e, alt) {
	            console.log('main list===' + e);
	            var name = "mingxing/pcmingxing_imglist";
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

/***/ 194:
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
	        _vm.todetail(_vm.tpicNitem.href, _vm.tpicNitem.title)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v(_vm._s(_vm.tpicNitem.title))]), _vm._l((_vm.toitem(_vm.tpicNitem)), function(stockitem) {
	    return _c('div', [_c('pcstar_section_imglist_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(153)
	)

	/* script */
	__vue_exports__ = __webpack_require__(154)

	/* template */
	var __vue_template__ = __webpack_require__(155)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/mingxing/pcmingxing_section_xilie_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-47dbca47"
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
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(143)
	)

	/* script */
	__vue_exports__ = __webpack_require__(144)

	/* template */
	var __vue_template__ = __webpack_require__(149)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/mingxing/pcmingxing_section_news_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6e097192"
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(186)
	)

	/* script */
	__vue_exports__ = __webpack_require__(187)

	/* template */
	var __vue_template__ = __webpack_require__(188)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/starmain/pcstar_main_spnews_imglist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-17921567"
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

/***/ 198:
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
	  }, [_vm._v("下拉刷新...")])]), _vm._l((_vm.tpicNArray), function(tpicNitem) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('pcstar_maintype_imglist_item', {
	      attrs: {
	        "tpicNitem": tpicNitem
	      }
	    })], 1)
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcstar_main_spnews_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmingxing_section_news_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('pcmingxing_section_xilie_imglist', {
	    attrs: {
	      "taghref": _vm.taghref
	    }
	  })], 1)], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });