function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},v="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m[v]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,x="?"+E,S=`<${x}>`,C=document,A=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O=t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),T="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),L=new WeakMap,X=C.createTreeWalker(C,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=M;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===M?"!--"===l[1]?a=P:void 0!==l[1]?a=N:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=I):void 0!==l[3]&&(a=I):a===I?">"===l[0]?(a=null!=o?o:M,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?I:'"'===l[3]?j:R):a===j||a===R?a=I:a===P||a===N?a=M:(a=I,o=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===M?i+S:c>=0?(n.push(s),i.slice(0,c)+$+i.slice(c)+E+h):i+E+(-2===c?(n.push(void 0),e):h)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class W{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=F(t,e);if(this.el=W.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=X.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(E)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(E),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?tt:K})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(H.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],A()),X.nextNode(),s.push({type:2,index:++o});n.append(t[e],A())}}}else if(8===n.nodeType)if(n.data===x)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)s.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,n){var o,r,a,s;if(e===V)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=U(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);X.currentNode=o;let r=X.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new G(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new et(r,this,t)),this._$AV.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=X.nextNode(),a++)}return X.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,n){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),k(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):O(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=W.createElement(Y(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new W(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new G(this.k(A()),this.k(A()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=U(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=U(this,n[i+a],e,a),s===V&&(s=this._$AH[a]),r||(r=!k(s)||s!==this._$AH[a]),s===z?t=z:t!==z&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}let Z=class extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const J=y?y.emptyScript:"";class Q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class tt extends K{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=U(this,t,e,0))&&void 0!==i?i:z)===V)return;const n=this._$AH,o=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==z&&(n===z||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};const it={O:$,P:E,A:x,C:1,M:F,L:q,R:O,D:U,I:G,V:K,H:Q,N:tt,U:Z,F:et},nt=_.litHtmlPolyfillSupport;null==nt||nt(W,G),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,rt;let at=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new G(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return V}};at.finalized=!0,at._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:at});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:at}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},dt=(t,e,i)=>{e.constructor.createProperty(i,t)};function ht(t){return(e,i)=>void 0!==i?dt(t,e,i):ct(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return ht({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt,ft,gt;function vt(){return(vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(gt||(gt={}));var mt=function(t,e,i){var n=e?function(t){switch(t.number_format){case ft.comma_decimal:return["en-US","en"];case ft.decimal_comma:return["de","es","it"];case ft.space_comma:return["fr","sv","cs"];case ft.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==ft.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,bt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,bt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},bt=function(t,e){var i=vt({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},_t=["closed","locked","off"],yt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},wt=new Set(["call-service","divider","section","weblink","cast","select"]),$t={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Et=function(t){yt(window,"haptic",t)},xt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Et("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&yt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),yt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,_t.includes(t.states[e].state))}(e,i.entity),Et("success"));break;case"call-service":if(!n.service)return void Et("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),Et("success");break;case"fire-dom-event":yt(t,"ll-custom",n)}};function St(t){return void 0!==t&&"none"!==t.action}const Ct=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating","placeholder"],At={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0},placeholder:{name:"placeholder"}},kt={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},Dt={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Ot=a`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;
    text-align: center;
  }

  .card-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
    min-width: 100px;
  }

  #center-panel > div {
    display: flex;
    width: 100%;
    min-height: 150px;
    max-height: 200px;
    flex-basis: 50%;
    flex-flow: column;
  }

  #center-panel > div > p {
    flex: 0 1 auto;
  }

  .bar-wrapper {
    position: relative;

    width: 50%;
    height: 80%;
    margin: auto;

    flex: 1 1 auto;

    background-color: rgba(114, 114, 114, 0.2);
  }

  bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-text-color);
  }

  item {
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .buy-sell {
    height: 28px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
  }

  .grid-buy {
    color: red;
  }

  .grid-sell {
    color: green;
  }

  .placeholder {
    height: 62px;
  }

  #right-panel > item > value {
    float: left;
  }

  #right-panel > item > badge {
    float: right;
  }

  badge {
    float: left;

    width: 50%;
    padding: 4px;

    border: 1px solid;
    border-color: var(--disabled-text-color);
    border-radius: 1em;

    position: relative;
  }

  icon > ha-icon {
    display: block;

    width: 24px;
    margin: 0 auto;

    color: var(--paper-item-icon-color);
  }

  .secondary {
    position: absolute;
    top: 4px;
    right: 8%;
    font-size: 80%;
  }

  value {
    float: right;
    width: 50%;
    min-width: 54px;
  }

  value > p {
    height: 1em;
  }

  table {
    width: 100%;
  }

  /**************
  ARROW ANIMATION
  **************/

  .blank {
    width: 55px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.2;
    background-color: var(--secondary-text-color);
  }

  .arrow-container {
    display: flex;
    width: 55px;
    height: 16px;
    overflow: hidden;
    margin: auto;
  }

  .left {
    transform: rotate(180deg);
  }

  .arrow {
    width: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 16px solid var(--secondary-text-color);
    margin: 0 1.5px;
  }

  .flash {
    animation: flash 3s infinite steps(1);
    opacity: 0.2;
  }

  @keyframes flash {
    0%,
    66% {
      opacity: 0.2;
    }
    33% {
      opacity: 0.8;
    }
  }

  .delay-1 {
    animation-delay: 1s;
  }
  .delay-2 {
    animation-delay: 2s;
  }

  .slide {
    animation: slide 1.5s linear infinite both;
    position: relative;
    left: -19px;
  }

  @keyframes slide {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(19px);
      transform: translateX(19px);
    }
  }
`,Tt=B`
  <style>
    /**********
    Mobile View
    **********/
    .card-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .placeholder {
      height: 114px !important;
    }
    item > badge,
    item > value {
      display: block;
      float: none !important;

      width: 72px;
      margin: 0 auto;
    }

    .arrow {
      margin: 0px 8px;
    }
  </style>
`;var Mt={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Pt={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals","display-abs":"Display Absolute Value",double_tap_action:"Double Tap Action",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",replace_name:"Replace Name","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",tap_action:"Tap Action",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},Nt={common:Mt,editor:Pt},It={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},Rt={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Interaktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausschließen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",double_tap_action:"Doppel Tipp Aktion",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Wert Invertieren",name:"Name",preset:"Vorlagen",ratio:"Anteil",replace_name:"Namen Ersetzen","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",tap_action:"Tipp Aktion",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},jt={common:It,editor:Rt},Ht={version:"Verzia",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Chybná konfigurácia",show_warning:"Zobraziť upozornenia"},Bt={actions:{add:"Pridať",edit:"Editovať",remove:"Odobrať",save:"Uložiť"},optional:"Voliteľné",required:"Požadované",settings:{action_settings:"Nastavenia akcie",animation:"Animácia",autarky:"sebestačnosť",attribute:"Atribút",background_color:"Farba pozadia",battery_percentage:"Nabitie batérie %",bigger:"Väčšie",calc_excluded:"Vylúčené z výpočtov",center:"Centrum",color:"Farba","color-settings":"Nastavenia farby",color_threshold:"Prah farby",decimals:"Desatinné čísla","display-abs":"Zobraziť absolútnu hodnotu",double_tap_action:"Akcia dvojitého klepnutia",entities:"Entity",entity:"Entita",equal:"Rovné","grid-buy":"Sieť nákup","grid-sell":"Sieť predaj","hide-arrows":"Skryť šípky",icon:"Ikona","invert-value":"Invertovať hodnotu",name:"Názov",preset:"Predvoľba",ratio:"pomer",replace_name:"Nahradiť názov","secondary-info":"Sekundárne informácie",settings:"nastavenia",smaller:"Menšie",tap_action:"Akcia klepnutia",threshold:"Prah",title:"Titul",unit_of_display:"Jednotka zobrazenia",value:"hodnota"}},Vt={common:Ht,editor:Bt};const zt={en:Object.freeze({__proto__:null,common:Mt,default:Nt,editor:Pt}),de:Object.freeze({__proto__:null,common:It,default:jt,editor:Rt}),sk:Object.freeze({__proto__:null,common:Ht,default:Vt,editor:Bt})};function Lt(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),zt[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),zt.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),zt.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}var Xt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Yt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Ft="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Wt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Ft):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Ut=["top","right","bottom","left","width","height","size","weight"],qt="undefined"!=typeof MutationObserver,Gt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){Wt(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Yt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),qt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Yt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Ut.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Kt=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Zt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Ft},Jt=oe(0,0,0,0);function Qt(t){return parseFloat(t)||0}function te(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Qt(t["border-"+i+"-width"])}),0)}function ee(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Jt;var n=Zt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Qt(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Qt(n.width),l=Qt(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=te(n,"left","right")+r),Math.round(l+a)!==i&&(l-=te(n,"top","bottom")+a)),!function(t){return t===Zt(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return oe(o.left,o.top,s,l)}var ie="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Zt(t).SVGGraphicsElement}:function(t){return t instanceof Zt(t).SVGElement&&"function"==typeof t.getBBox};function ne(t){return Yt?ie(t)?function(t){var e=t.getBBox();return oe(0,0,e.width,e.height)}(t):ee(t):Jt}function oe(t,e,i,n){return{x:t,y:e,width:i,height:n}}var re=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=oe(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=ne(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),ae=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return Kt(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);Kt(this,{target:t,contentRect:i})},se=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Xt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new re(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Zt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new ae(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),le="undefined"!=typeof WeakMap?new WeakMap:new Xt,ce=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Gt.getInstance(),n=new se(e,i,this);le.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){ce.prototype[t]=function(){var e;return(e=le.get(this))[t].apply(e,arguments)}}));var de=void 0!==Ft.ResizeObserver?Ft.ResizeObserver:ce,he=Object.freeze({__proto__:null,default:de});function ue(t,e,i){const n=new CustomEvent(e,{bubbles:!1,composed:!1,detail:i});t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=2,fe=t=>(...e)=>({_$litDirective$:t,values:e});class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ve=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!ve(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!ve(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!ve(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},me=["more-info","toggle","navigate","url","call-service","none"];class be extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e={}){t.actionHandler&&ve(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,yt(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,yt(n,"action",{action:"double_tap"})):yt(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",be);const _e=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},ye=fe(class extends ge{update(t,[e]){return _e(t.element,e),V}render(t){}});var we="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",$e="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";let Ee=class extends at{render(){var t,e,i,n,o,r,a,s;if(!this.hass||!this.config||"placeholder"==this.config.preset)return B``;const l=this.config;let c=[];l.entity&&(c=Object.keys(Object.assign({},null===(t=this.hass)||void 0===t?void 0:t.states[l.entity||0].attributes))||[]);let d=[];return l.secondary_info_entity&&(d=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[l.secondary_info_entity].attributes))||[]),B`
      <div class="side-by-side">
        <ha-icon-picker
          .label="${Lt("editor.settings.icon")}  (${Lt("editor.optional")})"
          .value=${l.icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></ha-icon-picker>
        <ha-textfield
          label="${Lt("editor.settings.name")} (${Lt("editor.optional")})"
          .value=${l.name||void 0}
          .configValue=${"name"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Lt("editor.settings.entity")} (${Lt("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${l.entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          label="${Lt("editor.settings.attribute")} (${Lt("editor.optional")})"
          .configValue=${"attribute"}
          .value=${l.attribute||""}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${c.length>0?B`<mwc-list-item></mwc-list-item>`:""}
          ${c.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="side-by-side">
        <ha-select
          label="${Lt("editor.settings.preset")}"
          .configValue=${"preset"}
          .value=${l.preset||Ct[0]}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${Ct.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${l.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._valueChanged}
          />
          <label for="hide-arrows"> ${Lt("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">${this._renderPresetFeatures()}</div>
      <br /><br />
      <h3>${Lt("editor.settings.value",!0)} ${Lt("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <ha-textfield
          label="${Lt("editor.settings.unit_of_display")}"
          .value=${l.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          auto-validate
          pattern="[0-9]"
          label="${Lt("editor.settings.decimals")}"
          .value=${l.decimals||""}
          .configValue=${"decimals"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${l.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._valueChanged}
          />
          <label for="invert-value"> ${Lt("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=l.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._valueChanged}
          />
          <label for="display-abs"> ${Lt("editor.settings.display-abs")} </label>
        </div>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${l.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._valueChanged}
          />
          <label for="calc_excluded"> ${Lt("editor.settings.calc_excluded")} </label>
        </div>
        <ha-textfield
          label="${Lt("editor.settings.threshold")}"
          .value=${l.threshold||""}
          .configValue=${"threshold"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <br />
      <h3>${Lt("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Lt("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${l.secondary_info_entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          allow-custom-entity
          label="${Lt("editor.settings.attribute")} (${Lt("editor.optional")})"
          .value=${l.secondary_info_attribute||""}
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${d.length>0?B`<mwc-list-item></mwc-list-item>`:void 0}
          ${d.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="checkbox">
        <input
          type="checkbox"
          id="secondary_info_replace_name"
          .checked="${l.secondary_info_replace_name||!1}"
          .configValue=${"secondary_info_replace_name"}
          @change=${this._valueChanged}
        />
        <label for="secondary_info_replace_name"> ${Lt("editor.settings.replace_name")}</label>
      </div>
      <br />
      <h3>${Lt("editor.settings.color-settings",!0)}</h3>
      <ha-textfield
        label="${Lt("editor.settings.color_threshold")}"
        .value=${l.color_threshold||0}
        .configValue=${"color_threshold"}
        @input=${this._valueChanged}
      ></ha-textfield>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; ${l.color_threshold||0}</th>
          <th>= ${l.color_threshold||0}</th>
          <th>&lt; ${l.color_threshold||0}</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.bigger")}"
              .value=${(null===(i=l.icon_color)||void 0===i?void 0:i.bigger)||""}
              .configValue=${"icon_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.equal")}"
              .value=${(null===(n=l.icon_color)||void 0===n?void 0:n.equal)||""}
              .configValue=${"icon_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.smaller")}"
              .value=${(null===(o=l.icon_color)||void 0===o?void 0:o.smaller)||""}
              .configValue=${"icon_color.smaller"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
        </tr>
        <tr>
          <th>arrows</th>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.bigger")}"
              .value=${(null===(r=l.arrow_color)||void 0===r?void 0:r.bigger)||""}
              .configValue=${"arrow_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.equal")}"
              .value=${(null===(a=l.arrow_color)||void 0===a?void 0:a.equal)||""}
              .configValue=${"arrow_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Lt("editor.settings.smaller")}"
              .value=${(null===(s=l.arrow_color)||void 0===s?void 0:s.smaller)||""}
              .configValue=${"arrow_color.smaller"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
        </tr>
      </table>
      <br />
      <h3>${Lt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <ha-selector
          label="${Lt("editor.settings.tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:me}}}
          .value=${l.tap_action||{action:"more-info"}}
          .configValue=${"tap_action"}
          @value-changed=${this._valueChanged}
        >
        </ha-selector>
        <ha-selector
          label="${Lt("editor.settings.double_tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:me}}}
          .value=${l.double_tap_action}
          .configValue=${"double_tap_action"}
          @value-changed=${this._valueChanged}
        >
        </ha-selector>
      </div>
    `}_renderPresetFeatures(){if(!this.config||!this.hass)return B``;switch(this.config.preset){case"battery":return B`
          <ha-entity-picker
            label="${Lt("editor.settings.battery_percentage")} (${Lt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"battery_percentage_entity"}
            .value=${this.config.battery_percentage_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        `;case"grid":return B`
          <ha-entity-picker
            label="${Lt("editor.settings.grid-buy")} (${Lt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"grid_buy_entity"}
            .value=${this.config.grid_buy_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
          <ha-entity-picker
            label="${Lt("editor.settings.grid-sell")} (${Lt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"grid_sell_entity"}
            .value=${this.config.grid_sell_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        `;default:return B``}}_valueChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=void 0!==e.checked?e.checked:t.detail.value||e.value||t.detail.config,n=e.configValue;n&&this.config[n]!==i&&ue(this,"config-changed",Object.assign(Object.assign({},this.config),{[n]:i}))}_colorChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=e.value,n=e.configValue;if(!n)return;const[o,r]=n.split("."),a=Object.assign({},this.config[o])||{};a[r]=i,n&&this.config[o]!==a&&ue(this,"config-changed",Object.assign(Object.assign({},this.config),{[o]:a}))}static get styles(){return a`
      .checkbox {
        display: flex;
        align-items: center;
        padding: 8px 0;
      }
      .checkbox input {
        height: 20px;
        width: 20px;
        margin-left: 0;
        margin-right: 8px;
      }
      h3 {
        margin-bottom: 0.5em;
      }
      .row {
        margin-bottom: 12px;
        margin-top: 12px;
        display: block;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1 1 0%;
        padding-right: 4px;
      }
    `}};t([ht({attribute:!1})],Ee.prototype,"config",void 0),t([ht({attribute:!1})],Ee.prototype,"hass",void 0),Ee=t([lt("power-distribution-card-item-editor")],Ee);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:xe}=it,Se=()=>document.createComment(""),Ce=(t,e,i)=>{var n;const o=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(Se(),r),n=o.insertBefore(Se(),r);i=new xe(e,n,t,t.options)}else{const e=i._$AB.nextSibling,a=i._$AM,s=a!==t;if(s){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==r||s){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,r),t=e}}}return i},Ae=(t,e,i=t)=>(t._$AI(e,i),t),ke={},De=(t,e=ke)=>t._$AH=e,Oe=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},Te=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Me=fe(class extends ge{constructor(t){if(super(t),t.type!==pe)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let a=0;for(const e of t)o[a]=n?n(e,a):a,r[a]=i(e,a),a++;return{values:r,keys:o}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,n]){var o;const r=(t=>t._$AH)(t),{values:a,keys:s}=this.ct(e,i,n);if(!Array.isArray(r))return this.ut=s,a;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],c=[];let d,h,u=0,p=r.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===s[f])c[f]=Ae(r[u],a[f]),u++,f++;else if(l[p]===s[g])c[g]=Ae(r[p],a[g]),p--,g--;else if(l[u]===s[g])c[g]=Ae(r[u],a[g]),Ce(t,c[g+1],r[u]),u++,g--;else if(l[p]===s[f])c[f]=Ae(r[p],a[f]),Ce(t,r[u],r[p]),p--,f++;else if(void 0===d&&(d=Te(s,f,g),h=Te(l,u,p)),d.has(l[u]))if(d.has(l[p])){const e=h.get(s[f]),i=void 0!==e?r[e]:null;if(null===i){const e=Ce(t,r[u]);Ae(e,a[f]),c[f]=e}else c[f]=Ae(i,a[f]),Ce(t,r[u],i),r[e]=null;f++}else Oe(r[p]),p--;else Oe(r[u]),u++;for(;f<=g;){const e=Ce(t,c[g+1]);Ae(e,a[f]),c[f++]=e}for(;u<=p;){const t=r[u++];null!==t&&Oe(t)}return this.ut=s,De(t,c),V}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Pe(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Ne(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Pe(Object(i),!0).forEach((function(e){Re(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Pe(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Ie(t){return Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(t)}function Re(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function je(){return je=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},je.apply(this,arguments)}function He(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function Be(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Ve=Be(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ze=Be(/Edge/i),Le=Be(/firefox/i),Xe=Be(/safari/i)&&!Be(/chrome/i)&&!Be(/android/i),Ye=Be(/iP(ad|od|hone)/i),Fe=Be(/chrome/i)&&Be(/android/i),We={capture:!1,passive:!1};function Ue(t,e,i){t.addEventListener(e,i,!Ve&&We)}function qe(t,e,i){t.removeEventListener(e,i,!Ve&&We)}function Ge(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Ke(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Ze(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Ge(t,e):Ge(t,e))||n&&t===i)return t;if(t===i)break}while(t=Ke(t))}return null}var Je,Qe=/\s+/g;function ti(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Qe," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Qe," ")}}function ei(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function ii(t,e){var i="";if("string"==typeof t)i=t;else do{var n=ei(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function ni(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function oi(){var t=document.scrollingElement;return t||document.documentElement}function ri(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==oi()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Ve))do{if(o&&o.getBoundingClientRect&&("none"!==ei(o,"transform")||i&&"static"!==ei(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(ei(o,"border-top-width")),s-=u.left+parseInt(ei(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=ii(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function ai(t){var e=ri(t),i=parseInt(ei(t,"padding-left")),n=parseInt(ei(t,"padding-top")),o=parseInt(ei(t,"padding-right")),r=parseInt(ei(t,"padding-bottom"));return e.top+=n+parseInt(ei(t,"border-top-width")),e.left+=i+parseInt(ei(t,"border-left-width")),e.width=t.clientWidth-i-o,e.height=t.clientHeight-n-r,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function si(t,e,i){for(var n=ui(t,!0),o=ri(t)[e];n;){var r=ri(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===oi())break;n=ui(n,!1)}return!1}function li(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==vn.ghost&&(n||a[r]!==vn.dragged)&&Ze(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function ci(t,e){for(var i=t.lastElementChild;i&&(i===vn.ghost||"none"===ei(i,"display")||e&&!Ge(i,e));)i=i.previousElementSibling;return i||null}function di(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===vn.clone||e&&!Ge(t,e)||i++;return i}function hi(t){var e=0,i=0,n=oi();if(t)do{var o=ii(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function ui(t,e){if(!t||!t.getBoundingClientRect)return oi();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=ei(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return oi();if(n||e)return i;n=!0}}}while(i=i.parentNode);return oi()}function pi(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function fi(t,e){return function(){if(!Je){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Je=setTimeout((function(){Je=void 0}),e)}}}function gi(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function vi(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var mi="Sortable"+(new Date).getTime();function bi(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==ei(t,"display")&&t!==vn.ghost){e.push({target:t,rect:ri(t)});var i=Ne({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=ii(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=ri(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ii(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&pi(l,s)&&!pi(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),pi(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){ei(t,"transition",""),ei(t,"transform","");var o=ii(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,ei(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),ei(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),ei(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){ei(t,"transition",""),ei(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var _i=[],yi={initializeByDefault:!0},wi={mount:function(t){for(var e in yi)yi.hasOwnProperty(e)&&!(e in t)&&(t[e]=yi[e]);_i.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),_i.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";_i.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](Ne({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](Ne({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in _i.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,je(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return _i.forEach((function(n){"function"==typeof n.eventProperties&&je(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return _i.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var $i=["evt"],Ei=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=He(i,$i);wi.pluginEvent.bind(vn)(t,e,Ne({dragEl:Si,parentEl:Ci,ghostEl:Ai,rootEl:ki,nextEl:Di,lastDownEl:Oi,cloneEl:Ti,cloneHidden:Mi,dragStarted:Fi,putSortable:Hi,activeSortable:vn.active,originalEvent:n,oldIndex:Pi,oldDraggableIndex:Ii,newIndex:Ni,newDraggableIndex:Ri,hideGhostForTarget:un,unhideGhostForTarget:pn,cloneNowHidden:function(){Mi=!0},cloneNowShown:function(){Mi=!1},dispatchSortableEvent:function(t){xi({sortable:e,name:t,originalEvent:n})}},o))};function xi(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[mi]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Ve||ze?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=Ne(Ne({},f),wi.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(Ne({putSortable:Hi,cloneEl:Ti,targetEl:Si,rootEl:ki,oldIndex:Pi,oldDraggableIndex:Ii,newIndex:Ni,newDraggableIndex:Ri},t))}var Si,Ci,Ai,ki,Di,Oi,Ti,Mi,Pi,Ni,Ii,Ri,ji,Hi,Bi,Vi,zi,Li,Xi,Yi,Fi,Wi,Ui,qi,Gi,Ki=!1,Zi=!1,Ji=[],Qi=!1,tn=!1,en=[],nn=!1,on=[],rn="undefined"!=typeof document,an=Ye,sn=ze||Ve?"cssFloat":"float",ln=rn&&!Fe&&!Ye&&"draggable"in document.createElement("div"),cn=function(){if(rn){if(Ve)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),dn=function(t,e){var i=ei(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=li(t,0,e),r=li(t,1,e),a=o&&ei(o),s=r&&ei(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+ri(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+ri(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[sn]||r&&"none"===i[sn]&&l+c>n)?"vertical":"horizontal"},hn=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Ie(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},un=function(){!cn&&Ai&&ei(Ai,"display","none")},pn=function(){!cn&&Ai&&ei(Ai,"display","")};rn&&!Fe&&document.addEventListener("click",(function(t){if(Zi)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Zi=!1,!1}),!0);var fn=function(t){if(Si){var e=function(t,e){var i;return Ji.some((function(n){var o=n[mi].options.emptyInsertThreshold;if(o&&!ci(n)){var r=ri(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[mi]._onDragOver(i)}}},gn=function(t){Si&&Si.parentNode[mi]._isOutsideThisEl(t.target)};function vn(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=je({},e),t[mi]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return dn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==vn.supportPointer&&"PointerEvent"in window&&!Xe,emptyInsertThreshold:5};for(var n in wi.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in hn(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&ln,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Ue(t,"pointerdown",this._onTapStart):(Ue(t,"mousedown",this._onTapStart),Ue(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ue(t,"dragover",this),Ue(t,"dragenter",this)),Ji.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),je(this,bi())}function mn(t,e,i,n,o,r,a,s){var l,c,d=t[mi],h=d.options.onMove;return!window.CustomEvent||Ve||ze?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||ri(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function bn(t){t.draggable=!1}function _n(){nn=!1}function yn(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function wn(t){return setTimeout(t,0)}function $n(t){return clearTimeout(t)}vn.prototype={constructor:vn,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Wi=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Si):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){on.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&on.push(n)}}(i),!Si&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Xe||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Ze(s,n.draggable,i,!1))&&s.animated||Oi===s)){if(Pi=di(s),Ii=di(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return xi({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Ei("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Ze(l,n.trim(),i,!1))return xi({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),Ei("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Ze(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!Si&&i.parentNode===r){var l=ri(i);if(ki=r,Ci=(Si=i).parentNode,Di=Si.nextSibling,Oi=i,ji=a.group,vn.dragged=Si,Bi={target:Si,clientX:(e||t).clientX,clientY:(e||t).clientY},Xi=Bi.clientX-l.left,Yi=Bi.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Si.style["will-change"]="all",n=function(){Ei("delayEnded",o,{evt:t}),vn.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!Le&&o.nativeDraggable&&(Si.draggable=!0),o._triggerDragStart(t,e),xi({sortable:o,name:"choose",originalEvent:t}),ti(Si,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){ni(Si,t.trim(),bn)})),Ue(s,"dragover",fn),Ue(s,"mousemove",fn),Ue(s,"touchmove",fn),Ue(s,"mouseup",o._onDrop),Ue(s,"touchend",o._onDrop),Ue(s,"touchcancel",o._onDrop),Le&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Si.draggable=!0),Ei("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(ze||Ve))n();else{if(vn.eventCanceled)return void this._onDrop();Ue(s,"mouseup",o._disableDelayedDrag),Ue(s,"touchend",o._disableDelayedDrag),Ue(s,"touchcancel",o._disableDelayedDrag),Ue(s,"mousemove",o._delayedDragTouchMoveHandler),Ue(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Ue(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Si&&bn(Si),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;qe(t,"mouseup",this._disableDelayedDrag),qe(t,"touchend",this._disableDelayedDrag),qe(t,"touchcancel",this._disableDelayedDrag),qe(t,"mousemove",this._delayedDragTouchMoveHandler),qe(t,"touchmove",this._delayedDragTouchMoveHandler),qe(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Ue(document,"pointermove",this._onTouchMove):Ue(document,e?"touchmove":"mousemove",this._onTouchMove):(Ue(Si,"dragend",this),Ue(ki,"dragstart",this._onDragStart));try{document.selection?wn((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Ki=!1,ki&&Si){Ei("dragStarted",this,{evt:e}),this.nativeDraggable&&Ue(document,"dragover",gn);var i=this.options;!t&&ti(Si,i.dragClass,!1),ti(Si,i.ghostClass,!0),vn.active=this,t&&this._appendGhost(),xi({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Vi){this._lastX=Vi.clientX,this._lastY=Vi.clientY,un();for(var t=document.elementFromPoint(Vi.clientX,Vi.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Vi.clientX,Vi.clientY))!==e;)e=t;if(Si.parentNode[mi]._isOutsideThisEl(t),e)do{if(e[mi]){if(e[mi]._onDragOver({clientX:Vi.clientX,clientY:Vi.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);pn()}},_onTouchMove:function(t){if(Bi){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=Ai&&ii(Ai,!0),a=Ai&&r&&r.a,s=Ai&&r&&r.d,l=an&&Gi&&hi(Gi),c=(o.clientX-Bi.clientX+n.x)/(a||1)+(l?l[0]-en[0]:0)/(a||1),d=(o.clientY-Bi.clientY+n.y)/(s||1)+(l?l[1]-en[1]:0)/(s||1);if(!vn.active&&!Ki){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Ai){r?(r.e+=c-(zi||0),r.f+=d-(Li||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");ei(Ai,"webkitTransform",h),ei(Ai,"mozTransform",h),ei(Ai,"msTransform",h),ei(Ai,"transform",h),zi=c,Li=d,Vi=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Ai){var t=this.options.fallbackOnBody?document.body:ki,e=ri(Si,!0,an,!0,t),i=this.options;if(an){for(Gi=t;"static"===ei(Gi,"position")&&"none"===ei(Gi,"transform")&&Gi!==document;)Gi=Gi.parentNode;Gi!==document.body&&Gi!==document.documentElement?(Gi===document&&(Gi=oi()),e.top+=Gi.scrollTop,e.left+=Gi.scrollLeft):Gi=oi(),en=hi(Gi)}ti(Ai=Si.cloneNode(!0),i.ghostClass,!1),ti(Ai,i.fallbackClass,!0),ti(Ai,i.dragClass,!0),ei(Ai,"transition",""),ei(Ai,"transform",""),ei(Ai,"box-sizing","border-box"),ei(Ai,"margin",0),ei(Ai,"top",e.top),ei(Ai,"left",e.left),ei(Ai,"width",e.width),ei(Ai,"height",e.height),ei(Ai,"opacity","0.8"),ei(Ai,"position",an?"absolute":"fixed"),ei(Ai,"zIndex","100000"),ei(Ai,"pointerEvents","none"),vn.ghost=Ai,t.appendChild(Ai),ei(Ai,"transform-origin",Xi/parseInt(Ai.style.width)*100+"% "+Yi/parseInt(Ai.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;Ei("dragStart",this,{evt:t}),vn.eventCanceled?this._onDrop():(Ei("setupClone",this),vn.eventCanceled||((Ti=vi(Si)).removeAttribute("id"),Ti.draggable=!1,Ti.style["will-change"]="",this._hideClone(),ti(Ti,this.options.chosenClass,!1),vn.clone=Ti),i.cloneId=wn((function(){Ei("clone",i),vn.eventCanceled||(i.options.removeCloneOnHide||ki.insertBefore(Ti,Si),i._hideClone(),xi({sortable:i,name:"clone"}))})),!e&&ti(Si,o.dragClass,!0),e?(Zi=!0,i._loopId=setInterval(i._emulateDragOver,50)):(qe(document,"mouseup",i._onDrop),qe(document,"touchend",i._onDrop),qe(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,Si)),Ue(document,"drop",i),ei(Si,"transform","translateZ(0)")),Ki=!0,i._dragStartId=wn(i._dragStarted.bind(i,e,t)),Ue(document,"selectstart",i),Fi=!0,Xe&&ei(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=vn.active,d=ji===l,h=s.sort,u=Hi||c,p=this,f=!1;if(!nn){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Ze(a,s.draggable,r,!0),D("dragOver"),vn.eventCanceled)return f;if(Si.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return T(!1);if(Zi=!1,c&&!s.disabled&&(d?h||(n=Ci!==ki):Hi===this||(this.lastPutMode=ji.checkPull(this,c,Si,t))&&l.checkPut(this,c,Si,t))){if(o="vertical"===this._getDirection(t,a),e=ri(Si),D("dragOverValid"),vn.eventCanceled)return f;if(n)return Ci=ki,O(),this._hideClone(),D("revert"),vn.eventCanceled||(Di?ki.insertBefore(Si,Di):ki.appendChild(Si)),T(!0);var g=ci(r,s.draggable);if(!g||function(t,e,i){var n=ri(ci(i.el,i.options.draggable)),o=ai(i.el),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}(t,o,this)&&!g.animated){if(g===Si)return T(!1);if(g&&r===t.target&&(a=g),a&&(i=ri(a)),!1!==mn(ki,r,Si,e,a,i,t,!!a))return O(),g&&g.nextSibling?r.insertBefore(Si,g.nextSibling):r.appendChild(Si),Ci=r,M(),T(!0)}else if(g&&function(t,e,i){var n=ri(li(i.el,0,i.options,!0)),o=ai(i.el),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=li(r,0,s,!0);if(v===Si)return T(!1);if(i=ri(a=v),!1!==mn(ki,r,Si,e,a,i,t,!1))return O(),r.insertBefore(Si,v),Ci=r,M(),T(!0)}else if(a.parentNode===r){i=ri(a);var m,b,_,y=Si.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(Si.animated&&Si.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=si(a,"top","top")||si(Si,"top","top"),x=E?E.scrollTop:void 0;if(Wi!==a&&(b=i[$],Qi=!1,tn=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&qi<c*o){if(!Qi&&(1===Ui?l>d+c*r/2:l<h-c*r/2)&&(Qi=!0),Qi)u=!0;else if(1===Ui?l<d+qi:l>h-qi)return-Ui}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return di(Si)<di(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,tn,Wi===a),0!==m){var S=di(Si);do{S-=m,_=Ci.children[S]}while(_&&("none"===ei(_,"display")||_===Ai))}if(0===m||_===a)return T(!1);Wi=a,Ui=m;var C=a.nextElementSibling,A=!1,k=mn(ki,r,Si,e,a,i,t,A=1===m);if(!1!==k)return 1!==k&&-1!==k||(A=1===k),nn=!0,setTimeout(_n,30),O(),A&&!C?r.appendChild(Si):a.parentNode.insertBefore(Si,A?C:a),E&&gi(E,0,x-E.scrollTop),Ci=Si.parentNode,void 0===b||tn||(qi=Math.abs(b-ri(a)[$])),M(),T(!0)}if(r.contains(Si))return T(!1)}return!1}function D(s,l){Ei(s,p,Ne({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:T,onMove:function(i,n){return mn(ki,r,Si,e,i,ri(i),t,n)},changed:M},l))}function O(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function T(e){return D("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(ti(Si,Hi?Hi.options.ghostClass:c.options.ghostClass,!1),ti(Si,s.ghostClass,!0)),Hi!==p&&p!==vn.active?Hi=p:p===vn.active&&Hi&&(Hi=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===Si&&!Si.animated||a===r&&!a.animated)&&(Wi=null),s.dragoverBubble||t.rootEl||a===document||(Si.parentNode[mi]._isOutsideThisEl(t.target),!e&&fn(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Ni=di(Si),Ri=di(Si,s.draggable),xi({sortable:p,name:"change",toEl:r,newIndex:Ni,newDraggableIndex:Ri,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){qe(document,"mousemove",this._onTouchMove),qe(document,"touchmove",this._onTouchMove),qe(document,"pointermove",this._onTouchMove),qe(document,"dragover",fn),qe(document,"mousemove",fn),qe(document,"touchmove",fn)},_offUpEvents:function(){var t=this.el.ownerDocument;qe(t,"mouseup",this._onDrop),qe(t,"touchend",this._onDrop),qe(t,"pointerup",this._onDrop),qe(t,"touchcancel",this._onDrop),qe(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Ni=di(Si),Ri=di(Si,i.draggable),Ei("drop",this,{evt:t}),Ci=Si&&Si.parentNode,Ni=di(Si),Ri=di(Si,i.draggable),vn.eventCanceled||(Ki=!1,tn=!1,Qi=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),$n(this.cloneId),$n(this._dragStartId),this.nativeDraggable&&(qe(document,"drop",this),qe(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Xe&&ei(document.body,"user-select",""),ei(Si,"transform",""),t&&(Fi&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Ai&&Ai.parentNode&&Ai.parentNode.removeChild(Ai),(ki===Ci||Hi&&"clone"!==Hi.lastPutMode)&&Ti&&Ti.parentNode&&Ti.parentNode.removeChild(Ti),Si&&(this.nativeDraggable&&qe(Si,"dragend",this),bn(Si),Si.style["will-change"]="",Fi&&!Ki&&ti(Si,Hi?Hi.options.ghostClass:this.options.ghostClass,!1),ti(Si,this.options.chosenClass,!1),xi({sortable:this,name:"unchoose",toEl:Ci,newIndex:null,newDraggableIndex:null,originalEvent:t}),ki!==Ci?(Ni>=0&&(xi({rootEl:Ci,name:"add",toEl:Ci,fromEl:ki,originalEvent:t}),xi({sortable:this,name:"remove",toEl:Ci,originalEvent:t}),xi({rootEl:Ci,name:"sort",toEl:Ci,fromEl:ki,originalEvent:t}),xi({sortable:this,name:"sort",toEl:Ci,originalEvent:t})),Hi&&Hi.save()):Ni!==Pi&&Ni>=0&&(xi({sortable:this,name:"update",toEl:Ci,originalEvent:t}),xi({sortable:this,name:"sort",toEl:Ci,originalEvent:t})),vn.active&&(null!=Ni&&-1!==Ni||(Ni=Pi,Ri=Ii),xi({sortable:this,name:"end",toEl:Ci,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Ei("nulling",this),ki=Si=Ci=Ai=Di=Ti=Oi=Mi=Bi=Vi=Fi=Ni=Ri=Pi=Ii=Wi=Ui=Hi=ji=vn.dragged=vn.ghost=vn.clone=vn.active=null,on.forEach((function(t){t.checked=!0})),on.length=zi=Li=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Si&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Ze(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||yn(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Ze(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Ze(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=wi.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&hn(i)},destroy:function(){Ei("destroy",this);var t=this.el;t[mi]=null,qe(t,"mousedown",this._onTapStart),qe(t,"touchstart",this._onTapStart),qe(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(qe(t,"dragover",this),qe(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Ji.splice(Ji.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Mi){if(Ei("hideClone",this),vn.eventCanceled)return;ei(Ti,"display","none"),this.options.removeCloneOnHide&&Ti.parentNode&&Ti.parentNode.removeChild(Ti),Mi=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Mi){if(Ei("showClone",this),vn.eventCanceled)return;Si.parentNode!=ki||this.options.group.revertClone?Di?ki.insertBefore(Ti,Di):ki.appendChild(Ti):ki.insertBefore(Ti,Si),this.options.group.revertClone&&this.animate(Si,Ti),ei(Ti,"display",""),Mi=!1}}else this._hideClone()}},rn&&Ue(document,"touchmove",(function(t){(vn.active||Ki)&&t.cancelable&&t.preventDefault()})),vn.utils={on:Ue,off:qe,css:ei,find:ni,is:function(t,e){return!!Ze(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:fi,closest:Ze,toggleClass:ti,clone:vi,index:di,nextTick:wn,cancelNextTick:$n,detectDirection:dn,getChild:li},vn.get=function(t){return t[mi]},vn.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(vn.utils=Ne(Ne({},vn.utils),t.utils)),wi.mount(t)}))},vn.create=function(t,e){return new vn(t,e)},vn.version="1.15.1";var En,xn,Sn,Cn,An,kn,Dn=[],On=!1;function Tn(){Dn.forEach((function(t){clearInterval(t.pid)})),Dn=[]}function Mn(){clearInterval(kn)}var Pn=fi((function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=oi(),d=!1;xn!==i&&(xn=i,Tn(),En=e.scroll,o=e.scrollFn,!0===En&&(En=ui(i,!0)));var h=0,u=En;do{var p=u,f=ri(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=ei(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var k=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),D=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!Dn[h])for(var O=0;O<=h;O++)Dn[O]||(Dn[O]={});Dn[h].vx==k&&Dn[h].vy==D&&Dn[h].el===p||(Dn[h].el=p,Dn[h].vx=k,Dn[h].vy=D,clearInterval(Dn[h].pid),0==k&&0==D||(d=!0,Dn[h].pid=setInterval(function(){n&&0===this.layer&&vn.active._onTouchMove(An);var e=Dn[this.layer].vy?Dn[this.layer].vy*l:0,i=Dn[this.layer].vx?Dn[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(vn.dragged.parentNode[mi],i,e,t,An,Dn[this.layer].el)||gi(Dn[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=ui(u,!1)));On=d}}),30),Nn=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function In(){}function Rn(){}
/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function jn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Hn(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?jn(Object(i),!0).forEach((function(e){Vn(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):jn(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Bn(t){return Bn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(t)}function Vn(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function zn(){return zn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},zn.apply(this,arguments)}function Ln(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}In.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=li(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Nn},je(In,{pluginName:"revertOnSpill"}),Rn.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Nn},je(Rn,{pluginName:"removeOnSpill"}),vn.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Ue(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Ue(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Ue(document,"touchmove",this._handleFallbackAutoScroll):Ue(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?qe(document,"dragover",this._handleAutoScroll):(qe(document,"pointermove",this._handleFallbackAutoScroll),qe(document,"touchmove",this._handleFallbackAutoScroll),qe(document,"mousemove",this._handleFallbackAutoScroll)),Mn(),Tn(),clearTimeout(Je),Je=void 0},nulling:function(){An=xn=En=On=kn=Sn=Cn=null,Dn.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(An=t,e||this.options.forceAutoScrollFallback||ze||Ve||Xe){Pn(t,this.options,r,e);var a=ui(r,!0);!On||kn&&n===Sn&&o===Cn||(kn&&Mn(),kn=setInterval((function(){var r=ui(document.elementFromPoint(n,o),!0);r!==a&&(a=r,Tn()),Pn(t,i.options,r,e)}),10),Sn=n,Cn=o)}else{if(!this.options.bubbleScroll||ui(r,!0)===oi())return void Tn();Pn(t,this.options,ui(r,!1),!1)}}},je(t,{pluginName:"scroll",initializeByDefault:!0})}),vn.mount(Rn,In);function Xn(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Yn=Xn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Fn=Xn(/Edge/i),Wn=Xn(/firefox/i),Un=Xn(/safari/i)&&!Xn(/chrome/i)&&!Xn(/android/i),qn=Xn(/iP(ad|od|hone)/i),Gn=Xn(/chrome/i)&&Xn(/android/i),Kn={capture:!1,passive:!1};function Zn(t,e,i){t.addEventListener(e,i,!Yn&&Kn)}function Jn(t,e,i){t.removeEventListener(e,i,!Yn&&Kn)}function Qn(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function to(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function eo(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Qn(t,e):Qn(t,e))||n&&t===i)return t;if(t===i)break}while(t=to(t))}return null}var io,no=/\s+/g;function oo(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(no," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(no," ")}}function ro(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function ao(t,e){var i="";if("string"==typeof t)i=t;else do{var n=ro(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function so(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function lo(){var t=document.scrollingElement;return t||document.documentElement}function co(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==lo()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Yn))do{if(o&&o.getBoundingClientRect&&("none"!==ro(o,"transform")||i&&"static"!==ro(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(ro(o,"border-top-width")),s-=u.left+parseInt(ro(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=ao(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function ho(t){var e=co(t),i=parseInt(ro(t,"padding-left")),n=parseInt(ro(t,"padding-top")),o=parseInt(ro(t,"padding-right")),r=parseInt(ro(t,"padding-bottom"));return e.top+=n+parseInt(ro(t,"border-top-width")),e.left+=i+parseInt(ro(t,"border-left-width")),e.width=t.clientWidth-i-o,e.height=t.clientHeight-n-r,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function uo(t,e,i){for(var n=mo(t,!0),o=co(t)[e];n;){var r=co(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===lo())break;n=mo(n,!1)}return!1}function po(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==yr.ghost&&(n||a[r]!==yr.dragged)&&eo(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function fo(t,e){for(var i=t.lastElementChild;i&&(i===yr.ghost||"none"===ro(i,"display")||e&&!Qn(i,e));)i=i.previousElementSibling;return i||null}function go(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===yr.clone||e&&!Qn(t,e)||i++;return i}function vo(t){var e=0,i=0,n=lo();if(t)do{var o=ao(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function mo(t,e){if(!t||!t.getBoundingClientRect)return lo();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=ro(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return lo();if(n||e)return i;n=!0}}}while(i=i.parentNode);return lo()}function bo(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function _o(t,e){return function(){if(!io){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),io=setTimeout((function(){io=void 0}),e)}}}function yo(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function wo(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var $o="Sortable"+(new Date).getTime();function Eo(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==ro(t,"display")&&t!==yr.ghost){e.push({target:t,rect:co(t)});var i=Hn({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=ao(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=co(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ao(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&bo(l,s)&&!bo(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),bo(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){ro(t,"transition",""),ro(t,"transform","");var o=ao(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,ro(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),ro(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),ro(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){ro(t,"transition",""),ro(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var xo=[],So={initializeByDefault:!0},Co={mount:function(t){for(var e in So)So.hasOwnProperty(e)&&!(e in t)&&(t[e]=So[e]);xo.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),xo.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";xo.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](Hn({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](Hn({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in xo.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,zn(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return xo.forEach((function(n){"function"==typeof n.eventProperties&&zn(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return xo.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var Ao=["evt"],ko=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=Ln(i,Ao);Co.pluginEvent.bind(yr)(t,e,Hn({dragEl:Oo,parentEl:To,ghostEl:Mo,rootEl:Po,nextEl:No,lastDownEl:Io,cloneEl:Ro,cloneHidden:jo,dragStarted:Ko,putSortable:Xo,activeSortable:yr.active,originalEvent:n,oldIndex:Ho,oldDraggableIndex:Vo,newIndex:Bo,newDraggableIndex:zo,hideGhostForTarget:vr,unhideGhostForTarget:mr,cloneNowHidden:function(){jo=!0},cloneNowShown:function(){jo=!1},dispatchSortableEvent:function(t){Do({sortable:e,name:t,originalEvent:n})}},o))};function Do(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[$o]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Yn||Fn?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=Hn(Hn({},f),Co.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(Hn({putSortable:Xo,cloneEl:Ro,targetEl:Oo,rootEl:Po,oldIndex:Ho,oldDraggableIndex:Vo,newIndex:Bo,newDraggableIndex:zo},t))}var Oo,To,Mo,Po,No,Io,Ro,jo,Ho,Bo,Vo,zo,Lo,Xo,Yo,Fo,Wo,Uo,qo,Go,Ko,Zo,Jo,Qo,tr,er=!1,ir=!1,nr=[],or=!1,rr=!1,ar=[],sr=!1,lr=[],cr="undefined"!=typeof document,dr=qn,hr=Fn||Yn?"cssFloat":"float",ur=cr&&!Gn&&!qn&&"draggable"in document.createElement("div"),pr=function(){if(cr){if(Yn)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),fr=function(t,e){var i=ro(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=po(t,0,e),r=po(t,1,e),a=o&&ro(o),s=r&&ro(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+co(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+co(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[hr]||r&&"none"===i[hr]&&l+c>n)?"vertical":"horizontal"},gr=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Bn(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},vr=function(){!pr&&Mo&&ro(Mo,"display","none")},mr=function(){!pr&&Mo&&ro(Mo,"display","")};cr&&!Gn&&document.addEventListener("click",(function(t){if(ir)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ir=!1,!1}),!0);var br=function(t){if(Oo){var e=function(t,e){var i;return nr.some((function(n){var o=n[$o].options.emptyInsertThreshold;if(o&&!fo(n)){var r=co(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[$o]._onDragOver(i)}}},_r=function(t){Oo&&Oo.parentNode[$o]._isOutsideThisEl(t.target)};function yr(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=zn({},e),t[$o]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return fr(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==yr.supportPointer&&"PointerEvent"in window&&!Un,emptyInsertThreshold:5};for(var n in Co.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in gr(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&ur,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Zn(t,"pointerdown",this._onTapStart):(Zn(t,"mousedown",this._onTapStart),Zn(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Zn(t,"dragover",this),Zn(t,"dragenter",this)),nr.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),zn(this,Eo())}function wr(t,e,i,n,o,r,a,s){var l,c,d=t[$o],h=d.options.onMove;return!window.CustomEvent||Yn||Fn?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||co(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function $r(t){t.draggable=!1}function Er(){sr=!1}function xr(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function Sr(t){return setTimeout(t,0)}function Cr(t){return clearTimeout(t)}yr.prototype={constructor:yr,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Zo=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Oo):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){lr.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&lr.push(n)}}(i),!Oo&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Un||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=eo(s,n.draggable,i,!1))&&s.animated||Io===s)){if(Ho=go(s),Vo=go(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return Do({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),ko("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=eo(l,n.trim(),i,!1))return Do({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),ko("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!eo(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!Oo&&i.parentNode===r){var l=co(i);if(Po=r,To=(Oo=i).parentNode,No=Oo.nextSibling,Io=i,Lo=a.group,yr.dragged=Oo,Yo={target:Oo,clientX:(e||t).clientX,clientY:(e||t).clientY},qo=Yo.clientX-l.left,Go=Yo.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Oo.style["will-change"]="all",n=function(){ko("delayEnded",o,{evt:t}),yr.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!Wn&&o.nativeDraggable&&(Oo.draggable=!0),o._triggerDragStart(t,e),Do({sortable:o,name:"choose",originalEvent:t}),oo(Oo,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){so(Oo,t.trim(),$r)})),Zn(s,"dragover",br),Zn(s,"mousemove",br),Zn(s,"touchmove",br),Zn(s,"mouseup",o._onDrop),Zn(s,"touchend",o._onDrop),Zn(s,"touchcancel",o._onDrop),Wn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Oo.draggable=!0),ko("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Fn||Yn))n();else{if(yr.eventCanceled)return void this._onDrop();Zn(s,"mouseup",o._disableDelayedDrag),Zn(s,"touchend",o._disableDelayedDrag),Zn(s,"touchcancel",o._disableDelayedDrag),Zn(s,"mousemove",o._delayedDragTouchMoveHandler),Zn(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Zn(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Oo&&$r(Oo),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Jn(t,"mouseup",this._disableDelayedDrag),Jn(t,"touchend",this._disableDelayedDrag),Jn(t,"touchcancel",this._disableDelayedDrag),Jn(t,"mousemove",this._delayedDragTouchMoveHandler),Jn(t,"touchmove",this._delayedDragTouchMoveHandler),Jn(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Zn(document,"pointermove",this._onTouchMove):Zn(document,e?"touchmove":"mousemove",this._onTouchMove):(Zn(Oo,"dragend",this),Zn(Po,"dragstart",this._onDragStart));try{document.selection?Sr((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(er=!1,Po&&Oo){ko("dragStarted",this,{evt:e}),this.nativeDraggable&&Zn(document,"dragover",_r);var i=this.options;!t&&oo(Oo,i.dragClass,!1),oo(Oo,i.ghostClass,!0),yr.active=this,t&&this._appendGhost(),Do({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Fo){this._lastX=Fo.clientX,this._lastY=Fo.clientY,vr();for(var t=document.elementFromPoint(Fo.clientX,Fo.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Fo.clientX,Fo.clientY))!==e;)e=t;if(Oo.parentNode[$o]._isOutsideThisEl(t),e)do{if(e[$o]){if(e[$o]._onDragOver({clientX:Fo.clientX,clientY:Fo.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);mr()}},_onTouchMove:function(t){if(Yo){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=Mo&&ao(Mo,!0),a=Mo&&r&&r.a,s=Mo&&r&&r.d,l=dr&&tr&&vo(tr),c=(o.clientX-Yo.clientX+n.x)/(a||1)+(l?l[0]-ar[0]:0)/(a||1),d=(o.clientY-Yo.clientY+n.y)/(s||1)+(l?l[1]-ar[1]:0)/(s||1);if(!yr.active&&!er){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Mo){r?(r.e+=c-(Wo||0),r.f+=d-(Uo||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");ro(Mo,"webkitTransform",h),ro(Mo,"mozTransform",h),ro(Mo,"msTransform",h),ro(Mo,"transform",h),Wo=c,Uo=d,Fo=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Mo){var t=this.options.fallbackOnBody?document.body:Po,e=co(Oo,!0,dr,!0,t),i=this.options;if(dr){for(tr=t;"static"===ro(tr,"position")&&"none"===ro(tr,"transform")&&tr!==document;)tr=tr.parentNode;tr!==document.body&&tr!==document.documentElement?(tr===document&&(tr=lo()),e.top+=tr.scrollTop,e.left+=tr.scrollLeft):tr=lo(),ar=vo(tr)}oo(Mo=Oo.cloneNode(!0),i.ghostClass,!1),oo(Mo,i.fallbackClass,!0),oo(Mo,i.dragClass,!0),ro(Mo,"transition",""),ro(Mo,"transform",""),ro(Mo,"box-sizing","border-box"),ro(Mo,"margin",0),ro(Mo,"top",e.top),ro(Mo,"left",e.left),ro(Mo,"width",e.width),ro(Mo,"height",e.height),ro(Mo,"opacity","0.8"),ro(Mo,"position",dr?"absolute":"fixed"),ro(Mo,"zIndex","100000"),ro(Mo,"pointerEvents","none"),yr.ghost=Mo,t.appendChild(Mo),ro(Mo,"transform-origin",qo/parseInt(Mo.style.width)*100+"% "+Go/parseInt(Mo.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;ko("dragStart",this,{evt:t}),yr.eventCanceled?this._onDrop():(ko("setupClone",this),yr.eventCanceled||((Ro=wo(Oo)).removeAttribute("id"),Ro.draggable=!1,Ro.style["will-change"]="",this._hideClone(),oo(Ro,this.options.chosenClass,!1),yr.clone=Ro),i.cloneId=Sr((function(){ko("clone",i),yr.eventCanceled||(i.options.removeCloneOnHide||Po.insertBefore(Ro,Oo),i._hideClone(),Do({sortable:i,name:"clone"}))})),!e&&oo(Oo,o.dragClass,!0),e?(ir=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Jn(document,"mouseup",i._onDrop),Jn(document,"touchend",i._onDrop),Jn(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,Oo)),Zn(document,"drop",i),ro(Oo,"transform","translateZ(0)")),er=!0,i._dragStartId=Sr(i._dragStarted.bind(i,e,t)),Zn(document,"selectstart",i),Ko=!0,Un&&ro(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=yr.active,d=Lo===l,h=s.sort,u=Xo||c,p=this,f=!1;if(!sr){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=eo(a,s.draggable,r,!0),D("dragOver"),yr.eventCanceled)return f;if(Oo.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return T(!1);if(ir=!1,c&&!s.disabled&&(d?h||(n=To!==Po):Xo===this||(this.lastPutMode=Lo.checkPull(this,c,Oo,t))&&l.checkPut(this,c,Oo,t))){if(o="vertical"===this._getDirection(t,a),e=co(Oo),D("dragOverValid"),yr.eventCanceled)return f;if(n)return To=Po,O(),this._hideClone(),D("revert"),yr.eventCanceled||(No?Po.insertBefore(Oo,No):Po.appendChild(Oo)),T(!0);var g=fo(r,s.draggable);if(!g||function(t,e,i){var n=co(fo(i.el,i.options.draggable)),o=ho(i.el),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}(t,o,this)&&!g.animated){if(g===Oo)return T(!1);if(g&&r===t.target&&(a=g),a&&(i=co(a)),!1!==wr(Po,r,Oo,e,a,i,t,!!a))return O(),g&&g.nextSibling?r.insertBefore(Oo,g.nextSibling):r.appendChild(Oo),To=r,M(),T(!0)}else if(g&&function(t,e,i){var n=co(po(i.el,0,i.options,!0)),o=ho(i.el),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=po(r,0,s,!0);if(v===Oo)return T(!1);if(i=co(a=v),!1!==wr(Po,r,Oo,e,a,i,t,!1))return O(),r.insertBefore(Oo,v),To=r,M(),T(!0)}else if(a.parentNode===r){i=co(a);var m,b,_,y=Oo.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(Oo.animated&&Oo.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=uo(a,"top","top")||uo(Oo,"top","top"),x=E?E.scrollTop:void 0;if(Zo!==a&&(b=i[$],or=!1,rr=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Qo<c*o){if(!or&&(1===Jo?l>d+c*r/2:l<h-c*r/2)&&(or=!0),or)u=!0;else if(1===Jo?l<d+Qo:l>h-Qo)return-Jo}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return go(Oo)<go(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,rr,Zo===a),0!==m){var S=go(Oo);do{S-=m,_=To.children[S]}while(_&&("none"===ro(_,"display")||_===Mo))}if(0===m||_===a)return T(!1);Zo=a,Jo=m;var C=a.nextElementSibling,A=!1,k=wr(Po,r,Oo,e,a,i,t,A=1===m);if(!1!==k)return 1!==k&&-1!==k||(A=1===k),sr=!0,setTimeout(Er,30),O(),A&&!C?r.appendChild(Oo):a.parentNode.insertBefore(Oo,A?C:a),E&&yo(E,0,x-E.scrollTop),To=Oo.parentNode,void 0===b||rr||(Qo=Math.abs(b-co(a)[$])),M(),T(!0)}if(r.contains(Oo))return T(!1)}return!1}function D(s,l){ko(s,p,Hn({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:T,onMove:function(i,n){return wr(Po,r,Oo,e,i,co(i),t,n)},changed:M},l))}function O(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function T(e){return D("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(oo(Oo,Xo?Xo.options.ghostClass:c.options.ghostClass,!1),oo(Oo,s.ghostClass,!0)),Xo!==p&&p!==yr.active?Xo=p:p===yr.active&&Xo&&(Xo=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===Oo&&!Oo.animated||a===r&&!a.animated)&&(Zo=null),s.dragoverBubble||t.rootEl||a===document||(Oo.parentNode[$o]._isOutsideThisEl(t.target),!e&&br(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Bo=go(Oo),zo=go(Oo,s.draggable),Do({sortable:p,name:"change",toEl:r,newIndex:Bo,newDraggableIndex:zo,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Jn(document,"mousemove",this._onTouchMove),Jn(document,"touchmove",this._onTouchMove),Jn(document,"pointermove",this._onTouchMove),Jn(document,"dragover",br),Jn(document,"mousemove",br),Jn(document,"touchmove",br)},_offUpEvents:function(){var t=this.el.ownerDocument;Jn(t,"mouseup",this._onDrop),Jn(t,"touchend",this._onDrop),Jn(t,"pointerup",this._onDrop),Jn(t,"touchcancel",this._onDrop),Jn(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Bo=go(Oo),zo=go(Oo,i.draggable),ko("drop",this,{evt:t}),To=Oo&&Oo.parentNode,Bo=go(Oo),zo=go(Oo,i.draggable),yr.eventCanceled||(er=!1,rr=!1,or=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Cr(this.cloneId),Cr(this._dragStartId),this.nativeDraggable&&(Jn(document,"drop",this),Jn(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Un&&ro(document.body,"user-select",""),ro(Oo,"transform",""),t&&(Ko&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Mo&&Mo.parentNode&&Mo.parentNode.removeChild(Mo),(Po===To||Xo&&"clone"!==Xo.lastPutMode)&&Ro&&Ro.parentNode&&Ro.parentNode.removeChild(Ro),Oo&&(this.nativeDraggable&&Jn(Oo,"dragend",this),$r(Oo),Oo.style["will-change"]="",Ko&&!er&&oo(Oo,Xo?Xo.options.ghostClass:this.options.ghostClass,!1),oo(Oo,this.options.chosenClass,!1),Do({sortable:this,name:"unchoose",toEl:To,newIndex:null,newDraggableIndex:null,originalEvent:t}),Po!==To?(Bo>=0&&(Do({rootEl:To,name:"add",toEl:To,fromEl:Po,originalEvent:t}),Do({sortable:this,name:"remove",toEl:To,originalEvent:t}),Do({rootEl:To,name:"sort",toEl:To,fromEl:Po,originalEvent:t}),Do({sortable:this,name:"sort",toEl:To,originalEvent:t})),Xo&&Xo.save()):Bo!==Ho&&Bo>=0&&(Do({sortable:this,name:"update",toEl:To,originalEvent:t}),Do({sortable:this,name:"sort",toEl:To,originalEvent:t})),yr.active&&(null!=Bo&&-1!==Bo||(Bo=Ho,zo=Vo),Do({sortable:this,name:"end",toEl:To,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){ko("nulling",this),Po=Oo=To=Mo=No=Ro=Io=jo=Yo=Fo=Ko=Bo=zo=Ho=Vo=Zo=Jo=Xo=Lo=yr.dragged=yr.ghost=yr.clone=yr.active=null,lr.forEach((function(t){t.checked=!0})),lr.length=Wo=Uo=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Oo&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)eo(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||xr(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];eo(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return eo(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=Co.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&gr(i)},destroy:function(){ko("destroy",this);var t=this.el;t[$o]=null,Jn(t,"mousedown",this._onTapStart),Jn(t,"touchstart",this._onTapStart),Jn(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Jn(t,"dragover",this),Jn(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),nr.splice(nr.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!jo){if(ko("hideClone",this),yr.eventCanceled)return;ro(Ro,"display","none"),this.options.removeCloneOnHide&&Ro.parentNode&&Ro.parentNode.removeChild(Ro),jo=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(jo){if(ko("showClone",this),yr.eventCanceled)return;Oo.parentNode!=Po||this.options.group.revertClone?No?Po.insertBefore(Ro,No):Po.appendChild(Ro):Po.insertBefore(Ro,Oo),this.options.group.revertClone&&this.animate(Oo,Ro),ro(Ro,"display",""),jo=!1}}else this._hideClone()}},cr&&Zn(document,"touchmove",(function(t){(yr.active||er)&&t.cancelable&&t.preventDefault()})),yr.utils={on:Zn,off:Jn,css:ro,find:so,is:function(t,e){return!!eo(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:_o,closest:eo,toggleClass:oo,clone:wo,index:go,nextTick:Sr,cancelNextTick:Cr,detectDirection:fr,getChild:po},yr.get=function(t){return t[$o]},yr.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(yr.utils=Hn(Hn({},yr.utils),t.utils)),Co.mount(t)}))},yr.create=function(t,e){return new yr(t,e)},yr.version="1.15.1";var Ar,kr,Dr,Or,Tr,Mr,Pr=[],Nr=!1;function Ir(){Pr.forEach((function(t){clearInterval(t.pid)})),Pr=[]}function Rr(){clearInterval(Mr)}var jr=_o((function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=lo(),d=!1;kr!==i&&(kr=i,Ir(),Ar=e.scroll,o=e.scrollFn,!0===Ar&&(Ar=mo(i,!0)));var h=0,u=Ar;do{var p=u,f=co(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=ro(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var k=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),D=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!Pr[h])for(var O=0;O<=h;O++)Pr[O]||(Pr[O]={});Pr[h].vx==k&&Pr[h].vy==D&&Pr[h].el===p||(Pr[h].el=p,Pr[h].vx=k,Pr[h].vy=D,clearInterval(Pr[h].pid),0==k&&0==D||(d=!0,Pr[h].pid=setInterval(function(){n&&0===this.layer&&yr.active._onTouchMove(Tr);var e=Pr[this.layer].vy?Pr[this.layer].vy*l:0,i=Pr[this.layer].vx?Pr[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(yr.dragged.parentNode[$o],i,e,t,Tr,Pr[this.layer].el)||yo(Pr[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=mo(u,!1)));Nr=d}}),30),Hr=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Br(){}function Vr(){}Br.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=po(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Hr},zn(Br,{pluginName:"revertOnSpill"}),Vr.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Hr},zn(Vr,{pluginName:"removeOnSpill"});var zr=[Vr,Br];yr.mount(zr,new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Zn(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Zn(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Zn(document,"touchmove",this._handleFallbackAutoScroll):Zn(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Jn(document,"dragover",this._handleAutoScroll):(Jn(document,"pointermove",this._handleFallbackAutoScroll),Jn(document,"touchmove",this._handleFallbackAutoScroll),Jn(document,"mousemove",this._handleFallbackAutoScroll)),Rr(),Ir(),clearTimeout(io),io=void 0},nulling:function(){Tr=kr=Ar=Nr=Mr=Dr=Or=null,Pr.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(Tr=t,e||this.options.forceAutoScrollFallback||Fn||Yn||Un){jr(t,this.options,r,e);var a=mo(r,!0);!Nr||Mr&&n===Dr&&o===Or||(Mr&&Rr(),Mr=setInterval((function(){var r=mo(document.elementFromPoint(n,o),!0);r!==a&&(a=r,Ir()),jr(t,i.options,r,e)}),10),Dr=n,Or=o)}else{if(!this.options.bubbleScroll||mo(r,!0)===lo())return void Ir();jr(t,this.options,mo(r,!1),!1)}}},zn(t,{pluginName:"scroll",initializeByDefault:!0})});let Lr=class extends at{constructor(){super(...arguments),this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}disconnectedCallback(){this._destroySortable()}_destroySortable(){var t;null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0}async firstUpdated(){this._createSortable()}_createSortable(){this._sortable=new vn(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:t=>{t.item.placeholder=document.createComment("sort-placeholder"),t.item.after(t.item.placeholder)},onEnd:t=>{t.item.placeholder&&(t.item.placeholder.replaceWith(t.item),delete t.item.placeholder),this._rowMoved(t)}})}render(){return this.entities&&this.hass?B`
      <h3>${Lt("editor.settings.entities")}</h3>
      <div class="entities">
        ${Me(this.entities,(t=>this._getKey(t)),((t,e)=>B`
            <div class="entity">
              <div class="handle">
                <ha-icon icon="mdi:drag"></ha-icon>
              </div>
              <ha-entity-picker
                label="Entity - ${t.preset}"
                allow-custom-entity
                hideClearIcon
                .hass=${this.hass}
                .configValue=${"entity"}
                .value=${t.entity}
                .index=${e}
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>

              <ha-icon-button
                .label=${Lt("editor.actions.remove")}
                .path=${we}
                class="remove-icon"
                .index=${e}
                @click=${this._removeRow}
              ></ha-icon-button>

              <ha-icon-button
                .label=${Lt("editor.actions.edit")}
                .path=${$e}
                class="edit-icon"
                .index=${e}
                @click="${this._editRow}"
              ></ha-icon-button>
            </div>
          `))}
      </div>
      <div class="add-item row">
        <ha-select
          label="${Lt("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          naturalMenuWidth
          fixedMenuPosition
          @closed=${t=>t.stopPropagation()}
        >
          ${Ct.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <ha-icon-button
          .label=${Lt("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addRow}"
        ></ha-icon-button>
      </div>
    `:z}_valueChanged(t){if(!this.entities||!this.hass)return;const e=t.detail.value,i=t.target.index,n=this.entities.concat();n[i]=Object.assign(Object.assign({},n[i]),{entity:e||""}),ue(this,"config-changed",n)}_removeRow(t){t.stopPropagation();const e=t.currentTarget.index;if(null!=e){const t=this.entities.concat();t.splice(e,1),ue(this,"config-changed",t)}}_editRow(t){t.stopPropagation();const e=t.target.index;null!=e&&ue(this,"edit-item",e)}_addRow(t){if(t.stopPropagation(),!this.entities||!this.hass)return;const e=this.shadowRoot.querySelector(".add-preset").value||"placeholder",i=this.shadowRoot.querySelector(".add-entity").value,n=Object.assign({},kt,At[e],{entity:i,preset:""==i?"placeholder":e});ue(this,"config-changed",[...this.entities,n])}_rowMoved(t){if(t.stopPropagation(),t.oldIndex===t.newIndex||!this.entities)return;const e=this.entities.concat();e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),ue(this,"config-changed",e)}static get styles(){return a`
      #sortable a:nth-of-type(2n) paper-icon-item {
        animation-name: keyframes1;
        animation-iteration-count: infinite;
        transform-origin: 50% 10%;
        animation-delay: -0.75s;
        animation-duration: 0.25s;
      }
      #sortable a:nth-of-type(2n-1) paper-icon-item {
        animation-name: keyframes2;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transform-origin: 30% 5%;
        animation-delay: -0.5s;
        animation-duration: 0.33s;
      }
      #sortable a {
        height: 48px;
        display: flex;
      }
      #sortable {
        outline: none;
        display: block !important;
      }
      .hidden-panel {
        display: flex !important;
      }
      .sortable-fallback {
        display: none;
      }
      .sortable-ghost {
        opacity: 0.4;
      }
      .sortable-fallback {
        opacity: 0;
      }
      @keyframes keyframes1 {
        0% {
          transform: rotate(-1deg);
          animation-timing-function: ease-in;
        }
        50% {
          transform: rotate(1.5deg);
          animation-timing-function: ease-out;
        }
      }
      @keyframes keyframes2 {
        0% {
          transform: rotate(1deg);
          animation-timing-function: ease-in;
        }
        50% {
          transform: rotate(-1.5deg);
          animation-timing-function: ease-out;
        }
      }
      .show-panel,
      .hide-panel {
        display: none;
        position: absolute;
        top: 0;
        right: 4px;
        --mdc-icon-button-size: 40px;
      }
      :host([rtl]) .show-panel {
        right: initial;
        left: 4px;
      }
      .hide-panel {
        top: 4px;
        right: 8px;
      }
      :host([rtl]) .hide-panel {
        right: initial;
        left: 8px;
      }
      :host([expanded]) .hide-panel {
        display: block;
      }
      :host([expanded]) .show-panel {
        display: inline-flex;
      }
      paper-icon-item.hidden-panel,
      paper-icon-item.hidden-panel span,
      paper-icon-item.hidden-panel ha-icon[slot='item-icon'] {
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .entity,
      .add-item {
        display: flex;
        align-items: center;
      }
      .entity {
        display: flex;
        align-items: center;
      }
      .entity .handle {
        padding-right: 8px;
        cursor: move;
        padding-inline-end: 8px;
        padding-inline-start: initial;
        direction: var(--direction);
      }
      .entity .handle > * {
        pointer-events: none;
      }
      .entity ha-entity-picker,
      .add-item ha-entity-picker {
        flex-grow: 1;
      }
      .entities {
        margin-bottom: 8px;
      }
      .add-preset {
        padding-right: 8px;
        max-width: 130px;
      }
      .remove-icon,
      .edit-icon,
      .add-icon {
        --mdc-icon-button-size: 36px;
        color: var(--secondary-text-color);
      }
    `}};t([ht({attribute:!1})],Lr.prototype,"entities",void 0),t([ht({attribute:!1})],Lr.prototype,"hass",void 0),Lr=t([lt("power-distribution-card-items-editor")],Lr);const Xr=["none","flash","slide"],Yr=["none","card","bars"],Fr=["autarky","ratio",""],Wr=["more-info","toggle","navigate","url","call-service","none"];let Ur=class extends at{constructor(){super(...arguments),this._subElementEditor=void 0}async setConfig(t){this._config=t}async firstUpdated(){var t,e;customElements.get("ha-form")&&customElements.get("hui-action-editor")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement(),console.log(this.hass)}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():B`
      <div class="card-config">
        <ha-textfield
          label="${Lt("editor.settings.title")} (${Lt("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="${Lt("editor.settings.animation")}"
          .configValue=${"animation"}
          .value=${(null===(e=this._config)||void 0===e?void 0:e.animation)||"flash"}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${Xr.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <br />
        <div class="entity row">
          <ha-select
            label="${Lt("editor.settings.center")}"
            .configValue=${"type"}
            @selected=${this._centerChanged}
            @closed=${t=>t.stopPropagation()}
            .value=${(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none"}
          >
            ${Yr.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
          </ha-select>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?B`<ha-icon-button
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                .path=${$e}
                @click="${this._editCenter}"
              ></ha-icon-button>`:""}
        </div>
        <br />
        <power-distribution-card-items-editor
          .hass=${this.hass}
          .entities=${this._config.entities}
          @edit-item=${this._edit_item}
          @config-changed=${this._entitiesChanged}
        >
        </power-distribution-card-items-editor>
      </div>
    `:B``}_entitiesChanged(t){t.stopPropagation(),this._config&&this.hass&&yt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:t.detail})})}_edit_item(t){if(t.stopPropagation(),!this._config||!this.hass)return;const e=t.detail;this._subElementEditor={type:"entity",index:e}}_renderSubElementEditor(){var t,e,i;const n=[B`
        <div class="header">
          <div class="back-title">
            <mwc-icon-button @click=${this._goBack}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </mwc-icon-button>
          </div>
        </div>`];switch(null===(t=this._subElementEditor)||void 0===t||t.index,null===(e=this._subElementEditor)||void 0===e?void 0:e.type){case"entity":n.push(B`
          <power-distribution-card-item-editor
            .hass=${this.hass}
            .config=${this._config.entities[(null===(i=this._subElementEditor)||void 0===i?void 0:i.index)||0]}
            @config-changed=${this._itemChanged}
          >
          </power-distribution-card-item-editor>
          `);break;case"bars":n.push(this._barEditor());break;case"card":n.push(this._cardEditor())}return B`${n}`}_goBack(){this._subElementEditor=void 0}_itemChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=null===(e=this._subElementEditor)||void 0===e?void 0:e.index;if(null!=i){const e=[...this._config.entities];e[i]=t.detail,yt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:e})})}}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}yt(this,"config-changed",{config:this._config})}}_editCenter(t){t.currentTarget&&(this._subElementEditor={type:t.currentTarget.value})}_barChanged(t){var e;if(!t.target)return;const i=t.target;if(!i.configValue)return;let n;if("content"==i.configValue)n=i.value;else{n=[...this._config.center.content];const t=i.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;n[t]=Object.assign(Object.assign({},n[t]),{[i.configValue]:null!=i.checked?i.checked:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:n}}),yt(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(B`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <ha-icon-button
            label=${Lt("editor.actions.remove")}
            class="remove-icon"
            .i=${i}
            .path=${we}
            @click=${this._removeBar}
            >
          </ha-icon-button>
          </h4>
          <div class="side-by-side">
            <ha-textfield
              label="${Lt("editor.settings.name")} (${Lt("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-entity-picker
              label="${Lt("editor.settings.entity")}"
              allow-custom-entity
              hideClearIcon
              .hass=${this.hass}
              .configValue=${"entity"}
              .value=${e.entity}
              @value-changed=${this._barChanged}
              .i=${i}
            ></ha-entity-picker>
          </div>
          <div class="side-by-side">
            <div class="checkbox">
              <input
                type="checkbox"
                id="invert-value"
                .checked="${e.invert_value||!1}"
                .configValue=${"invert_value"}
                @change=${this._barChanged}
                .i=${i}
              />
              <label for="invert-value"> ${Lt("editor.settings.invert-value")}</label>
            </div>
            <div>
            <ha-select
              label="${Lt("editor.settings.preset")}"
              .configValue=${"preset"}
              .value=${e.preset||""}
              @selected=${this._barChanged}
              @closed=${t=>t.stopPropagation()}
              .i=${i}
            >
              ${Fr.map((t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
            </ha-select>
          </div>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="${Lt("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-textfield
              .label="${Lt("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
          </div>
          <h3>${Lt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${Wr}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${Wr}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(B`
      <mwc-icon-button aria-label=${Lt("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),B`${t.map((t=>B`${t}`))}`}_cardEditor(){return B`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}yt(this,"config-changed",{config:this._config})}}static get styles(){return[a`
        .checkbox {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }
        .checkbox input {
          height: 20px;
          width: 20px;
          margin-left: 0;
          margin-right: 8px;
        }
      `,a`
        h3 {
          margin-bottom: 0.5em;
        }
        .row {
          margin-bottom: 12px;
          margin-top: 12px;
          display: block;
        }
        .side-by-side {
          display: flex;
        }
        .side-by-side > * {
          flex: 1 1 0%;
          padding-right: 4px;
        }
        .entity,
        .add-item {
          display: flex;
          align-items: center;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
        }
        .entity ha-entity-picker,
        .add-item ha-entity-picker {
          flex-grow: 1;
        }
        .add-preset {
          padding-right: 8px;
          max-width: 130px;
        }
        .remove-icon,
        .edit-icon,
        .add-icon {
          --mdc-icon-button-size: 36px;
          color: var(--secondary-text-color);
        }
        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
        }`]}};t([ht({attribute:!1})],Ur.prototype,"hass",void 0),t([ut()],Ur.prototype,"_config",void 0),t([ut()],Ur.prototype,"_subElementEditor",void 0),Ur=t([lt("power-distribution-card-editor")],Ur);var qr=Object.freeze({__proto__:null,get PowerDistributionCardEditor(){return Ur}});console.info("%c POWER-DISTRIBUTION-CARD %c 2.5.12 ","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Lt("common.description")});let Gr=class extends at{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return await Promise.resolve().then((function(){return qr})),document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:Lt("editor.settings.autarky")},{preset:"ratio",name:Lt("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},Dt,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!Ct.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},kt,At[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){const t=this._config;if(t.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this._state({entity:t.entity,attribute:"unit_of_measurement"});t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),"bars"==t.center.type){const e=t.center.content.map((t=>{let e="%";return t.entity&&(e=this._state({entity:t.entity,attribute:"unit_of_measurement"})),Object.assign(Object.assign({},t),{unit_of_measurement:t.unit_of_measurement||e})}));this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{content:e})})}this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return Ot}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof de&&(window.ResizeObserver=(await Promise.resolve().then((function(){return he}))).default)})(),this._resizeObserver=new de(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=i&&!n;clearTimeout(n),n=setTimeout((function(){n=null,i||t.apply(r,o)}),e),a&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);let n=this._state(t);const o=t.threshold||null;return n=o&&Math.abs(n)<o?0:n,n*i}_state(t){return t.entity&&this.hass.states[t.entity]?t.attribute?this.hass.states[t.entity].attributes[t.attribute]:this.hass.states[t.entity].state:null}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);r%2==0?t.push(s):i.push(s)}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return B` ${this._narrow?Tt:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),xt(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return B`<item class="placeholder"></item>`;let n=t,o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])n/=1e3;else if("adaptive"==e.unit_of_display){let t="W";e.unit_of_measurement&&(t="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(n)>999?(n/=1e3,o="k"+t):o=t}const r=10**(e.decimals||0==e.decimals?e.decimals:2);n=Math.round(n*r)/r;const a=e.invert_arrow?-1*n:n;n=e.display_abs?Math.abs(n):n;const s=mt(n,this.hass.locale);let l;e.secondary_info_entity&&(l=e.secondary_info_attribute?this._state({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})+"":`${this._state({entity:e.secondary_info_entity})}${this._state({entity:e.secondary_info_entity,attribute:"unit_of_measurement"})||""}`),e.secondary_info_replace_name&&(e.name=l,l=void 0);let c=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(c="mdi:battery",t<5?c="mdi:battery-outline":t<95&&(c="mdi:battery-"+(t/10).toFixed(0)+"0"))}let d=!1,h=B``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(d=!0,h=B`
        <div class="buy-sell">
          ${e.grid_buy_entity?B`<div class="grid-buy">
                B:
                ${this._val({entity:e.grid_buy_entity})}${this._state({entity:e.grid_buy_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
          ${e.grid_sell_entity?B`<div class="grid-sell">
                S:
                ${this._val({entity:e.grid_sell_entity})}${this._state({entity:e.grid_sell_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
        </div>
      `);const u=e.color_threshold||0;let p,f;e.icon_color&&(a>u&&(p=e.icon_color.bigger),a<u&&(p=e.icon_color.smaller),a==u&&(p=e.icon_color.equal)),e.arrow_color&&(a>u&&(f=e.arrow_color.bigger),a<u&&(f=e.arrow_color.smaller),a==u&&(f=e.arrow_color.equal));const g=isNaN(n);return B`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${ye({hasDoubleClick:St(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${c}" style="${p?`color:${p};`:""}"></ha-icon>
            ${l?B`<p class="secondary">${l}</p>`:null}
          </icon>
          ${d?h:B`<p class="subtitle">${e.name}</p>`}
        </badge>
        <value>
          <p>${g?"":s} ${g?"":o}</p>
          ${e.hide_arrows?B``:this._render_arrow(0==t||g?"none":i%2==0?a>0?"right":"left":a>0?"left":"right",f)}
        <value
      </item>
    `}_render_arrow(t,e){const i=this._config.animation;return"none"==t?B` <div class="blank" style="${e?`background-color:${e};`:""}"></div> `:B`
        <div class="arrow-container ${t}">
          <div class="arrow ${i} " style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-1":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-2":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i}" style="border-left-color: ${e};"></div>
        </div>
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=Math.min(parseInt(this._val(n).toFixed(0),10),100)),i.push(B`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${ye({hasDoubleClick:St(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}${n.unit_of_measurement||"%"}</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),B`${i.map((t=>B`${t}`))}`):B``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(e)if(wt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+($t[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),yt(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([ht()],Gr.prototype,"hass",void 0),t([ut()],Gr.prototype,"_config",void 0),t([ht()],Gr.prototype,"_card",void 0),t([ut()],Gr.prototype,"_narrow",void 0),Gr=t([lt("power-distribution-card")],Gr);export{Gr as PowerDistributionCard};
