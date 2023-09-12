"use strict";(()=>{var Ue=Object.defineProperty;var Oe=(d,i,t)=>i in d?Ue(d,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[i]=t;var ne=(d,i,t)=>(Oe(d,typeof i!="symbol"?i+"":i,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2920],{"../../packages/videopress/src/client/admin/components/global-notice/stories/index.stories.tsx":(d,i,t)=>{var N,r,H;t.r(i),t.d(i,{__namedExportsOrder:()=>R,_default:()=>p,default:()=>D});var u=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),I=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../connection/components/use-connection/index.jsx"),T=t("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/notice/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/warning.js"),v=t("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/info.js"),j=t("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js"),P=t("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js"),C=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),E=t.n(C),b=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=t.n(b),S=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/global-notice/styles.module.scss"),A={};A.insert="head",A.singleton=!1;var z=M()(S.Z,A);const f=S.Z.locals||{};var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const U=o.__,w=_=>{switch(_){case"error":return c.Z;case"warning":return c.Z;case"info":return v.Z;case"success":return j.Z;default:return c.Z}};function l(_){let{status:L="error",isDismissible:h=!1,className:k,children:J,actions:y,onRemove:V}=_;const K=E()(k,f.notice,f[`is-${L}`]);return(0,m.jsxs)(T.Z,{status:L,isDismissible:h,onRemove:V,className:K,actions:y,children:[(0,m.jsx)(P.Z,{icon:w(L),className:f.icon}),(0,m.jsx)("div",{className:f.message,children:J})]})}l.displayName="GlobalNotice";const x=()=>{const{adminUri:_,registrationNonce:L}=window.jetpackVideoPressInitialState,{hasConnectedOwner:h,handleRegisterSite:k}=(0,g.Z)({redirectUri:_,from:"jetpack-videopress",registrationNonce:L});return h?null:(0,m.jsx)(l,{addConnectUserLink:!0,actions:[{label:U("Connect your user account to fix this","jetpack-videopress-pkg"),onClick:k,variant:"link",noDefaultClasses:!0}],children:U("Some actions need a user connection to WordPress.com to be able to work","jetpack-videopress-pkg")})};x.displayName="NeedUserConnectionGlobalNotice";try{globalnotice.displayName="globalnotice",globalnotice.__docgenInfo={description:"VideoPress Logo component",displayName:"globalnotice",props:{status:{defaultValue:{value:"error"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},isDismissible:{defaultValue:{value:"false"},description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"{ label: string; onClick: () => void; variant: string; noDefaultClasses: boolean; }[]"}},addConnectUserLink:{defaultValue:null,description:"",name:"addConnectUserLink",required:!1,type:{name:"string | boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/global-notice/index.tsx#globalnotice"]={docgenInfo:globalnotice.__docgenInfo,name:"globalnotice",path:"../../packages/videopress/src/client/admin/components/global-notice/index.tsx#globalnotice"})}catch(_){}var Z=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
import GlobalNotice from '..';

export default {
	title: 'Packages/VideoPress/GlobalNotice',
	component: GlobalNotice,
	argTypes: {
		status: {
			control: {
				type: 'select',
			},
			options: [ 'success', 'info', 'warning', 'error' ],
		},
	},
};

const Template = args => <GlobalNotice { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	children: 'Typical error message',
	isDismissible: true,
	status: 'error',

	onRemove: action( 'onRemove' ),
};
`,B={_default:{startLoc:{col:17,line:19},endLoc:{col:51,line:19},startBody:{col:17,line:19},endBody:{col:51,line:19}}};const D={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
import GlobalNotice from '..';
export default {
  title: 'Packages/VideoPress/GlobalNotice',
  component: GlobalNotice,
  argTypes: {
    status: {
      control: {
        type: 'select'
      },
      options: ['success', 'info', 'warning', 'error']
    }
  }
};
const Template = args => <GlobalNotice {...args} />;
export const _default = Template.bind({});
_default.args = {
  children: 'Typical error message',
  isDismissible: true,
  status: 'error',
  onRemove: action('onRemove')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <GlobalNotice {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:51,line:19},startBody:{col:17,line:19},endBody:{col:51,line:19}}}}},title:"Packages/VideoPress/GlobalNotice",component:l,argTypes:{status:{control:{type:"select"},options:["success","info","warning","error"]}}},O=_=>(0,m.jsx)(l,{..._});O.displayName="Template";const p=O.bind({});p.args={children:"Typical error message",isDismissible:!0,status:"error",onRemove:(0,u.aD)("onRemove")},p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"args => <GlobalNotice {...args} />",...(H=(r=p.parameters)==null?void 0:r.docs)==null?void 0:H.source}}};const R=["_default"]},"../connection/components/use-connection/index.jsx":(d,i,t)=>{t.d(i,{Z:()=>v});var u=t("../api/index.jsx"),I=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),T=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../connection/state/store.jsx");const c=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},v=function(){let{registrationNonce:j=c.registrationNonce,apiRoot:P=c.apiRoot,apiNonce:C=c.apiNonce,redirectUri:E,autoTrigger:b,from:M,skipUserConnection:S}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:A,connectUser:z,refreshConnectedPlugins:f}=(0,I.Z)(o.t),m=(0,g.Z)(r=>r(o.t).getRegistrationError()),{siteIsRegistering:U,userIsConnecting:w,userConnectionData:l,connectedPlugins:x,connectionErrors:Z,isRegistered:B,isUserConnected:D,hasConnectedOwner:O,isOfflineMode:p}=(0,g.Z)(r=>({siteIsRegistering:r(o.t).getSiteIsRegistering(),userIsConnecting:r(o.t).getUserIsConnecting(),userConnectionData:r(o.t).getUserConnectionData(),connectedPlugins:r(o.t).getConnectedPlugins(),connectionErrors:r(o.t).getConnectionErrors(),isOfflineMode:r(o.t).getIsOfflineMode(),...r(o.t).getConnectionStatus()})),R=()=>{if(S){if(E)return window.location=E,Promise.resolve(E)}else return z({from:M,redirectUri:E});return Promise.resolve()},N=r=>(r&&r.preventDefault(),B?R():A({registrationNonce:j,redirectUri:E}).then(()=>R()));return(0,T.useEffect)(()=>{u.ZP.setApiRoot(P),u.ZP.setApiNonce(C)},[P,C]),(0,T.useEffect)(()=>{b&&!U&&!w&&N()},[]),{handleRegisterSite:N,handleConnectUser:R,refreshConnectedPlugins:f,isRegistered:B,isUserConnected:D,siteIsRegistering:U,userIsConnecting:w,registrationError:m,userConnectionData:l,hasConnectedOwner:O,connectedPlugins:x,connectionErrors:Z,isOfflineMode:p}}},"../connection/state/store.jsx":(d,i,t)=>{t.d(i,{t:()=>y});var u=t("../api/index.jsx");const I="SET_CONNECTION_STATUS",g="SET_CONNECTION_STATUS_IS_FETCHING",T="FETCH_CONNECTION_STATUS",o="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",v="SET_REGISTRATION_ERROR",j="CLEAR_REGISTRATION_ERROR",P="REGISTER_SITE",C="SET_AUTHORIZATION_URL",E="CONNECT_USER",b="DISCONNECT_USER_SUCCESS",M="FETCH_AUTHORIZATION_URL",S="SET_CONNECTED_PLUGINS",A="REFRESH_CONNECTED_PLUGINS",z="SET_CONNECTION_ERRORS",f="SET_IS_OFFLINE_MODE",m=e=>({type:I,connectionStatus:e}),U=e=>({type:g,isFetching:e}),w=()=>({type:T}),l=e=>({type:o,isRegistering:e}),x=e=>({type:c,isConnecting:e}),Z=()=>({type:b}),B=e=>({type:v,registrationError:e}),D=()=>({type:j}),O=e=>({type:C,authorizationUrl:e}),p=e=>({type:M,redirectUri:e}),R=e=>({type:S,connectedPlugins:e}),N=e=>({type:z,connectionErrors:e}),r=e=>({type:f,isOfflineMode:e});function H(){let{from:e,redirectFunc:n,redirectUri:s}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield x(!0),yield{type:E,from:e,redirectFunc:n,redirectUri:s}}()}function _(e){let{registrationNonce:n,redirectUri:s}=e;return function*(){yield D(),yield l(!0);try{const a=yield{type:P,registrationNonce:n,redirectUri:s};return yield m({isRegistered:!0}),yield O(a.authorizeUrl),yield l(!1),Promise.resolve(a)}catch(a){return yield B(a),yield l(!1),Promise.reject(a)}}()}const h={setConnectionStatus:m,setConnectionStatusIsFetching:U,fetchConnectionStatus:w,fetchAuthorizationUrl:p,setSiteIsRegistering:l,setUserIsConnecting:x,setRegistrationError:B,clearRegistrationError:D,setAuthorizationUrl:O,registerSite:_,connectUser:H,disconnectUserSuccess:Z,setConnectedPlugins:R,refreshConnectedPlugins:()=>async e=>{let{dispatch:n}=e;return await new Promise(s=>u.ZP.fetchConnectedPlugins().then(a=>{n(R(a)),s(a)}))},setConnectionErrors:N,setIsOfflineMode:r};var k=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const y="jetpack-connection",V=e=>{let{registrationNonce:n,redirectUri:s}=e;return u.ZP.registerSite(n,s)},K=(0,k.R)(e=>{let{resolveSelect:n}=e;return function(){let{from:s,redirectFunc:a,redirectUri:G}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((Y,Ie)=>{n(y).getAuthorizationUrl(G).then(X=>{const Ce=a||(Se=>window.location.assign(Se)),q=new URL(X);s&&q.searchParams.set("from",encodeURIComponent(s));const ee=q.toString();Ce(ee),Y(ee)}).catch(X=>{Ie(X)})})}}),te={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:n}=e;return u.ZP.fetchAuthorizationUrl(n)},REGISTER_SITE:V,CONNECT_USER:K};var Q=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I:return{...e,...n.connectionStatus};case b:return{...e,isUserConnected:!1}}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S:return n.connectedPlugins}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return n.isFetching}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return n.isRegistering}return e},ae=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c:return n.isConnecting}return e},ce=(e,n)=>{switch(n.type){case j:return!1;case v:return n.registrationError;default:return e}},le=(e,n)=>{switch(n.type){case C:return n.authorizationUrl;default:return e}},de=(e,n)=>{switch(n.type){default:return e}},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case z:return n.connectionErrors}return e},me=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return n.isConnecting}return e},pe=(0,Q.UY)({connectionStatus:se,connectionStatusIsFetching:re,siteIsRegistering:ie,userIsConnecting:ae,registrationError:ce,authorizationUrl:le,userConnectionData:de,connectedPlugins:oe,connectionErrors:ue,isOfflineMode:me});var _e=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ge=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const Ee={...{getAuthorizationUrl:{isFulfilled:function(e){const n=!!e.authorizationUrl;for(var s=arguments.length,a=new Array(s>1?s-1:0),G=1;G<s;G++)a[G-1]=arguments[G];const Y=(0,_e.Y)(y).hasFinishedResolution("getAuthorizationUrl",a);return n&&!Y&&(0,ge.W)(y).finishResolution("getAuthorizationUrl",a),n},*fulfill(e){const n=yield h.fetchAuthorizationUrl(e);yield h.setAuthorizationUrl(n.authorizeUrl)}}}},fe={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,s;return(s=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:s.wpcomUser},getBlogId:e=>{var n,s;return(s=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:s.blogId}}};var Te=t("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const F=class{static mayBeInit(n,s){F.store===null&&(F.store=(0,Te.Z)(n,s),(0,Q.z2)(F.store))}};let W=F;ne(W,"store",null);const Re=W,$=window.JP_CONNECTION_INITIAL_STATE;$||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Re.mayBeInit(y,{__experimentalUseThunks:!0,reducer:pe,actions:h,selectors:fe,resolvers:Ee,controls:te,initialState:$||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/global-notice/styles.module.scss":(d,i,t)=>{t.d(i,{Z:()=>c});var u=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),I=t.n(u),g=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=t.n(g),o=T()(I());o.push([d.id,".O4U2IigRCTI0aU8BhBRn{margin:0;font-size:16px}.O4U2IigRCTI0aU8BhBRn.is-error{background-color:var(--jp-red-0)}.O4U2IigRCTI0aU8BhBRn .components-notice__content{display:flex;align-items:center;margin:0;padding:12px 4px}.O4U2IigRCTI0aU8BhBRn .components-notice__content>svg{fill:var(--jp-red-60)}.O4U2IigRCTI0aU8BhBRn .is-link{color:var(--jp-black);font-size:16px;font-weight:600}.O4U2IigRCTI0aU8BhBRn .components-notice__dismiss{align-self:center}.O4U2IigRCTI0aU8BhBRn.p3PMX1cbVKnzwQByPs8r{color:var(--jp-yellow-40)}.O4U2IigRCTI0aU8BhBRn.p3PMX1cbVKnzwQByPs8r .MWYzw6ab74IUviPtFAyo{fill:var(--jp-yellow-40)}.O4U2IigRCTI0aU8BhBRn.SG0xptj_jnXuWDvY2RTG{color:var(--jp-blue-40)}.O4U2IigRCTI0aU8BhBRn.SG0xptj_jnXuWDvY2RTG .MWYzw6ab74IUviPtFAyo{fill:var(--jp-blue-40)}.O4U2IigRCTI0aU8BhBRn.Y8HEO3rLiVzm8xR41_yH{color:var(--jp-green)}.O4U2IigRCTI0aU8BhBRn.Y8HEO3rLiVzm8xR41_yH .MWYzw6ab74IUviPtFAyo{fill:var(--jp-green)}.O4U2IigRCTI0aU8BhBRn .kpYmL80bVc4zklSKLsBq{margin-left:8px}",""]),o.locals={notice:"O4U2IigRCTI0aU8BhBRn","is-warning":"p3PMX1cbVKnzwQByPs8r",icon:"MWYzw6ab74IUviPtFAyo","is-info":"SG0xptj_jnXuWDvY2RTG","is-success":"Y8HEO3rLiVzm8xR41_yH",message:"kpYmL80bVc4zklSKLsBq"};const c=o}}]);})();
