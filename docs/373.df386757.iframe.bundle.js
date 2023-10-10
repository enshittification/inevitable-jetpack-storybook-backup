"use strict";(()=>{var Re=Object.defineProperty;var Se=(S,m,o)=>m in S?Re(S,m,{enumerable:!0,configurable:!0,writable:!0,value:o}):S[m]=o;var V=(S,m,o)=>(Se(S,typeof m!="symbol"?m+"":m,o),o);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[373],{"../analytics/index.jsx":(S,m,o)=>{o.d(m,{Z:()=>R});var T=o("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),f=o.n(T);const a=f()("dops:analytics");let p,l;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function r(t,s){let i="";if(typeof t=="object"){for(const d in t)i+="&x_"+encodeURIComponent(d)+"="+encodeURIComponent(t[d]);a("Bumping stats %o",t)}else i="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(s),a('Bumping stat "%s" in group "%s"',s,t);return i}function U(t,s){let i="";if(typeof t=="object"){for(const d in t)i+="&"+encodeURIComponent(d)+"="+encodeURIComponent(t[d]);a("Built stats %o",t)}else i="&"+encodeURIComponent(t)+"="+encodeURIComponent(s),a('Built stat "%s" in group "%s"',s,t);return i}const u={initialize:function(t,s,i){u.setUser(t,s),u.setSuperProps(i),u.identifyUser()},setGoogleAnalyticsEnabled:function(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=t,this.googleAnalyticsKey=s},setMcAnalyticsEnabled:function(t){this.mcAnalyticsEnabled=t},setUser:function(t,s){l={ID:t,username:s}},setSuperProps:function(t){p=t},assignSuperProps:function(t){p=Object.assign(p||{},t)},mc:{bumpStat:function(t,s){const i=r(t,s);u.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+i+"&t="+Math.random())},bumpStatWithPageView:function(t,s){const i=U(t,s);u.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+i+"&t="+Math.random())}},pageView:{record:function(t,s){u.tracks.recordPageView(t),u.ga.recordPageView(t,s)}},purchase:{record:function(t,s,i,d,_,w,c){u.ga.recordPurchase(t,s,i,d,_,w,c)}},tracks:{recordEvent:function(t,s){if(s=s||{},t.indexOf("akismet_")!==0&&t.indexOf("jetpack_")!==0){a('- Event name must be prefixed by "akismet_" or "jetpack_"');return}p&&(a("- Super Props: %o",p),s=Object.assign(s,p)),a('Record event "%s" called with props %s',t,JSON.stringify(s)),window._tkq.push(["recordEvent",t,s])},recordJetpackClick:function(t){const s=typeof t=="object"?t:{target:t};u.tracks.recordEvent("jetpack_wpa_click",s)},recordPageView:function(t){u.tracks.recordEvent("akismet_page_view",{path:t})},setOptOut:function(t){a("Pushing setOptOut: %o",t),window._tkq.push(["setOptOut",t])}},ga:{initialized:!1,initialize:function(){let t={};u.ga.initialized||(l&&(t={userId:"u-"+l.ID}),window.ga("create",this.googleAnalyticsKey,"auto",t),u.ga.initialized=!0)},recordPageView:function(t,s){u.ga.initialize(),a("Recording Page View ~ [URL: "+t+"] [Title: "+s+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",t),window.ga("send",{hitType:"pageview",page:t,title:s}))},recordEvent:function(t,s,i,d){u.ga.initialize();let _="Recording Event ~ [Category: "+t+"] [Action: "+s+"]";typeof i!="undefined"&&(_+=" [Option Label: "+i+"]"),typeof d!="undefined"&&(_+=" [Option Value: "+d+"]"),a(_),this.googleAnalyticsEnabled&&window.ga("send","event",t,s,i,d)},recordPurchase:function(t,s,i,d,_,w,c){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:t,revenue:d,currency:c}),window.ga("ecommerce:addItem",{id:t,name:s,sku:i,price:_,quantity:w}),window.ga("ecommerce:send")}},identifyUser:function(){l&&window._tkq.push(["identifyUser",l.ID,l.username])},setProperties:function(t){window._tkq.push(["setProperties",t])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},R=u},"../connection/components/use-connection/index.jsx":(S,m,o)=>{o.d(m,{Z:()=>U});var T=o("../api/index.jsx"),f=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),p=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=o("../connection/state/store.jsx");const r=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},U=function(){let{registrationNonce:u=r.registrationNonce,apiRoot:R=r.apiRoot,apiNonce:t=r.apiNonce,redirectUri:s,autoTrigger:i,from:d,skipUserConnection:_}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:w,connectUser:c,refreshConnectedPlugins:E}=(0,f.Z)(l.t),P=(0,a.Z)(h=>h(l.t).getRegistrationError()),{siteIsRegistering:N,userIsConnecting:y,userConnectionData:O,connectedPlugins:I,connectionErrors:A,isRegistered:M,isUserConnected:x,hasConnectedOwner:L,isOfflineMode:z}=(0,a.Z)(h=>({siteIsRegistering:h(l.t).getSiteIsRegistering(),userIsConnecting:h(l.t).getUserIsConnecting(),userConnectionData:h(l.t).getUserConnectionData(),connectedPlugins:h(l.t).getConnectedPlugins(),connectionErrors:h(l.t).getConnectionErrors(),isOfflineMode:h(l.t).getIsOfflineMode(),...h(l.t).getConnectionStatus()})),D=()=>{if(_){if(s)return window.location=s,Promise.resolve(s)}else return c({from:d,redirectUri:s});return Promise.resolve()},b=h=>(h&&h.preventDefault(),M?D():w({registrationNonce:u,redirectUri:s}).then(()=>D()));return(0,p.useEffect)(()=>{T.ZP.setApiRoot(R),T.ZP.setApiNonce(t)},[R,t]),(0,p.useEffect)(()=>{i&&!N&&!y&&b()},[]),{handleRegisterSite:b,handleConnectUser:D,refreshConnectedPlugins:E,isRegistered:M,isUserConnected:x,siteIsRegistering:N,userIsConnecting:y,registrationError:P,userConnectionData:O,hasConnectedOwner:L,connectedPlugins:I,connectionErrors:A,isOfflineMode:z}}},"../connection/state/store.jsx":(S,m,o)=>{o.d(m,{t:()=>v});var T=o("../api/index.jsx");const f="SET_CONNECTION_STATUS",a="SET_CONNECTION_STATUS_IS_FETCHING",p="FETCH_CONNECTION_STATUS",l="SET_SITE_IS_REGISTERING",r="SET_USER_IS_CONNECTING",U="SET_REGISTRATION_ERROR",u="CLEAR_REGISTRATION_ERROR",R="REGISTER_SITE",t="SET_AUTHORIZATION_URL",s="CONNECT_USER",i="DISCONNECT_USER_SUCCESS",d="FETCH_AUTHORIZATION_URL",_="SET_CONNECTED_PLUGINS",w="REFRESH_CONNECTED_PLUGINS",c="SET_CONNECTION_ERRORS",E="SET_IS_OFFLINE_MODE",P=e=>({type:f,connectionStatus:e}),N=e=>({type:a,isFetching:e}),y=()=>({type:p}),O=e=>({type:l,isRegistering:e}),I=e=>({type:r,isConnecting:e}),A=()=>({type:i}),M=e=>({type:U,registrationError:e}),x=()=>({type:u}),L=e=>({type:t,authorizationUrl:e}),z=e=>({type:d,redirectUri:e}),D=e=>({type:_,connectedPlugins:e}),b=e=>({type:c,connectionErrors:e}),h=e=>({type:E,isOfflineMode:e});function J(){let{from:e,redirectFunc:n,redirectUri:g}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield I(!0),yield{type:s,from:e,redirectFunc:n,redirectUri:g}}()}function X(e){let{registrationNonce:n,redirectUri:g}=e;return function*(){yield x(),yield O(!0);try{const C=yield{type:R,registrationNonce:n,redirectUri:g};return yield P({isRegistered:!0}),yield L(C.authorizeUrl),yield O(!1),Promise.resolve(C)}catch(C){return yield M(C),yield O(!1),Promise.reject(C)}}()}const B={setConnectionStatus:P,setConnectionStatusIsFetching:N,fetchConnectionStatus:y,fetchAuthorizationUrl:z,setSiteIsRegistering:O,setUserIsConnecting:I,setRegistrationError:M,clearRegistrationError:x,setAuthorizationUrl:L,registerSite:X,connectUser:J,disconnectUserSuccess:A,setConnectedPlugins:D,refreshConnectedPlugins:()=>async e=>{let{dispatch:n}=e;return await new Promise(g=>T.ZP.fetchConnectedPlugins().then(C=>{n(D(C)),g(C)}))},setConnectionErrors:b,setIsOfflineMode:h};var $=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const v="jetpack-connection",Q=e=>{let{registrationNonce:n,redirectUri:g}=e;return T.ZP.registerSite(n,g)},Y=(0,$.R)(e=>{let{resolveSelect:n}=e;return function(){let{from:g,redirectFunc:C,redirectUri:j}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((Z,Ce)=>{n(v).getAuthorizationUrl(j).then(G=>{const Te=C||(Ie=>window.location.assign(Ie)),K=new URL(G);g&&K.searchParams.set("from",encodeURIComponent(g));const H=K.toString();Te(H),Z(H)}).catch(G=>{Ce(G)})})}}),q={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:n}=e;return T.ZP.fetchAuthorizationUrl(n)},REGISTER_SITE:Q,CONNECT_USER:Y};var ee=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/combine-reducers.js");const te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return{...e,...n.connectionStatus};case i:return{...e,isUserConnected:!1}}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return n.connectedPlugins}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a:return n.isFetching}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return n.isRegistering}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r:return n.isConnecting}return e},ie=(e,n)=>{switch(n.type){case u:return!1;case U:return n.registrationError;default:return e}},ce=(e,n)=>{switch(n.type){case t:return n.authorizationUrl;default:return e}},ae=(e,n)=>{switch(n.type){default:return e}},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c:return n.connectionErrors}return e},de=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E:return n.isConnecting}return e},le=(0,ee.U)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ie,authorizationUrl:ce,userConnectionData:ae,connectedPlugins:ne,connectionErrors:ue,isOfflineMode:de});var ge=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const me={...{getAuthorizationUrl:{isFulfilled:function(e){const n=!!e.authorizationUrl;for(var g=arguments.length,C=new Array(g>1?g-1:0),j=1;j<g;j++)C[j-1]=arguments[j];const Z=(0,ge.Y)(v).hasFinishedResolution("getAuthorizationUrl",C);return n&&!Z&&(0,_e.W)(v).finishResolution("getAuthorizationUrl",C),n},*fulfill(e){const n=yield B.fetchAuthorizationUrl(e);yield B.setAuthorizationUrl(n.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,g;return(g=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:g.wpcomUser},getBlogId:e=>{var n,g;return(g=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:g.blogId}}};var fe=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js"),pe=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const k=class{static mayBeInit(n,g){k.store===null&&(k.store=(0,fe.Z)(n,g),(0,pe.z2)(k.store))}};let F=k;V(F,"store",null);const he=F,W=window.JP_CONNECTION_INITIAL_STATE;W||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),he.mayBeInit(v,{__experimentalUseThunks:!0,reducer:le,actions:B,selectors:Ee,resolvers:me,controls:q,initialState:W||{}})},"../../plugins/protect/src/js/hooks/use-analytics-tracks/index.js":(S,m,o)=>{o.d(m,{Z:()=>l});var T=o("../analytics/index.jsx"),f=o("../connection/components/use-connection/index.jsx"),a=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const l=function(){var y;let{pageViewEventName:r,pageViewNamespace:U="jetpack",pageViewSuffix:u="page_view",pageViewEventProperties:R={}}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{isUserConnected:t,isRegistered:s,userConnectionData:i}=(0,f.Z)(),{login:d,ID:_}=((y=i.currentUser)==null?void 0:y.wpcomUser)||{},{tracks:w}=T.Z,{recordEvent:c}=w,E=(0,a.useCallback)(async(O,I)=>{c(O,I)},[c]),P=(0,a.useCallback)(function(O,I){let A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:()=>{};return A=typeof I=="function"?I:A,I=typeof I=="function"?{}:I,()=>E(O,I).then(A)},[E]);(0,a.useEffect)(()=>{t&&_&&d&&T.Z.initialize(_,d)},[t,_,d]);const N=r?`${U}_${r}_${u}`:null;return(0,a.useEffect)(()=>{s&&N&&c(N,R)},[]),{recordEvent:E,recordEventHandler:P}}},"../../plugins/protect/src/js/hooks/use-protect-data/index.js":(S,m,o)=>{o.d(m,{Z:()=>p});var T=o("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),f=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=o("../../plugins/protect/src/js/state/store.js");function p(){const{statusIsFetching:l,status:r,jetpackScan:U,hasRequiredPlan:u}=(0,T.Z)(c=>({statusIsFetching:c(a.t).getStatusIsFetching(),status:c(a.t).getStatus(),jetpackScan:c(a.t).getJetpackScan(),hasRequiredPlan:c(a.t).hasRequiredPlan()}));let R="error";l===!0?R="loading":r.status&&(R=r.status);const t=(0,f.useMemo)(()=>{var c,E;return((E=(c=r.core)==null?void 0:c.threats)==null?void 0:E.length)||0},[r.core]),s=(0,f.useMemo)(()=>(r.plugins||[]).reduce((c,E)=>c+E.threats.length,0),[r.plugins]),i=(0,f.useMemo)(()=>(r.themes||[]).reduce((c,E)=>c+E.threats.length,0),[r.themes]),d=(0,f.useMemo)(()=>{var c;return((c=r.files)==null?void 0:c.length)||0},[r.files]),_=(0,f.useMemo)(()=>{var c;return((c=r.database)==null?void 0:c.length)||0},[r.database]);return{numThreats:t+s+i+d+_,numCoreThreats:t,numPluginsThreats:s,numThemesThreats:i,numFilesThreats:d,numDatabaseThreats:_,lastChecked:r.lastChecked||null,errorCode:r.errorCode||null,errorMessage:r.errorMessage||null,core:r.core||{},plugins:r.plugins||[],themes:r.themes||[],files:{threats:r.files||[]},database:{threats:r.database||[]},currentStatus:R,hasUncheckedItems:r.hasUncheckedItems,jetpackScan:U,hasRequiredPlan:u}}}}]);})();