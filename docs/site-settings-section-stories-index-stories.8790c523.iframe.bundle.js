"use strict";(()=>{var he=Object.defineProperty;var Re=(m,s,n)=>s in m?he(m,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[s]=n;var Q=(m,s,n)=>(Re(m,typeof s!="symbol"?s+"":s,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3556],{"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(m,s,n)=>{n.d(s,{Z:()=>i});var c=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const i=l=>{const{dispatch:o}=(0,c.Z)();return l===void 0?o:o(l)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(m,s,n)=>{n.d(s,{Y:()=>p});var c=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function p(i){return c.Z.select(i)}},"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(m,s,n)=>{var y,j,P;n.r(s),n.d(s,{__namedExportsOrder:()=>R,_default:()=>E,default:()=>D});var c=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../components/components/layout/container/index.tsx"),l=n("../components/components/layout/col/index.tsx"),o=n("../components/components/text/index.tsx"),_=n("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),u=n("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),f=n("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),I=n("../../packages/videopress/src/client/admin/components/video-filter/index.tsx"),S=n("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts"),a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=_.__,U=T=>{let{videoPressVideosPrivateForSite:O,siteIsPrivate:A,siteType:C,onPrivacyChange:v}=T;const{canPerformAction:d}=(0,u.g)(),G=A&&C===S.mP,z=!d||G,K=G?h("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,a.jsxs)(i.Z,{horizontalSpacing:0,horizontalGap:0,children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)(o.ZP,{variant:"headline-small",mb:1,children:h("Settings","jetpack-videopress-pkg")})}),(0,a.jsx)(l.Z,{sm:12,md:12,lg:12,children:(0,a.jsx)(I.JC,{for:"settings-site-privacy",label:h("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:v,checked:O,disabled:z,disabledReason:K})})]})};U.displayName="SiteSettingsSection";const x=()=>{const{settings:T,onUpdate:O}=(0,f.C)(),{videoPressVideosPrivateForSite:A,siteIsPrivate:C,siteType:v}=T;return(0,a.jsx)(U,{videoPressVideosPrivateForSite:A,siteIsPrivate:C,siteType:v,onPrivacyChange:d=>{O({videoPressVideosPrivateForSite:d})}})};x.displayName="ConnectSiteSettingsSection";const L=U;var M=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import SettingsSection from '..';

export default {
	title: 'Packages/VideoPress/Site Settings',
	component: SettingsSection,
	argTypes: {},
};

const Template = args => <SettingsSection { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	onPrivacyChange: action( 'onPrivacyChange' ),
};
`,F={_default:{startLoc:{col:17,line:15},endLoc:{col:54,line:15},startBody:{col:17,line:15},endBody:{col:54,line:15}}};const D={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import SettingsSection from '..';
export default {
  title: 'Packages/VideoPress/Site Settings',
  component: SettingsSection,
  argTypes: {}
};
const Template = args => <SettingsSection {...args} />;
export const _default = Template.bind({});
_default.args = {
  onPrivacyChange: action('onPrivacyChange')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <SettingsSection {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:54,line:15},startBody:{col:17,line:15},endBody:{col:54,line:15}}}}},title:"Packages/VideoPress/Site Settings",component:L,argTypes:{}},N=T=>(0,a.jsx)(L,{...T});N.displayName="Template";const E=N.bind({});E.args={onPrivacyChange:(0,c.aD)("onPrivacyChange")},E.parameters={...E.parameters,docs:{...(y=E.parameters)==null?void 0:y.docs,source:{originalSource:"args => <SettingsSection {...args} />",...(P=(j=E.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const R=["_default"]},"../connection/components/use-connection/index.jsx":(m,s,n)=>{n.d(s,{Z:()=>u});var c=n("../api/index.jsx"),p=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../connection/state/store.jsx");const _=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},u=function(){let{registrationNonce:f=_.registrationNonce,apiRoot:I=_.apiRoot,apiNonce:S=_.apiNonce,redirectUri:a,autoTrigger:h,from:U,skipUserConnection:x}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:L,connectUser:M,refreshConnectedPlugins:F}=(0,p.Z)(o.t),D=(0,i.Z)(d=>d(o.t).getRegistrationError()),{siteIsRegistering:N,userIsConnecting:E,userConnectionData:R,connectedPlugins:y,connectionErrors:j,isRegistered:P,isUserConnected:T,hasConnectedOwner:O,isOfflineMode:A}=(0,i.Z)(d=>({siteIsRegistering:d(o.t).getSiteIsRegistering(),userIsConnecting:d(o.t).getUserIsConnecting(),userConnectionData:d(o.t).getUserConnectionData(),connectedPlugins:d(o.t).getConnectedPlugins(),connectionErrors:d(o.t).getConnectionErrors(),isOfflineMode:d(o.t).getIsOfflineMode(),...d(o.t).getConnectionStatus()})),C=()=>{if(x){if(a)return window.location=a,Promise.resolve(a)}else return M({from:U,redirectUri:a});return Promise.resolve()},v=d=>(d&&d.preventDefault(),P?C():L({registrationNonce:f,redirectUri:a}).then(()=>C()));return(0,l.useEffect)(()=>{c.ZP.setApiRoot(I),c.ZP.setApiNonce(S)},[I,S]),(0,l.useEffect)(()=>{h&&!N&&!E&&v()},[]),{handleRegisterSite:v,handleConnectUser:C,refreshConnectedPlugins:F,isRegistered:P,isUserConnected:T,siteIsRegistering:N,userIsConnecting:E,registrationError:D,userConnectionData:R,hasConnectedOwner:O,connectedPlugins:y,connectionErrors:j,isOfflineMode:A}}},"../connection/state/store.jsx":(m,s,n)=>{n.d(s,{t:()=>Z});var c=n("../api/index.jsx");const p="SET_CONNECTION_STATUS",i="SET_CONNECTION_STATUS_IS_FETCHING",l="FETCH_CONNECTION_STATUS",o="SET_SITE_IS_REGISTERING",_="SET_USER_IS_CONNECTING",u="SET_REGISTRATION_ERROR",f="CLEAR_REGISTRATION_ERROR",I="REGISTER_SITE",S="SET_AUTHORIZATION_URL",a="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",U="FETCH_AUTHORIZATION_URL",x="SET_CONNECTED_PLUGINS",L="REFRESH_CONNECTED_PLUGINS",M="SET_CONNECTION_ERRORS",F="SET_IS_OFFLINE_MODE",D=e=>({type:p,connectionStatus:e}),N=e=>({type:i,isFetching:e}),E=()=>({type:l}),R=e=>({type:o,isRegistering:e}),y=e=>({type:_,isConnecting:e}),j=()=>({type:h}),P=e=>({type:u,registrationError:e}),T=()=>({type:f}),O=e=>({type:S,authorizationUrl:e}),A=e=>({type:U,redirectUri:e}),C=e=>({type:x,connectedPlugins:e}),v=e=>({type:M,connectionErrors:e}),d=e=>({type:F,isOfflineMode:e});function G(){let{from:e,redirectFunc:t,redirectUri:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield y(!0),yield{type:a,from:e,redirectFunc:t,redirectUri:r}}()}function z(e){let{registrationNonce:t,redirectUri:r}=e;return function*(){yield T(),yield R(!0);try{const g=yield{type:I,registrationNonce:t,redirectUri:r};return yield D({isRegistered:!0}),yield O(g.authorizeUrl),yield R(!1),Promise.resolve(g)}catch(g){return yield P(g),yield R(!1),Promise.reject(g)}}()}const W={setConnectionStatus:D,setConnectionStatusIsFetching:N,fetchConnectionStatus:E,fetchAuthorizationUrl:A,setSiteIsRegistering:R,setUserIsConnecting:y,setRegistrationError:P,clearRegistrationError:T,setAuthorizationUrl:O,registerSite:z,connectUser:G,disconnectUserSuccess:j,setConnectedPlugins:C,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(r=>c.ZP.fetchConnectedPlugins().then(g=>{t(C(g)),r(g)}))},setConnectionErrors:v,setIsOfflineMode:d};var $=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const Z="jetpack-connection",q=e=>{let{registrationNonce:t,redirectUri:r}=e;return c.ZP.registerSite(t,r)},ee=(0,$.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:r,redirectFunc:g,redirectUri:w}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((H,Ce)=>{t(Z).getAuthorizationUrl(w).then(b=>{const fe=g||(Ie=>window.location.assign(Ie)),J=new URL(b);r&&J.searchParams.set("from",encodeURIComponent(r));const X=J.toString();fe(X),H(X)}).catch(b=>{Ce(b)})})}}),te={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return c.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:q,CONNECT_USER:ee};var V=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{...e,...t.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.connectedPlugins}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.isFetching}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return t.isRegistering}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.isConnecting}return e},ae=(e,t)=>{switch(t.type){case f:return!1;case u:return t.registrationError;default:return e}},ce=(e,t)=>{switch(t.type){case S:return t.authorizationUrl;default:return e}},de=(e,t)=>{switch(t.type){default:return e}},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.connectionErrors}return e},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return t.isConnecting}return e},ge=(0,V.UY)({connectionStatus:ne,connectionStatusIsFetching:oe,siteIsRegistering:re,userIsConnecting:ie,registrationError:ae,authorizationUrl:ce,userConnectionData:de,connectedPlugins:se,connectionErrors:ue,isOfflineMode:le});var me=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),pe=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var r=arguments.length,g=new Array(r>1?r-1:0),w=1;w<r;w++)g[w-1]=arguments[w];const H=(0,me.Y)(Z).hasFinishedResolution("getAuthorizationUrl",g);return t&&!H&&(0,pe.W)(Z).finishResolution("getAuthorizationUrl",g),t},*fulfill(e){const t=yield W.fetchAuthorizationUrl(e);yield W.setAuthorizationUrl(t.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,r;return(r=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:r.wpcomUser},getBlogId:e=>{var t,r;return(r=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:r.blogId}}};var Se=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const B=class{static mayBeInit(t,r){B.store===null&&(B.store=(0,Se.Z)(t,r),(0,V.z2)(B.store))}};let k=B;Q(k,"store",null);const Te=k,Y=window.JP_CONNECTION_INITIAL_STATE;Y||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Te.mayBeInit(Z,{__experimentalUseThunks:!0,reducer:ge,actions:W,selectors:Ee,resolvers:_e,controls:te,initialState:Y||{}})},"../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts":(m,s,n)=>{n.d(s,{RB:()=>i,mP:()=>c});const c="atomic",p="simple",i="jetpack"},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(m,s,n)=>{n.d(s,{g:()=>p});var c=n("../connection/components/use-connection/index.jsx");const p=()=>{const{isRegistered:i,hasConnectedOwner:l,isUserConnected:o}=(0,c.Z)();return{isRegistered:i,hasConnectedOwner:l,isUserConnected:o,canPerformAction:i&&l&&o}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(m,s,n)=>{n.d(s,{C:()=>o});var c=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),p=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=n("../../packages/videopress/src/client/state/index.js"),l=n("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts");const o=()=>{var f,I,S;const _=(0,c.Z)(i.tT),u=(0,p.Z)(a=>a(i.tT).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(f=u==null?void 0:u.videoPressVideosPrivateForSite)!=null?f:!1,siteIsPrivate:(I=u==null?void 0:u.siteIsPrivate)!=null?I:!1,siteType:(S=u==null?void 0:u.siteType)!=null?S:l.RB},onUpdate:a=>_.updateVideoPressSettings(a)}}}}]);})();
