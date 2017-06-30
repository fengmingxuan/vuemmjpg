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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(341)
	var __weex_style__ = __webpack_require__(342)
	var __weex_script__ = __webpack_require__(343)

	__weex_define__('@weex-component/3a269c1d77f15086a45965aec3be403e', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/3a269c1d77f15086a45965aec3be403e',undefined,undefined)

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	__webpack_require__(58);
	__webpack_require__(62);
	__webpack_require__(66);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(115);
	__webpack_require__(119);
	__webpack_require__(123);
	__webpack_require__(127);
	__webpack_require__(128);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(55)
	var __weex_style__ = __webpack_require__(56)
	var __weex_script__ = __webpack_require__(57)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(59)
	var __weex_style__ = __webpack_require__(60)
	var __weex_script__ = __webpack_require__(61)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(63)
	var __weex_style__ = __webpack_require__(64)
	var __weex_script__ = __webpack_require__(65)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(71)
	var __weex_style__ = __webpack_require__(72)
	var __weex_script__ = __webpack_require__(73)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(75)
	var __weex_style__ = __webpack_require__(76)
	var __weex_script__ = __webpack_require__(77)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(78);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	module.exports = __webpack_require__(83).Object.assign;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(81);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(96)});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(82)
	  , core      = __webpack_require__(83)
	  , ctx       = __webpack_require__(84)
	  , hide      = __webpack_require__(86)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(85);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(87)
	  , createDesc = __webpack_require__(95);
	module.exports = __webpack_require__(91) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(88)
	  , IE8_DOM_DEFINE = __webpack_require__(90)
	  , toPrimitive    = __webpack_require__(94)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(91) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(89);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(91) && !__webpack_require__(92)(function(){
	  return Object.defineProperty(__webpack_require__(93)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(92)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(89)
	  , document = __webpack_require__(82).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(89);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(97)
	  , gOPS     = __webpack_require__(112)
	  , pIE      = __webpack_require__(113)
	  , toObject = __webpack_require__(114)
	  , IObject  = __webpack_require__(101)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(92)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(98)
	  , enumBugKeys = __webpack_require__(111);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(99)
	  , toIObject    = __webpack_require__(100)
	  , arrayIndexOf = __webpack_require__(104)(false)
	  , IE_PROTO     = __webpack_require__(108)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(101)
	  , defined = __webpack_require__(103);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(102);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(100)
	  , toLength  = __webpack_require__(105)
	  , toIndex   = __webpack_require__(107);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(106)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(106)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(109)('keys')
	  , uid    = __webpack_require__(110);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(82)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(103);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(116)
	var __weex_style__ = __webpack_require__(117)
	var __weex_script__ = __webpack_require__(118)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(120)
	var __weex_style__ = __webpack_require__(121)
	var __weex_script__ = __webpack_require__(122)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(119)
	var __weex_template__ = __webpack_require__(124)
	var __weex_style__ = __webpack_require__(125)
	var __weex_script__ = __webpack_require__(126)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(128)
	var __weex_template__ = __webpack_require__(132)
	var __weex_style__ = __webpack_require__(133)
	var __weex_script__ = __webpack_require__(134)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(129)
	var __weex_style__ = __webpack_require__(130)
	var __weex_script__ = __webpack_require__(131)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 129 */
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
/* 130 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
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
/* 131 */
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
/* 132 */
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
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
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

/***/ }),
/* 133 */
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
	    "height": 88
	  }
	}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

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


/***/ }),
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(142)
	var __weex_style__ = __webpack_require__(143)
	var __weex_script__ = __webpack_require__(144)

	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "shown": function () {return this.showStatusBar},
	      "classList": function () {return ['status_bar_ios', 'status_bar-' + (this.type)]}
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['nav_bar', 'nav_bar-' + (this.type)]},
	      "children": [
	        {
	          "type": "div",
	          "classList": function () {return ['nav_back', 'nav_back-' + (this.type)]},
	          "events": {
	            "click": "nativeback"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "attr": {
	                "src": function () {return this.getImgUrl(this.leftsrc)}
	              },
	              "shown": function () {return this.shownleft}
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "nav_title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['nav_text', 'nav_text-' + (this.type), 'nav_text_top-' + (this.nav_text_top)]},
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "nav_right_menu"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": function () {return ['nav_right_menu', 'nav_back-' + (this.type)]},
	              "shown": function () {return this.shown},
	              "events": {
	                "click": "onright"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img_menu"
	                  ],
	                  "attr": {
	                    "src": function () {return this.getImgUrl('./images/search.png')}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['nav_line', '', 'nav_line-' + (this.type)]}
	    }
	  ]
	}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports = {
	  "nav_bar": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flex": 1,
	    "height": 100,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#fc5677"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#fc5677"
	  },
	  "nav_text": {
	    "fontSize": "20wx",
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 1
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(145);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(53);
	var yoka = __webpack_require__(180);
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	    data: function () {return {
	        title: '  ',
	        type: 0,
	        shown: false,
	        showStatusBar: 0,
	        nav_text_top: 0,
	        shownleft: false,
	        leftsrc: './images/menu.png'

	    }},
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        if (this.platform == 'iOS') {
	            this.showStatusBar = 1;
	        }
	        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	            this.nav_text_top = 1;
	        } else {
	            this.nav_text_top = 0;
	        }
	    },
	    ready: function ready() {},

	    methods: {
	        nativeback: function nativeback(e) {
	            this._parent.togglemenu();
	        },
	        onright: function onright(e) {
	            console.log('navbar == onright');
	            this._parent.onright();
	        },

	        getImgUrl: function getImgUrl(url) {
	            return yoka.getImageUrl(url);
	        },

	        setLeftImage: function setLeftImage(res) {
	            this.leftImage = res;
	        },

	        setRightImage: function setRightImage(res) {
	            this.rightImage = res;
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(146);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(166);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(148);
	__webpack_require__(161);
	module.exports = __webpack_require__(165).f('iterator');

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(149)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(150)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(106)
	  , defined   = __webpack_require__(103);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(151)
	  , $export        = __webpack_require__(81)
	  , redefine       = __webpack_require__(152)
	  , hide           = __webpack_require__(86)
	  , has            = __webpack_require__(99)
	  , Iterators      = __webpack_require__(153)
	  , $iterCreate    = __webpack_require__(154)
	  , setToStringTag = __webpack_require__(158)
	  , getPrototypeOf = __webpack_require__(160)
	  , ITERATOR       = __webpack_require__(159)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(155)
	  , descriptor     = __webpack_require__(95)
	  , setToStringTag = __webpack_require__(158)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(86)(IteratorPrototype, __webpack_require__(159)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(88)
	  , dPs         = __webpack_require__(156)
	  , enumBugKeys = __webpack_require__(111)
	  , IE_PROTO    = __webpack_require__(108)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(93)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(157).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(87)
	  , anObject = __webpack_require__(88)
	  , getKeys  = __webpack_require__(97);

	module.exports = __webpack_require__(91) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(82).document && document.documentElement;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(87).f
	  , has = __webpack_require__(99)
	  , TAG = __webpack_require__(159)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(109)('wks')
	  , uid        = __webpack_require__(110)
	  , Symbol     = __webpack_require__(82).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(99)
	  , toObject    = __webpack_require__(114)
	  , IE_PROTO    = __webpack_require__(108)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	var global        = __webpack_require__(82)
	  , hide          = __webpack_require__(86)
	  , Iterators     = __webpack_require__(153)
	  , TO_STRING_TAG = __webpack_require__(159)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(163)
	  , step             = __webpack_require__(164)
	  , Iterators        = __webpack_require__(153)
	  , toIObject        = __webpack_require__(100);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(150)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(159);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(168);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	module.exports = __webpack_require__(83).Symbol;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(82)
	  , has            = __webpack_require__(99)
	  , DESCRIPTORS    = __webpack_require__(91)
	  , $export        = __webpack_require__(81)
	  , redefine       = __webpack_require__(152)
	  , META           = __webpack_require__(169).KEY
	  , $fails         = __webpack_require__(92)
	  , shared         = __webpack_require__(109)
	  , setToStringTag = __webpack_require__(158)
	  , uid            = __webpack_require__(110)
	  , wks            = __webpack_require__(159)
	  , wksExt         = __webpack_require__(165)
	  , wksDefine      = __webpack_require__(170)
	  , keyOf          = __webpack_require__(171)
	  , enumKeys       = __webpack_require__(172)
	  , isArray        = __webpack_require__(173)
	  , anObject       = __webpack_require__(88)
	  , toIObject      = __webpack_require__(100)
	  , toPrimitive    = __webpack_require__(94)
	  , createDesc     = __webpack_require__(95)
	  , _create        = __webpack_require__(155)
	  , gOPNExt        = __webpack_require__(174)
	  , $GOPD          = __webpack_require__(176)
	  , $DP            = __webpack_require__(87)
	  , $keys          = __webpack_require__(97)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(175).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(113).f  = $propertyIsEnumerable;
	  __webpack_require__(112).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(151)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(86)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(110)('meta')
	  , isObject = __webpack_require__(89)
	  , has      = __webpack_require__(99)
	  , setDesc  = __webpack_require__(87).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(92)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(82)
	  , core           = __webpack_require__(83)
	  , LIBRARY        = __webpack_require__(151)
	  , wksExt         = __webpack_require__(165)
	  , defineProperty = __webpack_require__(87).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(97)
	  , toIObject = __webpack_require__(100);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(97)
	  , gOPS    = __webpack_require__(112)
	  , pIE     = __webpack_require__(113);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(102);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(100)
	  , gOPN      = __webpack_require__(175).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(98)
	  , hiddenKeys = __webpack_require__(111).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(113)
	  , createDesc     = __webpack_require__(95)
	  , toIObject      = __webpack_require__(100)
	  , toPrimitive    = __webpack_require__(94)
	  , has            = __webpack_require__(99)
	  , IE8_DOM_DEFINE = __webpack_require__(90)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(91) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(170)('asyncIterator');

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(170)('observable');

/***/ }),
/* 180 */
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
	    m_mmjpg_m_hot:"http://m.mmjpg.com/hot/"
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
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(83)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(220)
	var __weex_template__ = __webpack_require__(224)
	var __weex_style__ = __webpack_require__(225)
	var __weex_script__ = __webpack_require__(226)

	__weex_define__('@weex-component/pc_main_head_foot_nobar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(221)
	var __weex_style__ = __webpack_require__(222)
	var __weex_script__ = __webpack_require__(223)

	__weex_define__('@weex-component/pc_main_item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 221 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['itemClass', 'itemClass_' + (this.platform) + '-' + (this.skinType)]},
	  "events": {
	    "click": "towebdetail"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "news-bottom"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.stockitem.src}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.stockitem.alt}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.stockitem.other}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['lineClass', 'lineClass-' + (this.skinType)]}
	    }
	  ]
	}

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	module.exports = {
	  "itemClass": {
	    "marginTop": "5wx"
	  },
	  "itemClass_android-0": {
	    "backgroundColor:active": "#dddddd"
	  },
	  "itemClass_android-1": {
	    "backgroundColor:active": "#132237"
	  },
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center"
	  },
	  "news-content": {
	    "marginTop": "5wx",
	    "marginLeft": "10wx",
	    "marginRight": "10wx"
	  },
	  "numClass": {
	    "fontSize": "11wx",
	    "marginLeft": "3wx"
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx"
	  },
	  "textClass-0": {
	    "color": "#BBBBBB"
	  },
	  "textClass-1": {
	    "color": "#666666"
	  },
	  "img": {
	    "width": 750,
	    "height": 900
	  },
	  "lineClass": {
	    "height": "2wx"
	  },
	  "lineClass-0": {
	    "backgroundColor": "#eeeeee"
	  },
	  "lineClass-1": {
	    "backgroundColor": "#0e1929"
	  },
	  "time": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "20wx",
	    "marginTop": "10wx"
	  },
	  "createdt": {
	    "fontSize": "18wx"
	  },
	  "createdt-0": {
	    "color": "#666666"
	  },
	  "createdt-1": {
	    "color": "#999999"
	  }
	}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(53);
	var yoka = __webpack_require__(180);
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	var weexNavigatorModule = __weex_require__('@weex-module/weexNavigatorModule');
	module.exports = {
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        console.log(this.stockitem.picture);
	    },
	    data: function () {return {
	        is_ios_text: 0,
	        platform: '',
	        stockitem: {
	            "href": "http://www.yoka.com/fashion/edittj/2017/0410/50473001074747.shtml",
	            "alt": "这6个穿搭法则如果记住，时髦一整年没问题！",
	            "src": "http://p7.yokacdn.com/pic/YOKA/2017-04-11/U15P1TS1491893036_67597.jpg",
	            title: "",
	            other: ""

	        },
	        skinType: 0
	    }},
	    methods: {
	        towebdetail: function towebdetail(e) {
	            weexEventModule.startWebViewActivity(this.stockitem.href);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": function () {return ['refresh-view', 'refresh-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.refresh_display},
	            "refreshing": function () {return this.refreshing}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "pcmaintoppager",
	              "id": "pcmaintoppagerid",
	              "attr": {
	                "url": function () {return this.taghref}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.stockArray},
	            "value": "stockitem"
	          },
	          "children": [
	            {
	              "type": "pc_main_item",
	              "attr": {
	                "stockitem": function () {return this.stockitem}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "pcmainhotlist",
	              "id": "pcmainhotlistid",
	              "attr": {
	                "href": function () {return this.taghref}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "pcmainlikelist",
	              "id": "pcmainlikelistid",
	              "attr": {
	                "href": function () {return this.taghref}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "pcmainmmgrid",
	              "id": "pcmainmmgridid",
	              "attr": {
	                "href": function () {return this.taghref}
	              }
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": function () {return ['loading-view', 'loading-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.showLoading}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "加载更多"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 225 */
/***/ (function(module, exports) {

	module.exports = {
	  "redNum": {
	    "height": 120,
	    "width": 720,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flex": 1
	  },
	  "list": {
	    "width": 750
	  },
	  "content_class-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "content_class-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": "50wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-arrow": {
	    "marginTop": "3wx",
	    "height": "12wx",
	    "width": "200wx",
	    "fontSize": "12wx",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow-0": {
	    "color": "#BBBBBB"
	  },
	  "refresh-arrow-1": {
	    "color": "#666666"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": "40wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "indicator": {
	    "height": "25wx",
	    "width": "25wx",
	    "color": "#889967"
	  },
	  "divUnReadClass": {
	    "flex": 1,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "paddingTop": "20wx"
	  },
	  "unReadtextlass": {
	    "fontSize": "14wx"
	  },
	  "unReadtextlass-0": {
	    "color": "#666666",
	    "fontSize": "14wx"
	  },
	  "unReadtextlass-1": {
	    "color": "#999999",
	    "fontSize": "14wx"
	  },
	  "unReadNumclass": {
	    "marginLeft": "5wx",
	    "marginRight": "5wx",
	    "fontSize": "14wx"
	  },
	  "unReadNumclass-0": {
	    "color": "#1191f6",
	    "fontSize": "14wx"
	  },
	  "unReadNumclass-1": {
	    "color": "#005e91",
	    "fontSize": "14wx"
	  }
	}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(141);
	__webpack_require__(227);
	__webpack_require__(235);
	__webpack_require__(243);
	__webpack_require__(251);
	__webpack_require__(53);
	__webpack_require__(220);
	var mmjpg = __webpack_require__(180);
	var stream = __weex_require__('@weex-module/stream');
	var modal = __weex_require__('@weex-module/modal');
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var storage = __weex_require__('@weex-module/storage');
	module.exports = {

	    data: function () {return {
	        refreshing: 'false',
	        refresh_display: 'show',
	        stockArray: [],
	        msg: '下拉刷新',
	        pageNo: 1,
	        skinType: 0,
	        showLoading: 'hide',
	        screenHeight: 0,
	        platform: '',
	        title: 'MMJPG',
	        showleft: true,
	        shown: true,
	        taghref: mmjpg.getm_mmjpg(),
	        isFirst: 1
	    }},
	    created: function created() {
	        var self = this;
	        this.platform = this.$getConfig().env.platform;
	        console.log('isFirst===' + self.isFirst + ';taghref==' + self.taghref);
	    },
	    methods: {
	        autoRefresh: function autoRefresh() {
	            this.refresh();
	            this.$vm('pcmaintoppagerid').autoRefresh();
	            this.$vm('pcmainhotlistid').autoRefresh();
	            this.$vm('pcmainlikelistid').autoRefresh();
	            this.$vm('pcmainmmgridid').autoRefresh();
	        },
	        togglemenu: function togglemenu() {
	            this._parent.toggle();
	        },
	        onright: function onright() {
	            this._parent.onright();
	        },
	        onloading: function onloading(e) {
	            console.log('onloading');
	            var self = this;
	            self.showLoading = 'show';
	            self.pageNo = self.pageNo + 1;
	            self.refresh();
	        },

	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.msg = '下拉刷新';
	            self.refresh_display = 'show';
	            self.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            self.isFirst == 0;
	            var url = self.taghref;
	            if (self.pageNo == 1) {
	                url = self.taghref;
	            } else {
	                url = self.taghref + "home/" + self.pageNo;
	            }

	            var params = {
	                url: url,
	                pageNo: self.pageNo
	            };
	            weexJsoupModule.pcmainlist(params, function (e) {
	                self.refresh_display = 'hide';
	                self.showLoading = 'hide';
	                self.refreshing = "false";
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                if (self.pageNo == 1) {
	                    self.stockArray.splice(0, self.stockArray.length);
	                }
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.stockArray.push(tag);
	                        }
	                    }
	                }
	            });
	        }

	    }

	};}
	/* generated by weex-loader */


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(228)
	var __weex_template__ = __webpack_require__(232)
	var __weex_style__ = __webpack_require__(233)
	var __weex_script__ = __webpack_require__(234)

	__weex_define__('@weex-component/pcmaintoppager', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(229)
	var __weex_style__ = __webpack_require__(230)
	var __weex_script__ = __webpack_require__(231)

	__weex_define__('@weex-component/slider-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 229 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "image",
	  "classList": [
	    "slider-item"
	  ],
	  "attr": {
	    "src": function () {return this.item.src}
	  },
	  "events": {
	    "click": "towebdetail"
	  }
	}

/***/ }),
/* 230 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider-item": {
	    "width": 750,
	    "height": 500
	  }
	}

/***/ }),
/* 231 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	module.exports = {
	    data: function () {return {
	        item: {
	            src: '',
	            alt: '',
	            href: ''
	        }

	    }},
	    created: function created() {},
	    methods: {
	        towebdetail: function towebdetail(e) {
	            weexEventModule.startWebViewActivity(this.item.href);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "slider",
	  "classList": [
	    "slider"
	  ],
	  "attr": {
	    "interval": function () {return this.interval},
	    "autoPlay": "false"
	  },
	  "children": [
	    {
	      "type": "indicator",
	      "classList": [
	        "indicator"
	      ]
	    },
	    {
	      "type": "div",
	      "repeat": {
	        "expression": function () {return this.sliderPages},
	        "value": "sliderPage"
	      },
	      "children": [
	        {
	          "type": "slider-item",
	          "attr": {
	            "item": function () {return this.sliderPage}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 233 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider": {
	    "flexDirection": "row",
	    "width": 750,
	    "flex": 1,
	    "height": 500
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 500,
	    "top": 230,
	    "left": 10,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "rgb(40, 96, 144)"
	  }
	}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(53);
	__webpack_require__(228);
	var mmjpg = __webpack_require__(180);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	module.exports = {
	    data: function () {return {
	        interval: 1000,
	        autoPlay: true,
	        sliderPages: [],
	        url: mmjpg.getm_mmjpg(),
	        pageNo: 1,
	        index: 0
	    }},
	    methods: {
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcmaintoppage(self.url, function (e) {
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var stockitem = json.list[i];
	                            self.sliderPages.push(stockitem);
	                        }
	                    }
	                }
	            });
	        },
	        autoRefresh: function autoRefresh() {
	            this.refresh();
	        }
	    },
	    created: function created() {
	        var self = this;
	    }

	};}
	/* generated by weex-loader */


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(236)
	var __weex_template__ = __webpack_require__(240)
	var __weex_style__ = __webpack_require__(241)
	var __weex_script__ = __webpack_require__(242)

	__weex_define__('@weex-component/pcmainhotlist', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(237)
	var __weex_style__ = __webpack_require__(238)
	var __weex_script__ = __webpack_require__(239)

	__weex_define__('@weex-component/pcmainhotlistitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['itemClass', 'itemClass_' + (this.platform) + '-' + (this.skinType)]},
	  "events": {
	    "click": function ($event) {this.towebdetail(this.tag.href,$event)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "news-bottom"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.tag.alt}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['lineClass', 'lineClass-' + (this.skinType)]}
	    }
	  ]
	}

/***/ }),
/* 238 */
/***/ (function(module, exports) {

	module.exports = {
	  "itemClass": {
	    "margin": 5
	  },
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "margin": 5
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx",
	    "flex": 1,
	    "alignItems": "flex-start",
	    "padding": 10
	  },
	  "textClass-0": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#dddddd"
	  },
	  "textClass-1": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#132237"
	  },
	  "lineClass": {
	    "height": 2
	  },
	  "lineClass-0": {
	    "backgroundColor": "#eeeeee"
	  },
	  "lineClass-1": {
	    "backgroundColor": "#0e1929"
	  }
	}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');

	module.exports = {
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	    },
	    data: function () {return {
	        platform: '',
	        tag: {
	            "href": "http://www.yoka.com/fashion/edittj/2017/0410/50473001074747.shtml",
	            "alt": "这6个穿搭法则如果记住，时髦一整年没问题！"
	        },

	        skinType: 0
	    }},
	    methods: {
	        towebdetail: function towebdetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": function () {return ['refresh-view', 'refresh-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.refresh_display},
	            "refreshing": function () {return this.refreshing}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.tags},
	            "value": "tag"
	          },
	          "children": [
	            {
	              "type": "pcmainhotlistitem",
	              "attr": {
	                "tag": function () {return this.tag}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 241 */
/***/ (function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "content_class-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "content_class-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": "50wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-arrow": {
	    "marginTop": "3wx",
	    "height": "12wx",
	    "width": "200wx",
	    "fontSize": "12wx",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow-0": {
	    "color": "#BBBBBB"
	  },
	  "refresh-arrow-1": {
	    "color": "#666666"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": "40wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "indicator": {
	    "height": "25wx",
	    "width": "25wx",
	    "color": "#889967"
	  }
	}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(236);
	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var storage = __weex_require__('@weex-module/storage');
	module.exports = {
	    data: function () {return {
	        tags: [],
	        refreshing: 'false',
	        refresh_display: 'show',
	        skinType: 0,
	        showLoading: 'hide',
	        href: mmjpg.getm_mmjpg()
	    }},
	    methods: {
	        autoRefresh: function autoRefresh() {
	            this.refresh();
	        },
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.refresh();
	        },
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcmainheadlist(self.href, function (e) {
	                self.refresh_display = 'hide';
	                self.showLoading = 'hide';
	                self.refreshing = "false";
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.tags.splice(0, self.tags.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.tags.push(tag);
	                        }
	                    }
	                }
	            });
	        }
	    },
	    created: function created() {
	        var self = this;
	    },
	    ready: function ready() {}

	};}
	/* generated by weex-loader */


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(244)
	var __weex_template__ = __webpack_require__(248)
	var __weex_style__ = __webpack_require__(249)
	var __weex_script__ = __webpack_require__(250)

	__weex_define__('@weex-component/pcmainlikelist', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(245)
	var __weex_style__ = __webpack_require__(246)
	var __weex_script__ = __webpack_require__(247)

	__weex_define__('@weex-component/pcmainlikelistitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 245 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['itemClass', 'itemClass_' + (this.platform) + '-' + (this.skinType)]},
	  "events": {
	    "click": function ($event) {this.towebdetail(this.tag.href,$event)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "news-bottom"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.tag.src}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.tag.alt}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['lineClass', 'lineClass-' + (this.skinType)]}
	    }
	  ]
	}

/***/ }),
/* 246 */
/***/ (function(module, exports) {

	module.exports = {
	  "itemClass": {
	    "margin": 5
	  },
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "margin": 5
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx",
	    "flex": 1,
	    "alignItems": "flex-start",
	    "padding": 10
	  },
	  "img": {
	    "width": 200,
	    "height": 200
	  },
	  "textClass-0": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#dddddd"
	  },
	  "textClass-1": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#132237"
	  },
	  "lineClass": {
	    "height": 2
	  },
	  "lineClass-0": {
	    "backgroundColor": "#eeeeee"
	  },
	  "lineClass-1": {
	    "backgroundColor": "#0e1929"
	  }
	}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');

	module.exports = {
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	    },
	    data: function () {return {
	        platform: '',
	        tag: {
	            "href": "http://www.yoka.com/fashion/edittj/2017/0410/50473001074747.shtml",
	            "alt": "这6个穿搭法则如果记住，时髦一整年没问题！",
	            "src": ""
	        },

	        skinType: 0
	    }},
	    methods: {
	        towebdetail: function towebdetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 248 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": function () {return ['refresh-view', 'refresh-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.refresh_display},
	            "refreshing": function () {return this.refreshing}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.tags},
	            "value": "tag"
	          },
	          "children": [
	            {
	              "type": "pcmainlikelistitem",
	              "attr": {
	                "tag": function () {return this.tag}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 249 */
/***/ (function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "content_class-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "content_class-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": "50wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-arrow": {
	    "marginTop": "3wx",
	    "height": "12wx",
	    "width": "200wx",
	    "fontSize": "12wx",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow-0": {
	    "color": "#BBBBBB"
	  },
	  "refresh-arrow-1": {
	    "color": "#666666"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": "40wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "indicator": {
	    "height": "25wx",
	    "width": "25wx",
	    "color": "#889967"
	  }
	}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(244);
	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var storage = __weex_require__('@weex-module/storage');
	module.exports = {
	    data: function () {return {
	        tags: [],
	        refreshing: 'false',
	        refresh_display: 'show',
	        skinType: 0,
	        showLoading: 'hide',
	        href: mmjpg.getm_mmjpg()
	    }},
	    methods: {
	        autoRefresh: function autoRefresh() {
	            this.refresh();
	        },
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.refresh();
	        },
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcmainlikelist(self.href, function (e) {
	                self.refresh_display = 'hide';
	                self.showLoading = 'hide';
	                self.refreshing = "false";
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.tags.splice(0, self.tags.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];
	                            self.tags.push(tag);
	                        }
	                    }
	                }
	            });
	        }
	    },
	    created: function created() {
	        var self = this;
	    },
	    ready: function ready() {}

	};}
	/* generated by weex-loader */


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(252)
	var __weex_template__ = __webpack_require__(256)
	var __weex_style__ = __webpack_require__(257)
	var __weex_script__ = __webpack_require__(258)

	__weex_define__('@weex-component/pcmainmmgrid', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(253)
	var __weex_style__ = __webpack_require__(254)
	var __weex_script__ = __webpack_require__(255)

	__weex_define__('@weex-component/pcmainmmgriditem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 253 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['itemClass', 'itemClass_' + (this.platform) + '-' + (this.skinType)]},
	  "events": {
	    "click": function ($event) {this.towebdetail(this.tag.href,$event)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "news-bottom"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.tag.src}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.tag.alt}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "news-bottom"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.tag.src2}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['tucao_numClass', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.tag.alt2}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['lineClass', 'lineClass-' + (this.skinType)]}
	    }
	  ]
	}

/***/ }),
/* 254 */
/***/ (function(module, exports) {

	module.exports = {
	  "itemClass": {
	    "margin": 5,
	    "flexDirection": "row"
	  },
	  "news-bottom": {
	    "flex": 1,
	    "alignItems": "center",
	    "flexDirection": "column",
	    "margin": 5
	  },
	  "tucao_numClass": {
	    "fontSize": "12wx",
	    "marginLeft": "4wx",
	    "flex": 1,
	    "alignItems": "flex-start",
	    "padding": 10
	  },
	  "img": {
	    "width": 200,
	    "height": 200
	  },
	  "textClass-0": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#dddddd"
	  },
	  "textClass-1": {
	    "color:active": "#666666",
	    "backgroundColor:active": "#132237"
	  },
	  "lineClass": {
	    "height": 2
	  },
	  "lineClass-0": {
	    "backgroundColor": "#eeeeee"
	  },
	  "lineClass-1": {
	    "backgroundColor": "#0e1929"
	  }
	}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');

	module.exports = {
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	    },
	    data: function () {return {
	        platform: '',
	        tag: {
	            "href": "http://www.yoka.com/fashion/edittj/2017/0410/50473001074747.shtml",
	            "alt": "这6个穿搭法则如果记住，时髦一整年没问题！",
	            "src": "",
	            "href2": "http://www.yoka.com/fashion/edittj/2017/0410/50473001074747.shtml",
	            "alt2": "这6个穿搭法则如果记住，时髦一整年没问题！",
	            "src2": ""
	        },

	        skinType: 0
	    }},
	    methods: {
	        towebdetail: function towebdetail(e) {
	            weexEventModule.startWebViewActivity(e);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 256 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": function () {return ['refresh-view', 'refresh-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.refresh_display},
	            "refreshing": function () {return this.refreshing}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.tags},
	            "value": "tag"
	          },
	          "children": [
	            {
	              "type": "pcmainmmgriditem",
	              "attr": {
	                "tag": function () {return this.tag}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 257 */
/***/ (function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "content_class-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "content_class-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": "50wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-arrow": {
	    "marginTop": "3wx",
	    "height": "12wx",
	    "width": "200wx",
	    "fontSize": "12wx",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow-0": {
	    "color": "#BBBBBB"
	  },
	  "refresh-arrow-1": {
	    "color": "#666666"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": "40wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "indicator": {
	    "height": "25wx",
	    "width": "25wx",
	    "color": "#889967"
	  }
	}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(252);
	__webpack_require__(53);
	var mmjpg = __webpack_require__(180);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var storage = __weex_require__('@weex-module/storage');
	module.exports = {
	    data: function () {return {
	        tags: [],
	        refreshing: 'false',
	        refresh_display: 'show',
	        skinType: 0,
	        showLoading: 'hide',
	        href: mmjpg.getm_mmjpg()
	    }},
	    methods: {
	        autoRefresh: function autoRefresh() {
	            this.refresh();
	        },
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.refresh();
	        },
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcmainmmlist(self.href, function (e) {
	                self.refresh_display = 'hide';
	                self.showLoading = 'hide';
	                self.refreshing = "false";
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.tags.splice(0, self.tags.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i += 2) {
	                            var tag = json.list[i];
	                            var tag2 = json.list[i + 1];
	                            if (tag2 == undefined) {
	                                tag2 = tag;
	                            }
	                            var tagg = {
	                                href: tag.href,
	                                src: tag.src,
	                                alt: tag.alt,
	                                href2: tag2.href,
	                                src2: tag2.src,
	                                alt2: tag2.alt
	                            };
	                            self.tags.push(tagg);
	                        }
	                    }
	                }
	            });
	        }
	    },
	    created: function created() {
	        var self = this;
	    },
	    ready: function ready() {}

	};}
	/* generated by weex-loader */


/***/ }),
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['content', 'content-' + (this.skinType)]},
	  "children": [
	    {
	      "type": "navbar",
	      "shown": function () {return this.navBar_display},
	      "attr": {
	        "title": function () {return this.title},
	        "type": function () {return this.skinType},
	        "shownleft": "true",
	        "shown": function () {return this.shown}
	      }
	    },
	    {
	      "type": "scroller",
	      "classList": [
	        "tabclass"
	      ],
	      "attr": {
	        "scrollDirection": "horizontal"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "top_tab_item"
	          ],
	          "repeat": {
	            "expression": function () {return this.buttomData},
	            "value": "item"
	          },
	          "events": {
	            "click": function ($event) {this.setIndex(this.item.index,$event)}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "pointdiv"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['rednum', 'rednum-' + (this.davmargin)]},
	                  "shown": function () {return this.davNum!=0&&this.item.index==1},
	                  "attr": {
	                    "value": function () {return this.davNum}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['item_text', this.item.itemNameColor]},
	              "attr": {
	                "value": function () {return this.item.itemName}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tablineclass"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "top_item_line"
	          ],
	          "repeat": {
	            "expression": function () {return this.buttomData},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": function () {return ['lineClass', this.item.itemLineColor]}
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "append": "tree",
	      "attr": {
	        "interval": "1000",
	        "needloop": "false",
	        "autoPlay": "false",
	        "index": function () {return this.indexMetting},
	        "offscreenpagelimit": "3"
	      },
	      "events": {
	        "change": "onchange"
	      },
	      "style": {
	        "height": function () {return (this.screenHeight) + 'wx'}
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.buttomData},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "pc_main_head_foot_nobar",
	              "id": function () {return this.item.id},
	              "attr": {
	                "taghref": function () {return this.item.href},
	                "isfirst": function () {return this.item.isFirst}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 342 */
/***/ (function(module, exports) {

	module.exports = {
	  "pointdiv": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "15wx",
	    "width": "18wx",
	    "flex": 1,
	    "marginLeft": "75wx",
	    "marginTop": "2wx",
	    "flexDirection": "column"
	  },
	  "rednum": {
	    "backgroundColor": "#ff531e",
	    "width": "15wx",
	    "height": "12wx",
	    "borderRadius": 30,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#ff531e",
	    "fontSize": "8wx",
	    "paddingTop": "2wx",
	    "paddingBottom": "2wx"
	  },
	  "rednum-0": {
	    "paddingRight": "2wx",
	    "paddingLeft": "4wx"
	  },
	  "rednum-1": {
	    "paddingRight": "2wx",
	    "paddingLeft": "2wx"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "width": 750,
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "marginBottom": "5wx"
	  },
	  "content": {
	    "flexDirection": "column",
	    "width": 750
	  },
	  "tabclass": {
	    "width": 750,
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "bottom": 0,
	    "left": 0,
	    "right": 0
	  },
	  "content-0": {
	    "backgroundColor": "#F6F6F6"
	  },
	  "content-1": {
	    "backgroundColor": "#15253d"
	  },
	  "tabclass-0": {
	    "backgroundColor": "#333333"
	  },
	  "tabclass-1": {
	    "backgroundColor": "#132237"
	  },
	  "top_tab_item": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": 150,
	    "marginTop": -40
	  },
	  "img": {
	    "width": "20wx",
	    "height": "20wx"
	  },
	  "item_text": {
	    "fontSize": "15wx",
	    "color": "#666666",
	    "flex": 1,
	    "top": "-5wx",
	    "textAlign": "center"
	  },
	  "tablineclass": {
	    "width": 750,
	    "height": "2wx",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "top_item_line": {
	    "flex": 1,
	    "height": "2wx"
	  },
	  "item_text-0": {
	    "color": "#555555"
	  },
	  "item_text-1": {
	    "color": "#999999"
	  },
	  "item_text-select-0": {
	    "color": "#1191f6"
	  },
	  "item_text-select-1": {
	    "color": "#005e91"
	  },
	  "lineClass": {
	    "flex": 1,
	    "height": "2wx"
	  },
	  "select_line_color-0": {
	    "backgroundColor": "#1191f6"
	  },
	  "select_line_color-1": {
	    "backgroundColor": "#005e91"
	  },
	  "unselect_line_color-0": {
	    "backgroundColor": "#DDDDDD"
	  },
	  "unselect_line_color-1": {
	    "backgroundColor": "#0e1929"
	  }
	}

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(185);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(141);
	__webpack_require__(219);
	var mmjpg = __webpack_require__(180);
	var weexJsoupModule = __weex_require__('@weex-module/weexJsoupModule');
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	__webpack_require__(53);
	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	module.exports = {
	    data: function () {return {
	        skinType: 0,
	        eventCnt: 0,
	        togglePlayMsg: 'pause',
	        indexMetting: 0,
	        title: '',
	        navBar_display: true,
	        shown: false,
	        screenHeight: 0,
	        platform: 'unknown',

	        buttomData: [],
	        davNum: 0,
	        davmargin: 0
	    }},
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        var cskinType = this.$getConfig().skinType;
	        if (this.platform == 'iOS') {
	            this.screenHeight = this.$getConfig().env.deviceHeight / this.$getConfig().env.scale - 64;
	            this.navBar_display = false;
	            var event_ios = __weex_require__('@weex-module/event');
	            event_ios.setNavbarTitle(this.title);
	        }
	        this.refresh();
	    },

	    methods: {
	        refresh: function refresh() {
	            var self = this;
	            weexJsoupModule.pcsubnav(mmjpg.getm_mmjpg(), function (e) {
	                var json;
	                json = eval('(' + e + ')');
	                console.log('json===' + json);
	                self.buttomData.splice(0, self.buttomData.length);
	                if (json.list) {
	                    if (json.list && json.list.length > 0) {
	                        for (var i = 0; i < json.list.length; i++) {
	                            var tag = json.list[i];

	                            var tab = {
	                                index: i,
	                                itemName: tag.alt,
	                                itemNameColor: "item_text-select-0",
	                                itemLineColor: "select_line_color-0",
	                                id: "point_sub" + i,
	                                href: tag.href,
	                                isFirst: 1
	                            };
	                            console.log('tab===' + (0, _stringify2.default)(tab));
	                            self.buttomData.push(tab);
	                        }
	                    }
	                }
	            });
	        },
	        onchange: function onchange(params) {
	            var index = params.index;
	            this.setIndex(index);
	        },
	        setIndex: function setIndex(index) {
	            this.indexMetting = index;
	            this.title = this.buttomData[index].itemName;

	            for (var i = 0; i < this.buttomData.length; i++) {
	                var tabItem = this.buttomData[i];
	                if (i == index) {
	                    tabItem.imgUrl = tabItem.imgUrlSelect;
	                    tabItem.itemNameColor = "item_text-select-" + this.skinType;
	                    tabItem.itemLineColor = "select_line_color-" + this.skinType;
	                    if (this.$vm('point_sub' + i).isFirst == 1) {
	                        this.$vm('point_sub' + i).autoRefresh();
	                    }
	                } else {
	                    tabItem.imgUrl = tabItem.imgUrlUnSelect;
	                    tabItem.itemNameColor = "item_text-" + this.skinType;
	                    tabItem.itemLineColor = "unselect_line_color-" + this.skinType;
	                }
	            }
	        }
	    },
	    ready: function ready() {
	        this.indexMetting = 0;
	        this.setIndex(this.indexMetting);
	    }
	};}
	/* generated by weex-loader */


/***/ })
/******/ ]);