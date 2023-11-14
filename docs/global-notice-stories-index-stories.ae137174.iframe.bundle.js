"use strict";(()=>{var fe=Object.defineProperty;var Oe=(d,i,s)=>i in d?fe(d,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[i]=s;var $=(d,i,s)=>(Oe(d,typeof i!="symbol"?i+"":i,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2920],{"../../packages/videopress/src/client/admin/components/global-notice/stories/index.stories.tsx":(d,i,s)=>{var U,r,z;s.r(i),s.d(i,{__namedExportsOrder:()=>R,_default:()=>p,default:()=>B});var u=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),I=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=s("../connection/components/use-connection/index.jsx"),T=s("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/notice/index.js"),t=s("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),a=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),h=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),v=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),j=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),C=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=s.n(C),P=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=s.n(P),S=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/global-notice/styles.module.scss"),b={};b.insert="head",b.singleton=!1;var L=D()(S.Z,b);const E=S.Z.locals||{};var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=t.__,A=c=>{switch(c){case"error":return a.Z;case"warning":return a.Z;case"info":return h.Z;case"success":return v.Z;default:return a.Z}};function l({status:c="error",isDismissible:F=!1,className:N,children:G,actions:K,onRemove:y}){const H=g()(N,E.notice,E[`is-${c}`]);return(0,_.jsxs)(T.Z,{status:c,isDismissible:F,onRemove:y,className:H,actions:K,children:[(0,_.jsx)(j.Z,{icon:A(c),className:E.icon}),(0,_.jsx)("div",{className:E.message,children:G})]})}l.displayName="GlobalNotice";const w=()=>{const{adminUri:c,registrationNonce:F}=window.jetpackVideoPressInitialState,{hasConnectedOwner:N,handleRegisterSite:G}=(0,m.Z)({redirectUri:c,from:"jetpack-videopress",registrationNonce:F});return N?null:(0,_.jsx)(l,{addConnectUserLink:!0,actions:[{label:f("Connect your user account to fix this","jetpack-videopress-pkg"),onClick:G,variant:"link",noDefaultClasses:!0}],children:f("Some actions need a user connection to WordPress.com to be able to work","jetpack-videopress-pkg")})};w.displayName="NeedUserConnectionGlobalNotice";try{globalnotice.displayName="globalnotice",globalnotice.__docgenInfo={description:"VideoPress Logo component",displayName:"globalnotice",props:{status:{defaultValue:{value:"error"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},isDismissible:{defaultValue:{value:"false"},description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"{ label: string; onClick: () => void; variant: string; noDefaultClasses: boolean; }[]"}},addConnectUserLink:{defaultValue:null,description:"",name:"addConnectUserLink",required:!1,type:{name:"string | boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/global-notice/index.tsx#globalnotice"]={docgenInfo:globalnotice.__docgenInfo,name:"globalnotice",path:"../../packages/videopress/src/client/admin/components/global-notice/index.tsx#globalnotice"})}catch(c){}var k=`/**
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
`,x={_default:{startLoc:{col:17,line:19},endLoc:{col:51,line:19},startBody:{col:17,line:19},endBody:{col:51,line:19}}};const B={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:51,line:19},startBody:{col:17,line:19},endBody:{col:51,line:19}}}}},title:"Packages/VideoPress/GlobalNotice",component:l,argTypes:{status:{control:{type:"select"},options:["success","info","warning","error"]}}},O=c=>(0,_.jsx)(l,{...c});O.displayName="Template";const p=O.bind({});p.args={children:"Typical error message",isDismissible:!0,status:"error",onRemove:(0,u.aD)("onRemove")},p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:"args => <GlobalNotice {...args} />",...(z=(r=p.parameters)==null?void 0:r.docs)==null?void 0:z.source}}};const R=["_default"]},"../connection/components/use-connection/index.jsx":(d,i,s)=>{s.d(i,{Z:()=>h});var u=s("../api/index.jsx"),I=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),m=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),T=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=s("../connection/state/store.jsx");const a=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},h=({registrationNonce:v=a.registrationNonce,apiRoot:j=a.apiRoot,apiNonce:C=a.apiNonce,redirectUri:g,autoTrigger:P,from:D,skipUserConnection:S}={})=>{const{registerSite:b,connectUser:L,refreshConnectedPlugins:E}=(0,I.Z)(t.t),_=(0,m.Z)(r=>r(t.t).getRegistrationError()),{siteIsRegistering:f,userIsConnecting:A,userConnectionData:l,connectedPlugins:w,connectionErrors:k,isRegistered:x,isUserConnected:B,hasConnectedOwner:O,isOfflineMode:p}=(0,m.Z)(r=>({siteIsRegistering:r(t.t).getSiteIsRegistering(),userIsConnecting:r(t.t).getUserIsConnecting(),userConnectionData:r(t.t).getUserConnectionData(),connectedPlugins:r(t.t).getConnectedPlugins(),connectionErrors:r(t.t).getConnectionErrors(),isOfflineMode:r(t.t).getIsOfflineMode(),...r(t.t).getConnectionStatus()})),R=()=>{if(S){if(g)return window.location=g,Promise.resolve(g)}else return L({from:D,redirectUri:g});return Promise.resolve()},U=r=>(r&&r.preventDefault(),x?R():b({registrationNonce:v,redirectUri:g}).then(()=>R()));return(0,T.useEffect)(()=>{u.ZP.setApiRoot(j),u.ZP.setApiNonce(C)},[j,C]),(0,T.useEffect)(()=>{P&&!f&&!A&&U()},[]),{handleRegisterSite:U,handleConnectUser:R,refreshConnectedPlugins:E,isRegistered:x,isUserConnected:B,siteIsRegistering:f,userIsConnecting:A,registrationError:_,userConnectionData:l,hasConnectedOwner:O,connectedPlugins:w,connectionErrors:k,isOfflineMode:p}}},"../connection/state/store.jsx":(d,i,s)=>{s.d(i,{t:()=>y});var u=s("../api/index.jsx");const I="SET_CONNECTION_STATUS",m="SET_CONNECTION_STATUS_IS_FETCHING",T="FETCH_CONNECTION_STATUS",t="SET_SITE_IS_REGISTERING",a="SET_USER_IS_CONNECTING",h="SET_REGISTRATION_ERROR",v="CLEAR_REGISTRATION_ERROR",j="REGISTER_SITE",C="SET_AUTHORIZATION_URL",g="CONNECT_USER",P="DISCONNECT_USER_SUCCESS",D="FETCH_AUTHORIZATION_URL",S="SET_CONNECTED_PLUGINS",b="REFRESH_CONNECTED_PLUGINS",L="SET_CONNECTION_ERRORS",E="SET_IS_OFFLINE_MODE",_=e=>({type:I,connectionStatus:e}),f=e=>({type:m,isFetching:e}),A=()=>({type:T}),l=e=>({type:t,isRegistering:e}),w=e=>({type:a,isConnecting:e}),k=()=>({type:P}),x=e=>({type:h,registrationError:e}),B=()=>({type:v}),O=e=>({type:C,authorizationUrl:e}),p=e=>({type:D,redirectUri:e}),R=e=>({type:S,connectedPlugins:e}),U=e=>({type:L,connectionErrors:e}),r=e=>({type:E,isOfflineMode:e});function*z({from:e,redirectFunc:n,redirectUri:o}={}){yield w(!0),yield{type:g,from:e,redirectFunc:n,redirectUri:o}}function*c({registrationNonce:e,redirectUri:n}){yield B(),yield l(!0);try{const o=yield{type:j,registrationNonce:e,redirectUri:n};return yield _({isRegistered:!0}),yield O(o.authorizeUrl),yield l(!1),Promise.resolve(o)}catch(o){return yield x(o),yield l(!1),Promise.reject(o)}}const N={setConnectionStatus:_,setConnectionStatusIsFetching:f,fetchConnectionStatus:A,fetchAuthorizationUrl:p,setSiteIsRegistering:l,setUserIsConnecting:w,setRegistrationError:x,clearRegistrationError:B,setAuthorizationUrl:O,registerSite:c,connectUser:z,disconnectUserSuccess:k,setConnectedPlugins:R,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(n=>u.ZP.fetchConnectedPlugins().then(o=>{e(R(o)),n(o)})),setConnectionErrors:U,setIsOfflineMode:r};var G=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const y="jetpack-connection",H=({registrationNonce:e,redirectUri:n})=>u.ZP.registerSite(e,n),q=(0,G.R)(({resolveSelect:e})=>({from:n,redirectFunc:o,redirectUri:W}={})=>new Promise((Re,Ie)=>{e(y).getAuthorizationUrl(W).then(V=>{const Ce=o||(Se=>window.location.assign(Se)),J=new URL(V);n&&J.searchParams.set("from",encodeURIComponent(n));const Q=J.toString();Ce(Q),Re(Q)}).catch(V=>{Ie(V)})})),ee={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>u.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:H,CONNECT_USER:q};var Y=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ne=(e={},n)=>{switch(n.type){case I:return{...e,...n.connectionStatus};case P:return{...e,isUserConnected:!1}}return e},se=(e={},n)=>{switch(n.type){case S:return n.connectedPlugins}return e},oe=(e=!1,n)=>{switch(n.type){case m:return n.isFetching}return e},te=(e=!1,n)=>{switch(n.type){case t:return n.isRegistering}return e},re=(e=!1,n)=>{switch(n.type){case a:return n.isConnecting}return e},ie=(e,n)=>{switch(n.type){case v:return!1;case h:return n.registrationError;default:return e}},ae=(e,n)=>{switch(n.type){case C:return n.authorizationUrl;default:return e}},ce=(e,n)=>{switch(n.type){default:return e}},le=(e={},n)=>{switch(n.type){case L:return n.connectionErrors}return e},de=(e=!1,n)=>{switch(n.type){case E:return n.isConnecting}return e},ue=(0,Y.UY)({connectionStatus:ne,connectionStatusIsFetching:oe,siteIsRegistering:te,userIsConnecting:re,registrationError:ie,authorizationUrl:ae,userConnectionData:ce,connectedPlugins:se,connectionErrors:le,isOfflineMode:de});var _e=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),pe=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const me={...{getAuthorizationUrl:{isFulfilled:(e,...n)=>{const o=!!e.authorizationUrl,W=(0,_e.Y)(y).hasFinishedResolution("getAuthorizationUrl",n);return o&&!W&&(0,pe.W)(y).finishResolution("getAuthorizationUrl",n),o},*fulfill(e){const n=yield N.fetchAuthorizationUrl(e);yield N.setAuthorizationUrl(n.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,o;return(o=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:o.wpcomUser},getBlogId:e=>{var n,o;return(o=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:o.blogId}}};var Ee=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const M=class{static mayBeInit(n,o){M.store===null&&(M.store=(0,Ee.Z)(n,o),(0,Y.z2)(M.store))}};let Z=M;$(Z,"store",null);const Te=Z,X=window.JP_CONNECTION_INITIAL_STATE;X||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Te.mayBeInit(y,{__experimentalUseThunks:!0,reducer:ue,actions:N,selectors:ge,resolvers:me,controls:ee,initialState:X||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/global-notice/styles.module.scss":(d,i,s)=>{s.d(i,{Z:()=>a});var u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),I=s.n(u),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=s.n(m),t=T()(I());t.push([d.id,".O4U2IigRCTI0aU8BhBRn{margin:0;font-size:16px}.O4U2IigRCTI0aU8BhBRn.is-error{background-color:var(--jp-red-0)}.O4U2IigRCTI0aU8BhBRn .components-notice__content{display:flex;align-items:center;margin:0;padding:12px 4px}.O4U2IigRCTI0aU8BhBRn .components-notice__content>svg{fill:var(--jp-red-60)}.O4U2IigRCTI0aU8BhBRn .is-link{color:var(--jp-black);font-size:16px;font-weight:600}.O4U2IigRCTI0aU8BhBRn .components-notice__dismiss{align-self:center}.O4U2IigRCTI0aU8BhBRn.p3PMX1cbVKnzwQByPs8r{color:var(--jp-yellow-40)}.O4U2IigRCTI0aU8BhBRn.p3PMX1cbVKnzwQByPs8r .MWYzw6ab74IUviPtFAyo{fill:var(--jp-yellow-40)}.O4U2IigRCTI0aU8BhBRn.SG0xptj_jnXuWDvY2RTG{color:var(--jp-blue-40)}.O4U2IigRCTI0aU8BhBRn.SG0xptj_jnXuWDvY2RTG .MWYzw6ab74IUviPtFAyo{fill:var(--jp-blue-40)}.O4U2IigRCTI0aU8BhBRn.Y8HEO3rLiVzm8xR41_yH{color:var(--jp-green)}.O4U2IigRCTI0aU8BhBRn.Y8HEO3rLiVzm8xR41_yH .MWYzw6ab74IUviPtFAyo{fill:var(--jp-green)}.O4U2IigRCTI0aU8BhBRn .kpYmL80bVc4zklSKLsBq{margin-left:8px}",""]),t.locals={notice:"O4U2IigRCTI0aU8BhBRn","is-warning":"p3PMX1cbVKnzwQByPs8r",icon:"MWYzw6ab74IUviPtFAyo","is-info":"SG0xptj_jnXuWDvY2RTG","is-success":"Y8HEO3rLiVzm8xR41_yH",message:"kpYmL80bVc4zklSKLsBq"};const a=t}}]);})();
