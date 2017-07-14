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
	__vue_styles__.push(__webpack_require__(230)
	)

	/* script */
	__vue_exports__ = __webpack_require__(231)

	/* template */
	var __vue_template__ = __webpack_require__(233)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mtags/mtags_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0964291b"
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

/***/ 224:
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

/***/ 225:
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
	        todetail: function todetail(e, alt, navid) {
	            if (navid >= 7) {
	                weexEventModule.startWebViewActivity(e);
	            } else {

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
	    }
	};

/***/ }),

/***/ 226:
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
	        _vm.todetail(_vm.stockitem.href, _vm.stockitem.alt, _vm.stockitem.navid)
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
	        _vm.todetail(_vm.stockitem.href2, _vm.stockitem.alt2, _vm.stockitem.navid2)
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
	        _vm.todetail(_vm.stockitem.href3, _vm.stockitem.alt3, _vm.stockitem.navid3)
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
	        _vm.todetail(_vm.stockitem.href4, _vm.stockitem.alt4, _vm.stockitem.navid4)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["txt"]
	  }, [_vm._v("  " + _vm._s(_vm.stockitem.alt4))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 230:
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _mtag_sub_item = __webpack_require__(232);

	var _mtag_sub_item2 = _interopRequireDefault(_mtag_sub_item);

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
	        mtag_sub_item: _mtag_sub_item2.default

	    },
	    props: {
	        tpicNitem: {
	            type: Object
	        }
	    },

	    methods: {
	        toweb: function toweb(e, alt) {
	            weexEventModule.startWebViewActivity(e);
	        },
	        tostock: function tostock(json) {
	            var self = this;
	            var stockArray = [];
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
	                            navid: json.navid,
	                            backgroundColor: '#f60',
	                            href2: tag2.href,
	                            alt2: tag2.alt,
	                            id2: i + 1,
	                            navid2: json.navid,
	                            backgroundColor2: '#09f',
	                            href3: tag3.href,
	                            alt3: tag3.alt,
	                            id3: i + 2,
	                            navid3: json.navid,
	                            backgroundColor3: '#7a7a7a',
	                            href4: tag4.href,
	                            alt4: tag4.alt,
	                            id4: i + 3,
	                            navid4: json.navid,
	                            backgroundColor4: '#393'
	                        };
	                        stockArray.push(item);
	                    }
	                }
	            }
	            return stockArray;
	        }
	    }
	};

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(224)
	)

	/* script */
	__vue_exports__ = __webpack_require__(225)

	/* template */
	var __vue_template__ = __webpack_require__(226)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meituba/src/mtags/mtag_sub_item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-376e37f6"
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

/***/ 233:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      margin: "5px",
	      flexDirection: "column"
	    }
	  }, [_c('div', {
	    staticClass: ["news-content"]
	  }, [_c('div', {
	    staticStyle: {
	      flexDirection: "column"
	    }
	  }, [_c('text', {
	    staticClass: ["txt"],
	    on: {
	      "click": function($event) {
	        _vm.toweb(_vm.tpicNitem.href, _vm.tpicNitem.title)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.tpicNitem.title))]), _vm._l((_vm.tostock(_vm.tpicNitem)), function(stockitem) {
	    return _c('div', [_c('mtag_sub_item', {
	      attrs: {
	        "stockitem": stockitem
	      }
	    })], 1)
	  })], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });