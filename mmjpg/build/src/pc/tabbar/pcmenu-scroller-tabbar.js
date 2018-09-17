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

	var __weex_template__ = __webpack_require__(388)
	var __weex_script__ = __webpack_require__(389)

	__weex_define__('@weex-component/4b2e1054665fa62688444c2cd975de88', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/4b2e1054665fa62688444c2cd975de88',undefined,undefined)

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

	var BASE_URL = {
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
	        if(BASE_URL.IP.indexOf('code.taobao.org')!=-1){
	            url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg/trunk' + path.substring(1, path.length);
	        }else{
	            url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);
	        }


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
	            if(host.indexOf('code.taobao.org')!=-1){
	                nativeBase = BASE_URL.HTTP + host + '/mmjpg/trunk/build/src/';
	            }else{
	                nativeBase = BASE_URL.HTTP + host + '/mmjpg/build/src/';
	            }

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(212), __esModule: true };

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(83);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column",
	    "height": function () {return this.deviceHeight}
	  },
	  "children": [
	    {
	      "type": "wxc-scroller-tabbar",
	      "attr": {
	        "tabItems": function () {return this.tabItems}
	      }
	    }
	  ]
	}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(211);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(390);
	var mmjpg = __webpack_require__(143);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var storage = __weex_require__('@weex-module/storage');
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	module.exports = {
	    data: function () {return {
	        deviceHeight: 0,
	        tabItems: []
	    }},
	    created: function created() {
	        var self = this;

	        self.deviceHeight = 1300;
	        console.log('deviceHeight==' + self.deviceHeight);
	        self.refresh();
	    },
	    methods: {
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcsubnav(mmjpg.getm_mmjpg(), function (e) {
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.tabItems.splice(0, self.tabItems.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        self.parseJSON(json);
	                        var paramsCache = {
	                            url: mmjpg.getm_mmjpg(),
	                            typename: "pcsubnav"
	                        };
	                        weexEventModule.saveCache(paramsCache, json, function (ee) {});
	                    } else {
	                        console.log('异常====');

	                        var paramsCache = {
	                            url: mmjpg.getm_mmjpg(),
	                            typename: "pcsubnav"
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
	                var tab = {
	                    index: i,
	                    title: tag.alt,
	                    titleColor: '#000000',
	                    icon: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
	                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
	                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
	                    src: mmjpg.getPathUrl('pc/main/pc_main.js', false),
	                    visibility: 'visible',
	                    taghref: tag.href
	                };
	                if (i == 0) {
	                    tab.visibility = 'visible';
	                } else {
	                    tab.visibility = 'hidden';
	                }
	                self.tabItems.push(tab);
	            }
	        },
	        ready: function ready(e) {
	            var vm = this;
	            vm.$on('tabBar.onClick', function (e) {
	                var detail = e.detail;
	                nativeLog('$dispatch tabBar.onClick ' + detail.index);

	                var taghref = vm.tabItems[detail.index].taghref;
	                storage.setItem('taghref', taghref, function (s) {
	                    console.log('set [taghref]:' + (0, _stringify2.default)(s));
	                });
	            });
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(391)
	var __weex_template__ = __webpack_require__(395)
	var __weex_style__ = __webpack_require__(396)
	var __weex_script__ = __webpack_require__(397)

	__weex_define__('@weex-component/wxc-scroller-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(392)
	var __weex_style__ = __webpack_require__(393)
	var __weex_script__ = __webpack_require__(394)

	__weex_define__('@weex-component/wxc-scroller-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),

/***/ 392:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88,
	    "width": 100
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        index: 0,
	        title: '',
	        titleColor: '#000000',
	        icon: '',
	        backgroundColor: '#ffffff'
	    }},
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var vm = this;
	            var params = {
	                index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),

/***/ 395:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "children": [
	        {
	          "type": "scroller",
	          "classList": [
	            "scroller"
	          ],
	          "attr": {
	            "scrollDirection": "horizontal"
	          },
	          "children": [
	            {
	              "type": "wxc-scroller-tabitem",
	              "repeat": function () {return this.tabItems},
	              "attr": {
	                "index": function () {return this.index},
	                "icon": function () {return this.icon},
	                "title": function () {return this.title},
	                "titleColor": function () {return this.titleColor}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88,
	    "width": 750
	  },
	  "scroller": {
	    "flexDirection": "row",
	    "height": 88
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 88,
	    "width": 100,
	    "backgroundColor": "#00BDFF",
	    "margin": 2
	  }
	}

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(391);
	module.exports = {
	    data: function () {return {
	        tabItems: [],
	        selectedIndex: 0,
	        selectedColor: '#ff0000',
	        unselectedColor: '#000000'
	    }},
	    created: function created() {
	        this.selected(this.selectedIndex);

	        this.$on('tabItem.onClick', function (e) {
	            var detail = e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	                index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	        });
	    },
	    methods: {
	        selected: function selected(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.icon = tabItem.selectedImage;
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.visibility = 'visible';
	                } else {
	                    tabItem.icon = tabItem.image;
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.visibility = 'hidden';
	                }
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });