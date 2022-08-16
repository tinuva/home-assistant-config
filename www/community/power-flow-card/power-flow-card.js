function t(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}var e,i;function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var s=function(t,i,r){var s=i?function(t){switch(t.number_format){case e.comma_decimal:return["en-US","en"];case e.decimal_comma:return["de","es","it"];case e.space_comma:return["fr","sv","cs"];case e.system:return;default:return t.language}}(i):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==i?void 0:i.number_format)!==e.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(s,o(t,r)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,o(t,r)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==r?void 0:r.maximumFractionDigits).toString()+("currency"===(null==r?void 0:r.style)?" "+r.currency:"")},o=function(t,e){var i=r({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var s=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new Map;class c{constructor(t,e){if(this._$cssResult$=!0,e!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=l.get(this.cssText);return n&&void 0===t&&(l.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",a))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const u=window.trustedTypes,p=u?u.emptyScript:"",v=window.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=m){var r,s;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:g.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,r,s;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),a=t.converter,l=null!==(s=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:g.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:f}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.3.1");const b=globalThis.trustedTypes,_=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,A="?"+w,x=`<${A}>`,M=document,H=(t="")=>M.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,L=/>/g,V=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,U=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),R=U(1),O=U(2),z=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),B=new WeakMap,j=M.createTreeWalker(M,129,null,!1),W=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===S?"!--"===l[1]?n=k:void 0!==l[1]?n=L:void 0!==l[2]?(P.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=V):void 0!==l[3]&&(n=V):n===V?">"===l[0]?(n=null!=s?s:S,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?V:'"'===l[3]?N:T):n===N||n===T?n=V:n===k||n===L?n=S:(n=V,s=void 0);const h=n===V&&t[e+1].startsWith("/>")?" ":"";o+=n===S?i+x:c>=0?(r.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+w+h):i+w+(-2===c?(r.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(a):a,r]};class F{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[l,c]=W(t,e);if(this.el=F.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=j.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=c[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?J:"@"===e[1]?Q:Y})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(P.test(r.tagName)){const t=r.textContent.split(w),e=t.length-1;if(e>0){r.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],H()),j.nextNode(),a.push({type:2,index:++s});r.append(t[e],H())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(w,t+1));)a.push({type:7,index:s}),t+=w.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,r){var s,o,n,a;if(e===z)return e;let l=void 0!==r?null===(s=i._$Cl)||void 0===s?void 0:s[r]:i._$Cu;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,r)),e}class Z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(i,!0);j.currentNode=s;let o=j.nextNode(),n=0,a=0,l=r[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new G(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new X(o,this,t)),this.v.push(e),l=r[++a]}n!==(null==l?void 0:l.index)&&(o=j.nextNode(),n++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,r){var s;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),E(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==D&&E(this._$AH)?this._$AA.nextSibling.data=t:this.k(M.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=F.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new Z(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new F(t)),e}S(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new G(this.M(H()),this.M(H()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,r,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=I(this,t,e,0),o=!E(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=I(this,r[i+n],e,n),a===z&&(a=this._$AH[n]),o||(o=!E(a)||a!==this._$AH[n]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.C(t)}C(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends Y{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===D?void 0:t}}const K=b?b.emptyScript:"";class J extends Y{constructor(){super(...arguments),this.type=4}C(t){t&&t!==D?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Q extends Y{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:D)===z)return;const r=this._$AH,s=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==D&&(r===D||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const tt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;null==tt||tt(F,G),(null!==($=globalThis.litHtmlVersions)&&void 0!==$?$:globalThis.litHtmlVersions=[]).push("2.2.2");class rt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new G(e.insertBefore(H(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}rt.finalized=!0,rt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:rt});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:rt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function at(t,e){return(({finisher:t,descriptor:e})=>(i,r)=>{var s;if(void 0===r){const r=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(s,r)}})({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==ct||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const s=t.element.classList;this.et.forEach((t=>{t in e||(s.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(i?(s.add(t),this.et.add(t)):(s.remove(t),this.et.delete(t)))}return z}}),ht=(t,e)=>Number(`${Math.round(Number(`${t}e${e}`))}e-${e}`)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;function ut(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function pt(t,e=0){return ut(t)?Number(t):e}function vt(t,e=/\s+/){const i=[];if(null!=t){const r=Array.isArray(t)?t:`${t}`.split(e);for(const t of r){const e=`${t}`.trim();e&&i.push(e)}}return i}console.groupCollapsed("%c⚡ Power Flow Card v2.5.1 is installed","color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/ulic75/power-flow-card"),console.groupEnd();const gt=function(t,e,i){var r;return void 0===i&&(i=!1),function(){var s=[].slice.call(arguments),o=this,n=function(){r=null,i||t.apply(o,s)},a=i&&!r;clearTimeout(r),r=setTimeout(n,e),a&&t.apply(o,s)}}((t=>{console.log(`%c⚡ Power Flow Card v2.5.1 %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")}),500);let yt=class extends rt{constructor(){super(...arguments),this.unavailableOrMisconfiguredError=t=>gt(`entity "${null!=t?t:"Unknown"}" is not available or misconfigured`),this.entityAvailable=t=>{var e;return ut(null===(e=this.hass.states[t])||void 0===e?void 0:e.state)},this.entityInverted=t=>this._config.inverted_entities.includes(t),this.previousDur={},this.circleRate=(t,e)=>{var i,r;const s=null===(i=this._config)||void 0===i?void 0:i.min_flow_rate,o=null===(r=this._config)||void 0===r?void 0:r.max_flow_rate;return o-t/e*(o-s)},this.getEntityState=t=>t&&this.entityAvailable(t)?pt(this.hass.states[t].state):(this.unavailableOrMisconfiguredError(t),0),this.getEntityStateWatts=t=>{if(!t||!this.entityAvailable(t))return this.unavailableOrMisconfiguredError(t),0;const e=this.hass.states[t],i=pt(e.state);return"W"===e.attributes.unit_of_measurement?i:1e3*i},this.displayValue=t=>null===t?0:t>=this._config.watt_threshold?`${ht(t/1e3,this._config.kw_decimals)} kW`:`${ht(t,this._config.w_decimals)} W`}setConfig(t){if(!t.entities||!t.entities.battery&&!t.entities.grid&&!t.entities.solar)throw new Error("At least one entity for battery, grid or solar must be defined");this._config=Object.assign(Object.assign({},t),{inverted_entities:vt(t.inverted_entities,","),kw_decimals:pt(t.kw_decimals,1),min_flow_rate:pt(t.min_flow_rate,.75),max_flow_rate:pt(t.max_flow_rate,6),w_decimals:pt(t.w_decimals,1),watt_threshold:pt(t.watt_threshold)})}getCardSize(){return 3}render(){var t,e,i,r;if(!this._config||!this.hass)return R``;const{entities:o}=this._config,n=void 0!==o.grid,a=void 0!==o.battery,l=void 0!==o.solar,c=n&&("string"==typeof o.grid||o.grid.production);let d=0;n&&(d="string"==typeof o.grid?this.entityInverted("grid")?Math.abs(Math.min(this.getEntityStateWatts(o.grid),0)):Math.max(this.getEntityStateWatts(o.grid),0):this.getEntityStateWatts(o.grid.consumption));let h=0;l&&(h=this.entityInverted("solar")?Math.abs(Math.min(this.getEntityStateWatts(o.solar),0)):Math.max(this.getEntityStateWatts(o.solar),0));let u=null,p=null;a&&("string"==typeof o.battery?(u=this.entityInverted("battery")?Math.max(this.getEntityStateWatts(o.battery),0):Math.abs(Math.min(this.getEntityStateWatts(o.battery),0)),p=this.entityInverted("battery")?Math.abs(Math.min(this.getEntityStateWatts(o.battery),0)):Math.max(this.getEntityStateWatts(o.battery),0)):(u=this.getEntityStateWatts(null===(t=o.battery)||void 0===t?void 0:t.production),p=this.getEntityStateWatts(null===(e=o.battery)||void 0===e?void 0:e.consumption)));let v=null;c&&(v="string"==typeof o.grid?this.entityInverted("grid")?Math.max(this.getEntityStateWatts(o.grid),0):Math.abs(Math.min(this.getEntityStateWatts(o.grid),0)):this.getEntityStateWatts(o.grid.production));let g=null;l&&(g=h-(null!=v?v:0)-(null!=u?u:0));let y=null,m=null;null!==g&&g<0&&(a&&(y=Math.abs(g),y>d&&(m=Math.min(y-d,0),y=d)),g=0);let f=null;l&&a?(m||(m=Math.max(0,(v||0)-(h||0)-(u||0)-(y||0))),f=u-(y||0)):!l&&a&&(m=v);let $=0;l&&v&&($=v-(null!=m?m:0));let b=null;a&&(b=(null!=p?p:0)-(null!=m?m:0));const _=Math.max(d-(null!=y?y:0),0),w=Math.max(_+(null!=g?g:0)+(null!=b?b:0),0);let A,x;b&&(A=b/w*238.76104),l&&(x=g/w*238.76104);const M=(w-(null!=b?b:0)-(null!=g?g:0))/w*238.76104,H=_+(null!=g?g:0)+$+(null!=f?f:0)+(null!=b?b:0)+(null!=y?y:0)+(null!=m?m:0),E=(null===(i=o.battery_charge)||void 0===i?void 0:i.length)?this.getEntityState(o.battery_charge):null;let C="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z";null===E?C="M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z":E<=72&&E>44?C="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 11.5H9V14.5H15V11.5Z":E<=44&&E>16?C="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16":E<=16&&(C="M16,20H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z");const S={batteryGrid:this.circleRate(null!==(r=null!=y?y:m)&&void 0!==r?r:0,H),batteryToHome:this.circleRate(null!=b?b:0,H),gridToHome:this.circleRate(_,H),solarToBattery:this.circleRate(null!=f?f:0,H),solarToGrid:this.circleRate($,H),solarToHome:this.circleRate(null!=g?g:0,H)};return["batteryGrid","batteryToHome","gridToHome","solarToBattery","solarToGrid","solarToHome"].forEach((t=>{const e=this[`${t}Flow`];e&&this.previousDur[t]&&this.previousDur[t]!==S[t]&&(e.pauseAnimations(),e.setCurrentTime(e.getCurrentTime()*(S[t]/this.previousDur[t])),e.unpauseAnimations()),this.previousDur[t]=S[t]})),R`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          ${l?R` <div class="row">
                <div class="spacer"></div>
                <div class="circle-container solar">
                  <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")}</span
                  >
                  <div class="circle">
                    <ha-svg-icon .path=${"M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z"}></ha-svg-icon>
                    <span class="solar">
                      ${this.displayValue(h)}</span
                    >
                  </div>
                </div>
                <div class="spacer"></div>
              </div>`:R``}
          <div class="row">
            ${n?R` <div class="circle-container grid">
                  <div class="circle">
                    <ha-svg-icon .path=${"M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z"}></ha-svg-icon>
                    ${null!==v?R`<span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
                          ></ha-svg-icon
                          >${this.displayValue(v)}
                        </span>`:null}
                    <span class="consumption">
                      <ha-svg-icon
                        class="small"
                        .path=${"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}
                      ></ha-svg-icon
                      >${this.displayValue(d)}
                    </span>
                  </div>
                  <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")}</span
                  >
                </div>`:R`<div class="spacer"></div>`}
            <div class="circle-container home">
              <div class="circle">
                <ha-svg-icon .path=${"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}></ha-svg-icon>
                ${this.displayValue(w)}
                <svg>
                  ${void 0!==x?O`<circle
                            class="solar"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${x} ${238.76104-x}"
                            shape-rendering="geometricPrecision"
                            stroke-dashoffset="-${238.76104-x}"
                          />`:""}
                  ${A?O`<circle
                            class="battery"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${A} ${238.76104-A}"
                            stroke-dashoffset="-${238.76104-A-(x||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                  <circle
                    class="grid"
                    cx="40"
                    cy="40"
                    r="38"
                    stroke-dasharray="${null!=M?M:238.76104-x-(A||0)} ${void 0!==M?238.76104-M:x+(A||0)}"
                    stroke-dashoffset="0"
                    shape-rendering="geometricPrecision"
                  />
                </svg>
              </div>
              <span class="label"
                >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")}</span
              >
            </div>
          </div>
          ${a?R`<div class="row">
                <div class="spacer"></div>
                <div class="circle-container battery">
                  <div class="circle">
                    ${null!==E?R` <span>
                          ${s(E,this.hass.locale,{maximumFractionDigits:0,minimumFractionDigits:0})}%
                        </span>`:null}
                    <ha-svg-icon .path=${C}></ha-svg-icon>
                    <span class="battery-in">
                      <ha-svg-icon
                        class="small"
                        .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
                      ></ha-svg-icon
                      >${this.displayValue(u)}</span
                    >
                    <span class="battery-out">
                      <ha-svg-icon
                        class="small"
                        .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                      ></ha-svg-icon
                      >${this.displayValue(p)}</span
                    >
                  </div>
                  <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")}</span
                  >
                </div>
                <div class="spacer"></div>
              </div>`:""}
          ${l?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-home-flow"
                >
                  <path
                    id="solar"
                    class="solar"
                    d="M${a?55:53},0 v${n?15:17} c0,${a?"35 10,30 30,30":"40 10,35 30,35"} h25"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${g?O`<circle
                            r="1"
                            class="solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${S.solarToHome}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${c&&l?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-grid-flow"
                >
                  <path
                    id="return"
                    class="return"
                    d="M${a?45:47},0 v15 c0,${a?"35 -10,30 -30,30":"40 -10,35 -30,35"} h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${$&&l?O`<circle
                        r="1"
                        class="return"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${S.solarToGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#return" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${a&&l?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-battery-flow"
                >
                  <path
                    id="battery-solar"
                    class="battery-solar"
                    d="M50,0 V100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${f?O`<circle
                            r="1"
                            class="battery-solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${S.solarToBattery}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#battery-solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${n?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="grid-home-flow"
                >
                  <path
                    class="grid"
                    id="grid"
                    d="M0,${a?50:l?56:53} H100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${_?O`<circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${S.gridToHome}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#grid" />
                    </animateMotion>
                  </circle>`:""}
                </svg>
              </div>`:null}
          ${a?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-home-flow"
                >
                  <path
                    id="battery-home"
                    class="battery-home"
                    d="M55,100 v-${n?15:17} c0,-35 10,-30 30,-30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${b?O`<circle
                        r="1"
                        class="battery-home"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${S.batteryToHome}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-home" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${n&&a?R`<div class="lines ${dt({battery:a})}">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-grid-flow"
                >
                  <path
                    id="battery-grid"
                    class=${dt({"battery-from-grid":Boolean(y),"battery-to-grid":Boolean(m)})}
                    d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${y?O`<circle
                    r="1"
                    class="battery-from-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${S.batteryGrid}s"
                      repeatCount="indefinite"
                      keyPoints="1;0" keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
                  ${m?O`<circle
                        r="1"
                        class="battery-to-grid"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${S.batteryGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-grid" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
        </div>
        ${this._config.dashboard_link?R`
              <div class="card-actions">
                <a href=${this._config.dashboard_link}
                  ><mwc-button>
                    ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                  </mwc-button></a
                >
              </div>
            `:""}
      </ha-card>
    `}};yt.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new c(i,a)})`
    :host {
      --mdc-icon-size: 24px;
    }
    .card-content {
      position: relative;
    }
    .lines {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 146px;
      display: flex;
      justify-content: center;
      padding: 0 16px 16px;
      box-sizing: border-box;
    }
    .lines.battery {
      bottom: 100px;
      height: 156px;
    }
    .lines svg {
      width: calc(100% - 160px);
      height: 100%;
      max-width: 340px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .circle-container.solar {
      margin: 0 4px;
      height: 130px;
    }
    .circle-container.battery {
      height: 110px;
      justify-content: flex-end;
    }
    .spacer {
      width: 84px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 2px solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      padding-bottom: 2px;
    }
    ha-svg-icon.small {
      --mdc-icon-size: 12px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    line,
    path {
      stroke: var(--primary-text-color);
      stroke-width: 1;
      fill: none;
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .solar {
      color: var(--energy-solar-color);
    }
    .solar .circle {
      border-color: var(--energy-solar-color);
    }
    circle.solar,
    path.solar {
      stroke: var(--energy-solar-color);
    }
    circle.solar {
      stroke-width: 4;
      fill: var(--energy-solar-color);
    }
    .battery .circle {
      border-color: var(--energy-battery-in-color);
    }
    circle.battery,
    path.battery {
      stroke: var(--energy-battery-out-color);
    }
    path.battery-home,
    circle.battery-home {
      stroke: var(--energy-battery-out-color);
    }
    circle.battery-home {
      stroke-width: 4;
      fill: var(--energy-battery-out-color);
    }
    path.battery-solar,
    circle.battery-solar {
      stroke: var(--energy-battery-in-color);
    }
    circle.battery-solar {
      stroke-width: 4;
      fill: var(--energy-battery-in-color);
    }
    .battery-in {
      color: var(--energy-battery-in-color);
    }
    .battery-out {
      color: var(--energy-battery-out-color);
    }
    path.battery-from-grid {
      stroke: var(--energy-grid-consumption-color);
    }
    path.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    path.return,
    circle.return,
    circle.battery-to-grid {
      stroke: var(--energy-grid-return-color);
    }
    circle.return,
    circle.battery-to-grid {
      stroke-width: 4;
      fill: var(--energy-grid-return-color);
    }
    .return {
      color: var(--energy-grid-return-color);
    }
    .grid .circle {
      border-color: var(--energy-grid-consumption-color);
    }
    .consumption {
      color: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid,
    path.grid {
      stroke: var(--energy-grid-consumption-color);
    }
    circle.grid,
    circle.battery-from-grid {
      stroke-width: 4;
      fill: var(--energy-grid-consumption-color);
    }
    .home .circle {
      border-width: 0;
      border-color: var(--primary-color);
    }
    .home .circle.border {
      border-width: 2px;
    }
    .circle svg circle {
      animation: rotate-in 0.6s ease-in;
      transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
      fill: none;
    }
    @keyframes rotate-in {
      from {
        stroke-dashoffset: 238.76104;
        stroke-dasharray: 238.76104;
      }
    }
    .card-actions a {
      text-decoration: none;
    }
  `,t([nt({attribute:!1})],yt.prototype,"hass",void 0),t([function(t){return nt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],yt.prototype,"_config",void 0),t([at("#battery-grid-flow")],yt.prototype,"batteryGridFlow",void 0),t([at("#battery-home-flow")],yt.prototype,"batteryToHomeFlow",void 0),t([at("#grid-home-flow")],yt.prototype,"gridToHomeFlow",void 0),t([at("#solar-battery-flow")],yt.prototype,"solarToBatteryFlow",void 0),t([at("#solar-grid-flow")],yt.prototype,"solarToGridFlow",void 0),t([at("#solar-home-flow")],yt.prototype,"solarToHomeFlow",void 0),yt=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e))("power-flow-card")],yt);const mt=window;mt.customCards=mt.customCards||[],mt.customCards.push({type:"power-flow-card",name:"Power Flow Card",description:"A power distribution card inspired by the official Energy Distribution card for Home Assistant"});export{yt as PowerFlowCard};
