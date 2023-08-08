(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2638],{"../connection/components/connect-screen/required-plan/stories/index.stories.jsx":(j,d,n)=>{var O,q,M,N,V,Z,U,W,z;"use strict";n.r(d),n.d(d,{Connecting:()=>S,Errored:()=>F,__namedExportsOrder:()=>H,_default:()=>E,default:()=>$});var u=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),m=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=n("../components/components/action-button/index.jsx"),e=n("../components/tools/jp-redirect/index.ts"),f=n("../components/components/pricing-card/index.tsx"),b=n("../components/components/terms-of-service/index.tsx"),C=n("../../../node_modules/.pnpm/@wordpress+element@5.15.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),c=n("../../../node_modules/.pnpm/@wordpress+i18n@4.38.0/node_modules/@wordpress/i18n/build-module/index.js"),r=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=n.n(r),t=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),o=n.n(t),i=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=n.n(i),x=n("../connection/components/connect-screen/layout/index.jsx"),v=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=n.n(v),g=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/required-plan/style.scss"),a={};a.insert="head",a.singleton=!1;var y=h()(g.Z,a);const k=g.Z.locals||{};var p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const A=c.__,B=o()("jetpack:connection:ConnectScreenRequiredPlanVisual"),w=L=>{const{title:Y,buttonLabel:G,children:Q,priceBefore:ee,priceAfter:ne,pricingIcon:oe,pricingTitle:te,pricingCurrencyCode:re,isLoading:se,handleButtonClick:J,displayButtonError:ie,buttonIsLoading:K,logo:ae,isOfflineMode:R,rna:X=!1}=L;B("props are %o",L);const ce=(0,C.Z)(A("Already have a subscription? <connectButton/>","jetpack"),{connectButton:(0,p.jsx)(_.Z,{label:A("Log in to get started","jetpack"),onClick:J,isLoading:K})}),le=R?(0,C.Z)(A("Unavailable in <a>Offline Mode</a>","jetpack"),{a:(0,p.jsx)("a",{href:(0,e.Z)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})}):void 0;return(0,p.jsx)(x.Z,{title:Y,className:l()("jp-connection__connect-screen-required-plan",se?"jp-connection__connect-screen-required-plan__loading":"",X?"rna":""),logo:ae,rna:X,children:(0,p.jsxs)("div",{className:"jp-connection__connect-screen-required-plan__content",children:[Q,(0,p.jsx)("div",{className:"jp-connection__connect-screen-required-plan__pricing-card",children:(0,p.jsxs)(f.Z,{title:te,icon:oe,priceBefore:ee,currencyCode:re,priceAfter:ne,children:[(0,p.jsx)(b.Z,{agreeButtonLabel:G}),(0,p.jsx)(_.Z,{label:G,onClick:J,displayError:ie||R,errorMessage:le,isLoading:K,isDisabled:R})]})}),!R&&(0,p.jsx)("div",{className:"jp-connection__connect-screen-required-plan__with-subscription",children:ce})]})})};w.displayName="ConnectScreenRequiredPlanVisual",w.propTypes={pricingTitle:s().string.isRequired,priceBefore:s().number.isRequired,priceAfter:s().number.isRequired,pricingCurrencyCode:s().string,title:s().string,buttonLabel:s().string,pricingIcon:s().oneOfType([s().string,s().element]),isLoading:s().bool,handleButtonClick:s().func,displayButtonError:s().bool,buttonIsLoading:s().bool,logo:s().element,isOfflineMode:s().bool},w.defaultProps={pricingCurrencyCode:"USD",isLoading:!1,buttonIsLoading:!1,displayButtonError:!1,handleButtonClick:()=>{}},w.__docgenInfo={description:`The Connection Screen Visual component for consumers that require a Plan.

@param {object} props -- The properties.
@returns {React.Component} The \`ConnectScreenRequiredPlanVisual\` component.`,methods:[],displayName:"ConnectScreenRequiredPlanVisual",props:{pricingCurrencyCode:{defaultValue:{value:"'USD'",computed:!1},description:"The Currency code, eg 'USD'.",type:{name:"string"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the connection status is still loading.",type:{name:"bool"},required:!1},buttonIsLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the button loading state is active or not.",type:{name:"bool"},required:!1},displayButtonError:{defaultValue:{value:"false",computed:!1},description:"Whether the button error is active or not.",type:{name:"bool"},required:!1},handleButtonClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback that is applied into click for all buttons.",type:{name:"func"},required:!1},pricingTitle:{description:"The Pricing Card Title.",type:{name:"string"},required:!0},priceBefore:{description:"Price before discount.",type:{name:"number"},required:!0},priceAfter:{description:"Price after discount.",type:{name:"number"},required:!0},title:{description:"The Title.",type:{name:"string"},required:!1},buttonLabel:{description:"The Connect Button label.",type:{name:"string"},required:!1},pricingIcon:{description:"The Pricing Card Icon.",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},logo:{description:"The logo to display at the top of the component.",type:{name:"element"},required:!1},isOfflineMode:{description:"Whether the site is in offline mode.",type:{name:"bool"},required:!1}}};const P=w;var I=`/* eslint-disable react/react-in-jsx-scope */
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenRequiredPlanVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen with Required Plan',
	component: ConnectScreenRequiredPlanVisual,
};

// Export additional stories using pre-defined values
const Template = args => (
	<ConnectScreenRequiredPlanVisual { ...args }>
		<h3>Save every change and get back online quickly with one\u2011click restores.</h3>

		<ul>
			<li>Automated real-time backups</li>
			<li>Easy one-click restores</li>
			<li>Complete list of all site changes</li>
			<li>Global server infrastructure</li>
			<li>Best-in-class support</li>
		</ul>
	</ConnectScreenRequiredPlanVisual>
);

const DefaultArgs = {
	title: 'The best real\u2011time WordPress backups',
	pricingIcon:
		"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
	priceBefore: 9,
	priceAfter: 4.5,
	pricingTitle: 'Jetpack Backup',
	buttonLabel: 'Get Jetpack Backup',
	isLoading: false,
	handleButtonClick: action( 'onButtonClick' ),
	displayButtonError: false,
	buttonIsLoading: false,
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const Connecting = Template.bind( {} );
Connecting.args = {
	...DefaultArgs,
	buttonIsLoading: true,
};

export const Errored = Template.bind( {} );
Errored.args = {
	...DefaultArgs,
	displayButtonError: true,
};
`,de={_default:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}},Connecting:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}},Errored:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}}};const $={parameters:{storySource:{source:`
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenRequiredPlanVisual from '../visual';
export default {
  title: 'JS Packages/Connection/Connect Screen with Required Plan',
  component: ConnectScreenRequiredPlanVisual
};

// Export additional stories using pre-defined values
const Template = args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>;
const DefaultArgs = {
  title: 'The best real\u2011time WordPress backups',
  pricingIcon: "data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
  priceBefore: 9,
  priceAfter: 4.5,
  pricingTitle: 'Jetpack Backup',
  buttonLabel: 'Get Jetpack Backup',
  isLoading: false,
  handleButtonClick: action('onButtonClick'),
  displayButtonError: false,
  buttonIsLoading: false
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const Connecting = Template.bind({});
Connecting.args = {
  ...DefaultArgs,
  buttonIsLoading: true
};
export const Errored = Template.bind({});
Errored.args = {
  ...DefaultArgs,
  displayButtonError: true
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <ConnectScreenRequiredPlanVisual {...args}>\\n        <h3>Save every change and get back online quickly with one\\u2011click restores.</h3>\\n\\n        <ul>\\n            <li>Automated real-time backups</li>\\n            <li>Easy one-click restores</li>\\n            <li>Complete list of all site changes</li>\\n            <li>Global server infrastructure</li>\\n            <li>Best-in-class support</li>\\n        </ul>\\n    </ConnectScreenRequiredPlanVisual>",
      ..._default.parameters?.docs?.source
    }
  }
};
Connecting.parameters = {
  ...Connecting.parameters,
  docs: {
    ...Connecting.parameters?.docs,
    source: {
      originalSource: "args => <ConnectScreenRequiredPlanVisual {...args}>\\n        <h3>Save every change and get back online quickly with one\\u2011click restores.</h3>\\n\\n        <ul>\\n            <li>Automated real-time backups</li>\\n            <li>Easy one-click restores</li>\\n            <li>Complete list of all site changes</li>\\n            <li>Global server infrastructure</li>\\n            <li>Best-in-class support</li>\\n        </ul>\\n    </ConnectScreenRequiredPlanVisual>",
      ...Connecting.parameters?.docs?.source
    }
  }
};
Errored.parameters = {
  ...Errored.parameters,
  docs: {
    ...Errored.parameters?.docs,
    source: {
      originalSource: "args => <ConnectScreenRequiredPlanVisual {...args}>\\n        <h3>Save every change and get back online quickly with one\\u2011click restores.</h3>\\n\\n        <ul>\\n            <li>Automated real-time backups</li>\\n            <li>Easy one-click restores</li>\\n            <li>Complete list of all site changes</li>\\n            <li>Global server infrastructure</li>\\n            <li>Best-in-class support</li>\\n        </ul>\\n    </ConnectScreenRequiredPlanVisual>",
      ...Errored.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}},connecting:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}},errored:{startLoc:{col:17,line:11},endLoc:{col:38,line:21},startBody:{col:17,line:11},endBody:{col:38,line:21}}}}},title:"JS Packages/Connection/Connect Screen with Required Plan",component:P},T=L=>(0,p.jsxs)(P,{...L,children:[(0,p.jsx)("h3",{children:"Save every change and get back online quickly with one\u2011click restores."}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:"Automated real-time backups"}),(0,p.jsx)("li",{children:"Easy one-click restores"}),(0,p.jsx)("li",{children:"Complete list of all site changes"}),(0,p.jsx)("li",{children:"Global server infrastructure"}),(0,p.jsx)("li",{children:"Best-in-class support"})]})]});T.displayName="Template";const D={title:"The best real\u2011time WordPress backups",pricingIcon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,pricingTitle:"Jetpack Backup",buttonLabel:"Get Jetpack Backup",isLoading:!1,handleButtonClick:(0,u.aD)("onButtonClick"),displayButtonError:!1,buttonIsLoading:!1},E=T.bind({});E.args=D;const S=T.bind({});S.args={...D,buttonIsLoading:!0};const F=T.bind({});F.args={...D,displayButtonError:!0},E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(M=(q=E.parameters)==null?void 0:q.docs)==null?void 0:M.source}}},S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(Z=(V=S.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}},F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(z=(W=F.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const H=["_default","Connecting","Errored"]},"../components/components/pricing-card/index.tsx":(j,d,n)=>{"use strict";n.d(d,{Z:()=>x});var u=n("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),m=n("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),_=n("../../../node_modules/.pnpm/@wordpress+i18n@4.38.0/node_modules/@wordpress/i18n/build-module/index.js"),e=n("../components/components/terms-of-service/index.tsx"),f=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=n.n(f),C=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),c={};c.insert="head",c.singleton=!1;var r=b()(C.Z,c);const l=C.Z.locals||{};var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=_.__,i=v=>v.fraction.indexOf("00")===-1,s=v=>{let{currencyCode:h="USD",priceDetails:g=o("/month, paid yearly","jetpack"),...a}=v;const y=(0,u.LR)(a.priceBefore,h),k=(0,u.LR)(a.priceAfter,h);return(0,t.jsxs)("div",{className:"jp-components__pricing-card",children:[a.icon&&(0,t.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof a.icon=="string"?(0,t.jsx)("img",{src:a.icon,alt:(0,_.gB)(o("Icon for the product %s","jetpack"),a.title)}):a.icon}),(0,t.jsx)("h1",{className:"jp-components__pricing-card__title",children:a.title}),(0,t.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[a.priceBefore!==a.priceAfter&&(0,t.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,t.jsx)("span",{className:"jp-components__pricing-card__currency",children:y.symbol}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price",children:y.integer}),i(y)&&(0,t.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",y.fraction]}),(0,t.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}),(0,t.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,t.jsx)("span",{className:"jp-components__pricing-card__currency",children:k.symbol}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price",children:k.integer}),i(k)&&(0,t.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:k.fraction})]}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price-details",children:g})]}),a.children&&(0,t.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:a.children}),a.tosText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__tos",children:a.tosText}),a.ctaText&&(0,t.jsxs)(t.Fragment,{children:[!a.tosText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,t.jsx)(e.Z,{agreeButtonLabel:a.ctaText})}),(0,t.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,t.jsx)(m.ZP,{className:"jp-components__pricing-card__button",label:a.ctaText,onClick:a.onCtaClick,children:a.ctaText})})]}),a.infoText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__info",children:a.infoText})]})};s.displayName="PricingCard";const x=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(j,d,n)=>{"use strict";n.d(d,{Z:()=>b});var u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(u),_=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),e=n.n(_),f=e()(m());f.push([j.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const b=f},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/required-plan/style.scss":(j,d,n)=>{"use strict";n.d(d,{Z:()=>b});var u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(u),_=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),e=n.n(_),f=e()(m());f.push([j.id,"@media(min-width: 1080px){.jp-connection__connect-screen-layout__left{width:calc(100% - 384px - var(--spacing-base)*4)}}@media(min-width: 1080px){.jp-connection__connect-screen-required-plan{position:relative;background:linear-gradient(to right, white 70%, #f9f9f6 30%)}}.jp-connection__connect-screen-required-plan__loading{display:none}.jp-connection__connect-screen-required-plan ul.jp-product-promote{margin-block-start:calc(var(--spacing-base)*3);margin-block-end:calc(var(--spacing-base)*4)}@media(min-width: 1080px){.jp-connection__connect-screen-required-plan__pricing-card{position:absolute;top:calc(var(--spacing-base)*8);right:calc(var(--spacing-base)*12)}}.jp-connection__connect-screen-required-plan__pricing-card .jp-action-button--button.components-button{width:100%;height:auto;font-size:18px;font-weight:500;background:var(--jp-black) !important;color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-connection__connect-screen-required-plan__pricing-card .jp-action-button--button.components-button:disabled{background:var(--jp-gray) !important;color:var(--jp-gray-20) !important}.jp-connection__connect-screen-required-plan__pricing-card .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.jp-connection__connect-screen-required-plan__with-subscription{margin-top:calc(var(--spacing-base)*4);display:flex;flex-wrap:wrap;justify-content:flex-start;gap:1ch;line-height:1}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary{display:inline;font-size:var(--font-title-small);line-height:20px;color:var(--jp-black) !important;background:inherit !important;text-decoration:underline;width:auto;min-width:0;height:auto;font:inherit;padding:0}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary:hover{background:inherit;text-decoration-thickness:var(--jp-underline-thickness)}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary:focus{background:inherit;box-shadow:none !important}.jp-connection__connect-screen-required-plan__with-subscription .jp-components-spinner__inner,.jp-connection__connect-screen-required-plan__with-subscription .jp-components-spinner__outer{border-top-color:var(--jp-black);border-right-color:var(--jp-black)}",""]);const b=f},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(j,d,n)=>{var u=n("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");d.formatArgs=_,d.save=e,d.load=f,d.useColors=m,d.storage=b(),d.destroy=(()=>{let c=!1;return()=>{c||(c=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),d.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function m(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function _(c){if(c[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+c[0]+(this.useColors?"%c ":" ")+"+"+j.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;c.splice(1,0,r,"color: inherit");let l=0,t=0;c[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(l++,o==="%c"&&(t=l))}),c.splice(t,0,r)}d.log=console.debug||console.log||(()=>{});function e(c){try{c?d.storage.setItem("debug",c):d.storage.removeItem("debug")}catch(r){}}function f(){let c;try{c=d.storage.getItem("debug")}catch(r){}return!c&&typeof u!="undefined"&&"env"in u&&(c=u.env.DEBUG),c}function b(){try{return localStorage}catch(c){}}j.exports=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(d);const{formatters:C}=j.exports;C.j=function(c){try{return JSON.stringify(c)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(j,d,n)=>{function u(m){e.debug=e,e.default=e,e.coerce=l,e.disable=C,e.enable=b,e.enabled=c,e.humanize=n("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=t,Object.keys(m).forEach(o=>{e[o]=m[o]}),e.names=[],e.skips=[],e.formatters={};function _(o){let i=0;for(let s=0;s<o.length;s++)i=(i<<5)-i+o.charCodeAt(s),i|=0;return e.colors[Math.abs(i)%e.colors.length]}e.selectColor=_;function e(o){let i,s=null,x,v;function h(...g){if(!h.enabled)return;const a=h,y=Number(new Date),k=y-(i||y);a.diff=k,a.prev=i,a.curr=y,i=y,g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let p=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(B,w)=>{if(B==="%%")return"%";p++;const P=e.formatters[w];if(typeof P=="function"){const I=g[p];B=P.call(a,I),g.splice(p,1),p--}return B}),e.formatArgs.call(a,g),(a.log||e.log).apply(a,g)}return h.namespace=o,h.useColors=e.useColors(),h.color=e.selectColor(o),h.extend=f,h.destroy=e.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>s!==null?s:(x!==e.namespaces&&(x=e.namespaces,v=e.enabled(o)),v),set:g=>{s=g}}),typeof e.init=="function"&&e.init(h),h}function f(o,i){const s=e(this.namespace+(typeof i=="undefined"?":":i)+o);return s.log=this.log,s}function b(o){e.save(o),e.namespaces=o,e.names=[],e.skips=[];let i;const s=(typeof o=="string"?o:"").split(/[\s,]+/),x=s.length;for(i=0;i<x;i++)s[i]&&(o=s[i].replace(/\*/g,".*?"),o[0]==="-"?e.skips.push(new RegExp("^"+o.slice(1)+"$")):e.names.push(new RegExp("^"+o+"$")))}function C(){const o=[...e.names.map(r),...e.skips.map(r).map(i=>"-"+i)].join(",");return e.enable(""),o}function c(o){if(o[o.length-1]==="*")return!0;let i,s;for(i=0,s=e.skips.length;i<s;i++)if(e.skips[i].test(o))return!1;for(i=0,s=e.names.length;i<s;i++)if(e.names[i].test(o))return!0;return!1}function r(o){return o.toString().substring(2,o.toString().length-2).replace(/\.\*\?$/,"*")}function l(o){return o instanceof Error?o.stack||o.message:o}function t(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}j.exports=u},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":j=>{var d=1e3,n=d*60,u=n*60,m=u*24,_=m*7,e=m*365.25;j.exports=function(r,l){l=l||{};var t=typeof r;if(t==="string"&&r.length>0)return f(r);if(t==="number"&&isFinite(r))return l.long?C(r):b(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function f(r){if(r=String(r),!(r.length>100)){var l=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(l){var t=parseFloat(l[1]),o=(l[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return t*e;case"weeks":case"week":case"w":return t*_;case"days":case"day":case"d":return t*m;case"hours":case"hour":case"hrs":case"hr":case"h":return t*u;case"minutes":case"minute":case"mins":case"min":case"m":return t*n;case"seconds":case"second":case"secs":case"sec":case"s":return t*d;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function b(r){var l=Math.abs(r);return l>=m?Math.round(r/m)+"d":l>=u?Math.round(r/u)+"h":l>=n?Math.round(r/n)+"m":l>=d?Math.round(r/d)+"s":r+"ms"}function C(r){var l=Math.abs(r);return l>=m?c(r,l,m,"day"):l>=u?c(r,l,u,"hour"):l>=n?c(r,l,n,"minute"):l>=d?c(r,l,d,"second"):r+" ms"}function c(r,l,t,o){var i=l>=t*1.5;return Math.round(r/t)+" "+o+(i?"s":"")}}}]);})();
