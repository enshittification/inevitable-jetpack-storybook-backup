"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5750,977],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(k,d,e)=>{e.d(d,{F4:()=>C,iv:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),a=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=e.n(a),f={name:"@emotion/react",version:"11.11.3",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},s=function(c,m){var _=arguments;if(m==null||!hasOwnProperty.call(m,"css"))return React.createElement.apply(void 0,_);var b=_.length,E=new Array(b);E[0]=Emotion,E[1]=createEmotionProps(c,m);for(var j=2;j<b;j++)E[j]=_[j];return React.createElement.apply(null,E)},h=!1,g=null;function v(){for(var l=arguments.length,c=new Array(l),m=0;m<l;m++)c[m]=arguments[m];return(0,n.O)(c)}var C=function(){var c=v.apply(void 0,arguments),m="animation-"+c.name;return{name:m,styles:"@keyframes "+m+"{"+c.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},D=function l(c){for(var m=c.length,_=0,b="";_<m;_++){var E=c[_];if(E!=null){var j=void 0;switch(typeof E){case"boolean":break;case"object":{if(Array.isArray(E))j=l(E);else{j="";for(var O in E)E[O]&&O&&(j&&(j+=" "),j+=O)}break}default:j=E}j&&(b&&(b+=" "),b+=j)}}return b};function S(l,c,m){var _=[],b=getRegisteredStyles(l,_,m);return _.length<2?m:b+c(_)}var P=function(c){var m=c.cache,_=c.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var b=0;b<_.length;b++)insertStyles(m,_[b],!1)}),null},u=null;if(!1)var w,x,y,p},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(k,d,e)=>{e.d(d,{ZP:()=>u});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(t),r=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function s(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const h=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,g=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",i.Z.spinnerSize,"px;height:",i.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",f.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},C=(0,r.Z)("circle",{target:"ea4tfvq1"})(v,";stroke:",f.D.gray[300],";"),D=(0,r.Z)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",h,";");function S({className:w,...x},y){return(0,o.createElement)(g,{className:n()("components-spinner",w),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...x,ref:y},(0,o.createElement)(C,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(D,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const u=(0,o.forwardRef)(S)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(k,d,e)=>{e.d(d,{Z:()=>f});var o=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const n="36px",r="12px",a={controlSurfaceColor:t.D.white,controlTextActiveColor:t.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:t.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${t.D.theme.accent}`,controlDestructiveBorderColor:t.D.alert.red,controlHeight:n,controlHeightXSmall:`calc( ${n} * 0.6 )`,controlHeightSmall:`calc( ${n} * 0.8 )`,controlHeightLarge:`calc( ${n} * 1.2 )`,controlHeightXLarge:`calc( ${n} * 1.4 )`},i={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:t.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:t.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},f=Object.assign({},a,i,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:t.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:t.D.white,surfaceColor:t.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(k,d,e)=>{e.d(d,{D:()=>i});const o="#fff",t={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},n={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},r={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${o})`,background:`var(--wp-components-color-background, ${o})`,foreground:`var(--wp-components-color-foreground, ${t[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${o})`,gray:{900:`var(--wp-components-color-foreground, ${t[900]})`,800:`var(--wp-components-color-gray-800, ${t[800]})`,700:`var(--wp-components-color-gray-700, ${t[700]})`,600:`var(--wp-components-color-gray-600, ${t[600]})`,400:`var(--wp-components-color-gray-400, ${t[400]})`,300:`var(--wp-components-color-gray-300, ${t[300]})`,200:`var(--wp-components-color-gray-200, ${t[200]})`,100:`var(--wp-components-color-gray-100, ${t[100]})`}},a={background:r.background,backgroundDisabled:r.gray[100],border:r.gray[600],borderHover:r.gray[700],borderFocus:r.accent,borderDisabled:r.gray[400],textDisabled:r.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${r.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${r.background}, transparent 35%)`},i=Object.freeze({gray:t,white:o,alert:n,theme:r,ui:a});var f=null},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js":(k,d,e)=>{e.d(d,{D:()=>t});const o="4px";function t(n){var a,i;if(typeof n=="undefined")return;if(!n)return"0";const r=typeof n=="number"?n:Number(n);return typeof window!="undefined"&&((i=(a=window.CSS)==null?void 0:a.supports)!=null&&i.call(a,"margin",n.toString()))||Number.isNaN(r)?n.toString():`calc(${o} * ${n})`}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(k,d,e)=>{e.d(d,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js");const r={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var a=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js");function i(h,g){const{style:v,...C}=(0,t.y)(h,"VisuallyHidden");return(0,o.createElement)(a.Z,{ref:g,...C,style:{...r,...v||{}}})}const s=(0,n.Iq)(i,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(k,d,e)=>{e.d(d,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t(r){return r&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(r):null}function n(r){const a=(0,o.useMemo)(()=>{const i=t(r);return{subscribe(f){var s;return i?((s=i.addEventListener)==null||s.call(i,"change",f),()=>{var h;(h=i.removeEventListener)==null||h.call(i,"change",f)}):()=>{}},getValue(){var f;return(f=i==null?void 0:i.matches)!==null&&f!==void 0?f:!1}}},[r]);return(0,o.useSyncExternalStore)(a.subscribe,a.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(k,d,e)=>{e.d(d,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t(n,r){const a=(0,o.useRef)();return(0,o.useCallback)(i=>{i?a.current=n(i):a.current&&a.current()},r)}},"../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(k,d,e)=>{e.d(d,{Z:()=>P});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let t,n,r,a;const i=/<(\/)?(\w+)\s*(\/)?>/g;function f(u,w,x,y,p){return{element:u,tokenStart:w,tokenLength:x,prevOffset:y,leadingTextStart:p,children:[]}}const s=(u,w)=>{if(t=u,n=0,r=[],a=[],i.lastIndex=0,!h(w))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(g(w));return(0,o.createElement)(o.Fragment,null,...r)},h=u=>{const w=typeof u=="object",x=w&&Object.values(u);return w&&x.length&&x.every(y=>(0,o.isValidElement)(y))};function g(u){const w=v(),[x,y,p,l]=w,c=a.length,m=p>n?n:null;if(!u[y])return C(),!1;switch(x){case"no-more-tokens":if(c!==0){const{leadingTextStart:j,tokenStart:O}=a.pop();r.push(t.substr(j,O))}return C(),!1;case"self-closed":return c===0?(m!==null&&r.push(t.substr(m,p-m)),r.push(u[y]),n=p+l,!0):(D(f(u[y],p,l)),n=p+l,!0);case"opener":return a.push(f(u[y],p,l,p+l,m)),n=p+l,!0;case"closer":if(c===1)return S(p),n=p+l,!0;const _=a.pop(),b=t.substr(_.prevOffset,p-_.prevOffset);_.children.push(b),_.prevOffset=p+l;const E=f(_.element,_.tokenStart,_.tokenLength,p+l);return E.children=_.children,D(E),n=p+l,!0;default:return C(),!1}}function v(){const u=i.exec(t);if(u===null)return["no-more-tokens"];const w=u.index,[x,y,p,l]=u,c=x.length;return l?["self-closed",p,w,c]:y?["closer",p,w,c]:["opener",p,w,c]}function C(){const u=t.length-n;u!==0&&r.push(t.substr(n,u))}function D(u){const{element:w,tokenStart:x,tokenLength:y,prevOffset:p,children:l}=u,c=a[a.length-1],m=t.substr(c.prevOffset,x-c.prevOffset);m&&c.children.push(m),c.children.push((0,o.cloneElement)(w,null,...l)),c.prevOffset=p||x+y}function S(u){const{element:w,leadingTextStart:x,prevOffset:y,tokenStart:p,children:l}=a.pop(),c=u?t.substr(y,u-y):t.substr(y);c&&l.push(c),x!==null&&r.push(t.substr(x,p-x)),r.push((0,o.cloneElement)(w,null,...l))}const P=s},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(k,d,e)=>{e.d(d,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t({icon:r,size:a=24,...i},f){return(0,o.cloneElement)(r,{width:a,height:a,...i,ref:f})}const n=(0,o.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(k,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(k,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/reset.js":(k,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M7 11.5h10V13H7z"}))},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":k=>{k.exports=function(s){return typeof s=="string"?e(s):d(s)};function d(s){return!s||typeof s!="object"||t(s)||n(s)?s:o(s)?i(s,d):f(a(s),function(h,g){var v=e(g);return h[v]=d(s[g]),h},{})}function e(s){return s.replace(/[_.-](\w|$)/g,function(h,g){return g.toUpperCase()})}var o=Array.isArray||function(s){return Object.prototype.toString.call(s)==="[object Array]"},t=function(s){return Object.prototype.toString.call(s)==="[object Date]"},n=function(s){return Object.prototype.toString.call(s)==="[object RegExp]"},r=Object.prototype.hasOwnProperty,a=Object.keys||function(s){var h=[];for(var g in s)r.call(s,g)&&h.push(g);return h};function i(s,h){if(s.map)return s.map(h);for(var g=[],v=0;v<s.length;v++)g.push(h(s[v],v));return g}function f(s,h,g){if(s.reduce)return s.reduce(h,g);for(var v=0;v<s.length;v++)g=h(g,s[v],v);return g}}}]);})();