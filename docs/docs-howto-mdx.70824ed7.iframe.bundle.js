"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3450],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(_,l,e)=>{e.d(l,{Z:()=>s});function s(){return s=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},s.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(_,l,e)=>{var s;e.d(l,{L:()=>m,j:()=>i});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=function(r){return r()},c=(s||(s=e.t(o,2)))["useInsertionEffect"]?(s||(s=e.t(o,2)))["useInsertionEffect"]:!1,m=c||d,i=c||o.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,l,e)=>{e.d(l,{NF:()=>d,Zo:()=>i,ah:()=>c,pC:()=>o});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=s.createContext({});function d(n){return r;function r(a){const t=c(a.components);return s.createElement(n,{...a,allComponents:t})}}function c(n){const r=s.useContext(o);return s.useMemo(()=>typeof n=="function"?n(r):{...r,...n},[r,n])}const m={};function i({components:n,children:r,disableParentContext:a}){let t;return a?t=typeof n=="function"?n({}):n||m:t=c(n),s.createElement(o.Provider,{value:t},r)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(_,l,e)=>{e.d(l,{_:()=>c,r:()=>i});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@storybook+react-dom-shim@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),d=e("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),c={code:d.bD,a:d.Ct,...d.lO},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){let{showException:r}=this.props;r(n)}render(){let{hasError:n}=this.state,{children:r}=this.props;return n?null:r}},i=class{constructor(){this.render=async(n,r,a)=>{let t={...c,...r==null?void 0:r.components};return new Promise((u,h)=>{e.e(2002).then(e.bind(e,"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:p})=>(0,o.l)(s.createElement(m,{showException:h,key:Math.random()},s.createElement(p,{components:t},s.createElement(d.WI,{context:n,docsParameter:r}))),a)).then(u)})},this.unmount=n=>{(0,o.K)(n)}}}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(_,l,e)=>{e.d(l,{Hw:()=>d.Hw,Xz:()=>d.Xz,h_:()=>d.h_,oG:()=>d.oG});var s=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),o=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),d=e("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"./storybook/stories/docs/howto.mdx":(_,l,e)=>{e.r(l),e.d(l,{default:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),c=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),m=e("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js");function i(a){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},(0,d.ah)(),a.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.h_,{title:"Docs/HowTo"}),`
`,(0,o.jsx)(t.h1,{id:"how-to-use-this-tool",children:"How to use this tool"}),`
`,(0,o.jsx)(t.p,{children:"The Jetpack Components Library allows you to discover, test and live-edit Jetpack visual component."}),`
`,(0,o.jsx)(t.h2,{id:"publish-component-stories",children:"Publish component stories"}),`
`,(0,o.jsxs)(t.p,{children:["Anywhere in a supported package, create one or more directories called ",(0,o.jsx)(t.code,{children:"stories"})," (e.g. src/components/my-component/stories)."]}),`
`,(0,o.jsx)(t.p,{children:"In that directory, create an index.stories.js or index.stories.jsx file, like this:"}),`
`,(0,o.jsx)(c.Hw,{language:"jsx",code:m.C`
	 	/**
	 	 * Internal dependencies
	 	 */
	 	import MyComponent from '../index.jsx';
	 	// the default export is metadata about the component
	 	export default {
	 		title: 'Components/My Component',
	 	};
	 	// the export called __default is the default state of the component
	 	export const _default = () => {
	 		return <MyComponent foo="bar"/>;
	 	};
	 `}),`
`,(0,o.jsxs)(t.p,{children:["You can read more about writing stories in the ",(0,o.jsx)(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook JS docs"})]}),`
`,(0,o.jsx)(t.h2,{id:"edit-components-live",children:"Edit components live"}),`
`,(0,o.jsx)(t.p,{children:"To run this locally, just run:"}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:`pnpm run storybook:dev
`})}),`
`,(0,o.jsx)(t.p,{children:"Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components."})]})}function n(a={}){const{wrapper:t}=Object.assign({},(0,d.ah)(),a.components);return t?(0,o.jsx)(t,Object.assign({},a,{children:(0,o.jsx)(i,a)})):i(a)}const r=n}}]);})();