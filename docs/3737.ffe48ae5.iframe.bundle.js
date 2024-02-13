"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3737],{"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(c,d,e)=>{e.d(d,{Z:()=>h});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(n),r=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.51.0/node_modules/@wordpress/deprecated/build-module/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),P=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const w=(A,M)=>{const{renderContent:z,renderToggle:I,className:L,contentClassName:B,expandOnMobile:Z,headerTitle:N,focusOnMount:D,popoverProps:a,onClose:j,onToggle:G,style:i,open:E,defaultOpen:b,position:v,variant:W}=(0,u.y)(A,"Dropdown");v!==void 0&&(0,l.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[R,J]=(0,o.useState)(null),C=(0,o.useRef)(),[K,U]=(0,P.O)({defaultValue:b,value:E,onChange:G});function y(){var V;if(!C.current)return;const{ownerDocument:T}=C.current,F=(V=T==null?void 0:T.activeElement)==null?void 0:V.closest('[role="dialog"]');!C.current.contains(T.activeElement)&&(!F||F.contains(C.current))&&x()}function x(){j==null||j(),U(!1)}const H={isOpen:!!K,onToggle:()=>U(!K),onClose:x},Q=!!(a!=null&&a.anchor)||!!(a!=null&&a.anchorRef)||!!(a!=null&&a.getAnchorRect)||!!(a!=null&&a.anchorRect);return(0,o.createElement)("div",{className:L,ref:(0,r.Z)([C,M,J]),tabIndex:-1,style:i},I(H),K&&(0,o.createElement)(_.ZP,{position:v,onClose:x,onFocusOutside:y,expandOnMobile:Z,headerTitle:N,focusOnMount:D,offset:13,anchor:Q?void 0:R,variant:W,...a,className:s()("components-dropdown__content",a==null?void 0:a.className,B)},z(H)))},h=(0,p.Iq)(w,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/modal/index.js":(c,d,e)=>{e.d(d,{Z:()=>G});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(n),r=e("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),h=e("../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const A=new Set(["alert","status","log","marquee","timer"]),M=[];function z(i){const E=Array.from(document.body.children),b=[];M.push(b);for(const v of E)v!==i&&I(v)&&(v.setAttribute("aria-hidden","true"),b.push(v))}function I(i){const E=i.getAttribute("role");return!(i.tagName==="SCRIPT"||i.hasAttribute("aria-hidden")||i.hasAttribute("aria-live")||E&&A.has(E))}function L(){const i=M.pop();if(i)for(const E of i)E.removeAttribute("aria-hidden")}var B=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),Z=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");const N=(0,o.createContext)([]),D=new Map;function a(i,E){const{bodyOpenClassName:b="modal-open",role:v="dialog",title:W=null,focusOnMount:R=!0,shouldCloseOnEsc:J=!0,shouldCloseOnClickOutside:C=!0,isDismissible:K=!0,aria:U={labelledby:void 0,describedby:void 0},onRequestClose:y,icon:x,closeButtonLabel:H,children:Q,style:T,overlayClassName:F,className:V,contentLabel:te,onKeyDown:_e,isFullScreen:fe=!1,size:q,headerActions:Ee=null,__experimentalHideHeader:de=!1}=i,re=(0,o.useRef)(),ve=(0,l.Z)(j),le=W?`components-modal-header-${ve}`:U.labelledby,ae=(0,u.Z)(R==="firstContentElement"?"firstElement":R),we=(0,p.Z)(),he=(0,P.Z)(),S=(0,o.useRef)(null),$=(0,o.useRef)(null),[X,ce]=(0,o.useState)(!1),[ee,me]=(0,o.useState)(!1);let oe;fe||q==="fill"?oe="is-full-screen":q&&(oe=`has-size-${q}`);const se=(0,o.useCallback)(()=>{if(!S.current)return;const t=(0,h.Z)(S.current);S.current===t?me(!0):me(!1)},[S]);(0,o.useEffect)(()=>(z(re.current),()=>L()),[]);const ue=(0,o.useRef)();(0,o.useEffect)(()=>{ue.current=y},[y]);const k=(0,o.useContext)(N),ie=(0,o.useRef)([]);(0,o.useEffect)(()=>{var O;k.push(ue);const[t,m]=k;m&&((O=t==null?void 0:t.current)==null||O.call(t));const g=ie.current;return()=>{var Y,pe;(pe=(Y=g[0])==null?void 0:Y.current)==null||pe.call(Y),k.shift()}},[k]),(0,o.useEffect)(()=>{var t;const m=b,g=1+((t=D.get(m))!==null&&t!==void 0?t:0);return D.set(m,g),document.body.classList.add(b),()=>{const O=D.get(m)-1;O===0?(document.body.classList.remove(m),D.delete(m)):D.set(m,O)}},[b]),(0,o.useLayoutEffect)(()=>{if(!window.ResizeObserver||!$.current)return;const t=new ResizeObserver(se);return t.observe($.current),se(),()=>{t.disconnect()}},[se,$]);function be(t){t.nativeEvent.isComposing||t.keyCode===229||J&&(t.code==="Escape"||t.key==="Escape")&&!t.defaultPrevented&&(t.preventDefault(),y&&y(t))}const ye=(0,o.useCallback)(t=>{var O;var m;const g=(m=(O=t==null?void 0:t.currentTarget)==null?void 0:O.scrollTop)!==null&&m!==void 0?m:-1;!X&&g>0?ce(!0):X&&g<=0&&ce(!1)},[X]);let ne=null;const ge={onPointerDown:t=>{t.target===t.currentTarget&&(ne=t.target,t.preventDefault())},onPointerUp:({target:t,button:m})=>{const g=t===ne;ne=null,m===0&&g&&y()}},Oe=(0,o.createElement)("div",{ref:(0,_.Z)([re,E]),className:s()("components-modal__screen-overlay",F),onKeyDown:be,...C?ge:{}},(0,o.createElement)(Z.Z,{document},(0,o.createElement)("div",{className:s()("components-modal__frame",oe,V),style:T,ref:(0,_.Z)([we,he,R!=="firstContentElement"?ae:null]),role:v,"aria-label":te,"aria-labelledby":te?void 0:le,"aria-describedby":U.describedby,tabIndex:-1,onKeyDown:_e},(0,o.createElement)("div",{className:s()("components-modal__content",{"hide-header":de,"is-scrollable":ee,"has-scrolled-content":X}),role:"document",onScroll:ye,ref:S,"aria-label":ee?(0,w.__)("Scrollable section"):void 0,tabIndex:ee?0:void 0},!de&&(0,o.createElement)("div",{className:"components-modal__header"},(0,o.createElement)("div",{className:"components-modal__header-heading-container"},x&&(0,o.createElement)("span",{className:"components-modal__icon-container","aria-hidden":!0},x),W&&(0,o.createElement)("h1",{id:le,className:"components-modal__header-heading"},W)),Ee,K&&(0,o.createElement)(B.ZP,{onClick:y,icon:f.Z,label:H||(0,w.__)("Close")})),(0,o.createElement)("div",{ref:(0,_.Z)([$,R==="firstContentElement"?ae:null])},Q)))));return(0,r.createPortal)((0,o.createElement)(N.Provider,{value:ie.current},Oe),document.body)}const j=(0,o.forwardRef)(a),G=j},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(c,d,e)=>{e.d(d,{ZP:()=>I});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(n),r=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function P(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const _=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,w=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",u.Z.spinnerSize,"px;height:",u.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",p.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),f={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},h=(0,r.Z)("circle",{target:"ea4tfvq1"})(f,";stroke:",p.D.gray[300],";"),A=(0,r.Z)("path",{target:"ea4tfvq0"})(f,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",_,";");function M({className:L,...B},Z){return(0,o.createElement)(w,{className:s()("components-spinner",L),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...B,ref:Z},(0,o.createElement)(h,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(A,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const I=(0,o.forwardRef)(M)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(c,d,e)=>{e.d(d,{O:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({defaultValue:s,onChange:r,value:l}){const u=typeof l!="undefined",p=u?l:s,[P,_]=(0,o.useState)(p),w=u?l:P;let f;return u&&typeof r=="function"?f=r:!u&&typeof r=="function"?f=h=>{r(h),_(h)}:f=_,[w,f]}},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(c,d,e)=>{e.d(d,{Z:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const s=r=>{const{dispatch:l}=(0,o.Z)();return r===void 0?l:l(r)}},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(c,d,e)=>{e.d(d,{W:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function n(s){return o.Z.dispatch(s)}},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(c,d,e)=>{e.d(d,{Y:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function n(s){return o.Z.select(s)}},"../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":(c,d,e)=>{e.d(d,{Z:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");function n(s){return(0,o.c)(s.ownerDocument.defaultView,"element.ownerDocument.defaultView"),s.ownerDocument.defaultView.getComputedStyle(s)}},"../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":(c,d,e)=>{e.d(d,{Z:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");function n(s,r="vertical"){if(s){if((r==="vertical"||r==="all")&&s.scrollHeight>s.clientHeight){const{overflowY:l}=(0,o.Z)(s);if(/(auto|scroll)/.test(l))return s}if((r==="horizontal"||r==="all")&&s.scrollWidth>s.clientWidth){const{overflowX:l}=(0,o.Z)(s);if(/(auto|scroll)/.test(l))return s}return s.ownerDocument===s.parentNode?s:n(s.parentNode,r)}}},"../../../node_modules/.pnpm/@wordpress+dom@3.51.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":(c,d,e)=>{e.d(d,{c:()=>o});function o(n,s){}},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(c,d,e)=>{e.d(d,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({icon:r,size:l=24,...u},p){return(0,o.cloneElement)(r,{width:l,height:l,...u,ref:p})}const s=(0,o.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/edit.js":(c,d,e)=>{e.d(d,{Z:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/pencil.js");const n=o.Z},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(c,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/globe.js":(c,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/media.js":(c,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,o.createElement)(n.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/pencil.js":(c,d,e)=>{e.d(d,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"}))}}]);})();