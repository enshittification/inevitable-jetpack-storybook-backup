"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7395],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(v,f,o)=>{o.d(f,{aD:()=>r.aD});var r=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),e=(...a)=>{let l=config,c=a;c.length===1&&Array.isArray(c[0])&&([c]=c),c.length!==1&&typeof c[c.length-1]!="string"&&(l={...config,...c.pop()});let _=c[0];(c.length!==1||typeof _=="string")&&(_={},c.forEach(g=>{_[g]=g}));let x={};return Object.keys(_).forEach(g=>{x[g]=action(_[g],l)}),x},s=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(v,f,o)=>{o.d(f,{ZP:()=>t});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=o.n(e),a=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=o("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function x(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,C=(0,a.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),S={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},E=(0,a.Z)("circle",{target:"ea4tfvq1"})(S,";stroke:",_.D.gray[300],";"),w=(0,a.Z)("path",{target:"ea4tfvq0"})(S,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");function k({className:d,...u},i){return(0,r.createElement)(C,{className:s()("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...u,ref:i},(0,r.createElement)(E,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(w,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const t=(0,r.forwardRef)(k)},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(v,f,o)=>{o.d(f,{Z:()=>_});var r=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",a="12px",l={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:a,controlPaddingXLarge:`calc(${a} * 1.3334)`,controlPaddingXSmall:`calc(${a} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},c={toggleGroupControlBackgroundColor:l.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:l.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:l.controlBackgroundColor},_=Object.assign({},l,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,r.D)(2)}`,cardPaddingSmall:`${(0,r.D)(4)}`,cardPaddingMedium:`${(0,r.D)(4)} ${(0,r.D)(6)}`,cardPaddingLarge:`${(0,r.D)(6)} ${(0,r.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+element@5.18.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(v,f,o)=>{o.d(f,{Z:()=>D});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let e,s,a,l;const c=/<(\/)?(\w+)\s*(\/)?>/g;function _(t,d,u,i,n){return{element:t,tokenStart:d,tokenLength:u,prevOffset:i,leadingTextStart:n,children:[]}}const x=(t,d)=>{if(e=t,s=0,a=[],l=[],c.lastIndex=0,!g(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(C(d));return(0,r.createElement)(r.Fragment,null,...a)},g=t=>{const d=typeof t=="object",u=d&&Object.values(t);return d&&u.length&&u.every(i=>(0,r.isValidElement)(i))};function C(t){const d=S(),[u,i,n,p]=d,m=l.length,b=n>s?s:null;if(!t[i])return E(),!1;switch(u){case"no-more-tokens":if(m!==0){const{leadingTextStart:y,tokenStart:B}=l.pop();a.push(e.substr(y,B))}return E(),!1;case"self-closed":return m===0?(b!==null&&a.push(e.substr(b,n-b)),a.push(t[i]),s=n+p,!0):(w(_(t[i],n,p)),s=n+p,!0);case"opener":return l.push(_(t[i],n,p,n+p,b)),s=n+p,!0;case"closer":if(m===1)return k(n),s=n+p,!0;const h=l.pop(),T=e.substr(h.prevOffset,n-h.prevOffset);h.children.push(T),h.prevOffset=n+p;const O=_(h.element,h.tokenStart,h.tokenLength,n+p);return O.children=h.children,w(O),s=n+p,!0;default:return E(),!1}}function S(){const t=c.exec(e);if(t===null)return["no-more-tokens"];const d=t.index,[u,i,n,p]=t,m=u.length;return p?["self-closed",n,d,m]:i?["closer",n,d,m]:["opener",n,d,m]}function E(){const t=e.length-s;t!==0&&a.push(e.substr(s,t))}function w(t){const{element:d,tokenStart:u,tokenLength:i,prevOffset:n,children:p}=t,m=l[l.length-1],b=e.substr(m.prevOffset,u-m.prevOffset);b&&m.children.push(b),m.children.push((0,r.cloneElement)(d,null,...p)),m.prevOffset=n||u+i}function k(t){const{element:d,leadingTextStart:u,prevOffset:i,tokenStart:n,children:p}=l.pop(),m=t?e.substr(i,t-i):e.substr(i);m&&p.push(m),u!==null&&a.push(e.substr(u,n-u)),a.push((0,r.cloneElement)(d,null,...p))}const D=x},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(v,f,o)=>{o.d(f,{Z:()=>s});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e({icon:a,size:l=24,...c}){return(0,r.cloneElement)(a,{width:l,height:l,...c})}const s=e},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/external.js":(v,f,o)=>{o.d(f,{Z:()=>a});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(e.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();
