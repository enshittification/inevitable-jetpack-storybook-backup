(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5022],{"../../../node_modules/.pnpm/@wordpress+components@25.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>C});var i=t("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=t.n(_),v=t("../../../node_modules/.pnpm/@wordpress+i18n@4.34.0/node_modules/@wordpress/i18n/build-module/index.js"),y=t("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/external.js"),E=t("../../../node_modules/.pnpm/@wordpress+components@25.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),a=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.0_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=t("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/icon/index.js");function c(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=(0,a.Z)(s.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function n(x,p){const{href:d,children:m,className:f,rel:u="",...w}=x,h=[...new Set([...u.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),j=e()("components-external-link",f),b=!!(d!=null&&d.startsWith("#")),k=O=>{b&&O.preventDefault(),x.onClick&&x.onClick(O)};return(0,o.createElement)("a",(0,i.Z)({},w,{className:j,href:d,onClick:k,target:"_blank",rel:h,ref:p}),m,(0,o.createElement)(E.Z,{as:"span"},(0,v.__)("(opens in a new tab)")),(0,o.createElement)(g,{icon:y.Z,className:"components-external-link__icon"}))}const C=(0,o.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+element@5.11.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>x});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o,_,e,v;const y=/<(\/)?(\w+)\s*(\/)?>/g;function E(p,d,m,f,u){return{element:p,tokenStart:d,tokenLength:m,prevOffset:f,leadingTextStart:u,children:[]}}const a=(p,d)=>{if(o=p,_=0,e=[],v=[],y.lastIndex=0,!s(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(c(d));return(0,i.createElement)(i.Fragment,null,...e)},s=p=>{const d=typeof p=="object",m=d&&Object.values(p);return d&&m.length&&m.every(f=>(0,i.isValidElement)(f))};function c(p){const d=g(),[m,f,u,w]=d,h=v.length,j=u>_?_:null;if(!p[f])return n(),!1;switch(m){case"no-more-tokens":if(h!==0){const{leadingTextStart:A,tokenStart:P}=v.pop();e.push(o.substr(A,P))}return n(),!1;case"self-closed":return h===0?(j!==null&&e.push(o.substr(j,u-j)),e.push(p[f]),_=u+w,!0):(r(E(p[f],u,w)),_=u+w,!0);case"opener":return v.push(E(p[f],u,w,u+w,j)),_=u+w,!0;case"closer":if(h===1)return C(u),_=u+w,!0;const b=v.pop(),k=o.substr(b.prevOffset,u-b.prevOffset);b.children.push(k),b.prevOffset=u+w;const O=E(b.element,b.tokenStart,b.tokenLength,u+w);return O.children=b.children,r(O),_=u+w,!0;default:return n(),!1}}function g(){const p=y.exec(o);if(p===null)return["no-more-tokens"];const d=p.index,[m,f,u,w]=p,h=m.length;return w?["self-closed",u,d,h]:f?["closer",u,d,h]:["opener",u,d,h]}function n(){const p=o.length-_;p!==0&&e.push(o.substr(_,p))}function r(p){const{element:d,tokenStart:m,tokenLength:f,prevOffset:u,children:w}=p,h=v[v.length-1],j=o.substr(h.prevOffset,m-h.prevOffset);j&&h.children.push(j),h.children.push((0,i.cloneElement)(d,null,...w)),h.prevOffset=u||m+f}function C(p){const{element:d,leadingTextStart:m,prevOffset:f,tokenStart:u,children:w}=v.pop(),h=p?o.substr(f,p-f):o.substr(f);h&&w.push(h),m!==null&&e.push(o.substr(m,u-m)),e.push((0,i.cloneElement)(d,null,...w))}const x=a},"../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/check.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>e});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+primitives@3.32.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,i.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(o.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/info.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>e});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+primitives@3.32.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,i.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(o.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/plus.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>e});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+primitives@3.32.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,i.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(o.y$,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/warning.js":(F,l,t)=>{"use strict";t.d(l,{Z:()=>e});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+primitives@3.32.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,i.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,i.createElement)(o.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(F,l,t)=>{var i=t("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");l.formatArgs=_,l.save=e,l.load=v,l.useColors=o,l.storage=y(),l.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),l.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function o(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function _(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+F.exports.humanize(this.diff),!this.useColors)return;const s="color: "+this.color;a.splice(1,0,s,"color: inherit");let c=0,g=0;a[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(c++,n==="%c"&&(g=c))}),a.splice(g,0,s)}l.log=console.debug||console.log||(()=>{});function e(a){try{a?l.storage.setItem("debug",a):l.storage.removeItem("debug")}catch(s){}}function v(){let a;try{a=l.storage.getItem("debug")}catch(s){}return!a&&typeof i!="undefined"&&"env"in i&&(a=i.env.DEBUG),a}function y(){try{return localStorage}catch(a){}}F.exports=t("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(l);const{formatters:E}=F.exports;E.j=function(a){try{return JSON.stringify(a)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(F,l,t)=>{function i(o){e.debug=e,e.default=e,e.coerce=c,e.disable=E,e.enable=y,e.enabled=a,e.humanize=t("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=g,Object.keys(o).forEach(n=>{e[n]=o[n]}),e.names=[],e.skips=[],e.formatters={};function _(n){let r=0;for(let C=0;C<n.length;C++)r=(r<<5)-r+n.charCodeAt(C),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=_;function e(n){let r,C=null,x,p;function d(...m){if(!d.enabled)return;const f=d,u=Number(new Date),w=u-(r||u);f.diff=w,f.prev=r,f.curr=u,r=u,m[0]=e.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");let h=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,(b,k)=>{if(b==="%%")return"%";h++;const O=e.formatters[k];if(typeof O=="function"){const A=m[h];b=O.call(f,A),m.splice(h,1),h--}return b}),e.formatArgs.call(f,m),(f.log||e.log).apply(f,m)}return d.namespace=n,d.useColors=e.useColors(),d.color=e.selectColor(n),d.extend=v,d.destroy=e.destroy,Object.defineProperty(d,"enabled",{enumerable:!0,configurable:!1,get:()=>C!==null?C:(x!==e.namespaces&&(x=e.namespaces,p=e.enabled(n)),p),set:m=>{C=m}}),typeof e.init=="function"&&e.init(d),d}function v(n,r){const C=e(this.namespace+(typeof r=="undefined"?":":r)+n);return C.log=this.log,C}function y(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];let r;const C=(typeof n=="string"?n:"").split(/[\s,]+/),x=C.length;for(r=0;r<x;r++)C[r]&&(n=C[r].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.slice(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function E(){const n=[...e.names.map(s),...e.skips.map(s).map(r=>"-"+r)].join(",");return e.enable(""),n}function a(n){if(n[n.length-1]==="*")return!0;let r,C;for(r=0,C=e.skips.length;r<C;r++)if(e.skips[r].test(n))return!1;for(r=0,C=e.names.length;r<C;r++)if(e.names[r].test(n))return!0;return!1}function s(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function c(n){return n instanceof Error?n.stack||n.message:n}function g(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}F.exports=i},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":F=>{var l=1e3,t=l*60,i=t*60,o=i*24,_=o*7,e=o*365.25;F.exports=function(s,c){c=c||{};var g=typeof s;if(g==="string"&&s.length>0)return v(s);if(g==="number"&&isFinite(s))return c.long?E(s):y(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function v(s){if(s=String(s),!(s.length>100)){var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s);if(c){var g=parseFloat(c[1]),n=(c[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return g*e;case"weeks":case"week":case"w":return g*_;case"days":case"day":case"d":return g*o;case"hours":case"hour":case"hrs":case"hr":case"h":return g*i;case"minutes":case"minute":case"mins":case"min":case"m":return g*t;case"seconds":case"second":case"secs":case"sec":case"s":return g*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return g;default:return}}}}function y(s){var c=Math.abs(s);return c>=o?Math.round(s/o)+"d":c>=i?Math.round(s/i)+"h":c>=t?Math.round(s/t)+"m":c>=l?Math.round(s/l)+"s":s+"ms"}function E(s){var c=Math.abs(s);return c>=o?a(s,c,o,"day"):c>=i?a(s,c,i,"hour"):c>=t?a(s,c,t,"minute"):c>=l?a(s,c,l,"second"):s+" ms"}function a(s,c,g,n){var r=c>=g*1.5;return Math.round(s/g)+" "+n+(r?"s":"")}}}]);})();
