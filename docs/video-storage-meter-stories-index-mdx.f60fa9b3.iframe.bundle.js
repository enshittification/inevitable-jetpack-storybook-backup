(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7508,1119],{"../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js":(j,r,e)=>{"use strict";e.d(r,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s])}return o},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(j,r,e)=>{"use strict";var d;e.d(r,{L:()=>s,j:()=>p});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=function(c){return c()},i=(d||(d=e.t(o,2)))["useInsertionEffect"]?(d||(d=e.t(o,2)))["useInsertionEffect"]:!1,s=i||t,p=i||o.useLayoutEffect},"../../packages/videopress/src/client/admin/components/video-storage-meter/stories/index.stories.tsx":(j,r,e)=>{var h,g,_;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>c,_default:()=>a,default:()=>s});var d=e("../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import VideoStorageMeter from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Storage Meter',
	component: VideoStorageMeter,
} as ComponentMeta< typeof VideoStorageMeter >;

const Template: ComponentStory< typeof VideoStorageMeter > = args => (
	<VideoStorageMeter { ...args } />
);

export const _default = Template.bind( {} );
_default.args = {
	total: 1024 * 1024 * 1024 * 1024, // 1 TiB
	used: ( 1024 * 1024 * 1024 * 1024 ) / 2, // 50%
};
`,i={_default:{startLoc:{col:61,line:9},endLoc:{col:1,line:11},startBody:{col:61,line:9},endBody:{col:1,line:11}}};const s={parameters:{storySource:{source:`import VideoStorageMeter from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Storage Meter',
	component: VideoStorageMeter,
} as ComponentMeta< typeof VideoStorageMeter >;

const Template: ComponentStory< typeof VideoStorageMeter > = args => (
	<VideoStorageMeter { ...args } />
);

export const _default = Template.bind( {} );
_default.args = {
	total: 1024 * 1024 * 1024 * 1024, // 1 TiB
	used: ( 1024 * 1024 * 1024 * 1024 ) / 2, // 50%
};
`,locationsMap:{default:{startLoc:{col:61,line:9},endLoc:{col:1,line:11},startBody:{col:61,line:9},endBody:{col:1,line:11}}}}},title:"Packages/VideoPress/Video Storage Meter",component:d.Z},p=n=>(0,o.jsx)(d.Z,{...n});p.displayName="Template";const a=p.bind({});a.args={total:1024*1024*1024*1024,used:1024*1024*1024*1024/2},a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"args => <VideoStorageMeter {...args} />",...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const c=["_default"]},"../../packages/videopress/src/client/admin/components/video-storage-meter/stories/index.mdx":(j,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>g});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),i=e.n(t),s=e("../../../node_modules/.pnpm/@storybook+blocks@7.6.5_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),p=e("../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx"),a=e("../../packages/videopress/src/client/admin/components/video-storage-meter/stories/index.stories.tsx");function c(_){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,t.useMDXComponents)(),_.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h_,{of:a}),`
`,(0,o.jsx)(n.h1,{id:"videostoragemeter",children:"VideoStorageMeter"}),`
`,(0,o.jsx)(n.p,{children:"Component that shows cloud storage usage."}),`
`,(0,o.jsx)(s.Xz,{withSource:"open",children:(0,o.jsx)(s.oG,{id:"packages-videopress-video-storage-meter--default"})}),`
`,(0,o.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(n.h3,{id:"total",children:"total"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"The total available cloud space for the user, in bytes."}),`
`,(0,o.jsx)(n.h3,{id:"used",children:"used"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"The used cloud space, in bytes."}),`
`,(0,o.jsx)(n.h3,{id:"classname",children:"className"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"Optional classname to apply to the root element."}),`
`,(0,o.jsx)(n.h3,{id:"progressbarclassname",children:"progressBarClassName"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:"Optional classname to apply to the progress bar element."}),`
`]})]})}function h(_={}){const{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),_.components);return n?(0,o.jsx)(n,Object.assign({},_,{children:(0,o.jsx)(c,_)})):c(_)}const g=h},"../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(j,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const t=i=>{const{dispatch:s}=(0,d.Z)();return i===void 0?s:s(i)}},"../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(j,r,e)=>{"use strict";e.d(r,{W:()=>o});var d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function o(t){return d.Z.dispatch(t)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.48.0/node_modules/@wordpress/deprecated/build-module/index.js":(j,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/@wordpress+hooks@3.48.0/node_modules/@wordpress/hooks/build-module/index.js");const o=Object.create(null);function t(i,s={}){const{since:p,version:a,alternative:c,plugin:h,link:g,hint:_}=s,n=h?` from ${h}`:"",f=p?` since version ${p}`:"",v=a?` and will be removed${n} in version ${a}`:"",E=c?` Please use ${c} instead.`:"",x=g?` See: ${g}`:"",P=_?` Note: ${_}`:"",y=`${i} is deprecated${f}${v}.${E}${x}${P}`;y in o||((0,d.Kw)("deprecated",i,s,y),console.warn(y),o[y]=!0)}},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(j,r,e)=>{"use strict";e.d(r,{ZP:()=>i});var d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),t=e("../../packages/videopress/src/client/state/constants.js");function i(){const a=(0,d.Z)(u=>u(t.tT).getVideos()),c=(0,d.Z)(u=>u(t.tT).getUploadingVideos()),h=c.length>0,g="",_=(0,d.Z)(u=>u(t.tT).getUploadedVideoCount()),n=(0,d.Z)(u=>u(t.tT).getIsFetching()),f=(0,d.Z)(u=>u(t.tT).getIsFetchingUploadedVideoCount()),v=(0,d.Z)(u=>u(t.tT).getFirstUploadedVideoId()),E=(0,d.Z)(u=>u(t.tT).getFirstVideoProcessed()),x=(0,d.Z)(u=>u(t.tT).getDismissedFirstVideoPopover()),P=(0,d.Z)(u=>u(t.tT).getVideosQuery()||{}),y=(0,d.Z)(u=>u(t.tT).getPagination()),b=(0,d.Z)(u=>u(t.tT).getStorageUsed(),[]),M=(0,d.Z)(u=>u(t.tT).getVideosFilter());return{items:a,uploading:c,isUploading:h,search:g,filter:M,uploadedVideoCount:_,isFetching:n,isFetchingUploadedVideoCount:f,firstUploadedVideoId:v,firstVideoProcessed:E,dismissedFirstVideoPopover:x,...P,...y,...b,setPage:u=>(0,o.W)(t.tT).setVideosQuery({page:u}),setSearch:u=>(0,o.W)(t.tT).setVideosQuery({search:u}),setFilter:(0,o.W)(t.tT).setVideosFilter}}const s=()=>{const a=useSelect(n=>n(STORE_ID).getLocalVideos()),c=useSelect(n=>n(STORE_ID).getUploadedLocalVideoCount()),h=useSelect(n=>n(STORE_ID).getIsFetchingLocalVideos()),g=useSelect(n=>n(STORE_ID).getLocalVideosQuery()||{}),_=useSelect(n=>n(STORE_ID).getLocalPagination());return{items:a,uploadedLocalVideoCount:c,isFetching:h,...g,..._,setPage:n=>dispatch(STORE_ID).setLocalVideosQuery({page:n})}},p=()=>useSelect(c=>c(STORE_ID).getVideosQuery()||{})},"../components/components/progress-bar/index.tsx":(j,r,e)=>{"use strict";e.d(r,{Z:()=>_});var d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(d),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(t),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),p={};p.insert="head",p.singleton=!1;var a=i()(s.Z,p);const c=s.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=({className:n,progressClassName:f,progress:v,size:E="normal"})=>{if(v==null)return null;const P={width:`${Math.max(Math.min(v,1),0)*100}%`};return(0,h.jsx)("div",{className:o()(n,c.wrapper,{[c.small]:E==="small"}),children:(0,h.jsx)("div",{className:o()(f,c.progress),style:P})})};g.displayName="ProgressBar";const _=g},"../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts":(j,r,e)=>{"use strict";e.d(r,{RB:()=>t,mP:()=>d});const d="atomic",o="simple",t="jetpack"},"../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx":(j,r,e)=>{"use strict";e.d(r,{Z:()=>D});var d=e("../components/components/text/index.tsx"),o=e("../components/components/progress-bar/index.tsx"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(i),p=e("../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js"),a=e.n(p),c=e("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),h=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),g=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),_=e("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(n),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-storage-meter/style.module.scss"),E={};E.insert="head",E.singleton=!1;var x=f()(v.Z,E);const P=v.Z.locals||{};var y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=t.__,M=({className:T,progressBarClassName:C,total:O,used:m})=>{if(!O||m==null)return null;const l=m/O,S=`${(l*100).toFixed()}%`,k=a()(O,{base:10});return(0,y.jsxs)("div",{className:s()(T),children:[(0,y.jsx)(d.ZP,{className:s()(P["percentage-description"]),children:(0,t.gB)(b("%1$s of %2$s of cloud video storage","jetpack-videopress-pkg"),S,k)}),(0,y.jsx)(o.Z,{className:s()(P["progress-bar"],C),progress:l})]})};M.displayName="VideoStorageMeter";const u=T=>{const{storageUsed:C,uploadedVideoCount:O}=(0,g.ZP)(),{features:m}=(0,c.g)(),{settings:l}=(0,h.C)(),{siteType:S}=l,k=1e3*1e3*1e3*1e3;return S===_.mP||m!=null&&m.isVideoPressUnlimitedSupported||!O?null:C?(0,y.jsx)(M,{...T,used:C,total:k}):(0,y.jsx)(M,{...T,used:0,total:1})};u.displayName="ConnectVideoStorageMeter";const D=M;try{u.displayName="ConnectVideoStorageMeter",u.__docgenInfo={description:"",displayName:"ConnectVideoStorageMeter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx#ConnectVideoStorageMeter"]={docgenInfo:u.__docgenInfo,name:"ConnectVideoStorageMeter",path:"../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx#ConnectVideoStorageMeter"})}catch(T){}},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(j,r,e)=>{"use strict";e.d(r,{g:()=>g});var d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),o=e("../../packages/videopress/src/client/state/index.js");function t(_){return _.replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("_",""))}function i(_){return _.indexOf("_")!==-1}function s(_,n=!1){const f=Object.assign({},_);for(const v in f)f.hasOwnProperty(v)&&i(v)&&(f[t(v)]=f[v],n&&delete f[v]);return f}const{paidFeatures:p={},siteProductData:a={},productData:c={},productPrice:h={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},g=()=>{const _=s(a.pricing_for_ui,!0),n=s(c.introductory_offer,!0),f={...s(c,!0),introductoryOffer:n},{purchases:v,isFetchingPurchases:E}=(0,d.Z)(b=>({purchases:b(o.tT).getPurchases(),isFetchingPurchases:b(o.tT).isFetchingPurchases()}),[]),x=v.map(b=>s(b,!0));function P(b){return x.some(M=>M.productSlug===b)}const y=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(b=>P(b));return{features:p,siteProduct:{...s({...a},!0),pricingForUi:_},product:f,productPrice:h,purchases:x,hasVideoPressPurchase:y,isFetchingPurchases:E}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(j,r,e)=>{"use strict";e.d(r,{C:()=>s});var d=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),o=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),t=e("../../packages/videopress/src/client/state/index.js"),i=e("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts");const s=()=>{var c,h,g;const p=(0,d.Z)(t.tT),a=(0,o.Z)(_=>_(t.tT).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(c=a==null?void 0:a.videoPressVideosPrivateForSite)!=null?c:!1,siteIsPrivate:(h=a==null?void 0:a.siteIsPrivate)!=null?h:!1,siteType:(g=a==null?void 0:a.siteType)!=null?g:i.RB},onUpdate:_=>p.updateVideoPressSettings(_)}}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(j,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var o={}.hasOwnProperty,t="[native code]";function i(){for(var s=[],p=0;p<arguments.length;p++){var a=arguments[p];if(a){var c=typeof a;if(c==="string"||c==="number")s.push(a);else if(Array.isArray(a)){if(a.length){var h=i.apply(null,a);h&&s.push(h)}}else if(c==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){s.push(a.toString());continue}for(var g in a)o.call(a,g)&&a[g]&&s.push(g)}}}return s.join(" ")}j.exports?(i.default=i,j.exports=i):(e=[],d=function(){return i}.apply(r,e),d!==void 0&&(j.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(j,r,e)=>{"use strict";e.d(r,{Z:()=>p});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(t),s=i()(o());s.push([j.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),s.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const p=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-storage-meter/style.module.scss":(j,r,e)=>{"use strict";e.d(r,{Z:()=>p});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(t),s=i()(o());s.push([j.id,".J0cboZTh2LMTitQ_wbbw{color:var(--jp-gray-80);margin-bottom:calc(var(--spacing-base)*2)}.uC0NRkCYRpEEddC3UOuf{margin-top:calc(var(--spacing-base)*2)}",""]),s.locals={"percentage-description":"J0cboZTh2LMTitQ_wbbw","progress-bar":"uC0NRkCYRpEEddC3UOuf"};const p=s},"../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js":function(j){/*!
 2021 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 8.0.6
*/(function(r,e){j.exports=e()})(this,function(){"use strict";var r=/^(b|B)$/,e={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},d={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},o={floor:Math.floor,ceil:Math.ceil};function t(i){var s,p,a,c,h,g,_,n,f,v,E,x,P,y,b,M,u,D,T,C,O,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=[],S=0;if(isNaN(i))throw new TypeError("Invalid number");if(a=m.bits===!0,b=m.unix===!0,x=m.pad===!0,p=m.base||10,P=m.round!==void 0?m.round:b?1:2,_=m.locale!==void 0?m.locale:"",n=m.localeOptions||{},M=m.separator!==void 0?m.separator:"",u=m.spacer!==void 0?m.spacer:b?"":" ",T=m.symbols||{},D=p===2?m.standard||"iec":"jedec",E=m.output||"string",h=m.fullform===!0,g=m.fullforms instanceof Array?m.fullforms:[],s=m.exponent!==void 0?m.exponent:-1,C=o[m.roundingMethod]||Math.round,f=(v=Number(i))<0,c=p>2?1e3:1024,O=isNaN(m.precision)===!1?parseInt(m.precision,10):0,f&&(v=-v),(s===-1||isNaN(s))&&(s=Math.floor(Math.log(v)/Math.log(c)))<0&&(s=0),s>8&&(O>0&&(O+=8-s),s=8),E==="exponent")return s;if(v===0)l[0]=0,y=l[1]=b?"":e[D][a?"bits":"bytes"][s];else{S=v/(p===2?Math.pow(2,10*s):Math.pow(1e3,s)),a&&(S*=8)>=c&&s<8&&(S/=c,s++);var k=Math.pow(10,s>0?P:0);l[0]=C(S*k)/k,l[0]===c&&s<8&&m.exponent===void 0&&(l[0]=1,s++),y=l[1]=p===10&&s===1?a?"kbit":"kB":e[D][a?"bits":"bytes"][s],b&&(l[1]=l[1].charAt(0),r.test(l[1])&&(l[0]=Math.floor(l[0]),l[1]=""))}if(f&&(l[0]=-l[0]),O>0&&(l[0]=l[0].toPrecision(O)),l[1]=T[l[1]]||l[1],_===!0?l[0]=l[0].toLocaleString():_.length>0?l[0]=l[0].toLocaleString(_,n):M.length>0&&(l[0]=l[0].toString().replace(".",M)),x&&Number.isInteger(l[0])===!1&&P>0){var I=M||".",B=l[0].toString().split(I),w=B[1]||"",L=w.length,A=P-L;l[0]="".concat(B[0]).concat(I).concat(w.padEnd(L+A,"0"))}return h&&(l[1]=g[s]?g[s]:d[D][s]+(a?"bit":"byte")+(l[0]===1?"":"s")),E==="array"?l:E==="object"?{value:l[0],symbol:l[1],exponent:s,unit:y}:l.join(u)}return t.partial=function(i){return function(s){return t(s,i)}},t})},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(j,r,e)=>{"use strict";e.d(r,{P:()=>o});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function d(t){return Object.prototype.toString.call(t)==="[object Object]"}function o(t){var i,s;return d(t)===!1?!1:(i=t.constructor,i===void 0?!0:(s=i.prototype,!(d(s)===!1||s.hasOwnProperty("isPrototypeOf")===!1)))}},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":j=>{function r(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",j.exports=r}}]);})();