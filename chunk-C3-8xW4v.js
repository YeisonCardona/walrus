import{$n as mI,$t as _g,At as Tw,Br as ww,Bt as W,Cn as g0,Dn as gw,Dr as se,E as Ew,Et as Sb,Fr as uy,It as VI,J as Lm,Jn as kt,Jr as yw,Jt as ZC,K as LI,Kn as kl,Kr as yI,L as Ig,Lr as vI,Mn as ig,Mt as Ul,Nt as Um,On as h0,Pr as uh,Q as Mw,Qn as mE,R as It,Rn as jI,S as Dw,Sn as fw,T as Ee,Tt as SI,U as Ki$1,Un as jm,Vn as jf,Vt as Xm,W as Km,Wn as kI,Wt as Xu,X as Lt,Xt as Zi$1,Y as Lr,Yr as zm,Z as M,Zn as m0,_t as Qf,a as Ab,at as Oo,b as DI,c as Aw,en as _r,et as Nl,ft as Ps,gr as qs,hr as qm,ht as QI,ir as ob,it as OL,jn as iC,kt as Te,l as B,ln as cw,n as $m,nn as aC,on as bv,or as og,ot as PI,p as Bf,q as Ll,qt as Ym,r as $r,rt as OI,ut as Pm,vr as rb,w as EI,wn as gI,wr as rt$1,x as Dn,xn as fg,yn as er,z as Jm,zr as we,zt as Vy}from"./chunk-CPr0OTB1.js";import{A as Ld,D as Kr,E as Ir,G as hl,I as Xt,M as Q,P as Vt,R as Zt,S as Ai$1,T as Hr,U as fl,W as ge$1,X as wi$1,Y as w,b as $o,et as s,h as Z,i as V,m as U,n as yt,q as pt$1,r as G,t as wt,v as u,x as $t}from"./main-IYIUTSTV.js";import{_ as ln$1,b as sn$1,f as bi$1,h as ct$1,i as Kn,m as cn$1,s as T,t as Ae,v as oe,y as se$1}from"./chunk-B9pNQvYD.js";import{t as m}from"./chunk-CbWOfq9n.js";import{a as cn$2,c as fn$1,d as sn$2,i as Se,r as Ne,s as dn$1,t as Bt}from"./chunk-CtphjRzK.js";import{a as ni,c as si$1,i as Yt,n as To,o as oi$1,r as Y,s as pe,t as $t$1}from"./chunk-C_GrQt9h.js";import{n as p,t as a}from"./chunk-BQ00HFE9.js";var _i=[`*`];function vi(i,r){i&1&&PI(0)}var ct=(()=>{class i{_elementRef=M(er);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return i})();var mt=(()=>{class i{template=M(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[``,`cdkStepLabel`,``]]})}return i})();var X={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var bi=new B(`STEPPER_GLOBAL_OPTIONS`);var Je=(()=>{class i{_stepperOptions;_stepper=M(et);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=_r(!1);interactedStream=new Lt;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=_r(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=_r(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||yi(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=_r(null);index=_r(-1);isSelected=Aw(()=>this._stepper.selectedIndex===this.index());indicatorType=Aw(()=>{let e=this.isSelected(),t=this.completed,n=this._state()??X.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?X.ERROR:this._displayDefaultIndicatorType?!t||e?X.NUMBER:a?X.EDIT:X.DONE:t&&!e?X.DONE:t&&e?n:a&&e?X.EDIT:n});isNavigable=Aw(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=_r(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&ai(this.stepControl)}constructor(){let e=M(bi,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),Ci(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`cdk-step`]],contentQueries:function(t,n,a){if(t&1&&Xm(a,mt,5)(a,T,5),t&2){let u;LI(u=jI())&&(n.stepLabel=u.first),LI(u=jI())&&(n._childForms=u)}},viewQuery:function(t,n){if(t&1&&Jm(Lr,7),t&2){let a;LI(a=jI())&&(n.content=a.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,rb],optional:[2,`optional`,`optional`,rb],completed:[2,`completed`,`completed`,rb],hasError:[2,`hasError`,`hasError`,rb]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Xu],ngContentSelectors:_i,decls:1,vars:0,template:function(t,n){t&1&&(OI(),jm(0,vi,1,0,`ng-template`))},encapsulation:2})}return i})();var et=(()=>{class i{_dir=M(Ai$1,{optional:!0});_changeDetectorRef=M(_g);_elementRef=M(er);_destroyed=new we;_keyManager;_steps;steps=new Ps;_stepHeader;_sortedHeaders=new Ps;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=_r(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=_r(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Lt;selectedIndexChange=new Lt;_groupId=M(Zt).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(h0(this._steps),g0(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,n)=>t.index.set(n)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(h0(this._stepHeader),g0(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,n)=>t._elementRef.nativeElement.compareDocumentPosition(n._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Xt(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Vy()).pipe(h0(this._layoutDirection()),g0(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()===`rtl`?`next`:`previous`:t>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),n=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:n,selectedStep:t[e],previouslySelectedStep:t[n]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=Ir(e),n=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!t&&(n===32||n===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let n=t.stepControl;return(n?ai(n)||Si(n)||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,t=$o();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[``,`cdkStepper`,``]],contentQueries:function(t,n,a){if(t&1&&Xm(a,Je,5)(a,ct,5),t&2){let u;LI(u=jI())&&(n._steps=u),LI(u=jI())&&(n._stepHeader=u)}},inputs:{linear:[2,`linear`,`linear`,rb],selectedIndex:[2,`selectedIndex`,`selectedIndex`,ob],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return i})();function tt(i){return typeof i==`function`}function yi(i){return tt(i)?i().valid():i.valid}function ai(i){return tt(i)?i().invalid():i.invalid}function Si(i){return tt(i)?i().pending():i.pending}function Ci(i){tt(i)?i().reset():i.reset()}var ri=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki$1({imports:[pt$1]})}return i})();var wi=(i,r,e)=>({index:i,active:r,optional:e});function xi(i,r){if(i&1&&qm(0,2),i&2){let e=kI();Um(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,Ew(2,wi,e.index,e.active,e.optional))}}function Ni(i,r){if(i&1&&(qs(0,`span`,7),cw(1),Ll()),i&2){let e=kI(2);mE(),fg(e._getDefaultTextForState(e.state))}}function Mi(i,r){if(i&1&&(qs(0,`span`,8),cw(1),Ll()),i&2){let e=kI(3);mE(),fg(e._intl.completedLabel)}}function ki(i,r){if(i&1&&(qs(0,`span`,8),cw(1),Ll()),i&2){let e=kI(3);mE(),fg(e._intl.editableLabel)}}function Ii(i,r){if(i&1&&(mI(0,Mi,2,1,`span`,8)(1,ki,2,1,`span`,8),qs(2,`mat-icon`,7),cw(3),Ll()),i&2){let e=kI(2);gI(e.state===`done`?0:e.state===`edit`?1:-1),mE(3),fg(e._getDefaultTextForState(e.state))}}function Di(i,r){if(i&1&&mI(0,Ni,2,1,`span`,7)(1,Ii,4,2),i&2)gI(kI().state===`number`?0:1)}function Ti(i,r){i&1&&(qs(0,`div`,4),qm(1,9),Ll()),i&2&&(mE(),Um(`ngTemplateOutlet`,r.template))}function Fi(i,r){if(i&1&&(qs(0,`div`,4),cw(1),Ll()),i&2){let e=kI();mE(),fg(e.label)}}function Ei(i,r){if(i&1&&(qs(0,`div`,5),cw(1),Ll()),i&2){let e=kI();mE(),fg(e._intl.optionalLabel)}}function Vi(i,r){if(i&1&&(qs(0,`div`,6),cw(1),Ll()),i&2){let e=kI();mE(),fg(e.errorMessage)}}var oi=[`*`];function zi(i,r){}function Oi(i,r){if(i&1&&(PI(0),Lm(1,zi,0,0,`ng-template`,0)),i&2){let e=kI();mE(),Um(`cdkPortalOutlet`,e._portal)}}var Bi=[`animatedContainer`];var si=i=>({steps:i});var li=i=>({step:i});function Pi(i,r){i&1&&PI(0)}function Ri(i,r){if(i&1&&(qs(0,`div`,5),qm(1,9)(2,6),Ll()),i&2){let e=kI(2),t=VI(6);mE(),Um(`ngTemplateOutlet`,e.headerPrefix()),mE(),Um(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,Dw(3,si,e.steps))}}function Ai(i,r){if(i&1&&qm(0,6),i&2){let e=kI(2);Um(`ngTemplateOutlet`,VI(6))(`ngTemplateOutletContext`,Dw(2,si,e.steps))}}function Li(i,r){if(i&1&&(qs(0,`div`,10,2),qm(2,9),Ll()),i&2){let e=r.$implicit,t=r.$index,n=kI(2);QI(`mat-horizontal-stepper-content-`+n._getAnimationDirection(t)),Um(`id`,n._getStepContentId(t)),$m(`aria-labelledby`,n._getStepLabelId(t))(`inert`,n.selectedIndex===t?null:``),mE(2),Um(`ngTemplateOutlet`,e.content)}}function Hi(i,r){if(i&1&&(qs(0,`div`,3),mI(1,Ri,3,5,`div`,5)(2,Ai,1,4,`ng-container`,6),qs(3,`div`,7),vI(4,Li,3,6,`div`,8,DI),Ll()()),i&2){let e=kI();mE(),gI(e.headerPrefix()?1:2),mE(3),EI(e.steps)}}function qi(i,r){if(i&1&&qm(0,9),i&2)Um(`ngTemplateOutlet`,kI(2).headerPrefix())}function ji(i,r){if(i&1&&(qs(0,`div`,11),qm(1,6),qs(2,`div`,12,2)(4,`div`,13)(5,`div`,14),qm(6,9),Ll()()()()),i&2){let e=r.$implicit,t=r.$index,n=r.$index,a=r.$count,u=kI(2),Ce=VI(4);mE(),Um(`ngTemplateOutlet`,Ce)(`ngTemplateOutletContext`,Dw(11,li,e)),mE(),ig(`mat-stepper-vertical-line`,n!==a-1)(`mat-vertical-content-container-active`,u.selectedIndex===t),$m(`inert`,u.selectedIndex===t?null:``)(`aria-label`,u.ariaLabel),mE(2),Um(`id`,u._getStepContentId(t)),$m(`aria-labelledby`,u._getStepLabelId(t)),mE(2),Um(`ngTemplateOutlet`,e.content)}}function Qi(i,r){if(i&1&&(qs(0,`div`,4),mI(1,qi,1,1,`ng-container`,9),vI(2,ji,7,13,`div`,11,DI),Ll()),i&2){let e=kI();mE(),gI(e.headerPrefix()?1:-1),mE(),EI(e.steps)}}function $i(i,r){if(i&1){let e=SI();qs(0,`mat-step-header`,15),Km(`click`,function(){let n=jf(e).step;return Bf(n.select())})(`keydown`,function(n){jf(e);return Bf(kI()._onKeydown(n))}),Ll()}if(i&2){let e=r.step,t=kI();ig(`mat-horizontal-stepper-header`,t.orientation===`horizontal`)(`mat-vertical-stepper-header`,t.orientation===`vertical`),Um(`tabIndex`,t._getFocusIndex()===e.index()?0:-1)(`id`,t._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,t._iconOverrides)(`disableRipple`,t.disableRipple||!e.isNavigable())(`color`,e.color||t.color),$m(`role`,t.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,t.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,t.orientation===`horizontal`?t.steps.length:null)(`aria-selected`,t.orientation===`horizontal`?e.isSelected():null)(`aria-current`,t.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,t.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,t.orientation===`vertical`?e.isSelected():null)(`aria-controls`,t._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function Ui(i,r){i&1&&zm(0,`div`,17)}function Gi(i,r){if(i&1&&(qm(0,6),mI(1,Ui,1,0,`div`,17)),i&2){let e=r.$implicit,t=r.$index,n=r.$count;kI(2);Um(`ngTemplateOutlet`,VI(4))(`ngTemplateOutletContext`,Dw(3,li,e)),mE(),gI(t!==n-1?1:-1)}}function Wi(i,r){if(i&1&&(qs(0,`div`,16),vI(1,Gi,2,5,null,null,DI),Ll()),i&2){let e=r.steps;$m(`aria-label`,kI().ariaLabel),mE(),EI(e)}}var pt=(()=>{class i extends mt{static ɵfac=(()=>{let e;return function(n){return(e||(e=uh(i)))(n||i)}})();static ɵdir=kl({type:i,selectors:[[``,`matStepLabel`,``]],features:[Pm]})}return i})();var Xi=(()=>{class i{changes=new we;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(t){return new(t||i)};static ɵprov=Dn({token:i,factory:i.ɵfac})}return i})();var ut=(()=>{class i extends ct{_intl=M(Xi);_focusMonitor=M(Vt);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=M(Q);e.load(Hr),e.load($t);let t=M(_g);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof pt?null:this.label}_templateLabel(){return this.label instanceof pt?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(t,n){t&2&&(QI(`mat-`+(n.color||`primary`)),ig(`mat-step-header-empty-label`,n._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Pm],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(t,n){if(t&1&&(zm(0,`div`,0),qs(1,`div`)(2,`div`,1),mI(3,xi,1,6,`ng-container`,2)(4,Di,2,1),Ll()(),qs(5,`div`,3),mI(6,Ti,2,1,`div`,4)(7,Fi,2,1,`div`,4),mI(8,Ei,2,1,`div`,5),mI(9,Vi,2,1,`div`,6),Ll()),t&2){let a;Um(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disableRipple),mE(),QI(fw(`mat-step-icon-state-`,n.state,` mat-step-icon`)),ig(`mat-step-icon-selected`,n.selected),mE(2),gI(n.iconOverrides&&n.iconOverrides[n.state]?3:4),mE(2),ig(`mat-step-label-active`,n.active)(`mat-step-label-selected`,n.selected)(`mat-step-label-error`,n.state==`error`),mE(),gI((a=n._templateLabel())?6:n._stringLabel()?7:-1,a),mE(2),gI(n._hasOptionalLabel()?8:-1),mE(),gI(n._hasErrorLabel()?9:-1)}},dependencies:[Ld,Sb,wt],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return i})();var Ki=(()=>{class i{templateRef=M(Lr);name;static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return i})();var Zi=(()=>{class i{_template=M(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`ng-template`,`matStepContent`,``]]})}return i})();var Yi=(()=>{class i extends Je{_errorStateMatcher=M(Bt,{skipSelf:!0});_viewContainerRef=M($r);_isSelected=Ee.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(m0(()=>this._stepper.selectionChange.pipe(It(e=>e.selectedStep===this),h0(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new u(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let n=this._errorStateMatcher.isErrorState(e,t),a=!!(e&&e.invalid&&this.interacted);return n||a}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??!1,n=!!(e&&e().invalid()&&this.interacted);return t||n}static ɵfac=(()=>{let e;return function(n){return(e||(e=uh(i)))(n||i)}})();static ɵcmp=ZC({type:i,selectors:[[`mat-step`]],contentQueries:function(t,n,a){if(t&1&&Xm(a,pt,5)(a,Zi,5),t&2){let u;LI(u=jI())&&(n.stepLabel=u.first),LI(u=jI())&&(n._lazyContent=u.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[gw([{provide:Bt,useExisting:i},{provide:Je,useExisting:i}]),Pm],ngContentSelectors:oi,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(t,n){t&1&&(OI(),Lm(0,Oi,2,1,`ng-template`))},dependencies:[U],encapsulation:2})}return i})();var Ji=(()=>{class i extends et{_ngZone=M(Te);_renderer=M(Oo);_animationsDisabled=ge$1();_cleanupTransition;_isAnimating=_r(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Ps;_icons;animationDone=new Lt;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=OL(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!M(w).isBrowser;constructor(){super();let t=M(er).nativeElement.nodeName.toLowerCase();this.orientation=t===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(g0(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(g0(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(h0(null),g0(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let t=e.target;if(!t)return;let n=this.orientation===`horizontal`&&e.propertyName===`transform`&&t.classList.contains(`mat-horizontal-stepper-content-current`),a=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&t.classList.contains(`mat-vertical-content-container-active`);(n||a)&&this._animatedContainers.find(Ce=>Ce.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(t,n,a){if(t&1&&Xm(a,Yi,5)(a,Ki,5),t&2){let u;LI(u=jI())&&(n._steps=u),LI(u=jI())&&(n._icons=u)}},viewQuery:function(t,n){if(t&1&&Jm(ut,5)(Bi,5),t&2){let a;LI(a=jI())&&(n._stepHeader=a),LI(a=jI())&&(n._animatedContainers=a)}},hostVars:14,hostBindings:function(t,n){t&2&&(og(`--%NS%mat-stepper-animation-duration`,n._getAnimationDuration()),ig(`mat-stepper-horizontal`,n.orientation===`horizontal`)(`mat-stepper-vertical`,n.orientation===`vertical`)(`mat-stepper-label-position-end`,n.orientation===`horizontal`&&n.labelPosition==`end`)(`mat-stepper-label-position-bottom`,n.orientation===`horizontal`&&n.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,n.headerPosition===`bottom`)(`mat-stepper-animating`,n._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[gw([{provide:et,useExisting:i}]),Pm],ngContentSelectors:oi,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(t,n){if(t&1&&(OI(),mI(0,Pi,1,0),mI(1,Hi,6,1,`div`,3)(2,Qi,4,1,`div`,4),Lm(3,$i,1,27,`ng-template`,null,0,Mw)(5,Wi,3,1,`ng-template`,null,1,Mw)),t&2){let a;gI(n._isServer?0:-1),mE(),gI((a=n.orientation)===`horizontal`?1:a===`vertical`?2:-1)}},dependencies:[Sb,ut],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return i})();var di=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki$1({providers:[Bt],imports:[Z,ri,yt,Kr,Ji,ut,pt$1]})}return i})();function rn(i,r){if(i&1&&(qs(0,`mat-icon`,5),cw(1),Ll()),i&2){let e=kI();mE(),fg(e.prefixIcon)}}function on(i,r){if(i&1&&(qs(0,`mat-icon`,6),cw(1),Ll()),i&2){let e=kI();mE(),fg(e.suffixIcon)}}var $=class i extends pe{type=`text`;min=0;max=99999;step=1;static ɵfac=(()=>{let r;return function(t){return(r||(r=uh(i)))(t||i)}})();static ɵcmp=ZC({type:i,selectors:[[`app-input`]],inputs:{type:`type`,min:[2,`min`,`min`,ob],max:[2,`max`,`max`,ob],step:[2,`step`,`step`,ob]},features:[Pm],decls:12,vars:16,consts:[[`appearance`,`outline`],[3,`innerHTML`],[`matInput`,``,3,`type`,`min`,`max`,`step`,`errorStateMatcher`,`formControl`],[`matTextPrefix`,``],[`matTextSuffix`,``],[`matPrefix`,``],[`matSufix`,``],[1,`small`]],template:function(e,t){e&1&&(qs(0,`mat-form-field`,0),zm(1,`mat-label`,1)(2,`input`,2),iC(),zm(3,`mat-hint`,1),qs(4,`span`,3),cw(5),Ll(),qs(6,`span`,4),cw(7),Ll(),mI(8,rn,2,1,`mat-icon`,5),mI(9,on,2,1,`mat-icon`,6),qs(10,`mat-error`,7),cw(11),Ll()()),e&2&&(QI(fw(``,t.classes,` width-100`)),mE(),Um(`innerHTML`,t.label,bv),mE(),Um(`type`,t.type)(`min`,t.min)(`max`,t.max)(`step`,t.step)(`errorStateMatcher`,t.customMatcher)(`formControl`,t.customFormControl),aC(),mE(),Um(`innerHTML`,t.hint,bv),mE(2),fg(t.prefix),mE(2),fg(t.suffix),mE(),gI(t.prefixIcon?8:-1),mE(),gI(t.suffixIcon?9:-1),mE(2),fg(t.errorMessage()))},dependencies:[cn$1,se$1,sn$1,bi$1,Y,fn$1,Se,Ne,dn$1,sn$2,cn$2,Ab,ln$1,$t$1,Yt,yt,wt],encapsulation:2})};var it=class i extends pe{rows=3;static ɵfac=(()=>{let r;return function(t){return(r||(r=uh(i)))(t||i)}})();static ɵcmp=ZC({type:i,selectors:[[`app-textarea`]],inputs:{rows:`rows`},features:[Pm],decls:8,vars:8,consts:[[`appearance`,`outline`],[`matInput`,``,`rows`,`6`,3,`errorStateMatcher`,`formControl`],[1,`small`]],template:function(e,t){e&1&&(qs(0,`mat-form-field`,0)(1,`mat-label`),cw(2),Ll(),zm(3,`textarea`,1),iC(),qs(4,`mat-hint`),cw(5),Ll(),qs(6,`mat-error`,2),cw(7),Ll()()),e&2&&(QI(fw(``,t.classes,` width-100`)),mE(2),fg(t.label),mE(),Um(`errorStateMatcher`,t.customMatcher)(`formControl`,t.customFormControl),aC(),mE(2),fg(t.hint),mE(2),fg(t.errorMessage()))},dependencies:[cn$1,se$1,sn$1,bi$1,Y,fn$1,Se,Ne,dn$1,Ab,ln$1,$t$1,Yt],encapsulation:2})};var ge=[{id:`ant`,name:`Antioquia`,cities:[{id:`med`,name:`Medellín`},{id:`beg`,name:`Bello`},{id:`its`,name:`Itagüí`},{id:`env`,name:`Envigado`}]},{id:`bog`,name:`Bogotá D.C.`,cities:[{id:`bog`,name:`Bogotá`}]},{id:`val`,name:`Valle del Cauca`,cities:[{id:`cal`,name:`Cali`},{id:`pal`,name:`Palmira`},{id:`tus`,name:`Tuluá`},{id:`bus`,name:`Buga`}]},{id:`atl`,name:`Atlántico`,cities:[{id:`bar`,name:`Barranquilla`},{id:`soa`,name:`Soledad`},{id:`mal`,name:`Malambo`}]},{id:`bol`,name:`Bolívar`,cities:[{id:`car`,name:`Cartagena`},{id:`mag`,name:`Magangué`}]},{id:`san`,name:`Santander`,cities:[{id:`buc`,name:`Bucaramanga`},{id:`bar`,name:`Barrancabermeja`},{id:`pdo`,name:`Piedecuesta`}]},{id:`ris`,name:`Risaralda`,cities:[{id:`per`,name:`Pereira`},{id:`dos`,name:`Dosquebradas`}]},{id:`tol`,name:`Tolima`,cities:[{id:`iba`,name:`Ibagué`},{id:`esp`,name:`Espinal`}]}];var ht=i=>[`required`,i];var sn=()=>[`required`,`email`];var ci=()=>[`required`];var nt=class i{constructor(r,e){this.navBarService=r;this.themingService=e;this.navBarService.setNavActiveLink(``)}navBarService;themingService;validityChange=new Lt;formValuesValidated=new Lt;errorMessages=To;departamentsOptions=ge.map(r=>({label:r.name,value:r.name}));cityOptions=_r([]);reloadTrigger=_r(``);formValues=_r({name:``,email:``,phone:``,department:``,city:``,address:``,address_complement:``,neighbor:``});formValidity=_r({name:!1,email:!1,phone:!1,department:!1,city:!1,address:!1,address_complement:!1,neighbor:!1});CustomValidators=oi$1;lastEventTime=null;ngOnInit(){return rt$1(this,null,function*(){yield this.themingService.setMainTheme(),this.lastEventTime=Date.now()})}onDeptChange(r){let e=ge.find(t=>t.name===r);this.lastEventTime&&this.lastEventTime+1e3<Date.now()&&this.reloadTrigger.set(r),e?this.cityOptions.set(e.cities.map(t=>({label:t.name,value:t.name}))):this.cityOptions.set([])}updateField(r,e){this.formValues.update(t=>se(W({},t),{[r]:e})),this.formValuesValidated.emit(this.formValues())}updateValidity(r,e){if(this.formValidity()[r]!==e){this.formValidity.update(a=>se(W({},a),{[r]:e}));let n=Object.values(this.formValidity()).every(a=>a===!0);this.validityChange.emit(n)}}static ɵfac=function(e){return new(e||i)(kt(uy),kt(m))};static ɵcmp=ZC({type:i,selectors:[[`app-delivery-form`]],outputs:{validityChange:`validityChange`,formValuesValidated:`formValuesValidated`},decls:13,vars:31,consts:[[1,`grid`],[`label`,`Nombre completo del destinatario`,`sessionStorage`,`name`,`type`,`text`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[1,`grid`,`grid-responsive-auto-300`],[`label`,`Correo electrónico`,`type`,`email`,`sessionStorage`,`email`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[`label`,`Número de teléfono`,`sessionStorage`,`phone`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[`label`,`Departamento`,`sessionStorage`,`departament`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`,`options`],[`label`,`Ciudad`,`sessionStorage`,`city`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`disabled`,`errorMessages`,`options`,`reloadTrigger`],[`label`,`Dirección de entrega`,`sessionStorage`,`address`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[`label`,`Apartamento, casa, etc`,`sessionStorage`,`address`,3,`valueChange`,`validityChange`],[`label`,`Barrio`,`sessionStorage`,`address`,3,`valueChange`,`validityChange`]],template:function(e,t){e&1&&(qs(0,`div`,0)(1,`app-input`,1),Km(`valueChange`,function(a){return t.updateField(`name`,a)})(`validityChange`,function(a){return t.updateValidity(`name`,a)}),cw(2,` >`),Ll(),qs(3,`div`,2)(4,`app-input`,3),Km(`valueChange`,function(a){return t.updateField(`email`,a)})(`validityChange`,function(a){return t.updateValidity(`email`,a)}),Ll(),qs(5,`app-input`,4),Km(`valueChange`,function(a){return t.updateField(`phone`,a)})(`validityChange`,function(a){return t.updateValidity(`phone`,a)}),Ll()(),qs(6,`div`,2)(7,`app-autocomplete`,5),Km(`valueChange`,function(a){return t.onDeptChange(a)})(`valueChange`,function(a){return t.updateField(`department`,a)})(`validityChange`,function(a){return t.updateValidity(`department`,a)}),Ll(),qs(8,`app-autocomplete`,6),Km(`valueChange`,function(a){return t.updateField(`city`,a)})(`validityChange`,function(a){return t.updateValidity(`city`,a)}),Ll()(),qs(9,`app-textarea`,7),Km(`valueChange`,function(a){return t.updateField(`address`,a)})(`validityChange`,function(a){return t.updateValidity(`address`,a)}),Ll(),qs(10,`div`,2)(11,`app-input`,8),Km(`valueChange`,function(a){return t.updateField(`address_complement`,a)})(`validityChange`,function(a){return t.updateValidity(`address_complement`,a)}),Ll(),qs(12,`app-input`,9),Km(`valueChange`,function(a){return t.updateField(`neighbor`,a)})(`validityChange`,function(a){return t.updateValidity(`neighbor`,a)}),Ll()()()),e&2&&(mE(),Um(`matcher`,!0)(`validators`,Dw(22,ht,t.CustomValidators.minWords(2,`invalidName`)))(`errorMessages`,t.errorMessages),mE(3),Um(`matcher`,!0)(`validators`,yw(24,sn))(`errorMessages`,t.errorMessages),mE(),Um(`matcher`,!0)(`validators`,Dw(25,ht,t.CustomValidators.phone()))(`errorMessages`,t.errorMessages),mE(2),Um(`matcher`,!0)(`validators`,yw(27,ci))(`errorMessages`,t.errorMessages)(`options`,t.departamentsOptions),mE(),Um(`matcher`,!0)(`validators`,yw(28,ci))(`disabled`,t.cityOptions().length===0)(`errorMessages`,t.errorMessages)(`options`,t.cityOptions())(`reloadTrigger`,t.reloadTrigger),mE(),Um(`matcher`,!0)(`validators`,Dw(29,ht,t.CustomValidators.minWords(3,`invalidAddress`)))(`errorMessages`,t.errorMessages))},dependencies:[Ab,$,it,ni],encapsulation:2})};var gt=i=>[`required`,i];var ln=()=>[`required`,`email`];var ui=()=>[`required`];var at=class i{constructor(r,e){this.navBarService=r;this.themingService=e;this.navBarService.setNavActiveLink(``)}navBarService;themingService;validityChange=new Lt;formValuesValidated=new Lt;errorMessages=To;departamentsOptions=ge.map(r=>({label:r.name,value:r.name}));cityOptions=_r([]);reloadTrigger=_r(``);formValues=_r({name:``,email:``,phone:``,department:``,city:``,address:``});formValidity=_r({name:!1,email:!1,phone:!1,department:!1,city:!1,address:!1});CustomValidators=oi$1;lastEventTime=null;ngOnInit(){return rt$1(this,null,function*(){yield this.themingService.setMainTheme(),this.lastEventTime=Date.now()})}onDeptChange(r){let e=ge.find(t=>t.name===r);this.lastEventTime&&this.lastEventTime+1e3<Date.now()&&this.reloadTrigger.set(r),e?this.cityOptions.set(e.cities.map(t=>({label:t.name,value:t.name}))):this.cityOptions.set([])}updateField(r,e){this.formValues.update(t=>se(W({},t),{[r]:e})),this.formValuesValidated.emit(this.formValues())}updateValidity(r,e){if(this.formValidity()[r]!==e){this.formValidity.update(a=>se(W({},a),{[r]:e}));let n=Object.values(this.formValidity()).every(a=>a===!0);this.validityChange.emit(n)}}static ɵfac=function(e){return new(e||i)(kt(uy),kt(m))};static ɵcmp=ZC({type:i,selectors:[[`app-billing-form`]],outputs:{validityChange:`validityChange`,formValuesValidated:`formValuesValidated`},decls:11,vars:31,consts:[[1,`grid`],[`label`,`Nombre o Razón social`,`sessionStorage`,`billing-name`,`type`,`text`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[1,`grid`,`grid-responsive-auto-300`],[`label`,`Correo electrónico`,`type`,`email`,`sessionStorage`,`billing-email`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[`label`,`Número de teléfono`,`sessionStorage`,`billing-phone`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`],[`label`,`Departamento`,`sessionStorage`,`billing-departament`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`,`options`],[`label`,`Ciudad`,`sessionStorage`,`billing-city`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`disabled`,`errorMessages`,`options`,`reloadTrigger`],[`label`,`Dirección fiscal`,`sessionStorage`,`billing-address`,`type`,`text`,3,`valueChange`,`validityChange`,`matcher`,`validators`,`errorMessages`]],template:function(e,t){e&1&&(qs(0,`div`,0)(1,`app-input`,1),Km(`valueChange`,function(a){return t.updateField(`name`,a)})(`validityChange`,function(a){return t.updateValidity(`name`,a)}),cw(2,` >`),Ll(),qs(3,`div`,2)(4,`app-input`,3),Km(`valueChange`,function(a){return t.updateField(`email`,a)})(`validityChange`,function(a){return t.updateValidity(`email`,a)}),Ll(),qs(5,`app-input`,4),Km(`valueChange`,function(a){return t.updateField(`phone`,a)})(`validityChange`,function(a){return t.updateValidity(`phone`,a)}),Ll()(),qs(6,`div`,2)(7,`app-autocomplete`,5),Km(`valueChange`,function(a){return t.onDeptChange(a)})(`valueChange`,function(a){return t.updateField(`department`,a)})(`validityChange`,function(a){return t.updateValidity(`department`,a)}),Ll(),qs(8,`app-autocomplete`,6),Km(`valueChange`,function(a){return t.updateField(`city`,a)})(`validityChange`,function(a){return t.updateValidity(`city`,a)}),Ll()(),qs(9,`app-input`,7),Km(`valueChange`,function(a){return t.updateField(`address`,a)})(`validityChange`,function(a){return t.updateValidity(`address`,a)}),cw(10,` >`),Ll()()),e&2&&(mE(),Um(`matcher`,!0)(`validators`,Dw(22,gt,t.CustomValidators.minWords(2,`invalidName`)))(`errorMessages`,t.errorMessages),mE(3),Um(`matcher`,!0)(`validators`,yw(24,ln))(`errorMessages`,t.errorMessages),mE(),Um(`matcher`,!0)(`validators`,Dw(25,gt,t.CustomValidators.phone()))(`errorMessages`,t.errorMessages),mE(2),Um(`matcher`,!0)(`validators`,yw(27,ui))(`errorMessages`,t.errorMessages)(`options`,t.departamentsOptions),mE(),Um(`matcher`,!0)(`validators`,yw(28,ui))(`disabled`,t.cityOptions().length===0)(`errorMessages`,t.errorMessages)(`options`,t.cityOptions())(`reloadTrigger`,t.reloadTrigger),mE(),Um(`matcher`,!0)(`validators`,Dw(29,gt,t.CustomValidators.minWords(3,`invalidAddress`)))(`errorMessages`,t.errorMessages))},dependencies:[Ab,$,ni],encapsulation:2})};var dn=[`*`];var hi=(()=>{class i{labelPosition=`after`;static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,n){t&2&&ig(`mdc-form-field--align-end`,n.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:dn,decls:1,vars:0,template:function(t,n){t&1&&(OI(),PI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return i})();var cn=[`switch`];var mn=[`*`];function pn(i,r){i&1&&(qs(0,`span`,11),Qf(),qs(1,`svg`,13),zm(2,`path`,14),Ll(),qs(3,`svg`,15),zm(4,`path`,16),Ll()())}var un=new B(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var rt=class{source;checked;constructor(r,e){this.source=r,this.checked=e}};var ft=(()=>{class i{_elementRef=M(er);_focusMonitor=M(Vt);_changeDetectorRef=M(_g);defaults=M(un);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new rt(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ge$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Lt;toggleChange=new Lt;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){M(Q).load(Hr);let e=M(new Ig(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=M(Zt).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new rt(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,n){if(t&1&&Jm(cn,5),t&2){let a;LI(a=jI())&&(n._switchElement=a.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,n){t&2&&(Ym(`id`,n.id),$m(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),QI(n.color?`mat-`+n.color:``),ig(`mat-mdc-slide-toggle-focused`,n._focused)(`mat-mdc-slide-toggle-checked`,n.checked)(`mat-slide-toggle-full-width`,n.fullWidth)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,rb],color:`color`,disabled:[2,`disabled`,`disabled`,rb],fullWidth:[2,`fullWidth`,`fullWidth`,rb],disableRipple:[2,`disableRipple`,`disableRipple`,rb],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:ob(e)],checked:[2,`checked`,`checked`,rb],hideIcon:[2,`hideIcon`,`hideIcon`,rb],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,rb]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[gw([{provide:oe,useExisting:Zi$1(()=>i),multi:!0},{provide:ct$1,useExisting:i,multi:!0}]),Xu],ngContentSelectors:mn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,n){if(t&1&&(OI(),qs(0,`div`,1)(1,`button`,2,0),Km(`click`,function(){return n._handleClick()}),zm(3,`div`,3)(4,`span`,4),qs(5,`span`,5)(6,`span`,6)(7,`span`,7),zm(8,`span`,8),Ll(),qs(9,`span`,9),zm(10,`span`,10),Ll(),mI(11,pn,5,0,`span`,11),Ll()()(),qs(12,`label`,12),Km(`click`,function(u){return u.stopPropagation()}),PI(13),Ll()()),t&2){let a=VI(2);Um(`labelPosition`,n.labelPosition),mE(),ig(`mdc-switch--selected`,n.checked)(`mdc-switch--unselected`,!n.checked)(`mdc-switch--checked`,n.checked)(`mdc-switch--disabled`,n.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,n.disabledInteractive),Um(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`disabled`,n.disabled&&!n.disabledInteractive),$m(`id`,n.buttonId)(`name`,n.name)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n._getAriaLabelledBy())(`aria-describedby`,n.ariaDescribedby)(`aria-required`,n.required||null)(`aria-checked`,n.checked)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),mE(9),Um(`matRippleTrigger`,a)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0),mE(),gI(n.hideIcon?-1:11),mE(),Um(`for`,n.buttonId),$m(`id`,n._labelId)}},dependencies:[Ld,hi],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})();var gi=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki$1({imports:[ft,pt$1]})}return i})();var ot=class i extends pe{labelPosition=`after`;static ɵfac=(()=>{let r;return function(t){return(r||(r=uh(i)))(t||i)}})();static ɵcmp=ZC({type:i,selectors:[[`app-toggle`]],inputs:{labelPosition:`labelPosition`},features:[Pm],decls:2,vars:7,consts:[[3,`change`,`labelPosition`,`checked`,`disabled`]],template:function(e,t){e&1&&(qs(0,`mat-slide-toggle`,0),Km(`change`,function(a){return t.setValue(a.checked)}),cw(1),Ll()),e&2&&(QI(fw(``,t.classes,` width-100`)),Um(`labelPosition`,t.labelPosition)(`checked`,t.value)(`disabled`,t.disabled),mE(),Ul(` `,t.label,`
`))},dependencies:[Ab,gi,ft],encapsulation:2})};var gn=()=>[`required`];var fn=()=>[];function _n(i,r){if(i&1){let e=SI();qs(0,`div`,16),zm(1,`div`,17),qs(2,`div`,18)(3,`a`,19),Km(`click`,function(){let n=jf(e);return Bf(kI(3).reloadToProduct(n.slug))}),cw(4),Ll(),qs(5,`div`,20)(6,`button`,21),Km(`click`,function(){jf(e);let n=kI().$implicit,a=kI(2);return a.cartService.setQuantity(n.item,n.quantity-1),Bf(a.updateTotal())}),qs(7,`mat-icon`),cw(8,`remove`),Ll()(),qs(9,`span`),cw(10),Ll(),qs(11,`button`,21),Km(`click`,function(){jf(e);let n=kI().$implicit,a=kI(2);return a.cartService.setQuantity(n.item,n.quantity+1),Bf(a.updateTotal())}),qs(12,`mat-icon`),cw(13,`add`),Ll()()(),qs(14,`span`,22),cw(15),ww(16,`customCurrency`),Ll()(),qs(17,`button`,23),Km(`click`,function(){jf(e);let n=kI().$implicit,a=kI(2);return a.cartService.removeFromCart(n.item),Bf(a.updateTotal())}),qs(18,`mat-icon`),cw(19,`close`),Ll()()()}if(i&2){let e=r,t=kI().$implicit;mE(),og(`--%NS%bg-image`,`url(${e.assets.images.horizontal[0]})`),mE(3),Ul(` `,e.name,` `),mE(6),fg(t.quantity),mE(5),fg(Tw(16,5,e.price*t.quantity))}}function vn(i,r){if(i&1&&mI(0,_n,20,7,`div`,16),i&2){let e,t=r.$implicit;gI((e=kI(2).productsService.getProductByID(t.item))?0:-1,e)}}function bn(i,r){if(i&1){let e=SI();qs(0,`div`,4)(1,`app-billing-form`,8),Km(`validityChange`,function(n){jf(e);return Bf(kI(2).isFormBillingValid.set(n))})(`formValuesValidated`,function(n){jf(e);return Bf(kI(2).formBillingValues.set(n))}),Ll()()}}function yn(i,r){if(i&1){let e=SI();qs(0,`div`,1)(1,`div`)(2,`div`,3)(3,`span`,2),cw(4,`Ajusta la cantidad de artículos`),Ll(),qs(5,`div`,4),vI(6,vn,1,1,null,null,yI),zm(8,`mat-divider`),qs(9,`div`,5)(10,`span`),cw(11,`Total`),Ll(),qs(12,`span`),cw(13),ww(14,`customCurrency`),Ll()()()(),qs(15,`div`,6)(16,`span`,2),cw(17,`Datos de entrega`),Ll(),qs(18,`div`,7)(19,`app-delivery-form`,8),Km(`validityChange`,function(n){jf(e);return Bf(kI().isFormValid.set(n))})(`formValuesValidated`,function(n){jf(e);return Bf(kI().formValues.set(n))}),Ll()()(),qs(20,`div`,6)(21,`span`,2),cw(22,`Datos de facturación`),Ll(),qs(23,`div`,4)(24,`app-input`,9),Km(`valueChange`,function(n){jf(e);return Bf(kI().BillingCCValue.set(n))})(`validityChange`,function(n){jf(e);return Bf(kI().isBillingCCValid.set(n))}),Ll(),qs(25,`app-toggle`,10),Km(`valueChange`,function(n){jf(e);return Bf(kI().billingUseDelivery.set(n===`true`))}),Ll(),mI(26,bn,2,0,`div`,4),Ll()()(),qs(27,`div`,3)(28,`div`,11)(29,`span`,2),cw(30,`Resumen de compra`),Ll(),qs(31,`div`,4)(32,`div`,12)(33,`span`),cw(34),Ll(),qs(35,`span`),cw(36),ww(37,`customCurrency`),Ll()(),qs(38,`div`,12)(39,`span`),cw(40,`Envío`),Ll(),qs(41,`span`),cw(42,`Gratis`),Ll()(),zm(43,`mat-divider`),qs(44,`div`,12)(45,`span`,13),cw(46,`Total`),Ll(),qs(47,`span`,13),cw(48),ww(49,`customCurrency`),Ll()(),qs(50,`button`,14),Km(`click`,function(){jf(e);return Bf(kI().proceedPayment())}),cw(51,` Proceder con el pago `),qs(52,`mat-icon`,15),cw(53,`shopping_bag`),Ll()()()()()()}if(i&2){let e=kI();mE(6),EI(e.cartService.getCart()),mE(7),fg(Tw(14,10,e.total())),mE(11),Um(`validators`,e.billingUseDelivery()?yw(17,fn):yw(16,gn))(`matcher`,!0)(`errorMessages`,e.errorMessages),mE(),Um(`value`,e.billingUseDelivery()),mE(),gI(e.billingUseDelivery()?-1:26),mE(8),Ul(`Artículos (`,e.cartService.getTotalItems(),`)`),mE(2),fg(Tw(37,12,e.total())),mE(12),fg(Tw(49,14,e.total())),mE(2),Um(`disabled`,e.proceedPaymentDisabled())}}function Sn(i,r){i&1&&(qs(0,`span`,2),cw(1,`No hay artículos en tu carrito.`),Ll())}var fi=class i{constructor(r,e,t,n,a,u,Ce){this.cartService=r;this.productsService=e;this.navBarService=t;this.themingService=n;this.checkoutService=a;this.route=u;this.router=Ce;this.updateTotal(),this.navBarService.setNavActiveLink(`carrito-de-compras`)}cartService;productsService;navBarService;themingService;checkoutService;route;router;total=_r(0);isFormValid=_r(!1);formValues=_r({});isFormBillingValid=_r(!1);formBillingValues=_r({});billingUseDelivery=_r(!0);isBillingCCValid=_r(!1);BillingCCValue=_r(``);proceedPaymentDisabled=Aw(()=>this.billingUseDelivery()?(console.log(`isFormValid`,this.isFormValid()),!this.isFormValid()):!(this.isFormValid()&&this.isBillingCCValid()&&this.isFormBillingValid()));errorMessages=To;ngOnInit(){return rt$1(this,null,function*(){yield this.themingService.setMainTheme();let r=this.route.snapshot.queryParamMap.get(`external_reference`);r&&this.router.navigate([`/cliente`,r])})}updateTotal(){let r=0;for(let e of this.cartService.getCart()){let t=this.productsService.getProductByID(e.item);t&&(r+=t.price*e.quantity)}this.total.set(r),r===0&&this.navBarService.updateBadge(`shopping-cart-items`,0)}reloadToProduct(r){this.router.navigate([`/articulo`,r])}proceedPayment(){console.log(`isFormValid`,this.isFormValid());let r=this.formValues(),e=this.BillingCCValue()||`NO-BILL`,t=this.billingUseDelivery()?this.formValues():this.formBillingValues(),n=this.cartService.getCart();console.log(`Deliver:`,r),console.log(`Client:`,e),console.log(`Billing:`,t),console.log(`Cart:`,n);let a={shipping:r,billing:W({tax_id:e},t),items:n};this.checkoutService.getPaymentLink(a).subscribe({next:u=>{this.cartService.dropCart(),window.location.href=u.payment_url},error:u=>{console.error(`Error al generar el pago:`,u)}})}static ɵfac=function(e){return new(e||i)(kt(s),kt(a),kt(uy),kt(m),kt(si$1),kt(V),kt(G))};static ɵcmp=ZC({type:i,selectors:[[`app-shopping-cart`]],decls:4,vars:1,consts:[[1,`mat-font-display-md`,`color-primary`,`margin-top-extra-large`],[1,`margin-top-extra-large`,`grid`,`grid-responsive-2`,`gap-extra-large`,`grid-3-2_`],[1,`product-type`,`mat-font-title-lg`,`color-primary`],[1,``],[1,`margin-top-large`],[1,`flex-row`,`align-items-center`,`justify-content-end`,`margin-top-medium`],[1,`margin-top-extra-large`],[1,`margin-top-large`,`flex-column`],[3,`validityChange`,`formValuesValidated`],[`label`,`C.C/C.E/NIT`,`sessionStorage`,`billing-cc`,3,`valueChange`,`validityChange`,`validators`,`matcher`,`errorMessages`],[`label`,`Usar los mismos datos de entrega`,`sessionStorage`,`toggle`,3,`valueChange`,`value`],[1,`highlight-area`,`padding-medium`],[1,`flex-row`,`align-items-center`,`justify-space-between`,`margin-medium`],[1,`bold`,`mat-font-body-lg`],[`matButton`,`filled`,1,`width-100`,3,`click`,`disabled`],[1,`on-primary`],[1,`flex-row`,`margin-bottom-large`,`justify-content-start`,`align-items-center`],[1,`shopping-image`],[1,`flex-column`,`no-gap`],[`matButton`,``,`target`,`_blank`,1,`wrap-ok`,3,`click`],[1,`flex-row`,`align-items-center`],[`matIconButton`,``,3,`click`],[1,`margin-left-medium`],[`matIconButton`,``,1,`margin-left-auto`,3,`click`]],template:function(e,t){e&1&&(qs(0,`h1`,0),cw(1,`Carrito de compras`),Ll(),mI(2,yn,54,18,`div`,1)(3,Sn,2,0,`span`,2)),e&2&&(mE(2),gI(t.cartService.getTotalItems()?2:3))},dependencies:[Ab,yt,wt,hl,fl,wi$1,di,$,Kn,Ae,nt,at,ot,p],styles:[`@media(max-width:959.98px){.grid-3-2_[_ngcontent-%COMP%]{grid-template-columns:unset}}@media(min-width:600px)and (max-width:959.98px){.grid-3-2_[_ngcontent-%COMP%]{grid-template-columns:unset}}@media(min-width:960px)and (max-width:1279.98px){.grid-3-2_[_ngcontent-%COMP%]{grid-template-columns:unset}}@media(min-width:1280px)and (max-width:1919.98px){.grid-3-2_[_ngcontent-%COMP%]{grid-template-columns:10fr 7fr}}@media(min-width:1920px){.grid-3-2_[_ngcontent-%COMP%]{grid-template-columns:10fr 5fr}}.shopping-image[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100px;width:100px;min-width:100px;background-color:var(--%NS%mat-sys-surface-variant);border-radius:var(--%NS%mat-sys-corner-small);background-image:var(--%NS%bg-image);background-size:cover;background-position:center;background-repeat:no-repeat}`]})};export{fi as ShoppingCartComponent};