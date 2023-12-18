"use strict";(()=>{var ye=Object.defineProperty;var fe=(_,n,s)=>n in _?ye(_,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):_[n]=s;var Z=(_,n,s)=>(fe(_,typeof n!="symbol"?n+"":n,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(_,n,s)=>{var h,A,f,R,O,N;s.r(n),s.d(n,{CustomHeader:()=>i,__namedExportsOrder:()=>p,_default:()=>m,default:()=>y});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../components/components/jetpack-logo/index.tsx"),u=s("../components/components/text/index.tsx"),r=s("../components/components/admin-page/index.tsx"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=s.n(a),E=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),d={};d.insert="head",d.singleton=!1;var w=g()(E.Z,d);const j=E.Z.locals||{};var I=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),S=`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,T={_default:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}},CustomHeader:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}}};const y={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,locationsMap:{default:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}},"custom-header":{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}}}}},title:"JS Packages/Components/Admin Page",component:r.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},C=U=>(0,I.jsx)(r.Z,{...U});C.displayName="Template";const m=C.bind({}),i=C.bind({});i.args={header:(0,I.jsxs)("div",{className:j["custom-header"],children:[(0,I.jsx)(c.Z,{height:40}),(0,I.jsx)(u.ZP,{className:j["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AdminPage {...args} />",...(f=(A=m.parameters)==null?void 0:A.docs)==null?void 0:f.source}}},i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AdminPage {...args} />",...(N=(O=i.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const p=["_default","CustomHeader"]},"../connection/state/store.jsx":(_,n,s)=>{s.d(n,{t:()=>x});var l=s("../api/index.jsx");const c="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",r="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",g="SET_USER_IS_CONNECTING",E="SET_REGISTRATION_ERROR",d="CLEAR_REGISTRATION_ERROR",w="REGISTER_SITE",j="SET_AUTHORIZATION_URL",I="CONNECT_USER",S="DISCONNECT_USER_SUCCESS",T="FETCH_AUTHORIZATION_URL",y="SET_CONNECTED_PLUGINS",C="REFRESH_CONNECTED_PLUGINS",m="SET_CONNECTION_ERRORS",i="SET_IS_OFFLINE_MODE",p=e=>({type:c,connectionStatus:e}),h=e=>({type:u,isFetching:e}),A=()=>({type:r}),f=e=>({type:a,isRegistering:e}),R=e=>({type:g,isConnecting:e}),O=()=>({type:S}),N=e=>({type:E,registrationError:e}),U=()=>({type:d}),D=e=>({type:j,authorizationUrl:e}),z=e=>({type:T,redirectUri:e}),M=e=>({type:y,connectedPlugins:e}),K=e=>({type:m,connectionErrors:e}),J=e=>({type:i,isOfflineMode:e});function*W({from:e,redirectFunc:t,redirectUri:o}={}){yield R(!0),yield{type:I,from:e,redirectFunc:t,redirectUri:o}}function*V({registrationNonce:e,redirectUri:t}){yield U(),yield f(!0);try{const o=yield{type:w,registrationNonce:e,redirectUri:t};return yield p({isRegistered:!0}),yield D(o.authorizeUrl),yield f(!1),Promise.resolve(o)}catch(o){return yield N(o),yield f(!1),Promise.reject(o)}}const v={setConnectionStatus:p,setConnectionStatusIsFetching:h,fetchConnectionStatus:A,fetchAuthorizationUrl:z,setSiteIsRegistering:f,setUserIsConnecting:R,setRegistrationError:N,clearRegistrationError:U,setAuthorizationUrl:D,registerSite:V,connectUser:W,disconnectUserSuccess:O,setConnectedPlugins:M,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>l.ZP.fetchConnectedPlugins().then(o=>{e(M(o)),t(o)})),setConnectionErrors:K,setIsOfflineMode:J};var Y=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const x="jetpack-connection",X=({registrationNonce:e,redirectUri:t})=>l.ZP.registerSite(e,t),Q=(0,Y.R)(({resolveSelect:e})=>({from:t,redirectFunc:o,redirectUri:L}={})=>new Promise((ge,Se)=>{e(x).getAuthorizationUrl(L).then(b=>{const Te=o||(Ce=>window.location.assign(Ce)),H=new URL(b);t&&H.searchParams.set("from",encodeURIComponent(t));const G=H.toString();Te(G),ge(G)}).catch(b=>{Se(b)})})),$={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>l.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:X,CONNECT_USER:Q};var B=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(e={},t)=>{switch(t.type){case c:return{...e,...t.connectionStatus};case S:return{...e,isUserConnected:!1}}return e},ee=(e={},t)=>{switch(t.type){case y:return t.connectedPlugins}return e},te=(e=!1,t)=>{switch(t.type){case u:return t.isFetching}return e},se=(e=!1,t)=>{switch(t.type){case a:return t.isRegistering}return e},oe=(e=!1,t)=>{switch(t.type){case g:return t.isConnecting}return e},ne=(e,t)=>{switch(t.type){case d:return!1;case E:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case j:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=(e={},t)=>{switch(t.type){case m:return t.connectionErrors}return e},ce=(e=!1,t)=>{switch(t.type){case i:return t.isConnecting}return e},le=(0,B.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:se,userIsConnecting:oe,registrationError:ne,authorizationUrl:re,userConnectionData:ae,connectedPlugins:ee,connectionErrors:de,isOfflineMode:ce});var ie=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const ue={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const o=!!e.authorizationUrl,L=(0,ie.Y)(x).hasFinishedResolution("getAuthorizationUrl",t);return o&&!L&&(0,_e.W)(x).finishResolution("getAuthorizationUrl",t),o},*fulfill(e){const t=yield v.fetchAuthorizationUrl(e);yield v.setAuthorizationUrl(t.authorizeUrl)}}}},me={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.wpcomUser},getBlogId:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.blogId}}};var pe=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const P=class{static mayBeInit(t,o){P.store===null&&(P.store=(0,pe.Z)(t,o),(0,B.z2)(P.store))}};let k=P;Z(k,"store",null);const Ee=k,F=window.JP_CONNECTION_INITIAL_STATE;F||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(x,{__experimentalUseThunks:!0,reducer:le,actions:v,selectors:me,resolvers:ue,controls:$,initialState:F||{}})},"../components/components/layout/use-breakpoint-match/index.ts":(_,n,s)=>{s.d(n,{Z:()=>I});var l=s("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=s.n(c),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var g=u()(r.Z,a);const E=r.Z.locals||{},d=["sm","md","lg"],w=(S,T,y)=>{const C=d.indexOf(S),m=C+1,i=T.includes("=");let p=[];return T.startsWith("<")&&(p=d.slice(0,i?m:C)),T.startsWith(">")&&(p=d.slice(i?C:m)),p!=null&&p.length?p.some(h=>y[h]):y[S]},I=(S,T)=>{const y=Array.isArray(S)?S:[S],C=Array.isArray(T)?T:[T],[m,i,p]=d,h=(0,l.Z)(E[m]),A=(0,l.Z)(E[i]),f=(0,l.Z)(E[p]),R={sm:h,md:A,lg:f};return y.map((O,N)=>{const U=C[N];return U?w(O,U,R):R[O]})}},"../components/tools/jp-redirect/index.ts":(_,n,s)=>{s.d(n,{Z:()=>l});function l(c,u={}){var E;const r={};let a;if(typeof window!="undefined"&&(a=(E=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:E.calypsoEnv),c.search("https://")===0){const d=new URL(c);c=`https://${d.host}${d.pathname}`,r.url=encodeURIComponent(c)}else r.source=encodeURIComponent(c);for(const d in u)r[d]=encodeURIComponent(u[d]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(r.site=jetpack_redirects.currentSiteRawUrl),a&&(r.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(r).map(d=>d+"="+r[d]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(_,n,s)=>{s.d(n,{Z:()=>g});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(u),a=r()(c());a.push([_.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),a.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const g=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(_,n,s)=>{s.d(n,{Z:()=>g});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(u),a=r()(c());a.push([_.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const g=a}}]);})();