"use strict";(()=>{var at=Object.defineProperty;var it=(R,E,r)=>E in R?at(R,E,{enumerable:!0,configurable:!0,writable:!0,value:r}):R[E]=r;var ke=(R,E,r)=>(it(R,typeof E!="symbol"?E+"":E,r),r);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1668],{"../connection/components/use-connection/index.jsx":(R,E,r)=>{r.d(E,{Z:()=>v});var S=r("../api/index.jsx"),_=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),T=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=r("../connection/state/store.jsx");const h=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},v=({registrationNonce:b=h.registrationNonce,apiRoot:P=h.apiRoot,apiNonce:U=h.apiNonce,redirectUri:l,autoTrigger:p,from:I,skipUserConnection:A}={})=>{const{registerSite:k,connectUser:M,refreshConnectedPlugins:x}=(0,_.Z)(i.t),H=(0,u.Z)(m=>m(i.t).getRegistrationError()),{siteIsRegistering:B,userIsConnecting:O,userConnectionData:D,connectedPlugins:f,connectionErrors:Z,isRegistered:L,isUserConnected:ee,hasConnectedOwner:G,isOfflineMode:J}=(0,u.Z)(m=>({siteIsRegistering:m(i.t).getSiteIsRegistering(),userIsConnecting:m(i.t).getUserIsConnecting(),userConnectionData:m(i.t).getUserConnectionData(),connectedPlugins:m(i.t).getConnectedPlugins(),connectionErrors:m(i.t).getConnectionErrors(),isOfflineMode:m(i.t).getIsOfflineMode(),...m(i.t).getConnectionStatus()})),F=()=>{if(A){if(l)return window.location=l,Promise.resolve(l)}else return M({from:I,redirectUri:l});return Promise.resolve()},w=m=>(m&&m.preventDefault(),L?F():k({registrationNonce:b,redirectUri:l}).then(()=>F()));return(0,T.useEffect)(()=>{S.ZP.setApiRoot(P),S.ZP.setApiNonce(U)},[P,U]),(0,T.useEffect)(()=>{p&&!B&&!O&&w()},[]),{handleRegisterSite:w,handleConnectUser:F,refreshConnectedPlugins:x,isRegistered:L,isUserConnected:ee,siteIsRegistering:B,userIsConnecting:O,registrationError:H,userConnectionData:D,hasConnectedOwner:G,connectedPlugins:f,connectionErrors:Z,isOfflineMode:J}}},"../connection/state/store.jsx":(R,E,r)=>{r.d(E,{t:()=>N});var S=r("../api/index.jsx");const _="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",T="FETCH_CONNECTION_STATUS",i="SET_SITE_IS_REGISTERING",h="SET_USER_IS_CONNECTING",v="SET_REGISTRATION_ERROR",b="CLEAR_REGISTRATION_ERROR",P="REGISTER_SITE",U="SET_AUTHORIZATION_URL",l="CONNECT_USER",p="DISCONNECT_USER_SUCCESS",I="FETCH_AUTHORIZATION_URL",A="SET_CONNECTED_PLUGINS",k="REFRESH_CONNECTED_PLUGINS",M="SET_CONNECTION_ERRORS",x="SET_IS_OFFLINE_MODE",H=n=>({type:_,connectionStatus:n}),B=n=>({type:u,isFetching:n}),O=()=>({type:T}),D=n=>({type:i,isRegistering:n}),f=n=>({type:h,isConnecting:n}),Z=()=>({type:p}),L=n=>({type:v,registrationError:n}),ee=()=>({type:b}),G=n=>({type:U,authorizationUrl:n}),J=n=>({type:I,redirectUri:n}),F=n=>({type:A,connectedPlugins:n}),w=n=>({type:M,connectionErrors:n}),m=n=>({type:x,isOfflineMode:n});function*Y({from:n,redirectFunc:c,redirectUri:d}={}){yield f(!0),yield{type:l,from:n,redirectFunc:c,redirectUri:d}}function*te({registrationNonce:n,redirectUri:c}){yield ee(),yield D(!0);try{const d=yield{type:P,registrationNonce:n,redirectUri:c};return yield H({isRegistered:!0}),yield G(d.authorizeUrl),yield D(!1),Promise.resolve(d)}catch(d){return yield L(d),yield D(!1),Promise.reject(d)}}const K={setConnectionStatus:H,setConnectionStatusIsFetching:B,fetchConnectionStatus:O,fetchAuthorizationUrl:J,setSiteIsRegistering:D,setUserIsConnecting:f,setRegistrationError:L,clearRegistrationError:ee,setAuthorizationUrl:G,registerSite:te,connectUser:Y,disconnectUserSuccess:Z,setConnectedPlugins:F,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(c=>S.ZP.fetchConnectedPlugins().then(d=>{n(F(d)),c(d)})),setConnectionErrors:w,setIsOfflineMode:m};var de=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const N="jetpack-connection",se=({registrationNonce:n,redirectUri:c})=>S.ZP.registerSite(n,c),ne=(0,de.R)(({resolveSelect:n})=>({from:c,redirectFunc:d,redirectUri:Se}={})=>new Promise((De,Fe)=>{n(N).getAuthorizationUrl(Se).then(he=>{const we=d||(je=>window.location.assign(je)),Ae=new URL(he);c&&Ae.searchParams.set("from",encodeURIComponent(c));const Ie=Ae.toString();we(Ie),De(Ie)}).catch(he=>{Fe(he)})})),C={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>S.ZP.fetchAuthorizationUrl(n),REGISTER_SITE:se,CONNECT_USER:ne};var z=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const oe=(n={},c)=>{switch(c.type){case _:return{...n,...c.connectionStatus};case p:return{...n,isUserConnected:!1}}return n},pe=(n={},c)=>{switch(c.type){case A:return c.connectedPlugins}return n},Ee=(n=!1,c)=>{switch(c.type){case u:return c.isFetching}return n},j=(n=!1,c)=>{switch(c.type){case i:return c.isRegistering}return n},re=(n=!1,c)=>{switch(c.type){case h:return c.isConnecting}return n},$=(n,c)=>{switch(c.type){case b:return!1;case v:return c.registrationError;default:return n}},ge=(n,c)=>{switch(c.type){case U:return c.authorizationUrl;default:return n}},Oe=(n,c)=>{switch(c.type){default:return n}},Te=(n={},c)=>{switch(c.type){case M:return c.connectionErrors}return n},Ne=(n=!1,c)=>{switch(c.type){case x:return c.isConnecting}return n},ce=(0,z.UY)({connectionStatus:oe,connectionStatusIsFetching:Ee,siteIsRegistering:j,userIsConnecting:re,registrationError:$,authorizationUrl:ge,userConnectionData:Oe,connectedPlugins:pe,connectionErrors:Te,isOfflineMode:Ne});var ve=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ae=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const V={...{getAuthorizationUrl:{isFulfilled:(n,...c)=>{const d=!!n.authorizationUrl,Se=(0,ve.Y)(N).hasFinishedResolution("getAuthorizationUrl",c);return d&&!Se&&(0,ae.W)(N).finishResolution("getAuthorizationUrl",c),d},*fulfill(n){const c=yield K.fetchAuthorizationUrl(n);yield K.setAuthorizationUrl(c.authorizeUrl)}}}},He={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.wpcomUser},getBlogId:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.blogId}}};var Be=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const ie=class{static mayBeInit(c,d){ie.store===null&&(ie.store=(0,Be.Z)(c,d),(0,z.z2)(ie.store))}};let me=ie;ke(me,"store",null);const Ze=me,Pe=window.JP_CONNECTION_INITIAL_STATE;Pe||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ze.mayBeInit(N,{__experimentalUseThunks:!0,reducer:ce,actions:K,selectors:He,resolvers:V,controls:C,initialState:Pe||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(R,E,r)=>{r.d(E,{N:()=>A,Z:()=>M});var S=r("../components/components/button/index.tsx"),_=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),T=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),i=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),v=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),b=r.n(v),P=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=r("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),l=r("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),p=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=_.__,A={ACTIVE:"active",INACTIVE:"inactive",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},k=({status:x,admin:H,name:B,slug:O,onActivate:D,additionalActions:f,onManage:Z,onFixConnection:L,isFetching:ee,isInstallingStandalone:G,isDeactivatingStandalone:J,className:F,onAdd:w,upgradeInInterstitial:m})=>{const[Y,te]=(0,P.useState)(!1),[W,K]=(0,P.useState)({}),{detail:de}=(0,U.i)(O),{manageUrl:_e,purchaseUrl:N}=de,se=!_e,ne=ee||G||J,Q=(f==null?void 0:f.length)>0,C=(0,P.useMemo)(()=>({variant:ne?void 0:"primary",disabled:ne,className:F}),[ne,F]),z=(0,P.useCallback)(()=>{switch(x){case A.ABSENT:case A.ABSENT_WITH_PLAN:{const j=I("Learn more","jetpack-my-jetpack");return{...C,href:`#/add-${O}`,size:"small",variant:"primary",weight:"regular",label:j,onClick:null}}case A.NEEDS_PURCHASE:return{...C,href:N||`#/add-${O}`,size:"small",variant:"primary",weight:"regular",label:I("Purchase","jetpack-my-jetpack"),onClick:w};case A.CAN_UPGRADE:{const j=I("Upgrade","jetpack-my-jetpack"),re=I("Purchase","jetpack-my-jetpack"),$=N||m?j:re;return{...C,href:N||`#/add-${O}`,size:"small",variant:"primary",weight:"regular",label:$,onClick:w}}case A.NEEDS_PURCHASE_OR_FREE:return{...C,href:`#/add-${O}`,size:"small",variant:"primary",weight:"regular",label:I("Start for free","jetpack-my-jetpack"),onClick:w};case A.ACTIVE:{const j=I("View","jetpack-my-jetpack");return{...C,disabled:se||(C==null?void 0:C.disabled),href:_e,size:"small",variant:"secondary",weight:"regular",label:j,onClick:Z}}case A.ERROR:return{...C,href:"#/connection",size:"small",variant:"primary",weight:"regular",label:I("Fix connection","jetpack-my-jetpack"),onClick:L};case A.INACTIVE:return{...C,href:"",size:"small",variant:"secondary",weight:"regular",label:I("Activate","jetpack-my-jetpack"),onClick:D};default:return null}},[C,se,_e,D,w,L,Z,N,O,x,m]),oe=(0,P.useMemo)(()=>Q?[...f,z()]:[z()],[f,z,Q]),pe=(0,P.useCallback)(()=>{te(!Y)},[Y]);if((0,P.useEffect)(()=>{K(oe[0])},[oe]),!H)return(0,p.jsx)(S.Z,{...C,size:"small",variant:"link",weight:"regular",children:(0,_.gB)(I("Learn about %s","jetpack-my-jetpack"),B)});const Ee=Q&&(0,p.jsx)("div",{className:l.Z["action-button-dropdown"],children:(0,p.jsx)("ul",{className:l.Z["dropdown-menu"],children:[...f,z()].map(({label:j,isExternalLink:re},$)=>{const ge=()=>{K(oe[$]),te(!1)};return(0,p.jsx)("li",{children:(0,p.jsxs)("button",{onClick:ge,className:l.Z["dropdown-item"],children:[(0,p.jsxs)("div",{className:l.Z["dropdown-item-label"],children:[j,re&&(0,p.jsx)(u.Z,{icon:T.Z,size:16})]}),j===W.label&&(0,p.jsx)("div",{className:l.Z["active-action-checkmark"],children:(0,p.jsx)(u.Z,{icon:i.Z,size:24,fill:"white"})})]})},$)})})});return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:b()(l.Z["action-button"],Q?l.Z["has-additional-actions"]:null),children:[(0,p.jsx)(S.Z,{...C,...W,children:W.label}),Q&&(0,p.jsx)("button",{className:b()(l.Z["dropdown-chevron"],W.variant==="primary"?l.Z.primary:l.Z.secondary),onClick:pe,children:(0,p.jsx)(u.Z,{icon:h.Z,size:24,fill:W.variant==="primary"?"white":"black"})}),Y&&Ee]})})};k.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const M=k},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(R,E,r)=>{r.d(E,{i:()=>T});var S=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),_=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=r("../../packages/my-jetpack/_inc/state/store.js");function T(i){const{activateProduct:h,deactivateProduct:v,installStandalonePluginForProduct:b,deactivateStandalonePluginForProduct:P}=(0,S.Z)(u.t),U=(0,_.Z)(l=>l(u.t).getProduct(i));return{activate:()=>h(i),deactivate:()=>v(i),deactivateStandalonePlugin:()=>P(i),installStandalonePlugin:()=>b(i),productsList:(0,_.Z)(l=>l(u.t).getProducts()),detail:U,isActive:U.status==="active",isFetching:(0,_.Z)(l=>l(u.t).isFetching(i)),stats:(0,_.Z)(l=>l(u.t).getProductStats(i))}}},"../../packages/my-jetpack/_inc/state/store.js":(R,E,r)=>{r.d(E,{t:()=>We,N:()=>rt});var S=r("../connection/state/store.jsx"),_=r("../../../node_modules/.pnpm/@wordpress+api-fetch@6.42.0/node_modules/@wordpress/api-fetch/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js");const T="my-jetpack/v1",i="jetpack/v4/stats-app",h=`${T}/site/purchases`,v=`${T}/site/products`,b=`${T}/site/product-data`,P=`${T}/chat/availability`,U=`${T}/chat/authentication`,l=["scan"],p="videopress",I="videopress/v1/stats/featured",A=e=>`${i}/sites/${e}/stats/highlights`,k=u.__,M="SET_PURCHASES_IS_FETCHING",x="FETCH_PURCHASES",H="SET_PURCHASES",B="SET_AVAILABLE_LICENSES_IS_FETCHING",O="FETCH_AVAILABLE_LICENSES",D="SET_AVAILABLE_LICENSES",f="SET_IS_FETCHING_PRODUCT",Z="SET_PRODUCT",L="SET_PRODUCT_REQUEST_ERROR",ee="ACTIVATE_PRODUCT",G="SET_PRODUCT_STATUS",J="SET_CHAT_AVAILABILITY_IS_FETCHING",F="SET_CHAT_AVAILABILITY",w="SET_CHAT_AUTHENTICATION_IS_FETCHING",m="SET_CHAT_AUTHENTICATION",Y="SET_PRODUCT_DATA_IS_FETCHING",te="SET_PRODUCT_DATA",W="SET_STATS_COUNTS_IS_FETCHING",K="SET_STATS_COUNTS",de="SET_GLOBAL_NOTICE",_e="CLEAN_GLOBAL_NOTICE",N="SET_PRODUCT_STATS",se="SET_IS_FETCHING_PRODUCT_STATS",ne=e=>({type:M,isFetching:e}),Q=e=>({type:J,isFetching:e}),C=e=>({type:w,isFetching:e}),z=e=>({type:Y,isFetching:e}),oe=e=>({type:W,isFetching:e}),pe=()=>({type:x}),Ee=e=>({type:H,purchases:e}),j=e=>({type:F,chatAvailability:e}),re=e=>({type:m,chatAuthentication:e}),$=e=>({type:B,isFetching:e}),ge=()=>({type:O}),Oe=e=>({type:D,availableLicenses:e}),Te=e=>({type:Z,product:e}),Ne=e=>({type:te,productData:e}),xe=e=>({type:K,statsCounts:e}),ce=(e,t)=>({type:L,productId:e,error:t}),ve=(e,t)=>({type:G,productId:e,status:t}),ae=(e,t)=>({type:"SET_GLOBAL_NOTICE",message:e,options:t}),Me=()=>({type:"CLEAN_GLOBAL_NOTICE"});function V(e,t){return{type:f,productId:e,isFetching:t}}function Ue(e,t,{select:o,dispatch:s,registry:a}){return new Promise((X,q)=>{if(!o.isValidProduct(e)){const y=k("Invalid product name","jetpack-my-jetpack"),ue=new Error(y);s(ce(e,ue)),s(ae(y,{status:"error",isDismissible:!0})),q(ue);return}const g=t.activate?"POST":"DELETE";return s(V(e,!0)),(0,_.Z)({path:`${v}/${e}`,method:g}).then(y=>{s(V(e,!1)),s(Te(y)),a.dispatch(S.t).refreshConnectedPlugins(),X(y==null?void 0:y.status)}).catch(y=>{const{name:ue}=o.getProduct(e),ct=(0,u.gB)(k("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),ue);s(V(e,!1)),s(ce(e,y)),s(ae(ct,{status:"error",isDismissible:!0})),q(y)})})}const Pe={setPurchasesIsFetching:ne,setChatAvailabilityIsFetching:Q,setChatAuthenticationIsFetching:C,fetchPurchases:pe,setPurchases:Ee,setChatAvailability:j,setChatAuthentication:re,setProductDataIsFetching:z,setProductData:Ne,setAvailableLicensesIsFetching:$,fetchAvailableLicenses:ge,setAvailableLicenses:Oe,setProductStats:(e,t)=>({type:N,productId:e,stats:t}),setIsFetchingProductStats:(e,t)=>({type:se,productId:e,isFetching:t}),setStatsCounts:xe,setStatsCountsIsFetching:oe,...{setGlobalNotice:ae,cleanGlobalNotice:Me},...{setProduct:Te,activateProduct:e=>async t=>await Ue(e,{activate:!0},t),deactivateStandalonePluginForProduct:e=>async t=>await Ue(e,{activate:!1},t),installStandalonePluginForProduct:e=>async t=>{const{select:o,dispatch:s,registry:a}=t;return await new Promise((X,q)=>{if(!o.isValidProduct(e)){const g=k("Invalid product name","jetpack-my-jetpack"),y=new Error(g);s(ce(e,y)),s(ae(g,{status:"error",isDismissible:!0})),q(y);return}return s(V(e,!0)),(0,_.Z)({path:`${v}/${e}/install-standalone`,method:"POST"}).then(g=>{s(V(e,!1)),s(Te(g)),a.dispatch(S.t).refreshConnectedPlugins(),X(g==null?void 0:g.standalone_plugin_info)}).catch(g=>{const{name:y}=o.getProduct(e),ue=(0,u.gB)(k("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),y,g.message);s(V(e,!1)),s(ce(e,g)),s(ae(ue,{status:"error",isDismissible:!0})),q(g)})})},setIsFetchingProduct:V,setRequestProductError:ce,setProductStatus:ve}};function ie(){return new Promise((e,t)=>{(0,_.Z)({path:h}).then(e).catch(t)})}const n={[x]:ie};var c=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const d=(e={},t)=>{switch(t.type){case f:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s},errors:{...e.errors,[o]:s?void 0:e.errors[o]}}}case G:{const{productId:o,status:s}=t;return{...e,items:{...e.items,[o]:{...e.items[o],status:s}}}}case Z:{const{product:o}=t,{slug:s}=o;return{...e,items:{...e.items,[s]:o}}}case L:{const{productId:o,error:s}=t;return{...e,errors:{...e.errors,[o]:s}}}default:return e}},Se=(e={},t)=>{switch(t.type){case Y:return{...e,isFetching:t.isFetching};case te:return{...e,items:(t==null?void 0:t.productData)||{}};default:return e}},De=(e={},t)=>{switch(t.type){case M:return{...e,isFetching:t.isFetching};case H:return{...e,items:(t==null?void 0:t.purchases)||[]};default:return e}},Fe=(e={isFetching:!1,isAvailable:!1},t)=>{var o;switch(t.type){case J:return{...e,isFetching:t.isFetching};case F:return{...e,isAvailable:(o=t==null?void 0:t.chatAvailability)==null?void 0:o.is_available};default:return e}},he=(e={isFetching:!1,jwt:!1},t)=>{var o,s;switch(t.type){case w:return{...e,isFetching:t.isFetching};case m:return{...e,jwt:(s=(o=t==null?void 0:t.chatAuthentication)==null?void 0:o.user)==null?void 0:s.jwt};default:return e}},we=(e={},t)=>{switch(t.type){case B:return{...e,isFetching:t.isFetching};case D:return{...e,items:(t==null?void 0:t.availableLicenses)||[]};default:return e}},Ae=(e={global:{}},t)=>{switch(t.type){case de:{const{message:o,options:s}=t;return{...e,global:{message:o,options:s}}}case _e:return{...e,global:{}};default:return e}},Ie=(e={})=>e,je=(e={},t)=>{switch(t.type){case se:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s}}}case N:{const{productId:o,stats:s}=t;return{...e,items:{...e.items,[o]:s}}}default:return e}},Xe=(e={},t)=>{switch(t.type){case W:return{...e,isFetching:t.isFetching};case K:return{...e,data:(t==null?void 0:t.statsCounts)||{}};default:return e}},Je=(0,c.UY)({products:d,productData:Se,purchases:De,chatAvailability:Fe,chatAuthentication:he,availableLicenses:we,notices:Ae,plugins:Ie,stats:je,statsCounts:Xe});var be=r("../api/index.jsx"),Le=r("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const Ye=async()=>(0,_.Z)({path:I}),Qe=async e=>e===p?Ye():null,$e=u.__,qe={...{getProduct:{isFulfilled:(e,t)=>{var s;return(((s=e==null?void 0:e.products)==null?void 0:s.items)||{}).hasOwnProperty(t)&&!l.includes(t)},fulfill:e=>async({dispatch:t})=>{try{t.setIsFetchingProduct(e,!0);const o=await(0,_.Z)({path:`${v}/${e}`});return t.setProduct(o),t.setIsFetchingProduct(e,!1),Promise.resolve()}catch(o){if(t.setIsFetchingProduct(e,!1),o!=null&&o.code&&(o!=null&&o.message))return t.setRequestProductError(e,o),Promise.reject(o);throw new Error(o)}}},getPurchases:()=>async({dispatch:e})=>{e.setPurchasesIsFetching(!0);try{e.setPurchases(await(0,_.Z)({path:h})),e.setPurchasesIsFetching(!1)}catch(t){e.setPurchasesIsFetching(!1),t.code!=="not_connected"&&e.setGlobalNotice($e("There was an error fetching your purchases information. Check your site connectivity and try again.","jetpack-my-jetpack"),{status:"error"})}},getChatAvailability:()=>async({dispatch:e})=>{e.setChatAvailabilityIsFetching(!0);try{e.setChatAvailability(await(0,_.Z)({path:P})),e.setChatAvailabilityIsFetching(!1)}catch(t){e.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async({dispatch:e})=>{e.setChatAuthenticationIsFetching(!0);try{e.setChatAuthentication(await(0,_.Z)({path:U})),e.setChatAuthenticationIsFetching(!1)}catch(t){e.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async({dispatch:e})=>{e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:t,apiNonce:o}=(window==null?void 0:window.myJetpackRest)||{};be.ZP.setApiRoot(t),be.ZP.setApiNonce(o);const s=await be.ZP.getUserLicenses();s&&s.items?e.setAvailableLicenses(s.items.filter(({attached_at:a,revoked_at:X})=>a===null&&X===null)):e.setAvailableLicenses([])}catch(t){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getProductData:()=>async({dispatch:e})=>{e.setProductDataIsFetching(!0);try{e.setProductData(await(0,_.Z)({path:b})),e.setProductDataIsFetching(!1)}catch(t){e.setProductDataIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:t,registry:o}=e;t.setStatsCountsIsFetching(!0);const s=o.select(S.t).getBlogId();try{t.setStatsCounts(await(0,_.Z)({path:A(s)})),t.setStatsCountsIsFetching(!1)}catch(a){t.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.items)==null?void 0:s.hasOwnProperty(t))||!1},fulfill:e=>async({dispatch:t,select:o})=>{const{status:s}=o.getProduct(e);if(s!==Le.N.ACTIVE)return t.setProductStats(e,null),Promise.resolve();try{t.setIsFetchingProductStats(e,!0);const a=await Qe(e);return t.setProductStats(e,a),t.setIsFetchingProductStats(e,!1),Promise.resolve()}catch(a){if(t.setProductStats(e,null),t.setIsFetchingProductStats(e,!1),a!=null&&a.code&&(a!=null&&a.message))return Promise.reject(a);throw new Error(a)}}}};function et(e){return e.replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("_",""))}function tt(e){return e.indexOf("_")!==-1}function le(e={},t=!1){const o=Object.assign({},e);for(const s in o)o.hasOwnProperty(s)&&tt(s)&&(o[et(s)]=o[s],t&&delete o[s]);return o}const ye=e=>{var t;return((t=e.products)==null?void 0:t.items)||{}},Ge=e=>Object.keys(ye(e)),st={...{getProducts:ye,getProductNames:Ge,getProduct:(e,t)=>{var a,X;const o=((a=ye(e))==null?void 0:a[t])||{},s=le(o,!0);return s.standalonePluginInfo=le(s.standalonePluginInfo||{},!0),s.pricingForUi=le(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?le(s.pricingForUi.introductoryOffer,!0):null,(X=s.pricingForUi)!=null&&X.tiers&&(s.pricingForUi.tiers=le(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce((q,Re)=>{const g=le(s.pricingForUi.tiers[Re],!0)||{};return q[Re]={...g,introductoryOffer:g!=null&&g.isIntroductoryOffer?le(g==null?void 0:g.introductoryOffer,!0):null},q},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(e,t)=>Ge(e).includes(t),isFetching:(e,t)=>{var o,s;return((s=(o=e.products)==null?void 0:o.isFetching)==null?void 0:s[t])||!1},getProductsThatRequiresUserConnection:e=>{const t=ye(e);return Object.keys(t).reduce((o,s)=>{const a=t[s];return(a==null?void 0:a.requires_user_connection)&&((a==null?void 0:a.status)===Le.N.ACTIVE||(a==null?void 0:a.status)===Le.N.ERROR)&&o.push(a==null?void 0:a.name),o},[])}},...{getPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.items)||[]},isRequestingPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.isFetching)||!1}},...{getChatAvailability:e=>e.chatAvailability.isAvailable,isRequestingChatAvailability:e=>e.chatAvailability.isFetching},...{getChatAuthentication:e=>e.chatAuthentication.jwt,isRequestingChatAuthentication:e=>e.chatAuthentication.isFetching},...{getProductData:e=>{var t;return((t=e.productData)==null?void 0:t.items)||{}},isFetchingProductData:e=>{var t;return((t=e.productData)==null?void 0:t.isFetching)||!1}},...{getAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.items)||[]},isFetchingAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.isFetching)||!1}},...{getGlobalNotice:e=>{var t;return(t=e.notices)==null?void 0:t.global}},...{hasStandalonePluginInstalled:e=>Object.values(e.plugins).filter(t=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(t.TextDomain)>=0).length>0},...{getProductStats:(e,t)=>{var o,s;return(s=(o=e.stats)==null?void 0:o.items)==null?void 0:s[t]},isFetchingProductStats:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.isFetching)==null?void 0:s[t])||!1}},...{getStatsCounts:e=>{var t;return(t=e.statsCounts)==null?void 0:t.data},isFetchingStatsCounts:e=>{var t;return((t=e.statsCounts)==null?void 0:t.isFetching)||!1}}};var nt=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const Ce=class{static mayBeInit(t,o){Ce.store===null&&(Ce.store=(0,nt.Z)(t,o),(0,c.z2)(Ce.store))}};let fe=Ce;ke(fe,"store",null);const ot=fe,We="my-jetpack";function rt(){ot.mayBeInit(We,{__experimentalUseThunks:!0,reducer:Je,actions:Pe,selectors:st,resolvers:qe,controls:n,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(R,E,r)=>{r.d(E,{Z:()=>h});var S=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=r.n(S),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=r.n(u),i=T()(_());i.push([R.id,'.GTxJkEnk1nQQsd85aJFX{min-height:200px}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*3);min-height:28px;flex-wrap:wrap}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*.5)}.HMaSD8wdv3EFkpx0cFj6 h3{font-weight:700;line-height:28px}.nvijzcm26PCXyNqOKt0x{position:relative;display:flex}.nvijzcm26PCXyNqOKt0x .RciGXG52PWP5wKTnL50p{display:flex;align-items:center;justify-content:center;border:.5px solid var(--jp-black);box-shadow:inset 0 0 0 1px var(--jp-black);border-top-right-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius);cursor:pointer;padding:0}.nvijzcm26PCXyNqOKt0x .pOY9wXeTZXdEQKZILl6e{background-color:var(--jp-black);margin-left:.5px}.nvijzcm26PCXyNqOKt0x .AVZwaNLSRgcRMqKc48hG{background-color:var(--jp-white);border-left-width:0;margin-left:-0.5px}.DQJc9sMD_g3e_epwJHbg{position:absolute;top:calc(100% + var(--spacing-base));left:0;background:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);box-shadow:0px 1px 1px 0px rgba(0,0,0,.1),0px 1px 1.5px 0px rgba(0,0,0,.1),0px 2px 3px -0.5px rgba(0,0,0,.1);padding:var(--spacing-base)}.DQJc9sMD_g3e_epwJHbg .kZWhJcVFuDAKb3RT9PqL{display:flex;align-items:center;gap:calc(var(--spacing-base)*7);background-color:var(--jp-white);border:none;padding:var(--spacing-base);cursor:pointer;width:100%}.DQJc9sMD_g3e_epwJHbg .kZWhJcVFuDAKb3RT9PqL:hover{background-color:var(--jp-gray-0)}.DQJc9sMD_g3e_epwJHbg .AGNnRRrn8UoGCE9P37gA{display:flex;align-items:center;gap:calc(var(--spacing-base)*.5);font-size:var(--font-label)}.DQJc9sMD_g3e_epwJHbg .EPJdlXOWx5xJVl6EUL5_{background-color:var(--jp-green-50);height:25px;width:25px}.jjq8f4lZIJErfvIJMKfD a,.jjq8f4lZIJErfvIJMKfD button{border-top-right-radius:0;border-bottom-right-radius:0}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:28px;display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:8px;height:8px;margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),i.locals={container:"GTxJkEnk1nQQsd85aJFX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",title:"HMaSD8wdv3EFkpx0cFj6","action-button":"nvijzcm26PCXyNqOKt0x","dropdown-chevron":"RciGXG52PWP5wKTnL50p",primary:"pOY9wXeTZXdEQKZILl6e",secondary:"AVZwaNLSRgcRMqKc48hG","action-button-dropdown":"DQJc9sMD_g3e_epwJHbg","dropdown-item":"kZWhJcVFuDAKb3RT9PqL","dropdown-item-label":"AGNnRRrn8UoGCE9P37gA","active-action-checkmark":"EPJdlXOWx5xJVl6EUL5_","has-additional-actions":"jjq8f4lZIJErfvIJMKfD",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const h=i},"../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(R,E,r)=>{r.d(E,{Z:()=>h});var S=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=r.n(S),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),T={};T.insert="head",T.singleton=!1;var i=_()(u.Z,T);const h=u.Z.locals||{}}}]);})();
