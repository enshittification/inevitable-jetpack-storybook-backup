"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8608],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(c,s,o)=>{o.d(s,{aD:()=>e.aD});var e=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),r=(...n)=>{let a=config,t=n;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(a={...config,...t.pop()});let l=t[0];(t.length!==1||typeof l=="string")&&(l={},t.forEach(i=>{l[i]=i}));let m={};return Object.keys(l).forEach(i=>{m[i]=action(l[i],a)}),m},d=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(c,s,o)=>{o.d(s,{ZP:()=>v});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=o.n(r),n=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=o("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=o("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function m(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const i=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,u=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",t.Z.spinnerSize,"px;height:",t.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",l.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),p={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},_=(0,n.Z)("circle",{target:"ea4tfvq1"})(p,";stroke:",l.D.gray[300],";"),g=(0,n.Z)("path",{target:"ea4tfvq0"})(p,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",i,";");function h({className:f,...w},E){return(0,e.createElement)(u,{className:d()("components-spinner",f),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...w,ref:E},(0,e.createElement)(_,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,e.createElement)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const v=(0,e.forwardRef)(h)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(c,s,o)=>{o.d(s,{Z:()=>l});var e=o("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),r=o("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",n="12px",a={controlSurfaceColor:r.D.white,controlTextActiveColor:r.D.ui.theme,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:r.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${r.D.ui.theme}`,controlDestructiveBorderColor:r.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},t={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:r.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:r.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},l=Object.assign({},a,t,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,e.D)(2)}`,cardPaddingSmall:`${(0,e.D)(4)}`,cardPaddingMedium:`${(0,e.D)(4)} ${(0,e.D)(6)}`,cardPaddingLarge:`${(0,e.D)(6)} ${(0,e.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:r.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:r.D.white,surfaceColor:r.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(c,s,o)=>{o.d(s,{W:()=>r});var e=o("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function r(d){return e.Z.dispatch(d)}},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/icon/index.js":(c,s,o)=>{o.d(s,{Z:()=>d});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:n,size:a=24,...t}){return(0,e.cloneElement)(n,{width:a,height:a,...t})}const d=r},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js":(c,s,o)=>{o.d(s,{Z:()=>n});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.y$,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(c,s,o)=>{o.d(s,{Z:()=>n});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/external.js":(c,s,o)=>{o.d(s,{Z:()=>n});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();
