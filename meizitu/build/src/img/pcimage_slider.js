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
	__vue_styles__.push(__webpack_require__(33)
	)

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/img/pcimage_slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-240468da"
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
	__vue_options__.__file = "/Users/master/gitweexvue/vuemmjpg/meizitu/src/template/navbar_v.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0e1297d4"
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
	    "backgroundColor": "#FF6B9C"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#FF6B9C"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#FF6B9C"
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

	var meizitu = __webpack_require__(6);
	var navigator = weex.requireModule('navigator');

	exports.default = {
	    data: function data() {
	        return {
	            title: '妹子图',
	            type: 0,
	            shown: true,
	            showStatusBar: 0,
	            nav_text_top: 0,
	            shownleft: true,
	            leftsrc: './images/menu.png'
	        };
	    },

	    props: ['title', 'shown', 'leftsrc', 'shownleft'],
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
	            this.title = '妹子图';
	        }
	    },
	    ready: function ready() {},

	    methods: {
	        nativeback: function nativeback(e) {
	            console.log('nativeback');
	            //                var params = {
	            //                    'animated': 'true'
	            //                };
	            //                navigator.pop(params, event => {
	            //
	            //                });
	            var params = {};
	            this.$emit('nativeback', params);
	        },
	        onright: function onright(e) {
	            console.log('navbar == onright');
	            this._parent.onright();
	        },

	        getImgUrl: function getImgUrl(url) {
	            return meizitu.getImageUrl(url);
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

	var MEIZITU = {
	    pc_meizitu:"http://www.meizitu.com",
	    pc_main_more:"http://www.meizitu.com/a/",
	    pc_tag:"http://www.meizitu.com/a/pure.html",
	    pc_image:"http://www.meizitu.com/a/3666.html",
	    m_meizitu:"http://m.meizitu.com",
	    tag_meizitu:"http://m.meizitu.com/tag/suxiong_17_1.html",

	};
	exports.gettag_meizitu = function () {
	    var url = MEIZITU.tag_meizitu;
	    console.log('tag_meizitu==' + url);
	    return url;
	};
	exports.getm_meizitu = function () {
	    var url = MEIZITU.m_meizitu;
	    console.log('m_meizitu==' + url);
	    return url;
	};
	exports.getpc_image = function () {
	    var url = MEIZITU.pc_image;
	    console.log('pc_image==' + url);
	    return url;
	};
	exports.getpc_tag = function () {
	    var url = MEIZITU.pc_tag;
	    console.log('pc_tag==' + url);
	    return url;
	};
	exports.getpc_main_more = function () {
	    var url = MEIZITU.pc_main_more;
	    console.log('pc_main_more==' + url);
	    return url;
	};
	exports.getpc_meizitu = function () {
	    var url = MEIZITU.pc_meizitu;
	    console.log('pc_meizitu==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meizitu' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/meizitu' + path.substring(1, path.length);

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
	            if (host.endsWith(':8080/meizitu') || host.endsWith(':12580/meizitu')) {
	                host = host.replace('/meizitu', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meizitu/build/src/' : BASE_URL.HTTP + host + '/meizitu/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/meizitu/build/src/';
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
	    staticClass: ["nav_text"]
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

/***/ 33:
/***/ (function(module, exports) {

	module.exports = {
	  "save": {
	    "position": "absolute",
	    "width": 100,
	    "height": 80,
	    "top": 20,
	    "left": 600,
	    "backgroundColor": "rgb(40,96,144)"
	  },
	  "image": {
	    "width": 750,
	    "margin": 1,
	    "height": 1250
	  },
	  "frame": {
	    "width": 750,
	    "flexDirection": "column"
	  },
	  "txt": {
	    "fontSize": 30,
	    "margin": 1
	  }
	}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navbar_v = __webpack_require__(3);

	var _navbar_v2 = _interopRequireDefault(_navbar_v);

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
	//
	//
	//
	//
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
	var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
	var meizitu = __webpack_require__(6);
	var weexEventModule = weex.requireModule('weexEventModule');
	var weexNavigatorModule = weex.requireModule('weexNavigatorModule');
	var weexEventModule = weex.requireModule('weexEventModule');
	exports.default = {
	    components: {
	        navbar_v: _navbar_v2.default
	    },
	    props: ['taghref'],
	    data: function data() {
	        return {
	            imageList: [],
	            taghref: meizitu.getpc_image(),
	            pageNo: 1,
	            title: "",
	            shown: false,
	            leftsrc: './images/back.png'
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
	        self.refresh();

	        var paramsEvent = {
	            event: "8000",
	            label: "看图详细"
	        };
	        weexEventModule.onEvent(paramsEvent, function (event) {});
	    },
	    methods: {
	        saveimage: function saveimage(src) {
	            console.log('saveimage===' + src);
	            var params = {
	                imgurl: src
	            };
	            weexEventModule.saveImage(params, function (event) {});
	        },
	        todetail: function todetail(e, alt) {
	            var paramsEvent = {
	                event: "9000",
	                label: "妹子图web"
	            };
	            weexEventModule.onEvent(paramsEvent, function (event) {});
	            //                weexEventModule.startWebViewActivity(e);
	            //                var name = "img/pcimage_imglist";
	            ////                if(e.indexOf('m.meituba.com')!=-1){
	            ////                    name = "marticle/marticlelist";
	            ////                }else{
	            ////                    name = "article/pcarticlelist";
	            ////                }
	            //                var params={
	            //                    url: meizitu.getDefaultUrl(name),
	            //                    animated: "true",
	            //                    options:{
	            //                        taghref: e,
	            //                        title:alt
	            //                    }
	            //                };
	            //
	            //                weexNavigatorModule.push(params, event => {
	            //                    // modal.toast({ message: 'callback: ' + event })
	            //                });
	        },
	        refresh: function refresh() {
	            var self = this;
	            if (self.taghref == undefined) {
	                self.taghref = meizitu.getpc_image();
	            }
	            var url = self.taghref;
	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexMeizituJsoupModule.pcimagelist(params, function (e) {
	                var json = JSON.parse(e);
	                self.imageList.splice(0, self.imageList.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcimagelist"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        //异常
	                        console.log('异常====');
	                        //获取缓存
	                        var paramsCache = {
	                            url: url,
	                            typename: "pcimagelist"
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
	                self.imageList.push(tag);
	            }
	        }

	    }
	};

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flex: "1",
	      flexDirection: "column"
	    }
	  }, [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "3000",
	      "autoPlay": "false"
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
	          _vm.todetail(img.href, img.alt)
	        }
	      }
	    }), _c('text', {
	      staticClass: ["txt"]
	    }, [_vm._v(_vm._s(img.alt))]), _c('div', {
	      staticClass: ["save"],
	      on: {
	        "click": function($event) {
	          _vm.saveimage(img.src)
	        }
	      }
	    }, [_c('text', {
	      staticStyle: {
	        color: "#fff",
	        padding: "25"
	      }
	    }, [_vm._v("保存")])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });