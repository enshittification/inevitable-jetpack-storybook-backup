"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3164],{"../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js":(O,v,n)=>{n.d(v,{C:()=>_,T:()=>h,_:()=>f,w:()=>C});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=n("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),c=n("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),m=!0,i={}.hasOwnProperty,a=t.createContext(typeof HTMLElement!="undefined"?(0,s.Z)({key:"css"}):null),_=a.Provider,f=function(){return(0,t.useContext)(a)},C=function(e){return(0,t.forwardRef)(function(o,r){var P=(0,t.useContext)(a);return e(o,P,r)})};m||(C=function(e){return function(o){var r=(0,t.useContext)(a);return r===null?(r=(0,s.Z)({key:"css"}),t.createElement(a.Provider,{value:r},e(o,r))):e(o,r)}});var h=t.createContext({}),R=function(){return React.useContext(h)},y=function(e,o){if(typeof o=="function"){var r=o(e);return r}return _extends({},e,o)},T=null,d=function(e){var o=React.useContext(h);return e.theme!==o&&(o=T(o)(e.theme)),React.createElement(h.Provider,{value:o},e.children)};function u(p){var e=p.displayName||p.name||"Component",o=function(k,L){var I=React.useContext(h);return React.createElement(p,_extends({theme:I,ref:L},k))},r=React.forwardRef(o);return r.displayName="WithTheme("+e+")",hoistNonReactStatics(r,p)}var E=function(e){var o=e.split(".");return o[o.length-1]},b=function(e){var o=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);if(o||(o=/^([A-Za-z0-9$.]+)@/.exec(e),o))return E(o[1])},g=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),S=function(e){return e.replace(/\$/g,"-")},w=function(e){if(e)for(var o=e.split(`
`),r=0;r<o.length;r++){var P=b(o[r]);if(P){if(g.has(P))break;if(/^[A-Z]/.test(P))return S(P)}}},x="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",A="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",B=function(e,o){var r={};for(var P in o)i.call(o,P)&&(r[P]=o[P]);if(r[x]=e,!1)var k;return r},M=function(e){var o=e.cache,r=e.serialized,P=e.isStringTag;return registerStyles(o,r,P),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,r,P)}),null},D=null,j=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(O,v,n)=>{n.d(v,{Z:()=>T});var t=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),c=n("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),m=n("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),i=n("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),a=n("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=l.Z,f=function(u){return u!=="theme"},C=function(u){return typeof u=="string"&&u.charCodeAt(0)>96?_:f},h=function(u,E,b){var g;if(E){var S=E.shouldForwardProp;g=u.__emotion_forwardProp&&S?function(w){return u.__emotion_forwardProp(w)&&S(w)}:S}return typeof g!="function"&&b&&(g=u.__emotion_forwardProp),g},R=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,y=function(u){var E=u.cache,b=u.serialized,g=u.isStringTag;return(0,m.hC)(E,b,g),(0,a.L)(function(){return(0,m.My)(E,b,g)}),null},T=function d(u,E){var b=u.__emotion_real===u,g=b&&u.__emotion_base||u,S,w;E!==void 0&&(S=E.label,w=E.target);var x=h(u,E,b),A=x||C(g),B=!A("as");return function(){var M=arguments,D=b&&u.__emotion_styles!==void 0?u.__emotion_styles.slice(0):[];if(S!==void 0&&D.push("label:"+S+";"),M[0]==null||M[0].raw===void 0)D.push.apply(D,M);else{D.push(M[0][0]);for(var j=M.length,p=1;p<j;p++)D.push(M[p],M[0][p])}var e=(0,c.w)(function(o,r,P){var k=B&&o.as||g,L="",I=[],W=o;if(o.theme==null){W={};for(var F in o)W[F]=o[F];W.theme=s.useContext(c.T)}typeof o.className=="string"?L=(0,m.fp)(r.registered,I,o.className):o.className!=null&&(L=o.className+" ");var U=(0,i.O)(D.concat(I),r.registered,W);L+=r.key+"-"+U.name,w!==void 0&&(L+=" "+w);var K=B&&x===void 0?C(k):A,z={};for(var N in o)B&&N==="as"||K(N)&&(z[N]=o[N]);return z.className=L,z.ref=P,s.createElement(s.Fragment,null,s.createElement(y,{cache:r,serialized:U,isStringTag:typeof k=="string"}),s.createElement(k,z))});return e.displayName=S!==void 0?S:"Styled("+(typeof g=="string"?g:g.displayName||g.name||"Component")+")",e.defaultProps=u.defaultProps,e.__emotion_real=e,e.__emotion_base=g,e.__emotion_styles=D,e.__emotion_forwardProp=x,Object.defineProperty(e,"toString",{value:function(){return"."+w}}),e.withComponent=function(o,r){return d(o,(0,t.Z)({},E,r,{shouldForwardProp:h(e,r,!0)})).apply(void 0,D)},e}}},"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(O,v,n)=>{n.d(v,{aD:()=>t.aD});var t=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),s=(...c)=>{let m=config,i=c;i.length===1&&Array.isArray(i[0])&&([i]=i),i.length!==1&&typeof i[i.length-1]!="string"&&(m={...config,...i.pop()});let a=i[0];(i.length!==1||typeof a=="string")&&(a={},i.forEach(f=>{a[f]=f}));let _={};return Object.keys(a).forEach(f=>{_[f]=action(a[f],m)}),_},l=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(O,v,n)=>{n.d(v,{ZP:()=>u});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=n.n(s),c=n("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),m=n("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),i=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),a=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function _(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const f=m.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,C=(0,c.Z)("svg",{target:"ea4tfvq2"})("width:",i.Z.spinnerSize,"px;height:",i.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",a.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),h={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},R=(0,c.Z)("circle",{target:"ea4tfvq1"})(h,";stroke:",a.D.gray[300],";"),y=(0,c.Z)("path",{target:"ea4tfvq0"})(h,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",f,";");function T({className:E,...b},g){return(0,t.createElement)(C,{className:l()("components-spinner",E),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...b,ref:g},(0,t.createElement)(R,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(y,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const u=(0,t.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(O,v,n)=>{n.d(v,{Z:()=>a});var t=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),s=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",c="12px",m={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.ui.theme,controlPaddingX:c,controlPaddingXLarge:`calc(${c} * 1.3334)`,controlPaddingXSmall:`calc(${c} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.ui.theme}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},i={toggleGroupControlBackgroundColor:m.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:m.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:m.controlBackgroundColor},a=Object.assign({},m,i,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js":(O,v,n)=>{n.d(v,{Z:()=>c});var t=n("../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.2.0/node_modules/use-memo-one/dist/use-memo-one.esm.js"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");function c(m,i,a){const _=(0,t.Pr)(()=>(0,l.D)(m,i!=null?i:0,a),[m,i,a]);return(0,s.useEffect)(()=>()=>_.cancel(),[_]),_}},"../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":(O,v,n)=>{n.d(v,{D:()=>t});const t=(s,l,c)=>{let m,i,a=0,_,f,C,h=0,R=!1,y=!1,T=!0;c&&(R=!!c.leading,y="maxWait"in c,c.maxWait!==void 0&&(a=Math.max(c.maxWait,l)),T="trailing"in c?!!c.trailing:T);function d(e){const o=m,r=i;return m=void 0,i=void 0,h=e,_=s.apply(r,o),_}function u(e,o){f=setTimeout(e,o)}function E(){f!==void 0&&clearTimeout(f)}function b(e){return h=e,u(x,l),R?d(e):_}function g(e){return e-(C||0)}function S(e){const o=g(e),r=e-h,P=l-o;return y?Math.min(P,a-r):P}function w(e){const o=g(e),r=e-h;return C===void 0||o>=l||o<0||y&&r>=a}function x(){const e=Date.now();if(w(e))return B(e);u(x,S(e))}function A(){f=void 0}function B(e){return A(),T&&m?d(e):(m=i=void 0,_)}function M(){E(),h=0,A(),m=C=i=void 0}function D(){return j()?B(Date.now()):_}function j(){return f!==void 0}function p(...e){const o=Date.now(),r=w(o);if(m=e,i=this,C=o,r){if(!j())return b(C);if(y)return u(x,l),d(C)}return j()||u(x,l),_}return p.cancel=M,p.flush=D,p.pending=j,p}},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/icon/index.js":(O,v,n)=>{n.d(v,{Z:()=>l});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:c,size:m=24,...i}){return(0,t.cloneElement)(c,{width:m,height:m,...i})}const l=s},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(O,v,n)=>{n.d(v,{Z:()=>c});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,t.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/map-marker.js":(O,v,n)=>{n.d(v,{Z:()=>c});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,t.createElement)(s.Wj,{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.y$,{d:"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(O,v,n)=>{n.d(v,{Cd:()=>c,G:()=>m,UL:()=>f,Wj:()=>T,mg:()=>_,y$:()=>a});var t=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=n.n(t),l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const c=d=>(0,l.createElement)("circle",d),m=d=>(0,l.createElement)("g",d),i=d=>createElement("line",d),a=d=>(0,l.createElement)("path",d),_=d=>(0,l.createElement)("polygon",d),f=d=>(0,l.createElement)("rect",d),C=d=>createElement("defs",d),h=d=>createElement("radialGradient",d),R=d=>createElement("linearGradient",d),y=d=>createElement("stop",d),T=({className:d,isPressed:u,...E})=>{const b={...E,className:s()(d,{"is-pressed":u})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.createElement)("svg",{...b})}},"../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.2.0/node_modules/use-memo-one/dist/use-memo-one.esm.js":(O,v,n)=>{n.d(v,{Pr:()=>l});var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s(a,_){if(a.length!==_.length)return!1;for(var f=0;f<a.length;f++)if(a[f]!==_[f])return!1;return!0}function l(a,_){var f=(0,t.useState)(function(){return{inputs:_,result:a()}})[0],C=(0,t.useRef)(!0),h=(0,t.useRef)(f),R=C.current||!!(_&&h.current.inputs&&s(_,h.current.inputs)),y=R?h.current:{inputs:_,result:a()};return(0,t.useEffect)(function(){C.current=!1,h.current=y},[y]),y.result}function c(a,_){return l(function(){return a},_)}var m=null,i=null}}]);})();
