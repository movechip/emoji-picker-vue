!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("emojiPicker",[],e):"object"==typeof exports?exports.emojiPicker=e():t.emojiPicker=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"emoji",staticClass:"emoji"},[t._t("default"),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"emoji-main"},[i("div",{staticClass:"emoji-main__tab"},[i("ul",{staticClass:"emoji-l-list"},t._l(t.tabCodes,function(e,n){return i("li",{key:n,staticClass:"emoji-l-list__item--for-tab"},[i("span",{staticClass:"emoji-main__entity",class:t.tabState[n],domProps:{innerHTML:t._s(e)},on:{click:function(e){return t.switchTab(n)}}})])}),0)]),i("div",{staticClass:"emoji-main__recent"},[i("p",{staticClass:"emoji-main__text"},[t._v("recent")]),i("ul",{staticClass:"emoji-l-list"},t._l(t.recentCodes,function(e,n){return i("li",{key:n,staticClass:"emoji-l-list__item",domProps:{innerHTML:t._s(e)},on:{click:function(i){return t.insertEmoji(e,"recent")}}})}),0)]),i("div",{ref:"emojibody",staticClass:"emoji-main__body emoji__scroll",style:t.defaultStyle},t._l(t.emojiCodes,function(e,n){return i("div",{key:n,staticClass:"emoji-main__tab-view",class:t.tabviewState[n]},[i("ul",{staticClass:"emoji-l-list"},t._l(e.codes,function(e,n){return i("li",{key:n,staticClass:"emoji-l-list__item",domProps:{innerHTML:t._s(e)},on:{click:function(i){return t.insertEmoji(e)}}})}),0)])}),0)])],2)};n._withStripped=!0;var o=[{catagory:"face",codes:["&#x1F600;","&#x1F601;","&#x1F602;","&#x1F603;","&#x1F604;","&#x1F605;","&#x1F606;","&#x1F607;","&#x1F608;","&#x1F609;","&#x1F60A;","&#x1F60B;","&#x1F60C;","&#x1F60D;","&#x1F60E;","&#x1F60F;","&#x1F610;","&#x1F611;","&#x1F612;","&#x1F613;","&#x1F614;","&#x1F615;","&#x1F616;","&#x1F617;","&#x1F618;","&#x1F619;","&#x1F61A;","&#x1F61B;","&#x1F61C;","&#x1F61D;","&#x1F61E;","&#x1F61F;","&#x1F620;","&#x1F621;","&#x1F622;","&#x1F623;","&#x1F624;","&#x1F625;","&#x1F626;","&#x1F627;"]},{catagory:"hand",codes:["&#x1F446;","&#x1F447;","&#x1F448;","&#x1F449;","&#x1F44A;","&#x1F44B;","&#x1F44C;","&#x1F44D;","&#x1F44E;","&#x1F44F;","&#x1F450;"]},{catagory:"#sport",codes:["&#x26BD;","&#x26BE;","&#x1F3BD;","&#x1F3BE;","&#x1F3BF;","&#x1F3C0;","&#x1F3C1;","&#x1F3C2;","&#x1F3C3;","&#x1F3C4;","&#x1F3C6;","&#x1F3C7;","&#x1F3C8;","&#x1F3C9;","&#x1F3CA;"]},{catagory:"animal",codes:["&#x1F42D;","&#x1F42E;","&#x1F42F;","&#x1F430;","&#x1F431;","&#x1F432;","&#x1F433;","&#x1F434;","&#x1F435;","&#x1F436;","&#x1F437;","&#x1F438;","&#x1F439;","&#x1F43A;","&#x1F43B;","&#x1F43C;","&#x1F43D;"]}],s=["&#x1F600;","&#x1F446;","&#x26BD;","&#x1F431;"],r=["&#x1F600;","&#x1F446;","&#x26BD;","&#x1F431;"],a={props:{target:{required:!0},show:{type:Boolean,required:!0},config:{type:Object,default:null}},data:function(){return{emojiCodes:o,tabCodes:s,caret:0,tabState:[],tabviewState:[],showIdx:0,recentCodes:r,defaultStyle:{width:"288px",height:"180px"}}},created:function(){var t=this;this.supportIE9Plus(),this.tabCodes.forEach(function(e){t.tabState.push({"emoji-js-tab--is-active":!1}),t.tabviewState.push({"emoji-js-tabview--is-active":!1})})},mounted:function(){this.setPosition(),this.setStyle(),this.tabState[this.showIdx]["emoji-js-tab--is-active"]=!0,this.tabviewState[this.showIdx]["emoji-js-tabview--is-active"]=!0,this.target&&this.initTarget()},watch:{target:function(){this.initTarget()}},methods:{insertEmoji:function(t,e){var i=this.target.innerHTML;this.target.innerHTML=i.substr(0,this.caret)+t+i.substr(this.caret),t.length<9?this.caret+=1:this.caret+=2,this.setRecent(e,t)},initTarget:function(){if("HTMLDivElement"!==Object.prototype.toString.call(this.target).slice(8,-1))throw new TypeError("prop [target] must be the element of input or div with contenteditable");this.addClickEventToTarget()},setRecent:function(t,e){this.recentCodes.indexOf(e)>=0||!t&&(this.recentCodes.length<7?this.recentCodes.unshift(e):(this.recentCodes.pop(),this.recentCodes.unshift(e)))},addClickEventToTarget:function(){var t=this;this.target.addEventListener("click",function(){t.caret=document.getSelection().anchorOffset}),this.target.addEventListener("keyup",function(){t.caret=document.getSelection().anchorOffset})},setPosition:function(){var t=this.$refs.emoji,e=t.children[0],i=t.children[1],n=e.offsetTop+e.offsetHeight,o=e.offsetLeft;i.style.top=n+"px",i.style.left=o+"px"},setStyle:function(){if(this.config){var t=this.config.width,e=this.config.height;t&&(this.defaultStyle.width=t),e&&(this.defaultStyle.height=e)}},switchTab:function(t){this.tabState[this.showIdx]["emoji-js-tab--is-active"]=!1,this.tabviewState[this.showIdx]["emoji-js-tabview--is-active"]=!1,this.showIdx=t,this.tabState[t]["emoji-js-tab--is-active"]=!0,this.tabviewState[t]["emoji-js-tabview--is-active"]=!0},supportIE9Plus:function(){null!==window.navigator.userAgent.match(/(MSIE|Trident)/i)&&(document.body.style.fontFamily="Segoe UI Emoji")}}};i(1);var c=function(t,e,i,n,o,s,r,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var x=l.beforeCreate;l.beforeCreate=x?[].concat(x,c):[c]}return{exports:t,options:l}}(a,n,[],!1,null,null,null);c.options.__file="src/components/emojiPicker/index.vue";e.default=c.exports}])});