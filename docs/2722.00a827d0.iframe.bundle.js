"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2722],{"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js":(T,b,n)=>{n.d(b,{_X:()=>H,ZP:()=>Q});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),S=n.n(P),m=n("../../../node_modules/.pnpm/@floating-ui+core@1.5.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),h=n("../../../node_modules/.pnpm/@floating-ui+react-dom@2.0.2_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),f=n("../../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),R=n("../../../node_modules/.pnpm/framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),M=n("../../../node_modules/.pnpm/framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),O=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_=n("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),F=n("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js"),j=n("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),I=n("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),A=n("../../../node_modules/.pnpm/@wordpress+deprecated@3.43.0/node_modules/@wordpress/deprecated/build-module/index.js"),$=n("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),te=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");let Y=0;function z(a){const o=document.scrollingElement||document.body;a&&(Y=o.scrollTop);const t=a?"add":"remove";o.classList[t]("lockscroll"),document.documentElement.classList[t]("lockscroll"),a||(o.scrollTop=Y)}let Z=0;function V(){return(0,e.useEffect)(()=>(Z===0&&z(!0),++Z,()=>{Z===1&&z(!1),--Z}),[]),null}const ne=V;var se=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),N=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js"),D=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");function re(){return[{name:"overlay",fn({rects:a}){return a.reference}},(0,m.dp)({apply({rects:a,elements:o}){var t;const{firstElementChild:s}=(t=o.floating)!==null&&t!==void 0?t:{};s instanceof HTMLElement&&Object.assign(s.style,{width:`${a.reference.width}px`,height:`${a.reference.height}px`})}})]}var le=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");const H="Popover",de=()=>(0,e.createElement)($.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,e.createElement)($.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,e.createElement)($.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),X=(0,e.createContext)(void 0),G="components-popover__fallback-container",J=()=>{let a=document.body.querySelector("."+G);return a||(a=document.createElement("div"),a.className=G,document.body.append(a)),a},ie=(a,o)=>{const{animate:t=!0,headerTitle:s,onClose:d,children:p,className:v,noArrow:g=!0,position:l,placement:u="bottom-start",offset:r=0,focusOnMount:c="firstElement",anchor:y,expandOnMobile:i,onFocusOutside:E,__unstableSlotName:L=H,flip:k=!0,resize:ce=!0,shift:Re=!1,inline:ve=!1,variant:Me,__unstableForcePosition:me,anchorRef:w,anchorRect:q,getAnchorRect:ae,isAlternate:ge,...Oe}=a;let Ee=k,he=ce;me!==void 0&&((0,A.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),Ee=!me,he=!me),w!==void 0&&(0,A.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),q!==void 0&&(0,A.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),ae!==void 0&&(0,A.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const pe=ge?"toolbar":Me;ge!==void 0&&(0,A.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const we=(0,e.useRef)(null),[Pe,De]=(0,e.useState)(null),Le=(0,e.useCallback)(x=>{De(x)},[]),Ae=(0,_.Z)("medium","<"),B=i&&Ae,Ue=!B&&!g,be=l?(0,D.KF)(l):u,Te=[...u==="overlay"?re():[],(0,m.cv)(r),Ee&&(0,m.RR)(),he&&(0,m.dp)({apply(x){var U;const{firstElementChild:oe}=(U=ee.floating.current)!==null&&U!==void 0?U:{};oe instanceof HTMLElement&&Object.assign(oe.style,{maxHeight:`${x.availableHeight}px`,overflow:"auto"})}}),Re&&(0,m.uY)({crossAxis:!0,limiter:(0,m.dr)(),padding:1}),(0,h.x7)({element:we})],Se=(0,e.useContext)(X)||L,Ze=(0,se.Z)(Se);let fe;(d||E)&&(fe=(x,U)=>{x==="focus-outside"&&E?E(U):d&&d()});const[Ne,We]=(0,F.Z)({focusOnMount:c,__unstableOnClose:fe,onClose:fe}),{x:xe,y:ye,refs:ee,strategy:Be,update:Ce,placement:_e,middlewareData:{arrow:C}}=(0,h.YF)({placement:be==="overlay"?void 0:be,middleware:Te,whileElementsMounted:(x,U,oe)=>(0,f.Me)(x,U,oe,{layoutShift:!1,animationFrame:!0})}),Ke=(0,e.useCallback)(x=>{we.current=x,Ce()},[Ce]),Ie=w==null?void 0:w.top,$e=w==null?void 0:w.bottom,Ve=w==null?void 0:w.startContainer,He=w==null?void 0:w.current;(0,e.useLayoutEffect)(()=>{const x=(0,D.CK)({anchor:y,anchorRef:w,anchorRect:q,getAnchorRect:ae,fallbackReferenceElement:Pe});ee.setReference(x)},[y,w,Ie,$e,Ve,He,q,ae,Pe,ee]);const Ye=(0,j.Z)([ee.setFloating,Ne,o]),Fe=B?void 0:{position:Be,top:0,left:0,x:(0,D.sw)(xe),y:(0,D.sw)(ye)},ze=(0,R.J)(),je=t&&!B&&!ze,[Xe,Ge]=(0,e.useState)(!1),{style:Je,...Qe}=(0,e.useMemo)(()=>(0,D.d9)(_e),[_e]),ke=je?{style:{...Je,...Fe},onAnimationComplete:()=>Ge(!0),...Qe}:{animate:!1,style:Fe},qe=(!je||Xe)&&xe!==null&&ye!==null;let K=(0,e.createElement)(M.E.div,{className:S()("components-popover",v,{"is-expanded":B,"is-positioned":qe,[`is-${pe==="toolbar"?"alternate":pe}`]:pe}),...ke,...Oe,ref:Ye,...We,tabIndex:-1},B&&(0,e.createElement)(ne,null),B&&(0,e.createElement)("div",{className:"components-popover__header"},(0,e.createElement)("span",{className:"components-popover__header-title"},s),(0,e.createElement)(te.ZP,{className:"components-popover__close",icon:I.Z,onClick:d})),(0,e.createElement)("div",{className:"components-popover__content"},p),Ue&&(0,e.createElement)("div",{ref:Ke,className:["components-popover__arrow",`is-${_e.split("-")[0]}`].join(" "),style:{left:typeof(C==null?void 0:C.x)!="undefined"&&Number.isFinite(C.x)?`${C.x}px`:"",top:typeof(C==null?void 0:C.y)!="undefined"&&Number.isFinite(C.y)?`${C.y}px`:""}},(0,e.createElement)(de,null)));const eo=Ze.ref&&!ve,oo=w||q||y;return eo?K=(0,e.createElement)(N.de,{name:Se},K):ve||(K=(0,O.createPortal)((0,e.createElement)(le.V,{document},K),J())),oo?K:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{ref:Le}),K)},W=(0,e.forwardRef)(ie);function ue({name:a=H},o){return(0,e.createElement)(N.g7,{bubblesVirtually:!0,name:a,className:"popover-slot",ref:o})}W.Slot=(0,e.forwardRef)(ue),W.__unstableSlotNameProvider=X.Provider;const Q=W},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":(T,b,n)=>{n.d(b,{Z:()=>f});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),P=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=n("../../../node_modules/.pnpm/@wordpress+warning@2.43.0/node_modules/@wordpress/warning/build-module/index.js");const m={slots:(0,e.Yr)(),fills:(0,e.Yr)(),registerSlot:()=>{typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,S.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},f=(0,P.createContext)(m)},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":(T,b,n)=>{n.d(b,{Z:()=>m});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/index.js"),P=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function m(h){const f=(0,P.useContext)(S.Z),M=(0,e.RK)(f.slots,{sync:!0}).get(h),O=(0,P.useMemo)(()=>({updateSlot:_=>f.updateSlot(h,_),unregisterSlot:_=>f.unregisterSlot(h,_),registerFill:_=>f.registerFill(h,_),unregisterFill:_=>f.unregisterFill(h,_)}),[h,f]);return{...M,...O}}},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js":(T,b,n)=>{n.d(b,{de:()=>J,zt:()=>ue,g7:()=>W,Es:()=>a,up:()=>Q});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const P={registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>[],subscribe:()=>()=>{}},m=(0,e.createContext)(P),f=o=>{const{getSlot:t,subscribe:s}=(0,e.useContext)(m);return(0,e.useSyncExternalStore)(s,()=>t(o),()=>t(o))};function R({name:o,children:t}){const{registerFill:s,unregisterFill:d}=(0,e.useContext)(m),p=f(o),v=(0,e.useRef)({name:o,children:t});return(0,e.useLayoutEffect)(()=>{const g=v.current;return s(o,g),()=>d(o,g)},[]),(0,e.useLayoutEffect)(()=>{v.current.children=t,p&&p.forceUpdate()},[t]),(0,e.useLayoutEffect)(()=>{o!==v.current.name&&(d(v.current.name,v.current),v.current.name=o,s(o,v.current))},[o]),null}var M=n("../../../node_modules/.pnpm/@wordpress+element@5.20.0/node_modules/@wordpress/element/build-module/utils.js");function O(o){return typeof o=="function"}class _ extends e.Component{constructor(t){super(t),this.isUnmounted=!1}componentDidMount(){const{registerSlot:t}=this.props;this.isUnmounted=!1,t(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:t}=this.props;this.isUnmounted=!0,t(this.props.name,this)}componentDidUpdate(t){const{name:s,unregisterSlot:d,registerSlot:p}=this.props;t.name!==s&&(d(t.name,this),p(s,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var t;const{children:s,name:d,fillProps:p={},getFills:v}=this.props,g=((t=v(d,this))!==null&&t!==void 0?t:[]).map(l=>{const u=O(l.children)?l.children(p):l.children;return e.Children.map(u,(r,c)=>{if(!r||typeof r=="string")return r;let y=c;return typeof r=="object"&&"key"in r&&(r!=null&&r.key)&&(y=r.key),(0,e.cloneElement)(r,{key:y})})}).filter(l=>!(0,M.V)(l));return(0,e.createElement)(e.Fragment,null,O(s)?s(g):g)}}const j=o=>(0,e.createElement)(m.Consumer,null,({registerSlot:t,unregisterSlot:s,getFills:d})=>(0,e.createElement)(_,{...o,registerSlot:t,unregisterSlot:s,getFills:d}));var I=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),A=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),$=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");function te(){const[,o]=(0,e.useState)({}),t=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),()=>{t.current&&o({})}}function Y(o){var t;const{name:s,children:d}=o,{registerFill:p,unregisterFill:v,...g}=(0,A.Z)(s),l=te(),u=(0,e.useRef)({rerender:l});if((0,e.useEffect)(()=>(p(u),()=>{v(u)}),[p,v]),!g.ref||!g.ref.current)return null;const r=(0,e.createElement)($.Z,{document:g.ref.current.ownerDocument},typeof d=="function"?d((t=g.fillProps)!==null&&t!==void 0?t:{}):d);return(0,I.createPortal)(r,g.ref.current)}var z=n("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),Z=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),V=n("../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function ne(o,t){const{name:s,fillProps:d={},as:p,children:v,...g}=o,{registerSlot:l,unregisterSlot:u,...r}=(0,e.useContext)(V.Z),c=(0,e.useRef)(null);return(0,e.useLayoutEffect)(()=>(l(s,c,d),()=>{u(s,c)}),[l,u,s]),(0,e.useLayoutEffect)(()=>{r.updateSlot(s,d)}),(0,e.createElement)(Z.Z,{as:p,ref:(0,z.Z)([t,c]),...g})}const se=(0,e.forwardRef)(ne);var N=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/vanilla.js"),D=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),re=n("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.43.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function le(){const o=(0,D.Yr)(),t=(0,D.Yr)();return{slots:o,fills:t,registerSlot:(l,u,r)=>{const c=o.get(l);o.set(l,(0,N.iH)({...c,ref:u||(c==null?void 0:c.ref),fillProps:r||(c==null?void 0:c.fillProps)||{}}))},updateSlot:(l,u)=>{const r=o.get(l);if(!r||(0,re.ZP)(r.fillProps,u))return;r.fillProps=u;const c=t.get(l);c&&c.map(y=>y.current.rerender())},unregisterSlot:(l,u)=>{var r;((r=o.get(l))==null?void 0:r.ref)===u&&o.delete(l)},registerFill:(l,u)=>{t.set(l,(0,N.iH)([...t.get(l)||[],u]))},unregisterFill:(l,u)=>{const r=t.get(l);r&&t.set(l,(0,N.iH)(r.filter(c=>c!==u)))}}}function H({children:o}){const t=(0,e.useMemo)(le,[]);return(0,e.createElement)(V.Z.Provider,{value:t},o)}function de(){const o={},t={};let s=[];function d(i,E){const L=o[i];o[i]=E,c(),r(i),L&&L.forceUpdate()}function p(i,E){t[i]=[...t[i]||[],E],r(i)}function v(i,E){o[i]===E&&(delete o[i],c())}function g(i,E){var k;var L;t[i]=(L=(k=t[i])==null?void 0:k.filter(ce=>ce!==E))!==null&&L!==void 0?L:[],r(i)}function l(i){return o[i]}function u(i,E){return o[i]!==E?[]:t[i]}function r(i){const E=l(i);E&&E.forceUpdate()}function c(){s.forEach(i=>i())}function y(i){return s.push(i),()=>{s=s.filter(E=>E!==i)}}return{registerSlot:d,unregisterSlot:v,registerFill:p,unregisterFill:g,getSlot:l,getFills:u,subscribe:y}}function X({children:o}){const t=(0,e.useMemo)(de,[]);return(0,e.createElement)(m.Provider,{value:t},o)}const G=X;function J(o){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(R,{...o}),(0,e.createElement)(Y,{...o}))}function ie(o,t){const{bubblesVirtually:s,...d}=o;return s?(0,e.createElement)(se,{...d,ref:t}):(0,e.createElement)(j,{...d})}const W=(0,e.forwardRef)(ie);function ue({children:o}){return(0,e.useContext)(V.Z).isDefault?(0,e.createElement)(G,null,(0,e.createElement)(H,null,o)):(0,e.createElement)(e.Fragment,null,o)}function Q(o){const t=typeof o=="symbol"?o.description:o,s=p=>(0,e.createElement)(J,{name:o,...p});s.displayName=`${t}Fill`;const d=p=>(0,e.createElement)(W,{name:o,...p});return d.displayName=`${t}Slot`,d.__unstableName=o,{Fill:s,Slot:d}}const a=o=>{const t=Symbol(o),s=Q(t);return{privateKey:t,...s}}},"../../../node_modules/.pnpm/@wordpress+components@25.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(T,b,n)=>{n.d(b,{V:()=>M,Z:()=>O});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=n("../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),S=n("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=n("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");const h=new Set,f=new WeakMap,R=_=>{if(f.has(_))return f.get(_);let F=m.Z().replace(/[0-9]/g,"");for(;h.has(F);)F=m.Z().replace(/[0-9]/g,"");h.add(F);const j=(0,S.Z)({container:_,key:F});return f.set(_,j),j};function M(_){const{children:F,document:j}=_;if(!j)return null;const I=R(j.head);return(0,e.createElement)(P.C,{value:I},F)}const O=M},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(T,b,n)=>{n.d(b,{Z:()=>S});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function P({icon:m,size:h=24,...f},R){return(0,e.cloneElement)(m,{width:h,height:h,...f,ref:R})}const S=(0,e.forwardRef)(P)},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(T,b,n)=>{n.d(b,{Z:()=>m});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=n("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const m=(0,e.createElement)(P.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(P.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();