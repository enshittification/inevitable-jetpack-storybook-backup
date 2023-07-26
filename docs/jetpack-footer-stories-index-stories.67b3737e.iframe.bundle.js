"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6098],{"../components/components/jetpack-footer/stories/index.stories.tsx":(R,p,t)=>{var C,h,m,f,S,I;t.r(p),t.d(p,{WithMenu:()=>g,__namedExportsOrder:()=>y,_default:()=>o,default:()=>s});var a=t("../components/components/jetpack-footer/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import JetpackFooter from '../index';
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
`,l={_default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},WithMenu:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}};const s={parameters:{storySource:{source:`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Jetpack Footer',
  component: JetpackFooter
} as ComponentMeta<typeof JetpackFooter>);
const Template: ComponentStory<typeof JetpackFooter> = args => <JetpackFooter {...args} />;
const DefaultArgs = {
  moduleName: 'Jetpack',
  className: '',
  moduleNameHref: 'https://jetpack.com'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  menu: [{
    label: 'Menu Item',
    href: '#'
  }, {
    label: 'External Menu Item',
    href: '#',
    target: '_blank'
  }, {
    label: 'Menu Item With Title',
    title: 'Hello, World!',
    href: '#'
  }]
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
WithMenu.parameters = {
  ...WithMenu.parameters,
  docs: {
    ...WithMenu.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ...WithMenu.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},"with-menu":{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}}}},title:"JS Packages/Components/Jetpack Footer",component:a.Z},i=x=>(0,r.jsx)(a.Z,{...x});i.displayName="Template";const u={moduleName:"Jetpack",className:"",moduleNameHref:"https://jetpack.com"},o=i.bind({});o.args=u;const g=i.bind({});g.args={...u,menu:[{label:"Menu Item",href:"#"},{label:"External Menu Item",href:"#",target:"_blank"},{label:"Menu Item With Title",title:"Hello, World!",href:"#"}]},o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}},g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const y=["_default","WithMenu"]},"../components/components/automattic-byline-logo/index.tsx":(R,p,t)=>{t.d(p,{Z:()=>o});var a=t("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=t.n(r),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=a.__,u=g=>{let{title:y=i("An Automattic Airline","jetpack"),height:C=7,className:h,...m}=g;return(0,s.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:C,className:_()("jp-automattic-byline-logo",h),...m,children:[(0,s.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:y}),(0,s.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,s.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,s.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]})};u.displayName="AutomatticBylineLogo";const o=u},"../components/components/jetpack-footer/index.tsx":(R,p,t)=>{t.d(p,{Z:()=>k});var a=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),_=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/external.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=t.n(s),u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../components/tools/jp-redirect/index.ts"),g=t("../connection/state/store.jsx"),y=t("../components/components/automattic-byline-logo/index.tsx"),C=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=t.n(C),m=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),f={};f.insert="head",f.singleton=!1;var S=h()(m.Z,f);const I=m.Z.locals||{};var x=t("../components/components/jetpack-logo/index.tsx"),j=t("../components/components/layout/use-breakpoint-match/index.ts"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=r.__,M=r._x,N=()=>(0,d.jsx)(x.Z,{logoColor:"#000",showText:!1,height:16,"aria-hidden":"true"});N.displayName="JetpackIcon";const U=A=>{let{moduleName:Z=v("Jetpack","jetpack"),className:K,moduleNameHref:w="https://jetpack.com",menu:J,siteAdminUrl:P,onAboutClick:G,onPrivacyClick:X,onTermsClick:ee,...z}=A;const[Y]=(0,j.Z)("sm","<="),[te]=(0,j.Z)("md","<="),[b]=(0,j.Z)("lg",">"),{isActive:$,connectedPlugins:F}=(0,a.Z)(E=>{const O=E(g.t);return{connectedPlugins:O==null?void 0:O.getConnectedPlugins(),...O.getConnectionStatus()}},[g.t]),W=P&&$&&(F==null?void 0:F.some(E=>{let{slug:O}=E;return O==="jetpack"}));let B=[{label:M("About","Link to learn more about Jetpack.","jetpack"),title:v("About Jetpack","jetpack"),href:W?new URL("admin.php?page=jetpack_about",P).href:(0,o.Z)("jetpack-about"),target:"_blank",onClick:G},{label:M("Privacy","Shorthand for Privacy Policy.","jetpack"),title:v("Automattic's Privacy Policy","jetpack"),href:W?new URL("admin.php?page=jetpack#/privacy",P).href:(0,o.Z)("a8c-privacy"),target:W?"_self":"_blank",onClick:X},{label:M("Terms","Shorthand for Terms of Service.","jetpack"),title:v("WordPress.com Terms of Service","jetpack"),href:(0,o.Z)("wpcom-tos"),target:"_blank",onClick:ee}];J&&(B=[...B,...J]);const H=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{}),Z]});return(0,d.jsx)("footer",{className:i()("jp-dashboard-footer",{"is-sm":Y,"is-md":te,"is-lg":b},K),"aria-label":v("Jetpack","jetpack"),...z,children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"jp-dashboard-footer__jp-item",children:w?(0,d.jsx)("a",{href:w,children:H}):H}),B.map(E=>{const O=E.role==="button",V=!O&&E.target==="_blank";return(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:E.href,title:E.title,target:E.target,onClick:E.onClick,onKeyDown:E.onKeyDown,className:i()("jp-dashboard-footer__menu-item",{"is-external":V}),role:E.role,rel:V?"noopener noreferrer":void 0,tabIndex:O?0:void 0,children:[E.label,V&&(0,d.jsx)(_.Z,{icon:l.Z,size:16})]})},E.label)}),(0,d.jsx)("li",{className:"jp-dashboard-footer__a8c-item",children:(0,d.jsx)("a",{href:W?new URL("admin.php?page=jetpack_about",P).href:(0,o.Z)("a8c-about"),"aria-label":v("An Automattic Airline","jetpack"),children:(0,d.jsx)(y.Z,{"aria-hidden":"true"})})})]})})};U.displayName="JetpackFooter";const k=U},"../components/components/jetpack-logo/index.tsx":(R,p,t)=>{t.d(p,{Z:()=>o});var a=t("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=t.n(r),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=a.__,u=g=>{let{logoColor:y="#069e08",showText:C=!0,className:h,height:m=32,...f}=g;const S=C?"0 0 118 32":"0 0 32 32";return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:S,className:_()("jetpack-logo",h),"aria-labelledby":"jetpack-logo-title",height:m,...f,children:[(0,s.jsx)("desc",{id:"jetpack-logo-title",children:i("Jetpack Logo","jetpack")}),(0,s.jsx)("path",{fill:y,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),C&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,s.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,s.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,s.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,s.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,s.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,s.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};u.displayName="JetpackLogo";const o=u},"../components/components/layout/use-breakpoint-match/index.ts":(R,p,t)=>{t.d(p,{Z:()=>C});var a=t("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=t.n(r),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),s={};s.insert="head",s.singleton=!1;var i=_()(l.Z,s);const u=l.Z.locals||{},o=["sm","md","lg"],g=(h,m,f)=>{const S=o.indexOf(h),I=S+1,x=m.includes("=");let j=[];return m.startsWith("<")&&(j=o.slice(0,x?I:S)),m.startsWith(">")&&(j=o.slice(x?S:I)),j!=null&&j.length?j.some(d=>f[d]):f[h]},C=(h,m)=>{const f=Array.isArray(h)?h:[h],S=Array.isArray(m)?m:[m],[I,x,j]=o,d=(0,a.Z)(u[I]),v=(0,a.Z)(u[x]),M=(0,a.Z)(u[j]),N={sm:d,md:v,lg:M};return f.map((U,k)=>{const A=S[k];return A?g(U,A,N):N[U]})}},"../components/tools/jp-redirect/index.ts":(R,p,t)=>{t.d(p,{Z:()=>a});function a(r){var u;let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l={};let s;if(typeof window!="undefined"&&(s=(u=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:u.calypsoEnv),r.search("https://")===0){const o=new URL(r);r=`https://${o.host}${o.pathname}`,l.url=encodeURIComponent(r)}else l.source=encodeURIComponent(r);for(const o in _)l[o]=encodeURIComponent(_[o]);return!Object.keys(l).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(l.site=jetpack_redirects.currentSiteRawUrl),s&&(l.calypso_env=s),"https://jetpack.com/redirect/?"+Object.keys(l).map(o=>o+"="+l[o]).join("&")}},"../connection/state/store.jsx":(R,p,t)=>{t.d(p,{t:()=>b});var a=t("../api/index.jsx");const r="SET_CONNECTION_STATUS",_="SET_CONNECTION_STATUS_IS_FETCHING",l="FETCH_CONNECTION_STATUS",s="SET_SITE_IS_REGISTERING",i="SET_USER_IS_CONNECTING",u="SET_REGISTRATION_ERROR",o="CLEAR_REGISTRATION_ERROR",g="REGISTER_SITE",y="SET_AUTHORIZATION_URL",C="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",m="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",S="REFRESH_CONNECTED_PLUGINS",I="SET_CONNECTION_ERRORS",x="SET_IS_OFFLINE_MODE",j=e=>({type:r,connectionStatus:e}),d=e=>({type:_,isFetching:e}),v=()=>({type:l}),M=e=>({type:s,isRegistering:e}),N=e=>({type:i,isConnecting:e}),U=()=>({type:h}),k=e=>({type:u,registrationError:e}),A=()=>({type:o}),Z=e=>({type:y,authorizationUrl:e}),K=e=>({type:m,redirectUri:e}),w=e=>({type:f,connectedPlugins:e}),J=e=>({type:I,connectionErrors:e}),P=e=>({type:x,isOfflineMode:e});function G(){let{from:e,redirectFunc:n,redirectUri:c}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield N(!0),yield{type:C,from:e,redirectFunc:n,redirectUri:c}}()}function X(e){let{registrationNonce:n,redirectUri:c}=e;return function*(){yield A(),yield M(!0);try{const T=yield{type:g,registrationNonce:n,redirectUri:c};return yield j({isRegistered:!0}),yield Z(T.authorizeUrl),yield M(!1),Promise.resolve(T)}catch(T){return yield k(T),yield M(!1),Promise.reject(T)}}()}const z={setConnectionStatus:j,setConnectionStatusIsFetching:d,fetchConnectionStatus:v,fetchAuthorizationUrl:K,setSiteIsRegistering:M,setUserIsConnecting:N,setRegistrationError:k,clearRegistrationError:A,setAuthorizationUrl:Z,registerSite:X,connectUser:G,disconnectUserSuccess:U,setConnectedPlugins:w,refreshConnectedPlugins:()=>async e=>{let{dispatch:n}=e;return await new Promise(c=>a.ZP.fetchConnectedPlugins().then(T=>{n(w(T)),c(T)}))},setConnectionErrors:J,setIsOfflineMode:P};var Y=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const b="jetpack-connection",$=e=>{let{registrationNonce:n,redirectUri:c}=e;return a.ZP.registerSite(n,c)},F=(0,Y.R)(e=>{let{resolveSelect:n}=e;return function(){let{from:c,redirectFunc:T,redirectUri:D}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((Q,Ce)=>{n(b).getAuthorizationUrl(D).then(q=>{const Se=T||(ye=>window.location.assign(ye)),se=new URL(q);c&&se.searchParams.set("from",encodeURIComponent(c));const oe=se.toString();Se(oe),Q(oe)}).catch(q=>{Ce(q)})})}}),B={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:n}=e;return a.ZP.fetchAuthorizationUrl(n)},REGISTER_SITE:$,CONNECT_USER:F};var H=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const E=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r:return{...e,...n.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},O=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return n.connectedPlugins}return e},V=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return n.isFetching}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return n.isRegistering}return e},ae=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i:return n.isConnecting}return e},le=(e,n)=>{switch(n.type){case o:return!1;case u:return n.registrationError;default:return e}},ce=(e,n)=>{switch(n.type){case y:return n.authorizationUrl;default:return e}},de=(e,n)=>{switch(n.type){default:return e}},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I:return n.connectionErrors}return e},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return n.isConnecting}return e},me=(0,H.UY)({connectionStatus:E,connectionStatusIsFetching:V,siteIsRegistering:re,userIsConnecting:ae,registrationError:le,authorizationUrl:ce,userConnectionData:de,connectedPlugins:O,connectionErrors:ie,isOfflineMode:ue});var pe=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const he={...{getAuthorizationUrl:{isFulfilled:function(e){const n=!!e.authorizationUrl;for(var c=arguments.length,T=new Array(c>1?c-1:0),D=1;D<c;D++)T[D-1]=arguments[D];const Q=(0,pe.Y)(b).hasFinishedResolution("getAuthorizationUrl",T);return n&&!Q&&(0,_e.W)(b).finishResolution("getAuthorizationUrl",T),n},*fulfill(e){const n=yield z.fetchAuthorizationUrl(e);yield z.setAuthorizationUrl(n.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,c;return(c=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:c.wpcomUser},getBlogId:e=>{var n,c;return(c=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:c.blogId}}};var fe=t("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js"),Ee=t.n(fe),je=t("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class L{static mayBeInit(n,c){L.store===null&&(L.store=(0,je.Z)(n,c),(0,H.z2)(L.store))}}Ee()(L,"store",null);const Te=L,ne=window.JP_CONNECTION_INITIAL_STATE;ne||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Te.mayBeInit(b,{__experimentalUseThunks:!0,reducer:me,actions:z,selectors:ge,resolvers:he,controls:B,initialState:ne||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(R,p,t)=>{t.d(p,{Z:()=>i});var a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),_=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=t.n(_),s=l()(r());s.push([R.id,".jp-dashboard-footer{display:flex;flex-wrap:wrap;align-items:center;max-width:1128px;width:100%;color:var(--jp-black);font-size:var(--font-body-extra-small);line-height:1.333}.jp-dashboard-footer a{text-decoration:none}.jp-dashboard-footer a:any-link,.jp-dashboard-footer a[role=button]{color:inherit}.jp-dashboard-footer a:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer a:focus{border-radius:2px;box-shadow:none;outline:1.5px solid currentColor;outline-offset:3px}.jp-dashboard-footer.is-sm>ul{flex-direction:column;align-items:flex-start;gap:.125rem}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer>ul{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:100%;margin:0;padding:0;list-style:none}.jp-dashboard-footer>ul>li{margin-bottom:0}.jp-dashboard-footer>ul>li>a{display:flex;align-items:center;gap:.25rem;min-height:44px}.jp-dashboard-footer__jp-item{padding-inline-end:1rem;font-weight:600}.jp-dashboard-footer.is-sm .jp-dashboard-footer__jp-item{padding-bottom:1rem}.jp-dashboard-footer.is-lg .jp-dashboard-footer__a8c-item{margin-inline-start:auto}.jp-dashboard-footer.is-sm .jp-dashboard-footer__a8c-item{padding-top:1rem}.jp-dashboard-footer__jp-item>a,.jp-dashboard-footer__a8c-item>a{text-decoration:none}",""]);const i=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(R,p,t)=>{t.d(p,{Z:()=>i});var a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),_=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=t.n(_),s=l()(r());s.push([R.id,"",""]),s.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const i=s}}]);})();