(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5926],{"../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js":(R,S,_)=>{"use strict";_.d(S,{Z:()=>a});var g=_("../../../node_modules/.pnpm/clipboard@2.0.11/node_modules/clipboard/dist/clipboard.js"),l=_.n(g),c=_("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=_("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");function u(s){const v=(0,c.useRef)(s);return v.current=s,v}function a(s,v){const y=u(s),m=u(v);return(0,t.Z)(d=>{const h=new(l())(d,{text(){return typeof y.current=="function"?y.current():y.current||""}});return h.on("success",({clearSelection:p})=>{p(),d.focus(),m.current&&m.current()}),()=>{h.destroy()}},[])}},"../../../node_modules/.pnpm/clipboard@2.0.11/node_modules/clipboard/dist/clipboard.js":function(R){/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,g){R.exports=g()})(this,function(){return function(){var S={686:function(l,c,t){"use strict";t.d(c,{default:function(){return z}});var u=t(279),a=t.n(u),s=t(370),v=t.n(s),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch(n){return!1}}var h=function(n){var e=m()(n);return d("cut"),e},p=h;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var k=function(n,e){var r=E(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},M=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=k(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=k(n.value,e):(r=m()(n),d("copy")),r},C=M;function w(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(i)}var j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,f=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&w(f)==="object"&&f.nodeType===1){if(r==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return C(b,{container:o});if(f)return r==="cut"?p(f):C(f,{container:o})},D=j;function T(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function N(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function L(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function I(i,n,e){return n&&L(i.prototype,n),e&&L(i,e),i}function U(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&O(i,n)}function O(i,n){return O=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},O(i,n)}function F(i){var n=K();return function(){var r=x(i),o;if(n){var f=x(this).constructor;o=Reflect.construct(r,arguments,f)}else o=r.apply(this,arguments);return H(this,o)}}function H(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:B(i)}function B(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function K(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(i){return!1}}function x(i){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(i)}function P(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var W=function(i){U(e,i);var n=F(e);function e(r,o){var f;return N(this,e),f=n.call(this),f.resolveOptions(o),f.listenClick(r),f}return I(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=T(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var f=this;this.listener=v()(o,"click",function(b){return f.onClick(b)})}},{key:"onClick",value:function(o){var f=o.delegateTarget||o.currentTarget,b=this.action(f)||"copy",A=D({action:b,container:this.container,target:this.target(f),text:this.text(f)});this.emit(A?"success":"error",{action:b,text:A,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return P("action",o)}},{key:"defaultTarget",value:function(o){var f=P("target",o);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(o){return P("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return C(o,f)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return f.forEach(function(A){b=b&&!!document.queryCommandSupported(A)}),b}}]),e}(a()),z=W},828:function(l){var c=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(a,s){for(;a&&a.nodeType!==c;){if(typeof a.matches=="function"&&a.matches(s))return a;a=a.parentNode}}l.exports=u},438:function(l,c,t){var u=t(828);function a(y,m,d,h,p){var E=v.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function s(y,m,d,h,p){return typeof y.addEventListener=="function"?a.apply(null,arguments):typeof d=="function"?a.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return a(E,m,d,h,p)}))}function v(y,m,d,h){return function(p){p.delegateTarget=u(p.target,m),p.delegateTarget&&h.call(y,p)}}l.exports=s},879:function(l,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(l,c,t){var u=t(879),a=t(438);function s(d,h,p){if(!d&&!h&&!p)throw new Error("Missing required arguments");if(!u.string(h))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return v(d,h,p);if(u.nodeList(d))return y(d,h,p);if(u.string(d))return m(d,h,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(d,h,p){return d.addEventListener(h,p),{destroy:function(){d.removeEventListener(h,p)}}}function y(d,h,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(h,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(h,p)})}}}function m(d,h,p){return a(document.body,d,h,p)}l.exports=s},817:function(l){function c(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),v=document.createRange();v.selectNodeContents(t),s.removeAllRanges(),s.addRange(v),u=s.toString()}return u}l.exports=c},279:function(l){function c(){}c.prototype={on:function(t,u,a){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:u,ctx:a}),this},once:function(t,u,a){var s=this;function v(){s.off(t,v),u.apply(a,arguments)}return v._=u,this.on(t,v,a)},emit:function(t){var u=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),s=0,v=a.length;for(s;s<v;s++)a[s].fn.apply(a[s].ctx,u);return this},off:function(t,u){var a=this.e||(this.e={}),s=a[t],v=[];if(s&&u)for(var y=0,m=s.length;y<m;y++)s[y].fn!==u&&s[y].fn._!==u&&v.push(s[y]);return v.length?a[t]=v:delete a[t],this}},l.exports=c,l.exports.TinyEmitter=c}},_={};function g(l){if(_[l])return _[l].exports;var c=_[l]={exports:{}};return S[l](c,c.exports,g),c.exports}return function(){g.n=function(l){var c=l&&l.__esModule?function(){return l.default}:function(){return l};return g.d(c,{a:c}),c}}(),function(){g.d=function(l,c){for(var t in c)g.o(c,t)&&!g.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:c[t]})}}(),function(){g.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)}}(),g(686)}().default})}}]);})();
