(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("emojiPicker", [], factory);
	else if(typeof exports === 'object')
		exports["emojiPicker"] = factory();
	else
		root["emojiPicker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_index_styl_vue_type_style_index_0_id_aaa8c7d2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_index_styl_vue_type_style_index_0_id_aaa8c7d2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_index_styl_vue_type_style_index_0_id_aaa8c7d2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_index_styl_vue_type_style_index_0_id_aaa8c7d2_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/emojiPicker/index.vue?vue&type=template&id=aaa8c7d2&scoped=true&lang=pug&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "emoji", staticClass: "emoji" },
    [
      _vm._t("default"),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ],
          staticClass: "emoji-main"
        },
        [
          _c("div", { staticClass: "emoji-main__tab" }, [
            _c(
              "ul",
              { staticClass: "emoji-l-list" },
              _vm._l(_vm.tabCodes, function(v, k) {
                return _c(
                  "li",
                  { key: k, staticClass: "emoji-l-list__item--for-tab" },
                  [
                    _c("span", {
                      staticClass: "emoji-main__entity",
                      class: _vm.tabState[k],
                      domProps: { innerHTML: _vm._s(v) },
                      on: {
                        click: function($event) {
                          return _vm.switchTab(k)
                        }
                      }
                    })
                  ]
                )
              }),
              0
            )
          ]),
          _c("div", { staticClass: "emoji-main__recent" }, [
            _c("p", { staticClass: "emoji-main__text" }, [_vm._v("recent")]),
            _c(
              "ul",
              { staticClass: "emoji-l-list" },
              _vm._l(_vm.recentCodes, function(v, k) {
                return _c("li", {
                  key: k,
                  staticClass: "emoji-l-list__item",
                  domProps: { innerHTML: _vm._s(v) },
                  on: {
                    click: function($event) {
                      return _vm.insertEmoji(v, "recent")
                    }
                  }
                })
              }),
              0
            )
          ]),
          _c(
            "div",
            { staticClass: "emoji-main__body emoji__scroll" },
            _vm._l(_vm.emojiCodes, function(v, k) {
              return _c(
                "div",
                {
                  key: k,
                  staticClass: "emoji-main__tab-view",
                  class: _vm.tabviewState[k]
                },
                [
                  _c(
                    "ul",
                    { staticClass: "emoji-l-list" },
                    _vm._l(v.codes, function(vv, kk) {
                      return _c("li", {
                        key: kk,
                        staticClass: "emoji-l-list__item",
                        domProps: { innerHTML: _vm._s(vv) },
                        on: {
                          click: function($event) {
                            return _vm.insertEmoji(vv)
                          }
                        }
                      })
                    }),
                    0
                  )
                ]
              )
            }),
            0
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/emojiPicker/index.vue?vue&type=template&id=aaa8c7d2&scoped=true&lang=pug&

// CONCATENATED MODULE: ./src/components/emojiPicker/codepoints.js
var emojiCodes = [{
  'catagory': "face",
  'codes': ["&#x1F600;", "&#x1F601;", "&#x1F602;", "&#x1F603;", "&#x1F604;", "&#x1F605;", "&#x1F606;", "&#x1F607;", "&#x1F608;", "&#x1F609;", "&#x1F60A;", "&#x1F60B;", "&#x1F60C;", "&#x1F60D;", "&#x1F60E;", "&#x1F60F;", "&#x1F610;", "&#x1F611;", "&#x1F612;", "&#x1F613;", "&#x1F614;", "&#x1F615;", "&#x1F616;", "&#x1F617;", "&#x1F618;", "&#x1F619;", "&#x1F61A;", "&#x1F61B;", "&#x1F61C;", "&#x1F61D;", "&#x1F61E;", "&#x1F61F;", "&#x1F620;", "&#x1F621;", "&#x1F622;", "&#x1F623;", "&#x1F624;", "&#x1F625;", "&#x1F626;", "&#x1F627;", "&#x1F628;", "&#x1F629;", "&#x1F62A;", "&#x1F62B;", "&#x1F62C;", "&#x1F62D;", "&#x1F62E;", "&#x1F62F;", "&#x1F630;", "&#x1F631;", "&#x1F632;", "&#x1F633;", "&#x1F634;", "&#x1F635;", "&#x1F636;", "&#x1F637;", "&#x1F641;", "&#x1F642;", "&#x1F643;", "&#x1F644;"]
}, {
  'catagory': "hand",
  'codes': ["&#x1F446;", "&#x1F447;", "&#x1F448;", "&#x1F449;", "&#x1F44A;", "&#x1F44B;", "&#x1F44C;", "&#x1F44D;", "&#x1F44E;", "&#x1F44F;", "&#x1F450;", "&#x1F590;", "&#x1F595;", "&#x1F596;"]
}, {
  'catagory': '#sport',
  'codes': ['&#x26BD;', '&#x26BE;', "&#x1F3BD;", "&#x1F3BE;", "&#x1F3BF;", "&#x1F3C0;", "&#x1F3C1;", "&#x1F3C2;", "&#x1F3C3;", "&#x1F3C4;", "&#x1F3C5;", "&#x1F3C6;", "&#x1F3C7;", "&#x1F3C8;", "&#x1F3C9;", "&#x1F3CA;", "&#x1F3CB;", "&#x1F3CC;", "&#x1F3CD;", "&#x1F3CE;", "&#x1F3CF;", "&#x1F3D0;", "&#x1F3D1;", "&#x1F3D2;", "&#x1F3D3;", "&#x1F3F8;", "&#x1F3F9;"]
}, {
  'catagory': "animal",
  'codes': ["&#x1F42D;", "&#x1F42E;", "&#x1F42F;", "&#x1F430;", "&#x1F431;", "&#x1F432;", "&#x1F433;", "&#x1F434;", "&#x1F435;", "&#x1F436;", "&#x1F437;", "&#x1F438;", "&#x1F439;", "&#x1F43A;", "&#x1F43B;", "&#x1F43C;", "&#x1F43D;"]
}];
var tabCodes = ['&#x1F600;', '&#x1F446;', '&#x26BD;', '&#x1F431;'];
var recentCodes = ['&#x1F600;', '&#x1F446;', '&#x26BD;', '&#x1F431;'];

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/components/emojiPicker?vue&type=script&lang=js&

/* harmony default export */ var emojiPicker_vue_type_script_lang_js_ = ({
  props: ['target', 'show'],
  data: function data() {
    return {
      emojiCodes: emojiCodes,
      tabCodes: tabCodes,
      caret: 0,
      tabState: [],
      tabviewState: [],
      showIdx: 0,
      recentCodes: recentCodes
    };
  },
  created: function created() {
    var _this = this;

    this.supportIE9Plus();
    this.tabCodes.forEach(function (_) {
      _this.tabState.push({
        'emoji-js-tab--is-active': false
      });

      _this.tabviewState.push({
        'emoji-js-tabview--is-active': false
      });
    });
  },
  mounted: function mounted() {
    this.addClickEventToTarget();
    this.setPosition();
    this.tabState[this.showIdx]['emoji-js-tab--is-active'] = true;
    this.tabviewState[this.showIdx]['emoji-js-tabview--is-active'] = true;
  },
  methods: {
    insertEmoji: function insertEmoji(codepoint, flag) {
      var html = this.target.innerHTML;
      this.target.innerHTML = html.substr(0, this.caret) + codepoint + html.substr(this.caret);
      codepoint.length < 9 ? this.caret += 1 : this.caret += 2;
      this.setRecent(flag, codepoint);
    },
    setRecent: function setRecent(flag, codepoint) {
      if (this.recentCodes.indexOf(codepoint) >= 0) return;
      flag ? '' : this.recentCodes.length < 7 ? this.recentCodes.unshift(codepoint) : (this.recentCodes.pop(), this.recentCodes.unshift(codepoint));
    },
    addClickEventToTarget: function addClickEventToTarget() {
      var _this2 = this;

      this.target.addEventListener('click', function () {
        _this2.caret = document.getSelection().anchorOffset;
      });
      this.target.addEventListener('keyup', function () {
        _this2.caret = document.getSelection().anchorOffset;
      });
    },
    setPosition: function setPosition() {
      var emoji = this.$refs.emoji,
          trigger = emoji.children[0],
          emojiMain = emoji.children[1],
          top = trigger.offsetTop + trigger.offsetHeight,
          left = trigger.offsetLeft;
      emojiMain.style.top = top + 'px';
      emojiMain.style.left = left + 'px';
    },
    switchTab: function switchTab(k) {
      this.tabState[this.showIdx]['emoji-js-tab--is-active'] = false;
      this.tabviewState[this.showIdx]['emoji-js-tabview--is-active'] = false;
      this.showIdx = k;
      this.tabState[k]['emoji-js-tab--is-active'] = true;
      this.tabviewState[k]['emoji-js-tabview--is-active'] = true;
    },
    supportIE9Plus: function supportIE9Plus() {
      //The color of unicode-emoji-code of IE9+ is only black and white
      window.navigator.userAgent.match(/(MSIE|Trident)/i) !== null ? document.body.style.fontFamily = 'Segoe UI Emoji' : '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/emojiPicker?vue&type=script&lang=js&
 /* harmony default export */ var components_emojiPicker_vue_type_script_lang_js_ = (emojiPicker_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/emojiPicker/index.styl?vue&type=style&index=0&id=aaa8c7d2&lang=stylus&scoped=true&
var emojiPickervue_type_style_index_0_id_aaa8c7d2_lang_stylus_scoped_true_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/emojiPicker/index.vue






/* normalize component */

var component = normalizeComponent(
  components_emojiPicker_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "aaa8c7d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/emojiPicker/index.vue"
/* harmony default export */ var emojiPicker = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
});