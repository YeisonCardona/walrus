import{$n as mI,$t as _g,At as Tw,Bn as je,Br as ww,Cn as g0,Dn as gw,En as gr,Fr as uy,Gn as kL,Hn as jl,Hr as xn,J as Lm,Jn as kt,Jt as ZC,K as LI,Kn as kl,Kr as yI,L as Ig,Lr as vI,Mn as ig,Mt as Ul,N as Gm,Nn as io,Nt as Um,On as h0,Pn as ip,Pr as uh,Qn as mE,Rn as jI,T as Ee$1,Tt as SI,U as Ki,Vn as jf,Vt as Xm,W as Km,Wn as kI,Wt as Xu,X as Lt$1,Y as Lr,Yr as zm,Z as M,Zn as m0,_t as Qf,a as Ab,at as Oo,c as Aw,en as _r,et as Nl,ft as Ps,gr as qs,hn as e0,ht as QI,ir as ob,j as Ge,kt as Te$1,l as B,ln as cw,lt as Ph,m as Bl,n as $m,on as bv,or as og,ot as PI,p as Bf,q as Ll,qt as Ym,r as $r,rt as OI,un as cy,ut as Pm,v as Cw,vr as rb,w as EI,wn as gI,wr as rt,xn as fg,yn as er,z as Jm,zr as we$1}from"./chunk-CPr0OTB1.js";import{$ as zt$1,D as Kr,E as Ir,G as hl,I as Xt$1,M as Q,P as Vt$1,Q as zr,R as Zt$1,S as Ai$1,T as Hr,U as fl,V as en,W as ge,X as wi$1,et as s,h as Z,i as V,m as U,n as yt,q as pt,t as wt,v as u,x as $t$1,y as d}from"./main-IYIUTSTV.js";import{c as Vi,i as Kn,l as Xn,n as Di$1,r as Ee$2,u as Zn}from"./chunk-B9pNQvYD.js";import{t as m}from"./chunk-CbWOfq9n.js";import{t as Bt$1}from"./chunk-CtphjRzK.js";import{n as p,t as a}from"./chunk-BQ00HFE9.js";import{t as v}from"./chunk-DwvqxThF.js";import{t as G}from"./chunk-DMFGqZvR.js";var xe=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let a=Math.max(...this.tracker);return a>1?this.rowCount+a-1:this.rowCount}positions;update(a,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(a),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(a){let e=this._findMatchingGap(a.colspan);return this._markTilePosition(e,a),this.columnIndex=e+a.colspan,new Ee(this.rowIndex,e)}_findMatchingGap(a){if(a>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${a} is wider than grid with cols="${this.tracker.length}".`);let e=-1,t=-1;do{if(this.columnIndex+a>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}t=this._findGapEndIndex(e),this.columnIndex=e+1}while(t-e<a||t==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let a=0;a<this.tracker.length;a++)this.tracker[a]=Math.max(0,this.tracker[a]-1)}_findGapEndIndex(a){for(let e=a+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(a,e){for(let t=0;t<e.colspan;t++)this.tracker[a+t]=e.rowspan}};var Ee=class{row;col;constructor(a,e){this.row=a,this.col=e}};var De=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki({imports:[pt]})}return i})();var Rt=[`*`];var oi=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`;var zt=new B(`MAT_GRID_LIST`);var Fe=(()=>{class i{_element=M(er);_gridList=M(zt,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(zt$1(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(zt$1(e))}_setStyle(e,t){this._element.nativeElement.style[e]=t}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-grid-tile`]],hostAttrs:[1,`mat-grid-tile`],hostVars:2,hostBindings:function(t,n){t&2&&$m(`rowspan`,n.rowspan)(`colspan`,n.colspan)},inputs:{rowspan:`rowspan`,colspan:`colspan`},exportAs:[`matGridTile`],ngContentSelectors:Rt,decls:2,vars:0,consts:[[1,`mat-grid-tile-content`]],template:function(t,n){t&1&&(OI(),jl(0,`div`,0),PI(1),Bl())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return i})();var ri=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;var ce=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(a,e,t,n){this._gutterSize=Ht(a),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=t,this._direction=n}getBaseTileSize(a,e){return`(${a}% - (${this._gutterSize} * ${e}))`}getTilePosition(a,e){return e===0?`0`:K(`(${a} + ${this._gutterSize}) * ${e}`)}getTileSize(a,e){return`(${a} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(a,e,t){let n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(a,t,n,o),this.setRowStyles(a,e,n,o)}setColStyles(a,e,t,n){let o=this.getBaseTileSize(t,n),c=this._direction===`rtl`?`right`:`left`;a._setStyle(c,this.getTilePosition(o,e)),a._setStyle(`width`,K(this.getTileSize(o,a.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(a){return`${this._rowspan} * ${this.getTileSize(a,1)}`}getComputedHeight(){return null}};var Te=class extends ce{fixedRowHeight;constructor(a){super(),this.fixedRowHeight=a}init(a,e,t,n){super.init(a,e,t,n),this.fixedRowHeight=Ht(this.fixedRowHeight),ri.test(this.fixedRowHeight)}setRowStyles(a,e){a._setStyle(`top`,this.getTilePosition(this.fixedRowHeight,e)),a._setStyle(`height`,K(this.getTileSize(this.fixedRowHeight,a.rowspan)))}getComputedHeight(){return[`height`,K(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(a){a._setListStyle([`height`,null]),a._tiles&&a._tiles.forEach(e=>{e._setStyle(`top`,null),e._setStyle(`height`,null)})}};var Ae=class extends ce{rowHeightRatio;baseTileHeight;constructor(a){super(),this._parseRatio(a)}setRowStyles(a,e,t,n){let o=t/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,n),a._setStyle(`marginTop`,this.getTilePosition(this.baseTileHeight,e)),a._setStyle(`paddingTop`,K(this.getTileSize(this.baseTileHeight,a.rowspan)))}getComputedHeight(){return[`paddingBottom`,K(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(a){a._setListStyle([`paddingBottom`,null]),a._tiles.forEach(e=>{e._setStyle(`marginTop`,null),e._setStyle(`paddingTop`,null)})}_parseRatio(a){let e=a.split(`:`);e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}};var Pe=class extends ce{setRowStyles(a,e){let t=100/this._rowspan,n=(this._rows-1)/this._rows,o=this.getBaseTileSize(t,n);a._setStyle(`top`,this.getTilePosition(o,e)),a._setStyle(`height`,K(this.getTileSize(o,a.rowspan)))}reset(a){a._tiles&&a._tiles.forEach(e=>{e._setStyle(`top`,null),e._setStyle(`height`,null)})}};function K(i){return`calc(${i})`}function Ht(i){return i.match(/([A-Za-z%]+)$/)?i:`${i}px`}var ci=`fit`;var Ot=(()=>{class i{_element=M(er);_dir=M(Ai$1,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter=`1px`;_tileStyler;_tiles;get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(zt$1(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??``}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let t=`${e??``}`;t!==this._rowHeight&&(this._rowHeight=t,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler(`1:1`)}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===ci?this._tileStyler=new Pe:e&&e.indexOf(`:`)>-1?this._tileStyler=new Ae(e):this._tileStyler=new Te(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new xe);let e=this._tileCoordinator,t=this._tiles.filter(o=>!o._gridList||o._gridList===this),n=this._dir?this._dir.value:`ltr`;this._tileCoordinator.update(this.cols,t),this._tileStyler.init(this.gutterSize,e,this.cols,n),t.forEach((o,c)=>{let U=e.positions[c];this._tileStyler.setStyle(o,U.row,U.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-grid-list`]],contentQueries:function(t,n,o){if(t&1&&Xm(o,Fe,5),t&2){let c;LI(c=jI())&&(n._tiles=c)}},hostAttrs:[1,`mat-grid-list`],hostVars:1,hostBindings:function(t,n){t&2&&$m(`cols`,n.cols)},inputs:{cols:`cols`,gutterSize:`gutterSize`,rowHeight:`rowHeight`},exportAs:[`matGridList`],features:[gw([{provide:zt,useExisting:i}])],ngContentSelectors:Rt,decls:2,vars:0,template:function(t,n){t&1&&(OI(),jl(0,`div`),PI(1),Bl())},styles:[oi],encapsulation:2})}return i})();var Bt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki({imports:[De,pt,De]})}return i})();var di=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var li=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function pi(i,a){i&1&&(qs(0,`span`,3),PI(1,1),Ll())}function hi(i,a){i&1&&(qs(0,`span`,6),PI(1,2),Ll())}var mi=[`*`];var ui=new B(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Lt=new B(`MatChipAvatar`);var jt=new B(`MatChipTrailingIcon`);var Vt=new B(`MatChipEdit`);var Gt=new B(`MatChipRemove`);var Qt=new B(`MatChip`);var $t=(()=>{class i{_elementRef=M(er);_parentChip=M(Qt);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){M(Q).load(Hr),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,n){t&2&&($m(`disabled`,n._getDisabledAttribute())(`aria-disabled`,n.disabled),ig(`mdc-evolution-chip__action--primary`,n._isPrimary)(`mdc-evolution-chip__action--secondary`,!n._isPrimary)(`mdc-evolution-chip__action--trailing`,!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,rb],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:ob(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return i})();var gi=(()=>{class i extends $t{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(n){return(e||(e=uh(i)))(n||i)}})();static ɵdir=kl({type:i,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,n){t&1&&Km(`click`,function(c){return n._handleClick(c)})(`keydown`,function(c){return n._handleKeydown(c)}),t&2&&($m(`tabindex`,n._getTabindex()),ig(`mdc-evolution-chip__action--presentational`,!1))},features:[Pm]})}return i})();var Re=(()=>{class i{_changeDetectorRef=M(_g);_elementRef=M(er);_tagName=M(kL);_ngZone=M(Te$1);_focusMonitor=M(Vt$1);_globalRippleOptions=M(en,{optional:!0});_document=M(Ge);_onFocus=new we$1;_onBlur=new we$1;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ge();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=M(Zt$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Lt$1;destroyed=new Lt$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=M(zr);_injector=M(je);constructor(){let e=M(Q);e.load(Hr),e.load($t$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=e0(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,n,o){if(t&1&&Xm(o,Lt,5)(o,Vt,5)(o,jt,5)(o,Gt,5)(o,Lt,5)(o,jt,5)(o,Vt,5)(o,Gt,5),t&2){let c;LI(c=jI())&&(n.leadingIcon=c.first),LI(c=jI())&&(n.editIcon=c.first),LI(c=jI())&&(n.trailingIcon=c.first),LI(c=jI())&&(n.removeIcon=c.first),LI(c=jI())&&(n._allLeadingIcons=c),LI(c=jI())&&(n._allTrailingIcons=c),LI(c=jI())&&(n._allEditIcons=c),LI(c=jI())&&(n._allRemoveIcons=c)}},viewQuery:function(t,n){if(t&1&&Jm(gi,5),t&2){let o;LI(o=jI())&&(n.primaryAction=o.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,n){t&1&&Km(`keydown`,function(c){return n._handleKeydown(c)}),t&2&&(Ym(`id`,n.id),$m(`role`,n.role)(`aria-label`,n.ariaLabel),QI(`mat-`+(n.color||`primary`)),ig(`mdc-evolution-chip`,!n._isBasicChip)(`mdc-evolution-chip--disabled`,n.disabled)(`mdc-evolution-chip--with-trailing-action`,n._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,n.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,n.leadingIcon)(`mdc-evolution-chip--with-avatar`,n.leadingIcon)(`mat-mdc-chip-with-avatar`,n.leadingIcon)(`mat-mdc-chip-highlighted`,n.highlighted)(`mat-mdc-chip-disabled`,n.disabled)(`mat-mdc-basic-chip`,n._isBasicChip)(`mat-mdc-standard-chip`,!n._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,n._hasTrailingIcon())(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,rb],highlighted:[2,`highlighted`,`highlighted`,rb],disableRipple:[2,`disableRipple`,`disableRipple`,rb],disabled:[2,`disabled`,`disabled`,rb]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[gw([{provide:Qt,useExisting:i}])],ngContentSelectors:li,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,n){t&1&&(OI(di),zm(0,`span`,0),qs(1,`span`,1)(2,`span`,2),mI(3,pi,2,0,`span`,3),qs(4,`span`,4),PI(5),zm(6,`span`,5),Ll()()(),mI(7,hi,2,0,`span`,6)),t&2&&(mE(3),gI(n.leadingIcon?3:-1),mE(4),gI(n._hasTrailingIcon()?7:-1))},dependencies:[$t],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return i})();var Kt=(()=>{class i{_elementRef=M(er);_changeDetectorRef=M(_g);_dir=M(Ai$1,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new we$1;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Ps;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(h0(null),m0(()=>e0(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(h0(this._chips)).subscribe(e=>{let t=[];e.forEach(n=>n._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Xt$1(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(g0(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(g0(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(h0(null),g0(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(g0(this._destroyed)).subscribe(e=>{let n=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),c=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),U=o||c;this._isValidIndex(n)&&U&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-chip-set`]],contentQueries:function(t,n,o){if(t&1&&Xm(o,Re,5),t&2){let c;LI(c=jI())&&(n._chips=c)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,n){t&1&&Km(`keydown`,function(c){return n._handleKeydown(c)}),t&2&&$m(`role`,n.role)},inputs:{disabled:[2,`disabled`,`disabled`,rb],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:ob(e)]},ngContentSelectors:mi,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,n){t&1&&(OI(),jl(0,`div`,0),PI(1),Bl())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return i})();var Wt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki({providers:[Bt$1,{provide:ui,useValue:{separatorKeyCodes:[13]}}],imports:[Kr,pt]})}return i})();var ze=new B(`CdkAccordion`);var Ut=(()=>{class i{_stateChanges=new we$1;_openCloseAllActions=new we$1;id=M(Zt$1).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,rb]},exportAs:[`cdkAccordion`],features:[gw([{provide:ze,useExisting:i}]),Xu]})}return i})();var Zt=(()=>{class i{accordion=M(ze,{optional:!0,skipSelf:!0});_changeDetectorRef=M(_g);_expansionDispatcher=M(Ee$2);_openCloseAllSubscription=Ee$1.EMPTY;closed=new Lt$1;opened=new Lt$1;destroyed=new Lt$1;expandedChange=new Lt$1;id=M(Zt$1).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=_r(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,rb],disabled:[2,`disabled`,`disabled`,rb]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[gw([{provide:ze,useValue:void 0}])]})}return i})();var Xt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki({})}return i})();var fi=[`body`];var vi=[`bodyWrapper`];var yi=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var bi=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function xi(i,a){}var Si=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var wi=[`mat-panel-title`,`mat-panel-description`,`*`];function Ci(i,a){i&1&&(jl(0,`span`,1),Qf(),jl(1,`svg`,2),Gm(2,`path`,3),Bl()())}var He=new B(`MAT_ACCORDION`);var Yt=new B(`MAT_EXPANSION_PANEL`);var Ni=(()=>{class i{_template=M(Lr);_expansionPanel=M(Yt,{optional:!0});static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return i})();var Jt=new B(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Oe=(()=>{class i extends Zt{_viewContainerRef=M($r);_animationsDisabled=ge();_document=M(Ge);_ngZone=M(Te$1);_elementRef=M(er);_renderer=M(Oo);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new Lt$1;afterCollapse=new Lt$1;_inputChanges=new we$1;accordion=M(He,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=M(Zt$1).getId(`mat-expansion-panel-header-`);constructor(){super();let e=M(Jt,{optional:!0});this._expansionDispatcher=M(Ee$2),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(h0(null),io(()=>this.expanded&&!this._portal),gr(1)).subscribe(()=>{this._portal=new u(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-expansion-panel`]],contentQueries:function(t,n,o){if(t&1&&Xm(o,Ni,5),t&2){let c;LI(c=jI())&&(n._lazyContent=c.first)}},viewQuery:function(t,n){if(t&1&&Jm(fi,5)(vi,5),t&2){let o;LI(o=jI())&&(n._body=o.first),LI(o=jI())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(t,n){t&2&&ig(`mat-expanded`,n.expanded)(`mat-expansion-panel-spacing`,n._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,rb],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[gw([{provide:He,useValue:void 0},{provide:Yt,useExisting:i}]),Pm,Xu],ngContentSelectors:bi,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(t,n){t&1&&(OI(yi),PI(0),qs(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),PI(6,1),Lm(7,xi,0,0,`ng-template`,5),Ll(),PI(8,2),Ll()()),t&2&&(mE(),$m(`inert`,n.expanded?null:``),mE(2),Um(`id`,n.id),$m(`aria-labelledby`,n._headerId),mE(4),Um(`cdkPortalOutlet`,n._portal))},dependencies:[U],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return i})();var Be=(()=>{class i{panel=M(Oe,{host:!0});_element=M(er);_focusMonitor=M(Vt$1);_changeDetectorRef=M(_g);_parentChangeSubscription=Ee$1.EMPTY;constructor(){M(Q).load(Hr);let e=this.panel,t=M(Jt,{optional:!0}),n=M(new Ig(`tabindex`),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(io(c=>!!(c.hideToggle||c.togglePosition))):xn;this.tabIndex=parseInt(n||``)||0,this._parentChangeSubscription=e0(e.opened,e.closed,o,e._inputChanges.pipe(io(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(io(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ir(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(t){return new(t||i)};static ɵcmp=ZC({type:i,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(t,n){t&1&&Km(`click`,function(){return n._toggle()})(`keydown`,function(c){return n._keydown(c)}),t&2&&($m(`id`,n.panel._headerId)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n._getPanelId())(`aria-expanded`,n._isExpanded())(`aria-disabled`,n.panel.disabled),og(`height`,n._getHeaderHeight()),ig(`mat-expanded`,n._isExpanded())(`mat-expansion-toggle-indicator-after`,n._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,n._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:ob(e)]},ngContentSelectors:wi,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(t,n){t&1&&(OI(Si),jl(0,`span`,0),PI(1),PI(2,1),PI(3,2),Bl(),mI(4,Ci,3,0,`span`,1)),t&2&&(ig(`mat-content-hide-toggle`,!n._showToggle()),mE(4),gI(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return i})();var ei=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=kl({type:i,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return i})();var ti=(()=>{class i extends Ut{_keyManager;_ownHeaders=new Ps;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(h0(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Xt$1(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(n){return(e||(e=uh(i)))(n||i)}})();static ɵdir=kl({type:i,selectors:[[`mat-accordion`]],contentQueries:function(t,n,o){if(t&1&&Xm(o,Be,5),t&2){let c;LI(c=jI())&&(n._headers=c)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(t,n){t&2&&ig(`mat-accordion-multi`,n.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,rb],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[gw([{provide:He,useExisting:i}]),Pm]})}return i})();var ii=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Nl({type:i});static ɵinj=Ki({imports:[Xt,Z,pt]})}return i})();var we=class i{constructor(){}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZC({type:i,selectors:[[`app-product-complement`]],decls:31,vars:0,consts:[[1,`margin-top-5vh`,`padding-large`,`sub-panel`],[1,`product-type`,`mat-font-headline-md`,`margin-bottom-large`],[1,`product-extra`,`mat-font-title-sm`,`medium`]],template:function(e,t){e&1&&(qs(0,`div`,0)(1,`div`,1),cw(2,` Información y políticas del producto `),Ll(),qs(3,`mat-accordion`)(4,`mat-expansion-panel`)(5,`mat-expansion-panel-header`)(6,`mat-panel-title`)(7,`span`,2),cw(8,` Envíos y tiempos de entrega `),Ll()()(),qs(9,`p`),cw(10,` Nos comprometemos a preparar y despachar tus pedidos en un plazo estimado de entre 2 y 3 días hábiles a partir de la confirmación de tu compra. Trabajamos con diferentes empresas de mensajería disponibles según la zona, seleccionando la opción más eficiente para garantizar que tu paquete llegue en óptimas condiciones, sin que debas preocuparte por elegir una paquetería en específico. `),Ll(),qs(11,`p`),cw(12,` Además, para hacer tu experiencia aún mejor, todos nuestros envíos son completamente gratuitos, sin cargos ocultos ni sorpresas al finalizar el pago. `),Ll()(),qs(13,`mat-expansion-panel`)(14,`mat-expansion-panel-header`)(15,`mat-panel-title`)(16,`span`,2),cw(17,` Cuidados y mantenimiento `),Ll()()(),qs(18,`p`),cw(19,` Para asegurar que tus productos de MDF mantengan su belleza y durabilidad a lo largo del tiempo, te recomendamos seguir algunas pautas sencillas de conservación. Dado que el material es sensible a la humedad, evita exponer las piezas a ambientes húmedos, líquidos o luz solar directa prolongada para prevenir deformaciones o daños en el acabado. `),Ll(),qs(20,`p`),cw(21,` Asimismo, en el caso de lámparas o artículos de iluminación, es fundamental que no utilices bombillas que superen los 10 vatios de potencia, garantizando así una iluminación cálida y segura que proteja la integridad de la madera y sus detalles de diseño. `),Ll()(),qs(22,`mat-expansion-panel`)(23,`mat-expansion-panel-header`)(24,`mat-panel-title`)(25,`span`,2),cw(26,` Garantía y devoluciones `),Ll()()(),qs(27,`p`),cw(28,` Queremos que estés plenamente satisfecho con tu compra, por lo que ofrecemos un proceso de devolución claro y transparente. Para iniciar cualquier solicitud de garantía o devolución, es necesario que nos informes previamente a través de nuestro correo electrónico de atención al cliente con los detalles de tu caso. `),Ll(),qs(29,`p`),cw(30,` Los costos de envío asociados al retorno del producto corren por cuenta del cliente, y una vez que recibamos y verifiquemos el artículo, el tiempo necesario para la devolución efectiva del dinero dependerá exclusivamente de los plazos de procesamiento de tu entidad bancaria. `),Ll()()()())},dependencies:[Ab,ti,Oe,Be,ei],styles:[`.sub-panel[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-secondary-container);border-radius:var(--%NS%mat-sys-corner-large)}.product-type[_ngcontent-%COMP%], .product-extra[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}`]})};var Ce=class i{images;currentImage;visible=_r(!1);constructor(){ip(()=>{let a=this.currentImage();a!==``&&(this.visible.set(!0),console.log(a))})}ngAfterViewInit(){this.images=this.images.filter(a=>a&&a.trim().length>0)}closeImage(){this.currentImage.set(``),this.visible.set(!1)}nextImage(){let a=this.images.indexOf(this.currentImage());if(a!==-1){let e=(a+1)%this.images.length;this.currentImage.set(this.images[e])}}previousImage(){let a=this.images.indexOf(this.currentImage());if(a!==-1){let e=(a-1+this.images.length)%this.images.length;this.currentImage.set(this.images[e])}}static ɵfac=function(e){return new(e||i)};static ɵcmp=ZC({type:i,selectors:[[`app-carousel`]],inputs:{images:`images`,currentImage:`currentImage`},decls:13,vars:9,consts:[[1,`blur`,3,`click`],[1,`image-container`,`flex-column`,`justify-content-center`,`height-100vh`],[1,`flex-row`,`align-items-center`,`justify-space-between`],[`matIconButton`,``,3,`click`],[1,`image-content`,3,`src`],[`matIconButton`,``,1,`close`,3,`click`]],template:function(e,t){e&1&&(qs(0,`div`,0),Km(`click`,function(){return t.closeImage()}),Ll(),qs(1,`div`,1)(2,`div`,2)(3,`button`,3),Km(`click`,function(){return t.previousImage()}),qs(4,`mat-icon`),cw(5,`arrow_back_ios`),Ll()(),zm(6,`img`,4),qs(7,`button`,3),Km(`click`,function(){return t.nextImage()}),qs(8,`mat-icon`),cw(9,`arrow_forward_ios`),Ll()()(),qs(10,`button`,5),Km(`click`,function(){return t.closeImage()}),qs(11,`mat-icon`),cw(12,`close`),Ll()()()),e&2&&(ig(`visible`,t.visible())(`no-visible`,!t.visible()),mE(),ig(`visible`,t.visible())(`no-visible`,!t.visible()),mE(5),Um(`src`,t.currentImage(),Ph))},dependencies:[Ab,wt,wi$1],styles:[`.no-visible[_ngcontent-%COMP%]{display:none}.visible[_ngcontent-%COMP%]{display:flex}.image-container[_ngcontent-%COMP%]{width:80vw;left:10vw;position:fixed;top:0;z-index:99;text-align:center;border-radius:var(--%NS%mat-sys-corner-large);box-sizing:border-box}button[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%mat-sys-secondary-container) 50%,transparent)}.image-content[_ngcontent-%COMP%]{max-width:60vw;max-height:70vh;max-height:70dvh;border-radius:var(--%NS%mat-sys-corner-large)}.blur[_ngcontent-%COMP%]{width:100vw;height:100vh;height:100dvh;background-color:color-mix(in srgb,var(--%NS%mat-sys-on-secondary-container) 50%,transparent);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);position:fixed;top:0;left:0;z-index:98}.close[_ngcontent-%COMP%]{position:fixed;top:1rem;right:1rem}`]})};var Ii=(i,a,e,t,n,o)=>[i,a,e,t,n,o];function ki(i,a){if(i&1){let e=SI();qs(0,`mat-grid-tile`,9)(1,`app-image-zoomable`,6),Km(`click`,function(){jf(e);let n=kI();return Bf(kI().imageInCarousel.set(n.assets.images.square[2]))}),Ll()()}if(i&2){let e=kI();mE(),Um(`move`,!0)(`image`,e.assets.images.square[2])}}function Mi(i,a){if(i&1&&(qs(0,`mat-chip`),cw(1),Ll()),i&2){let e=a.$implicit;mE(),fg(e)}}function Ei(i,a){if(i&1&&(qs(0,`mat-list-item`)(1,`span`,25),cw(2),Ll(),qs(3,`span`,26),cw(4),Ll()()),i&2){let e=a.$implicit;mE(2),fg(e.key),mE(2),fg(e.value)}}function Di(i,a){if(i&1&&(qs(0,`mat-list-item`)(1,`span`,25),cw(2),Ll(),qs(3,`span`,26),cw(4),Ll()()),i&2){let e=a.$implicit;mE(2),fg(e.key),mE(2),fg(e.value)}}function Ti(i,a){if(i&1){let e=SI();qs(0,`h1`,1),cw(1),Ll(),zm(2,`app-carousel`,2),qs(3,`div`,3)(4,`mat-grid-list`,4)(5,`mat-grid-tile`,5)(6,`app-image-zoomable`,6),Km(`click`,function(){let n=jf(e);return Bf(kI().imageInCarousel.set(n.assets.images.horizontal[0]))}),Ll()(),qs(7,`mat-grid-tile`,7)(8,`app-image-zoomable`,6),Km(`click`,function(){let n=jf(e);return Bf(kI().imageInCarousel.set(n.assets.images.vertical[0]))}),Ll()(),qs(9,`mat-grid-tile`,7),zm(10,`app-image-zoomable`,8),Ll(),qs(11,`mat-grid-tile`,9)(12,`app-image-zoomable`,6),Km(`click`,function(){let n=jf(e);return Bf(kI().imageInCarousel.set(n.assets.images.square[0]))}),Ll()(),qs(13,`mat-grid-tile`,9)(14,`app-image-zoomable`,6),Km(`click`,function(){let n=jf(e);return Bf(kI().imageInCarousel.set(n.assets.images.square[1]))}),Ll()(),mI(15,ki,2,2,`mat-grid-tile`,9),Ll(),qs(16,`div`,10)(17,`span`,11),cw(18),Ll(),zm(19,`div`,12),qs(20,`div`,13)(21,`div`)(22,`span`,14),cw(23),ww(24,`customCurrency`),Ll()(),qs(25,`div`)(26,`div`,15)(27,`mat-icon`,16),cw(28,`check`),Ll(),qs(29,`span`),cw(30,`Envío gratis`),Ll()(),qs(31,`div`,15)(32,`mat-icon`,16),cw(33,`check`),Ll(),qs(34,`span`),cw(35,`IVA incluido`),Ll()()()(),qs(36,`div`,17)(37,`span`,11),cw(38,`Características:`),Ll(),qs(39,`mat-chip-set`,18),vI(40,Mi,2,1,`mat-chip`,null,yI),Ll()(),qs(42,`div`,19)(43,`div`,20)(44,`button`,21),Km(`click`,function(){let n=jf(e);return Bf(kI().addToCart(n.id))}),cw(45,` Agregar al carrito `),qs(46,`mat-icon`,16),cw(47,`add_shopping_cart`),Ll()(),qs(48,`button`,22),cw(49,` Comprar ahora `),qs(50,`mat-icon`,16),cw(51,`shopping_bag`),Ll()()()(),qs(52,`div`,17)(53,`span`,23),cw(54,`Detalles:`),Ll(),qs(55,`div`,24)(56,`mat-list`),vI(57,Ei,5,2,`mat-list-item`,null,yI),Ll(),qs(59,`mat-list`),vI(60,Di,5,2,`mat-list-item`,null,yI),Ll()()()()()}if(i&2){let e=a,t=kI();mE(),fg(e.name),mE(),Um(`currentImage`,t.imageInCarousel)(`images`,Cw(19,Ii,e.assets.images.horizontal[0],e.assets.images.vertical[0],e.assets.images.square[0],e.assets.images.square[1],e.assets.images.square[2],e.assets.images.diagram)),mE(2),Um(`cols`,t.getCols()),mE(2),Um(`move`,!0)(`image`,e.assets.images.horizontal[0]),mE(2),Um(`move`,!0)(`image`,e.assets.images.vertical[0]),mE(2),Um(`move`,!0),mE(2),Um(`move`,!0)(`image`,e.assets.images.square[0]),mE(2),Um(`move`,!0)(`image`,e.assets.images.square[1]),mE(),gI(e.assets.images.square[2]?15:-1),mE(3),Ul(``,e.type,`:`),mE(),Um(`innerHTML`,e.description,bv),mE(4),fg(Tw(24,17,e.price)),mE(17),EI(e.features),mE(17),EI(t.getDetailsHalf(e.details,`first`)),mE(3),EI(t.getDetailsHalf(e.details,`second`))}}function Ai(i,a){if(i&1&&zm(0,`app-product-card`,29),i&2){let e=a.$implicit;Um(`product`,e)}}function Pi(i,a){if(i&1&&(qs(0,`div`,0)(1,`div`,27),cw(2,`Artículos recomendados`),Ll(),qs(3,`div`,28),vI(4,Ai,1,1,`app-product-card`,29,yI),Ll()()),i&2){let e=kI();mE(4),EI(e.featuredProducts())}}var ai=class i{constructor(a,e,t,n,o,c,U){this.themeService=a;this.productService=e;this.route=t;this.viewportService=n;this.cartService=o;this.navBarService=c;this.themingService=U;this.navBarService.setNavActiveLink(``)}themeService;productService;route;viewportService;cartService;navBarService;themingService;product=_r(void 0);featuredProducts=_r([]);imageInCarousel=_r(``);getCols=Aw(()=>this.viewportService.isLargeDown()?2:3);ngOnInit(){return rt(this,null,function*(){this.route.paramMap.subscribe(a=>{let e=this.route.snapshot.paramMap.get(`slug`)??``;this.loadProduct(e)})})}loadProduct(a){return rt(this,null,function*(){let e=yield this.productService.getProductBySlug(a);this.product.set(e),e&&(yield this.themingService.setColorThemeFromImage(e.assets.images.horizontal[0])),this.featuredProducts.set(yield this.productService.getFeaturedProducts(a,3))})}getDetailsHalf(a,e){let t=Math.ceil(a.length/2);return e===`first`?a.slice(0,t):a.slice(t)}addToCart(a){this.cartService.addToCart(a),this.navBarService.updateBadge(`shopping-cart-items`,this.cartService.getTotalItems())}static ɵfac=function(e){return new(e||i)(kt(cy),kt(a),kt(V),kt(d),kt(s),kt(uy),kt(m))};static ɵcmp=ZC({type:i,selectors:[[`app-product`]],decls:3,vars:2,consts:[[1,`margin-top-extra-large`],[1,`mat-font-display-md`,`color-primary`,`margin-top-extra-large`],[3,`currentImage`,`images`],[1,`grid`,`grid-responsive-2`,`gap-large`,`grid-4-1_`],[`rowHeight`,`1:1`,`gutterSize`,`8`,1,`photos`,3,`cols`],[`colspan`,`2`,`rowspan`,`1`],[`width`,`100%`,`height`,`100%`,`mode`,`cover`,`margin`,`0`,3,`click`,`move`,`image`],[`colspan`,`1`,`rowspan`,`2`],[`width`,`100%`,`height`,`100%`,`mode`,`cover`,`margin`,`0`,`image`,`/assets/products/shared/1m_socket.png`,3,`move`],[`colspan`,`1`,`rowspan`,`1`],[1,``],[1,`mat-font-title-lg`,`color-primary`],[1,`mat-font-body-md`,`margin-top-medium`,3,`innerHTML`],[1,`highlight-area`,`padding-large`,`margin-top-large`,`justify-center`,`flex-column`],[1,`product-price`,`mat-font-body-lg`,`color-primary`],[1,`flex-row`,`align-items-center`,`justify-center`,`gap-medium`],[1,`on-primary`],[1,`margin-top-large`],[1,`margin-top-medium`],[1,`highlight-area`,`padding-medium`,`margin-top-large`],[1,`grid`,`grid-responsive-auto-200`],[`matButton`,`outlined`,3,`click`],[`matButton`,`filled`],[1,`product-type`,`mat-font-title-lg`],[1,`flex-row`],[`matListItemTitle`,``],[`matListItemLine`,``],[1,`product-type`,`mat-font-headline-md`,`margin-bottom-large`],[1,`grid`,`width-80`,`margin-left-10`,`grid-responsive-3`,`gap-large`],[3,`product`]],template:function(e,t){if(e&1&&(mI(0,Ti,62,26),zm(1,`app-product-complement`),mI(2,Pi,6,0,`div`,0)),e&2){let n;gI((n=t.product())?0:-1,n),mE(2),gI(t.featuredProducts().length>0?2:-1)}},dependencies:[Ab,Bt,Ot,Fe,hl,fl,yt,wt,Wt,Re,Kt,ii,G,Kn,Xn,Zn,Vi,Di$1,we,Ce,v,p],styles:[`.product-type[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.product-price[_ngcontent-%COMP%]{font-size:250%}mat-grid-tile[_ngcontent-%COMP%]{cursor:zoom-in}@media(max-width:959.98px){.grid-4-1_[_ngcontent-%COMP%]{grid-template-columns:unset}}@media(min-width:600px)and (max-width:959.98px){.grid-4-1_[_ngcontent-%COMP%]{grid-template-columns:unset}}@media(min-width:960px)and (max-width:1279.98px){.grid-4-1_[_ngcontent-%COMP%]{grid-template-columns:10fr 10fr}}@media(min-width:1280px)and (max-width:1919.98px){.grid-4-1_[_ngcontent-%COMP%]{grid-template-columns:10fr 7fr}}@media(min-width:1920px){.grid-4-1_[_ngcontent-%COMP%]{grid-template-columns:10fr 5fr}}`]})};export{ai as ProductComponent};