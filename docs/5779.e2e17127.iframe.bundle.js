(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5779],{"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(_,c,s)=>{"use strict";s.d(c,{Z:()=>n});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=s.n(u),e=s("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+deprecated@3.43.0/node_modules/@wordpress/deprecated/build-module/index.js"),C=s("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),w=s("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),d=s("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),o=s("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const r=(t,i)=>{const{renderContent:v,renderToggle:O,className:f,contentClassName:p,expandOnMobile:F,headerTitle:E,focusOnMount:j,popoverProps:m,onClose:M,onToggle:b,style:x,open:D,defaultOpen:P,position:R,variant:K}=(0,C.y)(t,"Dropdown");R!==void 0&&(0,g.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[k,N]=(0,l.useState)(null),y=(0,l.useRef)(),[I,L]=(0,d.O)({defaultValue:P,value:D,onChange:b});function S(){var W;if(!y.current)return;const{ownerDocument:A}=y.current,U=(W=A==null?void 0:A.activeElement)==null?void 0:W.closest('[role="dialog"]');!y.current.contains(A.activeElement)&&(!U||U.contains(y.current))&&T()}function T(){M==null||M(),L(!1)}const B={isOpen:!!I,onToggle:()=>L(!I),onClose:T},z=!!(m!=null&&m.anchor)||!!(m!=null&&m.anchorRef)||!!(m!=null&&m.getAnchorRect)||!!(m!=null&&m.anchorRect);return(0,l.createElement)("div",{className:f,ref:(0,e.Z)([y,i,N]),tabIndex:-1,style:x},O(B),I&&(0,l.createElement)(o.ZP,{position:R,onClose:T,onFocusOutside:S,expandOnMobile:F,headerTitle:E,focusOnMount:j,offset:13,anchor:z?void 0:k,variant:K,...m,className:h()("components-dropdown__content",m==null?void 0:m.className,p)},v(B)))},n=(0,w.Iq)(r,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(_,c,s)=>{"use strict";s.d(c,{O:()=>u});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u({defaultValue:h,onChange:e,value:g}){const C=typeof g!="undefined",w=C?g:h,[d,o]=(0,l.useState)(w),r=C?g:d;let a;return C&&typeof e=="function"?a=e:!C&&typeof e=="function"?a=n=>{e(n),o(n)}:a=o,[r,a]}},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(_,c,s)=>{"use strict";s.d(c,{Z:()=>e});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,l.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(u.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(_,c,s)=>{"use strict";s.d(c,{Z:()=>e});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,l.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(u.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(_,c,s)=>{var l=s("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");c.formatArgs=h,c.save=e,c.load=g,c.useColors=u,c.storage=C(),c.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),c.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function u(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function h(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+_.exports.humanize(this.diff),!this.useColors)return;const o="color: "+this.color;d.splice(1,0,o,"color: inherit");let r=0,a=0;d[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(r++,n==="%c"&&(a=r))}),d.splice(a,0,o)}c.log=console.debug||console.log||(()=>{});function e(d){try{d?c.storage.setItem("debug",d):c.storage.removeItem("debug")}catch(o){}}function g(){let d;try{d=c.storage.getItem("debug")}catch(o){}return!d&&typeof l!="undefined"&&"env"in l&&(d=l.env.DEBUG),d}function C(){try{return localStorage}catch(d){}}_.exports=s("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(c);const{formatters:w}=_.exports;w.j=function(d){try{return JSON.stringify(d)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(_,c,s)=>{function l(u){e.debug=e,e.default=e,e.coerce=r,e.disable=w,e.enable=C,e.enabled=d,e.humanize=s("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=a,Object.keys(u).forEach(n=>{e[n]=u[n]}),e.names=[],e.skips=[],e.formatters={};function h(n){let t=0;for(let i=0;i<n.length;i++)t=(t<<5)-t+n.charCodeAt(i),t|=0;return e.colors[Math.abs(t)%e.colors.length]}e.selectColor=h;function e(n){let t,i=null,v,O;function f(...p){if(!f.enabled)return;const F=f,E=Number(new Date),j=E-(t||E);F.diff=j,F.prev=t,F.curr=E,t=E,p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let m=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(b,x)=>{if(b==="%%")return"%";m++;const D=e.formatters[x];if(typeof D=="function"){const P=p[m];b=D.call(F,P),p.splice(m,1),m--}return b}),e.formatArgs.call(F,p),(F.log||e.log).apply(F,p)}return f.namespace=n,f.useColors=e.useColors(),f.color=e.selectColor(n),f.extend=g,f.destroy=e.destroy,Object.defineProperty(f,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(v!==e.namespaces&&(v=e.namespaces,O=e.enabled(n)),O),set:p=>{i=p}}),typeof e.init=="function"&&e.init(f),f}function g(n,t){const i=e(this.namespace+(typeof t=="undefined"?":":t)+n);return i.log=this.log,i}function C(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];let t;const i=(typeof n=="string"?n:"").split(/[\s,]+/),v=i.length;for(t=0;t<v;t++)i[t]&&(n=i[t].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.slice(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function w(){const n=[...e.names.map(o),...e.skips.map(o).map(t=>"-"+t)].join(",");return e.enable(""),n}function d(n){if(n[n.length-1]==="*")return!0;let t,i;for(t=0,i=e.skips.length;t<i;t++)if(e.skips[t].test(n))return!1;for(t=0,i=e.names.length;t<i;t++)if(e.names[t].test(n))return!0;return!1}function o(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function r(n){return n instanceof Error?n.stack||n.message:n}function a(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}_.exports=l},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":_=>{var c=1e3,s=c*60,l=s*60,u=l*24,h=u*7,e=u*365.25;_.exports=function(o,r){r=r||{};var a=typeof o;if(a==="string"&&o.length>0)return g(o);if(a==="number"&&isFinite(o))return r.long?w(o):C(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function g(o){if(o=String(o),!(o.length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(r){var a=parseFloat(r[1]),n=(r[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return a*e;case"weeks":case"week":case"w":return a*h;case"days":case"day":case"d":return a*u;case"hours":case"hour":case"hrs":case"hr":case"h":return a*l;case"minutes":case"minute":case"mins":case"min":case"m":return a*s;case"seconds":case"second":case"secs":case"sec":case"s":return a*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function C(o){var r=Math.abs(o);return r>=u?Math.round(o/u)+"d":r>=l?Math.round(o/l)+"h":r>=s?Math.round(o/s)+"m":r>=c?Math.round(o/c)+"s":o+"ms"}function w(o){var r=Math.abs(o);return r>=u?d(o,r,u,"day"):r>=l?d(o,r,l,"hour"):r>=s?d(o,r,s,"minute"):r>=c?d(o,r,c,"second"):o+" ms"}function d(o,r,a,n){var t=r>=a*1.5;return Math.round(o/a)+" "+n+(t?"s":"")}}}]);})();