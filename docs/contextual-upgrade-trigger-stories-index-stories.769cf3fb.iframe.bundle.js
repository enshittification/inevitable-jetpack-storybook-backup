"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[510],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(v,d,o)=>{o.d(d,{aD:()=>y});var t=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),e=o("@storybook/preview-api"),r=o("@storybook/global"),a=o("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),i="actions",l="storybook/actions",u=`${l}/panel`,T=`${l}/action-event`,g=`${l}/action-clear`,_="$___storybook.isCyclic",f={depth:10,clearOnStoryChange:!0,limit:50},x=(s={})=>{Object.assign(f,s)},c=(s,p)=>{let n=Object.getPrototypeOf(s);return!n||p(n)?n:c(n,p)},h=s=>!!(typeof s=="object"&&s&&c(s,p=>/^Synthetic(?:Base)?Event$/.test(p.constructor.name))&&typeof s.persist=="function"),E=s=>{if(h(s)){let p=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));p.persist();let n=Object.getOwnPropertyDescriptor(p,"view"),m=n==null?void 0:n.value;return typeof m=="object"&&(m==null?void 0:m.constructor.name)==="Window"&&Object.defineProperty(p,"view",{...n,value:Object.create(m.constructor.prototype)}),p}return s},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(s,p={}){let n={...f,...p},m=function(...O){var S,R;if(p.implicit){let P=(S="__STORYBOOK_PREVIEW__"in r.global?r.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:S.storyRenders.find(C=>C.phase==="playing"||C.phase==="rendering");if(P){let C=!((R=window==null?void 0:window.FEATURES)!=null&&R.disallowImplicitActionsInRenderV8),A=new a.is({phase:P.phase,name:s,deprecated:C});if(C)console.warn(A);else throw A}}let b=e.addons.getChannel(),B=D(),L=5,j=O.map(E),k=O.length>1?j:j[0],I={id:B,count:0,data:{name:s,args:k},options:{...n,maxDepth:L+(n.depth||3),allowFunction:n.allowFunction||!1}};b.emit(T,I)};return m.isAction=!0,m}var w=(...s)=>{let p=f,n=s;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(p={...f,...n.pop()});let m=n[0];(n.length!==1||typeof m=="string")&&(m={},n.forEach(b=>{m[b]=b}));let O={};return Object.keys(m).forEach(b=>{O[b]=y(m[b],p)}),O}},"../components/components/contextual-upgrade-trigger/stories/index.stories.tsx":(v,d,o)=>{var x,c,h,E,D,y;o.r(d),o.d(d,{Default:()=>g,Link:()=>_,__namedExportsOrder:()=>f,default:()=>l});var t=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),e=o("../components/components/contextual-upgrade-trigger/index.tsx"),r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import { action } from '@storybook/addon-actions';
import ContextualUpgradeTrigger from '../index';

export default {
	title: 'JS Packages/Components/Contextual Upgrade Trigger',
	component: ContextualUpgradeTrigger,
};

const Template = args => <ContextualUpgradeTrigger { ...args } />;

const DefaultArgs = {
	description: 'Current status of the product (i.e. how many updates per day)',
	cta: 'Text action line, recommending the next tier',
	onClick: action( 'onClick' ),
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const Link = Template.bind( {} );
Link.args = {
	...DefaultArgs,
	onClick: null,
	href: 'https://jetpack.com',
};
`,i={Default:{startLoc:{col:17,line:9},endLoc:{col:65,line:9},startBody:{col:17,line:9},endBody:{col:65,line:9}},Link:{startLoc:{col:17,line:9},endLoc:{col:65,line:9},startBody:{col:17,line:9},endBody:{col:65,line:9}}};const l={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ContextualUpgradeTrigger from '../index';

export default {
	title: 'JS Packages/Components/Contextual Upgrade Trigger',
	component: ContextualUpgradeTrigger,
};

const Template = args => <ContextualUpgradeTrigger { ...args } />;

const DefaultArgs = {
	description: 'Current status of the product (i.e. how many updates per day)',
	cta: 'Text action line, recommending the next tier',
	onClick: action( 'onClick' ),
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const Link = Template.bind( {} );
Link.args = {
	...DefaultArgs,
	onClick: null,
	href: 'https://jetpack.com',
};
`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:65,line:9},startBody:{col:17,line:9},endBody:{col:65,line:9}},link:{startLoc:{col:17,line:9},endLoc:{col:65,line:9},startBody:{col:17,line:9},endBody:{col:65,line:9}}}}},title:"JS Packages/Components/Contextual Upgrade Trigger",component:e.Z},u=w=>(0,r.jsx)(e.Z,{...w});u.displayName="Template";const T={description:"Current status of the product (i.e. how many updates per day)",cta:"Text action line, recommending the next tier",onClick:(0,t.aD)("onClick")},g=u.bind({});g.args=T;const _=u.bind({});_.args={...T,onClick:null,href:"https://jetpack.com"},g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(h=(c=g.parameters)==null?void 0:c.docs)==null?void 0:h.source}}},_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(y=(D=_.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const f=["Default","Link"]},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(v,d,o)=>{o.d(d,{ZP:()=>D});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=o.n(e),a=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=o("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function T(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=i.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,_=(0,a.Z)("svg",{target:"ea4tfvq2"})("width:",l.Z.spinnerSize,"px;height:",l.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",u.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),f={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},x=(0,a.Z)("circle",{target:"ea4tfvq1"})(f,";stroke:",u.D.gray[300],";"),c=(0,a.Z)("path",{target:"ea4tfvq0"})(f,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");function h({className:y,...w},s){return(0,t.createElement)(_,{className:r()("components-spinner",y),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...w,ref:s},(0,t.createElement)(x,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(c,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const D=(0,t.forwardRef)(h)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(v,d,o)=>{o.d(d,{Z:()=>u});var t=o("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const r="36px",a="12px",i={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:a,controlPaddingXLarge:`calc(${a} * 1.3334)`,controlPaddingXSmall:`calc(${a} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:r,controlHeightXSmall:`calc( ${r} * 0.6 )`,controlHeightSmall:`calc( ${r} * 0.8 )`,controlHeightLarge:`calc( ${r} * 1.2 )`,controlHeightXLarge:`calc( ${r} * 1.4 )`},l={toggleGroupControlBackgroundColor:i.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:i.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:i.controlBackgroundColor},u=Object.assign({},i,l,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(v,d,o)=>{o.d(d,{Z:()=>r});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e({icon:a,size:i=24,...l},u){return(0,t.cloneElement)(a,{width:i,height:i,...l,ref:u})}const r=(0,t.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(v,d,o)=>{o.d(d,{Z:()=>a});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,t.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(e.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(v,d,o)=>{o.d(d,{Z:()=>a});var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,t.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(e.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/contextual-upgrade-trigger/index.tsx":(v,d,o)=>{o.d(d,{Z:()=>E});var t=o("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),r=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=o.n(r),i=o("../components/components/icon-tooltip/index.tsx"),l=o("../components/components/text/index.tsx"),u=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=o.n(u),g=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),_={};_.insert="head",_.singleton=!1;var f=T()(g.Z,_);const x=g.Z.locals||{};var c=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=({description:D,cta:y,onClick:w,href:s,openInNewTab:p=!1,className:n,tooltipText:m=""})=>{const O=s!==void 0?"a":"button",b=O==="a"?{href:s,...p&&{target:"_blank"}}:{onClick:w};return(0,c.jsxs)("div",{className:a()(x.cut,n),children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(l.ZP,{className:x.description,children:D}),m&&(0,c.jsx)(i.Z,{className:x.iconContainer,iconSize:16,offset:4,children:(0,c.jsx)(l.ZP,{variant:"body-small",children:m})})]}),(0,c.jsx)("div",{children:(0,c.jsx)(O,{...b,children:(0,c.jsx)(l.ZP,{className:x.cta,children:y})})})]}),(0,c.jsx)(t.Z,{icon:e.Z,className:x.icon,size:30})]})};h.displayName="ContextualUpgradeTrigger";const E=h},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(v,d,o)=>{o.d(d,{Z:()=>l});var t=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(t),r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(r),i=a()(e());i.push([v.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out;pointer-events:none}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),i.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const l=i}}]);})();