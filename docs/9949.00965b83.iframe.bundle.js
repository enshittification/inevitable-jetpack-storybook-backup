"use strict";(()=>{var Ze=Object.defineProperty;var Je=(_,i,t)=>i in _?Ze(_,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[i]=t;var le=(_,i,t)=>(Je(_,typeof i!="symbol"?i+"":i,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9949],{"../../plugins/protect/src/js/hooks/use-protect-data/index.js":(_,i,t)=>{t.d(i,{Z:()=>m});var v=t("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../plugins/protect/src/js/state/store.js");function m(){const{statusIsFetching:h,status:n,jetpackScan:P,hasRequiredPlan:x}=(0,v.Z)(r=>({statusIsFetching:r(o.t).getStatusIsFetching(),status:r(o.t).getStatus(),jetpackScan:r(o.t).getJetpackScan(),hasRequiredPlan:r(o.t).hasRequiredPlan()}));let T="error";h===!0?T="loading":n.status&&(T=n.status);const f=(0,u.useMemo)(()=>{var r,l;return((l=(r=n.core)==null?void 0:r.threats)==null?void 0:l.length)||0},[n.core]),S=(0,u.useMemo)(()=>(n.plugins||[]).reduce((r,l)=>r+l.threats.length,0),[n.plugins]),w=(0,u.useMemo)(()=>(n.themes||[]).reduce((r,l)=>r+l.threats.length,0),[n.themes]),d=(0,u.useMemo)(()=>{var r;return((r=n.files)==null?void 0:r.length)||0},[n.files]),E=(0,u.useMemo)(()=>{var r;return((r=n.database)==null?void 0:r.length)||0},[n.database]);return{numThreats:f+S+w+d+E,numCoreThreats:f,numPluginsThreats:S,numThemesThreats:w,numFilesThreats:d,numDatabaseThreats:E,lastChecked:n.lastChecked||null,errorCode:n.errorCode||null,errorMessage:n.errorMessage||null,core:n.core||{},plugins:n.plugins||[],themes:n.themes||[],files:{threats:n.files||[]},database:{threats:n.database||[]},currentStatus:T,hasUncheckedItems:n.hasUncheckedItems,jetpackScan:P,hasRequiredPlan:x}}},"../../plugins/protect/src/js/state/store.js":(_,i,t)=>{t.d(i,{t:()=>ue,N:()=>Xe});var v=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),u=t.n(v),o=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.48.0/node_modules/@wordpress/api-fetch/build-module/index.js"),m=t("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js");const h=m._n,n=m.__,P="SET_CREDENTIALS_STATE_IS_FETCHING",x="SET_CREDENTIALS_STATE",T="SET_STATUS",f="SET_STATUS_PROGRESS",S="START_SCAN_OPTIMISTICALLY",w="SET_STATUS_IS_FETCHING",d="SET_SCAN_IS_UNAVAILABLE",E="SET_SCAN_IS_ENQUEUING",A="SET_INSTALLED_PLUGINS",r="SET_INSTALLED_THEMES",l="SET_WP_VERSION",L="SET_JETPACK_SCAN",g="SET_PRODUCT_DATA",D="SET_THREAT_IS_UPDATING",j="SET_THREATS_ARE_FIXING",U="SET_MODAL",b="SET_NOTICE",V="CLEAR_NOTICE",N="SET_HAS_REQUIRED_PLAN",z="SET_ONBOARDING_PROGRESS",k="SET_WAF_IS_SEEN",O="SET_WAF_UPGRADE_IS_SEEN",F="SET_WAF_IS_ENABLED",W="SET_WAF_IS_UPDATING",M="SET_WAF_IS_TOGGLING",R="SET_WAF_CONFIG",B="SET_WAF_STATS",X=e=>({type:T,status:e}),H=e=>({type:f,currentProgress:e}),Z=()=>({type:S}),Y=()=>({dispatch:e})=>{(0,o.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(ce(s)))},C=e=>(0,o.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),I=(e=!1)=>async({dispatch:s})=>(s($(!0)),await new Promise((a,c)=>C(e).then(ne).then(p=>{s(ae(p.status==="unavailable")),s(X(u()(p))),a(p)}).catch(p=>{c(p)}).finally(()=>{s($(!1))}))),ne=(e,s=0)=>new Promise((a,c)=>{e.status==="unavailable"&&s<3?C(!0).then(p=>{setTimeout(()=>{ne(p,s+1).then(K=>a(K)).catch(K=>c(K))},5e3)}).catch(c):a(e)}),pe=()=>async({dispatch:e})=>await new Promise((s,a)=>(e(Q(!0)),(0,o.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(c=>{e(re(c)),s(c)}).catch(c=>{a(c)}).finally(()=>{e(Q(!1))}))),Q=e=>({type:P,isFetching:e}),re=e=>({type:x,credentials:e}),$=e=>({type:w,status:e}),ae=e=>({type:d,status:e}),ee=e=>({type:E,isEnqueuing:e}),_e=e=>({type:A,plugins:e}),Ee=e=>({type:r,themes:e}),ge=e=>({type:l,version:e}),me=e=>({type:L,scan:e}),J=(e,s)=>({type:D,payload:{threatId:e,isUpdating:s}}),se=e=>({type:j,threatIds:e}),he=(e,s=()=>{})=>async({dispatch:a})=>(a(J(e,!0)),await new Promise(()=>(0,o.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>a(I())).then(()=>a(y({type:"success",message:n("Threat ignored","jetpack-protect")}))).catch(()=>a(y({type:"error",message:n("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{a(J(e,!1)),s()}))),oe=e=>async({dispatch:s})=>{const a=e.reduce((c,p)=>`${c}threat_ids[]=${p}&`,"jetpack-protect/v1/fix-threats-status?");return s(se(e)),await(0,o.Z)({path:a,method:"GET"}).then(async c=>{const p=Object.values(c.threats);if(p.filter(te=>te.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(oe(e))},1e3)});if(!p.filter(te=>te.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(I()),s(y({type:"success",message:(0,m.gB)(h("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(y({type:"error",message:n("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(se([]))})},Se=(e,s=()=>{})=>async({dispatch:a})=>(e.forEach(c=>{a(J(c,!0))}),await new Promise(()=>(0,o.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>a(y({type:"success",message:n("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>a(oe(e)),1e3)}).catch(()=>a(y({type:"error",message:n("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(c=>{a(J(c,!1))}),s()}))),Ae=(e=()=>{})=>async({dispatch:s})=>(s(ee(!0)),await new Promise(()=>(0,o.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(Z()),setTimeout(()=>s(I(!0)),5e3)}).catch(()=>s(y({type:"error",message:n("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(ee(!1)),e()}))),Te=e=>({type:U,payload:e}),y=e=>({type:b,payload:e}),fe=()=>({type:V}),ce=e=>({type:N,hasRequiredPlan:e}),ie={checkCredentials:pe,setCredentials:re,setCredentialsIsFetching:Q,setStatus:X,setStatusProgress:H,startScanOptimistically:Z,refreshStatus:I,setStatusIsFetching:$,setScanIsEnqueuing:ee,setInstalledPlugins:_e,setInstalledThemes:Ee,setwpVersion:ge,setJetpackScan:me,ignoreThreat:he,setModal:Te,setNotice:y,clearNotice:fe,fixThreats:Se,scan:Ae,setThreatsAreFixing:se,refreshPlan:Y,setHasRequiredPlan:ce,setScanIsUnavailable:ae,setOnboardingProgress:e=>({type:z,progress:e}),setWafIsEnabled:e=>({type:F,isEnabled:e}),setWafIsSeen:e=>({type:k,isSeen:e}),setWafUpgradeIsSeen:e=>({type:O,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:W,isUpdating:e}),setWafIsToggling:e=>({type:M,isToggling:e}),setWafConfig:e=>({type:R,config:e}),setWafStats:e=>({type:B,stats:e})};var de=t("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ye=(e=null,s)=>{switch(s.type){case x:return s.credentials}return e},ve=(e=!1,s)=>{switch(s.type){case P:return s.isFetching}return e},be=(e={},s)=>{switch(s.type){case T:return s.status;case f:return{...e,currentProgress:s.currentProgress};case S:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},Ie=(e=!1,s)=>{switch(s.type){case w:return s.status}return e},Pe=(e=!1,s)=>{switch(s.type){case d:return s.status}return e},xe=(e=!1,s)=>{switch(s.type){case E:return s.isEnqueuing}return e},we=(e={},s)=>{switch(s.type){case A:return s.plugins}return e},je=(e={},s)=>{switch(s.type){case r:return s.themes}return e},Oe=(e={},s)=>{switch(s.type){case l:return s.version}return e},Ne=(e={},s)=>{switch(s.type){case L:return s.scan}return e},ke=(e={},s)=>{switch(s.type){case D:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},Re=(e=[],s)=>{switch(s.type){case j:return s.threatIds}return e},Ce=(e={},s)=>{switch(s.type){case U:return{...e,...s.payload}}return e},Ge=(e={},s)=>{switch(s.type){case b:return{...e,...s.payload};case V:return{}}return e},Le=(e=!1,s)=>{switch(s.type){case N:return s.hasRequiredPlan}return e},De=(e=null,s)=>{switch(s.type){case z:return s.progress}return e},Ue={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Ve=(e=Ue,s)=>{switch(s.type){case k:return{...e,isSeen:s.isSeen};case O:return{...e,upgradeIsSeen:s.upgradeIsSeen};case F:return{...e,isEnabled:s.isEnabled};case R:return{...e,config:s.config};case B:return{...e,stats:s.stats};case W:return{...e,isUpdating:s.isUpdating};case M:return{...e,isToggling:s.isToggling}}return e},ze=(0,de.UY)({credentials:ye,credentialsIsFetching:ve,status:be,statusIsFetching:Ie,scanIsUnavailable:Pe,scanIsEnqueuing:xe,installedPlugins:we,installedThemes:je,wpVersion:Oe,jetpackScan:Ne,threatsUpdating:ke,modal:Ce,notice:Ge,setThreatsFixing:Re,hasRequiredPlan:Le,onboardingProgress:De,waf:Ve}),Fe={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,o.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(ie.setJetpackScan(s))}}},We={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var Me=t("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const G=class{static mayBeInit(s,a){G.store===null&&(G.store=(0,Me.Z)(s,a),(0,de.z2)(G.store))}};let q=G;le(q,"store",null);const Be=q,ue="jetpack-protect";function Xe(){Be.mayBeInit(ue,{__experimentalUseThunks:!0,reducer:ze,actions:ie,selectors:We,resolvers:Fe,initialState:u()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(_,i,t)=>{t.d(i,{Z:()=>r});var v=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),u=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),m=t("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),h=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=t.n(h),P=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=t.n(x),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),S={};S.insert="head",S.singleton=!1;var w=T()(f.Z,S);const d=f.Z.locals||{};var E=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const A=(0,P.forwardRef)((l,L)=>{var C,I;const{children:g,variant:D="primary",size:j="normal",weight:U="bold",icon:b,iconSize:V,disabled:N,isDestructive:z,isLoading:k,isExternalLink:O,className:F,text:W,fullWidth:M,...R}=l,B=n()(d.button,F,{[d.normal]:j==="normal",[d.small]:j==="small",[d.icon]:!!b,[d.loading]:k,[d.regular]:U==="regular",[d["full-width"]]:M,[d["is-icon-button"]]:!!b&&!g});R.ref=L;const X=j==="normal"?20:16,H=O&&(0,E.jsx)(o.Z,{size:X,icon:m.Z,className:d["external-icon"]}),Z=O?"_blank":void 0,Y=(g==null?void 0:g[0])&&g[0]!==null&&((I=(C=g==null?void 0:g[0])==null?void 0:C.props)==null?void 0:I.className)!=="components-tooltip";return(0,E.jsxs)(v.ZP,{target:Z,variant:D,className:n()(B,{"has-text":!!b&&Y}),icon:O?void 0:b,iconSize:V,disabled:N,"aria-disabled":N,isDestructive:z,text:W,...R,children:[k&&(0,E.jsx)(u.ZP,{}),(0,E.jsx)("span",{children:g}),H]})});A.displayName="Button";const r=A;try{A.displayName="Button",A.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:A.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(l){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(_,i,t)=>{t.d(i,{Z:()=>n});var v=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(v),o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=t.n(o),h=m()(u());h.push([_.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),h.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const n=h}}]);})();
