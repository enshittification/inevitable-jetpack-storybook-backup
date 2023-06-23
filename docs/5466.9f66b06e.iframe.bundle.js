"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5466],{"../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js":(M,u,e)=>{e.d(u,{C:()=>O,T:()=>s,_:()=>v,w:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),E=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=!0,P={}.hasOwnProperty,m=a.createContext(typeof HTMLElement!="undefined"?(0,r.Z)({key:"css"}):null),O=m.Provider,v=function(){return(0,a.useContext)(m)},t=function(n){return(0,a.forwardRef)(function(o,i){var y=(0,a.useContext)(m);return n(o,y,i)})};_||(t=function(n){return function(o){var i=(0,a.useContext)(m);return i===null?(i=(0,r.Z)({key:"css"}),a.createElement(m.Provider,{value:i},n(o,i))):n(o,i)}});var s=a.createContext({}),T=function(){return React.useContext(s)},x=function(n,o){if(typeof o=="function"){var i=o(n);return i}return _extends({},n,o)},l=null,C=function(n){var o=React.useContext(s);return n.theme!==o&&(o=l(o)(n.theme)),React.createElement(s.Provider,{value:o},n.children)};function d(c){var n=c.displayName||c.name||"Component",o=function(A,R){var N=React.useContext(s);return React.createElement(c,_extends({theme:N,ref:R},A))},i=React.forwardRef(o);return i.displayName="WithTheme("+n+")",hoistNonReactStatics(i,c)}var w=function(n){var o=n.split(".");return o[o.length-1]},g=function(n){var o=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(n);if(o||(o=/^([A-Za-z0-9$.]+)@/.exec(n),o))return w(o[1])},f=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),h=function(n){return n.replace(/\$/g,"-")},b=function(n){if(n)for(var o=n.split(`
`),i=0;i<o.length;i++){var y=g(o[i]);if(y){if(f.has(y))break;if(/^[A-Z]/.test(y))return h(y)}}},S="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",B="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",L=function(n,o){var i={};for(var y in o)P.call(o,y)&&(i[y]=o[y]);if(i[S]=n,!1)var A;return i},j=function(n){var o=n.cache,i=n.serialized,y=n.isStringTag;return registerStyles(o,i,y),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,i,y)}),null},D=null,F=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(M,u,e)=>{e.d(u,{Z:()=>l});var a=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),E=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),P=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),O=p.Z,v=function(d){return d!=="theme"},t=function(d){return typeof d=="string"&&d.charCodeAt(0)>96?O:v},s=function(d,w,g){var f;if(w){var h=w.shouldForwardProp;f=d.__emotion_forwardProp&&h?function(b){return d.__emotion_forwardProp(b)&&h(b)}:h}return typeof f!="function"&&g&&(f=d.__emotion_forwardProp),f},T=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,x=function(d){var w=d.cache,g=d.serialized,f=d.isStringTag;return(0,_.hC)(w,g,f),(0,m.L)(function(){return(0,_.My)(w,g,f)}),null},l=function C(d,w){var g=d.__emotion_real===d,f=g&&d.__emotion_base||d,h,b;w!==void 0&&(h=w.label,b=w.target);var S=s(d,w,g),B=S||t(f),L=!B("as");return function(){var j=arguments,D=g&&d.__emotion_styles!==void 0?d.__emotion_styles.slice(0):[];if(h!==void 0&&D.push("label:"+h+";"),j[0]==null||j[0].raw===void 0)D.push.apply(D,j);else{D.push(j[0][0]);for(var F=j.length,c=1;c<F;c++)D.push(j[c],j[0][c])}var n=(0,E.w)(function(o,i,y){var A=L&&o.as||f,R="",N=[],I=o;if(o.theme==null){I={};for(var K in o)I[K]=o[K];I.theme=r.useContext(E.T)}typeof o.className=="string"?R=(0,_.fp)(i.registered,N,o.className):o.className!=null&&(R=o.className+" ");var z=(0,P.O)(D.concat(N),i.registered,I);R+=i.key+"-"+z.name,b!==void 0&&(R+=" "+b);var k=L&&S===void 0?t(A):B,W={};for(var U in o)L&&U==="as"||k(U)&&(W[U]=o[U]);return W.className=R,W.ref=y,r.createElement(r.Fragment,null,r.createElement(x,{cache:i,serialized:z,isStringTag:typeof A=="string"}),r.createElement(A,W))});return n.displayName=h!==void 0?h:"Styled("+(typeof f=="string"?f:f.displayName||f.name||"Component")+")",n.defaultProps=d.defaultProps,n.__emotion_real=n,n.__emotion_base=f,n.__emotion_styles=D,n.__emotion_forwardProp=S,Object.defineProperty(n,"toString",{value:function(){return"."+b}}),n.withComponent=function(o,i){return C(o,(0,a.Z)({},w,i,{shouldForwardProp:s(n,i,!0)})).apply(void 0,D)},n}}},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/constants.js":(M,u,e)=>{e.d(u,{_3:()=>p,cT:()=>r,rE:()=>_});const a="$$typeof",r="data-wp-component",p="data-wp-c16t",E="data-wp-c5tc8t",_="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js":(M,u,e)=>{e.d(u,{H:()=>v,Iq:()=>_,Kc:()=>P});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/constants.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/get-styled-class-name-from-key.js"),E=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");function _(t,s){return m(t,s,{forwardsRef:!0})}function P(t,s){return m(t,s)}function m(t,s,T){const x=T!=null&&T.forwardsRef?(0,a.forwardRef)(t):t;typeof s=="undefined"&&typeof E!="undefined"&&E.env;let l=x[r.rE]||[s];return Array.isArray(s)&&(l=[...l,...s]),typeof s=="string"&&(l=[...l,s]),Object.assign(x,{[r.rE]:[...new Set(l)],displayName:s,selector:`.${(0,p.l)(s)}`})}function O(t){if(!t)return[];let s=[];return t[r.rE]&&(s=t[r.rE]),t.type&&t.type[r.rE]&&(s=t.type[r.rE]),s}function v(t,s){return t?typeof s=="string"?O(t).includes(s):Array.isArray(s)?s.some(T=>O(t).includes(T)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-system-provider.js":(M,u,e)=>{e.d(u,{Cd:()=>v,G8:()=>x,eb:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),p=e.n(r),E=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),_=e.n(E),P=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js"),O=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");const v=(0,a.createContext)({}),t=()=>(0,a.useContext)(v);function s({value:l}){const C=t(),d=(0,a.useRef)(l);return(0,m.Z)(()=>{_()(d.current,l)&&d.current!==l&&typeof O!="undefined"&&O.env},[l]),(0,a.useMemo)(()=>p()(C!=null?C:{},l!=null?l:{},{isMergeableObject:P.P}),[C,l])}const T=({children:l,value:C})=>{const d=s({value:C});return(0,a.createElement)(v.Provider,{value:d},l)},x=(0,a.memo)(T)},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/get-styled-class-name-from-key.js":(M,u,e)=>{e.d(u,{l:()=>E});var a=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),r=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function p(_){return`components-${(0,a.o)(_)}`}const E=(0,r.Z)(p)},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js":(M,u,e)=>{e.d(u,{y:()=>O});var a=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-system-provider.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/constants.js");function p(v){return{[r.cT]:v}}function E(){return{[r._3]:!0}}var _=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/get-styled-class-name-from-key.js"),P=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),m=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");function O(v,t){const s=(0,a.eb)();typeof t=="undefined"&&typeof m!="undefined"&&m.env;const T=(s==null?void 0:s[t])||{},x={...E(),...p(t)},{_overrides:l,...C}=T,d=Object.entries(C).length?Object.assign({},C,v):v,g=(0,P.I)()((0,_.l)(t),v.className),f=typeof d.renderChildren=="function"?d.renderChildren(d):d.children;for(const h in d)x[h]=d[h];for(const h in l)x[h]=l[h];return f!==void 0&&(x.children=f),x.className=g,x}},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(M,u,e)=>{e.d(u,{I:()=>P});var a=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js"),E=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const _=m=>typeof m!="undefined"&&m!==null&&["name","styles"].every(O=>typeof m[O]!="undefined"),P=()=>{const m=(0,a._)();return(0,E.useCallback)((...v)=>{if(m===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,p.cx)(...v.map(t=>_(t)?((0,r.My)(m,t,!1),`${m.key}-${t.name}`):t))},[m])}},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(M,u,e)=>{e.d(u,{Z:()=>p});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(E,_){const P=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(P.current)return E();P.current=!0},_)}const p=r},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js":(M,u,e)=>{e.d(u,{Z:()=>p});var a=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");const r=(0,a.Z)("div",{target:"e19lxcc00"})("");r.selector=".components-view",r.displayName="View";const p=r},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(M,u,e)=>{e.d(u,{Z:()=>v});var a=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js");const _={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var P=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js");function m(t,s){const{style:T,...x}=(0,p.y)(t,"VisuallyHidden");return(0,r.createElement)(P.Z,(0,a.Z)({ref:s},x,{style:{..._,...T||{}}}))}const v=(0,E.Iq)(m,"VisuallyHidden")}}]);})();