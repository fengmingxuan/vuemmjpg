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
	__vue_styles__.push(__webpack_require__(120)
	)

	/* script */
	__vue_exports__ = __webpack_require__(121)

	/* template */
	var __vue_template__ = __webpack_require__(122)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/zjito/src/mainlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-200e1acc"
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

	var ZJITO = {
	    pc_search:"http://www.zjito.com/search/result?Query=",
	    pc_search_meinv:"http://www.zjito.com/search/result?Query=%E7%BE%8E%E5%A5%B3",
	    pc_content:"http://www.zjito.com/dqfl/rb/544214.shtml",
	    pc_cat:"http://www.zjito.com/dqfl/",
	    pc_zjito:"http://www.zjito.com/",
	    m_tab_img:"http://m.zjito.com/dqfl/zgnd/",
	    m_content:"http://m.zjito.com/dqfl/rb/544214.shtml",
	    m_zjito:"http://m.zjito.com/",
	    pc_tupian:"http://www.zjito.com/tpfl/",
	    pc_mingzhan:"http://www.zjito.com/mzxz/",
	    pc_taotu:"http://www.zjito.com/rbtt/",
	    m_hot:"http://m.zjito.com/hot/",
	    pc_hot:"http://www.zjito.com/hot/"

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

/***/ 120:
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

/***/ 121:
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

	var navigator = weex.requireModule('navigator');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var weexModule = weex.requireModule('weexModule');
	var dom = weex.requireModule('dom');
	var modal = weex.requireModule('modal');
	var zjito = __webpack_require__(6);
	exports.default = {
	    data: function data() {
	        return {
	            rows: []
	        };
	    },
	    created: function created() {
	        this.rows.push('pager/pchot_pager');
	        this.rows.push('hot/mhotimglist');
	        this.rows.push('menu/mslideoutmenu');
	        this.rows.push('main/mmainimgscroller');
	        this.rows.push('main/mmainslider');
	        this.rows.push('content/pccontentalllist');
	        this.rows.push('search/mimglist_notitlebar_autorefresh');
	        this.rows.push('linkhot/mlinkhot');
	        this.rows.push('content/mcontentlist');
	        this.rows.push('cat/mtabtags');
	        this.rows.push('mtabimg/mtabimglist');
	        this.rows.push('main/pcmaintabs');
	        this.rows.push('main/pcmainimglist');
	        this.rows.push('main/pcmainslider');
	        this.rows.push('cat/pccatgrid_leftmenu');
	        this.rows.push('cat/pccatgrid');
	        this.rows.push('pager/pccat_pager');
	        this.rows.push('cat/pcmult_cattabbar');
	        this.rows.push('cat/pccattabbar');
	        this.rows.push('cat/pccat');
	        this.rows.push('search/pcimglist_notitlebar');
	        this.rows.push('search/pcimglist_notitlebar_autorefresh');
	        this.rows.push('linkhot/pclinkhot');
	        this.rows.push('content/pccontentslider');
	        this.rows.push('content/pccontentlist');
	        this.rows.push('search/pcsearchimglist');
	        this.rows.push('search/pcsearch');
	        this.rows.push('template/navbar_v');
	        this.rows.push('text');
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
	                url: zjito.getDefaultUrl(name),
	                animated: "true"
	            }, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),

/***/ 122:
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