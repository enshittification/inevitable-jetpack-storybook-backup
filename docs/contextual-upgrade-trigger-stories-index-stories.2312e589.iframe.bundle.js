"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[510],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(u,a,o)=>{o.d(a,{aD:()=>n.aD});var n=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),e=(...s)=>{let r=config,t=s;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(r={...config,...t.pop()});let c=t[0];(t.length!==1||typeof c=="string")&&(c={},t.forEach(l=>{c[l]=l}));let _={};return Object.keys(c).forEach(l=>{_[l]=action(c[l],r)}),_},d=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(u,a,o)=>{o.d(a,{ZP:()=>x});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=o.n(e),s=o("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=o("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function _(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const l=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,p=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",t.Z.spinnerSize,"px;height:",t.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",c.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),h={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},m=(0,s.Z)("circle",{target:"ea4tfvq1"})(h,";stroke:",c.D.gray[300],";"),i=(0,s.Z)("path",{target:"ea4tfvq0"})(h,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",l,";");function g({className:f,...T},b){return(0,n.createElement)(p,{className:d()("components-spinner",f),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...T,ref:b},(0,n.createElement)(m,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(i,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const x=(0,n.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(u,a,o)=>{o.d(a,{Z:()=>c});var n=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",s="12px",r={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:s,controlPaddingXLarge:`calc(${s} * 1.3334)`,controlPaddingXSmall:`calc(${s} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},t={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},c=Object.assign({},r,t,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(u,a,o)=>{o.d(a,{Z:()=>d});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e({icon:s,size:r=24,...t}){return(0,n.cloneElement)(s,{width:r,height:r,...t})}const d=e},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(u,a,o)=>{o.d(a,{Z:()=>s});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,n.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(e.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/external.js":(u,a,o)=>{o.d(a,{Z:()=>s});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,n.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(e.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/contextual-upgrade-trigger/stories/index.stories.tsx":(u,a,o)=>{var m,i,g,v,x,f;o.r(a),o.d(a,{Default:()=>l,Link:()=>p,__namedExportsOrder:()=>h,default:()=>t});var n=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),e=o("../components/components/contextual-upgrade-trigger/index.tsx"),d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`import { action } from '@storybook/addon-actions';
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
`,r={Default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},Link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}};const t={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ContextualUpgradeTrigger from '../index';
export default {
  title: 'JS Packages/Components/Contextual Upgrade Trigger',
  component: ContextualUpgradeTrigger
};
const Template = args => <ContextualUpgradeTrigger {...args} />;
const DefaultArgs = {
  description: 'Current status of the product (i.e. how many updates per day)',
  cta: 'Text action line, recommending the next tier',
  onClick: action('onClick')
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const Link = Template.bind({});
Link.args = {
  ...DefaultArgs,
  onClick: null,
  href: 'https://jetpack.com'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ContextualUpgradeTrigger {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...Link.parameters?.docs,
    source: {
      originalSource: "args => <ContextualUpgradeTrigger {...args} />",
      ...Link.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}}}},title:"JS Packages/Components/Contextual Upgrade Trigger",component:e.Z},c=T=>(0,d.jsx)(e.Z,{...T});c.displayName="Template";const _={description:"Current status of the product (i.e. how many updates per day)",cta:"Text action line, recommending the next tier",onClick:(0,n.aD)("onClick")},l=c.bind({});l.args=_;const p=c.bind({});p.args={..._,onClick:null,href:"https://jetpack.com"},l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(g=(i=l.parameters)==null?void 0:i.docs)==null?void 0:g.source}}},p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const h=["Default","Link"]},"../components/components/contextual-upgrade-trigger/index.tsx":(u,a,o)=>{o.d(a,{Z:()=>v});var n=o("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),d=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=o.n(d),r=o("../components/components/icon-tooltip/index.tsx"),t=o("../components/components/text/index.tsx"),c=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=o.n(c),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),p={};p.insert="head",p.singleton=!1;var h=_()(l.Z,p);const m=l.Z.locals||{};var i=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=x=>{let{description:f,cta:T,onClick:b,href:D,openInNewTab:w=!1,className:j,tooltipText:y=""}=x;const C=D!==void 0?"a":"button",E=C==="a"?{href:D,...w&&{target:"_blank"}}:{onClick:b};return(0,i.jsxs)("div",{className:s()(m.cut,j),children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(t.ZP,{className:m.description,children:f}),y&&(0,i.jsx)(r.Z,{className:m.iconContainer,iconSize:16,offset:4,children:(0,i.jsx)(t.ZP,{variant:"body-small",children:y})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(C,{...E,children:(0,i.jsx)(t.ZP,{className:m.cta,children:T})})})]}),(0,i.jsx)(n.Z,{icon:e.Z,className:m.icon,size:30})]})};g.displayName="ContextualUpgradeTrigger";const v=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(u,a,o)=>{o.d(a,{Z:()=>t});var n=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(n),d=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),r=s()(e());r.push([u.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),r.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const t=r}}]);})();