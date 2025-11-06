function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},v="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m[v]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,x="?"+E,S=`<${x}>`,C=document,A=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O=t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),T="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),L=new WeakMap,X=C.createTreeWalker(C,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=M;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===M?"!--"===l[1]?a=P:void 0!==l[1]?a=N:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=I):void 0!==l[3]&&(a=I):a===I?">"===l[0]?(a=null!=o?o:M,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?I:'"'===l[3]?j:R):a===j||a===R?a=I:a===P||a===N?a=M:(a=I,o=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===M?i+S:c>=0?(n.push(s),i.slice(0,c)+$+i.slice(c)+E+h):i+E+(-2===c?(n.push(void 0),e):h)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class U{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=F(t,e);if(this.el=U.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=X.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(E)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(E),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?tt:K})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(H.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],A()),X.nextNode(),s.push({type:2,index:++o});n.append(t[e],A())}}}else if(8===n.nodeType)if(n.data===x)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)s.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){var o,r,a,s;if(e===V)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);X.currentNode=o;let r=X.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new G(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new et(r,this,t)),this._$AV.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=X.nextNode(),a++)}return X.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,n){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),k(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):O(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=U.createElement(Y(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new U(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new G(this.k(A()),this.k(A()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=W(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=W(this,n[i+a],e,a),s===V&&(s=this._$AH[a]),r||(r=!k(s)||s!==this._$AH[a]),s===z?t=z:t!==z&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}let Z=class extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const J=y?y.emptyScript:"";class Q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class tt extends K{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===V)return;const n=this._$AH,o=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==z&&(n===z||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}let et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const it={O:$,P:E,A:x,C:1,M:F,L:q,R:O,D:W,I:G,V:K,H:Q,N:tt,U:Z,F:et},nt=_.litHtmlPolyfillSupport;null==nt||nt(U,G),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
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
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut,pt,ft;function gt(){return(gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ft||(ft={}));var vt=function(t,e,i){var n=e?function(t){switch(t.number_format){case pt.comma_decimal:return["en-US","en"];case pt.decimal_comma:return["de","es","it"];case pt.space_comma:return["fr","sv","cs"];case pt.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==pt.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,mt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,mt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,void 0).toString()+""},mt=function(t,e){var i=gt({maximumFractionDigits:2},e);if("string"!=typeof t)return i;var n=t.indexOf(".")>-1?t.split(".")[1].length:0;return i.minimumFractionDigits=n,i.maximumFractionDigits=n,i},bt=["closed","locked","off"],_t=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},yt=new Set(["call-service","divider","section","weblink","cast","select"]),wt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},$t=function(t){_t(window,"haptic",t)},Et=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(t){return t.user===e.user.id})||($t("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&_t(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),_t(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,bt.includes(t.states[e].state))}(e,i.entity),$t("success"));break;case"call-service":if(!n.service)return void $t("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),$t("success");break;case"fire-dom-event":_t(t,"ll-custom",n)}};function xt(t){return void 0!==t&&"none"!==t.action}const St=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating","placeholder"],Ct={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0},placeholder:{name:"placeholder"}},At={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},kt={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Dt=a`
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

    color: var(--state-icon-color);
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
`,Ot=B`
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
`;var Tt={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Mt={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals","display-abs":"Display Absolute Value",double_tap_action:"Double Tap Action",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",replace_name:"Replace Name","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",tap_action:"Tap Action",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},Pt={common:Tt,editor:Mt},Nt={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},It={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Interaktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausschließen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",double_tap_action:"Doppel Tipp Aktion",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Wert Invertieren",name:"Name",preset:"Vorlagen",ratio:"Anteil",replace_name:"Namen Ersetzen","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",tap_action:"Tipp Aktion",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Rt={common:Nt,editor:It},jt={version:"Verzia",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Chybná konfigurácia",show_warning:"Zobraziť upozornenia"},Ht={actions:{add:"Pridať",edit:"Editovať",remove:"Odobrať",save:"Uložiť"},optional:"Voliteľné",required:"Požadované",settings:{action_settings:"Nastavenia akcie",animation:"Animácia",autarky:"sebestačnosť",attribute:"Atribút",background_color:"Farba pozadia",battery_percentage:"Nabitie batérie %",bigger:"Väčšie",calc_excluded:"Vylúčené z výpočtov",center:"Centrum",color:"Farba","color-settings":"Nastavenia farby",color_threshold:"Prah farby",decimals:"Desatinné čísla","display-abs":"Zobraziť absolútnu hodnotu",double_tap_action:"Akcia dvojitého klepnutia",entities:"Entity",entity:"Entita",equal:"Rovné","grid-buy":"Sieť nákup","grid-sell":"Sieť predaj","hide-arrows":"Skryť šípky",icon:"Ikona","invert-value":"Invertovať hodnotu",name:"Názov",preset:"Predvoľba",ratio:"pomer",replace_name:"Nahradiť názov","secondary-info":"Sekundárne informácie",settings:"nastavenia",smaller:"Menšie",tap_action:"Akcia klepnutia",threshold:"Prah",title:"Titul",unit_of_display:"Jednotka zobrazenia",value:"hodnota"}},Bt={common:jt,editor:Ht};const Vt={en:Object.freeze({__proto__:null,common:Tt,default:Pt,editor:Mt}),de:Object.freeze({__proto__:null,common:Nt,default:Rt,editor:It}),sk:Object.freeze({__proto__:null,common:jt,default:Bt,editor:Ht})};function zt(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Vt[o])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Vt.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Vt.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}var Lt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,n){return t[0]===e&&(i=n,!0)}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Xt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Yt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Ft="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Yt):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)};var Ut=["top","right","bottom","left","width","height","size","weight"],Wt="undefined"!=typeof MutationObserver,qt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){Ft(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){Xt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Wt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Xt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Ut.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Gt=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Kt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Yt},Zt=ne(0,0,0,0);function Jt(t){return parseFloat(t)||0}function Qt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+Jt(t["border-"+i+"-width"])},0)}function te(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Zt;var n=Kt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Jt(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Jt(n.width),l=Jt(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Qt(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Qt(n,"top","bottom")+a)),!function(t){return t===Kt(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return ne(o.left,o.top,s,l)}var ee="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Kt(t).SVGGraphicsElement}:function(t){return t instanceof Kt(t).SVGElement&&"function"==typeof t.getBBox};function ie(t){return Xt?ee(t)?function(t){var e=t.getBBox();return ne(0,0,e.width,e.height)}(t):te(t):Zt}function ne(t,e,i,n){return{x:t,y:e,width:i,height:n}}var oe=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ne(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=ie(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),re=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return Gt(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);Gt(this,{target:t,contentRect:i})},ae=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Lt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Kt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new oe(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Kt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new re(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),se="undefined"!=typeof WeakMap?new WeakMap:new Lt,le=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=qt.getInstance(),n=new ae(e,i,this);se.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){le.prototype[t]=function(){var e;return(e=se.get(this))[t].apply(e,arguments)}});var ce=void 0!==Yt.ResizeObserver?Yt.ResizeObserver:le,de=Object.freeze({__proto__:null,default:ce});function he(t,e,i){const n=new CustomEvent(e,{bubbles:!1,composed:!1,detail:i});t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=2,pe=t=>(...e)=>({_$litDirective$:t,values:e});class fe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ge=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!==i--;)if(!ge(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!ge(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!==i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!==i--;){const n=o[i];if(!ge(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},ve=["more-info","toggle","navigate","url","call-service","none"];class me extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e={}){t.actionHandler&&ge(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,_t(n,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,_t(n,"action",{action:"double_tap"})):_t(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",me);const be=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},_e=pe(class extends fe{update(t,[e]){return be(t.element,e),V}render(t){}});var ye="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",we="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";let $e=class extends at{render(){var t,e,i,n,o,r,a,s;if(!this.hass||!this.config||"placeholder"==this.config.preset)return B``;const l=this.config;let c=[];l.entity&&(c=Object.keys(Object.assign({},null===(t=this.hass)||void 0===t?void 0:t.states[l.entity||0].attributes))||[]);let d=[];return l.secondary_info_entity&&(d=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[l.secondary_info_entity].attributes))||[]),B`
      <div class="side-by-side">
        <ha-icon-picker
          .label="${zt("editor.settings.icon")}  (${zt("editor.optional")})"
          .value=${l.icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></ha-icon-picker>
        <ha-textfield
          label="${zt("editor.settings.name")} (${zt("editor.optional")})"
          .value=${l.name||void 0}
          .configValue=${"name"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${zt("editor.settings.entity")} (${zt("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${l.entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          label="${zt("editor.settings.attribute")} (${zt("editor.optional")})"
          .configValue=${"attribute"}
          .value=${l.attribute||""}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${c.length>0?B`<mwc-list-item></mwc-list-item>`:""}
          ${c.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
        </ha-select>
      </div>
      <div class="side-by-side">
        <ha-select
          label="${zt("editor.settings.preset")}"
          .configValue=${"preset"}
          .value=${l.preset||St[0]}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${St.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
        </ha-select>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${l.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._valueChanged}
          />
          <label for="hide-arrows"> ${zt("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">${this._renderPresetFeatures()}</div>
      <br /><br />
      <h3>${zt("editor.settings.value",!0)} ${zt("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <ha-textfield
          label="${zt("editor.settings.unit_of_display")}"
          .value=${l.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          auto-validate
          pattern="[0-9]"
          label="${zt("editor.settings.decimals")}"
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
          <label for="invert-value"> ${zt("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=l.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._valueChanged}
          />
          <label for="display-abs"> ${zt("editor.settings.display-abs")} </label>
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
          <label for="calc_excluded"> ${zt("editor.settings.calc_excluded")} </label>
        </div>
        <ha-textfield
          label="${zt("editor.settings.threshold")}"
          .value=${l.threshold||""}
          .configValue=${"threshold"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <br />
      <h3>${zt("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${zt("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${l.secondary_info_entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          allow-custom-entity
          label="${zt("editor.settings.attribute")} (${zt("editor.optional")})"
          .value=${l.secondary_info_attribute||""}
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${d.length>0?B`<mwc-list-item></mwc-list-item>`:void 0}
          ${d.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
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
        <label for="secondary_info_replace_name"> ${zt("editor.settings.replace_name")}</label>
      </div>
      <br />
      <h3>${zt("editor.settings.color-settings",!0)}</h3>
      <ha-textfield
        label="${zt("editor.settings.color_threshold")}"
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
              label="${zt("editor.settings.bigger")}"
              .value=${(null===(i=l.icon_color)||void 0===i?void 0:i.bigger)||""}
              .configValue=${"icon_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${zt("editor.settings.equal")}"
              .value=${(null===(n=l.icon_color)||void 0===n?void 0:n.equal)||""}
              .configValue=${"icon_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${zt("editor.settings.smaller")}"
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
              label="${zt("editor.settings.bigger")}"
              .value=${(null===(r=l.arrow_color)||void 0===r?void 0:r.bigger)||""}
              .configValue=${"arrow_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${zt("editor.settings.equal")}"
              .value=${(null===(a=l.arrow_color)||void 0===a?void 0:a.equal)||""}
              .configValue=${"arrow_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${zt("editor.settings.smaller")}"
              .value=${(null===(s=l.arrow_color)||void 0===s?void 0:s.smaller)||""}
              .configValue=${"arrow_color.smaller"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
        </tr>
      </table>
      <br />
      <h3>${zt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <ha-selector
          label="${zt("editor.settings.tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:ve}}}
          .value=${l.tap_action||{action:"more-info"}}
          .configValue=${"tap_action"}
          @value-changed=${this._valueChanged}
        >
        </ha-selector>
        <ha-selector
          label="${zt("editor.settings.double_tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:ve}}}
          .value=${l.double_tap_action}
          .configValue=${"double_tap_action"}
          @value-changed=${this._valueChanged}
        >
        </ha-selector>
      </div>
    `}_renderPresetFeatures(){if(!this.config||!this.hass)return B``;switch(this.config.preset){case"battery":return B`
          <ha-entity-picker
            label="${zt("editor.settings.battery_percentage")} (${zt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"battery_percentage_entity"}
            .value=${this.config.battery_percentage_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        `;case"grid":return B`
          <ha-entity-picker
            label="${zt("editor.settings.grid-buy")} (${zt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"grid_buy_entity"}
            .value=${this.config.grid_buy_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
          <ha-entity-picker
            label="${zt("editor.settings.grid-sell")} (${zt("editor.optional")})"
            allow-custom-entity
            hideClearIcon
            .hass=${this.hass}
            .configValue=${"grid_sell_entity"}
            .value=${this.config.grid_sell_entity||""}
            @value-changed=${this._valueChanged}
          ></ha-entity-picker>
        `;default:return B``}}_valueChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=void 0!==e.checked?e.checked:t.detail.value||e.value||t.detail.config,n=e.configValue;n&&this.config[n]!==i&&he(this,"config-changed",Object.assign(Object.assign({},this.config),{[n]:i}))}_colorChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=e.value,n=e.configValue;if(!n)return;const[o,r]=n.split("."),a=Object.assign({},this.config[o])||{};a[r]=i,n&&this.config[o]!==a&&he(this,"config-changed",Object.assign(Object.assign({},this.config),{[o]:a}))}static get styles(){return a`
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
    `}};t([dt({attribute:!1})],$e.prototype,"config",void 0),t([dt({attribute:!1})],$e.prototype,"hass",void 0),$e=t([lt("power-distribution-card-item-editor")],$e);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:Ee}=it,xe=()=>document.createComment(""),Se=(t,e,i)=>{var n;const o=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(xe(),r),n=o.insertBefore(xe(),r);i=new Ee(e,n,t,t.options)}else{const e=i._$AB.nextSibling,a=i._$AM,s=a!==t;if(s){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==r||s){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,r),t=e}}}return i},Ce=(t,e,i=t)=>(t._$AI(e,i),t),Ae={},ke=(t,e=Ae)=>t._$AH=e,De=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},Oe=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Te=pe(class extends fe{constructor(t){if(super(t),t.type!==ue)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let a=0;for(const e of t)o[a]=n?n(e,a):a,r[a]=i(e,a),a++;return{values:r,keys:o}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,n]){var o;const r=(t=>t._$AH)(t),{values:a,keys:s}=this.ct(e,i,n);if(!Array.isArray(r))return this.ut=s,a;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],c=[];let d,h,u=0,p=r.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===s[f])c[f]=Ce(r[u],a[f]),u++,f++;else if(l[p]===s[g])c[g]=Ce(r[p],a[g]),p--,g--;else if(l[u]===s[g])c[g]=Ce(r[u],a[g]),Se(t,c[g+1],r[u]),u++,g--;else if(l[p]===s[f])c[f]=Ce(r[p],a[f]),Se(t,r[u],r[p]),p--,f++;else if(void 0===d&&(d=Oe(s,f,g),h=Oe(l,u,p)),d.has(l[u]))if(d.has(l[p])){const e=h.get(s[f]),i=void 0!==e?r[e]:null;if(null===i){const e=Se(t,r[u]);Ce(e,a[f]),c[f]=e}else c[f]=Ce(i,a[f]),Se(t,r[u],i),r[e]=null;f++}else De(r[p]),p--;else De(r[u]),u++;for(;f<=g;){const e=Se(t,c[g+1]);Ce(e,a[f]),c[f++]=e}for(;u<=p;){const t=r[u++];null!==t&&De(t)}return this.ut=s,ke(t,c),V}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Me(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function Pe(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Me(Object(i),!0).forEach(function(e){Ie(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Me(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Ne(t){return Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ne(t)}function Ie(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Re(){return Re=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Re.apply(this,arguments)}function je(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function He(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Be=He(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ve=He(/Edge/i),ze=He(/firefox/i),Le=He(/safari/i)&&!He(/chrome/i)&&!He(/android/i),Xe=He(/iP(ad|od|hone)/i),Ye=He(/chrome/i)&&He(/android/i),Fe={capture:!1,passive:!1};function Ue(t,e,i){t.addEventListener(e,i,!Be&&Fe)}function We(t,e,i){t.removeEventListener(e,i,!Be&&Fe)}function qe(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Ge(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Ke(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&qe(t,e):qe(t,e))||n&&t===i)return t;if(t===i)break}while(t=Ge(t))}return null}var Ze,Je=/\s+/g;function Qe(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Je," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Je," ")}}function ti(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function ei(t,e){var i="";if("string"==typeof t)i=t;else do{var n=ti(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function ii(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function ni(){var t=document.scrollingElement;return t||document.documentElement}function oi(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==ni()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Be))do{if(o&&o.getBoundingClientRect&&("none"!==ti(o,"transform")||i&&"static"!==ti(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(ti(o,"border-top-width")),s-=u.left+parseInt(ti(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=ei(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function ri(t,e,i){for(var n=di(t,!0),o=oi(t)[e];n;){if(!(o>=oi(n)[i]))return n;if(n===ni())break;n=di(n,!1)}return!1}function ai(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==gn.ghost&&(n||a[r]!==gn.dragged)&&Ke(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function si(t,e){for(var i=t.lastElementChild;i&&(i===gn.ghost||"none"===ti(i,"display")||e&&!qe(i,e));)i=i.previousElementSibling;return i||null}function li(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===gn.clone||e&&!qe(t,e)||i++;return i}function ci(t){var e=0,i=0,n=ni();if(t)do{var o=ei(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function di(t,e){if(!t||!t.getBoundingClientRect)return ni();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=ti(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return ni();if(n||e)return i;n=!0}}}while(i=i.parentNode);return ni()}function hi(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function ui(t,e){return function(){if(!Ze){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Ze=setTimeout(function(){Ze=void 0},e)}}}function pi(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function fi(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function gi(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(Ke(o,e.draggable,t,!1)&&!o.animated&&o!==i){var c=oi(o);n.left=Math.min(null!==(r=n.left)&&void 0!==r?r:1/0,c.left),n.top=Math.min(null!==(a=n.top)&&void 0!==a?a:1/0,c.top),n.right=Math.max(null!==(s=n.right)&&void 0!==s?s:-1/0,c.right),n.bottom=Math.max(null!==(l=n.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var vi="Sortable"+(new Date).getTime();function mi(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==ti(t,"display")&&t!==gn.ghost){e.push({target:t,rect:oi(t)});var i=Pe({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=ei(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach(function(t){var e=0,i=t.target,a=i.fromRect,s=oi(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ei(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&hi(l,s)&&!hi(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),hi(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),o?t=setTimeout(function(){"function"==typeof i&&i()},r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){ti(t,"transition",""),ti(t,"transform","");var o=ei(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,ti(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),ti(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),ti(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){ti(t,"transition",""),ti(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},n)}}}}var bi=[],_i={initializeByDefault:!0},yi={mount:function(t){for(var e in _i)_i.hasOwnProperty(e)&&!(e in t)&&(t[e]=_i[e]);bi.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),bi.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";bi.forEach(function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](Pe({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](Pe({sortable:e},i)))})},initializePlugins:function(t,e,i,n){for(var o in bi.forEach(function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Re(i,r.defaults)}}),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return bi.forEach(function(n){"function"==typeof n.eventProperties&&Re(i,n.eventProperties.call(e[n.pluginName],t))}),i},modifyOption:function(t,e,i){var n;return bi.forEach(function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))}),n}};var wi=["evt"],$i=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=je(i,wi);yi.pluginEvent.bind(gn)(t,e,Pe({dragEl:xi,parentEl:Si,ghostEl:Ci,rootEl:Ai,nextEl:ki,lastDownEl:Di,cloneEl:Oi,cloneHidden:Ti,dragStarted:Yi,putSortable:ji,activeSortable:gn.active,originalEvent:n,oldIndex:Mi,oldDraggableIndex:Ni,newIndex:Pi,newDraggableIndex:Ii,hideGhostForTarget:hn,unhideGhostForTarget:un,cloneNowHidden:function(){Ti=!0},cloneNowShown:function(){Ti=!1},dispatchSortableEvent:function(t){Ei({sortable:e,name:t,originalEvent:n})}},o))};function Ei(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[vi]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Be||Ve?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=Pe(Pe({},f),yi.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(Pe({putSortable:ji,cloneEl:Oi,targetEl:xi,rootEl:Ai,oldIndex:Mi,oldDraggableIndex:Ni,newIndex:Pi,newDraggableIndex:Ii},t))}var xi,Si,Ci,Ai,ki,Di,Oi,Ti,Mi,Pi,Ni,Ii,Ri,ji,Hi,Bi,Vi,zi,Li,Xi,Yi,Fi,Ui,Wi,qi,Gi=!1,Ki=!1,Zi=[],Ji=!1,Qi=!1,tn=[],en=!1,nn=[],on="undefined"!=typeof document,rn=Xe,an=Ve||Be?"cssFloat":"float",sn=on&&!Ye&&!Xe&&"draggable"in document.createElement("div"),ln=function(){if(on){if(Be)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),cn=function(t,e){var i=ti(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=ai(t,0,e),r=ai(t,1,e),a=o&&ti(o),s=r&&ti(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+oi(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+oi(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[an]||r&&"none"===i[an]&&l+c>n)?"vertical":"horizontal"},dn=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Ne(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},hn=function(){!ln&&Ci&&ti(Ci,"display","none")},un=function(){!ln&&Ci&&ti(Ci,"display","")};on&&!Ye&&document.addEventListener("click",function(t){if(Ki)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ki=!1,!1},!0);var pn=function(t){if(xi){var e=function(t,e){var i;return Zi.some(function(n){var o=n[vi].options.emptyInsertThreshold;if(o&&!si(n)){var r=oi(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[vi]._onDragOver(i)}}},fn=function(t){xi&&xi.parentNode[vi]._isOutsideThisEl(t.target)};function gn(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Re({},e),t[vi]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return cn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==gn.supportPointer&&"PointerEvent"in window&&!Le,emptyInsertThreshold:5};for(var n in yi.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in dn(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&sn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Ue(t,"pointerdown",this._onTapStart):(Ue(t,"mousedown",this._onTapStart),Ue(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ue(t,"dragover",this),Ue(t,"dragenter",this)),Zi.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Re(this,mi())}function vn(t,e,i,n,o,r,a,s){var l,c,d=t[vi],h=d.options.onMove;return!window.CustomEvent||Be||Ve?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||oi(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function mn(t){t.draggable=!1}function bn(){en=!1}function _n(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function yn(t){return setTimeout(t,0)}function wn(t){return clearTimeout(t)}gn.prototype={constructor:gn,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Fi=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,xi):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){nn.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&nn.push(n)}}(i),!xi&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Le||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Ke(s,n.draggable,i,!1))&&s.animated||Di===s)){if(Mi=li(s),Ni=li(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return Ei({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),$i("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(n){if(n=Ke(l,n.trim(),i,!1))return Ei({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),$i("filter",e,{evt:t}),!0})))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Ke(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!xi&&i.parentNode===r){var l=oi(i);if(Ai=r,Si=(xi=i).parentNode,ki=xi.nextSibling,Di=i,Ri=a.group,gn.dragged=xi,Hi={target:xi,clientX:(e||t).clientX,clientY:(e||t).clientY},Li=Hi.clientX-l.left,Xi=Hi.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,xi.style["will-change"]="all",n=function(){$i("delayEnded",o,{evt:t}),gn.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!ze&&o.nativeDraggable&&(xi.draggable=!0),o._triggerDragStart(t,e),Ei({sortable:o,name:"choose",originalEvent:t}),Qe(xi,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){ii(xi,t.trim(),mn)}),Ue(s,"dragover",pn),Ue(s,"mousemove",pn),Ue(s,"touchmove",pn),Ue(s,"mouseup",o._onDrop),Ue(s,"touchend",o._onDrop),Ue(s,"touchcancel",o._onDrop),ze&&this.nativeDraggable&&(this.options.touchStartThreshold=4,xi.draggable=!0),$i("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Ve||Be))n();else{if(gn.eventCanceled)return void this._onDrop();Ue(s,"mouseup",o._disableDelayedDrag),Ue(s,"touchend",o._disableDelayedDrag),Ue(s,"touchcancel",o._disableDelayedDrag),Ue(s,"mousemove",o._delayedDragTouchMoveHandler),Ue(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Ue(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){xi&&mn(xi),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;We(t,"mouseup",this._disableDelayedDrag),We(t,"touchend",this._disableDelayedDrag),We(t,"touchcancel",this._disableDelayedDrag),We(t,"mousemove",this._delayedDragTouchMoveHandler),We(t,"touchmove",this._delayedDragTouchMoveHandler),We(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Ue(document,"pointermove",this._onTouchMove):Ue(document,e?"touchmove":"mousemove",this._onTouchMove):(Ue(xi,"dragend",this),Ue(Ai,"dragstart",this._onDragStart));try{document.selection?yn(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Gi=!1,Ai&&xi){$i("dragStarted",this,{evt:e}),this.nativeDraggable&&Ue(document,"dragover",fn);var i=this.options;!t&&Qe(xi,i.dragClass,!1),Qe(xi,i.ghostClass,!0),gn.active=this,t&&this._appendGhost(),Ei({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Bi){this._lastX=Bi.clientX,this._lastY=Bi.clientY,hn();for(var t=document.elementFromPoint(Bi.clientX,Bi.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Bi.clientX,Bi.clientY))!==e;)e=t;if(xi.parentNode[vi]._isOutsideThisEl(t),e)do{if(e[vi]){if(e[vi]._onDragOver({clientX:Bi.clientX,clientY:Bi.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);un()}},_onTouchMove:function(t){if(Hi){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=Ci&&ei(Ci,!0),a=Ci&&r&&r.a,s=Ci&&r&&r.d,l=rn&&qi&&ci(qi),c=(o.clientX-Hi.clientX+n.x)/(a||1)+(l?l[0]-tn[0]:0)/(a||1),d=(o.clientY-Hi.clientY+n.y)/(s||1)+(l?l[1]-tn[1]:0)/(s||1);if(!gn.active&&!Gi){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Ci){r?(r.e+=c-(Vi||0),r.f+=d-(zi||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");ti(Ci,"webkitTransform",h),ti(Ci,"mozTransform",h),ti(Ci,"msTransform",h),ti(Ci,"transform",h),Vi=c,zi=d,Bi=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Ci){var t=this.options.fallbackOnBody?document.body:Ai,e=oi(xi,!0,rn,!0,t),i=this.options;if(rn){for(qi=t;"static"===ti(qi,"position")&&"none"===ti(qi,"transform")&&qi!==document;)qi=qi.parentNode;qi!==document.body&&qi!==document.documentElement?(qi===document&&(qi=ni()),e.top+=qi.scrollTop,e.left+=qi.scrollLeft):qi=ni(),tn=ci(qi)}Qe(Ci=xi.cloneNode(!0),i.ghostClass,!1),Qe(Ci,i.fallbackClass,!0),Qe(Ci,i.dragClass,!0),ti(Ci,"transition",""),ti(Ci,"transform",""),ti(Ci,"box-sizing","border-box"),ti(Ci,"margin",0),ti(Ci,"top",e.top),ti(Ci,"left",e.left),ti(Ci,"width",e.width),ti(Ci,"height",e.height),ti(Ci,"opacity","0.8"),ti(Ci,"position",rn?"absolute":"fixed"),ti(Ci,"zIndex","100000"),ti(Ci,"pointerEvents","none"),gn.ghost=Ci,t.appendChild(Ci),ti(Ci,"transform-origin",Li/parseInt(Ci.style.width)*100+"% "+Xi/parseInt(Ci.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;$i("dragStart",this,{evt:t}),gn.eventCanceled?this._onDrop():($i("setupClone",this),gn.eventCanceled||((Oi=fi(xi)).removeAttribute("id"),Oi.draggable=!1,Oi.style["will-change"]="",this._hideClone(),Qe(Oi,this.options.chosenClass,!1),gn.clone=Oi),i.cloneId=yn(function(){$i("clone",i),gn.eventCanceled||(i.options.removeCloneOnHide||Ai.insertBefore(Oi,xi),i._hideClone(),Ei({sortable:i,name:"clone"}))}),!e&&Qe(xi,o.dragClass,!0),e?(Ki=!0,i._loopId=setInterval(i._emulateDragOver,50)):(We(document,"mouseup",i._onDrop),We(document,"touchend",i._onDrop),We(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,xi)),Ue(document,"drop",i),ti(xi,"transform","translateZ(0)")),Gi=!0,i._dragStartId=yn(i._dragStarted.bind(i,e,t)),Ue(document,"selectstart",i),Yi=!0,Le&&ti(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=gn.active,d=Ri===l,h=s.sort,u=ji||c,p=this,f=!1;if(!en){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Ke(a,s.draggable,r,!0),D("dragOver"),gn.eventCanceled)return f;if(xi.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return T(!1);if(Ki=!1,c&&!s.disabled&&(d?h||(n=Si!==Ai):ji===this||(this.lastPutMode=Ri.checkPull(this,c,xi,t))&&l.checkPut(this,c,xi,t))){if(o="vertical"===this._getDirection(t,a),e=oi(xi),D("dragOverValid"),gn.eventCanceled)return f;if(n)return Si=Ai,O(),this._hideClone(),D("revert"),gn.eventCanceled||(ki?Ai.insertBefore(xi,ki):Ai.appendChild(xi)),T(!0);var g=si(r,s.draggable);if(!g||function(t,e,i){var n=oi(si(i.el,i.options.draggable)),o=gi(i.el,i.options,Ci),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}(t,o,this)&&!g.animated){if(g===xi)return T(!1);if(g&&r===t.target&&(a=g),a&&(i=oi(a)),!1!==vn(Ai,r,xi,e,a,i,t,!!a))return O(),g&&g.nextSibling?r.insertBefore(xi,g.nextSibling):r.appendChild(xi),Si=r,M(),T(!0)}else if(g&&function(t,e,i){var n=oi(ai(i.el,0,i.options,!0)),o=gi(i.el,i.options,Ci),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=ai(r,0,s,!0);if(v===xi)return T(!1);if(i=oi(a=v),!1!==vn(Ai,r,xi,e,a,i,t,!1))return O(),r.insertBefore(xi,v),Si=r,M(),T(!0)}else if(a.parentNode===r){i=oi(a);var m,b,_,y=xi.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(xi.animated&&xi.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=ri(a,"top","top")||ri(xi,"top","top"),x=E?E.scrollTop:void 0;if(Fi!==a&&(b=i[$],Ji=!1,Qi=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Wi<c*o){if(!Ji&&(1===Ui?l>d+c*r/2:l<h-c*r/2)&&(Ji=!0),Ji)u=!0;else if(1===Ui?l<d+Wi:l>h-Wi)return-Ui}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return li(xi)<li(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Qi,Fi===a),0!==m){var S=li(xi);do{S-=m,_=Si.children[S]}while(_&&("none"===ti(_,"display")||_===Ci))}if(0===m||_===a)return T(!1);Fi=a,Ui=m;var C=a.nextElementSibling,A=!1,k=vn(Ai,r,xi,e,a,i,t,A=1===m);if(!1!==k)return 1!==k&&-1!==k||(A=1===k),en=!0,setTimeout(bn,30),O(),A&&!C?r.appendChild(xi):a.parentNode.insertBefore(xi,A?C:a),E&&pi(E,0,x-E.scrollTop),Si=xi.parentNode,void 0===b||Qi||(Wi=Math.abs(b-oi(a)[$])),M(),T(!0)}if(r.contains(xi))return T(!1)}return!1}function D(s,l){$i(s,p,Pe({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:T,onMove:function(i,n){return vn(Ai,r,xi,e,i,oi(i),t,n)},changed:M},l))}function O(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function T(e){return D("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Qe(xi,ji?ji.options.ghostClass:c.options.ghostClass,!1),Qe(xi,s.ghostClass,!0)),ji!==p&&p!==gn.active?ji=p:p===gn.active&&ji&&(ji=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===xi&&!xi.animated||a===r&&!a.animated)&&(Fi=null),s.dragoverBubble||t.rootEl||a===document||(xi.parentNode[vi]._isOutsideThisEl(t.target),!e&&pn(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Pi=li(xi),Ii=li(xi,s.draggable),Ei({sortable:p,name:"change",toEl:r,newIndex:Pi,newDraggableIndex:Ii,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){We(document,"mousemove",this._onTouchMove),We(document,"touchmove",this._onTouchMove),We(document,"pointermove",this._onTouchMove),We(document,"dragover",pn),We(document,"mousemove",pn),We(document,"touchmove",pn)},_offUpEvents:function(){var t=this.el.ownerDocument;We(t,"mouseup",this._onDrop),We(t,"touchend",this._onDrop),We(t,"pointerup",this._onDrop),We(t,"touchcancel",this._onDrop),We(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Pi=li(xi),Ii=li(xi,i.draggable),$i("drop",this,{evt:t}),Si=xi&&xi.parentNode,Pi=li(xi),Ii=li(xi,i.draggable),gn.eventCanceled||(Gi=!1,Qi=!1,Ji=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),wn(this.cloneId),wn(this._dragStartId),this.nativeDraggable&&(We(document,"drop",this),We(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Le&&ti(document.body,"user-select",""),ti(xi,"transform",""),t&&(Yi&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Ci&&Ci.parentNode&&Ci.parentNode.removeChild(Ci),(Ai===Si||ji&&"clone"!==ji.lastPutMode)&&Oi&&Oi.parentNode&&Oi.parentNode.removeChild(Oi),xi&&(this.nativeDraggable&&We(xi,"dragend",this),mn(xi),xi.style["will-change"]="",Yi&&!Gi&&Qe(xi,ji?ji.options.ghostClass:this.options.ghostClass,!1),Qe(xi,this.options.chosenClass,!1),Ei({sortable:this,name:"unchoose",toEl:Si,newIndex:null,newDraggableIndex:null,originalEvent:t}),Ai!==Si?(Pi>=0&&(Ei({rootEl:Si,name:"add",toEl:Si,fromEl:Ai,originalEvent:t}),Ei({sortable:this,name:"remove",toEl:Si,originalEvent:t}),Ei({rootEl:Si,name:"sort",toEl:Si,fromEl:Ai,originalEvent:t}),Ei({sortable:this,name:"sort",toEl:Si,originalEvent:t})),ji&&ji.save()):Pi!==Mi&&Pi>=0&&(Ei({sortable:this,name:"update",toEl:Si,originalEvent:t}),Ei({sortable:this,name:"sort",toEl:Si,originalEvent:t})),gn.active&&(null!=Pi&&-1!==Pi||(Pi=Mi,Ii=Ni),Ei({sortable:this,name:"end",toEl:Si,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){$i("nulling",this),Ai=xi=Si=Ci=ki=Oi=Di=Ti=Hi=Bi=Yi=Pi=Ii=Mi=Ni=Fi=Ui=ji=Ri=gn.dragged=gn.ghost=gn.clone=gn.active=null,nn.forEach(function(t){t.checked=!0}),nn.length=Vi=zi=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":xi&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Ke(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||_n(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach(function(t,e){var o=n.children[e];Ke(o,this.options.draggable,n,!1)&&(i[t]=o)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Ke(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=yi.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&dn(i)},destroy:function(){$i("destroy",this);var t=this.el;t[vi]=null,We(t,"mousedown",this._onTapStart),We(t,"touchstart",this._onTapStart),We(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(We(t,"dragover",this),We(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Zi.splice(Zi.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ti){if($i("hideClone",this),gn.eventCanceled)return;ti(Oi,"display","none"),this.options.removeCloneOnHide&&Oi.parentNode&&Oi.parentNode.removeChild(Oi),Ti=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ti){if($i("showClone",this),gn.eventCanceled)return;xi.parentNode!=Ai||this.options.group.revertClone?ki?Ai.insertBefore(Oi,ki):Ai.appendChild(Oi):Ai.insertBefore(Oi,xi),this.options.group.revertClone&&this.animate(xi,Oi),ti(Oi,"display",""),Ti=!1}}else this._hideClone()}},on&&Ue(document,"touchmove",function(t){(gn.active||Gi)&&t.cancelable&&t.preventDefault()}),gn.utils={on:Ue,off:We,css:ti,find:ii,is:function(t,e){return!!Ke(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:ui,closest:Ke,toggleClass:Qe,clone:fi,index:li,nextTick:yn,cancelNextTick:wn,detectDirection:cn,getChild:ai},gn.get=function(t){return t[vi]},gn.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(gn.utils=Pe(Pe({},gn.utils),t.utils)),yi.mount(t)})},gn.create=function(t,e){return new gn(t,e)},gn.version="1.15.2";var $n,En,xn,Sn,Cn,An,kn=[],Dn=!1;function On(){kn.forEach(function(t){clearInterval(t.pid)}),kn=[]}function Tn(){clearInterval(An)}var Mn=ui(function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=ni(),d=!1;En!==i&&(En=i,On(),$n=e.scroll,o=e.scrollFn,!0===$n&&($n=di(i,!0)));var h=0,u=$n;do{var p=u,f=oi(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=ti(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var k=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),D=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!kn[h])for(var O=0;O<=h;O++)kn[O]||(kn[O]={});kn[h].vx==k&&kn[h].vy==D&&kn[h].el===p||(kn[h].el=p,kn[h].vx=k,kn[h].vy=D,clearInterval(kn[h].pid),0==k&&0==D||(d=!0,kn[h].pid=setInterval(function(){n&&0===this.layer&&gn.active._onTouchMove(Cn);var e=kn[this.layer].vy?kn[this.layer].vy*l:0,i=kn[this.layer].vx?kn[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(gn.dragged.parentNode[vi],i,e,t,Cn,kn[this.layer].el)||pi(kn[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=di(u,!1)));Dn=d}},30),Pn=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Nn(){}function In(){}
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Rn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function jn(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Rn(Object(i),!0).forEach(function(e){Bn(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Rn(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Hn(t){return Hn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(t)}function Bn(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Vn(){return Vn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Vn.apply(this,arguments)}function zn(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}Nn.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=ai(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Pn},Re(Nn,{pluginName:"revertOnSpill"}),In.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Pn},Re(In,{pluginName:"removeOnSpill"}),gn.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Ue(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Ue(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Ue(document,"touchmove",this._handleFallbackAutoScroll):Ue(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?We(document,"dragover",this._handleAutoScroll):(We(document,"pointermove",this._handleFallbackAutoScroll),We(document,"touchmove",this._handleFallbackAutoScroll),We(document,"mousemove",this._handleFallbackAutoScroll)),Tn(),On(),clearTimeout(Ze),Ze=void 0},nulling:function(){Cn=En=$n=Dn=An=xn=Sn=null,kn.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(Cn=t,e||this.options.forceAutoScrollFallback||Ve||Be||Le){Mn(t,this.options,r,e);var a=di(r,!0);!Dn||An&&n===xn&&o===Sn||(An&&Tn(),An=setInterval(function(){var r=di(document.elementFromPoint(n,o),!0);r!==a&&(a=r,On()),Mn(t,i.options,r,e)},10),xn=n,Sn=o)}else{if(!this.options.bubbleScroll||di(r,!0)===ni())return void On();Mn(t,this.options,di(r,!1),!1)}}},Re(t,{pluginName:"scroll",initializeByDefault:!0})}),gn.mount(In,Nn);function Ln(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Xn=Ln(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Yn=Ln(/Edge/i),Fn=Ln(/firefox/i),Un=Ln(/safari/i)&&!Ln(/chrome/i)&&!Ln(/android/i),Wn=Ln(/iP(ad|od|hone)/i),qn=Ln(/chrome/i)&&Ln(/android/i),Gn={capture:!1,passive:!1};function Kn(t,e,i){t.addEventListener(e,i,!Xn&&Gn)}function Zn(t,e,i){t.removeEventListener(e,i,!Xn&&Gn)}function Jn(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Qn(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function to(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Jn(t,e):Jn(t,e))||n&&t===i)return t;if(t===i)break}while(t=Qn(t))}return null}var eo,io=/\s+/g;function no(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(io," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(io," ")}}function oo(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function ro(t,e){var i="";if("string"==typeof t)i=t;else do{var n=oo(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function ao(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function so(){var t=document.scrollingElement;return t||document.documentElement}function lo(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==so()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Xn))do{if(o&&o.getBoundingClientRect&&("none"!==oo(o,"transform")||i&&"static"!==oo(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(oo(o,"border-top-width")),s-=u.left+parseInt(oo(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=ro(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function co(t,e,i){for(var n=go(t,!0),o=lo(t)[e];n;){if(!(o>=lo(n)[i]))return n;if(n===so())break;n=go(n,!1)}return!1}function ho(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==_r.ghost&&(n||a[r]!==_r.dragged)&&to(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function uo(t,e){for(var i=t.lastElementChild;i&&(i===_r.ghost||"none"===oo(i,"display")||e&&!Jn(i,e));)i=i.previousElementSibling;return i||null}function po(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===_r.clone||e&&!Jn(t,e)||i++;return i}function fo(t){var e=0,i=0,n=so();if(t)do{var o=ro(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function go(t,e){if(!t||!t.getBoundingClientRect)return so();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=oo(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return so();if(n||e)return i;n=!0}}}while(i=i.parentNode);return so()}function vo(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function mo(t,e){return function(){if(!eo){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),eo=setTimeout(function(){eo=void 0},e)}}}function bo(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function _o(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function yo(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(to(o,e.draggable,t,!1)&&!o.animated&&o!==i){var c=lo(o);n.left=Math.min(null!==(r=n.left)&&void 0!==r?r:1/0,c.left),n.top=Math.min(null!==(a=n.top)&&void 0!==a?a:1/0,c.top),n.right=Math.max(null!==(s=n.right)&&void 0!==s?s:-1/0,c.right),n.bottom=Math.max(null!==(l=n.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var wo="Sortable"+(new Date).getTime();function $o(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==oo(t,"display")&&t!==_r.ghost){e.push({target:t,rect:lo(t)});var i=jn({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=ro(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach(function(t){var e=0,i=t.target,a=i.fromRect,s=lo(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ro(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&vo(l,s)&&!vo(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),vo(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),o?t=setTimeout(function(){"function"==typeof i&&i()},r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){oo(t,"transition",""),oo(t,"transform","");var o=ro(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,oo(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),oo(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),oo(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){oo(t,"transition",""),oo(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},n)}}}}var Eo=[],xo={initializeByDefault:!0},So={mount:function(t){for(var e in xo)xo.hasOwnProperty(e)&&!(e in t)&&(t[e]=xo[e]);Eo.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Eo.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Eo.forEach(function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](jn({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](jn({sortable:e},i)))})},initializePlugins:function(t,e,i,n){for(var o in Eo.forEach(function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Vn(i,r.defaults)}}),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return Eo.forEach(function(n){"function"==typeof n.eventProperties&&Vn(i,n.eventProperties.call(e[n.pluginName],t))}),i},modifyOption:function(t,e,i){var n;return Eo.forEach(function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))}),n}};var Co=["evt"],Ao=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=zn(i,Co);So.pluginEvent.bind(_r)(t,e,jn({dragEl:Do,parentEl:Oo,ghostEl:To,rootEl:Mo,nextEl:Po,lastDownEl:No,cloneEl:Io,cloneHidden:Ro,dragStarted:Go,putSortable:Lo,activeSortable:_r.active,originalEvent:n,oldIndex:jo,oldDraggableIndex:Bo,newIndex:Ho,newDraggableIndex:Vo,hideGhostForTarget:gr,unhideGhostForTarget:vr,cloneNowHidden:function(){Ro=!0},cloneNowShown:function(){Ro=!1},dispatchSortableEvent:function(t){ko({sortable:e,name:t,originalEvent:n})}},o))};function ko(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[wo]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Xn||Yn?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=jn(jn({},f),So.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(jn({putSortable:Lo,cloneEl:Io,targetEl:Do,rootEl:Mo,oldIndex:jo,oldDraggableIndex:Bo,newIndex:Ho,newDraggableIndex:Vo},t))}var Do,Oo,To,Mo,Po,No,Io,Ro,jo,Ho,Bo,Vo,zo,Lo,Xo,Yo,Fo,Uo,Wo,qo,Go,Ko,Zo,Jo,Qo,tr=!1,er=!1,ir=[],nr=!1,or=!1,rr=[],ar=!1,sr=[],lr="undefined"!=typeof document,cr=Wn,dr=Yn||Xn?"cssFloat":"float",hr=lr&&!qn&&!Wn&&"draggable"in document.createElement("div"),ur=function(){if(lr){if(Xn)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),pr=function(t,e){var i=oo(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=ho(t,0,e),r=ho(t,1,e),a=o&&oo(o),s=r&&oo(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+lo(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+lo(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[dr]||r&&"none"===i[dr]&&l+c>n)?"vertical":"horizontal"},fr=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Hn(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},gr=function(){!ur&&To&&oo(To,"display","none")},vr=function(){!ur&&To&&oo(To,"display","")};lr&&!qn&&document.addEventListener("click",function(t){if(er)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),er=!1,!1},!0);var mr=function(t){if(Do){var e=function(t,e){var i;return ir.some(function(n){var o=n[wo].options.emptyInsertThreshold;if(o&&!uo(n)){var r=lo(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}}),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[wo]._onDragOver(i)}}},br=function(t){Do&&Do.parentNode[wo]._isOutsideThisEl(t.target)};function _r(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Vn({},e),t[wo]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return pr(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==_r.supportPointer&&"PointerEvent"in window&&!Un,emptyInsertThreshold:5};for(var n in So.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in fr(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&hr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Kn(t,"pointerdown",this._onTapStart):(Kn(t,"mousedown",this._onTapStart),Kn(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Kn(t,"dragover",this),Kn(t,"dragenter",this)),ir.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Vn(this,$o())}function yr(t,e,i,n,o,r,a,s){var l,c,d=t[wo],h=d.options.onMove;return!window.CustomEvent||Xn||Yn?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||lo(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function wr(t){t.draggable=!1}function $r(){ar=!1}function Er(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function xr(t){return setTimeout(t,0)}function Sr(t){return clearTimeout(t)}_r.prototype={constructor:_r,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Ko=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Do):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){sr.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&sr.push(n)}}(i),!Do&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Un||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=to(s,n.draggable,i,!1))&&s.animated||No===s)){if(jo=po(s),Bo=po(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ko({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Ao("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(n){if(n=to(l,n.trim(),i,!1))return ko({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),Ao("filter",e,{evt:t}),!0})))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!to(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!Do&&i.parentNode===r){var l=lo(i);if(Mo=r,Oo=(Do=i).parentNode,Po=Do.nextSibling,No=i,zo=a.group,_r.dragged=Do,Xo={target:Do,clientX:(e||t).clientX,clientY:(e||t).clientY},Wo=Xo.clientX-l.left,qo=Xo.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Do.style["will-change"]="all",n=function(){Ao("delayEnded",o,{evt:t}),_r.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!Fn&&o.nativeDraggable&&(Do.draggable=!0),o._triggerDragStart(t,e),ko({sortable:o,name:"choose",originalEvent:t}),no(Do,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){ao(Do,t.trim(),wr)}),Kn(s,"dragover",mr),Kn(s,"mousemove",mr),Kn(s,"touchmove",mr),Kn(s,"mouseup",o._onDrop),Kn(s,"touchend",o._onDrop),Kn(s,"touchcancel",o._onDrop),Fn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Do.draggable=!0),Ao("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Yn||Xn))n();else{if(_r.eventCanceled)return void this._onDrop();Kn(s,"mouseup",o._disableDelayedDrag),Kn(s,"touchend",o._disableDelayedDrag),Kn(s,"touchcancel",o._disableDelayedDrag),Kn(s,"mousemove",o._delayedDragTouchMoveHandler),Kn(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Kn(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Do&&wr(Do),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Zn(t,"mouseup",this._disableDelayedDrag),Zn(t,"touchend",this._disableDelayedDrag),Zn(t,"touchcancel",this._disableDelayedDrag),Zn(t,"mousemove",this._delayedDragTouchMoveHandler),Zn(t,"touchmove",this._delayedDragTouchMoveHandler),Zn(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Kn(document,"pointermove",this._onTouchMove):Kn(document,e?"touchmove":"mousemove",this._onTouchMove):(Kn(Do,"dragend",this),Kn(Mo,"dragstart",this._onDragStart));try{document.selection?xr(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(tr=!1,Mo&&Do){Ao("dragStarted",this,{evt:e}),this.nativeDraggable&&Kn(document,"dragover",br);var i=this.options;!t&&no(Do,i.dragClass,!1),no(Do,i.ghostClass,!0),_r.active=this,t&&this._appendGhost(),ko({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Yo){this._lastX=Yo.clientX,this._lastY=Yo.clientY,gr();for(var t=document.elementFromPoint(Yo.clientX,Yo.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Yo.clientX,Yo.clientY))!==e;)e=t;if(Do.parentNode[wo]._isOutsideThisEl(t),e)do{if(e[wo]){if(e[wo]._onDragOver({clientX:Yo.clientX,clientY:Yo.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);vr()}},_onTouchMove:function(t){if(Xo){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=To&&ro(To,!0),a=To&&r&&r.a,s=To&&r&&r.d,l=cr&&Qo&&fo(Qo),c=(o.clientX-Xo.clientX+n.x)/(a||1)+(l?l[0]-rr[0]:0)/(a||1),d=(o.clientY-Xo.clientY+n.y)/(s||1)+(l?l[1]-rr[1]:0)/(s||1);if(!_r.active&&!tr){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(To){r?(r.e+=c-(Fo||0),r.f+=d-(Uo||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");oo(To,"webkitTransform",h),oo(To,"mozTransform",h),oo(To,"msTransform",h),oo(To,"transform",h),Fo=c,Uo=d,Yo=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!To){var t=this.options.fallbackOnBody?document.body:Mo,e=lo(Do,!0,cr,!0,t),i=this.options;if(cr){for(Qo=t;"static"===oo(Qo,"position")&&"none"===oo(Qo,"transform")&&Qo!==document;)Qo=Qo.parentNode;Qo!==document.body&&Qo!==document.documentElement?(Qo===document&&(Qo=so()),e.top+=Qo.scrollTop,e.left+=Qo.scrollLeft):Qo=so(),rr=fo(Qo)}no(To=Do.cloneNode(!0),i.ghostClass,!1),no(To,i.fallbackClass,!0),no(To,i.dragClass,!0),oo(To,"transition",""),oo(To,"transform",""),oo(To,"box-sizing","border-box"),oo(To,"margin",0),oo(To,"top",e.top),oo(To,"left",e.left),oo(To,"width",e.width),oo(To,"height",e.height),oo(To,"opacity","0.8"),oo(To,"position",cr?"absolute":"fixed"),oo(To,"zIndex","100000"),oo(To,"pointerEvents","none"),_r.ghost=To,t.appendChild(To),oo(To,"transform-origin",Wo/parseInt(To.style.width)*100+"% "+qo/parseInt(To.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;Ao("dragStart",this,{evt:t}),_r.eventCanceled?this._onDrop():(Ao("setupClone",this),_r.eventCanceled||((Io=_o(Do)).removeAttribute("id"),Io.draggable=!1,Io.style["will-change"]="",this._hideClone(),no(Io,this.options.chosenClass,!1),_r.clone=Io),i.cloneId=xr(function(){Ao("clone",i),_r.eventCanceled||(i.options.removeCloneOnHide||Mo.insertBefore(Io,Do),i._hideClone(),ko({sortable:i,name:"clone"}))}),!e&&no(Do,o.dragClass,!0),e?(er=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Zn(document,"mouseup",i._onDrop),Zn(document,"touchend",i._onDrop),Zn(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,Do)),Kn(document,"drop",i),oo(Do,"transform","translateZ(0)")),tr=!0,i._dragStartId=xr(i._dragStarted.bind(i,e,t)),Kn(document,"selectstart",i),Go=!0,Un&&oo(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=_r.active,d=zo===l,h=s.sort,u=Lo||c,p=this,f=!1;if(!ar){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=to(a,s.draggable,r,!0),D("dragOver"),_r.eventCanceled)return f;if(Do.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return T(!1);if(er=!1,c&&!s.disabled&&(d?h||(n=Oo!==Mo):Lo===this||(this.lastPutMode=zo.checkPull(this,c,Do,t))&&l.checkPut(this,c,Do,t))){if(o="vertical"===this._getDirection(t,a),e=lo(Do),D("dragOverValid"),_r.eventCanceled)return f;if(n)return Oo=Mo,O(),this._hideClone(),D("revert"),_r.eventCanceled||(Po?Mo.insertBefore(Do,Po):Mo.appendChild(Do)),T(!0);var g=uo(r,s.draggable);if(!g||function(t,e,i){var n=lo(uo(i.el,i.options.draggable)),o=yo(i.el,i.options,To),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}(t,o,this)&&!g.animated){if(g===Do)return T(!1);if(g&&r===t.target&&(a=g),a&&(i=lo(a)),!1!==yr(Mo,r,Do,e,a,i,t,!!a))return O(),g&&g.nextSibling?r.insertBefore(Do,g.nextSibling):r.appendChild(Do),Oo=r,M(),T(!0)}else if(g&&function(t,e,i){var n=lo(ho(i.el,0,i.options,!0)),o=yo(i.el,i.options,To),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=ho(r,0,s,!0);if(v===Do)return T(!1);if(i=lo(a=v),!1!==yr(Mo,r,Do,e,a,i,t,!1))return O(),r.insertBefore(Do,v),Oo=r,M(),T(!0)}else if(a.parentNode===r){i=lo(a);var m,b,_,y=Do.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(Do.animated&&Do.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=co(a,"top","top")||co(Do,"top","top"),x=E?E.scrollTop:void 0;if(Ko!==a&&(b=i[$],nr=!1,or=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Jo<c*o){if(!nr&&(1===Zo?l>d+c*r/2:l<h-c*r/2)&&(nr=!0),nr)u=!0;else if(1===Zo?l<d+Jo:l>h-Jo)return-Zo}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return po(Do)<po(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,or,Ko===a),0!==m){var S=po(Do);do{S-=m,_=Oo.children[S]}while(_&&("none"===oo(_,"display")||_===To))}if(0===m||_===a)return T(!1);Ko=a,Zo=m;var C=a.nextElementSibling,A=!1,k=yr(Mo,r,Do,e,a,i,t,A=1===m);if(!1!==k)return 1!==k&&-1!==k||(A=1===k),ar=!0,setTimeout($r,30),O(),A&&!C?r.appendChild(Do):a.parentNode.insertBefore(Do,A?C:a),E&&bo(E,0,x-E.scrollTop),Oo=Do.parentNode,void 0===b||or||(Jo=Math.abs(b-lo(a)[$])),M(),T(!0)}if(r.contains(Do))return T(!1)}return!1}function D(s,l){Ao(s,p,jn({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:T,onMove:function(i,n){return yr(Mo,r,Do,e,i,lo(i),t,n)},changed:M},l))}function O(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function T(e){return D("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(no(Do,Lo?Lo.options.ghostClass:c.options.ghostClass,!1),no(Do,s.ghostClass,!0)),Lo!==p&&p!==_r.active?Lo=p:p===_r.active&&Lo&&(Lo=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===Do&&!Do.animated||a===r&&!a.animated)&&(Ko=null),s.dragoverBubble||t.rootEl||a===document||(Do.parentNode[wo]._isOutsideThisEl(t.target),!e&&mr(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Ho=po(Do),Vo=po(Do,s.draggable),ko({sortable:p,name:"change",toEl:r,newIndex:Ho,newDraggableIndex:Vo,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Zn(document,"mousemove",this._onTouchMove),Zn(document,"touchmove",this._onTouchMove),Zn(document,"pointermove",this._onTouchMove),Zn(document,"dragover",mr),Zn(document,"mousemove",mr),Zn(document,"touchmove",mr)},_offUpEvents:function(){var t=this.el.ownerDocument;Zn(t,"mouseup",this._onDrop),Zn(t,"touchend",this._onDrop),Zn(t,"pointerup",this._onDrop),Zn(t,"touchcancel",this._onDrop),Zn(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Ho=po(Do),Vo=po(Do,i.draggable),Ao("drop",this,{evt:t}),Oo=Do&&Do.parentNode,Ho=po(Do),Vo=po(Do,i.draggable),_r.eventCanceled||(tr=!1,or=!1,nr=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Sr(this.cloneId),Sr(this._dragStartId),this.nativeDraggable&&(Zn(document,"drop",this),Zn(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Un&&oo(document.body,"user-select",""),oo(Do,"transform",""),t&&(Go&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),To&&To.parentNode&&To.parentNode.removeChild(To),(Mo===Oo||Lo&&"clone"!==Lo.lastPutMode)&&Io&&Io.parentNode&&Io.parentNode.removeChild(Io),Do&&(this.nativeDraggable&&Zn(Do,"dragend",this),wr(Do),Do.style["will-change"]="",Go&&!tr&&no(Do,Lo?Lo.options.ghostClass:this.options.ghostClass,!1),no(Do,this.options.chosenClass,!1),ko({sortable:this,name:"unchoose",toEl:Oo,newIndex:null,newDraggableIndex:null,originalEvent:t}),Mo!==Oo?(Ho>=0&&(ko({rootEl:Oo,name:"add",toEl:Oo,fromEl:Mo,originalEvent:t}),ko({sortable:this,name:"remove",toEl:Oo,originalEvent:t}),ko({rootEl:Oo,name:"sort",toEl:Oo,fromEl:Mo,originalEvent:t}),ko({sortable:this,name:"sort",toEl:Oo,originalEvent:t})),Lo&&Lo.save()):Ho!==jo&&Ho>=0&&(ko({sortable:this,name:"update",toEl:Oo,originalEvent:t}),ko({sortable:this,name:"sort",toEl:Oo,originalEvent:t})),_r.active&&(null!=Ho&&-1!==Ho||(Ho=jo,Vo=Bo),ko({sortable:this,name:"end",toEl:Oo,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Ao("nulling",this),Mo=Do=Oo=To=Po=Io=No=Ro=Xo=Yo=Go=Ho=Vo=jo=Bo=Ko=Zo=Lo=zo=_r.dragged=_r.ghost=_r.clone=_r.active=null,sr.forEach(function(t){t.checked=!0}),sr.length=Fo=Uo=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Do&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)to(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Er(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach(function(t,e){var o=n.children[e];to(o,this.options.draggable,n,!1)&&(i[t]=o)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return to(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=So.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&fr(i)},destroy:function(){Ao("destroy",this);var t=this.el;t[wo]=null,Zn(t,"mousedown",this._onTapStart),Zn(t,"touchstart",this._onTapStart),Zn(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Zn(t,"dragover",this),Zn(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ir.splice(ir.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ro){if(Ao("hideClone",this),_r.eventCanceled)return;oo(Io,"display","none"),this.options.removeCloneOnHide&&Io.parentNode&&Io.parentNode.removeChild(Io),Ro=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ro){if(Ao("showClone",this),_r.eventCanceled)return;Do.parentNode!=Mo||this.options.group.revertClone?Po?Mo.insertBefore(Io,Po):Mo.appendChild(Io):Mo.insertBefore(Io,Do),this.options.group.revertClone&&this.animate(Do,Io),oo(Io,"display",""),Ro=!1}}else this._hideClone()}},lr&&Kn(document,"touchmove",function(t){(_r.active||tr)&&t.cancelable&&t.preventDefault()}),_r.utils={on:Kn,off:Zn,css:oo,find:ao,is:function(t,e){return!!to(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:mo,closest:to,toggleClass:no,clone:_o,index:po,nextTick:xr,cancelNextTick:Sr,detectDirection:pr,getChild:ho},_r.get=function(t){return t[wo]},_r.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(_r.utils=jn(jn({},_r.utils),t.utils)),So.mount(t)})},_r.create=function(t,e){return new _r(t,e)},_r.version="1.15.2";var Cr,Ar,kr,Dr,Or,Tr,Mr=[],Pr=!1;function Nr(){Mr.forEach(function(t){clearInterval(t.pid)}),Mr=[]}function Ir(){clearInterval(Tr)}var Rr=mo(function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=so(),d=!1;Ar!==i&&(Ar=i,Nr(),Cr=e.scroll,o=e.scrollFn,!0===Cr&&(Cr=go(i,!0)));var h=0,u=Cr;do{var p=u,f=lo(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=oo(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var k=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),D=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!Mr[h])for(var O=0;O<=h;O++)Mr[O]||(Mr[O]={});Mr[h].vx==k&&Mr[h].vy==D&&Mr[h].el===p||(Mr[h].el=p,Mr[h].vx=k,Mr[h].vy=D,clearInterval(Mr[h].pid),0==k&&0==D||(d=!0,Mr[h].pid=setInterval(function(){n&&0===this.layer&&_r.active._onTouchMove(Or);var e=Mr[this.layer].vy?Mr[this.layer].vy*l:0,i=Mr[this.layer].vx?Mr[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(_r.dragged.parentNode[wo],i,e,t,Or,Mr[this.layer].el)||bo(Mr[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=go(u,!1)));Pr=d}},30),jr=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Hr(){}function Br(){}Hr.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=ho(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:jr},Vn(Hr,{pluginName:"revertOnSpill"}),Br.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:jr},Vn(Br,{pluginName:"removeOnSpill"});var Vr=[Br,Hr];_r.mount(Vr,new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Kn(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Kn(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Kn(document,"touchmove",this._handleFallbackAutoScroll):Kn(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Zn(document,"dragover",this._handleAutoScroll):(Zn(document,"pointermove",this._handleFallbackAutoScroll),Zn(document,"touchmove",this._handleFallbackAutoScroll),Zn(document,"mousemove",this._handleFallbackAutoScroll)),Ir(),Nr(),clearTimeout(eo),eo=void 0},nulling:function(){Or=Ar=Cr=Pr=Tr=kr=Dr=null,Mr.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(Or=t,e||this.options.forceAutoScrollFallback||Yn||Xn||Un){Rr(t,this.options,r,e);var a=go(r,!0);!Pr||Tr&&n===kr&&o===Dr||(Tr&&Ir(),Tr=setInterval(function(){var r=go(document.elementFromPoint(n,o),!0);r!==a&&(a=r,Nr()),Rr(t,i.options,r,e)},10),kr=n,Dr=o)}else{if(!this.options.bubbleScroll||go(r,!0)===so())return void Nr();Rr(t,this.options,go(r,!1),!1)}}},Vn(t,{pluginName:"scroll",initializeByDefault:!0})});let zr=class extends at{constructor(){super(...arguments),this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}disconnectedCallback(){this._destroySortable()}_destroySortable(){var t;null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0}async firstUpdated(){this._createSortable()}_createSortable(){this._sortable=new gn(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:t=>{t.item.placeholder=document.createComment("sort-placeholder"),t.item.after(t.item.placeholder)},onEnd:t=>{t.item.placeholder&&(t.item.placeholder.replaceWith(t.item),delete t.item.placeholder),this._rowMoved(t)}})}render(){return this.entities&&this.hass?B`
      <h3>${zt("editor.settings.entities")}</h3>
      <div class="entities">
        ${Te(this.entities,t=>this._getKey(t),(t,e)=>B`
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
                .label=${zt("editor.actions.remove")}
                .path=${ye}
                class="remove-icon"
                .index=${e}
                @click=${this._removeRow}
              ></ha-icon-button>

              <ha-icon-button
                .label=${zt("editor.actions.edit")}
                .path=${we}
                class="edit-icon"
                .index=${e}
                @click="${this._editRow}"
              ></ha-icon-button>
            </div>
          `)}
      </div>
      <div class="add-item row">
        <ha-select
          label="${zt("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          naturalMenuWidth
          fixedMenuPosition
          @closed=${t=>t.stopPropagation()}
        >
          ${St.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
        </ha-select>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <ha-icon-button
          .label=${zt("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addRow}"
        ></ha-icon-button>
      </div>
    `:z}_valueChanged(t){if(!this.entities||!this.hass)return;const e=t.detail.value,i=t.target.index,n=this.entities.concat();n[i]=Object.assign(Object.assign({},n[i]),{entity:e||""}),he(this,"config-changed",n)}_removeRow(t){t.stopPropagation();const e=t.currentTarget.index;if(null!=e){const t=this.entities.concat();t.splice(e,1),he(this,"config-changed",t)}}_editRow(t){t.stopPropagation();const e=t.target.index;null!=e&&he(this,"edit-item",e)}_addRow(t){if(t.stopPropagation(),!this.entities||!this.hass)return;const e=this.shadowRoot.querySelector(".add-preset").value||"placeholder",i=this.shadowRoot.querySelector(".add-entity").value,n=Object.assign({},At,Ct[e],{entity:i,preset:""==i?"placeholder":e});he(this,"config-changed",[...this.entities,n])}_rowMoved(t){if(t.stopPropagation(),t.oldIndex===t.newIndex||!this.entities)return;const e=this.entities.concat();e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),he(this,"config-changed",e)}static get styles(){return a`
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
    `}};t([dt({attribute:!1})],zr.prototype,"entities",void 0),t([dt({attribute:!1})],zr.prototype,"hass",void 0),zr=t([lt("power-distribution-card-items-editor")],zr);const Lr=["none","flash","slide"],Xr=["none","card","bars"],Yr=["autarky","ratio",""],Fr=["more-info","toggle","navigate","url","call-service","none"];let Ur=class extends at{constructor(){super(...arguments),this._subElementEditor=void 0}async setConfig(t){this._config=t}async firstUpdated(){var t,e;customElements.get("ha-form")&&customElements.get("hui-action-editor")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement(),console.log(this.hass)}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():B`
      <div class="card-config">
        <ha-textfield
          label="${zt("editor.settings.title")} (${zt("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="${zt("editor.settings.animation")}"
          .configValue=${"animation"}
          .value=${(null===(e=this._config)||void 0===e?void 0:e.animation)||"flash"}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${Lr.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
        </ha-select>
        <br />
        <div class="entity row">
          <ha-select
            label="${zt("editor.settings.center")}"
            .configValue=${"type"}
            @selected=${this._centerChanged}
            @closed=${t=>t.stopPropagation()}
            .value=${(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none"}
          >
            ${Xr.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
          </ha-select>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?B`<ha-icon-button
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                .path=${we}
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
    `:B``}_entitiesChanged(t){t.stopPropagation(),this._config&&this.hass&&_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:t.detail})})}_edit_item(t){if(t.stopPropagation(),!this._config||!this.hass)return;const e=t.detail;this._subElementEditor={type:"entity",index:e}}_renderSubElementEditor(){var t,e,i;const n=[B`
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
          `);break;case"bars":n.push(this._barEditor());break;case"card":n.push(this._cardEditor())}return B`${n}`}_goBack(){this._subElementEditor=void 0}_itemChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=null===(e=this._subElementEditor)||void 0===e?void 0:e.index;if(null!=i){const e=[...this._config.entities];e[i]=t.detail,_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:e})})}}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}_t(this,"config-changed",{config:this._config})}}_editCenter(t){t.currentTarget&&(this._subElementEditor={type:t.currentTarget.value})}_barChanged(t){var e;if(!t.target)return;const i=t.target;if(!i.configValue)return;let n;if("content"==i.configValue)n=i.value;else{n=[...this._config.center.content];const t=i.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;n[t]=Object.assign(Object.assign({},n[t]),{[i.configValue]:null!=i.checked?i.checked:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:n}}),_t(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach((e,i)=>t.push(B`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <ha-icon-button
            label=${zt("editor.actions.remove")}
            class="remove-icon"
            .i=${i}
            .path=${ye}
            @click=${this._removeBar}
            >
          </ha-icon-button>
          </h4>
          <div class="side-by-side">
            <ha-textfield
              label="${zt("editor.settings.name")} (${zt("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-entity-picker
              label="${zt("editor.settings.entity")}"
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
              <label for="invert-value"> ${zt("editor.settings.invert-value")}</label>
            </div>
            <div>
            <ha-select
              label="${zt("editor.settings.preset")}"
              .configValue=${"preset"}
              .value=${e.preset||""}
              @selected=${this._barChanged}
              @closed=${t=>t.stopPropagation()}
              .i=${i}
            >
              ${Yr.map(t=>B`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
            </ha-select>
          </div>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="${zt("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-textfield
              .label="${zt("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
          </div>
          <h3>${zt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${Fr}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${Fr}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `)),t.push(B`
      <mwc-icon-button aria-label=${zt("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),B`${t.map(t=>B`${t}`)}`}_cardEditor(){return B`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}_t(this,"config-changed",{config:this._config})}}static get styles(){return[a`
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
        }`]}};t([dt({attribute:!1})],Ur.prototype,"hass",void 0),t([ht()],Ur.prototype,"_config",void 0),t([ht()],Ur.prototype,"_subElementEditor",void 0),Ur=t([lt("power-distribution-card-editor")],Ur);var Wr=Object.freeze({__proto__:null,get PowerDistributionCardEditor(){return Ur}});console.info("%c POWER-DISTRIBUTION-CARD %c 2.5.12 ","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:zt("common.description")});let qr=class extends at{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return await Promise.resolve().then(function(){return Wr}),document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:zt("editor.settings.autarky")},{preset:"ratio",name:zt("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},kt,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach(t=>{if(!t.preset||!St.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},At,Ct[t.preset],t);e.entities.push(i)}}),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){const t=this._config;if(t.entities.forEach((t,e)=>{if(!t.entity)return;const i=this._state({entity:t.entity,attribute:"unit_of_measurement"});t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")}),"bars"==t.center.type){const e=t.center.content.map(t=>{let e="%";return t.entity&&(e=this._state({entity:t.entity,attribute:"unit_of_measurement"})),Object.assign(Object.assign({},t),{unit_of_measurement:t.unit_of_measurement||e})});this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{content:e})})}this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return Dt}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._attachObserver())}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof ce&&(window.ResizeObserver=(await Promise.resolve().then(function(){return de})).default)})(),this._resizeObserver=new ce(function(t,e){var i;return function(){var n=[].slice.call(arguments),o=this;clearTimeout(i),i=setTimeout(function(){i=null,t.apply(o,n)},e)}}(()=>this._adjustWidth(),250)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);let n=this._state(t);const o=t.threshold||null;return n=o&&Math.abs(n)<o?0:n,n*i}_state(t){return t.entity&&this.hass.states[t.entity]?t.attribute?this.hass.states[t.entity].attributes[t.attribute]:this.hass.states[t.entity].state:null}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);r%2==0?t.push(s):i.push(s)});switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return B` ${this._narrow?Ot:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),Et(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return B`<item class="placeholder"></item>`;let n=t,o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])n/=1e3;else if("adaptive"==e.unit_of_display){let t="W";e.unit_of_measurement&&(t="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(n)>999?(n/=1e3,o="k"+t):o=t}const r=10**(e.decimals||0==e.decimals?e.decimals:2);n=Math.round(n*r)/r;const a=e.invert_arrow?-1*n:n;n=e.display_abs?Math.abs(n):n;const s=vt(n,this.hass.locale);let l;e.secondary_info_entity&&(l=e.secondary_info_attribute?this._state({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})+"":`${this._state({entity:e.secondary_info_entity})}${this._state({entity:e.secondary_info_entity,attribute:"unit_of_measurement"})||""}`),e.secondary_info_replace_name&&(e.name=l,l=void 0);let c=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(c="mdi:battery",t<5?c="mdi:battery-outline":t<95&&(c="mdi:battery-"+(t/10).toFixed(0)+"0"))}let d=!1,h=B``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(d=!0,h=B`
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
        .actionHandler=${_e({hasDoubleClick:xt(e.double_tap_action)})}
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
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach(n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=Math.min(parseInt(this._val(n).toFixed(0),10),100)),i.push(B`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${_e({hasDoubleClick:xt(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}${n.unit_of_measurement||"%"}</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)}),B`${i.map(t=>B`${t}`)}`):B``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(e)if(yt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(wt[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout(function(){a.style.display=""},2e3);return customElements.whenDefined(t.type).then(function(){clearTimeout(s),_t(a,"ll-rebuild",{},a)}),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",i=>{i.stopPropagation(),this._rebuildCard(e,t)},{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([dt()],qr.prototype,"hass",void 0),t([ht()],qr.prototype,"_config",void 0),t([dt()],qr.prototype,"_card",void 0),t([ht()],qr.prototype,"_narrow",void 0),qr=t([lt("power-distribution-card")],qr);export{qr as PowerDistributionCard};
