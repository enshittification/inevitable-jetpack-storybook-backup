(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(_,c,n)=>{"use strict";n.d(c,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(_,c,n)=>{"use strict";var d;n.d(c,{L:()=>r,j:()=>i});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(a){return a()},t=(d||(d=n.t(e,2)))["useInsertionEffect"]?(d||(d=n.t(e,2)))["useInsertionEffect"]:!1,r=t||l,i=t||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,c,n)=>{"use strict";n.d(c,{NF:()=>l,Zo:()=>i,ah:()=>t,pC:()=>e});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=d.createContext({});function l(s){return a;function a(u){const m=t(u.components);return d.createElement(s,{...u,allComponents:m})}}function t(s){const a=d.useContext(e);return d.useMemo(()=>typeof s=="function"?s(a):{...a,...s},[a,s])}const r={};function i({components:s,children:a,disableParentContext:u}){let m;return u?m=typeof s=="function"?s({}):s||r:m=t(s),d.createElement(e.Provider,{value:m},a)}},"../components/components/dialog/stories/js-components.components.dialog.mdx":(_,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>u});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=n("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),t=n("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),r=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),i=n("../components/components/dialog/stories/js-components.components.dialog.stories.js");function s(m){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,l.ah)(),m.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:i}),`
`,(0,e.jsx)(o.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(o.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(t.oG,{of:i.Readme}),`
`,(0,e.jsx)(o.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsx)(o.p,{children:`\xA0 | Small (sm) | Medium (md) | Large (lg)
------|------|------|-----
primary | 4 | 5 | 7
secondary | 4 | 3 | 5`}),`
`,(0,e.jsxs)(o.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(o.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(o.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(o.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(o.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(o.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(o.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(o.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["Type: ",(0,e.jsx)(o.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(o.li,{children:"Optional."}),`
`,(0,e.jsxs)(o.li,{children:["Default: ",(0,e.jsx)(o.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsx)(o.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(o.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}function a(m={}){const{wrapper:o}=Object.assign({},(0,l.ah)(),m.components);return o?(0,e.jsx)(o,Object.assign({},m,{children:(0,e.jsx)(s,m)})):s(m)}const u=a},"../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(_,c,n)=>{"use strict";n.d(c,{Z:()=>l});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(t){return t&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(t):null}function l(t){const r=(0,d.useMemo)(()=>{const i=e(t);return{subscribe(s){return i?(i.addEventListener("change",s),()=>{i.removeEventListener("change",s)}):()=>{}},getValue(){var s;return(s=i==null?void 0:i.matches)!==null&&s!==void 0?s:!1}}},[t]);return(0,d.useSyncExternalStore)(r.subscribe,r.getValue,()=>!1)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(_,c,n)=>{var j,h,f;"use strict";n.r(c),n.d(c,{Readme:()=>p,__namedExportsOrder:()=>g,default:()=>y});var d=n("../components/components/dialog/index.tsx"),e=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(e),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),r={};r.insert="head",r.singleton=!1;var i=l()(t.Z,r);const s=t.Z.locals||{};var a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import Dialog from '../index';
import styles from './style.module.scss';

const Template = ( { isTwoSections } ) => (
	<Dialog
		primary={
			<div className={ styles.section }>
				<div>Primary</div>
				<strong>4 | 5 | 7</strong>
			</div>
		}
		secondary={
			<div className={ styles.section }>
				<div>Secondary</div>
				<strong>4 | 3 | 5</strong>
				<div>
					isTwoSections: <strong>{ isTwoSections ? 'yes' : 'no' }</strong>
				</div>
			</div>
		}
		isTwoSections={ isTwoSections }
	/>
);

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
};

export const Readme = {
	render: Template.bind( {} ),
	name: 'Readme',

	args: {
		isTwoSections: true,
	},
};
`,m={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const o=v=>{let{isTwoSections:x}=v;return(0,a.jsx)(d.Z,{primary:(0,a.jsxs)("div",{className:s.section,children:[(0,a.jsx)("div",{children:"Primary"}),(0,a.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,a.jsxs)("div",{className:s.section,children:[(0,a.jsx)("div",{children:"Secondary"}),(0,a.jsx)("strong",{children:"4 | 3 | 5"}),(0,a.jsxs)("div",{children:["isTwoSections: ",(0,a.jsx)("strong",{children:x?"yes":"no"})]})]}),isTwoSections:x})};o.displayName="Template";const y={parameters:{storySource:{source:`import Dialog from '../index';
import styles from './style.module.scss';
const Template = ({
  isTwoSections
}) => <Dialog primary={<div className={styles.section}>
                <div>Primary</div>
                <strong>4 | 5 | 7</strong>
            </div>} secondary={<div className={styles.section}>
                <div>Secondary</div>
                <strong>4 | 3 | 5</strong>
                <div>
                    isTwoSections: <strong>{isTwoSections ? 'yes' : 'no'}</strong>
                </div>
            </div>} isTwoSections={isTwoSections} />;
export default {
  title: 'JS Packages/Components/Dialog',
  component: Dialog
};
export const Readme = {
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
};
Readme.parameters = {
  ...Readme.parameters,
  docs: {
    ...Readme.parameters?.docs,
    source: {
      originalSource: "{\\n  render: Template.bind({}),\\n  name: 'Readme',\\n  args: {\\n    isTwoSections: true\\n  }\\n}",
      ...Readme.parameters?.docs?.source
    }
  }
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:d.Z},p={render:o.bind({}),name:"Readme",args:{isTwoSections:!0}};p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const g=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,c)=>{var n,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,l="[native code]";function t(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var a=typeof s;if(a==="string"||a==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var u=t.apply(null,s);u&&r.push(u)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var m in s)e.call(s,m)&&s[m]&&r.push(m)}}}return r.join(" ")}_.exports?(t.default=t,_.exports=t):(n=[],d=function(){return t}.apply(c,n),d!==void 0&&(_.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(_,c,n)=>{"use strict";n.d(c,{Z:()=>i});var d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(d),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=n.n(l),r=t()(e());r.push([_.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),r.locals={section:"RTMIETP7fe2d9xWFfYKF"};const i=r}}]);})();