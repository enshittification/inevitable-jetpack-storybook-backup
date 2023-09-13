"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7923],{"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js":(q,L,o)=>{o.d(L,{ZP:()=>N,zx:()=>D});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=o.n(j),P=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),C=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js");const s=["onMouseDown","onClick"];function u({isDefault:_,isPrimary:g,isSecondary:A,isTertiary:b,isLink:v,isSmall:f,size:F,variant:Y,...U}){let Z=F,S=Y;if(f){var T;(T=Z)!==null&&T!==void 0||(Z="small")}if(g){var X;(X=S)!==null&&X!==void 0||(S="primary")}if(b){var K;(K=S)!==null&&K!==void 0||(S="tertiary")}if(A){var B;(B=S)!==null&&B!==void 0||(S="secondary")}if(_){var h;(0,P.Z)("Button isDefault prop",{since:"5.4",alternative:'variant="secondary"',version:"6.2"}),(h=S)!==null&&h!==void 0||(S="secondary")}if(v){var $;($=S)!==null&&$!==void 0||(S="link")}return{...U,size:Z,variant:S}}function M(_,g){var ue,ce;const{__next40pxDefaultSize:A,isPressed:b,isBusy:v,isDestructive:f,className:F,disabled:Y,icon:U,iconPosition:Z="left",iconSize:S,showTooltip:T,tooltipPosition:X,shortcut:K,label:B,children:h,size:$="default",text:J,variant:Q,__experimentalIsFocusable:n,describedBy:t,...r}=u(_),{href:c,target:l,...d}="href"in r?r:{href:void 0,target:void 0,...r},y=(0,p.Z)(D,"components-button__description"),m=typeof h=="string"&&!!h||Array.isArray(h)&&(h==null?void 0:h[0])&&h[0]!==null&&((ce=(ue=h==null?void 0:h[0])==null?void 0:ue.props)==null?void 0:ce.className)!=="components-tooltip",w=O()("components-button",F,{"is-next-40px-default-size":A,"is-secondary":Q==="secondary","is-primary":Q==="primary","is-small":$==="small","is-compact":$==="compact","is-tertiary":Q==="tertiary","is-pressed":b,"is-busy":v,"is-link":Q==="link","is-destructive":f,"has-text":!!U&&m,"has-icon":!!U}),E=Y&&!n,x=c!==void 0&&!E?"a":"button",G=x==="button"?{type:"button",disabled:E,"aria-pressed":b}:{},ee=x==="a"?{href:c,target:l}:{};if(Y&&n){G["aria-disabled"]=!0,ee["aria-disabled"]=!0;for(const _e of s)d[_e]=de=>{de&&(de.stopPropagation(),de.preventDefault())}}const oe=!E&&(T&&B||K||!!B&&!(h!=null&&h.length)&&T!==!1),W=t?y:void 0,ie=d["aria-describedby"]||W,z={className:w,"aria-label":d["aria-label"]||B,"aria-describedby":ie,ref:g},te=(0,e.createElement)(e.Fragment,null,U&&Z==="left"&&(0,e.createElement)(a.Z,{icon:U,size:S}),J&&(0,e.createElement)(e.Fragment,null,J),U&&Z==="right"&&(0,e.createElement)(a.Z,{icon:U,size:S}),h),ne=x==="a"?(0,e.createElement)("a",{...ee,...d,...z},te):(0,e.createElement)("button",{...G,...d,...z},te);return oe?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(C.Z,{text:h!=null&&h.length&&t?t:B,shortcut:K,position:X},ne),t&&(0,e.createElement)(i.Z,null,(0,e.createElement)("span",{id:W},t))):(0,e.createElement)(e.Fragment,null,ne,t&&(0,e.createElement)(i.Z,null,(0,e.createElement)("span",{id:W},t)))}const D=(0,e.forwardRef)(M),N=D},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(q,L,o)=>{o.d(L,{Z:()=>C});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=o("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");function O({icon:a,className:i,size:s=20,style:u={},...M}){const D=["dashicon","dashicons","dashicons-"+a,i].filter(Boolean).join(" "),_={...s!=20?{fontSize:`${s}px`,width:`${s}px`,height:`${s}px`}:{},...u};return(0,e.createElement)("span",{className:D,style:_,...M})}const P=O;function p({icon:a=null,size:i=typeof a=="string"?20:24,...s}){if(typeof a=="string")return(0,e.createElement)(P,{icon:a,size:i,...s});if((0,e.isValidElement)(a)&&P===a.type)return(0,e.cloneElement)(a,{...s});if(typeof a=="function")return(0,e.createElement)(a,{size:i,...s});if(a&&(a.type==="svg"||a.type===j.Wj)){const u={...a.props,width:i,height:i,...s};return(0,e.createElement)(j.Wj,{...u})}return(0,e.isValidElement)(a)?(0,e.cloneElement)(a,{size:i,...s}):a}const C=p},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js":(q,L,o)=>{o.d(L,{_X:()=>K,ZP:()=>c});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=o.n(j),P=o("../../../node_modules/.pnpm/@floating-ui+core@1.4.1/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=o("../../../node_modules/.pnpm/@floating-ui+react-dom@2.0.2_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),C=o("../../../node_modules/.pnpm/@floating-ui+dom@1.5.1/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),a=o("../../../node_modules/.pnpm/framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),i=o("../../../node_modules/.pnpm/framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),s=o("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),M=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js"),D=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),N=o("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/close.js"),_=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js"),g=o("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),A=o("../../../node_modules/.pnpm/@wordpress+dom@3.41.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js"),b=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");let v=0;function f(l){const d=document.scrollingElement||document.body;l&&(v=d.scrollTop);const y=l?"add":"remove";d.classList[y]("lockscroll"),document.documentElement.classList[y]("lockscroll"),l||(d.scrollTop=v)}let F=0;function Y(){return(0,e.useEffect)(()=>(F===0&&f(!0),++F,()=>{F===1&&f(!1),--F}),[]),null}const U=Y;var Z=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),S=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js"),T=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");function X(){return[{name:"overlay",fn({rects:l}){return l.reference}},(0,P.dp)({apply({rects:l,elements:d}){var y;const{firstElementChild:m}=(y=d.floating)!==null&&y!==void 0?y:{};m instanceof HTMLElement&&Object.assign(m.style,{width:`${l.reference.width}px`,height:`${l.reference.height}px`})}})]}const K="Popover",B=()=>(0,e.createElement)(g.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,e.createElement)(g.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,e.createElement)(g.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),h=(0,e.forwardRef)(({style:l,placement:d,shouldAnimate:y=!1,...m},w)=>{const E=(0,a.J)(),{style:x,...G}=(0,e.useMemo)(()=>(0,T.d9)(d),[d]),ee=y&&!E?{style:{...x,...l},...G}:{animate:!1,style:l};return(0,e.createElement)(i.E.div,{...ee,...m,ref:w})}),$=(0,e.createContext)(void 0),J="components-popover__fallback-container",Q=()=>{let l=document.body.querySelector("."+J);return l||(l=document.createElement("div"),l.className=J,document.body.append(l)),l},n=(l,d)=>{const{animate:y=!0,headerTitle:m,onClose:w,children:E,className:x,noArrow:G=!0,position:ee,placement:oe="bottom-start",offset:W=0,focusOnMount:ie="firstElement",anchor:z,expandOnMobile:te,onFocusOutside:ne,__unstableSlotName:ue=K,flip:ce=!0,resize:_e=!0,shift:de=!1,inline:be=!1,variant:Fe,__unstableForcePosition:ge,anchorRef:I,anchorRect:me,getAnchorRect:ae,isAlternate:ye,...je}=l;let we=ce,Pe=_e;ge!==void 0&&((0,_.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),we=!ge,Pe=!ge),I!==void 0&&(0,_.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),me!==void 0&&(0,_.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),ae!==void 0&&(0,_.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const ve=ye?"toolbar":Fe;ye!==void 0&&(0,_.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const Ce=(0,e.useRef)(null),[Ee,Te]=(0,e.useState)(null),[pe,Le]=(0,e.useState)(),Ae=(0,e.useCallback)(R=>{Te(R)},[]),Ue=(0,u.Z)("medium","<"),re=te&&Ue,Be=!re&&!G,xe=ee?(0,T.KF)(ee):oe,Ie=[...oe==="overlay"?X():[],(0,P.cv)(W),we&&(0,P.RR)(),Pe&&(0,P.dp)({apply(R){var H;const{firstElementChild:V}=(H=fe.floating.current)!==null&&H!==void 0?H:{};V instanceof HTMLElement&&Object.assign(V.style,{maxHeight:`${R.availableHeight}px`,overflow:"auto"})}}),de&&(0,P.uY)({crossAxis:!0,limiter:(0,P.dr)(),padding:1}),(0,p.x7)({element:Ce})],De=(0,e.useContext)($)||ue,Ne=(0,Z.Z)(De);let he;(w||ne)&&(he=(R,H)=>{R==="focus-outside"&&ne?ne(H):w&&w()});const[We,Ze]=(0,M.Z)({focusOnMount:ie,__unstableOnClose:he,onClose:he}),{x:Se,y:Oe,refs:fe,strategy:Ke,update:se,placement:Me,middlewareData:{arrow:k}}=(0,p.YF)({placement:xe==="overlay"?void 0:xe,middleware:Ie,whileElementsMounted:(R,H,V)=>(0,C.Me)(R,H,V,{layoutShift:!1,animationFrame:!0})}),Re=(0,e.useCallback)(R=>{Ce.current=R,se()},[se]),$e=I==null?void 0:I.top,Ye=I==null?void 0:I.bottom,Xe=I==null?void 0:I.startContainer,ze=I==null?void 0:I.current;(0,e.useLayoutEffect)(()=>{const R=(0,T.Eh)({anchor:z,anchorRef:I,anchorRect:me,getAnchorRect:ae,fallbackReferenceElement:Ee,fallbackDocument:document}),H=(0,T.CK)({anchor:z,anchorRef:I,anchorRect:me,getAnchorRect:ae,fallbackReferenceElement:Ee});fe.setReference(H),Le(R)},[z,I,$e,Ye,Xe,ze,me,ae,Ee,fe]),(0,e.useLayoutEffect)(()=>{if(!pe||!pe.defaultView)return;const{defaultView:R}=pe,{frameElement:H}=R,V=H?(0,A.Z)(H):null;return R.addEventListener("resize",se),V==null||V.addEventListener("scroll",se),()=>{R.removeEventListener("resize",se),V==null||V.removeEventListener("scroll",se)}},[pe,se]);const He=(0,D.Z)([fe.setFloating,We,d]);let le=(0,e.createElement)(h,{shouldAnimate:y&&!re,placement:Me,className:O()("components-popover",x,{"is-expanded":re,"is-positioned":Se!==null&&Oe!==null,[`is-${ve==="toolbar"?"alternate":ve}`]:ve}),...je,ref:He,...Ze,tabIndex:-1,style:re?void 0:{position:Ke,top:0,left:0,x:(0,T.sw)(Se),y:(0,T.sw)(Oe)}},re&&(0,e.createElement)(U,null),re&&(0,e.createElement)("div",{className:"components-popover__header"},(0,e.createElement)("span",{className:"components-popover__header-title"},m),(0,e.createElement)(b.ZP,{className:"components-popover__close",icon:N.Z,onClick:w})),(0,e.createElement)("div",{className:"components-popover__content"},E),Be&&(0,e.createElement)("div",{ref:Re,className:["components-popover__arrow",`is-${Me.split("-")[0]}`].join(" "),style:{left:typeof(k==null?void 0:k.x)!="undefined"&&Number.isFinite(k.x)?`${k.x}px`:"",top:typeof(k==null?void 0:k.y)!="undefined"&&Number.isFinite(k.y)?`${k.y}px`:""}},(0,e.createElement)(B,null)));const Ge=Ne.ref&&!be,Ve=I||me||z;return Ge?le=(0,e.createElement)(S.de,{name:De},le):be||(le=(0,s.createPortal)(le,Q())),Ve?le:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{ref:Ae}),le)},t=(0,e.forwardRef)(n);function r({name:l=K},d){return(0,e.createElement)(S.g7,{bubblesVirtually:!0,name:l,className:"popover-slot",ref:d})}t.Slot=(0,e.forwardRef)(r),t.__unstableSlotNameProvider=$.Provider;const c=t},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js":(q,L,o)=>{o.d(L,{CK:()=>C,Eh:()=>p,KF:()=>j,d9:()=>P,sw:()=>a});const e={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},j=i=>{var s;return(s=e[i])!==null&&s!==void 0?s:"bottom"},O={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},P=i=>{const s=i.startsWith("top")||i.startsWith("bottom")?"translateY":"translateX",u=i.startsWith("top")||i.startsWith("left")?1:-1;return{style:O[i],initial:{opacity:0,scale:0,[s]:`${2*u}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}},p=({anchor:i,anchorRef:s,anchorRect:u,getAnchorRect:M,fallbackReferenceElement:D,fallbackDocument:N})=>{var A,b;var _;let g;return i!=null&&i.contextElement?g=(A=i.contextElement)==null?void 0:A.ownerDocument:i?g=i.ownerDocument:s!=null&&s.top?g=s==null?void 0:s.top.ownerDocument:s!=null&&s.startContainer?g=s.startContainer.ownerDocument:s!=null&&s.current?g=s.current.ownerDocument:s?g=s.ownerDocument:u&&(u!=null&&u.ownerDocument)?g=u.ownerDocument:M&&(g=(b=M(D))==null?void 0:b.ownerDocument),(_=g)!==null&&_!==void 0?_:N},C=({anchor:i,anchorRef:s,anchorRect:u,getAnchorRect:M,fallbackReferenceElement:D})=>{var N;let _=null;return i?_=i:s!=null&&s.top?_={getBoundingClientRect(){const g=s.top.getBoundingClientRect(),A=s.bottom.getBoundingClientRect();return new window.DOMRect(g.x,g.y,g.width,A.bottom-g.top)}}:s!=null&&s.current?_=s.current:s?_=s:u?_={getBoundingClientRect(){return u}}:M?_={getBoundingClientRect(){var g,A,b,v;const f=M(D);return new window.DOMRect((g=f.x)!==null&&g!==void 0?g:f.left,(A=f.y)!==null&&A!==void 0?A:f.top,(b=f.width)!==null&&b!==void 0?b:f.right-f.left,(v=f.height)!==null&&v!==void 0?v:f.bottom-f.top)}}:D&&(_=D.parentElement),(N=_)!==null&&N!==void 0?N:null},a=i=>i===null||Number.isNaN(i)?void 0:Math.round(i)},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js":(q,L,o)=>{o.d(L,{Z:()=>O});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function j(P){const{shortcut:p,className:C}=P;if(!p)return null;let a,i;return typeof p=="string"&&(a=p),p!==null&&typeof p=="object"&&(a=p.display,i=p.ariaLabel),(0,e.createElement)("span",{className:C,"aria-label":i},a)}const O=j},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":(q,L,o)=>{o.d(L,{Z:()=>p});var e=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),j=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+warning@2.41.0/node_modules/@wordpress/warning/build-module/index.js");const p=(0,j.createContext)({slots:(0,e.Yr)(),fills:(0,e.Yr)(),registerSlot:()=>{typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,O.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0})},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":(q,L,o)=>{o.d(L,{Z:()=>P});var e=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/index.js"),j=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function P(p){const C=(0,j.useContext)(O.Z),i=(0,e.RK)(C.slots,{sync:!0}).get(p),s=(0,j.useMemo)(()=>({updateSlot:u=>C.updateSlot(p,u),unregisterSlot:u=>C.unregisterSlot(p,u),registerFill:u=>C.registerFill(p,u),unregisterFill:u=>C.unregisterFill(p,u)}),[p,C]);return{...i,...s}}},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js":(q,L,o)=>{o.d(L,{de:()=>B,zt:()=>$,g7:()=>h,Es:()=>Q,up:()=>J});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const O=(0,e.createContext)({registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>{},subscribe:()=>{}}),p=n=>{const{getSlot:t,subscribe:r}=(0,e.useContext)(O);return(0,e.useSyncExternalStore)(r,()=>t(n),()=>t(n))};function C({name:n,children:t}){const{registerFill:r,unregisterFill:c}=(0,e.useContext)(O),l=p(n),d=(0,e.useRef)({name:n,children:t});return(0,e.useLayoutEffect)(()=>{const y=d.current;return r(n,y),()=>c(n,y)},[]),(0,e.useLayoutEffect)(()=>{d.current.children=t,l&&l.forceUpdate()},[t]),(0,e.useLayoutEffect)(()=>{n!==d.current.name&&(c(d.current.name,d.current),d.current.name=n,r(n,d.current))},[n]),null}var a=o("../../../node_modules/.pnpm/@wordpress+element@5.18.0/node_modules/@wordpress/element/build-module/utils.js");function i(n){return typeof n=="function"}class s extends e.Component{constructor(){super(...arguments),this.isUnmounted=!1}componentDidMount(){const{registerSlot:t}=this.props;this.isUnmounted=!1,t(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:t}=this.props;this.isUnmounted=!0,t(this.props.name,this)}componentDidUpdate(t){const{name:r,unregisterSlot:c,registerSlot:l}=this.props;t.name!==r&&(c(t.name),l(r,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var t;const{children:r,name:c,fillProps:l={},getFills:d}=this.props,y=((t=d(c,this))!==null&&t!==void 0?t:[]).map(m=>{const w=i(m.children)?m.children(l):m.children;return e.Children.map(w,(E,x)=>{if(!E||typeof E=="string")return E;const G=E.key||x;return(0,e.cloneElement)(E,{key:G})})}).filter(m=>!(0,a.V)(m));return(0,e.createElement)(e.Fragment,null,i(r)?r(y):y)}}const M=n=>(0,e.createElement)(O.Consumer,null,({registerSlot:t,unregisterSlot:r,getFills:c})=>(0,e.createElement)(s,{...n,registerSlot:t,unregisterSlot:r,getFills:c}));var D=o("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),N=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),_=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");function g(){const[,n]=(0,e.useState)({}),t=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),()=>{t.current&&n({})}}function A({name:n,children:t}){const{registerFill:r,unregisterFill:c,...l}=(0,N.Z)(n),d=g(),y=(0,e.useRef)({rerender:d});if((0,e.useEffect)(()=>(r(y),()=>{c(y)}),[r,c]),!l.ref||!l.ref.current)return null;typeof t=="function"&&(t=t(l.fillProps));const m=(0,e.createElement)(_.Z,{document:l.ref.current.ownerDocument},t);return(0,D.createPortal)(m,l.ref.current)}var b=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),v=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function F(n,t){const{name:r,fillProps:c={},as:l,children:d,...y}=n,{registerSlot:m,unregisterSlot:w,...E}=(0,e.useContext)(f.Z),x=(0,e.useRef)();return(0,e.useLayoutEffect)(()=>(m(r,x,c),()=>{w(r,x)}),[m,w,r]),(0,e.useLayoutEffect)(()=>{E.updateSlot(r,c)}),(0,e.createElement)(v.Z,{as:l,ref:(0,b.Z)([t,x]),...y})}const Y=(0,e.forwardRef)(F);var U=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/vanilla.js"),Z=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),S=o("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function T(){const n=(0,Z.Yr)(),t=(0,Z.Yr)();function r(m,w,E){const x=n.get(m)||{};n.set(m,(0,U.iH)({...x,ref:w||x.ref,fillProps:E||x.fillProps||{}}))}function c(m,w){var E;((E=n.get(m))==null?void 0:E.ref)===w&&n.delete(m)}function l(m,w){const E=n.get(m);if(!E||(0,S.ZP)(E.fillProps,w))return;E.fillProps=w;const x=t.get(m);x&&x.map(G=>G.current.rerender())}function d(m,w){t.set(m,(0,U.iH)([...t.get(m)||[],w]))}function y(m,w){const E=t.get(m);E&&t.set(m,(0,U.iH)(E.filter(x=>x!==w)))}return{slots:n,fills:t,registerSlot:r,updateSlot:l,unregisterSlot:c,registerFill:d,unregisterFill:y}}function X({children:n}){const[t]=(0,e.useState)(T);return(0,e.createElement)(f.Z.Provider,{value:t},n)}class K extends e.Component{constructor(){super(...arguments),this.registerSlot=this.registerSlot.bind(this),this.registerFill=this.registerFill.bind(this),this.unregisterSlot=this.unregisterSlot.bind(this),this.unregisterFill=this.unregisterFill.bind(this),this.getSlot=this.getSlot.bind(this),this.getFills=this.getFills.bind(this),this.subscribe=this.subscribe.bind(this),this.slots={},this.fills={},this.listeners=[],this.contextValue={registerSlot:this.registerSlot,unregisterSlot:this.unregisterSlot,registerFill:this.registerFill,unregisterFill:this.unregisterFill,getSlot:this.getSlot,getFills:this.getFills,subscribe:this.subscribe}}registerSlot(t,r){const c=this.slots[t];this.slots[t]=r,this.triggerListeners(),this.forceUpdateSlot(t),c&&c.forceUpdate()}registerFill(t,r){this.fills[t]=[...this.fills[t]||[],r],this.forceUpdateSlot(t)}unregisterSlot(t,r){this.slots[t]===r&&(delete this.slots[t],this.triggerListeners())}unregisterFill(t,r){var l;var c;this.fills[t]=(c=(l=this.fills[t])==null?void 0:l.filter(d=>d!==r))!==null&&c!==void 0?c:[],this.forceUpdateSlot(t)}getSlot(t){return this.slots[t]}getFills(t,r){return this.slots[t]!==r?[]:this.fills[t]}forceUpdateSlot(t){const r=this.getSlot(t);r&&r.forceUpdate()}triggerListeners(){this.listeners.forEach(t=>t())}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(r=>r!==t)}}render(){return(0,e.createElement)(O.Provider,{value:this.contextValue},this.props.children)}}function B(n){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(C,{...n}),(0,e.createElement)(A,{...n}))}const h=(0,e.forwardRef)(({bubblesVirtually:n,...t},r)=>n?(0,e.createElement)(Y,{...t,ref:r}):(0,e.createElement)(M,{...t}));function $({children:n,...t}){return(0,e.useContext)(f.Z).isDefault?(0,e.createElement)(K,{...t},(0,e.createElement)(X,null,n)):n}function J(n){const t=typeof n=="symbol"?n.description:n,r=l=>(0,e.createElement)(B,{name:n,...l});r.displayName=`${t}Fill`;const c=l=>(0,e.createElement)(h,{name:n,...l});return c.displayName=`${t}Slot`,c.__unstableName=n,{Fill:r,Slot:c}}const Q=n=>{const t=Symbol(n),r=J(t);return{privateKey:t,...r}}},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(q,L,o)=>{o.d(L,{Z:()=>s});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=o("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),O=o("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),P=o("../../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js");const p=new Set,C=new WeakMap,a=u=>{if(C.has(u))return C.get(u);let M=P.Z().replace(/[0-9]/g,"");for(;p.has(M);)M=P.Z().replace(/[0-9]/g,"");p.add(M);const D=(0,O.Z)({container:u,key:M});return C.set(u,D),D};function i(u){const{children:M,document:D}=u;if(!D)return null;const N=a(D.head);return(0,e.createElement)(j.C,{value:N},M)}const s=i},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js":(q,L,o)=>{o.d(L,{Z:()=>A});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=o.n(j),P=o("../../../node_modules/.pnpm/@wordpress+element@5.18.0/node_modules/@wordpress/element/build-module/react.js"),p=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),C=o("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js");const s=700,u=(0,e.createElement)("div",{className:"event-catcher"}),M=({eventHandlers:b,child:v,childrenWithPopover:f,mergedRefs:F})=>(0,e.cloneElement)((0,e.createElement)("span",{className:"disabled-element-wrapper"},(0,e.cloneElement)(u,b),(0,e.cloneElement)(v,{children:f,ref:F})),{...b}),D=({child:b,eventHandlers:v,childrenWithPopover:f,mergedRefs:F})=>(0,e.cloneElement)(b,{...v,children:f,ref:F}),N=({anchor:b,grandchildren:v,isOver:f,offset:F,position:Y,shortcut:U,text:Z,className:S,...T})=>(0,P.Qz)(v,f&&(0,e.createElement)(a.ZP,{focusOnMount:!1,position:Y,className:O()("components-tooltip",S),"aria-hidden":"true",animate:!1,offset:F,anchor:b,shift:!0,...T},Z,(0,e.createElement)(i.Z,{className:"components-tooltip__shortcut",shortcut:U}))),_=(b,v,f)=>{if(e.Children.count(b)!==1)return;const F=e.Children.only(b);F.props.disabled||typeof F.props[v]=="function"&&F.props[v](f)};function g(b){var oe;const{children:v,position:f="bottom middle",text:F,shortcut:Y,delay:U=s,...Z}=b,[S,T]=(0,e.useState)(!1),[X,K]=(0,e.useState)(!1),B=(0,p.Z)(K,U),[h,$]=(0,e.useState)(null),J=(oe=e.Children.toArray(v)[0])==null?void 0:oe.ref,Q=(0,C.Z)([$,J]),n=W=>{W.target.tagName!=="OPTION"&&(_(v,"onMouseDown",W),document.addEventListener("mouseup",c),T(!0))},t=W=>{W.target.tagName!=="OPTION"&&(_(v,"onMouseUp",W),document.removeEventListener("mouseup",c),T(!1))},r=W=>{if(W==="mouseUp")return t;if(W==="mouseDown")return n},c=r("mouseUp"),l=(W,ie)=>z=>{if(_(v,W,z),z.currentTarget.disabled||z.type==="focus"&&S)return;B.cancel();const te=["focus","mouseenter"].includes(z.type);te!==X&&(ie?B(te):K(te))},d=()=>{B.cancel(),document.removeEventListener("mouseup",c)};if((0,e.useEffect)(()=>d,[]),e.Children.count(v)!==1)return v;const y={onMouseEnter:l("onMouseEnter",!0),onMouseLeave:l("onMouseLeave"),onClick:l("onClick"),onFocus:l("onFocus"),onBlur:l("onBlur"),onMouseDown:r("mouseDown")},m=e.Children.only(v),{children:w,disabled:E}=m.props,x=E?M:D,ee=N({grandchildren:w,...{anchor:h,isOver:X,offset:4,position:f,shortcut:Y,text:F},...Z});return x({child:m,eventHandlers:y,childrenWithPopover:ee,mergedRefs:Q})}const A=g}}]);})();