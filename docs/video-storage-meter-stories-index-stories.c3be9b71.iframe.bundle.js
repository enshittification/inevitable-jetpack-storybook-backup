(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1119],{"../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const t=a=>{const{dispatch:s}=(0,n.Z)();return a===void 0?s:s(a)}},"../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(y,p,e)=>{"use strict";e.d(p,{W:()=>l});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function l(t){return n.Z.dispatch(t)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.45.0/node_modules/@wordpress/deprecated/build-module/index.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+hooks@3.45.0/node_modules/@wordpress/hooks/build-module/index.js");const l=Object.create(null);function t(a,s={}){const{since:_,version:o,alternative:i,plugin:v,link:g,hint:u}=s,m=v?` from ${v}`:"",b=_?` since version ${_}`:"",f=o?` and will be removed${m} in version ${o}`:"",h=i?` Please use ${i} instead.`:"",S=g?` See: ${g}`:"",E=u?` Note: ${u}`:"",j=`${a} is deprecated${b}${f}.${h}${S}${E}`;j in l||((0,n.Kw)("deprecated",a,s,j),console.warn(j),l[j]=!0)}},"../../packages/videopress/src/client/admin/components/video-storage-meter/stories/index.stories.tsx":(y,p,e)=>{var v,g,u;"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>i,_default:()=>o,default:()=>s});var n=e("../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import VideoStorageMeter from '..';
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
`,a={_default:{startLoc:{col:59,line:7},endLoc:{col:98,line:7},startBody:{col:59,line:7},endBody:{col:98,line:7}}};const s={parameters:{storySource:{source:`import VideoStorageMeter from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video Storage Meter',
  component: VideoStorageMeter
} as ComponentMeta<typeof VideoStorageMeter>);
const Template: ComponentStory<typeof VideoStorageMeter> = args => <VideoStorageMeter {...args} />;
export const _default = Template.bind({});
_default.args = {
  total: 1024 * 1024 * 1024 * 1024,
  // 1 TiB
  used: 1024 * 1024 * 1024 * 1024 / 2 // 50%
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <VideoStorageMeter {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:59,line:7},endLoc:{col:98,line:7},startBody:{col:59,line:7},endBody:{col:98,line:7}}}}},title:"Packages/VideoPress/Video Storage Meter",component:n.Z},_=m=>(0,l.jsx)(n.Z,{...m});_.displayName="Template";const o=_.bind({});o.args={total:1024*1024*1024*1024,used:1024*1024*1024*1024/2},o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <VideoStorageMeter {...args} />",...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const i=["_default"]},"../components/components/progress-bar/index.tsx":(y,p,e)=>{"use strict";e.d(p,{Z:()=>u});var n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(n),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(t),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss"),_={};_.insert="head",_.singleton=!1;var o=a()(s.Z,_);const i=s.Z.locals||{};var v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=({className:m,progressClassName:b,progress:f,size:h="normal"})=>{if(f==null)return null;const E={width:`${Math.max(Math.min(f,1),0)*100}%`};return(0,v.jsx)("div",{className:l()(m,i.wrapper,{[i.small]:h==="small"}),children:(0,v.jsx)("div",{className:l()(b,i.progress),style:E})})};g.displayName="ProgressBar";const u=g},"../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts":(y,p,e)=>{"use strict";e.d(p,{RB:()=>t,mP:()=>n});const n="atomic",l="simple",t="jetpack"},"../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx":(y,p,e)=>{"use strict";e.d(p,{Z:()=>V});var n=e("../components/components/text/index.tsx"),l=e("../components/components/progress-bar/index.tsx"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(a),_=e("../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js"),o=e.n(_),i=e("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),v=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),g=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),u=e("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(m),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-storage-meter/style.module.scss"),h={};h.insert="head",h.singleton=!1;var S=b()(f.Z,h);const E=f.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=t.__,M=({className:O,progressBarClassName:x,total:T,used:c})=>{if(!T||c==null)return null;const d=c/T,C=`${(d*100).toFixed()}%`,w=o()(T,{base:10});return(0,j.jsxs)("div",{className:s()(O),children:[(0,j.jsx)(n.ZP,{className:s()(E["percentage-description"]),children:(0,t.gB)(P("%1$s of %2$s of cloud video storage","jetpack-videopress-pkg"),C,w)}),(0,j.jsx)(l.Z,{className:s()(E["progress-bar"],x),progress:d})]})};M.displayName="VideoStorageMeter";const r=O=>{const{storageUsed:x,uploadedVideoCount:T}=(0,g.ZP)(),{features:c}=(0,i.g)(),{settings:d}=(0,v.C)(),{siteType:C}=d,w=1e3*1e3*1e3*1e3;return C===u.mP||c!=null&&c.isVideoPressUnlimitedSupported||!T?null:x?(0,j.jsx)(M,{...O,used:x,total:w}):(0,j.jsx)(M,{...O,used:0,total:1})};r.displayName="ConnectVideoStorageMeter";const V=M;try{r.displayName="ConnectVideoStorageMeter",r.__docgenInfo={description:"",displayName:"ConnectVideoStorageMeter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx#ConnectVideoStorageMeter"]={docgenInfo:r.__docgenInfo,name:"ConnectVideoStorageMeter",path:"../../packages/videopress/src/client/admin/components/video-storage-meter/index.tsx#ConnectVideoStorageMeter"})}catch(O){}},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(y,p,e)=>{"use strict";e.d(p,{g:()=>g});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=e("../../packages/videopress/src/client/state/index.js");function t(u){return u.replace(/([-_][a-z])/gi,m=>m.toUpperCase().replace("_",""))}function a(u){return u.indexOf("_")!==-1}function s(u,m=!1){const b=Object.assign({},u);for(const f in b)b.hasOwnProperty(f)&&a(f)&&(b[t(f)]=b[f],m&&delete b[f]);return b}const{paidFeatures:_={},siteProductData:o={},productData:i={},productPrice:v={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},g=()=>{const u=s(o.pricing_for_ui,!0),m=s(i.introductory_offer,!0),b={...s(i,!0),introductoryOffer:m},{purchases:f,isFetchingPurchases:h}=(0,n.Z)(P=>({purchases:P(l.tT).getPurchases(),isFetchingPurchases:P(l.tT).isFetchingPurchases()}),[]),S=f.map(P=>s(P,!0));function E(P){return S.some(M=>M.productSlug===P)}const j=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(P=>E(P));return{features:_,siteProduct:{...s({...o},!0),pricingForUi:u},product:b,productPrice:v,purchases:S,hasVideoPressPurchase:j,isFetchingPurchases:h}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(y,p,e)=>{"use strict";e.d(p,{C:()=>s});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),t=e("../../packages/videopress/src/client/state/index.js"),a=e("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts");const s=()=>{var i,v,g;const _=(0,n.Z)(t.tT),o=(0,l.Z)(u=>u(t.tT).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(i=o==null?void 0:o.videoPressVideosPrivateForSite)!=null?i:!1,siteIsPrivate:(v=o==null?void 0:o.siteIsPrivate)!=null?v:!1,siteType:(g=o==null?void 0:o.siteType)!=null?g:a.RB},onUpdate:u=>_.updateVideoPressSettings(u)}}},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(y,p,e)=>{"use strict";e.d(p,{ZP:()=>a});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),t=e("../../packages/videopress/src/client/state/constants.js");function a(){const o=(0,n.Z)(r=>r(t.tT).getVideos()),i=(0,n.Z)(r=>r(t.tT).getUploadingVideos()),v=i.length>0,g="",u=(0,n.Z)(r=>r(t.tT).getUploadedVideoCount()),m=(0,n.Z)(r=>r(t.tT).getIsFetching()),b=(0,n.Z)(r=>r(t.tT).getIsFetchingUploadedVideoCount()),f=(0,n.Z)(r=>r(t.tT).getFirstUploadedVideoId()),h=(0,n.Z)(r=>r(t.tT).getFirstVideoProcessed()),S=(0,n.Z)(r=>r(t.tT).getDismissedFirstVideoPopover()),E=(0,n.Z)(r=>r(t.tT).getVideosQuery()||{}),j=(0,n.Z)(r=>r(t.tT).getPagination()),P=(0,n.Z)(r=>r(t.tT).getStorageUsed(),[]),M=(0,n.Z)(r=>r(t.tT).getVideosFilter());return{items:o,uploading:i,isUploading:v,search:g,filter:M,uploadedVideoCount:u,isFetching:m,isFetchingUploadedVideoCount:b,firstUploadedVideoId:f,firstVideoProcessed:h,dismissedFirstVideoPopover:S,...E,...j,...P,setPage:r=>(0,l.W)(t.tT).setVideosQuery({page:r}),setSearch:r=>(0,l.W)(t.tT).setVideosQuery({search:r}),setFilter:(0,l.W)(t.tT).setVideosFilter}}const s=()=>{const o=useSelect(m=>m(STORE_ID).getLocalVideos()),i=useSelect(m=>m(STORE_ID).getUploadedLocalVideoCount()),v=useSelect(m=>m(STORE_ID).getIsFetchingLocalVideos()),g=useSelect(m=>m(STORE_ID).getLocalVideosQuery()||{}),u=useSelect(m=>m(STORE_ID).getLocalPagination());return{items:o,uploadedLocalVideoCount:i,isFetching:v,...g,...u,setPage:m=>dispatch(STORE_ID).setLocalVideosQuery({page:m})}},_=()=>useSelect(i=>i(STORE_ID).getVideosQuery()||{})},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(y,p)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,t="[native code]";function a(){for(var s=[],_=0;_<arguments.length;_++){var o=arguments[_];if(o){var i=typeof o;if(i==="string"||i==="number")s.push(o);else if(Array.isArray(o)){if(o.length){var v=a.apply(null,o);v&&s.push(v)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){s.push(o.toString());continue}for(var g in o)l.call(o,g)&&o[g]&&s.push(g)}}}return s.join(" ")}y.exports?(a.default=a,y.exports=a):(e=[],n=function(){return a}.apply(p,e),n!==void 0&&(y.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/progress-bar/style.module.scss":(y,p,e)=>{"use strict";e.d(p,{Z:()=>_});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(t),s=a()(l());s.push([y.id,".W4NUeZAGw0aXojyLmjzP{width:100%;height:12px;background-color:var(--jp-gray-5);border-radius:calc(var(--spacing-base)*3);overflow:hidden}.W4NUeZAGw0aXojyLmjzP.aCtQACi6JDw6tIP5cLu1{height:3px}.W4NUeZAGw0aXojyLmjzP .kaV9vllufIW5_MQslIfu{height:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-50)}",""]),s.locals={wrapper:"W4NUeZAGw0aXojyLmjzP",small:"aCtQACi6JDw6tIP5cLu1",progress:"kaV9vllufIW5_MQslIfu"};const _=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-storage-meter/style.module.scss":(y,p,e)=>{"use strict";e.d(p,{Z:()=>_});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(t),s=a()(l());s.push([y.id,".J0cboZTh2LMTitQ_wbbw{color:var(--jp-gray-80);margin-bottom:calc(var(--spacing-base)*2)}.uC0NRkCYRpEEddC3UOuf{margin-top:calc(var(--spacing-base)*2)}",""]),s.locals={"percentage-description":"J0cboZTh2LMTitQ_wbbw","progress-bar":"uC0NRkCYRpEEddC3UOuf"};const _=s},"../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js":function(y){/*!
 2021 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 8.0.6
*/(function(p,e){y.exports=e()})(this,function(){"use strict";var p=/^(b|B)$/,e={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},n={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},l={floor:Math.floor,ceil:Math.ceil};function t(a){var s,_,o,i,v,g,u,m,b,f,h,S,E,j,P,M,r,V,O,x,T,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=[],C=0;if(isNaN(a))throw new TypeError("Invalid number");if(o=c.bits===!0,P=c.unix===!0,S=c.pad===!0,_=c.base||10,E=c.round!==void 0?c.round:P?1:2,u=c.locale!==void 0?c.locale:"",m=c.localeOptions||{},M=c.separator!==void 0?c.separator:"",r=c.spacer!==void 0?c.spacer:P?"":" ",O=c.symbols||{},V=_===2?c.standard||"iec":"jedec",h=c.output||"string",v=c.fullform===!0,g=c.fullforms instanceof Array?c.fullforms:[],s=c.exponent!==void 0?c.exponent:-1,x=l[c.roundingMethod]||Math.round,b=(f=Number(a))<0,i=_>2?1e3:1024,T=isNaN(c.precision)===!1?parseInt(c.precision,10):0,b&&(f=-f),(s===-1||isNaN(s))&&(s=Math.floor(Math.log(f)/Math.log(i)))<0&&(s=0),s>8&&(T>0&&(T+=8-s),s=8),h==="exponent")return s;if(f===0)d[0]=0,j=d[1]=P?"":e[V][o?"bits":"bytes"][s];else{C=f/(_===2?Math.pow(2,10*s):Math.pow(1e3,s)),o&&(C*=8)>=i&&s<8&&(C/=i,s++);var w=Math.pow(10,s>0?E:0);d[0]=x(C*w)/w,d[0]===i&&s<8&&c.exponent===void 0&&(d[0]=1,s++),j=d[1]=_===10&&s===1?o?"kbit":"kB":e[V][o?"bits":"bytes"][s],P&&(d[1]=d[1].charAt(0),p.test(d[1])&&(d[0]=Math.floor(d[0]),d[1]=""))}if(b&&(d[0]=-d[0]),T>0&&(d[0]=d[0].toPrecision(T)),d[1]=O[d[1]]||d[1],u===!0?d[0]=d[0].toLocaleString():u.length>0?d[0]=d[0].toLocaleString(u,m):M.length>0&&(d[0]=d[0].toString().replace(".",M)),S&&Number.isInteger(d[0])===!1&&E>0){var D=M||".",I=d[0].toString().split(D),k=I[1]||"",B=k.length,L=E-B;d[0]="".concat(I[0]).concat(D).concat(k.padEnd(B+L,"0"))}return v&&(d[1]=g[s]?g[s]:n[V][s]+(o?"bit":"byte")+(d[0]===1?"":"s")),h==="array"?d:h==="object"?{value:d[0],symbol:d[1],exponent:s,unit:j}:d.join(r)}return t.partial=function(a){return function(s){return t(s,a)}},t})},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(y,p,e)=>{"use strict";e.d(p,{P:()=>l});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function n(t){return Object.prototype.toString.call(t)==="[object Object]"}function l(t){var a,s;return n(t)===!1?!1:(a=t.constructor,a===void 0?!0:(s=a.prototype,!(n(s)===!1||s.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();