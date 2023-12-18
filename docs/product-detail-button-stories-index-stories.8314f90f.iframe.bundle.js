"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8130],{"../../packages/my-jetpack/_inc/components/product-detail-button/stories/index.stories.jsx":(z,i,s)=>{var c,f,x;s.r(i),s.d(i,{Default:()=>o,__namedExportsOrder:()=>g,default:()=>l});var P=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=s("../../packages/my-jetpack/_inc/components/product-detail-button/index.js"),d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import React from 'react';
import ProductDetailButton from '../';

export default {
	title: 'Packages/My Jetpack/Product Detail Button',
	component: ProductDetailButton,
};

const DetaiilButton = args => <ProductDetailButton { ...args } slug="backup" />;

export const Default = DetaiilButton.bind( {} );
Default.args = {
	children: 'Add Jetpack Search',
};
`,_={Default:{startLoc:{col:22,line:9},endLoc:{col:79,line:9},startBody:{col:22,line:9},endBody:{col:79,line:9}}};const l={parameters:{storySource:{source:`import React from 'react';
import ProductDetailButton from '../';

export default {
	title: 'Packages/My Jetpack/Product Detail Button',
	component: ProductDetailButton,
};

const DetaiilButton = args => <ProductDetailButton { ...args } slug="backup" />;

export const Default = DetaiilButton.bind( {} );
Default.args = {
	children: 'Add Jetpack Search',
};
`,locationsMap:{default:{startLoc:{col:22,line:9},endLoc:{col:79,line:9},startBody:{col:22,line:9},endBody:{col:79,line:9}}}}},title:"Packages/My Jetpack/Product Detail Button",component:h.Z},b=D=>(0,d.jsx)(h.Z,{...D,slug:"backup"});b.displayName="DetaiilButton";const o=b.bind({});o.args={children:"Add Jetpack Search"},o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:'args => <ProductDetailButton {...args} slug="backup" />',...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const g=["Default"]},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(z,i,s)=>{s.d(i,{ZP:()=>M});var P=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=s.n(h),u=s("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_=s("../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),l=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),b=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function o(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=_.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,c=(0,u.Z)("svg",{target:"ea4tfvq2"})("width:",l.Z.spinnerSize,"px;height:",l.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",b.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),f={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},x=(0,u.Z)("circle",{target:"ea4tfvq1"})(f,";stroke:",b.D.gray[300],";"),D=(0,u.Z)("path",{target:"ea4tfvq0"})(f,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");function j({className:T,...F},k){return(0,P.createElement)(c,{className:d()("components-spinner",T),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...F,ref:k},(0,P.createElement)(x,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,P.createElement)(D,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const M=(0,P.forwardRef)(j)},"../../../node_modules/.pnpm/@wordpress+hooks@3.47.0/node_modules/@wordpress/hooks/build-module/index.js":(z,i,s)=>{s.d(i,{KG:()=>W,KJ:()=>U,O:()=>t,Hu:()=>n,JQ:()=>H,Kw:()=>ee,H7:()=>C,iR:()=>J});function P(y){return typeof y!="string"||y===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(y)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const h=P;function d(y){return typeof y!="string"||y===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(y)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(y)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const u=d;function _(y,$){return function(w,m,O,E=10){const B=y[$];if(!u(w)||!h(m))return;if(typeof O!="function"){console.error("The hook callback must be a function.");return}if(typeof E!="number"){console.error("If specified, the hook priority must be a number.");return}const L={callback:O,priority:E,namespace:m};if(B[w]){const N=B[w].handlers;let R;for(R=N.length;R>0&&!(E>=N[R-1].priority);R--);R===N.length?N[R]=L:N.splice(R,0,L),B.__current.forEach(q=>{q.name===w&&q.currentIndex>=R&&q.currentIndex++})}else B[w]={handlers:[L],runs:0};w!=="hookAdded"&&y.doAction("hookAdded",w,m,O,E)}}const l=_;function b(y,$,K=!1){return function(m,O){const E=y[$];if(!u(m)||!K&&!h(O))return;if(!E[m])return 0;let B=0;if(K)B=E[m].handlers.length,E[m]={runs:E[m].runs,handlers:[]};else{const L=E[m].handlers;for(let N=L.length-1;N>=0;N--)L[N].namespace===O&&(L.splice(N,1),B++,E.__current.forEach(R=>{R.name===m&&R.currentIndex>=N&&R.currentIndex--}))}return m!=="hookRemoved"&&y.doAction("hookRemoved",m,O),B}}const o=b;function g(y,$){return function(w,m){const O=y[$];return typeof m!="undefined"?w in O&&O[w].handlers.some(E=>E.namespace===m):w in O}}const c=g;function f(y,$,K=!1){return function(m,...O){const E=y[$];E[m]||(E[m]={handlers:[],runs:0}),E[m].runs++;const B=E[m].handlers;if(!B||!B.length)return K?O[0]:void 0;const L={name:m,currentIndex:0};for(E.__current.push(L);L.currentIndex<B.length;){const R=B[L.currentIndex].callback.apply(null,O);K&&(O[0]=R),L.currentIndex++}if(E.__current.pop(),K)return O[0]}}const x=f;function D(y,$){return function(){var O;var w;const m=y[$];return(w=(O=m.__current[m.__current.length-1])==null?void 0:O.name)!==null&&w!==void 0?w:null}}const j=D;function S(y,$){return function(w){const m=y[$];return typeof w=="undefined"?typeof m.__current[0]!="undefined":m.__current[0]?w===m.__current[0].name:!1}}const M=S;function T(y,$){return function(w){const m=y[$];if(u(w))return m[w]&&m[w].runs?m[w].runs:0}}const F=T;class k{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=l(this,"actions"),this.addFilter=l(this,"filters"),this.removeAction=o(this,"actions"),this.removeFilter=o(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=o(this,"actions",!0),this.removeAllFilters=o(this,"filters",!0),this.doAction=x(this,"actions"),this.applyFilters=x(this,"filters",!0),this.currentAction=j(this,"actions"),this.currentFilter=j(this,"filters"),this.doingAction=M(this,"actions"),this.doingFilter=M(this,"filters"),this.didAction=F(this,"actions"),this.didFilter=F(this,"filters")}}function Z(){return new k}const n=Z,H=n(),{addAction:W,addFilter:U,removeAction:J,removeFilter:Y,hasAction:V,hasFilter:C,removeAllActions:G,removeAllFilters:Q,doAction:ee,applyFilters:t,currentAction:e,currentFilter:r,doingAction:a,doingFilter:p,didAction:v,didFilter:A,actions:I,filters:X}=H},"../../packages/my-jetpack/_inc/components/product-detail-button/index.js":(z,i,s)=>{s.d(i,{Z:()=>o});var P=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),h=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),d=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),u=s.n(d),_=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=({children:g,className:c,href:f,isLoading:x,onClick:D,isPrimary:j,disabled:S})=>(0,l.jsx)(P.ZP,{onClick:D,className:c,href:f,variant:j?"primary":"secondary",disabled:x||S,children:x?(0,l.jsx)(h.ZP,{}):g});b.displayName="ProductDetailButton",b.propTypes={className:u().string,isLoading:u().bool,isPrimary:u().bool,disabled:u().bool},b.defaultProps={isLoading:!1,isPrimary:!0,disabled:!1};const o=b;b.__docgenInfo={description:"",methods:[],displayName:"ProductDetailButton",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPrimary:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs":(z,i,s)=>{s.d(i,{Vi:()=>C,l7:()=>Q});var P={grad:.9,turn:360,rad:360/(2*Math.PI)},h=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},d=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=Math.pow(10,e)),Math.round(r*t)/r+0},u=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=1),t>r?r:t>e?t:e},_=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},l=function(t){return{r:u(t.r,0,255),g:u(t.g,0,255),b:u(t.b,0,255),a:u(t.a)}},b=function(t){return{r:d(t.r),g:d(t.g),b:d(t.b),a:d(t.a,3)}},o=/^#([0-9a-f]{3,8})$/i,g=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},c=function(t){var e=t.r,r=t.g,a=t.b,p=t.a,v=Math.max(e,r,a),A=v-Math.min(e,r,a),I=A?v===e?(r-a)/A:v===r?2+(a-e)/A:4+(e-r)/A:0;return{h:60*(I<0?I+6:I),s:v?A/v*100:0,v:v/255*100,a:p}},f=function(t){var e=t.h,r=t.s,a=t.v,p=t.a;e=e/360*6,r/=100,a/=100;var v=Math.floor(e),A=a*(1-r),I=a*(1-(e-v)*r),X=a*(1-(1-e+v)*r),y=v%6;return{r:255*[a,I,A,A,X,a][y],g:255*[X,a,a,I,A,A][y],b:255*[A,A,X,a,a,I][y],a:p}},x=function(t){return{h:_(t.h),s:u(t.s,0,100),l:u(t.l,0,100),a:u(t.a)}},D=function(t){return{h:d(t.h),s:d(t.s),l:d(t.l),a:d(t.a,3)}},j=function(t){return f((r=(e=t).s,{h:e.h,s:(r*=((a=e.l)<50?a:100-a)/100)>0?2*r/(a+r)*100:0,v:a+r,a:e.a}));var e,r,a},S=function(t){return{h:(e=c(t)).h,s:(p=(200-(r=e.s))*(a=e.v)/100)>0&&p<200?r*a/100/(p<=100?p:200-p)*100:0,l:p/2,a:e.a};var e,r,a,p},M=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,F=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,k=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Z={string:[[function(t){var e=o.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?d(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?d(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=F.exec(t)||k.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:l({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=M.exec(t)||T.exec(t);if(!e)return null;var r,a,p=x({h:(r=e[1],a=e[2],a===void 0&&(a="deg"),Number(r)*(P[a]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return j(p)},"hsl"]],object:[[function(t){var e=t.r,r=t.g,a=t.b,p=t.a,v=p===void 0?1:p;return h(e)&&h(r)&&h(a)?l({r:Number(e),g:Number(r),b:Number(a),a:Number(v)}):null},"rgb"],[function(t){var e=t.h,r=t.s,a=t.l,p=t.a,v=p===void 0?1:p;if(!h(e)||!h(r)||!h(a))return null;var A=x({h:Number(e),s:Number(r),l:Number(a),a:Number(v)});return j(A)},"hsl"],[function(t){var e=t.h,r=t.s,a=t.v,p=t.a,v=p===void 0?1:p;if(!h(e)||!h(r)||!h(a))return null;var A=function(I){return{h:_(I.h),s:u(I.s,0,100),v:u(I.v,0,100),a:u(I.a)}}({h:Number(e),s:Number(r),v:Number(a),a:Number(v)});return f(A)},"hsv"]]},n=function(t,e){for(var r=0;r<e.length;r++){var a=e[r][0](t);if(a)return[a,e[r][1]]}return[null,void 0]},H=function(t){return typeof t=="string"?n(t.trim(),Z.string):typeof t=="object"&&t!==null?n(t,Z.object):[null,void 0]},W=function(t){return H(t)[1]},U=function(t,e){var r=S(t);return{h:r.h,s:u(r.s+100*e,0,100),l:r.l,a:r.a}},J=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},Y=function(t,e){var r=S(t);return{h:r.h,s:r.s,l:u(r.l+100*e,0,100),a:r.a}},V=function(){function t(e){this.parsed=H(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return d(J(this.rgba),2)},t.prototype.isDark=function(){return J(this.rgba)<.5},t.prototype.isLight=function(){return J(this.rgba)>=.5},t.prototype.toHex=function(){return e=b(this.rgba),r=e.r,a=e.g,p=e.b,A=(v=e.a)<1?g(d(255*v)):"","#"+g(r)+g(a)+g(p)+A;var e,r,a,p,v,A},t.prototype.toRgb=function(){return b(this.rgba)},t.prototype.toRgbString=function(){return e=b(this.rgba),r=e.r,a=e.g,p=e.b,(v=e.a)<1?"rgba("+r+", "+a+", "+p+", "+v+")":"rgb("+r+", "+a+", "+p+")";var e,r,a,p,v},t.prototype.toHsl=function(){return D(S(this.rgba))},t.prototype.toHslString=function(){return e=D(S(this.rgba)),r=e.h,a=e.s,p=e.l,(v=e.a)<1?"hsla("+r+", "+a+"%, "+p+"%, "+v+")":"hsl("+r+", "+a+"%, "+p+"%)";var e,r,a,p,v},t.prototype.toHsv=function(){return e=c(this.rgba),{h:d(e.h),s:d(e.s),v:d(e.v),a:d(e.a,3)};var e},t.prototype.invert=function(){return C({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),C(U(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),C(U(this.rgba,-e))},t.prototype.grayscale=function(){return C(U(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),C(Y(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),C(Y(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?C({r:(r=this.rgba).r,g:r.g,b:r.b,a:e}):d(this.rgba.a,3);var r},t.prototype.hue=function(e){var r=S(this.rgba);return typeof e=="number"?C({h:e,s:r.s,l:r.l,a:r.a}):d(r.h)},t.prototype.isEqual=function(e){return this.toHex()===C(e).toHex()},t}(),C=function(t){return t instanceof V?t:new V(t)},G=[],Q=function(t){t.forEach(function(e){G.indexOf(e)<0&&(e(V,Z),G.push(e))})},ee=function(){return new V({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})}},"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs":(z,i,s)=>{s.d(i,{Z:()=>P});function P(h,d){var u={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},_={};for(var l in u)_[u[l]]=l;var b={};h.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var g,c,f=_[this.toHex()];if(f)return f;if(o!=null&&o.closest){var x=this.toRgb(),D=1/0,j="black";if(!b.length)for(var S in u)b[S]=new h(u[S]).toRgb();for(var M in u){var T=(g=x,c=b[M],Math.pow(g.r-c.r,2)+Math.pow(g.g-c.g,2)+Math.pow(g.b-c.b,2));T<D&&(D=T,j=M)}return j}},d.string.push([function(o){var g=o.toLowerCase(),c=g==="transparent"?"#0000":u[g];return c?new h(c).toRgb():null},"name"])}},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(z,i,s)=>{var P=s("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[P.ForwardRef]=u,l[P.Memo]=_;function b(S){return P.isMemo(S)?_:l[S.$$typeof]||h}var o=Object.defineProperty,g=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,D=Object.prototype;function j(S,M,T){if(typeof M!="string"){if(D){var F=x(M);F&&F!==D&&j(S,F,T)}var k=g(M);c&&(k=k.concat(c(M)));for(var Z=b(S),n=b(M),H=0;H<k.length;++H){var W=k[H];if(!d[W]&&!(T&&T[W])&&!(n&&n[W])&&!(Z&&Z[W])){var U=f(M,W);try{o(S,W,U)}catch(J){}}}}return S}z.exports=j},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(z,i,s)=>{s.d(i,{Z:()=>P});function P(h,d){var u=0,_,l;d=d||{};function b(){var o=_,g=arguments.length,c,f;e:for(;o;){if(o.args.length!==arguments.length){o=o.next;continue}for(f=0;f<g;f++)if(o.args[f]!==arguments[f]){o=o.next;continue e}return o!==_&&(o===l&&(l=o.prev),o.prev.next=o.next,o.next&&(o.next.prev=o.prev),o.next=_,o.prev=null,_.prev=o,_=o),o.val}for(c=new Array(g),f=0;f<g;f++)c[f]=arguments[f];return o={args:c,val:h.apply(null,c)},_?(_.prev=o,o.next=_):l=o,u===d.maxSize?(l=l.prev,l.next=null):u++,_=o,o.val}return b.clear=function(){_=null,l=null,u=0},b}},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(z,i)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,P=s?Symbol.for("react.element"):60103,h=s?Symbol.for("react.portal"):60106,d=s?Symbol.for("react.fragment"):60107,u=s?Symbol.for("react.strict_mode"):60108,_=s?Symbol.for("react.profiler"):60114,l=s?Symbol.for("react.provider"):60109,b=s?Symbol.for("react.context"):60110,o=s?Symbol.for("react.async_mode"):60111,g=s?Symbol.for("react.concurrent_mode"):60111,c=s?Symbol.for("react.forward_ref"):60112,f=s?Symbol.for("react.suspense"):60113,x=s?Symbol.for("react.suspense_list"):60120,D=s?Symbol.for("react.memo"):60115,j=s?Symbol.for("react.lazy"):60116,S=s?Symbol.for("react.block"):60121,M=s?Symbol.for("react.fundamental"):60117,T=s?Symbol.for("react.responder"):60118,F=s?Symbol.for("react.scope"):60119;function k(n){if(typeof n=="object"&&n!==null){var H=n.$$typeof;switch(H){case P:switch(n=n.type,n){case o:case g:case d:case _:case u:case f:return n;default:switch(n=n&&n.$$typeof,n){case b:case c:case j:case D:case l:return n;default:return H}}case h:return H}}}function Z(n){return k(n)===g}i.AsyncMode=o,i.ConcurrentMode=g,i.ContextConsumer=b,i.ContextProvider=l,i.Element=P,i.ForwardRef=c,i.Fragment=d,i.Lazy=j,i.Memo=D,i.Portal=h,i.Profiler=_,i.StrictMode=u,i.Suspense=f,i.isAsyncMode=function(n){return Z(n)||k(n)===o},i.isConcurrentMode=Z,i.isContextConsumer=function(n){return k(n)===b},i.isContextProvider=function(n){return k(n)===l},i.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===P},i.isForwardRef=function(n){return k(n)===c},i.isFragment=function(n){return k(n)===d},i.isLazy=function(n){return k(n)===j},i.isMemo=function(n){return k(n)===D},i.isPortal=function(n){return k(n)===h},i.isProfiler=function(n){return k(n)===_},i.isStrictMode=function(n){return k(n)===u},i.isSuspense=function(n){return k(n)===f},i.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===d||n===g||n===_||n===u||n===f||n===x||typeof n=="object"&&n!==null&&(n.$$typeof===j||n.$$typeof===D||n.$$typeof===l||n.$$typeof===b||n.$$typeof===c||n.$$typeof===M||n.$$typeof===T||n.$$typeof===F||n.$$typeof===S)},i.typeOf=k},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(z,i,s)=>{z.exports=s("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
