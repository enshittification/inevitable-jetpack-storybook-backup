(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3033],{"../../../node_modules/.pnpm/@use-gesture+react@10.2.27_react@18.2.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js":(W,T,f)=>{"use strict";f.d(T,{useDrag:()=>de,useHover:()=>pe});function m(s,t,e){return Math.max(t,Math.min(s,e))}const a={toVector(s,t){return s===void 0&&(s=t),Array.isArray(s)?s:[s,s]},add(s,t){return[s[0]+t[0],s[1]+t[1]]},sub(s,t){return[s[0]-t[0],s[1]-t[1]]},addTo(s,t){s[0]+=t[0],s[1]+=t[1]},subTo(s,t){s[0]-=t[0],s[1]-=t[1]}};function g(s,t,e){return t===0||Math.abs(t)===1/0?Math.pow(s,e*5):s*t*e/(t+e*s)}function D(s,t,e,i=.15){return i===0?m(s,t,e):s<t?-g(t-s,e-t,i)+t:s>e?+g(s-e,e-t,i)+e:s}function F(s,[t,e],[i,n]){const[[r,o],[h,p]]=s;return[D(t,r,o,i),D(e,h,p,n)]}function Z(s,t){if(typeof s!="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var i=e.call(s,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function x(s){var t=Z(s,"string");return typeof t=="symbol"?t:String(t)}function u(s,t,e){return t=x(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function y(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,i)}return e}function c(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?y(Object(e),!0).forEach(function(i){u(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}const v={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function _(s){return s?s[0].toUpperCase()+s.slice(1):""}const S=["enter","leave"];function E(s=!1,t){return s&&!S.includes(t)}function I(s,t="",e=!1){const i=v[s],n=i&&i[t]||t;return"on"+_(s)+_(n)+(E(e,n)?"Capture":"")}const b=["gotpointercapture","lostpointercapture"];function O(s){let t=s.substring(2).toLowerCase();const e=!!~t.indexOf("passive");e&&(t=t.replace("passive",""));const i=b.includes(t)?"capturecapture":"capture",n=!!~t.indexOf(i);return n&&(t=t.replace("capture","")),{device:t,capture:n,passive:e}}function H(s,t=""){const e=v[s],i=e&&e[t]||t;return s+i}function P(s){return"touches"in s}function B(s){return P(s)?"touch":"pointerType"in s?s.pointerType:"mouse"}function bt(s){return Array.from(s.touches).filter(t=>{var e,i;return t.target===s.currentTarget||((e=s.currentTarget)===null||e===void 0||(i=e.contains)===null||i===void 0?void 0:i.call(e,t.target))})}function yt(s){return s.type==="touchend"||s.type==="touchcancel"?s.changedTouches:s.targetTouches}function st(s){return P(s)?yt(s)[0]:s}function J(s,t){try{const e=t.clientX-s.clientX,i=t.clientY-s.clientY,n=(t.clientX+s.clientX)/2,r=(t.clientY+s.clientY)/2,o=Math.hypot(e,i);return{angle:-(Math.atan2(e,i)*180)/Math.PI,distance:o,origin:[n,r]}}catch(e){}return null}function Et(s){return bt(s).map(t=>t.identifier)}function it(s,t){const[e,i]=Array.from(s.touches).filter(n=>t.includes(n.identifier));return J(e,i)}function Q(s){const t=st(s);return P(s)?t.identifier:t.pointerId}function R(s){const t=st(s);return[t.clientX,t.clientY]}const nt=40,rt=800;function ot(s){let{deltaX:t,deltaY:e,deltaMode:i}=s;return i===1?(t*=nt,e*=nt):i===2&&(t*=rt,e*=rt),[t,e]}function wt(s){var t,e;const{scrollX:i,scrollY:n,scrollLeft:r,scrollTop:o}=s.currentTarget;return[(t=i!=null?i:r)!==null&&t!==void 0?t:0,(e=n!=null?n:o)!==null&&e!==void 0?e:0]}function Tt(s){const t={};if("buttons"in s&&(t.buttons=s.buttons),"shiftKey"in s){const{shiftKey:e,altKey:i,metaKey:n,ctrlKey:r}=s;Object.assign(t,{shiftKey:e,altKey:i,metaKey:n,ctrlKey:r})}return t}function Y(s,...t){return typeof s=="function"?s(...t):s}function At(){}function St(...s){return s.length===0?At:s.length===1?s[0]:function(){let t;for(const e of s)t=e.apply(this,arguments)||t;return t}}function at(s,t){return Object.assign({},t,s||{})}const It=32;class ct{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:i,args:n}=this;e[i]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=n,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=i.from?Y(i.from,e):e.offset,e.offset=e.lastOffset,e.startTime=e.timeStamp=t.timeStamp)}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:i,shared:n}=this;e.args=this.args;let r=0;if(t&&(e.event=t,i.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,n.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,n.locked=!!document.pointerLockElement,Object.assign(n,Tt(t)),n.down=n.pressed=n.buttons%2===1||n.touches>0,r=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const L=e._delta.map(Math.abs);a.addTo(e._distance,L)}this.axisIntent&&this.axisIntent(t);const[o,h]=e._movement,[p,d]=i.threshold,{_step:l,values:k}=e;if(i.hasCustomTransform?(l[0]===!1&&(l[0]=Math.abs(o)>=p&&k[0]),l[1]===!1&&(l[1]=Math.abs(h)>=d&&k[1])):(l[0]===!1&&(l[0]=Math.abs(o)>=p&&Math.sign(o)*p),l[1]===!1&&(l[1]=Math.abs(h)>=d&&Math.sign(h)*d)),e.intentional=l[0]!==!1||l[1]!==!1,!e.intentional)return;const w=[0,0];if(i.hasCustomTransform){const[L,ye]=k;w[0]=l[0]!==!1?L-l[0]:0,w[1]=l[1]!==!1?ye-l[1]:0}else w[0]=l[0]!==!1?o-l[0]:0,w[1]=l[1]!==!1?h-l[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(w);const X=e.offset,G=e._active&&!e._blocked||e.active;G&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=n[this.ingKey]=e._active,t&&(e.first&&("bounds"in i&&(e._bounds=Y(i.bounds,e)),this.setup&&this.setup()),e.movement=w,this.computeOffset()));const[N,$]=e.offset,[[et,_e],[ge,ve]]=e._bounds;e.overflow=[N<et?-1:N>_e?1:0,$<ge?-1:$>ve?1:0],e._movementBound[0]=e.overflow[0]?e._movementBound[0]===!1?e._movement[0]:e._movementBound[0]:!1,e._movementBound[1]=e.overflow[1]?e._movementBound[1]===!1?e._movement[1]:e._movementBound[1]:!1;const be=e._active?i.rubberband||[0,0]:[0,0];if(e.offset=F(e._bounds,e.offset,be),e.delta=a.sub(e.offset,X),this.computeMovement(),G&&(!e.last||r>It)){e.delta=a.sub(e.offset,X);const L=e.delta.map(Math.abs);a.addTo(e.distance,L),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&r>0&&(e.velocity=[L[0]/r,L[1]/r],e.timeDelta=r)}}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const n=this.handler(c(c(c({},e),t),{},{[this.aliasKey]:t.values}));n!==void 0&&(t.memo=n)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function kt([s,t],e){const i=Math.abs(s),n=Math.abs(t);if(i>n&&i>e)return"x";if(n>i&&n>e)return"y"}class V extends ct{constructor(...t){super(...t),u(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=a.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=a.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,i=this.config;if(!e.axis&&t){const n=typeof i.axisThreshold=="object"?i.axisThreshold[B(t)]:i.axisThreshold;e.axis=kt(e._movement,n)}e._blocked=(i.lockDirection||!!i.axis)&&!e.axis||!!i.axis&&i.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const xt=s=>s,ut=.15,lt={enabled(s=!0){return s},eventOptions(s,t,e){return c(c({},e.shared.eventOptions),s)},preventDefault(s=!1){return s},triggerAllEvents(s=!1){return s},rubberband(s=0){switch(s){case!0:return[ut,ut];case!1:return[0,0];default:return a.toVector(s)}},from(s){if(typeof s=="function")return s;if(s!=null)return a.toVector(s)},transform(s,t,e){const i=s||e.shared.transform;return this.hasCustomTransform=!!i,i||xt},threshold(s){return a.toVector(s,0)}},Dt=0,M=c(c({},lt),{},{axis(s,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},axisThreshold(s=Dt){return s},bounds(s={}){if(typeof s=="function")return r=>M.bounds(s(r));if("current"in s)return()=>s.current;if(typeof HTMLElement=="function"&&s instanceof HTMLElement)return s;const{left:t=-1/0,right:e=1/0,top:i=-1/0,bottom:n=1/0}=s;return[[t,e],[i,n]]}}),ht={ArrowRight:(s,t=1)=>[s*t,0],ArrowLeft:(s,t=1)=>[-1*s*t,0],ArrowUp:(s,t=1)=>[0,-1*s*t],ArrowDown:(s,t=1)=>[0,s*t]};class Ot extends V{constructor(...t){super(...t),u(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),n={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=M.bounds(n)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,i=this.state;if(t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons))return;const n=this.ctrl.setEventIds(t);e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(n&&n.size>1&&i._pointerActive)&&(this.start(t),this.setupPointer(t),i._pointerId=Q(t),i._pointerActive=!0,this.computeValues(R(t)),this.computeInitial(),e.preventScrollAxis&&B(t)!=="mouse"?(i._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,i=this.config;if(!e._pointerActive)return;const n=Q(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;const r=R(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=a.sub(r,e._values),this.computeValues(r)),a.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(i.preventScrollAxis&&!e._preventScroll)if(e.axis)if(e.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch(h){}const e=this.state,i=this.config;if(!e._active||!e._pointerActive)return;const n=Q(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[r,o]=e._distance;if(e.tap=r<=i.tapsThreshold&&o<=i.tapsThreshold,e.tap&&i.filterTaps)e._force=!0;else{const[h,p]=e._delta,[d,l]=e._movement,[k,w]=i.swipe.velocity,[X,G]=i.swipe.distance,N=i.swipe.duration;if(e.elapsedTime<N){const $=Math.abs(h/e.timeDelta),et=Math.abs(p/e.timeDelta);$>k&&Math.abs(d)>X&&(e.swipe[0]=Math.sign(h)),et>w&&Math.abs(l)>G&&(e.swipe[1]=Math.sign(p))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,i=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,Pt(t);const e=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",e),this.eventStore.add(this.sharedConfig.window,"touch","cancel",e),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const e=ht[t.key];if(e){const i=this.state,n=t.shiftKey?10:t.altKey?.1:1;this.start(t),i._delta=e(this.config.keyboardDisplacement,n),i._keyboardActive=!0,a.addTo(i._movement,i._delta),this.compute(t),this.emit()}}keyUp(t){t.key in ht&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Pt(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}const U=typeof window!="undefined"&&window.document&&window.document.createElement;function Mt(){return U&&"ontouchstart"in window}function ft(){return Mt()||U&&window.navigator.maxTouchPoints>1}function Ct(){return U&&"onpointerdown"in window}function Lt(){return U&&"exitPointerLock"in window.document}function Rt(){try{return"constructor"in GestureEvent}catch(s){return!1}}const A={isBrowser:U,gesture:Rt(),touch:ft(),touchscreen:ft(),pointer:Ct(),pointerLock:Lt()},jt=250,Kt=180,Ht=.5,Bt=50,Vt=250,Ut=10,dt={mouse:0,touch:0,pen:8},Wt=c(c({},M),{},{device(s,t,{pointer:{touch:e=!1,lock:i=!1,mouse:n=!1}={}}){return this.pointerLock=i&&A.pointerLock,A.touch&&e?"touch":this.pointerLock?"mouse":A.pointer&&!n?"pointer":A.touch?"touch":"mouse"},preventScrollAxis(s,t,{preventScroll:e}){if(this.preventScrollDelay=typeof e=="number"?e:e||e===void 0&&s?jt:void 0,!(!A.touchscreen||e===!1))return s||(e!==void 0?"y":void 0)},pointerCapture(s,t,{pointer:{capture:e=!0,buttons:i=1,keys:n=!0}={}}){return this.pointerButtons=i,this.keys=n,!this.pointerLock&&this.device==="pointer"&&e},threshold(s,t,{filterTaps:e=!1,tapsThreshold:i=3,axis:n=void 0}){const r=a.toVector(s,e?i:n?1:0);return this.filterTaps=e,this.tapsThreshold=i,r},swipe({velocity:s=Ht,distance:t=Bt,duration:e=Vt}={}){return{velocity:this.transform(a.toVector(s)),distance:this.transform(a.toVector(t)),duration:e}},delay(s=0){switch(s){case!0:return Kt;case!1:return 0;default:return s}},axisThreshold(s){return s?c(c({},dt),s):dt},keyboardDisplacement(s=Ut){return s}});function pt(s){const[t,e]=s.overflow,[i,n]=s._delta,[r,o]=s._direction;(t<0&&i>0&&r<0||t>0&&i<0&&r>0)&&(s._movement[0]=s._movementBound[0]),(e<0&&n>0&&o<0||e>0&&n<0&&o>0)&&(s._movement[1]=s._movementBound[1])}const Yt=30,zt=100;class Xt extends ct{constructor(...t){super(...t),u(this,"ingKey","pinching"),u(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:e,lastOffset:i}=this.state;t==="wheel"?this.state.offset=a.add(e,i):this.state.offset=[(1+e[0])*i[0],e[1]+i[1]]}computeMovement(){const{offset:t,lastOffset:e}=this.state;this.state.movement=[t[0]/e[0],t[1]-e[1]]}axisIntent(){const t=this.state,[e,i]=t._movement;if(!t.axis){const n=Math.abs(e)*Yt-Math.abs(i);n<0?t.axis="angle":n>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const e=this.state,i=this.ctrl.touchIds;if(e._active&&e._touchIds.every(r=>i.has(r))||i.size<2)return;this.start(t),e._touchIds=Array.from(i).slice(0,2);const n=it(t,e._touchIds);n&&this.pinchStart(t,n)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const e=this.state,i=e._pointerEvents,n=this.ctrl.pointerIds;if(e._active&&Array.from(i.keys()).every(o=>n.has(o))||(i.size<2&&i.set(t.pointerId,t),e._pointerEvents.size<2))return;this.start(t);const r=J(...Array.from(i.values()));r&&this.pinchStart(t,r)}pinchStart(t,e){const i=this.state;i.origin=e.origin,this.computeValues([e.distance,e.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const e=it(t,this.state._touchIds);e&&this.pinchMove(t,e)}pointerMove(t){const e=this.state._pointerEvents;if(e.has(t.pointerId)&&e.set(t.pointerId,t),!this.state._active)return;const i=J(...Array.from(e.values()));i&&this.pinchMove(t,i)}pinchMove(t,e){const i=this.state,n=i._values[1],r=e.angle-n;let o=0;Math.abs(r)>270&&(o+=Math.sign(r)),this.computeValues([e.distance,e.angle-360*o]),i.origin=e.origin,i.turns=o,i._movement=[i._values[0]/i._initial[0]-1,i._values[1]-i._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(e=>!this.ctrl.touchIds.has(e))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const e=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch(i){}e._pointerEvents.has(t.pointerId)&&e._pointerEvents.delete(t.pointerId),e._active&&e._pointerEvents.size<2&&(e._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const e=this.state;e._active||(this.start(t),this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const e=this.state;this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY];const i=e._movement;e._movement=[t.scale-1,t.rotation],e._delta=a.sub(e._movement,i),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const e=this.config.modifierKey;e&&!t[e]||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const i=this.state;i._delta=[-ot(t)[1]/zt*i.offset[0],0],a.addTo(i._movement,i._delta),pt(i),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const e=this.config.device;e&&(t(e,"start",this[e+"Start"].bind(this)),t(e,"change",this[e+"Move"].bind(this)),t(e,"end",this[e+"End"].bind(this)),t(e,"cancel",this[e+"End"].bind(this)),t("lostPointerCapture","",this[e+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const Gt=c(c({},lt),{},{device(s,t,{shared:e,pointer:{touch:i=!1}={}}){if(e.target&&!A.touch&&A.gesture)return"gesture";if(A.touch&&i)return"touch";if(A.touchscreen){if(A.pointer)return"pointer";if(A.touch)return"touch"}},bounds(s,t,{scaleBounds:e={},angleBounds:i={}}){const n=o=>{const h=at(Y(e,o),{min:-1/0,max:1/0});return[h.min,h.max]},r=o=>{const h=at(Y(i,o),{min:-1/0,max:1/0});return[h.min,h.max]};return typeof e!="function"&&typeof i!="function"?[n(),r()]:o=>[n(o),r(o)]},threshold(s,t,e){return this.lockDirection=e.axis==="lock",a.toVector(s,this.lockDirection?[.1,3]:0)},modifierKey(s){return s===void 0?"ctrlKey":s},pinchOnWheel(s=!0){return s}});class Nt extends V{constructor(...t){super(...t),u(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(R(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const e=R(t),i=this.state;i._delta=a.sub(e,i._values),a.addTo(i._movement,i._delta),this.computeValues(e),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const $t=c(c({},M),{},{mouseOnly:(s=!0)=>s});class Ft extends V{constructor(...t){super(...t),u(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const e=this.state,i=wt(t);e._delta=a.sub(i,e._values),a.addTo(e._movement,e._delta),this.computeValues(i),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const Zt=M;class Jt extends V{constructor(...t){super(...t),u(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const e=this.state;e._delta=ot(t),a.addTo(e._movement,e._delta),pt(e),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const Qt=M;class qt extends V{constructor(...t){super(...t),u(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(R(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const e=this.state;if(!e._active)return;e._active=!1;const i=R(t);e._movement=e._delta=a.sub(i,e._values),this.computeValues(i),this.compute(t),e.delta=e.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const te=c(c({},M),{},{mouseOnly:(s=!0)=>s}),mt=new Map,q=new Map;function _t(s){mt.set(s.key,s.engine),q.set(s.key,s.resolver)}const ee={key:"drag",engine:Ot,resolver:Wt},se={key:"hover",engine:qt,resolver:te},Ee={key:"move",engine:Nt,resolver:$t},we={key:"pinch",engine:Xt,resolver:Gt},Te={key:"scroll",engine:Ft,resolver:Zt},Ae={key:"wheel",engine:Jt,resolver:Qt};var tt=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function ie(s,t){if(s==null)return{};var e={},i=Object.keys(s),n,r;for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&(e[n]=s[n]);return e}function ne(s,t){if(s==null)return{};var e=ie(s,t),i,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(e[i]=s[i])}return e}const re={target(s){if(s)return()=>"current"in s?s.current:s},enabled(s=!0){return s},window(s=A.isBrowser?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform(s){return s}},oe=["target","eventOptions","window","enabled","transform"];function z(s={},t){const e={};for(const[i,n]of Object.entries(t))switch(typeof n){case"function":e[i]=n.call(e,s[i],i,s);break;case"object":e[i]=z(s[i],n);break;case"boolean":n&&(e[i]=s[i]);break}return e}function ae(s,t,e={}){const i=s,{target:n,eventOptions:r,window:o,enabled:h,transform:p}=i,d=ne(i,oe);if(e.shared=z({target:n,eventOptions:r,window:o,enabled:h,transform:p},re),t){const l=q.get(t);e[t]=z(c({shared:e.shared},d),l)}else for(const l in d){const k=q.get(l);k&&(e[l]=z(c({shared:e.shared},d[l]),k))}return e}class gt{constructor(t,e){u(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=e}add(t,e,i,n,r){const o=this._listeners,h=H(e,i),p=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},d=c(c({},p),r);t.addEventListener(h,n,d);const l=()=>{t.removeEventListener(h,n,d),o.delete(l)};return o.add(l),l}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class ce{constructor(){u(this,"_timeouts",new Map)}add(t,e,i=140,...n){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...n))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class ue{constructor(t){u(this,"gestures",new Set),u(this,"_targetEventStore",new gt(this)),u(this,"gestureEventStores",{}),u(this,"gestureTimeoutStores",{}),u(this,"handlers",{}),u(this,"config",{}),u(this,"pointerIds",new Set),u(this,"touchIds",new Set),u(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),le(this,t)}setEventIds(t){if(P(t))return this.touchIds=new Set(Et(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=ae(t,e,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i={};let n;if(!(e.target&&(n=e.target(),!n))){if(e.enabled){for(const o of this.gestures){const h=this.config[o],p=vt(i,h.eventOptions,!!n);if(h.enabled){const d=mt.get(o);new d(this,t,o).bind(p)}}const r=vt(i,e.eventOptions,!!n);for(const o in this.nativeHandlers)r(o,"",h=>this.nativeHandlers[o](c(c({},this.state.shared),{},{event:h,args:t})),void 0,!0)}for(const r in i)i[r]=St(...i[r]);if(!n)return i;for(const r in i){const{device:o,capture:h,passive:p}=O(r);this._targetEventStore.add(n,o,"",i[r],{capture:h,passive:p})}}}}function j(s,t){s.gestures.add(t),s.gestureEventStores[t]=new gt(s,t),s.gestureTimeoutStores[t]=new ce}function le(s,t){t.drag&&j(s,"drag"),t.wheel&&j(s,"wheel"),t.scroll&&j(s,"scroll"),t.move&&j(s,"move"),t.pinch&&j(s,"pinch"),t.hover&&j(s,"hover")}const vt=(s,t,e)=>(i,n,r,o={},h=!1)=>{var p,d;const l=(p=o.capture)!==null&&p!==void 0?p:t.capture,k=(d=o.passive)!==null&&d!==void 0?d:t.passive;let w=h?i:I(i,n,l);e&&k&&(w+="Passive"),s[w]=s[w]||[],s[w].push(r)},he=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function fe(s){const t={},e={},i=new Set;for(let n in s)he.test(n)?(i.add(RegExp.lastMatch),e[n]=s[n]):t[n]=s[n];return[e,t,i]}function K(s,t,e,i,n,r){if(!s.has(e)||!EngineMap.has(i))return;const o=e+"Start",h=e+"End",p=d=>{let l;return d.first&&o in t&&t[o](d),e in t&&(l=t[e](d)),d.last&&h in t&&t[h](d),l};n[i]=p,r[i]=r[i]||{}}function Se(s,t){const[e,i,n]=fe(s),r={};return K(n,e,"onDrag","drag",r,t),K(n,e,"onWheel","wheel",r,t),K(n,e,"onScroll","scroll",r,t),K(n,e,"onPinch","pinch",r,t),K(n,e,"onMove","move",r,t),K(n,e,"onHover","hover",r,t),{handlers:r,config:t,nativeHandlers:i}}function C(s,t={},e,i){const n=tt.useMemo(()=>new ue(s),[]);if(n.applyHandlers(s,i),n.applyConfig(t,e),tt.useEffect(n.effect.bind(n)),tt.useEffect(()=>n.clean.bind(n),[]),t.target===void 0)return n.bind.bind(n)}function de(s,t){return _t(ee),C({drag:s},t||{},"drag")}function Ie(s,t){return registerAction(pinchAction),C({pinch:s},t||{},"pinch")}function ke(s,t){return registerAction(wheelAction),C({wheel:s},t||{},"wheel")}function xe(s,t){return registerAction(scrollAction),C({scroll:s},t||{},"scroll")}function De(s,t){return registerAction(moveAction),C({move:s},t||{},"move")}function pe(s,t){return _t(se),C({hover:s},t||{},"hover")}function me(s){return s.forEach(registerAction),function(e,i){const{handlers:n,nativeHandlers:r,config:o}=parseMergedHandlers(e,i||{});return C(n,o,void 0,r)}}function Oe(s,t){return me([dragAction,pinchAction,scrollAction,wheelAction,moveAction,hoverAction])(s,t||{})}},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/plus.js":(W,T,f)=>{"use strict";f.d(T,{Z:()=>D});var m=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=f("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const D=(0,m.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,m.createElement)(a.y$,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/reset.js":(W,T,f)=>{"use strict";f.d(T,{Z:()=>D});var m=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=f("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const D=(0,m.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,m.createElement)(a.y$,{d:"M7 11.5h10V13H7z"}))},"../../../node_modules/.pnpm/highlight-words-core@1.2.2/node_modules/highlight-words-core/dist/index.js":W=>{W.exports=function(T){var f={};function m(a){if(f[a])return f[a].exports;var g=f[a]={exports:{},id:a,loaded:!1};return T[a].call(g.exports,g,g.exports,m),g.loaded=!0,g.exports}return m.m=T,m.c=f,m.p="",m(0)}([function(T,f,m){T.exports=m(1)},function(T,f,m){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var a=m(2);Object.defineProperty(f,"combineChunks",{enumerable:!0,get:function(){return a.combineChunks}}),Object.defineProperty(f,"fillInChunks",{enumerable:!0,get:function(){return a.fillInChunks}}),Object.defineProperty(f,"findAll",{enumerable:!0,get:function(){return a.findAll}}),Object.defineProperty(f,"findChunks",{enumerable:!0,get:function(){return a.findChunks}})},function(T,f){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var m=f.findAll=function(u){var y=u.autoEscape,c=u.caseSensitive,v=c===void 0?!1:c,_=u.findChunks,S=_===void 0?g:_,E=u.sanitize,I=u.searchWords,b=u.textToHighlight;return D({chunksToHighlight:a({chunks:S({autoEscape:y,caseSensitive:v,sanitize:E,searchWords:I,textToHighlight:b})}),totalLength:b?b.length:0})},a=f.combineChunks=function(u){var y=u.chunks;return y=y.sort(function(c,v){return c.start-v.start}).reduce(function(c,v){if(c.length===0)return[v];var _=c.pop();if(v.start<=_.end){var S=Math.max(_.end,v.end);c.push({highlight:!1,start:_.start,end:S})}else c.push(_,v);return c},[]),y},g=function(u){var y=u.autoEscape,c=u.caseSensitive,v=u.sanitize,_=v===void 0?F:v,S=u.searchWords,E=u.textToHighlight;return E=_(E),S.filter(function(I){return I}).reduce(function(I,b){b=_(b),y&&(b=Z(b));for(var O=new RegExp(b,c?"g":"gi"),H=void 0;H=O.exec(E);){var P=H.index,B=O.lastIndex;B>P&&I.push({highlight:!1,start:P,end:B}),H.index===O.lastIndex&&O.lastIndex++}return I},[])};f.findChunks=g;var D=f.fillInChunks=function(u){var y=u.chunksToHighlight,c=u.totalLength,v=[],_=function(I,b,O){b-I>0&&v.push({start:I,end:b,highlight:O})};if(y.length===0)_(0,c,!1);else{var S=0;y.forEach(function(E){_(S,E.start,!1),_(E.start,E.end,!0),S=E.end}),_(S,c,!1)}return v};function F(x){return x}function Z(x){return x.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])}}]);})();
