"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[289],{"../../../node_modules/.pnpm/@emotion+react@11.11.0_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(y,p,e)=>{e.d(p,{F4:()=>_,iv:()=>g});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),t=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),h=e.n(t),f={name:"@emotion/react",version:"11.11.0",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.2","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.0","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},v=function(n,s){var a=arguments;if(s==null||!hasOwnProperty.call(s,"css"))return React.createElement.apply(void 0,a);var c=a.length,m=new Array(c);m[0]=Emotion,m[1]=createEmotionProps(n,s);for(var l=2;l<c;l++)m[l]=a[l];return React.createElement.apply(null,m)},j=!1,x=null;function g(){for(var u=arguments.length,n=new Array(u),s=0;s<u;s++)n[s]=arguments[s];return(0,o.O)(n)}var _=function(){var n=g.apply(void 0,arguments),s="animation-"+n.name;return{name:s,styles:"@keyframes "+s+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},S=function u(n){for(var s=n.length,a=0,c="";a<s;a++){var m=n[a];if(m!=null){var l=void 0;switch(typeof m){case"boolean":break;case"object":{if(Array.isArray(m))l=u(m);else{l="";for(var b in m)m[b]&&b&&(l&&(l+=" "),l+=b)}break}default:l=m}l&&(c&&(c+=" "),c+=l)}}return c};function C(u,n,s){var a=[],c=getRegisteredStyles(u,a,s);return a.length<2?s:c+n(a)}var k=function(n){var s=n.cache,a=n.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var c=0;c<a.length;c++)insertStyles(s,a[c],!1)}),null},I=null;if(!1)var D,E,R,z},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(y,p,e)=>{e.d(p,{ZP:()=>D});var d=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(o),t=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.0_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),h=e("../../../node_modules/.pnpm/@emotion+react@11.11.0_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function j(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const x=h.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,g=(0,t.Z)("svg",{target:"ea4tfvq2"})("width:",f.Z.spinnerSize,"px;height:",f.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",v.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),_={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},S=(0,t.Z)("circle",{target:"ea4tfvq1"})(_,";stroke:",v.D.gray[300],";"),C=(0,t.Z)("path",{target:"ea4tfvq0"})(_,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",x,";");function k(E,R){let{className:z,...u}=E;return(0,r.createElement)(g,(0,d.Z)({className:i()("components-spinner",z),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false"},u,{ref:R}),(0,r.createElement)(S,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(C,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const D=(0,r.forwardRef)(k)},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js":(y,p,e)=>{e.d(p,{D:()=>r});const d="4px";function r(o){var i,t;if(typeof o=="undefined")return;if(!o)return"0";const h=typeof o=="number"?o:Number(o);return typeof window!="undefined"&&(i=window.CSS)!==null&&i!==void 0&&(t=i.supports)!==null&&t!==void 0&&t.call(i,"margin",o.toString())||Number.isNaN(h)?o.toString():`calc(${d} * ${o})`}},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(y,p,e)=>{e.d(p,{D:()=>j});var d=e("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs"),r=e("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");(0,d.l7)([r.Z]);function o(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,d.Vi)(g).alpha(_).toRgbString()}const i="#fff",t={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},h={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},f={theme:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))",themeDark10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #006ba1))"},v={theme:f.theme,themeDark10:f.themeDark10,background:i,backgroundDisabled:t[100],border:t[600],borderHover:t[700],borderFocus:f.themeDark10,borderDisabled:t[400],textDisabled:t[600],textDark:i,darkGrayPlaceholder:o(t[900],.62),lightGrayPlaceholder:o(i,.65)},j=Object.freeze({gray:t,white:i,alert:h,ui:v}),x=null},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(y,p,e)=>{e.d(p,{Z:()=>f});var d=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const o="36px",i="12px",t={controlSurfaceColor:r.D.white,controlTextActiveColor:r.D.ui.theme,controlPaddingX:i,controlPaddingXLarge:`calc(${i} * 1.3334)`,controlPaddingXSmall:`calc(${i} / 1.3334)`,controlBackgroundColor:r.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${r.D.ui.theme}`,controlDestructiveBorderColor:r.D.alert.red,controlHeight:o,controlHeightXSmall:`calc( ${o} * 0.6 )`,controlHeightSmall:`calc( ${o} * 0.8 )`,controlHeightLarge:`calc( ${o} * 1.2 )`,controlHeightXLarge:`calc( ${o} * 1.4 )`},h={toggleGroupControlBackgroundColor:t.controlBackgroundColor,toggleGroupControlBorderColor:r.D.ui.border,toggleGroupControlBackdropBackgroundColor:t.controlSurfaceColor,toggleGroupControlBackdropBorderColor:r.D.ui.border,toggleGroupControlButtonColorActive:t.controlBackgroundColor},f=Object.assign({},t,h,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,d.D)(2)}`,cardPaddingSmall:`${(0,d.D)(4)}`,cardPaddingMedium:`${(0,d.D)(4)} ${(0,d.D)(6)}`,cardPaddingLarge:`${(0,d.D)(6)} ${(0,d.D)(8)}`,surfaceBackgroundColor:r.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:r.D.white,surfaceColor:r.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})}}]);})();
