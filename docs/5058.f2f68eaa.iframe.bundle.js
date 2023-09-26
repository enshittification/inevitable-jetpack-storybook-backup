"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5058],{"../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(g,p,o)=>{o.d(p,{F4:()=>y,iv:()=>b});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),t=o("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),m=o("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),r=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),h=o.n(r),f={name:"@emotion/react",version:"11.11.1",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.2","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.0","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},j=function(s,e){var n=arguments;if(e==null||!hasOwnProperty.call(e,"css"))return React.createElement.apply(void 0,n);var i=n.length,l=new Array(i);l[0]=Emotion,l[1]=createEmotionProps(s,e);for(var c=2;c<i;c++)l[c]=n[c];return React.createElement.apply(null,l)},x=!1,w=null;function b(){for(var u=arguments.length,s=new Array(u),e=0;e<u;e++)s[e]=arguments[e];return(0,t.O)(s)}var y=function(){var s=b.apply(void 0,arguments),e="animation-"+s.name;return{name:e,styles:"@keyframes "+e+"{"+s.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},k=function u(s){for(var e=s.length,n=0,i="";n<e;n++){var l=s[n];if(l!=null){var c=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))c=u(l);else{c="";for(var _ in l)l[_]&&_&&(c&&(c+=" "),c+=_)}break}default:c=l}c&&(i&&(i+=" "),i+=c)}}return i};function O(u,s,e){var n=[],i=getRegisteredStyles(u,n,e);return n.length<2?e:i+s(n)}var B=function(s){var e=s.cache,n=s.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var i=0;i<n.length;i++)insertStyles(e,n[i],!1)}),null},P=null;if(!1)var T,A,L,M},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js":(g,p,o)=>{o.d(p,{D:()=>a});const d="4px";function a(t){var r,h;if(typeof t=="undefined")return;if(!t)return"0";const m=typeof t=="number"?t:Number(t);return typeof window!="undefined"&&((h=(r=window.CSS)==null?void 0:r.supports)!=null&&h.call(r,"margin",t.toString()))||Number.isNaN(m)?t.toString():`calc(${d} * ${t})`}},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(g,p,o)=>{o.d(p,{D:()=>w});var d=o("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs"),a=o("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");(0,d.l7)([a.Z]);function t(y="",k=1){return(0,d.Vi)(y).alpha(k).toRgbString()}const m="#fff",r={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},h={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},f={theme:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",themeDark10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))"},j={background:m,backgroundDisabled:r[100],border:r[600],borderHover:r[700],borderFocus:f.themeDark10,borderDisabled:r[400],textDisabled:r[600],textDark:m,darkGrayPlaceholder:t(r[900],.62),lightGrayPlaceholder:t(m,.65)},x={accent:f.theme,accentDarker10:f.themeDark10},w=Object.freeze({gray:r,white:m,alert:h,theme:x,ui:j}),b=null},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(g,p,o)=>{o.d(p,{Z:()=>f});var d=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const t="36px",m="12px",r={controlSurfaceColor:a.D.white,controlTextActiveColor:a.D.theme.accent,controlPaddingX:m,controlPaddingXLarge:`calc(${m} * 1.3334)`,controlPaddingXSmall:`calc(${m} / 1.3334)`,controlBackgroundColor:a.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${a.D.theme.accent}`,controlDestructiveBorderColor:a.D.alert.red,controlHeight:t,controlHeightXSmall:`calc( ${t} * 0.6 )`,controlHeightSmall:`calc( ${t} * 0.8 )`,controlHeightLarge:`calc( ${t} * 1.2 )`,controlHeightXLarge:`calc( ${t} * 1.4 )`},h={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:a.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:a.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},f=Object.assign({},r,h,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,d.D)(2)}`,cardPaddingSmall:`${(0,d.D)(4)}`,cardPaddingMedium:`${(0,d.D)(4)} ${(0,d.D)(6)}`,cardPaddingLarge:`${(0,d.D)(6)} ${(0,d.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:a.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:a.D.white,surfaceColor:a.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})}}]);})();
