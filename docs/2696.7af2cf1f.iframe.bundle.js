(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2696],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/defineProperty.js":(i,r,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js");function u(o,s,d){return s=t(s),s in o?Object.defineProperty(o,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[s]=d,o}i.exports=u,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js":(i,r,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default;function u(o,s){if(t(o)!=="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var a=d.call(o,s||"default");if(t(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}i.exports=u,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js":(i,r,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default,u=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js");function o(s){var d=u(s,"string");return t(d)==="symbol"?d:String(d)}i.exports=o,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js":i=>{function r(e){"@babel/helpers - typeof";return i.exports=r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i.exports.__esModule=!0,i.exports.default=i.exports,r(e)}i.exports=r,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u(s){return s&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(s):null}function o(s){const d=(0,t.useMemo)(()=>{const a=u(s);return{subscribe(c){return a?(a.addEventListener("change",c),()=>{a.removeEventListener("change",c)}):()=>{}},getValue(){var c;return(c=a==null?void 0:a.matches)!==null&&c!==void 0?c:!1}}},[s]);return(0,t.useSyncExternalStore)(d.subscribe,d.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.35.0/node_modules/@wordpress/deprecated/build-module/index.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e("../../../node_modules/.pnpm/@wordpress+hooks@3.35.0/node_modules/@wordpress/hooks/build-module/index.js");const u=Object.create(null);function o(s,d={}){const{since:a,version:c,alternative:n,plugin:m,link:_,hint:f}=d,h=m?` from ${m}`:"",v=a?` since version ${a}`:"",p=c?` and will be removed${h} in version ${c}`:"",l=n?` Please use ${n} instead.`:"",w=_?` See: ${_}`:"",b=f?` Note: ${f}`:"",E=`${s} is deprecated${v}${p}.${l}${w}${b}`;E in u||((0,t.Kw)("deprecated",s,d,E),console.warn(E),u[E]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u({icon:s,size:d=24,...a}){return(0,t.cloneElement)(s,{width:d,height:d,...a})}const o=u},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(u.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(u.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(u.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(u.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(u.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,r,e)=>{"use strict";e.d(r,{Cd:()=>s,G:()=>d,UL:()=>m,Wj:()=>p,mg:()=>n,y$:()=>c});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(t),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=l=>(0,o.createElement)("circle",l),d=l=>(0,o.createElement)("g",l),a=l=>createElement("line",l),c=l=>(0,o.createElement)("path",l),n=l=>(0,o.createElement)("polygon",l),m=l=>(0,o.createElement)("rect",l),_=l=>createElement("defs",l),f=l=>createElement("radialGradient",l),h=l=>createElement("linearGradient",l),v=l=>createElement("stop",l),p=({className:l,isPressed:w,...b})=>{const E={...b,className:u()(l,{"is-pressed":w})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",E)}},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":i=>{"use strict";i.exports=function(n){return typeof n=="string"?e(n):r(n)};function r(n){return!n||typeof n!="object"||u(n)||o(n)?n:t(n)?a(n,r):c(d(n),function(m,_){var f=e(_);return m[f]=r(n[_]),m},{})}function e(n){return n.replace(/[_.-](\w|$)/g,function(m,_){return _.toUpperCase()})}var t=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},u=function(n){return Object.prototype.toString.call(n)==="[object Date]"},o=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},s=Object.prototype.hasOwnProperty,d=Object.keys||function(n){var m=[];for(var _ in n)s.call(n,_)&&m.push(_);return m};function a(n,m){if(n.map)return n.map(m);for(var _=[],f=0;f<n.length;f++)_.push(m(n[f],f));return _}function c(n,m,_){if(n.reduce)return n.reduce(m,_);for(var f=0;f<n.length;f++)_=m(_,n[f],f);return _}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,r)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,o="[native code]";function s(){for(var d=[],a=0;a<arguments.length;a++){var c=arguments[a];if(c){var n=typeof c;if(n==="string"||n==="number")d.push(c);else if(Array.isArray(c)){if(c.length){var m=s.apply(null,c);m&&d.push(m)}}else if(n==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){d.push(c.toString());continue}for(var _ in c)u.call(c,_)&&c[_]&&d.push(_)}}}return d.join(" ")}i.exports?(s.default=s,i.exports=s):(e=[],t=function(){return s}.apply(r,e),t!==void 0&&(i.exports=t))})()},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(i,r,e)=>{"use strict";e.d(r,{P:()=>u});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function t(o){return Object.prototype.toString.call(o)==="[object Object]"}function u(o){var s,d;return t(o)===!1?!1:(s=o.constructor,s===void 0?!0:(d=s.prototype,!(t(d)===!1||d.hasOwnProperty("isPrototypeOf")===!1)))}},"../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":i=>{var r=i.exports={},e,t;function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=u}catch(p){e=u}try{typeof clearTimeout=="function"?t=clearTimeout:t=o}catch(p){t=o}})();function s(p){if(e===setTimeout)return setTimeout(p,0);if((e===u||!e)&&setTimeout)return e=setTimeout,setTimeout(p,0);try{return e(p,0)}catch(l){try{return e.call(null,p,0)}catch(w){return e.call(this,p,0)}}}function d(p){if(t===clearTimeout)return clearTimeout(p);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(p);try{return t(p)}catch(l){try{return t.call(null,p)}catch(w){return t.call(this,p)}}}var a=[],c=!1,n,m=-1;function _(){!c||!n||(c=!1,n.length?a=n.concat(a):m=-1,a.length&&f())}function f(){if(!c){var p=s(_);c=!0;for(var l=a.length;l;){for(n=a,a=[];++m<l;)n&&n[m].run();m=-1,l=a.length}n=null,c=!1,d(p)}}r.nextTick=function(p){var l=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)l[w-1]=arguments[w];a.push(new h(p,l)),a.length===1&&!c&&s(f)};function h(p,l){this.fun=p,this.array=l}h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function v(){}r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(p){return[]},r.binding=function(p){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(p){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);})();