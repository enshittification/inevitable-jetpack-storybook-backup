"use strict";(()=>{var at=Object.defineProperty;var it=(R,E,r)=>E in R?at(R,E,{enumerable:!0,configurable:!0,writable:!0,value:r}):R[E]=r;var ke=(R,E,r)=>(it(R,typeof E!="symbol"?E+"":E,r),r);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1668],{"../connection/components/use-connection/index.jsx":(R,E,r)=>{r.d(E,{Z:()=>O});var m=r("../api/index.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),u=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),T=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=r("../connection/state/store.jsx");const h=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},O=({registrationNonce:D=h.registrationNonce,apiRoot:I=h.apiRoot,apiNonce:N=h.apiNonce,redirectUri:_,autoTrigger:p,from:A,skipUserConnection:C}={})=>{const{registerSite:B,connectUser:Z,refreshConnectedPlugins:b}=(0,i.Z)(l.t),G=(0,u.Z)(S=>S(l.t).getRegistrationError()),{siteIsRegistering:v,userIsConnecting:U,userConnectionData:j,connectedPlugins:f,connectionErrors:W,isRegistered:L,isUserConnected:se,hasConnectedOwner:z,isOfflineMode:Y}=(0,u.Z)(S=>({siteIsRegistering:S(l.t).getSiteIsRegistering(),userIsConnecting:S(l.t).getUserIsConnecting(),userConnectionData:S(l.t).getUserConnectionData(),connectedPlugins:S(l.t).getConnectedPlugins(),connectionErrors:S(l.t).getConnectionErrors(),isOfflineMode:S(l.t).getIsOfflineMode(),...S(l.t).getConnectionStatus()})),w=()=>{if(C){if(_)return window.location=_,Promise.resolve(_)}else return Z({from:A,redirectUri:_});return Promise.resolve()},k=S=>(S&&S.preventDefault(),L?w():B({registrationNonce:D,redirectUri:_}).then(()=>w()));return(0,T.useEffect)(()=>{m.ZP.setApiRoot(I),m.ZP.setApiNonce(N)},[I,N]),(0,T.useEffect)(()=>{p&&!v&&!U&&k()},[]),{handleRegisterSite:k,handleConnectUser:w,refreshConnectedPlugins:b,isRegistered:L,isUserConnected:se,siteIsRegistering:v,userIsConnecting:U,registrationError:G,userConnectionData:j,hasConnectedOwner:z,connectedPlugins:f,connectionErrors:W,isOfflineMode:Y}}},"../connection/state/store.jsx":(R,E,r)=>{r.d(E,{t:()=>x});var m=r("../api/index.jsx");const i="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",T="FETCH_CONNECTION_STATUS",l="SET_SITE_IS_REGISTERING",h="SET_USER_IS_CONNECTING",O="SET_REGISTRATION_ERROR",D="CLEAR_REGISTRATION_ERROR",I="REGISTER_SITE",N="SET_AUTHORIZATION_URL",_="CONNECT_USER",p="DISCONNECT_USER_SUCCESS",A="FETCH_AUTHORIZATION_URL",C="SET_CONNECTED_PLUGINS",B="REFRESH_CONNECTED_PLUGINS",Z="SET_CONNECTION_ERRORS",b="SET_IS_OFFLINE_MODE",G=n=>({type:i,connectionStatus:n}),v=n=>({type:u,isFetching:n}),U=()=>({type:T}),j=n=>({type:l,isRegistering:n}),f=n=>({type:h,isConnecting:n}),W=()=>({type:p}),L=n=>({type:O,registrationError:n}),se=()=>({type:D}),z=n=>({type:N,authorizationUrl:n}),Y=n=>({type:A,redirectUri:n}),w=n=>({type:C,connectedPlugins:n}),k=n=>({type:Z,connectionErrors:n}),S=n=>({type:b,isOfflineMode:n});function*ne({from:n,redirectFunc:c,redirectUri:d}={}){yield f(!0),yield{type:_,from:n,redirectFunc:c,redirectUri:d}}function*M({registrationNonce:n,redirectUri:c}){yield se(),yield j(!0);try{const d=yield{type:I,registrationNonce:n,redirectUri:c};return yield G({isRegistered:!0}),yield z(d.authorizeUrl),yield j(!1),Promise.resolve(d)}catch(d){return yield L(d),yield j(!1),Promise.reject(d)}}const J={setConnectionStatus:G,setConnectionStatusIsFetching:v,fetchConnectionStatus:U,fetchAuthorizationUrl:Y,setSiteIsRegistering:j,setUserIsConnecting:f,setRegistrationError:L,clearRegistrationError:se,setAuthorizationUrl:z,registerSite:M,connectUser:ne,disconnectUserSuccess:W,setConnectedPlugins:w,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(c=>m.ZP.fetchConnectedPlugins().then(d=>{n(w(d)),c(d)})),setConnectionErrors:k,setIsOfflineMode:S};var oe=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const x="jetpack-connection",$=({registrationNonce:n,redirectUri:c})=>m.ZP.registerSite(n,c),X=(0,oe.R)(({resolveSelect:n})=>({from:c,redirectFunc:d,redirectUri:Te}={})=>new Promise((je,we)=>{n(x).getAuthorizationUrl(Te).then(me=>{const Fe=d||(De=>window.location.assign(De)),Ie=new URL(me);c&&Ie.searchParams.set("from",encodeURIComponent(c));const Ae=Ie.toString();Fe(Ae),je(Ae)}).catch(me=>{we(me)})})),q={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>m.ZP.fetchAuthorizationUrl(n),REGISTER_SITE:$,CONNECT_USER:X};var ee=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const de=(n={},c)=>{switch(c.type){case i:return{...n,...c.connectionStatus};case p:return{...n,isUserConnected:!1}}return n},pe=(n={},c)=>{switch(c.type){case C:return c.connectedPlugins}return n},F=(n=!1,c)=>{switch(c.type){case u:return c.isFetching}return n},K=(n=!1,c)=>{switch(c.type){case l:return c.isRegistering}return n},H=(n=!1,c)=>{switch(c.type){case h:return c.isConnecting}return n},Ee=(n,c)=>{switch(c.type){case D:return!1;case O:return c.registrationError;default:return n}},Re=(n,c)=>{switch(c.type){case N:return c.authorizationUrl;default:return n}},Oe=(n,c)=>{switch(c.type){default:return n}},Se=(n={},c)=>{switch(c.type){case Z:return c.connectionErrors}return n},Ne=(n=!1,c)=>{switch(c.type){case b:return c.isConnecting}return n},ce=(0,ee.UY)({connectionStatus:de,connectionStatusIsFetching:F,siteIsRegistering:K,userIsConnecting:H,registrationError:Ee,authorizationUrl:Re,userConnectionData:Oe,connectedPlugins:pe,connectionErrors:Se,isOfflineMode:Ne});var ve=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ae=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const V={...{getAuthorizationUrl:{isFulfilled:(n,...c)=>{const d=!!n.authorizationUrl,Te=(0,ve.Y)(x).hasFinishedResolution("getAuthorizationUrl",c);return d&&!Te&&(0,ae.W)(x).finishResolution("getAuthorizationUrl",c),d},*fulfill(n){const c=yield J.fetchAuthorizationUrl(n);yield J.setAuthorizationUrl(c.authorizeUrl)}}}},Me={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.wpcomUser},getBlogId:n=>{var c,d;return(d=(c=n==null?void 0:n.userConnectionData)==null?void 0:c.currentUser)==null?void 0:d.blogId}}};var He=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const ie=class{static mayBeInit(c,d){ie.store===null&&(ie.store=(0,He.Z)(c,d),(0,ee.z2)(ie.store))}};let ge=ie;ke(ge,"store",null);const Ze=ge,Ce=window.JP_CONNECTION_INITIAL_STATE;Ce||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ze.mayBeInit(x,{__experimentalUseThunks:!0,reducer:ce,actions:J,selectors:Me,resolvers:V,controls:q,initialState:Ce||{}})},"../../packages/my-jetpack/_inc/components/product-card/action-button.jsx":(R,E,r)=>{r.d(E,{N:()=>C,Z:()=>Z});var m=r("../components/components/button/index.tsx"),i=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),T=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),l=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=r("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),O=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),D=r.n(O),I=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=r("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),_=r("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),p=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const A=i.__,C={ACTIVE:"active",INACTIVE:"inactive",ERROR:"error",ABSENT:"plugin_absent",ABSENT_WITH_PLAN:"plugin_absent_with_plan",NEEDS_PURCHASE:"needs_purchase",NEEDS_PURCHASE_OR_FREE:"needs_purchase_or_free",CAN_UPGRADE:"can_upgrade"},B=({status:b,admin:G,name:v,slug:U,onActivate:j,additionalActions:f,onManage:W,onFixConnection:L,isFetching:se,isInstallingStandalone:z,isDeactivatingStandalone:Y,className:w,onAdd:k})=>{const[S,ne]=(0,I.useState)(!1),[M,_e]=(0,I.useState)({}),{detail:J}=(0,N.i)(U),{manageUrl:oe,purchaseUrl:re}=J,x=!oe,$=se||z||Y,X=(f==null?void 0:f.length)>0,P=(0,I.useMemo)(()=>({variant:$?void 0:"primary",disabled:$,className:w}),[$,w]),q=(0,I.useCallback)(()=>{switch(b){case C.ABSENT:case C.ABSENT_WITH_PLAN:{const F=b===C.ABSENT?(0,i.gB)(A("Get %s","jetpack-my-jetpack"),v):(0,i.gB)(A("Install %s","jetpack-my-jetpack"),v);return{...P,href:`#/add-${U}`,size:"small",variant:"link",weight:"regular",label:F,onClick:null}}case C.NEEDS_PURCHASE:case C.CAN_UPGRADE:{const F=A("Upgrade","jetpack-my-jetpack"),K=A("Purchase","jetpack-my-jetpack"),H=re?F:K;return{...P,href:re||`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:H,onClick:k}}case C.NEEDS_PURCHASE_OR_FREE:return{...P,href:`#/add-${U}`,size:"small",variant:"primary",weight:"regular",label:A("Start for free","jetpack-my-jetpack"),onClick:k};case C.ACTIVE:{const F=A("View","jetpack-my-jetpack"),K=A("Manage","jetpack-my-jetpack"),H=re?F:K;return{...P,disabled:x||(P==null?void 0:P.disabled),href:oe,size:"small",variant:"secondary",weight:"regular",label:H,onClick:W}}case C.ERROR:return{...P,href:"#/connection",size:"small",variant:"primary",weight:"regular",label:A("Fix connection","jetpack-my-jetpack"),onClick:L};case C.INACTIVE:return{...P,href:"",size:"small",variant:"secondary",weight:"regular",label:A("Activate","jetpack-my-jetpack"),onClick:j};default:return null}},[P,x,oe,v,j,k,L,W,re,U,b]),ee=(0,I.useMemo)(()=>X?[...f,q()]:[q()],[f,q,X]),de=(0,I.useCallback)(()=>{ne(!S)},[S]);if((0,I.useEffect)(()=>{_e(ee[0])},[ee]),!G)return(0,p.jsx)(m.Z,{...P,size:"small",variant:"link",weight:"regular",children:(0,i.gB)(A("Learn about %s","jetpack-my-jetpack"),v)});const pe=X&&(0,p.jsx)("div",{className:_.Z.dropdown,children:(0,p.jsx)("ul",{className:_.Z.dropdownMenu,children:[...f,q()].map(({label:F,isExternalLink:K},H)=>{const Ee=()=>{_e(ee[H]),ne(!1)};return(0,p.jsx)("li",{children:(0,p.jsxs)("button",{onClick:Ee,className:_.Z.dropdownItem,children:[(0,p.jsxs)("div",{className:_.Z.dropdownItemLabel,children:[F,K&&(0,p.jsx)(u.Z,{icon:T.Z,size:16})]}),F===M.label&&(0,p.jsx)("div",{className:_.Z.activeActionCheckmark,children:(0,p.jsx)(u.Z,{icon:l.Z,size:24,fill:"white"})})]})},H)})})});return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:D()(_.Z.actionButton,X?_.Z.hasAdditionalActions:null),children:[(0,p.jsx)(m.Z,{...P,...M,children:M.label}),X&&(0,p.jsx)("button",{className:D()(_.Z.dropdownChevron,M.variant==="primary"?_.Z.primary:_.Z.secondary),onClick:de,children:(0,p.jsx)(u.Z,{icon:h.Z,size:24,fill:M.variant==="primary"?"white":"black"})}),S&&pe]})})};B.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const Z=B},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(R,E,r)=>{r.d(E,{i:()=>T});var m=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=r("../../packages/my-jetpack/_inc/state/store.js");function T(l){const{activateProduct:h,deactivateProduct:O,installStandalonePluginForProduct:D,deactivateStandalonePluginForProduct:I}=(0,m.Z)(u.t),N=(0,i.Z)(_=>_(u.t).getProduct(l));return{activate:()=>h(l),deactivate:()=>O(l),deactivateStandalonePlugin:()=>I(l),installStandalonePlugin:()=>D(l),productsList:(0,i.Z)(_=>_(u.t).getProducts()),detail:N,isActive:N.status==="active",isFetching:(0,i.Z)(_=>_(u.t).isFetching(l)),stats:(0,i.Z)(_=>_(u.t).getProductStats(l))}}},"../../packages/my-jetpack/_inc/state/store.js":(R,E,r)=>{r.d(E,{t:()=>We,N:()=>rt});var m=r("../connection/state/store.jsx"),i=r("../../../node_modules/.pnpm/@wordpress+api-fetch@6.42.0/node_modules/@wordpress/api-fetch/build-module/index.js"),u=r("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js");const T="my-jetpack/v1",l="jetpack/v4/stats-app",h=`${T}/site/purchases`,O=`${T}/site/products`,D=`${T}/site/product-data`,I=`${T}/chat/availability`,N=`${T}/chat/authentication`,_=["scan"],p="videopress",A="videopress/v1/stats/featured",C=e=>`${l}/sites/${e}/stats/highlights`,B=u.__,Z="SET_PURCHASES_IS_FETCHING",b="FETCH_PURCHASES",G="SET_PURCHASES",v="SET_AVAILABLE_LICENSES_IS_FETCHING",U="FETCH_AVAILABLE_LICENSES",j="SET_AVAILABLE_LICENSES",f="SET_IS_FETCHING_PRODUCT",W="SET_PRODUCT",L="SET_PRODUCT_REQUEST_ERROR",se="ACTIVATE_PRODUCT",z="SET_PRODUCT_STATUS",Y="SET_CHAT_AVAILABILITY_IS_FETCHING",w="SET_CHAT_AVAILABILITY",k="SET_CHAT_AUTHENTICATION_IS_FETCHING",S="SET_CHAT_AUTHENTICATION",ne="SET_PRODUCT_DATA_IS_FETCHING",M="SET_PRODUCT_DATA",_e="SET_STATS_COUNTS_IS_FETCHING",J="SET_STATS_COUNTS",oe="SET_GLOBAL_NOTICE",re="CLEAN_GLOBAL_NOTICE",x="SET_PRODUCT_STATS",$="SET_IS_FETCHING_PRODUCT_STATS",X=e=>({type:Z,isFetching:e}),P=e=>({type:Y,isFetching:e}),q=e=>({type:k,isFetching:e}),ee=e=>({type:ne,isFetching:e}),de=e=>({type:_e,isFetching:e}),pe=()=>({type:b}),F=e=>({type:G,purchases:e}),K=e=>({type:w,chatAvailability:e}),H=e=>({type:S,chatAuthentication:e}),Ee=e=>({type:v,isFetching:e}),Re=()=>({type:U}),Oe=e=>({type:j,availableLicenses:e}),Se=e=>({type:W,product:e}),Ne=e=>({type:M,productData:e}),xe=e=>({type:J,statsCounts:e}),ce=(e,t)=>({type:L,productId:e,error:t}),ve=(e,t)=>({type:z,productId:e,status:t}),ae=(e,t)=>({type:"SET_GLOBAL_NOTICE",message:e,options:t}),Be=()=>({type:"CLEAN_GLOBAL_NOTICE"});function V(e,t){return{type:f,productId:e,isFetching:t}}function Ue(e,t,{select:o,dispatch:s,registry:a}){return new Promise((Q,te)=>{if(!o.isValidProduct(e)){const y=B("Invalid product name","jetpack-my-jetpack"),ue=new Error(y);s(ce(e,ue)),s(ae(y,{status:"error",isDismissible:!0})),te(ue);return}const g=t.activate?"POST":"DELETE";return s(V(e,!0)),(0,i.Z)({path:`${O}/${e}`,method:g}).then(y=>{s(V(e,!1)),s(Se(y)),a.dispatch(m.t).refreshConnectedPlugins(),Q(y==null?void 0:y.status)}).catch(y=>{const{name:ue}=o.getProduct(e),ct=(0,u.gB)(B("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),ue);s(V(e,!1)),s(ce(e,y)),s(ae(ct,{status:"error",isDismissible:!0})),te(y)})})}const Ce={setPurchasesIsFetching:X,setChatAvailabilityIsFetching:P,setChatAuthenticationIsFetching:q,fetchPurchases:pe,setPurchases:F,setChatAvailability:K,setChatAuthentication:H,setProductDataIsFetching:ee,setProductData:Ne,setAvailableLicensesIsFetching:Ee,fetchAvailableLicenses:Re,setAvailableLicenses:Oe,setProductStats:(e,t)=>({type:x,productId:e,stats:t}),setIsFetchingProductStats:(e,t)=>({type:$,productId:e,isFetching:t}),setStatsCounts:xe,setStatsCountsIsFetching:de,...{setGlobalNotice:ae,cleanGlobalNotice:Be},...{setProduct:Se,activateProduct:e=>async t=>await Ue(e,{activate:!0},t),deactivateStandalonePluginForProduct:e=>async t=>await Ue(e,{activate:!1},t),installStandalonePluginForProduct:e=>async t=>{const{select:o,dispatch:s,registry:a}=t;return await new Promise((Q,te)=>{if(!o.isValidProduct(e)){const g=B("Invalid product name","jetpack-my-jetpack"),y=new Error(g);s(ce(e,y)),s(ae(g,{status:"error",isDismissible:!0})),te(y);return}return s(V(e,!0)),(0,i.Z)({path:`${O}/${e}/install-standalone`,method:"POST"}).then(g=>{s(V(e,!1)),s(Se(g)),a.dispatch(m.t).refreshConnectedPlugins(),Q(g==null?void 0:g.standalone_plugin_info)}).catch(g=>{const{name:y}=o.getProduct(e),ue=(0,u.gB)(B("Failed to install standalone plugin for %1$s: %2$s. Please try again","jetpack-my-jetpack"),y,g.message);s(V(e,!1)),s(ce(e,g)),s(ae(ue,{status:"error",isDismissible:!0})),te(g)})})},setIsFetchingProduct:V,setRequestProductError:ce,setProductStatus:ve}};function ie(){return new Promise((e,t)=>{(0,i.Z)({path:h}).then(e).catch(t)})}const n={[b]:ie};var c=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const d=(e={},t)=>{switch(t.type){case f:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s},errors:{...e.errors,[o]:s?void 0:e.errors[o]}}}case z:{const{productId:o,status:s}=t;return{...e,items:{...e.items,[o]:{...e.items[o],status:s}}}}case W:{const{product:o}=t,{slug:s}=o;return{...e,items:{...e.items,[s]:o}}}case L:{const{productId:o,error:s}=t;return{...e,errors:{...e.errors,[o]:s}}}default:return e}},Te=(e={},t)=>{switch(t.type){case ne:return{...e,isFetching:t.isFetching};case M:return{...e,items:(t==null?void 0:t.productData)||{}};default:return e}},je=(e={},t)=>{switch(t.type){case Z:return{...e,isFetching:t.isFetching};case G:return{...e,items:(t==null?void 0:t.purchases)||[]};default:return e}},we=(e={isFetching:!1,isAvailable:!1},t)=>{var o;switch(t.type){case Y:return{...e,isFetching:t.isFetching};case w:return{...e,isAvailable:(o=t==null?void 0:t.chatAvailability)==null?void 0:o.is_available};default:return e}},me=(e={isFetching:!1,jwt:!1},t)=>{var o,s;switch(t.type){case k:return{...e,isFetching:t.isFetching};case S:return{...e,jwt:(s=(o=t==null?void 0:t.chatAuthentication)==null?void 0:o.user)==null?void 0:s.jwt};default:return e}},Fe=(e={},t)=>{switch(t.type){case v:return{...e,isFetching:t.isFetching};case j:return{...e,items:(t==null?void 0:t.availableLicenses)||[]};default:return e}},Ie=(e={global:{}},t)=>{switch(t.type){case oe:{const{message:o,options:s}=t;return{...e,global:{message:o,options:s}}}case re:return{...e,global:{}};default:return e}},Ae=(e={})=>e,De=(e={},t)=>{switch(t.type){case $:{const{productId:o,isFetching:s}=t;return{...e,isFetching:{...e.isFetching,[o]:s}}}case x:{const{productId:o,stats:s}=t;return{...e,items:{...e.items,[o]:s}}}default:return e}},Ve=(e={},t)=>{switch(t.type){case _e:return{...e,isFetching:t.isFetching};case J:return{...e,data:(t==null?void 0:t.statsCounts)||{}};default:return e}},Qe=(0,c.UY)({products:d,productData:Te,purchases:je,chatAvailability:we,chatAuthentication:me,availableLicenses:Fe,notices:Ie,plugins:Ae,stats:De,statsCounts:Ve});var be=r("../api/index.jsx"),Le=r("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx");const Ye=async()=>(0,i.Z)({path:A}),Je=async e=>e===p?Ye():null,$e=u.__,qe={...{getProduct:{isFulfilled:(e,t)=>{var s;return(((s=e==null?void 0:e.products)==null?void 0:s.items)||{}).hasOwnProperty(t)&&!_.includes(t)},fulfill:e=>async({dispatch:t})=>{try{t.setIsFetchingProduct(e,!0);const o=await(0,i.Z)({path:`${O}/${e}`});return t.setProduct(o),t.setIsFetchingProduct(e,!1),Promise.resolve()}catch(o){if(t.setIsFetchingProduct(e,!1),o!=null&&o.code&&(o!=null&&o.message))return t.setRequestProductError(e,o),Promise.reject(o);throw new Error(o)}}},getPurchases:()=>async({dispatch:e})=>{e.setPurchasesIsFetching(!0);try{e.setPurchases(await(0,i.Z)({path:h})),e.setPurchasesIsFetching(!1)}catch(t){e.setPurchasesIsFetching(!1),t.code!=="not_connected"&&e.setGlobalNotice($e("There was an error fetching your purchases information. Check your site connectivity and try again.","jetpack-my-jetpack"),{status:"error"})}},getChatAvailability:()=>async({dispatch:e})=>{e.setChatAvailabilityIsFetching(!0);try{e.setChatAvailability(await(0,i.Z)({path:I})),e.setChatAvailabilityIsFetching(!1)}catch(t){e.setChatAvailabilityIsFetching(!1)}},getChatAuthentication:()=>async({dispatch:e})=>{e.setChatAuthenticationIsFetching(!0);try{e.setChatAuthentication(await(0,i.Z)({path:N})),e.setChatAuthenticationIsFetching(!1)}catch(t){e.setChatAuthenticationIsFetching(!1)}},getAvailableLicenses:()=>async({dispatch:e})=>{e.setAvailableLicensesIsFetching(!0);try{const{apiRoot:t,apiNonce:o}=(window==null?void 0:window.myJetpackRest)||{};be.ZP.setApiRoot(t),be.ZP.setApiNonce(o);const s=await be.ZP.getUserLicenses();s&&s.items?e.setAvailableLicenses(s.items.filter(({attached_at:a,revoked_at:Q})=>a===null&&Q===null)):e.setAvailableLicenses([])}catch(t){e.setAvailableLicenses([])}finally{e.setAvailableLicensesIsFetching(!1)}},getProductData:()=>async({dispatch:e})=>{e.setProductDataIsFetching(!0);try{e.setProductData(await(0,i.Z)({path:D})),e.setProductDataIsFetching(!1)}catch(t){e.setProductDataIsFetching(!1)}},getStatsCounts:()=>async e=>{const{dispatch:t,registry:o}=e;t.setStatsCountsIsFetching(!0);const s=o.select(m.t).getBlogId();try{t.setStatsCounts(await(0,i.Z)({path:C(s)})),t.setStatsCountsIsFetching(!1)}catch(a){t.setStatsCountsIsFetching(!1)}}},getProductStats:{isFulfilled:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.items)==null?void 0:s.hasOwnProperty(t))||!1},fulfill:e=>async({dispatch:t,select:o})=>{const{status:s}=o.getProduct(e);if(s!==Le.N.ACTIVE)return t.setProductStats(e,null),Promise.resolve();try{t.setIsFetchingProductStats(e,!0);const a=await Je(e);return t.setProductStats(e,a),t.setIsFetchingProductStats(e,!1),Promise.resolve()}catch(a){if(t.setProductStats(e,null),t.setIsFetchingProductStats(e,!1),a!=null&&a.code&&(a!=null&&a.message))return Promise.reject(a);throw new Error(a)}}}};function et(e){return e.replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("_",""))}function tt(e){return e.indexOf("_")!==-1}function le(e={},t=!1){const o=Object.assign({},e);for(const s in o)o.hasOwnProperty(s)&&tt(s)&&(o[et(s)]=o[s],t&&delete o[s]);return o}const Pe=e=>{var t;return((t=e.products)==null?void 0:t.items)||{}},Ge=e=>Object.keys(Pe(e)),st={...{getProducts:Pe,getProductNames:Ge,getProduct:(e,t)=>{var a,Q;const o=((a=Pe(e))==null?void 0:a[t])||{},s=le(o,!0);return s.standalonePluginInfo=le(s.standalonePluginInfo||{},!0),s.pricingForUi=le(s.pricingForUi||{},!0),s.pricingForUi.introductoryOffer=s.pricingForUi.isIntroductoryOffer?le(s.pricingForUi.introductoryOffer,!0):null,(Q=s.pricingForUi)!=null&&Q.tiers&&(s.pricingForUi.tiers=le(s.pricingForUi.tiers,!0),s.pricingForUi.tiers=Object.keys(s.pricingForUi.tiers).reduce((te,fe)=>{const g=le(s.pricingForUi.tiers[fe],!0)||{};return te[fe]={...g,introductoryOffer:g!=null&&g.isIntroductoryOffer?le(g==null?void 0:g.introductoryOffer,!0):null},te},{})),s.features=s.features||[],s.supportedProducts=s.supportedProducts||[],s.pricingForUi.fullPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,s.pricingForUi.discountPricePerMonth=s.pricingForUi.productTerm==="year"?Math.ceil(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,s},isValidProduct:(e,t)=>Ge(e).includes(t),isFetching:(e,t)=>{var o,s;return((s=(o=e.products)==null?void 0:o.isFetching)==null?void 0:s[t])||!1},getProductsThatRequiresUserConnection:e=>{const t=Pe(e);return Object.keys(t).reduce((o,s)=>{const a=t[s];return(a==null?void 0:a.requires_user_connection)&&((a==null?void 0:a.status)===Le.N.ACTIVE||(a==null?void 0:a.status)===Le.N.ERROR)&&o.push(a==null?void 0:a.name),o},[])}},...{getPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.items)||[]},isRequestingPurchases:e=>{var t;return((t=e.purchases)==null?void 0:t.isFetching)||!1}},...{getChatAvailability:e=>e.chatAvailability.isAvailable,isRequestingChatAvailability:e=>e.chatAvailability.isFetching},...{getChatAuthentication:e=>e.chatAuthentication.jwt,isRequestingChatAuthentication:e=>e.chatAuthentication.isFetching},...{getProductData:e=>{var t;return((t=e.productData)==null?void 0:t.items)||{}},isFetchingProductData:e=>{var t;return((t=e.productData)==null?void 0:t.isFetching)||!1}},...{getAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.items)||[]},isFetchingAvailableLicenses:e=>{var t;return((t=e.availableLicenses)==null?void 0:t.isFetching)||!1}},...{getGlobalNotice:e=>{var t;return(t=e.notices)==null?void 0:t.global}},...{hasStandalonePluginInstalled:e=>Object.values(e.plugins).filter(t=>["jetpack-backup","jetpack-boost","jetpack-protect","jetpack-search","jetpack-social","jetpack-videopress"].indexOf(t.TextDomain)>=0).length>0},...{getProductStats:(e,t)=>{var o,s;return(s=(o=e.stats)==null?void 0:o.items)==null?void 0:s[t]},isFetchingProductStats:(e,t)=>{var o,s;return((s=(o=e.stats)==null?void 0:o.isFetching)==null?void 0:s[t])||!1}},...{getStatsCounts:e=>{var t;return(t=e.statsCounts)==null?void 0:t.data},isFetchingStatsCounts:e=>{var t;return((t=e.statsCounts)==null?void 0:t.isFetching)||!1}}};var nt=r("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const he=class{static mayBeInit(t,o){he.store===null&&(he.store=(0,nt.Z)(t,o),(0,c.z2)(he.store))}};let ye=he;ke(ye,"store",null);const ot=ye,We="my-jetpack";function rt(){ot.mayBeInit(We,{__experimentalUseThunks:!0,reducer:Qe,actions:Ce,selectors:st,resolvers:qe,controls:n,initialState:window.myJetpackInitialState||{}})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(R,E,r)=>{r.d(E,{Z:()=>h});var m=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=r.n(m),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=r.n(u),l=T()(i());l.push([R.id,'.GTxJkEnk1nQQsd85aJFX{min-height:200px}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*3);min-height:28px;flex-wrap:wrap}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*.5)}.HMaSD8wdv3EFkpx0cFj6 h3{font-weight:700;line-height:28px}.jIwW4aBmv_cOzGjQ373o{position:relative;display:flex}.jIwW4aBmv_cOzGjQ373o .A3cnOMmNvclCPkyFHSlo{display:flex;align-items:center;justify-content:center;border:.5px solid var(--jp-black);box-shadow:inset 0 0 0 1px var(--jp-black);border-top-right-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius);cursor:pointer;padding:0}.jIwW4aBmv_cOzGjQ373o .pOY9wXeTZXdEQKZILl6e{background-color:var(--jp-black);margin-left:.5px}.jIwW4aBmv_cOzGjQ373o .AVZwaNLSRgcRMqKc48hG{background-color:var(--jp-white);border-left-width:0;margin-left:-0.5px}.jxSXQodfEP2fbsUkQ5Nq{position:absolute;top:calc(100% + var(--spacing-base));left:0;background:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);box-shadow:0px 1px 1px 0px rgba(0,0,0,.1),0px 1px 1.5px 0px rgba(0,0,0,.1),0px 2px 3px -0.5px rgba(0,0,0,.1);padding:var(--spacing-base)}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2{display:flex;align-items:center;gap:calc(var(--spacing-base)*7);background-color:var(--jp-white);border:none;padding:var(--spacing-base);cursor:pointer;width:100%}.jxSXQodfEP2fbsUkQ5Nq .G8z7iIXBIpXbLLLqiWQ2:hover{background-color:var(--jp-gray-0)}.jxSXQodfEP2fbsUkQ5Nq .RvsvdG3ColJuDiYGC6LX{display:flex;align-items:center;gap:calc(var(--spacing-base)*.5);font-size:var(--font-label)}.jxSXQodfEP2fbsUkQ5Nq .I_qLJR_hKAWISHruy58w{background-color:var(--jp-green-50);height:25px;width:25px}.KS2IrAZSwufI9zS1rt7c a,.KS2IrAZSwufI9zS1rt7c button{border-top-right-radius:0;border-bottom-right-radius:0}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:28px;display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:8px;height:8px;margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),l.locals={container:"GTxJkEnk1nQQsd85aJFX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",title:"HMaSD8wdv3EFkpx0cFj6",actionButton:"jIwW4aBmv_cOzGjQ373o",dropdownChevron:"A3cnOMmNvclCPkyFHSlo",primary:"pOY9wXeTZXdEQKZILl6e",secondary:"AVZwaNLSRgcRMqKc48hG",dropdown:"jxSXQodfEP2fbsUkQ5Nq",dropdownItem:"G8z7iIXBIpXbLLLqiWQ2",dropdownItemLabel:"RvsvdG3ColJuDiYGC6LX",activeActionCheckmark:"I_qLJR_hKAWISHruy58w",hasAdditionalActions:"KS2IrAZSwufI9zS1rt7c",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const h=l},"../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(R,E,r)=>{r.d(E,{Z:()=>h});var m=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=r.n(m),u=r("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),T={};T.insert="head",T.singleton=!1;var l=i()(u.Z,T);const h=u.Z.locals||{}}}]);})();
