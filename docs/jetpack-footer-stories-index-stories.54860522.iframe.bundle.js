"use strict";(()=>{var ye=Object.defineProperty;var Ie=(E,a,t)=>a in E?ye(E,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):E[a]=t;var ne=(E,a,t)=>(Ie(E,typeof a!="symbol"?a+"":a,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6098],{"../components/components/jetpack-footer/stories/index.stories.tsx":(E,a,t)=>{var I,m,j,g,T,x;t.r(a),t.d(a,{WithMenu:()=>h,__namedExportsOrder:()=>y,_default:()=>n,default:()=>s});var c=t("../components/components/jetpack-footer/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Footer',
	component: JetpackFooter,
} as ComponentMeta< typeof JetpackFooter >;

const Template: ComponentStory< typeof JetpackFooter > = args => <JetpackFooter { ...args } />;

const DefaultArgs = {
	moduleName: 'Jetpack',
	className: '',
	moduleNameHref: 'https://jetpack.com',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	menu: [
		{
			label: 'Menu Item',
			href: '#',
		},
		{
			label: 'External Menu Item',
			href: '#',
			target: '_blank',
		},
		{
			label: 'Menu Item With Title',
			title: 'Hello, World!',
			href: '#',
		},
	],
};
`,d={_default:{startLoc:{col:57,line:9},endLoc:{col:94,line:9},startBody:{col:57,line:9},endBody:{col:94,line:9}},WithMenu:{startLoc:{col:57,line:9},endLoc:{col:94,line:9},startBody:{col:57,line:9},endBody:{col:94,line:9}}};const s={parameters:{storySource:{source:`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Footer',
	component: JetpackFooter,
} as ComponentMeta< typeof JetpackFooter >;

const Template: ComponentStory< typeof JetpackFooter > = args => <JetpackFooter { ...args } />;

const DefaultArgs = {
	moduleName: 'Jetpack',
	className: '',
	moduleNameHref: 'https://jetpack.com',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	menu: [
		{
			label: 'Menu Item',
			href: '#',
		},
		{
			label: 'External Menu Item',
			href: '#',
			target: '_blank',
		},
		{
			label: 'Menu Item With Title',
			title: 'Hello, World!',
			href: '#',
		},
	],
};
`,locationsMap:{default:{startLoc:{col:57,line:9},endLoc:{col:94,line:9},startBody:{col:57,line:9},endBody:{col:94,line:9}},"with-menu":{startLoc:{col:57,line:9},endLoc:{col:94,line:9},startBody:{col:57,line:9},endBody:{col:94,line:9}}}}},title:"JS Packages/Components/Jetpack Footer",component:c.Z},i=O=>(0,r.jsx)(c.Z,{...O});i.displayName="Template";const _={moduleName:"Jetpack",className:"",moduleNameHref:"https://jetpack.com"},n=i.bind({});n.args=_;const h=i.bind({});h.args={..._,menu:[{label:"Menu Item",href:"#"},{label:"External Menu Item",href:"#",target:"_blank"},{label:"Menu Item With Title",title:"Hello, World!",href:"#"}]},n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(j=(m=n.parameters)==null?void 0:m.docs)==null?void 0:j.source}}},h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(x=(T=h.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const y=["_default","WithMenu"]},"../connection/state/store.jsx":(E,a,t)=>{t.d(a,{t:()=>P});var c=t("../api/index.jsx");const r="SET_CONNECTION_STATUS",p="SET_CONNECTION_STATUS_IS_FETCHING",d="FETCH_CONNECTION_STATUS",s="SET_SITE_IS_REGISTERING",i="SET_USER_IS_CONNECTING",_="SET_REGISTRATION_ERROR",n="CLEAR_REGISTRATION_ERROR",h="REGISTER_SITE",y="SET_AUTHORIZATION_URL",I="CONNECT_USER",m="DISCONNECT_USER_SUCCESS",j="FETCH_AUTHORIZATION_URL",g="SET_CONNECTED_PLUGINS",T="REFRESH_CONNECTED_PLUGINS",x="SET_CONNECTION_ERRORS",O="SET_IS_OFFLINE_MODE",S=e=>({type:r,connectionStatus:e}),R=e=>({type:p,isFetching:e}),u=()=>({type:d}),C=e=>({type:s,isRegistering:e}),v=e=>({type:i,isConnecting:e}),k=()=>({type:m}),A=e=>({type:_,registrationError:e}),N=()=>({type:n}),b=e=>({type:y,authorizationUrl:e}),L=e=>({type:j,redirectUri:e}),U=e=>({type:g,connectedPlugins:e}),Z=e=>({type:x,connectionErrors:e}),K=e=>({type:O,isOfflineMode:e});function*G({from:e,redirectFunc:o,redirectUri:l}={}){yield v(!0),yield{type:I,from:e,redirectFunc:o,redirectUri:l}}function*X({registrationNonce:e,redirectUri:o}){yield N(),yield C(!0);try{const l=yield{type:h,registrationNonce:e,redirectUri:o};return yield S({isRegistered:!0}),yield b(l.authorizeUrl),yield C(!1),Promise.resolve(l)}catch(l){return yield A(l),yield C(!1),Promise.reject(l)}}const z={setConnectionStatus:S,setConnectionStatusIsFetching:R,fetchConnectionStatus:u,fetchAuthorizationUrl:L,setSiteIsRegistering:C,setUserIsConnecting:v,setRegistrationError:A,clearRegistrationError:N,setAuthorizationUrl:b,registerSite:X,connectUser:G,disconnectUserSuccess:k,setConnectedPlugins:U,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(o=>c.ZP.fetchConnectedPlugins().then(l=>{e(U(l)),o(l)})),setConnectionErrors:Z,setIsOfflineMode:K};var Y=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const P="jetpack-connection",B=({registrationNonce:e,redirectUri:o})=>c.ZP.registerSite(e,o),w=(0,Y.R)(({resolveSelect:e})=>({from:o,redirectFunc:l,redirectUri:$}={})=>new Promise((ge,Te)=>{e(P).getAuthorizationUrl($).then(Q=>{const Se=l||(Ce=>window.location.assign(Ce)),oe=new URL(Q);o&&oe.searchParams.set("from",encodeURIComponent(o));const se=oe.toString();Se(se),ge(se)}).catch(Q=>{Te(Q)})})),F={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>c.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:B,CONNECT_USER:w};var H=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const f=(e={},o)=>{switch(o.type){case r:return{...e,...o.connectionStatus};case m:return{...e,isUserConnected:!1}}return e},M=(e={},o)=>{switch(o.type){case g:return o.connectedPlugins}return e},W=(e=!1,o)=>{switch(o.type){case p:return o.isFetching}return e},ae=(e=!1,o)=>{switch(o.type){case s:return o.isRegistering}return e},re=(e=!1,o)=>{switch(o.type){case i:return o.isConnecting}return e},le=(e,o)=>{switch(o.type){case n:return!1;case _:return o.registrationError;default:return e}},ce=(e,o)=>{switch(o.type){case y:return o.authorizationUrl;default:return e}},de=(e,o)=>{switch(o.type){default:return e}},ie=(e={},o)=>{switch(o.type){case x:return o.connectionErrors}return e},_e=(e=!1,o)=>{switch(o.type){case O:return o.isConnecting}return e},pe=(0,H.UY)({connectionStatus:f,connectionStatusIsFetching:W,siteIsRegistering:ae,userIsConnecting:re,registrationError:le,authorizationUrl:ce,userConnectionData:de,connectedPlugins:M,connectionErrors:ie,isOfflineMode:_e});var me=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ue=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const he={...{getAuthorizationUrl:{isFulfilled:(e,...o)=>{const l=!!e.authorizationUrl,$=(0,me.Y)(P).hasFinishedResolution("getAuthorizationUrl",o);return l&&!$&&(0,ue.W)(P).finishResolution("getAuthorizationUrl",o),l},*fulfill(e){const o=yield z.fetchAuthorizationUrl(e);yield z.setAuthorizationUrl(o.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var o,l;return(l=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:l.wpcomUser},getBlogId:e=>{var o,l;return(l=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:l.blogId}}};var je=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const V=class{static mayBeInit(o,l){V.store===null&&(V.store=(0,je.Z)(o,l),(0,H.z2)(V.store))}};let J=V;ne(J,"store",null);const fe=J,te=window.JP_CONNECTION_INITIAL_STATE;te||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),fe.mayBeInit(P,{__experimentalUseThunks:!0,reducer:pe,actions:z,selectors:Ee,resolvers:he,controls:F,initialState:te||{}})},"../components/components/automattic-byline-logo/index.tsx":(E,a,t)=>{t.d(a,{Z:()=>n});var c=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=t.n(r),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=c.__,_=({title:h=i("An Automattic Airline","jetpack"),height:y=7,className:I,...m})=>(0,s.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:y,className:p()("jp-automattic-byline-logo",I),...m,children:[(0,s.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:h}),(0,s.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,s.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,s.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]});_.displayName="AutomatticBylineLogo";const n=_},"../components/components/jetpack-footer/index.tsx":(E,a,t)=>{t.d(a,{Z:()=>N});var c=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=t("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=t.n(s),_=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../components/tools/jp-redirect/index.ts"),h=t("../connection/state/store.jsx");function y(){var b,L,U;return((b=window.Initial_State)==null?void 0:b.adminUrl)||((L=window.Jetpack_Editor_Initial_State)==null?void 0:L.adminUrl)||((U=window==null?void 0:window.myJetpackInitialState)==null?void 0:U.adminUrl)||null}var I=t("../components/components/automattic-byline-logo/index.tsx"),m=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=t.n(m),g=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),T={};T.insert="head",T.singleton=!1;var x=j()(g.Z,T);const O=g.Z.locals||{};var S=t("../components/components/jetpack-logo/index.tsx"),R=t("../components/components/layout/use-breakpoint-match/index.ts"),u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=r.__,v=r._x,k=()=>(0,u.jsx)(S.Z,{logoColor:"#000",showText:!1,height:16,"aria-hidden":"true"});k.displayName="JetpackIcon";const A=({moduleName:b=C("Jetpack","jetpack"),className:L,moduleNameHref:U="https://jetpack.com",menu:Z,onAboutClick:K,onPrivacyClick:G,onTermsClick:X,...q})=>{const[z]=(0,R.Z)("sm","<="),[Y]=(0,R.Z)("md","<="),[ee]=(0,R.Z)("lg",">"),{isActive:P,connectedPlugins:B}=(0,c.Z)(f=>{const M=f(h.t);return{connectedPlugins:M==null?void 0:M.getConnectedPlugins(),...M.getConnectionStatus()}},[h.t]),w=y(),D=w&&P&&(B==null?void 0:B.some(({slug:f})=>f==="jetpack"));let F=[{label:v("About","Link to learn more about Jetpack.","jetpack"),title:C("About Jetpack","jetpack"),href:D?new URL("admin.php?page=jetpack_about",w).href:(0,n.Z)("jetpack-about"),target:D?"_self":"_blank",onClick:K},{label:v("Privacy","Shorthand for Privacy Policy.","jetpack"),title:C("Automattic's Privacy Policy","jetpack"),href:D?new URL("admin.php?page=jetpack#/privacy",w).href:(0,n.Z)("a8c-privacy"),target:D?"_self":"_blank",onClick:G},{label:v("Terms","Shorthand for Terms of Service.","jetpack"),title:C("WordPress.com Terms of Service","jetpack"),href:(0,n.Z)("wpcom-tos"),target:"_blank",onClick:X}];Z&&(F=[...F,...Z]);const H=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k,{}),b]});return(0,u.jsx)("footer",{className:i()("jp-dashboard-footer",{"is-sm":z,"is-md":Y,"is-lg":ee},L),"aria-label":C("Jetpack","jetpack"),...q,children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{className:"jp-dashboard-footer__jp-item",children:U?(0,u.jsx)("a",{href:U,children:H}):H}),F.map(f=>{const M=f.role==="button",W=!M&&f.target==="_blank";return(0,u.jsx)("li",{children:(0,u.jsxs)("a",{href:f.href,title:f.title,target:f.target,onClick:f.onClick,onKeyDown:f.onKeyDown,className:i()("jp-dashboard-footer__menu-item",{"is-external":W}),role:f.role,rel:W?"noopener noreferrer":void 0,tabIndex:M?0:void 0,children:[f.label,W&&(0,u.jsx)(p.Z,{icon:d.Z,size:16})]})},f.label)}),(0,u.jsx)("li",{className:"jp-dashboard-footer__a8c-item",children:(0,u.jsx)("a",{href:D?new URL("admin.php?page=jetpack_about",w).href:(0,n.Z)("a8c-about"),"aria-label":C("An Automattic Airline","jetpack"),children:(0,u.jsx)(I.Z,{"aria-hidden":"true"})})})]})})};A.displayName="JetpackFooter";const N=A},"../components/components/jetpack-logo/index.tsx":(E,a,t)=>{t.d(a,{Z:()=>n});var c=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=t.n(r),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=c.__,_=({logoColor:h="#069e08",showText:y=!0,className:I,height:m=32,...j})=>{const g=y?"0 0 118 32":"0 0 32 32";return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:g,className:p()("jetpack-logo",I),"aria-labelledby":"jetpack-logo-title",height:m,...j,children:[(0,s.jsx)("desc",{id:"jetpack-logo-title",children:i("Jetpack Logo","jetpack")}),(0,s.jsx)("path",{fill:h,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),y&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,s.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,s.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,s.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,s.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,s.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,s.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};_.displayName="JetpackLogo";const n=_},"../components/components/layout/use-breakpoint-match/index.ts":(E,a,t)=>{t.d(a,{Z:()=>I});var c=t("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(r),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),s={};s.insert="head",s.singleton=!1;var i=p()(d.Z,s);const _=d.Z.locals||{},n=["sm","md","lg"],h=(m,j,g)=>{const T=n.indexOf(m),x=T+1,O=j.includes("=");let S=[];return j.startsWith("<")&&(S=n.slice(0,O?x:T)),j.startsWith(">")&&(S=n.slice(O?T:x)),S!=null&&S.length?S.some(R=>g[R]):g[m]},I=(m,j)=>{const g=Array.isArray(m)?m:[m],T=Array.isArray(j)?j:[j],[x,O,S]=n,R=(0,c.Z)(_[x]),u=(0,c.Z)(_[O]),C=(0,c.Z)(_[S]),v={sm:R,md:u,lg:C};return g.map((k,A)=>{const N=T[A];return N?h(k,N,v):v[k]})}},"../components/tools/jp-redirect/index.ts":(E,a,t)=>{t.d(a,{Z:()=>c});function c(r,p={}){var _;const d={};let s;if(typeof window!="undefined"&&(s=(_=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:_.calypsoEnv),r.search("https://")===0){const n=new URL(r);r=`https://${n.host}${n.pathname}`,d.url=encodeURIComponent(r)}else d.source=encodeURIComponent(r);for(const n in p)d[n]=encodeURIComponent(p[n]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=jetpack_redirects.currentSiteRawUrl),s&&(d.calypso_env=s),"https://jetpack.com/redirect/?"+Object.keys(d).map(n=>n+"="+d[n]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(E,a,t)=>{t.d(a,{Z:()=>i});var c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(c),p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(p),s=d()(r());s.push([E.id,".jp-dashboard-footer{display:flex;flex-wrap:wrap;align-items:center;max-width:1128px;width:100%;color:var(--jp-black);font-size:var(--font-body-extra-small);line-height:1.333}.jp-dashboard-footer a{text-decoration:none}.jp-dashboard-footer a:any-link,.jp-dashboard-footer a[role=button]{color:inherit}.jp-dashboard-footer a:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer a:focus{border-radius:2px;box-shadow:none;outline:1.5px solid currentColor;outline-offset:3px}.jp-dashboard-footer.is-sm>ul{flex-direction:column;align-items:flex-start;gap:.125rem}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer>ul{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:100%;margin:0;padding:0;list-style:none}.jp-dashboard-footer>ul>li{margin-bottom:0}.jp-dashboard-footer>ul>li>a{display:flex;align-items:center;gap:.25rem;min-height:44px}.jp-dashboard-footer__jp-item{padding-inline-end:1rem;font-weight:600}.jp-dashboard-footer.is-sm .jp-dashboard-footer__jp-item{padding-bottom:1rem}.jp-dashboard-footer.is-lg .jp-dashboard-footer__a8c-item{margin-inline-start:auto}.jp-dashboard-footer.is-sm .jp-dashboard-footer__a8c-item{padding-top:1rem}.jp-dashboard-footer__jp-item>a,.jp-dashboard-footer__a8c-item>a{text-decoration:none}",""]);const i=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(E,a,t)=>{t.d(a,{Z:()=>i});var c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(c),p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(p),s=d()(r());s.push([E.id,"",""]),s.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const i=s}}]);})();
