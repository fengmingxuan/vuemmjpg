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
	__vue_styles__.push(__webpack_require__(233)
	)

	/* script */
	__vue_exports__ = __webpack_require__(234)

	/* template */
	var __vue_template__ = __webpack_require__(235)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/mmjpg/src/mainlist.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-653ad126"
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

/***/ 142:
/***/ (function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
	    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
	    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
	    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
	    HTTP: 'https://',//https:// http://

	};

	var MMJPG = {
	    m_mmjpg:"http://www.mmjpg.com/",
	    m_mmjpg_article:"http://www.mmjpg.com/mm/1030/",
	    m_mmjpg_hot:"http://www.mmjpg.com/hot/",
	    m_mmjpg_top:"http://www.mmjpg.com/top/",
	    m_mmjpg_top_page:"http://www.mmjpg.com/getmore.php?page=",
	    m_mmjpg_more:"http://www.mmjpg.com/more/",
	    m_mmjpg_search:"http://www.mmjpg.com/search.php",
	    m_mmjpg_m:"http://m.mmjpg.com/",
	    m_mmjpg_m_more:"http://m.mmjpg.com/more/",
	    m_mmjpg_m_hot:"http://m.mmjpg.com/hot/",
	    m_mmjpg_article_m:"http://m.mmjpg.com/mm/1033/",
	};
	exports.getm_mmjpg_article_m = function () {
	    var url = MMJPG.m_mmjpg_article_m;
	    console.log('m_mmjpg_article_m==' + url);
	    return url;
	};
	exports.getm_mmjpg_m_hot = function () {
	    var url = MMJPG.m_mmjpg_m_hot;
	    console.log('m_mmjpg_m_hot==' + url);
	    return url;
	};
	exports.getm_mmjpg_m_more = function () {
	    var url = MMJPG.m_mmjpg_m_more;
	    console.log('m_mmjpg_m_more==' + url);
	    return url;
	};
	exports.getm_mmjpg_m = function () {
	    var url = MMJPG.m_mmjpg_m;
	    console.log('m_mmjpg_m==' + url);
	    return url;
	};
	exports.getm_mmjpg_search = function () {
	    var url = MMJPG.m_mmjpg_search;
	    console.log('m_mmjpg_search==' + url);
	    return url;
	};
	exports.getm_mmjpg_more = function () {
	    var url = MMJPG.m_mmjpg_more;
	    console.log('m_mmjpg_more==' + url);
	    return url;
	};
	exports.getm_mmjpg_top_page = function () {
	    var url = MMJPG.m_mmjpg_top_page;
	    console.log('m_mmjpg_top_page==' + url);
	    return url;
	};
	exports.getm_mmjpg_top = function () {
	    var url = MMJPG.m_mmjpg_top;
	    console.log('m_mmjpg_top==' + url);
	    return url;
	};
	exports.getm_mmjpg_hot = function () {
	    var url = MMJPG.m_mmjpg_hot;
	    console.log('m_mmjpg_hot==' + url);
	    return url;
	};
	exports.getm_mmjpg_article = function () {
	    var url = MMJPG.m_mmjpg_article;
	    console.log('m_mmjpg_article==' + url);
	    return url;
	};

	exports.getm_mmjpg = function () {
	    var url = MMJPG.m_mmjpg;
	    console.log('m_mmjpg==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/mmjpg') || host.endsWith(':12580/mmjpg')) {
	                host = host.replace('/mmjpg', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./mmjpg/build/src/' : BASE_URL.HTTP + host + '/mmjpg/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/mmjpg/build/src/';
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

/***/ 233:
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

/***/ 234:
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
	var mmjpg = __webpack_require__(142);
	exports.default = {
	    data: function data() {
	        return {
	            rows: []
	        };
	    },
	    created: function created() {
	        this.rows.push('m/foot/m_foot');
	        this.rows.push('m/good/mgood');
	        this.rows.push('m/article/marticle');
	        this.rows.push('m/hot/mhotnav-pager');
	        this.rows.push('m/more/m_more');
	        this.rows.push('m/menu/mmenu-tabbar');
	        this.rows.push('m/menu/mmenu');
	        this.rows.push('m/main/m_main');
	        this.rows.push('pc/search/pc_search');
	        this.rows.push('pc/more/pc_more_head_foot_nobar');
	        this.rows.push('pc/top/pc_top_head_foot_nobar');
	        this.rows.push('pc/hot/pchot-head-foot');
	        this.rows.push('pc/hot/pchotscan');
	        this.rows.push('pc/hot/pchotzan');
	        this.rows.push('pc/hot/pchot');
	        this.rows.push('pc/menu/pcslideoutmenu-main-tabbar');
	        this.rows.push('pc/tabbar/pcmainnav-scroller-tabbar');
	        this.rows.push('pc/nav/mainnav');
	        this.rows.push('pc/article/pcarticle');
	        this.rows.push('pc/menu/pcslideoutmenu-tabbar');
	        this.rows.push('pc/menu/pcslideoutmenu-pager');
	        this.rows.push('pc/tabbar/pcmenu-scroller-tabbar');
	        this.rows.push('list-demo-horizontal');
	        this.rows.push('scroller-demo-horizontal');
	        this.rows.push('pc/mainpager/pcmainnav-pager');
	        this.rows.push('pc/main/pc_main_head_foot_nobar');
	        this.rows.push('pc/main/pc_main');
	        this.rows.push('pc/main/pc_main_v');
	        this.rows.push('pc/main/pc_main_head_foot');
	        this.rows.push('pc/main/pc_main_load_refresh_v');
	        this.rows.push('pc/mainpager/pcmaintoppager');
	        this.rows.push('pc/mainpager/pcmaintopslider');
	        this.rows.push('pc/mainhot/pcmainhotlist');
	        this.rows.push('pc/mainhot/pcmainhotlist_v');
	        this.rows.push('pc/mainlike/pcmainlikelist');
	        this.rows.push('pc/mainlike/pcmainlikelist_v');
	        this.rows.push('pc/mainmm/pcmainmmlist');
	        this.rows.push('pc/mainmm/pcmainmmlist_v');
	        this.rows.push('pc/friendlink/friendlinklist');
	        this.rows.push('pc/friendlink/friendlinklist_v');
	        this.rows.push('pc/nav/subnav');
	        this.rows.push('pc/nav/subnav_v');
	        this.rows.push('pc/mainmm/pcmainmmgrid');
	        this.rows.push('pc/tabbar/pcmenu-tabbar');
	        this.rows.push('pc/menu/pcslideoutmenu');
	        this.rows.push('stocknews/stocknews');
	        this.rows.push('components/a');
	        this.rows.push('components/slider');
	        this.rows.push('components/indicator');
	        this.rows.push('components/switch');
	        this.rows.push('components/text');
	        this.rows.push('components/textarea');
	        this.rows.push('components/vedio');
	        this.rows.push('components/web');
	        this.rows.push('components/div');
	        this.rows.push('components/image');
	        this.rows.push('components/list');
	        this.rows.push('components/input');
	        this.rows.push('components/cell');
	        this.rows.push('components/loading');
	        this.rows.push('components/refresh');
	        this.rows.push('components/scroller');
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
	                url: mmjpg.getDefaultUrl(name),
	                animated: "true"
	            }, function (event) {
	                // modal.toast({ message: 'callback: ' + event })
	            });
	        }
	    }
	};

/***/ }),

/***/ 235:
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