(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7753],{"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(C,u,d)=>{"use strict";d.d(u,{Z:()=>f});var i=d("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const f=r=>{const{dispatch:m}=(0,i.Z)();return r===void 0?m:m(r)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(C,u,d)=>{"use strict";d.d(u,{W:()=>c});var i=d("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function c(f){return i.Z.dispatch(f)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(C,u,d)=>{"use strict";d.d(u,{Y:()=>c});var i=d("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function c(f){return i.Z.select(f)}},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":C=>{"use strict";C.exports=function(e){return typeof e=="string"?d(e):u(e)};function u(e){return!e||typeof e!="object"||c(e)||f(e)?e:i(e)?h(e,u):F(m(e),function(t,n){var a=d(n);return t[a]=u(e[n]),t},{})}function d(e){return e.replace(/[_.-](\w|$)/g,function(t,n){return n.toUpperCase()})}var i=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},c=function(e){return Object.prototype.toString.call(e)==="[object Date]"},f=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},r=Object.prototype.hasOwnProperty,m=Object.keys||function(e){var t=[];for(var n in e)r.call(e,n)&&t.push(n);return t};function h(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}function F(e,t,n){if(e.reduce)return e.reduce(t,n);for(var a=0;a<e.length;a++)n=t(n,e[a],a);return n}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(C,u,d)=>{var i=d("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");u.formatArgs=f,u.save=r,u.load=m,u.useColors=c,u.storage=h(),u.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),u.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function c(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;e.splice(1,0,t,"color: inherit");let n=0,a=0;e[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(n++,o==="%c"&&(a=n))}),e.splice(a,0,t)}u.log=console.debug||console.log||(()=>{});function r(e){try{e?u.storage.setItem("debug",e):u.storage.removeItem("debug")}catch(t){}}function m(){let e;try{e=u.storage.getItem("debug")}catch(t){}return!e&&typeof i!="undefined"&&"env"in i&&(e=i.env.DEBUG),e}function h(){try{return localStorage}catch(e){}}C.exports=d("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(u);const{formatters:F}=C.exports;F.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(C,u,d)=>{function i(c){r.debug=r,r.default=r,r.coerce=n,r.disable=F,r.enable=h,r.enabled=e,r.humanize=d("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),r.destroy=a,Object.keys(c).forEach(o=>{r[o]=c[o]}),r.names=[],r.skips=[],r.formatters={};function f(o){let s=0;for(let l=0;l<o.length;l++)s=(s<<5)-s+o.charCodeAt(l),s|=0;return r.colors[Math.abs(s)%r.colors.length]}r.selectColor=f;function r(o){let s,l=null,y,A;function g(...p){if(!g.enabled)return;const _=g,w=Number(new Date),k=w-(s||w);_.diff=k,_.prev=s,_.curr=w,s=w,p[0]=r.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let b=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(v,j)=>{if(v==="%%")return"%";b++;const E=r.formatters[j];if(typeof E=="function"){const O=p[b];v=E.call(_,O),p.splice(b,1),b--}return v}),r.formatArgs.call(_,p),(_.log||r.log).apply(_,p)}return g.namespace=o,g.useColors=r.useColors(),g.color=r.selectColor(o),g.extend=m,g.destroy=r.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>l!==null?l:(y!==r.namespaces&&(y=r.namespaces,A=r.enabled(o)),A),set:p=>{l=p}}),typeof r.init=="function"&&r.init(g),g}function m(o,s){const l=r(this.namespace+(typeof s=="undefined"?":":s)+o);return l.log=this.log,l}function h(o){r.save(o),r.namespaces=o,r.names=[],r.skips=[];let s;const l=(typeof o=="string"?o:"").split(/[\s,]+/),y=l.length;for(s=0;s<y;s++)l[s]&&(o=l[s].replace(/\*/g,".*?"),o[0]==="-"?r.skips.push(new RegExp("^"+o.slice(1)+"$")):r.names.push(new RegExp("^"+o+"$")))}function F(){const o=[...r.names.map(t),...r.skips.map(t).map(s=>"-"+s)].join(",");return r.enable(""),o}function e(o){if(o[o.length-1]==="*")return!0;let s,l;for(s=0,l=r.skips.length;s<l;s++)if(r.skips[s].test(o))return!1;for(s=0,l=r.names.length;s<l;s++)if(r.names[s].test(o))return!0;return!1}function t(o){return o.toString().substring(2,o.toString().length-2).replace(/\.\*\?$/,"*")}function n(o){return o instanceof Error?o.stack||o.message:o}function a(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return r.enable(r.load()),r}C.exports=i},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":C=>{var u=1e3,d=u*60,i=d*60,c=i*24,f=c*7,r=c*365.25;C.exports=function(t,n){n=n||{};var a=typeof t;if(a==="string"&&t.length>0)return m(t);if(a==="number"&&isFinite(t))return n.long?F(t):h(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function m(t){if(t=String(t),!(t.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var a=parseFloat(n[1]),o=(n[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return a*r;case"weeks":case"week":case"w":return a*f;case"days":case"day":case"d":return a*c;case"hours":case"hour":case"hrs":case"hr":case"h":return a*i;case"minutes":case"minute":case"mins":case"min":case"m":return a*d;case"seconds":case"second":case"secs":case"sec":case"s":return a*u;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function h(t){var n=Math.abs(t);return n>=c?Math.round(t/c)+"d":n>=i?Math.round(t/i)+"h":n>=d?Math.round(t/d)+"m":n>=u?Math.round(t/u)+"s":t+"ms"}function F(t){var n=Math.abs(t);return n>=c?e(t,n,c,"day"):n>=i?e(t,n,i,"hour"):n>=d?e(t,n,d,"minute"):n>=u?e(t,n,u,"second"):t+" ms"}function e(t,n,a,o){var s=n>=a*1.5;return Math.round(t/a)+" "+o+(s?"s":"")}}}]);})();