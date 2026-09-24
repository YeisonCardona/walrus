import{$n as mI,At as Tw,Br as ww,Jn as kt,Jt as ZC,Kn as kl,Mn as ig,Nt as Um,Qn as mE,Tt as SI,U as Ki,Vn as jf,W as Km,Wn as kI,Z as M,a as Ab,et as Nl,gr as qs,l as B$1,ln as cw,or as og,ot as PI,p as Bf,q as Ll,rt as OI,wn as gI,xn as fg}from"./chunk-CPr0OTB1.js";import{G as hl,U as fl,q as pt,r as G$1}from"./main-IYIUTSTV.js";import{n as p}from"./chunk-BQ00HFE9.js";import{t as v}from"./chunk-DwvqxThF.js";var X=[`*`];var O=new B$1(`MAT_CARD_CONFIG`);var B=(()=>{class t{appearance;constructor(){let e=M(O,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(a){return new(a||t)};static ɵcmp=ZC({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(a,r){a&2&&ig(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:X,decls:1,vars:0,template:function(a,r){a&1&&(OI(),PI(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var L=(()=>{class t{align=`start`;static ɵfac=function(a){return new(a||t)};static ɵdir=kl({type:t,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(a,r){a&2&&ig(`mat-mdc-card-actions-align-end`,r.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return t})();var R=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=Nl({type:t});static ɵinj=Ki({imports:[pt]})}return t})();function $(t,n){if(t&1){let e=SI();qs(0,`mat-card`,0)(1,`div`,1),Km(`click`,function(){jf(e);let r=kI();return Bf(r.reloadToProduct(r.product.slug))}),Ll(),qs(2,`app-image-zoomable`,2),Km(`click`,function(){jf(e);let r=kI();return Bf(r.reloadToProduct(r.product.slug))}),Ll(),qs(3,`mat-card-actions`)(4,`div`,3)(5,`span`,4),cw(6),ww(7,`customCurrency`),Ll(),qs(8,`button`,5),Km(`click`,function(){jf(e);let r=kI();return Bf(r.reloadToProduct(r.product.slug))}),cw(9,` Ver producto `),Ll()()()()}if(t&2){let e=kI();mE(),og(`--%NS%bg-image`,`url(${e.product.assets.images.thumbnail})`),mE(),Um(`move`,!1)(`image`,e.product.assets.images.vertical[0]),mE(4),fg(Tw(7,5,e.product.price))}}var G=class t{constructor(n){this.router=n}router;product;reloadToProduct(n){this.router.navigate([`/articulo`,n])}static ɵfac=function(e){return new(e||t)(kt(G$1))};static ɵcmp=ZC({type:t,selectors:[[`app-product-card`]],inputs:{product:`product`},decls:1,vars:1,consts:[[`appearance`,`outlined`],[1,`piece`,3,`click`],[`width`,`100%`,`height`,`250px`,`mode`,`cover`,`margin`,`0 0 0 0`,3,`click`,`move`,`image`],[1,`flex-column`,`width-100`,`align-items-center`,`no-gap`],[1,`margin-y-small`],[`matButton`,`tonal`,1,`margin-bottom-small`,3,`click`]],template:function(e,a){e&1&&mI(0,$,10,7,`mat-card`,0),e&2&&gI(a.product?0:-1)},dependencies:[Ab,R,B,L,hl,fl,v,p],styles:[`app-image-zoomable[_ngcontent-%COMP%]{cursor:pointer}`]})};export{G as t};