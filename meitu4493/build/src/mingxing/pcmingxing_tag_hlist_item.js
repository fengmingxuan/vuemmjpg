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
	__vue_styles__.push(__webpack_require__(30)
	)

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(32)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/mingxing/pcmingxing_tag_hlist_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0317ea19"
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

/***/ 6:
/***/ (function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    //http://git.oschina.net/fengmengchang/weex-mmjpg
	    //http://git.oschina.net/fengmengchang/weex-mmjpg/raw/master/meitu4493/build/src/mainlist.js
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
	    pc_home_jingxuan:"https://gg.dsxdn.com/4493/home_jingxuan.js",
	    m_meitu:"https://m.4493.com/",
	    m_xingganmote:"https://m.4493.com/xingganmote/",
	    m_star:"https://m.4493.com/star/",
	    m_image:"https://m.4493.com/xingganmote/126940.html",
	    m_hot:"https://gg.dsxdn.com/4493/m_hot.js",
	    m_xilie:"https://m.4493.com/star/sunennvshen/",
	    m_xilie_list:"https://m.4493.com/xilie/",
	    m_star_list:"https://m.4493.com/star/zhaoyufei/",


	};
	exports.getm_star_list = function () {
	    var url = MEITU.m_star_list;
	    console.log('m_star_list==' + url);
	    return url;
	};

	exports.getm_xilie_list = function () {
	    var url = MEITU.m_xilie_list;
	    console.log('m_xilie_list==' + url);
	    return url;
	};
	exports.getm_xilie = function () {
	    var url = MEITU.m_xilie;
	    console.log('m_xilie==' + url);
	    return url;
	};
	exports.getm_hot = function () {
	    var url = MEITU.m_hot;
	    console.log('m_hot==' + url);
	    return url;
	};
	exports.getm_image = function () {
	    var url = MEITU.m_image;
	    console.log('m_image==' + url);
	    return url;
	};
	exports.getm_star = function () {
	    var url = MEITU.m_star;
	    console.log('m_star==' + url);
	    return url;
	};
	exports.getm_xingganmote = function () {
	    var url = MEITU.m_xingganmote;
	    console.log('m_xingganmote==' + url);
	    return url;
	};
	exports.getm_meitu = function () {
	    var url = MEITU.m_meitu;
	    console.log('m_meitu==' + url);
	    return url;
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

/***/ 30:
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

/***/ 31:
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
	            if (e.indexOf('www.4493.com') != -1) {
	                if (alt.indexOf("赞") != -1) {
	                    return;
	                }
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
	            } else {}
	        }
	    }
	};

/***/ }),

/***/ 32:
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

/***/ })

/******/ });