(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[510],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/defineProperty.js":(n,l,e)=>{var o=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js");function t(s,a,r){return a=o(a),a in s?Object.defineProperty(s,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[a]=r,s}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js":(n,l,e)=>{var o=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default;function t(s,a){if(o(s)!=="object"||s===null)return s;var r=s[Symbol.toPrimitive];if(r!==void 0){var d=r.call(s,a||"default");if(o(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(s)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPropertyKey.js":(n,l,e)=>{var o=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js").default,t=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/toPrimitive.js");function s(a){var r=t(a,"string");return o(r)==="symbol"?r:String(r)}n.exports=s,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/typeof.js":n=>{function l(e){"@babel/helpers - typeof";return n.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.__esModule=!0,n.exports.default=n.exports,l(e)}n.exports=l,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(n,l,e)=>{"use strict";e.d(l,{aD:()=>o.aD});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),t=(...a)=>{let r=config,d=a;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(r={...config,...d.pop()});let i=d[0];(d.length!==1||typeof i=="string")&&(i={},d.forEach(c=>{i[c]=c}));let _={};return Object.keys(i).forEach(c=>{_[c]=action(i[c],r)}),_},s=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(n,l,e)=>{"use strict";e.d(l,{ZP:()=>f});var o=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(s),r=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function c(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const u=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,h=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",i.Z.spinnerSize,"px;height:",i.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),m={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,r.Z)("circle",{target:"ea4tfvq1"})(m,";stroke:",_.D.gray[300],";"),g=(0,r.Z)("path",{target:"ea4tfvq0"})(m,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",u,";");function x({className:y,...T},v){return(0,t.createElement)(h,(0,o.Z)({className:a()("components-spinner",y),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false"},T,{ref:v}),(0,t.createElement)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const f=(0,t.forwardRef)(x)},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(n,l,e)=>{"use strict";e.d(l,{Z:()=>i});var o=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",a="12px",r={controlSurfaceColor:t.D.white,controlTextActiveColor:t.D.ui.theme,controlPaddingX:a,controlPaddingXLarge:`calc(${a} * 1.3334)`,controlPaddingXSmall:`calc(${a} / 1.3334)`,controlBackgroundColor:t.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${t.D.ui.theme}`,controlDestructiveBorderColor:t.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},d={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:t.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:t.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},i=Object.assign({},r,d,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:t.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:t.D.white,surfaceColor:t.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js":(n,l,e)=>{"use strict";e.d(l,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t({icon:a,size:r=24,...d}){return(0,o.cloneElement)(a,{width:r,height:r,...d})}const s=t},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(n,l,e)=>{"use strict";e.d(l,{Z:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/external.js":(n,l,e)=>{"use strict";e.d(l,{Z:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,o.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/contextual-upgrade-trigger/stories/index.stories.tsx":(n,l,e)=>{var m,p,g,x,b,f;"use strict";e.r(l),e.d(l,{Default:()=>c,Link:()=>u,__namedExportsOrder:()=>h,default:()=>d});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),t=e("../components/components/contextual-upgrade-trigger/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import { action } from '@storybook/addon-actions';
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
`,r={Default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},Link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}};const d={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}}}},title:"JS Packages/Components/Contextual Upgrade Trigger",component:t.Z},i=y=>(0,s.jsx)(t.Z,{...y});i.displayName="Template";const _={description:"Current status of the product (i.e. how many updates per day)",cta:"Text action line, recommending the next tier",onClick:(0,o.aD)("onClick")},c=i.bind({});c.args=_;const u=i.bind({});u.args={..._,onClick:null,href:"https://jetpack.com"},c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}},u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(f=(b=u.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const h=["Default","Link"]},"../components/components/contextual-upgrade-trigger/index.tsx":(n,l,e)=>{"use strict";e.d(l,{Z:()=>x});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(s),r=e("../components/components/icon-tooltip/index.tsx"),d=e("../components/components/text/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(i),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),u={};u.insert="head",u.singleton=!1;var h=_()(c.Z,u);const m=c.Z.locals||{};var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=b=>{let{description:f,cta:y,onClick:T,href:v,openInNewTab:w=!1,className:j,tooltipText:D=""}=b;const C=v!==void 0?"a":"button",E=C==="a"?{href:v,...w&&{target:"_blank"}}:{onClick:T};return(0,p.jsxs)("div",{className:a()(m.cut,j),children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(d.ZP,{className:m.description,children:f}),D&&(0,p.jsx)(r.Z,{className:m.iconContainer,iconSize:16,offset:4,children:(0,p.jsx)(d.ZP,{variant:"body-small",children:D})})]}),(0,p.jsx)("div",{children:(0,p.jsx)(C,{...E,children:(0,p.jsx)(d.ZP,{className:m.cta,children:y})})})]}),(0,p.jsx)(o.Z,{icon:t.Z,className:m.icon,size:30})]})};g.displayName="ContextualUpgradeTrigger";const x=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(n,l,e)=>{"use strict";e.d(l,{Z:()=>d});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),r=a()(t());r.push([n.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),r.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const d=r}}]);})();