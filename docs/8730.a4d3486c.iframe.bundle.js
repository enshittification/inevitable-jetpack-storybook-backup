"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8730,8311,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(m,i,e)=>{e.r(i),e.d(i,{MDXContext:()=>t,MDXProvider:()=>s,useMDXComponents:()=>n,withMDXComponents:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=o.createContext({});function a(r){return u;function u(c){const l=n(c.components);return o.createElement(r,{...c,allComponents:l})}}function n(r){const u=o.useContext(t);return o.useMemo(()=>typeof r=="function"?r(u):{...u,...r},[u,r])}const d={};function s({components:r,children:u,disableParentContext:c}){let l;return c?l=typeof r=="function"?r({}):r||d:l=n(r),o.createElement(t.Provider,{value:l},u)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(m,i,e)=>{var o=Object.defineProperty,t=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,d=(c,l,p,g)=>{if(l&&typeof l=="object"||typeof l=="function")for(let _ of a(l))!n.call(c,_)&&_!==p&&o(c,_,{get:()=>l[_],enumerable:!(g=t(l,_))||g.enumerable});return c},s=(c,l,p)=>(d(c,l,"default"),p&&d(p,l,"default")),r=c=>d(o({},"__esModule",{value:!0}),c),u={};m.exports=r(u),s(u,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),m.exports)},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(m,i,e)=>{e.d(i,{ZP:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(t),n=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const c=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,l=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",s.Z.spinnerSize,"px;height:",s.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",r.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),p={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,n.Z)("circle",{target:"ea4tfvq1"})(p,";stroke:",r.D.gray[300],";"),_=(0,n.Z)("path",{target:"ea4tfvq0"})(p,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",c,";");function f({className:x,...h},w){return(0,o.createElement)(l,{className:a()("components-spinner",x),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...h,ref:w},(0,o.createElement)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(_,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const v=(0,o.forwardRef)(f)},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(m,i,e)=>{e.d(i,{Z:()=>r});var o=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.9.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",n="12px",d={controlSurfaceColor:t.D.white,controlTextActiveColor:t.D.theme.accent,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:t.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${t.D.theme.accent}`,controlDestructiveBorderColor:t.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},s={toggleGroupControlBackgroundColor:d.controlBackgroundColor,toggleGroupControlBorderColor:t.D.ui.border,toggleGroupControlBackdropBackgroundColor:d.controlSurfaceColor,toggleGroupControlBackdropBorderColor:t.D.ui.border,toggleGroupControlButtonColorActive:d.controlBackgroundColor},r=Object.assign({},d,s,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:t.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:t.D.white,surfaceColor:t.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(m,i,e)=>{e.d(i,{Z:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t(n){return n&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(n):null}function a(n){const d=(0,o.useMemo)(()=>{const s=t(n);return{subscribe(r){var u;return s?((u=s.addEventListener)==null||u.call(s,"change",r),()=>{var c;(c=s.removeEventListener)==null||c.call(s,"change",r)}):()=>{}},getValue(){var r;return(r=s==null?void 0:s.matches)!==null&&r!==void 0?r:!1}}},[n]);return(0,o.useSyncExternalStore)(d.subscribe,d.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(m,i,e)=>{e.d(i,{Z:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t({icon:n,size:d=24,...s},r){return(0,o.cloneElement)(n,{width:d,height:d,...s,ref:r})}const a=(0,o.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/cloud-upload.js":(m,i,e)=>{e.d(i,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(m,i,e)=>{e.d(i,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();