"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(y,d,e)=>{e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(y,d,e)=>{e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(y,d,e)=>{var Le,Ae,Je,Oe,Ne,we,He,Ze,Ue,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,at;e.r(d),e.d(d,{JetpackAntiSpam:()=>q,JetpackBackup:()=>ee,JetpackBoost:()=>te,JetpackCRM:()=>se,JetpackScan:()=>ae,JetpackSearch:()=>ne,JetpackVideoPress:()=>G,__namedExportsOrder:()=>Rt,_default:()=>z,default:()=>jt});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),a=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),m=e("../components/components/layout/container/index.tsx"),g=e("../components/components/layout/col/index.tsx"),T=e("../components/components/text/index.tsx"),_=e("../components/components/button/index.tsx"),w=e("../../../node_modules/.pnpm/@wordpress+element@5.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),B=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),I=e.n(r),p=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function h({slug:s}){const{recordEvent:R}=(0,p.Z)();return{onClickGoBack:(0,n.useCallback)(i=>{s&&R("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(i.preventDefault(),history.back())},[R,s])}}var H=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),P=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),S=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const M=e.p+"static/media/boost.a5413748.png",D=e.p+"static/media/crm.7e7684ae.png",A=e.p+"static/media/extras.26daf365.png";var Z=e("../components/tools/jp-redirect/index.ts");const J=e.p+"static/media/jetpack-ai.1a265a19.png";var U=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(U),W=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),K={};K.insert="head",K.singleton=!1;var re=O()(W.Z,K);const u=W.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=B.__;function L({onClickGoBack:s=()=>{}}){const R=b("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),N=b("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),i=(0,Z.Z)("jetpack-ai-tiers-more-requests-contact");return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(g.Z,{className:u["product-interstitial__header"],children:(0,t.jsx)(v.Z,{onClick:s,reload:!1})}),(0,t.jsx)(g.Z,{children:(0,t.jsxs)(m.Z,{className:u.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(g.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:I()(u.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(T.H3,{children:R}),(0,t.jsx)(T.ZP,{mb:3,children:N}),(0,t.jsxs)("div",{className:u["buttons-row"],children:[(0,t.jsx)(_.Z,{href:i,children:b("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(_.Z,{variant:"secondary",children:b("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(g.Z,{sm:4,md:4,lg:5,className:I()(u.imageContainer,u.aiImageContainer),children:(0,t.jsx)("img",{src:J,alt:"Jetpack AI"})})]})})]})})}L.displayName="JetpackAIInterstitialMoreRequests",L.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const V=e.p+"static/media/search.f9756bd9.png";var ie=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),X={};X.insert="head",X.singleton=!1;var Ie=O()(ie.Z,X);const C=ie.Z.locals||{},he=e.p+"static/media/videopress.9591093a.png",Q=B.__;function k({bundle:s,existingLicenseKeyUrl:R="admin.php?page=my-jetpack#/add-license",installsPlugin:N=!1,slug:i,supportingInfo:pe,preferProductName:Re=!1,children:xe=null,imageContainerClassName:ye="",ctaButtonLabel:ue=null,hideTOS:xt=!1,quantity:nt=null,directCheckout:ot=!1,highlightLastFeature:rt=!1}){const{activate:ct,detail:yt}=(0,f.i)(i),{isUpgradableByBundle:fe,tiers:lt}=yt,{recordEvent:oe}=(0,p.Z)(),{onClickGoBack:ft}=h({slug:i});(0,n.useEffect)(()=>{oe("jetpack_myjetpack_product_interstitial_view",{product:i})},[oe,i]);const it=(0,n.useCallback)((E=null)=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:E!=null?E:i})},[oe,i]),It=(0,n.useCallback)(()=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:s})},[oe,s]),dt=(0,H.Z)("/"),me=(0,n.useCallback)((E,j,_e)=>{if(j!=null&&j.isBundle||ot){E==null||E();return}ct().finally(()=>{var ut,mt,_t,ht,kt;const pt=j==null?void 0:j.postActivationUrl,vt=_e?(ut=j==null?void 0:j.hasRequiredTier)==null?void 0:ut[_e]:j==null?void 0:j.hasRequiredPlan;if(!(!(_e?(ht=(_t=(mt=j==null?void 0:j.pricingForUi)==null?void 0:mt.tiers)==null?void 0:_t[_e])==null?void 0:ht.isFree:(kt=j==null?void 0:j.pricingForUi)==null?void 0:kt.isFree)&&!vt)){if(pt){window.location.href=pt;return}return dt()}E==null||E()})},[ot,ct,dt]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(g.Z,{className:C["product-interstitial__header"],children:[(0,t.jsx)(v.Z,{onClick:ft}),R&&(0,t.jsx)(T.ZP,{variant:"body-small",children:(0,w.Z)(Q("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(_.Z,{className:C["product-interstitial__license-activation-link"],href:R,variant:"link"})})})]}),(0,t.jsx)(g.Z,{children:lt&&lt.length?(0,t.jsx)(S.Z,{slug:i,clickHandler:me,onProductButtonClick:me,trackProductButtonClick:it}):(0,t.jsxs)(m.Z,{className:fe?null:C.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(g.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(P.Z,{slug:i,trackButtonClick:it,onClick:N?me:void 0,className:fe?C.container:null,supportingInfo:pe,preferProductName:Re,ctaButtonLabel:ue,hideTOS:xt,quantity:nt,highlightLastFeature:rt})}),(0,t.jsx)(g.Z,{sm:4,md:4,lg:5,className:I()(C.imageContainer,ye),children:s?(0,t.jsx)(P.Z,{slug:s,trackButtonClick:It,onClick:me,className:fe?C.container:null,quantity:nt,highlightLastFeature:rt}):xe})]})})]})})}k.displayName="ProductInterstitial";function ce(){const s="anti-spam",{detail:R}=(0,f.i)(s),{isPluginActive:N}=R;return(0,t.jsx)(k,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:N?"admin.php?page=akismet-key-config":null,preferProductName:!0})}ce.displayName="AntiSpamInterstitial";function Y(){return(0,t.jsx)(k,{slug:"backup",installsPlugin:!0,bundle:"security"})}Y.displayName="BackupInterstitial";function le(){return(0,t.jsx)(k,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:M,alt:"Boost"})})}le.displayName="BoostInterstitial";function $(){return(0,t.jsx)(k,{slug:"creator",installsPlugin:!0})}$.displayName="CreatorInterstitial";function F(){return(0,t.jsx)(k,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"CRM"})})}F.displayName="CRMInterstitial";function x(){return(0,t.jsx)(k,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:A,alt:"Extras"})})}x.displayName="ExtrasInterstitial";function de(){var ue;const s="jetpack-ai",{detail:R}=(0,f.i)(s),{onClickGoBack:N}=h({slug:s}),i=((ue=R==null?void 0:R["ai-assistant-feature"])==null?void 0:ue["next-tier"])||null;if(!i)return(0,t.jsx)(L,{onClickGoBack:N});const{hasRequiredPlan:pe}=R,Re=pe?Q("Upgrade Jetpack AI","jetpack-my-jetpack"):null,xe=(i==null?void 0:i.value)!==1?i==null?void 0:i.value:null,ye=(i==null?void 0:i.value)!==1;return(0,t.jsx)(k,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:C.aiImageContainer,ctaButtonLabel:Re,hideTOS:!0,quantity:xe,directCheckout:pe,highlightLastFeature:ye,children:(0,t.jsx)("img",{src:J,alt:"Jetpack AI"})})}de.displayName="JetpackAIInterstitial";function ve(){return(0,t.jsx)(k,{slug:"protect",installsPlugin:!0})}ve.displayName="ProtectInterstitial";function ke(){return(0,t.jsx)(k,{slug:"scan",installsPlugin:!0,bundle:"security"})}ke.displayName="ScanInterstitial";function Pe(){return(0,t.jsx)(k,{slug:"social",installsPlugin:!0})}Pe.displayName="SocialInterstitial";function je(){var R;const{detail:s}=(0,f.i)("search");return(0,t.jsx)(k,{slug:"search",installsPlugin:!0,supportingInfo:((R=s==null?void 0:s.pricingForUi)!=null&&R.trialAvailable?Q("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+Q("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:V,alt:"Search"})})}je.displayName="SearchInterstitial";function ge(){return(0,t.jsx)(k,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:he,alt:"VideoPress"})})}ge.displayName="VideoPressInterstitial",k.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@param {string} props.imageContainerClassName - Append a class to the image container
@param {string} [props.ctaButtonLabel]        - The label for the Call To Action button
@param {boolean} [props.hideTOS]              - Whether to hide the Terms of Service text
@param {number} [props.quantity]              - The quantity of the product to purchase
@param {number} [props.directCheckout]        - Whether to go straight to the checkout page, e.g. for products with usage tiers
@param {boolean} [props.highlightLastFeature] - Whether to highlight the last feature in the list of features
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},ce.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},Y.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},le.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},$.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},F.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},x.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},de.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},ve.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},ke.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Pe.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},je.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},ge.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Pt=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getMockData } from '../../product-detail-card/stories/utils.js';
import ProductInterstitial, {
	AntiSpamInterstitial,
	BackupInterstitial,
	BoostInterstitial,
	CRMInterstitial,
	SearchInterstitial,
	ScanInterstitial,
	VideoPressInterstitial,
} from '../index.jsx';

export default {
	title: 'Packages/My Jetpack/Product Interstitial',
	component: ProductInterstitial,
};

const DefaultArgs = {};

const DefaultBackupDetailCard = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BackupInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const _default = DefaultBackupDetailCard.bind( {} );
_default.parameters = {};
_default.args = DefaultArgs;

const AntiSpamTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <AntiSpamInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackAntiSpam = AntiSpamTemplate.bind( {} );
JetpackAntiSpam.parameters = {
	mockData: getMockData( 'anti-spam' ),
};

const BackupTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BackupInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackBackup = BackupTemplate.bind( {} );
JetpackBackup.parameters = {
	mockData: getMockData( 'backup' ),
};

const BoostTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BoostInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackBoost = BoostTemplate.bind( {} );
JetpackBoost.parameters = {
	mockData: getMockData( 'boost' ),
};

const CRMTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <CRMInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackCRM = CRMTemplate.bind( {} );
JetpackCRM.parameters = {
	mockData: getMockData( 'crm' ),
};

const ScanTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ScanInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackScan = ScanTemplate.bind( {} );
JetpackScan.parameters = {};

const SearchTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <SearchInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackSearch = SearchTemplate.bind( {} );
JetpackSearch.parameters = {
	mockData: getMockData( 'search' ),
};

const VideoPressTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <VideoPressInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackVideoPress = VideoPressTemplate.bind( {} );
JetpackVideoPress.storyName = 'Jetpack VideoPress';
JetpackVideoPress.parameters = {
	mockData: getMockData( 'videopress' ),
};
`,bt={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const jt={parameters:{storySource:{source:`
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getMockData } from '../../product-detail-card/stories/utils.js';
import ProductInterstitial, { AntiSpamInterstitial, BackupInterstitial, BoostInterstitial, CRMInterstitial, SearchInterstitial, ScanInterstitial, VideoPressInterstitial } from '../index.jsx';
export default {
  title: 'Packages/My Jetpack/Product Interstitial',
  component: ProductInterstitial
};
const DefaultArgs = {};
const DefaultBackupDetailCard = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const _default = DefaultBackupDetailCard.bind({});
_default.parameters = {};
_default.args = DefaultArgs;
const AntiSpamTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackAntiSpam = AntiSpamTemplate.bind({});
JetpackAntiSpam.parameters = {
  mockData: getMockData('anti-spam')
};
const BackupTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBackup = BackupTemplate.bind({});
JetpackBackup.parameters = {
  mockData: getMockData('backup')
};
const BoostTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBoost = BoostTemplate.bind({});
JetpackBoost.parameters = {
  mockData: getMockData('boost')
};
const CRMTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackCRM = CRMTemplate.bind({});
JetpackCRM.parameters = {
  mockData: getMockData('crm')
};
const ScanTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackScan = ScanTemplate.bind({});
JetpackScan.parameters = {};
const SearchTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackSearch = SearchTemplate.bind({});
JetpackSearch.parameters = {
  mockData: getMockData('search')
};
const VideoPressTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackVideoPress = VideoPressTemplate.bind({});
JetpackVideoPress.storyName = 'Jetpack VideoPress';
JetpackVideoPress.parameters = {
  mockData: getMockData('videopress')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ..._default.parameters?.docs?.source
    }
  }
};
JetpackAntiSpam.parameters = {
  ...JetpackAntiSpam.parameters,
  docs: {
    ...JetpackAntiSpam.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<AntiSpamInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackAntiSpam.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};
JetpackBoost.parameters = {
  ...JetpackBoost.parameters,
  docs: {
    ...JetpackBoost.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BoostInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBoost.parameters?.docs?.source
    }
  }
};
JetpackCRM.parameters = {
  ...JetpackCRM.parameters,
  docs: {
    ...JetpackCRM.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<CRMInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackCRM.parameters?.docs?.source
    }
  }
};
JetpackScan.parameters = {
  ...JetpackScan.parameters,
  docs: {
    ...JetpackScan.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<ScanInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackScan.parameters?.docs?.source
    }
  }
};
JetpackSearch.parameters = {
  ...JetpackSearch.parameters,
  docs: {
    ...JetpackSearch.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<SearchInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackSearch.parameters?.docs?.source
    }
  }
};
JetpackVideoPress.parameters = {
  ...JetpackVideoPress.parameters,
  docs: {
    ...JetpackVideoPress.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<VideoPressInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackVideoPress.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:k},gt={},be=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(Y,{...s})})})});be.displayName="DefaultBackupDetailCard";const z=be.bind({});z.parameters={},z.args=gt;const Be=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(ce,{...s})})})});Be.displayName="AntiSpamTemplate";const q=Be.bind({});q.parameters={mockData:(0,c.TN)("anti-spam")};const Se=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(Y,{...s})})})});Se.displayName="BackupTemplate";const ee=Se.bind({});ee.parameters={mockData:(0,c.TN)("backup")};const Ce=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(le,{...s})})})});Ce.displayName="BoostTemplate";const te=Ce.bind({});te.parameters={mockData:(0,c.TN)("boost")};const Ee=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(F,{...s})})})});Ee.displayName="CRMTemplate";const se=Ee.bind({});se.parameters={mockData:(0,c.TN)("crm")};const Te=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(ke,{...s})})})});Te.displayName="ScanTemplate";const ae=Te.bind({});ae.parameters={};const Me=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(je,{...s})})})});Me.displayName="SearchTemplate";const ne=Me.bind({});ne.parameters={mockData:(0,c.TN)("search")};const De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(ge,{...s})})})});De.displayName="VideoPressTemplate";const G=De.bind({});G.storyName="Jetpack VideoPress",G.parameters={mockData:(0,c.TN)("videopress")},z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Je=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Je.source}}},q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}},ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:Ue.source}}},te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ve=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}},se.parameters={...se.parameters,docs:{...(Fe=se.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ge=(ze=se.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}},ae.parameters={...ae.parameters,docs:{...(Xe=ae.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Qe=ae.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}},ne.parameters={...ne.parameters,docs:{...($e=ne.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(et=(qe=ne.parameters)==null?void 0:qe.docs)==null?void 0:et.source}}},G.parameters={...G.parameters,docs:{...(tt=G.parameters)==null?void 0:tt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(at=(st=G.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};const Rt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/notice/index.tsx":(y,d,e)=>{e.d(d,{Z:()=>v});var n=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(m),T=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(_),B=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var I=w()(B.Z,r);const p=B.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const H=P=>{switch(P){case"error":return n.Z;case"warning":return n.Z;case"info":return o.Z;case"success":return a.Z;default:return n.Z}},f=({level:P,title:S,children:M,actions:D,hideCloseButton:A,onClose:Z})=>{const J=g()(p.container,p[`is-${P}`]);return(0,h.jsxs)("div",{className:J,children:[(0,h.jsx)("div",{className:p["icon-wrapper"],children:(0,h.jsx)(c.Z,{icon:H(P),className:p.icon})}),(0,h.jsxs)("div",{className:p["main-content"],children:[(0,h.jsx)("div",{className:p.title,children:S}),M,D&&D.length>0&&(0,h.jsx)("div",{className:p["action-bar"],children:D.map((U,O)=>(0,h.jsx)("div",{className:p.action,children:U},O))})]}),!A&&(0,h.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:Z,children:(0,h.jsx)(c.Z,{icon:l.Z})})]})};f.displayName="Notice",f.defaultProps={level:"info",hideCloseButton:!1};const v=f},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(y,d,e)=>{e.d(d,{Z:()=>h});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(m),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),_={};_.insert="head",_.singleton=!1;var w=g()(T.Z,_);const B=T.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=n.__;function p({onClick:H,reload:f}){const v=f?"/?reload=true":"/";return(0,r.jsxs)(l.rU,{to:v,className:B.link,onClick:H,children:[(0,r.jsx)(o.Z,{icon:a.Z,className:B.icon}),I("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}},p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const h=p},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(y,d,e)=>{e.d(d,{Z:()=>H});var n=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),a=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),m=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),T=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),_=e.n(T),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),B=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=g.__,p=({cantInstallPlugin:f,onProductButtonClick:v,detail:P,tier:S,trackProductButtonClick:M})=>{var k;const{siteSuffix:D,myJetpackUrl:A}=(k=window==null?void 0:window.myJetpackInitialState)!=null?k:{},{featuresByTier:Z=[],pricingForUi:{tiers:J},title:U,postActivationUrl:O}=P,{callToAction:W,currencyCode:K,fullPrice:re,introductoryOffer:u,isFree:t,wpcomProductSlug:b}=J[S],{run:L,hasCheckoutStarted:V}=(0,m.Z)({from:"my-jetpack",productSlug:b,redirectUrl:O||A,siteSuffix:D}),ie=(0,w.useCallback)(()=>{M(),v==null||v(L,P,S)},[M,v,L,P,S]),X=re?Math.ceil(re/12*100)/100:null,Ie=u!=null&&u.costPerInterval?Math.ceil(u.costPerInterval/12*100)/100:null,C=(u==null?void 0:u.intervalUnit)==="month"&&(u==null?void 0:u.intervalCount)===1,he=C?(0,g.gB)(I("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),X):I("/month, paid yearly","jetpack-my-jetpack",0),Q=W||(t?I("Start for Free","jetpack-my-jetpack"):(0,g.gB)(I("Get %s","jetpack-my-jetpack"),U,0));return(0,r.jsxs)(n.oK,{primary:!t,children:[(0,r.jsxs)(n.NE,{children:[t?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:X,offPrice:Ie,legend:he,currency:K,hideDiscountLabel:C,hidePriceFraction:!0}),(0,r.jsx)(a.Z,{fullWidth:!0,variant:t?"secondary":"primary",onClick:ie,isLoading:V,disabled:V||f,children:Q})]}),Z.map((ce,Y)=>{const{included:le,description:$,struck_description:F,info:x}=ce.tiers[S],de=F||$?(0,r.jsxs)(r.Fragment,{children:[F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:F})," "]}):null,$?(0,r.jsx)("strong",{children:$}):null]}):null;return(0,r.jsx)(n.kF,{isIncluded:le,label:de,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},Y)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:_().bool.isRequired,onProductButtonClick:_().func.isRequired,detail:_().object.isRequired,tier:_().string.isRequired,trackProductButtonClick:_().func.isRequired};const h=({slug:f,onProductButtonClick:v,trackProductButtonClick:P})=>{var u;const{fileSystemWriteAccess:S}=(u=window==null?void 0:window.myJetpackInitialState)!=null?u:{},{detail:M}=(0,B.i)(f),{description:D,featuresByTier:A=[],pluginSlug:Z,status:J,tiers:U=[],title:O}=M,W=J==="plugin_absent"&&S==="no",K=W&&(0,r.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(l.ZP,{children:(0,g.gB)(I("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),O)}),actions:[(0,r.jsx)(a.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${Z}`,isExternalLink:!0,children:I("Get plugin","jetpack-my-jetpack")})]}),re=(0,w.useMemo)(()=>A.map(t=>{var b,L,V;return{name:t==null?void 0:t.name,tooltipTitle:(b=t==null?void 0:t.info)==null?void 0:b.title,tooltipInfo:(L=t==null?void 0:t.info)!=null&&L.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(V=t==null?void 0:t.info)==null?void 0:V.content}}):null}}),[A]);return(0,r.jsxs)(r.Fragment,{children:[K,(0,r.jsx)(n.ZP,{title:D,items:re,children:U.map((t,b)=>(0,r.jsx)(p,{tier:t,detail:M,onProductButtonClick:v,trackProductButtonClick:P,primary:b===0,cantInstallPlugin:W},b))})]})};h.propTypes={slug:_().string.isRequired,onProductButtonClick:_().func.isRequired,trackProductButtonClick:_().func.isRequired},h.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}};const H=h},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(y,d,e)=>{e.d(d,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function a(c){const l=(0,o.s0)();return(0,n.useCallback)(()=>l(c),[l,c])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(y,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([y.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(y,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([y.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(y,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([y.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),l.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(y,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([y.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const m=l}}]);})();