"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7013],{"../../plugins/protect/src/js/components/firewall-header/stories/index.stories.jsx":(P,m,e)=>{var q,ee,se,oe,ne,te,ae,le,de,re,ce,ie,me,ue,pe;e.r(m),e.d(m,{FirewallLoading:()=>S,FirewallOff:()=>K,FirewallOffPaid:()=>H,FirewallOn:()=>E,FirewallOnPaid:()=>B,__namedExportsOrder:()=>_e,default:()=>X});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../components/components/button/index.tsx"),t=e("../components/components/text/index.tsx"),d=e("../components/components/admin-section/hero/index.tsx"),l=e("../components/components/layout/container/index.tsx"),g=e("../components/components/layout/col/index.tsx"),j=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),b=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/help.js"),D=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),A=e.n(D),s=e("../../plugins/protect/src/js/constants.js"),O=e("../../plugins/protect/src/js/hooks/use-analytics-tracks/index.js"),c=e("../../plugins/protect/src/js/hooks/use-protect-data/index.js"),i=e("../../plugins/protect/src/js/hooks/use-waf-data/index.jsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(f),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/firewall-header/styles.module.scss"),I={};I.insert="head",I.singleton=!1;var N=w()(M.Z,I);const p=M.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=_.__,Z=()=>{const{adminUrl:h}=window.jetpackProtectInitialState||{},R=h+"#/firewall",{config:{automaticRulesAvailable:T}}=(0,i.Z)(),{run:x}=(0,j.Z)({productSlug:s.o,redirectUrl:R}),{recordEventHandler:C}=(0,O.Z)(),k=C("jetpack_protect_waf_header_get_scan_link_click",x);return(0,o.jsx)(u.Z,{className:p["upgrade-button"],onClick:k,children:T?n("Upgrade to update automatic security rules","jetpack-protect",0):n("Upgrade to enable automatic firewall protection","jetpack-protect")})};Z.displayName="UpgradePrompt";const V=({children:h=n("The free version of the firewall does not receive updates to automatic security rules.","jetpack-protect")})=>{const[R,T]=(0,a.useState)(!1),x=(0,a.useCallback)(()=>{T(!0)},[]),C=(0,a.useCallback)(()=>{T(!1)},[]);return(0,o.jsxs)("div",{className:p["icon-popover"],onMouseLeave:C,onMouseEnter:x,onClick:x,onFocus:x,onBlur:C,role:"presentation",children:[(0,o.jsx)(v.Z,{icon:y.Z}),R&&(0,o.jsx)(b.ZP,{noArrow:!1,offset:5,inline:!0,children:(0,o.jsx)(t.ZP,{className:p["popover-text"],variant:"body-small",children:h})})]})};V.displayName="FirewallSubheadingPopover";const W=({className:h,text:R="",popover:T=!1,children:x})=>(0,o.jsxs)("div",{className:p["firewall-subheading__content"],children:[(0,o.jsx)(t.ZP,{className:p[h],weight:600,children:R}),T&&(0,o.jsx)(V,{children:x})]});W.displayName="FirewallSubheadingContent";const L=({hasRequiredPlan:h,automaticRulesAvailable:R,jetpackWafIpList:T,jetpackWafAutomaticRules:x,bruteForceProtectionIsEnabled:C,wafSupported:k})=>{const G=k&&x&&T,F=k&&x&&!T,ge=k&&!x&&T,fe=k&&!x&&!T;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:p["firewall-subheading"],children:[k&&C&&(0,o.jsx)(W,{className:"brute-force-protection-subheading",text:n("Brute force protection is active.","jetpack-protect")}),fe&&(0,o.jsx)(W,{text:n("There are no firewall rules applied.","jetpack-protect")}),F&&(0,o.jsx)(W,{text:n("Automatic firewall protection is enabled.","jetpack-protect"),popover:!h}),ge&&(0,o.jsx)(W,{text:n("Only manual IP list rules apply.","jetpack-protect"),popover:!h&&!R,children:n("The free version of the firewall only allows for use of manual rules.","jetpack-protect")}),G&&(0,o.jsx)(W,{text:n("All firewall rules apply.","jetpack-protect"),popover:!h})]}),!h&&(0,o.jsx)(Z,{})]})},U=({status:h,hasRequiredPlan:R,automaticRulesEnabled:T,automaticRulesAvailable:x,jetpackWafIpList:C,jetpackWafAutomaticRules:k,bruteForceProtectionIsEnabled:G,wafSupported:F})=>(0,o.jsx)(d.Z,{children:(0,o.jsxs)(l.Z,{className:p["firewall-header"],horizontalSpacing:7,horizontalGap:0,children:[(0,o.jsxs)(g.Z,{children:[h==="on"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.ZP,{className:A()(p.status,p.active),variant:"label",children:n("Active","jetpack-protect")}),(0,o.jsxs)(t.H3,{className:p["firewall-heading"],mb:1,mt:2,children:[!F&&n("Brute force protection is active","jetpack-protect"),F&&(T?n("Automatic firewall is on","jetpack-protect"):n("Firewall is on","jetpack-protect",0))]}),(0,o.jsx)(L,{jetpackWafIpList:C,jetpackWafAutomaticRules:k,bruteForceProtectionIsEnabled:G,hasRequiredPlan:R,automaticRulesAvailable:x,wafSupported:F})]}),h==="off"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.ZP,{className:p.status,variant:"label",children:n("Inactive","jetpack-protect")}),(0,o.jsxs)(t.H3,{className:p["firewall-heading"],mb:1,mt:2,children:[!F&&n("Brute force protection is disabled","jetpack-protect"),F&&(x?n("Automatic firewall is off","jetpack-protect"):n("Firewall is off","jetpack-protect",0))]}),(0,o.jsx)(L,{jetpackWafIpList:C,jetpackWafAutomaticRules:k,bruteForceProtectionIsEnabled:G,hasRequiredPlan:R,automaticRulesAvailable:x,wafSupported:F})]}),h==="loading"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{className:p.spinner}),(0,o.jsx)(t.H3,{className:p["firewall-heading"],mb:2,mt:2,children:n("Automatic firewall is being set up","jetpack-protect")}),(0,o.jsx)(t.ZP,{className:p["loading-text"],weight:600,children:n("Please wait\u2026","jetpack-protect")})]})]}),(0,o.jsx)(g.Z,{children:(0,o.jsx)("div",{className:p["stat-card-wrapper"]})})]})});U.displayName="FirewallHeader";const J=()=>{const{config:{jetpackWafAutomaticRules:h,jetpackWafIpList:R,automaticRulesAvailable:T,bruteForceProtection:x},isToggling:C,wafSupported:k}=(0,i.Z)(),{hasRequiredPlan:G}=(0,c.Z)(),F=k&&(h||R)||x?"on":"off";return(0,o.jsx)(U,{status:C?"loading":F,hasRequiredPlan:G,automaticRulesEnabled:h,automaticRulesAvailable:T,jetpackWafIpList:R,jetpackWafAutomaticRules:h,bruteForceProtectionIsEnabled:x,wafSupported:k})};J.displayName="ConnectedFirewallHeader";const $=null;U.__docgenInfo={description:"",methods:[],displayName:"FirewallHeader"},J.__docgenInfo={description:"",methods:[],displayName:"ConnectedFirewallHeader"};var Y=`import React from 'react';
import { FirewallHeader } from '../index.jsx';

export default {
	title: 'Plugins/Protect/Firewall Header',
	component: FirewallHeader,
};

const Template = args => <FirewallHeader { ...args } />;

export const FirewallOn = Template.bind( {} );
FirewallOn.args = {
	status: 'on',
	hasRequiredPlan: false,
};

export const FirewallOnPaid = Template.bind( {} );
FirewallOnPaid.args = {
	status: 'on',
	hasRequiredPlan: true,
};

export const FirewallOff = Template.bind( {} );
FirewallOff.args = {
	status: 'off',
	hasRequiredPlan: false,
};

export const FirewallOffPaid = Template.bind( {} );
FirewallOffPaid.args = {
	status: 'off',
	hasRequiredPlan: true,
};

export const FirewallLoading = Template.bind( {} );
FirewallLoading.args = {
	status: 'loading',
	hasRequiredPlan: true,
};
`,Q={FirewallOn:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},FirewallOnPaid:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},FirewallOff:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},FirewallOffPaid:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},FirewallLoading:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}}};const X={parameters:{storySource:{source:`import React from 'react';
import { FirewallHeader } from '../index.jsx';

export default {
	title: 'Plugins/Protect/Firewall Header',
	component: FirewallHeader,
};

const Template = args => <FirewallHeader { ...args } />;

export const FirewallOn = Template.bind( {} );
FirewallOn.args = {
	status: 'on',
	hasRequiredPlan: false,
};

export const FirewallOnPaid = Template.bind( {} );
FirewallOnPaid.args = {
	status: 'on',
	hasRequiredPlan: true,
};

export const FirewallOff = Template.bind( {} );
FirewallOff.args = {
	status: 'off',
	hasRequiredPlan: false,
};

export const FirewallOffPaid = Template.bind( {} );
FirewallOffPaid.args = {
	status: 'off',
	hasRequiredPlan: true,
};

export const FirewallLoading = Template.bind( {} );
FirewallLoading.args = {
	status: 'loading',
	hasRequiredPlan: true,
};
`,locationsMap:{"firewall-on":{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},"firewall-on-paid":{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},"firewall-off":{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},"firewall-off-paid":{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}},"firewall-loading":{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}}}}},title:"Plugins/Protect/Firewall Header",component:U},z=h=>(0,o.jsx)(U,{...h});z.displayName="Template";const E=z.bind({});E.args={status:"on",hasRequiredPlan:!1};const B=z.bind({});B.args={status:"on",hasRequiredPlan:!0};const K=z.bind({});K.args={status:"off",hasRequiredPlan:!1};const H=z.bind({});H.args={status:"off",hasRequiredPlan:!0};const S=z.bind({});S.args={status:"loading",hasRequiredPlan:!0},E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:"args => <FirewallHeader {...args} />",...(se=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}},B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <FirewallHeader {...args} />",...(te=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}},K.parameters={...K.parameters,docs:{...(ae=K.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <FirewallHeader {...args} />",...(de=(le=K.parameters)==null?void 0:le.docs)==null?void 0:de.source}}},H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:"args => <FirewallHeader {...args} />",...(ie=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}},S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:"args => <FirewallHeader {...args} />",...(pe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const _e=["FirewallOn","FirewallOnPaid","FirewallOff","FirewallOffPaid","FirewallLoading"]},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(P,m,e)=>{e.d(m,{ZP:()=>O});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(u),d=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),j=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function b(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const r=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,_=(0,d.Z)("svg",{target:"ea4tfvq2"})("width:",g.Z.spinnerSize,"px;height:",g.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",j.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,d.Z)("circle",{target:"ea4tfvq1"})(v,";stroke:",j.D.gray[300],";"),D=(0,d.Z)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",r,";");function A({className:c,...i},f){return(0,a.createElement)(_,{className:t()("components-spinner",c),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...i,ref:f},(0,a.createElement)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,a.createElement)(D,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const O=(0,a.forwardRef)(A)},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/help.js":(P,m,e)=>{e.d(m,{Z:()=>d});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,a.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(u.y$,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"}))},"../connection/hooks/use-product-checkout-workflow/index.jsx":(P,m,e)=>{var c;e.d(m,{Z:()=>O});var a=e("../api/index.jsx");function u(){var f;switch(typeof window!="undefined"&&((f=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:f.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var t=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),g=e.n(l),j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("../connection/components/use-connection/index.jsx"),r=e("../connection/state/store.jsx");const _=g()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:v,apiRoot:y,apiNonce:D,siteSuffix:A}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},s=typeof window!="undefined"?(c=window==null?void 0:window.myJetpackInitialState)==null?void 0:c.adminUrl:null;function O({productSlug:i,redirectUrl:f,siteSuffix:w=A,adminUrl:M=s,connectAfterCheckout:I=!1,siteProductAvailabilityHandler:N=null,quantity:p=null,from:o,useBlogIdSuffix:n=!1}={}){_("productSlug is %s",i),_("redirectUrl is %s",f),_("siteSuffix is %s",w),_("from is %s",o);const[Z,V]=(0,j.useState)(!1),{registerSite:W}=(0,t.Z)(r.t),L=(0,d.Z)(E=>E(r.t).getBlogId(),[r.t]);_("blogID is %s",L!=null?L:"undefined"),n=n&&!!L;const{isUserConnected:U,isRegistered:J,handleConnectUser:$}=(0,b.Z)({redirectUri:f,from:o}),Y=(0,j.useMemo)(()=>{const E=u(),B=(!J||!U)&&I,K=B?"checkout/jetpack/":`checkout/${n?L.toString():w}/`,H=p!=null?`:-q-${p}`:"",S=new URL(`${E}${K}${i}${H}`);return B?(S.searchParams.set("connect_after_checkout",!0),S.searchParams.set("admin_url",M),S.searchParams.set("from_site_slug",w)):S.searchParams.set("site",w),S.searchParams.set("source",o),S.searchParams.set("redirect_to",f),U||S.searchParams.set("unlinked","1"),S},[J,U,I,w,p,i,o,f,M,n,L]);_("isRegistered is %s",J),_("isUserConnected is %s",U),_("connectAfterCheckout is %s",I),_("checkoutUrl is %s",Y);const Q=()=>Promise.resolve(N&&N()).then(E=>{if(E)return _("handleAfterRegistration: Site has a product associated"),$();_("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",Y),window.location.href=Y}),X=()=>{_("Redirecting to connectAfterCheckout flow: %s",Y),window.location.href=Y},z=E=>{if(E&&E.preventDefault(),V(!0),I)return X();if(J)return Q();W({registrationNonce:v,redirectUri:f}).then(Q)};return(0,j.useEffect)(()=>{a.ZP.setApiRoot(y),a.ZP.setApiNonce(D)},[]),{run:z,isRegistered:J,hasCheckoutStarted:Z}}},"../../plugins/protect/src/js/constants.js":(P,m,e)=>{e.d(m,{K:()=>a,o:()=>u});const a="https://wordpress.org/support/plugin/jetpack-protect/",u="jetpack_scan"},"../../plugins/protect/src/js/hooks/use-waf-data/index.jsx":(P,m,e)=>{e.d(m,{Z:()=>v});var a=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.45.0/node_modules/@wordpress/api-fetch/build-module/index.js"),l=e("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),g=e.n(l);const b={fetchWaf:()=>(0,d.Z)({path:"jetpack-protect/v1/waf",method:"GET"}).then(g()),toggleWaf:()=>(0,d.Z)({method:"POST",path:"jetpack-protect/v1/toggle-waf"}),updateWaf:y=>(0,d.Z)({method:"POST",path:"jetpack/v4/waf",data:y}),wafSeen:()=>(0,d.Z)({path:"jetpack-protect/v1/waf-seen",method:"POST"}),wafUpgradeSeen:()=>(0,d.Z)({path:"jetpack-protect/v1/waf-upgrade-seen",method:"POST"})};var r=e("../../plugins/protect/src/js/state/store.js");const v=()=>{const{setWafConfig:y,setWafStats:D,setWafIsEnabled:A,setWafIsUpdating:s,setWafIsToggling:O}=(0,a.Z)(r.t),c=(0,u.Z)(n=>n(r.t).getWaf()),i=(0,t.useCallback)(()=>(s(!0),b.fetchWaf().then(n=>{A(n==null?void 0:n.isEnabled),y(n==null?void 0:n.config),D(n==null?void 0:n.stats)}).finally(()=>s(!1))),[y,D,A,s]),f=(0,t.useCallback)(()=>(c.isEnabled||O(!0),s(!0),b.toggleWaf().then(i).finally(()=>{O(!1),s(!1)})),[i,c.isEnabled,O,s]),w=(0,t.useCallback)(()=>c.isEnabled?Promise.resolve():f(),[f,c.isEnabled]),M=(0,t.useCallback)(()=>(s(!0),w().then(()=>b.updateWaf({jetpack_waf_automatic_rules:!c.config.jetpackWafAutomaticRules})).then(i).finally(()=>s(!1))),[w,i,s,c.config.jetpackWafAutomaticRules]),I=(0,t.useCallback)(()=>(s(!0),b.updateWaf({jetpack_waf_ip_list:!c.config.jetpackWafIpList}).then(i).finally(()=>s(!1))),[i,s,c.config.jetpackWafIpList]),N=(0,t.useCallback)(()=>(s(!0),b.updateWaf({brute_force_protection:!c.config.bruteForceProtection}).then(i).finally(()=>s(!1))),[i,s,c.config.bruteForceProtection]),p=(0,t.useCallback)(()=>(s(!0),w().then(()=>b.updateWaf({jetpack_waf_share_data:!c.config.jetpackWafShareData})).then(i).finally(()=>s(!1))),[w,i,s,c.config.jetpackWafShareData]),o=(0,t.useCallback)(n=>(s(!0),b.updateWaf(n).then(i).finally(()=>s(!1))),[i,s]);return(0,t.useEffect)(()=>{c.config===void 0&&!c.isFetching&&i()},[c.config,c.isFetching,s,i]),{...c,refreshWaf:i,toggleWaf:f,toggleAutomaticRules:M,toggleManualRules:I,toggleBruteForceProtection:N,toggleShareData:p,updateConfig:o}}},"../components/components/admin-section/hero/index.tsx":(P,m,e)=>{e.d(m,{Z:()=>_});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(u),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss"),l={};l.insert="head",l.singleton=!1;var g=t()(d.Z,l);const j=d.Z.locals||{};var b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=({children:v})=>(0,b.jsx)("div",{className:j["section-hero"],children:v});r.displayName="AdminSectionHero";const _=r},"../components/components/layout/col/index.tsx":(P,m,e)=>{e.d(m,{Z:()=>A});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(d),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),j={};j.insert="head",j.singleton=!1;var b=l()(g.Z,j);const r=g.Z.locals||{},_=Number(r.smCols),v=Number(r.mdCols),y=Number(r.lgCols),A=s=>{const{children:O,tagName:c="div",className:i}=s,f=Math.min(_,typeof s.sm=="number"?s.sm:_),w=Math.min(_,typeof s.sm=="object"?s.sm.start:0),M=Math.min(_,typeof s.sm=="object"?s.sm.end:0),I=Math.min(v,typeof s.md=="number"?s.md:v),N=Math.min(v,typeof s.md=="object"?s.md.start:0),p=Math.min(v,typeof s.md=="object"?s.md.end:0),o=Math.min(y,typeof s.lg=="number"?s.lg:y),n=Math.min(y,typeof s.lg=="object"?s.lg.start:0),Z=Math.min(y,typeof s.lg=="object"?s.lg.end:0),V=u()(i,{[r[`col-sm-${f}`]]:!(w&&M),[r[`col-sm-${w}-start`]]:w>0,[r[`col-sm-${M}-end`]]:M>0,[r[`col-md-${I}`]]:!(N&&p),[r[`col-md-${N}-start`]]:N>0,[r[`col-md-${p}-end`]]:p>0,[r[`col-lg-${o}`]]:!(n&&Z),[r[`col-lg-${n}-start`]]:n>0,[r[`col-lg-${Z}-end`]]:Z>0});return(0,t.createElement)(c,{className:V},O)}},"../components/components/layout/container/index.tsx":(P,m,e)=>{e.d(m,{Z:()=>v});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(d),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),j={};j.insert="head",j.singleton=!1;var b=l()(g.Z,j);const r=g.Z.locals||{},v=({children:y,fluid:D=!1,tagName:A="div",className:s,horizontalGap:O=1,horizontalSpacing:c=1})=>{const i=(0,t.useMemo)(()=>{const w=`calc( var(--horizontal-spacing) * ${c} )`,M=`calc( var(--horizontal-spacing) * ${O} )`;return{paddingTop:w,paddingBottom:w,rowGap:M}},[O,c]),f=u()(s,r.container,{[r.fluid]:D});return(0,t.createElement)(A,{className:f,style:i},y)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss":(P,m,e)=>{e.d(m,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),l=d()(u());l.push([P.id,".s92r0DN4OmNZtdFlz9yh{background:var(--jp-white-off)}",""]),l.locals={"section-hero":"s92r0DN4OmNZtdFlz9yh"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(P,m,e)=>{e.d(m,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),l=d()(u());l.push([P.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(P,m,e)=>{e.d(m,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),l=d()(u());l.push([P.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/firewall-header/styles.module.scss":(P,m,e)=>{e.d(m,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),l=d()(u());l.push([P.id,'.gK03w02IacTMrSadMCUJ{color:var(--jp-gray-50)}.gK03w02IacTMrSadMCUJ:before{content:"";display:inline-block;border-radius:50%;height:8px;width:8px;margin-right:var(--spacing-base);background:var(--jp-gray-50)}.gK03w02IacTMrSadMCUJ.VXV4B5iVCtuCH_FgulOY{color:var(--jp-green-40)}.gK03w02IacTMrSadMCUJ.VXV4B5iVCtuCH_FgulOY:before{background:var(--jp-green-40)}svg.L_yqe3K1dZDh5i5ifHm5{width:32px;height:32px;margin:0;color:var(--jp-black)}.cP6ROfwVDM36IeRBMivP{display:flex;justify-content:flex-start;flex-wrap:wrap;align-items:center}.cP6ROfwVDM36IeRBMivP .ajznzbFB3E_f7oVMr5uF{margin-right:calc(var(--spacing-base)/2)}.z8EOctRoRZ5E8xBLTJRf{display:flex}.z8EOctRoRZ5E8xBLTJRf>.dYU4PJaW_eAoTb7w45QA{display:flex;margin-left:calc(var(--spacing-base)/2);fill:var(--jp-gray-20)}.lakM1wj3yabOiVUS_wu0{margin-top:calc(var(--spacing-base)*4)}.AG9kiOND8VbHIr_b912L{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.pYnoTr4PxGnSaVd5_gqt{display:flex;margin-left:auto;flex-wrap:wrap}.pYnoTr4PxGnSaVd5_gqt>:first-child{margin-right:calc(var(--spacing-base)*3)}.QB30YQ5gLgHsOrgm9bOQ{width:250px;padding:calc(var(--spacing-base)*2)}.V8URlB1Prtv2CTizzeAq{font-size:18px}@media(max-width: 599px){.KejfG7X8RocBsKZWeMAn{width:90%}.pYnoTr4PxGnSaVd5_gqt{margin-top:calc(var(--spacing-base)*3)}.pYnoTr4PxGnSaVd5_gqt>:first-child{margin-right:0;margin-bottom:var(--spacing-base)}}',""]),l.locals={status:"gK03w02IacTMrSadMCUJ",active:"VXV4B5iVCtuCH_FgulOY",spinner:"L_yqe3K1dZDh5i5ifHm5","firewall-subheading":"cP6ROfwVDM36IeRBMivP","brute-force-protection-subheading":"ajznzbFB3E_f7oVMr5uF","firewall-subheading__content":"z8EOctRoRZ5E8xBLTJRf","icon-popover":"dYU4PJaW_eAoTb7w45QA","upgrade-button":"lakM1wj3yabOiVUS_wu0","firewall-header":"AG9kiOND8VbHIr_b912L","stat-card-wrapper":"pYnoTr4PxGnSaVd5_gqt","popover-text":"QB30YQ5gLgHsOrgm9bOQ","loading-text":"V8URlB1Prtv2CTizzeAq","firewall-heading":"KejfG7X8RocBsKZWeMAn"};const g=l}}]);})();
