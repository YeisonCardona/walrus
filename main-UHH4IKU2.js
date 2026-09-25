import{$n as nj,$r as zm,$t as ae$2,A as Fh,At as UD,B as Gt$1,Bn as kn$2,Br as wI,C as E0,Cn as gr$1,D as Ew,Dr as tD,Dt as Te$2,E as En$3,En as i0,Er as t0,Et as Ro$1,F as Ge$3,Fn as jn$3,Fr as un$1,Ft as V$2,G as Hy,Gn as lj,H as HI,Hn as kw,Hr as wg,Ht as Xg,I as Gl,In as jr,Ir as uy,It as V3,J as It$3,Jn as mI,Jr as y0,Jt as Zm,Kn as ly,Kr as xr,Kt as Ys,L as Gm,Ln as jt$2,Lr as v0,Lt as Vf,Mn as it$2,Mt as Um,N as Fs,Nn as jI,Nt as Ur,O as FI,On as ig,P as Fw,Pn as jm,Pr as uj,Pt as Uy,Q as Jm,Qr as zI,Qt as ab,R as Go$1,Rr as vE,Rt as Vl,Sn as gn$2,Sr as sj,St as R$1,T as Ee$2,Tr as sp,Tt as Rm,U as Hl,Ur as ww,Ut as Xm,V as H3,Vn as kt$1,Vr as we$2,Vt as Xf,W as Hm,Wn as lh,Wr as xg,Wt as Y$3,X as JC,Xn as mw,Xr as yr$1,Yn as mb,Yr as yC,Yt as _v,Zn as n0,Zr as zD,Zt as aa$1,_ as Ce$3,_n as er$1,_r as rt$2,_t as Qe$2,an as c0,ar as oo$1,at as M,b as D0,bn as fw,br as se$1,bt as Qm,cr as p0,ct as Nt$3,d as Be$2,dn as db,dr as ql,dt as Ol,er as nl,et as Jy,f as Bf,fn as eD,fr as r0,ft as Oo$1,g as CI,gn as el,h as C0,hr as ro$1,i as AI,it as Lt$2,j as Fm,jn as is$1,jr as tw,k as Fg,kn as io$1,kr as tj,kt as U$2,l as Ay,ln as d0,lr as pg,lt as Nw,m as Bm,mn as eg,n as $I,nn as b0,nr as o0,o as An$3,on as cb,or as op,p as Bl,pn as ef,pr as rc,pt as Ow,q as Is,qn as m0,qt as Yv,r as $y,rn as bI,rr as oI,rt as Lg,s as Av,sr as os$1,ti as zy,tn as au,tr as nr$1,u as BI,ur as q$3,ut as Ob,v as Ct$3,vr as s0,vt as Qi$1,w as EI,wr as sn$1,wt as Rl,xn as g0,xr as sg,yn as f0,yr as sc,z as Gr,zn as km,zr as vI,zt as Wm}from"./chunk-DOWwT1r-.js";import{a as _r,n as Kn$3,r as Nr$1,t as Jt$1}from"./chunk-SZezDXF1.js";var b={NAME:`Walrus`,VERSION:`1.0`,MAYOR_VERSION:`1.5.0`,URL:`https://walrus.dunderlab.com/`,EMAIL:`walrus@dunderlab.com`,YEAR:`2026`,INPUT_COMMANDS:[`RESP`,`EVT`],LOGO_RENDER:!0,LOGO_RENDER_TEXT:!1,LOGO_FONT:`Newsreader`,LOGO_FONT_RATIO:.6,LOGO_SIZE:`100px`,LOGO_FONT_GAP:`0`};function E$1(t,o){if(t&1&&Wm(0,`span`,4),t&2){let e=FI();ig(`font-size`,e.fontSize())(`margin-left`,e.DunderLabApp.LOGO_FONT_GAP)(`font-family`,e.DunderLabApp.LOGO_FONT),Zm(`innerHTML`,e.DunderLabApp.NAME,_v)}}var v=class t{constructor(o){this.themeService=o}themeService;width;max_width;DunderLabApp=b;logoWidth=Ow(()=>this.width??this.DunderLabApp.LOGO_SIZE);logoMaxWidth=Ow(()=>this.max_width??this.logoWidth());fontSize=Ow(()=>{let o=this.logoWidth().trim().match(/^(-?\d*\.?\d+)(%|px|vw|vh|rem|em)$/);if(!o)throw new Error(`Invalid CSS value: "${this.logoWidth()}"`);let e=Number(o[1]),n=o[2];return`${e*this.DunderLabApp.LOGO_FONT_RATIO}${n}`});static ɵfac=function(e){return new(e||t)(kt$1(uy))};static ɵcmp=JC({type:t,selectors:[[`app-logo`]],inputs:{width:`width`,max_width:`max_width`},decls:4,vars:6,consts:[[`href`,`/`,1,`undecorated-link`],[1,`logo-container`,`flex-row`,`items-center`,`content-center`,`no-gap`],[`alt`,`Cteno Logo`,1,`logo-icon-img`,3,`src`],[3,`font-size`,`margin-left`,`font-family`,`innerHTML`],[3,`innerHTML`]],template:function(e,n){e&1&&(Vl(0,`a`,0)(1,`div`,1),Wm(2,`img`,2),vI(3,E$1,1,7,`span`,3),Hl()()),e&2&&(vE(2),ig(`width`,n.logoWidth())(`max-width`,n.logoMaxWidth()),Zm(`src`,`/assets/images/branding/app_logo_${n.themeService.mode()}.svg`,Fh),vE(),EI(n.DunderLabApp.LOGO_RENDER_TEXT?3:-1))},dependencies:[Ob],styles:[`.logo-container[_ngcontent-%COMP%]{padding:16px}.logo-icon[_ngcontent-%COMP%]{background-size:contain;background-repeat:no-repeat;background-position:center;width:var(--%NS%sidenav-width-fixed);aspect-ratio:1}span[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);line-height:1rem;margin-left:0rem}`]})};var s$1=class i{cartKey=`walrus-cart`;addToCart(t,r=1){let e=this.getCart(),n=e.findIndex(a=>a.item===t);n>-1?e[n].quantity+=r:e.push({item:t,quantity:r}),localStorage.setItem(this.cartKey,JSON.stringify(e))}setQuantity(t,r){let e=this.getCart(),n=e.findIndex(a=>a.item===t);n>-1&&(r<=0?e.splice(n,1):e[n].quantity=r,localStorage.setItem(this.cartKey,JSON.stringify(e)))}removeFromCart(t){this.setQuantity(t,0)}getCart(){let t=localStorage.getItem(this.cartKey);return t?JSON.parse(t):[]}isInCart(t){return this.getCart().some(e=>e.item===t)}getTotalItems(){return this.getCart().reduce((r,e)=>r+e.quantity,0)}dropCart(){localStorage.removeItem(this.cartKey)}static ɵfac=function(r){return new(r||i)};static ɵprov=Y$3({token:i,factory:i.ɵfac,providedIn:`root`})};function $(e){return e.buttons===0||e.detail===0}function Y$2(e){let o=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var It$2;function ye$2(){if(It$2==null){let e=typeof document<`u`?document.head:null;It$2=!!(e&&(e.createShadowRoot||e.attachShadow))}return It$2}function Tt$2(e){if(ye$2()){let o=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function sn(){let e=typeof document<`u`&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let o=e.shadowRoot.activeElement;if(o===e)break;e=o}return e}function y(e){if(e.composedPath)try{return e.composedPath()[0]}catch(o){}return e.target}var Mt$2;try{Mt$2=typeof Intl<`u`&&Intl.v8BreakIterator}catch(e){Mt$2=!1}var p$2=(()=>{class e{_platformId=M(au);isBrowser=this._platformId?Xg(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Mt$2)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var Q$1;function Ne$1(){if(Q$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Q$1=!0}))}finally{Q$1=Q$1||!1}return Q$1}function z$1(e){return Ne$1()?e:!!e.capture}function Dt$2(e,o=0){return Se$1(e)?Number(e):arguments.length===2?o:0}function Se$1(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function w(e){return e instanceof nr$1?e.nativeElement:e}var xe$1=new V$2(`cdk-input-modality-detector-options`);var Ee$1={ignoreKeys:[18,17,224,91,16]};var we$1=650;var kt={passive:!0,capture:!0};var Ae$1=(()=>{class e{_platform=M(p$2);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new sn$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=y(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<we$1||(this._modality.next($(t)?`keyboard`:`mouse`),this._mostRecentTarget=y(t))};_onTouchstart=t=>{if(Y$2(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=y(t)};constructor(){let t=M(Te$2),n=M(Ge$3),a=M(xe$1,{optional:!0});if(this._options=q$3(q$3({},Ee$1),a),this.modalityDetected=this._modality.pipe(y0(1)),this.modalityChanged=this.modalityDetected.pipe(c0()),this._platform.isBrowser){let i=M(Ro$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(n,`keydown`,this._onKeydown,kt),i.listen(n,`mousedown`,this._onMousedown,kt),i.listen(n,`touchstart`,this._onTouchstart,kt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var X$3=(function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e})(X$3||{});var Ie$1=new V$2(`cdk-focus-monitor-default-options`);var ut$1=z$1({passive:!0,capture:!0});var Ct$2=(()=>{class e{_ngZone=M(Te$2);_platform=M(p$2);_inputModalityDetector=M(Ae$1);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=M(Ge$3);_stopInputModalityDetector=new we$2;constructor(){let t=M(Ie$1,{optional:!0});this._detectionMode=t?.detectionMode||X$3.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=y(t);for(let a=n;a;a=a.parentElement)t.type===`focus`?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,n=!1){let a=w(t);if(!this._platform.isBrowser||a.nodeType!==1)return Hy();let i=Tt$2(a)||this._document,s=this._elementInfo.get(a);if(s)return n&&(s.checkChildren=!0),s.subject;let c={checkChildren:n,subject:new we$2,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let n=w(t),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(t,n,a){let i=w(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,f])=>this._originChanged(c,n,f)):(this._setOrigin(n),typeof i.focus==`function`&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===X$3.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===X$3.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?we$1:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,n){let a=this._elementInfo.get(n),i=y(t);!a||!a.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),a)}_onBlur(t,n){let a=this._elementInfo.get(n);!a||a.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ut$1),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ut$1)}),this._rootNodeFocusListenerCount.set(n,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(E0(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ut$1),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ut$1),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,a){this._setClasses(t,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&n.push([i,a])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if(a!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var bt$1=new WeakMap;var R=(()=>{class e{_appRef;_injector=M(Be$2);_environmentInjector=M(Qe$2);load(t){let n=this._appRef=this._appRef||this._injector.get(Go$1),a=bt$1.get(n);a||(a={loaders:new Set,refs:[]},bt$1.set(n,a),n.onDestroy(()=>{bt$1.get(n)?.refs.forEach(i=>i.destroy()),bt$1.delete(n)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(uj(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var Ot$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=JC({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var pt$1;function cn(){if(pt$1===void 0&&(pt$1=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{pt$1=e.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return pt$1}function dn(e){return cn()?.createHTML(e)||e}function Te$1(e,o,t){e.innerHTML=dn(t.sanitize(Ce$3.HTML,o)||``)}function ft$1(e){return Array.isArray(e)?e:[e]}var Me$1=new Set;var F$1;var ht$2=(()=>{class e{_platform=M(p$2);_nonce=M(tD,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ln}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&mn$1(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();function mn$1(e,o){if(!Me$1.has(e))try{F$1||(F$1=document.createElement(`style`),o&&F$1.setAttribute(`nonce`,o),F$1.setAttribute(`type`,`text/css`),document.head.appendChild(F$1)),F$1.sheet&&(F$1.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),Me$1.add(e))}catch(t){console.error(t)}}function ln(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var Rt$1=(()=>{class e{_mediaMatcher=M(ht$2);_zone=M(Te$2);_queries=new Map;_destroySubject=new we$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return De(ft$1(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let i=Jy(De(ft$1(t)).map(s=>this._registerQuery(s).observable));return i=gr$1(i.pipe(yr$1(1)),i.pipe(y0(1),s0(0))),i.pipe(It$3(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:f,query:A})=>{c.matches=c.matches||f,c.breakpoints[A]=f}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),i={observable:new U$2(s=>{let c=f=>this._zone.run(()=>s.next(f));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(D0(n),It$3(({matches:s})=>({query:t,matches:s})),E0(this._destroySubject)),mql:n};return this._queries.set(t,i),i}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();function De(e){return e.map(o=>o.split(`,`)).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}function un(e){if(e.type===`characterData`&&e.target instanceof Comment)return!0;if(e.type===`childList`){for(let o=0;o<e.addedNodes.length;o++)if(!(e.addedNodes[o]instanceof Comment))return!1;for(let o=0;o<e.removedNodes.length;o++)if(!(e.removedNodes[o]instanceof Comment))return!1;return!0}return!1}var ke$1=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var Ce$2=(()=>{class e{_mutationObserverFactory=M(ke$1);_observedElements=new Map;_ngZone=M(Te$2);ngOnDestroy(){this._observedElements.forEach((t,n)=>this._cleanupObserver(n))}observe(t){let n=w(t);return new U$2(a=>{let s=this._observeElement(n).pipe(It$3(c=>c.filter(f=>!un(f))),io$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{a.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(n)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let n=new we$2,a=this._mutationObserverFactory.create(i=>n.next(i));a&&a.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:a,stream:n,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:n,stream:a}=this._observedElements.get(t);n&&n.disconnect(),a.complete(),this._observedElements.delete(t)}}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var $o$1=(()=>{class e{_contentObserver=M(Ce$2);_elementRef=M(nr$1);event=new jt$2;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Dt$2(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(s0(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||e)};static ɵdir=Ol({type:e,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,ab],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return e})();var Oe$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Rl({type:e});static ɵinj=Qi$1({providers:[ke$1]})}return e})();var bn$1=(()=>{class e{_platform=M(p$2);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return fn(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=pn$1(xn$1(t));if(n&&(Re$1(n)===-1||!this.isVisible(n)))return!1;let a=t.nodeName.toLowerCase(),i=Re$1(t);return t.hasAttribute(`contenteditable`)?i!==-1:a===`iframe`||a===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Nn$1(t)?!1:a===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:a===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return Sn$1(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();function pn$1(e){try{return e.frameElement}catch(o){return null}}function fn(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function hn(e){let o=e.nodeName.toLowerCase();return o===`input`||o===`select`||o===`button`||o===`textarea`}function vn$1(e){return _n$1(e)&&e.type==`hidden`}function gn$1(e){return yn$1(e)&&e.hasAttribute(`href`)}function _n$1(e){return e.nodeName.toLowerCase()==`input`}function yn$1(e){return e.nodeName.toLowerCase()==`a`}function Pe$1(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let o=e.getAttribute(`tabindex`);return!!(o&&!isNaN(parseInt(o,10)))}function Re$1(e){if(!Pe$1(e))return null;let o=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(o)?-1:o}function Nn$1(e){let o=e.nodeName.toLowerCase(),t=o===`input`&&e.type;return t===`text`||t===`password`||o===`select`||o===`textarea`}function Sn$1(e){return vn$1(e)?!1:hn(e)||gn$1(e)||e.hasAttribute(`contenteditable`)||Pe$1(e)}function xn$1(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Be$1=new V$2(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Ue$1=new V$2(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var En$2=0;var wn$1=(()=>{class e{_ngZone=M(Te$2);_defaultOptions=M(Ue$1,{optional:!0});_liveElement;_document=M(Ge$3);_sanitizer=M(Nr$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=M(Be$1,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...n){let a=this._defaultOptions,i,s;return n.length===1&&typeof n[0]==`number`?s=n[0]:[i,s]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=a&&a.politeness?a.politeness:`polite`),s==null&&a&&(s=a.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:Te$1(this._liveElement,t,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(t),a=this._document.createElement(`div`);for(let i=0;i<n.length;i++)n[i].remove();return a.classList.add(t),a.classList.add(`cdk-visually-hidden`),a.setAttribute(`aria-atomic`,`true`),a.setAttribute(`aria-live`,`polite`),a.id=`cdk-live-announcer-${En$2++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<n.length;a++){let i=n[a],s=i.getAttribute(`aria-owns`);s?s.indexOf(t)===-1&&i.setAttribute(`aria-owns`,s+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var k$2=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(k$2||{});var Fe$1=`cdk-high-contrast-black-on-white`;var Le$1=`cdk-high-contrast-white-on-black`;var Ft$1=`cdk-high-contrast-active`;var ze$1=(()=>{class e{_platform=M(p$2);_hasCheckedHighContrastMode=!1;_document=M(Ge$3);_breakpointSubscription;constructor(){this._breakpointSubscription=M(Rt$1).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return k$2.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(t):null,i=(a&&a.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return k$2.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return k$2.BLACK_ON_WHITE}return k$2.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ft$1,Fe$1,Le$1),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===k$2.BLACK_ON_WHITE?t.add(Ft$1,Fe$1):n===k$2.WHITE_ON_BLACK&&t.add(Ft$1,Le$1)}}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var An$2=(()=>{class e{constructor(){M(ze$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||e)};static ɵmod=Rl({type:e});static ɵinj=Qi$1({imports:[Oe$1]})}return e})();var In$1=200;var vt$2=class{_letterKeyStream=new we$2;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new we$2;selectedItem=this._selectedItem;constructor(o,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:In$1;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(C0(t=>this._pressedLetters.push(t)),s0(o),io$1(()=>this._pressedLetters.length>0),It$3(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let a=(this._selectedItemIndex+n)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function je$1(e,...o){return o.length?o.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var j=class{_items;_activeItemIndex=xr(-1);_activeItem=xr(null);_wrap=!1;_typeaheadSubscription=Ee$2.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof Fs?this._itemChangesSubscription=o.changes.subscribe(n=>this._itemsChanged(n.toArray())):Is(o)&&(this._effectRef=sp(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new we$2;change=new we$2;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new vt$2(t,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!o[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(a||je$1(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),n=typeof o==`number`?o:t.indexOf(o),a=t[n];this._activeItem.set(a??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let a=(this._activeItemIndex()+o*n+t.length)%t.length,i=t[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let n=this._getItemsArray();if(n[o]){for(;this._skipPredicateFn(n[o]);)if(o+=t,!n[o])return;this.setActiveItem(o)}}_getItemsArray(){return Is(this._items)?this._items():this._items instanceof Fs?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let n=o.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Lt$1=class extends j{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var Pt$1=class extends j{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var He$1=new Map;var Bt$1=class e{_appId=M(op);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){this._appId!==`ng`&&(o+=this._appId);let n=He$1.get(o);return n===void 0?n=0:n++,He$1.set(o,n),`${o}${t?e._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})};var Ve$1=` `;function Tn$2(e,o,t){let n=_t$2(e,o);t=t.trim(),!n.some(a=>a.trim()===t)&&(n.push(t),e.setAttribute(o,n.join(Ve$1)))}function Mn$2(e,o,t){let n=_t$2(e,o);t=t.trim();let a=n.filter(i=>i!==t);a.length?e.setAttribute(o,a.join(Ve$1)):e.removeAttribute(o)}function _t$2(e,o){return e.getAttribute(o)?.match(/\S+/g)??[]}var We$1=`cdk-describedby-message`;var gt$2=`cdk-describedby-host`;var zt$1=0;var Qa=(()=>{class e{_platform=M(p$2);_document=M(Ge$3);_messageRegistry=new Map;_messagesContainer=null;_id=`${zt$1++}`;constructor(){M(R).load(Ot$1),this._id=M(op)+`-`+zt$1++}describe(t,n,a){if(!this._canBeDescribed(t,n))return;let i=Ut$2(n,a);typeof n!=`string`?(Ke$1(n,this._id),this._messageRegistry.set(i,{messageElement:n,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(n,a),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,n,a){if(!n||!this._isElementNode(t))return;let i=Ut$2(n,a);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof n==`string`){let s=this._messageRegistry.get(i);s&&s.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${gt$2}="${this._id}"]`);for(let n=0;n<t.length;n++)this._removeCdkDescribedByReferenceIds(t[n]),t[n].removeAttribute(gt$2);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,n){let a=this._document.createElement(`div`);Ke$1(a,this._id),a.textContent=t,n&&a.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Ut$2(t,n),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<n.length;i++)n[i].remove();let a=this._document.createElement(`div`);a.style.visibility=`hidden`,a.classList.add(t),a.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||a.setAttribute(`platform`,`server`),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let n=_t$2(t,`aria-describedby`).filter(a=>a.indexOf(We$1)!=0);t.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(t,n){let a=this._messageRegistry.get(n);Tn$2(t,`aria-describedby`,a.messageElement.id),t.setAttribute(gt$2,this._id),a.referenceCount++}_removeMessageReference(t,n){let a=this._messageRegistry.get(n);a.referenceCount--,Mn$2(t,`aria-describedby`,a.messageElement.id),t.removeAttribute(gt$2)}_isElementDescribedByMessage(t,n){let a=_t$2(t,`aria-describedby`),i=this._messageRegistry.get(n),s=i&&i.messageElement.id;return!!s&&a.indexOf(s)!=-1}_canBeDescribed(t,n){if(!this._isElementNode(t))return!1;if(n&&typeof n==`object`)return!0;let a=n==null?``:`${n}`.trim(),i=t.getAttribute(`aria-label`);return a?!i||i.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();function Ut$2(e,o){return typeof e==`string`?`${o||``}/${e}`:e}function Ke$1(e,o){e.id||(e.id=`${We$1}-${o}-${zt$1++}`)}var L$1;function ai$2(){if(L$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return L$1=!1,L$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)L$1=!0;else{let e=Element.prototype.scrollTo;e?L$1=!/\{\s*\[native code\]\s*\}/.test(e.toString()):L$1=!1}}return L$1}function ri$2(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var H$2;var Ze$1=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function ci$2(){if(H$2)return H$2;if(typeof document!=`object`||!document)return H$2=new Set(Ze$1),H$2;let e=document.createElement(`input`);return H$2=new Set(Ze$1.filter(o=>(e.setAttribute(`type`,o),e.type===o))),H$2}var bi$2={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Dn$2=new V$2(`MATERIAL_ANIMATIONS`);var Ge$2=null;function kn$1(){return M(Dn$2,{optional:!0})?.animationsDisabled||M(eD,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ge$2??=M(ht$2).matchMedia(`(prefers-reduced-motion)`).matches,Ge$2?`reduced-motion`:`enabled`)}function K$3(){return kn$1()!==`enabled`}function _i$2(e){return e==null?``:typeof e==`string`?e:`${e}px`}function Ni$2(e){return e!=null&&`${e}`!=`false`}var _=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(_||{});var jt$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_.HIDDEN;constructor(o,t,n,a=!1){this._renderer=o,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}};var $e$1=z$1({passive:!0,capture:!0});var Ht$1=class{_events=new Map;addHandler(o,t,n,a){let i=this._events.get(t);if(i){let s=i.get(n);s?s.add(a):i.set(n,new Set([a]))}else this._events.set(t,new Map([[n,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,$e$1)})}removeHandler(o,t,n){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(n),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,$e$1)))}_delegateEventHandler=o=>{let t=y(o);t&&this._events.get(o.type)?.forEach((n,a)=>{(a===t||a.contains(t))&&n.forEach(i=>i.handleEvent(o))})}};var q$2={enterDuration:225,exitDuration:150};var Cn$1=800;var Ye$1=z$1({passive:!0,capture:!0});var Qe$1=[`mousedown`,`touchstart`];var Xe=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var On$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=JC({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var J$1=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ht$1;constructor(o,t,n,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=w(n)),i&&i.get(R).load(On$1)}fadeInRipple(o,t,n={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=q$3(q$3({},q$2),n.animation);n.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let s=n.radius||Rn$2(o,t,a),c=o-a.left,f=t-a.top,A=i.enterDuration,h=document.createElement(`div`);h.classList.add(`mat-ripple-element`),h.style.left=`${c-s}px`,h.style.top=`${f-s}px`,h.style.height=`${s*2}px`,h.style.width=`${s*2}px`,n.color!=null&&(h.style.backgroundColor=n.color),h.style.transitionDuration=`${A}ms`,this._containerElement.appendChild(h);let Gt=window.getComputedStyle(h),rn=Gt.transitionProperty,$t=Gt.transitionDuration,St=rn===`none`||$t===`0s`||$t===`0s, 0s`||a.width===0&&a.height===0,C=new jt$1(this,h,n,St);h.style.transform=`scale3d(1, 1, 1)`,C.state=_.FADING_IN,n.persistent||(this._mostRecentTransientRipple=C);let tt=null;return!St&&(A||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Yt=()=>{tt&&(tt.fallbackTimer=null),clearTimeout(Qt),this._finishRippleTransition(C)},xt=()=>this._destroyRipple(C),Qt=setTimeout(xt,A+100);h.addEventListener(`transitionend`,Yt),h.addEventListener(`transitioncancel`,xt),tt={onTransitionEnd:Yt,onTransitionCancel:xt,fallbackTimer:Qt}}),this._activeRipples.set(C,tt),(St||!A)&&this._finishRippleTransition(C),C}fadeOutRipple(o){if(o.state===_.FADING_OUT||o.state===_.HIDDEN)return;let t=o.element,n=q$3(q$3({},q$2),o.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,o.state=_.FADING_OUT,(o._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=w(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Qe$1.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xe.forEach(t=>{this._triggerElement.addEventListener(t,this,Ye$1)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===_.FADING_IN?this._startFadeOutTransition(o):o.state===_.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:n}=o.config;o.state=_.VISIBLE,!n&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=_.HIDDEN,t!==null&&(o.element.removeEventListener(`transitionend`,t.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=$(o),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Cn$1;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!Y$2(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===_.VISIBLE||o.config.terminateOnPointerUp&&o.state===_.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Qe$1.forEach(t=>e._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(Xe.forEach(t=>o.removeEventListener(t,this,Ye$1)),this._pointerUpEventsRegistered=!1))}};function Rn$2(e,o,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(n*n+a*a)}var Kt$1=new V$2(`mat-ripple-global-options`);var Fi$2=(()=>{class e{_elementRef=M(nr$1);_animationsDisabled=K$3();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=M(Te$2),n=M(p$2),a=M(Kt$1,{optional:!0}),i=M(Be$2);this._globalOptions=a||{},this._rippleRenderer=new J$1(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:q$3(q$3(q$3({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,a){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,q$3(q$3({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,q$3(q$3({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=Ol({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,a){n&2&&sg(`mat-ripple-unbounded`,a.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var Fn$2={capture:!0};var Ln$2=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Vt$1=`mat-ripple-loader-uninitialized`;var Wt$1=`mat-ripple-loader-class-name`;var qe$1=`mat-ripple-loader-centered`;var yt$3=`mat-ripple-loader-disabled`;var Je$1=(()=>{class e{_document=M(Ge$3);_animationsDisabled=K$3();_globalRippleOptions=M(Kt$1,{optional:!0});_platform=M(p$2);_ngZone=M(Te$2);_injector=M(Be$2);_eventCleanups;_hosts=new Map;constructor(){let t=M(Ro$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ln$2.map(n=>t.listen(this._document,n,this._onInteraction,Fn$2)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Vt$1,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Wt$1))&&t.setAttribute(Wt$1,n.className||``),n.centered&&t.setAttribute(qe$1,``),n.disabled&&t.setAttribute(yt$3,``)}setDisabled(t,n){let a=this._hosts.get(t);a?(a.target.rippleDisabled=n,!n&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):n?t.setAttribute(yt$3,``):t.removeAttribute(yt$3)}_onInteraction=t=>{let n=y(t);if(n instanceof HTMLElement){let a=n.closest(`[${Vt$1}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Wt$1)),t.append(n);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??q$2.enterDuration,s=this._animationsDisabled?0:a?.animation?.exitDuration??q$2.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(yt$3),rippleConfig:{centered:t.hasAttribute(qe$1),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},f=new J$1(c,this._ngZone,n,this._platform,this._injector),A=!c.rippleDisabled;A&&f.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:f,hasSetUpEvents:A}),t.removeAttribute(Vt$1)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var tn=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=JC({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var Pn$2=[`*`,[[``,`progressIndicator`,``]]];var Bn$2=[`*`,`[progressIndicator]`];function Un$1(e,o){e&1&&(Vl(0,`div`,1),BI(1,1),Hl())}var zn$2=new V$2(`MAT_BUTTON_CONFIG`);function en(e){return e==null?void 0:cb(e)}var Zt$1=(()=>{class e{_elementRef=M(nr$1);_ngZone=M(Te$2);_animationsDisabled=K$3();_config=M(zn$2,{optional:!0});_focusMonitor=M(Ct$2);_cleanupClick;_renderer=M(Oo$1);_rippleLoader=M(Je$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=nj(!1,{transform:ab});constructor(){M(R).load(tn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=Ol({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,a){n&2&&(Um(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),tw(a.color?`mat-`+a.color:``),sg(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,ab],disabled:[2,`disabled`,`disabled`,ab],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,ab],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ab],tabIndex:[2,`tabIndex`,`tabIndex`,en],_tabindex:[2,`tabindex`,`_tabindex`,en],showProgress:[1,`showProgress`]}})}return e})();var jn$2=(()=>{class e extends Zt$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=JC({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Fm],ngContentSelectors:Bn$2,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,a){n&1&&(jI(Pn$2),Wm(0,`span`,0),BI(1),vI(2,Un$1,2,0,`div`,1),Wm(3,`span`,2)(4,`span`,3)),n&2&&(vE(2),EI(a.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();var Hn$2=new V$2(`cdk-dir-doc`,{providedIn:`root`,factory:()=>M(Ge$3)});var Kn$2=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nn(e){let o=e?.toLowerCase()||``;return o===`auto`&&typeof navigator<`u`&&navigator?.language?Kn$2.test(navigator.language)?`rtl`:`ltr`:o===`rtl`?`rtl`:`ltr`}var Vn$2=(()=>{class e{get value(){return this.valueSignal()}valueSignal=xr(`ltr`);change=new jt$2;constructor(){let t=M(Hn$2,{optional:!0});if(t){let n=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(nn(n||a||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||e)};static ɵprov=En$3({token:e,factory:e.ɵfac})}return e})();var Nt$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Rl({type:e});static ɵinj=Qi$1({})}return e})();var on=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Rl({type:e});static ɵinj=Qi$1({imports:[Nt$2]})}return e})();var Wn$2=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Zn$2=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Gn$2(e,o){e&1&&(Vl(0,`div`,2),BI(1,3),Hl())}var an=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var br$1=(()=>{class e extends Zt$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=$n$2(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,a=this._appearance?an.get(this._appearance):null,i=an.get(t);a&&n.remove(...a),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=JC({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Fm],ngContentSelectors:Zn$2,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,a){n&1&&(jI(Wn$2),Wm(0,`span`,0),BI(1),Vl(2,`span`,1),BI(3,1),Hl(),BI(4,2),vI(5,Gn$2,2,0,`div`,2),Wm(6,`span`,3)(7,`span`,4)),n&2&&(sg(`mdc-button__ripple`,!a._isFab)(`mdc-fab__ripple`,a._isFab),vE(5),EI(a.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();function $n$2(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var pr$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Rl({type:e});static ɵinj=Qi$1({imports:[on,Nt$2]})}return e})();var d=class t{breakpointObserver=M(Rt$1);isXSmall=xr(!1);isSmall=xr(!1);isMedium=xr(!1);isLarge=xr(!1);isXLarge=xr(!1);isHandset=xr(!1);isTablet=xr(!1);isWeb=xr(!1);isPortrait=xr(!1);isLandscape=xr(!1);constructor(){this.breakpointObserver.observe([bi$2.XSmall,bi$2.Small,bi$2.Medium,bi$2.Large,bi$2.XLarge,bi$2.Handset,bi$2.Tablet,bi$2.Web,`(orientation: portrait)`,`(orientation: landscape)`]).subscribe(e=>{this.isXSmall.set(e.breakpoints[bi$2.XSmall]??!1),this.isSmall.set(e.breakpoints[bi$2.Small]??!1),this.isMedium.set(e.breakpoints[bi$2.Medium]??!1),this.isLarge.set(e.breakpoints[bi$2.Large]??!1),this.isXLarge.set(e.breakpoints[bi$2.XLarge]??!1),this.isHandset.set(e.breakpoints[bi$2.Handset]??!1),this.isTablet.set(e.breakpoints[bi$2.Tablet]??!1),this.isWeb.set(e.breakpoints[bi$2.Web]??!1),this.isPortrait.set(e.breakpoints[`(orientation: portrait)`]??!1),this.isLandscape.set(e.breakpoints[`(orientation: landscape)`]??!1)})}isMobile=Ow(()=>this.isHandset()||this.isTablet());isDesktop=Ow(()=>this.isWeb());isMobilePortrait=Ow(()=>this.isMobile()&&this.isPortrait());isDesktopWide=Ow(()=>this.isDesktop()&&(this.isLarge()||this.isXLarge()));isCompactViewport=Ow(()=>this.isSmallDown()&&this.isPortrait());sizeIndex=Ow(()=>this.isXSmall()?0:this.isSmall()?1:this.isMedium()?2:this.isLarge()?3:this.isXLarge()?4:-1);isSmallDown=Ow(()=>{let e=this.sizeIndex();return e>=0&&e<=1});isMediumDown=Ow(()=>{let e=this.sizeIndex();return e>=0&&e<=2});isMediumUp=Ow(()=>this.sizeIndex()>=2);isLargeUp=Ow(()=>this.sizeIndex()>=3);isXSmallDown=Ow(()=>this.sizeIndex()<=0);isSmallUp=Ow(()=>this.sizeIndex()>=1);isLargeDown=Ow(()=>{let e=this.sizeIndex();return e>=0&&e<=3});isXLargeUp=Ow(()=>this.sizeIndex()>=4);static ɵfac=function(l){return new(l||t)};static ɵprov=Y$3({token:t,factory:t.ɵfac,providedIn:`root`})};var s=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var l=class extends s{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,n,o,d,I){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=o,this.bindings=d||null,this.directives=I||null}};var u=class extends s{templateRef;viewContainerRef;context;injector;constructor(t,e,n,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var f=class extends s{element;constructor(t){super(),this.element=t instanceof nr$1?t.nativeElement:t}};var a$1=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof l)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof u)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof f)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var F=class extends a$1{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,o=n.get(er$1,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,o=t.injector||this._defaultInjector||Be$2.NULL,d=o.get(Qe$2,n.injector);e=uj(t.component,{elementInjector:o,environmentInjector:d,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(n);o!==-1&&e.remove(o)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var U$1=(()=>{class r extends a$1{_moduleRef=M(er$1,{optional:!0});_document=M(Ge$3);_viewContainerRef=M(Ur);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new jt$2;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let o=this._document.createComment(`dom-portal`);e.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(o){return(e||(e=lh(r)))(o||r)}})();static ɵdir=Ol({type:r,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Fm]})}return r})();var Z$1=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵmod=Rl({type:r});static ɵinj=Qi$1({})}return r})();var p$1=class{_box;_destroyed=new we$2;_resizeSubject=new we$2;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new U$2(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(io$1(e=>e.some(n=>n.target===t)),g0({bufferSize:1,refCount:!0}),E0(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var K$2=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=M(Te$2);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let o=n?.box||`content-box`;return this._observers.has(o)||this._observers.set(o,new p$1(o)),this._observers.get(o).observe(e)}static ɵfac=function(n){return new(n||r)};static ɵprov=En$3({token:r,factory:r.ɵfac})}return r})();var xt$1={default_ttl:5e3,apiBaseUrl:`https://walrus-backend.dunderlab.com/api/`,excludePersistentContains:`/api/?t=`};var Et$1=class n{http=M(_r);status=xr(`checking`);wakingRequest;endpoint=xt$1.apiBaseUrl;WAKEUP_TIMEOUT_MS=1e3;MAX_RETRIES=20;RETRY_DELAY_MS=3e3;running=Ow(()=>this.status()===`running`);waking=Ow(()=>this.status()===`waking`);offline=Ow(()=>this.status()===`offline`);wakeUpServer(){this.wakingRequest&&!this.wakingRequest.closed||(this.wakingRequest=this.http.get(`${this.endpoint}?t=${Date.now()}`).pipe(zy(this.WAKEUP_TIMEOUT_MS),rc(t=>t instanceof ef?(this.status.set(`waking`),this.http.get(`${this.endpoint}?t=${Date.now()}`).pipe(m0({count:this.MAX_RETRIES,delay:this.RETRY_DELAY_MS}))):$y(()=>t))).subscribe({next:()=>{this.status.set(`running`),this.wakingRequest=void 0},error:()=>{this.status.set(`offline`),this.wakingRequest=void 0}}))}static ɵfac=function(e){return new(e||n)};static ɵprov=Y$3({token:n,factory:n.ɵfac,providedIn:`root`})};var se=20;var et$2=(()=>{class n{_ngZone=M(Te$2);_platform=M(p$2);_renderer=M(Ro$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new we$2;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=se){return this._platform.isBrowser?new U$2(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let s=e>0?this._scrolled.pipe(o0(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Hy()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let s=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(io$1(o=>!o||s.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((s,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let s=w(i),o=e.getElementRef().nativeElement;do if(s==o)return!0;while(s=s.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var oe=20;var P=(()=>{class n{_platform=M(p$2);_listeners;_viewportSize=null;_change=new we$2;_document=M(Ge$3);constructor(){let e=M(Te$2),i=M(Ro$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let s=o=>this._change.next(o);this._listeners=[i.listen(`window`,`resize`,s),i.listen(`window`,`orientationchange`,s)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+i,height:s,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),s=e.documentElement,o=s.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||i.scrollY||s.scrollTop||0,left:-o.left||e.body?.scrollLeft||i.scrollX||s.scrollLeft||0}}change(e=oe){return e>0?this._change.pipe(o0(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var Dt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({})}return n})();var it$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({imports:[Nt$2,Dt$1,Nt$2,Dt$1]})}return n})();var Mt$1=ai$2();function zt(n){return new L(n.get(P),n.get(Ge$3))}var L=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=_i$2(-this._previousScrollPosition.left),t.style.top=_i$2(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,s=e.style,o=i.scrollBehavior||``,r=s.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),Mt$1&&(i.scrollBehavior=s.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Mt$1&&(i.scrollBehavior=o,s.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function It$1(n,t){return new z(n.get(et$2),n.get(Te$2),n.get(P),t)}var z=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(io$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var D$1=class{enable(){}disable(){}attach(){}};function st$1(n,t){return t.some(e=>{let i=n.bottom<e.top,s=n.top>e.bottom,o=n.right<e.left,r=n.left>e.right;return i||s||o||r})}function Bt(n,t){return t.some(e=>{let i=n.top<e.top,s=n.bottom>e.bottom,o=n.left<e.left,r=n.right>e.right;return i||s||o||r})}function Nt$1(n,t){return new I(n.get(et$2),n.get(P),n.get(Te$2),t)}var I=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:s}=this._viewportRuler.getViewportSize();st$1(e,[{width:i,height:s,bottom:s,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Wt=(()=>{class n{_injector=M(Be$2);noop=()=>new D$1;close=e=>It$1(this._injector,e);block=()=>zt(this._injector);reposition=e=>Nt$1(this._injector,e);static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var N=class{positionStrategy;scrollStrategy=new D$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var W=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Yt=(()=>{class n{_attachedOverlays=[];_document=M(Ge$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,s){return s.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var Xt$1=(()=>{class n extends Yt{_ngZone=M(Te$2);_renderer=M(Ro$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let s=i.length-1;s>-1;s--){let o=i[s];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var Ht=(()=>{class n extends Yt{_platform=M(p$2);_ngZone=M(Te$2);_renderer=M(Ro$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,s={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,`pointerdown`,this._pointerDownListener,s),o.listen(i,`click`,this._clickListener,s),o.listen(i,`auxclick`,this._clickListener,s),o.listen(i,`contextmenu`,this._clickListener,s)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=y(e)};_clickListener=e=>{let i=y(e),s=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let a=o[r],h=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,h))){if(Vt(a.overlayElement,i)||Vt(a.overlayElement,s))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();function Vt(n,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var jt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=JC({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,s){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Zt=(()=>{class n{_platform=M(p$2);_containerElement;_document=M(Ge$3);_styleLoader=M(R);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||ri$2()){let s=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}let i=this._document.createElement(`div`);i.classList.add(e),ri$2()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(jt)}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var ot$1=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,s){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,s)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function rt$1(n){return n&&n.nodeType===1}var nt$2=new Set;var Y$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new we$2;_attachments=new we$2;_detachments=new we$2;_positionStrategy;_scrollStrategy;_locationChanges=Ee$2.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new we$2;_outsidePointerEvents=new we$2;_afterNextRenderRef;constructor(t,e,i,s,o,r,a,h,d,l=!1,c,p){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=r,this._document=a,this._location=h,this._outsideClickDispatcher=d,this._animationsDisabled=l,this._injector=c,this._renderer=p,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),nt$2.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Yv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),nt$2.delete(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,nt$2.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=q$3(q$3({},this._config),t),this._updateElementSize()}setDirection(t){this._config=se$1(q$3({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=_i$2(this._config.width),t.height=_i$2(this._config.height),t.minWidth=_i$2(this._config.minWidth),t.minHeight=_i$2(this._config.minHeight),t.maxWidth=_i$2(this._config.maxWidth),t.maxHeight=_i$2(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;rt$1(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(t){}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ot$1(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let s=ft$1(e||[]).filter(o=>!!o);s.length&&(i?t.classList.add(...s):t.classList.remove(...s))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Yv(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var Tt$1=`cdk-overlay-connected-position-bounding-box`;var re$1=/([A-Za-z%]+)$/;function Ut$1(n,t){return new X$2(t,n.get(P),n.get(Ge$3),n.get(p$2),n.get(Zt))}var X$2=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new we$2;_resizeSubscription=Ee$2.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Tt$1),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=this._containerRect,o=[],r;for(let a of this._preferredPositions){let h=this._getOriginPoint(t,s,a),d=this._getOverlayPoint(h,e,a),l=this._getOverlayFit(d,e,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,h);return}if(this._canFitWithFlexibleDimensions(l,d,i)){o.push({position:a,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,a)});continue}(!r||r.overlayFit.visibleArea<l.visibleArea)&&(r={overlayFit:l,overlayPoint:d,originPoint:h,position:a,overlayRect:e})}if(o.length){let a=null,h=-1;for(let d of o){let l=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);l>h&&(h=l,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&k$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Tt$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof nr$1?this._origin.nativeElement:rt$1(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let s;if(i.originX==`center`)s=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;s=i.originX==`start`?r:a}e.left<0&&(s-=e.left);let o;return i.originY==`center`?o=t.top+t.height/2:o=i.originY==`top`?t.top:t.bottom,e.top<0&&(o-=e.top),{x:s,y:o}}_getOverlayPoint(t,e,i){let s;i.overlayX==`center`?s=-e.width/2:i.overlayX===`start`?s=this._isRtl()?-e.width:0:s=this._isRtl()?0:-e.width;let o;return i.overlayY==`center`?o=-e.height/2:o=i.overlayY==`top`?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){let o=Ft(e),{x:r,y:a}=t,h=this._getOffset(s,`x`),d=this._getOffset(s,`y`);h&&(r+=h),d&&(a+=d);let l=0-r,c=r+o.width-i.width,p=0-a,g=a+o.height-i.height,_=this._subtractOverflows(o.width,l,c),v=this._subtractOverflows(o.height,p,g),at=_*v;return{visibleArea:at,isCompletelyWithinViewport:o.width*o.height===at,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let s=i.bottom-e.y,o=i.right-e.x,r=At$1(this._overlayRef.getConfig().minHeight),a=At$1(this._overlayRef.getConfig().minWidth),h=t.fitsInViewportVertically||r!=null&&r<=s,d=t.fitsInViewportHorizontally||a!=null&&a<=o;return h&&d}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let s=Ft(e),o=this._viewportRect,r=Math.max(t.x+s.width-o.width,0),a=Math.max(t.y+s.height-o.height,0),h=Math.max(o.top-i.top-t.y,0),d=Math.max(o.left-i.left-t.x,0),l=0,c=0;return s.width<=o.width?l=d||-r:l=t.x<this._getViewportMarginStart()?o.left-i.left-t.x:0,s.height<=o.height?c=h||-a:c=t.y<this._getViewportMarginTop()?o.top-i.top-t.y:0,this._previousPushAmount={x:l,y:c},{x:t.x+l,y:t.y+c}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!ae$1(this._lastScrollVisibility,i)){let s=new W(t,i);this._positionChanges.next(s)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,s=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,s=this._isRtl(),o,r,a;if(e.overlayY===`top`)r=t.y,o=i.height-r+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let g=Math.min(i.bottom-t.y+i.top,t.y),_=this._lastBoundingBoxSize.height;o=g*2,r=t.y-g,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-_/2)}let h=e.overlayX===`start`&&!s||e.overlayX===`end`&&s,d=e.overlayX===`end`&&!s||e.overlayX===`start`&&s,l,c,p;if(d)p=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=t.x-this._getViewportMarginStart();else if(h)c=t.x,l=i.right-t.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-t.x+i.left,t.x),_=this._lastBoundingBoxSize.width;l=g*2,c=t.x-g,l>_&&!this._isInitialRender&&!this._growAfterOpen&&(c=t.x-_/2)}return{top:r,left:c,bottom:a,right:p,width:l,height:o}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let s={};if(this._hasExactPosition())s.top=s.left=`0`,s.bottom=s.right=`auto`,s.maxHeight=s.maxWidth=``,s.width=s.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;s.width=_i$2(i.width),s.height=_i$2(i.height),s.top=_i$2(i.top)||`auto`,s.bottom=_i$2(i.bottom)||`auto`,s.left=_i$2(i.left)||`auto`,s.right=_i$2(i.right)||`auto`,e.overlayX===`center`?s.alignItems=`center`:s.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?s.justifyContent=`center`:s.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(s.maxHeight=_i$2(o)),r&&(s.maxWidth=_i$2(r))}this._lastBoundingBoxSize=i,k$1(this._boundingBox.style,s)}_resetBoundingBoxStyles(){k$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){k$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(s){let l=this._viewportRuler.getViewportScrollPosition();k$1(i,this._getExactOverlayY(e,t,l)),k$1(i,this._getExactOverlayX(e,t,l))}else i.position=`static`;let a=``,h=this._getOffset(e,`x`),d=this._getOffset(e,`y`);h&&(a+=`translateX(${h}px) `),d&&(a+=`translateY(${d}px)`),i.transform=a.trim(),r.maxHeight&&(s?i.maxHeight=_i$2(r.maxHeight):o&&(i.maxHeight=``)),r.maxWidth&&(s?i.maxWidth=_i$2(r.maxWidth):o&&(i.maxWidth=``)),k$1(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),t.overlayY===`bottom`)s.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else s.top=_i$2(o.y);return s}_getExactOverlayX(t,e,i){let s={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let r;if(this._isRtl()?r=t.overlayX===`end`?`left`:`right`:r=t.overlayX===`end`?`right`:`left`,r===`right`)s.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else s.left=_i$2(o.x);return s}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(s=>s.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Bt(t,i),isOriginOutsideView:st$1(t,i),isOverlayClipped:Bt(e,i),isOverlayOutsideView:st$1(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,s)=>i-Math.max(s,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ft$1(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof nr$1)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function k$1(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function At$1(n){if(typeof n!=`number`&&n!=null){let[t,e]=n.split(re$1);return!e||e===`px`?parseFloat(t):null}return n||null}function Ft(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ae$1(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var Lt=`cdk-global-overlay-wrapper`;function Gt(n){return new H$1}var H$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Lt),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:s,height:o,maxWidth:r,maxHeight:a}=this._overlayRef.getConfig(),h=(s===`100%`||s===`100vw`)&&(!r||r===`100%`||r===`100vw`),d=(o===`100%`||o===`100vh`)&&(!a||a===`100%`||a===`100vh`),l=this._xPosition,c=this._xOffset,p=this._overlayRef.getConfig().direction===`rtl`,g=``,_=``,v=``;h?v=`flex-start`:l===`center`?(v=`center`,p?_=c:g=c):p?l===`left`||l===`end`?(v=`flex-end`,g=c):(l===`right`||l===`start`)&&(v=`flex-start`,_=c):l===`left`||l===`start`?(v=`flex-start`,g=c):(l===`right`||l===`end`)&&(v=`flex-end`,_=c),t.position=this._cssPosition,t.marginLeft=h?`0`:g,t.marginTop=d?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=h?`0`:_,e.justifyContent=v,e.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Lt),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var $t=(()=>{class n{_injector=M(Be$2);global(){return Gt()}flexibleConnectedTo(e){return Ut$1(this._injector,e)}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var Kt=new V$2(`OVERLAY_DEFAULT_CONFIG`);function qt(n,t){n.get(R).load(jt);let e=n.get(Zt),i=n.get(Ge$3),s=n.get(Bt$1),o=n.get(Go$1),r=n.get(Vn$2),a=n.get(Oo$1,null,{optional:!0})||n.get(Ro$1).createRenderer(null,null),h=new N(t),d=n.get(Kt,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,!i.body||!(`showPopover`in i.body)?h.usePopover=!1:h.usePopover=t?.usePopover??d;let l=i.createElement(`div`),c=i.createElement(`div`);l.id=s.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),c.appendChild(l),h.usePopover&&(c.setAttribute(`popover`,`manual`),c.classList.add(`cdk-overlay-popover`));let p=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return rt$1(p)?p.after(c):p?.type===`parent`?p.element.appendChild(c):e.getContainerElement().appendChild(c),new Y$1(new F(l,o,n),c,l,h,n.get(Te$2),n.get(Xt$1),i,n.get(Lg),n.get(Ht),t?.disableAnimations??n.get(eD,null,{optional:!0})===`NoopAnimations`,n.get(Qe$2),a)}var Qt=(()=>{class n{scrollStrategies=M(Wt);_positionBuilder=M($t);_injector=M(Be$2);create(e){return qt(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=En$3({token:n,factory:n.ɵfac})}return n})();var le$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({providers:[Qt],imports:[Nt$2,Z$1,it$1,it$1]})}return n})();var p=`primary`;var Be=Symbol(`RouteTitle`);var rr=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function le(t){return new rr(t)}function Jt(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Cn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let a={},u=t.slice(0,r.length);return Jt(r,u,a)?{consumed:u,posParams:a}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!Jt(o,t.slice(0,o.length),c)||!Jt(s,t.slice(t.length-s.length),c)?null:{consumed:t,posParams:c}}function dt(t){return new Promise((n,e)=>{t.pipe(f0()).subscribe({next:r=>n(r),error:r=>e(r)})})}function wi$1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!H(t[e],n[e]))return!1;return!0}function H(t,n){let e=t?nr(t):void 0,r=n?nr(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!wn(t[i],n[i]))return!1;return!0}function nr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wn(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function bi$1(t){return t.length>0?t[t.length-1]:null}function he(t){return Uy(t)?t:aa$1(t)?Ct$3(Promise.resolve(t)):Hy(t)}function bn(t){return Uy(t)?dt(t):Promise.resolve(t)}var Ii$1={exact:An$1,subset:Mn$1};var In={exact:Ei$1,subset:Ai$1,ignored:()=>!0};var En$1={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var ir={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function pn(t,n,e){return Ii$1[e.paths](t.root,n.root,e.matrixParams)&&In[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function Ei$1(t,n){return H(t,n)}function An$1(t,n,e){if(!ue(t.segments,n.segments)||!ct(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!An$1(t.children[r],n.children[r],e))return!1;return!0}function Ai$1(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>wn(t[e],n[e]))}function Mn$1(t,n,e){return Tn$1(t,n,n.segments,e)}function Tn$1(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ue(i,e)||n.hasChildren()||!ct(i,e,r))}else if(t.segments.length===e.length){if(!ue(t.segments,e)||!ct(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!Mn$1(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ue(t.segments,i)||!ct(t.segments,i,r)||!t.children[p]?!1:Tn$1(t.children[p],n,o,r)}}function ct(t,n,e){return n.every((r,i)=>In[e](t[i].parameters,r.parameters))}var U=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=le(this.queryParams),this._queryParamMap}toString(){return Ni$1.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ut(this)}};var X$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=le(this.parameters),this._parameterMap}toString(){return _n(this)}};function Mi$1(t,n){return ue(t,n)&&t.every((e,r)=>H(e.parameters,n[r].parameters))}function ue(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function Ti$1(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===p&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==p&&(e=e.concat(n(i,r)))}),e}var ne=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:()=>new K$1})}return t})();var K$1=class{parse(n){let e=new sr(n);return new U(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${Oe(n.root,!0)}`}${Ui$1(n.queryParams)}${typeof n.fragment==`string`?`#${_i$1(n.fragment)}`:``}`}};var Ni$1=new K$1;function ut(t){return t.segments.map(n=>_n(n)).join(`/`)}function Oe(t,n){if(!t.hasChildren())return ut(t);if(n){let e=t.children[p]?Oe(t.children[p],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==p&&r.push(`${i}:${Oe(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=Ti$1(t,(r,i)=>i===p?[Oe(t.children[p],!1)]:[`${i}:${Oe(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[p]!=null?`${ut(t)}/${e[0]}`:`${ut(t)}/(${e.join(`//`)})`}}function Nn(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function st(t){return Nn(t).replace(/%3B/gi,`;`)}function _i$1(t){return encodeURI(t)}function or(t){return Nn(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function lt(t){return decodeURIComponent(t)}function gn(t){return lt(t.replace(/\+/g,`%20`))}function _n(t){return`${or(t.path)}${Di$1(t.parameters)}`}function Di$1(t){return Object.entries(t).map(([n,e])=>`;${or(n)}=${or(e)}`).join(``)}function Ui$1(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${st(e)}=${st(i)}`).join(`&`):`${st(e)}=${st(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var Oi$1=/^[^\/()?;#]+/;function Xt(t){let n=t.match(Oi$1);return n?n[0]:``}var Pi$1=/^[^\/()?;=#]+/;function Li$1(t){let n=t.match(Pi$1);return n?n[0]:``}var ji=/^[^=?&#]+/;function xi$1(t){let n=t.match(ji);return n?n[0]:``}var ki$1=/^[^&#]+/;function $i$1(t){let n=t.match(ki$1);return n?n[0]:``}var sr=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[p]=new m(e,r)),i}parseSegment(){let n=Xt(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new R$1(4009,!1);return this.capture(n),new X$1(lt(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=Li$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Xt(this.remaining);i&&(r=i,this.capture(r))}n[lt(e)]=lt(r)}parseQueryParam(n){let e=xi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let s=$i$1(this.remaining);s&&(r=s,this.capture(r))}let i=gn(e),o=gn(r);if(Object.hasOwn(n,i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Xt(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new R$1(4010,!1);let s;i.indexOf(`:`)>-1?(s=i.slice(0,i.indexOf(`:`)),this.capture(s),this.capture(`:`)):n&&(s=p);let c=this.parseChildren(e+1);r[s??p]=Object.keys(c).length===1&&c[p]?c[p]:new m([],c),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R$1(4011,!1)}};function Dn$1(t){return t.segments.length>0?new m([],{[p]:t}):t}function Un(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=Un(i);if(r===p&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))n[s]=c;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}return zi(new m(t.segments,n))}function zi(t){if(t.numberOfChildren===1&&t.children[p]){let n=t.children[p];return new m(t.segments.concat(n.segments),n.children)}return t}function ee(t){return t instanceof U}function On(t,n,e=null,r=null,i=new K$1){return Ln$1(Pn$1(t),n,e,r,i)}function Pn$1(t){let n;function e(o){let s={};for(let a of o.children){let u=e(a);s[a.outlet]=u}let c=new m(o.url,s);return o===t&&(n=c),c}let i=Dn$1(e(t.root));return n??i}function Ln$1(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return er(o,o,o,e,r,i);let s=qi$1(n);if(s.toRoot())return er(o,o,new m([],{}),e,r,i);let c=Fi$1(s,o,t),a=c.processChildren?Le(c.segmentGroup,c.index,s.commands):xn(c.segmentGroup,c.index,s.commands);return er(o,c.segmentGroup,a,e,r,i)}function ht$1(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function xe(t){return typeof t==`object`&&t!=null&&t.outlets}function vn(t,n,e){t||=`ɵ`;let r=new U;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function er(t,n,e,r,i,o){let s={};for(let[u,l]of Object.entries(r??{}))s[u]=Array.isArray(l)?l.map(v=>vn(u,v,o)):vn(u,l,o);let c;t===n?c=e:c=jn$1(t,n,e);return new U(Dn$1(Un(c)),s,i)}function jn$1(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=jn$1(o,n,e)}),new m(t.segments,r)}var ft=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&ht$1(r[0]))throw new R$1(4003,!1);let i=r.find(xe);if(i&&i!==bi$1(r))throw new R$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function qi$1(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new ft(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,u])=>{c[a]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:s===0?(o.split(`/`).forEach((c,a)=>{a==0&&c===`.`||(a==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new ft(e,n,r)}var Re=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Fi$1(t,n,e){if(t.isAbsolute)return new Re(n,!0,0);if(!e)return new Re(n,!1,NaN);if(e.parent===null)return new Re(e,!0,0);let r=ht$1(t.commands[0])?0:1;return Hi$1(e,e.segments.length-1+r,t.numberOfDoubleDots)}function Hi$1(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new R$1(4005,!1);i=r.segments.length}return new Re(r,!1,i-o)}function Bi$1(t){return xe(t[0])?t[0].outlets:{[p]:t}}function xn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Le(t,n,e);let r=Vi$1(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[p]=new m(t.segments.slice(r.pathIndex),t.children),Le(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?ar(t,n,e):r.match?Le(t,0,i):ar(t,n,e)}function Le(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Bi$1(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==p)&&t.children[p]&&t.numberOfChildren===1&&t.children[p].segments.length===0){let o=Le(t.children[p],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s==`string`&&(s=[s]),s!==null&&(i[o]=xn(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new m(t.segments,i)}}function Vi$1(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],c=e[r];if(xe(c))break;let a=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&a===void 0)break;if(a&&u&&typeof u==`object`&&u.outlets===void 0){if(!yn(a,u,s))return o;r+=2}else{if(!yn(a,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function ar(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(xe(o))return new m(r,Gi$1(o.outlets));if(i===0&&ht$1(e[0])){let a=t.segments[n];r.push(new X$1(a.path,mn(e[0]))),i++;continue}let s=xe(o)?o.outlets[p]:`${o}`,c=i<e.length-1?e[i+1]:null;s&&c&&ht$1(c)?(r.push(new X$1(s,mn(c))),i+=2):(r.push(new X$1(s,{})),i++)}return new m(r,{})}function Gi$1(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=ar(new m([],{}),0,r))}),n}function mn(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function yn(t,n,e){return t==e.path&&H(n,e.parameters)}var Se=`imperative`;var C$1=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(C$1||{});var O=class{id;url;constructor(n,e){this.id=n,this.url=e}};var te=class extends O{type=C$1.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var k=class extends O{urlAfterRedirects;type=C$1.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var E=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(E||{});var we=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(we||{});var x=class extends O{reason;code;type=C$1.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function kn(t){return t instanceof x&&(t.code===E.Redirect||t.code===E.SupersededByNewNavigation)}var B=class extends O{reason;code;type=C$1.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var de=class extends O{error;target;type=C$1.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var ke=class extends O{urlAfterRedirects;state;type=C$1.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pt=class extends O{urlAfterRedirects;state;type=C$1.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt$1=class extends O{urlAfterRedirects;state;shouldActivate;type=C$1.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var vt$1=class extends O{urlAfterRedirects;state;type=C$1.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var mt=class extends O{urlAfterRedirects;state;type=C$1.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt$2=class{route;type=C$1.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Rt=class{route;type=C$1.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var St=class{snapshot;type=C$1.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ct$1=class{snapshot;type=C$1.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var wt$1=class{snapshot;type=C$1.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var bt=class{snapshot;type=C$1.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var be=class{routerEvent;position;anchor;scrollBehavior;type=C$1.Scroll;constructor(n,e,r,i){this.routerEvent=n,this.position=e,this.anchor=r,this.scrollBehavior=i}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var Ie=class{};var $e=class{};var Ee=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Wi$1(t){return!(t instanceof Ie)&&!(t instanceof Ee)&&!(t instanceof $e)}var It=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new re(this.rootInjector)}resetChildren(){this.children=new re(this.rootInjector)}};var re=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new It(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(ae$2(Qe$2))};static ɵprov=Y$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Et=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=cr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=cr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=ur(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return ur(n,this._root).map(e=>e.value)}};function cr(t,n){if(t===n.value)return n;for(let e of n.children){let r=cr(t,e);if(r)return r}return null}function ur(t,n){if(t===n.value)return[n];for(let e of n.children){let r=ur(t,e);if(r.length)return r.unshift(n),r}return[]}var D=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ye$1(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var ze=class extends Et{snapshot;constructor(n,e){super(n),this.snapshot=e,Rr(this,n)}toString(){return this.snapshot.toString()}};function $n$1(t,n){let e=Qi(t,n),r=new sn$1([new X$1(``,{})]),i=new sn$1({}),o=new sn$1({}),a=new V$1(r,i,new sn$1({}),new sn$1(``),o,p,t,e.root);return a.snapshot=e.root,new ze(new D(a,[]),e)}function Qi(t,n){return new qe(``,new D(new Ae([],{},{},``,{},p,t,null,{},n),[]))}var V$1=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,s,c,a){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(It$3(u=>u[Be]))??Hy(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(It$3(n=>le(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(It$3(n=>le(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Ki$1=`always`;function yr(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:q$3(q$3({},n.params),t.params),data:q$3(q$3({},n.data),t.data),resolve:q$3(q$3(q$3(q$3({},t.data),n.data),i?.data),t._resolvedData)}:r={params:q$3({},t.params),data:q$3({},t.data),resolve:q$3(q$3({},t.data),t._resolvedData??{})},i&&qn(i)&&(r.resolve[Be]=i.title),r}var Ae=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Be]}constructor(n,e,r,i,o,s,c,a,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=le(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=le(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var qe=class extends Et{url;constructor(n,e){super(e),this.url=n,Rr(this,e)}toString(){return zn$1(this._root)}};function Rr(t,n){n.value._routerState=t,n.children.forEach(e=>Rr(t,e))}function zn$1(t){let n=t.children.length>0?` { ${t.children.map(zn$1).join(`, `)} } `:``;return`${t.value}${n}`}function tr(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,H(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),H(n.params,e.params)||t.paramsSubject.next(e.params),wi$1(n.url,e.url)||t.urlSubject.next(e.url),H(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function lr(t,n){let e=H(t.params,n.params)&&Mi$1(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||lr(t.parent,n.parent))}function qn(t){return typeof t.title==`string`||t.title===null}var Fn$1=new V$2(``);var Sr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=p;activateEvents=new jt$2;deactivateEvents=new jt$2;attachEvents=new jt$2;detachEvents=new jt$2;routerOutletData=nj();parentContexts=M(re);location=M(Ur);changeDetector=M(xg);inputBinder=M(Ve,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new R$1(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new dr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:a,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=Ol({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[el]})}return t})();var dr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===V$1?this.route:n===re?this.childContexts:n===Fn$1?this.outletData:this.parent.get(n,e)}};var Ve=new V$2(``);var Hn$1=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],s=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:a,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i,r);o.push(...u),s=a}o.length>0&&this.outletEffects.set(e,o);let c=Jy([this.options.queryParams?i.queryParams:Hy({}),i.params,i.data]).pipe(v0(([a,u,l],v)=>(l=q$3(q$3(q$3(q$3({},a),u),l),i.resources||{}),v===0?Hy(l):Promise.resolve(l)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let u=lj(i.component);if(!u){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=new Set,this.outletSeenKeys.set(e,l));for(let f of Object.keys(a))l.add(f);let v=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:f}of u.inputs){if(s.includes(f))continue;let S=a[f];(S!==void 0||v===`alwaysUndefined`||l.has(f))&&e.activatedComponentRef.setInput(f,S)}});this.outletDataSubscriptions.set(e,c)}static ɵfac=function(r){yC()};static ɵprov=Y$3({token:t,factory:t.ɵfac})}return t})();var Cr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=JC({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Gm(0,`router-outlet`)},dependencies:[Sr],encapsulation:2,changeDetection:1})}return t})();function wr(t){let n=t.children&&t.children.map(wr),e=n?se$1(q$3({},t),{children:n}):q$3({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==p&&(e.component=Cr),e}function Yi$1(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new ze(Fe(t,n._root,e?e._root:void 0,r),n)}}function Fe(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new D(i,Zi$1(t,n,e,r))}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let c=s.route;return c.value._setPending(n.value),c.children=n.children.map(a=>Fe(t,a,void 0,r)),c}}let i=Ji(n.value);i._setPending(n.value),r.add(i);return new D(i,n.children.map(s=>Fe(t,s,void 0,r)))}}function Zi$1(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return Fe(t,i,o,r);return Fe(t,i,void 0,r)})}function Ji(t){return new V$1(new sn$1(t.url),new sn$1(t.params),new sn$1(t.queryParams),new sn$1(t.fragment),new sn$1(t.data),t.outlet,t.component,t)}var Me=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var Bn$1=`ngNavigationCancelingError`;function At(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=ee(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Vn$1(!1,E.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Vn$1(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Bn$1]=!0,e.cancellationCode=n,e}function Xi$1(t){return Gn$1(t)&&ee(t.url)}function Gn$1(t){return!!t&&t[Bn$1]}var hr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),tr(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=ye$1(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=ye$1(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=ye$1(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=ye$1(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new bt(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Ct$1(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(tr(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),tr(c.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}};var Mt=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var Ce$1=class{component;route;constructor(n,e){this.component=n,this.route=e}};function eo(t,n,e){let r=t._root;return Pe(r,n?n._root:null,e,[r.value])}function to(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ne(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!b0(t)?t:n.get(t):r}function Pe(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=ye$1(n);return t.children.forEach(s=>{ro(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>je(c,e.getContext(s),e,i)),i}function ro(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=no(s,o,o.routeConfig.runGuardsAndResolvers);a?i.canActivateChecks.push(new Mt(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Pe(t,n,c?c.children:null,r,i):Pe(t,n,e,r,i),a&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Ce$1(c.outlet.component,s))}else s&&je(n,c,e,i),i.canActivateChecks.push(new Mt(r)),o.component?Pe(t,null,c?c.children:null,r,i):Pe(t,null,e,r,i);return i}function no(t,n,e){if(typeof e==`function`)return is$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ue(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ue(t.url,n.url)||!H(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!lr(t,n)||!H(t.queryParams,n.queryParams);default:return!lr(t,n)}}function je(t,n,e,r){let i=ye$1(t),o=t.value;Object.entries(i).forEach(([s,c])=>{o.component?n?je(c,n.children.getContext(s),n.children,r):je(c,null,null,r):je(c,e?e.getContext(s):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new Ce$1(n.outlet.component,o)):r.canDeactivateChecks.push(new Ce$1(null,o)):r.canDeactivateChecks.push(new Ce$1(null,o))}function Ge$1(t){return typeof t==`function`}function io(t){return typeof t==`boolean`}function oo(t){return t&&Ge$1(t.canLoad)}function so(t){return t&&Ge$1(t.canActivate)}function ao(t){return t&&Ge$1(t.canActivateChild)}function co(t){return t&&Ge$1(t.canDeactivate)}function uo(t){return t&&Ge$1(t.canMatch)}function Wn$1(t){return t instanceof ro$1||t?.name===`EmptyError`}var at=Symbol(`INITIAL_VALUE`);function Te(){return v0(t=>Jy(t.map(n=>n.pipe(yr$1(1),D0(at)))).pipe(It$3(n=>{for(let e of n)if(e!==!0){if(e===at)return at;if(e===!1||lo(e))return e}return!0}),io$1(n=>n!==at),yr$1(1)))}function lo(t){return ee(t)||t instanceof Me}function Qn$1(t){return t.aborted?Hy(void 0).pipe(yr$1(1)):new U$2(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Kn$1(t){return E0(Qn$1(t))}function ho(t){return Lt$2(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Hy(se$1(q$3({},n),{guardsResult:!0})):fo(o,e,r).pipe(Lt$2(s=>s&&io(s)?po(e,i,t):Hy(s)),It$3(s=>se$1(q$3({},n),{guardsResult:s})))})}function fo(t,n,e){return Ct$3(t).pipe(Lt$2(r=>Ro(r.component,r.route,e,n)),f0(r=>r!==!0,!0))}function po(t,n,e){return Ct$3(n).pipe(i0(r=>gr$1(vo(r.route.parent,e),go(r.route,e),yo(t,r.path),mo(t,r.route))),f0(r=>r!==!0,!0))}function go(t,n){return t!==null&&n&&n(new wt$1(t)),Hy(!0)}function vo(t,n){return t!==null&&n&&n(new St(t)),Hy(!0)}function mo(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Hy(!0);return Hy(e.map(i=>t0(()=>{let o=n._environmentInjector,s=Ne(i,o);return he(so(s)?s.canActivate(n,t):is$1(o,()=>s(n,t))).pipe(f0())}))).pipe(Te())}function yo(t,n){let e=n[n.length-1];return Hy(n.slice(0,n.length-1).reverse().map(o=>to(o)).filter(o=>o!==null).map(o=>t0(()=>{return Hy(o.guards.map(c=>{let a=o.node._environmentInjector,u=Ne(c,a);return he(ao(u)?u.canActivateChild(e,t):is$1(a,()=>u(e,t))).pipe(f0())})).pipe(Te())}))).pipe(Te())}function Ro(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Hy(!0);return Hy(i.map(s=>{let c=n._environmentInjector,a=Ne(s,c);return he(co(a)?a.canDeactivate(t,n,e,r):is$1(c,()=>a(t,n,e,r))).pipe(f0())})).pipe(Te())}function So(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Hy(!0);return Hy(o.map(c=>{let a=Ne(c,t),l=he(oo(a)?a.canLoad(n,e):is$1(t,()=>a(n,e)));return i?l.pipe(Kn$1(i)):l})).pipe(Te(),Yn(r))}function Yn(t){return Ay(C0(n=>{if(typeof n!=`boolean`)throw At(t,n)}),It$3(n=>n===!0))}function Co(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return Hy(!0);return Hy(s.map(a=>{let u=Ne(a,t);return he(uo(u)?u.canMatch(n,e,i):is$1(t,()=>u(n,e,i))).pipe(Kn$1(o))})).pipe(Te(),Yn(r))}var Q=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var He=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function wo(t){throw new R$1(4e3,!1)}function bo(t){throw Vn$1(!1,E.GuardRejected)}var fr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return rt$2(this,null,function*(){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[p])throw wo(`${n.redirectTo}`);i=i.children[p]}})}applyRedirectCommands(n,e,r,i,o){return rt$2(this,null,function*(){let s=yield Io(e,i,o);if(s instanceof U)throw new He(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]===`/`)throw new He(c);return c})}applyRedirectCreateUrlTree(n,e,r,i){return new U(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(n,a,r,i)}),new m(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new R$1(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Io(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return dt(he(is$1(e,()=>r(n))))}function Eo(t,n){return t.providers&&!t._injector&&(t._injector=Rm(t.providers,n,`Route: ${t.path}`)),t._injector??n}function q$1(t){return t.outlet||p}function Ao(t,n){let e=t.filter(r=>q$1(r)===n);return e.push(...t.filter(r=>q$1(r)!==n)),e}var pr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Zn$1(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Mo(t,n,e,r,i,o,s){let c=Jn$1(t,n,e);if(!c.matched)return Hy(c);let a=Zn$1(o(c));return r=Eo(n,r),Co(r,n,e,i,a,s).pipe(It$3(u=>u===!0?c:q$3({},pr)))}function Jn$1(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?q$3({},pr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||Cn)(e,t,n);if(!i)return q$3({},pr);let o={};Object.entries(i.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=i.consumed.length>0?q$3(q$3({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Rn$1(t,n,e,r,i){return e.length>0&&_o(t,e,r,i)?{segmentGroup:new m(n,No(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&Do(t,e,r)?{segmentGroup:new m(t.segments,To(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function To(t,n,e,r){let i={};for(let o of e)if(Nt(t,n,o)&&!r[q$1(o)]){let s=new m([],{});i[q$1(o)]=s}return q$3(q$3({},r),i)}function No(t,n){let e={};e[p]=n;for(let r of t)if(r.path===``&&q$1(r)!==p){let i=new m([],{});e[q$1(r)]=i}return e}function _o(t,n,e,r){return e.some(i=>!Nt(t,n,i)||!(q$1(i)!==p)?!1:!(r!==void 0&&q$1(i)===r))}function Do(t,n,e){return e.some(r=>Nt(t,n,r))}function Nt(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Uo(t,n,e){return n.length===0&&!t.children[e]}var gr=class{};function Oo(t,n,e,r,i,o,s,c){return rt$2(this,null,function*(){return new vr(t,n,e,r,i,s,o,c).recognize()})}var Po=31;var vr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,c,a){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new fr(this.urlSerializer,this.urlTree)}noMatchError(n){return new R$1(4002,`'${n.segmentGroup}'`)}recognize(){return rt$2(this,null,function*(){let n=Rn$1(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=yield this.match(n),o=new qe(``,new D(r,e)),s=On(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return rt$2(this,null,function*(){let e=new Ae([],Object.freeze({}),Object.freeze(q$3({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),p,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,p,e),rootSnapshot:e}}catch(r){if(r instanceof He)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Q?this.noMatchError(r):r}})}processSegmentGroup(n,e,r,i,o){return rt$2(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=yield this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof D?[s]:[]})}processChildren(n,e,r,i){return rt$2(this,null,function*(){let o=[];for(let a of Object.keys(r.children))a===`primary`?o.unshift(a):o.push(a);let s=[];for(let a of o){let u=r.children[a],l=Ao(e,a),v=yield this.processSegmentGroup(n,l,u,a,i);s.push(...v)}let c=Xn(s);return Lo(c),c})}processSegment(n,e,r,i,o,s,c){return rt$2(this,null,function*(){for(let a of e)try{return yield this.processSegmentAgainstRoute(a._injector??n,e,a,r,i,o,s,c)}catch(u){if(u instanceof Q||Wn$1(u))continue;throw u}if(Uo(r,i,o))return new gr;throw new Q(r)})}processSegmentAgainstRoute(n,e,r,i,o,s,c,a){return rt$2(this,null,function*(){if(q$1(r)!==s&&(s===p||!Nt(i,o,r)))throw new Q(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,a);throw new Q(i)})}expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,c){return rt$2(this,null,function*(){let{matched:a,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:f}=Jn$1(e,i,o);if(!a)throw new Q(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Po&&(this.allowRedirects=!1));let S=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let $=yield this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,Zn$1(S),n),oe=yield this.applyRedirects.lineralizeSegments(i,$);return this.processSegment(n,r,e,oe.concat(f),s,!1,c)})}createSnapshot(n,e,r,i,o){let s=new Ae(r,i,Object.freeze(q$3({},this.urlTree.queryParams)),this.urlTree.fragment,xo(e),q$1(e),e.component??e._loadedComponent??null,e,ko(e),n),c=yr(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(n,e,r,i,o,s){return rt$2(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=se=>this.createSnapshot(n,r,se.consumedSegments,se.parameters,s),a=yield dt(Mo(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!a?.matched)throw new Q(e);n=r._injector??n;let{routes:u}=yield this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:f,remainingSegments:S}=a,$=this.createSnapshot(n,r,f,v,s),{segmentGroup:oe,slicedSegments:_e}=Rn$1(e,f,S,u,o);if(_e.length===0&&oe.hasChildren())return new D($,yield this.processChildren(l,u,oe,$));if(u.length===0&&_e.length===0)return new D($,[]);let Lt=q$1(r)===o,Ke=yield this.processSegment(l,u,oe,_e,Lt?p:o,!0,$);return new D($,Ke instanceof D?[Ke]:[])})}getChildConfig(n,e,r){return rt$2(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield dt(So(n,e,r,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw bo(e)}return{routes:[],injector:n}})}};function Lo(t){t.sort((n,e)=>n.value.outlet===p?-1:e.value.outlet===p?1:n.value.outlet.localeCompare(e.value.outlet))}function jo(t){let n=t.value.routeConfig;return n&&n.path===``}function Xn(t){let n=[],e=new Set;for(let r of t){if(!jo(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=Xn(r.children);n.push(new D(r.value,i))}return n.filter(r=>!e.has(r))}function xo(t){return t.data||{}}function ko(t){return t.resolve||{}}function $o(t,n,e,r,i,o,s){return Lt$2(c=>rt$2(null,null,function*(){let{state:a,tree:u}=yield Oo(t,n,e,r,c.extractedUrl,i,o,s);return se$1(q$3({},c),{targetSnapshot:a,urlAfterRedirects:u})}))}function zo(t){return Lt$2(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Hy(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let a of ei$1(c))o.add(a);let s=0;return Ct$3(o).pipe(i0(c=>i.has(c)?qo(c,e,t):(c.data=yr(c,c.parent,t).resolve,Hy(void 0))),C0(()=>s++),p0(1),Lt$2(c=>s===o.size?Hy(n):An$3))})}function ei$1(t){return[t,...t.children.map(e=>ei$1(e)).flat()]}function qo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!qn(r)&&(i[Be]=r.title),t0(()=>(t.data=yr(t,t.parent,e).resolve,Fo(i,t,n).pipe(It$3(o=>(t._resolvedData=o,t.data=q$3(q$3({},t.data),o),null)))))}function Fo(t,n,e){let r=nr(t);if(r.length===0)return Hy({});let i={};return Ct$3(r).pipe(Lt$2(o=>Ho(t[o],n,e).pipe(f0(),C0(s=>{if(s instanceof Me)throw At(new K$1,s);i[o]=s}))),p0(1),It$3(()=>i),rc(o=>Wn$1(o)?An$3:$y(o)))}function Ho(t,n,e){let r=n._environmentInjector,i=Ne(t,r);return he(i.resolve?i.resolve(n,e):is$1(r,()=>i(n,e)))}var br=new V$2(``);function mr(t){return v0(n=>{let e=t(n);return e?Ct$3(e).pipe(It$3(()=>n)):Hy(n)})}var Ir=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===p);return r}getResolvedTitleForRoute(e){return e.data[Be]}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:()=>M(ti$1)})}return t})();var ti$1=(()=>{class t extends Ir{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(ae$2(Kn$3))};static ɵprov=Y$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ie=new V$2(``,{factory:()=>({})});var fe=new V$2(``);var _t$1=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=M(kw);loadComponent(e,r){return rt$2(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=rt$2(this,null,function*(){try{let s=yield ni$1(tj(yield bn(is$1(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,i),i})}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=rt$2(this,null,function*(){try{let o=yield ri$1(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();function ri$1(t,n,e,r){return rt$2(this,null,function*(){let o=yield ni$1(tj(yield bn(is$1(e,()=>t.loadChildren())))),s;o instanceof km||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),r&&r(t);let c,a,l;return Array.isArray(s)?a=s:(c=s.create(e).injector,l=s,a=c.get(fe,[],{optional:!0,self:!0}).flat()),{routes:a.map(wr),injector:c,factory:l}})}function ni$1(t){return rt$2(this,null,function*(){return t})}var Dt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:()=>M(Bo)})}return t})();var Bo=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();var Er=new V$2(``);var Ar=new V$2(``);function ii$1(t,n,e,r){let i=t.get(Ar),o=t.get(Ge$3);if(r){i.skipNextTransition=!1;return}if(!o.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,c=new Promise(l=>{s=l}),a=o.startViewTransition(()=>(s(),Vo(t)));a.updateCallbackDone.catch(l=>{}),a.ready.catch(l=>{}),a.finished.catch(l=>{});let{onViewTransitionCreated:u}=i;return u&&is$1(t,()=>u({transition:a,from:n,to:e})),c}function Vo(t){return new Promise(n=>{Yv({read:()=>setTimeout(n)},{injector:t})})}var Go=()=>{};var Mr=new V$2(``);var Ut=(()=>{class t{currentNavigation=xr(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xr(null);events=new we$2;transitionAbortWithErrorSubject=new we$2;configLoader=M(_t$1);environmentInjector=M(Qe$2);destroyRef=M(it$2);urlSerializer=M(ne);rootContexts=M(re);location=M(Lg);inputBindingEnabled=M(Ve,{optional:!0})!==null;titleStrategy=M(Ir);options=M(ie,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ki$1;urlHandlingStrategy=M(Dt);createViewTransition=M(Er,{optional:!0});navigationErrorHandler=M(Mr,{optional:!0});routerResourcesFeature=M(br,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Hy(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new yt$2(i)),r=i=>this.events.next(new Rt(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;ql(()=>{this.transitions?.next(se$1(q$3({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new sn$1(null),this.transitions.pipe(io$1(r=>r!==null),v0(r=>{let i=!0,o=!1,s=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Hy(r).pipe(v0(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,E.SupersededByNewNavigation),An$3;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl==`string`?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:u?se$1(q$3({},u),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new B(a.id,this.urlSerializer.serialize(a.rawUrl),``,we.IgnoredSameUrlNavigation)),a.resolve(!1),An$3;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return Hy(a).pipe(v0(f=>(this.events.next(new te(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?An$3:Promise.resolve(f))),$o(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),C0(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(S=>(S.finalUrl=f.urlAfterRedirects,S)),this.events.next(new $e)}),v0(f=>Ct$3(r.routesRecognizeHandler.deferredHandle??Hy(void 0)).pipe(It$3(()=>f))),C0(()=>{let f=new ke(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:S,source:$,restoredState:oe,extras:_e}=a,Lt=new te(f,this.urlSerializer.serialize(S),$,oe);this.events.next(Lt);let Ke=$n$1(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=se$1(q$3({},a),{targetSnapshot:Ke,urlAfterRedirects:S,extras:se$1(q$3({},_e),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(se=>(se.finalUrl=S,se)),Hy(r)}else return this.events.next(new B(a.id,this.urlSerializer.serialize(a.extractedUrl),``,we.IgnoredByUrlHandlingStrategy)),a.resolve(!1),An$3}),It$3(a=>{let u=new pt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(u),this.currentTransition=r=se$1(q$3({},a),{guards:eo(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),ho(a=>this.events.next(a)),v0(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!=`boolean`)throw At(this.urlSerializer,a.guardsResult);let u=new gt$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(u),!c())return An$3;if(!a.guardsResult)return this.cancelNavigationTransition(a,``,E.GuardRejected),An$3;if(a.guards.canActivateChecks.length===0)return Hy(a);let l=new vt$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!c())return An$3;let v=!1;return Hy(a).pipe(zo(this.paramsInheritanceStrategy),C0({next:()=>{v=!0;let f=new mt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(a,``,E.NoDataFromResolver)}}))}),mr(a=>{let u=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let S=v._environmentInjector;f.push(this.configLoader.loadComponent(S,v.routeConfig).then($=>{v.component=$}))}for(let S of v.children)f.push(...u(S));return f},l=u(a.targetSnapshot.root);return l.length===0?Hy(a):Ct$3(Promise.all(l).then(()=>a))}),v0(a=>{let{newlyCreatedRoutes:u,state:l}=Yi$1(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=r=a=se$1(q$3({},a),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),Hy(a)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(a=>a),mr(()=>this.afterPreactivation()),v0(()=>{let{currentSnapshot:a,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,a.root,u.root,r.hasUAVisualTransition);return l?Ct$3(l).pipe(It$3(()=>r)):Hy(r)}),yr$1(1),v0(a=>{i=!1,this.events.next(new Ie);let u=r.beforeActivateHandler.deferredHandle;return u?Ct$3(u.then(()=>a)):Hy(a)}),C0(a=>{new hr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(oi$1(a.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Go,u)),this.lastSuccessfulNavigation.set(ql(this.currentNavigation)),this.events.next(new k(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),E0(Qn$1(s.signal).pipe(io$1(()=>!o&&i),C0(()=>{this.cancelNavigationTransition(r,s.signal.reason+``,E.Aborted)}))),C0({complete:()=>{o=!0}}),E0(this.transitionAbortWithErrorSubject.pipe(C0(a=>{throw a}))),d0(()=>{s.abort(),o||this.cancelNavigationTransition(r,``,E.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),rc(a=>{if(o=!0,Sn(r),this.destroyed)return r.resolve(!1),An$3;if(Gn$1(a))this.events.next(new x(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),Xi$1(a)?this.events.next(new Ee(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let u=new de(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let l=is$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof Me){let{message:v,cancellationCode:f}=At(this.urlSerializer,l);this.events.next(new x(r.id,this.urlSerializer.serialize(r.extractedUrl),v,f)),this.events.next(new Ee(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),a}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return An$3}))}))}cancelNavigationTransition(e,r,i){Sn(e);let o=new x(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=ql(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();function Wo(t){return t!==Se}function Sn(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;oi$1(t.targetRouterState)}function oi$1(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var si$1=new V$2(``);var ai$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:()=>M(Qo)})}return t})();var Tt=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var Qo=(()=>{class t extends Tt{static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();var Ot=(()=>{class t{urlSerializer=M(ne);options=M(ie,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=M(Lg);urlHandlingStrategy=M(Dt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new U;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof U?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=$n$1(null,M(Qe$2));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:()=>M(Ko)})}return t})();var Ko=(()=>{class t extends Ot{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof te?this.updateStateMemento():e instanceof B?this.commitTransition(r):e instanceof ke?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Ie?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof x&&!kn(e)?this.restoreHistory(r):e instanceof de?this.restoreHistory(r,!0):e instanceof k&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,u=q$3(q$3({},c),this.generateNgRouterState(o,a,r));this.location.replaceState(e,``,u)}else{let a=q$3(q$3({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,a)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?q$3({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):q$3({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();function Pt(t,n){t.events.pipe(io$1(e=>e instanceof k||e instanceof x||e instanceof de||e instanceof B),It$3(e=>e instanceof k||e instanceof B?0:(e instanceof x?e.code===E.Redirect||e.code===E.SupersededByNewNavigation:!1)?2:1),io$1(e=>e!==2),yr$1(1)).subscribe(()=>{n()})}var G$2=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=M(mI);stateManager=M(Ot);options=M(ie,{optional:!0})||{};pendingTasks=M(gn$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=M(Ut);urlSerializer=M(ne);location=M(Lg);urlHandlingStrategy=M(Dt);injector=M(Qe$2);_events=new we$2;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=M(ai$1);injectorCleanup=M(si$1,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=M(fe,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!M(Ve,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ee$2;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=ql(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof x&&r.code!==E.Redirect&&r.code!==E.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof k)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ee){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),a=q$3({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Wo(i.source)},s);this.scheduleNavigation(c,Se,null,a,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Wi$1(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Se,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,s)=>{this.navigateToSyncWithBrowser(e,i,r,o,s)})}navigateToSyncWithBrowser(e,r,i,o,s){let c=i?.navigationId?i:null,a=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=se$1(q$3({},o),{browserUrl:e})),i){let l=q$3({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(a);this.scheduleNavigation(u,r,c,o,s).catch(l=>{this.disposed||this.injector.get(Gt$1)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ql(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(wr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=r,u=a?this.currentUrlTree.fragment:s,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=q$3(q$3({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}l!==null&&(l=this.removeEmptyProps(l));let v;try{v=Pn$1(i?i.snapshot:this.routerState.snapshot.root)}catch(f){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return Ln$1(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=ee(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Se,null,r)}navigate(e,r={skipLocationChange:!1}){return Yo(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(r){return this.console.warn(jn$3(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=q$3({},En$1):r===!1?i=q$3({},ir):i=q$3(q$3({},ir),r),ee(e))return pn(this.currentUrlTree,e,i);let o=this.parseUrl(e);return pn(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s,c){if(this.disposed)return Promise.resolve(!1);let a,u,l;c?(a=c.resolve,u=c.reject,l=c.promise):l=new Promise((f,S)=>{a=f,u=S});let v=this.pendingTasks.add();return Pt(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:s,resolve:a,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();function Yo(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R$1(4008,!1)}var Jo=(()=>{class t{router=M(G$2);stateManager=M(Ot);fragment=xr(``);queryParams=xr({});path=xr(``);serializer=M(ne);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof k&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new U(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=En$3({token:t,factory:t.ɵfac})}return t})();var ci$1=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=M(new wg(`href`),{optional:!0});reactiveHref=Fw(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ql(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ql(this._target)}_target=xr(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ql(this._queryParams)}_queryParams=xr(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ql(this._fragment)}_fragment=xr(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ql(this._queryParamsHandling)}_queryParamsHandling=xr(void 0);set state(e){this._state.set(e)}get state(){return ql(this._state)}_state=xr(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ql(this._info)}_info=xr(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ql(this._relativeTo)}_relativeTo=xr(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ql(this._preserveFragment)}_preserveFragment=xr(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ql(this._skipLocationChange)}_skipLocationChange=xr(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ql(this._replaceUrl)}_replaceUrl=xr(!1);browserUrl=nj(void 0);isAnchorElement;onChanges=new we$2;applicationErrorHandler=M(Gt$1);options=M(ie,{optional:!0});reactiveRouterState=M(Jo);constructor(e,r,i,o,s,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=c;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a===`a`||a===`area`||!!(typeof customElements==`object`&&customElements.get(a)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=xr(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ee(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,s){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||r||i||o||s||typeof this.target==`string`&&this.target!=`_self`))return!0;let a=this.browserUrl(),u=q$3({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},a!==void 0&&{browserUrl:a});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=Ow(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:ee(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return ql(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(kt$1(G$2),kt$1(V$1),nl(`tabindex`),kt$1(Oo$1),kt$1(nr$1),kt$1(Gr))};static ɵdir=Ol({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Qm(`click`,function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&Um(`href`,i.reactiveHref(),Av)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,ab],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,ab],replaceUrl:[2,`replaceUrl`,`replaceUrl`,ab],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[el]})}return t})();var We=class{};var ui$1=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,i,o){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(io$1(e=>e instanceof k),i0(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,r){let i=[];for(let o of r){o.providers&&!o._injector&&(o._injector=Rm(o.providers,e,``));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let c=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(c,o.children??o._loadedRoutes))}return Ct$3(i).pipe(oo$1())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{if(e.destroyed)return Hy(null);let i;r.loadChildren&&r.canLoad===void 0?i=Ct$3(this.loader.loadChildren(e,r)):i=Hy(null);let o=i.pipe(Lt$2(s=>s===null?Hy(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,r._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(r.loadComponent&&!r._loadedComponent)return Ct$3([o,this.loader.loadComponent(e,r)]).pipe(oo$1());else return o})}static ɵfac=function(r){return new(r||t)(ae$2(G$2),ae$2(Qe$2),ae$2(We),ae$2(_t$1))};static ɵprov=Y$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var li$1=new V$2(``);var Xo=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Se;restoredId=0;store={};isHydrating=M(UD,{optional:!0})??!1;urlSerializer=M(ne);zone=M(Te$2);viewportScroller=M(H3);transitions=M(Ut);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&M(Go$1).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof te?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof k?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof B&&e.code===we.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof be)||e.scrollBehavior===`manual`)return;let r={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){if(this.isHydrating)return;let i=ql(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>rt$2(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new be(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,r,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(r){yC()};static ɵprov=Y$3({token:t,factory:t.ɵfac})}return t})();function es(t,...n){return os$1([{provide:fe,multi:!0,useValue:t},{provide:V$1,useFactory:di$1},{provide:Hm,multi:!0,useFactory:hi$1},n.map(e=>e.ɵproviders)])}function di$1(){return M(G$2).routerState.root}function Qe(t,n){return{ɵkind:t,ɵproviders:n}}function hi$1(){let t=M(Be$2);return n=>{let e=t.get(Go$1);if(n!==e.components[0])return;let r=t.get(G$2),i=t.get(fi$1);t.get(Nr)===1&&r.initialNavigation(),t.get(vi$1,null,{optional:!0})?.setUpPreloading(),t.get(li$1,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var fi$1=new V$2(``,{factory:()=>new we$2});var Nr=new V$2(``,{factory:()=>1});function pi$1(){return Qe(2,[{provide:zD,useValue:!0},{provide:Nr,useValue:0},oI(()=>{let n=M(Be$2);return n.get(db,Promise.resolve()).then(()=>new Promise(r=>{let i=n.get(G$2),o=n.get(fi$1);Pt(i,()=>{r(!0)}),n.get(Ut).afterPreactivation=()=>(r(!0),o.closed?Hy(void 0):o),i.initialNavigation()}))})])}function gi$1(){return Qe(3,[oI(()=>{M(G$2).setUpLocationChangeListener()}),{provide:Nr,useValue:2}])}var vi$1=new V$2(``);function mi$1(t){return Qe(0,[{provide:vi$1,useExisting:ui$1},{provide:We,useExisting:t}])}function yi$1(t={}){return Qe(8,[{provide:Ve,useFactory:()=>new Hn$1(t,M(br,{optional:!0}))}])}function Ri$1(t){Nt$3(`NgRouterViewTransitions`);return Qe(9,[{provide:Er,useValue:ii$1},{provide:Ar,useValue:q$3({skipNextTransition:!!t?.skipInitialTransition},t)}])}var Si$1=[Lg,{provide:ne,useClass:K$1},G$2,re,{provide:V$1,useFactory:di$1},_t$1];var ts=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[Si$1,[],{provide:fe,multi:!0,useValue:e},[],r?.errorHandler?{provide:Mr,useValue:r.errorHandler}:[],{provide:ie,useValue:r||{}},r?.useHash?ns():is(),rs(),r?.preloadingStrategy?mi$1(r.preloadingStrategy).ɵproviders:[],r?.initialNavigation?os(r):[],r?.bindToComponentInputs?yi$1(typeof r.bindToComponentInputs==`object`?r.bindToComponentInputs:{}).ɵproviders:[],r?.enableViewTransitions?Ri$1().ɵproviders:[],ss()]}}static forChild(e){return{ngModule:t,providers:[{provide:fe,multi:!0,useValue:e}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=Rl({type:t});static ɵinj=Qi$1({})}return t})();function rs(){return{provide:li$1,useFactory:()=>{let t=M(H3),n=M(ie);return n.scrollOffset&&t.setOffset(n.scrollOffset),new Xo(n)}}}function ns(){return{provide:Gr,useClass:mb}}function is(){return{provide:Gr,useClass:Fg}}function os(t){return[t.initialNavigation===`disabled`?gi$1().ɵproviders:[],t.initialNavigation===`enabledBlocking`?pi$1().ɵproviders:[]]}var Tr=new V$2(``);function ss(){return[{provide:Tr,useFactory:hi$1},{provide:Hm,multi:!0,useExisting:Tr}]}function V(i){return Error(`Unable to find icon with the name "${i}"`)}function X(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var a=class{url;svgText;options;svgElement=null;constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}};var K=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new a(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(Ce$3.HTML,n);if(!r)throw Y(n);let s=dn(r);return this._addSvgIconConfig(t,e,new a(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(Ce$3.HTML,e);if(!o)throw Y(e);let r=dn(o);return this._addSvgIconSetConfig(t,new a(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Ce$3.RESOURCE_URL,t);if(!e)throw q(t);let n=this._cachedIconsByUrl.get(e);return n?Hy(C(n)):this._loadSvgIconFromConfig(new a(t,null)).pipe(C0(o=>this._cachedIconsByUrl.set(e,o)),It$3(o=>C(o)))}getNamedSvgIcon(t,e=``){let n=J(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):$y(V(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Hy(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(It$3(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return Hy(n);return n0(e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(rc(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(Ce$3.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),Hy(null)})))).pipe(It$3(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(C0(e=>t.svgText=e),It$3(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Hy(null):this._fetchIcon(t).pipe(C0(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(dn(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(dn(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw X();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(Ce$3.RESOURCE_URL,e);if(!r)throw q(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(It$3(f=>dn(f)),d0(()=>this._inProgressUrlFetches.delete(r)),sc());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Z(o)?new a(o.url,null,o.options):new a(o,null)}}static ɵfac=function(e){return new(e||i)(ae$2(_r,8),ae$2(Nr$1),ae$2(Ge$3,8),ae$2(un$1))};static ɵprov=Y$3({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C(i){return i.cloneNode(!0)}function J(i,l){return i+`:`+l}function Z(i){return!!(i.url&&i.options)}var tt$1=[`*`];var et$1=new V$2(`MAT_ICON_DEFAULT_OPTIONS`);var nt$1=new V$2(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=M(Ge$3),l=i?i.location:null;return{getPathname:()=>l?l.pathname+l.search:``}}});var G$1=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ot=G$1.map(i=>`[${i}]`).join(`, `);var rt=/^url\(['"]?#(.*?)['"]?\)$/;var wt=(()=>{class i{_elementRef=M(nr$1);_iconRegistry=M(K);_location=M(nt$1);_errorHandler=M(un$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ee$2.EMPTY;constructor(){let t=M(new wg(`aria-hidden`),{optional:!0}),e=M(et$1,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ot),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$1.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(rt):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(yr$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=JC({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(Um(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),tw(n.color?`mat-`+n.color:``),sg(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,ab],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:tt$1,decls:1,vars:0,template:function(e,n){e&1&&(jI(),BI(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var yt$1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Rl({type:i});static ɵinj=Qi$1({imports:[Nt$2]})}return i})();function Hn(n,a){if(n&1&&(Ys(0,`a`,6),fw(1),Bl(),Gm(2,`br`)),n&2){let e=a.$implicit;zm(`routerLink`,mw(e.route)),vE(),pg(e.label)}}function Vn(n,a){if(n&1&&(Ys(0,`p`),wI(1,Hn,3,3,null,null,CI),Bl()),n&2){let e=a.$implicit;vE(),bI(e)}}function jn(n,a){if(n&1&&(Ys(0,`div`,1)(1,`div`,3)(2,`div`,4),wI(3,Vn,3,0,`p`,null,CI),Bl()(),Ys(5,`div`,2),Gm(6,`p`,5),Bl()()),n&2){let e=FI();vE(3),bI(e.columns),vE(3),zm(`innerHTML`,e.body,_v)}}function Qn(n,a){if(n&1&&(Ys(0,`div`,2),Gm(1,`p`,5),Bl()),n&2){let e=FI();vE(),zm(`innerHTML`,e.body,_v)}}var Ge=class n{columns=[];body=``;DunderLabApp=b;static ɵfac=function(e){return new(e||n)};static ɵcmp=JC({type:n,selectors:[[`app-footer-layout`]],inputs:{columns:`columns`,body:`body`},decls:3,vars:1,consts:[[1,`padding-small`,`padding-top-small`,`container-10`],[1,`grid`,`grid-responsive-auto-300`,`content-center`],[1,`justify-right`],[1,`justify-left`],[1,`grid`,`grid-responsive-auto-300`],[3,`innerHTML`],[`matButton`,``,1,`undecorated-link`,3,`routerLink`]],template:function(e,t){e&1&&(Ys(0,`footer`,0),vI(1,jn,7,1,`div`,1)(2,Qn,2,1,`div`,2),Bl()),e&2&&(vE(),EI(t.columns.length>0?1:2))},dependencies:[pr$1,br$1,ci$1],styles:[`footer[_ngcontent-%COMP%]{margin-bottom:var(--%NS%safe-bottom);margin-top:var(--%NS%footer-margin-top);background-color:var(--%NS%footer-background-color)}`]})};var $n=[`*`,[[`mat-toolbar-row`]]];var Wn=[`*`,`mat-toolbar-row`];var Gn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Ol({type:n,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return n})();var Tn=(()=>{class n{_elementRef=M(nr$1);_platform=M(p$2);_document=M(Ge$3);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[`mat-toolbar`]],contentQueries:function(t,i,o){if(t&1&&Jm(o,Gn,5),t&2){let l;HI(l=$I())&&(i._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(t,i){t&2&&(tw(i.color?`mat-`+i.color:``),sg(`mat-toolbar-multiple-rows`,i._toolbarRows.length>0)(`mat-toolbar-single-row`,i._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:Wn,decls:2,vars:0,template:function(t,i){t&1&&(jI($n),BI(0),BI(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var Mn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({imports:[Nt$2]})}return n})();var Kn=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var Zn=[`mat-icon, [matMenuItemIcon]`,`*`];function Jn(n,a){n&1&&(Xf(),Ys(0,`svg`,2),Gm(1,`polygon`,3),Bl())}var ei=[`*`];function ti(n,a){if(n&1){let e=AI();Vl(0,`div`,0),Xm(`click`,function(){Bf(e);return Vf(FI().closed.emit(`click`))})(`animationstart`,function(i){Bf(e);return Vf(FI()._onAnimationStart(i.animationName))})(`animationend`,function(i){Bf(e);return Vf(FI()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){Bf(e);return Vf(FI()._onAnimationDone(i.animationName))}),Vl(1,`div`,1),BI(2),Hl()()}if(n&2){let e=FI();tw(e._classList),sg(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Zm(`id`,e.panelId),Um(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var _t=new V$2(`MAT_MENU_PANEL`);var G=(()=>{class n{_elementRef=M(nr$1);_document=M(Ge$3);_focusMonitor=M(Ct$2);_parentMenu=M(_t,{optional:!0});_changeDetectorRef=M(xg);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new we$2;_focused=new we$2;_highlighted=!1;_triggersSubmenu=!1;constructor(){M(R).load(tn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,i){t&1&&Qm(`click`,function(l){return i._checkDisabled(l)})(`mouseenter`,function(){return i._handleMouseEnter()}),t&2&&(Um(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),sg(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,ab],disableRipple:[2,`disableRipple`,`disableRipple`,ab]},exportAs:[`matMenuItem`],ngContentSelectors:Zn,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,i){t&1&&(jI(Kn),BI(0),Ys(1,`span`,0),BI(2,1),Bl(),Gm(3,`div`,1),vI(4,Jn,2,0,`:svg:svg`,2)),t&2&&(vE(3),zm(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),vE(),EI(i._triggersSubmenu?4:-1))},dependencies:[Fi$2],encapsulation:2})}return n})();var ni=new V$2(`MatMenuContent`);var ii=new V$2(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ht=`_mat-menu-enter`;var Ye=`_mat-menu-exit`;var ae=(()=>{class n{_elementRef=M(nr$1);_changeDetectorRef=M(xg);_injector=M(Be$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=K$3();_allItems;_directDescendantItems=new Fs;_classList={};_panelAnimationState=`void`;_animationDone=new we$2;_isAnimating=xr(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=q$3({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new jt$2;close=this.closed;panelId=M(Bt$1).getId(`mat-menu-panel-`);constructor(){let e=M(ii);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Pt$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(D0(this._directDescendantItems),v0(e=>r0(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(D0(this._directDescendantItems),v0(t=>r0(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:je$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Yv(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=se$1(q$3({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ye;(t||e===ht)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ht||e===Ye)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ye),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ht:Ye)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(D0(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[`mat-menu`]],contentQueries:function(t,i,o){if(t&1&&Jm(o,ni,5)(o,G,5)(o,G,4),t&2){let l;HI(l=$I())&&(i.lazyContent=l.first),HI(l=$I())&&(i._allItems=l),HI(l=$I())&&(i.items=l)}},viewQuery:function(t,i){if(t&1&&eg(jr,5),t&2){let o;HI(o=$I())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(t,i){t&2&&Um(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,ab],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:ab(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Ew([{provide:_t,useExisting:n}])],ngContentSelectors:ei,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,i){t&1&&(jI(),Bm(0,ti,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})();var ai=new V$2(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=M(Be$2);return()=>Nt$1(n)}});var ye=new WeakMap;var oi=(()=>{class n{_canHaveBackdrop;_element=M(nr$1);_viewContainerRef=M(Ur);_menuItemInstance=M(G,{optional:!0,self:!0});_dir=M(Vn$2,{optional:!0});_focusMonitor=M(Ct$2);_ngZone=M(Te$2);_injector=M(Be$2);_scrollStrategy=M(ai);_changeDetectorRef=M(xg);_animationsDisabled=K$3();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ee$2.EMPTY;_menuCloseSubscription=Ee$2.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=M(_t,{optional:!0});this._parentMaterialMenu=t instanceof ae?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ye.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=ye.get(t);ye.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),l=o.getConfig(),M=l.positionStrategy;this._setPosition(t,M),this._canHaveBackdrop?l.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:l.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof ae&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(E0(t.close)).subscribe(()=>{M.withLockedPosition(!1).reapplyLastPosition(),M.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof ae&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(yr$1(1)).subscribe(()=>{t.detach(),ye.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ye.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=qt(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof ae&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new N({positionStrategy:Ut$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX===`start`?`after`:`before`,l=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,l)})})}_setPosition(e,t){let[i,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[l,M]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[L,F]=[l,M],[ce,rt]=[i,o],xe=0;if(this._triggersSubmenu()){if(rt=i=e.xPosition===`before`?`start`:`end`,o=ce=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let St=this._parentMaterialMenu.items.first;this._parentInnerPadding=St?St._getHostElement().offsetTop:0}xe=l===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(L=l===`top`?`bottom`:`top`,F=M===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:L,overlayX:ce,overlayY:l,offsetY:xe},{originX:o,originY:L,overlayX:rt,overlayY:l,offsetY:xe},{originX:i,originY:F,overlayX:ce,overlayY:M,offsetY:-xe},{originX:o,originY:F,overlayX:rt,overlayY:M,offsetY:-xe}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return r0(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Hy(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(io$1(l=>this._menuOpen&&l!==this._menuItemInstance)):Hy(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new u(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ye.get(e)===this}_triggerIsAriaDisabled(){return ab(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){yC()};static ɵdir=Ol({type:n})}return n})();var Ue=(()=>{class n extends oi{_cleanupTouchstart;_hoverSubscription=Ee$2.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new jt$2;onMenuOpen=this.menuOpened;menuClosed=new jt$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=M(Oo$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Y$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){$(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=Ol({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&Qm(`click`,function(l){return i._handleClick(l)})(`mousedown`,function(l){return i._handleMousedown(l)})(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&Um(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Fm]})}return n})();var Ke=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({imports:[on,le$1,Nt$2,Dt$1]})}return n})();function ri(n,a){if(n&1){let e=AI();Ys(0,`div`,1)(1,`button`,2),Qm(`click`,function(){Bf(e);return Vf(FI().themeService.setThemeMode(`light`))}),Ys(2,`mat-icon`),fw(3,`light_mode`),Bl()(),Ys(4,`button`,3),Qm(`click`,function(){Bf(e);return Vf(FI().themeService.setThemeMode(`dark`))}),Ys(5,`mat-icon`),fw(6,`dark_mode`),Bl()()()}if(n&2){let e=FI();ig(`position`,e.position)(`top`,e.top,`px`)(`right`,e.right,`px`),vE(),ig(`display`,e.themeService.mode()===`dark`?`flex`:`none`),vE(3),ig(`display`,e.themeService.mode()===`dark`?`none`:`flex`)}}function si(n,a){if(n&1){let e=AI();Ys(0,`button`,4),Qm(`click`,function(){Bf(e);return Vf(FI().themeService.setThemeMode(`light`))}),Ys(1,`mat-icon`),fw(2,`light_mode`),Bl(),Ys(3,`span`),fw(4,`Light mode`),Bl()(),Ys(5,`button`,5),Qm(`click`,function(){Bf(e);return Vf(FI().themeService.setThemeMode(`dark`))}),Ys(6,`mat-icon`),fw(7,`dark_mode`),Bl(),Ys(8,`span`),fw(9,`Dark mode`),Bl()()}if(n&2){let e=FI();ig(`display`,e.themeService.mode()===`dark`?`flex`:`none`),vE(5),ig(`display`,e.themeService.mode()===`dark`?`none`:`flex`)}}var Ce=class n{constructor(a){this.themeService=a}themeService;mode=`button`;top=8;right=24;position=`initial`;static ɵfac=function(e){return new(e||n)(kt$1(uy))};static ɵcmp=JC({type:n,selectors:[[`app-theme-switcher`]],inputs:{mode:`mode`,top:`top`,right:`right`,position:`position`},decls:2,vars:1,consts:[[1,`theme-switcher`,3,`position`,`top`,`right`],[1,`theme-switcher`],[`matIconButton`,``,`id`,`mode-light`,1,`mode-button`,3,`click`],[`matIconButton`,``,`id`,`mode-dark`,1,`mode-button`,3,`click`],[`mat-menu-item`,``,`id`,`mode-light`,3,`click`],[`mat-menu-item`,``,`id`,`mode-dark`,3,`click`]],template:function(e,t){e&1&&vI(0,ri,7,10,`div`,0)(1,si,10,4),e&2&&EI(t.mode===`button`?0:t.mode===`menu`?1:-1)},dependencies:[yt$1,wt,pr$1,jn$2,G],styles:[`.theme-switcher[_ngcontent-%COMP%]{border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;z-index:1000}.mode-button[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}`]})};var Ze=class n{slots=new Map;pending=new Map;_dynamicMenuItems=xr([]);dynamicMenuItems=Ow(()=>this._dynamicMenuItems());register(a,e){this.slots.set(a,e);let t=this.pending.get(a);t&&(t.forEach(i=>i()),this.pending.delete(a))}insert(a,e,t){let i=()=>{let o=this.slots.get(a);if(!o)return;o.clear();let l=o.createComponent(e);if(t?.inputs&&Object.assign(l.instance,t.inputs),t?.outputs)for(let[M,L]of Object.entries(t.outputs)){let F=l.instance[M];if(F?.subscribe)F.subscribe(L);else throw new Error(`${M} is not an EventEmitter`)}};if(!this.slots.has(a)){this.pending.has(a)||this.pending.set(a,[]),this.pending.get(a).push(i);return}i()}clear(a){this.slots.get(a)?.clear()}setMenu(a){this._dynamicMenuItems.set(a)}clearMenu(){this._dynamicMenuItems.set([])}static ɵfac=function(e){return new(e||n)};static ɵprov=Y$3({token:n,factory:n.ɵfac,providedIn:`root`})};var li=[`scrollTitle`];var ci=[`startSlot`];var mi=[`centerSlot`];var di=[`endSlot`];var ui=[[[``,`slot`,`start`]],[[``,`slot`,`center`]],[[``,`slot`,`end`]]];var bi=[`[slot=start]`,`[slot=center]`,`[slot=end]`];var pi=(n,a)=>a.label;function hi(n,a){if(n&1){let e=AI();Ys(0,`button`,12),Qm(`click`,function(i){Bf(e);return Vf(FI().toggleDrawerAction(i))}),Ys(1,`mat-icon`),fw(2,` menu `),Bl()()}if(n&2)sg(`sticky_float`,FI().stickyFloat())}function _i(n,a){if(n&1&&(Ys(0,`button`,13)(1,`mat-icon`),fw(2),Bl()()),n&2){let e=FI();sg(`sticky_float`,e.stickyFloat()),zm(`routerLink`,e.buttonDrawerRoute),vE(2),pg(e.buttonDrawerIcon)}}function fi(n,a){n&1&&Gm(0,`app-logo`,8)}function gi(n,a){}function vi(n,a){}function yi(n,a){}function Ci(n,a){if(n&1&&(Ys(0,`mat-icon`),fw(1),Bl()),n&2){let e=FI(2).$implicit;vE(),pg(e.icon)}}function xi(n,a){if(n&1&&(Ys(0,`button`,16),vI(1,Ci,2,1,`mat-icon`),Ys(2,`span`),fw(3),Bl()()),n&2){let e=FI().$implicit;zm(`routerLink`,e.path),vE(),EI(e.icon?1:-1),vE(2),pg(e.label)}}function Si(n,a){if(n&1&&(Ys(0,`mat-icon`),fw(1),Bl()),n&2){let e=FI(2).$implicit;vE(),pg(e.icon)}}function Ti(n,a){if(n&1){let e=AI();Ys(0,`button`,18),Qm(`click`,function(i){Bf(e);let o=FI().$implicit;return Vf(o.action(i))}),vI(1,Si,2,1,`mat-icon`),Ys(2,`span`),fw(3),Bl()()}if(n&2){let e=FI().$implicit;vE(),EI(e.icon?1:-1),vE(2),pg(e.label)}}function Mi(n,a){if(n&1&&(vI(0,xi,4,3,`button`,16),vI(1,Ti,4,2,`button`,17)),n&2){let e=a.$implicit;EI(e.path?0:-1),vE(),EI(e.action?1:-1)}}function ki(n,a){n&1&&Gm(0,`app-theme-switcher`,15)}function wi(n,a){if(n&1&&(Ys(0,`button`,14)(1,`mat-icon`),fw(2,`more_vert`),Bl()(),Ys(3,`mat-menu`,null,4),wI(5,Mi,2,2,null,null,pi),vI(7,ki,1,0,`app-theme-switcher`,15),Bl()),n&2){let e=zI(4),t=FI();sg(`sticky_float`,t.stickyFloat()),zm(`matMenuTriggerFor`,e),vE(5),bI(t.dynamicItems()),vE(2),EI(t.buttonThemeSwitcher?7:-1)}}var Je=class n{scrollTitle;title=``;handledTitle=``;handledTitleOpacity=xr(0);controlSticky=xr(0);background=``;buttonDrawer=!0;buttonDrawerRoute=``;buttonDrawerIcon=`menu`;brand=!0;buttonThemeSwitcher=!0;toggleDrawer=new jt$2;startSlot;centerSlot;endSlot;stickyFloat=xr(!1);toolbarService=M(Ze);dynamicItems=this.toolbarService.dynamicMenuItems;constructor(){sp(()=>{let a=this.handledTitleOpacity();if(this.scrollTitle&&this.scrollTitle.nativeElement){let e=this.scrollTitle.nativeElement;e.style.opacity=a.toString()}}),sp(()=>{let a=this.controlSticky();if(this.stickyFloat.set(a>16),a>16&&this.scrollTitle&&this.scrollTitle.nativeElement){let e=this.scrollTitle.nativeElement,t=a-16;e.style.opacity=`${1-t/15}`}})}toggleDrawerAction(a){this.toggleDrawer.emit(a)}ngAfterViewInit(){this.toolbarService.register(`START_SLOT`,this.startSlot),this.toolbarService.register(`CENTER_SLOT`,this.centerSlot),this.toolbarService.register(`END_SLOT`,this.endSlot)}static ɵfac=function(e){return new(e||n)};static ɵcmp=JC({type:n,selectors:[[`app-toolbar`]],viewQuery:function(e,t){if(e&1&&eg(li,5)(ci,5,Ur)(mi,5,Ur)(di,5,Ur),e&2){let i;HI(i=$I())&&(t.scrollTitle=i.first),HI(i=$I())&&(t.startSlot=i.first),HI(i=$I())&&(t.centerSlot=i.first),HI(i=$I())&&(t.endSlot=i.first)}},inputs:{title:`title`,handledTitle:`handledTitle`,handledTitleOpacity:`handledTitleOpacity`,controlSticky:`controlSticky`,background:`background`,buttonDrawer:`buttonDrawer`,buttonDrawerRoute:`buttonDrawerRoute`,buttonDrawerIcon:`buttonDrawerIcon`,brand:`brand`,buttonThemeSwitcher:`buttonThemeSwitcher`},outputs:{toggleDrawer:`toggleDrawer`},ngContentSelectors:bi,decls:20,vars:10,consts:[[`scrollTitle`,``],[`startSlot`,``],[`centerSlot`,``],[`endSlot`,``],[`toolbarMenu`,`matMenu`],[1,`toolbar-brand`,`flex-row`,`content-center`,`items-left`,`no-gap`],[`matIconButton`,``,3,`sticky_float`],[`matIconButton`,``,3,`routerLink`,`sticky_float`],[`width`,`40px`,1,`toolbar`],[3,`innerHTML`],[1,`mat-font-title-md`,`margin-left-small`,`bold`,`handled-title`,3,`innerHTML`],[1,`spacer`],[`matIconButton`,``,3,`click`],[`matIconButton`,``,3,`routerLink`],[`matIconButton`,``,`aria-label`,`Example icon-button with a menu`,3,`matMenuTriggerFor`],[`mode`,`menu`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`]],template:function(e,t){e&1&&(jI(ui),Ys(0,`mat-toolbar`)(1,`div`,5),vI(2,hi,3,2,`button`,6),vI(3,_i,3,4,`button`,7),vI(4,fi,1,0,`app-logo`,8),Gm(5,`span`,9)(6,`span`,10,0),Bl(),BI(8),jm(9,gi,0,0,`ng-template`,null,1,Nw),Gm(11,`span`,11),BI(12,1),jm(13,vi,0,0,`ng-template`,null,2,Nw),Gm(15,`span`,11),BI(16,2),jm(17,yi,0,0,`ng-template`,null,3,Nw),vI(19,wi,8,4),Bl()),e&2&&(ig(`background-color`,t.background),vE(),sg(`toolbar-brand`,t.brand),vE(),EI(t.buttonDrawer?2:-1),vE(),EI(t.buttonDrawerRoute?3:-1),vE(),EI(t.brand?4:-1),vE(),zm(`innerHTML`,t.title,_v),vE(),zm(`innerHTML`,t.handledTitle,_v),vE(13),EI(t.dynamicItems().length>0?19:-1))},dependencies:[Ob,Mn,Tn,yt$1,wt,Ce,v,ts,ci$1,pr$1,jn$2,Ke,ae,G,Ue],styles:[`[_nghost-%COMP%]{--%NS%mat-toolbar-container-background-color: var(--%NS%toolbar-background-color, --mat-sys-surface);--%NS%mat-icon-color: var(--%NS%mat-sys-primary);--%NS%mat-form-field-container-height: 2em;--%NS%mat-form-field-container-vertical-padding: .5em;--%NS%mat-form-field-outlined-outline-width: 1px;--%NS%mat-form-field-outlined-container-shape: .25em;--%NS%mat-form-field-outlined-outline-color: var(--%NS%mat-sys-primary)}.brand[_ngcontent-%COMP%]{margin:0 auto;margin-left:1rem;height:var(--%NS%toolbar-height);aspect-ratio:2;background-size:contain;background-position:center;background-repeat:no-repeat}mat-toolbar[_ngcontent-%COMP%]{overflow:hidden;width:100%}.toolbar-brand[_ngcontent-%COMP%]{width:var(--%NS%sidenav-width-fixed)}.handled-title[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);text-wrap:pretty}.sticky_float[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-surface-bright);box-shadow:var(--%NS%mat-sys-level2)}`]})};var yt=[`*`];var Ii=[`tabListContainer`];var Ni=[`tabList`];var Di=[`tabListInner`];var Ei=[`nextPaginator`];var Ri=[`previousPaginator`];var gt=`mdc-tab-indicator--active`;var Dn=`mdc-tab-indicator--no-transition`;var vt=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(i=>i.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}};var Pi=(()=>{class n{_elementRef=M(nr$1);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(gt);return}let i=t.getBoundingClientRect(),o=e.width/i.width,l=e.left-i.left;t.classList.add(Dn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${l}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Dn),t.classList.add(gt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(gt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement(`span`),i=this._inkBarContentElement=e.createElement(`span`);t.className=`mdc-tab-indicator`,i.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(t){return new(t||n)};static ɵdir=Ol({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,ab]}})}return n})();var En={passive:!0};var Bi=650;var Li=100;function Ai(n){let a=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:``}var Fi=(()=>{class n{_elementRef=M(nr$1);_changeDetectorRef=M(xg);_viewportRuler=M(P);_dir=M(Vn$2,{optional:!0});_ngZone=M(Te$2);_platform=M(p$2);_sharedResizeObserver=M(K$2);_injector=M(Be$2);_renderer=M(Oo$1);_animationsDisabled=K$3();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new we$2;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new we$2;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new jt$2;indexFocused=new jt$2;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),En),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),En))}ngAfterContentInit(){let e=this._dir?this._dir.change:Hy(`ltr`),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(s0(32),E0(this._destroyed)),i=this._viewportRuler.change(150).pipe(E0(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Pt$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Yv(o,{injector:this._injector}),r0(e,i,t,this._items.changes,this._itemsResized()).pipe(E0(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!=`function`?An$3:this._items.changes.pipe(D0(this._items),v0(e=>new U$2(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>t.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),y0(1),io$1(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!je$1(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e==`before`?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:l}=t.elementRef.nativeElement,M,L;this._getLayoutDirection()==`ltr`?(M=o,L=M+l):(L=this._tabListInner.nativeElement.offsetWidth-o,M=L-l);let F=this.scrollDistance,ce=this.scrollDistance+i;M<F?this.scrollDistance-=F-M:L>ce&&(this.scrollDistance+=Math.min(L-ce,M-F))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let i=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),kn$2(Bi,Li).pipe(E0(r0(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static ɵfac=function(t){return new(t||n)};static ɵdir=Ol({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,ab],selectedIndex:[2,`selectedIndex`,`selectedIndex`,cb]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var Oi=new V$2(`MAT_TABS_CONFIG`);var Ct=(()=>{class n extends Fi{_focusedItem=xr(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new sn$1(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xr(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=M(Oi,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new vt(this._items),this._items.changes.pipe(D0(null),E0(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(D0(null),E0(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(e){return this._keyManager?.activeItem===e}static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(t,i,o){if(t&1&&Jm(o,xt,5),t&2){let l;HI(l=$I())&&(i._items=l)}},viewQuery:function(t,i){if(t&1&&eg(Ii,7)(Ni,7)(Di,7)(Ei,5)(Ri,5),t&2){let o;HI(o=$I())&&(i._tabListContainer=o.first),HI(o=$I())&&(i._tabList=o.first),HI(o=$I())&&(i._tabListInner=o.first),HI(o=$I())&&(i._nextPaginator=o.first),HI(o=$I())&&(i._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(t,i){t&2&&(Um(`role`,i._getRole()),ig(`--%NS%mat-tab-header-animation-duration`,i.animationDuration),sg(`mat-mdc-tab-header-pagination-controls-enabled`,i._showPaginationControls)(`mat-mdc-tab-header-rtl`,i._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,i.stretchTabs)(`mat-primary`,i.color!==`warn`&&i.color!==`accent`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,ab],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,ab],animationDuration:[2,`animationDuration`,`animationDuration`,Ai],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,ab],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[Fm],ngContentSelectors:yt,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(t,i){t&1&&(jI(),Ys(0,`div`,5,0),Qm(`click`,function(){return i._handlePaginatorClick(`before`)})(`mousedown`,function(l){return i._handlePaginatorPress(`before`,l)})(`touchend`,function(){return i._stopInterval()}),Gm(2,`div`,6),Bl(),Ys(3,`div`,7,1),Qm(`keydown`,function(l){return i._handleKeydown(l)}),Ys(5,`div`,8,2),Qm(`cdkObserveContent`,function(){return i._onContentChanges()}),Ys(7,`div`,9,3),BI(9),Bl()()(),Ys(10,`div`,10,4),Qm(`mousedown`,function(l){return i._handlePaginatorPress(`after`,l)})(`click`,function(){return i._handlePaginatorClick(`after`)})(`touchend`,function(){return i._stopInterval()}),Gm(12,`div`,6),Bl()),t&2&&(sg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollBefore),zm(`matRippleDisabled`,i._disableScrollBefore||i.disableRipple),vE(10),sg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollAfter),zm(`matRippleDisabled`,i._disableScrollAfter||i.disableRipple))},dependencies:[Fi$2,$o$1],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return n})();var xt=(()=>{class n extends Pi{_tabNavBar=M(Ct);elementRef=M(nr$1);_focusMonitor=M(Ct$2);_destroyed=new we$2;_isActive=!1;_tabIndex=Ow(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xr(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=M(Bt$1).getId(`mat-tab-link-`);constructor(){super(),M(R).load(tn);let e=M(Kt$1,{optional:!0}),t=M(new wg(`tabindex`),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,K$3()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(E0(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(t,i){t&1&&Qm(`focus`,function(){return i._handleFocus()})(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&(Um(`aria-controls`,i._getAriaControls())(`aria-current`,i._getAriaCurrent())(`aria-disabled`,i.disabled)(`aria-selected`,i._getAriaSelected())(`id`,i.id)(`tabIndex`,i._tabIndex())(`role`,i._getRole()),sg(`mat-mdc-tab-disabled`,i.disabled)(`mdc-tab--active`,i.active))},inputs:{active:[2,`active`,`active`,ab],disabled:[2,`disabled`,`disabled`,ab],disableRipple:[2,`disableRipple`,`disableRipple`,ab],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:cb(e)],id:`id`},exportAs:[`matTabLink`],features:[Fm],ngContentSelectors:yt,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(t,i){t&1&&(jI(),Gm(0,`span`,0)(1,`div`,1),Ys(2,`span`,2)(3,`span`,3),BI(4),Bl()()),t&2&&(vE(),zm(`matRippleTrigger`,i.elementRef.nativeElement)(`matRippleDisabled`,i.rippleDisabled))},dependencies:[Fi$2],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return n})();var Rn=(()=>{class n{id=M(Bt$1).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(t,i){t&2&&Um(`aria-labelledby`,i._activeTabId)(`id`,i.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:yt,decls:1,vars:0,template:function(t,i){t&1&&(jI(),BI(0))},encapsulation:2})}return n})();var Pn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({imports:[Nt$2]})}return n})();var Hi=new V$2(`MAT_BADGE_CONFIG`);var Bn=`mat-badge-content`;var Vi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=JC({type:n,selectors:[[`ng-component`]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return n})();var Ln=(()=>{class n{_ngZone=M(Te$2);_elementRef=M(nr$1);_ariaDescriber=M(Qa);_renderer=M(Oo$1);_animationsDisabled=K$3();_idGenerator=M(Bt$1);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=M(bn$1);_document=M(Ge$3);constructor(){let e=M(Hi,{optional:!0}),t=M(R);t.load(Vi),t.load(Ot$1),this._color=e?.color||`primary`,this.overlap=e?.overlap??!0,this.position=e?.position||`above after`,this.size=e?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement(`span`),t=`mat-badge-active`;return e.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),e.setAttribute(`aria-hidden`,`true`),e.classList.add(Bn),this._animationsDisabled&&e.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??``}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Bn}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static ɵfac=function(t){return new(t||n)};static ɵdir=Ol({type:n,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(t,i){t&2&&sg(`mat-badge-overlap`,i.overlap)(`mat-badge-above`,i.isAbove())(`mat-badge-below`,!i.isAbove())(`mat-badge-before`,!i.isAfter())(`mat-badge-after`,i.isAfter())(`mat-badge-small`,i.size===`small`)(`mat-badge-medium`,i.size===`medium`)(`mat-badge-large`,i.size===`large`)(`mat-badge-hidden`,i.hidden||!i.content)(`mat-badge-disabled`,i.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,ab],disabled:[2,`matBadgeDisabled`,`disabled`,ab],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,ab]}})}return n})();var An=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rl({type:n});static ɵinj=Qi$1({imports:[An$2,Nt$2]})}return n})();var $i=(n,a)=>[...n,...a];function Wi(n,a){if(n&1){let e=AI();Ys(0,`button`,4),Qm(`click`,function(){let i=Bf(e).$implicit;return Vf(FI(3).onNavClick(i))}),Ys(1,`mat-icon`),fw(2),Bl()()}if(n&2){let e=a.$implicit,t=FI(3);zm(`matBadge`,e.badge?t.badges()[e.badge]:null),vE(2),pg(e.icon)}}function Gi(n,a){if(n&1&&wI(0,Wi,3,2,`button`,3,CI),n&2)bI(FI(2).iconItems)}function qi(n,a){if(n&1&&(Ys(0,`mat-icon`),fw(1),Bl()),n&2){let e=FI().$implicit;vE(),pg(e.icon)}}function Yi(n,a){if(n&1){let e=AI();Ys(0,`button`,7),Qm(`click`,function(){let i=Bf(e).$implicit;return Vf(FI(3).onNavClick(i))}),vI(1,qi,2,1,`mat-icon`),Ys(2,`span`),fw(3),Bl()()}if(n&2){let e=a.$implicit;vE(),EI(e.icon?1:-1),vE(2),pg(e.label)}}function Xi(n,a){if(n&1&&(Ys(0,`button`,5)(1,`mat-icon`),fw(2,`menu`),Bl()(),Ys(3,`mat-menu`,null,0),wI(5,Yi,4,2,`button`,6,CI),Bl()),n&2){let e=zI(4),t=FI(2);zm(`matMenuTriggerFor`,e),vE(5),bI(ww(1,$i,t.items,t.iconItems))}}function Ui(n,a){if(n&1&&(vI(0,Gi,2,0),Ys(1,`div`,2),vI(2,Xi,7,4),Bl()),n&2){let e=FI();EI(e.items.length===0?0:-1),vE(2),EI(e.items.length?2:-1)}}function Ki(n,a){if(n&1){let e=AI();Ys(0,`a`,10),Qm(`click`,function(){let i=Bf(e).$implicit;return Vf(FI(2).onNavClick(i))}),fw(1),Bl()}if(n&2){let e=a.$implicit,t=FI(2);zm(`active`,t.activeNavLink===t.getNavKey(e)),vE(),Gl(` `,e.label,` `)}}function Zi(n,a){if(n&1&&(Ys(0,`nav`,8),wI(1,Ki,2,2,`a`,9,CI),Bl(),Gm(3,`mat-tab-nav-panel`,null,1)),n&2){let e=zI(4),t=FI();zm(`tabPanel`,e),vE(),bI(t.items)}}var et=class n{constructor(a,e,t){this.document=a;this.navBarService=e;this.router=t;this.navBarService.activeNavLink$.subscribe(i=>{this.activeNavLink=i[0],i[1]&&this.active.emit(i[1])}),this.navBarService.badges$.pipe(It$3(i=>Object.fromEntries(Object.entries(i).filter(([o,l])=>l!==0)))).subscribe(i=>{this.badges.set(i)})}document;navBarService;router;items=[];iconItems=[];menu=!1;active=new jt$2;activeNavLink=`/home`;badges=xr({});onNavClick(a){return rt$2(this,null,function*(){if(this.active.emit(a.label),a.route&&this.router){this.activeNavLink=a.route,yield this.router.navigateByUrl(a.route);return}a.fragment&&(this.activeNavLink=a.fragment,document.getElementById(a.fragment)?.scrollIntoView({behavior:`smooth`}))})}getNavKey(a){return a.route??a.fragment??``}static ɵfac=function(e){return new(e||n)(kt$1(Ge$3),kt$1(ly),kt$1(G$2,8))};static ɵcmp=JC({type:n,selectors:[[`app-navbar`]],inputs:{items:`items`,iconItems:`iconItems`,menu:`menu`},outputs:{active:`active`},decls:2,vars:1,consts:[[`menu`,`matMenu`],[`tabPanel`,``],[1,`menu-container`],[`matIconButton`,``,3,`matBadge`],[`matIconButton`,``,3,`click`,`matBadge`],[`matIconButton`,``,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[`mat-menu-item`,``,3,`click`],[`mat-tab-nav-bar`,``,`mat-stretch-tabs`,`false`,`mat-align-tabs`,`center`,3,`tabPanel`],[`mat-tab-link`,``,3,`active`],[`mat-tab-link`,``,3,`click`,`active`]],template:function(e,t){e&1&&vI(0,Ui,3,2)(1,Zi,5,1),e&2&&EI(t.menu?0:1)},dependencies:[Pn,Ct,Rn,xt,yt$1,wt,Ke,ae,G,Ue,pr$1,jn$2,An,Ln],styles:[`nav[_ngcontent-%COMP%]{position:sticky;top:0;padding:8px}[_nghost-%COMP%]{--%NS%mat-tab-divider-height: 0px;--%NS%mat-badge-text-size: .8rem;--%NS%mat-badge-background-color: var(--%NS%mat-sys-error)}`]})};var tt=class n{brand=xr(!1);background=xr(``);static ɵfac=function(e){return new(e||n)};static ɵprov=Y$3({token:n,factory:n.ɵfac,providedIn:`root`})};var nt=class n{getItems(){return[{label:`TIENDA`,route:`tienda`},{label:`TALLER`,route:`taller`},{label:`NOSOTROS`,route:`nosotros`},{label:`CONTACTO`,route:`contacto`}]}getIconItems(){return[{label:`CARRITO DE COMPRAS`,icon:`shopping_cart`,route:`carrito-de-compras`,badge:`shopping-cart-items`},{label:`CUENTA`,icon:`person`,route:`cliente`}]}static ɵfac=function(e){return new(e||n)};static ɵprov=Y$3({token:n,factory:n.ɵfac,providedIn:`root`})};var it=class n{getColumns(){return[[{label:`Inicio`,route:`/`},{label:`Taller`,route:`/taller`},{label:`Nosotros`,route:`/nosotros`},{label:`Contacto`,route:`/contacto`},{label:`Carrito`,route:`/carrito-de-compras`},{label:`Cliente`,route:`/cliente`}]]}getBody(){return`<b>Walrus</b>, Donde la precisión de la tecnología y el rigor de la ingeniería se encuentran con la sensibilidad del trabajo artesanal. Diseñamos y fabricamos objetos que combinan innovación digital y acabados únicos para transformar tus espacios.<br><br>Creemos en un acompañamiento tan cuidado como nuestras piezas. Ofrecemos soporte cercano y atención personalizada para garantizar que tu experiencia sea impecable de principio a fin.`}static ɵfac=function(e){return new(e||n)};static ɵprov=Y$3({token:n,factory:n.ɵfac,providedIn:`root`})};var na=[`*`];function ia(n,a){n&1&&Gm(0,`app-theme-switcher`)}function aa(n,a){if(n&1){let e=AI();Ys(0,`app-navbar`,8),Qm(`active`,function(i){Bf(e);return Vf(FI(2).activeNavbarItem.set(i))}),Bl()}if(n&2)zm(`items`,FI(2).appNavbarItems.getItems())}function oa(n,a){if(n&1&&(Ys(0,`div`,9),fw(1),Bl()),n&2){let e=FI(3);vE(),Gl(` `,e.activeNavbarItem(),` `)}}function ra(n,a){if(n&1&&vI(0,oa,2,1,`div`,9),n&2)EI(FI(2).showTitleInToolbar()?0:-1)}function sa(n,a){if(n&1){let e=AI();Ys(0,`app-navbar`,11),Qm(`active`,function(i){Bf(e);return Vf(FI(3).activeNavbarItem.set(i))}),Bl()}n&2&&zm(`menu`,!0)(`iconItems`,a)}function la(n,a){if(n&1&&vI(0,sa,1,2,`app-navbar`,10),n&2){let e;EI((e=FI(2).appNavbarItems.getIconItems())?0:-1,e)}}function ca(n,a){if(n&1){let e=AI();Ys(0,`app-navbar`,12),Qm(`active`,function(i){Bf(e);return Vf(FI(2).activeNavbarItem.set(i))}),Bl()}if(n&2){let e=FI(2);zm(`menu`,!0)(`items`,e.appNavbarItems.getItems())(`iconItems`,e.appNavbarItems.getIconItems())}}function ma(n,a){if(n&1&&(Ys(0,`app-toolbar`,0)(1,`div`,3),vI(2,ia,1,0,`app-theme-switcher`),Bl(),Ys(3,`div`,4),vI(4,aa,1,1,`app-navbar`,5)(5,ra,1,1),Bl(),Ys(6,`div`,6),vI(7,la,1,1),vI(8,ca,1,3,`app-navbar`,7),Bl()()),n&2){let e=FI();zm(`brand`,e.emptyLayoutService.brand())(`buttonDrawer`,e.showButtonDrawer())(`buttonDrawerIcon`,e.buttonDrawerIcon())(`buttonThemeSwitcher`,e.showButtonThemeSwitcher())(`background`,e.emptyLayoutService.background()),vE(2),EI(e.showButtonThemeSwitcher()?2:-1),vE(2),EI(e.navbarPosition()===`center`?4:5),vE(3),EI(e.navbarPosition()===`center`?7:-1),vE(),EI(e.navbarPosition()===`end`?8:-1)}}var Fn=[{path:``,redirectTo:`tienda`,pathMatch:`full`},{path:`home`,redirectTo:`tienda`,pathMatch:`full`},{path:`cliente`,redirectTo:`cliente/`,pathMatch:`full`},{path:``,component:class n{constructor(a,e,t,i){this.emptyLayoutService=a;this.viewportService=e;this.appNavbarItems=t;this.appFooter=i}emptyLayoutService;viewportService;appNavbarItems;appFooter;route=M(V$1);activeNavbarItem=xr(``);navbarPosition=Ow(()=>this.viewportService.isSmallDown()?`end`:`center`);showToolbar=Ow(()=>this.route.snapshot.data.showToolbar??!0);showTitleInToolbar=Ow(()=>this.route.snapshot.data.showTitleInToolbar??!0);showButtonThemeSwitcher=Ow(()=>this.route.snapshot.data.showButtonThemeSwitcher??!0);showButtonDrawer=Ow(()=>this.route.snapshot.data.showButtonDrawer??!1);buttonDrawerIcon=Ow(()=>this.route.snapshot.data.buttonDrawerIcon??`menu`);static ɵfac=function(e){return new(e||n)(kt$1(tt),kt$1(d),kt$1(nt),kt$1(it))};static ɵcmp=JC({type:n,selectors:[[`app-empty-layout`]],ngContentSelectors:na,decls:5,vars:3,consts:[[3,`brand`,`buttonDrawer`,`buttonDrawerIcon`,`buttonThemeSwitcher`,`background`],[1,`container-20`,`container-auto`],[3,`columns`,`body`],[`slot`,`start`],[`slot`,`center`],[3,`items`],[`slot`,`end`],[3,`menu`,`items`,`iconItems`],[3,`active`,`items`],[1,`navbar-title`,`mat-font-headline-sm`],[3,`menu`,`iconItems`],[3,`active`,`menu`,`iconItems`],[3,`active`,`menu`,`items`,`iconItems`]],template:function(e,t){e&1&&(jI(),vI(0,ma,9,9,`app-toolbar`,0),Ys(1,`div`,1),BI(2),Gm(3,`router-outlet`),Bl(),Gm(4,`app-footer-layout`,2)),e&2&&(EI(t.showToolbar()?0:-1),vE(4),zm(`columns`,t.appFooter.getColumns())(`body`,t.appFooter.getBody()))},dependencies:[Sr,Ge,Je,et,Ce],styles:[`[_nghost-%COMP%]{--%NS%mat-toolbar-standard-height: var(--%NS%toolbar-height);--%NS%mat-toolbar-mobile-height: var(--%NS%toolbar-height)}.navbar-title[_ngcontent-%COMP%]{position:absolute;top:.8rem;left:0;color:var(--%NS%mat-sys-primary);width:100%;text-align:center}app-footer-layout[_ngcontent-%COMP%]{display:block;position:relative}`]})},data:{showButtonThemeSwitcher:!0,showTitleInToolbar:!1},children:[{path:`tienda`,loadComponent:()=>import(`./chunk-i8JYSdrT.js`).then(n=>n.HomeComponent)},{path:`articulo/:slug`,loadComponent:()=>import(`./chunk-DfCA-UjG.js`).then(n=>n.ProductComponent)},{path:`colecciones`,loadComponent:()=>import(`./chunk-uO-IUP7A.js`).then(n=>n.CollectionsComponent)},{path:`taller`,loadComponent:()=>import(`./chunk-CkrAs3kM.js`).then(n=>n.WorkshopComponent)},{path:`nosotros`,loadComponent:()=>import(`./chunk-Bvi3sQkn.js`).then(n=>n.AboutComponent)},{path:`contacto`,loadComponent:()=>import(`./chunk-Dd2OS8v7.js`).then(n=>n.ContactComponent)},{path:`cliente/:slug`,loadComponent:()=>import(`./chunk-NKrLP_30.js`).then(n=>n.UserComponent)},{path:`carrito-de-compras`,loadComponent:()=>import(`./chunk-dQz_RzWJ.js`).then(n=>n.ShoppingCartComponent)}]}];function da(n){let a=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,``).length,i=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,`$2`))||0;return a===1?1:i===0&&e!==0&&e%1e6===0&&t===0||!(i>=0&&i<=5)?4:5}V3([`es`,[[`a. m.`,`p. m.`],void 0,[`a.\xA0m.`,`p.\xA0m.`]],void 0,[[`D`,`L`,`M`,`X`,`J`,`V`,`S`],[`dom`,`lun`,`mar`,`mié`,`jue`,`vie`,`sáb`],[`domingo`,`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`],[`DO`,`LU`,`MA`,`MI`,`JU`,`VI`,`SA`]],void 0,[[`E`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sept`,`oct`,`nov`,`dic`],[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`]],void 0,[[`a. C.`,`d. C.`],void 0,[`antes de Cristo`,`después de Cristo`]],1,[6,0],[`d/M/yy`,`d MMM y`,`d 'de' MMMM 'de' y`,`EEEE, d 'de' MMMM 'de' y`],[`H:mm`,`H:mm:ss`,`H:mm:ss z`,`H:mm:ss (zzzz)`],[`{1}, {0}`,void 0,void 0,void 0],[`,`,`.`,`;`,`%`,`+`,`-`,`E`,`×`,`‰`,`∞`,`NaN`,`:`],[`#,##0.###`,`#,##0\xA0%`,`#,##0.00\xA0¤`,`#E0`],`EUR`,`€`,`euro`,{AUD:[void 0,`$`],BRL:[void 0,`R$`],BYN:[void 0,`р.`],CAD:[void 0,`$`],CNY:[void 0,`¥`],EGP:[void 0,`EGP`],ESP:[`₧`],GBP:[void 0,`£`],HKD:[void 0,`$`],ILS:[void 0,`₪`],INR:[void 0,`₹`],JPY:[void 0,`¥`],KRW:[void 0,`₩`],MXN:[void 0,`$`],NZD:[void 0,`$`],PHP:[void 0,`₱`],RON:[void 0,`L`],THB:[`฿`],TWD:[void 0,`NT$`],USD:[`US$`,`$`],XAF:[],XCD:[void 0,`$`],XOF:[]},`ltr`,da],`es-ES`);var zn={providers:[sj({eventCoalescing:!0}),es(Fn)]};Jt$1(class n{constructor(a,e,t,i,o){this.iconRegistry=a;this.navBarService=e;this.cartService=t;this.router=i;this.backendService=o;this.iconRegistry.setDefaultFontSetClass(`material-symbols-rounded`),this.navBarService.updateBadge(`shopping-cart-items`,this.cartService.getTotalItems()),this.router.events.pipe(io$1(l=>l instanceof k)).subscribe(()=>{window.scrollTo(0,0)}),this.backendService.wakeUpServer()}iconRegistry;navBarService;cartService;router;backendService;statusIcon=Ow(()=>{switch(this.backendService.status()){case`running`:return`database`;case`waking`:return`database_search`;case`offline`:return`database_off`;default:return``}});static ɵfac=function(e){return new(e||n)(kt$1(K),kt$1(ly),kt$1(s$1),kt$1(G$2),kt$1(Et$1))};static ɵcmp=JC({type:n,selectors:[[`app-root`]],features:[Ew([{provide:Gr,useClass:mb}])],decls:4,vars:1,consts:[[`matIconButton`,``,1,`status-button`]],template:function(e,t){e&1&&(Ys(0,`button`,0)(1,`mat-icon`),fw(2),Bl()(),Gm(3,`router-outlet`)),e&2&&(vE(2),pg(t.statusIcon()))},dependencies:[Sr,yt$1,wt,pr$1,jn$2],styles:[`app-empty-layout[_ngcontent-%COMP%]{display:block}.status-button[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);position:fixed;bottom:calc(.1rem + var(--%NS%safe-bottom));left:.1rem;opacity:.15}`]})},zn).catch(n=>console.error(n));export{y as $,Kt$1 as A,bi$2 as B,Bt$1 as C,J$1 as D,Fi$2 as E,Ot$1 as F,jn$2 as G,ci$2 as H,Pt$1 as I,pr$1 as J,on as K,R as L,Ni$2 as M,Nt$2 as N,Je$1 as O,Oe$1 as P,wn$1 as Q,Rt$1 as R,$o$1 as S,Dt$2 as T,ft$1 as U,br$1 as V,je$1 as W,tn as X,sn as Y,w as Z,Z$1 as _,Dt$1 as a,u as b,N as c,Ut$1 as d,s$1 as et,le$1 as f,U$1 as g,K$2 as h,V$1 as i,Lt$1 as j,K$3 as k,Nt$1 as l,xt$1 as m,yt$1 as n,Et$1 as o,qt as p,p$2 as q,G$2 as r,Gt as s,wt as t,v as tt,P as u,a$1 as v,Ct$2 as w,d as x,l as y,Vn$2 as z};