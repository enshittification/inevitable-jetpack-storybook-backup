"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4471],{"../../../node_modules/.pnpm/@emotion+react@11.11.0_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(T,o,i)=>{i.d(o,{F4:()=>z,iv:()=>E});var x=i("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=i("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),a=i("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),c=i("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=i("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),j=i.n(f),y={name:"@emotion/react",version:"11.11.0",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.2","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.0","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},P=function(d,l){var p=arguments;if(l==null||!hasOwnProperty.call(l,"css"))return React.createElement.apply(void 0,p);var _=p.length,R=new Array(_);R[0]=Emotion,R[1]=createEmotionProps(d,l);for(var w=2;w<_;w++)R[w]=p[w];return React.createElement.apply(null,R)},b=!1,v=null;function E(){for(var r=arguments.length,d=new Array(r),l=0;l<r;l++)d[l]=arguments[l];return(0,a.O)(d)}var z=function(){var d=E.apply(void 0,arguments),l="animation-"+d.name;return{name:l,styles:"@keyframes "+l+"{"+d.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$=function r(d){for(var l=d.length,p=0,_="";p<l;p++){var R=d[p];if(R!=null){var w=void 0;switch(typeof R){case"boolean":break;case"object":{if(Array.isArray(R))w=r(R);else{w="";for(var M in R)R[M]&&M&&(w&&(w+=" "),w+=M)}break}default:w=R}w&&(_&&(_+=" "),_+=w)}}return _};function N(r,d,l){var p=[],_=getRegisteredStyles(r,p,l);return p.length<2?l:_+d(p)}var k=function(d){var l=d.cache,p=d.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var _=0;_<p.length;_++)insertStyles(l,p[_],!1)}),null},O=null;if(!1)var D,A,g,I},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js":(T,o,i)=>{i.d(o,{D:()=>h});const x="4px";function h(a){var c,f;if(typeof a=="undefined")return;if(!a)return"0";const j=typeof a=="number"?a:Number(a);return typeof window!="undefined"&&(c=window.CSS)!==null&&c!==void 0&&(f=c.supports)!==null&&f!==void 0&&f.call(c,"margin",a.toString())||Number.isNaN(j)?a.toString():`calc(${x} * ${a})`}},"../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(T,o,i)=>{i.d(o,{D:()=>b});var x=i("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs"),h=i("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");(0,x.l7)([h.Z]);function a(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,x.Vi)(E).alpha(z).toRgbString()}const c="#fff",f={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},j={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},y={theme:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))",themeDark10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #006ba1))"},P={theme:y.theme,themeDark10:y.themeDark10,background:c,backgroundDisabled:f[100],border:f[600],borderHover:f[700],borderFocus:y.themeDark10,borderDisabled:f[400],textDisabled:f[600],textDark:c,darkGrayPlaceholder:a(f[900],.62),lightGrayPlaceholder:a(c,.65)},b=Object.freeze({gray:f,white:c,alert:j,ui:P}),v=null},"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs":(T,o,i)=>{i.d(o,{Vi:()=>M,l7:()=>L});var x={grad:.9,turn:360,rad:360/(2*Math.PI)},h=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},a=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n+0},c=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t>e?t:e},f=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},j=function(t){return{r:c(t.r,0,255),g:c(t.g,0,255),b:c(t.b,0,255),a:c(t.a)}},y=function(t){return{r:a(t.r),g:a(t.g),b:a(t.b),a:a(t.a,3)}},P=/^#([0-9a-f]{3,8})$/i,b=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},v=function(t){var e=t.r,n=t.g,s=t.b,u=t.a,m=Math.max(e,n,s),S=m-Math.min(e,n,s),C=S?m===e?(n-s)/S:m===n?2+(s-e)/S:4+(e-n)/S:0;return{h:60*(C<0?C+6:C),s:m?S/m*100:0,v:m/255*100,a:u}},E=function(t){var e=t.h,n=t.s,s=t.v,u=t.a;e=e/360*6,n/=100,s/=100;var m=Math.floor(e),S=s*(1-n),C=s*(1-(e-m)*n),B=s*(1-(1-e+m)*n),H=m%6;return{r:255*[s,C,S,S,B,s][H],g:255*[B,s,s,C,S,S][H],b:255*[S,S,B,s,s,C][H],a:u}},z=function(t){return{h:f(t.h),s:c(t.s,0,100),l:c(t.l,0,100),a:c(t.a)}},$=function(t){return{h:a(t.h),s:a(t.s),l:a(t.l),a:a(t.a,3)}},N=function(t){return E((n=(e=t).s,{h:e.h,s:(n*=((s=e.l)<50?s:100-s)/100)>0?2*n/(s+n)*100:0,v:s+n,a:e.a}));var e,n,s},k=function(t){return{h:(e=v(t)).h,s:(u=(200-(n=e.s))*(s=e.v)/100)>0&&u<200?n*s/100/(u<=100?u:200-u)*100:0,l:u/2,a:e.a};var e,n,s,u},O=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,D=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,g=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,I={string:[[function(t){var e=P.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?a(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?a(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=A.exec(t)||g.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:j({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=O.exec(t)||D.exec(t);if(!e)return null;var n,s,u=z({h:(n=e[1],s=e[2],s===void 0&&(s="deg"),Number(n)*(x[s]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return N(u)},"hsl"]],object:[[function(t){var e=t.r,n=t.g,s=t.b,u=t.a,m=u===void 0?1:u;return h(e)&&h(n)&&h(s)?j({r:Number(e),g:Number(n),b:Number(s),a:Number(m)}):null},"rgb"],[function(t){var e=t.h,n=t.s,s=t.l,u=t.a,m=u===void 0?1:u;if(!h(e)||!h(n)||!h(s))return null;var S=z({h:Number(e),s:Number(n),l:Number(s),a:Number(m)});return N(S)},"hsl"],[function(t){var e=t.h,n=t.s,s=t.v,u=t.a,m=u===void 0?1:u;if(!h(e)||!h(n)||!h(s))return null;var S=function(C){return{h:f(C.h),s:c(C.s,0,100),v:c(C.v,0,100),a:c(C.a)}}({h:Number(e),s:Number(n),v:Number(s),a:Number(m)});return E(S)},"hsv"]]},r=function(t,e){for(var n=0;n<e.length;n++){var s=e[n][0](t);if(s)return[s,e[n][1]]}return[null,void 0]},d=function(t){return typeof t=="string"?r(t.trim(),I.string):typeof t=="object"&&t!==null?r(t,I.object):[null,void 0]},l=function(t){return d(t)[1]},p=function(t,e){var n=k(t);return{h:n.h,s:c(n.s+100*e,0,100),l:n.l,a:n.a}},_=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},R=function(t,e){var n=k(t);return{h:n.h,s:n.s,l:c(n.l+100*e,0,100),a:n.a}},w=function(){function t(e){this.parsed=d(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return a(_(this.rgba),2)},t.prototype.isDark=function(){return _(this.rgba)<.5},t.prototype.isLight=function(){return _(this.rgba)>=.5},t.prototype.toHex=function(){return e=y(this.rgba),n=e.r,s=e.g,u=e.b,S=(m=e.a)<1?b(a(255*m)):"","#"+b(n)+b(s)+b(u)+S;var e,n,s,u,m,S},t.prototype.toRgb=function(){return y(this.rgba)},t.prototype.toRgbString=function(){return e=y(this.rgba),n=e.r,s=e.g,u=e.b,(m=e.a)<1?"rgba("+n+", "+s+", "+u+", "+m+")":"rgb("+n+", "+s+", "+u+")";var e,n,s,u,m},t.prototype.toHsl=function(){return $(k(this.rgba))},t.prototype.toHslString=function(){return e=$(k(this.rgba)),n=e.h,s=e.s,u=e.l,(m=e.a)<1?"hsla("+n+", "+s+"%, "+u+"%, "+m+")":"hsl("+n+", "+s+"%, "+u+"%)";var e,n,s,u,m},t.prototype.toHsv=function(){return e=v(this.rgba),{h:a(e.h),s:a(e.s),v:a(e.v),a:a(e.a,3)};var e},t.prototype.invert=function(){return M({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),M(p(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),M(p(this.rgba,-e))},t.prototype.grayscale=function(){return M(p(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),M(R(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),M(R(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?M({r:(n=this.rgba).r,g:n.g,b:n.b,a:e}):a(this.rgba.a,3);var n},t.prototype.hue=function(e){var n=k(this.rgba);return typeof e=="number"?M({h:e,s:n.s,l:n.l,a:n.a}):a(n.h)},t.prototype.isEqual=function(e){return this.toHex()===M(e).toHex()},t}(),M=function(t){return t instanceof w?t:new w(t)},F=[],L=function(t){t.forEach(function(e){F.indexOf(e)<0&&(e(w,I),F.push(e))})},W=function(){return new w({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})}},"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs":(T,o,i)=>{i.d(o,{Z:()=>x});function x(h,a){var c={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},f={};for(var j in c)f[c[j]]=j;var y={};h.prototype.toName=function(P){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var b,v,E=f[this.toHex()];if(E)return E;if(P!=null&&P.closest){var z=this.toRgb(),$=1/0,N="black";if(!y.length)for(var k in c)y[k]=new h(c[k]).toRgb();for(var O in c){var D=(b=z,v=y[O],Math.pow(b.r-v.r,2)+Math.pow(b.g-v.g,2)+Math.pow(b.b-v.b,2));D<$&&($=D,N=O)}return N}},a.string.push([function(P){var b=P.toLowerCase(),v=b==="transparent"?"#0000":c[b];return v?new h(v).toRgb():null},"name"])}},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(T,o,i)=>{var x=i("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j={};j[x.ForwardRef]=c,j[x.Memo]=f;function y(k){return x.isMemo(k)?f:j[k.$$typeof]||h}var P=Object.defineProperty,b=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,E=Object.getOwnPropertyDescriptor,z=Object.getPrototypeOf,$=Object.prototype;function N(k,O,D){if(typeof O!="string"){if($){var A=z(O);A&&A!==$&&N(k,A,D)}var g=b(O);v&&(g=g.concat(v(O)));for(var I=y(k),r=y(O),d=0;d<g.length;++d){var l=g[d];if(!a[l]&&!(D&&D[l])&&!(r&&r[l])&&!(I&&I[l])){var p=E(O,l);try{P(k,l,p)}catch(_){}}}}return k}T.exports=N},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(T,o)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=typeof Symbol=="function"&&Symbol.for,x=i?Symbol.for("react.element"):60103,h=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.profiler"):60114,j=i?Symbol.for("react.provider"):60109,y=i?Symbol.for("react.context"):60110,P=i?Symbol.for("react.async_mode"):60111,b=i?Symbol.for("react.concurrent_mode"):60111,v=i?Symbol.for("react.forward_ref"):60112,E=i?Symbol.for("react.suspense"):60113,z=i?Symbol.for("react.suspense_list"):60120,$=i?Symbol.for("react.memo"):60115,N=i?Symbol.for("react.lazy"):60116,k=i?Symbol.for("react.block"):60121,O=i?Symbol.for("react.fundamental"):60117,D=i?Symbol.for("react.responder"):60118,A=i?Symbol.for("react.scope"):60119;function g(r){if(typeof r=="object"&&r!==null){var d=r.$$typeof;switch(d){case x:switch(r=r.type,r){case P:case b:case a:case f:case c:case E:return r;default:switch(r=r&&r.$$typeof,r){case y:case v:case N:case $:case j:return r;default:return d}}case h:return d}}}function I(r){return g(r)===b}o.AsyncMode=P,o.ConcurrentMode=b,o.ContextConsumer=y,o.ContextProvider=j,o.Element=x,o.ForwardRef=v,o.Fragment=a,o.Lazy=N,o.Memo=$,o.Portal=h,o.Profiler=f,o.StrictMode=c,o.Suspense=E,o.isAsyncMode=function(r){return I(r)||g(r)===P},o.isConcurrentMode=I,o.isContextConsumer=function(r){return g(r)===y},o.isContextProvider=function(r){return g(r)===j},o.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===x},o.isForwardRef=function(r){return g(r)===v},o.isFragment=function(r){return g(r)===a},o.isLazy=function(r){return g(r)===N},o.isMemo=function(r){return g(r)===$},o.isPortal=function(r){return g(r)===h},o.isProfiler=function(r){return g(r)===f},o.isStrictMode=function(r){return g(r)===c},o.isSuspense=function(r){return g(r)===E},o.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===a||r===b||r===f||r===c||r===E||r===z||typeof r=="object"&&r!==null&&(r.$$typeof===N||r.$$typeof===$||r.$$typeof===j||r.$$typeof===y||r.$$typeof===v||r.$$typeof===O||r.$$typeof===D||r.$$typeof===A||r.$$typeof===k)},o.typeOf=g},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(T,o,i)=>{T.exports=i("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
