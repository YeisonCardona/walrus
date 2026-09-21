import{$ as Nb,$n as mI,An as i0,Bn as je$1,Bt as W$1,Cn as g0,En as gr$1,Er as sb,F as HL,Fn as it$1,G as Ky,Gr as y0,H as KD,Hn as jl,In as iu,Jt as ZC,Kn as kl,Kt as YD,Ln as jD,M as Gl,Mn as ig,Mr as tr$1,N as Gm,Nn as io$1,On as h0,Or as su,P as Go$1,Pn as ip,Pt as Ur$1,Qn as mE,Qt as Zn$1,R as It$1,Sr as rp,St as Rb,T as Ee,Tn as gn,U as Ki,Ur as xo$1,Ut as Xs,V as K0,X as Lt$1,Yt as ZD,Z as M,Zt as Zl,_r as r0,an,at as Oo$1,br as rn$1,bt as R$1,cn as ca,dr as p0,dt as Pr$1,en as _r$1,er as mr$1,et as Nl,f as BL,ft as Ps,g as Cs,gt as Qe$1,h as Ce$1,ht as QI,in as ae,ir as ob,it as OL,j as Ge,jt as U,kt as Te,l as B,lr as op,m as Bl,mr as qD,mt as QD,n as $m,o as Ac,ot as PI,pr as q$1,pt as Q0,qr as ym,rt as OI,s as Ah,sn as c0,sr as ol,tr as n0,ur as os,ut as Pm,vr as rb,vt as Qg,wn as gI,wr as rt$1,wt as Ro$1,x as Dn,yn as er$1,zr as we,zt as Vy}from"./chunk-CPr0OTB1.js";var De=class{_doc;constructor(r){this._doc=r}manager};var qe=(()=>{class n extends De{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,i){return e.addEventListener(t,o,i),()=>this.removeEventListener(e,t,o,i)}removeEventListener(e,t,o,i){return e.removeEventListener(t,o,i)}static ɵfac=function(t){return new(t||n)(ae(Ge))};static ɵprov=q$1({token:n,factory:n.ɵfac})}return n})();var tt=new B(``);var xt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof qe));this._plugins=o.slice().reverse();let i=e.find(a=>a instanceof qe);i&&this._plugins.push(i)}addEventListener(e,t,o,i){return this._findPluginFor(t).addEventListener(e,t,o,i)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new R$1(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static ɵfac=function(t){return new(t||n)(ae(tt),ae(Te))};static ɵprov=q$1({token:n,factory:n.ɵfac})}return n})();var Nt=`ng-app-id`;function Vn(n){for(let r of n)r.remove()}function $n(n,r){let e=r.createElement(`style`);return e.textContent=n,e}function Xr(n,r,e,t){let o=n.head?.querySelectorAll(`style[${Nt}="${r}"],link[${Nt}="${r}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(Nt),i instanceof HTMLLinkElement?t.set(i.href.slice(i.href.lastIndexOf(`/`)+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]});return!0}function Tt(n,r){let e=r.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,n),e}var At=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,o,i={}){this.doc=e,this.appId=t,this.nonce=o,Xr(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,$n);t?.forEach(o=>this.addUsage(o,this.external,Tt))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let i=t.get(e);i?i.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(Vn(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Vn(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,$n(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,Tt(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of t.elements)i.parentNode===e?i.remove():o.push(i);t.elements=o}}addElement(e,t){return this.nonce&&t.setAttribute(`nonce`,this.nonce),e.appendChild(t)}static ɵfac=function(t){return new(t||n)(ae(Ge),ae(rp),ae(Q0,8),ae(iu))};static ɵprov=q$1({token:n,factory:n.ɵfac})}return n})();var wt={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Mt=/%COMP%/g;var Wn=`%COMP%`;var Zr=`_nghost-${Wn}`;var Yr=`_ngcontent-${Wn}`;var Jr=!0;var qr=new B(``,{factory:()=>Jr});var Qr=new B(``);function eo(n){return Yr.replace(Mt,n)}function to(n){return Zr.replace(Mt,n)}function Xn(n,r){return r.map(e=>e.replace(Mt,n))}var It=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,o,i,a,c,d=null,u=null,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=c,this.nonce=d,this.tracingService=u,this.cssVarNamespace=l??``,this.defaultRenderer=new Re(e,a,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,t);return o instanceof et?o.applyToHost(e):o instanceof Oe&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,i=o.get(t.id);if(!i){let a=this.doc,c=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,v=this.tracingService;switch(t.encapsulation){case Zn$1.Emulated:i=new et(d,u,t,this.appId,l,a,c,v,this.cssVarNamespace);break;case Zn$1.ShadowDom:return new Qe(d,e,t,a,c,this.nonce,v,this.cssVarNamespace,u);case Zn$1.ExperimentalIsolatedShadowDom:return new Qe(d,e,t,a,c,this.nonce,v,this.cssVarNamespace);default:i=new Oe(d,u,t,l,a,c,v,this.cssVarNamespace);break}o.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(t){return new(t||n)(ae(xt),ae(ym),ae(rp),ae(qr),ae(Ge),ae(Te),ae(Q0),ae(tr$1,8),ae(Qr,8))};static ɵprov=q$1({token:n,factory:n.ɵfac})}return n})();var Re=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,o,i=``){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(wt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Kn(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){if(r){let o=Kn(r)?r.content:r;if(t!=null&&t.parentNode!==o)throw new R$1(-5106,!1);o.insertBefore(e,t)}}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r==`string`?this.doc.querySelector(r):r;if(!t)throw new R$1(-5104,!1);return e||(t.textContent=``),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,o){if(o){e=o+`:`+e;let i=wt[o];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let o=wt[t];o?r.removeAttributeNS(o,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,o){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||o&(xo$1.DashCase|xo$1.Important)?r.style.setProperty(e,t,o&xo$1.Important?`important`:``):r.style[e]=t}removeStyle(r,e,t){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||t&xo$1.DashCase?r.style.removeProperty(e):r.style[e]=``}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,o){if(typeof r==`string`&&(r=ca().getGlobalEventTarget(this.doc,r),!r))throw new R$1(-5102,!1);let i=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,o)}decoratePreventDefault(r){return e=>{if(e===`__ngUnwrap__`)return r;r(e)===!1&&e.preventDefault()}}};function Kn(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var Qe=class extends Re{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,o,i,a,c,d,u){super(r,o,i,c,d),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=t.styles;l=Xn(t.id,l).map(E=>E.replace(/%NS%/g,d));for(let E of l){let T=document.createElement(`style`);a&&T.setAttribute(`nonce`,a),T.textContent=E,this.shadowRoot.appendChild(T)}let v=t.getExternalStyles?.();if(v)for(let E of v){let T=Tt(E,o);a&&T.setAttribute(`nonce`,a),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Oe=class extends Re{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,o,i,a,c,d,u){super(r,i,a,c,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let l=t.styles,v=u?Xn(u,l):l;this.styles=v.map(E=>E.replace(/%NS%/g,d)),this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Pr$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var et=class extends Oe{contentAttr;hostAttr;constructor(r,e,t,o,i,a,c,d,u){let l=o+`-`+t.id;super(r,e,t,i,a,c,d,u,l),this.contentAttr=eo(l),this.hostAttr=to(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,``)}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,``),t}};var nt=class n extends Zl{supportsDOMEvents=!0;static makeCurrent(){sb(new n)}onAndCancel(r,e,t,o){return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e===`window`?window:e===`document`?r:e===`body`?r.body:null}getBaseHref(r){let e=ro();return e==null?null:oo(e)}resetBaseElement(){ke=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Nb(document.cookie,r)}};var ke=null;function ro(){return ke=ke||document.head.querySelector(`base`),ke?ke.getAttribute(`href`):null}function oo(n){return new URL(n,document.baseURI).pathname}var Zn=[`alt`,`control`,`meta`,`shift`];var io={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var ao={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var Yn=(()=>{class n extends De{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o,i){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ca().onAndCancel(e,a.domEventName,c,i))}static parseEventName(e){let t=e.toLowerCase().split(`.`),o=t.shift();if(t.length===0||!(o===`keydown`||o===`keyup`))return null;let i=n._normalizeKey(t.pop()),a=``,c=t.indexOf(`code`);if(c>-1&&(t.splice(c,1),a=`code.`),Zn.forEach(u=>{let l=t.indexOf(u);l>-1&&(t.splice(l,1),a+=u+`.`)}),a+=i,t.length!=0||i.length===0)return null;let d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(e,t){let o=io[e.key]||e.key,i=``;return t.indexOf(`code.`)>-1&&(o=e.code,i=`code.`),o==null||!o?!1:(o=o.toLowerCase(),o===` `?o=`space`:o===`.`&&(o=`dot`),Zn.forEach(a=>{if(a!==o){let c=ao[a];c(e)&&(i+=a+`.`)}}),i+=o,i===t)}static eventCallback(e,t,o){return i=>{n.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>t(i))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(t){return new(t||n)(ae(Ge))};static ɵprov=q$1({token:n,factory:n.ɵfac})}return n})();function so(n,r,e){return rt$1(this,null,function*(){return BL(W$1({rootComponent:n},co(r,e)))})}function co(n,r){return{platformRef:r?.platformRef,appProviders:[...fo,...n?.providers??[]],platformProviders:po}}function lo(){nt.makeCurrent()}function uo(){return new an}function mo(){return jD(document),document}var po=[{provide:iu,useValue:Rb},{provide:op,useValue:lo,multi:!0},{provide:Ge,useFactory:mo}];var fo=[{provide:Ac,useValue:`root`},{provide:an,useFactory:uo},{provide:tt,useClass:qe,multi:!0},{provide:tt,useClass:Yn,multi:!0},It,{provide:ym,useClass:At},{provide:At,useExisting:ym},xt,{provide:Ro$1,useExisting:It},[]];var z=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t>0){let o=e.slice(0,t),i=e.slice(t+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:`a`})}set(r,e){return this.clone({name:r,value:e,op:`s`})}delete(r,e){return this.clone({name:r,value:e,op:`d`})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,t]of r.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let t=r.value;if(typeof t==`string`&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let o=r.op===`a`?(this.headers.get(e)||[]).slice():[];o.push(...t),this.headers.set(e,o);break;case`d`:let i=r.value;if(i===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(i)?i:[i],c=this.headers.get(e);if(!c)return;c=c.filter(d=>a.indexOf(d)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=r.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(r,o)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Ot=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var kt=class{encodeKey(r){return Jn(r)}encodeValue(r){return Jn(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function bo(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,``).split(`&`).forEach(o=>{let i=o.indexOf(`=`),[a,c]=i==-1?[r.decodeKey(o),``]:[r.decodeKey(o.slice(0,i)),r.decodeValue(o.slice(i+1))],d=e.get(a)||[];d.push(c),e.set(a,d)}),e}var go=/%(\d[a-f0-9])/gi;var vo={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function Jn(n){return encodeURIComponent(n).replace(go,(r,e)=>vo[e]??r)}function rt(n){return`${n}`}var j=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new kt,r.fromString){if(r.fromObject)throw new R$1(2805,!1);this.map=bo(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],o=Array.isArray(t)?t.map(rt):[rt(t)];this.map.set(e,o)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:`a`})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let o=r[t];Array.isArray(o)?o.forEach(i=>{e.push({param:t,value:i,op:`a`})}):e.push({param:t,value:o,op:`a`})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:`s`})}delete(r,e){return this.clone({param:r,value:e,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+`=`+this.encoder.encodeValue(t)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let e=r.op===`a`?(this.map.get(r.param)||[]).slice():[];e.push(rt(r.value)),this.map.set(r.param,e);break;case`d`:if(r.value!==void 0){let t=(this.map.get(r.param)||[]).slice(),o=t.indexOf(rt(r.value));o!==-1&&t.splice(o,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function yo(n){switch(n){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function qn(n){return typeof ArrayBuffer<`u`&&n instanceof ArrayBuffer}function Qn(n){return typeof Blob<`u`&&n instanceof Blob}function er(n){return typeof FormData<`u`&&n instanceof FormData}function _o(n){return typeof URLSearchParams<`u`&&n instanceof URLSearchParams}var Dt=`Content-Type`;var tr=`Accept`;var or=`text/plain`;var ir=`application/json`;var So=`${ir}, ${or}, */*`;var pe=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,o){this.url=e,this.method=r.toUpperCase();let i;if(yo(this.method)||o?(this.body=t!==void 0?t:null,i=o):i=t,i){if(this.reportProgress=!!i.reportProgress,this.reportUploadProgress=!!i.reportUploadProgress,this.reportDownloadProgress=!!i.reportDownloadProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout==`number`){if(i.timeout<1||!Number.isInteger(i.timeout))throw new R$1(2822,``);this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new z,this.context??=new Ot,!this.params)this.params=new j,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e,d=``,u=e.indexOf(`#`);u!==-1&&(d=e.substring(u),c=e.substring(0,u));let l=c.indexOf(`?`),v=l===-1?`?`:l<c.length-1?`&`:``;this.urlWithParams=c+v+a+d}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||qn(this.body)||Qn(this.body)||er(this.body)||_o(this.body)?this.body:this.body instanceof j?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||er(this.body)?null:Qn(this.body)?this.body.type||null:qn(this.body)?null:typeof this.body==`string`?or:this.body instanceof j?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?ir:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,o=r.responseType||this.responseType,i=r.keepalive??this.keepalive,a=r.priority||this.priority,c=r.cache||this.cache,d=r.mode||this.mode,u=r.redirect||this.redirect,l=r.credentials||this.credentials,v=r.referrer??this.referrer,E=r.integrity||this.integrity,T=r.referrerPolicy||this.referrerPolicy,H=r.transferCache??this.transferCache,A=r.timeout??this.timeout,S=r.body!==void 0?r.body:this.body,X=r.withCredentials??this.withCredentials,k=r.reportProgress??this.reportProgress,Z=r.reportUploadProgress??this.reportUploadProgress,ve=r.reportDownloadProgress??this.reportDownloadProgress,V=r.headers||this.headers,ye=r.params||this.params,_e=r.context??this.context;return r.setHeaders!==void 0&&(V=Object.keys(r.setHeaders).reduce((ne,$)=>ne.set($,r.setHeaders[$]),V)),r.setParams&&(ye=Object.keys(r.setParams).reduce((ne,$)=>ne.set($,r.setParams[$]),ye)),new n(e,t,S,{params:ye,headers:V,context:_e,reportProgress:k,reportUploadProgress:Z,reportDownloadProgress:ve,responseType:o,withCredentials:X,transferCache:H,keepalive:i,cache:c,priority:a,timeout:A,mode:d,redirect:u,credentials:l,referrer:v,integrity:E,referrerPolicy:T})}};var q=(function(n){return n[n.Sent=0]=`Sent`,n[n.UploadProgress=1]=`UploadProgress`,n[n.ResponseHeader=2]=`ResponseHeader`,n[n.DownloadProgress=3]=`DownloadProgress`,n[n.Response=4]=`Response`,n[n.User=5]=`User`,n})(q||{});var Ce=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t=`OK`){this.headers=r.headers||new z,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var Ct=class n extends Ce{constructor(r={}){super(r)}type=q.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var Pe=class n extends Ce{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=q.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var J=class extends Ce{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var Eo=200;var No=/^\)\]\}',?\n/;var wo=new B(``,{factory:()=>null});var To=(()=>{class n{fetchImpl=M(Pt,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=M(Te);destroyRef=M(it$1);maxResponseSize=M(wo);handle(e){return new U(t=>{let o=new AbortController,i=!1,a={next:d=>{d.type===q.Response&&(i=!0),t.next(d)},error:d=>{i=!0,t.error(d)},complete:()=>{i=!0,t.complete()}};this.doRequest(e,o.signal,a).then(Lt,d=>a.error(new J({error:d})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!i&&!o.signal.aborted&&o.abort()}})}doRequest(e,t,o){return rt$1(this,null,function*(){let i=this.createRequestInit(e),a;try{let S=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,W$1({signal:t},i)));xo(S),o.next({type:q.Sent}),a=yield S}catch(S){o.error(new J({error:S,status:S.status??0,statusText:S.statusText,url:e.urlWithParams,headers:S.headers}));return}let c=new z(a.headers),d=a.statusText,u=a.url||e.urlWithParams,l=a.status,v=null,E=e.reportProgress||e.reportDownloadProgress;if(E&&o.next(new Ct({headers:c,status:l,statusText:d,url:u})),a.body){let S=a.headers.get(Dt)??``,X=a.headers.get(`content-length`),k=X!==null?Number(X):NaN;this.maxResponseSize!==null&&Number.isFinite(k)&&k>this.maxResponseSize&&(yield a.body.cancel(),nr(this.maxResponseSize));let Z=[],ve=a.body.getReader(),V=0,ye,_e,ne=typeof Zone<`u`&&Zone.current,$=!1;if(yield this.ngZone.runOutsideAngular(()=>rt$1(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield ve.cancel(),$=!0;break}let{done:ft,value:ht}=yield ve.read();if(ft)break;if(Z.push(ht),V+=ht.length,this.maxResponseSize!==null&&V>this.maxResponseSize&&(yield ve.cancel(),nr(this.maxResponseSize)),E){_e=e.responseType===`text`?(_e??``)+(ye??=rr(S)).decode(ht,{stream:!0}):void 0;let on=()=>o.next({type:q.DownloadProgress,total:Number.isFinite(k)?k:void 0,loaded:V,partialText:_e});ne?ne.run(on):on()}}})),$){o.complete();return}let Wr=this.concatChunks(Z,V);try{v=this.parseBody(e,Wr,S,l)}catch(ft){o.error(new J({error:ft,headers:new z(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}l===0&&(l=v?Eo:0);let T=l>=200&&l<300,H=a.redirected,A=a.type;T?(o.next(new Pe({body:v,headers:c,status:l,statusText:d,url:u,redirected:H,responseType:A})),o.complete()):o.error(new J({error:v,headers:c,status:l,statusText:d,url:u,redirected:H,responseType:A}))})}parseBody(e,t,o,i){switch(e.responseType){case`json`:let a=new TextDecoder().decode(t).replace(No,``);if(a===``)return null;try{return JSON.parse(a)}catch(c){if(i<200||i>=300)return a;throw c}case`text`:return rr(o).decode(t);case`blob`:return new Blob([t],{type:o});case`arraybuffer`:return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new R$1(2824,!1);let t={},o;if(o=e.credentials,e.withCredentials&&(o=`include`),e.headers.forEach((i,a)=>t[i]=a.join(`,`)),e.headers.has(tr)||(t[tr]=So),!e.headers.has(Dt)){let i=e.detectContentTypeHeader();i!==null&&(t[Dt]=i)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:o,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let o=new Uint8Array(t),i=0;for(let a of e)o.set(a,i),i+=a.length;return o}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Pt=class{};function Lt(){}function xo(n){n.then(Lt,Lt)}function nr(n){throw new R$1(-2825,!1)}var Ao=/charset=\s*["']?([^;"'\s]+)["']?/i;function rr(n){let r=n.match(Ao);if(r!==null)try{return new TextDecoder(r[1])}catch(e){}return new TextDecoder}var Mo=new B(``,{factory:()=>!0});var Io=`XSRF-TOKEN`;var Do=new B(``,{factory:()=>Io});var Ro=`X-XSRF-TOKEN`;var Oo=new B(``,{factory:()=>Ro});var ko=(()=>{class n{cookieName=M(Do);doc=M(Ge);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Nb(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Co=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=q$1({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=ae(ko),o},providedIn:`root`})}return n})();function Po(n,r){if(!M(Mo)||n.method===`GET`||n.method===`HEAD`)return r(n);try{let o=M(Ur$1).href,{origin:i}=new URL(o),{origin:a}=new URL(n.url,i);if(i!==a)return r(n)}catch(o){return r(n)}let e=M(Co).getToken(),t=M(Oo);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),r(n)}function Lo(n,r){return r(n)}function Fo(n,r,e){return(t,o)=>os(e,()=>r(t,i=>n(i,o)))}var Uo=new B(``,{factory:()=>[Po]});var ar=new B(``);var Bo=new B(``,{factory:()=>!0});var jo=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=q$1({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=ae(To),o},providedIn:`root`})}return n})();var zo=(()=>{class n{backend;injector;chain=null;pendingTasks=M(su);contributeToStability=M(Bo);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let o=this.injector.get(sr,null,{skipSelf:!0}),i=o!==null&&this.backend===o,a=this.injector.get(ar,[],i?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(Uo),...a]));this.chain=c.reduceRight((d,u)=>Fo(d,u,this.injector),Lo)}let t=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();return Gl(()=>t(e,i=>this.backend.handle(i))).pipe(c0(o))}else return Gl(()=>t(e,o=>this.backend.handle(o)))}static ɵfac=function(t){return new(t||n)(ae(jo),ae(Qe$1))};static ɵprov=q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var sr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=q$1({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=ae(zo),o},providedIn:`root`})}return n})();function Rt(n,r){return W$1({body:r},n)}var Ho=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,o={}){let i;if(e instanceof pe)i=e;else{let d;o.headers instanceof z?d=o.headers:d=new z(o.headers);let u;o.params&&(o.params instanceof j?u=o.params:u=new j({fromObject:o.params})),i=new pe(e,t,o.body!==void 0?o.body:null,{headers:d,context:o.context,params:u,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||`json`,withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=Vy(i).pipe(n0(d=>this.handler.handle(d)));if(e instanceof pe||o.observe===`events`)return a;let c=a.pipe(io$1(d=>d instanceof Pe));switch(o.observe||`body`){case`body`:switch(i.responseType){case`arraybuffer`:return c.pipe(It$1(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new R$1(2806,!1);return d.body}));case`blob`:return c.pipe(It$1(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new R$1(2807,!1);return d.body}));case`text`:return c.pipe(It$1(d=>{if(d.body!==null&&typeof d.body!=`string`)throw new R$1(2808,!1);return d.body}));default:return c.pipe(It$1(d=>d.body))}case`response`:return c;default:throw new R$1(2809,!1)}}delete(e,t={}){return this.request(`DELETE`,e,t)}get(e,t={}){return this.request(`GET`,e,t)}head(e,t={}){return this.request(`HEAD`,e,t)}jsonp(e,t){return this.request(`JSONP`,e,{params:new j().append(t,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,t={}){return this.request(`OPTIONS`,e,t)}patch(e,t,o={}){return this.request(`PATCH`,e,Rt(o,t))}post(e,t,o={}){return this.request(`POST`,e,Rt(o,t))}put(e,t,o={}){return this.request(`PUT`,e,Rt(o,t))}static ɵfac=function(t){return new(t||n)(ae(sr))};static ɵprov=q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Xa=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(t){return new(t||n)(ae(Ge))};static ɵprov=q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Ft=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=q$1({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=ae(Vo),o},providedIn:`root`})}return n})();var Vo=(()=>{class n extends Ft{_doc=M(Ge);sanitize(e,t){if(t==null)return null;switch(e){case Ce$1.NONE:return t;case Ce$1.HTML:return Xs(t,`HTML`)?gn(t):Ah(this._doc,String(t)).toString();case Ce$1.STYLE:return Xs(t,`Style`)?gn(t):t;case Ce$1.SCRIPT:if(Xs(t,`Script`))return gn(t);throw new R$1(5200,!1);case Ce$1.URL:return Xs(t,`URL`)?gn(t):ol(String(t));case Ce$1.RESOURCE_URL:if(Xs(t,`ResourceURL`))return gn(t);throw new R$1(-5201,!1);default:throw new R$1(5202,!1)}}bypassSecurityTrustHtml(e){return qD(e)}bypassSecurityTrustStyle(e){return YD(e)}bypassSecurityTrustScript(e){return ZD(e)}bypassSecurityTrustUrl(e){return KD(e)}bypassSecurityTrustResourceUrl(e){return QD(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();function Le(n){return n.buttons===0||n.detail===0}function Fe(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Ut;function cr(){if(Ut==null){let n=typeof document<`u`?document.head:null;Ut=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ut}function Bt(n){if(cr()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function $o(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let r=n.shadowRoot.activeElement;if(r===n)break;n=r}return n}function O(n){if(n.composedPath)try{return n.composedPath()[0]}catch(r){}return n.target}var jt;try{jt=typeof Intl<`u`&&Intl.v8BreakIterator}catch(n){jt=!1}var w=(()=>{class n{_platformId=M(iu);isBrowser=this._platformId?Qg(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||jt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Ue;function dr(){if(Ue==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Ue=!0}))}finally{Ue=Ue||!1}return Ue}function fe(n){return dr()?n:!!n.capture}function zt(n,r=0){return lr(n)?Number(n):arguments.length===2?r:0}function lr(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function L(n){return n instanceof er$1?n.nativeElement:n}var ur=new B(`cdk-input-modality-detector-options`);var mr={ignoreKeys:[18,17,224,91,16]};var pr=650;var Ht={passive:!0,capture:!0};var fr=(()=>{class n{_platform=M(w);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new rn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=O(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<pr||(this._modality.next(Le(e)?`keyboard`:`mouse`),this._mostRecentTarget=O(e))};_onTouchstart=e=>{if(Fe(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=O(e)};constructor(){let e=M(Te),t=M(Ge),o=M(ur,{optional:!0});if(this._options=W$1(W$1({},mr),o),this.modalityDetected=this._modality.pipe(p0(1)),this.modalityChanged=this.modalityDetected.pipe(i0()),this._platform.isBrowser){let i=M(Ro$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(t,`keydown`,this._onKeydown,Ht),i.listen(t,`mousedown`,this._onMousedown,Ht),i.listen(t,`touchstart`,this._onTouchstart,Ht)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Be=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Be||{});var hr=new B(`cdk-focus-monitor-default-options`);var ot=fe({passive:!0,capture:!0});var Vt=(()=>{class n{_ngZone=M(Te);_platform=M(w);_inputModalityDetector=M(fr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=M(Ge);_stopInputModalityDetector=new we;constructor(){let e=M(hr,{optional:!0});this._detectionMode=e?.detectionMode||Be.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=O(e);for(let o=t;o;o=o.parentElement)e.type===`focus`?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=L(e);if(!this._platform.isBrowser||o.nodeType!==1)return Vy();let i=Bt(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new we,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=L(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let i=L(e);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,d])=>this._originChanged(c,t,d)):(this._setOrigin(t),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Be.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===Be.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?pr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),i=O(e);!o||!o.checkChildren&&t!==i||this._originChanged(t,this._getFocusOrigin(i),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ot),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ot)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(g0(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ot),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ot),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,i)=>{(i===e||o.checkChildren&&i.contains(e))&&t.push([i,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let i=e.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var it=new WeakMap;var Q=(()=>{class n{_appRef;_injector=M(je$1);_environmentInjector=M(Qe$1);load(e){let t=this._appRef=this._appRef||this._injector.get(Go$1),o=it.get(t);o||(o={loaders:new Set,refs:[]},it.set(t,o),t.onDestroy(()=>{it.get(t)?.refs.forEach(i=>i.destroy()),it.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(HL(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var $t=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})();var at;function Ko(){if(at===void 0&&(at=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{at=n.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return at}function Go(n){return Ko()?.createHTML(n)||n}function br(n,r,e){n.innerHTML=Go(e.sanitize(Ce$1.HTML,r)||``)}function st(n){return Array.isArray(n)?n:[n]}var gr=new Set;var ee;var ct=(()=>{class n{_platform=M(w);_nonce=M(Q0,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Xo}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Wo(e,this._nonce),this._matchMedia(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();function Wo(n,r){if(!gr.has(n))try{ee||(ee=document.createElement(`style`),r&&ee.setAttribute(`nonce`,r),ee.setAttribute(`type`,`text/css`),document.head.appendChild(ee)),ee.sheet&&(ee.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),gr.add(n))}catch(e){console.error(e)}}function Xo(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Kt=(()=>{class n{_mediaMatcher=M(ct);_zone=M(Te);_queries=new Map;_destroySubject=new we;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return vr(st(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let i=Ky(vr(st(e)).map(a=>this._registerQuery(a).observable));return i=mr$1(i.pipe(gr$1(1)),i.pipe(p0(1),r0(0))),i.pipe(It$1(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:u})=>{c.matches=c.matches||d,c.breakpoints[u]=d}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),i={observable:new U(a=>{let c=d=>this._zone.run(()=>a.next(d));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(h0(t),It$1(({matches:a})=>({query:e,matches:a})),g0(this._destroySubject)),mql:t};return this._queries.set(e,i),i}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();function vr(n){return n.map(r=>r.split(`,`)).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function Zo(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let r=0;r<n.addedNodes.length;r++)if(!(n.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<n.removedNodes.length;r++)if(!(n.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var yr=(()=>{class n{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var _r=(()=>{class n{_mutationObserverFactory=M(yr);_observedElements=new Map;_ngZone=M(Te);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=L(e);return new U(o=>{let a=this._observeElement(t).pipe(It$1(c=>c.filter(d=>!Zo(d))),io$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new we,o=this._mutationObserverFactory.create(i=>t.next(i));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:o}=this._observedElements.get(e);t&&t.disconnect(),o.complete(),this._observedElements.delete(e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Zs=(()=>{class n{_contentObserver=M(_r);_elementRef=M(er$1);event=new Lt$1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=zt(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(r0(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=kl({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,rb],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var Sr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Nl({type:n});static ɵinj=Ki({providers:[yr]})}return n})();var Yo=(()=>{class n{_platform=M(w);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return qo(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Jo(ai(e));if(t&&(Er(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),i=Er(e);return e.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!oi(e)?!1:o===`audio`?e.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return ii(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();function Jo(n){try{return n.frameElement}catch(r){return null}}function qo(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function Qo(n){let r=n.nodeName.toLowerCase();return r===`input`||r===`select`||r===`button`||r===`textarea`}function ei(n){return ni(n)&&n.type==`hidden`}function ti(n){return ri(n)&&n.hasAttribute(`href`)}function ni(n){return n.nodeName.toLowerCase()==`input`}function ri(n){return n.nodeName.toLowerCase()==`a`}function Tr(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let r=n.getAttribute(`tabindex`);return!!(r&&!isNaN(parseInt(r,10)))}function Er(n){if(!Tr(n))return null;let r=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(r)?-1:r}function oi(n){let r=n.nodeName.toLowerCase(),e=r===`input`&&n.type;return e===`text`||e===`password`||r===`select`||r===`textarea`}function ii(n){return ei(n)?!1:Qo(n)||ti(n)||n.hasAttribute(`contenteditable`)||Tr(n)}function ai(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var xr=new B(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Ar=new B(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var si=0;var ci=(()=>{class n{_ngZone=M(Te);_defaultOptions=M(Ar,{optional:!0});_liveElement;_document=M(Ge);_sanitizer=M(Ft);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=M(xr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,i,a;return t.length===1&&typeof t[0]==`number`?a=t[0]:[i,a]=t,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),a==null&&o&&(a=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:br(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),o=this._document.createElement(`div`);for(let i=0;i<t.length;i++)t[i].remove();return o.classList.add(e),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${si++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<t.length;o++){let i=t[o],a=i.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&i.setAttribute(`aria-owns`,a+` `+e):i.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var W=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(W||{});var Nr=`cdk-high-contrast-black-on-white`;var wr=`cdk-high-contrast-white-on-black`;var Gt=`cdk-high-contrast-active`;var Mr=(()=>{class n{_platform=M(w);_hasCheckedHighContrastMode=!1;_document=M(Ge);_breakpointSubscription;constructor(){this._breakpointSubscription=M(Kt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return W.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(e.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return W.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return W.BLACK_ON_WHITE}return W.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Gt,Nr,wr),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===W.BLACK_ON_WHITE?e.add(Gt,Nr):t===W.WHITE_ON_BLACK&&e.add(Gt,wr)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var di=(()=>{class n{constructor(){M(Mr)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||n)};static ɵmod=Nl({type:n});static ɵinj=Ki({imports:[Sr]})}return n})();var li=200;var dt=class{_letterKeyStream=new we;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new we;selectedItem=this._selectedItem;constructor(r,e){let t=typeof e?.debounceInterval==`number`?e.debounceInterval:li;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(y0(e=>this._pressedLetters.push(e)),r0(r),io$1(()=>this._pressedLetters.length>0),It$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Ir(n,...r){return r.length?r.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var he=class{_items;_activeItemIndex=_r$1(-1);_activeItem=_r$1(null);_wrap=!1;_typeaheadSubscription=Ee.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Ps?this._itemChangesSubscription=r.changes.subscribe(t=>this._itemsChanged(t.toArray())):Cs(r)&&(this._effectRef=ip(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new we;change=new we;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new dt(e,{debounceInterval:typeof r==`number`?r:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!r[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(i<a?i:a-1,-1);break}else return;default:(o||Ir(r,`shiftKey`))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),t=typeof r==`number`?r:e.indexOf(r),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+r*t+e.length)%e.length,i=e[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let t=this._getItemsArray();if(t[r]){for(;this._skipPredicateFn(t[r]);)if(r+=e,!t[r])return;this.setActiveItem(r)}}_getItemsArray(){return Cs(this._items)?this._items():this._items instanceof Ps?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let t=r.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Wt=class extends he{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var Xt=class extends he{_origin=`program`;setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Dr=new Map;var Zt=class n{_appId=M(rp);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){this._appId!==`ng`&&(r+=this._appId);let t=Dr.get(r);return t===void 0?t=0:t++,Dr.set(r,t),`${r}${e?n._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})};var Or=` `;function ui(n,r,e){let t=ut(n,r);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),n.setAttribute(r,t.join(Or)))}function mi(n,r,e){let t=ut(n,r);e=e.trim();let o=t.filter(i=>i!==e);o.length?n.setAttribute(r,o.join(Or)):n.removeAttribute(r)}function ut(n,r){return n.getAttribute(r)?.match(/\S+/g)??[]}var kr=`cdk-describedby-message`;var lt=`cdk-describedby-host`;var Jt=0;var Jc=(()=>{class n{_platform=M(w);_document=M(Ge);_messageRegistry=new Map;_messagesContainer=null;_id=`${Jt++}`;constructor(){M(Q).load($t),this._id=M(rp)+`-`+Jt++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let i=Yt(t,o);typeof t!=`string`?(Rr(t,this._id),this._messageRegistry.set(i,{messageElement:t,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,i)||this._addMessageReference(e,i)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let i=Yt(t,o);if(this._isElementDescribedByMessage(e,i)&&this._removeMessageReference(e,i),typeof t==`string`){let a=this._messageRegistry.get(i);a&&a.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${lt}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(lt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement(`div`);Rr(o,this._id),o.textContent=e,t&&o.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Yt(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let i=0;i<t.length;i++)t[i].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(e),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=ut(e,`aria-describedby`).filter(o=>o.indexOf(kr)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);ui(e,`aria-describedby`,o.messageElement.id),e.setAttribute(lt,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,mi(e,`aria-describedby`,o.messageElement.id),e.removeAttribute(lt)}_isElementDescribedByMessage(e,t){let o=ut(e,`aria-describedby`),i=this._messageRegistry.get(t),a=i&&i.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let o=t==null?``:`${t}`.trim(),i=e.getAttribute(`aria-label`);return o?!i||i.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();function Yt(n,r){return typeof n==`string`?`${r||``}/${n}`:n}function Rr(n,r){n.id||(n.id=`${kr}-${r}-${Jt++}`)}var te;function id(){if(te==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return te=!1,te;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)te=!0;else{let n=Element.prototype.scrollTo;n?te=!/\{\s*\[native code\]\s*\}/.test(n.toString()):te=!1}}return te}function sd(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var be;var Cr=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function dd(){if(be)return be;if(typeof document!=`object`||!document)return be=new Set(Cr),be;let n=document.createElement(`input`);return be=new Set(Cr.filter(r=>(n.setAttribute(`type`,r),n.type===r))),be}var fd={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var pi=new B(`MATERIAL_ANIMATIONS`);var Pr=null;function fi(){return M(pi,{optional:!0})?.animationsDisabled||M(K0,{optional:!0})===`NoopAnimations`?`di-disabled`:(Pr??=M(ct).matchMedia(`(prefers-reduced-motion)`).matches,Pr?`reduced-motion`:`enabled`)}function ge(){return fi()!==`enabled`}function _d(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Ed(n){return n!=null&&`${n}`!=`false`}var R=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(R||{});var qt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=R.HIDDEN;constructor(r,e,t,o=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Lr=fe({passive:!0,capture:!0});var Qt=class{_events=new Map;addHandler(r,e,t,o){let i=this._events.get(e);if(i){let a=i.get(t);a?a.add(o):i.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Lr)})}removeHandler(r,e,t){let o=this._events.get(r);if(!o)return;let i=o.get(e);i&&(i.delete(t),i.size===0&&o.delete(e),o.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Lr)))}_delegateEventHandler=r=>{let e=O(r);e&&this._events.get(r.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(i=>i.handleEvent(r))})}};var je={enterDuration:225,exitDuration:150};var hi=800;var Fr=fe({passive:!0,capture:!0});var Ur=[`mousedown`,`touchstart`];var Br=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var bi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})();var ze=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qt;constructor(r,e,t,o,i){this._target=r,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=L(t)),i&&i.get(Q).load(bi)}fadeInRipple(r,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=W$1(W$1({},je),t.animation);t.centered&&(r=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||gi(r,e,o),c=r-o.left,d=e-o.top,u=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${c-a}px`,l.style.top=`${d-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(l);let v=window.getComputedStyle(l),E=v.transitionProperty,T=v.transitionDuration,H=E===`none`||T===`0s`||T===`0s, 0s`||o.width===0&&o.height===0,A=new qt(this,l,t,H);l.style.transform=`scale3d(1, 1, 1)`,A.state=R.FADING_IN,t.persistent||(this._mostRecentTransientRipple=A);let S=null;return!H&&(u||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let X=()=>{S&&(S.fallbackTimer=null),clearTimeout(Z),this._finishRippleTransition(A)},k=()=>this._destroyRipple(A),Z=setTimeout(k,u+100);l.addEventListener(`transitionend`,X),l.addEventListener(`transitioncancel`,k),S={onTransitionEnd:X,onTransitionCancel:k,fallbackTimer:Z}}),this._activeRipples.set(A,S),(H||!u)&&this._finishRippleTransition(A),A}fadeOutRipple(r){if(r.state===R.FADING_OUT||r.state===R.HIDDEN)return;let e=r.element,t=W$1(W$1({},je),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,r.state=R.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=L(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ur.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type===`mousedown`?this._onMousedown(r):r.type===`touchstart`?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Br.forEach(e=>{this._triggerElement.addEventListener(e,this,Fr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===R.FADING_IN?this._startFadeOutTransition(r):r.state===R.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=R.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=R.HIDDEN,e!==null&&(r.element.removeEventListener(`transitionend`,e.onTransitionEnd),r.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Le(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hi;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!Fe(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===R.VISIBLE||r.config.terminateOnPointerUp&&r.state===R.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Ur.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Br.forEach(e=>r.removeEventListener(e,this,Fr)),this._pointerUpEventsRegistered=!1))}};function gi(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+o*o)}var en=new B(`mat-ripple-global-options`);var Ld=(()=>{class n{_elementRef=M(er$1);_animationsDisabled=ge();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=M(Te),t=M(w),o=M(en,{optional:!0}),i=M(je$1);this._globalOptions=o||{},this._rippleRenderer=new ze(this,e,this._elementRef,t,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:W$1(W$1(W$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,W$1(W$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,W$1(W$1({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||n)};static ɵdir=kl({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,o){t&2&&ig(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var vi={capture:!0};var yi=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var tn=`mat-ripple-loader-uninitialized`;var nn=`mat-ripple-loader-class-name`;var jr=`mat-ripple-loader-centered`;var mt=`mat-ripple-loader-disabled`;var zr=(()=>{class n{_document=M(Ge);_animationsDisabled=ge();_globalRippleOptions=M(en,{optional:!0});_platform=M(w);_ngZone=M(Te);_injector=M(je$1);_eventCleanups;_hosts=new Map;constructor(){let e=M(Ro$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>yi.map(t=>e.listen(this._document,t,this._onInteraction,vi)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(tn,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(nn))&&e.setAttribute(nn,t.className||``),t.centered&&e.setAttribute(jr,``),t.disabled&&e.setAttribute(mt,``)}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(mt,``):e.removeAttribute(mt)}_onInteraction=e=>{let t=O(e);if(t instanceof HTMLElement){let o=t.closest(`[${tn}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(nn)),e.append(t);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??je.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??je.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(mt),rippleConfig:{centered:e.hasAttribute(jr),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},d=new ze(c,this._ngZone,t,this._platform,this._injector),u=!c.rippleDisabled;u&&d.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:d,hasSetUpEvents:u}),e.removeAttribute(tn)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var Hr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var _i=[`*`,[[``,`progressIndicator`,``]]];var Si=[`*`,`[progressIndicator]`];function Ei(n,r){n&1&&(jl(0,`div`,1),PI(1,1),Bl())}var Ni=new B(`MAT_BUTTON_CONFIG`);function Vr(n){return n==null?void 0:ob(n)}var rn=(()=>{class n{_elementRef=M(er$1);_ngZone=M(Te);_animationsDisabled=ge();_config=M(Ni,{optional:!0});_focusMonitor=M(Vt);_cleanupClick;_renderer=M(Oo$1);_rippleLoader=M(zr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=OL(!1,{transform:rb});constructor(){M(Q).load(Hr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||n)};static ɵdir=kl({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(t,o){t&2&&($m(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),QI(o.color?`mat-`+o.color:``),ig(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,rb],disabled:[2,`disabled`,`disabled`,rb],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,rb],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,rb],tabIndex:[2,`tabIndex`,`tabIndex`,Vr],_tabindex:[2,`tabindex`,`_tabindex`,Vr],showProgress:[1,`showProgress`]}})}return n})();var wi=(()=>{class n extends rn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Pm],ngContentSelectors:Si,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,o){t&1&&(OI(_i),Gm(0,`span`,0),PI(1),mI(2,Ei,2,0,`div`,1),Gm(3,`span`,2)(4,`span`,3)),t&2&&(mE(2),gI(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var Ti=new B(`cdk-dir-doc`,{providedIn:`root`,factory:()=>M(Ge)});var xi=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function $r(n){let r=n?.toLowerCase()||``;return r===`auto`&&typeof navigator<`u`&&navigator?.language?xi.test(navigator.language)?`rtl`:`ltr`:r===`rtl`?`rtl`:`ltr`}var Ai=(()=>{class n{get value(){return this.valueSignal()}valueSignal=_r$1(`ltr`);change=new Lt$1;constructor(){let e=M(Ti,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set($r(t||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(t){return new(t||n)};static ɵprov=Dn({token:n,factory:n.ɵfac})}return n})();var pt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Nl({type:n});static ɵinj=Ki({})}return n})();var Kr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Nl({type:n});static ɵinj=Ki({imports:[pt]})}return n})();var Mi=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Ii=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Di(n,r){n&1&&(jl(0,`div`,2),PI(1,3),Bl())}var Gr=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var fl=(()=>{class n extends rn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=Ri(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?Gr.get(this._appearance):null,i=Gr.get(e);o&&t.remove(...o),t.add(...i),this._appearance=e}static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Pm],ngContentSelectors:Ii,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,o){t&1&&(OI(Mi),Gm(0,`span`,0),PI(1),jl(2,`span`,1),PI(3,1),Bl(),PI(4,2),mI(5,Di,2,0,`div`,2),Gm(6,`span`,3)(7,`span`,4)),t&2&&(ig(`mdc-button__ripple`,!o._isFab)(`mdc-fab__ripple`,o._isFab),mE(5),gI(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function Ri(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var hl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Nl({type:n});static ɵinj=Ki({imports:[Kr,pt]})}return n})();export{di as A,so as B,Xt as C,_d as D,Zt as E,hl as F,zr as G,w as H,id as I,zt as K,j as L,fd as M,fl as N,ci as O,ge as P,pt as R,Xa as S,Zs as T,wi as U,st as V,ze as W,O as _,Fe as a,Vt as b,Ho as c,Jc as d,Kr as f,Le as g,Ld as h,Ed as i,en as j,dd as k,Hr as l,L as m,$t as n,Ft as o,Kt as p,Ai as r,Go as s,$o as t,Ir as u,Q as v,Yo as w,Wt as x,Sr as y,sd as z};