"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6322],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(C,j,e)=>{e.d(j,{Z:()=>_});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(t),i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/external.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),b=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js");function k(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const s=(0,b.Z)(m.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function n(h,P){const{href:a,children:f,className:v,rel:p="",...d}=h,y=[...new Set([...p.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),w=r()("components-external-link",v),g=!!(a!=null&&a.startsWith("#")),o=E=>{g&&E.preventDefault(),h.onClick&&h.onClick(E)};return(0,c.createElement)("a",{...d,className:w,href:a,onClick:o,target:"_blank",rel:y,ref:P},f,(0,c.createElement)(x.Z,{as:"span"},(0,i.__)("(opens in a new tab)")),(0,c.createElement)(s,{icon:l.Z,className:"components-external-link__icon"}))}const _=(0,c.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+element@5.14.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(C,j,e)=>{e.d(j,{Z:()=>P});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let t,r,i,l;const x=/<(\/)?(\w+)\s*(\/)?>/g;function b(a,f,v,p,d){return{element:a,tokenStart:f,tokenLength:v,prevOffset:p,leadingTextStart:d,children:[]}}const m=(a,f)=>{if(t=a,r=0,i=[],l=[],x.lastIndex=0,!k(f))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(s(f));return(0,c.createElement)(c.Fragment,null,...i)},k=a=>{const f=typeof a=="object",v=f&&Object.values(a);return f&&v.length&&v.every(p=>(0,c.isValidElement)(p))};function s(a){const f=n(),[v,p,d,y]=f,w=l.length,g=d>r?r:null;if(!a[p])return u(),!1;switch(v){case"no-more-tokens":if(w!==0){const{leadingTextStart:O,tokenStart:L}=l.pop();i.push(t.substr(O,L))}return u(),!1;case"self-closed":return w===0?(g!==null&&i.push(t.substr(g,d-g)),i.push(a[p]),r=d+y,!0):(_(b(a[p],d,y)),r=d+y,!0);case"opener":return l.push(b(a[p],d,y,d+y,g)),r=d+y,!0;case"closer":if(w===1)return h(d),r=d+y,!0;const o=l.pop(),E=t.substr(o.prevOffset,d-o.prevOffset);o.children.push(E),o.prevOffset=d+y;const U=b(o.element,o.tokenStart,o.tokenLength,d+y);return U.children=o.children,_(U),r=d+y,!0;default:return u(),!1}}function n(){const a=x.exec(t);if(a===null)return["no-more-tokens"];const f=a.index,[v,p,d,y]=a,w=v.length;return y?["self-closed",d,f,w]:p?["closer",d,f,w]:["opener",d,f,w]}function u(){const a=t.length-r;a!==0&&i.push(t.substr(r,a))}function _(a){const{element:f,tokenStart:v,tokenLength:p,prevOffset:d,children:y}=a,w=l[l.length-1],g=t.substr(w.prevOffset,v-w.prevOffset);g&&w.children.push(g),w.children.push((0,c.cloneElement)(f,null,...y)),w.prevOffset=d||v+p}function h(a){const{element:f,leadingTextStart:v,prevOffset:p,tokenStart:d,children:y}=l.pop(),w=a?t.substr(p,a-p):t.substr(p);w&&y.push(w),v!==null&&i.push(t.substr(v,d-v)),i.push((0,c.cloneElement)(f,null,...y))}const P=m},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js":(C,j,e)=>{e.d(j,{Z:()=>i});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,c.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(t.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/info.js":(C,j,e)=>{e.d(j,{Z:()=>i});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,c.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(t.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/plus.js":(C,j,e)=>{e.d(j,{Z:()=>i});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,c.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(t.y$,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/warning.js":(C,j,e)=>{e.d(j,{Z:()=>i});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,c.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,c.createElement)(t.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../analytics/index.jsx":(C,j,e)=>{e.d(j,{Z:()=>k});var c=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),t=e.n(c);const r=t()("dops:analytics");let i,l;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function x(s,n){let u="";if(typeof s=="object"){for(const _ in s)u+="&x_"+encodeURIComponent(_)+"="+encodeURIComponent(s[_]);r("Bumping stats %o",s)}else u="&x_"+encodeURIComponent(s)+"="+encodeURIComponent(n),r('Bumping stat "%s" in group "%s"',n,s);return u}function b(s,n){let u="";if(typeof s=="object"){for(const _ in s)u+="&"+encodeURIComponent(_)+"="+encodeURIComponent(s[_]);r("Built stats %o",s)}else u="&"+encodeURIComponent(s)+"="+encodeURIComponent(n),r('Built stat "%s" in group "%s"',n,s);return u}const m={initialize:function(s,n,u){m.setUser(s,n),m.setSuperProps(u),m.identifyUser()},setGoogleAnalyticsEnabled:function(s){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=s,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(s){this.mcAnalyticsEnabled=s},setUser:function(s,n){l={ID:s,username:n}},setSuperProps:function(s){i=s},assignSuperProps:function(s){i=Object.assign(i||{},s)},mc:{bumpStat:function(s,n){const u=x(s,n);m.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+u+"&t="+Math.random())},bumpStatWithPageView:function(s,n){const u=b(s,n);m.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+u+"&t="+Math.random())}},pageView:{record:function(s,n){m.tracks.recordPageView(s),m.ga.recordPageView(s,n)}},purchase:{record:function(s,n,u,_,h,P,a){m.ga.recordPurchase(s,n,u,_,h,P,a)}},tracks:{recordEvent:function(s,n){if(n=n||{},s.indexOf("akismet_")!==0&&s.indexOf("jetpack_")!==0){r('- Event name must be prefixed by "akismet_" or "jetpack_"');return}i&&(r("- Super Props: %o",i),n=Object.assign(n,i)),r('Record event "%s" called with props %s',s,JSON.stringify(n)),window._tkq.push(["recordEvent",s,n])},recordJetpackClick:function(s){const n=typeof s=="object"?s:{target:s};m.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(s){m.tracks.recordEvent("akismet_page_view",{path:s})},setOptOut:function(s){r("Pushing setOptOut: %o",s),window._tkq.push(["setOptOut",s])}},ga:{initialized:!1,initialize:function(){let s={};m.ga.initialized||(l&&(s={userId:"u-"+l.ID}),window.ga("create",this.googleAnalyticsKey,"auto",s),m.ga.initialized=!0)},recordPageView:function(s,n){m.ga.initialize(),r("Recording Page View ~ [URL: "+s+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",s),window.ga("send",{hitType:"pageview",page:s,title:n}))},recordEvent:function(s,n,u,_){m.ga.initialize();let h="Recording Event ~ [Category: "+s+"] [Action: "+n+"]";typeof u!="undefined"&&(h+=" [Option Label: "+u+"]"),typeof _!="undefined"&&(h+=" [Option Value: "+_+"]"),r(h),this.googleAnalyticsEnabled&&window.ga("send","event",s,n,u,_)},recordPurchase:function(s,n,u,_,h,P,a){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:s,revenue:_,currency:a}),window.ga("ecommerce:addItem",{id:s,name:n,sku:u,price:h,quantity:P}),window.ga("ecommerce:send")}},identifyUser:function(){l&&window._tkq.push(["identifyUser",l.ID,l.username])},setProperties:function(s){window._tkq.push(["setProperties",s])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},k=m},"../components/components/alert/index.tsx":(C,j,e)=>{e.d(j,{Z:()=>f});var c=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/warning.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/info.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=e.n(l),b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(m),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss"),n={};n.insert="head",n.singleton=!1;var u=k()(s.Z,n);const _=s.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=v=>{switch(v){case"error":return c.Z;case"warning":return c.Z;case"info":return t.Z;case"success":return r.Z;default:return c.Z}},a=v=>{let{level:p,children:d,showIcon:y}=v;const w=x()(_.container,_[`is-${p}`]);return(0,h.jsxs)("div",{className:w,children:[y&&(0,h.jsx)("div",{className:_["icon-wrapper"],children:(0,h.jsx)(i.Z,{icon:P(p),className:_.icon})}),(0,h.jsx)("div",{children:d})]})};a.displayName="Alert",a.defaultProps={level:"warning",showIcon:!0};const f=a},"../connection/hooks/use-product-checkout-workflow/index.jsx":(C,j,e)=>{e.d(j,{Z:()=>h});var c=e("../api/index.jsx");function t(P,a,f,v){const p=new URL("https://wordpress.com/checkout/"),d=new URL(`${p}${a}/${P}`);return d.searchParams.set("redirect_to",f),v||d.searchParams.set("unlinked","1"),d.searchParams.set("site",a),d.toString()}var r=e("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),l=e.n(i),x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("../connection/components/use-connection/index.jsx"),m=e("../connection/state/store.jsx");const k=l()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:s,apiRoot:n,apiNonce:u,siteSuffix:_}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function h(){let{productSlug:P,redirectUrl:a,siteSuffix:f=_,siteProductAvailabilityHandler:v=null,from:p}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};k("productSlug is %s",P),k("redirectUrl is %s",a),k("siteSuffix is %s",f),k("from is %s",p);const[d,y]=(0,x.useState)(!1),{registerSite:w}=(0,r.Z)(m.t),{isUserConnected:g,isRegistered:o,handleConnectUser:E}=(0,b.Z)({redirectUri:a,from:p}),U=t(P,f,a,g);k("checkoutProductUrl is %s",U),k("isUserConnected is %s",g);const O=()=>Promise.resolve(v&&v()).then(T=>{if(T)return k("handleAfterRegistration: Site has a product associated"),E();k("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",U),window.location.href=U}),L=T=>{if(T&&T.preventDefault(),y(!0),o)return O();w({registrationNonce:s,redirectUri:a}).then(O)};return(0,x.useEffect)(()=>{c.ZP.setApiRoot(n),c.ZP.setApiNonce(u)},[]),{run:L,isRegistered:o,hasCheckoutStarted:d}}},"../../packages/my-jetpack/_inc/components/product-detail-button/index.js":(C,j,e)=>{e.d(j,{Z:()=>m});var c=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=e.n(r),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=k=>{let{children:s,className:n,href:u,isLoading:_,onClick:h,isPrimary:P,disabled:a}=k;return(0,x.jsx)(c.ZP,{onClick:h,className:n,href:u,variant:P?"primary":"secondary",disabled:_||a,children:_?(0,x.jsx)(t.ZP,{}):s})};b.displayName="ProductDetailButton",b.propTypes={className:i().string,isLoading:i().bool,isPrimary:i().bool,disabled:i().bool},b.defaultProps={isLoading:!1,isPrimary:!0,disabled:!1},b.__docgenInfo={description:"",methods:[],displayName:"ProductDetailButton",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPrimary:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const m=b},"../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx":(C,j,e)=>{e.d(j,{Z:()=>L});var c=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),t=e("../components/components/text/index.tsx"),r=e("../components/components/icons/index.tsx"),i=e("../components/components/alert/index.tsx"),l=e("../components/components/terms-of-service/index.tsx"),x=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),b=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/plus.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(u),h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),a=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),f=e("../../packages/my-jetpack/_inc/components/product-detail-button/index.js"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(v),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-detail-card/style.module.scss"),y={};y.insert="head",y.singleton=!1;var w=p()(d.Z,y);const g=d.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=m.__;function U(T){let{value:I,currency:D,isOld:R}=T;if(!I||!D)return null;const N=(0,c.LR)(I,D),F=_()(g.price,{[g["is-old"]]:R});return(0,o.jsxs)(t.ZP,{className:F,variant:"headline-medium",component:"p",children:[(0,o.jsx)(t.ZP,{component:"sup",variant:"title-medium",children:N.symbol}),N.integer,(0,o.jsx)(t.ZP,{component:"sup",variant:"title-medium",children:N.fraction})]})}U.displayName="Price";const O=T=>{var le;let{slug:I,onClick:D,trackButtonClick:R,className:N,preferProductName:F,supportingInfo:X}=T;const{fileSystemWriteAccess:me,siteSuffix:Y,myJetpackUrl:$}=(le=window==null?void 0:window.myJetpackInitialState)!=null?le:{},{detail:G,isFetching:q}=(0,a.i)(I),{name:ee,title:_e,longDescription:ge,features:fe,disclaimers:se,pricingForUi:he,isBundle:S,supportedProducts:ve,hasRequiredPlan:B,status:je,pluginSlug:ye,postCheckoutUrl:te}=G,V=je==="plugin_absent"&&me==="no",{isFree:oe,trialAvailable:ne,fullPricePerMonth:H,currencyCode:ae,discountPricePerMonth:re,wpcomProductSlug:xe,wpcomFreeProductSlug:z,introductoryOffer:W,productTerm:we}=he,{recordEvent:ce}=(0,P.Z)(),ke=!oe&&!B,be=te||$,{run:ie,hasCheckoutStarted:Ee}=(0,x.Z)({productSlug:xe,redirectUrl:be,siteSuffix:Y,from:"my-jetpack"}),{run:de,hasCheckoutStarted:Pe}=(0,x.Z)({productSlug:z,redirectUrl:$,siteSuffix:Y,from:"my-jetpack"}),Ce=S?ve.join("_plus_").split("_").map((A,M)=>{if(A==="plus")return(0,o.jsx)(k.Z,{className:g["plus-icon"],icon:s.Z,size:14},`icon-plugs${M}`);const Z=(0,r.getIconBySlug)(A);return(0,o.jsx)(Z,{size:24},A)}):null;let K;(W==null?void 0:W.intervalUnit)==="month"&&(W==null?void 0:W.intervalCount)===1?K=(0,m.gB)(E("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),H):we==="year"?K=E("/month, paid yearly","jetpack-my-jetpack"):K=E("/month","jetpack-my-jetpack",0);const Se=(0,h.useCallback)(()=>{R(),D==null||D(ie,G)},[D,R,ie,G]),De=(0,h.useCallback)(()=>{R(z),D==null||D(de)},[D,R,de,z]),Ae=(0,h.useCallback)(A=>{ce("jetpack_myjetpack_product_card_disclaimer_click",{id:A,product:I})},[I,ce]);function Ue(A){let{slug:M}=A;const Z=(0,r.getIconBySlug)(M);return Z?(0,o.jsx)("div",{className:g["product-icon"],children:(0,o.jsx)(Z,{})}):null}const Oe=(!S||S&&!B)&&ne,J=ee&&F?ee:_e,Q=!S&&B?(0,m.gB)(E("Install %s","jetpack-my-jetpack"),J):(0,m.gB)(E("Get %s","jetpack-my-jetpack"),J);return(0,o.jsxs)("div",{className:_()(g.card,N,{[g["is-bundle-card"]]:S}),children:[S&&(0,o.jsxs)("div",{className:g["card-header"],children:[(0,o.jsx)(r.StarIcon,{className:g["product-bundle-icon"],size:16}),(0,o.jsx)(t.ZP,{variant:"label",children:E("Popular upgrade","jetpack-my-jetpack")})]}),(0,o.jsxs)("div",{className:g.container,children:[S&&(0,o.jsx)("div",{className:g["product-bundle-icons"],children:Ce}),(0,o.jsx)(Ue,{slug:I}),(0,o.jsx)(t.H3,{children:J}),(0,o.jsx)(t.ZP,{mb:3,children:ge}),(0,o.jsx)("ul",{className:g.features,children:fe.map((A,M)=>(0,o.jsxs)(t.ZP,{component:"li",variant:"body",children:[(0,o.jsx)(k.Z,{icon:n.Z,size:24}),A]},`feature-${M}`))}),ke&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:g["price-container"],children:[re<H&&(0,o.jsx)(U,{value:H,currency:ae,isOld:!0}),(0,o.jsx)(U,{value:re,currency:ae,isOld:!1})]}),(0,o.jsx)(t.ZP,{className:g["price-description"],children:K})]}),oe&&(0,o.jsx)(t.H3,{children:E("Free","jetpack-my-jetpack")}),V&&(0,o.jsx)(i.Z,{children:(0,o.jsxs)(t.ZP,{children:[(0,m.gB)(E("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),J),"\xA0",(0,o.jsx)(b.Z,{href:`https://wordpress.org/plugins/${ye}`,children:E("Get plugin","jetpack-my-jetpack")})]})}),(0,o.jsx)("div",{className:g["tos-container"],children:(0,o.jsx)(l.Z,{agreeButtonLabel:Oe?(0,m.gB)(E("%s or Start for free","jetpack-my-jetpack"),Q):Q})}),(!S||S&&!B)&&(0,o.jsx)(t.ZP,{component:f.Z,onClick:Se,isLoading:q||Ee,disabled:V,isPrimary:!S,className:g["checkout-button"],variant:"body",children:Q}),!S&&ne&&!B&&(0,o.jsx)(t.ZP,{component:f.Z,onClick:De,isLoading:q||Pe,disabled:V,isPrimary:!1,className:[g["checkout-button"],g["free-product-checkout-button"]],variant:"body",children:E("Start for free","jetpack-my-jetpack")}),se.length>0&&(0,o.jsx)("div",{className:g.disclaimers,children:se.map((A,M)=>{const{text:Z,link_text:ue=null,url:pe=null}=A;return(0,o.jsxs)(t.ZP,{component:"p",variant:"body-small",children:[`${Z} `,pe&&ue&&(0,o.jsx)(b.Z,{onClick:()=>Ae(M),href:pe,target:"_blank",rel:"noopener noreferrer",children:ue})]},`disclaimer-${M}`)})}),S&&B&&(0,o.jsxs)("div",{className:g["product-has-required-plan"],children:[(0,o.jsx)(r.CheckmarkIcon,{size:36}),(0,o.jsx)(t.ZP,{children:E("Active on your site","jetpack-my-jetpack")})]}),X&&(0,o.jsx)(t.ZP,{className:g["supporting-info"],variant:"body-extra-small",children:X})]})]})};O.displayName="ProductDetailCard",O.defaultProps={trackButtonClick:()=>{}},O.__docgenInfo={description:`Product Detail component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {Function} props.onClick               - Callback for Call To Action button click
@param {Function} props.trackButtonClick      - Function to call for tracking clicks on Call To Action button
@param {string} props.className               - A className to be concat with default ones
@param {boolean} props.preferProductName      - Use product name instead of title
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@returns {object}                               ProductDetailCard react component.`,methods:[],displayName:"ProductDetailCard",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const L=O},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(C,j,e)=>{e.d(j,{As:()=>u,TN:()=>n,h7:()=>_});const s={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function n(h){const a=h.constructor===Array?h:[h],f=a.map(p=>({url:`my-jetpack/v1/site/products/${p}?_locale=user`,method:"GET",status:200,response:s[p]})),v=a.map(p=>({url:`my-jetpack/v1/site/products/${p}?_locale=user`,method:"POST",status:200,response:{...s[p],status:s[p].status==="active"?"inactive":"active"}}));return[...f,...v]}function u(){return n([...Object.keys(s)])}function _(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(C,j,e)=>{e.d(j,{Z:()=>l});var c=e("../analytics/index.jsx"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const l=()=>{var w;const{isUserConnected:x,connectedPlugins:b,userConnectionData:m={}}=(0,r.Z)(),{login:k,ID:s}=((w=m.currentUser)==null?void 0:w.wpcomUser)||{};(0,t.useEffect)(()=>{x&&s&&k&&c.Z.initialize(s,k)},[s,x,k]);const n=Object.keys(b||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:u,ga:_,mc:h,pageView:P,purchase:a,setGoogleAnalyticsEnabled:f,setMcAnalyticsEnabled:v,setProperties:p,tracks:d}=c.Z,y=(0,t.useCallback)((g,o)=>{var E;d.recordEvent(g,{...o,version:(E=window==null?void 0:window.myJetpackInitialState)==null?void 0:E.myJetpackVersion,referring_plugins:n})},[]);return{clearedIdentity:u,ga:_,mc:h,pageView:P,purchase:a,recordEvent:y,setGoogleAnalyticsEnabled:f,setMcAnalyticsEnabled:v,setProperties:p,tracks:d}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(C,j,e)=>{e.d(j,{Z:()=>t});var c=e("../connection/components/use-connection/index.jsx");function t(){const{apiRoot:r,apiNonce:i}=myJetpackRest,{topJetpackMenuItemUrl:l}=myJetpackInitialState,x=(0,c.Z)({apiRoot:r,apiNonce:i}),b=x.isRegistered;return{apiNonce:i,apiRoot:r,...x,isSiteConnected:b,topJetpackMenuItemUrl:l}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss":(C,j,e)=>{e.d(j,{Z:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),l=i()(t());l.push([C.id,".Dr0cuxITW73j59FHThKT{display:flex;font-size:var(--font-body);line-height:calc(var(--spacing-base)*3);min-height:calc(var(--spacing-base)*3);align-items:center;margin:calc(var(--spacing-base)*2) 0}.MvLl9qD45yS7rUIyU2b9{margin-right:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);align-self:flex-start}.ohoU9eXsknJB46U8_yUC{color:var(--jp-red)}.ohoU9eXsknJB46U8_yUC .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-red)}.xcWqXBF4JgwHVsWxcq7h{color:var(--jp-yellow-40)}.xcWqXBF4JgwHVsWxcq7h .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-yellow-40)}.uZCUo9QKwj0rhAqpnax_{color:var(--jp-blue-40)}.uZCUo9QKwj0rhAqpnax_ .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-blue-40)}._77DMIzaNHFlGFVGYEe5{color:var(--jp-green)}._77DMIzaNHFlGFVGYEe5 .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-green)}",""]),l.locals={container:"Dr0cuxITW73j59FHThKT","icon-wrapper":"MvLl9qD45yS7rUIyU2b9","is-error":"ohoU9eXsknJB46U8_yUC",icon:"ANCBGRVQXZHwMJxaTEgq","is-warning":"xcWqXBF4JgwHVsWxcq7h","is-info":"uZCUo9QKwj0rhAqpnax_","is-success":"_77DMIzaNHFlGFVGYEe5"};const x=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-detail-card/style.module.scss":(C,j,e)=>{e.d(j,{Z:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(r),l=i()(t());l.push([C.id,'.TlE54B_AcJRKzBw09p6M{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.I3w1Og4pyJv3yTw9mnOu{height:100%;display:flex;flex-direction:column}.bE3ofHwMi1IlQENYlLJU{display:flex;align-items:center;background:var(--jp-black);color:var(--jp-white);border-radius:var(--jp-border-radius) var(--jp-border-radius) 0 0;padding:0 var(--spacing-base);height:calc(var(--spacing-base)*4);position:absolute;top:0;left:0;width:100%}.BxDAU0UXtHjSORwUtg4h{fill:var(--jp-white);margin-right:var(--spacing-base)}.qf_82WgEiZd33lC4ejDb,.Dk_SwnQspu4TMl26qW1s{display:flex;align-items:center;height:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*4)}.dBu7cSAgiWdRYU_KDr0Q{fill:#8c8f94;height:24px;line-height:24px}.CjdnKw1oivDy6iWxfEoQ{display:flex;justify-content:center;align-items:center}.CjdnKw1oivDy6iWxfEoQ svg{margin-right:var(--spacing-base)}.LGMMQKSdhExg9S4_ognl{display:inline-block;padding:.5em 2em;text-align:center;width:100%;min-height:42px}.LGMMQKSdhExg9S4_ognl .iOGj71wtRHBGs6nS7J8b{margin:0}.LGMMQKSdhExg9S4_ognl.components-button.is-primary{height:auto;white-space:normal}.LGMMQKSdhExg9S4_ognl.is-secondary:hover:not(:disabled){background-color:var(--jp-black);color:var(--jp-white)}.Plj2_kiivZIb1JWSuZIL{margin-top:calc(var(--spacing-base)*2)}.P4TEVxM9laYGCYqtmUhR{margin:0;padding:0;flex-grow:1;margin-bottom:calc(var(--spacing-base)*2)}.P4TEVxM9laYGCYqtmUhR li{list-style:none;display:flex;align-items:flex-start;margin-bottom:var(--spacing-base)}.P4TEVxM9laYGCYqtmUhR svg{fill:var(--jp-green-primary);margin-right:var(--spacing-base);flex-shrink:0}.PifVuCCNItonu0_B2CDi{margin-top:calc(var(--spacing-base)*2)}.RtLI9cgxtlgt0iA6b1lY{display:flex;flex-wrap:wrap;align-items:flex-end;color:var(--jp-text-color)}.Txs_N_ltfE2SY8hod4il{position:relative}.Txs_N_ltfE2SY8hod4il:first-child{margin-right:calc(var(--spacing-base)*2)}.Txs_N_ltfE2SY8hod4il.kXnOAWsoh9ijbPv12wuQ{color:var(--jp-gray-20)}.Txs_N_ltfE2SY8hod4il.kXnOAWsoh9ijbPv12wuQ:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.cd5T86CWtWlWKlxOj4hJ{color:var(--jp-gray-40);margin-bottom:calc(var(--spacing-base)*3)}.m4Yvd8QIPtybCSG5HMK5{margin-top:calc(var(--spacing-base)*5)}.GrKjNwMp2b54Jl8_T5Kj{margin-bottom:calc(var(--spacing-base)*4)}',""]),l.locals={card:"TlE54B_AcJRKzBw09p6M",container:"I3w1Og4pyJv3yTw9mnOu","card-header":"bE3ofHwMi1IlQENYlLJU","product-bundle-icon":"BxDAU0UXtHjSORwUtg4h","product-bundle-icons":"qf_82WgEiZd33lC4ejDb","product-icon":"Dk_SwnQspu4TMl26qW1s","plus-icon":"dBu7cSAgiWdRYU_KDr0Q","product-has-required-plan":"CjdnKw1oivDy6iWxfEoQ","checkout-button":"LGMMQKSdhExg9S4_ognl","components-spinner":"iOGj71wtRHBGs6nS7J8b","free-product-checkout-button":"Plj2_kiivZIb1JWSuZIL",features:"P4TEVxM9laYGCYqtmUhR",disclaimers:"PifVuCCNItonu0_B2CDi","price-container":"RtLI9cgxtlgt0iA6b1lY",price:"Txs_N_ltfE2SY8hod4il","is-old":"kXnOAWsoh9ijbPv12wuQ","price-description":"cd5T86CWtWlWKlxOj4hJ","supporting-info":"m4Yvd8QIPtybCSG5HMK5","tos-container":"GrKjNwMp2b54Jl8_T5Kj"};const x=l}}]);})();