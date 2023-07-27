"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4584],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js":(R,y,o)=>{o.d(y,{Z:()=>b});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=o.n(p);function v(w,A){const{className:x,...m}=w,T=f()("components-button-group",x);return(0,r.createElement)("div",{ref:A,role:"group",className:T,...m})}const b=(0,r.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown-menu/index.js":(R,y,o)=>{o.d(y,{Z:()=>a});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=o.n(p),v=o("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/menu.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),b=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),w=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),A=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),x=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js");function m(l={},c={}){const u={...l,...c};return c.className&&l.className&&(u.className=f()(c.className,l.className)),u}function T(l){return typeof l=="function"}function g(l){const{children:c,className:u,controls:e,icon:t=v.Z,label:d,popoverProps:i,toggleProps:s,menuProps:h,disableOpenOnArrowDown:E=!1,text:P,noIcons:C,variant:I}=(0,O.y)(l,"DropdownMenu");if(!(e!=null&&e.length)&&!T(c))return null;let D;e!=null&&e.length&&(D=e,Array.isArray(D[0])||(D=[e]));const S=m({className:"components-dropdown-menu__popover",variant:I},i);return(0,r.createElement)(A.Z,{className:u,popoverProps:S,renderToggle:({isOpen:M,onToggle:B})=>{var L;const K=N=>{E||!M&&N.code==="ArrowDown"&&(N.preventDefault(),B())},{as:_=w.ZP,...U}=s!=null?s:{},j=m({className:f()("components-dropdown-menu__toggle",{"is-opened":M})},U);return(0,r.createElement)(_,{...j,icon:t,onClick:N=>{B(),j.onClick&&j.onClick(N)},onKeyDown:N=>{K(N),j.onKeyDown&&j.onKeyDown(N)},"aria-haspopup":"true","aria-expanded":M,label:d,text:P,showTooltip:(L=s==null?void 0:s.showTooltip)!==null&&L!==void 0?L:!0},j.children)},renderContent:M=>{const B=m({"aria-label":d,className:f()("components-dropdown-menu__menu",{"no-icons":C})},h);return(0,r.createElement)(x.ZP,{...B,role:"menu"},T(c)?c(M):null,D==null?void 0:D.flatMap((L,K)=>L.map((_,U)=>(0,r.createElement)(w.ZP,{key:[K,U].join(),onClick:j=>{j.stopPropagation(),M.onClose(),_.onClick&&_.onClick()},className:f()("components-dropdown-menu__menu-item",{"has-separator":K>0&&U===0,"is-active":_.isActive,"is-icon-only":!_.title}),icon:_.icon,label:_.label,"aria-checked":_.role==="menuitemcheckbox"||_.role==="menuitemradio"?_.isActive:void 0,role:_.role==="menuitemcheckbox"||_.role==="menuitemradio"?_.role:"menuitem",disabled:_.isDisabled},_.title))))}})}const a=(0,b.Kc)(g,"DropdownMenu")},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(R,y,o)=>{o.d(y,{Z:()=>g});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=o.n(p),v=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.38.0/node_modules/@wordpress/deprecated/build-module/index.js"),b=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),w=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),A=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function x(n,a){const[l,c]=(0,r.useState)(n);return[l,u=>{c(u),a&&a(u)}]}const m=(n,a)=>{const{renderContent:l,renderToggle:c,className:u,contentClassName:e,expandOnMobile:t,headerTitle:d,focusOnMount:i,popoverProps:s,onClose:h,onToggle:E,style:P,position:C,variant:I}=(0,b.y)(n,"Dropdown");C!==void 0&&(0,O.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[D,S]=(0,r.useState)(null),M=(0,r.useRef)(),[B,L]=x(!1,E);(0,r.useEffect)(()=>()=>{E&&B&&E(!1)},[E,B]);function K(){L(!B)}function _(){var k;if(!M.current)return;const{ownerDocument:W}=M.current,F=(k=W==null?void 0:W.activeElement)==null?void 0:k.closest('[role="dialog"]');!M.current.contains(W.activeElement)&&(!F||F.contains(M.current))&&U()}function U(){h&&h(),L(!1)}const j={isOpen:B,onToggle:K,onClose:U},N=!!(s!=null&&s.anchor)||!!(s!=null&&s.anchorRef)||!!(s!=null&&s.getAnchorRect)||!!(s!=null&&s.anchorRect);return(0,r.createElement)("div",{className:u,ref:(0,v.Z)([M,a,S]),tabIndex:-1,style:P},c(j),B&&(0,r.createElement)(A.ZP,{position:C,onClose:U,onFocusOutside:_,expandOnMobile:t,headerTitle:d,focusOnMount:i,offset:13,anchor:N?void 0:D,variant:I,...s,className:f()("components-dropdown__content",s==null?void 0:s.className,e)},l(j)))},g=(0,w.Iq)(m,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js":(R,y,o)=>{o.d(y,{ZP:()=>T});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+dom@3.38.0/node_modules/@wordpress/dom/build-module/index.js");const f=()=>{},v=["menuitem","menuitemradio","menuitemcheckbox"];function O(g,n,a){const l=g+a;return l<0?n+l:l>=n?l-n:l}class b extends r.Component{constructor(n){super(n),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container&&this.container.addEventListener("keydown",this.onKeyDown)}componentWillUnmount(){this.container&&this.container.removeEventListener("keydown",this.onKeyDown)}bindContainer(n){const{forwardedRef:a}=this.props;this.container=n,typeof a=="function"?a(n):a&&"current"in a&&(a.current=n)}getFocusableContext(n){if(!this.container)return null;const{onlyBrowserTabstops:a}=this.props,c=(a?p.T_.tabbable:p.T_.focusable).find(this.container),u=this.getFocusableIndex(c,n);return u>-1&&n?{index:u,target:n,focusables:c}:null}getFocusableIndex(n,a){return n.indexOf(a)}onKeyDown(n){var P,C,I;this.props.onKeyDown&&this.props.onKeyDown(n);const{getFocusableContext:a}=this,{cycle:l=!0,eventToOffset:c,onNavigate:u=f,stopNavigationEvents:e}=this.props,t=c(n);if(t!==void 0&&e){n.stopImmediatePropagation();const D=(P=n.target)==null?void 0:P.getAttribute("role");!!D&&v.includes(D)&&n.preventDefault()}if(!t)return;const d=(I=(C=n.target)==null?void 0:C.ownerDocument)==null?void 0:I.activeElement;if(!d)return;const i=a(d);if(!i)return;const{index:s,focusables:h}=i,E=l?O(s,h.length,t):s+t;E>=0&&E<h.length&&(h[E].focus(),u(E,h[E]),n.code==="Tab"&&n.preventDefault())}render(){const{children:n,stopNavigationEvents:a,eventToOffset:l,onNavigate:c,onKeyDown:u,cycle:e,onlyBrowserTabstops:t,forwardedRef:d,...i}=this.props;return(0,r.createElement)("div",{ref:this.bindContainer,...i},n)}}const w=(g,n)=>(0,r.createElement)(b,{...g,forwardedRef:n});w.displayName="NavigableContainer";const A=(0,r.forwardRef)(w);function x({role:g="menu",orientation:n="vertical",...a},l){const c=u=>{const{code:e}=u;let t=["ArrowDown"],d=["ArrowUp"];if(n==="horizontal"&&(t=["ArrowRight"],d=["ArrowLeft"]),n==="both"&&(t=["ArrowRight","ArrowDown"],d=["ArrowLeft","ArrowUp"]),t.includes(e))return 1;if(d.includes(e))return-1;if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e))return 0};return(0,r.createElement)(A,{ref:l,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:g,"aria-orientation":g!=="presentation"&&(n==="vertical"||n==="horizontal")?n:void 0,eventToOffset:c,...a})}const T=(0,r.forwardRef)(x)},"../../../node_modules/.pnpm/@wordpress+dom@3.38.0/node_modules/@wordpress/dom/build-module/index.js":(R,y,o)=>{o.d(y,{T_:()=>u});var r={};o.r(r),o.d(r,{find:()=>b});var p={};o.r(p),o.d(p,{find:()=>a,findNext:()=>c,findPrevious:()=>l,isTabbableIndex:()=>A});function f(e){return[e?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}function v(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function O(e){const t=e.closest("map[name]");if(!t)return!1;const d=e.ownerDocument.querySelector('img[usemap="#'+t.name+'"]');return!!d&&v(d)}function b(e,{sequential:t=!1}={}){const d=e.querySelectorAll(f(t));return Array.from(d).filter(i=>{if(!v(i))return!1;const{nodeName:s}=i;return s==="AREA"?O(i):!0})}function w(e){const t=e.getAttribute("tabindex");return t===null?0:parseInt(t,10)}function A(e){return w(e)!==-1}function x(){const e={};return function(d,i){const{nodeName:s,type:h,checked:E,name:P}=i;if(s!=="INPUT"||h!=="radio"||!P)return d.concat(i);const C=e.hasOwnProperty(P);if(!(E||!C))return d;if(C){const D=e[P];d=d.filter(S=>S!==D)}return e[P]=i,d.concat(i)}}function m(e,t){return{element:e,index:t}}function T(e){return e.element}function g(e,t){const d=w(e.element),i=w(t.element);return d===i?e.index-t.index:d-i}function n(e){return e.filter(A).map(m).sort(g).map(T).reduce(x(),[])}function a(e){return n(b(e))}function l(e){return n(b(e.ownerDocument.body)).reverse().find(t=>e.compareDocumentPosition(t)&e.DOCUMENT_POSITION_PRECEDING)}function c(e){return n(b(e.ownerDocument.body)).find(t=>e.compareDocumentPosition(t)&e.DOCUMENT_POSITION_FOLLOWING)}const u={focusable:r,tabbable:p}},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/menu.js":(R,y,o)=>{o.d(y,{Z:()=>v});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const v=(0,r.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.y$,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"}))},"../components/components/split-button/stories/index.stories.tsx":(R,y,o)=>{var d,i,s;o.r(y),o.d(y,{__namedExportsOrder:()=>t,_default:()=>e,default:()=>c});var r=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown-menu/index.js"),v=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=o.n(v),b=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss"),w={};w.insert="head",w.singleton=!1;var A=O()(b.Z,w);const x=b.Z.locals||{};var m=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const T=()=>(0,m.jsx)("svg",{width:"15",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"10 9 4 7",children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.004 10.555-6.005 5.459-6.004-5.459 1.009-1.11 4.995 4.542 4.996-4.542 1.009 1.11Z"})});T.displayName="DownIcon";const g=h=>{let{variant:E,controls:P,popoverProps:C,toggleProps:I,label:D,...S}=h;return(0,m.jsxs)(r.Z,{className:x["split-button"],children:[(0,m.jsx)(p.ZP,{variant:E,...S,className:x.button}),(0,m.jsx)(f.Z,{toggleProps:{variant:E,className:x.button,...I},popoverProps:{noArrow:!1,...C},icon:(0,m.jsx)(T,{}),disableOpenOnArrowDown:!0,controls:P,label:D})]})};g.displayName="SplitButton";const n=g;var a=`import SplitButton from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Split Button',
	component: SplitButton,
	argTypes: {
		variant: { type: 'select', options: [ undefined, 'secondary', 'primary', 'tertiary', 'link' ] },
	},
	args: {
		controls: [
			{
				title: 'Add to cart',
				icon: null,
				onClick: () => null,
			},
			{
				title: 'Add to wishlist',
				icon: null,
				onClick: () => null,
			},
		],
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} as ComponentMeta< typeof SplitButton >;

const Template: ComponentStory< typeof SplitButton > = args => (
	<SplitButton { ...args }>Buy now!</SplitButton>
);

export const _default = Template.bind( {} );
`,l={_default:{startLoc:{col:53,line:29},endLoc:{col:106,line:29},startBody:{col:53,line:29},endBody:{col:106,line:29}}};const c={title:"JS Packages/Components/Split Button",component:n,argTypes:{variant:{type:"select",options:[void 0,"secondary","primary","tertiary","link"]}},args:{controls:[{title:"Add to cart",icon:null,onClick:()=>null},{title:"Add to wishlist",icon:null,onClick:()=>null}]},parameters:{storySource:{source:`import SplitButton from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Split Button',
  component: SplitButton,
  argTypes: {
    variant: {
      type: 'select',
      options: [undefined, 'secondary', 'primary', 'tertiary', 'link']
    }
  },
  args: {
    controls: [{
      title: 'Add to cart',
      icon: null,
      onClick: () => null
    }, {
      title: 'Add to wishlist',
      icon: null,
      onClick: () => null
    }]
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof SplitButton>);
const Template: ComponentStory<typeof SplitButton> = args => <SplitButton {...args}>Buy now!</SplitButton>;
export const _default = Template.bind({});
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <SplitButton {...args}>Buy now!</SplitButton>",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:53,line:29},endLoc:{col:106,line:29},startBody:{col:53,line:29},endBody:{col:106,line:29}}}},backgrounds:{default:"dark"}}},u=h=>(0,m.jsx)(n,{...h,children:"Buy now!"});u.displayName="Template";const e=u.bind({});e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"args => <SplitButton {...args}>Buy now!</SplitButton>",...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const t=["_default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss":(R,y,o)=>{o.d(y,{Z:()=>b});var r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=o.n(r),f=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),v=o.n(f),O=v()(p());O.push([R.id,".LtrV_wYOdwb7dDaFAONw{--actions-size: 28px;display:flex;height:var(--actions-size);border-radius:var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw>.IF9UNoGSlG2nG7LQhiCq:first-child{border-radius:var(--jp-border-radius) 0 0 var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw>.components-dropdown>.IF9UNoGSlG2nG7LQhiCq{border-radius:0 var(--jp-border-radius) var(--jp-border-radius) 0}.IF9UNoGSlG2nG7LQhiCq{font-size:var(--font-body-extra-small);border-radius:var(--jp-border-radius);height:var(--actions-size);line-height:var(--actions-size)}",""]),O.locals={"split-button":"LtrV_wYOdwb7dDaFAONw",button:"IF9UNoGSlG2nG7LQhiCq"};const b=O}}]);})();
