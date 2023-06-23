(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4800],{"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(_,c,r)=>{"use strict";r.d(c,{Z:()=>m});var l=r("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=r.n(p),w=r("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),g=r("../../../node_modules/.pnpm/@wordpress+deprecated@3.35.0/node_modules/@wordpress/deprecated/build-module/index.js"),F=r("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function d(n,t){const[u,h]=(0,a.useState)(n);return[u,b=>{h(b),t&&t(b)}]}function s({renderContent:n,renderToggle:t,className:u,contentClassName:h,expandOnMobile:b,headerTitle:C,focusOnMount:f,popoverProps:i,onClose:E,onToggle:v,style:O,position:x},A){x!==void 0&&(0,g.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[R,D]=(0,a.useState)(null),y=(0,a.useRef)(),[M,L]=d(!1,v);(0,a.useEffect)(()=>()=>{v&&M&&v(!1)},[v,M]);function W(){L(!M)}function k(){var U;if(!y.current)return;const{ownerDocument:j}=y.current,T=(U=j==null?void 0:j.activeElement)==null?void 0:U.closest('[role="dialog"]');!y.current.contains(j.activeElement)&&(!T||T.contains(y.current))&&I()}function I(){E&&E(),L(!1)}const B={isOpen:M,onToggle:W,onClose:I},K=!!(i!=null&&i.anchor)||!!(i!=null&&i.anchorRef)||!!(i!=null&&i.getAnchorRect)||!!(i!=null&&i.anchorRect);return(0,a.createElement)("div",{className:e()("components-dropdown",u),ref:(0,w.Z)([y,A,D]),tabIndex:-1,style:O},t(B),M&&(0,a.createElement)(F.ZP,(0,l.Z)({position:x,onClose:I,onFocusOutside:k,expandOnMobile:b,headerTitle:C,focusOnMount:f,offset:13,anchor:K?void 0:R},i,{className:e()("components-dropdown__content",i==null?void 0:i.className,h)}),n(B)))}const m=(0,a.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/download.js":(_,c,r)=>{"use strict";r.d(c,{Z:()=>e});var l=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=r("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,l.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(a.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(_,c,r)=>{"use strict";r.d(c,{Z:()=>e});var l=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=r("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,l.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(a.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(_,c,r)=>{var l=r("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");c.formatArgs=p,c.save=e,c.load=w,c.useColors=a,c.storage=g(),c.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),c.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function a(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function p(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+_.exports.humanize(this.diff),!this.useColors)return;const s="color: "+this.color;d.splice(1,0,s,"color: inherit");let o=0,m=0;d[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(o++,n==="%c"&&(m=o))}),d.splice(m,0,s)}c.log=console.debug||console.log||(()=>{});function e(d){try{d?c.storage.setItem("debug",d):c.storage.removeItem("debug")}catch(s){}}function w(){let d;try{d=c.storage.getItem("debug")}catch(s){}return!d&&typeof l!="undefined"&&"env"in l&&(d=l.env.DEBUG),d}function g(){try{return localStorage}catch(d){}}_.exports=r("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(c);const{formatters:F}=_.exports;F.j=function(d){try{return JSON.stringify(d)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(_,c,r)=>{function l(a){e.debug=e,e.default=e,e.coerce=o,e.disable=F,e.enable=g,e.enabled=d,e.humanize=r("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=m,Object.keys(a).forEach(n=>{e[n]=a[n]}),e.names=[],e.skips=[],e.formatters={};function p(n){let t=0;for(let u=0;u<n.length;u++)t=(t<<5)-t+n.charCodeAt(u),t|=0;return e.colors[Math.abs(t)%e.colors.length]}e.selectColor=p;function e(n){let t,u=null,h,b;function C(...f){if(!C.enabled)return;const i=C,E=Number(new Date),v=E-(t||E);i.diff=v,i.prev=t,i.curr=E,t=E,f[0]=e.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");let O=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,(A,R)=>{if(A==="%%")return"%";O++;const D=e.formatters[R];if(typeof D=="function"){const y=f[O];A=D.call(i,y),f.splice(O,1),O--}return A}),e.formatArgs.call(i,f),(i.log||e.log).apply(i,f)}return C.namespace=n,C.useColors=e.useColors(),C.color=e.selectColor(n),C.extend=w,C.destroy=e.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>u!==null?u:(h!==e.namespaces&&(h=e.namespaces,b=e.enabled(n)),b),set:f=>{u=f}}),typeof e.init=="function"&&e.init(C),C}function w(n,t){const u=e(this.namespace+(typeof t=="undefined"?":":t)+n);return u.log=this.log,u}function g(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];let t;const u=(typeof n=="string"?n:"").split(/[\s,]+/),h=u.length;for(t=0;t<h;t++)u[t]&&(n=u[t].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.slice(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function F(){const n=[...e.names.map(s),...e.skips.map(s).map(t=>"-"+t)].join(",");return e.enable(""),n}function d(n){if(n[n.length-1]==="*")return!0;let t,u;for(t=0,u=e.skips.length;t<u;t++)if(e.skips[t].test(n))return!1;for(t=0,u=e.names.length;t<u;t++)if(e.names[t].test(n))return!0;return!1}function s(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function o(n){return n instanceof Error?n.stack||n.message:n}function m(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}_.exports=l},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":_=>{var c=1e3,r=c*60,l=r*60,a=l*24,p=a*7,e=a*365.25;_.exports=function(s,o){o=o||{};var m=typeof s;if(m==="string"&&s.length>0)return w(s);if(m==="number"&&isFinite(s))return o.long?F(s):g(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function w(s){if(s=String(s),!(s.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s);if(o){var m=parseFloat(o[1]),n=(o[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return m*e;case"weeks":case"week":case"w":return m*p;case"days":case"day":case"d":return m*a;case"hours":case"hour":case"hrs":case"hr":case"h":return m*l;case"minutes":case"minute":case"mins":case"min":case"m":return m*r;case"seconds":case"second":case"secs":case"sec":case"s":return m*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return m;default:return}}}}function g(s){var o=Math.abs(s);return o>=a?Math.round(s/a)+"d":o>=l?Math.round(s/l)+"h":o>=r?Math.round(s/r)+"m":o>=c?Math.round(s/c)+"s":s+"ms"}function F(s){var o=Math.abs(s);return o>=a?d(s,o,a,"day"):o>=l?d(s,o,l,"hour"):o>=r?d(s,o,r,"minute"):o>=c?d(s,o,c,"second"):s+" ms"}function d(s,o,m,n){var t=o>=m*1.5;return Math.round(s/m)+" "+n+(t?"s":"")}}}]);})();