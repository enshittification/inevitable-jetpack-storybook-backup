"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7147],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(m,u,e)=>{e.d(u,{aD:()=>E});var n="actions",t="storybook/actions",a=`${t}/panel`,o=`${t}/action-event`,s=`${t}/action-clear`,c="$___storybook.isCyclic",p=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),g=e("@storybook/preview-api"),w={depth:10,clearOnStoryChange:!0,limit:50},y=(l={})=>{Object.assign(w,l)},f=(l,d)=>{let r=Object.getPrototypeOf(l);return!r||d(r)?r:f(r,d)},v=l=>!!(typeof l=="object"&&l&&f(l,d=>/^Synthetic(?:Base)?Event$/.test(d.constructor.name))&&typeof l.persist=="function"),b=l=>{if(v(l)){let d=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));d.persist();let r=Object.getOwnPropertyDescriptor(d,"view"),i=r==null?void 0:r.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(d,"view",{...r,value:Object.create(i.constructor.prototype)}),d}return l};function E(l,d={}){let r={...w,...d},i=function(...h){let _=g.addons.getChannel(),D=(0,p.Z)(),C=5,x=h.map(b),S=h.length>1?x:x[0],j={id:D,count:0,data:{name:l,args:S},options:{...r,maxDepth:C+(r.depth||3),allowFunction:r.allowFunction||!1}};_.emit(o,j)};return i.isAction=!0,i}var O=(...l)=>{let d=config,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(d={...config,...r.pop()});let i=r[0];(r.length!==1||typeof i=="string")&&(i={},r.forEach(_=>{i[_]=_}));let h={};return Object.keys(i).forEach(_=>{h[_]=action(i[_],d)}),h}},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(m,u,e)=>{e.d(u,{ZP:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(t),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const w=s.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,y=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",p.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),f={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},v=(0,o.Z)("circle",{target:"ea4tfvq1"})(f,";stroke:",p.D.gray[300],";"),b=(0,o.Z)("path",{target:"ea4tfvq0"})(f,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",w,";");function E({className:d,...r},i){return(0,n.createElement)(y,{className:a()("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...r,ref:i},(0,n.createElement)(v,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(b,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const l=(0,n.forwardRef)(E)},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(m,u,e)=>{e.d(u,{Z:()=>p});var n=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",o="12px",s={controlSurfaceColor:t.D.white,controlTextActiveColor:t.D.theme.accent,controlPaddingX:o,controlPaddingXLarge:`calc(${o} * 1.3334)`,controlPaddingXSmall:`calc(${o} / 1.3334)`,controlBackgroundColor:t.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${t.D.theme.accent}`,controlDestructiveBorderColor:t.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},c={toggleGroupControlBackgroundColor:s.controlBackgroundColor,toggleGroupControlBorderColor:t.D.ui.border,toggleGroupControlBackdropBackgroundColor:s.controlSurfaceColor,toggleGroupControlBackdropBorderColor:t.D.ui.border,toggleGroupControlButtonColorActive:s.controlBackgroundColor},p=Object.assign({},s,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:t.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:t.D.white,surfaceColor:t.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(m,u,e)=>{e.d(u,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t({icon:o,size:s=24,...c},p){return(0,n.cloneElement)(o,{width:s,height:s,...c,ref:p})}const a=(0,n.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(m,u,e)=>{e.d(u,{Z:()=>o});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(t.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(m,u,e)=>{e.d(u,{Z:()=>o});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.43.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(m,u,e)=>{e.d(u,{ZP:()=>a});var n=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.43.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function t(o,s){if(o===s)return!0;if(o.length!==s.length)return!1;for(let c=0,p=o.length;c<p;c++)if(o[c]!==s[c])return!1;return!0}function a(o,s){if(o&&s){if(o.constructor===Object&&s.constructor===Object)return(0,n.Z)(o,s);if(Array.isArray(o)&&Array.isArray(s))return t(o,s)}return o===s}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.43.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(m,u,e)=>{e.d(u,{Z:()=>n});function n(t,a){if(t===a)return!0;const o=Object.keys(t),s=Object.keys(a);if(o.length!==s.length)return!1;let c=0;for(;c<o.length;){const p=o[c],g=t[p];if(g===void 0&&!a.hasOwnProperty(p)||g!==a[p])return!1;c++}return!0}}}]);})();