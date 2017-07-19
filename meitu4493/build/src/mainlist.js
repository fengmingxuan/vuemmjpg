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
	__vue_styles__.push(__webpack_require__(74)
	)

	/* script */
	__vue_exports__ = __webpack_require__(75)

	/* template */
	var __vue_template__ = __webpack_require__(76)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meitu4493/src/mainlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-92b05c3c"
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

/***/ 74:
/***/ (function(module, exports) {

	module.exports = {
	  "scroller": {
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "marginLeft": 1,
	    "marginRight": 1
	  },
	  "row": {
	    "height": 150,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 30,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "text": {
	    "fontSize": 45,
	    "color": "#666666"
	  }
	}

/***/ }),

/***/ 75:
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

	var navigator = weex.requireModule('navigator');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var weexModule = weex.requireModule('weexModule');
	var dom = weex.requireModule('dom');
	var modal = weex.requireModule('modal');
	var meitu = __webpack_require__(6);
	exports.default = {
	    data: function data() {
	        return {
	            rows: []
	        };
	    },
	    created: function created() {
	        this.rows.push('paihang/pctop_left_imglist');
	        this.rows.push('paihang/pctop_paihang_imglist');
	        this.rows.push('star/pcstar_hot_pager');
	        this.rows.push('star/pcstar_imglist');
	        this.rows.push('image/pcimage_main_all_slider');
	        this.rows.push('image/pcimage_main_imgalllist');
	        this.rows.push('image/pcimage_main_imglist');
	        this.rows.push('image/pcimage_bottomtag_hlist');
	        this.rows.push('image/pcimage_paihang');
	        this.rows.push('image/pcimagejingxuan_imglist');
	        this.rows.push('image/pcimagehot_imglist');
	        this.rows.push('image/pcimageright_imglist');
	        this.rows.push('image/pcimageleft_imglist');
	        this.rows.push('topnav/pctopnav_alllist');
	        this.rows.push('childnav/pcpic_imglist');
	        this.rows.push('childnav/pcinterest_hlist');
	        this.rows.push('childnav/pcinterest');
	        this.rows.push('webnews');
	        this.rows.push('template/navbar_v');
	    },

	    methods: {
	        openitem: function openitem(event) {

	            //callJS tasks:[{"data":"14","type":2},{"data":"[{\"args\":[\"150\",\"click\",{\"position\":{\"height\":52.77778,\"width\":713.19446,\"x\":33.333332,\"y\":191.66667}},null],\"method\":\"fireEvent\"}]","type":3}]
	            // tasks:[{"module":"modal","method":"toast","args":[{"message":{"position":{"height":52.77778,"width":713.19446,"x":33.333332,"y":191.66667},"type":"click",
	            // "target":{"ref":"186","type":"text","attr":{"value":"a"},"style":{"fontSize":45,"color":"#666666"},"event":["click"]},"timestamp":1488878471697}}]}]
	            var name = event.target.attr.value;
	            //                modal.toast({ message:  name.toString()})
	            //http://localhost:8080/index.html?page=./mmjpg/build/mainlilst.js
	            //                 weexModule.openUrl('http://192.168.1.15:8080/dist/'+name+'.weex.js', function(err){
	            //                   console.log(err);
	            //                  });
	            weexNavigatorModule.push({
	                url: meitu.getDefaultUrl(name),
	                animated: "true"
	            }, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, _vm._l((_vm.rows), function(name, index) {
	    return _c('div', {
	      ref: 'item' + index,
	      refInFor: true,
	      staticClass: ["row"]
	    }, [_c('text', {
	      ref: 'text' + index,
	      refInFor: true,
	      staticClass: ["text"],
	      on: {
	        "click": _vm.openitem
	      }
	    }, [_vm._v(_vm._s(name))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });